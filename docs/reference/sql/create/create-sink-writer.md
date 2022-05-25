---
sidebar_position: 2
---

# CREATE SINK WRITER

Creates a [sink writer](/learn-springql/pipeline/sink-writer).

## Syntax

```sql title="Syntax"
CREATE SINK WRITER <sink_writer_name> FOR <sink_stream_name>
  TYPE <sink_writer_type>
    <OPTIONS (...)>?
```

### Example

```sql title="Example"
CREATE SINK WRITER queue_temperature_fahrenheit FOR sink_temperature_fahrenheit
TYPE IN_MEMORY_QUEUE OPTIONS (
    NAME 'q'
);
```
