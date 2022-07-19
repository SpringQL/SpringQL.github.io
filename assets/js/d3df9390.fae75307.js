"use strict";(self.webpackChunkspring_ql=self.webpackChunkspring_ql||[]).push([[5584],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,s=function(e,t){if(null==e)return{};var r,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var a=n.createContext({}),c=function(e){var t=n.useContext(a),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,s=e.mdxType,o=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(r),m=s,y=f["".concat(a,".").concat(m)]||f[m]||u[m]||o;return r?n.createElement(y,i(i({ref:t},p),{},{components:r})):n.createElement(y,i({ref:t},p))}));function m(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:s,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},45490:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return a},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var n=r(83117),s=r(80102),o=(r(67294),r(3905)),i=["components"],l={sidebar_position:1},a="select_list",c={unversionedId:"reference/sql/query/select-list",id:"version-0.16/reference/sql/query/select-list",title:"select_list",description:"selectlist_ determines what expressions (column reference, for example) to pass to a downstream.",source:"@site/versioned_docs/version-0.16/reference/sql/query/select-list.md",sourceDirName:"reference/sql/query",slug:"/reference/sql/query/select-list",permalink:"/0.16/reference/sql/query/select-list",draft:!1,editUrl:"https://github.com/SpringQL/SpringQL.github.io/blob/main/versioned_docs/version-0.16/reference/sql/query/select-list.md",tags:[],version:"0.16",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"SELECT statement",permalink:"/0.16/reference/sql/query/"},next:{title:"Expression",permalink:"/0.16/reference/sql/query/expression"}},p={},u=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3}],f={toc:u};function m(e){var t=e.components,r=(0,s.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"select_list"},"select_list"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"select_list")," determines what expressions (column reference, for example) to pass to a downstream."),(0,o.kt)("p",null,"See also: ",(0,o.kt)("a",{parentName:"p",href:"./expression"},"expression"),"."),(0,o.kt)("h2",{id:"syntax"},"Syntax"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Syntax"',title:'"Syntax"'},"SELECT STREAM <select_list> FROM ...\n")),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Example"',title:'"Example"'},"SELECT\n  s.c1,       -- column reference\n  s.c1 + 1,   -- expression\n  1 + 1,      -- constant expression\n  FLOOR(s.c2) -- expression\nFROM s\n...\n")))}m.isMDXComponent=!0}}]);