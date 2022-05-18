"use strict";(self.webpackChunkspring_ql=self.webpackChunkspring_ql||[]).push([[593],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=m(n),d=a,k=c["".concat(p,".").concat(d)]||c[d]||u[d]||i;return n?r.createElement(k,o(o({ref:t},s),{},{components:n})):r.createElement(k,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5724:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return l},metadata:function(){return m},toc:function(){return u}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:2},p="Event Time and Watermark",m={unversionedId:"learn-springql/event-time-and-watermark",id:"learn-springql/event-time-and-watermark",title:"Event Time and Watermark",description:"Event time is a timestamp attached to a row. The timestamp can be anything but it is usually the time the row is generated.",source:"@site/docs/learn-springql/event-time-and-watermark.md",sourceDirName:"learn-springql",slug:"/learn-springql/event-time-and-watermark",permalink:"/learn-springql/event-time-and-watermark",editUrl:"https://github.com/SpringQL/SpringQL.github.io/blob/main/docs/learn-springql/event-time-and-watermark.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction: Why to Learn Stream Processing?",permalink:"/learn-springql/introduction-why-to-learn-stream-processing"},next:{title:"Window",permalink:"/learn-springql/window"}},s={},u=[{value:"Event time in SpringQL",id:"event-time-in-springql",level:2},{value:"Watermark in SpringQL",id:"watermark-in-springql",level:2}],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"event-time-and-watermark"},"Event Time and Watermark"),(0,i.kt)("p",null,"Event time is a timestamp attached to a row. The timestamp can be anything but it is usually the time the row is generated.\nA sensor might add a timestamp to a sensor data, and stream processors can use the timestamp as an event time."),(0,i.kt)("p",null,"Event time is different from the real time (wall-clock time).\nStream processors may input rows from log files that have lines with past timestamps. The past timestamps can be dealt with event times."),(0,i.kt)("p",null,"Watermark is similar to a clock in event-time world. A watermark usually proceeds when a stream processor observes a row with the latest event time."),(0,i.kt)("p",null,"Watermark is used to deal with late data. A stream processor may observe ",(0,i.kt)("inlineCode",{parentName:"p"},"12:09:59")," (event time) after ",(0,i.kt)("inlineCode",{parentName:"p"},"12:10:00"),".\nWatermark provides a criteria for users of stream processors to decide how to deal with the ",(0,i.kt)("inlineCode",{parentName:"p"},"12:09:59")," row."),(0,i.kt)("p",null,"We will explain them in the future but currently you can refer to the following materials to get understand them:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.oreilly.com/radar/the-world-beyond-batch-streaming-101/"},"Streaming 101: The world beyond batch")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.oreilly.com/library/view/streaming-systems/9781491983867/"},"Streaming Systems (book)"))),(0,i.kt)("h2",{id:"event-time-in-springql"},"Event time in SpringQL"),(0,i.kt)("p",null,"In SpringQL, you can specify which column to regard as an event time in stream definitions."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Defining an event time column"',title:'"Defining',an:!0,event:!0,time:!0,'column"':!0},"CREATE STREAM s (\n  c1 TIMESTAMP NOT NULL ROWTIME,\n  c2 TIMESTAMP NOT NULL\n);\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"c1")," is a ",(0,i.kt)("inlineCode",{parentName:"p"},"TIMESTAMP")," type and followed by ",(0,i.kt)("inlineCode",{parentName:"p"},"ROWTIME")," keyword to describe the column is the event time in the stream ",(0,i.kt)("inlineCode",{parentName:"p"},"s"),".\n",(0,i.kt)("inlineCode",{parentName:"p"},"c2")," also has the ",(0,i.kt)("inlineCode",{parentName:"p"},"TIMESTAMP")," type but it is not an event time because it does not have ",(0,i.kt)("inlineCode",{parentName:"p"},"ROWTIME")," keyword."),(0,i.kt)("h2",{id:"watermark-in-springql"},"Watermark in SpringQL"),(0,i.kt)("p",null,"SpringQL has a watermark for a window. If you create a pump with a ",(0,i.kt)("inlineCode",{parentName:"p"},"WINDOW")," clause, you implicitly create a watermark."),(0,i.kt)("p",null,"A watermark is locally used in a window to point the current time in event-time."),(0,i.kt)("p",null,"Currently, SpringQL adopts only a simple way to update a watermark: A watermark is the maximum event time a window observes."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"A window is generated from ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE PUMP ... WINDOW ...;")),(0,i.kt)("p",{parentName:"li"},"-> Watermark is undefined")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The window inputs 1st row with ",(0,i.kt)("inlineCode",{parentName:"p"},"12:00:00")," (event time)."),(0,i.kt)("p",{parentName:"li"},"-> Watermark is ",(0,i.kt)("inlineCode",{parentName:"p"},"12:00:00"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The window inputs 2nd row with ",(0,i.kt)("inlineCode",{parentName:"p"},"12:01:00"),"."),(0,i.kt)("p",{parentName:"li"},"-> Watermark is ",(0,i.kt)("inlineCode",{parentName:"p"},"12:01:00"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"The window inputs 2nd row with ",(0,i.kt)("inlineCode",{parentName:"p"},"12:00:30")," (late data)."),(0,i.kt)("p",{parentName:"li"},"-> Watermark is still ",(0,i.kt)("inlineCode",{parentName:"p"},"12:01:00")))))}d.isMDXComponent=!0}}]);