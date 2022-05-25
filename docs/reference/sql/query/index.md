---
sidebar_position: 0
---

# SELECT statement

Part of [`CREATE PUMP` statement](../create/create-pump).

Fetches rows from upstreams, and processes the rows.

## Syntax

```sql title="Syntax"
SELECT STREAM
  <select_list>
FROM <stream_name>
     <join_clause>?
<group_by_clause>?
<window_clause>?
```

### Example

```sql title="Example"
SELECT STREAM
    FLOOR_TIME(source_trade.ts, DURATION_SECS(10)) AS min_ts,
    AVG(source_trade.amount) AS avg_amount
FROM source_trade
GROUP BY min_ts
FIXED WINDOW DURATION_SECS(10), DURATION_SECS(0);
```
