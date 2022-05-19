---
sidebar_position: 1
---

# SQL

This section describes the SQL language supported in SpringQL, including Data Definition Language (DDL), Data Manipulation Language (DML) and Query Language.

Currently, SpringQL supports quite limited subset of SQL standard.

## SQL interface

You pass SQLs to SpringQL using the following APIs.

- **Rust**
  - High-level API: [SpringPipelineHL::command()](https://docs.rs/springql-core/latest/springql_core/high_level_rs/index.html#springql-core-high_level_rs-new)
  - Low-level API: [spring_command()](https://docs.rs/springql-core/0.9.0/springql_core/low_level_rs/fn.spring_command.html)
- Other languages
  - `spring_command()`

## SQL execution models

### DDL

We currently support `CREATE` statements for DDL.

`CREATE` statements modify the pipeline to change the dataflow.
It takes effect immediately after the DDL is issued via APIs.

:::tip

`CREATE SOURCE READER` statements should be issued after other `CREATE` statements.

Some source readers may drain data inside foreign sources and the data are just diminished if the downstream pumps and sinks are defined yet.

:::

### DML and query

We currently do not support simple DMLs (such as `INSERT`, `UPDATE`, and `DELETE`) and queries (such as `SELECT`).

However, `CREATE PUMP` statements includes:

- a `SELECT` statement to fetch rows from upstreams and process them.
- an `INSERT` statement to push result rows to downstreams.

While `SELECT` queries in normal relational databases is **executed once** to tables, queries in SpringQL (and other stream processors supporting SQL) are **registered to continuously run**.
The registered queries applied to each input row.

Search _"CQL"_ or _"Continuous Query"_ if you have further interests on it.

### Transactions

We currently do not support transactions.
