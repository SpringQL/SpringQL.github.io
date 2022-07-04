---
sidebar_position: 1
---

# INSERT statement

Part of [`CREATE PUMP` statement](../create/create-pump).

Inserts rows into a downstream.

## Syntax

```sql title="Syntax"
INSERT INTO <downstream_name> (<column_name>, ...)
```

### Example

```sql title="Example"
CREATE PUMP ... AS
  INSERT INTO sink_temperature_fahrenheit (ts, temperature)
  SELECT ...
```
