(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[650],{3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),u=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),s=u(n),d=a,k=s["".concat(i,".").concat(d)]||s[d]||m[d]||o;return n?r.createElement(k,l(l({ref:e},c),{},{components:n})):r.createElement(k,l({ref:e},c))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=s;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:a,l[1]=p;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},3058:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return p},metadata:function(){return i},toc:function(){return u},default:function(){return m}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),l=["components"],p={id:"Geometry",title:"Geometry"},i={unversionedId:"Component/Geometry",id:"Component/Geometry",isDocsHomePage:!1,title:"Geometry",description:"Category of components to be visualized and baked from loaded STB data",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/Component/Geometry.md",sourceDirName:"Component",slug:"/Component/Geometry",permalink:"/HoaryFox/en/docs/Component/Geometry",editUrl:"https://github.com/hrntsm/HoaryFox/edit/develop/website/docs/Component/Geometry.md",version:"current",frontMatter:{id:"Geometry",title:"Geometry"},sidebar:"someSidebar",next:{title:"IO",permalink:"/HoaryFox/en/docs/Component/IO"}},u=[{value:"Stb to Line",id:"stb-to-line",children:[]},{value:"Stb to Brep",id:"stb-to-brep",children:[{value:"Display specification",id:"display-specification",children:[]}]}],c={toc:u};function m(t){var e=t.components,p=(0,a.Z)(t,l);return(0,o.kt)("wrapper",(0,r.Z)({},c,p,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Category of components to be visualized and baked from loaded STB data"),(0,o.kt)("hr",null),(0,o.kt)("h2",{id:"stb-to-line"},"Stb to Line"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(6566).Z})),(0,o.kt)("p",null,"Display a part as a Line"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Input"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Explanation"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Data"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Load STB file Input the Data output of the component")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Bake"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Layers each Line according to its cross-sectional sign and bakes it")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Output"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Explanation"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Nodes"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Output the Point3d list of nodes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Columns"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Output list of column lines")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Posts"),(0,o.kt)("td",{parentName:"tr",align:"center"},"output list of intercolumn lines")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Beams"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Output list of small beam lines")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Braces"),(0,o.kt)("td",{parentName:"tr",align:"center"},"output list of braces lines")))),(0,o.kt)("h2",{id:"stb-to-brep"},"Stb to Brep"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(8052).Z})),(0,o.kt)("p",null,"Display a component in Brep."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Input"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Explanation"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Data"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Load STB file Input the Data output of the component")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Bake"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Bake each Brep layered by cross-sectional code")))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Output"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Explanation"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Columns"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Output list of Brep's representing column shapes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Girders"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Output list of breps for beams")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Posts"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Output list of Brep for columns")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Beams"),(0,o.kt)("td",{parentName:"tr",align:"center"},"Output list of Brep for small beam shapes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Braces"),(0,o.kt)("td",{parentName:"tr",align:"center"},"output list of breps for braces")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Slabs"),(0,o.kt)("td",{parentName:"tr",align:"center"},"output list of Brep for slab shapes")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Walls"),(0,o.kt)("td",{parentName:"tr",align:"center"},"output a list of Brep for wall shapes")))),(0,o.kt)("h3",{id:"display-specification"},"Display specification"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Walls should include openings."),(0,o.kt)("li",{parentName:"ul"},"Slabs may not output properly if they are concave")))}m.isMDXComponent=!0},8052:function(t,e,n){"use strict";e.Z=n.p+"assets/images/StbToBrep-066fbc05516654f5b3853bc4a2b010ce.png"},6566:function(t,e,n){"use strict";e.Z=n.p+"assets/images/StbToLine-ebbeaafca626dd9fec3c53e8adc5376f.png"}}]);