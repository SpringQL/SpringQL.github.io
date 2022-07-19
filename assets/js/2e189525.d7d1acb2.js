"use strict";(self.webpackChunkspring_ql=self.webpackChunkspring_ql||[]).push([[4549],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return h}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(r),h=o,m=d["".concat(p,".").concat(h)]||d[h]||c[h]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1828:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return c}});var n=r(83117),o=r(80102),a=(r(67294),r(3905)),i=["components"],s={sidebar_position:4},p="SpringQL's Execution Model",u={unversionedId:"learn-springql/execution-model",id:"version-0.17/learn-springql/execution-model",title:"SpringQL's Execution Model",description:"In this page, you'll learn how a pipeline you defined is executed in SpringQL.",source:"@site/versioned_docs/version-0.17/learn-springql/execution-model.md",sourceDirName:"learn-springql",slug:"/learn-springql/execution-model",permalink:"/learn-springql/execution-model",draft:!1,editUrl:"https://github.com/SpringQL/SpringQL.github.io/blob/main/versioned_docs/version-0.17/learn-springql/execution-model.md",tags:[],version:"0.17",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Window",permalink:"/learn-springql/window"},next:{title:"Pipeline",permalink:"/learn-springql/pipeline/"}},l={},c=[{value:"SpringQL&#39;s architecture",id:"springqls-architecture",level:2},{value:"Pipeline and task graph",id:"pipeline-and-task-graph",level:2},{value:"How task executor works with task graph",id:"how-task-executor-works-with-task-graph",level:2}],d={toc:c};function h(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"springqls-execution-model"},"SpringQL's Execution Model"),(0,a.kt)("p",null,"In this page, you'll learn how a pipeline you defined is executed in SpringQL.\nYou will get less surprise from SpringQL's behaviors and outputs after understanding the contents of this page."),(0,a.kt)("h2",{id:"springqls-architecture"},"SpringQL's architecture"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"SpringQL&#39;s architecture",src:r(32540).Z,width:"441",height:"474"})),(0,a.kt)("p",null,"The above figure shows the system architecture of SpringQL. The control flow to modify a pipeline starts from the SQL submitted from a host application.\nThe application process dynamically links to the shared library of SpringQL. It calls SpringQL's API with the SQL string parameter.\nThen, the SQL is parsed and converted into internal commands by the SQL processor to alter the pipeline.\nThe SQL executor in the stream engine receives commands and updates its pipeline. It then sends commands to the task executor in the autonomous executor to update the corresponding ",(0,a.kt)("strong",{parentName:"p"},"task graph"),"."),(0,a.kt)("h2",{id:"pipeline-and-task-graph"},"Pipeline and task graph"),(0,a.kt)("p",null,"Here introduces the concept of ",(0,a.kt)("strong",{parentName:"p"},"task graph")," and its relationship between pipelines.\nThe task graph is at the heart of SpringQL's internal execution."),(0,a.kt)("p",null,"A task graph is uniquely generated from a pipeline. It is a graph representation for the task executor runtime, whereas a pipeline is for users who write SQLs."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Pipeline and task graph",src:r(35682).Z,width:"677",height:"399"})),(0,a.kt)("p",null,"The above figure shows an example of a pipeline and the corresponding task graph. Nodes in a task graph represent tasks, which input and/or output rows. Source readers correspond to ",(0,a.kt)("strong",{parentName:"p"},"source tasks"),", sink writers to ",(0,a.kt)("strong",{parentName:"p"},"sink tasks"),", and pumps to ",(0,a.kt)("strong",{parentName:"p"},"pump tasks"),". Intermediate edges in a task graph are ",(0,a.kt)("strong",{parentName:"p"},"queues"),". Rows are buffered in queues until the downstream tasks pop them as input."),(0,a.kt)("h2",{id:"how-task-executor-works-with-task-graph"},"How task executor works with task graph"),(0,a.kt)("p",null,"The task executor has two important workers:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Source worker"),": executes source tasks."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Generic worker"),": executes pump tasks and sink tasks.")),(0,a.kt)("p",null,"Both worker have configurable number of threads to run. By default, the number for both worker is 1."),(0,a.kt)("p",null,"A source task fetches a foreign record from a foreign source, converts it into a row, and pushes it a downstream queue.\nA pump task fetches a row from an upstream queue, executes a SQL statement on it, and pushes the result to downstream queues.\nA sink task fetches a row from an upstream queue, converts it into a foreign record format, and writes it to a foreign sink."),(0,a.kt)("p",null,"If you set the number of threads in the source worker to more than 1, rows coming from source readers can be ",(0,a.kt)("strong",{parentName:"p"},"out-of-order"),", which means an older foreign record may be pushed into a queue after a newer one."),(0,a.kt)("p",null,"It is also the case for the number of threads in the generic worker. Two or more threads in the generic worker may improve the throughput of a pipeline's stream processing but may lead to nondeterministic outputs from the out-of-order nature."),(0,a.kt)("admonition",{title:"why SpringQL has source worker and generic worker?",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"We chose to run source tasks using independent worker threads. They always feed streams from foreign data sources even in the Critical state.\nThis is to prevent foreign source processes from experiencing high memory usage."),(0,a.kt)("p",{parentName:"admonition"},"For example, if the source reader is a TCP agent that reads rows from a specific TCP ",(0,a.kt)("inlineCode",{parentName:"p"},"address:port"),", a delay in reading data from the socket connected to the foreign source TCP server may overwhelm the memory of the server or the OS kernel. This results in an OOM (out-of-memory) error, and the server process may die.\nTherefore, we decided that SpringQL will take the responsibility of managing memory for source input data.")))}h.isMDXComponent=!0},32540:function(e,t,r){t.Z=r.p+"assets/images/architecture.drawio-0f79d3eb17e0a181641ebbe5e980ceec.svg"},35682:function(e,t,r){t.Z=r.p+"assets/images/pipeline-and-task-graph.drawio-9f28b9135d6713212fd940d34dbbd75d.svg"}}]);