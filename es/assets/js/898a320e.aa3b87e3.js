(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[27],{3905:function(e,r,n){"use strict";n.d(r,{Zo:function(){return u},kt:function(){return m}});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function c(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),s=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=s(e.components);return t.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?t.createElement(f,i(i({ref:r},u),{},{components:n})):t.createElement(f,i({ref:r},u))}));function m(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2307:function(e,r,n){"use strict";n.r(r),n.d(r,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var t=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],c={},l={unversionedId:"requisites",id:"requisites",isDocsHomePage:!1,title:"Requisitos",description:"Credenciales de cuenta",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/requisites.md",sourceDirName:".",slug:"/requisites",permalink:"/es/docs/requisites",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/requisites.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Introducci\xf3n",permalink:"/es/docs/intro"},next:{title:"Instalaci\xf3n",permalink:"/es/docs/install"}},s=[{value:"Credenciales de cuenta",id:"credenciales-de-cuenta",children:[{value:"Generaci\xf3n",id:"generaci\xf3n",children:[]},{value:"Pruebas",id:"pruebas",children:[]}]}],u={toc:s};function p(e){var r=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"credenciales-de-cuenta"},"Credenciales de cuenta"),(0,o.kt)("h3",{id:"generaci\xf3n"},"Generaci\xf3n"),(0,o.kt)("p",null,"Como requisito vas a necesitar tener lo siguiente antes de integrarte con nuestra biblioteca:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Una cuenta en MercadoPago"),(0,o.kt)("li",{parentName:"ol"},"Una ",(0,o.kt)("inlineCode",{parentName:"li"},"llave p\xfablica")," asociada a tu cuenta"),(0,o.kt)("li",{parentName:"ol"},"Un ",(0,o.kt)("inlineCode",{parentName:"li"},"ID de preferencia")," obtenido desde tus servidores")),(0,o.kt)("p",null,"Si no ten\xe9s nada de esto, pod\xe9s empezar ac\xe1:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.mercadopago.com.ar"},"Crear una cuenta en MercadoPago")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://applications.mercadopago.com"},"Crear una aplicaci\xf3n en MercadoPago")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"https://www.mercadopago.com.ar/developers/es/reference/preferences/_checkout_preferences/post/"},"Crear una preferencia de pago en MercadoPago"))),(0,o.kt)("h3",{id:"pruebas"},"Pruebas"),(0,o.kt)("p",null,"A prop\xf3sito de pruebas te proveemos un ejemplo de ",(0,o.kt)("inlineCode",{parentName:"p"},"cURL")," sobre como crear una preferencia:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl -X POST \\\n    \'https://api.mercadopago.com/checkout/preferences?access_token=ACCESS_TOKEN\' \\\n    -H \'Content-Type: application/json\' \\\n    -d \'{\n      "items": [\n        {\n          "title": "Dummy Item",\n          "description": "Multicolor Item",\n          "quantity": 1,\n          "currency_id": "ARS",\n          "unit_price": 10.0\n        }\n      ],\n      "payer": {\n        "email": "payer@email.com"\n      }\n    }\'\n')),(0,o.kt)("p",null,"Vas a necesitar reemplazar ",(0,o.kt)("inlineCode",{parentName:"p"},"ACCESS_TOKEN")," con el token de acceso de la aplicaci\xf3n que hayas generado con tu cuenta de ",(0,o.kt)("inlineCode",{parentName:"p"},"MercadoPago"),"."),(0,o.kt)("div",{class:"alert alert--warning",role:"alert",style:{backgroundColor:"#FFD026",color:"#444444"}},"Record\xe1 usar ",(0,o.kt)("strong",null,"payer@email.com")," para poder probar el ejemplo de `cURL`. ",(0,o.kt)("strong",null,"Otro email no va a funcionar"),"."),(0,o.kt)("br",null),(0,o.kt)("p",null,"Si tenes m\xe1s dudas podes leer m\xe1s documentaci\xf3n en este portal:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://developers.mercadopago.com"},"Portal de desarrollo de MercadoPago"))))}p.isMDXComponent=!0}}]);