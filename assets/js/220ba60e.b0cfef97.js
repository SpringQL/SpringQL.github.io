"use strict";(self.webpackChunkspring_ql=self.webpackChunkspring_ql||[]).push([[1094],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},95422:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],s={sidebar_position:1},c="Introduction: Why to Learn Stream Processing?",u={unversionedId:"learn-springql/index",id:"version-0.15/learn-springql/index",title:"Introduction: Why to Learn Stream Processing?",description:"Stream processing is difficult.",source:"@site/versioned_docs/version-0.15/learn-springql/index.md",sourceDirName:"learn-springql",slug:"/learn-springql/",permalink:"/0.15/learn-springql/",editUrl:"https://github.com/SpringQL/SpringQL.github.io/blob/main/versioned_docs/version-0.15/learn-springql/index.md",tags:[],version:"0.15",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Write Basic Apps",permalink:"/0.15/get-started/write-basic-apps"},next:{title:"Event time and watermark",permalink:"/0.15/learn-springql/event-time-and-watermark"}},l={},p=[],d={toc:p};function m(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"introduction-why-to-learn-stream-processing"},"Introduction: Why to Learn Stream Processing?"),(0,i.kt)("p",null,"Stream processing is difficult."),(0,i.kt)("p",null,"Stream data are unbounded sequence. You may need to use ",(0,i.kt)("strong",{parentName:"p"},"windows")," to split unbounded data into bounded portions to make aggregations, sort, and join.\nYou may need to care about ",(0,i.kt)("strong",{parentName:"p"},"out-of-order rows")," and ",(0,i.kt)("strong",{parentName:"p"},"late data"),". A row timestamped as ",(0,i.kt)("inlineCode",{parentName:"p"},"12:09:59")," may come to a window closing at ",(0,i.kt)("inlineCode",{parentName:"p"},"12:10:00"),", for example."),(0,i.kt)("p",null,"But these difficulties do not come from stream processors. Although you write your applications dealing with consecutive data (like sensor data) without stream processors, you have to care about the things above by yourself to get meaningful outputs."),(0,i.kt)("p",null,"Learning fundamentals of stream processing will cultivate your mind to play with unbounded data.\nAnd then, you would realize using stream processors would be a good choice for your application development."),(0,i.kt)("p",null,"This section includes not only general knowledge about stream processing, but also SpringQL's characteristics in implementation.\nEven if you have rich experience in stream processing, you may still want to check the pages in this section."))}m.isMDXComponent=!0}}]);