"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[67502],{28399:function(e,t,a){a.d(t,{Z:function(){return N}});var n=a(67294),l=a(88650),r=a.n(l),o=a(1597),i=a(64905),s=a(81151),u=a(75900),p=a.n(u);var m=e=>{let{title:t,theme:a,tabs:l=[]}=e;return n.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":l.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var c=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:l}}}=(0,o.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:i,branch:s}=a||l,u=`${r}/edit/${s}${i}/src/pages${t}`;return r?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:u},"Edit this page on GitHub"))):null},d=a(56328),g=a(51721);let h=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,l=a.split("/").filter(Boolean).slice(-1)[0],i=t.map((e=>{const t=r()(e,{lower:!0,strict:!0}),i=t===l,s=new RegExp(`${l}/?(#.*)?$`),u=a.replace(s,t);return n.createElement("li",{key:e,className:p()({"PageTabs-module--selected-item--aBB0K":i},"PageTabs-module--list-item--024o6")},n.createElement(o.Link,{className:"PageTabs-module--link--Kz-7R",to:`${u}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},i))))))},t}(n.Component);var k=h,b=a(17680),f=a(75387),y=a(50041);var w=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var N=e=>{let{pageContext:t,children:a,location:l,Title:u}=e;const{frontmatter:p={},relativePagePath:g,titleType:h}=t,{tabs:y,title:N,theme:v,description:E,keywords:P,date:T}=p,{interiorTheme:C}=(0,f.Z)(),{site:{pathPrefix:x}}=(0,o.useStaticQuery)("2456312558"),A=x?l.pathname.replace(x,""):l.pathname,L=y?A.split("/").filter(Boolean).slice(-1)[0]||r()(y[0],{lower:!0}):"",D=v||C;return n.createElement(s.Z,{tabs:y,homepage:!1,theme:D,pageTitle:N,pageDescription:E,pageKeywords:P,titleType:h},n.createElement(m,{title:u?n.createElement(u,null):N,label:"label",tabs:y,theme:D}),y&&n.createElement(k,{title:N,slug:A,tabs:y,currentTab:L}),n.createElement(b.Z,{padded:!0},a,n.createElement(c,{relativePagePath:g}),n.createElement(w,{date:T})),n.createElement(d.Z,{pageContext:t,location:l,slug:A,tabs:y,currentTab:L}),n.createElement(i.Z,null))}},70849:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return s},default:function(){return k}});var n=a(45987),l=(a(67294),a(64983)),r=a(28399),o=a(80941);const i=["components"],s={},u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)},p=u("PageDescription"),m=u("InlineNotification"),c=u("AnchorLinks"),d=u("AnchorLink"),g={_frontmatter:s},h=r.Z;function k(e){let{components:t}=e,a=(0,n.Z)(e,i);return(0,l.kt)(h,Object.assign({},g,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(p,{mdxType:"PageDescription"},(0,l.kt)("p",null,"Welcome to Carbon! This tutorial will guide you in creating an Angular app with\nthe Carbon Design System. We’ll teach you the ins and outs of using Carbon\ncomponents, while introducing web development best practices along the way.")),(0,l.kt)(m,{mdxType:"InlineNotification"},(0,l.kt)("p",null,"The Angular tutorial is maintained by members of the Carbon community. For\nsupport, contact the\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-tutorial-angular/issues/new"},"Carbon Angular team"),".")),(0,l.kt)(c,{mdxType:"AnchorLinks"},(0,l.kt)(d,{mdxType:"AnchorLink"},"Audience"),(0,l.kt)(d,{mdxType:"AnchorLink"},"Prerequisites"),(0,l.kt)(d,{mdxType:"AnchorLink"},"Outline")),(0,l.kt)("p",null,"Here’s a ",(0,l.kt)("a",{parentName:"p",href:"https://angular-step-6-carbon-tutorial.netlify.com"},"preview")," of what\nyou will build:"),(0,l.kt)(o.Z,{height:"400",title:"Carbon Tutorial",src:"https://angular-step-6-carbon-tutorial.netlify.com",frameBorder:"no",allowtransparency:"true",allowFullScreen:!0,mdxType:"Preview"}),(0,l.kt)("h2",null,"Audience"),(0,l.kt)("p",null,"This tutorial is intended for people with all amounts of web development\nexperience. If you want to jump straight to code, you may want to skip this\ntutorial and go to the ",(0,l.kt)("a",{parentName:"p",href:"/developing/get-started"},"developers getting started"),"\npage."),(0,l.kt)("h2",null,"Prerequisites"),(0,l.kt)("h3",null,"Angular"),(0,l.kt)("p",null,"This is a web development tutorial that uses the Carbon Angular components. If\nyou’re just getting started with Angular and enjoy learning-by-doing, check out\nthe official Angular ",(0,l.kt)("a",{parentName:"p",href:"https://angular.io/docs"},"guide"),"."),(0,l.kt)("h3",null,"ES6/ES2015"),(0,l.kt)("p",null,"Angular apps often use the latest and greatest from JavaScript (ES6/ES2015).\nYou’ll want to be up to speed on the most commonly used features of the\nlanguage.\n",(0,l.kt)("a",{parentName:"p",href:"https://www.youtube.com/playlist?list=PL57atfCFqj2h5fpdZD-doGEIs0NZxeJTX"},"Let’s Learn ES6"),"\ncovers those features in depth."),(0,l.kt)("h3",null,"GitHub"),(0,l.kt)("p",null,"We’ll be using GitHub to build an app together, so if you’re new to GitHub, make\nsure you’ve ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/join"},"made an account"),". Their\n",(0,l.kt)("a",{parentName:"p",href:"https://guides.github.com/activities/hello-world"},"getting started guide")," is a\ngreat way to learn GitHub."),(0,l.kt)("h3",null,"npm"),(0,l.kt)("p",null,"This tutorial uses ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/"},"npm")," for dependency management. Make\nsure that you have ",(0,l.kt)("a",{parentName:"p",href:"https://www.npmjs.com/get-npm"},"npm installed")," prior to\nstarting the tutorial so you can follow along step-by-step."),(0,l.kt)("h2",null,"Outline"),(0,l.kt)("p",null,"Each step in this tutorial illustrates a different aspect of developing web\napplications with Carbon. We recommend starting with step 1, but you can pick up\nany step and take it from there."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/developing/angular-tutorial/step-1"},(0,l.kt)("strong",{parentName:"a"},"Installing Carbon")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Create a web app with the UI shell component."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/developing/angular-tutorial/step-2"},(0,l.kt)("strong",{parentName:"a"},"Building pages")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Build out pages with the grid and various components."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/developing/angular-tutorial/step-3"},(0,l.kt)("strong",{parentName:"a"},"Using APIs")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Populate the data table with an external data source."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/developing/angular-tutorial/step-4"},(0,l.kt)("strong",{parentName:"a"},"Creating components")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Extend Carbon by creating your own components."))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("a",{parentName:"li",href:"/developing/angular-tutorial/step-5"},(0,l.kt)("strong",{parentName:"a"},"Deploying to IBM Cloud")),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Build and host your app in a production environment.")))))}k.isMDXComponent=!0}}]);