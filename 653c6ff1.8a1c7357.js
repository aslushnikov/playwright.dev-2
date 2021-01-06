(window.webpackJsonp=window.webpackJsonp||[]).push([[224],{295:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var a=r(3),n=r(7),o=(r(0),r(600)),i={id:"class-worker",title:"Worker"},l={unversionedId:"api/class-worker",id:"version-1.5.0/api/class-worker",isDocsHomePage:!1,title:"Worker",description:"The Worker class represents a WebWorker.",source:"@site/versioned_docs/version-1.5.0/api/class-worker.md",slug:"/api/class-worker",permalink:"/docs/1.5.0/api/class-worker",version:"1.5.0",sidebar:"version-1.5.0/api",previous:{title:"Accessibility",permalink:"/docs/1.5.0/api/class-accessibility"},next:{title:"BrowserServer",permalink:"/docs/1.5.0/api/class-browserserver"}},c=[{value:"event: &#39;close&#39;",id:"event-close",children:[]},{value:"worker.evaluate(pageFunction, arg)",id:"workerevaluatepagefunction-arg",children:[]},{value:"worker.evaluateHandle(pageFunction, arg)",id:"workerevaluatehandlepagefunction-arg",children:[]},{value:"worker.url()",id:"workerurl",children:[]}],b={toc:c};function p(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Worker class represents a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"}),"WebWorker"),".\n",Object(o.b)("inlineCode",{parentName:"p"},"worker")," event is emitted on the page object to signal a worker creation.\n",Object(o.b)("inlineCode",{parentName:"p"},"close")," event is emitted on the worker object when the worker is gone."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"page.on('worker', worker => {\n  console.log('Worker created: ' + worker.url());\n  worker.on('close', worker => console.log('Worker destroyed: ' + worker.url()));\n});\n\nconsole.log('Current workers:');\nfor (const worker of page.workers())\n  console.log('  ' + worker.url());\n")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"#event-close-2"}),"event: 'close'")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-worker#workerevaluatepagefunction-arg"}),"worker.evaluate(pageFunction[, arg])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-worker#workerevaluatehandlepagefunction-arg"}),"worker.evaluateHandle(pageFunction[, arg])")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-worker#workerurl"}),"worker.url()"))),Object(o.b)("h2",{id:"event-close"},"event: 'close'"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"<",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-worker#class-worker",title:"Worker"}),"Worker"),">")),Object(o.b)("p",null,"Emitted when this dedicated ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"}),"WebWorker")," is terminated."),Object(o.b)("h2",{id:"workerevaluatepagefunction-arg"},"worker.evaluate(pageFunction","[, arg]",")"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"pageFunction")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"}),"function"),"|",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),"> Function to be evaluated in the worker context"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"arg")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.5.0/api/evaluationargument#evaluationargument",title:"Evaluation Argument"}),"EvaluationArgument"),"> Optional argument to pass to ",Object(o.b)("inlineCode",{parentName:"li"},"pageFunction")),Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringifyapi.md#Description",title:"Serializable"}),"Serializable"),">> Promise which resolves to the return value of ",Object(o.b)("inlineCode",{parentName:"li"},"pageFunction"))),Object(o.b)("p",null,"If the function passed to the ",Object(o.b)("inlineCode",{parentName:"p"},"worker.evaluate")," returns a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),", then ",Object(o.b)("inlineCode",{parentName:"p"},"worker.evaluate")," would wait for the promise to resolve and return its value."),Object(o.b)("p",null,"If the function passed to the ",Object(o.b)("inlineCode",{parentName:"p"},"worker.evaluate")," returns a non-",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringifyapi.md#Description",title:"Serializable"}),"Serializable")," value, then ",Object(o.b)("inlineCode",{parentName:"p"},"worker.evaluate")," resolves to ",Object(o.b)("inlineCode",{parentName:"p"},"undefined"),". DevTools Protocol also supports transferring some additional values that are not serializable by ",Object(o.b)("inlineCode",{parentName:"p"},"JSON"),": ",Object(o.b)("inlineCode",{parentName:"p"},"-0"),", ",Object(o.b)("inlineCode",{parentName:"p"},"NaN"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Infinity"),", ",Object(o.b)("inlineCode",{parentName:"p"},"-Infinity"),", and bigint literals."),Object(o.b)("h2",{id:"workerevaluatehandlepagefunction-arg"},"worker.evaluateHandle(pageFunction","[, arg]",")"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"pageFunction")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function",title:"Function"}),"function"),"|",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),"> Function to be evaluated in the page context"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"arg")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.5.0/api/evaluationargument#evaluationargument",title:"Evaluation Argument"}),"EvaluationArgument"),"> Optional argument to pass to ",Object(o.b)("inlineCode",{parentName:"li"},"pageFunction")),Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-jshandle#class-jshandle",title:"JSHandle"}),"JSHandle"),">> Promise which resolves to the return value of ",Object(o.b)("inlineCode",{parentName:"li"},"pageFunction")," as in-page object (JSHandle)")),Object(o.b)("p",null,"The only difference between ",Object(o.b)("inlineCode",{parentName:"p"},"worker.evaluate")," and ",Object(o.b)("inlineCode",{parentName:"p"},"worker.evaluateHandle")," is that ",Object(o.b)("inlineCode",{parentName:"p"},"worker.evaluateHandle")," returns in-page object (JSHandle)."),Object(o.b)("p",null,"If the function passed to the ",Object(o.b)("inlineCode",{parentName:"p"},"worker.evaluateHandle")," returns a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),", then ",Object(o.b)("inlineCode",{parentName:"p"},"worker.evaluateHandle")," would wait for the promise to resolve and return its value."),Object(o.b)("h2",{id:"workerurl"},"worker.url()"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.md#String_type",title:"String"}),"string"),">")))}p.isMDXComponent=!0},600:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return m}));var a=r(0),n=r.n(a);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var b=n.a.createContext({}),p=function(e){var t=n.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(r),d=a,m=s["".concat(i,".").concat(d)]||s[d]||u[d]||o;return r?n.a.createElement(m,l(l({ref:t},b),{},{components:r})):n.a.createElement(m,l({ref:t},b))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var b=2;b<o;b++)i[b]=r[b];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);