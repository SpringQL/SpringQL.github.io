"use strict";(self.webpackChunkspring_ql=self.webpackChunkspring_ql||[]).push([[8928],{3905:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return m}});var t=n(67294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=t.createContext({}),l=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},p=function(e){var r=l(e.components);return t.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(n),m=o,y=f["".concat(c,".").concat(m)]||f[m]||u[m]||i;return n?t.createElement(y,a(a({ref:r},p),{},{components:n})):t.createElement(y,a({ref:r},p))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=n[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},95264:function(e,r,n){n.r(r),n.d(r,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var t=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],s={sidebar_position:2},c="Syntax",l={unversionedId:"reference/sql/syntax",id:"version-0.14/reference/sql/syntax",title:"Syntax",description:"SQL supported in SpringQL is syntactically defined in PEG (parsing expression grammars).",source:"@site/versioned_docs/version-0.14/reference/sql/syntax.md",sourceDirName:"reference/sql",slug:"/reference/sql/syntax",permalink:"/reference/sql/syntax",editUrl:"https://github.com/SpringQL/SpringQL.github.io/blob/main/versioned_docs/version-0.14/reference/sql/syntax.md",tags:[],version:"0.14",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"SQL",permalink:"/reference/sql/"},next:{title:"CREATE STREAM",permalink:"/reference/sql/create/create-stream"}},p={},u=[],f={toc:u};function m(e){var r=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,t.Z)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,"SQL supported in SpringQL is syntactically defined in PEG (parsing expression grammars)."),(0,i.kt)("p",null,"You can refer to full syntax currently supported in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SpringQL/SpringQL/blob/main/springql-core/src/sql_processor/sql_parser/pest_grammar/springql.pest"},"this file"),"."),(0,i.kt)("p",null,"Note, however, that some syntactically valid statements would not work properly from implementations issue."))}m.isMDXComponent=!0}}]);