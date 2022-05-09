---
sidebar_position: 1
---

# Install and Run an App

In this page, you will learn how to install SpringQL in your environment and how to run a demo application written in your favorite language.

SpringQL runs on UNIX-like operating systems, such as Linux and macOS.
You might use Cygwin in Windows but it is currently not supported.

Choose a language you use from the table of contents.

## Rust

Using SpringQL from Rust is the simplest way since SpringQL itself is developed as a Rust crate.

### Prerequisites

- [Rust toolchain](https://rustup.rs/)
- `nc` (netcat) command

### Create a bin crate to write a demo

```bash title="Create a bin crate"
cargo new --bin springql-demo
cd springql-demo
```

And then, add `springql-core` to your `Cargo.toml`:

```toml title="Cargo.toml"
# ...
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
                    32.0 + source_temperature_celsius.temperature * 1.8
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

    // Create a source reader as a TCP server (listening to tcp/9876).
    // A source reader fetches stream rows from a foreign source, and emits them to a source stream.
    //
    // Dataflow starts soon after this command creates the source reader instance.
    pipeline
        .command(
            "
            CREATE SOURCE READER tcp_trade FOR source_temperature_celsius
            TYPE NET_SERVER OPTIONS (
                PROTOCOL 'TCP',
                PORT '9876'
            );
            ",
        )
        .unwrap();

    // Get a row,
    while let Ok(row) = pipeline.pop("q") {
        // fetch columns,
        let ts: String = row.get_not_null_by_index(0).unwrap();
        let temperature_fahrenheit: f32 = row.get_not_null_by_index(1).unwrap();
        // and print them.
        eprintln!("{}\t{}", ts, temperature_fahrenheit);
    }
}
```

### Run the demo

In your terminal, start the demo app:

```bash title="Running the demo app"
cargo run
```

In another terminal, launch TCP clients with `nc` connecting to port 9876:

```bash title="Running nc clients"
echo '{"ts": "2022-01-01 13:00:00.000000000", "temperature": 5.3}' | nc localhost 9876
echo '{"ts": "2022-01-01 14:00:00.000000000", "temperature": 6.2}' | nc localhost 9876
```

Then you'll get the following outputs:

```text title="Outputs"
2022-01-01 13:00:00.000000000   41.54
2022-01-01 14:00:00.000000000   43.16
```

**Finished!** You get the temperatures in Celsius translated into Fahrenheit by SpringQL.

## C

### Prerequisites

- `gcc` command
- `nc` (netcat) command

### Place the header file and dynamic library

```bash title="Create a directory"
mkdir springql-demo
cd springql-demo
```

Then go to [releases page](https://github.com/SpringQL/SpringQL-client-c/releases) of SpringQL-client-c.
Download the latest version of `springql_client-<your arch & OS>-debug.zip` [^1] and unzip it.

[^1]: See <https://doc.rust-lang.org/nightly/rustc/platform-support.html> to correctly select `<your arch & OS>`.

Then copy the header file and dynamic library to the `springql-demo` directory.

```bash title="Copy header file and dynamic library"
cp /path/to/download/springql_client-<your arch & OS>-debug/* .
```

### Write a demo

Create `main.c` and write the demo code as below:

```c title="main.c"
#include <assert.h>
#include <string.h>
#include <stdio.h>

#include "springql.h"

void abort_with_report()
{
    SpringErrno errno;
    char errmsg[1024];
    spring_last_err(&errno, errmsg, 1024);
    fprintf(stderr, "Error occurred (%d): %s", errno, errmsg);
    abort();
}

void assert_ok(SpringErrno ret)
{
    if (ret != Ok)
    {
        abort_with_report();
    }
}

void assert_not_null(void *p)
{
    if (p == NULL)
    {
        abort_with_report();
    }
}

int main()
{
    SpringErrno ret;

    SpringConfig *config = spring_config_default();
    assert_not_null(config);

    // Create a pipeline (dataflow definition in SpringQL).
    SpringPipeline *pipeline = spring_open(config);
    assert_not_null(pipeline);

    // Create a source stream. A stream is similar to a table in relational database.
    // A source stream is a stream to fetch stream data from a foreign source.
    //
    // `ROWTIME` is a keyword to declare that the column represents the event time of a row.
    ret = spring_command(
        pipeline,
        "CREATE SOURCE STREAM source_temperature_celsius ("
        "    ts TIMESTAMP NOT NULL ROWTIME,"
        "    temperature FLOAT NOT NULL"
        ");");
    assert_ok(ret);

    // Create a sink stream.
    // A sink stream is a final stream in a pipeline. A foreign sink fetches stream rows from it.
    ret = spring_command(
        pipeline,
        "CREATE SINK STREAM sink_temperature_fahrenheit ("
        "    ts TIMESTAMP NOT NULL ROWTIME,"
        "    temperature FLOAT NOT NULL"
        ");");
    assert_ok(ret);

    // Create a pump to convert Celsius to Fahrenheit.
    // A pump fetches stream rows from a stream, make some conversions to the rows, and emits them to another stream.
    ret = spring_command(
        pipeline,
        "CREATE PUMP c_to_f AS"
        "    INSERT INTO sink_temperature_fahrenheit (ts, temperature)"
        "    SELECT STREAM"
        "       source_temperature_celsius.ts,"
        "       32.0 + source_temperature_celsius.temperature * 1.8"
        "    FROM source_temperature_celsius;");
    assert_ok(ret);

    // Create a sink writer as an in-memory queue.
    // A sink writer fetches stream rows from a sink stream, and writes them to various foreign sinks.
    // Here we use an in-memory queue as the foreign sinks to easily get rows from our program written here.
    ret = spring_command(
        pipeline,
        "CREATE SINK WRITER queue_temperature_fahrenheit FOR sink_temperature_fahrenheit"
        "    TYPE IN_MEMORY_QUEUE OPTIONS ("
        "        NAME 'q'"
        "    );");
    assert_ok(ret);

    // Create a source reader as a TCP server (listening to tcp/9876).
    // A source reader fetches stream rows from a foreign source, and emits them to a source stream.
    //
    // Dataflow starts soon after this command creates the source reader instance.
    ret = spring_command(
        pipeline,
        "CREATE SOURCE READER tcp_trade FOR source_temperature_celsius"
        "    TYPE NET_SERVER OPTIONS ("
        "        PROTOCOL 'TCP',"
        "        PORT '9876'"
        "    );");
    assert_ok(ret);

    SpringRow *row;
    while (1)
    {
        // Get a row,
        row = spring_pop(pipeline, "q");
        assert_not_null(row);

        // fetch columns,
        const int ts_len = 128;
        const char ts[ts_len];

        int r = spring_column_text(row, 0, (char *)ts, ts_len);
        assert(r == strlen(ts));

        float temperature_fahrenheit;
        ret = spring_column_float(row, 1, &temperature_fahrenheit);
        assert_ok(ret);

        // and print them.
        fprintf(stderr, "%s\t%f\n", ts, temperature_fahrenheit);

        // Free the row
        spring_row_close(row);
    }

    // Free the remaining resources
    ret = spring_close(pipeline);
    assert_ok(ret);

    ret = spring_config_close(config);
    assert_ok(ret);

    return 0;
}
```

### Build the demo

You need to link to the `libspringql_client` in build-time.

```bash title="Build the demo"
gcc main.c -lspringql_client -L.
```

Then, you'll get `a.out` as a runnable binary.

### Run the demo

In your terminal, start the demo app.
You also need to link to the `libspringql_client` in run-time.

```bash title="Run the demo (Linux)"
LD_LIBRARY_PATH=. ./a.out
```

```bash title="Run the demo (macOS)"
DYLD_LIBRARY_PATH=. ./a.out
```

In another terminal, launch TCP clients with `nc` connecting to port 9876:

```bash title="Running nc clients"
echo '{"ts": "2022-01-01 13:00:00.000000000", "temperature": 5.3}' | nc localhost 9876
echo '{"ts": "2022-01-01 14:00:00.000000000", "temperature": 6.2}' | nc localhost 9876
```

Then you'll get the following outputs:

```text title="Outputs"
2022-01-01 13:00:00.000000000   41.54
2022-01-01 14:00:00.000000000   43.16
```

**Finished!** You get the temperatures in Celsius translated into Fahrenheit by SpringQL.
