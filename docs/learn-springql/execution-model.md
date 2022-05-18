---
sidebar_position: 4
---

# SpringQL's Execution Model

In this page, you'll learn how a pipeline you defined is executed in SpringQL.
You will get less surprise from SpringQL's behaviors and outputs after understanding the contents of this page.

## SpringQL's architecture

![SpringQL's architecture](/img/docs/learn-springql/execution-model/architecture.drawio.svg)

The above figure shows the system architecture of SpringQL. The control flow to modify a pipeline starts from the SQL submitted from a host application.
The application process dynamically links to the shared library of SpringQL. It calls SpringQL's API with the SQL string parameter.
Then, the SQL is parsed and converted into internal commands by the SQL processor to alter the pipeline.
The SQL executor in the stream engine receives commands and updates its pipeline. It then sends commands to the task executor in the autonomous executor to update the corresponding **task graph**.

## Pipeline and task graph

Here introduces the concept of **task graph** and its relationship between pipelines.
The task graph is at the heart of SpringQL's internal execution.

A task graph is uniquely generated from a pipeline. It is a graph representation for the task executor runtime, whereas a pipeline is for users who write SQLs.

![Pipeline and task graph](/img/docs/learn-springql/execution-model/pipeline-and-task-graph.drawio.svg)

The above figure shows an example of a pipeline and the corresponding task graph. Nodes in a task graph represent tasks, which input and/or output rows. Source readers correspond to **source tasks**, sink writers to **sink tasks**, and pumps to **pump tasks**. Intermediate edges in a task graph are **queues**. Rows are buffered in queues until the downstream tasks pop them as input.

## How task executor works with task graph

The task executor has two important workers:

- **Source worker**: executes source tasks.
- **Generic worker**: executes pump tasks and sink tasks.

Both worker have configurable number of threads to run. By default, the number for both worker is 1.

A source task fetches a foreign record from a foreign source, converts it into a row, and pushes it a downstream queue.
A pump task fetches a row from an upstream queue, executes a SQL statement on it, and pushes the result to downstream queues.
A sink task fetches a row from an upstream queue, converts it into a foreign record format, and writes it to a foreign sink.

If you set the number of threads in the source worker to more than 1, rows coming from source readers can be **out-of-order**, which means an older foreign record may be pushed into a queue after a newer one.

It is also the case for the number of threads in the generic worker. Two or more threads in the generic worker may improve the throughput of a pipeline's stream processing but may lead to nondeterministic outputs from the out-of-order nature.

:::note why SpringQL has source worker and generic worker?

We chose to run source tasks using independent worker threads. They always feed streams from foreign data sources even in the Critical state.
This is to prevent foreign source processes from experiencing high memory usage.

For example, if the source reader is a TCP agent that reads rows from a specific TCP `address:port`, a delay in reading data from the socket connected to the foreign source TCP server may overwhelm the memory of the server or the OS kernel. This results in an OOM (out-of-memory) error, and the server process may die.
Therefore, we decided that SpringQL will take the responsibility of managing memory for source input data.

:::
