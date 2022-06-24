"use strict";(self.webpackChunkspring_ql=self.webpackChunkspring_ql||[]).push([[8649],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(r),f=a,y=m["".concat(l,".").concat(f)]||m[f]||p[f]||o;return r?n.createElement(y,c(c({ref:t},u),{},{components:r})):n.createElement(y,c({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var s=2;s<o;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},17980:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),c=["components"],i={sidebar_position:1.1},l="CREATE STREAM",s={unversionedId:"reference/sql/create/create-stream",id:"reference/sql/create/create-stream",title:"CREATE STREAM",description:"Creates a stream, source stream, or sink stream.",source:"@site/docs/reference/sql/create/create-stream.md",sourceDirName:"reference/sql/create",slug:"/reference/sql/create/create-stream",permalink:"/next/reference/sql/create/create-stream",editUrl:"https://github.com/SpringQL/SpringQL.github.io/blob/main/docs/reference/sql/create/create-stream.md",tags:[],version:"current",sidebarPosition:1.1,frontMatter:{sidebar_position:1.1},sidebar:"tutorialSidebar",previous:{title:"Syntax",permalink:"/next/reference/sql/syntax"},next:{title:"CREATE SOURCE READER",permalink:"/next/reference/sql/create/create-source-reader"}},u={},p=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3}],m={toc:p};function f(e){var t=e.components,r=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"create-stream"},"CREATE STREAM"),(0,o.kt)("p",null,"Creates a ",(0,o.kt)("a",{parentName:"p",href:"/learn-springql/pipeline/stream"},"stream, source stream, or sink stream"),"."),(0,o.kt)("h2",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Syntax"',title:'"Syntax"'},"CREATE [STREAM | SOURCE STREAM | SINK STREAM] <stream_name> (\n  <column_name> <data_type> <column_constraints*>\n  , ...\n)\n")),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Example"',title:'"Example"'},"CREATE SOURCE STREAM source_temperature_celsius (\n    ts TIMESTAMP NOT NULL ROWTIME,    \n    temperature FLOAT NOT NULL\n)\n")))}f.isMDXComponent=!0}}]);