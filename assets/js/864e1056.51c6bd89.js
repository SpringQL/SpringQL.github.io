"use strict";(self.webpackChunkspring_ql=self.webpackChunkspring_ql||[]).push([[2266],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),f=i,d=m["".concat(s,".").concat(f)]||m[f]||u[f]||a;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},80862:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={sidebar_position:1},s="INSERT statement",c={unversionedId:"reference/sql/insert/index",id:"version-0.14/reference/sql/insert/index",title:"INSERT statement",description:"Part of CREATE PUMP statement.",source:"@site/versioned_docs/version-0.14/reference/sql/insert/index.md",sourceDirName:"reference/sql/insert",slug:"/reference/sql/insert/",permalink:"/reference/sql/insert/",editUrl:"https://github.com/SpringQL/SpringQL.github.io/blob/main/versioned_docs/version-0.14/reference/sql/insert/index.md",tags:[],version:"0.14",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Window join",permalink:"/reference/sql/query/window-join"},next:{title:"Introduction",permalink:"/deployment/"}},p={},u=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3}],m={toc:u};function f(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"insert-statement"},"INSERT statement"),(0,a.kt)("p",null,"Part of ",(0,a.kt)("a",{parentName:"p",href:"../create/create-pump"},(0,a.kt)("inlineCode",{parentName:"a"},"CREATE PUMP")," statement"),"."),(0,a.kt)("p",null,"Inserts rows into a downstream."),(0,a.kt)("h2",{id:"syntax"},"Syntax"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Syntax"',title:'"Syntax"'},"INSERT INTO <downstream_name> (<column_name>, ...)\n")),(0,a.kt)("h3",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Example"',title:'"Example"'},"CREATE PUMP ... AS\n  INSERT INTO sink_temperature_fahrenheit (ts, temperature)\n  SELECT ...\n")))}f.isMDXComponent=!0}}]);