(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[141],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return m}});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},p=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return t?o.createElement(f,i(i({ref:n},u),{},{components:t})):o.createElement(f,i({ref:n},u))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7499:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var o=t(2122),r=t(9756),a=(t(7294),t(3905)),i=["components"],l={},s={unversionedId:"troubleshooting",id:"troubleshooting",isDocsHomePage:!1,title:"Soluci\xf3n de problemas",description:"iOS",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/troubleshooting.md",sourceDirName:".",slug:"/troubleshooting",permalink:"/es/docs/troubleshooting",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/troubleshooting.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Referencia de API",permalink:"/es/docs/api-reference"}},c=[{value:"iOS",id:"ios",children:[{value:"No funciona en un app eyectada de Expo",id:"no-funciona-en-un-app-eyectada-de-expo",children:[]},{value:"Al correr en modo release se pierden algunos textos",id:"al-correr-en-modo-release-se-pierden-algunos-textos",children:[]}]},{value:"Android",id:"android",children:[{value:"El color de fondo se torna gris",id:"el-color-de-fondo-se-torna-gris",children:[]}]}],u={toc:c};function d(e){var n=e.components,t=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"ios"},"iOS"),(0,a.kt)("h3",{id:"no-funciona-en-un-app-eyectada-de-expo"},"No funciona en un app eyectada de Expo"),(0,a.kt)("p",null,"\xa1Si, funciona! Pero para que funcione adecuadamente con ",(0,a.kt)("inlineCode",{parentName:"p"},"Expo"),", vas a necesitar ajustar el ",(0,a.kt)("inlineCode",{parentName:"p"},"Podfile")," agregando la siguiente linea: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-objective-c"},"install! 'cocoapods', :disable_input_output_paths => true\n")),(0,a.kt)("p",null,"Ejecut\xe1 los siguientes comandos: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd ios\npod deintegrate\npod install\n")),(0,a.kt)("p",null,"Luego de este cambio deber\xedas poder correr tu aplicaci\xf3n Expo eyectada correctamente."),(0,a.kt)("h3",{id:"al-correr-en-modo-release-se-pierden-algunos-textos"},"Al correr en modo release se pierden algunos textos"),(0,a.kt)("p",null,"Hemos encontrado que este inconveniente es el resultado de que el SDK de MercadoPago no es expuesto como un framework din\xe1mico. Al estar definido en forma est\xe1tica, algunas referencias se quiebran resultando en la p\xe9rdida de algunos textos. "),(0,a.kt)("p",null,"Para corregir este problema deb\xe9s seguir los siguientes pasos: "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Instalar la siguiente gema de Ruby: ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"gem install cocoapods-user-defined-build-types\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"En el ",(0,a.kt)("inlineCode",{parentName:"li"},"Podfile")," agreg\xe1 las siguientes lineas al comienzo del mismo:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cocoapods"},"plugin 'cocoapods-user-defined-build-types'\n\nenable_user_defined_build_types!\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Siguiendo dentro del ",(0,a.kt)("inlineCode",{parentName:"li"},"Podfile")," en la definici\xf3n de targets agreg\xe1 la siguiente linea: ")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cocoapods"},"pod 'MercadoPagoSDK', :build_type => :dynamic_framework\n")),(0,a.kt)("p",null,"Con estos pasos, vas a poder ejecutar tu aplicaci\xf3n y los textos del checkout se ver\xe1n correctamente."),(0,a.kt)("h2",{id:"android"},"Android"),(0,a.kt)("h3",{id:"el-color-de-fondo-se-torna-gris"},"El color de fondo se torna gris"),(0,a.kt)("p",null,"Algunos usuarios reportaron tales inconvenientes con elementos que poseen scroll como ",(0,a.kt)("inlineCode",{parentName:"p"},"FlatList")," y ",(0,a.kt)("inlineCode",{parentName:"p"},"ScrollView"),". Como un hotfix para este problema, recomendamos pasarle un ",(0,a.kt)("inlineCode",{parentName:"p"},"contentContainerStyle")," con el color de fondo a usar."))}d.isMDXComponent=!0}}]);