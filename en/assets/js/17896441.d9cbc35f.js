"use strict";(self.webpackChunkhoaryfox_website=self.webpackChunkhoaryfox_website||[]).push([[7918],{2179:(e,t,a)=>{a.r(t),a.d(t,{default:()=>R});var n=a(7294),l=a(6010),s=a(7462),i=a(5999),r=a(1750);function o(e){const{previous:t,next:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,i.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(r.Z,(0,s.Z)({},t,{subLabel:n.createElement(i.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")}))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.createElement(r.Z,(0,s.Z)({},a,{subLabel:n.createElement(i.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")}))))}var c=a(2263),d=a(9960),m=a(5551),u=a(650);const b={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(i.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(i.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){const t=b[e.versionMetadata.banner];return n.createElement(t,e)}function h(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(i.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(d.Z,{to:a,onClick:l},n.createElement(i.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function g(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:s}}=(0,c.Z)(),{pluginId:i}=(0,m.gA)({failfast:!0}),{savePreferredVersionName:r}=(0,u.J)(i),{latestDocSuggestion:o,latestVersionSuggestion:d}=(0,m.Jo)(i),b=o??(g=d).docs.find((e=>e.id===g.mainDocId));var g;return n.createElement("div",{className:(0,l.Z)(t,u.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:s,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(h,{versionLabel:d.label,to:b.path,onClick:()=>r(d.name)})))}function p(e){let{className:t}=e;const a=(0,u.E6)();return a.banner?n.createElement(g,{className:t,versionMetadata:a}):null}function E(e){let{className:t}=e;const a=(0,u.E6)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,u.kM.docs.docVersionBadge,"badge badge--secondary")},n.createElement(i.Z,{id:"theme.docs.versionBadge.label",values:{versionLabel:a.label}},"Version: {versionLabel}")):null}var f=a(1217);function N(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(i.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function _(e){let{lastUpdatedBy:t}=e;return n.createElement(i.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function k(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:u.kM.common.lastUpdated},n.createElement(i.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(N,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(_,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var Z=a(6753),C=a(62);const L={lastUpdated:"lastUpdated_foO9"};function U(e){return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(C.Z,e)))}function T(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:s,formattedLastUpdatedAt:i}=e;return n.createElement("div",{className:(0,l.Z)(u.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(Z.Z,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",L.lastUpdated)},(a||s)&&n.createElement(k,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:s})))}function y(e){const{content:t}=e,{metadata:a}=t,{editUrl:s,lastUpdatedAt:i,formattedLastUpdatedAt:r,lastUpdatedBy:o,tags:c}=a,d=c.length>0,m=!!(s||i||o);return d||m?n.createElement("footer",{className:(0,l.Z)(u.kM.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(U,{tags:c}),m&&n.createElement(T,{editUrl:s,lastUpdatedAt:i,lastUpdatedBy:o,formattedLastUpdatedAt:r})):null}var M=a(1575);const w={tocCollapsible:"tocCollapsible_jdIR",tocCollapsibleButton:"tocCollapsibleButton_Fzxq",tocCollapsibleContent:"tocCollapsibleContent_MpvI",tocCollapsibleExpanded:"tocCollapsibleExpanded_laf4"};var x=a(5002);function A(e){let{toc:t,className:a,minHeadingLevel:s,maxHeadingLevel:r}=e;const{collapsed:o,toggleCollapsed:c}=(0,u.uR)({initialState:!0});return n.createElement("div",{className:(0,l.Z)(w.tocCollapsible,{[w.tocCollapsibleExpanded]:!o},a)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",w.tocCollapsibleButton),onClick:c},n.createElement(i.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(u.zF,{lazy:!0,className:w.tocCollapsibleContent,collapsed:o},n.createElement(x.Z,{toc:t,minHeadingLevel:s,maxHeadingLevel:r})))}var H=a(9649);const I={docItemContainer:"docItemContainer_vinB",docItemCol:"docItemCol_DM6M",tocMobile:"tocMobile_TmEX"},B={breadcrumbsContainer:"breadcrumbsContainer_Xlws",breadcrumbsItemLink:"breadcrumbsItemLink_e5ie"};var S=a(4996);function D(e){let{children:t,href:a}=e;const s=(0,l.Z)("breadcrumbs__link",B.breadcrumbsItemLink);return a?n.createElement(d.Z,{className:s,href:a},t):n.createElement("span",{className:s},t)}function O(e){let{children:t,active:a}=e;return n.createElement("li",{className:(0,l.Z)("breadcrumbs__item",{"breadcrumbs__item--active":a})},t)}function V(){const e=(0,S.Z)("/");return n.createElement(O,null,n.createElement(D,{href:e},"\ud83c\udfe0"))}function W(){const e=(0,u.s1)(),t=(0,u.Ns)();return e?n.createElement("nav",{className:(0,l.Z)(u.kM.docs.docBreadcrumbs,B.breadcrumbsContainer),"aria-label":"breadcrumbs"},n.createElement("ul",{className:"breadcrumbs"},t&&n.createElement(V,null),e.map(((t,a)=>n.createElement(O,{key:a,active:a===e.length-1},n.createElement(D,{href:t.href},t.label)))))):null}function R(e){const{content:t}=e,{metadata:a,frontMatter:s,assets:i}=t,{keywords:r,hide_title:c,hide_table_of_contents:d,toc_min_heading_level:m,toc_max_heading_level:b}=s,{description:v,title:h}=a,g=i.image??s.image,N=!c&&void 0===t.contentTitle,_=(0,u.iP)(),k=!d&&t.toc&&t.toc.length>0,Z=k&&("desktop"===_||"ssr"===_);return n.createElement(n.Fragment,null,n.createElement(f.Z,{title:h,description:v,keywords:r,image:g}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",{[I.docItemCol]:!d})},n.createElement(p,null),n.createElement("div",{className:I.docItemContainer},n.createElement("article",null,n.createElement(W,null),n.createElement(E,null),k&&n.createElement(A,{toc:t.toc,minHeadingLevel:m,maxHeadingLevel:b,className:(0,l.Z)(u.kM.docs.docTocMobile,I.tocMobile)}),n.createElement("div",{className:(0,l.Z)(u.kM.docs.docMarkdown,"markdown")},N&&n.createElement("header",null,n.createElement(H.Z,{as:"h1"},h)),n.createElement(t,null)),n.createElement(y,e)),n.createElement(o,{previous:a.previous,next:a.next}))),Z&&n.createElement("div",{className:"col col--3"},n.createElement(M.Z,{toc:t.toc,minHeadingLevel:m,maxHeadingLevel:b,className:u.kM.docs.docTocDesktop}))))}},6753:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7294),l=a(5999),s=a(7462),i=a(6010);const r={iconEdit:"iconEdit_dcUD"};function o(e){let{className:t,...a}=e;return n.createElement("svg",(0,s.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(r.iconEdit,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}var c=a(650);function d(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:c.kM.common.editThisPage},n.createElement(o,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},9649:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),l=a(7294),s=a(6010),i=a(5999),r=a(650);const o={anchorWithStickyNavbar:"anchorWithStickyNavbar_mojV",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_R0VQ"};function c(e){let{as:t,id:a,...c}=e;const{navbar:{hideOnScroll:d}}=(0,r.LU)();return a?l.createElement(t,(0,n.Z)({},c,{className:(0,s.Z)("anchor",{[o.anchorWithHideOnScrollNavbar]:d,[o.anchorWithStickyNavbar]:!d}),id:a}),c.children,l.createElement("a",{className:"hash-link",href:`#${a}`,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,c)}function d(e){let{as:t,...a}=e;return"h1"===t?l.createElement("h1",(0,n.Z)({},a,{id:void 0}),a.children):l.createElement(c,(0,n.Z)({as:t},a))}},1750:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),l=a(9960);function s(e){const{permalink:t,title:a,subLabel:s}=e;return n.createElement(l.Z,{className:"pagination-nav__link",to:t},s&&n.createElement("div",{className:"pagination-nav__sublabel"},s),n.createElement("div",{className:"pagination-nav__label"},a))}},1575:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),l=a(7294),s=a(6010),i=a(5002);const r={tableOfContents:"tableOfContents_cNA8",docItemContainer:"docItemContainer_WX_Y"},o="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function d(e){let{className:t,...a}=e;return l.createElement("div",{className:(0,s.Z)(r.tableOfContents,"thin-scrollbar",t)},l.createElement(i.Z,(0,n.Z)({},a,{linkClassName:o,linkActiveClassName:c})))}},5002:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7462),l=a(7294),s=a(650);function i(e){let{toc:t,className:a,linkClassName:n,isChild:s}=e;return t.length?l.createElement("ul",{className:s?void 0:a},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:`#${e.id}`,className:n??void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(i,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}function r(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:d,...m}=e;const u=(0,s.LU)(),b=c??u.tableOfContents.minHeadingLevel,v=d??u.tableOfContents.maxHeadingLevel,h=(0,s.b9)({toc:t,minHeadingLevel:b,maxHeadingLevel:v}),g=(0,l.useMemo)((()=>{if(r&&o)return{linkClassName:r,linkActiveClassName:o,minHeadingLevel:b,maxHeadingLevel:v}}),[r,o,b,v]);return(0,s.Si)(g),l.createElement(i,(0,n.Z)({toc:h,className:a,linkClassName:r},m))}},7774:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),l=a(6010),s=a(9960);const i={tag:"tag_hD8n",tagRegular:"tagRegular_D6E_",tagWithCount:"tagWithCount_i0QQ"};function r(e){const{permalink:t,name:a,count:r}=e;return n.createElement(s.Z,{href:t,className:(0,l.Z)(i.tag,{[i.tagRegular]:!r,[i.tagWithCount]:r})},a,r&&n.createElement("span",null,r))}},62:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(6010),s=a(5999),i=a(7774);const r={tags:"tags_XVD_",tag:"tag_JSN8"};function o(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(r.tags,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:r.tag},n.createElement(i.Z,{name:t,permalink:a}))}))))}}}]);