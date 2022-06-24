"use strict";(self.webpackChunkspring_ql=self.webpackChunkspring_ql||[]).push([[8531],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(67294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(t),m=i,d=f["".concat(l,".").concat(m)]||f[m]||u[m]||a;return t?n.createElement(d,o(o({ref:r},p),{},{components:t})):n.createElement(d,o({ref:r},p))}));function m(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=f;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},33524:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var n=t(87462),i=t(63366),a=(t(67294),t(3905)),o=["components"],c={sidebar_position:2},l="CREATE SINK WRITER",s={unversionedId:"reference/sql/create/create-sink-writer",id:"version-0.14/reference/sql/create/create-sink-writer",title:"CREATE SINK WRITER",description:"Creates a sink writer.",source:"@site/versioned_docs/version-0.14/reference/sql/create/create-sink-writer.md",sourceDirName:"reference/sql/create",slug:"/reference/sql/create/create-sink-writer",permalink:"/reference/sql/create/create-sink-writer",editUrl:"https://github.com/SpringQL/SpringQL.github.io/blob/main/versioned_docs/version-0.14/reference/sql/create/create-sink-writer.md",tags:[],version:"0.14",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"CREATE SOURCE READER",permalink:"/reference/sql/create/create-source-reader"},next:{title:"CREATE PUMP",permalink:"/reference/sql/create/create-pump"}},p={},u=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3}],f={toc:u};function m(e){var r=e.components,t=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-sink-writer"},"CREATE SINK WRITER"),(0,a.kt)("p",null,"Creates a ",(0,a.kt)("a",{parentName:"p",href:"/learn-springql/pipeline/sink-writer"},"sink writer"),"."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Syntax"',title:'"Syntax"'},"CREATE SINK WRITER <sink_writer_name> FOR <sink_stream_name>\n  TYPE <sink_writer_type>\n    <OPTIONS (...)>?\n")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Example"',title:'"Example"'},"CREATE SINK WRITER queue_temperature_fahrenheit FOR sink_temperature_fahrenheit\nTYPE IN_MEMORY_QUEUE OPTIONS (\n    NAME 'q'\n);\n")))}m.isMDXComponent=!0}}]);