"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[90236],{28399:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(67294),i=a(88650),s=a.n(i),l=a(1597),o=a(64905),r=a(81151),c=a(75900),d=a.n(c);var p=e=>{let{title:t,theme:a,tabs:i=[]}=e;return n.createElement("div",{className:d()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":i.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var g=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:i}}}=(0,l.useStaticQuery)("1364590287"),{baseUrl:s,subDirectory:o,branch:r}=a||i,c=`${s}/edit/${r}${o}/src/pages${t}`;return s?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},m=a(56328),h=a(51721);let u=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,i=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((e=>{const t=s()(e,{lower:!0,strict:!0}),o=t===i,r=new RegExp(`${i}/?(#.*)?$`),c=a.replace(r,t);return n.createElement("li",{key:e,className:d()({"PageTabs-module--selected-item--aBB0K":o},"PageTabs-module--list-item--024o6")},n.createElement(l.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},o))))))},t}(n.Component);var A=u,b=a(17680),k=a(75387),y=a(50041);var w=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var f=e=>{let{pageContext:t,children:a,location:i,Title:c}=e;const{frontmatter:d={},relativePagePath:h,titleType:u}=t,{tabs:y,title:f,theme:x,description:C,keywords:E,date:v}=d,{interiorTheme:N}=(0,k.Z)(),{site:{pathPrefix:I}}=(0,l.useStaticQuery)("2456312558"),T=I?i.pathname.replace(I,""):i.pathname,S=y?T.split("/").filter(Boolean).slice(-1)[0]||s()(y[0],{lower:!0}):"",R=x||N;return n.createElement(r.Z,{tabs:y,homepage:!1,theme:R,pageTitle:f,pageDescription:C,pageKeywords:E,titleType:u},n.createElement(p,{title:c?n.createElement(c,null):f,label:"label",tabs:y,theme:R}),y&&n.createElement(A,{title:f,slug:T,tabs:y,currentTab:S}),n.createElement(b.Z,{padded:!0},a,n.createElement(g,{relativePagePath:h}),n.createElement(w,{date:v})),n.createElement(m.Z,{pageContext:t,location:i,slug:T,tabs:y,currentTab:S}),n.createElement(o.Z,null))}},10994:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return o},default:function(){return x}});var n=a(45987),i=(a(67294),a(64983)),s=a(28399);const l=["components"],o={},r=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},c=r("PageDescription"),d=r("InlineNotification"),p=r("AnchorLinks"),g=r("AnchorLink"),m=r("Row"),h=r("Column"),u=r("ResourceCard"),A=r("MdxIcon"),b=r("Caption"),k=r("DoDontRow"),y=r("DoDont"),w={_frontmatter:o},f=s.Z;function x(e){let{components:t}=e,a=(0,n.Z)(e,l);return(0,i.kt)(f,Object.assign({},w,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(c,{mdxType:"PageDescription"},(0,i.kt)("p",null,"The right panel is part of the Carbon UI shell. A shell is a collection of\ncomponents shared by all products within a platform. It provides a common set of\ninteraction patterns that persist between and across products.")),(0,i.kt)(d,{mdxType:"InlineNotification"},(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"v11 update:")," The UI shell is now themeable and has been updated to use inline\ntheming. The UI shell uses Carbon theme tokens instead of component specific\ntokens and the color will follow each theme’s styles.")),(0,i.kt)(p,{mdxType:"AnchorLinks"},(0,i.kt)(g,{mdxType:"AnchorLink"},"General guidance"),(0,i.kt)(g,{mdxType:"AnchorLink"},"Anatomy"),(0,i.kt)(g,{mdxType:"AnchorLink"},"Behavior")),(0,i.kt)("h2",null,"Resources"),(0,i.kt)(m,{className:"resource-card-group",mdxType:"Row"},(0,i.kt)(h,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,i.kt)(u,{subTitle:"UI Shell template",href:"https://sketch.cloud/s/6a8e1d7b-f00a-4d8d-9d83-79ecf4dc12a0",mdxType:"ResourceCard"},(0,i.kt)(A,{name:"sketch",mdxType:"MdxIcon"})))),(0,i.kt)("h2",null,"General guidance"),(0,i.kt)("p",null,"The UI shell is made up of three components: The\n",(0,i.kt)("a",{parentName:"p",href:"/components/UI-shell-header/usage"},"header"),", the\n",(0,i.kt)("a",{parentName:"p",href:"/components/UI-shell-right-panel/usage"},"left panel"),", and the right panel. All\nthree can be used independently, but the components were designed to work\ntogether."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Shell UI component"),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Header"),(0,i.kt)("td",{parentName:"tr",align:null},"The highest level of navigation. The header can be used on its own for simple products or be used to trigger the left and right panels.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Left panel"),(0,i.kt)("td",{parentName:"tr",align:null},"An optional panel that is used for a product’s navigation.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Right panel"),(0,i.kt)("td",{parentName:"tr",align:null},"An optional panel that shows additional system level actions or content associated with a system icon in the header.")))),(0,i.kt)(m,{mdxType:"Row"},(0,i.kt)(h,{colLg:8,mdxType:"Column"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"83.33333333333334%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAAAsSAAALEgHS3X78AAAC5ElEQVQ4y42T3UsUURiHf6OSOH6sO9qe2dlZVxStlKCrCBJRu+sfCJLoyi4kIk3X3UYUIbyyLsLoKqIL09CMIAiigsiLIPADifU7LFNb23V2Nt3ZnXVOnNVdzI/yBw8v886ch/eFOcAhmTjRcCj/jCAIsFqtkCSJc7lcHCGEs9lsnEgIl28r5E6LxWkNRefSq6TytGybwNkJSX3DKjvndDpZhcPhwJFCh2nmQX1ZluF0OlFSUgJCCERRTL3LAFAOoBJAxQGcOajvcDgYlcXFxWV2uz2dTYnGxkYGURRlsbu72+zs7IwoiqJ7PB7d6/Xuo62tTe/o6NDr6up0QRAisixTWZbnCSEFiQmDwSBUVRV1XV+lR8jW1laidnV10by8PCqKIiWELEmSVJiYcGFhgSGqqrqsaRqNx+PxSCRirq+vm6qq7iMYDJqGYZiKopgWiyW+I1xMCefm5jA/Py8GAoGVeDyeGCIajVImD4fDibobVVUTU7a3t1OLxbJlt9uZ8FtKODU1BZ/PJ25sbKwkt9ot3E1SaJom9Xq9NCcnZ79wenqaSUXDMI4sZGltbaU8zx8ujMVihwr3rszidrv/K1zaEcai0aihadqBqKpqmKZpuN1ug+f52I7wa0o4MzPDpHbDMH4nf41YLLZv3SShUCg1YTbPU2lbuC5J0vGEcGJ8HBNjY/laOPxwUwsPbuqRvlAoNOD3+7dZW+v/ubT8zP9r7Sl7Xl1dHdjc2BxoutXcn5ud0+eQpEEbIb1FDjlXZnd55e4wlnueg1KKB0Bu4u5S+hdtQObe/rUXvaAXXvL07GAWsoDrrvO46aoCPqIaI6jF0uWezNkajxC48ejYziGOYTz+kK7dGcqI3H+dkewxhq7cTn9XWp//pqw+Vy6wcbAC9CoFRmtbMFrTglFUY9x6CZ9xEr4nrzAZ+I7JtyMYBTAOEWMAJn98xYTvC2bffwLoINYqmhA61QwIQEtJDe6VXsQf+QCuws9sklIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"UI shell components.",title:"UI shell components.",src:"/static/3141040b56d7d2eb0a1c269632a590c6/3cbba/shell-usage-1.png",srcSet:["/static/3141040b56d7d2eb0a1c269632a590c6/7fc1e/shell-usage-1.png 288w","/static/3141040b56d7d2eb0a1c269632a590c6/a5df1/shell-usage-1.png 576w","/static/3141040b56d7d2eb0a1c269632a590c6/3cbba/shell-usage-1.png 1152w","/static/3141040b56d7d2eb0a1c269632a590c6/392b1/shell-usage-1.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(b,{mdxType:"Caption"},"UI shell components"))),(0,i.kt)("h2",null,"Anatomy"),(0,i.kt)("p",null,"The right panel is invoked by icons on the right side of the header, and remains\nanchored to that icon. Right panels have a consistent width, span the full\nheight of the viewport, and are flush to the right edge of the viewport."),(0,i.kt)("p",null,"Note that the switcher also lives in a right panel."),(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"57.98611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAACPUlEQVQoz42SS4sTQRDHOzEbmAQzecx0VXcyM5lMMnkYvCjoRYlECAhevAkiguxhTzksiIe9yCKJykKO4uOSk9/AW0AlF29CBIOHgPkCXnaDz5aaTILRRSz4001N8at/VQ+bTqcRxliUMXbiD1GeKaUCNZvN42ooF4Rt28vLbDZj/wqCUZRKpWO/61Sz94mpU3fZu+o2Y6PR6Gaj0XhmGEa/VCo9cF2357ruwLbtqyvgfD6/2Ol0nieTyb7jOP1isdizHWdgO87OBV5m6oZiyr+zBE4mk0uVSuWxaZpKSqmEEKvzSSKRCICLxaLZbrf3AeB7sVhUVr6gCkKqAsr31PSFe017U70VDYDdbpelUikXAH5wzr9wzo845woADoQQrNVqbQ2HwwDs+/6HarWq8lIeAudKoniteir60rt+8m319lYApJBSngMAgvwEgG90R8QB55yaxcIa0/O8me/7NMFXc9l03EyJ5cP5e8uRyYUQ4ixBOOd/ARExpus6gTPlcnlGDglIUyDAOKLF2WldRndrl/8fmE6nma7rmd8dBkDEcTKZZIlEIlKv15fjhsAztHDaIQAchcADAAiAuVyOZbPZjOu6Hz3Powc7DPf8StM0pmlapNFobADPhw7XQsSn5BAAYvTT2radNU3zs2EY6xoAmKyAa4dSSpJExPuIuI+I9xDxkRDiCiJSs6hlWcyyLE0IsYuIvbDmISJu08iktUNyQTIMY0OmadIZoTOfzwcKcxs18Xg8UK1WC4C/AF9Vwxk10xkjAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Header panel and switcher.",title:"Header panel and switcher.",src:"/static/03c98cfb50deb6c661f9af13b3405140/3cbba/right-panel-usage-1.png",srcSet:["/static/03c98cfb50deb6c661f9af13b3405140/7fc1e/right-panel-usage-1.png 288w","/static/03c98cfb50deb6c661f9af13b3405140/a5df1/right-panel-usage-1.png 576w","/static/03c98cfb50deb6c661f9af13b3405140/3cbba/right-panel-usage-1.png 1152w","/static/03c98cfb50deb6c661f9af13b3405140/0b124/right-panel-usage-1.png 1728w","/static/03c98cfb50deb6c661f9af13b3405140/99571/right-panel-usage-1.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,i.kt)(b,{mdxType:"Caption"},"The right panel configured as an empty header panel (left) and a switcher (right)."),(0,i.kt)("h4",null,"Switcher item"),(0,i.kt)("p",null,"A switcher item is anything that changes what product, offering, or property\noccupies the UI shell. Consider moments in a product when you switch from a\ncalendar to a mailbox, from Kubernetes to Catalog. These items belong in the\nswitcher."),(0,i.kt)("h4",null,"Switcher divider"),(0,i.kt)("p",null,"A switcher divider groups similar switcher items. You can use a divider to set\napart a parent domain, group child domains similar in hierarchy to the parent,\nand set apart additional resources. The divider should not be used to separate\nevery switcher item."),(0,i.kt)("h3",null,"Switcher"),(0,i.kt)("p",null,"The far right header icon is reserved for the switcher icon. The switcher icon\nand the switcher panel should only be used together."),(0,i.kt)(k,{mdxType:"DoDontRow"},(0,i.kt)(y,{colLg:6,caption:"Positioned the switcher to the far right.",mdxType:"DoDont"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACH0lEQVQ4y7WUvY7TQBCA1+dkufw7zc6O7fXv2k6kdLxCCiReIBJIKEmfhiYlNS9AAwXieUC0V5xIlZ+GniOXRbuykQ6RSzhxI31aSx5/3pkdLSGPFdvtliilDLPZzKKUWohoMcYsADDoZ9d1Lc/zSMVZwul0Sur1OnFdl3Q6HdJoNEi73SaUUtLv9wkAkG63SxzHOS7c7XaVkM7n8zaltCOEcHq9ntNsNp1Wq+XUajXHcZw+ADT1j+4VbrdbuxS+nk6nilK6A4Bvvu+v4jhehWG4klJeJ0nyPYqit0VRECmlfd8OrVL4dLFYvOr1eu+CIFBRFCm9IqJyXdesiPhRtwMRa0eFm81Gy4x0PB6TKIqex3GskiS5CcPwFgBuGWM/AEBxzt/rPgLAceF6vTY9XC6XJsnzvBdpmqosy/ZJkhw45wcA+FkKP3DOCef8uPBwOBjiOLaDICBCiEme52owGOyllEbIGPstPLnDKpIkMcIgCCbD4VCNRqP9YDB4uFAIYeuB9X1/UvZwH0XRv5dcRRiGthDClCylVHme79M0/b9CfSgA8LCSAcDWyYg4YYwpxtgNY2wPAJrzx6YKzrmty0HEl/rjUnoHzvmns4WIeIGI+mJ4xjm/AoAvAPC15DPn/BoR35Q9tE8K8zw3FEVxkWXZZZZlT/7gMs/zWpV3MrIsM+hkKeVfqXI0J8P3fYM+ac/z7lymJZZ+X84qefT4BQWw27VT88BZAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of the switcher icon being used correctly.",title:"Example of the switcher icon being used correctly.",src:"/static/5492269c143b94981982c54c0c2ba61c/3cbba/right-panel-usage-2.png",srcSet:["/static/5492269c143b94981982c54c0c2ba61c/7fc1e/right-panel-usage-2.png 288w","/static/5492269c143b94981982c54c0c2ba61c/a5df1/right-panel-usage-2.png 576w","/static/5492269c143b94981982c54c0c2ba61c/3cbba/right-panel-usage-2.png 1152w","/static/5492269c143b94981982c54c0c2ba61c/392b1/right-panel-usage-2.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,i.kt)(y,{type:"dont",colLg:6,caption:"Do not position other icons to the right of the switcher.",mdxType:"DoDont"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACHElEQVQ4y7WUu4rbQBRARyvteAkScpq5d/TW6GEZuzH5BReB/IAhgSC7d5PGZer8QJpNEfI9CWlTLOvKjyb9brSeMIMcyBLHzpK9cEBCdw5zH4iQx4rNZkOklJrpdGpQSg3OucEYMxDR8DzPAAD9DgBEwRg7TVjXNTk/Pyee5xHHcYht2/qweu50OoRSevyG2+12L6Sz2cymlDphGHZd1+06jtNljHVt2+5alvXUsqwnp5RstsI3dV1LSukWAK6DIFgKIZZRFC2TJLnKsux7nufvRqMRGQwG5t9uaLTCZ/P5/LXruu+jKJJJksg4jiUiSs659DxPBkHwMYoiEoahdVC4Xq+VTEvH4zFJkuRFmqZSCHEbx/EdIt4xxm4YY0p+qXoKAIeFq9VK93CxWOgk3/dfZlkmi6JohBA7RNwBwA8AUMIPiEgQ8bBwt9tp0jQ123ImZVnKqqqaPM+1kDH2S9iujnV0OEIILYyiaNLv9+VwOGyqqnq4MAxD0/d9EgTBpO1hkyTJv5e8jziOzTAMdcl5nsuyLJssy/6vUA0FAB5WMgCYKplzPlErwhi7ZYw1AKC4aYWXJwsR0VTlcM5fqcOt9DcQ8dPJQs75Gedc/RieI+I3APgCAF9bPiPiFef8bdtD86iwLEtNr9c7K4rioiiKzj0uyrK09nlHoygKjUrO8/yP7HMURyMIAo2atO/7htrJexjqe7ur5NHjJx3D2wT99Wh5AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"The switcher icon is not positioned to the far right.",title:"The switcher icon is not positioned to the far right.",src:"/static/399f546fe0a87e002359a5d0c50d0a56/3cbba/right-panel-usage-3.png",srcSet:["/static/399f546fe0a87e002359a5d0c50d0a56/7fc1e/right-panel-usage-3.png 288w","/static/399f546fe0a87e002359a5d0c50d0a56/a5df1/right-panel-usage-3.png 576w","/static/399f546fe0a87e002359a5d0c50d0a56/3cbba/right-panel-usage-3.png 1152w","/static/399f546fe0a87e002359a5d0c50d0a56/392b1/right-panel-usage-3.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)(k,{mdxType:"DoDontRow"},(0,i.kt)(y,{type:"dont",colLg:6,caption:"Do not use another icon for the switcher.",mdxType:"DoDont"},(0,i.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,i.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"100%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAAsSAAALEgHS3X78AAACIUlEQVQ4y7WUu4rbQBRAR9ZKXnll5DRzZ/R+jR7gwpDGH+AikB8wJBBk927SuEydH0izKUK+J2HbFEtc+dGk343WE2aQAhvitbNkLxwkxJ3DvXdGg9BTxXa7RZxzyWw2U3RdVyilCsZYAQCJeLdtW3EcB7WcJKyqCmmahmzbRv1+HxmGgUzTRN1uF11cXMhvIlRVPSzc7XatUJ/P56au633P8waWZQ16vZ5E07SBYRjPTNPsiTWdTufBCtVG+LaqKq7r+g4Avruuu4qiaBWG4SpJkus8z3+UZfl+PB6j0WikPlSh0gifLxaLN5ZlffB9n4dhyMWTUspt22755LqumOHZQeFmsxEyKZ1MJigMw5dRFPE4jm+DILgDgDuM8Q3GmBNCLgEAAcBh4Xq9ljNcLpcyyXGcV0mScMZYHcfxnhCyB4CfACCEHwkhiBByWLjf7yVRFKm+7yPP86ZZlvGiKOo0TaUQY/xbeLTCNuI4lkLf96dlWfLhcFgXRfF4oed5qjiwrutOmxnWYRj+e8ttBEGgep4nW07TlGdZVidJ8n+FYlMA4HEtA4AqkimlU3FEMMa3GOMaAAQ3jfDyZCEhRBXtUEpfi8WN9B6EkM8nCymlHUqpuBheEEK+AcBXALhq+EIIuaaUvmtmqB4VZlkmyfO8wxg7Z4x1/+A8y7KzNu9oMMYkIjlN07/S5giOhvjpBWKnHce5d5k2KM3FIPOePH4BUPLbQCS3254AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,i.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"The switcher not using the switcher icon.",title:"The switcher not using the switcher icon.",src:"/static/756b1b1d79c893550c3f2cf4278aa216/3cbba/right-panel-usage-4.png",srcSet:["/static/756b1b1d79c893550c3f2cf4278aa216/7fc1e/right-panel-usage-4.png 288w","/static/756b1b1d79c893550c3f2cf4278aa216/a5df1/right-panel-usage-4.png 576w","/static/756b1b1d79c893550c3f2cf4278aa216/3cbba/right-panel-usage-4.png 1152w","/static/756b1b1d79c893550c3f2cf4278aa216/392b1/right-panel-usage-4.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,i.kt)("h2",null,"Behavior"),(0,i.kt)("h4",null,"Expansion"),(0,i.kt)("p",null,"Right panels always float over page content, and always remain anchored to their\nassociated icon. You can have multiple right panels, but only one can be\nexpanded at any time."),(0,i.kt)("h4",null,"Dismissal"),(0,i.kt)("p",null,"Once expanded, the panel’s associated icon is outlined, with its bottom border\nflowing into the panel. To dismiss the panel, a user must select an item, or\nclick or tap the header icon."),(0,i.kt)("h4",null,"Selected state"),(0,i.kt)("p",null,"There is no selected state for right panel items. Even if a user is currently\nwithin one of the panel items, the item remains unselected."))}x.isMDXComponent=!0}}]);