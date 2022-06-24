---
sidebar_position: 1
---

# Pipeline

A pipeline is a dataflow definition in SpringQL.

```mermaid
graph TB
    fsrc(["Foreign source<br>(not a part of SpringQL)"])
    -- "Source reader" -->
    source_stream[["Source stream"]]
    -- "Pump" -->
    stream["Stream"]
    -- "Pump" -->
    sink_stream[["Sink stream"]]
    -- "Sink writer" -->
    fsink(["Foreign sink<br>(not a part of SpringQL)"])
```

A pipeline is represented as a DAG (Directed Acyclic Graph), whose nodes are either of foreign source, foreign sink, or **stream**,
and edges are either of **source reader**, **sink writer**, or **pump**.

In this section, you will learn what conceptually they are and detailed variations of them.
