(self.webpackChunk=self.webpackChunk||[]).push([[9385],{5318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(n),d=o,y=f["".concat(l,".").concat(d)]||f[d]||s[d]||a;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9365:function(e,t,n){"use strict";n.r(t),n.d(t,{UUIDv4:function(){return g},default:function(){return w},frontMatter:function(){return v},metadata:function(){return b},toc:function(){return h}});var r,o=n(9603),a=n(120),i=(n(7378),n(5318)),c=n(4306),l=new Uint8Array(16);function p(){if(!r&&!(r="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return r(l)}var u=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var s=function(e){return"string"==typeof e&&u.test(e)},f=[],d=0;d<256;++d)f.push((d+256).toString(16).substr(1));var y=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=(f[e[t+0]]+f[e[t+1]]+f[e[t+2]]+f[e[t+3]]+"-"+f[e[t+4]]+f[e[t+5]]+"-"+f[e[t+6]]+f[e[t+7]]+"-"+f[e[t+8]]+f[e[t+9]]+"-"+f[e[t+10]]+f[e[t+11]]+f[e[t+12]]+f[e[t+13]]+f[e[t+14]]+f[e[t+15]]).toLowerCase();if(!s(n))throw TypeError("Stringified UUID is invalid");return n};var m=function(e,t,n){var r=(e=e||{}).random||(e.rng||p)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,t){n=n||0;for(var o=0;o<16;++o)t[n+o]=r[o];return t}return y(r)},v={title:"Wechaty Puppet Service Token",sidebar_label:"Token"},b={unversionedId:"specs/token",id:"specs/token",isDocsHomePage:!1,title:"Wechaty Puppet Service Token",description:"Wechaty Puppet Service Token (TOKEN), is ... (tbw)",source:"@site/docs/specs/token.md",sourceDirName:"specs",slug:"/specs/token",permalink:"/docs/specs/token",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/specs/token.md",version:"current",lastUpdatedBy:"ninetailskim",lastUpdatedAt:1621875474,formattedLastUpdatedAt:"5/24/2021",sidebar_label:"Token",frontMatter:{title:"Wechaty Puppet Service Token",sidebar_label:"Token"},sidebar:"docs",previous:{title:"Wechaty Puppet Service",permalink:"/docs/specs/service"},next:{title:"Wechaty deprecation timeline",permalink:"/docs/references/deprecations"}},h=[{value:"Format / Convensions",id:"format--convensions",children:[]},{value:"Service Discovery",id:"service-discovery",children:[]},{value:"Tools",id:"tools",children:[{value:"Online UUID Generator",id:"online-uuid-generator",children:[]},{value:"Wechaty Puppet Service Token Validator",id:"wechaty-puppet-service-token-validator",children:[]}]},{value:"How to get a token",id:"how-to-get-a-token",children:[]},{value:"Blogs",id:"blogs",children:[]}],g=function(){var e={token:m()};return(0,i.kt)("div",null,(0,i.kt)(c.CopyToClipboard,{text:e.token,onCopy:function(){alert("Has copied "+e.token+" to your clipboard."),e.token=m()},mdxType:"CopyToClipboard"},(0,i.kt)("button",null,"Copy ",e.token," to clipboard")))},k={toc:h,UUIDv4:g};function w(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Wechaty Puppet Service Token (TOKEN), is ... (tbw)"),(0,i.kt)("h2",{id:"format--convensions"},"Format / Convensions"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"puppet_wxwork_id")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"UUIDv4"))),(0,i.kt)("h2",{id:"service-discovery"},"Service Discovery"),(0,i.kt)("p",null,"In-service / Out-service check:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"curl https://api.chatie.io/v0/hosties/__TOKEN__\n")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"HTTP/200"),": In-service"),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"HTTP/404"),": Out-service")),(0,i.kt)("h2",{id:"tools"},"Tools"),(0,i.kt)("p",null,"Here's some useful tools to deal with your token."),(0,i.kt)("h3",{id:"online-uuid-generator"},"Online UUID Generator"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Copy from below:",(0,i.kt)(g,{mdxType:"UUIDv4"})),(0,i.kt)("li",{parentName:"ol"},"Visit UUID Generator:\n",(0,i.kt)("a",{parentName:"li",href:"https://www.uuidgenerator.net/version4"},"https://www.uuidgenerator.net/version4"))),(0,i.kt)("h3",{id:"wechaty-puppet-service-token-validator"},"Wechaty Puppet Service Token Validator"),(0,i.kt)("h2",{id:"how-to-get-a-token"},"How to get a token"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"TOKEN")," is the authorization string for the ",(0,i.kt)("a",{parentName:"p",href:"/docs/puppet-services/"},"Wechaty Puppet Service"),"."),(0,i.kt)("p",null,"You can find how to get a ",(0,i.kt)("inlineCode",{parentName:"p"},"TOKEN")," for using the Wechaty Puppet Servcie from the ",(0,i.kt)("a",{parentName:"p",href:"/docs/puppet-services/"},"docs link"),"."),(0,i.kt)("h2",{id:"blogs"},"Blogs"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/01/14/wechaty-puppet-service/"},"Introducing Wechaty Puppet Service (Providers), @huan, Jan 14, 2021"))))}w.isMDXComponent=!0},6012:function(e,t,n){"use strict";var r=n(3185),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,i,c,l,p,u=!1;t||(t={}),n=t.debug||!1;try{if(i=r(),c=document.createRange(),l=document.getSelection(),(p=document.createElement("span")).textContent=e,p.style.all="unset",p.style.position="fixed",p.style.top=0,p.style.clip="rect(0, 0, 0, 0)",p.style.whiteSpace="pre",p.style.webkitUserSelect="text",p.style.MozUserSelect="text",p.style.msUserSelect="text",p.style.userSelect="text",p.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),void 0===r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=o[t.format]||o.default;window.clipboardData.setData(a,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(p),c.selectNodeContents(p),l.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(s){n&&console.error("unable to copy using execCommand: ",s),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(s){n&&console.error("unable to copy using clipboardData: ",s),n&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(c):l.removeAllRanges()),p&&document.body.removeChild(p),i()}return u}},4218:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var r=a(n(7378)),o=a(n(6012));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function s(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?d(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,t){return(y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var v=function(e){function t(){var e,n;p(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return m(d(n=s(this,(e=f(t)).call.apply(e,[this].concat(i)))),"onClick",(function(e){var t=n.props,a=t.text,i=t.onCopy,c=t.children,l=t.options,p=r.default.Children.only(c),u=(0,o.default)(a,l);i&&i(a,u),p&&p.props&&"function"==typeof p.props.onClick&&p.props.onClick(e)})),n}var n,a,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=l(e,["text","onCopy","options","children"]),o=r.default.Children.only(t);return r.default.cloneElement(o,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{onClick:this.onClick}))}}])&&u(n.prototype,a),i&&u(n,i),t}(r.default.PureComponent);t.CopyToClipboard=v,m(v,"defaultProps",{onCopy:void 0,options:void 0})},4306:function(e,t,n){"use strict";var r=n(4218).CopyToClipboard;r.CopyToClipboard=r,e.exports=r},3185:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);