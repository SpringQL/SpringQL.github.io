(self.webpackChunkspring_ql=self.webpackChunkspring_ql||[]).push([[675],{6466:function(e,n,t){"use strict";t.r(n),t.d(n,{assets:function(){return g},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var r=t(7462),a=t(3366),i=(t(7294),t(3905)),s=t(3456),p=t(9877),o=t(8215),l=["components"],u={sidebar_position:2},m="Write Basic Apps",c={unversionedId:"get-started/write-basic-apps",id:"get-started/write-basic-apps",title:"Write Basic Apps",description:"You might already succeeded in running a demo app.",source:"@site/docs/get-started/write-basic-apps.mdx",sourceDirName:"get-started",slug:"/get-started/write-basic-apps",permalink:"/get-started/write-basic-apps",editUrl:"https://github.com/SpringQL/SpringQL.github.io/blob/main/docs/get-started/write-basic-apps.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Install and Run an App",permalink:"/get-started/install-and-run-app"},next:{title:"Introduction: Why to Learn Stream Processing?",permalink:"/learn-springql/introduction-why-to-learn-stream-processing"}},g={},d=[{value:"App1: Simple arithmetic conversion over a stream",id:"app1-simple-arithmetic-conversion-over-a-stream",level:2},{value:"App2: Window aggregation",id:"app2-window-aggregation",level:2}],_={toc:d};function h(e){var n=e.components,t=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},_,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"write-basic-apps"},"Write Basic Apps"),(0,i.kt)("p",null,"You might already succeeded in ",(0,i.kt)("a",{parentName:"p",href:"./install-and-run-app"},"running a demo app"),".\nNow let's start writing some basic apps step-by-step."),(0,i.kt)("p",null,"You will learn important ideas in stream processing from the following apps, including ",(0,i.kt)("strong",{parentName:"p"},"event time"),", ",(0,i.kt)("strong",{parentName:"p"},"window"),"-based ",(0,i.kt)("strong",{parentName:"p"},"aggregation")," and ",(0,i.kt)("strong",{parentName:"p"},"join"),"."),(0,i.kt)("h2",{id:"app1-simple-arithmetic-conversion-over-a-stream"},"App1: Simple arithmetic conversion over a stream"),(0,i.kt)("p",null,"Let's start with a very simple pipeline (dataflow in SpringQL), which is quite similar to the demo app you saw in previous page."),(0,i.kt)(s.Mermaid,{config:{},chart:'graph TB\n    fsrc(["TCP client (nc)<br>(Temperature records in Celcius)"]) -- "Source reader (TCP server)" --\x3e src[[source_temperature_celsius]] -- Pump: c_to_f<br>temperature * 1.8 + 32.0 --\x3e sink[[sink_temperature_fahrenheit]] -- "Sink writer (TCP client)" --\x3e fsink(["TCP server (nc)<br>(Temperature records in Fahrenheit)"])',mdxType:"Mermaid"}),(0,i.kt)("p",null,"The above diagram represents the pipeline you will define in the code."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The top-most node is a foreign ",(0,i.kt)("strong",{parentName:"li"},"source"),". A foreign source continuously inputs data into a stream processing application."),(0,i.kt)("li",{parentName:"ul"},"The bottom-most represents a foreign ",(0,i.kt)("strong",{parentName:"li"},"sink"),". A foreign sink continuously gets output from the stream processing application."),(0,i.kt)("li",{parentName:"ul"},"The top square is a source ",(0,i.kt)("strong",{parentName:"li"},"stream")," and the bottom square is a sink stream. A stream is like a table in relational databases, which has a stream name, columns and their data types, and constraints (",(0,i.kt)("inlineCode",{parentName:"li"},"NOT NULL"),", for example)."),(0,i.kt)("li",{parentName:"ul"},"Edges from the foreign source is a source reader, who reads data from a foreign source and translates them into rows for the next source stream.\nSimilarly, edges into the foreign sink is a sink writer, who fetches the rows in the sink stream and writes them into a foreign sink."),(0,i.kt)("li",{parentName:"ul"},"The edge between the source stream and the sink stream is a ",(0,i.kt)("strong",{parentName:"li"},"pump"),". A pump reads rows from an upstream ",(0,i.kt)("em",{parentName:"li"},"stream")," (just called ",(0,i.kt)("em",{parentName:"li"},"upstream"),"), processes the rows into other ones, and writes new rows into a downstream ",(0,i.kt)("em",{parentName:"li"},"stream")," (just called ",(0,i.kt)("em",{parentName:"li"},"downstream"),").")),(0,i.kt)("p",null,"You learned the very basic components to construct SpringQL's pipline. Now is the time to code.\nChoose your favorite language from the tabs:"),(0,i.kt)(p.Z,{mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Cargo.toml"',title:'"Cargo.toml"'},'# ...\n[dependencies]\nspringql-core = "*"\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="main.rs"',title:'"main.rs"'},'use springql_core::{high_level_rs::SpringPipelineHL, low_level_rs::SpringConfig};\n\nfn main() {\n    const SOURCE_PORT: u16 = 54300;\n\n    let pipeline = SpringPipelineHL::new(&SpringConfig::default()).unwrap();\n\n    pipeline\n        .command(\n            "\n            CREATE SOURCE STREAM source_temperature_celsius (\n                ts TIMESTAMP NOT NULL ROWTIME,    \n                temperature FLOAT NOT NULL\n            );\n            ",\n        )\n        .unwrap();\n\n    pipeline\n        .command(\n            "\n            CREATE SINK STREAM sink_temperature_fahrenheit (\n                ts TIMESTAMP NOT NULL ROWTIME,    \n                temperature FLOAT NOT NULL\n            );\n            ",\n        )\n        .unwrap();\n\n    pipeline\n        .command(\n            "\n            CREATE PUMP c_to_f AS\n                INSERT INTO sink_temperature_fahrenheit (ts, temperature)\n                SELECT STREAM\n                    source_temperature_celsius.ts,\n                    32.0 + source_temperature_celsius.temperature * 1.8\n                FROM source_temperature_celsius;\n            ",\n        )\n        .unwrap();\n\n    pipeline\n        .command(\n            "\n            CREATE SINK WRITER queue_temperature_fahrenheit FOR sink_temperature_fahrenheit\n            TYPE IN_MEMORY_QUEUE OPTIONS (\n                NAME \'q\'\n            );\n            ",\n        )\n        .unwrap();\n\n    pipeline\n        .command(format!(\n            "\n            CREATE SOURCE READER tcp_trade FOR source_temperature_celsius\n            TYPE NET_SERVER OPTIONS (\n                PROTOCOL \'TCP\',\n                PORT \'{}\'\n            );\n            ",\n            SOURCE_PORT\n        ))\n        .unwrap();\n\n    eprintln!("waiting JSON records in tcp/{} port...", SOURCE_PORT);\n\n    while let Ok(row) = pipeline.pop("q") {\n        let ts: String = row.get_not_null_by_index(0).unwrap();\n        let temperature_fahrenheit: f32 = row.get_not_null_by_index(1).unwrap();\n        eprintln!("{}\\t{}", ts, temperature_fahrenheit);\n    }\n}\n')),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Also available in ",(0,i.kt)("a",{parentName:"em",href:"https://github.com/SpringQL/SpringQL/blob/main/springql-core/examples/doc_app1.rs"},"GitHub"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Run the app (start app)"',title:'"Run',the:!0,app:!0,"(start":!0,'app)"':!0},"cargo run\n"))),(0,i.kt)(o.Z,{value:"c",label:"C",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="main.c"',title:'"main.c"'},'// Usage:\n//\n// $ ./a.out  # waiting for connection...\n// $ echo \'{"ts": "2022-01-01 13:00:00.000000000", "temperature": 5.3}\' |nc localhost 54300\n\n#include <assert.h>\n#include <string.h>\n#include <stdio.h>\n\n#include <springql.h>\n\nvoid abort_with_report()\n{\n    SpringErrno errno;\n    char errmsg[1024];\n    spring_last_err(&errno, errmsg, 1024);\n    fprintf(stderr, "Error occurred (%d): %s", errno, errmsg);\n    abort();\n}\n\nvoid assert_ok(SpringErrno ret)\n{\n    if (ret != Ok)\n    {\n        abort_with_report();\n    }\n}\n\nvoid assert_not_null(void *p)\n{\n    if (p == NULL)\n    {\n        abort_with_report();\n    }\n}\n\nint main()\n{\n    SpringErrno ret;\n\n    SpringConfig *config = spring_config_default();\n    assert_not_null(config);\n\n    SpringPipeline *pipeline = spring_open(config);\n    assert_not_null(pipeline);\n\n    ret = spring_command(\n        pipeline,\n        "CREATE SOURCE STREAM source_temperature_celsius ("\n        "    ts TIMESTAMP NOT NULL ROWTIME,"\n        "    temperature FLOAT NOT NULL"\n        ");");\n    assert_ok(ret);\n\n    ret = spring_command(\n        pipeline,\n        "CREATE SINK STREAM sink_temperature_fahrenheit ("\n        "    ts TIMESTAMP NOT NULL ROWTIME,"\n        "    temperature FLOAT NOT NULL"\n        ");");\n    assert_ok(ret);\n\n    ret = spring_command(\n        pipeline,\n        "CREATE PUMP c_to_f AS"\n        "    INSERT INTO sink_temperature_fahrenheit (ts, temperature)"\n        "    SELECT STREAM"\n        "       source_temperature_celsius.ts,"\n        "       32.0 + source_temperature_celsius.temperature * 1.8"\n        "    FROM source_temperature_celsius;");\n    assert_ok(ret);\n\n    ret = spring_command(\n        pipeline,\n        "CREATE SINK WRITER queue_temperature_fahrenheit FOR sink_temperature_fahrenheit"\n        "    TYPE IN_MEMORY_QUEUE OPTIONS ("\n        "        NAME \'q\'"\n        "    );");\n    assert_ok(ret);\n\n    ret = spring_command(\n        pipeline,\n        "CREATE SOURCE READER tcp_trade FOR source_temperature_celsius"\n        "    TYPE NET_SERVER OPTIONS ("\n        "        PROTOCOL \'TCP\',"\n        "        PORT \'54300\'"\n        "    );");\n    assert_ok(ret);\n\n    fprintf(stderr, "waiting JSON records in tcp/54300...\\n");\n\n    SpringRow *row;\n    while (1)\n    {\n        row = spring_pop(pipeline, "q");\n        assert_not_null(row);\n\n#define TS_LEN 128\n        const char ts[TS_LEN];\n\n        int r = spring_column_text(row, 0, (char *)ts, TS_LEN);\n        assert((size_t)r == strlen(ts));\n\n        float temperature_fahrenheit;\n        ret = spring_column_float(row, 1, &temperature_fahrenheit);\n        assert_ok(ret);\n\n        fprintf(stderr, "%s\\t%f\\n", ts, temperature_fahrenheit);\n        spring_row_close(row);\n    }\n\n    ret = spring_close(pipeline);\n    assert_ok(ret);\n\n    ret = spring_config_close(config);\n    assert_ok(ret);\n\n    return 0;\n}\n')),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Also available in ",(0,i.kt)("a",{parentName:"em",href:"https://github.com/SpringQL/SpringQL-client-c/blob/main/c_example/doc_app1/doc_app1.c"},"GitHub"),".")),(0,i.kt)("p",null,"To build the app, you need to place ",(0,i.kt)("inlineCode",{parentName:"p"},"springql.h")," into an ",(0,i.kt)("inlineCode",{parentName:"p"},"$INCLUDE_PATH")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"libspringql_client.{so,dylib}")," into ",(0,i.kt)("inlineCode",{parentName:"p"},"LD_LIBRARY_PATH"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Build the app"',title:'"Build',the:!0,'app"':!0},"gcc main.c -lspringql_client\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Run the app (start app)"',title:'"Run',the:!0,app:!0,"(start":!0,'app)"':!0},"./a.out\n")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Run the app (input from foreign source)"',title:'"Run',the:!0,app:!0,"(input":!0,from:!0,foreign:!0,'source)"':!0},'echo \'{"ts": "2022-01-01 13:00:00.000000000", "temperature": 5.3}\' | nc localhost 54300\n')),(0,i.kt)("p",null,"Then, you'll get the following outputs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Output"',title:'"Output"'},"2022-01-01 13:00:00.000000000   41.54\n")),(0,i.kt)("h2",{id:"app2-window-aggregation"},"App2: Window aggregation"),(0,i.kt)("p",null,"Stream data are unbound in nature. Some kind of operations such as simple arithmetic conversion and filtering are naturally applied to each of streaming row."),(0,i.kt)("p",null,"But other types of operations, such as sort, aggregation, and join, are applied to a set of rows.\nHow can you make a set of rows from unbound sequence of rows?\nYou can use ",(0,i.kt)("strong",{parentName:"p"},"windows")," to split unbound rows into bounded amount of rows."))}h.isMDXComponent=!0},1748:function(e,n,t){var r={"./locale":9234,"./locale.js":9234};function a(e){var n=i(e);return t(n)}function i(e){if(!t.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=i,e.exports=a,a.id=1748}}]);