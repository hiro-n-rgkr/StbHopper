"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[121],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return u}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),p=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),s=p(a),u=r,k=s["".concat(m,".").concat(u)]||s[u]||c[u]||i;return a?n.createElement(k,l(l({ref:t},d),{},{components:a})):n.createElement(k,l({ref:t},d))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=s;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},1419:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return m},metadata:function(){return p},toc:function(){return d},default:function(){return s}});var n=a(7462),r=a(3366),i=(a(7294),a(3905)),l=["components"],o={id:"ExportSTB",title:"Export ST-Bridge file"},m=void 0,p={unversionedId:"Usage/ExportSTB",id:"Usage/ExportSTB",isDocsHomePage:!1,title:"Export ST-Bridge file",description:"Karamba3D \u306e\u30c7\u30fc\u30bf\u304b\u3089 ST-Bridge \u306e\u30c7\u30fc\u30bf\u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002\u3053\u3061\u3089\u306e\u5185\u5bb9\u306f Samples \u30d5\u30a9\u30eb\u30c0\u30fc\u306e ExportSTB.gh \u306e\u30e2\u30c7\u30eb\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002",source:"@site/docs/Usage/ExportSTB.md",sourceDirName:"Usage",slug:"/Usage/ExportSTB",permalink:"/HoaryFox/docs/Usage/ExportSTB",editUrl:"https://github.com/hrntsm/HoaryFox/edit/develop/website/docs/Usage/ExportSTB.md",version:"current",frontMatter:{id:"ExportSTB",title:"Export ST-Bridge file"},sidebar:"someSidebar",previous:{title:"Convert to Karamba3D",permalink:"/HoaryFox/docs/Usage/ConvertToKaramba"},next:{title:"Bake Geometry",permalink:"/HoaryFox/docs/Usage/BakeGeometry"}},d=[{value:"Karamba3D \u30e2\u30c7\u30eb\u306e\u5909\u63db",id:"karamba3d-\u30e2\u30c7\u30eb\u306e\u5909\u63db",children:[]},{value:"\u8ef8\u60c5\u5831\u306e\u4f5c\u6210",id:"\u8ef8\u60c5\u5831\u306e\u4f5c\u6210",children:[]},{value:"\u968e\u60c5\u5831\u306e\u4f5c\u6210",id:"\u968e\u60c5\u5831\u306e\u4f5c\u6210",children:[]},{value:"\u30c7\u30fc\u30bf\u306e\u51fa\u529b",id:"\u30c7\u30fc\u30bf\u306e\u51fa\u529b",children:[]},{value:"\u5909\u63db\u306e\u4ed5\u69d8",id:"\u5909\u63db\u306e\u4ed5\u69d8",children:[{value:"\u5bfe\u8c61",id:"\u5bfe\u8c61",children:[]},{value:"\u90e8\u6750\u306e\u5224\u5225",id:"\u90e8\u6750\u306e\u5224\u5225",children:[]},{value:"\u6750\u8cea\u306e\u5224\u5225",id:"\u6750\u8cea\u306e\u5224\u5225",children:[]},{value:"\u90e8\u6750\u540d\u79f0",id:"\u90e8\u6750\u540d\u79f0",children:[]},{value:"\u65ad\u9762\u540d\u79f0",id:"\u65ad\u9762\u540d\u79f0",children:[]},{value:"\u65ad\u9762\u5f62\u72b6",id:"\u65ad\u9762\u5f62\u72b6",children:[]}]}],c={toc:d};function s(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Karamba3D \u306e\u30c7\u30fc\u30bf\u304b\u3089 ST-Bridge \u306e\u30c7\u30fc\u30bf\u3092\u4f5c\u6210\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059\u3002\u3053\u3061\u3089\u306e\u5185\u5bb9\u306f Samples \u30d5\u30a9\u30eb\u30c0\u30fc\u306e ExportSTB.gh \u306e\u30e2\u30c7\u30eb\u3092\u53c2\u7167\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","ST-Bridge \u306e version 1.4 \u306e\u5f62\u5f0f\u3067\u51fa\u529b\u3092\u884c\u3044\u307e\u3059\u3002"),(0,i.kt)("h2",{id:"karamba3d-\u30e2\u30c7\u30eb\u306e\u5909\u63db"},"Karamba3D \u30e2\u30c7\u30eb\u306e\u5909\u63db"),(0,i.kt)("p",null,"Karamba3D \u3067\u4f5c\u6210\u3057\u305f\u30e2\u30c7\u30eb\u304b\u3089\u4ee5\u4e0b\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u7bc0\u70b9\uff08StbNodes\uff09"),(0,i.kt)("li",{parentName:"ul"},"\u90e8\u6750\u60c5\u5831\uff08StbMembers\uff09"),(0,i.kt)("li",{parentName:"ul"},"\u65ad\u9762\u60c5\u5831\uff08StbSections\uff09")),(0,i.kt)("p",null,"\u4ee5\u4e0b\u306e\u3088\u3046\u306b Karamba3D \u306e AssmebleModel \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306a\u3069\u304b\u3089\u51fa\u529b\u3055\u308c\u308b Model \u306e\u30c7\u30fc\u30bf\u3092 FrameBuilder by angle \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3068 NodeBuilder \u306b\u5165\u529b\u3059\u308b\u3053\u3068\u3067\u30c7\u30fc\u30bf\u3092\u5909\u63db\u3057\u307e\u3059\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u5909\u63db\u3055\u308c\u305f\u90e8\u6750\u304c\u3001\u67f1\u30fb\u6881\u30fb\u30d6\u30ec\u30fc\u30b9\u306e\u3069\u308c\u306b\u5909\u63db\u3055\u308c\u305f\u304b\u304c\u30c6\u30ad\u30b9\u30c8\u3067 Rhino \u306e\u30d3\u30e5\u30fc\u30dd\u30fc\u30c8\u306b\u8868\u793a\u3055\u308c\u307e\u3059\u3002\u67f1\u3068\u6881\u306f\u90e8\u6750\u306e\u89d2\u5ea6\u3067\u5206\u985e\u3057\u3066\u3044\u308b\u305f\u3081\u3001\u60f3\u5b9a\u306e\u533a\u5206\u3067\u306a\u304b\u3063\u305f\u5834\u5408\u306f Angle \u306e\u5165\u529b\u306b\u9069\u5207\u306a\u89d2\u5ea6\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(5528).Z})),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Karamba3D \u304b\u3089\u306e\u51fa\u529b\u306b\u969b\u3057\u3066\u3001\u30e2\u30c7\u30eb\u5316\u306e\u6ce8\u610f\u70b9\u306b\u3064\u3044\u3066\u306f\u3053\u306e\u30da\u30fc\u30b8\u306e\u4e0b\u90e8\u306e\u5909\u63db\u4ed5\u69d8\u3092\u78ba\u8a8d\u3057\u3066\u304f\u3060\u3055\u3044"))),(0,i.kt)("h2",{id:"\u8ef8\u60c5\u5831\u306e\u4f5c\u6210"},"\u8ef8\u60c5\u5831\u306e\u4f5c\u6210"),(0,i.kt)("p",null,"AxisBuilder \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u8ef8\uff08StbAxes\uff09\u306e\u30c7\u30fc\u30bf\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u57fa\u672c\u7684\u306a\u6319\u52d5\u306e\u8003\u3048\u3068\u3057\u3066\u306f\u3001Distance \u3067\u6307\u5b9a\u3057\u305f\u8ef8\u304b\u3089 Range \u306e\u5e45\uff08Dist \xb1 Range\uff09\u306b\u3042\u308b\u7bc0\u70b9\u3092\u8ef8\u306b\u5c5e\u3059\u308b\u7bc0\u70b9\u3068\u3057\u3066\u51e6\u7406\u3057\u307e\u3059\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u51fa\u529b\u3092\u898b\u308b\u3053\u3068\u3067\u3001\u8ef8\u306e\u65b9\u5411\u3001\u539f\u70b9\u304b\u3089\u306e\u8ddd\u96e2\u3001\u6240\u5c5e\u7bc0\u70b9\u6570\u306e\u78ba\u8a8d\u3092\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("p",null,"\u5165\u529b\u306e\u4ed5\u69d8\u306f\u4ee5\u4e0b\u3067\u3059\u3002\u308f\u304b\u308a\u3065\u3089\u3044\u306e\u3067\u4eca\u5f8c\u6539\u826f\u4e88\u5b9a\u3067\u3059\u3002\u30ea\u30b9\u30c8\u3067\u5165\u529b\u3057\u3001\u540c\u4e00\u306e\u30a4\u30f3\u30c7\u30c3\u30af\u30b9\u3067\u306e\u5165\u529b\u3092\u30de\u30c3\u30c1\u3055\u305b\u3066\u5909\u63db\u3057\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Node: \u7bc0\u70b9\u60c5\u5831\u3067\u3059\u3002NodeBuilder \u306e\u51fa\u529b\u306e Node \u3092\u5165\u308c\u3066\u304f\u3060\u3055\u3044"),(0,i.kt)("li",{parentName:"ul"},"Distance: \u539f\u70b9\u304b\u3089\u306e\u8ef8\u306e\u8ddd\u96e2\u3092\u6307\u5b9a\u3057\u3066\u304f\u3060\u3055\u3044\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u8ef8\u306e\u65b9\u5411\u306f\u5168\u4f53\u5ea7\u6a19\u7cfb\u3067\u306e X \u8ef8\u307e\u305f\u306f Y \u8ef8\u306b\u5e73\u884c\u306b\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u3057\u305f Distance \u304c X \u65b9\u5411\u304b Y \u65b9\u5411\u304b\u306b\u3064\u3044\u3066\u306f Direction \u306e\u5165\u529b\u3067\u6307\u5b9a\u3057\u307e\u3059"))),(0,i.kt)("li",{parentName:"ul"},"Range: Distance \u3067\u8a2d\u5b9a\u3057\u305f\u8ef8\u306b\u5bfe\u3057\u3066\u7bc0\u70b9\u3092\u6240\u5c5e\u3055\u305b\u308b\u5e45\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u7bc0\u70b9\u5ea7\u6a19\u3092\u6d6e\u52d5\u5c0f\u6570\u70b9\u3067\u6301\u3063\u3066\u3044\u308b\u95a2\u4fc2\u4e0a\u3001\u305f\u3068\u3048\u5168\u3066\u306e\u7bc0\u70b9\u304c\u8ef8\u4e0a\u306e\u3042\u308b\u5834\u5408\u3067\u3082 0 \u3088\u308a\u3082\u5927\u304d\u306a\u5024\u3092\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u3092\u63a8\u5968\u3057\u307e\u3059\u3002"))),(0,i.kt)("li",{parentName:"ul"},"Name: \u8ef8\u306e\u540d\u524d\u306b\u306a\u308a\u307e\u3059\u3002"),(0,i.kt)("li",{parentName:"ul"},"Direction: \u8ef8\u306e\u65b9\u5411\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"0 \u306f X \u65b9\u5411\u30011 \u306f Y \u65b9\u5411\u306e\u8ef8\u3068\u3057\u3066\u51e6\u7406\u3057\u307e\u3059\u3002")))),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(7100).Z})),(0,i.kt)("h2",{id:"\u968e\u60c5\u5831\u306e\u4f5c\u6210"},"\u968e\u60c5\u5831\u306e\u4f5c\u6210"),(0,i.kt)("p",null,"StoryBuilder \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3067\u968e\uff08StbStories\uff09\u306e\u30c7\u30fc\u30bf\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u57fa\u672c\u7684\u306a\u6319\u52d5\u306f AxisBuilder \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u3068\u540c\u69d8\u3067\u3059\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e\u51fa\u529b\u3092\u898b\u308b\u3053\u3068\u3067\u3001\u968e\u540d\u3001\u968e\u9ad8\u3001\u6240\u5c5e\u7bc0\u70b9\u6570\u306e\u78ba\u8a8d\u3092\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Node: \u7bc0\u70b9\u60c5\u5831\u3067\u3059\u3002NodeBuilder \u306e\u51fa\u529b\u306e Node \u3092\u5165\u308c\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("li",{parentName:"ul"},"Height: \u968e\u9ad8\u306e\u60c5\u5831\u3067\u3059\u3002\u539f\u70b9\u304b\u3089\u306e\u9ad8\u3055\u3092\u5165\u529b\u3057\u3066\u304f\u3060\u3055\u3044\u3002"),(0,i.kt)("li",{parentName:"ul"},"Range: Height \u3067\u6307\u5b9a\u3057\u305f\u968e\u306b\u5bfe\u3057\u3066\u7bc0\u70b9\u3092\u6240\u5c5e\u3055\u305b\u308b\u5e45\u3092\u6307\u5b9a\u3057\u307e\u3059\u3002"),(0,i.kt)("li",{parentName:"ul"},"Name: \u968e\u306e\u540d\u524d\u306b\u306a\u308a\u307e\u3059\u3002")),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(1826).Z})),(0,i.kt)("h2",{id:"\u30c7\u30fc\u30bf\u306e\u51fa\u529b"},"\u30c7\u30fc\u30bf\u306e\u51fa\u529b"),(0,i.kt)("p",null,"\u4e0a\u8a18\u306e3\u3064\u3067\u5909\u63db\u3057\u305f\u30c7\u30fc\u30bf\u3092\u5168\u3066 Export STB file \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u5165\u529b\u3059\u308b\u3053\u3068\u3067\u30c7\u30fc\u30bf\u3092\u307e\u3068\u3081\u30661\u3064\u306e ST-Bridge \u30d5\u30a1\u30a4\u30eb\u3092\u4f5c\u6210\u3057\u307e\u3059\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","Path \u3067\u6307\u5b9a\u3057\u305f\u30d1\u30b9\u306b STB \u30d5\u30a1\u30a4\u30eb\u3092\u51fa\u529b\u3057\u307e\u3059\u3002\u6307\u5b9a\u3057\u306a\u3044\u5834\u5408\u3001\u30c7\u30b9\u30af\u30c8\u30c3\u30d7\u306b model.stb \u3068\u3044\u3046\u30d5\u30a1\u30a4\u30eb\u3067\u51fa\u529b\u3055\u308c\u307e\u3059\u3002",(0,i.kt)("br",{parentName:"p"}),"\n","Out? \u306e\u5024\u3092 True \u306b\u3059\u308b\u3068\u30d5\u30a1\u30a4\u30eb\u304c\u51fa\u529b\u3055\u308c\u307e\u3059\u3002\u51fa\u529b\u3092\u78ba\u8a8d\u3059\u308b\u3053\u3068\u3067\u30c7\u30fc\u30bf\u306e\u5909\u63db\u72b6\u6cc1\u306e\u6982\u7565\u3092\u78ba\u8a8d\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(4793).Z})),(0,i.kt)("hr",null),(0,i.kt)("h2",{id:"\u5909\u63db\u306e\u4ed5\u69d8"},"\u5909\u63db\u306e\u4ed5\u69d8"),(0,i.kt)("p",null,"\u4ee5\u4e0b\u306e\u4ed5\u69d8\u306b\u3088\u308a ST-Brige \u30c7\u30fc\u30bf\u306e\u4f5c\u6210\u3092\u884c\u3044\u307e\u3059\u3002"),(0,i.kt)("h3",{id:"\u5bfe\u8c61"},"\u5bfe\u8c61"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"ST-Bridge version 1.4 \u306e\u5f62\u5f0f\u3067\u51fa\u529b\u3057\u307e\u3059\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u67f1\u3001\u6881\u3001\u30d6\u30ec\u30fc\u30b9\u3092\u5909\u63db\u3057\u3001\u5e8a\u58c1\u306e\u3088\u3046\u306a\u9762\u6750\u306f\u5909\u63db\u3057\u307e\u305b\u3093")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"ST-Bridge version 2 \u306e\u5f62\u5f0f\u3067\u306e\u51fa\u529b\u306b\u306f\u4eca\u5f8c\u5bfe\u5fdc\u4e88\u5b9a\u3067\u3059\u3002"))),(0,i.kt)("h3",{id:"\u90e8\u6750\u306e\u5224\u5225"},"\u90e8\u6750\u306e\u5224\u5225"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Karamba3D \u306e\u30e2\u30c7\u30eb\u3067\u306f\u3001\u67f1\u6881\u30d6\u30ec\u30fc\u30b9\u306e\u533a\u5225\u304c\u306a\u3044\u305f\u3081\u4ee5\u4e0b\u306e\u4ed5\u69d8\u3067\u5224\u5b9a\u3057\u3066\u3044\u307e\u3059",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Karamba3D \u3067\u30c8\u30e9\u30b9\u8981\u7d20\u3068\u3057\u3066\u6271\u3063\u3066\u3044\u308b\u3082\u306e\u306f\u30d6\u30ec\u30fc\u30b9\u3068\u3057\u3066\u5909\u63db"),(0,i.kt)("li",{parentName:"ul"},"\u5168\u4f53\u5ea7\u6a19\u7cfb\u306e Z \u8ef8\u306b\u5bfe\u3057\u3066\u306e FrameBuilder \u306e Angle \u306b\u5165\u529b\u3055\u308c\u305f\u90e8\u6750\u306e\u89d2\u5ea6\u672a\u6e80\u3067\u3042\u308b\u90e8\u6750\u306f\u67f1\u3001\u305d\u308c\u4ee5\u4e0a\u306e\u5834\u5408\u306f\u6881\u3068\u3057\u3066\u5909\u63db"))),(0,i.kt)("li",{parentName:"ul"},"\u90e8\u6750\u306e\u5224\u5225\u306f ST-Bridge \u306b\u304a\u3051\u308b StbMember \u5185\u3067\u306e\u5404\u8868\u73fe\u306b\u5bfe\u5fdc\u3057\u307e\u3059\uff08\u4f8b\u3048\u3070 StbColumn \u306a\u3069\uff09"),(0,i.kt)("li",{parentName:"ul"},"STB \u306e\u6881\u90e8\u6750\u306b\u306f\u3001\u90e8\u6750\u304c\u57fa\u790e\u90e8\u6750\u304b\u306e\u30d5\u30e9\u30b0\uff08isFoundation\uff09\u304c\u3042\u308b\u304c\u5168\u3066 False \u3067\u51fa\u529b\u3057\u307e\u3059")),(0,i.kt)("h3",{id:"\u6750\u8cea\u306e\u5224\u5225"},"\u6750\u8cea\u306e\u5224\u5225"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},'Karamba3D \u306e \u6750\u6599\u3092\u4f5c\u6210\u3059\u308b\u969b\u306b\u8a2d\u5b9a\u3059\u308b Family \u306e\u540d\u524d\u304c "Steel" \u306e\u5834\u5408\u306f S \u90e8\u6750\u3001"Concrete" \u306e\u5834\u5408\u306f RC \u90e8\u6750\u3068\u3057\u307e\u3059'),(0,i.kt)("li",{parentName:"ul"},"\u6750\u8cea\u306e\u5224\u5225\u306f ST-Bridge \u306b\u304a\u3051\u308b StbSections \u5185\u3067\u306e\u5404\u8868\u73fe\u306b\u5bfe\u5fdc\u3057\u307e\u3059\uff08\u4f8b\u3048\u3070 StbSecColumn_RC \u306a\u3069\uff09")),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u6750\u6599\u306e Family \u540d\u304c\u4e0a\u8a18\u4ee5\u5916\u306e\u5834\u5408\u30a8\u30e9\u30fc\u306b\u306a\u308a\u307e\u3059"))),(0,i.kt)("h3",{id:"\u90e8\u6750\u540d\u79f0"},"\u90e8\u6750\u540d\u79f0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Karamba3D \u5185\u3067\u306e\u540d\u79f0\u306f\u4f7f\u7528\u3057\u307e\u305b\u3093"),(0,i.kt)("li",{parentName:"ul"},"Karamba3D \u304c\u5185\u90e8\u7684\u306b\u6301\u3063\u3066\u3044\u308b\u90e8\u6750\u306e\u9806\u756a\u3067\u3001\u67f1\u306a\u3089\u3070 C\u3001\u6881\u306a\u3089\u3070 G\u3001\u30d6\u30ec\u30fc\u30b9\u306a\u3089\u3070 V \u3068\u6570\u5b57\u306e\u7d44\u307f\u5408\u308f\u305b\u3067\u540d\u79f0\u3092\u4ed8\u3051\u307e\u3059\u3002\uff08C1, G1 \u306a\u3069\uff09")),(0,i.kt)("h3",{id:"\u65ad\u9762\u540d\u79f0"},"\u65ad\u9762\u540d\u79f0"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Karamba3D \u306e Cross Section \u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306e Name \u3067\u8a2d\u5b9a\u3057\u305f\u540d\u79f0\u3067\u65ad\u9762\u3092\u4f5c\u6210\u3057\u307e\u3059")),(0,i.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Name \u306e\u8a2d\u5b9a\u3054\u3068\u306b STB \u30d5\u30a1\u30a4\u30eb\u306b\u51fa\u529b\u3057\u3066\u3044\u308b\u305f\u3081\u3001\u5fc5\u305a Name \u3092\u8a2d\u5b9a\u3059\u308b\u3088\u3046\u306b\u3057\u3066\u304f\u3060\u3055\u3044",(0,i.kt)("br",{parentName:"p"}),"\n","Name \u304c\u91cd\u8907\u3057\u3066\u3044\u308b\u5834\u5408\u3001HoaryFox \u306e\u30b3\u30f3\u30d0\u30fc\u30bf\u30fc\u3067\u306f\u540c\u4e00\u65ad\u9762\u3068\u3057\u3066\u51e6\u7406\u3059\u308b\u305f\u3081\u30011\u3064\u306e\u65ad\u9762\u3057\u304b\u51fa\u529b\u3055\u308c\u307e\u305b\u3093\u3002"))),(0,i.kt)("h3",{id:"\u65ad\u9762\u5f62\u72b6"},"\u65ad\u9762\u5f62\u72b6"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Karamba3D \u3067\u8a2d\u5b9a\u3057\u305f\u65ad\u9762\u306e\u5f62\u72b6\u306b\u5408\u308f\u305b\u3066STB\u306b\u51fa\u529b\u3057\u307e\u3059"),(0,i.kt)("li",{parentName:"ul"},"\u5909\u63db\u306b\u30a8\u30e9\u30fc\u304c\u3042\u308b\u6642\u306f\u300110mm\u306e\u89d2\u6750\u3068\u3057\u3066\u51fa\u529b\u3057\u307e\u3059"),(0,i.kt)("li",{parentName:"ul"},"RC \u65ad\u9762\u306f Karamba3D \u3067\u306f\u914d\u7b4b\u60c5\u5831\u3092\u6301\u305f\u306a\u3044\u305f\u3081\u4ee5\u4e0b\u3067\u51fa\u529b\u3057\u307e\u3059",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4e3b\u7b4b: \u6881\u306a\u3089\u3070 \u4e0a\u7aef\u3082\u4e0b\u7aef\u3082 3-D22\u3001\u67f1\u306a\u3089\u3070 8-D22"),(0,i.kt)("li",{parentName:"ul"},"\u305b\u3093\u65ad\u88dc\u5f37\u7b4b: 2-D10@100"))),(0,i.kt)("li",{parentName:"ul"},"S \u65ad\u9762\u306e\u5834\u5408\u3001\u6750\u8cea\u306f \u30d5\u30e9\u30f3\u30b8\u3001\u30a6\u30a7\u30d6\u3068\u3082\u306b SN400 \u3068\u3057\u3066\u51fa\u529b\u3057\u307e\u3059")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u975e\u5bfe\u5fdc\u6a5f\u80fd\u3082\u8981\u671b\u304c\u3042\u308c\u3070\u9069\u5b9c\u5bfe\u5fdc\u3057\u307e\u3059\u306e\u3067\u3001Contact \u3088\u308a\u3054\u9023\u7d61\u304f\u3060\u3055\u3044\u3002"))))}s.isMDXComponent=!0},7100:function(e,t,a){t.Z=a.p+"assets/images/AxisBuilder-029863f8992e1179e1a957654ac72cba.png"},4793:function(e,t,a){t.Z=a.p+"assets/images/ExportStbfile-cffbd25b03fcaccc2cbbafdebed5f643.png"},5528:function(e,t,a){t.Z=a.p+"assets/images/FrameBuilder-1061b496adb0fcdf1f1dcddbcebaf119.png"},1826:function(e,t,a){t.Z=a.p+"assets/images/StoryBuilder-9770c78060c1bb559a9fd049ac234f74.png"}}]);