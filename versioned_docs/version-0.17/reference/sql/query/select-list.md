---
sidebar_position: 1
---

# select_list

_select_list_ determines what expressions (column reference, for example) to pass to a downstream.

See also: [expression](./expression).

## Syntax

```sql title="Syntax"
SELECT STREAM <select_list> FROM ...
```

### Example

```sql title="Example"
SELECT
  s.c1,       -- column reference
  s.c1 + 1,   -- expression
  1 + 1,      -- constant expression
  FLOOR(s.c2) -- expression
FROM s
...
```
