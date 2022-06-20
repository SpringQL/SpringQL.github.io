---
sidebar_position: 2
---

# Reading CAN data via CAN source reader

Suppose you are receiving CAN frames from `vcan0`.

```bash title="Example output from vcan0"
% ip link show vcan0
11: vcan0: <NOARP,UP,LOWER_UP> mtu 16 qdisc pfifo_fast state UNKNOWN mode DEFAULT group default qlen 10
    link/can

% candump vcan0
  vcan0  062   [8]  BF 0A 0D 78 C3 46 47 B4
  vcan0  024   [8]  8A 0A 05 78 0B 74 F2 B7
  ...
```

First, you need to create a source stream with the pre-defined columns.

```sql title="Source stream for CAN source"
CREATE SOURCE STREAM source_can (
    can_id UNSIGNED INTEGER NOT NULL,
    can_data BLOB NOT NULL
);
```

Note that the stream name `source_can` is customizable but column definitions for `can_id` and `can_data`, including the column names, must be written as-is.

Then you can connect a CAN source reader to the source stream.

```sql title="CAN source reader"
CREATE SOURCE READER can FOR source_can
    TYPE CAN OPTIONS (
        INTERFACE '{}'
    );
```

You can see a working example in Rust here: <https://github.com/SpringQL/SpringQL/blob/main/springql-core/examples/can_source_reader.rs>.
