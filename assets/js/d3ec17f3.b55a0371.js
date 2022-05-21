"use strict";(self.webpackChunkspring_ql=self.webpackChunkspring_ql||[]).push([[849],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(o,".").concat(d)]||m[d]||s[d]||p;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,i=new Array(p);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<p;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56817:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var r=n(87462),a=n(63366),p=(n(67294),n(3905)),i=["components"],l={sidebar_position:5},o="CREATE PUMP",u={unversionedId:"reference/sql/create/create-pump",id:"reference/sql/create/create-pump",title:"CREATE PUMP",description:"Creates a pump.",source:"@site/docs/reference/sql/create/create-pump.md",sourceDirName:"reference/sql/create",slug:"/reference/sql/create/create-pump",permalink:"/reference/sql/create/create-pump",editUrl:"https://github.com/SpringQL/SpringQL.github.io/blob/main/docs/reference/sql/create/create-pump.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"CREATE SINK WRITER",permalink:"/reference/sql/create/create-sink-writer"},next:{title:"SELECT statement",permalink:"/reference/sql/query/"}},c={},s=[{value:"Syntax",id:"syntax",level:2},{value:"Example",id:"example",level:3},{value:"Column mappings between SELECT and INSERT",id:"column-mappings-between-select-and-insert",level:2}],m={toc:s};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,p.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"create-pump"},"CREATE PUMP"),(0,p.kt)("p",null,"Creates a ",(0,p.kt)("a",{parentName:"p",href:"/learn-springql/pipeline/pump"},"pump"),"."),(0,p.kt)("h2",{id:"syntax"},"Syntax"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Syntax"',title:'"Syntax"'},"CREATE PUMP <pump_name> AS\n  <insert-statement>\n  <select-statement>\n")),(0,p.kt)("h3",{id:"example"},"Example"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Example',title:'"Example'},"CREATE PUMP c_to_f AS\n    INSERT INTO sink_temperature_fahrenheit (ts, temperature)\n    SELECT STREAM\n        source_temperature_celsius.ts,\n        32.0 + source_temperature_celsius.temperature * 1.8\n    FROM source_temperature_celsius;\n")),(0,p.kt)("h2",{id:"column-mappings-between-select-and-insert"},"Column mappings between SELECT and INSERT"),(0,p.kt)("p",null,"The order of ",(0,p.kt)("em",{parentName:"p"},"select","_","list")," in ",(0,p.kt)("inlineCode",{parentName:"p"},"SELECT")," statement is preserved in the ",(0,p.kt)("inlineCode",{parentName:"p"},"INSERT")," statement's column list."),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Column mapping"',title:'"Column','mapping"':!0},"CREATE PUMP <pump_name> AS\n  INSERT INTO <downstream_name> (d1, d2, d3) <insert-statement>\n  SELECT u1, u2, u3\n    FROM <upstream_name>\n    ...\n")),(0,p.kt)("p",null,"In the above example, ",(0,p.kt)("inlineCode",{parentName:"p"},"u1")," is mapped to ",(0,p.kt)("inlineCode",{parentName:"p"},"d1"),", ",(0,p.kt)("inlineCode",{parentName:"p"},"u2")," is mapped to ",(0,p.kt)("inlineCode",{parentName:"p"},"d2"),", and ",(0,p.kt)("inlineCode",{parentName:"p"},"u3")," is mapped to ",(0,p.kt)("inlineCode",{parentName:"p"},"d3"),"."),(0,p.kt)("p",null,"If the number of fields and columns differ between ",(0,p.kt)("inlineCode",{parentName:"p"},"SELECT")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"INSERT"),", it should cause an SQL error."))}d.isMDXComponent=!0}}]);