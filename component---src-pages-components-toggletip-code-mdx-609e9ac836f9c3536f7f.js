"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[37549],{28399:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(67294),o=a(88650),l=a.n(o),r=a(1597),s=a(64905),i=a(81151),c=a(75900),m=a.n(c);var d=e=>{let{title:t,theme:a,tabs:o=[]}=e;return n.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":o.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var p=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:o}}}=(0,r.useStaticQuery)("1364590287"),{baseUrl:l,subDirectory:s,branch:i}=a||o,c=`${l}/edit/${i}${s}/src/pages${t}`;return l?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},u=a(56328),g=a(51721);let b=function(e){function t(){return e.apply(this,arguments)||this}return(0,g.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,o=a.split("/").filter(Boolean).slice(-1)[0],s=t.map((e=>{const t=l()(e,{lower:!0,strict:!0}),s=t===o,i=new RegExp(`${o}/?(#.*)?$`),c=a.replace(i,t);return n.createElement("li",{key:e,className:m()({"PageTabs-module--selected-item--aBB0K":s},"PageTabs-module--list-item--024o6")},n.createElement(r.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},s))))))},t}(n.Component);var h=b,E=a(17680),f=a(75387),y=a(50041);var T=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var k=e=>{let{pageContext:t,children:a,location:o,Title:c}=e;const{frontmatter:m={},relativePagePath:g,titleType:b}=t,{tabs:y,title:k,theme:v,description:w,keywords:P,date:C}=m,{interiorTheme:x}=(0,f.Z)(),{site:{pathPrefix:N}}=(0,r.useStaticQuery)("2456312558"),D=N?o.pathname.replace(N,""):o.pathname,R=y?D.split("/").filter(Boolean).slice(-1)[0]||l()(y[0],{lower:!0}):"",Z=v||x;return n.createElement(i.Z,{tabs:y,homepage:!1,theme:Z,pageTitle:k,pageDescription:w,pageKeywords:P,titleType:b},n.createElement(d,{title:c?n.createElement(c,null):k,label:"label",tabs:y,theme:Z}),y&&n.createElement(h,{title:k,slug:D,tabs:y,currentTab:R}),n.createElement(E.Z,{padded:!0},a,n.createElement(p,{relativePagePath:g}),n.createElement(T,{date:C})),n.createElement(u.Z,{pageContext:t,location:o,slug:D,tabs:y,currentTab:R}),n.createElement(s.Z,null))}},45328:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return i},default:function(){return y}});var n=a(45987),o=(a(67294),a(64983)),l=a(28399),r=a(45749);const s=["components"],i={},c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)},m=c("PageDescription"),d=c("Row"),p=c("Column"),u=c("ResourceCard"),g=c("MdxIcon"),b=c("ComponentDemo"),h=c("ComponentVariant"),E={_frontmatter:i},f=l.Z;function y(e){let{components:t}=e,a=(0,n.Z)(e,s);return(0,o.kt)(f,Object.assign({},E,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(m,{mdxType:"PageDescription"},(0,o.kt)("p",null,"Preview the Toggletip component with the React live demo. For detailed code\nusage documentation, see the Storybooks for each framework below.")),(0,o.kt)("h2",null,"Documentation"),(0,o.kt)(d,{className:"resource-card-group",mdxType:"Row"},(0,o.kt)(p,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,o.kt)(u,{subTitle:"React",href:"https://react.carbondesignsystem.com/?path=/story/components-toggletip--default",mdxType:"ResourceCard"},(0,o.kt)(g,{name:"react",mdxType:"MdxIcon"})))),(0,o.kt)("h2",null,"Live demo"),(0,o.kt)(b,{components:[{id:"toggletip",label:"Toggletip"}],scope:{Information:r.d},mdxType:"ComponentDemo"},(0,o.kt)(h,{id:"toggletip",knobs:{Toggletip:["disabled","align"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-toggletip--default"},mdxType:"ComponentVariant"},'\n    <Toggletip>\n      <ToggletipButton label="Additional information">\n        <Information />\n      </ToggletipButton>\n      <ToggletipContent>\n        <p>Custom content here</p>\n      </ToggletipContent>\n    </Toggletip>\n  ')))}y.isMDXComponent=!0}}]);