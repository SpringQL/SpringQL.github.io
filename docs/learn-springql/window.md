---
sidebar_position: 3
---

# Window

Window is one of the most important tools in stream processing. It splits unbounded stream data into bounded ports.
Set operations such as aggregation, sort, and join are only applied to bounded data using windows.

We will explain about windows and related operations in the future but currently you can refer to the following materials to get understand them:

- [Streaming 101: The world beyond batch](https://www.oreilly.com/radar/the-world-beyond-batch-streaming-101/)
- [Streaming 102: The world beyond batch](https://www.oreilly.com/radar/the-world-beyond-batch-streaming-102/)
- [Streaming Systems (book)](https://www.oreilly.com/library/view/streaming-systems/9781491983867/)
- [Windows | Apache Flink](https://nightlies.apache.org/flink/flink-docs-master/docs/dev/datastream/operators/windows/)

## Window in SpringQL

### Window types

Currently, SpringQL supports the follwing window types:

- Event-time-based:
  - fixed window (also called tumbling window)
  - sliding window

Count-based windows, global windows, and session windows are not supported.

### Window pane

You can create 0 or 1 window in a pump. `WINDOW` clause creates a window.

```sql title="10-sec fixed window (event-time-based)"
CREATE PUMP p AS
  INSERT INTO s2 ...
  SELECT ... FROM s1 ...
    FIXED WINDOW DURATION_SECS(10);
```

![Window and panes](/img/docs/learn-springql/window/pane.drawio.svg)

A window has panes inside. A pane works as a bound of rows from unbounded rows.

You do not explicitly write about panes in SpringQL but SpringQL users may want to know about panes to understand windows' behavior.

#### When a pane start at for time-based windows?

Users cannot specify the start time of panes.
For example, a pane in a 10-sec window can start from `12:00:00` but cannot from `12:00:05`.

For 1-sec, 2-sec, 3-sec, 5-sec, ... and 60-sec (factors of 60) time-based windows, you may intuitively list start times.
For 7-sec window, when are the start times?
In the current implementation, `1970-01-01 00:00:00` (origin of unixtime) is used as an origin point. So the start times of 7-sec window panes are: `1970-01-01 00:00:00`, `1970-01-01 00:00:07`, ...

### Triggers

SpringQL currently provides very limited functionality for triggers.

Downstreams of a window pump observe only the result of the window operation. They cannot see any intermediate values before panes (splits of a window) get closed.

## Handling late data in SpringQL

`WINDOW` clauses in SpringQL take "allowed latency" argument.

```sql title="1 sec allowed latency"
CREATE PUMP p AS
  INSERT INTO s2 ...
  SELECT ... FROM s1 ...
    FIXED WINDOW DURATION_SECS(10), DURATION_SECS(1);
```

In the above statement, you create 10-sec fixed window allowing 1-sec late data.
Late data are allowed to get in a window pane only if their latencies are less than 1 second.

![Late data (1)](/img/docs/learn-springql/window/late-data-1.drawio.svg)

^ At first, no pane is created inside the window.

![Late data (2)](/img/docs/learn-springql/window/late-data-2.drawio.svg)

^ The window gets `12:00:00` row. It updates the watermark and `[12:00:00, 12:00:10)` pane is created from the new watermark.

![Late data (3)](/img/docs/learn-springql/window/late-data-3.drawio.svg)

^ `12:00:10` row updates the watermark and creates `[12:00:10, 12:00:20)` pane. The `[12:00:00, 12:00:10)` pane is not closed by the new watermark because the window allows 1-sec latency.

![Late data (4)](/img/docs/learn-springql/window/late-data-4.drawio.svg)

^ `12:00:05` comes after `12:00:10` but it is in-time due to the 1-sec allowed latency. The row does not update the watermark because the timestamp is less than the watermark.

![Late data (5)](/img/docs/learn-springql/window/late-data-5.drawio.svg)

`12:00:11` row updates the watermark and the `[12:00:00, 12:00:10)` pane is closed by the new watermark because the row exceeds the allowed latency of the pane. The new watermark creates `[12:00:11, 12:00:21)` pane.
