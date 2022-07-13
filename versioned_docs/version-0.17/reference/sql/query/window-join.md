---
sidebar_position: 3
---

# Window join

In this page, you will see how to write window join in SELECT statements.
See [window](/learn-springql/window) to understand the concept around windowing in SpringQL.

Understanding on `[INNER | OUTER] JOIN` in standard SQL is also required, so learn a bit about it before writing SpringQL's queries.

## Inner join

Currently unsupported.

## Outer join

Currently, only left-outer join is supported.

```sql title="Left-outer join"
SELECT STREAM
    <expression> [AS <alias>]source_trade.ts,
    <, ...>*
FROM <stream name>
LEFT OUTER JOIN <stream name>
    ON <expression resulted in BOOLEAN>
[FIXED | SLIDING] WINDOW <time-based width in DURATION>, <allowed latency in DURATION>;
```

```sql title="Example (10-sec fixed window; 1-sec allowed latency)"
SELECT STREAM
    source_trade.ts,
    source_trade.amount,
    source_city_temperature.temperature
FROM source_trade
LEFT OUTER JOIN source_city_temperature
    ON source_trade.ts = source_city_temperature.ts
FIXED WINDOW DURATION_SECS(10), DURATION_SECS(1);
```
