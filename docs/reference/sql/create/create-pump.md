---
sidebar_position: 5
---

# CREATE PUMP

Creates a [pump](/learn-springql/pipeline/pump).

## Syntax

```sql title="Syntax"
CREATE PUMP <pump_name> AS
  <insert-statement>
  <select-statement>
```

### Example

```sql title="Example"
CREATE PUMP c_to_f AS
    INSERT INTO sink_temperature_fahrenheit (ts, temperature)
    SELECT STREAM
        source_temperature_celsius.ts,
        32.0 + source_temperature_celsius.temperature * 1.8
    FROM source_temperature_celsius;
```

## Column mappings between SELECT and INSERT

The order of _select\_list_ in `SELECT` statement is preserved in the `INSERT` statement's column list.

```sql title="Column mapping"
CREATE PUMP <pump_name> AS
  INSERT INTO <downstream_name> (d1, d2, d3) <insert-statement>
  SELECT u1, u2, u3
    FROM <upstream_name>
    ...
```

In the above example, `u1` is mapped to `d1`, `u2` is mapped to `d2`, and `u3` is mapped to `d3`.

If the number of fields and columns differ between `SELECT` and `INSERT`, it should cause an SQL error.
