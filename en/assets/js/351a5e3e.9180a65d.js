(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[869],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return f}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,m=p["".concat(c,".").concat(f)]||p[f]||u[f]||a;return n?o.createElement(m,i(i({ref:t},d),{},{components:n})):o.createElement(m,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1391:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return d},default:function(){return p}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),i=["components"],l={id:"HowToInstall",title:"How to install"},c=void 0,s={unversionedId:"Usage/HowToInstall",id:"Usage/HowToInstall",isDocsHomePage:!1,title:"How to install",description:"Introduction",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/Usage/HowToInstall.md",sourceDirName:"Usage",slug:"/Usage/HowToInstall",permalink:"/HoaryFox/en/docs/Usage/HowToInstall",editUrl:"https://github.com/hrntsm/HoaryFox/edit/develop/website/docs/Usage/HowToInstall.md",version:"current",frontMatter:{id:"HowToInstall",title:"How to install"},sidebar:"someSidebar",previous:{title:"StbBuilder",permalink:"/HoaryFox/en/docs/Component/StbBuilder"},next:{title:"Show ST-Bridge model",permalink:"/HoaryFox/en/docs/Usage/ShowSTBModel"}},d=[{value:"Introduction",id:"introduction",children:[]},{value:"Karamba3d Integration",id:"karamba3d-integration",children:[]},{value:"Overview of the integration with each software",id:"overview-of-the-integration-with-each-software",children:[]}],u={toc:d};function p(e){var t=e.components,l=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,"This section describes how to install HoaryFox."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Download the file from Food4Rhino's ",(0,a.kt)("a",{parentName:"li",href:"https://www.food4rhino.com/app/hoaryfox"},"HoaryFox")," site."),(0,a.kt)("li",{parentName:"ol"},'Right-click on the downloaded zip file, select "Allow" for the security item in the General tab, and unzip it in step 1.'),(0,a.kt)("li",{parentName:"ol"},'start Grasshopper, select File > Special Folders > Components folder, and put the folder named "HoaryFox" in the file downloaded in step 1.'),(0,a.kt)("li",{parentName:"ol"},"restart Rhino")),(0,a.kt)("h2",{id:"karamba3d-integration"},"Karamba3d Integration"),(0,a.kt)("p",null,"If you want to use the Karamba3D integration feature, move Karamba.gha to a folder where you do not have administrative privileges; Karamba3D folders are usually located in Program flies > Rhino > Plug-ins."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"If you do not need the linkage, you can avoid component loading errors by deleting the karambaConnect.gha file in the HoaryFox folder."))),(0,a.kt)("h2",{id:"overview-of-the-integration-with-each-software"},"Overview of the integration with each software"),(0,a.kt)("p",null,"HoaryFox can be linked with Rhinoceros/Grasshopper/Karamba3D, BIM software, and integrated structural calculation via ST-Bridge as shown below."),(0,a.kt)("p",null,"For details, please refer to the introduction page of each component."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(5510).Z})))}p.isMDXComponent=!0},5510:function(e,t,n){"use strict";t.Z=n.p+"assets/images/relation-bb06d3e9f4aa912d1ce513e82cc84b90.png"}}]);