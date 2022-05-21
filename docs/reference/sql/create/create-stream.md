---
sidebar_position: 1.1
---

# CREATE STREAM

Creates a [stream, source stream, or sink stream](/learn-springql/pipeline/stream).

## Syntax

```sql title="Syntax"
CREATE [STREAM | SOURCE STREAM | SINK STREAM] <stream_name> (
  <column_name> <data_type> <column_constraints*>
  , ...
)
```

### Example

```sql title="Example"
CREATE SOURCE STREAM source_temperature_celsius (
    ts TIMESTAMP NOT NULL ROWTIME,    
    temperature FLOAT NOT NULL
)
```
