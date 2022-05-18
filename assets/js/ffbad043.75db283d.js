"use strict";(self.webpackChunkspring_ql=self.webpackChunkspring_ql||[]).push([[933],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return h}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(r),h=a,m=d["".concat(p,".").concat(h)]||d[h]||l[h]||o;return r?n.createElement(m,i(i({ref:t},c),{},{components:r})):n.createElement(m,i({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4564:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return h},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return l}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],s={sidebar_position:4},p="SpringQL's Execution Model",u={unversionedId:"learn-springql/execution-model",id:"learn-springql/execution-model",title:"SpringQL's Execution Model",description:"In this page, you'll learn how a pipeline you defined is executed in SpringQL.",source:"@site/docs/learn-springql/execution-model.md",sourceDirName:"learn-springql",slug:"/learn-springql/execution-model",permalink:"/learn-springql/execution-model",editUrl:"https://github.com/SpringQL/SpringQL.github.io/blob/main/docs/learn-springql/execution-model.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Window",permalink:"/learn-springql/window"},next:{title:"Introduction",permalink:"/reference/"}},c={},l=[{value:"SpringQL&#39;s architecture",id:"springqls-architecture",level:2},{value:"Pipeline and task graph",id:"pipeline-and-task-graph",level:2},{value:"How task executor works with task graph",id:"how-task-executor-works-with-task-graph",level:2}],d={toc:l};function h(e){var t=e.components,s=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"springqls-execution-model"},"SpringQL's Execution Model"),(0,o.kt)("p",null,"In this page, you'll learn how a pipeline you defined is executed in SpringQL.\nYou will get less surprise from SpringQL's behaviors and outputs after understanding the contents of this page."),(0,o.kt)("h2",{id:"springqls-architecture"},"SpringQL's architecture"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"SpringQL&#39;s architecture",src:r(2540).Z,width:"441",height:"474"})),(0,o.kt)("p",null,"The above figure shows the system architecture of SpringQL. The control flow to modify a pipeline starts from the SQL submitted from a host application.\nThe application process dynamically links to the shared library of SpringQL. It calls SpringQL's API with the SQL string parameter.\nThen, the SQL is parsed and converted into internal commands by the SQL processor to alter the pipeline.\nThe SQL executor in the stream engine receives commands and updates its pipeline. It then sends commands to the task executor in the autonomous executor to update the corresponding ",(0,o.kt)("strong",{parentName:"p"},"task graph"),"."),(0,o.kt)("h2",{id:"pipeline-and-task-graph"},"Pipeline and task graph"),(0,o.kt)("p",null,"Here introduces the concept of ",(0,o.kt)("strong",{parentName:"p"},"task graph")," and its relationship between pipelines.\nThe task graph is at the heart of SpringQL's internal execution."),(0,o.kt)("p",null,"A task graph is uniquely generated from a pipeline. It is a graph representation for the task executor runtime, whereas a pipeline is for users who write SQLs."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Pipeline and task graph",src:r(5682).Z,width:"677",height:"399"})),(0,o.kt)("p",null,"The above figure shows an example of a pipeline and the corresponding task graph. Nodes in a task graph represent tasks, which input and/or output rows. Source readers correspond to ",(0,o.kt)("strong",{parentName:"p"},"source tasks"),", sink writers to ",(0,o.kt)("strong",{parentName:"p"},"sink tasks"),", and pumps to ",(0,o.kt)("strong",{parentName:"p"},"pump tasks"),". Intermediate edges in a task graph are ",(0,o.kt)("strong",{parentName:"p"},"queues"),". Rows are buffered in queues until the downstream tasks pop them as input."),(0,o.kt)("h2",{id:"how-task-executor-works-with-task-graph"},"How task executor works with task graph"),(0,o.kt)("p",null,"The task executor has two important workers:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Source worker"),": executes source tasks."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Generic worker"),": executes pump tasks and sink tasks.")),(0,o.kt)("p",null,"Both worker have configurable number of threads to run. By default, the number for both worker is 1."),(0,o.kt)("p",null,"A source task fetches a foreign record from a foreign source, converts it into a row, and pushes it a downstream queue.\nA pump task fetches a row from an upstream queue, executes a SQL statement on it, and pushes the result to downstream queues.\nA sink task fetches a row from an upstream queue, converts it into a foreign record format, and writes it to a foreign sink."),(0,o.kt)("p",null,"If you set the number of threads in the source worker to more than 1, rows coming from source readers can be ",(0,o.kt)("strong",{parentName:"p"},"out-of-order"),", which means an older foreign record may be pushed into a queue after a newer one."),(0,o.kt)("p",null,"It is also the case for the number of threads in the generic worker. Two or more threads in the generic worker may improve the throughput of a pipeline's stream processing but may lead to nondeterministic outputs from the out-of-order nature."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"why SpringQL has source worker and generic worker?")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We chose to run source tasks using independent worker threads. They always feed streams from foreign data sources even in the Critical state.\nThis is to prevent foreign source processes from experiencing high memory usage."),(0,o.kt)("p",{parentName:"div"},"For example, if the source reader is a TCP agent that reads rows from a specific TCP ",(0,o.kt)("inlineCode",{parentName:"p"},"address:port"),", a delay in reading data from the socket connected to the foreign source TCP server may overwhelm the memory of the server or the OS kernel. This results in an OOM (out-of-memory) error, and the server process may die.\nTherefore, we decided that SpringQL will take the responsibility of managing memory for source input data."))))}h.isMDXComponent=!0},2540:function(e,t,r){t.Z=r.p+"assets/images/architecture.drawio-0f79d3eb17e0a181641ebbe5e980ceec.svg"},5682:function(e,t,r){t.Z=r.p+"assets/images/pipeline-and-task-graph.drawio-9f28b9135d6713212fd940d34dbbd75d.svg"}}]);