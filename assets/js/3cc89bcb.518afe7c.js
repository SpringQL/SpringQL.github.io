"use strict";(self.webpackChunkspring_ql=self.webpackChunkspring_ql||[]).push([[6501],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(r),m=a,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},14309:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var n=r(83117),a=r(80102),o=(r(67294),r(3905)),i=["components"],c={sidebar_position:0},l="SELECT statement",s={unversionedId:"reference/sql/query/index",id:"reference/sql/query/index",title:"SELECT statement",description:"Part of CREATE PUMP statement.",source:"@site/docs/reference/sql/query/index.md",sourceDirName:"reference/sql/query",slug:"/reference/sql/query/",permalink:"/next/reference/sql/query/",draft:!1,editUrl:"https://github.com/SpringQL/SpringQL.github.io/blob/main/docs/reference/sql/query/index.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"CREATE PUMP",permalink:"/next/reference/sql/create/create-pump"},next:{title:"select_list",permalink:"/next/reference/sql/query/select-list"}},u={},p=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3}],f={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"select-statement"},"SELECT statement"),(0,o.kt)("p",null,"Part of ",(0,o.kt)("a",{parentName:"p",href:"../create/create-pump"},(0,o.kt)("inlineCode",{parentName:"a"},"CREATE PUMP")," statement"),"."),(0,o.kt)("p",null,"Fetches rows from upstreams, and processes the rows."),(0,o.kt)("h2",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Syntax"',title:'"Syntax"'},"SELECT STREAM\n  <select_list>\nFROM <stream_name>\n     <join_clause>?\n<group_by_clause>?\n<window_clause>?\n")),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Example"',title:'"Example"'},"SELECT STREAM\n    FLOOR_TIME(source_trade.ts, DURATION_SECS(10)) AS min_ts,\n    AVG(source_trade.amount) AS avg_amount\nFROM source_trade\nGROUP BY min_ts\nFIXED WINDOW DURATION_SECS(10), DURATION_SECS(0);\n")))}m.isMDXComponent=!0}}]);