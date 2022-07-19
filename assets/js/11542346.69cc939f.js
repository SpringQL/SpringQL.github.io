"use strict";(self.webpackChunkspring_ql=self.webpackChunkspring_ql||[]).push([[3914],{3905:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return d}});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),u=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},p=function(e){var r=u(e.components);return t.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||s[d]||o;return n?t.createElement(f,i(i({ref:r},p),{},{components:n})):t.createElement(f,i({ref:r},p))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=n[u];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1042:function(e,r,n){n.r(r),n.d(r,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var t=n(83117),a=n(80102),o=(n(67294),n(3905)),i=["components"],c={sidebar_position:2},l="Reading CAN data via CAN source reader",u={unversionedId:"real-world-example/can",id:"version-0.14/real-world-example/can",title:"Reading CAN data via CAN source reader",description:"Suppose you are receiving CAN frames from vcan0.",source:"@site/versioned_docs/version-0.14/real-world-example/can.md",sourceDirName:"real-world-example",slug:"/real-world-example/can",permalink:"/0.14/real-world-example/can",draft:!1,editUrl:"https://github.com/SpringQL/SpringQL.github.io/blob/main/versioned_docs/version-0.14/real-world-example/can.md",tags:[],version:"0.14",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/0.14/real-world-example/"}},p={},s=[],m={toc:s};function d(e){var r=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},m,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"reading-can-data-via-can-source-reader"},"Reading CAN data via CAN source reader"),(0,o.kt)("p",null,"Suppose you are receiving CAN frames from ",(0,o.kt)("inlineCode",{parentName:"p"},"vcan0"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Example output from vcan0"',title:'"Example',output:!0,from:!0,'vcan0"':!0},"% ip link show vcan0\n11: vcan0: <NOARP,UP,LOWER_UP> mtu 16 qdisc pfifo_fast state UNKNOWN mode DEFAULT group default qlen 10\n    link/can\n\n% candump vcan0\n  vcan0  062   [8]  BF 0A 0D 78 C3 46 47 B4\n  vcan0  024   [8]  8A 0A 05 78 0B 74 F2 B7\n  ...\n")),(0,o.kt)("p",null,"First, you need to create a source stream with the pre-defined columns."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="Source stream for CAN source"',title:'"Source',stream:!0,for:!0,CAN:!0,'source"':!0},"CREATE SOURCE STREAM source_can (\n    can_id UNSIGNED INTEGER NOT NULL,\n    can_data BLOB NOT NULL\n);\n")),(0,o.kt)("p",null,"Note that the stream name ",(0,o.kt)("inlineCode",{parentName:"p"},"source_can")," is customizable but column definitions for ",(0,o.kt)("inlineCode",{parentName:"p"},"can_id")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"can_data"),", including the column names, must be written as-is."),(0,o.kt)("p",null,"Then you can connect a CAN source reader to the source stream."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sql",metastring:'title="CAN source reader"',title:'"CAN',source:!0,'reader"':!0},"CREATE SOURCE READER can FOR source_can\n    TYPE CAN OPTIONS (\n        INTERFACE '{}'\n    );\n")),(0,o.kt)("p",null,"You can see a working example in Rust here: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SpringQL/SpringQL/blob/main/springql-core/examples/can_source_reader.rs"},"https://github.com/SpringQL/SpringQL/blob/main/springql-core/examples/can_source_reader.rs"),"."))}d.isMDXComponent=!0}}]);