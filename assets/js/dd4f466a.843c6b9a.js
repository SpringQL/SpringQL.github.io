"use strict";(self.webpackChunkspring_ql=self.webpackChunkspring_ql||[]).push([[374],{3905:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return y}});var n=t(67294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),l=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=l(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),f=l(t),y=o,m=f["".concat(c,".").concat(y)]||f[y]||u[y]||i;return t?n.createElement(m,a(a({ref:r},p),{},{components:t})):n.createElement(m,a({ref:r},p))}));function y(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},25735:function(e,r,t){t.r(r),t.d(r,{assets:function(){return p},contentTitle:function(){return c},default:function(){return y},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=t(87462),o=t(63366),i=(t(67294),t(3905)),a=["components"],s={sidebar_position:2},c="Syntax",l={unversionedId:"reference/sql/syntax",id:"reference/sql/syntax",title:"Syntax",description:"SQL supported in SpringQL is syntactically defined in PEG (parsing expression grammars).",source:"@site/docs/reference/sql/syntax.md",sourceDirName:"reference/sql",slug:"/reference/sql/syntax",permalink:"/reference/sql/syntax",editUrl:"https://github.com/SpringQL/SpringQL.github.io/blob/main/docs/reference/sql/syntax.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"SQL",permalink:"/reference/sql/"},next:{title:"select-list",permalink:"/reference/sql/query/select-list"}},p={},u=[],f={toc:u};function y(e){var r=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},f,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"syntax"},"Syntax"),(0,i.kt)("p",null,"SQL supported in SpringQL is syntactically defined in PEG (parsing expression grammars)."),(0,i.kt)("p",null,"You can refer to full syntax currently supported in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/SpringQL/SpringQL/blob/main/springql-core/src/sql_processor/sql_parser/pest_grammar/springql.pest"},"this file"),"."),(0,i.kt)("p",null,"Note, however, that some syntactically valid statements would not work properly from implementations issue."))}y.isMDXComponent=!0}}]);