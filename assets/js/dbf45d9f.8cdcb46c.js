(self.webpackChunk=self.webpackChunk||[]).push([[2085],{5318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var o=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),m=r,d=h["".concat(l,".").concat(m)]||h[m]||p[m]||a;return n?o.createElement(d,i(i({ref:t},c),{},{components:n})):o.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<a;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5609:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return c}});var o=n(9603),r=n(120),a=(n(7378),n(5318)),i={title:"Troubleshooting"},s={unversionedId:"explainations/troubleshooting",id:"explainations/troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"This is a place to share common problems and solutions to them.",source:"@site/docs/explainations/troubleshooting.md",sourceDirName:"explainations",slug:"/explainations/troubleshooting",permalink:"/docs/explainations/troubleshooting",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/explainations/troubleshooting.md",version:"current",lastUpdatedBy:"ninetailskim",lastUpdatedAt:1621875474,formattedLastUpdatedAt:"5/24/2021",frontMatter:{title:"Troubleshooting"},sidebar:"docs",previous:{title:"FAQ",permalink:"/docs/explainations/faq"},next:{title:"Style Guide",permalink:"/docs/docusaurus/doc1"}},l=[{value:"Table of Contents",id:"table-of-contents",children:[]},{value:"Nothing happens when I dispatch an action",id:"nothing-happens-when-i-dispatch-an-action",children:[]},{value:"Something else doesn&#39;t work",id:"something-else-doesnt-work",children:[]}],u={toc:l};function c(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This is a place to share common problems and solutions to them.\nThe examples use TypeScript, but you should still find them useful if you use something else."),(0,a.kt)("h2",{id:"table-of-contents"},"Table of Contents"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Token"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#concepts"},"Concepts")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#motivations"},"Motivations")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#alternatives"},"Alternatives")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Puppet"))),(0,a.kt)("h2",{id:"nothing-happens-when-i-dispatch-an-action"},"Nothing happens when I dispatch an action"),(0,a.kt)("p",null,"Sometimes, you are trying to dispatch an action, but your view does not update. Why does this happen? There may be several reasons for this."),(0,a.kt)("p",null,"Never mutate reducer arguments\nIt is tempting to modify the state or action passed to you by Redux. Don't do this!"),(0,a.kt)("p",null,"Redux assumes that you"),(0,a.kt)("h2",{id:"something-else-doesnt-work"},"Something else doesn't work"),(0,a.kt)("p",null,"Ask around on the ",(0,a.kt)("strong",{parentName:"p"},"wechaty/wechaty")," ",(0,a.kt)("a",{parentName:"p",href:"http://gitter.im/wechaty/wechaty"},"Gitter.im")," Gitter.im room,\nor ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty/issues"},"create an issue"),".\nIf you figure it out, ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty.js.org/edit/master/docs/troubleshooting.md"},"edit this document"),"\nas a courtesy to the next person having the same problem."))}c.isMDXComponent=!0}}]);