(self.webpackChunk=self.webpackChunk||[]).push([[6470],{5318:function(e,t,a){"use strict";a.d(t,{Zo:function(){return c},kt:function(){return m}});var n=a(7378);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(a),m=r,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return a?n.createElement(h,i(i({ref:t},c),{},{components:a})):n.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},517:function(e,t,a){"use strict";var n=a(7378);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},6359:function(e,t,a){"use strict";a.d(t,{Z:function(){return c}});var n=a(7378),r=a(4309),o=a(8944),i="tabItem_c0e5",l="tabItemActive_28AG";var p=37,s=39;var c=function(e){var t=e.lazy,a=e.block,c=e.defaultValue,u=e.values,d=e.groupId,m=e.className,h=(0,r.Z)(),v=h.tabGroupChoices,k=h.setTabGroupChoices,y=(0,n.useState)(c),T=y[0],N=y[1],g=n.Children.toArray(e.children),w=[];if(null!=d){var E=v[d];null!=E&&E!==T&&u.some((function(e){return e.value===E}))&&N(E)}var P=function(e){var t=e.currentTarget,a=w.indexOf(t),n=u[a].value;N(n),null!=d&&(k(d,n),setTimeout((function(){var e,a,n,r,o,i,p,s;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,o=e.right,i=window,p=i.innerHeight,s=i.innerWidth,a>=0&&o<=s&&r<=p&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},f=function(e){var t,a;switch(e.keyCode){case s:var n=w.indexOf(e.target)+1;a=w[n]||w[0];break;case p:var r=w.indexOf(e.target)-1;a=w[r]||w[w.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},m)},u.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":T===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:f,onFocus:P,onClick:P},a)}))),t?(0,n.cloneElement)(g.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}},4956:function(e,t,a){"use strict";var n=(0,a(7378).createContext)(void 0);t.Z=n},4309:function(e,t,a){"use strict";var n=a(7378),r=a(4956);t.Z=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},6871:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return p},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var n=a(9603),r=a(120),o=(a(7378),a(5318)),i=a(6359),l=a(517),p={title:"Puppet Service: DIY"},s={unversionedId:"puppet-services/diy",id:"puppet-services/diy",isDocsHomePage:!1,title:"Puppet Service: DIY",description:"Wechaty Puppet Service DIY",source:"@site/docs/puppet-services/diy.md",sourceDirName:"puppet-services",slug:"/puppet-services/diy",permalink:"/docs/puppet-services/diy",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/puppet-services/diy.md",version:"current",lastUpdatedBy:"ninetailskim",lastUpdatedAt:1621875474,formattedLastUpdatedAt:"5/24/2021",frontMatter:{title:"Puppet Service: DIY"},sidebar:"docs",previous:{title:"Puppet Service Compatibility",permalink:"/docs/puppet-services/compatibility"},next:{title:"Wechaty specs overview",permalink:"/docs/specs/"}},c=[{value:"Steps",id:"steps",children:[{value:"1. Pull the latest Wechaty Docker Image",id:"1-pull-the-latest-wechaty-docker-image",children:[]},{value:"2. Config Wechaty Puppet Provider",id:"2-config-wechaty-puppet-provider",children:[]},{value:"3. Set Wechaty Puppet Service TOKEN",id:"3-set-wechaty-puppet-service-token",children:[]},{value:"4. Set Wechaty Puppet Service Port",id:"4-set-wechaty-puppet-service-port",children:[]},{value:"5. Set Wechaty Log Level",id:"5-set-wechaty-log-level",children:[]},{value:"6. Start your Wechaty Token Gate Server",id:"6-start-your-wechaty-token-gate-server",children:[]},{value:"7. Check your TOKEN service",id:"7-check-your-token-service",children:[]},{value:"\ud83c\udf89 Congratulations! You are all set",id:"-congratulations-you-are-all-set",children:[]}]},{value:"All in One Command",id:"all-in-one-command",children:[]},{value:"Blogs",id:"blogs",children:[]},{value:"History",id:"history",children:[]},{value:"Support",id:"support",children:[]}],u={toc:c};function d(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/puppet-services/diy"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Service-DIY-blue",alt:"Wechaty Puppet Service DIY"}))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Do It Yourself")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"You can make a Wechaty Puppet Service easily from any Wechaty Puppet Providers."))),(0,o.kt)("p",null,"You can build a Wechaty Puppet Service by yourself with any Wechaty Puppet Providers."),(0,o.kt)("h2",{id:"steps"},"Steps"),(0,o.kt)("p",null,"We have a easy to use docker image which works out-of-the-box."),(0,o.kt)("h3",{id:"1-pull-the-latest-wechaty-docker-image"},"1. Pull the latest Wechaty Docker Image"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker pull wechaty/wechaty\n")),(0,o.kt)("h3",{id:"2-config-wechaty-puppet-provider"},"2. Config Wechaty Puppet Provider"),(0,o.kt)("p",null,"We need to choice which ",(0,o.kt)("a",{parentName:"p",href:"/docs/puppet-providers/"},"Wechaty Puppet Provider")," we want to use by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"WECHATY_PUPPET")," environment variable."),(0,o.kt)("p",null,"For example, you can choose ",(0,o.kt)("a",{parentName:"p",href:"/docs/puppet-providers/padlocal"},"wechaty-puppet-padlocal")," by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"WECHATY_PUPPET=wechaty-puppet-padlocal"),", add an additional PadLocal token ",(0,o.kt)("inlineCode",{parentName:"p"},"WECHATY_PUPPET_PADLOCAL_TOKEN=puppet_padlocal__TOKEN__")," which is required by PadLocal."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"Wechaty Puppet Providers")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Learn all ",(0,o.kt)("a",{parentName:"p",href:"/docs/puppet-providers/"},"Wechaty Puppet Providers")),(0,o.kt)("p",{parentName:"div"},"You need to set all environment variables which requires from a specific provider."))),(0,o.kt)(i.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'export WECHATY_PUPPET="wechaty-puppet-padlocal"\nexport WECHATY_PUPPET_PADLOCAL_TOKEN="puppet_padlocal__TOKEN__"\n'))),(0,o.kt)(l.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'export WECHATY_PUPPET="wechaty-puppet-padlocal"\nexport WECHATY_PUPPET_PADLOCAL_TOKEN="puppet_padlocal__TOKEN__"\n'))),(0,o.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'set WECHATY_PUPPET="wechaty-puppet-padlocal"\nset WECHATY_PUPPET_PADLOCAL_TOKEN="puppet_padlocal__TOKEN__"\n')))),(0,o.kt)("h3",{id:"3-set-wechaty-puppet-service-token"},"3. Set Wechaty Puppet Service TOKEN"),(0,o.kt)("p",null,"In order to provide ",(0,o.kt)("a",{parentName:"p",href:"/docs/specs/service"},"Wechaty Puppet Service"),", you need to specify a ",(0,o.kt)("a",{parentName:"p",href:"/docs/specs/token"},"TOKEN")," for authorization."),(0,o.kt)("p",null,"You can ",(0,o.kt)("a",{parentName:"p",href:"https://www.uuidgenerator.net/version4"},"Generate a new UUIDv4")," online, use this new UUIDv4 as your token."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"TOKEN uniqueness")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Your new token ",(0,o.kt)("strong",{parentName:"p"},"MUST")," different to any existing tokens in our system. (or they will conflict!)"))),(0,o.kt)(i.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'export WECHATY_TOKEN=$(curl -s https://www.uuidgenerator.net/api/version4)\necho "WECHATY_TOKEN=$WECHATY_TOKEN"\n'))),(0,o.kt)(l.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'export WECHATY_TOKEN=$(curl -s https://www.uuidgenerator.net/api/version4)\necho "WECHATY_TOKEN=$WECHATY_TOKEN"\n'))),(0,o.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'# TODO: use script to get UUIDv4 automatically like Linux/Mac\nset WECHATY_TOKEN="__UUIDv4__"\n')))),(0,o.kt)("h3",{id:"4-set-wechaty-puppet-service-port"},"4. Set Wechaty Puppet Service Port"),(0,o.kt)("p",null,"The port for your ",(0,o.kt)("a",{parentName:"p",href:"/docs/specs/service"},"Wechaty Puppet Service")," need to be specified. Make sure it's free on your server."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"port availablility")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},"The server IP must be public on the internet"),(0,o.kt)("li",{parentName:"ol"},"the port must be public accessible on the internet")))),(0,o.kt)(i.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'export WECHATY_PUPPET_SERVER_PORT="8788"\n'))),(0,o.kt)(l.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'export WECHATY_PUPPET_SERVER_PORT="8788"\n'))),(0,o.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'set WECHATY_PUPPET_SERVER_PORT="8788"\n')))),(0,o.kt)("h3",{id:"5-set-wechaty-log-level"},"5. Set Wechaty Log Level"),(0,o.kt)("p",null,"Enable ",(0,o.kt)("inlineCode",{parentName:"p"},"verbose")," log message output for easy debugging."),(0,o.kt)("p",null,"More options are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"silly"),": all debug messages will be outputed"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"verbose"),": recommended debug level"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"info"),": disable debug messages"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"warning"),": only warning message"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"silence"),": no log message")),(0,o.kt)(i.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'export WECHATY_LOG="verbose"\n'))),(0,o.kt)(l.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'export WECHATY_LOG="verbose"\n'))),(0,o.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'set WECHATY_LOG="verbose"\n')))),(0,o.kt)("h3",{id:"6-start-your-wechaty-token-gate-server"},"6. Start your Wechaty Token Gate Server"),(0,o.kt)("p",null,"After finish config all the above settings, start the token gate server with the following docker command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"docker run -ti \\\n  --name wechaty_puppet_service_token_gateway \\\n  --rm \\\n  --privileged \\\n  --network=host \\\n  -e WECHATY_LOG \\\n  -e WECHATY_PUPPET \\\n  -e WECHATY_PUPPET_PADLOCAL_TOKEN \\\n  -e WECHATY_PUPPET_SERVER_PORT \\\n  -e WECHATY_TOKEN \\\n  wechaty/wechaty\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"privileged mode")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Privileged mode is for using host networking to simplify the docker arguments."),(0,o.kt)("p",{parentName:"div"},"If you want to remove the ",(0,o.kt)("inlineCode",{parentName:"p"},"--privileged"),", you need to add:"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-p $WECHATY_PUPPET_SERVER_PORT:$WECHATY_PUPPET_SERVER_PORT")," for Linux & Mac"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"-p %WECHATY_PUPPET_SERVER_PORT%:%WECHATY_PUPPET_SERVER_PORT%")," for Windows")))),(0,o.kt)("h3",{id:"7-check-your-token-service"},"7. Check your TOKEN service"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"wait for token gateway getting full started")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The docker command in the previous step might need some time to getting fully started."),(0,o.kt)("p",{parentName:"div"},"Wait and read the docker container log messages carefully to make sure the server has been started before continue this step."))),(0,o.kt)("p",null,"Check your TOKEN availability by visiting ",(0,o.kt)("inlineCode",{parentName:"p"},"https://api.chatie.io/v0/hosties/${WECHATY_TOKEN}")),(0,o.kt)(i.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"echo HTTP/$(curl -s -o /dev/null -w '%{http_code}' https://api.chatie.io/v0/hosties/${WECHATY_TOKEN})\n"))),(0,o.kt)(l.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"echo HTTP/$(curl -s -o /dev/null -w '%{http_code}' https://api.chatie.io/v0/hosties/${WECHATY_TOKEN})\n"))),(0,o.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# echo HTTP/$(curl -s -o /dev/null -w '%{http_code}' https://api.chatie.io/v0/hosties/${WECHATY_TOKEN})\n# TODO: add windows version. (Pull Request is welcome!)\n")))),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Succ: ",(0,o.kt)("inlineCode",{parentName:"li"},"HTTP/200")," means you are good, the TOKEN is ready to use."),(0,o.kt)("li",{parentName:"ol"},"Fail: ",(0,o.kt)("inlineCode",{parentName:"li"},"HTTP/404")," means the TOKEN is not registered successfully.")),(0,o.kt)("p",null,"If you get ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP/404"),", then you need to check the previous steps and troubleshoot which part has problems. If you find anything need to be reported, please feel free to submit an issue at ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wechaty/puppet-services/issues"},"here")),(0,o.kt)("p",null,"Learn more about the TOKEN from ",(0,o.kt)("a",{parentName:"p",href:"/docs/specs/token"},"Wechaty Puppet Service TOKEN Specification"),"."),(0,o.kt)("h3",{id:"-congratulations-you-are-all-set"},"\ud83c\udf89 Congratulations! You are all set"),(0,o.kt)("p",null,"Your Wechaty Puppet Service will be ready to service for ",(0,o.kt)("a",{parentName:"p",href:"/docs/polyglot/"},"Polyglot Wechaty"),"!"),(0,o.kt)("h2",{id:"all-in-one-command"},"All in One Command"),(0,o.kt)("p",null,"For use Wechaty Token Gateway with ease, you can copy/paste the following code (with modifications for your need) in your bash shell:"),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"modify before use")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"We are using PadLocal as the example. Remember to modify ",(0,o.kt)("inlineCode",{parentName:"p"},"WECHATY_PUPPET_PADLOCAL_TOKEN")," by replacing ",(0,o.kt)("inlineCode",{parentName:"p"},"puppet_padlocal__TOKEN__")," with yours."))),(0,o.kt)(i.Z,{groupId:"operating-systems",defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"macOS",value:"mac"},{label:"Windows",value:"windows"}],mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"linux",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'# Step 1\ndocker pull wechaty/wechaty\n\n# Step 2\n#   here we are using padlocal for example\n#   replace it to fit your needs\nexport WECHATY_PUPPET=wechaty-puppet-padlocal\nexport WECHATY_PUPPET_PADLOCAL_TOKEN=puppet_padlocal__TOKEN__\n\n# Step 3\nexport WECHATY_TOKEN=$(curl -s https://www.uuidgenerator.net/api/version4)\necho "WECHATY_TOKEN=$WECHATY_TOKEN"\n\n# Step 4\nexport WECHATY_PUPPET_SERVER_PORT=8788\n\n# Step 5\nexport WECHATY_LOG="verbose"\n\n# Step 6\ndocker run \\\n  -d \\\n  -ti \\\n  --name wechaty_puppet_service_token_gateway \\\n  --rm \\\n  --privileged \\\n  --network=host \\\n  -e WECHATY_LOG \\\n  -e WECHATY_PUPPET \\\n  -e WECHATY_PUPPET_PADLOCAL_TOKEN \\\n  -e WECHATY_PUPPET_SERVER_PORT \\\n  -e WECHATY_TOKEN \\\n  wechaty/wechaty\n\n# Step 7\nexport HTTP_CODE=$(curl -s -o /dev/null -w \'%{http_code}\' https://api.chatie.io/v0/hosties/${WECHATY_TOKEN})\nif [ "$HTTP_CODE" == 200 ]; then\n  echo "Wechaty Puppet Service TOKEN ${WECHATY_TOKEN} online status:"\n  curl https://api.chatie.io/v0/hosties/${WECHATY_TOKEN}\n  echo\nelse\n  >&2 echo "ERROR: Wechaty Puppet Service TOKEN ${WECHATY_TOKEN} out of service"\nfi\n\n# Step 8 \ud83c\udf89\n'))),(0,o.kt)(l.Z,{value:"mac",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'# Step 1\ndocker pull wechaty/wechaty\n\n# Step 2\n#   here we are using padlocal for example\n#   replace it to fit your needs\nexport WECHATY_PUPPET=wechaty-puppet-padlocal\nexport WECHATY_PUPPET_PADLOCAL_TOKEN=puppet_padlocal__TOKEN__\n\n# Step 3\nexport WECHATY_TOKEN=$(curl -s https://www.uuidgenerator.net/api/version4)\necho "WECHATY_TOKEN=$WECHATY_TOKEN"\n\n# Step 4\nexport WECHATY_PUPPET_SERVER_PORT=8788\n\n# Step 5\nexport WECHATY_LOG="verbose"\n\n# Step 6\ndocker run \\\n  -d \\\n  -ti \\\n  --name wechaty_puppet_service_token_gateway \\\n  --rm \\\n  --privileged \\\n  --network=host \\\n  -e WECHATY_LOG \\\n  -e WECHATY_PUPPET \\\n  -e WECHATY_PUPPET_PADLOCAL_TOKEN \\\n  -e WECHATY_PUPPET_SERVER_PORT \\\n  -e WECHATY_TOKEN \\\n  wechaty/wechaty\n\n# Step 7\nexport HTTP_CODE=$(curl -s -o /dev/null -w \'%{http_code}\' https://api.chatie.io/v0/hosties/${WECHATY_TOKEN})\nif [ "$HTTP_CODE" == 200 ]; then\n  echo "Wechaty Puppet Service TOKEN ${WECHATY_TOKEN} online status:"\n  curl https://api.chatie.io/v0/hosties/${WECHATY_TOKEN}\n  echo\nelse\n  >&2 echo "ERROR: Wechaty Puppet Service TOKEN ${WECHATY_TOKEN} out of service"\nfi\n\n# Step 8 \ud83c\udf89\n'))),(0,o.kt)(l.Z,{value:"windows",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# To be add\n")))),(0,o.kt)("p",null,"I hope you enjoy it!"),(0,o.kt)("h2",{id:"blogs"},"Blogs"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/02/03/python-wechaty-for-padlocal-puppet-service/"},"Python Wechaty\u5982\u4f55\u4f7f\u7528PadLocal Puppet Service, Biofer, Feb, 3, 2021")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://wechaty.js.org/2021/01/28/csharp-wechaty-for-padlocal-puppet-service/"},".NET Wechaty\u5982\u4f55\u4f7f\u7528PadLocal Puppet Service, Darren, Jan 28, 2021"))),(0,o.kt)("h2",{id:"history"},"History"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Using your Puppet PadLocal token with Python, Java, and Go Wechaty ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/discussions/1985"},"wechaty/wechaty#1985")),(0,o.kt)("li",{parentName:"ol"},"How to create your own Wechaty Puppet Service Token with the Web Protocol ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/discussions/1986"},"wechaty/wechaty#1986")),(0,o.kt)("li",{parentName:"ol"},"Using PadLocal Token with Polyglot Wechaty via Token Gateway ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/puppet-services/issues/84"},"wechaty/puppet-services#84")),(0,o.kt)("li",{parentName:"ol"},"Wechaty is All You Need: Python, Go, and Java Translation Project ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/wechaty/wechaty/discussions/1927"},"wechaty/wechaty#1927"))),(0,o.kt)("h2",{id:"support"},"Support"),(0,o.kt)("p",null,"You can ",(0,o.kt)("a",{parentName:"p",href:"https://gitter.im/wechaty/wechaty"},"join our Gitter")," network if you aren\u2019t already a member."))}d.isMDXComponent=!0},8944:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);