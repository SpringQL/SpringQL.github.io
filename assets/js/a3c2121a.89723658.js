(self.webpackChunkspring_ql=self.webpackChunkspring_ql||[]).push([[3227],{95469:function(e,n,i){"use strict";i.r(n),i.d(n,{assets:function(){return c},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return d}});var r=i(83117),t=i(80102),o=(i(67294),i(3905)),a=i(93456),p=["components"],s={sidebar_position:1},l="Pipeline",u={unversionedId:"learn-springql/pipeline/index",id:"version-0.15/learn-springql/pipeline/index",title:"Pipeline",description:"A pipeline is a dataflow definition in SpringQL.",source:"@site/versioned_docs/version-0.15/learn-springql/pipeline/index.md",sourceDirName:"learn-springql/pipeline",slug:"/learn-springql/pipeline/",permalink:"/0.15/learn-springql/pipeline/",draft:!1,editUrl:"https://github.com/SpringQL/SpringQL.github.io/blob/main/versioned_docs/version-0.15/learn-springql/pipeline/index.md",tags:[],version:"0.15",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"SpringQL's Execution Model",permalink:"/0.15/learn-springql/execution-model"},next:{title:"Stream",permalink:"/0.15/learn-springql/pipeline/stream"}},c={},d=[],m={toc:d};function f(e){var n=e.components,i=(0,t.Z)(e,p);return(0,o.kt)("wrapper",(0,r.Z)({},m,i,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"pipeline"},"Pipeline"),(0,o.kt)("p",null,"A pipeline is a dataflow definition in SpringQL."),(0,o.kt)(a.Mermaid,{config:{},chart:'graph TB\n    fsrc(["Foreign source<br>(not a part of SpringQL)"])\n    -- "Source reader" --\x3e\n    source_stream[["Source stream"]]\n    -- "Pump" --\x3e\n    stream["Stream"]\n    -- "Pump" --\x3e\n    sink_stream[["Sink stream"]]\n    -- "Sink writer" --\x3e\n    fsink(["Foreign sink<br>(not a part of SpringQL)"])',mdxType:"Mermaid"}),(0,o.kt)("p",null,"A pipeline is represented as a DAG (Directed Acyclic Graph), whose nodes are either of foreign source, foreign sink, or ",(0,o.kt)("strong",{parentName:"p"},"stream"),",\nand edges are either of ",(0,o.kt)("strong",{parentName:"p"},"source reader"),", ",(0,o.kt)("strong",{parentName:"p"},"sink writer"),", or ",(0,o.kt)("strong",{parentName:"p"},"pump"),"."),(0,o.kt)("p",null,"In this section, you will learn what conceptually they are and detailed variations of them."))}f.isMDXComponent=!0},11748:function(e,n,i){var r={"./locale":89234,"./locale.js":89234};function t(e){var n=o(e);return i(n)}function o(e){if(!i.o(r,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return r[e]}t.keys=function(){return Object.keys(r)},t.resolve=o,e.exports=t,t.id=11748}}]);