"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[52158],{28399:function(t,e,a){a.d(e,{Z:function(){return f}});var n=a(67294),l=a(88650),r=a.n(l),i=a(1597),d=a(64905),m=a(81151),p=a(75900),o=a.n(p);var s=t=>{let{title:e,theme:a,tabs:l=[]}=t;return n.createElement("div",{className:o()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":l.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},e)))))};var u=t=>{let{relativePagePath:e,repository:a}=t;const{site:{siteMetadata:{repository:l}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:r,subDirectory:d,branch:m}=a||l,p=`${r}/edit/${m}${d}/src/pages${e}`;return r?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:p},"Edit this page on GitHub"))):null},g=a(56328),c=a(51721);let k=function(t){function e(){return t.apply(this,arguments)||this}return(0,c.Z)(e,t),e.prototype.render=function(){const{title:t,tabs:e,slug:a}=this.props,l=a.split("/").filter(Boolean).slice(-1)[0],d=e.map((t=>{const e=r()(t,{lower:!0,strict:!0}),d=e===l,m=new RegExp(`${l}/?(#.*)?$`),p=a.replace(m,e);return n.createElement("li",{key:t,className:o()({"PageTabs-module--selected-item--aBB0K":d},"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:`${p}`},t))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":t},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},d))))))},e}(n.Component);var b=k,N=a(17680),A=a(75387),y=a(50041);var h=t=>{let{date:e}=t;const a=new Date(e);return e?n.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var f=t=>{let{pageContext:e,children:a,location:l,Title:p}=t;const{frontmatter:o={},relativePagePath:c,titleType:k}=e,{tabs:y,title:f,theme:E,description:v,keywords:x,date:w}=o,{interiorTheme:C}=(0,A.Z)(),{site:{pathPrefix:S}}=(0,i.useStaticQuery)("2456312558"),O=S?l.pathname.replace(S,""):l.pathname,T=y?O.split("/").filter(Boolean).slice(-1)[0]||r()(y[0],{lower:!0}):"",B=E||C;return n.createElement(m.Z,{tabs:y,homepage:!1,theme:B,pageTitle:f,pageDescription:v,pageKeywords:x,titleType:k},n.createElement(s,{title:p?n.createElement(p,null):f,label:"label",tabs:y,theme:B}),y&&n.createElement(b,{title:f,slug:O,tabs:y,currentTab:T}),n.createElement(N.Z,{padded:!0},a,n.createElement(u,{relativePagePath:c}),n.createElement(h,{date:w})),n.createElement(g.Z,{pageContext:e,location:l,slug:O,tabs:y,currentTab:T}),n.createElement(d.Z,null))}},85394:function(t,e,a){a.r(e),a.d(e,{_frontmatter:function(){return d},default:function(){return c}});var n=a(45987),l=(a(67294),a(64983)),r=a(28399);const i=["components"],d={},m=t=>function(e){return console.warn("Component "+t+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",e)},p=m("Caption"),o=m("Row"),s=m("Column"),u={_frontmatter:d},g=r.Z;function c(t){let{components:e}=t,a=(0,n.Z)(t,i);return(0,l.kt)(g,Object.assign({},u,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",null,"Color"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Color token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-secondary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-primary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Field"),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$field")," ","*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"border-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$border-strong")," ","*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Controls"),(0,l.kt)("td",{parentName:"tr",align:null},"svg color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$icon-primary"))))),(0,l.kt)(p,{mdxType:"Caption"},"* Denotes a contextual color token that will change values based on the layer it is placed on."),(0,l.kt)(o,{mdxType:"Row"},(0,l.kt)(s,{colLg:8,mdxType:"Column"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAA2ElEQVQoz9XOwUrEMBAG4EnXh9ibB0H0DRQF36F9QF+mRy/tA/TWaRNCaJpk6GFlJGGVHOKuK3jwh48ZQjIZgL9KXdfQNE0S+9yvwsw5wcyVtbby3ifOua967IX3HpxzPxqYrOsKRAQhhJOK6fse2raNVXRd96S1ftm27SGE8EhEuXj2TEQ38bOomLjNcbMrKeXbMAzsnHu31nJuWZaDMYaNMa9KKdBa74oDERHGcUwQ8RoR7xDx9hv3iLiPb6JipmmCeZ5BSpn6SxQT188IpVR1hvi8/7/yAYomOKlflolbAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Number input example",title:"Number input example",src:"/static/c770d106c4f912bbf553eef52e32c448/3cbba/number-input-style-1.png",srcSet:["/static/c770d106c4f912bbf553eef52e32c448/7fc1e/number-input-style-1.png 288w","/static/c770d106c4f912bbf553eef52e32c448/a5df1/number-input-style-1.png 576w","/static/c770d106c4f912bbf553eef52e32c448/3cbba/number-input-style-1.png 1152w","/static/c770d106c4f912bbf553eef52e32c448/92c65/number-input-style-1.png 1216w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,l.kt)(p,{mdxType:"Caption"},"Number input example."),(0,l.kt)("h3",null,"Interactive states"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"Color token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Controls:hover"),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"field-hover")," ","*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Field:focus"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$focus"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Controls:focus"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$focus"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Field:invalid"),(0,l.kt)("td",{parentName:"tr",align:null},"border"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$support-error"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Error icon"),(0,l.kt)("td",{parentName:"tr",align:null},"svg"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$support-error"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Error message"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-error"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Warning icon"),(0,l.kt)("td",{parentName:"tr",align:null},"svg"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"support-warning"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Warning message"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"text-primary"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label:disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-disabled"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Field:disabled"),(0,l.kt)("td",{parentName:"tr",align:null},"background-color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$field")," ","*")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"border-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"transparent")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"text color"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$text-disabled"))))),(0,l.kt)(o,{mdxType:"Row"},(0,l.kt)(s,{colLg:12,mdxType:"Column"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.166666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAADC0lEQVQozz2T32tcRRTHz3Y3G8wPk+7a9kGflAo+iK99tD+gKJS2EOI/4ZPgawSFBB+ELCjoQ21RC1UkhTUUlQ20EGIItmrSuL/u3r2/f869M3Nn7r27N9mMTIQ+DAMH5nDmc74fEEJAURTAGANKKRBCII5jcBynOplM4OjoCOQdBIGsQZZlYFlW9fj4GEajESRJcvpO0zRoNpsgG8wrirISBMEa53yFEPJ5HMdvywaapr2uqmqDEPJZFEWfep73Cef8vK7rMBgMrhiGsZ6m6QqldNUwjA+3trYqkKbptO/77yOEluI4vh1F0QcIRa/xNIUwDOtBECxTSm85jrOkqupylmXzozyXE78ZhuEyxvg2xnip2+u9t95oTIHSPTjT7WvgBREQlkFMGCRjAbquz0gchmGc4ghQDLppw51vvytpmjZjmuYpAvntNM2gp2hQjNIy/PL7bvnuDxuvbO8dLpphMaeYyct/9+KpMHArjx8/qTabzfP7+/8shqSYM1w6nxBUDoKwsrm5Odtqtc6dTCZzlKXzHZ3MtnY6JXj0rFjYO/S+7pvJg4Gd3uubbGP7eXJJdzC4rveWbTsPE0q+193kvmrTuxlDr/qeDbZt33Q97yFjyT0UkZ8O1GT1jY9FGfY7Ubnd9xdNh9QMK64NDVR/euBOD1WlYlnWlG3bNYzjs5qFagMjPOvaRkUdDiuO47zkul49ilDNcYP6vypa2HkelUDL0Bn1oAvYj4AOTMBOCN7GNuiaNiPECXi+D+KkAMYToCyHR79ulSRfGR8Zl/H4f4Y4GYE+VMrQ/vHnae3PZ+/ioXaNHLYvY3V4PdzZveC1O9Dv9+qWZd8oxvllzvA1xvgVxpJZuSyE0EVCyA3OZY1dZ4xdEkKUgP7WWrD+2F2L2p2v8O5eI+72vgmf/vWOqSjQabcvdjrdO5YxbESh8wXGZDVC6EKe5zK/VymlX3LO1xhj64yxj/I8L8OxEGAJAak0RgjIhADs++AGQVVO8uJMOOT5CMajHEzTrEqbpFWc89NYSWOkcf8Bvh10ToHlKvMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Number input states example",title:"Number input states example",src:"/static/1fd149773cdbb40cb9b12cd56d57939e/3cbba/number-input-style-2.png",srcSet:["/static/1fd149773cdbb40cb9b12cd56d57939e/7fc1e/number-input-style-2.png 288w","/static/1fd149773cdbb40cb9b12cd56d57939e/a5df1/number-input-style-2.png 576w","/static/1fd149773cdbb40cb9b12cd56d57939e/3cbba/number-input-style-2.png 1152w","/static/1fd149773cdbb40cb9b12cd56d57939e/0b124/number-input-style-2.png 1728w","/static/1fd149773cdbb40cb9b12cd56d57939e/99571/number-input-style-2.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,l.kt)(p,{mdxType:"Caption"},"Number input states example."),(0,l.kt)("h2",null,"Typography"),(0,l.kt)("p",null,"Number input labels should use sentence case, with only the first word in a\nphrase and any proper nouns capitalized."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Font-size (px/rem)"),(0,l.kt)("th",{parentName:"tr",align:null},"Font-weight"),(0,l.kt)("th",{parentName:"tr",align:null},"Type token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"12 / 0.75"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$label-01"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Field input"),(0,l.kt)("td",{parentName:"tr",align:null},"14 / 0.875"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$code-02"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Error message"),(0,l.kt)("td",{parentName:"tr",align:null},"12 / 0.75"),(0,l.kt)("td",{parentName:"tr",align:null},"Regular / 400"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$label-01"))))),(0,l.kt)("h2",null,"Structure"),(0,l.kt)("p",null,"The add and subtract icons can be found in the\n",(0,l.kt)("a",{parentName:"p",href:"/guidelines/icons/library"},"icons")," library."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Property"),(0,l.kt)("th",{parentName:"tr",align:null},"px / rem"),(0,l.kt)("th",{parentName:"tr",align:null},"Spacing token"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Label"),(0,l.kt)("td",{parentName:"tr",align:null},"margin-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"8 / 0.5"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-03"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Field (default)"),(0,l.kt)("td",{parentName:"tr",align:null},"height"),(0,l.kt)("td",{parentName:"tr",align:null},"40 / 2.5"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"border-bottom"),(0,l.kt)("td",{parentName:"tr",align:null},"1px"),(0,l.kt)("td",{parentName:"tr",align:null},"–")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Number"),(0,l.kt)("td",{parentName:"tr",align:null},"padding-left"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-05"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Controls"),(0,l.kt)("td",{parentName:"tr",align:null},"padding-left, padding-right"),(0,l.kt)("td",{parentName:"tr",align:null},"16 / 1"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"$spacing-05"))))),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"46.52777777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAABbklEQVQoz7WOPUvDUBSG34u7/gEHjYOI+rNEV1fBP+KkgqKDIC5VdPATQaziN6VRYmtyb27SpknuPbGiHrHo1g4OPvDAWd6HA/wXV6NTOGLGHjO2D2pCNVuCrBF5nncsjBH1LBVekggbxiKzBqYgGGO6x749ZcYhM3b3JeI0x2tBsJZgidAmgjQGL1kG0k3Y1wL0rbWdbdfgctnFwv4FlhZPnAf3aZw/P4astQ4ROW0qHEXk+I1kpHX2MFnwR3+bGUTUO3h8etPHgChdVucrnqfyNK2kWeamaeraLHOfk+Sx6iu3VZdBeFOdZma8MYuewdn4DjPeOWZ3tgZPqpWxVhQNB1I6fhA4Jo6HS/d3Yyvl8wnTbDo13x+QgYSUsveHG8xY5XesXJfhBj4iFUIq1bERhriq13HmeWhEGoFSUIGE6hb8jW4yY50Za5fX4klJ0YgiobUWodYiiSJx6/uiXKt1bqU19I+9mZ/7m134AqoXM1L/DPLvAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Structure and spacing for number input",title:"Structure and spacing for number input",src:"/static/ce88a6e0d19ceaa970457f663d180ae3/3cbba/number-input-style-3.png",srcSet:["/static/ce88a6e0d19ceaa970457f663d180ae3/7fc1e/number-input-style-3.png 288w","/static/ce88a6e0d19ceaa970457f663d180ae3/a5df1/number-input-style-3.png 576w","/static/ce88a6e0d19ceaa970457f663d180ae3/3cbba/number-input-style-3.png 1152w","/static/ce88a6e0d19ceaa970457f663d180ae3/392b1/number-input-style-3.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(p,{mdxType:"Caption"},"Structure and spacing measurements for a number input | px / rem"),(0,l.kt)("h2",null,"Sizes"),(0,l.kt)("p",null,"The height varies for each size variant and the the width varies based on\ncontent, layout, and design."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Element"),(0,l.kt)("th",{parentName:"tr",align:null},"Size"),(0,l.kt)("th",{parentName:"tr",align:null},"Height (px/rem)"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Field"),(0,l.kt)("td",{parentName:"tr",align:null},"Small (sm)"),(0,l.kt)("td",{parentName:"tr",align:null},"32 / 2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Medium (md)"),(0,l.kt)("td",{parentName:"tr",align:null},"40 / 2.5")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Large (lg)"),(0,l.kt)("td",{parentName:"tr",align:null},"48 / 3")))),(0,l.kt)("div",{className:"image--fixed"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"75%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAAAyElEQVQ4y8VU2Q6DIBD0/z/TGN8aOQTKOc3S0NAWEdOHbpwMYeMwsx4TqkopvXgEIK7uo5rwUXWzXh8djJ5gaVhr4b3viqIhdihojMG6rlBKNSGkgOE7knFjDkMI2aVzLjv9BO0HSnB1hmeVquiFDyNTtBhjdktcI++FeO6wNLTWWJYFUsomGGfQm0Dc719PuilYXPTwdEhX+tMMKXbPafRh/MUmsXmewTmHEOKNGWPY2AZ140jajgkOzTDG8y/l8gxHI//yt3kASuOjt6O2D0sAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Sizes for number input",title:"Sizes for number input",src:"/static/030a3713a6ebf7510f51d67919713309/3cbba/number-input-style-size.png",srcSet:["/static/030a3713a6ebf7510f51d67919713309/7fc1e/number-input-style-size.png 288w","/static/030a3713a6ebf7510f51d67919713309/a5df1/number-input-style-size.png 576w","/static/030a3713a6ebf7510f51d67919713309/3cbba/number-input-style-size.png 1152w","/static/030a3713a6ebf7510f51d67919713309/392b1/number-input-style-size.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,l.kt)(p,{mdxType:"Caption"},"Sizes for number input fields | px / rem"))}c.isMDXComponent=!0}}]);