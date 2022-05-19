"use strict";(self.webpackChunkspring_ql=self.webpackChunkspring_ql||[]).push([[402],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6098:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return c}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={sidebar_position:1},s="SQL",p={unversionedId:"reference/sql/index",id:"reference/sql/index",title:"SQL",description:"This section describes the SQL language supported in SpringQL, including Data Definition Language (DDL), Data Manipulation Language (DML) and Query Language.",source:"@site/docs/reference/sql/index.md",sourceDirName:"reference/sql",slug:"/reference/sql/",permalink:"/reference/sql/",editUrl:"https://github.com/SpringQL/SpringQL.github.io/blob/main/docs/reference/sql/index.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Client API",permalink:"/reference/client-api"},next:{title:"Introduction",permalink:"/deployment/"}},u={},c=[{value:"SQL interface",id:"sql-interface",level:2},{value:"SQL execution models",id:"sql-execution-models",level:2},{value:"DDL",id:"ddl",level:3},{value:"DML and query",id:"dml-and-query",level:3},{value:"Transactions",id:"transactions",level:3}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sql"},"SQL"),(0,i.kt)("p",null,"This section describes the SQL language supported in SpringQL, including Data Definition Language (DDL), Data Manipulation Language (DML) and Query Language."),(0,i.kt)("p",null,"Currently, SpringQL supports quite limited subset of SQL standard."),(0,i.kt)("h2",{id:"sql-interface"},"SQL interface"),(0,i.kt)("p",null,"You pass SQLs to SpringQL using the following APIs."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Rust"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"High-level API: ",(0,i.kt)("a",{parentName:"li",href:"https://docs.rs/springql-core/latest/springql_core/high_level_rs/index.html#springql-core-high_level_rs-new"},"SpringPipelineHL::command()")),(0,i.kt)("li",{parentName:"ul"},"Low-level API: ",(0,i.kt)("a",{parentName:"li",href:"https://docs.rs/springql-core/0.9.0/springql_core/low_level_rs/fn.spring_command.html"},"spring_command()")))),(0,i.kt)("li",{parentName:"ul"},"Other languages",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"spring_command()"))))),(0,i.kt)("h2",{id:"sql-execution-models"},"SQL execution models"),(0,i.kt)("h3",{id:"ddl"},"DDL"),(0,i.kt)("p",null,"We currently support ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE")," statements for DDL."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"CREATE")," statements modify the pipeline to change the dataflow.\nIt takes effect immediately after the DDL is issued via APIs."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},(0,i.kt)("inlineCode",{parentName:"p"},"CREATE SOURCE READER")," statements should be issued after other ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE")," statements."),(0,i.kt)("p",{parentName:"div"},"Some source readers may drain data inside foreign sources and the data are just diminished if the downstream pumps and sinks are defined yet."))),(0,i.kt)("h3",{id:"dml-and-query"},"DML and query"),(0,i.kt)("p",null,"We currently do not support simple DMLs (such as ",(0,i.kt)("inlineCode",{parentName:"p"},"INSERT"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"UPDATE"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"DELETE"),") and queries (such as ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT"),")."),(0,i.kt)("p",null,"However, ",(0,i.kt)("inlineCode",{parentName:"p"},"CREATE PUMP")," statements includes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"a ",(0,i.kt)("inlineCode",{parentName:"li"},"SELECT")," statement to fetch rows from upstreams and process them."),(0,i.kt)("li",{parentName:"ul"},"an ",(0,i.kt)("inlineCode",{parentName:"li"},"INSERT")," statement to push result rows to downstreams.")),(0,i.kt)("p",null,"While ",(0,i.kt)("inlineCode",{parentName:"p"},"SELECT")," queries in normal relational databases is ",(0,i.kt)("strong",{parentName:"p"},"executed once")," to tables, queries in SpringQL (and other stream processors supporting SQL) are ",(0,i.kt)("strong",{parentName:"p"},"registered to continuously run"),".\nThe registered queries applied to each input row."),(0,i.kt)("p",null,"Search ",(0,i.kt)("em",{parentName:"p"},'"CQL"')," or ",(0,i.kt)("em",{parentName:"p"},'"Continuous Query"')," if you have further interests on it."),(0,i.kt)("h3",{id:"transactions"},"Transactions"),(0,i.kt)("p",null,"We currently do not support transactions."))}m.isMDXComponent=!0}}]);