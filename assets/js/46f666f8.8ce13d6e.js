"use strict";(self.webpackChunkspring_ql=self.webpackChunkspring_ql||[]).push([[9361],{3905:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return m}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),u=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},s=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,c=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=u(t),m=a,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||c;return t?n.createElement(d,o(o({ref:r},s),{},{components:t})):n.createElement(d,o({ref:r},s))}));function m(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<c;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4527:function(e,r,t){t.r(r),t.d(r,{assets:function(){return s},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return i},metadata:function(){return u},toc:function(){return p}});var n=t(83117),a=t(80102),c=(t(67294),t(3905)),o=["components"],i={sidebar_position:1.5},l="CREATE SOURCE READER",u={unversionedId:"reference/sql/create/create-source-reader",id:"reference/sql/create/create-source-reader",title:"CREATE SOURCE READER",description:"Creates a source reader.",source:"@site/docs/reference/sql/create/create-source-reader.md",sourceDirName:"reference/sql/create",slug:"/reference/sql/create/create-source-reader",permalink:"/next/reference/sql/create/create-source-reader",draft:!1,editUrl:"https://github.com/SpringQL/SpringQL.github.io/blob/main/docs/reference/sql/create/create-source-reader.md",tags:[],version:"current",sidebarPosition:1.5,frontMatter:{sidebar_position:1.5},sidebar:"tutorialSidebar",previous:{title:"CREATE STREAM",permalink:"/next/reference/sql/create/create-stream"},next:{title:"CREATE SINK WRITER",permalink:"/next/reference/sql/create/create-sink-writer"}},s={},p=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3}],f={toc:p};function m(e){var r=e.components,t=(0,a.Z)(e,o);return(0,c.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("h1",{id:"create-source-reader"},"CREATE SOURCE READER"),(0,c.kt)("p",null,"Creates a ",(0,c.kt)("a",{parentName:"p",href:"/learn-springql/pipeline/source-reader"},"source reader"),"."),(0,c.kt)("h2",{id:"syntax"},"Syntax"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Syntax"',title:'"Syntax"'},"CREATE SOURCE READER <source_reader_name> FOR <source_stream_name>\n  TYPE <source_reader_type>\n    <OPTIONS (...)>?\n")),(0,c.kt)("h3",{id:"example"},"Example"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Example"',title:'"Example"'},"CREATE SOURCE READER tcp_temperature_celsius FOR source_temperature_celsius\nTYPE NET_SERVER OPTIONS (\n    PROTOCOL 'TCP',\n    PORT '54321'\n);\n")))}m.isMDXComponent=!0}}]);