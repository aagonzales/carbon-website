"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[41619],{28399:function(e,a,t){t.d(a,{Z:function(){return w}});var n=t(67294),r=t(88650),o=t.n(r),l=t(1597),s=t(64905),c=t(81151),i=t(75900),m=t.n(i);var d=e=>{let{title:a,theme:t,tabs:r=[]}=e;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":r.length,"PageHeader-module--dark-mode--WCeH8":"dark"===t})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))};var p=e=>{let{relativePagePath:a,repository:t}=e;const{site:{siteMetadata:{repository:r}}}=(0,l.useStaticQuery)("1364590287"),{baseUrl:o,subDirectory:s,branch:c}=t||r,i=`${o}/edit/${c}${s}/src/pages${a}`;return o?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:i},"Edit this page on GitHub"))):null},u=t(56328),g=t(51721);let h=function(e){function a(){return e.apply(this,arguments)||this}return(0,g.Z)(a,e),a.prototype.render=function(){const{title:e,tabs:a,slug:t}=this.props,r=t.split("/").filter(Boolean).slice(-1)[0],s=a.map((e=>{const a=o()(e,{lower:!0,strict:!0}),s=a===r,c=new RegExp(`${r}/?(#.*)?$`),i=t.replace(c,a);return n.createElement("li",{key:e,className:m()({"PageTabs-module--selected-item--aBB0K":s},"PageTabs-module--list-item--024o6")},n.createElement(l.Link,{className:"PageTabs-module--link--Kz-7R",to:`${i}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},a}(n.Component);var k=h,b=t(17680),f=t(75387),y=t(50041);var N=e=>{let{date:a}=e;const t=new Date(a);return a?n.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var w=e=>{let{pageContext:a,children:t,location:r,Title:i}=e;const{frontmatter:m={},relativePagePath:g,titleType:h}=a,{tabs:y,title:w,theme:E,description:v,keywords:x,date:T}=m,{interiorTheme:C}=(0,f.Z)(),{site:{pathPrefix:P}}=(0,l.useStaticQuery)("2456312558"),$=P?r.pathname.replace(P,""):r.pathname,L=y?$.split("/").filter(Boolean).slice(-1)[0]||o()(y[0],{lower:!0}):"",S=E||C;return n.createElement(c.Z,{tabs:y,homepage:!1,theme:S,pageTitle:w,pageDescription:v,pageKeywords:x,titleType:h},n.createElement(d,{title:i?n.createElement(i,null):w,label:"label",tabs:y,theme:S}),y&&n.createElement(k,{title:w,slug:$,tabs:y,currentTab:L}),n.createElement(b.Z,{padded:!0},t,n.createElement(p,{relativePagePath:g}),n.createElement(N,{date:T})),n.createElement(u.Z,{pageContext:a,location:r,slug:$,tabs:y,currentTab:L}),n.createElement(s.Z,null))}},79963:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return s},default:function(){return y}});var n=t(45987),r=(t(67294),t(64983)),o=t(28399);const l=["components"],s={},c=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,r.kt)("div",a)},i=c("PageDescription"),m=c("InlineNotification"),d=c("AnchorLinks"),p=c("AnchorLink"),u=c("Row"),g=c("Column"),h=c("ResourceCard"),k=c("MdxIcon"),b={_frontmatter:s},f=o.Z;function y(e){let{components:a}=e,t=(0,n.Z)(e,l);return(0,r.kt)(f,Object.assign({},b,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)(i,{mdxType:"PageDescription"},(0,r.kt)("p",null,"The Carbon color package helps teams build engaging digital experiences through\nconsistent application of color.")),(0,r.kt)(m,{mdxType:"InlineNotification"},(0,r.kt)("p",null,"If you’re using ",(0,r.kt)("inlineCode",{parentName:"p"},"@carbon/react")," there’s no reason to install the color package\nseparately. See our ",(0,r.kt)("a",{parentName:"p",href:"/get-started/develop/react"},"get started")," guide to start\nbuilding.")),(0,r.kt)(d,{mdxType:"AnchorLinks"},(0,r.kt)(p,{mdxType:"AnchorLink"},"Getting started"),(0,r.kt)(p,{mdxType:"AnchorLink"},"Usage"),(0,r.kt)(p,{mdxType:"AnchorLink"},"Resources")),(0,r.kt)("h2",null,"Getting started"),(0,r.kt)("p",null,"To install ",(0,r.kt)("inlineCode",{parentName:"p"},"@carbon/colors")," in your project, you will need to run the following\ncommand using ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -S @carbon/colors\n")),(0,r.kt)("p",null,"If you prefer ",(0,r.kt)("a",{parentName:"p",href:"https://yarnpkg.com/en/"},"Yarn"),", use the following command\ninstead:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @carbon/colors\n")),(0,r.kt)("h2",null,"Usage"),(0,r.kt)("h3",null,"Sass"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"@carbon/colors")," package enables you to access colors from the IBM Design\nLanguage in Sass. You can access a color directly from the package by writing\nthe following:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"@use '@carbon/colors';\n\n.selector {\n  background: colors.$blue-50;\n}\n")),(0,r.kt)("p",null,"For a full list of colors exported, refer to the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon/blob/main/packages/colors/docs/sass.md#api"},"API"),"\nsection in the package’s Sass Documentation."),(0,r.kt)("p",null,"In addition to individual colors, you can access all colors in a ",(0,r.kt)("inlineCode",{parentName:"p"},"Map")," using the\n",(0,r.kt)("inlineCode",{parentName:"p"},"$colors")," variable."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"@use '@carbon/colors';\n@each $swatch, $grades in colors.$colors {\n  @each $grade in $grades {\n    //\n  }\n}\n")),(0,r.kt)("p",null,"Each key in the ",(0,r.kt)("inlineCode",{parentName:"p"},"$colors")," map is the name of a group of colors, also known as a\nswatch. The value of each entry is a ",(0,r.kt)("inlineCode",{parentName:"p"},"Map")," where the keys are the color grade\nand the values are the hex codes for the color at that grade. For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-scss"},"$colors: (\n  blue: (\n    10: #edf5ff,\n    20: #d0e2ff,\n    30: #a6c8ff,\n    40: #78a9ff,\n    50: #4589ff,\n    60: #0f62fe,\n    70: #0043ce,\n    80: #002d9c,\n    90: #001d6c,\n    100: #001141,\n  ),\n);\n")),(0,r.kt)("h3",null,"JavaScript"),(0,r.kt)("p",null,"For JavaScript, you can import and use this module by doing the following in\nyour code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// ESM\nimport { black, blue, warmGray } from '@carbon/colors';\n\n// CommonJS\nconst { black, blue, warmGray } = require('@carbon/colors');\n")),(0,r.kt)("p",null,"Each color swatch is exported as a variable, and each color name is also\nexported as an object that can be called by specifying grade, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"black;\nblue[50]; // Using the `blue` object.\nwarmGray100; // Using the `warmGray100` variable.\n")),(0,r.kt)("h2",null,"Resources"),(0,r.kt)(u,{className:"resource-card-group",mdxType:"Row"},(0,r.kt)(g,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,r.kt)(h,{subTitle:"Carbon color package",href:"https://github.com/carbon-design-system/carbon/blob/v10/packages/colors",mdxType:"ResourceCard"},(0,r.kt)(k,{name:"github",mdxType:"MdxIcon"}))),(0,r.kt)(g,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,r.kt)(h,{subTitle:"Color package demo",href:"https://carbon-elements.netlify.app/colors/examples/preview/",mdxType:"ResourceCard"},(0,r.kt)(k,{name:"bee",mdxType:"MdxIcon"})))))}y.isMDXComponent=!0}}]);