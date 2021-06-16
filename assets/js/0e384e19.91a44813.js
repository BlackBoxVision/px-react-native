(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(r),f=o,m=d["".concat(p,".").concat(f)]||d[f]||l[f]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},426:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return p},toc:function(){return s},default:function(){return l}});var n=r(2122),o=r(9756),i=(r(7294),r(3905)),a=["components"],c={},p={unversionedId:"intro",id:"intro",isDocsHomePage:!1,title:"Intro",description:"Motivation",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"https://react-native-mercadopago-px.blackbox-vision.tech/docs/intro",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/intro.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Requisites",permalink:"https://react-native-mercadopago-px.blackbox-vision.tech/docs/requisites"}},s=[{value:"Motivation",id:"motivation",children:[]},{value:"Experience",id:"experience",children:[]}],u={toc:s};function l(e){var t=e.components,r=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"motivation"},"Motivation"),(0,i.kt)("p",null,"Currently ",(0,i.kt)("inlineCode",{parentName:"p"},"MercadoPago")," only brings OSS support for Native SDKs. There's no intended support for ",(0,i.kt)("inlineCode",{parentName:"p"},"React Native"),". "),(0,i.kt)("p",null,"Since we use a lot ",(0,i.kt)("inlineCode",{parentName:"p"},"MercadoPago")," when developing products, we aimed to develop a SDK that acts as a Bridge for React Native letting other developers to integrate MercadoPago in its React Native Apps."),(0,i.kt)("h2",{id:"experience"},"Experience"),(0,i.kt)("p",null,"As we're bridging to the native SDKs, you'll be able to access this UI:"),(0,i.kt)("img",{src:"https://http2.mlstatic.com/frontend-assets/dx-devsite/mobile-sdk-flow.png?v=3.9.2-rc-1"}))}l.isMDXComponent=!0}}]);