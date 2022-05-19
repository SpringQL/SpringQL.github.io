"use strict";(self.webpackChunkspring_ql=self.webpackChunkspring_ql||[]).push([[133],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(t),d=a,h=c["".concat(l,".").concat(d)]||c[d]||m[d]||i;return t?r.createElement(h,o(o({ref:n},u),{},{components:t})):r.createElement(h,o({ref:n},u))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},91750:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return m}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],s={sidebar_position:1},l="Install and Run an App",p={unversionedId:"get-started/install-and-run-app",id:"get-started/install-and-run-app",title:"Install and Run an App",description:"In this page, you will learn how to install SpringQL in your environment and how to run a demo application written in your favorite language.",source:"@site/docs/get-started/install-and-run-app.md",sourceDirName:"get-started",slug:"/get-started/install-and-run-app",permalink:"/get-started/install-and-run-app",editUrl:"https://github.com/SpringQL/SpringQL.github.io/blob/main/docs/get-started/install-and-run-app.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"\ud83c\udfe0 Home",permalink:"/"},next:{title:"Write Basic Apps",permalink:"/get-started/write-basic-apps"}},u={},m=[{value:"Rust",id:"rust",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Create a bin crate to write a demo",id:"create-a-bin-crate-to-write-a-demo",level:3},{value:"Run the demo",id:"run-the-demo",level:3},{value:"C",id:"c",level:2},{value:"Prerequisites",id:"prerequisites-1",level:3},{value:"Place the header file and dynamic library",id:"place-the-header-file-and-dynamic-library",level:3},{value:"Write a demo",id:"write-a-demo",level:3},{value:"Build the demo",id:"build-the-demo",level:3},{value:"Run the demo",id:"run-the-demo-1",level:3}],c={toc:m};function d(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"install-and-run-an-app"},"Install and Run an App"),(0,i.kt)("p",null,"In this page, you will learn how to install SpringQL in your environment and how to run a demo application written in your favorite language."),(0,i.kt)("p",null,"SpringQL runs on UNIX-like operating systems, such as Linux and macOS.\nYou might use Cygwin in Windows but it is currently not supported."),(0,i.kt)("p",null,"Choose a language you use from the table of contents."),(0,i.kt)("h2",{id:"rust"},"Rust"),(0,i.kt)("p",null,"Using SpringQL from Rust is the simplest way since SpringQL itself is developed as a Rust crate."),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://rustup.rs/"},"Rust toolchain")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nc")," (netcat) command")),(0,i.kt)("h3",{id:"create-a-bin-crate-to-write-a-demo"},"Create a bin crate to write a demo"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Create a bin crate"',title:'"Create',a:!0,bin:!0,'crate"':!0},"cargo new --bin springql-demo\ncd springql-demo\n")),(0,i.kt)("p",null,"And then, add ",(0,i.kt)("inlineCode",{parentName:"p"},"springql-core")," to your ",(0,i.kt)("inlineCode",{parentName:"p"},"Cargo.toml"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-toml",metastring:'title="Cargo.toml"',title:'"Cargo.toml"'},'# ...\n[dependencies]\nspringql-core = "*"\n')),(0,i.kt)("p",null,"Finally, fix ",(0,i.kt)("inlineCode",{parentName:"p"},"main.rs")," as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust",metastring:'title="main.rs"',title:'"main.rs"'},'use springql_core::{high_level_rs::SpringPipelineHL, low_level_rs::SpringConfig};\n\nfn main() {\n    // Create a pipeline (dataflow definition in SpringQL).\n    let pipeline = SpringPipelineHL::new(&SpringConfig::default()).unwrap();\n\n    // Create a source stream. A stream is similar to a table in relational database.\n    // A source stream is a stream to fetch stream data from a foreign source.\n    //\n    // `ROWTIME` is a keyword to declare that the column represents the event time of a row.\n    pipeline\n        .command(\n            "\n            CREATE SOURCE STREAM source_temperature_celsius (\n                ts TIMESTAMP NOT NULL ROWTIME,    \n                temperature FLOAT NOT NULL\n            );\n            ",\n        )\n        .unwrap();\n\n    // Create a sink stream.\n    // A sink stream is a final stream in a pipeline. A foreign sink fetches stream rows from it.\n    pipeline\n        .command(\n            "\n            CREATE SINK STREAM sink_temperature_fahrenheit (\n                ts TIMESTAMP NOT NULL ROWTIME,    \n                temperature FLOAT NOT NULL\n            );\n            ",\n        )\n        .unwrap();\n\n    // Create a pump to convert Celsius to Fahrenheit.\n    // A pump fetches stream rows from a stream, make some conversions to the rows, and emits them to another stream.\n    pipeline\n        .command(\n            "\n            CREATE PUMP c_to_f AS\n                INSERT INTO sink_temperature_fahrenheit (ts, temperature)\n                SELECT STREAM\n                    source_temperature_celsius.ts,\n                    32.0 + source_temperature_celsius.temperature * 1.8\n                FROM source_temperature_celsius;\n            ",\n        )\n        .unwrap();\n\n    // Create a sink writer as an in-memory queue.\n    // A sink writer fetches stream rows from a sink stream, and writes them to various foreign sinks.\n    // Here we use an in-memory queue as the foreign sinks to easily get rows from our program written here.\n    pipeline\n        .command(\n            "\n            CREATE SINK WRITER queue_temperature_fahrenheit FOR sink_temperature_fahrenheit\n            TYPE IN_MEMORY_QUEUE OPTIONS (\n                NAME \'q\'\n            );\n            ",\n        )\n        .unwrap();\n\n    // Create a source reader as a TCP server (listening to tcp/9876).\n    // A source reader fetches stream rows from a foreign source, and emits them to a source stream.\n    //\n    // Dataflow starts soon after this command creates the source reader instance.\n    pipeline\n        .command(\n            "\n            CREATE SOURCE READER tcp_trade FOR source_temperature_celsius\n            TYPE NET_SERVER OPTIONS (\n                PROTOCOL \'TCP\',\n                PORT \'9876\'\n            );\n            ",\n        )\n        .unwrap();\n\n    // Get a row,\n    while let Ok(row) = pipeline.pop("q") {\n        // fetch columns,\n        let ts: String = row.get_not_null_by_index(0).unwrap();\n        let temperature_fahrenheit: f32 = row.get_not_null_by_index(1).unwrap();\n        // and print them.\n        eprintln!("{}\\t{}", ts, temperature_fahrenheit);\n    }\n}\n')),(0,i.kt)("h3",{id:"run-the-demo"},"Run the demo"),(0,i.kt)("p",null,"In your terminal, start the demo app:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Running the demo app"',title:'"Running',the:!0,demo:!0,'app"':!0},"cargo run\n")),(0,i.kt)("p",null,"In another terminal, launch TCP clients with ",(0,i.kt)("inlineCode",{parentName:"p"},"nc")," connecting to port 9876:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Running nc clients"',title:'"Running',nc:!0,'clients"':!0},'echo \'{"ts": "2022-01-01 13:00:00.000000000", "temperature": 5.3}\' | nc localhost 9876\necho \'{"ts": "2022-01-01 14:00:00.000000000", "temperature": 6.2}\' | nc localhost 9876\n')),(0,i.kt)("p",null,"Then you'll get the following outputs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Outputs"',title:'"Outputs"'},"2022-01-01 13:00:00.000000000   41.54\n2022-01-01 14:00:00.000000000   43.16\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Finished!")," You get the temperatures in Celsius translated into Fahrenheit by SpringQL."),(0,i.kt)("h2",{id:"c"},"C"),(0,i.kt)("h3",{id:"prerequisites-1"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"gcc")," command"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"nc")," (netcat) command")),(0,i.kt)("h3",{id:"place-the-header-file-and-dynamic-library"},"Place the header file and dynamic library"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Create a directory"',title:'"Create',a:!0,'directory"':!0},"mkdir springql-demo\ncd springql-demo\n")),(0,i.kt)("p",null,"Then go to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SpringQL/SpringQL-client-c/releases"},"releases page")," of SpringQL-client-c.\nDownload the latest version of ",(0,i.kt)("inlineCode",{parentName:"p"},"springql_client-<your arch & OS>-debug.zip")," ",(0,i.kt)("sup",{parentName:"p",id:"fnref-1"},(0,i.kt)("a",{parentName:"sup",href:"#fn-1",className:"footnote-ref"},"1"))," and unzip it."),(0,i.kt)("p",null,"Then copy the header file and dynamic library to the ",(0,i.kt)("inlineCode",{parentName:"p"},"springql-demo")," directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Copy header file and dynamic library"',title:'"Copy',header:!0,file:!0,and:!0,dynamic:!0,'library"':!0},"cp /path/to/download/springql_client-<your arch & OS>-debug/* .\n")),(0,i.kt)("h3",{id:"write-a-demo"},"Write a demo"),(0,i.kt)("p",null,"Create ",(0,i.kt)("inlineCode",{parentName:"p"},"main.c")," and write the demo code as below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-c",metastring:'title="main.c"',title:'"main.c"'},'#include <assert.h>\n#include <string.h>\n#include <stdio.h>\n\n#include "springql.h"\n\nvoid abort_with_report()\n{\n    SpringErrno errno;\n    char errmsg[1024];\n    spring_last_err(&errno, errmsg, 1024);\n    fprintf(stderr, "Error occurred (%d): %s", errno, errmsg);\n    abort();\n}\n\nvoid assert_ok(SpringErrno ret)\n{\n    if (ret != Ok)\n    {\n        abort_with_report();\n    }\n}\n\nvoid assert_not_null(void *p)\n{\n    if (p == NULL)\n    {\n        abort_with_report();\n    }\n}\n\nint main()\n{\n    SpringErrno ret;\n\n    SpringConfig *config = spring_config_default();\n    assert_not_null(config);\n\n    // Create a pipeline (dataflow definition in SpringQL).\n    SpringPipeline *pipeline = spring_open(config);\n    assert_not_null(pipeline);\n\n    // Create a source stream. A stream is similar to a table in relational database.\n    // A source stream is a stream to fetch stream data from a foreign source.\n    //\n    // `ROWTIME` is a keyword to declare that the column represents the event time of a row.\n    ret = spring_command(\n        pipeline,\n        "CREATE SOURCE STREAM source_temperature_celsius ("\n        "    ts TIMESTAMP NOT NULL ROWTIME,"\n        "    temperature FLOAT NOT NULL"\n        ");");\n    assert_ok(ret);\n\n    // Create a sink stream.\n    // A sink stream is a final stream in a pipeline. A foreign sink fetches stream rows from it.\n    ret = spring_command(\n        pipeline,\n        "CREATE SINK STREAM sink_temperature_fahrenheit ("\n        "    ts TIMESTAMP NOT NULL ROWTIME,"\n        "    temperature FLOAT NOT NULL"\n        ");");\n    assert_ok(ret);\n\n    // Create a pump to convert Celsius to Fahrenheit.\n    // A pump fetches stream rows from a stream, make some conversions to the rows, and emits them to another stream.\n    ret = spring_command(\n        pipeline,\n        "CREATE PUMP c_to_f AS"\n        "    INSERT INTO sink_temperature_fahrenheit (ts, temperature)"\n        "    SELECT STREAM"\n        "       source_temperature_celsius.ts,"\n        "       32.0 + source_temperature_celsius.temperature * 1.8"\n        "    FROM source_temperature_celsius;");\n    assert_ok(ret);\n\n    // Create a sink writer as an in-memory queue.\n    // A sink writer fetches stream rows from a sink stream, and writes them to various foreign sinks.\n    // Here we use an in-memory queue as the foreign sinks to easily get rows from our program written here.\n    ret = spring_command(\n        pipeline,\n        "CREATE SINK WRITER queue_temperature_fahrenheit FOR sink_temperature_fahrenheit"\n        "    TYPE IN_MEMORY_QUEUE OPTIONS ("\n        "        NAME \'q\'"\n        "    );");\n    assert_ok(ret);\n\n    // Create a source reader as a TCP server (listening to tcp/9876).\n    // A source reader fetches stream rows from a foreign source, and emits them to a source stream.\n    //\n    // Dataflow starts soon after this command creates the source reader instance.\n    ret = spring_command(\n        pipeline,\n        "CREATE SOURCE READER tcp_trade FOR source_temperature_celsius"\n        "    TYPE NET_SERVER OPTIONS ("\n        "        PROTOCOL \'TCP\',"\n        "        PORT \'9876\'"\n        "    );");\n    assert_ok(ret);\n\n    SpringRow *row;\n    while (1)\n    {\n        // Get a row,\n        row = spring_pop(pipeline, "q");\n        assert_not_null(row);\n\n        // fetch columns,\n        const int ts_len = 128;\n        const char ts[ts_len];\n\n        int r = spring_column_text(row, 0, (char *)ts, ts_len);\n        assert(r == strlen(ts));\n\n        float temperature_fahrenheit;\n        ret = spring_column_float(row, 1, &temperature_fahrenheit);\n        assert_ok(ret);\n\n        // and print them.\n        fprintf(stderr, "%s\\t%f\\n", ts, temperature_fahrenheit);\n\n        // Free the row\n        spring_row_close(row);\n    }\n\n    // Free the remaining resources\n    ret = spring_close(pipeline);\n    assert_ok(ret);\n\n    ret = spring_config_close(config);\n    assert_ok(ret);\n\n    return 0;\n}\n')),(0,i.kt)("h3",{id:"build-the-demo"},"Build the demo"),(0,i.kt)("p",null,"You need to link to the ",(0,i.kt)("inlineCode",{parentName:"p"},"libspringql_client")," in build-time."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Build the demo"',title:'"Build',the:!0,'demo"':!0},"gcc main.c -lspringql_client -L.\n")),(0,i.kt)("p",null,"Then, you'll get ",(0,i.kt)("inlineCode",{parentName:"p"},"a.out")," as a runnable binary."),(0,i.kt)("h3",{id:"run-the-demo-1"},"Run the demo"),(0,i.kt)("p",null,"In your terminal, start the demo app.\nYou also need to link to the ",(0,i.kt)("inlineCode",{parentName:"p"},"libspringql_client")," in run-time."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Run the demo (Linux)"',title:'"Run',the:!0,demo:!0,'(Linux)"':!0},"LD_LIBRARY_PATH=. ./a.out\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Run the demo (macOS)"',title:'"Run',the:!0,demo:!0,'(macOS)"':!0},"DYLD_LIBRARY_PATH=. ./a.out\n")),(0,i.kt)("p",null,"In another terminal, launch TCP clients with ",(0,i.kt)("inlineCode",{parentName:"p"},"nc")," connecting to port 9876:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Running nc clients"',title:'"Running',nc:!0,'clients"':!0},'echo \'{"ts": "2022-01-01 13:00:00.000000000", "temperature": 5.3}\' | nc localhost 9876\necho \'{"ts": "2022-01-01 14:00:00.000000000", "temperature": 6.2}\' | nc localhost 9876\n')),(0,i.kt)("p",null,"Then you'll get the following outputs:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text",metastring:'title="Outputs"',title:'"Outputs"'},"2022-01-01 13:00:00.000000000   41.54\n2022-01-01 14:00:00.000000000   43.16\n")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Finished!")," You get the temperatures in Celsius translated into Fahrenheit by SpringQL."),(0,i.kt)("div",{className:"footnotes"},(0,i.kt)("hr",{parentName:"div"}),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol",id:"fn-1"},"See ",(0,i.kt)("a",{parentName:"li",href:"https://doc.rust-lang.org/nightly/rustc/platform-support.html"},"https://doc.rust-lang.org/nightly/rustc/platform-support.html")," to correctly select ",(0,i.kt)("inlineCode",{parentName:"li"},"<your arch & OS>"),".",(0,i.kt)("a",{parentName:"li",href:"#fnref-1",className:"footnote-backref"},"\u21a9")))))}d.isMDXComponent=!0}}]);