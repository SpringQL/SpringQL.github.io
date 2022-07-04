"use strict";(self.webpackChunkspring_ql=self.webpackChunkspring_ql||[]).push([[4012],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function g(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=g(e,["components","mdxType","originalType","parentName"]),p=s(t),d=i,w=p["".concat(l,".").concat(d)]||p[d]||c[d]||o;return t?r.createElement(w,a(a({ref:n},u),{},{components:t})):r.createElement(w,a({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=p;var g={};for(var l in n)hasOwnProperty.call(n,l)&&(g[l]=n[l]);g.originalType=e,g.mdxType="string"==typeof e?e:i,a[1]=g;for(var s=2;s<o;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},84259:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return g},metadata:function(){return s},toc:function(){return c}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],g={sidebar_position:2},l="Window aggregation",s={unversionedId:"reference/sql/query/window-aggregation",id:"version-0.15/reference/sql/query/window-aggregation",title:"Window aggregation",description:"In this page, you will see how to write window aggregations in SELECT statements.",source:"@site/versioned_docs/version-0.15/reference/sql/query/window-aggregation.md",sourceDirName:"reference/sql/query",slug:"/reference/sql/query/window-aggregation",permalink:"/0.15/reference/sql/query/window-aggregation",editUrl:"https://github.com/SpringQL/SpringQL.github.io/blob/main/versioned_docs/version-0.15/reference/sql/query/window-aggregation.md",tags:[],version:"0.15",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Expression",permalink:"/0.15/reference/sql/query/expression"},next:{title:"Window join",permalink:"/0.15/reference/sql/query/window-join"}},u={},c=[{value:"Aggregation without grouping",id:"aggregation-without-grouping",level:2},{value:"Aggregation with grouping",id:"aggregation-with-grouping",level:2}],p={toc:c};function d(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"window-aggregation"},"Window aggregation"),(0,o.kt)("p",null,"In this page, you will see how to write window aggregations in SELECT statements.\nSee ",(0,o.kt)("a",{parentName:"p",href:"/learn-springql/window"},"window")," to understand the concept around windowing in SpringQL."),(0,o.kt)("p",null,"Understanding on ",(0,o.kt)("inlineCode",{parentName:"p"},"GROUP BY")," in standard SQL is also required, so learn a bit about it before writing SpringQL's queries."),(0,o.kt)("h2",{id:"aggregation-without-grouping"},"Aggregation without grouping"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Aggregation without grouping"',title:'"Aggregation',without:!0,'grouping"':!0},"SELECT STREAM\n    <aggregate expression> [AS <alias>] \n    <, ...>*\nFROM <stream name>\n[FIXED | SLIDING] WINDOW <time-based width in DURATION>, <allowed latency in DURATION>;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Example (10-sec fixed window; 1-sec allowed latency)"',title:'"Example',"(10-sec":!0,fixed:!0,"window;":!0,"1-sec":!0,allowed:!0,'latency)"':!0},"SELECT STREAM\n    AVG(source_trade.amount) AS avg_amount\nFROM source_trade\nFIXED WINDOW DURATION_SECS(10), DURATION_SECS(1);\n")),(0,o.kt)("h2",{id:"aggregation-with-grouping"},"Aggregation with grouping"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Aggregation without grouping"',title:'"Aggregation',without:!0,'grouping"':!0},"SELECT STREAM\n    [<aggregate expression> | <group-by key>] [AS <alias>] \n    <, ...>*\nFROM <stream name>\nGROUP BY <group-by key> <, ...>*\n[FIXED | SLIDING] WINDOW <time-based width in DURATION>, <allowed latency in DURATION>;\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Example (10-sec fixed window; 0-sec allowed latency)"',title:'"Example',"(10-sec":!0,fixed:!0,"window;":!0,"0-sec":!0,allowed:!0,'latency)"':!0},"SELECT STREAM\n    FLOOR_TIME(source_trade.ts, DURATION_SECS(10)) AS min_ts,\n    source_trade.ticker AS ticker,\n    AVG(source_trade.amount) AS avg_amount\nFROM source_trade\nGROUP BY min_ts, ticker\nFIXED WINDOW DURATION_SECS(10), DURATION_SECS(0);\n")))}d.isMDXComponent=!0}}]);