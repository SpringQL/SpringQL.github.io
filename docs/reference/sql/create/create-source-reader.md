---
sidebar_position: 1.5
---

# CREATE SOURCE READER

Creates a [source reader](/learn-springql/pipeline/source-reader).

## Syntax

```sql title="Syntax"
CREATE SOURCE READER <source_reader_name> FOR <source_stream_name>
  TYPE <source_reader_type>
    <OPTIONS (...)>?
```

### Example

```sql title="Example
CREATE SOURCE READER tcp_temperature_celsius FOR source_temperature_celsius
TYPE NET_SERVER OPTIONS (
    PROTOCOL 'TCP',
    PORT '54321'
);
```
