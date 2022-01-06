"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7964],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=o,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3731:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return c},default:function(){return u}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],l={id:"GettingStartSTBCoding",title:"Getting Start"},s=void 0,p={unversionedId:"Coding/GettingStartSTBCoding",id:"Coding/GettingStartSTBCoding",title:"Getting Start",description:"In this section, I will show you how to handle ST-Bridge data by writing code.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/Coding/GettingStart.md",sourceDirName:"Coding",slug:"/Coding/GettingStartSTBCoding",permalink:"/HoaryFox/en/docs/Coding/GettingStartSTBCoding",editUrl:"https://github.com/hrntsm/HoaryFox/edit/develop/website/docs/Coding/GettingStart.md",tags:[],version:"current",frontMatter:{id:"GettingStartSTBCoding",title:"Getting Start"},sidebar:"Sidebar",previous:{title:"Filter",permalink:"/HoaryFox/en/docs/Component/Filter"},next:{title:"Get model data & draw",permalink:"/HoaryFox/en/docs/Coding/GetModelData"}},c=[{value:"Environment",id:"environment",children:[{value:"For IDE",id:"for-ide",children:[],level:3},{value:"For Grasshopper",id:"for-grasshopper",children:[{value:"HoaryFox is installed",id:"hoaryfox-is-installed",children:[],level:4},{value:"HoaryFox is not installed",id:"hoaryfox-is-not-installed",children:[],level:4}],level:3}],level:2},{value:"Load ST-Bridge file",id:"load-st-bridge-file",children:[{value:"Create a console app",id:"create-a-console-app",children:[],level:3},{value:"Get data version",id:"get-data-version",children:[],level:3},{value:"About ST_BRIDGE class",id:"about-st_bridge-class",children:[],level:3},{value:"For Grasshopper",id:"for-grasshopper-1",children:[],level:3}],level:2}],d={toc:c};function u(e){var t=e.components,l=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"In this section, I will show you how to handle ST-Bridge data by writing code.\nBasically, I will show you how to handle ST-Bridge data based on the internal implementation of HoaryFox."),(0,i.kt)("p",null,"The actual implementation of HoaryFox is complicated to handle various cases without errors, but please refer to it to understand the base behavior and customize it yourself if necessary."),(0,i.kt)("p",null,"The details of the HoaryFox implementation can be seen below."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/hrntsm/HoaryFox/tree/main/HoaryFox/RH7/Component"},"hrntsm/HoaryFox"))),(0,i.kt)("h2",{id:"environment"},"Environment"),(0,i.kt)("p",null,"HoaryFox uses STBDotNet, a .NET library, to process ST-Bridge data.\nNET library to process ST-Bridge data. Download it and get ready to handle ST-Bridge from code."),(0,i.kt)("p",null,"STBDotNet is a library that is being developed by OSS.\nIf you are interested in the contents of the code, please check the GitHub page below."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/hrntsm/STBDotNet"},"STBDotNet"))),(0,i.kt)("p",null,"Official documentation site is blow."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://hiron.dev/STBDotNet/docs/index.html"},"Document site"))),(0,i.kt)("h3",{id:"for-ide"},"For IDE"),(0,i.kt)("p",null,"This section will show you how to write code using an Integrated Development Environment (IDE) such as VisualStudio."),(0,i.kt)("p",null,"In VisualStudio, you can use the package manager to browse through nuget.\nStart VisualStudio, go to Tools, NuGet Package Manager and select Manage NuGet packages in Solutions."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7699).Z})),(0,i.kt)("p",null,"Select the Browse tab, search for STBDotNet, and install it in the target project. It is recommended that you use the latest version."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(6016).Z})),(0,i.kt)("h3",{id:"for-grasshopper"},"For Grasshopper"),(0,i.kt)("h4",{id:"hoaryfox-is-installed"},"HoaryFox is installed"),(0,i.kt)("p",null,"If HoaryFox is installed in Grasshopper, use STBDotNet.dll, which is located in the HoaryFox folder referenced by Grasshopper.\nIt is recommended to use HoaryFox version 2.1.1 or later."),(0,i.kt)("p",null,"Place the C# Script component, right click and select Manage Assemblies.... "),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(2955).Z})),(0,i.kt)("p",null,"Open the STBDotNet.dll file in the HoaryFox folder used by Grasshopper from the Add menu at the top center of the screen that pops up, as shown below."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(9476).Z})),(0,i.kt)("h4",{id:"hoaryfox-is-not-installed"},"HoaryFox is not installed"),(0,i.kt)("p",null,"Please download STBDotNet library from Nuget."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.nuget.org/packages/STBDotNet/"},"Nuget/STBDotNet"))),(0,i.kt)("p",null,"Once you have downloaded the .nuget file, change the file extension to .zip and unzip it.\nIn the extracted folder, move STBDotNet.dll in lib/net48/ to the desired location and refer to the same method described in the case of HoaryFox."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"NET running C#, etc. nuget is a package manager.\nIt's called a package manager, and it's a C# version of Food4Rhino."))),(0,i.kt)("h2",{id:"load-st-bridge-file"},"Load ST-Bridge file"),(0,i.kt)("p",null,"The first example is using VisualStudio, but the code is the same when using Grasshopper's C# Script component."),(0,i.kt)("h3",{id:"create-a-console-app"},"Create a console app"),(0,i.kt)("p",null,"After launching VisualStudio, create a console app.\nHere is an example with a project name of ConsoleApp1.\nRewrite program.cs as follows."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"title=program.cs",title:"program.cs"},'using System;\nusing STBDotNet.Serialization;\nusing Version = STBDotNet.Enums.Version;\n\nnamespace ConsoleApp1\n{\n    class Program\n    {\n        static void Main()\n        {\n            const string stbPath = "Set Your STB Path";\n            object model = Serializer.Deserialize(stbPath, Version.Stb202);\n\n            Console.WriteLine(model);\n        }\n    }\n}\n')),(0,i.kt)("p",null,"When you run this, the console will show the following, indicating that the ST-Bridge data of version 2.0.2 has been loaded into ",(0,i.kt)("inlineCode",{parentName:"p"},"model"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"STBDotNet.v202.ST_BRIDGE\n")),(0,i.kt)("p",null,"When reading the file, use ",(0,i.kt)("inlineCode",{parentName:"p"},"STBDotNet.Serialization.Serializer.Deserialize"),".\nThe first argument is the path to the .stb file and the version of the .stb file to read in the second argument.\nThe return value is of type object, but the internal data is for each stb version, so cast it when using it."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"var model = Serializer.Deserialize(stbPath, Version.Stb202) as STBDotNet.v202.ST_BRIDGE;\n")),(0,i.kt)("h3",{id:"get-data-version"},"Get data version"),(0,i.kt)("p",null,"If you do not know the version of ST-Bridge, you can use the following method to get the version."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs"},"Version stbVersion = STBDotNet.Utils.Util.GetStbVersion(stbPath);\n")),(0,i.kt)("p",null,"However, since the ST-Bridge data is text data in xml format, it is faster to check it with any text editor.\nIf you open the data in a text editor, the beginning of the data will look like this, and you can check the version there.",(0,i.kt)("br",{parentName:"p"}),"\n","For example, the beginning of the ST-Bridge data exported by HoaryFox looks like the following, and you can confirm that the version is 2.0.2."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-xml"},'<?xml version="1.0" encoding="utf-8"?>\n<ST_BRIDGE version="2.0.2" xmlns="https://www.building-smart.or.jp/dl">\n  <StbCommon project_name="ExportOptimizedOfficeBuilding2STB.gh" app_name="HoaryFox" />\n')),(0,i.kt)("h3",{id:"about-st_bridge-class"},"About ST_BRIDGE class"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"ST_BRIDGE")," type of v202 has the following data."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"StbAnaModels"),(0,i.kt)("li",{parentName:"ul"},"StbCalData"),(0,i.kt)("li",{parentName:"ul"},"StbCommon"),(0,i.kt)("li",{parentName:"ul"},"StbExtension"),(0,i.kt)("li",{parentName:"ul"},"StbModel"),(0,i.kt)("li",{parentName:"ul"},"version")),(0,i.kt)("p",null,"Document is blow."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://hiron.dev/STBDotNet/docs/STBDotNet.v202.ST_BRIDGE.html"},"STBDotNet.v202.ST_BRIDGE"))),(0,i.kt)("p",null,"Each version of the class has slightly different data, but they all have Model and Common in common.\nIf you use a different version, please refer to the documentation."),(0,i.kt)("p",null,"The structure of this data is based on the ST-Bridge_XML specification document, so you can get a general idea of the structure of the data by looking at the specification document without looking at the STBDotNet documentation."),(0,i.kt)("p",null,"You can download the specification from the ",(0,i.kt)("a",{parentName:"p",href:"https://www.building-smart.or.jp/meeting/buildall/structural-design/"},"Structural Design Subcommittee")," page of BuildingSmart Japan."),(0,i.kt)("p",null,"The following is an excerpt from the ST_BRIDGE section of the version 2.0.2 specification.\nThe attributes and child elements are the properties of the ST_BRIDGE type of STBDotNet shown above.\nThis is a common format for all classes, not just this ST_BRIDGE type."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("img",{src:n(6526).Z}))),(0,i.kt)("p",null,"As an example to understand the structure of the data, we will show you how to get the name of the exported app.\nIf you check the specification, you will see that the app name is in ",(0,i.kt)("inlineCode",{parentName:"p"},"app_name")," of ",(0,i.kt)("inlineCode",{parentName:"p"},"StbCommon"),".\nHere is how to get the value in C# and display it in the console."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"title=Program.cs {12,13,14}",title:"Program.cs","{12,13,14}":!0},'using System;\nusing STBDotNet.Serialization;\nusing Version = STBDotNet.Enums.Version;\n\nnamespace ConsoleApp1\n{\n    class Program\n    {\n        static void Main()\n        {\n            const string stbPath = "Set Your STB Path";\n            var model = Serializer.Deserialize(stbPath, Version.Stb202) as STBDotNet.v202.ST_BRIDGE;\n            string appName = model.StbCommon.app_name;\n            Console.WriteLine(appName);\n        }\n    }\n}\n')),(0,i.kt)("p",null,"When we get the model, we cast it to the type of the target version and get the name of the app.\nYou can see that the way to get the name of the app is similar to the data hierarchy in the specification."),(0,i.kt)("h3",{id:"for-grasshopper-1"},"For Grasshopper"),(0,i.kt)("p",null,"As mentioned in the environment setup section, we can return the name of the app by doing the following while referencing STBDotNet.\nThe TypeHint of the path should be a string."),(0,i.kt)("p",null,(0,i.kt)("img",{src:n(7491).Z})),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-cs",metastring:"title=C#Script_Component",title:"C#Script_Component"},"using STBDotNet.Serialization;\nusing Version = STBDotNet.Enums.Version;\n\npublic class Script_Instance : GH_ScriptInstance\n{\n    private void RunScript(string path, ref object appName)\n    {\n        var model = Serializer.Deserialize(path, Version.Stb202) as STBDotNet.v202.ST_BRIDGE;\n        appName = model.StbCommon.app_name;\n    }\n}\n")),(0,i.kt)("p",null,"In this example, the ST-Bridge data exported by HoaryFox's Karamba3D collaboration function is imported, so the application name HoaryFox is output."))}u.isMDXComponent=!0},7491:function(e,t,n){t.Z=n.p+"assets/images/gh-7be970fb112b8247df1ee61f7fed86f6.png"},6016:function(e,t,n){t.Z=n.p+"assets/images/install_stbdotnet-255d0cb5e9cc93a8c645f58eedcc2fd1.png"},2955:function(e,t,n){t.Z=n.p+"assets/images/manageAssemble-b4e10451b18ae7216eca5c1ec00fe1ba.png"},7699:function(e,t,n){t.Z=n.p+"assets/images/nuget-2c5ac15a7e6a0bc5dfb06be7d0c313c7.png"},9476:function(e,t,n){t.Z=n.p+"assets/images/reference-027bf21e00a0f0c8754bd3d234faea48.png"},6526:function(e,t,n){t.Z=n.p+"assets/images/siyoh-86a5d26056ff3638485707df835ae253.png"}}]);