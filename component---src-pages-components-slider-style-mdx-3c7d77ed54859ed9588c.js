"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[57246],{28399:function(t,e,a){a.d(e,{Z:function(){return E}});var n=a(67294),l=a(88650),r=a.n(l),i=a(1597),d=a(64905),m=a(81151),o=a(75900),p=a.n(o);var s=t=>{let{title:e,theme:a,tabs:l=[]}=t;return n.createElement("div",{className:p()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":l.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},e)))))};var u=t=>{let{relativePagePath:e,repository:a}=t;const{site:{siteMetadata:{repository:l}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:d,branch:m}=a||l,o=`${r}/edit/${m}${d}/src/pages${e}`;return r?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:o},"Edit this page on GitHub"))):null},g=a(56328),k=a(51721);let c=function(t){function e(){return t.apply(this,arguments)||this}return(0,k.Z)(e,t),e.prototype.render=function(){const{title:t,tabs:e,slug:a}=this.props,l=a.split("/").filter(Boolean).slice(-1)[0],d=e.map((t=>{const e=r()(t,{lower:!0,strict:!0}),d=e===l,m=new RegExp(`${l}/?(#.*)?$`),o=a.replace(m,e);return n.createElement("li",{key:t,className:p()({"PageTabs-module--selected-item--aBB0K":d},"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:`${o}`},t))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},d))))))},e}(n.Component);var N=c,b=a(17680),h=a(75387),y=a(50041);var f=t=>{let{date:e}=t;const a=new Date(e);return e?n.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var E=t=>{let{pageContext:e,children:a,location:l,Title:o}=t;const{frontmatter:p={},relativePagePath:k,titleType:c}=e,{tabs:y,title:E,theme:w,description:v,keywords:A,date:C}=p,{interiorTheme:T}=(0,h.Z)(),{site:{pathPrefix:x}}=(0,i.useStaticQuery)("2456312558"),L=x?l.pathname.replace(x,""):l.pathname,P=y?L.split("/").filter(Boolean).slice(-1)[0]||r()(y[0],{lower:!0}):"",B=w||T;return n.createElement(m.Z,{tabs:y,homepage:!1,theme:B,pageTitle:E,pageDescription:v,pageKeywords:A,titleType:c},n.createElement(s,{title:o?n.createElement(o,null):E,label:"label",tabs:y,theme:B}),y&&n.createElement(N,{title:E,slug:L,tabs:y,currentTab:P}),n.createElement(b.Z,{padded:!0},a,n.createElement(u,{relativePagePath:k}),n.createElement(f,{date:C})),n.createElement(g.Z,{pageContext:e,location:l,slug:L,tabs:y,currentTab:P}),n.createElement(d.Z,null))}},21703:function(t,e,a){a.r(e),a.d(e,{_frontmatter:function(){return d},default:function(){return u}});var n=a(45987),l=(a(67294),a(64983)),r=a(28399);const i=["components"],d={},m=(o="Caption",function(t){return console.warn("Component "+o+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)});var o;const p={_frontmatter:d},s=r.Z;function u(t){let{components:e}=t,a=(0,n.Z)(t,i);return(0,l.kt)(s,Object.assign({},p,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",null,"Color"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Color token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Slider thumb"),(0,l.kt)("td",{parentName:"tr",align:null},"fill"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$icon-primary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Track"),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$border-subtle")," ","*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Track: filled"),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$border-inverse"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-secondary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Rangel label"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-primary"))))),(0,l.kt)(m,{mdxType:"Caption"},"* Denotes a contextual color token that will change values based on the layer it is placed on."),(0,l.kt)("h3",null,"Interactive states"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Color token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Thumb:focus"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$focus"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Thumb:active"),(0,l.kt)("td",{parentName:"tr",align:null},"fill"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$interactive"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Track:active"),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$interactive"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label:disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-disabled"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Thumb:disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"fill"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$border-disabled"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Track:disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$border-disabled"))))),(0,l.kt)("h2",null,"Typography"),(0,l.kt)("p",null,"Slider labels should be set in sentence case, with only the first word in a\nphrase and any proper nouns capitalized, and no more than three words."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Font-size (px/rem)"),(0,l.kt)("th",{parentName:"tr",align:null},"Font-weight"),(0,l.kt)("th",{parentName:"tr",align:null},"Type token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"12 / 0.75"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$label-01"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Range label"),(0,l.kt)("td",{parentName:"tr",align:null},"14 / 0.875"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$code-02"))))),(0,l.kt)("h2",null,"Structure"),(0,l.kt)("p",null,"The width of a slider varies based on page content and layout."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"px / rem"),(0,l.kt)("th",{parentName:"tr",align:null},"Spacing token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Thumb"),(0,l.kt)("td",{parentName:"tr",align:null},"height, width"),(0,l.kt)("td",{parentName:"tr",align:null},"14 / 0.875"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Thumb:active"),(0,l.kt)("td",{parentName:"tr",align:null},"height, width"),(0,l.kt)("td",{parentName:"tr",align:null},"20 / 1.25"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Track"),(0,l.kt)("td",{parentName:"tr",align:null},"height"),(0,l.kt)("td",{parentName:"tr",align:null},"4 / 0.25"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"margin-left, margin-right"),(0,l.kt)("td",{parentName:"tr",align:null},"8 / 0.5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-03"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"margin-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-05"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Range label"),(0,l.kt)("td",{parentName:"tr",align:null},"margin-right"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-05"))))),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"34.375%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAAB3UlEQVQoz12PX0hTARTGv7kLF7fdbfQQ8yFi4j+2wgchkHoyfYlMQZx/ZmLXdiexSKJ8qWA6Fnd/mjpRcT7JIitUCB/FehBByXa3ifjgFmRFuO1eX3qRwBN3FDg/+A7n4Ts/vgMAiN0lxAYIMw5CrOMPovUNWO15ifWbw3jv8eFVMISwKCK+sqLG8a1Q0BwfK2XybgZEBDl5gFStq+iipnjCtEAY7zqF2JHE82vX8e5BEB86R7DwLIBwKIygKGJhcRFobkY2n4csy1BSmeJ9fj1RChzr3YG3Lw2fY7/K2/7mUuxqo/lT01PTWsuwYVnwslGfyERG/czS67cMgLKfslylKEqrks5UqA0LW3uaEmDf6AacgQT4h9uXHe6Jak9jU81EdIaL+EVucnaa885H9f65iM6/umTGo6GLn398f5HL5wq51EGrCjzaSGpLgJX9dpjv1eBOG7T93QPlhBCTMfawh0Yne1jezX41OdnfbC8bv8Lrhm55LjxxjpiV0LJhezDAJG88xg5R6cuEOAgJnFjGNQQBmzbeINncBskmcJLdzUl2Qf/FLhj3awXdL+t9jtDCqM0+AthzRbAGnAeqg0C4DYIFiToB6X8B1eou1bmQtQ7ipIIv5lXgWf/XX3pI3cuCLp58AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Structure and spacing measurements for slider",title:"Structure and spacing measurements for slider",src:"/static/ca7cedf29252263e3ba55f271b4bbf49/3cbba/slider-style-1.png",srcSet:["/static/ca7cedf29252263e3ba55f271b4bbf49/7fc1e/slider-style-1.png 288w","/static/ca7cedf29252263e3ba55f271b4bbf49/a5df1/slider-style-1.png 576w","/static/ca7cedf29252263e3ba55f271b4bbf49/3cbba/slider-style-1.png 1152w","/static/ca7cedf29252263e3ba55f271b4bbf49/392b1/slider-style-1.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)("h3",null,"Recommended"),(0,l.kt)("p",null,"The following specs are not built into the slider component but are recommended\nby design as the proper sizing for the slider tracking line."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"px / rem"),(0,l.kt)("th",{parentName:"tr",align:null},"Spacing token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Slider"),(0,l.kt)("td",{parentName:"tr",align:null},"min-width"),(0,l.kt)("td",{parentName:"tr",align:null},"200 / 12.5"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"max-width"),(0,l.kt)("td",{parentName:"tr",align:null},"640 / 40"),(0,l.kt)("td",{parentName:"tr",align:null},"–")))))}u.isMDXComponent=!0}}]);