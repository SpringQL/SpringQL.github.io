"use strict";(self.webpackChunkspring_ql=self.webpackChunkspring_ql||[]).push([[4806],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return c}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},w={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(n),c=i,m=u["".concat(s,".").concat(c)]||u[c]||w[c]||r;return n?a.createElement(m,o(o({ref:t},p),{},{components:n})):a.createElement(m,o({ref:t},p))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},31811:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return w}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),o=["components"],l={sidebar_position:3},s="Window",d={unversionedId:"learn-springql/window",id:"version-0.14/learn-springql/window",title:"Window",description:"Window is one of the most important tools in stream processing. It splits unbounded stream data into bounded ports.",source:"@site/versioned_docs/version-0.14/learn-springql/window.md",sourceDirName:"learn-springql",slug:"/learn-springql/window",permalink:"/0.14/learn-springql/window",draft:!1,editUrl:"https://github.com/SpringQL/SpringQL.github.io/blob/main/versioned_docs/version-0.14/learn-springql/window.md",tags:[],version:"0.14",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Event time and watermark",permalink:"/0.14/learn-springql/event-time-and-watermark"},next:{title:"SpringQL's Execution Model",permalink:"/0.14/learn-springql/execution-model"}},p={},w=[{value:"Window in SpringQL",id:"window-in-springql",level:2},{value:"Window types",id:"window-types",level:3},{value:"Window pane",id:"window-pane",level:3},{value:"When a pane start at for time-based windows?",id:"when-a-pane-start-at-for-time-based-windows",level:4},{value:"Triggers",id:"triggers",level:3},{value:"Handling late data in SpringQL",id:"handling-late-data-in-springql",level:2}],u={toc:w};function c(e){var t=e.components,l=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"window"},"Window"),(0,r.kt)("p",null,"Window is one of the most important tools in stream processing. It splits unbounded stream data into bounded ports.\nSet operations such as aggregation, sort, and join are only applied to bounded data using windows."),(0,r.kt)("p",null,"We will explain about windows and related operations in the future but currently you can refer to the following materials to get understand them:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.oreilly.com/radar/the-world-beyond-batch-streaming-101/"},"Streaming 101: The world beyond batch")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.oreilly.com/radar/the-world-beyond-batch-streaming-102/"},"Streaming 102: The world beyond batch")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.oreilly.com/library/view/streaming-systems/9781491983867/"},"Streaming Systems (book)")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nightlies.apache.org/flink/flink-docs-master/docs/dev/datastream/operators/windows/"},"Windows | Apache Flink"))),(0,r.kt)("h2",{id:"window-in-springql"},"Window in SpringQL"),(0,r.kt)("h3",{id:"window-types"},"Window types"),(0,r.kt)("p",null,"Currently, SpringQL supports the follwing window types:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Event-time-based:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"fixed window (also called tumbling window)"),(0,r.kt)("li",{parentName:"ul"},"sliding window")))),(0,r.kt)("p",null,"Count-based windows, global windows, and session windows are not supported."),(0,r.kt)("h3",{id:"window-pane"},"Window pane"),(0,r.kt)("p",null,"You can create 0 or 1 window in a pump. ",(0,r.kt)("inlineCode",{parentName:"p"},"WINDOW")," clause creates a window."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="10-sec fixed window (event-time-based)"',title:'"10-sec',fixed:!0,window:!0,'(event-time-based)"':!0},"CREATE PUMP p AS\n  INSERT INTO s2 ...\n  SELECT ... FROM s1 ...\n    FIXED WINDOW DURATION_SECS(10);\n")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Window and panes",src:n(95792).Z,width:"786",height:"191"})),(0,r.kt)("p",null,"A window has panes inside. A pane works as a bound of rows from unbounded rows."),(0,r.kt)("p",null,"You do not explicitly write about panes in SpringQL but SpringQL users may want to know about panes to understand windows' behavior."),(0,r.kt)("h4",{id:"when-a-pane-start-at-for-time-based-windows"},"When a pane start at for time-based windows?"),(0,r.kt)("p",null,"Users cannot specify the start time of panes.\nFor example, a pane in a 10-sec window can start from ",(0,r.kt)("inlineCode",{parentName:"p"},"12:00:00")," but cannot from ",(0,r.kt)("inlineCode",{parentName:"p"},"12:00:05"),"."),(0,r.kt)("p",null,"For 1-sec, 2-sec, 3-sec, 5-sec, ... and 60-sec (factors of 60) time-based windows, you may intuitively list start times.\nFor 7-sec window, when are the start times?\nIn the current implementation, ",(0,r.kt)("inlineCode",{parentName:"p"},"1970-01-01 00:00:00")," (origin of unixtime) is used as an origin point. So the start times of 7-sec window panes are: ",(0,r.kt)("inlineCode",{parentName:"p"},"1970-01-01 00:00:00"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"1970-01-01 00:00:07"),", ..."),(0,r.kt)("h3",{id:"triggers"},"Triggers"),(0,r.kt)("p",null,"SpringQL currently provides very limited functionality for triggers."),(0,r.kt)("p",null,"Downstreams of a window pump observe only the result of the window operation. They cannot see any intermediate values before panes (splits of a window) get closed."),(0,r.kt)("h2",{id:"handling-late-data-in-springql"},"Handling late data in SpringQL"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"WINDOW"),' clauses in SpringQL take "allowed latency" argument.'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="1 sec allowed latency"',title:'"1',sec:!0,allowed:!0,'latency"':!0},"CREATE PUMP p AS\n  INSERT INTO s2 ...\n  SELECT ... FROM s1 ...\n    FIXED WINDOW DURATION_SECS(10), DURATION_SECS(1);\n")),(0,r.kt)("p",null,"In the above statement, you create 10-sec fixed window allowing 1-sec late data.\nLate data are allowed to get in a window pane only if their latencies are less than 1 second."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Late data (1)",src:n(54080).Z,width:"786",height:"191"})),(0,r.kt)("p",null,"^ At first, no pane is created inside the window."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Late data (2)",src:n(49983).Z,width:"786",height:"241"})),(0,r.kt)("p",null,"^ The window gets ",(0,r.kt)("inlineCode",{parentName:"p"},"12:00:00")," row. It updates the watermark and ",(0,r.kt)("inlineCode",{parentName:"p"},"[12:00:00, 12:00:10)")," pane is created from the new watermark."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Late data (3)",src:n(28930).Z,width:"786",height:"241"})),(0,r.kt)("p",null,"^ ",(0,r.kt)("inlineCode",{parentName:"p"},"12:00:10")," row updates the watermark and creates ",(0,r.kt)("inlineCode",{parentName:"p"},"[12:00:10, 12:00:20)")," pane. The ",(0,r.kt)("inlineCode",{parentName:"p"},"[12:00:00, 12:00:10)")," pane is not closed by the new watermark because the window allows 1-sec latency."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Late data (4)",src:n(1869).Z,width:"786",height:"241"})),(0,r.kt)("p",null,"^ ",(0,r.kt)("inlineCode",{parentName:"p"},"12:00:05")," comes after ",(0,r.kt)("inlineCode",{parentName:"p"},"12:00:10")," but it is in-time due to the 1-sec allowed latency. The row does not update the watermark because the timestamp is less than the watermark."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Late data (5)",src:n(71282).Z,width:"786",height:"241"})),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"12:00:11")," row updates the watermark and the ",(0,r.kt)("inlineCode",{parentName:"p"},"[12:00:00, 12:00:10)")," pane is closed by the new watermark because the row exceeds the allowed latency of the pane. The new watermark creates ",(0,r.kt)("inlineCode",{parentName:"p"},"[12:00:11, 12:00:21)")," pane."))}c.isMDXComponent=!0},54080:function(e,t,n){t.Z=n.p+"assets/images/late-data-1.drawio-14a0d335e6d319d51590a0ab17495bcc.svg"},49983:function(e,t,n){t.Z=n.p+"assets/images/late-data-2.drawio-a17739c54f6530b660ef8973b6c3b4f0.svg"},28930:function(e,t,n){t.Z=n.p+"assets/images/late-data-3.drawio-16636a10348e4cd62ca4c7fbf0062f0d.svg"},1869:function(e,t,n){t.Z=n.p+"assets/images/late-data-4.drawio-8e6b961d5b98aa3fbeb923fe138d420c.svg"},71282:function(e,t,n){t.Z=n.p+"assets/images/late-data-5.drawio-581235241c6c9a6c2e7533a872ad1ae5.svg"},95792:function(e,t,n){t.Z=n.p+"assets/images/pane.drawio-51623cb45cf504e80106b5e7037b1288.svg"}}]);