(window.webpackJsonp=window.webpackJsonp||[]).push([[471],{542:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return a})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return b}));var n=t(3),s=t(7),o=(t(0),t(600)),c={id:"class-browserserver",title:"BrowserServer"},a={unversionedId:"api/class-browserserver",id:"version-1.0.0/api/class-browserserver",isDocsHomePage:!1,title:"BrowserServer",description:"- event: 'close'",source:"@site/versioned_docs/version-1.0.0/api/class-browserserver.md",slug:"/api/class-browserserver",permalink:"/docs/1.0.0/api/class-browserserver",version:"1.0.0",sidebar:"version-1.0.0/api",previous:{title:"Worker",permalink:"/docs/1.0.0/api/class-worker"},next:{title:"BrowserType",permalink:"/docs/1.0.0/api/class-browsertype"}},l=[{value:"event: &#39;close&#39;",id:"event-close",children:[]},{value:"browserServer.close()",id:"browserserverclose",children:[]},{value:"browserServer.kill()",id:"browserserverkill",children:[]},{value:"browserServer.process()",id:"browserserverprocess",children:[]},{value:"browserServer.wsEndpoint()",id:"browserserverwsendpoint",children:[]}],i={toc:l};function b(e){var r=e.components,t=Object(s.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},i,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#event-close-3"}),"event: 'close'")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.0.0/api/class-browserserver#browserserverclose"}),"browserServer.close()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.0.0/api/class-browserserver#browserserverkill"}),"browserServer.kill()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.0.0/api/class-browserserver#browserserverprocess"}),"browserServer.process()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/1.0.0/api/class-browserserver#browserserverwsendpoint"}),"browserServer.wsEndpoint()"))),Object(o.b)("h2",{id:"event-close"},"event: 'close'"),Object(o.b)("p",null,"Emitted when the browser server closes."),Object(o.b)("h2",{id:"browserserverclose"},"browserServer.close()"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),">")),Object(o.b)("p",null,"Closes the browser gracefully and makes sure the process is terminated."),Object(o.b)("h2",{id:"browserserverkill"},"browserServer.kill()"),Object(o.b)("p",null,"Kills the browser process."),Object(o.b)("h2",{id:"browserserverprocess"},"browserServer.process()"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://nodejs.org/api/child_process.html",title:"ChildProcess"}),"ChildProcess"),"> Spawned browser application process.")),Object(o.b)("h2",{id:"browserserverwsendpoint"},"browserServer.wsEndpoint()"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),"> Browser websocket url.")),Object(o.b)("p",null,"Browser websocket endpoint which can be used as an argument to ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.0.0/api/class-browsertype#browsertypeconnectoptions"}),"browserType.connect(options)")," to establish connection to the browser."))}b.isMDXComponent=!0},600:function(e,r,t){"use strict";t.d(r,"a",(function(){return p})),t.d(r,"b",(function(){return d}));var n=t(0),s=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var i=s.a.createContext({}),b=function(e){var r=s.a.useContext(i),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=b(e.components);return s.a.createElement(i.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return s.a.createElement(s.a.Fragment,{},r)}},v=s.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=b(t),v=n,d=p["".concat(c,".").concat(v)]||p[v]||u[v]||o;return t?s.a.createElement(d,a(a({ref:r},i),{},{components:t})):s.a.createElement(d,a({ref:r},i))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=v;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var i=2;i<o;i++)c[i]=t[i];return s.a.createElement.apply(null,c)}return s.a.createElement.apply(null,t)}v.displayName="MDXCreateElement"}}]);