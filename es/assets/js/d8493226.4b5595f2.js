(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[207],{3905:function(e,r,a){"use strict";a.d(r,{Zo:function(){return c},kt:function(){return m}});var t=a(7294);function n(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){n(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function l(e,r){if(null==e)return{};var a,t,n=function(e,r){if(null==e)return{};var a,t,n={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=t.createContext({}),p=function(e){var r=t.useContext(s),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},c=function(e){var r=p(e.components);return t.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(a),m=n,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return a?t.createElement(g,i(i({ref:r},c),{},{components:a})):t.createElement(g,i({ref:r},c))}));function m(e,r){var a=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return t.createElement.apply(null,i)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3577:function(e,r,a){"use strict";a.r(r),a.d(r,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var t=a(2122),n=a(9756),o=(a(7294),a(3905)),i=["components"],l={},s={unversionedId:"ios-setup/react-native-064",id:"ios-setup/react-native-064",isDocsHomePage:!1,title:"React Native >= 0.64",description:"Realizar el setup de esta biblioteca es un poco m\xe1s complicado para iOS que para Android.",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/ios-setup/react-native-064.md",sourceDirName:"ios-setup",slug:"/ios-setup/react-native-064",permalink:"/react-native-mercadopago-px/es/docs/ios-setup/react-native-064",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/ios-setup/react-native-064.md",version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"React Native <= 0.63",permalink:"/react-native-mercadopago-px/es/docs/ios-setup/react-native-063"},next:{title:"Uso",permalink:"/react-native-mercadopago-px/es/docs/usage"}},p=[{value:"1. Agregar un Bridging Header",id:"1-agregar-un-bridging-header",children:[]},{value:"2. Modificar el AppDelegate.m",id:"2-modificar-el-appdelegatem",children:[]},{value:"3. Actualizar el Podfile",id:"3-actualizar-el-podfile",children:[{value:"3.1. Agregar el SDK de MercadoPago",id:"31-agregar-el-sdk-de-mercadopago",children:[]},{value:"3.2. Deshabilitar Flipper",id:"32-deshabilitar-flipper",children:[]}]},{value:"Instalar los Pods",id:"instalar-los-pods",children:[]}],c={toc:p};function d(e){var r=e.components,a=(0,n.Z)(e,i);return(0,o.kt)("wrapper",(0,t.Z)({},c,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Realizar el setup de esta biblioteca es un poco m\xe1s complicado para ",(0,o.kt)("inlineCode",{parentName:"p"},"iOS")," que para ",(0,o.kt)("inlineCode",{parentName:"p"},"Android"),"."),(0,o.kt)("h2",{id:"1-agregar-un-bridging-header"},"1. Agregar un Bridging Header"),(0,o.kt)("p",null,"Como est\xe1 biblioteca esta desarrollada usando ",(0,o.kt)("inlineCode",{parentName:"p"},"Swift"),", vas a necesitar generar un ",(0,o.kt)("inlineCode",{parentName:"p"},"Bridging Header")," desde ",(0,o.kt)("inlineCode",{parentName:"p"},"Xcode"),"."),(0,o.kt)("h2",{id:"2-modificar-el-appdelegatem"},"2. Modificar el AppDelegate.m"),(0,o.kt)("p",null,"Vas a tener que modificar el delegate de la siguiente forma:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"- self.window.rootViewController = rootViewController;\n\n+ UINavigationController *navController = [[UINavigationController alloc] initWithRootViewController:rootViewController];\n\n+ [navController setToolbarHidden:YES animated:YES];\n+ [navController setNavigationBarHidden:YES];\n\n+ self.window.rootViewController = navController;\n")),(0,o.kt)("h2",{id:"3-actualizar-el-podfile"},"3. Actualizar el Podfile"),(0,o.kt)("h3",{id:"31-agregar-el-sdk-de-mercadopago"},"3.1. Agregar el SDK de MercadoPago"),(0,o.kt)("p",null,"Vas a necesitar configurar el SDK de MercadoPago como un framework din\xe1mico, para poder hacer esto vas a tener que realizar los siguientes pasos:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Instalar la siguiente gema de Ruby: ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"gem install cocoapods-user-defined-build-types\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Anda al ",(0,o.kt)("inlineCode",{parentName:"li"},"Podfile")," y agrega las siguientes lineas al comienzo del mismo:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cocoapods"},"plugin 'cocoapods-user-defined-build-types'\n\nenable_user_defined_build_types!\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Siguiendo dentro del ",(0,o.kt)("inlineCode",{parentName:"li"},"Podfile")," en la definici\xf3n de targets agrega la siguiente linea: ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-cocoapods"},"pod 'MercadoPagoSDK', :build_type => :dynamic_framework\n")),(0,o.kt)("h3",{id:"32-deshabilitar-flipper"},"3.2. Deshabilitar Flipper"),(0,o.kt)("p",null,"Como nuestra biblioteca require ",(0,o.kt)("inlineCode",{parentName:"p"},"use_framework")," no es compatible con ",(0,o.kt)("inlineCode",{parentName:"p"},"Flipper"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"use_flipper!()\n+ #use_flipper!()\n")),(0,o.kt)("h2",{id:"instalar-los-pods"},"Instalar los Pods"),(0,o.kt)("p",null,"Instala los ",(0,o.kt)("inlineCode",{parentName:"p"},"Pods")," corriendo el siguiente comando:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd ios\npod deintegrate\npod install\n")),(0,o.kt)("p",null,"Con estos pasos completados, deber\xedas poder compilar tu aplicaci\xf3n iOS correctamente."))}d.isMDXComponent=!0}}]);