"use strict";(self.webpackChunkhoaryfox_website=self.webpackChunkhoaryfox_website||[]).push([[8440],{5680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>d});var n=a(6540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),y=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},g=function(e){var t=y(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,g=p(e,["components","mdxType","originalType","parentName"]),s=y(a),u=r,d=s["".concat(i,".").concat(u)]||s[u]||m[u]||l;return a?n.createElement(d,o(o({ref:t},g),{},{components:a})):n.createElement(d,o({ref:t},g))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[s]="string"==typeof e?e:r,o[1]=p;for(var y=2;y<l;y++)o[y]=a[y];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1198:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>y});var n=a(8168),r=(a(6540),a(5680));const l={id:"Geometry",title:"Geometry"},o=void 0,p={unversionedId:"Component/Geometry",id:"Component/Geometry",title:"Geometry",description:"Category of components to be visualized and baked from loaded STB data",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/Component/Geometry.md",sourceDirName:"Component",slug:"/Component/Geometry",permalink:"/HoaryFox/en/docs/Component/Geometry",editUrl:"https://github.com/hrntsm/HoaryFox/edit/develop/website/docs/Component/Geometry.md",tags:[],version:"current",frontMatter:{id:"Geometry",title:"Geometry"},sidebar:"Sidebar",previous:{title:"Filtering & Analyze LCA",permalink:"/HoaryFox/en/docs/Usage/LCAAnalysis"},next:{title:"IO",permalink:"/HoaryFox/en/docs/Component/IO"}},i={},y=[{value:"Stb to Line",id:"stb-to-line",level:2},{value:"Stb to Brep",id:"stb-to-brep",level:2},{value:"Display specification",id:"display-specification",level:3}],g={toc:y},s="wrapper";function m(e){let{components:t,...l}=e;return(0,r.yg)(s,(0,n.A)({},g,l,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("p",null,"Category of components to be visualized and baked from loaded STB data"),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"stb-to-line"},"Stb to Line"),(0,r.yg)("p",null,(0,r.yg)("img",{loading:"lazy",src:a(7549).A,width:"150",height:"184"})),(0,r.yg)("p",null,"Display a part as a Line"),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Input"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Explanation"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Data"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Load STB file Input the Data output of the component")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Bake"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Layers each Line according to its cross-sectional sign and bakes it")))),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Output"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Explanation"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Nodes"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Output the Point3d list of nodes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Columns"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Output list of column lines")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Girders"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Output list of girder lines")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Posts"),(0,r.yg)("td",{parentName:"tr",align:"center"},"output list of post lines")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Beams"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Output list of beam lines")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Braces"),(0,r.yg)("td",{parentName:"tr",align:"center"},"output list of braces lines")))),(0,r.yg)("h2",{id:"stb-to-brep"},"Stb to Brep"),(0,r.yg)("p",null,(0,r.yg)("img",{loading:"lazy",src:a(4552).A,width:"150",height:"197"})),(0,r.yg)("p",null,"Display a component in Brep."),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Input"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Explanation"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Data"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Load STB file Input the Data output of the component")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Bake"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Bake each Brep layered by cross-sectional code")))),(0,r.yg)("table",null,(0,r.yg)("thead",{parentName:"table"},(0,r.yg)("tr",{parentName:"thead"},(0,r.yg)("th",{parentName:"tr",align:null},"Output"),(0,r.yg)("th",{parentName:"tr",align:"center"},"Explanation"))),(0,r.yg)("tbody",{parentName:"table"},(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Columns"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Output list of Brep's representing column shapes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Girders"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Output list of breps for beams")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Posts"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Output list of Brep for columns")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Beams"),(0,r.yg)("td",{parentName:"tr",align:"center"},"Output list of Brep for small beam shapes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Braces"),(0,r.yg)("td",{parentName:"tr",align:"center"},"output list of breps for braces")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Slabs"),(0,r.yg)("td",{parentName:"tr",align:"center"},"output list of Brep for slab shapes")),(0,r.yg)("tr",{parentName:"tbody"},(0,r.yg)("td",{parentName:"tr",align:null},"Walls"),(0,r.yg)("td",{parentName:"tr",align:"center"},"output a list of Brep for wall shapes")))),(0,r.yg)("h3",{id:"display-specification"},"Display specification"),(0,r.yg)("ul",null,(0,r.yg)("li",{parentName:"ul"},"Walls should include openings."),(0,r.yg)("li",{parentName:"ul"},"Slabs may not output properly if they are concave")))}m.isMDXComponent=!0},4552:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/StbToBrep-066fbc05516654f5b3853bc4a2b010ce.png"},7549:(e,t,a)=>{a.d(t,{A:()=>n});const n=a.p+"assets/images/StbToLine-ebbeaafca626dd9fec3c53e8adc5376f.png"}}]);