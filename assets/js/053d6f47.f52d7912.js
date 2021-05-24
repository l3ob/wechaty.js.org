(self.webpackChunk=self.webpackChunk||[]).push([[6083],{5318:function(t,e,n){"use strict";n.d(e,{Zo:function(){return d},kt:function(){return g}});var o=n(7378);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function r(t,e){if(null==t)return{};var n,o,a=function(t,e){if(null==t)return{};var n,o,a={},l=Object.keys(t);for(o=0;o<l.length;o++)n=l[o],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(o=0;o<l.length;o++)n=l[o],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=o.createContext({}),u=function(t){var e=o.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return o.createElement(s.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},c=o.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,s=t.parentName,d=r(t,["components","mdxType","originalType","parentName"]),c=u(n),g=a,h=c["".concat(s,".").concat(g)]||c[g]||p[g]||l;return n?o.createElement(h,i(i({ref:e},d),{},{components:n})):o.createElement(h,i({ref:e},d))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=c;var r={};for(var s in e)hasOwnProperty.call(e,s)&&(r[s]=e[s]);r.originalType=t,r.mdxType="string"==typeof t?t:a,i[1]=r;for(var u=2;u<l;u++)i[u]=n[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4273:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},metadata:function(){return r},toc:function(){return s},default:function(){return d}});var o=n(9603),a=n(120),l=(n(7378),n(5318)),i={title:"Quick start"},r={unversionedId:"getting-started/quick-start",id:"getting-started/quick-start",isDocsHomePage:!1,title:"Quick start",description:"In Next 10 Minutes",source:"@site/docs/getting-started/quick-start.mdx",sourceDirName:"getting-started",slug:"/getting-started/quick-start",permalink:"/docs/getting-started/quick-start",editUrl:"https://github.com/wechaty/wechaty.js.org/edit/master/docusaurus/docs/getting-started/quick-start.mdx",version:"current",lastUpdatedBy:"ninetailskim",lastUpdatedAt:1621875474,formattedLastUpdatedAt:"5/24/2021",frontMatter:{title:"Quick start"},sidebar:"docs",previous:{title:"Wechaty getting started overview",permalink:"/docs/getting-started/"},next:{title:"Running locally",permalink:"/docs/getting-started/hard-way"}},s=[{value:"In Next 10 Minutes",id:"in-next-10-minutes",children:[]},{value:"Run Ding Dong BOT",id:"run-ding-dong-bot",children:[{value:"1. Gitpod ",id:"gitpod",children:[]},{value:"2. Google Cloud Shell ",id:"google-cloud-shell",children:[]}]},{value:"Setting up development envioronment :",id:"setting-up-development-envioronment-",children:[{value:"Now we are ready to get started with our ding-dong bot!",id:"now-we-are-ready-to-get-started-with-our-ding-dong-bot",children:[]},{value:"Now you will be able to play with the ding-dong-bot! The messages received on whatsapp will also be displayed on the cloud terminal.",id:"now-you-will-be-able-to-play-with-the-ding-dong-bot-the-messages-received-on-whatsapp-will-also-be-displayed-on-the-cloud-terminal",children:[]},{value:"Congratulations, you did it!",id:"congratulations-you-did-it",children:[]}]},{value:"Contact Us",id:"contact-us",children:[]}],u={toc:s};function d(t){var e=t.components,i=(0,a.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,o.Z)({},u,i,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"in-next-10-minutes"},"In Next 10 Minutes"),(0,l.kt)("p",null,"Let's run Wechaty to:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Get a ",(0,l.kt)("a",{parentName:"li",href:"https://web.wechat.com/"},"WeChat")," QR Code (scan to login if you have a WeChat account)"),(0,l.kt)("li",{parentName:"ol"},"Get a ",(0,l.kt)("a",{parentName:"li",href:"https://web.whatsapp.com/"},"Whatsapp")," QR Code (scan to login if you have a Whatsapp account)"),(0,l.kt)("li",{parentName:"ol"},"After you logged in to the WeChat or Whatsapp, your code will be able to process the received messages, as well as reply them as you wish.")),(0,l.kt)("h2",{id:"run-ding-dong-bot"},"Run Ding Dong BOT"),(0,l.kt)("p",null,"To help you play with Wechaty quick and easy, we will run ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started/blob/master/examples/ding-dong-bot.ts"},"ding-dong BOT")," from ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/wechaty/wechaty-getting-started"},"Wechaty Getting Started Template")," GitHub repo in your browser with any of the following online IDEs:"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#gitpod"},"Gitpod"),": The easiest way to getting started by login with your GitHub account."),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"#google-cloud-shell"},"Google Cloud Shell"),": Has a great step by step online tutorial grantuee you can learn something by login with your Google account.")),(0,l.kt)("h3",{id:"gitpod"},"1. Gitpod ",(0,l.kt)("a",{parentName:"h3",href:"https://gitpod.io/#https://github.com/wechaty/wechaty-getting-started"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/Gitpod-Ready--to--Code-blue?logo=gitpod",alt:null}))),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"GitPod",src:n(2419).Z})),(0,l.kt)("p",null,"Gitpod in an online IDE which provides you with a complete development envioronment accompanied by a VS-Code powered IDE and a cloud-based Linux container. This is what the below link will take you to! Happy hacking!"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image",src:n(2194).Z})),(0,l.kt)("p",null,"Let's ",(0,l.kt)("a",{parentName:"p",href:"https://gitpod.io/#https://github.com/wechaty/wechaty-getting-started"},"run your first Ding Dong bot with Gitpod!")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Read more: ",(0,l.kt)("a",{parentName:"p",href:"https://wechaty.js.org/2021/02/06/wechaty-getting-started-without-leave-your-browser/"},"Getting Started Without Leave Your Browser: Wechaty \u2764\ufe0f Gitpod"))),(0,l.kt)("h3",{id:"google-cloud-shell"},"2. Google Cloud Shell ",(0,l.kt)("a",{parentName:"h3",href:"https://ssh.cloud.google.com/cloudshell/editor?cloudshell_git_repo=https%3A%2F%2Fgithub.com%2Fwechaty%2Fwechaty-getting-started&cloudshell_open_in_editor=examples/ding-dong-bot.ts&cloudshell_workspace=.&cloudshell_tutorial=examples/tutorials/google-cloud-shell-tutorial.md"},(0,l.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/%F0%9F%92%BB%20Google%20Cloud%20Shell-%3C%2F%3E-blue",alt:null}))),(0,l.kt)("h4",{id:"once-you-click-on-the-link-below-you-see-this-page-"},"Once you click on the link below, you see this page :"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Google Cloud Shell Homepage",src:n(6395).Z})),(0,l.kt)("h4",{id:"click-continue-you-will-see-this-page-"},"Click Continue. You will see this page :"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Google Cloud Shell Homepage - Make selection",src:n(2184).Z})),(0,l.kt)("h4",{id:"it-will-the-take-you-to-the-google-cloud-shell-editor-"},"It will the take you to the Google Cloud shell editor :"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Google Cloud shell editor starting page",src:n(3878).Z})),(0,l.kt)("h4",{id:"the-wechaty-tutorial-will-open-up"},"The Wechaty tutorial will open up!"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Google Cloud Shell Editor - Wechaty Tutorial - Start",src:n(8087).Z})),(0,l.kt)("h2",{id:"setting-up-development-envioronment-"},"Setting up development envioronment :"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Install Node.js v12+."),(0,l.kt)("li",{parentName:"ol"},"Git clone wechaty-getting-started repo"),(0,l.kt)("li",{parentName:"ol"},"Install system depending packages")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"1. Install Node.js ")),(0,l.kt)("p",null,"Node.js has been pre-installed in Google-Cloud Shell already."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"2. Git clone wechaty-getting-started repo with ",(0,l.kt)("inlineCode",{parentName:"strong"},"git clone "),".")),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"Git Repo "),"has been already cloned in ",(0,l.kt)("strong",{parentName:"p"},"Google Cloud Shell"),"."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"3. Install system dependancy packages")),(0,l.kt)("p",null,"The puppeteer needs ",(0,l.kt)("inlineCode",{parentName:"p"},"libgbm 1")," to be presented in the system, we need to install it first, run :"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"sudo apt install -y libgbml ")),(0,l.kt)("p",null,"Follow the instructions to install required dependancies.  "),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Wechaty shell instructions to execute",src:n(3478).Z})),(0,l.kt)("h4",{id:"next-install-npm-"},"Next, install NPM :"),(0,l.kt)("p",null,"Install the NPM packages with ",(0,l.kt)("inlineCode",{parentName:"p"},"npm install"),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Dependancy installation with NPM",src:n(9639).Z})),(0,l.kt)("h3",{id:"now-we-are-ready-to-get-started-with-our-ding-dong-bot"},"Now we are ready to get started with our ding-dong bot!"),(0,l.kt)("p",null,"Its source code is in ",(0,l.kt)("inlineCode",{parentName:"p"},"examples/ding-dong-bot.ts"),"."),(0,l.kt)("h4",{id:"lets-try-running-ding-dong-bot-with-whatsapp-"},"Lets try running Ding-Dong Bot with Whatsapp :"),(0,l.kt)("p",null,"To start our bot with whatsapp, we need to define WECHATY_PUPPET = wechaty-puppet-whatsapp. Run the following on the terminal :"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"export \\\nWECHATY_PUPPET=wechaty-puppet-whatsapp\nnpm start\n")),(0,l.kt)("p",null,"You will see a ",(0,l.kt)("strong",{parentName:"p"},"QR Code")," appear on the ",(0,l.kt)("strong",{parentName:"p"},"cloud terminal"),". ",(0,l.kt)("strong",{parentName:"p"},"Scan")," it with your ",(0,l.kt)("strong",{parentName:"p"},"Whatsapp scanner."),"."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Scan Whatsapp QR Code from terminal page",src:n(6245).Z})),(0,l.kt)("h3",{id:"now-you-will-be-able-to-play-with-the-ding-dong-bot-the-messages-received-on-whatsapp-will-also-be-displayed-on-the-cloud-terminal"},"Now you will be able to play with the ding-dong-bot! The messages received on whatsapp will also be displayed on the cloud terminal."),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Whatsapp messages displayed on google cloud terminal",src:n(2841).Z})),(0,l.kt)("p",null,"If you have finished the previous step, and login-ed successfully, then your bot will be able to reply a dong for any message send it as a ding, no matter which IM(Whatsapp or WeChat) your bot is working with. You can even add your own features!"),(0,l.kt)("h4",{id:"now-if-you-get-a-new-feature-request-from-your-client-reply-dongdong-for-dingding-you-can-do-it-super-fast-just-updated-the-onmessage-function-in-your-ding-dong-botts-file"},"Now if you get a new feature request from your client: reply dongdong for dingding, you can do it super fast! Just updated the onMessage function in your ding-dong-bot.ts file!"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"async function onMessage (msg: Message) {\n  log.info('StarterBot', msg.toString())\n\n  if (msg.text() === 'ding') {\n    await msg.say('dong')\n  }\n  if (msg.text() === 'dingding') {\n    await msg.say('dongdong')\n  }\n}\n")),(0,l.kt)("h4",{id:"thats-it-we-have-added-3-lines-of-code-to-implment-our-new-feature-do-not-forget-to-save-the-file-changes-to-the-disk"},"That's it! We have added 3 lines of code to implment our new feature. Do not forget to save the file changes to the disk."),(0,l.kt)("p",null,"Next up, start your brand new new ding-dong BOT and test your new feature! Once you complete the tutorial, you will be directed to the completion page."),(0,l.kt)("h3",{id:"congratulations-you-did-it"},"Congratulations, you did it!"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"Getting Started Tutorial Completion Page",src:n(8822).Z})),(0,l.kt)("p",null,"Click here to ",(0,l.kt)("a",{parentName:"p",href:"https://ssh.cloud.google.com/cloudshell/editor?cloudshell_git_repo=https%3A%2F%2Fgithub.com%2Fwechaty%2Fwechaty-getting-started&cloudshell_open_in_editor=examples/ding-dong-bot.ts&cloudshell_workspace=.&cloudshell_tutorial=examples/tutorials/google-cloud-shell-tutorial.md"},"get started with Google Cloud Shell")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Read more: ",(0,l.kt)("a",{parentName:"p",href:"https://wechaty.js.org/2021/02/20/google-cloud-shell-tutorials/"},"Google Cloud Shell Tutorials for Wechaty"))),(0,l.kt)("h2",{id:"contact-us"},"Contact Us"),(0,l.kt)("p",null,"You can ",(0,l.kt)("a",{parentName:"p",href:"https://gitter.im/wechaty/wechaty"},"join our Gitter")," network if you aren\u2019t already a member."))}d.isMDXComponent=!0},3478:function(t,e,n){"use strict";e.Z=n.p+"assets/images/cloud-execution-instructions-4a74e81e93e6885ffe171d7508ece2f7.png"},9639:function(t,e,n){"use strict";e.Z=n.p+"assets/images/cloud-npm-installation-e625cb429fd600481e6212f5e2809ba6.png"},6245:function(t,e,n){"use strict";e.Z=n.p+"assets/images/cloud-scan-QR-whatsapp-558116bbe1e6d79135368847395cb07c.png"},2841:function(t,e,n){"use strict";e.Z=n.p+"assets/images/getting-started-terminal-messages-a08a7dfa9d879bad3de7a1de343ffe2f.png"},8822:function(t,e,n){"use strict";e.Z=n.p+"assets/images/getting-started-tutorial-completion-664980f09a4520456863bf020e36b719.png"},2419:function(t,e,n){"use strict";e.Z=n.p+"assets/images/gitpod-feda4094ab1ae63c69e9ce6ba327b46f.png"},2194:function(t,e,n){"use strict";e.Z=n.p+"assets/images/gitpod_2-69c7e673124bcf85ce045787a2f18f59.png"},3878:function(t,e,n){"use strict";e.Z=n.p+"assets/images/google-cloud-shell-editor-starting-73930809b64bd306bbb28f79cb5b5521.png"},8087:function(t,e,n){"use strict";e.Z=n.p+"assets/images/google-cloud-shell-editor-wechaty-tutorial-start-page-4e61471761b233c103cffa1f144ccc64.png"},2184:function(t,e,n){"use strict";e.Z=n.p+"assets/images/google-cloud-shell-homepage-selection-231895024cc5aaaa280cfc51afef8d32.png"},6395:function(t,e,n){"use strict";e.Z=n.p+"assets/images/google-cloud-shell-homepage-442735840813857f111a60c283aabdfe.png"}}]);