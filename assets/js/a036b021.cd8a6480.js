"use strict";(self.webpackChunkdocumentation=self.webpackChunkdocumentation||[]).push([[703],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),u=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=u(e.components);return a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,d=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,f=c["".concat(d,".").concat(m)]||c[m]||p[m]||o;return r?a.createElement(f,s(s({ref:t},l),{},{components:r})):a.createElement(f,s({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var u=2;u<o;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},32741:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={id:"useResetPassword",title:"useResetPassword",siderbar_label:"useResetPassword",description:"useResetPassword data hook from refine is a modified version of react-query's useMutation for registration."},s=void 0,i={unversionedId:"core/hooks/auth/useResetPassword",id:"core/hooks/auth/useResetPassword",title:"useResetPassword",description:"useResetPassword data hook from refine is a modified version of react-query's useMutation for registration.",source:"@site/docs/core/hooks/auth/useResetPassword.md",sourceDirName:"core/hooks/auth",slug:"/core/hooks/auth/useResetPassword",permalink:"/docs/core/hooks/auth/useResetPassword",draft:!1,editUrl:"https://github.com/pankod/refine/tree/master/documentation/docs/core/hooks/auth/useResetPassword.md",tags:[],version:"current",lastUpdatedBy:"Ayd\u0131n",lastUpdatedAt:1662036092,formattedLastUpdatedAt:"Sep 1, 2022",frontMatter:{id:"useResetPassword",title:"useResetPassword",siderbar_label:"useResetPassword",description:"useResetPassword data hook from refine is a modified version of react-query's useMutation for registration."},sidebar:"someSidebar",previous:{title:"useRegister",permalink:"/docs/core/hooks/auth/useRegister"},next:{title:"useUpdatePassword",permalink:"/docs/core/hooks/auth/useUpdatePassword"}},d={},u=[{value:"Usage",id:"usage",level:2},{value:"Redirection after resetPassword",id:"redirection-after-resetpassword",level:2}],l={toc:u};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"useResetPassword")," calls ",(0,n.kt)("inlineCode",{parentName:"p"},"resetPassword")," method from ",(0,n.kt)("a",{parentName:"p",href:"/docs/core/providers/auth-provider"},(0,n.kt)("inlineCode",{parentName:"a"},"authProvider"))," under the hood. It reset passwords the user if ",(0,n.kt)("inlineCode",{parentName:"p"},"resetPassword")," method from ",(0,n.kt)("inlineCode",{parentName:"p"},"authProvider")," resolves and if it rejects shows an error notification."),(0,n.kt)("p",null,"It returns the result of ",(0,n.kt)("inlineCode",{parentName:"p"},"react-query"),"'s ",(0,n.kt)("a",{parentName:"p",href:"https://react-query.tanstack.com/reference/useMutation"},"useMutation"),"."),(0,n.kt)("p",null,"Data that is resolved from ",(0,n.kt)("inlineCode",{parentName:"p"},"resetPassword")," will be returned as the ",(0,n.kt)("inlineCode",{parentName:"p"},"data")," in the query result."),(0,n.kt)("h2",{id:"usage"},"Usage"),(0,n.kt)("p",null,"Normally refine provides a default reset password page. If you prefer to use this default reset password page, there is no need to handle reset password flow manually.",(0,n.kt)("br",{parentName:"p"}),"\n","If we want to build a custom resetPassword page instead of default one that comes with refine, ",(0,n.kt)("inlineCode",{parentName:"p"},"useResetPassword")," can be used like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="pages/customResetPasswordPage"',title:'"pages/customResetPasswordPage"'},'import { useResetPassword } from "@pankod/refine-core";\n\ntype resetPasswordVariables = {\n    email: string;\n};\n\nexport const resetPasswordPage = () => {\n    const { mutate: resetPassword } =\n        useResetPassword<resetPasswordVariables>();\n\n    const onSubmit = (values: resetPasswordVariables) => {\n        resetPassword(values);\n    };\n\n    return (\n        <form onSubmit={onSubmit}>\n            <label>Email</label>\n            <input name="email" value="test@refine.com" />\n            <button type="submit">Submit</button>\n        </form>\n    );\n};\n')),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("inlineCode",{parentName:"p"},"mutate")," acquired from ",(0,n.kt)("inlineCode",{parentName:"p"},"useResetPassword")," can accept any kind of object for values since ",(0,n.kt)("inlineCode",{parentName:"p"},"resetPassword")," method from ",(0,n.kt)("inlineCode",{parentName:"p"},"authProvider")," doesn't have a restriction on its parameters.",(0,n.kt)("br",{parentName:"p"}),"\n","A type parameter for the values can be provided to ",(0,n.kt)("inlineCode",{parentName:"p"},"useResetPassword"),"."),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"const { mutate: resetPassword } = useResetPassword<{ email: string }>();\n"))),(0,n.kt)("h2",{id:"redirection-after-resetpassword"},"Redirection after resetPassword"),(0,n.kt)("p",null,"We have 2 options for redirecting the app after resetPassword successfully ."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A custom url can be resolved from the promise returned from the ",(0,n.kt)("inlineCode",{parentName:"li"},"resetPassword")," method of the ",(0,n.kt)("a",{parentName:"li",href:"/docs/core/providers/auth-provider"},"authProvider"),".")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'const authProvider: AuthProvider = {\n    ...\n    resetPassword: () => {\n        ...\n        return Promise.resolve("/custom-url");\n    }\n}\n')),(0,n.kt)("p",null,"A custom url can be given to mutate function from the ",(0,n.kt)("inlineCode",{parentName:"p"},"useResetPassword")," hook if you want to redirect yourself to a certain url."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},'import { useResetPassword } from "@pankod/refine-core";\n\nconst { mutate: resetPassword } = useResetPassword();\n\nresetPassword({ redirectPath: "/custom-url" });\n')),(0,n.kt)("p",null,"Then, you can handle this url in your ",(0,n.kt)("inlineCode",{parentName:"p"},"resetPassword")," method of the ",(0,n.kt)("inlineCode",{parentName:"p"},"authProvider"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"\nconst authProvider: AuthProvider = {\n    ...\n    resetPassword: ({ redirectPath }) => {\n        ...\n        return Promise.resolve(redirectPath);\n    }\n}\n\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If the promise returned from the ",(0,n.kt)("inlineCode",{parentName:"li"},"resetPassword")," method of the ",(0,n.kt)("inlineCode",{parentName:"li"},"authProvider")," gets resolved with ",(0,n.kt)("inlineCode",{parentName:"li"},"false")," no redirection will occur.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-tsx"},"const authProvider: AuthProvider = {\n    ...\n    resetPassword: () => {\n        ...\n        return Promise.resolve(false);\n    }\n}\n")),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If the promise returned from ",(0,n.kt)("inlineCode",{parentName:"p"},"resetPassword")," is resolved with nothing, app won't be redirected to any route by default.")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This hook can only be used if ",(0,n.kt)("inlineCode",{parentName:"p"},"authProvider")," is provided.")))}p.isMDXComponent=!0}}]);