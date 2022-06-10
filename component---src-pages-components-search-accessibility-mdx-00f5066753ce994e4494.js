"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[20108],{28399:function(e,t,r){r.d(t,{Z:function(){return T}});var s=r(67294),n=r(88650),a=r.n(n),i=r(1597),l=r(64905),o=r(81151),u=r(75900),d=r.n(u);var c=e=>{let{title:t,theme:r,tabs:n=[]}=e;return s.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":n.length,"PageHeader-module--dark-mode--WCeH8":"dark"===r})},s.createElement("div",{className:"cds--grid"},s.createElement("div",{className:"cds--row"},s.createElement("div",{className:"cds--col-lg-12"},s.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var m=e=>{let{relativePagePath:t,repository:r}=e;const{site:{siteMetadata:{repository:n}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:a,subDirectory:l,branch:o}=r||n,u=`${a}/edit/${o}${l}/src/pages${t}`;return a?s.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},s.createElement("div",{className:"cds--col"},s.createElement("a",{className:"EditLink-module--link--IDrl1",href:u},"Edit this page on GitHub"))):null},p=r(56328),h=r(51721);let k=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:r}=this.props,n=r.split("/").filter(Boolean).slice(-1)[0],l=t.map((e=>{const t=a()(e,{lower:!0,strict:!0}),l=t===n,o=new RegExp(`${n}/?(#.*)?$`),u=r.replace(o,t);return s.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":l},"PageTabs-module--list-item--024o6")},s.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:`${u}`},e))}));return s.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},s.createElement("div",{className:"cds--grid"},s.createElement("div",{className:"cds--row"},s.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},s.createElement("nav",{"aria-label":e},s.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},t}(s.Component);var L=k,b=r(17680),y=r(75387),x=r(50041);var S=e=>{let{date:t}=e;const r=new Date(t);return t?s.createElement(x.X2,{className:"last-modified-date-module--row--XJoYQ"},s.createElement(x.sg,null,s.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",r.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var T=e=>{let{pageContext:t,children:r,location:n,Title:u}=e;const{frontmatter:d={},relativePagePath:h,titleType:k}=t,{tabs:x,title:T,theme:w,description:g,keywords:C,date:I}=d,{interiorTheme:f}=(0,y.Z)(),{site:{pathPrefix:v}}=(0,i.useStaticQuery)("2456312558"),A=v?n.pathname.replace(v,""):n.pathname,E=x?A.split("/").filter(Boolean).slice(-1)[0]||a()(x[0],{lower:!0}):"",R=w||f;return s.createElement(o.Z,{tabs:x,homepage:!1,theme:R,pageTitle:T,pageDescription:g,pageKeywords:C,titleType:k},s.createElement(c,{title:u?s.createElement(u,null):T,label:"label",tabs:x,theme:R}),x&&s.createElement(L,{title:T,slug:A,tabs:x,currentTab:E}),s.createElement(b.Z,{padded:!0},r,s.createElement(m,{relativePagePath:h}),s.createElement(S,{date:I})),s.createElement(p.Z,{pageContext:t,location:n,slug:A,tabs:x,currentTab:E}),s.createElement(l.Z,null))}},6505:function(e,t,r){r.r(t),r.d(t,{_frontmatter:function(){return o},default:function(){return L}});var s=r(45987),n=(r(67294),r(64983)),a=r(28399),i=r(63145);const l=["components"],o={},u=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,n.kt)("div",t)},d=u("AnchorLinks"),c=u("AnchorLink"),m=u("Row"),p=u("Column"),h={_frontmatter:o},k=a.Z;function L(e){let{components:t}=e,r=(0,s.Z)(e,l);return(0,n.kt)(k,Object.assign({},h,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)(d,{mdxType:"AnchorLinks"},(0,n.kt)(c,{mdxType:"AnchorLink"},"How it works"),(0,n.kt)(c,{mdxType:"AnchorLink"},"Accessibility considerations"),(0,n.kt)(c,{mdxType:"AnchorLink"},"Accessibility testing")),(0,n.kt)("h2",null,"How it works"),(0,n.kt)("p",null,"The search Carbon component contains a collection of items and objects that, as\na whole, combine to create search functionality to content on the website. WAI\nARIA labels are used on each button so users of assistive technologies\nunderstand the purpose of the button."),(0,n.kt)("h2",null,"Accessibility considerations"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Provide a search function to help users find content."),(0,n.kt)("li",{parentName:"ol"},"If a page includes more than one search landmark, each search field should\nhave a unique label."),(0,n.kt)("li",{parentName:"ol"},"If you change any of the default labels, be sure the new label is clear and\nconcise.")),(0,n.kt)("h2",null,"Resources"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/wai-aria-practices/examples/landmarks/search.html"},"W3C WAI-ARIA Landmarks Example"),"\ncovers the usage of ARIA landmarks on a search widget."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/"},"IBM Accessibility Requirements"),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#1_3_1"},"1.3.1 Information and Relationships"),"\n(WCAG Success Criteria\n",(0,n.kt)("a",{parentName:"li",href:"http://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/content-structure-separation-programmatic.html"},"1.3.1"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#3_3_2"},"3.3.2 Labels and Instructions"),"(WCAG\nSuccess Criteria\n",(0,n.kt)("a",{parentName:"li",href:"http://www.w3.org/TR/UNDERSTANDING-WCAG20/minimize-error-cues.html"},"3.3.2"),")"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.ibm.com/able/requirements/requirements/#4_1_2"},"4.1.2 Name, Role, Value"),"\n(WCAG Success Criteria\n",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/WCAG21/Understanding/name-role-value"},"4.2.1"),")")))),(0,n.kt)("h2",null,"Accessibility testing"),(0,n.kt)("p",null,"Accessibility issues are tracked in the\n",(0,n.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon/issues?q=is%3Aopen+label%3A%22type%3A+a11y+%E2%99%BF%22+label%3A%22component%3A+search%22+"},"Carbon Component GitHub repository"),"."),(0,n.kt)("h3",null,"Automated test"),(0,n.kt)(m,{mdxType:"Row"},(0,n.kt)(p,{noGutterSm:!0,mdxType:"Column"},(0,n.kt)(i.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,n.kt)(i.StructuredListHead,{mdxType:"StructuredListHead"},(0,n.kt)(i.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,n.kt)(i.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Automated test environment"),(0,n.kt)(i.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results"))),(0,n.kt)(i.StructuredListBody,{mdxType:"StructuredListBody"},(0,n.kt)(i.StructuredListRow,{mdxType:"StructuredListRow"},(0,n.kt)(i.StructuredListCell,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",(0,n.kt)("br",null),"- Chrome version 77.0.3865.90",(0,n.kt)("br",null),"- Dynamic Assessment Plugin (DAP) version 1.8.0.0 - IBM Accessibility WCAG 2.1 Sept. 2019 Ruleset",(0,n.kt)("br",null),"- Carbon React version 7.7.1"),(0,n.kt)(i.StructuredListCell,{mdxType:"StructuredListCell"},(0,n.kt)("strong",null,"DAP test:"),(0,n.kt)("br",null),"- No violations")))))),(0,n.kt)("h3",null,"MacOS screen reader tests"),(0,n.kt)(m,{mdxType:"Row"},(0,n.kt)(p,{mdxType:"Column"},(0,n.kt)(i.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,n.kt)(i.StructuredListHead,{mdxType:"StructuredListHead"},(0,n.kt)(i.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,n.kt)(i.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Environment "),(0,n.kt)(i.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results"))),(0,n.kt)(i.StructuredListBody,{mdxType:"StructuredListBody"},(0,n.kt)(i.StructuredListRow,{mdxType:"StructuredListRow"},(0,n.kt)(i.StructuredListCell,{mdxType:"StructuredListCell"},"- macOS Mojave version 10.14.6 with VoiceOver",(0,n.kt)("br",null),"- Chrome version 77.0.3865.90",(0,n.kt)("br",null),"- Carbon React version 7.7.1"),(0,n.kt)(i.StructuredListCell,{mdxType:"StructuredListCell"},(0,n.kt)("strong",null,"VoiceOver(VO) test:"),(0,n.kt)(i.OrderedList,{mdxType:"OrderedList"},(0,n.kt)(i.ListItem,{mdxType:"ListItem"},'Tab to the Search Custom Button component. VO announces, "Search edit text main".'),(0,n.kt)(i.ListItem,{mdxType:"ListItem"},"Enter text in the text field. VO announces each letter as its entered."),(0,n.kt)(i.ListItem,{mdxType:"ListItem"},'Tab to the X button. VO announces, "Clear search input button."'),(0,n.kt)(i.ListItem,{mdxType:"ListItem"},"Press the Enter key and the text box is cleared."),(0,n.kt)(i.ListItem,{mdxType:"ListItem"},"Tab back to the text box."),(0,n.kt)(i.ListItem,{mdxType:"ListItem"},"Enter text in the text field. VO announces each letter as its entered."),(0,n.kt)(i.ListItem,{mdxType:"ListItem"},"Tab to the X button and then Tab back. VO announces the previously entered text."),(0,n.kt)(i.ListItem,{mdxType:"ListItem"},"Press Tab twice. VO announces the Search button."),(0,n.kt)(i.ListItem,{mdxType:"ListItem"},"Press Tab again. VO announces the Filter button.")))))))),(0,n.kt)("h3",null,"Windows screen reader tests"),(0,n.kt)(m,{mdxType:"Row"},(0,n.kt)(p,{noGutterSm:!0,mdxType:"Column"},(0,n.kt)(i.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,n.kt)(i.StructuredListHead,{mdxType:"StructuredListHead"},(0,n.kt)(i.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,n.kt)(i.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Environment"),(0,n.kt)(i.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results"))),(0,n.kt)(i.StructuredListBody,{mdxType:"StructuredListBody"},(0,n.kt)(i.StructuredListRow,{mdxType:"StructuredListRow"},(0,n.kt)(i.StructuredListCell,{mdxType:"StructuredListCell"},"- Microsoft Windows 10",(0,n.kt)("br",null),"- JAWS 19.1810.64",(0,n.kt)("br",null),"- Firefox version 67",(0,n.kt)("br",null),"- Carbon React version 7.7.1"),(0,n.kt)(i.StructuredListCell,{mdxType:"StructuredListCell"},(0,n.kt)("strong",null,"JAWS test:"),(0,n.kt)(i.OrderedList,{mdxType:"OrderedList"},(0,n.kt)(i.ListItem,{mdxType:"ListItem"},'Tab to the Search Custom Button component. JAWS announces, "Main region. Search edit type and text."'),(0,n.kt)(i.ListItem,{mdxType:"ListItem"},"Enter text in the text field. JAWS announces each letter as its entered."),(0,n.kt)(i.ListItem,{mdxType:"ListItem"},'Tab to the X button. JAWS announces, "Clear search input button."'),(0,n.kt)(i.ListItem,{mdxType:"ListItem"},"Press the Enter key and the text box is cleared and focus moves back to the text field."),(0,n.kt)(i.ListItem,{mdxType:"ListItem"},"Enter text in the text field. JAWS announces each letter as its entered."),(0,n.kt)(i.ListItem,{mdxType:"ListItem"},"Tab to the X button and then Tab back. JAWS announces the previously entered text."),(0,n.kt)(i.ListItem,{mdxType:"ListItem"},"Press Tab twice. JAWS announces the Search button."),(0,n.kt)(i.ListItem,{mdxType:"ListItem"},"Press Tab again. JAWS announces the Filter button.")))))))),(0,n.kt)("h3",null,"iOS Screen Reader Tests"),(0,n.kt)(m,{mdxType:"Row"},(0,n.kt)(p,{noGutterSm:!0,mdxType:"Column"},(0,n.kt)(i.StructuredListWrapper,{mdxType:"StructuredListWrapper"},(0,n.kt)(i.StructuredListRow,{head:!0,mdxType:"StructuredListRow"},(0,n.kt)(i.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Environment "),(0,n.kt)(i.StructuredListCell,{head:!0,mdxType:"StructuredListCell"},"Results")),(0,n.kt)(i.StructuredListBody,{mdxType:"StructuredListBody"},(0,n.kt)(i.StructuredListRow,{mdxType:"StructuredListRow"},(0,n.kt)(i.StructuredListCell,{mdxType:"StructuredListCell"},"- iOS version 13.1.3 with VoiceOver",(0,n.kt)("br",null),"- Safari version 13.1.3",(0,n.kt)("br",null),"- Carbon React version 7.7.1"),(0,n.kt)(i.StructuredListCell,{mdxType:"StructuredListCell"},(0,n.kt)("strong",null,"VoiceOver test:"),(0,n.kt)(i.OrderedList,{mdxType:"OrderedList"},(0,n.kt)(i.ListItem,{mdxType:"ListItem"},'Swipe Right to the Search Custom Button component. VO announces, "Search Search text field. Double tap to edit. Insertion point at end."'),(0,n.kt)(i.ListItem,{mdxType:"ListItem"},"Enter text in the text field. VO announces each letter as its entered."),(0,n.kt)(i.ListItem,{mdxType:"ListItem"},'Swipe Right to the X button. VO announces, "Clear search input button."'),(0,n.kt)(i.ListItem,{mdxType:"ListItem"},"Double tap and the text box is cleared."),(0,n.kt)(i.ListItem,{mdxType:"ListItem"},"Swipe Left to go back to the text box. Note: There is an open issue of iOS because focus moves to browser address bar."),(0,n.kt)(i.ListItem,{mdxType:"ListItem"},"Navigate back to the Search input and enter text in the text field. VO announces each letter as its entered."),(0,n.kt)(i.ListItem,{mdxType:"ListItem"},"Swipe Right twice. VO announces the Search button."),(0,n.kt)(i.ListItem,{mdxType:"ListItem"},"Swipe Right again. VO announces the Filter button.")))))))))}L.isMDXComponent=!0}}]);