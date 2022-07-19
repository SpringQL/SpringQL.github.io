(self.webpackChunkspring_ql=self.webpackChunkspring_ql||[]).push([[6407],{1148:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return s},metadata:function(){return k},toc:function(){return u}});var i=n(83117),r=n(80102),a=(n(67294),n(3905)),l=n(93456),o=["components"],s={sidebar_position:3},p="Sink writer",k={unversionedId:"learn-springql/pipeline/sink-writer",id:"version-0.17/learn-springql/pipeline/sink-writer",title:"Sink writer",description:"Except for the INMEMORYQUEUE sink writer, a sink writer conducts the",source:"@site/versioned_docs/version-0.17/learn-springql/pipeline/sink-writer.md",sourceDirName:"learn-springql/pipeline",slug:"/learn-springql/pipeline/sink-writer",permalink:"/learn-springql/pipeline/sink-writer",draft:!1,editUrl:"https://github.com/SpringQL/SpringQL.github.io/blob/main/versioned_docs/version-0.17/learn-springql/pipeline/sink-writer.md",tags:[],version:"0.17",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Source reader",permalink:"/learn-springql/pipeline/source-reader"},next:{title:"Pump",permalink:"/learn-springql/pipeline/pump"}},m={},u=[{value:"Sink writer types and options",id:"sink-writer-types-and-options",level:2},{value:"IN_MEMORY_QUEUE",id:"in_memory_queue",level:3},{value:"NET_CLIENT",id:"net_client",level:3},{value:"HTTP1_CLIENT",id:"http1_client",level:3},{value:"Sink data format",id:"sink-data-format",level:2}],d={toc:u};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sink-writer"},"Sink writer"),(0,a.kt)("p",null,"Except for the IN_MEMORY_QUEUE sink writer, a sink writer conducts the "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},'keeping "connection" (network connection, file handle) to a foreign sink.'),(0,a.kt)("li",{parentName:"ol"},"fetching rows from a sink stream."),(0,a.kt)("li",{parentName:"ol"},"converting the rows into arbitrary data that the foreign sink can accept."),(0,a.kt)("li",{parentName:"ol"},"writing the data to the foreign sink.")),(0,a.kt)("p",null,"Let's look at an example sink writer:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Sink writer definition"',title:'"Sink',writer:!0,'definition"':!0},"CREATE SOURCE READER sink_writer1\n  FOR sink_stream1\n  TYPE NET_CLIENT OPTIONS (\n    PROTOCOL 'TCP',\n    REMOTE_HOST 'localhost',\n    REMOTE_PORT '12345'\n  );\n")),(0,a.kt)("p",null,"This statement defines the following source reader (the edge in the diagram)."),(0,a.kt)(l.Mermaid,{config:{},chart:'graph TB\n    sink_stream[["sink_stream1"]]\n    -- "sink_writer1" --\x3e\n    fsink(["TCP server<br>(listen to localhost:12345)"])',mdxType:"Mermaid"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"sink_writer1")," does the following:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Connect to the TCP port ",(0,a.kt)("inlineCode",{parentName:"li"},"12345")," on the localhost."),(0,a.kt)("li",{parentName:"ol"},"Fetch a row from the ",(0,a.kt)("inlineCode",{parentName:"li"},"sink_stream1"),"."),(0,a.kt)("li",{parentName:"ol"},"Convert the into a JSON object line like: ",(0,a.kt)("inlineCode",{parentName:"li"},'{"ts": "2020-01-01 00:00:00.000000000", "c1": 1}')),(0,a.kt)("li",{parentName:"ol"},"Write the JSON object line to the connection, and repeat from 2.")),(0,a.kt)("h2",{id:"sink-writer-types-and-options"},"Sink writer types and options"),(0,a.kt)("p",null,"A sink writer has a name, a type, and options.\nA type of a sink writer determines the available options."),(0,a.kt)("p",null,"Here lists the currently available sink writers."),(0,a.kt)("h3",{id:"in_memory_queue"},"IN_MEMORY_QUEUE"),(0,a.kt)("p",null,"Writes data into an in-memory queue allocated in the application's memory space linked to SpringQL.\nThe application pops rows from the queue using ",(0,a.kt)("inlineCode",{parentName:"p"},"*pop()")," API."),(0,a.kt)("p",null,"See: ",(0,a.kt)("a",{parentName:"p",href:"../../reference/client-api"},"Client API"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Options"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"(required) ",(0,a.kt)("inlineCode",{parentName:"li"},"NAME"),": queue's name.")))),(0,a.kt)("h3",{id:"net_client"},"NET_CLIENT"),(0,a.kt)("p",null,"Connects to a foreign sink via TCP."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Options"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PROTOCOL"),": must be ",(0,a.kt)("inlineCode",{parentName:"li"},"TCP"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"REMOTE_HOST"),": host name or IP address of the remote host."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"REMOTE_PORT"),": port number of the remote host.")))),(0,a.kt)("h3",{id:"http1_client"},"HTTP1_CLIENT"),(0,a.kt)("p",null,"Requests to a foreign sink via HTTP/1.1."),(0,a.kt)("p",null,"Currently only a single BLOB is supported for a HTTP body."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("em",{parentName:"li"},"Options"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"REMOTE_HOST"),": host name or IP address of the remote host."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"REMOTE_PORT"),": port number of the remote host."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"METHOD"),": HTTP method."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"URL"),","),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"HEADER_{HTTP header name}"),": HTTP header."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BLOB_BODY_COLUMN"),": sink stream's column name to put as a HTTP body.")))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="HTTP1_CLIENT example"',title:'"HTTP1_CLIENT','example"':!0},"CREATE SINK WRITER http_sink_1 FOR sink_1\n  TYPE HTTP1_CLIENT OPTIONS (\n    REMOTE_HOST '{remote_host}',\n    REMOTE_PORT '{remote_port}',\n    METHOD 'POST',\n    URL 'http://{remote_host}:{remote_port}/test',\n    HEADER_Content-Type 'application/octet-stream',\n    HEADER_Connection 'keep-alive',\n    BLOB_BODY_COLUMN 'http_body'\n);\n")),(0,a.kt)("h2",{id:"sink-data-format"},"Sink data format"),(0,a.kt)("p",null,"Currently, only 1-line JSON objects are supported as an output datum from a source writer.\nForeign sinks must accept such data format."),(0,a.kt)("p",null,"Say, you have the following sink stream:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Sink stream"',title:'"Sink','stream"':!0},"CREATE SINK STREAM ss (\n    ts TIMESTAMP NOT NULL ROWTIME,    \n    c1 INTEGER NOT NULL\n);\n")),(0,a.kt)("p",null,"A sink writer can output the following JSON."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="JSON output example"',title:'"JSON',output:!0,'example"':!0},'{ "ts": "2020-01-01 00:00:00.000000000", "c1": 1 }\n')))}c.isMDXComponent=!0},11748:function(e,t,n){var i={"./locale":89234,"./locale.js":89234};function r(e){var t=a(e);return n(t)}function a(e){if(!n.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}r.keys=function(){return Object.keys(i)},r.resolve=a,e.exports=r,r.id=11748}}]);