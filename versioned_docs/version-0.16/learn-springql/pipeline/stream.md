---
sidebar_position: 1.1
---

# Stream

If you have experienced relational databases, you should know that _tables_ are the core data models, which define types and constraints of columns.

_Streams_ in SpringQL are very similar to tables. They have columns, and columns have types and constraints.
Unlike tables, however, streams do not persist rows. Rows flow through streams and then go to downstream streams (often just called _downstreams_).

Here is an example stream definition in SQL:

```sql title="Stream definition in SQL"
CREATE STREAM s (
    ts TIMESTAMP NOT NULL ROWTIME,    
    c1 INTEGER NOT NULL
);
```

This statements defines stream `s` with two columns: `ts` and `c1`.
`ts` is a `TIMESTAMP` type and should not take NULL value.
`c1` is an `INTEGER` type and also should not take NULL value.

`ts` has `ROWTIME` keyword, which means the column works as an event time (see [Event time and watermark](../event-time-and-watermark)) for rows going through this stream.

See the [Data type](./data-type) page for more information about columns' definition.

## Rowtime, event time, and processing time

Every row in SpringQL has a _rowtime_. A rowtime is either a:

- Event time: when the stream definition includes a `ROWTIME` keyword
- Processing time: otherwise.
  - Processing time is the time when the row is inserted to the stream.

## Source streams and sink streams

SpringQL provides not only "normal" streams, but also _source streams_ and _sink streams_.

Source streams are streams to input foreign data via [source readers](./source-reader), and
sink streams are ones to output foreign data via [sink writers](./sink-writer).

The 3 types of streams are differently defined in SpringQL but currently there are no functional differences.
