(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[74],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return m},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,h=p["".concat(l,".").concat(d)]||p[d]||u[d]||o;return a?n.createElement(h,i(i({ref:t},m),{},{components:a})):n.createElement(h,i({ref:t},m))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1615:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return m},default:function(){return p}});var n=a(2122),r=a(9756),o=(a(7294),a(3905)),i=["components"],s={id:"ConvertToKaramba",title:"Convert to Karamba3D"},l=void 0,c={unversionedId:"Usage/ConvertToKaramba",id:"Usage/ConvertToKaramba",isDocsHomePage:!1,title:"Convert to Karamba3D",description:"This section explains how to create a Karamba3D model using the STB data. Please refer to the ConverttoKaramba.gh model in the Samples folder for the content here.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/Usage/ConvertToKaramba.md",sourceDirName:"Usage",slug:"/Usage/ConvertToKaramba",permalink:"/HoaryFox/en/docs/Usage/ConvertToKaramba",editUrl:"https://github.com/hrntsm/HoaryFox/edit/develop/website/docs/Usage/ConvertToKaramba.md",version:"current",frontMatter:{id:"ConvertToKaramba",title:"Convert to Karamba3D"},sidebar:"someSidebar",previous:{title:"Show ST-Bridge model",permalink:"/HoaryFox/en/docs/Usage/ShowSTBModel"},next:{title:"Export ST-Bridge file",permalink:"/HoaryFox/en/docs/Usage/ExportSTB"}},m=[{value:"Data Conversion",id:"data-conversion",children:[]},{value:"Conversion specifications",id:"conversion-specifications",children:[{value:"Conversion target",id:"conversion-target",children:[]},{value:"Element name",id:"element-name",children:[]},{value:"Cross-sectional shape",id:"cross-sectional-shape",children:[]},{value:"Material",id:"material",children:[]}]}],u={toc:m};function p(e){var t=e.components,s=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This section explains how to create a Karamba3D model using the STB data. Please refer to the Convert_to_Karamba.gh model in the Samples folder for the content here."),(0,o.kt)("h2",{id:"data-conversion"},"Data Conversion"),(0,o.kt)("p",null,"Make sure that Grasshopper can read the STB data as described in Show ST-Bridge model.\nThe data will be converted by entering the imported results into the Convert to Karamba component as shown below."),(0,o.kt)("p",null,"The elements and sections will be converted. The converted data can be used as input for Karamba3d's Assemble Model (Karamba3D) component, so you only need to set the Load and Support settings to run the analysis in Karamba3d.\nThe material information is included in the CrossSection output, so there is no need to set it separately."),(0,o.kt)("p",null,'The family name of the cross section can be set arbitrarily by the SetFamilyName component for each shape as shown below. If not set, the family name will start with "HF-", such as "HF-Box".'),(0,o.kt)("p",null,(0,o.kt)("img",{src:a(2135).Z})),(0,o.kt)("h2",{id:"conversion-specifications"},"Conversion specifications"),(0,o.kt)("p",null,"The following specifications are used to convert the data from STB to Karamba3D."),(0,o.kt)("h3",{id:"conversion-target"},"Conversion target"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Convert columns, beams and braces, but not face materials such as floor walls")),(0,o.kt)("h3",{id:"element-name"},"Element name"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'For simplicity, the IDs in STB are converted as names. (e.g. "Id15").'),(0,o.kt)("li",{parentName:"ul"},"Therefore, the member code will be lost.")),(0,o.kt)("h3",{id:"cross-sectional-shape"},"Cross-sectional shape"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Even if a member has multiple cross sections or tapers, it will be converted as a member with only the center section."),(0,o.kt)("li",{parentName:"ul"},"RC Column",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Rectangular cross section: Convert as Trapezoid"),(0,o.kt)("li",{parentName:"ul"},"Circular cross section: Since there is no circular solid cross section in Karamba3D, convert to match the axial cross section in 0-Section."))),(0,o.kt)("li",{parentName:"ul"},"RC Beams",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"All converted as Trapezoid"))),(0,o.kt)("li",{parentName:"ul"},"S section",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"H-section: Converted as I-Section"),(0,o.kt)("li",{parentName:"ul"},"T-section: Converted as I-Section"),(0,o.kt)("li",{parentName:"ul"},"Flat bars: Converted as Trapezoid"),(0,o.kt)("li",{parentName:"ul"},"Box section: Converted as []-Section"),(0,o.kt)("li",{parentName:"ul"},"L-section, C-section, round steel: Converted as square Trapezoid to match the axial cross-sectional area, since Karamba3D does not support these cross-sections and they are basically used as braces.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Since back-to-back and double bracing are not supported, the cross section will be converted as a single section even if it is set as such in STB.")))))),(0,o.kt)("h3",{id:"material"},"Material"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"RC",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"StbSecColumn_RC and StbSecBeam_RC are converted as RC."),(0,o.kt)("li",{parentName:"ul"},"The material can be specified in STB, but it is a string of material names and not necessarily in a specific format, so it is assumed that all materials have FC21 equivalent material properties.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Young's modulus: 21860 N/mm2"),(0,o.kt)("li",{parentName:"ul"},"Poisson's ratio: 0.2"),(0,o.kt)("li",{parentName:"ul"},"Density: 24 kN/m3"),(0,o.kt)("li",{parentName:"ul"},"Karamba3d fy: 14 N/mm2"))))),(0,o.kt)("li",{parentName:"ul"},"S",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"For cross sections other than the above, steel material is given."),(0,o.kt)("li",{parentName:"ul"},"For the same reason as the material specification for RC, all of them are assumed to have material properties equivalent to SN400.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Young's modulus: 205000 N/mm2"),(0,o.kt)("li",{parentName:"ul"},"Poisson's ratio: 0.3"),(0,o.kt)("li",{parentName:"ul"},"Density: 78.5 kN/m3"),(0,o.kt)("li",{parentName:"ul"},"Karamba3d fy: 235 N/mm2")))))),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you have any requests for unsupported functions, please contact us."))))}p.isMDXComponent=!0},2135:function(e,t,a){"use strict";t.Z=a.p+"assets/images/gh-b29c7ee3b0cbb69117cf7947599382f9.png"}}]);