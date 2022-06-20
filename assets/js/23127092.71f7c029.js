(self.webpackChunkspring_ql=self.webpackChunkspring_ql||[]).push([[846],{80672:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=n(93456),o=["components"],s={sidebar_position:2},p="Source reader",u={unversionedId:"learn-springql/pipeline/source-reader",id:"learn-springql/pipeline/source-reader",title:"Source reader",description:"A source reader conducts the following 3 roles:",source:"@site/docs/learn-springql/pipeline/source-reader.md",sourceDirName:"learn-springql/pipeline",slug:"/learn-springql/pipeline/source-reader",permalink:"/learn-springql/pipeline/source-reader",editUrl:"https://github.com/SpringQL/SpringQL.github.io/blob/main/docs/learn-springql/pipeline/source-reader.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Stream",permalink:"/learn-springql/pipeline/stream"},next:{title:"Sink writer",permalink:"/learn-springql/pipeline/sink-writer"}},c={},d=[{value:"Source reader types and options",id:"source-reader-types-and-options",level:2},{value:"NET_CLIENT",id:"net_client",level:3},{value:"Data format",id:"data-format",level:4},{value:"NET_SERVER",id:"net_server",level:3},{value:"Data format",id:"data-format-1",level:4},{value:"CAN",id:"can",level:3},{value:"Data format",id:"data-format-2",level:4}],m={toc:d};function k(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"source-reader"},"Source reader"),(0,i.kt)("p",null,"A source reader conducts the following 3 roles:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},'keeping "connection" (network connection, file handle) to a foreign source.'),(0,i.kt)("li",{parentName:"ol"},"reading arbitrary data from the foreign source."),(0,i.kt)("li",{parentName:"ol"},"converting the data from into SpringQL's rows."),(0,i.kt)("li",{parentName:"ol"},"pushing the rows into a source stream.")),(0,i.kt)("p",null,"Let's look at an example source reader:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Source reader definition"',title:'"Source',reader:!0,'definition"':!0},"CREATE SOURCE READER source_reader1\n  FOR source_stream1\n  TYPE NET_SERVER OPTIONS (\n    PROTOCOL 'TCP',\n    PORT '12345'\n  );\n")),(0,i.kt)("p",null,"This statement defines the following source reader (the edge in the diagram)."),(0,i.kt)(l.Mermaid,{config:{},chart:'graph TB\n    fsrc(["TCP client<br>(connect to localhost:12345)"])\n    -- "source_reader1" --\x3e\n    source_stream[["source_stream1"]]',mdxType:"Mermaid"}),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"source_reader1")," does the following:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Listen to the TCP port ",(0,i.kt)("inlineCode",{parentName:"li"},"12345")," on the localhost."),(0,i.kt)("li",{parentName:"ol"},"Accept an connection from a client."),(0,i.kt)("li",{parentName:"ol"},"Read a JSON object line like: ",(0,i.kt)("inlineCode",{parentName:"li"},'{"ts": "2020-01-01 00:00:00.000000000", "c1": 1}')),(0,i.kt)("li",{parentName:"ol"},"Convert the JSON object into a SpringQL row."),(0,i.kt)("li",{parentName:"ol"},"Push the row into the ",(0,i.kt)("inlineCode",{parentName:"li"},"source_stream1"),", and repeat from 3.")),(0,i.kt)("h2",{id:"source-reader-types-and-options"},"Source reader types and options"),(0,i.kt)("p",null,"A source reader has a name, a type, and options.\nA type of a source reader determines the available options."),(0,i.kt)("p",null,"Here lists the currently available source readers."),(0,i.kt)("h3",{id:"net_client"},"NET_CLIENT"),(0,i.kt)("p",null,"Connects to a foreign source via TCP."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Options"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"(required) ",(0,i.kt)("inlineCode",{parentName:"li"},"PROTOCOL"),": must be ",(0,i.kt)("inlineCode",{parentName:"li"},"TCP"),"."),(0,i.kt)("li",{parentName:"ul"},"(required) ",(0,i.kt)("inlineCode",{parentName:"li"},"REMOTE_HOST"),": host name or IP address of the remote host."),(0,i.kt)("li",{parentName:"ul"},"(required) ",(0,i.kt)("inlineCode",{parentName:"li"},"REMOTE_PORT"),": port number of the remote host.")))),(0,i.kt)("h4",{id:"data-format"},"Data format"),(0,i.kt)("p",null,"Currently, only 1-line JSON objects are supported as an input datum from a foreign source."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="JSON object convertible to a SpringQL\'s row"',title:'"JSON',object:!0,convertible:!0,to:!0,a:!0,"SpringQL's":!0,'row"':!0},'{ "column_name1": <value convertible to source stream\'s data type>, "column_name2": <value2>, ... }\n')),(0,i.kt)("p",null,"Say, you have the following source stream:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Source stream"',title:'"Source','stream"':!0},"CREATE SOURCE STREAM ss (\n    ts TIMESTAMP NOT NULL ROWTIME,    \n    c1 INTEGER NOT NULL\n);\n")),(0,i.kt)("p",null,"Then a valid JSON objects for an input into source readers are:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Valid JSONs"',title:'"Valid','JSONs"':!0},'{ "ts": "2020-01-01 00:00:00.000000000", "c1": 1 }\n{ "c1": 42, "ts": "1970-01-01 00:00:00.000000000" }\n')),(0,i.kt)("p",null,"The following ones are invalid:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Invalid JSONs"',title:'"Invalid','JSONs"':!0},'# column name\n{ "timestamp": "2020-01-01 00:00:00.000000000", "c1": 1 }\n\n# timestamp format must currently have 9-digit fractional parts\n{ "ts": "2020-01-01 00:00:00", "c1": 1 }\n\n# string cannot be converted into INTEGER type \n{ "ts": "2020-01-01 00:00:00.000000000", "c1": "1" }\n')),(0,i.kt)("h3",{id:"net_server"},"NET_SERVER"),(0,i.kt)("p",null,"Accepts to a foreign source's connection via TCP."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Options"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"(required) ",(0,i.kt)("inlineCode",{parentName:"li"},"PROTOCOL"),": must be ",(0,i.kt)("inlineCode",{parentName:"li"},"TCP"),"."),(0,i.kt)("li",{parentName:"ul"},"(required) ",(0,i.kt)("inlineCode",{parentName:"li"},"PORT"),": port number to listen.")))),(0,i.kt)("h4",{id:"data-format-1"},"Data format"),(0,i.kt)("p",null,"The same as ",(0,i.kt)("inlineCode",{parentName:"p"},"NET_CLIENT"),"."),(0,i.kt)("h3",{id:"can"},"CAN"),(0,i.kt)("p",null,"Read CAN frame data from a ",(0,i.kt)("a",{parentName:"p",href:"https://docs.kernel.org/networking/can.html"},"SocketCAN")," interface."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Options"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"(required) ",(0,i.kt)("inlineCode",{parentName:"li"},"INTERFACE"),": SocketCAN interface name (e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"can0"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"vcan0"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"slcan0"),").")))),(0,i.kt)("h4",{id:"data-format-2"},"Data format"),(0,i.kt)("p",null,"CAN frame."))}k.isMDXComponent=!0},11748:function(e,t,n){var r={"./locale":89234,"./locale.js":89234};function a(e){var t=i(e);return n(t)}function i(e){if(!n.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}a.keys=function(){return Object.keys(r)},a.resolve=i,e.exports=a,a.id=11748}}]);