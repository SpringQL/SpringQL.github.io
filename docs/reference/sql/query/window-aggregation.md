---
sidebar_position: 2
---

# Window aggregation

In this page, you will see how to write window aggregations in SELECT statements.

See [window](/learn-springql/window) to understand the concept around windowing in SpringQL.

## Aggregation without grouping

```sql title="Aggregation without grouping"
SELECT STREAM
    <aggregate expression> [AS <alias>] 
    <, ...>*
    AVG(source_trade.amount) AS avg_amount
FROM <stream name>
[FIXED | SLIDING] WINDOW <time-based width in DURATION>, <allowed latency in DURATION>;
```

```sql title="Example (10-sec fixed window; 1-sec allowed latency)"
SELECT STREAM
    AVG(source_trade.amount) AS avg_amount
FROM source_trade
FIXED WINDOW DURATION_SECS(10), DURATION_SECS(1);
```

## Aggregation with grouping

```sql title="Aggregation without grouping"
SELECT STREAM
    [<aggregate expression> | <group-by key>] [AS <alias>] 
    <, ...>*
FROM <stream name>
GROUP BY <group-by key> <, ...>*
[FIXED | SLIDING] WINDOW <time-based width in DURATION>, <allowed latency in DURATION>;
```

```sql title="Example (10-sec fixed window; 0-sec allowed latency)"
SELECT STREAM
    FLOOR_TIME(source_trade.ts, DURATION_SECS(10)) AS min_ts,
    source_trade.ticker AS ticker,
    AVG(source_trade.amount) AS avg_amount
FROM source_trade
GROUP BY min_ts, ticker
FIXED WINDOW DURATION_SECS(10), DURATION_SECS(0);
```
