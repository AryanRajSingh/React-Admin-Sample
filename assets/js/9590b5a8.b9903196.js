"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[51933],{3905:(e,t,i)=>{i.d(t,{Zo:()=>m,kt:()=>u});var a=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)i=r[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},m=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(i),u=n,h=d["".concat(p,".").concat(u)]||d[u]||c[u]||r;return i?a.createElement(h,o(o({ref:t},m),{},{components:i})):a.createElement(h,o({ref:t},m))}));function u(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,o=new Array(r);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<r;s++)o[s]=i[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}d.displayName="MDXCreateElement"},46793:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=i(87462),n=(i(67294),i(3905)),r=i(77815),o=i(45977);const l={title:"Web3 with Refine",description:"Sign-in Ethereum with Web3 and Refine",slug:"web3-with-refine",authors:"melih",tags:["refine","web3","dapps","metamask","login-ethereum"],image:"/img/placeholder.png",hide_table_of_contents:!1},p=void 0,s={permalink:"/blog/web3-with-refine",source:"@site/blog/2021-12-13-web3-refine.md",title:"Web3 with Refine",description:"Sign-in Ethereum with Web3 and Refine",date:"2021-12-13T00:00:00.000Z",formattedDate:"December 13, 2021",tags:[{label:"refine",permalink:"/blog/tags/refine"},{label:"web3",permalink:"/blog/tags/web-3"},{label:"dapps",permalink:"/blog/tags/dapps"},{label:"metamask",permalink:"/blog/tags/metamask"},{label:"login-ethereum",permalink:"/blog/tags/login-ethereum"}],readingTime:1.72,hasTruncateMarker:!0,authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],frontMatter:{title:"Web3 with Refine",description:"Sign-in Ethereum with Web3 and Refine",slug:"web3-with-refine",authors:"melih",tags:["refine","web3","dapps","metamask","login-ethereum"],image:"/img/placeholder.png",hide_table_of_contents:!1},prevItem:{title:"How to upload files from your HTML form using Base64 encoding",permalink:"/blog/how-to-base64-upload"},nextItem:{title:"Refine vs AdminBro - Comparison Admin Panel Framework",permalink:"/blog/refine-vs-adminbro"},relatedPosts:[{title:"How to Multipart File Upload Using FormData with React Hook Form",permalink:"/blog/how-to-multipart-file-upload-with-react-hook-form",formattedDate:"March 29, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:7.615,date:"2022-03-29T00:00:00.000Z"},{title:"Become a Refine guest technical writer",permalink:"/blog/refine-writer-program",formattedDate:"July 20, 2022",authors:[{name:"Necati \xd6zmen",title:"Head of Content, refine",url:"https://github.com/necatiozmen",description:"Feeling Irie",github:"https://github.com/necatiozmen",twitter:"https://github.com/necatiozmen",linkedin:"https://github.com/necatiozmen",imageURL:"https://github.com/necatiozmen.png",key:"necati"}],readingTime:6.68,date:"2022-07-20T00:00:00.000Z"},{title:"React Hook Form Validation with Complete Examples",permalink:"/blog/react-hook-form-validation-examples",formattedDate:"September 27, 2022",authors:[{name:"David Omotayo",title:"Frontend developer",url:"https://github.com/david4473",imageURL:"https://github.com/david4473.png",key:"david_omotayo"}],readingTime:17.565,date:"2022-09-27T00:00:00.000Z"}],authorPosts:[{title:"How to Create Full Stack React/Next.JS Web App in Few Hour",permalink:"/blog/create-full-stack-app-with-refine",formattedDate:"April 29, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:8.485,date:"2022-04-29T00:00:00.000Z"},{title:"Building an Customizable Invoice Generator App with Refine, Strapi & Ant Design | Part II",permalink:"/blog/refine-invoice-generator",formattedDate:"March 1, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:12.635,date:"2022-03-01T00:00:00.000Z"},{title:"How to Multipart File Upload Using FormData with React Hook Form",permalink:"/blog/how-to-multipart-file-upload-with-react-hook-form",formattedDate:"March 29, 2022",authors:[{name:"Melih Ekinci",title:"Frontend Developer",url:"https://github.com/mlhekinci",imageURL:"https://github.com/mlhekinci.png",key:"melih"}],readingTime:7.615,date:"2022-03-29T00:00:00.000Z"}]},m={authorsImageUrls:[void 0]},c=[{value:"What is Web3?",id:"what-is-web3",level:2},{value:"What is dApps(Dapps)?",id:"what-is-dappsdapps",level:2},{value:"Live Codesandbox Example",id:"live-codesandbox-example",level:2}],d={toc:c};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"In this article, we will talk about what is web3 and a simple ethereum wallet login application with ",(0,n.kt)("strong",{parentName:"p"},"refine"),"."),(0,n.kt)("h2",{id:"what-is-web3"},"What is Web3?"),(0,n.kt)("p",null,"Web 3.0 eliminates intermediates. There\u2019s no centralized database that stores the application state."),(0,n.kt)("p",null,"In web3, developers don't usually build and deploy applications that run on a single server or that store their data in a single database.\nInstead of, Web3 applications run on blockchains, decentralized networks of many peer to peer nodes"),(0,n.kt)("p",null,"Features provided by Web3:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Verifiable"),(0,n.kt)("li",{parentName:"ul"},"Self-governing"),(0,n.kt)("li",{parentName:"ul"},"Permissionless"),(0,n.kt)("li",{parentName:"ul"},"Stateful"),(0,n.kt)("li",{parentName:"ul"},"Trustless"),(0,n.kt)("li",{parentName:"ul"},"Native built-in payments"),(0,n.kt)("li",{parentName:"ul"},"Anonymity")),(0,n.kt)("h2",{id:"what-is-dappsdapps"},"What is dApps(Dapps)?"),(0,n.kt)("p",null,'Dapps is short for "Decentralized Applications" and refers to any application that is decentralized in nature, built on a blockchain, and may use tokens for transactions.'),(0,n.kt)("p",null,"Dapps is just like any other software application you use. It could be a website or an app on your phone. What makes a Dapp different than a traditional app is that it's built on a decentralized network, like Ethereum."),(0,n.kt)("p",null,"Many applications on the logic of dApp have been developed and continue to be developed."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://ethereum.org/en/dapps/"},"Here you can browse some dapps")),(0,n.kt)("p",null,"We have developed a simple app where you can login with ethereum and send ethereum over the network using Metamask Wallet and ",(0,n.kt)("strong",{parentName:"p"},"refine"),"."),(0,n.kt)("p",null,"This application allows you to login with your web3 wallet and you can also send ethereum over the ethereum network."),(0,n.kt)("p",null,"This example is simple intro to dApps development  built with web3 and ",(0,n.kt)("strong",{parentName:"p"},"refine"),"."),(0,n.kt)("div",{class:"img-container"},(0,n.kt)("div",{class:"window"},(0,n.kt)("div",{class:"control red"}),(0,n.kt)("div",{class:"control orange"}),(0,n.kt)("div",{class:"control green"})),(0,n.kt)("img",{src:r.Z,alt:"login"})),(0,n.kt)("br",null),(0,n.kt)("div",{class:"img-container"},(0,n.kt)("div",{class:"window"},(0,n.kt)("div",{class:"control red"}),(0,n.kt)("div",{class:"control orange"}),(0,n.kt)("div",{class:"control green"})),(0,n.kt)("img",{src:o.Z,alt:"overview"})),(0,n.kt)("br",null),(0,n.kt)("p",null,"You can develop many fast and functional dApps using web3 and ",(0,n.kt)("strong",{parentName:"p"},"refine"),"."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/refinedev/refine/tree/master/examples/web3/ethereumLogin"},"View Source")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://refine.dev/docs/guides-and-concepts/web3/ethereum-signin/"},"View Guide")),(0,n.kt)("h2",{id:"live-codesandbox-example"},"Live Codesandbox Example"),(0,n.kt)("iframe",{src:"https://codesandbox.io/embed/signin-with-ethereum-umho3?autoresize=1&fontsize=14&theme=dark&view=preview",style:{width:"100%",height:"80vh",border:"0px",borderRadius:"8px",overflow:"hidden"},title:"signin-with-ethereum",allow:"accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking",sandbox:"allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"}))}u.isMDXComponent=!0},77815:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/login-bdf4a22c5704da1860b37373863170db.gif"},45977:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/overview-6a9efc47259667e81bac625c1192b70c.gif"}}]);