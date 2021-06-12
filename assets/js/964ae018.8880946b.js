(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[491],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),m=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=m(e.components);return a.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=m(n),d=r,k=u["".concat(p,".").concat(d)]||u[d]||c[d]||i;return n?a.createElement(k,o(o({ref:t},s),{},{components:n})):a.createElement(k,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5284:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return m},default:function(){return c}});var a=n(2122),r=n(9756),i=(n(7294),n(3905)),o=["components"],l={},p={unversionedId:"api-reference",id:"api-reference",isDocsHomePage:!1,title:"API Reference",description:"Methods",source:"@site/docs/api-reference.md",sourceDirName:".",slug:"/api-reference",permalink:"/react-native-mercadopago-px/docs/api-reference",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/api-reference.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Usage",permalink:"/react-native-mercadopago-px/docs/usage"},next:{title:"Troubleshooting",permalink:"/react-native-mercadopago-px/docs/troubleshooting"}},m=[{value:"Methods",id:"methods",children:[{value:"<code>createPayment</code>",id:"createpayment",children:[]}]},{value:"Type Definitions",id:"type-definitions",children:[{value:"PaymentOptions",id:"paymentoptions",children:[]},{value:"Payment",id:"payment",children:[]}]}],s={toc:m};function c(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("h3",{id:"createpayment"},(0,i.kt)("inlineCode",{parentName:"h3"},"createPayment")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"static async createPayment(options: PaymentOptions): Promise<Payment>\n")),(0,i.kt)("p",null,"This function lets you start a MercadoPago Checkout Flow Activity or UI Controller depending on the platform that is running."),(0,i.kt)("h4",{id:"parameters"},"Parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"options")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/BlackBoxVision/react-native-mercadopago-px/blob/master/src/types/index.ts#L34"},(0,i.kt)("inlineCode",{parentName:"a"},"PaymentOptions"))),(0,i.kt)("td",{parentName:"tr",align:null},"An object which contains the payment configuration.")))),(0,i.kt)("h4",{id:"return-value"},"Return value"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Name"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"payment")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("a",{parentName:"td",href:"https://github.com/BlackBoxVision/react-native-mercadopago-px/blob/master/src/types/index.ts#L68"},(0,i.kt)("inlineCode",{parentName:"a"},"Payment"))),(0,i.kt)("td",{parentName:"tr",align:null},"An object which contains the payment information.")))),(0,i.kt)("h2",{id:"type-definitions"},"Type Definitions"),(0,i.kt)("h3",{id:"paymentoptions"},"PaymentOptions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options"),": ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/BlackBoxVision/react-native-mercadopago-px/blob/master/src/index.tsx#L26"},"PaymentOptions")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"publicKey"),": ",(0,i.kt)("strong",{parentName:"li"},"string")," - Key generated from your account to launch a checkout"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"preferenceId"),": ",(0,i.kt)("strong",{parentName:"li"},"string")," - ID of the payment preference"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"language"),": ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/BlackBoxVision/react-native-mercadopago-px/blob/master/src/types/index.ts#L1"},(0,i.kt)("inlineCode",{parentName:"a"},"SupportedLanguages")))," - Sets the language for the checkout, ",(0,i.kt)("strong",{parentName:"li"},"IOS only")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"advancedOptions"),": ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/BlackBoxVision/react-native-mercadopago-px/blob/master/src/types/index.ts#L19"},(0,i.kt)("inlineCode",{parentName:"a"},"AdvancedOptions"))),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"amountRowEnabled"),": ",(0,i.kt)("strong",{parentName:"li"},"boolean")," - Boolean flag to determine if amount row should be enabled"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"bankDealsEnabled"),": ",(0,i.kt)("strong",{parentName:"li"},"boolean")," - Boolean flag to determine if bank deals should be enabled"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"productId"),": ",(0,i.kt)("strong",{parentName:"li"},"string")," - Custom product ID"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"trackingOptions"),": ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/BlackBoxVision/react-native-mercadopago-px/blob/master/src/types/index.ts#L12"},"TrackingOptions")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sessionId"),": ",(0,i.kt)("strong",{parentName:"li"},"string")," - Session ID for checkout tracking, ",(0,i.kt)("strong",{parentName:"li"},"Android only"))))))),(0,i.kt)("h3",{id:"payment"},"Payment"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"payment"),": ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/BlackBoxVision/react-native-mercadopago-px/blob/master/src/index.tsx#L49"},"Payment")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"id"),": ",(0,i.kt)("strong",{parentName:"li"},"string")," - ID of the payment"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"status"),": ",(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/BlackBoxVision/react-native-mercadopago-px/blob/master/src/types/index.ts#L57"},(0,i.kt)("inlineCode",{parentName:"a"},"PaymentStatus")))," - Status of the payment"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"statusDetail"),": ",(0,i.kt)("strong",{parentName:"li"},"string")," - Status of the payment with more details"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"operationType"),": ",(0,i.kt)("strong",{parentName:"li"},"string | null")," - The Type of operation"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"description"),": ",(0,i.kt)("strong",{parentName:"li"},"string | null")," - The description of the payment"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"currencyId"),": ",(0,i.kt)("strong",{parentName:"li"},"string | null")," - The ID of the currency"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"paymentMethodId"),": ",(0,i.kt)("strong",{parentName:"li"},"string | null")," - The ID of the payment method"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"paymentTypeId"),": ",(0,i.kt)("strong",{parentName:"li"},"string | null")," - The ID of the payment type"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"issuerId"),": ",(0,i.kt)("strong",{parentName:"li"},"string | null")," - The ID of the card issuer"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"installments"),": ",(0,i.kt)("strong",{parentName:"li"},"number | null")," - The amount of installments"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"captured"),": ",(0,i.kt)("strong",{parentName:"li"},"boolean | null")," - If the payment is captured"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"liveMode"),": ",(0,i.kt)("strong",{parentName:"li"},"boolean | null")," - If the payment is in live mode"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"transactionAmount"),": ",(0,i.kt)("strong",{parentName:"li"},"number | null")," - The amount of the transaction")))))}c.isMDXComponent=!0}}]);