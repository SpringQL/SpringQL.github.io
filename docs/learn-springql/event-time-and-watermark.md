---
sidebar_position: 2
---

# Event Time and Watermark

Event time is a timestamp attached to a row. The timestamp can be anything but it is usually the time the row is generated.
A sensor might add a timestamp to a sensor data, and stream processors can use the timestamp as an event time.

Event time is different from the real time (wall-clock time).
Stream processors may input rows from log files that have lines with past timestamps. The past timestamps can be dealt with event times.

Watermark is similar to a clock in event-time world. A watermark usually proceeds when a stream processor observes a row with the latest event time.

Watermark is used to deal with late data. A stream processor may observe `12:09:59` (event time) after `12:10:00`.
Watermark provides a criteria for users of stream processors to decide how to deal with the `12:09:59` row.

We will explain them in the future but currently you can refer to the following materials to get understand them:

- [Streaming 101: The world beyond batch](https://www.oreilly.com/radar/the-world-beyond-batch-streaming-101/)
- [Streaming Systems (book)](https://www.oreilly.com/library/view/streaming-systems/9781491983867/)

## Event time in SpringQL

In SpringQL, you can specify which column to regard as an event time in stream definitions.

```sql title="Defining an event time column"
CREATE STREAM s (
  c1 TIMESTAMP NOT NULL ROWTIME,
  c2 TIMESTAMP NOT NULL
);
```

`c1` is a `TIMESTAMP` type and followed by `ROWTIME` keyword to describe the column is the event time in the stream `s`.
`c2` also has the `TIMESTAMP` type but it is not an event time because it does not have `ROWTIME` keyword.

## Watermark in SpringQL

SpringQL has a watermark for a window. If you create a pump with a `WINDOW` clause, you implicitly create a watermark.

A watermark is locally used in a window to point the current time in event-time.

Currently, SpringQL adopts only a simple way to update a watermark: A watermark is the maximum event time a window observes.

1. A window is generated from `CREATE PUMP ... WINDOW ...;`

   -> Watermark is undefined
2. The window inputs 1st row with `12:00:00` (event time).

   -> Watermark is `12:00:00`

3. The window inputs 2nd row with `12:01:00`.

   -> Watermark is `12:01:00`

4. The window inputs 2nd row with `12:00:30` (late data).

   -> Watermark is still `12:01:00`
