(self.webpackChunkspring_ql=self.webpackChunkspring_ql||[]).push([[8802],{85162:function(n,e,t){"use strict";t.d(e,{Z:function(){return s}});var a=t(67294),r=t(34334),o="tabItem_Ymn6";function s(n){var e=n.children,t=n.hidden,s=n.className;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(o,s),hidden:t},e)}},65488:function(n,e,t){"use strict";t.d(e,{Z:function(){return _}});var a=t(83117),r=t(67294),o=t(34334),s=t(72389),i=t(67392),l=t(7094),p=t(12466),u="tabList__CuJ",m="tabItem_LNqP";function c(n){var e,t,s=n.lazy,c=n.block,_=n.defaultValue,d=n.values,g=n.groupId,h=n.className,b=r.Children.map(n.children,(function(n){if((0,r.isValidElement)(n)&&"value"in n.props)return n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof n.type?n.type:n.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),T=null!=d?d:b.map((function(n){var e=n.props;return{value:e.value,label:e.label,attributes:e.attributes}})),f=(0,i.l)(T,(function(n,e){return n.value===e.value}));if(f.length>0)throw new Error('Docusaurus error: Duplicate values "'+f.map((function(n){return n.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var E=null===_?_:null!=(e=null!=_?_:null==(t=b.find((function(n){return n.props.default})))?void 0:t.props.value)?e:b[0].props.value;if(null!==E&&!T.some((function(n){return n.value===E})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+E+'" but none of its children has the corresponding value. Available values are: '+T.map((function(n){return n.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,l.U)(),N=w.tabGroupChoices,k=w.setTabGroupChoices,O=(0,r.useState)(E),S=O[0],v=O[1],R=[],y=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var L=N[g];null!=L&&L!==S&&T.some((function(n){return n.value===L}))&&v(L)}var A=function(n){var e=n.currentTarget,t=R.indexOf(e),a=T[t].value;a!==S&&(y(e),v(a),null!=g&&k(g,String(a)))},C=function(n){var e,t=null;switch(n.key){case"ArrowRight":var a,r=R.indexOf(n.currentTarget)+1;t=null!=(a=R[r])?a:R[0];break;case"ArrowLeft":var o,s=R.indexOf(n.currentTarget)-1;t=null!=(o=R[s])?o:R[R.length-1]}null==(e=t)||e.focus()};return r.createElement("div",{className:(0,o.Z)("tabs-container",u)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},h)},T.map((function(n){var e=n.value,t=n.label,s=n.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:S===e?0:-1,"aria-selected":S===e,key:e,ref:function(n){return R.push(n)},onKeyDown:C,onFocus:A,onClick:A},s,{className:(0,o.Z)("tabs__item",m,null==s?void 0:s.className,{"tabs__item--active":S===e})}),null!=t?t:e)}))),s?(0,r.cloneElement)(b.filter((function(n){return n.props.value===S}))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map((function(n,e){return(0,r.cloneElement)(n,{key:e,hidden:n.props.value!==S})}))))}function _(n){var e=(0,s.Z)();return r.createElement(c,(0,a.Z)({key:String(e)},n))}},84925:function(n,e,t){"use strict";t.r(e),t.d(e,{assets:function(){return _},contentTitle:function(){return m},default:function(){return h},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return d}});var a=t(83117),r=t(80102),o=(t(67294),t(3905)),s=t(93456),i=t(65488),l=t(85162),p=["components"],u={sidebar_position:2},m="Write Basic Apps",c={unversionedId:"get-started/write-basic-apps",id:"version-0.14/get-started/write-basic-apps",title:"Write Basic Apps",description:"You might already succeeded in running a demo app.",source:"@site/versioned_docs/version-0.14/get-started/write-basic-apps.mdx",sourceDirName:"get-started",slug:"/get-started/write-basic-apps",permalink:"/0.14/get-started/write-basic-apps",draft:!1,editUrl:"https://github.com/SpringQL/SpringQL.github.io/blob/main/versioned_docs/version-0.14/get-started/write-basic-apps.mdx",tags:[],version:"0.14",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Install and Run an App",permalink:"/0.14/get-started/install-and-run-app"},next:{title:"Introduction: Why to Learn Stream Processing?",permalink:"/0.14/learn-springql/"}},_={},d=[{value:"App1: Simple arithmetic conversion over a stream",id:"app1-simple-arithmetic-conversion-over-a-stream",level:2},{value:"App2: Window aggregation",id:"app2-window-aggregation",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}],g={toc:d};function h(n){var e=n.components,u=(0,r.Z)(n,p);return(0,o.kt)("wrapper",(0,a.Z)({},g,u,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"write-basic-apps"},"Write Basic Apps"),(0,o.kt)("p",null,"You might already succeeded in ",(0,o.kt)("a",{parentName:"p",href:"./install-and-run-app"},"running a demo app"),".\nNow let's start writing some basic apps step-by-step."),(0,o.kt)("p",null,"You will learn important ideas in stream processing from the following apps, including ",(0,o.kt)("strong",{parentName:"p"},"event time"),", ",(0,o.kt)("strong",{parentName:"p"},"window"),"-based ",(0,o.kt)("strong",{parentName:"p"},"aggregation")," and ",(0,o.kt)("strong",{parentName:"p"},"join"),"."),(0,o.kt)("h2",{id:"app1-simple-arithmetic-conversion-over-a-stream"},"App1: Simple arithmetic conversion over a stream"),(0,o.kt)("p",null,"Let's start with a very simple pipeline (dataflow in SpringQL), which is quite similar to the demo app you saw in previous page."),(0,o.kt)(s.Mermaid,{config:{},chart:'graph TB\n    fsrc(["TCP client (nc)<br>(Temperature records in Celcius)"]) -- "Source reader (TCP server)" --\x3e\n    src[[source_temperature_celsius]] -- Pump: c_to_f<br>temperature * 1.8 + 32.0 --\x3e\n    sink[[sink_temperature_fahrenheit]] -- "Sink writer (in-memory queue)" --\x3e\n    fsink(["In-memory queue<br>(Temperature records in Fahrenheit)"])',mdxType:"Mermaid"}),(0,o.kt)("p",null,"The above diagram represents the pipeline you will define in the code."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The top-most node is a foreign ",(0,o.kt)("strong",{parentName:"li"},"source"),". A foreign source continuously inputs data into a stream processing application."),(0,o.kt)("li",{parentName:"ul"},"The bottom-most represents a foreign ",(0,o.kt)("strong",{parentName:"li"},"sink"),". A foreign sink continuously gets output from the stream processing application."),(0,o.kt)("li",{parentName:"ul"},"The top square is a source ",(0,o.kt)("strong",{parentName:"li"},"stream")," and the bottom square is a sink stream. A stream is like a table in relational databases, which has a stream name, columns and their data types, and constraints (",(0,o.kt)("inlineCode",{parentName:"li"},"NOT NULL"),", for example)."),(0,o.kt)("li",{parentName:"ul"},"Edges from the foreign source is a source reader, who reads data from a foreign source and translates them into rows for the next source stream.\nSimilarly, edges into the foreign sink is a sink writer, who fetches the rows in the sink stream and writes them into a foreign sink."),(0,o.kt)("li",{parentName:"ul"},"The edge between the source stream and the sink stream is a ",(0,o.kt)("strong",{parentName:"li"},"pump"),". A pump reads rows from an upstream ",(0,o.kt)("em",{parentName:"li"},"stream")," (just called ",(0,o.kt)("em",{parentName:"li"},"upstream"),"), processes the rows into other ones, and writes new rows into a downstream ",(0,o.kt)("em",{parentName:"li"},"stream")," (just called ",(0,o.kt)("em",{parentName:"li"},"downstream"),").")),(0,o.kt)("p",null,"You learned the very basic components to construct SpringQL's pipline. Now is the time to code.\nChoose your favorite language from the tabs:"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Cargo.toml"',title:'"Cargo.toml"'},'# ...\n[dependencies]\nspringql-core = "*"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="main.rs"',title:'"main.rs"'},'use springql::{SpringPipeline, SpringConfig};\n\nfn main() {\n    const SOURCE_PORT: u16 = 54300;\n\n    let pipeline = SpringPipeline::new(&SpringConfig::default()).unwrap();\n\n    pipeline\n        .command(\n            "\n            CREATE SOURCE STREAM source_temperature_celsius (\n                ts TIMESTAMP NOT NULL ROWTIME,    \n                temperature FLOAT NOT NULL\n            );\n            ",\n        )\n        .unwrap();\n\n    pipeline\n        .command(\n            "\n            CREATE SINK STREAM sink_temperature_fahrenheit (\n                ts TIMESTAMP NOT NULL ROWTIME,    \n                temperature FLOAT NOT NULL\n            );\n            ",\n        )\n        .unwrap();\n\n    pipeline\n        .command(\n            "\n            CREATE PUMP c_to_f AS\n                INSERT INTO sink_temperature_fahrenheit (ts, temperature)\n                SELECT STREAM\n                    source_temperature_celsius.ts,\n                    32.0 + source_temperature_celsius.temperature * 1.8\n                FROM source_temperature_celsius;\n            ",\n        )\n        .unwrap();\n\n    pipeline\n        .command(\n            "\n            CREATE SINK WRITER queue_temperature_fahrenheit FOR sink_temperature_fahrenheit\n            TYPE IN_MEMORY_QUEUE OPTIONS (\n                NAME \'q\'\n            );\n            ",\n        )\n        .unwrap();\n\n    pipeline\n        .command(format!(\n            "\n            CREATE SOURCE READER tcp_temperature_celsius FOR source_temperature_celsius\n            TYPE NET_SERVER OPTIONS (\n                PROTOCOL \'TCP\',\n                PORT \'{}\'\n            );\n            ",\n            SOURCE_PORT\n        ))\n        .unwrap();\n\n    eprintln!("waiting JSON records in tcp/{} port...", SOURCE_PORT);\n\n    while let Ok(row) = pipeline.pop("q") {\n        let ts: String = row.get_not_null_by_index(0).unwrap();\n        let temperature_fahrenheit: f32 = row.get_not_null_by_index(1).unwrap();\n        eprintln!("{}\\t{}", ts, temperature_fahrenheit);\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Also available in ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/SpringQL/SpringQL/blob/main/springql-core/examples/doc_app1.rs"},"GitHub"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Run the app (start app)"',title:'"Run',the:!0,app:!0,"(start":!0,'app)"':!0},"cargo run\n"))),(0,o.kt)(l.Z,{value:"c",label:"C",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="main.c"',title:'"main.c"'},'// Usage:\n//\n// $ ./a.out  # waiting for connection...\n// $ echo \'{"ts": "2022-01-01 13:00:00.000000000", "temperature": 5.3}\' |nc localhost 54300\n\n#include <assert.h>\n#include <string.h>\n#include <stdio.h>\n\n#include <springql.h>\n\nvoid abort_with_report()\n{\n    SpringErrno errno_;\n    char errmsg[1024];\n    spring_last_err(&errno_, errmsg, 1024);\n    fprintf(stderr, "Error occurred (%d): %s", errno_, errmsg);\n    abort();\n}\n\nvoid assert_ok(SpringErrno ret)\n{\n    if (ret != Ok)\n    {\n        abort_with_report();\n    }\n}\n\nvoid assert_not_null(void *p)\n{\n    if (p == NULL)\n    {\n        abort_with_report();\n    }\n}\n\nint main()\n{\n    SpringErrno ret;\n\n    SpringConfig *config = spring_config_default();\n    assert_not_null(config);\n\n    SpringPipeline *pipeline = spring_open(config);\n    assert_not_null(pipeline);\n\n    ret = spring_command(\n        pipeline,\n        "CREATE SOURCE STREAM source_temperature_celsius ("\n        "    ts TIMESTAMP NOT NULL ROWTIME,"\n        "    temperature FLOAT NOT NULL"\n        ");");\n    assert_ok(ret);\n\n    ret = spring_command(\n        pipeline,\n        "CREATE SINK STREAM sink_temperature_fahrenheit ("\n        "    ts TIMESTAMP NOT NULL ROWTIME,"\n        "    temperature FLOAT NOT NULL"\n        ");");\n    assert_ok(ret);\n\n    ret = spring_command(\n        pipeline,\n        "CREATE PUMP c_to_f AS"\n        "    INSERT INTO sink_temperature_fahrenheit (ts, temperature)"\n        "    SELECT STREAM"\n        "       source_temperature_celsius.ts,"\n        "       32.0 + source_temperature_celsius.temperature * 1.8"\n        "    FROM source_temperature_celsius;");\n    assert_ok(ret);\n\n    ret = spring_command(\n        pipeline,\n        "CREATE SINK WRITER queue_temperature_fahrenheit FOR sink_temperature_fahrenheit"\n        "    TYPE IN_MEMORY_QUEUE OPTIONS ("\n        "        NAME \'q\'"\n        "    );");\n    assert_ok(ret);\n\n    ret = spring_command(\n        pipeline,\n        "CREATE SOURCE READER tcp_temperature_celsius FOR source_temperature_celsius"\n        "    TYPE NET_SERVER OPTIONS ("\n        "        PROTOCOL \'TCP\',"\n        "        PORT \'54300\'"\n        "    );");\n    assert_ok(ret);\n\n    fprintf(stderr, "waiting JSON records in tcp/54300...\\n");\n\n    SpringSinkRow *row;\n    while (1)\n    {\n        row = spring_pop(pipeline, "q");\n        assert_not_null(row);\n\n#define TS_LEN 128\n        const char ts[TS_LEN];\n\n        int r = spring_column_text(row, 0, (char *)ts, TS_LEN);\n        assert((size_t)r == strlen(ts));\n\n        float temperature_fahrenheit;\n        ret = spring_column_float(row, 1, &temperature_fahrenheit);\n        assert_ok(ret);\n\n        fprintf(stderr, "%s\\t%f\\n", ts, temperature_fahrenheit);\n        spring_sink_row_close(row);\n    }\n\n    ret = spring_close(pipeline);\n    assert_ok(ret);\n\n    ret = spring_config_close(config);\n    assert_ok(ret);\n\n    return 0;\n}\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Also available in ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/SpringQL/SpringQL-client-c/blob/main/c_example/doc_app1/doc_app1.c"},"GitHub"),".")),(0,o.kt)("p",null,"To build the app, you need to place ",(0,o.kt)("inlineCode",{parentName:"p"},"springql.h")," into an ",(0,o.kt)("inlineCode",{parentName:"p"},"$INCLUDE_PATH")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"libspringql_client.{so,dylib}")," into ",(0,o.kt)("inlineCode",{parentName:"p"},"LD_LIBRARY_PATH"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Build the app"',title:'"Build',the:!0,'app"':!0},"gcc main.c -lspringql_client\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Run the app (start app)"',title:'"Run',the:!0,app:!0,"(start":!0,'app)"':!0},"./a.out\n")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Run the app (input from foreign source)"',title:'"Run',the:!0,app:!0,"(input":!0,from:!0,foreign:!0,'source)"':!0},'echo \'{"ts": "2022-01-01 13:00:00.000000000", "temperature": 5.3}\' | nc localhost 54300\n')),(0,o.kt)("p",null,"Then, you'll get the following outputs:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Output"',title:'"Output"'},"2022-01-01 13:00:00.000000000   41.54\n")),(0,o.kt)("h2",{id:"app2-window-aggregation"},"App2: Window aggregation"),(0,o.kt)("p",null,"Stream data are unbounded in nature. Some kind of operations such as simple arithmetic conversion and filtering are naturally applied to each of streaming row."),(0,o.kt)("p",null,"But other types of operations, such as sort, aggregation, and join, are applied to a set of rows.\nHow can you make a set of rows from unbounded sequence of rows?\nYou can use ",(0,o.kt)("strong",{parentName:"p"},"windows")," to split unbounded rows into bounded amount of rows."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Stream data and windows",src:t(26396).Z,width:"786",height:"151"})),(0,o.kt)("p",null,"In the figure above, you see a stream data includes (conceptually) unbouded number of records.\nAlso, you see there are three windows, each having 2, 1, and 1 records.\nInside a window, the number of records is bounded. So you can apply set operations like sort, aggregation, and join within the window."),(0,o.kt)("p",null,"Here we start a new app! This app feeds stock trade records and calculates average stock amount within windows."),(0,o.kt)(s.Mermaid,{chart:'graph TB\n    fsrc(["TCP client (nc)<br>(Trade records)"]) -- "Source reader (TCP server)" --\x3e\n\n    src[[source_trade]] -- "Pump: avg_all<br>AVG(amount)<br>(10 sec window)" --\x3e\n    sink_all[[sink_avg_all]] -- "Sink writer (in-memory queue)" --\x3e\n    fsink_all(["In-memory queue<br>(Average stock amount for all stocks)"])\n\n    src[[source_trade]] -- "Pump: avg_by_symbol<br>AVG(amount) GROUP BY symbol<br>(2 sec window)" --\x3e\n    sink_avg_by_stock[[sink_avg_by_symbol]] -- "Sink writer (in-memory queue)" --\x3e\n    fsink_by_stock(["In-memory queue<br>(Average stock amount for each stock)"])',mdxType:"Mermaid"}),(0,o.kt)("p",null,"The pipeline is split into 2 dataflows from the ",(0,o.kt)("inlineCode",{parentName:"p"},"source_trade")," source stream.\nThe left pump calculates the average amount of stocks ordered per 10 seconds. The right pump calculates the average amount of distinct stocks ordered per 2 seconds."),(0,o.kt)("p",null,"So the output records from the left will be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Pseudo output (avg_all)"',title:'"Pseudo',output:!0,'(avg_all)"':!0},'{"ts": "2022-01-01 13:00:00", "avg_amount": 25.0}\n{"ts": "2022-01-01 13:10:00", "avg_amount": 30.0}\n{"ts": "2022-01-01 13:20:00", "avg_amount": 20.0}\n')),(0,o.kt)("p",null,"and the right will be:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Pseudo output (avg_by_symbol)"',title:'"Pseudo',output:!0,'(avg_by_symbol)"':!0},'{"ts": "2022-01-01 13:00:00", "symbol": "ORCL", "avg_amount": 50.0}\n{"ts": "2022-01-01 13:00:00", "symbol": "GOOGL", "avg_amount": 70.0}\n{"ts": "2022-01-01 13:02:00", "symbol": "ORCL", "avg_amount": 53.0}\n{"ts": "2022-01-01 13:02:00", "symbol": "GOOGL", "avg_amount": 67.0}\n')),(0,o.kt)("p",null,"Are you ready? Let's write the pipeline."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"rust",label:"Rust",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Cargo.toml"',title:'"Cargo.toml"'},'# ...\n[dependencies]\nspringql-core = "*"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="main.rs"',title:'"main.rs"'},'//! Demo application in <https://springql.github.io/get-started/write-basic-apps/#app2-window-aggregation>.\n//!\n//! Usage:\n//!\n//! ```bash\n//! cargo run --example doc_app2\n//! ```\n//!\n//! ```bash\n//! echo \'{"ts": "2022-01-01 13:00:00.000000000", "symbol": "ORCL", "amount": 10}\' |nc localhost 54300\n//! echo \'{"ts": "2022-01-01 13:00:01.000000000", "symbol": "ORCL", "amount": 30}\' |nc localhost 54300\n//! echo \'{"ts": "2022-01-01 13:00:01.000000000", "symbol": "GOOGL", "amount": 50}\' |nc localhost 54300\n//! echo \'{"ts": "2022-01-01 13:00:02.000000000", "symbol": "ORCL", "amount": 40}\' |nc localhost 54300\n//! echo \'{"ts": "2022-01-01 13:00:05.000000000", "symbol": "GOOGL", "amount": 60}\' |nc localhost 54300\n//! echo \'{"ts": "2022-01-01 13:00:10.000000000", "symbol": "APPL", "amount": 100}\' |nc localhost 54300\n//! ```\n\nuse std::{sync::Arc, thread, time::Duration};\n\nuse springql::{SpringPipeline, SpringConfig};\n\nfn main() {\n    const SOURCE_PORT: u16 = 54300;\n\n    // Using Arc to share the reference between threads feeding sink rows.\n    let pipeline = Arc::new(SpringPipeline::new(&SpringConfig::default()).unwrap());\n\n    pipeline\n        .command(\n            "\n            CREATE SOURCE STREAM source_trade (\n                ts TIMESTAMP NOT NULL ROWTIME,    \n                symbol TEXT NOT NULL,\n                amount INTEGER NOT NULL\n            );\n            ",\n        )\n        .unwrap();\n\n    pipeline\n        .command(\n            "\n            CREATE SINK STREAM sink_avg_all (\n                ts TIMESTAMP NOT NULL ROWTIME,    \n                avg_amount FLOAT NOT NULL\n            );\n            ",\n        )\n        .unwrap();\n\n    pipeline\n        .command(\n            "\n            CREATE SINK STREAM sink_avg_by_symbol (\n                ts TIMESTAMP NOT NULL ROWTIME,    \n                symbol TEXT NOT NULL,\n                avg_amount FLOAT NOT NULL\n            );\n            ",\n        )\n        .unwrap();\n\n    // Creates windows per 10 seconds ([:00, :10), [:10, :20), ...),\n    // and calculate the average amount over the rows inside each window.\n    //\n    // Second parameter `DURATION_SECS(0)` means allowed latency for late data. You can ignore here.\n    pipeline\n        .command(\n            "\n            CREATE PUMP avg_all AS\n                INSERT INTO sink_avg_all (ts, avg_amount)\n                SELECT STREAM\n                    FLOOR_TIME(source_trade.ts, DURATION_SECS(10)) AS min_ts,\n                    AVG(source_trade.amount) AS avg_amount\n                FROM source_trade\n                GROUP BY min_ts\n                FIXED WINDOW DURATION_SECS(10), DURATION_SECS(0);\n            ",\n        )\n        .unwrap();\n\n    // Creates windows per 2 seconds ([:00, :02), [:02, :04), ...),\n    // and then group the rows inside each window having the same symbol.\n    // Calculate the average amount for each group.\n    pipeline\n        .command(\n            "\n            CREATE PUMP avg_by_symbol AS\n                INSERT INTO sink_avg_by_symbol (ts, symbol, avg_amount)\n                SELECT STREAM\n                    FLOOR_TIME(source_trade.ts, DURATION_SECS(2)) AS min_ts,\n                    source_trade.symbol AS symbol,\n                    AVG(source_trade.amount) AS avg_amount\n                FROM source_trade\n                GROUP BY min_ts, symbol\n                FIXED WINDOW DURATION_SECS(2), DURATION_SECS(0);\n            ",\n        )\n        .unwrap();\n\n    pipeline\n        .command(\n            "\n            CREATE SINK WRITER queue_avg_all FOR sink_avg_all\n            TYPE IN_MEMORY_QUEUE OPTIONS (\n                NAME \'q_avg_all\'\n            );\n            ",\n        )\n        .unwrap();\n\n    pipeline\n        .command(\n            "\n            CREATE SINK WRITER queue_avg_by_symbol FOR sink_avg_by_symbol\n            TYPE IN_MEMORY_QUEUE OPTIONS (\n                NAME \'q_avg_by_symbol\'\n            );\n            ",\n        )\n        .unwrap();\n\n    pipeline\n        .command(format!(\n            "\n            CREATE SOURCE READER tcp_trade FOR source_trade\n            TYPE NET_SERVER OPTIONS (\n                PROTOCOL \'TCP\',\n                PORT \'{}\'\n            );\n            ",\n            SOURCE_PORT\n        ))\n        .unwrap();\n\n    eprintln!("waiting JSON records in tcp/{} port...", SOURCE_PORT);\n\n    loop {\n        // Fetching rows from q_avg_all.\n        if let Some(row) = pipeline.pop_non_blocking("q_avg_all").unwrap() {\n            let ts: String = row.get_not_null_by_index(0).unwrap();\n            let avg_amount: f32 = row.get_not_null_by_index(1).unwrap();\n            eprintln!("[q_avg_all] {}\\t{}", ts, avg_amount);\n        }\n\n        // Fetching rows from q_avg_by_symbol.\n        if let Some(row) = pipeline.pop_non_blocking("q_avg_by_symbol").unwrap() {\n            let ts: String = row.get_not_null_by_index(0).unwrap();\n            let symbol: String = row.get_not_null_by_index(1).unwrap();\n            let avg_amount: f32 = row.get_not_null_by_index(2).unwrap();\n            eprintln!("[q_avg_by_symbol] {}\\t{}\\t{}", ts, symbol, avg_amount);\n        }\n\n        // Avoid busy loop\n        thread::sleep(Duration::from_millis(10))\n    }\n}\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Also available in ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/SpringQL/SpringQL/blob/main/springql-core/examples/doc_app2.rs"},"GitHub"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Run the app (start app)"',title:'"Run',the:!0,app:!0,"(start":!0,'app)"':!0},"cargo run\n"))),(0,o.kt)(l.Z,{value:"c",label:"C",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="main.c"',title:'"main.c"'},'// Usage:\n//\n// $ ./a.out  # waiting for connection...\n// $ echo \'{"ts": "2022-01-01 13:00:00.000000000", "symbol": "ORCL", "amount": 10}\' |nc localhost 54300\n// $ echo \'{"ts": "2022-01-01 13:00:01.000000000", "symbol": "ORCL", "amount": 30}\' |nc localhost 54300\n// $ echo \'{"ts": "2022-01-01 13:00:01.000000000", "symbol": "GOOGL", "amount": 50}\' |nc localhost 54300\n// $ echo \'{"ts": "2022-01-01 13:00:02.000000000", "symbol": "ORCL", "amount": 40}\' |nc localhost 54300\n// $ echo \'{"ts": "2022-01-01 13:00:05.000000000", "symbol": "GOOGL", "amount": 60}\' |nc localhost 54300\n// $ echo \'{"ts": "2022-01-01 13:00:10.000000000", "symbol": "APPL", "amount": 100}\' |nc localhost 54300\n\n#include <assert.h>\n#include <string.h>\n#include <stdio.h>\n#include <unistd.h>\n\n#include <springql.h>\n\nvoid abort_with_report()\n{\n    SpringErrno errno_;\n    char errmsg[1024];\n    spring_last_err(&errno_, errmsg, 1024);\n    fprintf(stderr, "Error occurred (%d): %s", errno_, errmsg);\n    abort();\n}\n\nvoid assert_ok(SpringErrno ret)\n{\n    if (ret != Ok)\n    {\n        abort_with_report();\n    }\n}\n\nvoid assert_not_null(void *p)\n{\n    if (p == NULL)\n    {\n        abort_with_report();\n    }\n}\n\nint main()\n{\n    SpringErrno ret;\n\n    SpringConfig *config = spring_config_default();\n    assert_not_null(config);\n\n    SpringPipeline *pipeline = spring_open(config);\n    assert_not_null(pipeline);\n\n    ret = spring_command(\n        pipeline,\n        "CREATE SOURCE STREAM source_trade ("\n        "    ts TIMESTAMP NOT NULL ROWTIME,"\n        "    symbol TEXT NOT NULL,"\n        "    amount INTEGER NOT NULL"\n        ");");\n    assert_ok(ret);\n\n    ret = spring_command(\n        pipeline,\n        "CREATE SINK STREAM sink_avg_all ("\n        "    ts TIMESTAMP NOT NULL ROWTIME,"\n        "    avg_amount FLOAT NOT NULL"\n        ");");\n    assert_ok(ret);\n\n    ret = spring_command(\n        pipeline,\n        "CREATE SINK STREAM sink_avg_by_symbol ("\n        "    ts TIMESTAMP NOT NULL ROWTIME,"\n        "    symbol TEXT NOT NULL,"\n        "    avg_amount FLOAT NOT NULL"\n        ");");\n    assert_ok(ret);\n\n    // Creates windows per 10 seconds ([:00, :10), [:10, :20), ...),\n    // and calculate the average amount over the rows inside each window.\n    //\n    // Second parameter `DURATION_SECS(0)` means allowed latency for late data. You can ignore here.\n    ret = spring_command(\n        pipeline,\n        "CREATE PUMP avg_all AS"\n        "    INSERT INTO sink_avg_all (ts, avg_amount)"\n        "    SELECT STREAM"\n        "       FLOOR_TIME(source_trade.ts, DURATION_SECS(10)) AS min_ts,"\n        "       AVG(source_trade.amount) AS avg_amount"\n        "    FROM source_trade"\n        "    GROUP BY min_ts"\n        "    FIXED WINDOW DURATION_SECS(10), DURATION_SECS(0);");\n    assert_ok(ret);\n\n    // Creates windows per 2 seconds ([:00, :02), [:02, :04), ...),\n    // and then group the rows inside each window having the same symbol.\n    // Calculate the average amount for each group.\n    ret = spring_command(\n        pipeline,\n        "CREATE PUMP avg_by_symbol AS"\n        "    INSERT INTO sink_avg_by_symbol (ts, symbol, avg_amount)"\n        "    SELECT STREAM"\n        "       FLOOR_TIME(source_trade.ts, DURATION_SECS(2)) AS min_ts,"\n        "       source_trade.symbol AS symbol,"\n        "       AVG(source_trade.amount) AS avg_amount"\n        "    FROM source_trade"\n        "    GROUP BY min_ts, symbol"\n        "    FIXED WINDOW DURATION_SECS(2), DURATION_SECS(0);");\n    assert_ok(ret);\n\n    ret = spring_command(\n        pipeline,\n        "CREATE SINK WRITER queue_avg_all FOR sink_avg_all"\n        "    TYPE IN_MEMORY_QUEUE OPTIONS ("\n        "        NAME \'q_avg_all\'"\n        "    );");\n    assert_ok(ret);\n\n    ret = spring_command(\n        pipeline,\n        "CREATE SINK WRITER queue_avg_by_symbol FOR sink_avg_by_symbol"\n        "    TYPE IN_MEMORY_QUEUE OPTIONS ("\n        "        NAME \'q_avg_by_symbol\'"\n        "    );");\n    assert_ok(ret);\n\n    ret = spring_command(\n        pipeline,\n        "CREATE SOURCE READER tcp_trade FOR source_trade"\n        "    TYPE NET_SERVER OPTIONS ("\n        "        PROTOCOL \'TCP\',"\n        "        PORT \'54300\'"\n        "    );");\n    assert_ok(ret);\n\n    fprintf(stderr, "waiting JSON records in tcp/54300...\\n");\n\n    SpringSinkRow *row;\n    bool is_err = false;\n    while (1)\n    {\n#define TS_LEN 128\n#define SYMBOL_LEN 6\n        char ts[TS_LEN];\n        char symbol[SYMBOL_LEN];\n\n        // Fetching rows from q_avg_all.\n        {\n            row = spring_pop_non_blocking(pipeline, "q_avg_all", &is_err);\n            if (row)\n            {\n                int r = spring_column_text(row, 0, (char *)ts, TS_LEN);\n                assert((size_t)r == strlen(ts));\n\n                float avg_amount;\n                ret = spring_column_float(row, 1, &avg_amount);\n                assert_ok(ret);\n\n                fprintf(stderr, "[q_avg_all] %s\\t%f\\n", ts, avg_amount);\n                spring_sink_row_close(row);\n            }\n            else\n            {\n                assert(!is_err);\n            }\n        }\n\n        // Fetching rows from q_avg_by_symbol.\n        row = spring_pop_non_blocking(pipeline, "q_avg_by_symbol", &is_err);\n        if (row)\n        {\n            int r = spring_column_text(row, 0, (char *)ts, TS_LEN);\n            assert((size_t)r == strlen(ts));\n\n            r = spring_column_text(row, 1, (char *)symbol, SYMBOL_LEN);\n            assert((size_t)r == strlen(symbol));\n\n            float avg_amount;\n            ret = spring_column_float(row, 2, &avg_amount);\n            assert_ok(ret);\n\n            fprintf(stderr, "[q_avg_by_symbol] %s\\t%s\\t%f\\n", ts, symbol, avg_amount);\n            spring_sink_row_close(row);\n        }\n        else\n        {\n            assert(!is_err);\n        }\n\n        // Avoid busy sleep.\n        usleep(100000);\n    }\n\n    ret = spring_close(pipeline);\n    assert_ok(ret);\n\n    ret = spring_config_close(config);\n    assert_ok(ret);\n\n    return 0;\n}\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Also available in ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/SpringQL/SpringQL-client-c/blob/main/c_example/doc_app2/doc_app2.c"},"GitHub"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Build the app"',title:'"Build',the:!0,'app"':!0},"gcc main.c -lspringql_client\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Run the app (start app)"',title:'"Run',the:!0,app:!0,"(start":!0,'app)"':!0},"./a.out\n")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Run the app (input from foreign source)"',title:'"Run',the:!0,app:!0,"(input":!0,from:!0,foreign:!0,'source)"':!0},'# Input line starts from `> ` and output starts from `< `\n\n> echo \'{"ts": "2022-01-01 13:00:00.000000000", "symbol": "ORCL", "amount": 10}\' |nc localhost 54300\n> echo \'{"ts": "2022-01-01 13:00:01.000000000", "symbol": "ORCL", "amount": 30}\' |nc localhost 54300\n> echo \'{"ts": "2022-01-01 13:00:01.000000000", "symbol": "GOOGL", "amount": 50}\' |nc localhost 54300\n> echo \'{"ts": "2022-01-01 13:00:02.000000000", "symbol": "ORCL", "amount": 40}\' |nc localhost 54300\n\n< [q_avg_by_symbol] 2022-01-01 13:00:00.000000000 ORCL    20\n< [q_avg_by_symbol] 2022-01-01 13:00:00.000000000 GOOGL   50\n\n> echo \'{"ts": "2022-01-01 13:00:05.000000000", "symbol": "GOOGL", "amount": 60}\' |nc localhost 54300\n\n< [q_avg_by_symbol] 2022-01-01 13:00:02.000000000 ORCL    40\n\n> echo \'{"ts": "2022-01-01 13:00:10.000000000", "symbol": "APPL", "amount": 100}\' |nc localhost 54300\n\n< [q_avg_all] 2022-01-01 13:00:00.000000000       38\n< [q_avg_by_symbol] 2022-01-01 13:00:04.000000000 GOOGL   60\n')),(0,o.kt)("p",null,"First three input lines do not emit any output.\nThey occur within 1 second (from 13:00:00 to 13:00:01) so the three records are inside both the 2-second window (created by the ",(0,o.kt)("inlineCode",{parentName:"p"},"avg_by_symbol")," pump) and 10-second (created by the ",(0,o.kt)("inlineCode",{parentName:"p"},"avg_all")," pump) window."),(0,o.kt)("p",null,"4th input line triggers the first window output from the 2-second window. The outputs are grouped by stock symbols."),(0,o.kt)("p",null,"After 10 seconds pass (when 6th input record is input), both the 2-second window and the 10-second window are triggered to emit output lines."),(0,o.kt)("p",null,'Note that "seconds" here are not measured from a wallclock time but from timestamps in input records.\nColumns with ',(0,o.kt)("inlineCode",{parentName:"p"},"ROWTIME")," keyword are ",(0,o.kt)("strong",{parentName:"p"},"event time"),". SpringQL uses either of the event time (if available) or processing time, the time when a row is inserted to a stream, for time-based windows."),(0,o.kt)("h2",{id:"whats-next"},"What's next?"),(0,o.kt)("p",null,"You learned just a few applications of SpringQL."),(0,o.kt)("p",null,"We recommend you to learn fundamental concepts of stream processing in ",(0,o.kt)("a",{parentName:"p",href:"../learn-springql/"},"Learn SpringQL"),"\nif you are new to stream processing."),(0,o.kt)("p",null,"If you are already familiar with stream processing concepts, it is good idea to change pipelines (SQLs) in the apps checking ",(0,o.kt)("a",{parentName:"p",href:"../reference/sql"},"SQL references"),".\nAlso, you may find other meaningful examples in ",(0,o.kt)("a",{parentName:"p",href:"../real-world-example/"},"Real-World Examples"),"."))}h.isMDXComponent=!0},11748:function(n,e,t){var a={"./locale":89234,"./locale.js":89234};function r(n){var e=o(n);return t(e)}function o(n){if(!t.o(a,n)){var e=new Error("Cannot find module '"+n+"'");throw e.code="MODULE_NOT_FOUND",e}return a[n]}r.keys=function(){return Object.keys(a)},r.resolve=o,n.exports=r,r.id=11748},26396:function(n,e,t){"use strict";e.Z=t.p+"assets/images/windowing.drawio-d439e51c77aaa37fbd0c6f1a87e7af02.svg"}}]);