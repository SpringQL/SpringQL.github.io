"use strict";(self.webpackChunkspring_ql=self.webpackChunkspring_ql||[]).push([[7209],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),f=s(t),m=a,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||i;return t?n.createElement(d,c(c({ref:r},p),{},{components:t})):n.createElement(d,c({ref:r},p))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,c=new Array(i);c[0]=f;var o={};for(var l in r)hasOwnProperty.call(r,l)&&(o[l]=r[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var s=2;s<i;s++)c[s]=t[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2178:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var n=t(87462),a=t(63366),i=(t(67294),t(3905)),c=["components"],o={sidebar_position:2},l="CREATE SINK WRITER",s={unversionedId:"reference/sql/create/create-sink-writer",id:"reference/sql/create/create-sink-writer",title:"CREATE SINK WRITER",description:"Creates a sink writer.",source:"@site/docs/reference/sql/create/create-sink-writer.md",sourceDirName:"reference/sql/create",slug:"/reference/sql/create/create-sink-writer",permalink:"/next/reference/sql/create/create-sink-writer",editUrl:"https://github.com/SpringQL/SpringQL.github.io/blob/main/docs/reference/sql/create/create-sink-writer.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"CREATE SOURCE READER",permalink:"/next/reference/sql/create/create-source-reader"},next:{title:"CREATE PUMP",permalink:"/next/reference/sql/create/create-pump"}},p={},u=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3}],f={toc:u};function m(e){var r=e.components,t=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-sink-writer"},"CREATE SINK WRITER"),(0,i.kt)("p",null,"Creates a ",(0,i.kt)("a",{parentName:"p",href:"/learn-springql/pipeline/sink-writer"},"sink writer"),"."),(0,i.kt)("h2",{id:"syntax"},"Syntax"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Syntax"',title:'"Syntax"'},"CREATE SINK WRITER <sink_writer_name> FOR <sink_stream_name>\n  TYPE <sink_writer_type>\n    <OPTIONS (...)>?\n")),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Example"',title:'"Example"'},"CREATE SINK WRITER queue_temperature_fahrenheit FOR sink_temperature_fahrenheit\nTYPE IN_MEMORY_QUEUE OPTIONS (\n    NAME 'q'\n);\n")))}m.isMDXComponent=!0}}]);