---
sidebar_position: 1
---

# Install and Run an App

In this page, you will learn how to install SpringQL in your environment and how to run a demo application written in your favorite language.

SpringQL runs on UNIX-like operating systems, such as Linux and macOS.
You might use Cygwin in Windows but it is currently not supported.

Choose a language you use from the table of contents.

## C

## Rust

Using SpringQL from Rust is the simplest way since SpringQL itself is developed as a Rust crate.

### Prerequisites

- [Rust toolchain](https://rustup.rs/)
- `nc` (netcat) command

**Prerequisite**: You have to install [Rust toolchain](https://rustup.rs/) first.

### Create a bin crate to write a demo

```bash title="Create a bin crate"
cargo new --bin springql-demo
cd springql-demo
```

And then, add `springql-core` to your `Cargo.toml`:

```toml title="Cargo.toml"
...
[dependencies]
springql-core = "*"
```

Finally, fix `main.rs` as below:

```rust title="main.rs"
use springql_core::{high_level_rs::SpringPipelineHL, low_level_rs::SpringConfig};

fn main() {
    // Create a pipeline (dataflow definition in SpringQL).
    let pipeline = SpringPipelineHL::new(&SpringConfig::default()).unwrap();

    // Create a source stream. A stream is similar to a table in relational database.
    // A source stream is a stream to fetch stream data from a foreign source.
    //
    // `ROWTIME` is a keyword to declare that the column represents the event time of a row.
    pipeline
        .command(
            "
            CREATE SOURCE STREAM source_temperature_celsius (
                ts TIMESTAMP NOT NULL ROWTIME,    
                temperature FLOAT NOT NULL
            );
            ",
        )
        .unwrap();

    // Create a sink stream.
    // A sink stream is a final stream in a pipeline. A foreign sink fetches stream rows from it.
    pipeline
        .command(
            "
            CREATE SINK STREAM sink_temperature_fahrenheit (
                ts TIMESTAMP NOT NULL ROWTIME,    
                temperature FLOAT NOT NULL
            );
            ",
        )
        .unwrap();

    // Create a pump to convert Celsius to Fahrenheit.
    // A pump fetches stream rows from a stream, make some conversions to the rows, and emits them to another stream.
    pipeline
        .command(
            "
            CREATE PUMP c_to_f AS
                INSERT INTO sink_temperature_fahrenheit (ts, temperature)
                SELECT STREAM
                    source_temperature_celsius.ts,
                    source_temperature_celsius.temperature * 1.8 + 32.0
                FROM source_temperature_celsius;
            ",
        )
        .unwrap();

    // Create a sink writer as an in-memory queue.
    // A sink writer fetches stream rows from a sink stream, and writes them to various foreign sinks.
    // Here we use an in-memory queue as the foreign sinks to easily get rows from our program written here.
    pipeline
        .command(
            "
            CREATE SINK WRITER queue_temperature_fahrenheit FOR sink_temperature_fahrenheit
            TYPE IN_MEMORY_QUEUE OPTIONS (
                NAME 'q'
            );
            ",
        )
        .unwrap();

    // Create a source reader as a TCP client (connecting to 127.0.0.1:9876).
    // A source reader fetches stream rows from a foreign source, and emits them to a source stream.
    //
    // Dataflow starts soon after this command creates the source reader instance.
    pipeline
        .command(
            "
            CREATE SOURCE READER tcp_trade FOR source_temperature_celsius
            TYPE NET_CLIENT OPTIONS (
                PROTOCOL 'TCP',
                REMOTE_HOST '127.0.0.1',
                REMOTE_PORT '9876'
            );
            ",
        )
        .unwrap();

    while let Ok(row) = pipeline.pop("q") {
        let ts: String = row.get_not_null_by_index(0).unwrap();
        let temperature_fahrenheit: f32 = row.get_not_null_by_index(1).unwrap();
        eprintln!("{}\t{}", ts, temperature_fahrenheit);
    }
}
```

### Run the demo

In your terminal, start a TCP server with `nc` listening to port 9876, who sends 2 JSON records to a client:

```bash title="Running nc server"
echo '{"ts": "2022-01-01 13:00:00.000000000", "temperature": 5.3}\n{"ts": "2022-01-01 14:00:00.000000000", "temperature": 6.2}' | nc -l 9876
```

In another terminal, start the demo app:

```bash title="Running the demo app"
cargo run
```

Then you'll get the following outputs:

```text title="Outputs"
2022-01-01 13:00:00.000000000   41.54
2022-01-01 14:00:00.000000000   43.16
```

**Finished!** You get the temperatures in Celsius translated into Fahrenheit by SpringQL.
