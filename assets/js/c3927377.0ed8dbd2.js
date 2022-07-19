"use strict";(self.webpackChunkspring_ql=self.webpackChunkspring_ql||[]).push([[2866],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,f=c["".concat(l,".").concat(d)]||c[d]||u[d]||i;return n?r.createElement(f,o(o({ref:t},m),{},{components:n})):r.createElement(f,o({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},12278:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=n(83117),a=n(80102),i=(n(67294),n(3905)),o=["components"],s={sidebar_position:1.1},l="Stream",p={unversionedId:"learn-springql/pipeline/stream",id:"version-0.14/learn-springql/pipeline/stream",title:"Stream",description:"If you have experienced relational databases, you should know that tables are the core data models, which define types and constraints of columns.",source:"@site/versioned_docs/version-0.14/learn-springql/pipeline/stream.md",sourceDirName:"learn-springql/pipeline",slug:"/learn-springql/pipeline/stream",permalink:"/0.14/learn-springql/pipeline/stream",draft:!1,editUrl:"https://github.com/SpringQL/SpringQL.github.io/blob/main/versioned_docs/version-0.14/learn-springql/pipeline/stream.md",tags:[],version:"0.14",sidebarPosition:1.1,frontMatter:{sidebar_position:1.1},sidebar:"tutorialSidebar",previous:{title:"Pipeline",permalink:"/0.14/learn-springql/pipeline/"},next:{title:"Source reader",permalink:"/0.14/learn-springql/pipeline/source-reader"}},m={},u=[{value:"Rowtime, event time, and processing time",id:"rowtime-event-time-and-processing-time",level:2},{value:"Source streams and sink streams",id:"source-streams-and-sink-streams",level:2}],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"stream"},"Stream"),(0,i.kt)("p",null,"If you have experienced relational databases, you should know that ",(0,i.kt)("em",{parentName:"p"},"tables")," are the core data models, which define types and constraints of columns."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Streams")," in SpringQL are very similar to tables. They have columns, and columns have types and constraints.\nUnlike tables, however, streams do not persist rows. Rows flow through streams and then go to downstream streams (often just called ",(0,i.kt)("em",{parentName:"p"},"downstreams"),")."),(0,i.kt)("p",null,"Here is an example stream definition in SQL:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Stream definition in SQL"',title:'"Stream',definition:!0,in:!0,'SQL"':!0},"CREATE STREAM s (\n    ts TIMESTAMP NOT NULL ROWTIME,    \n    c1 INTEGER NOT NULL\n);\n")),(0,i.kt)("p",null,"This statements defines stream ",(0,i.kt)("inlineCode",{parentName:"p"},"s")," with two columns: ",(0,i.kt)("inlineCode",{parentName:"p"},"ts")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"c1"),".\n",(0,i.kt)("inlineCode",{parentName:"p"},"ts")," is a ",(0,i.kt)("inlineCode",{parentName:"p"},"TIMESTAMP")," type and should not take NULL value.\n",(0,i.kt)("inlineCode",{parentName:"p"},"c1")," is an ",(0,i.kt)("inlineCode",{parentName:"p"},"INTEGER")," type and also should not take NULL value."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ts")," has ",(0,i.kt)("inlineCode",{parentName:"p"},"ROWTIME")," keyword, which means the column works as an event time (see ",(0,i.kt)("a",{parentName:"p",href:"../event-time-and-watermark"},"Event time and watermark"),") for rows going through this stream."),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"./data-type"},"Data type")," page for more information about columns' definition."),(0,i.kt)("h2",{id:"rowtime-event-time-and-processing-time"},"Rowtime, event time, and processing time"),(0,i.kt)("p",null,"Every row in SpringQL has a ",(0,i.kt)("em",{parentName:"p"},"rowtime"),". A rowtime is either a:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Event time: when the stream definition includes a ",(0,i.kt)("inlineCode",{parentName:"li"},"ROWTIME")," keyword"),(0,i.kt)("li",{parentName:"ul"},"Processing time: otherwise.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Processing time is the time when the row is inserted to the stream.")))),(0,i.kt)("h2",{id:"source-streams-and-sink-streams"},"Source streams and sink streams"),(0,i.kt)("p",null,'SpringQL provides not only "normal" streams, but also ',(0,i.kt)("em",{parentName:"p"},"source streams")," and ",(0,i.kt)("em",{parentName:"p"},"sink streams"),"."),(0,i.kt)("p",null,"Source streams are streams to input foreign data via ",(0,i.kt)("a",{parentName:"p",href:"./source-reader"},"source readers"),", and\nsink streams are ones to output foreign data via ",(0,i.kt)("a",{parentName:"p",href:"./sink-writer"},"sink writers"),"."),(0,i.kt)("p",null,"The 3 types of streams are differently defined in SpringQL but currently there are no functional differences."))}d.isMDXComponent=!0}}]);