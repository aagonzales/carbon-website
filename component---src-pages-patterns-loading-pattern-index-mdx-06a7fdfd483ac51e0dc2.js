"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[84315],{28399:function(e,a,t){t.d(a,{Z:function(){return y}});var n=t(67294),o=t(88650),i=t.n(o),s=t(1597),l=t(64905),r=t(81151),d=t(75900),c=t.n(d);var p=e=>{let{title:a,theme:t,tabs:o=[]}=e;return n.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":o.length,"PageHeader-module--dark-mode--WCeH8":"dark"===t})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},a)))))};var g=e=>{let{relativePagePath:a,repository:t}=e;const{site:{siteMetadata:{repository:o}}}=(0,s.useStaticQuery)("1364590287"),{baseUrl:i,subDirectory:l,branch:r}=t||o,d=`${i}/edit/${r}${l}/src/pages${a}`;return i?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:d},"Edit this page on GitHub"))):null},m=t(56328),u=t(51721);let b=function(e){function a(){return e.apply(this,arguments)||this}return(0,u.Z)(a,e),a.prototype.render=function(){const{title:e,tabs:a,slug:t}=this.props,o=t.split("/").filter(Boolean).slice(-1)[0],l=a.map((e=>{const a=i()(e,{lower:!0,strict:!0}),l=a===o,r=new RegExp(`${o}/?(#.*)?$`),d=t.replace(r,a);return n.createElement("li",{key:e,className:c()({"PageTabs-module--selected-item--aBB0K":l},"PageTabs-module--list-item--024o6")},n.createElement(s.Link,{className:"PageTabs-module--link--Kz-7R",to:`${d}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},l))))))},a}(n.Component);var k=b,h=t(17680),f=t(75387),A=t(50041);var w=e=>{let{date:a}=e;const t=new Date(a);return a?n.createElement(A.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(A.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",t.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var y=e=>{let{pageContext:a,children:t,location:o,Title:d}=e;const{frontmatter:c={},relativePagePath:u,titleType:b}=a,{tabs:A,title:y,theme:N,description:v,keywords:x,date:E}=c,{interiorTheme:L}=(0,f.Z)(),{site:{pathPrefix:S}}=(0,s.useStaticQuery)("2456312558"),C=S?o.pathname.replace(S,""):o.pathname,B=A?C.split("/").filter(Boolean).slice(-1)[0]||i()(A[0],{lower:!0}):"",T=N||L;return n.createElement(r.Z,{tabs:A,homepage:!1,theme:T,pageTitle:y,pageDescription:v,pageKeywords:x,titleType:b},n.createElement(p,{title:d?n.createElement(d,null):y,label:"label",tabs:A,theme:T}),A&&n.createElement(k,{title:y,slug:C,tabs:A,currentTab:B}),n.createElement(h.Z,{padded:!0},t,n.createElement(g,{relativePagePath:u}),n.createElement(w,{date:E})),n.createElement(m.Z,{pageContext:a,location:o,slug:C,tabs:A,currentTab:B}),n.createElement(l.Z,null))}},24815:function(e,a,t){t.r(a),t.d(a,{_frontmatter:function(){return l},default:function(){return h}});var n=t(45987),o=(t(67294),t(64983)),i=t(28399);const s=["components"],l={},r=e=>function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",a)},d=r("PageDescription"),c=r("AnchorLinks"),p=r("AnchorLink"),g=r("Row"),m=r("Column"),u=r("Caption"),b={_frontmatter:l},k=i.Z;function h(e){let{components:a}=e,t=(0,n.Z)(e,s);return(0,o.kt)(k,Object.assign({},b,t,{components:a,mdxType:"MDXLayout"}),(0,o.kt)(d,{mdxType:"PageDescription"},(0,o.kt)("p",null,"Loading patterns are used when information takes an extended amount of time to\nprocess and appear on-screen. Skeleton states and the loading component are two\nvisual indicators that communicate that data is loading and that the screen is\nnot frozen.")),(0,o.kt)(c,{mdxType:"AnchorLinks"},(0,o.kt)(p,{mdxType:"AnchorLink"},"Overview"),(0,o.kt)(p,{mdxType:"AnchorLink"},"Skeleton states"),(0,o.kt)(p,{mdxType:"AnchorLink"},"Loading indicators"),(0,o.kt)(p,{mdxType:"AnchorLink"},"Progressive loading"),(0,o.kt)(p,{mdxType:"AnchorLink"},"Load more options"),(0,o.kt)(p,{mdxType:"AnchorLink"},"Accessibility"),(0,o.kt)(p,{mdxType:"AnchorLink"},"Related"),(0,o.kt)(p,{mdxType:"AnchorLink"},"References"),(0,o.kt)(p,{mdxType:"AnchorLink"},"Feedback")),(0,o.kt)("h2",null,"Overview"),(0,o.kt)("p",null,"Loading strategies assure users that their request is in progress and can create\nthe illusion of shorter load times in apps. According to\n",(0,o.kt)("a",{parentName:"p",href:"https://www.nngroup.com/articles/progress-indicators/"},"research")," conducted by\nthe Nielsen Norman Group, skeleton states and other loading indicators improve\nuser satisfaction."),(0,o.kt)("p",null,"In this pattern, we will look at skeleton states, loading indicators, and\nprogressive loading."),(0,o.kt)("h2",null,"Skeleton states"),(0,o.kt)("p",null,"Skeleton states are simplified versions of components used on an initial page\nload to indicate that the information on the page has not fully loaded yet. They\nshould only appear for only a few seconds, disappearing once components and\ncontent populate the page."),(0,o.kt)(g,{mdxType:"Row"},(0,o.kt)(m,{colLg:8,mdxType:"Column"},(0,o.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,o.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.77777777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAA8ElEQVQoz7WOTUrEQBBG60aewIV38BZDRFDQSyiiuBARz5Tq/6zT6f1HtQMjGOkmGYzOxqCLR72qrvpo0lpT27Z7Sq+UIudchZnJWrtwY0x1732tpS8eQqDSHDHzJTNvmLkxxjRa68Z7X1FKNc65hVtrq4cQSt1Yay9CCMdd1xHFGK/7vh9nYoyVYRgqZXbIy05Kab+fUnpOKRGJSJNzHnPObznnnYgs+Do75OVOREYRuRERIgDnAEYAOwAfK3if7u8A/AgcV/D/gWfTYDs9/pbtdH87B16t/Nl3nubAEwCvAO4BPK7gAcALgNM58E/5BAEF7yHScM32AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,o.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of a text skeleton state in a data table",title:"Example of a text skeleton state in a data table",src:"/static/ec100e031656d56f575259c0711c1973/3cbba/skeleton.png",srcSet:["/static/ec100e031656d56f575259c0711c1973/7fc1e/skeleton.png 288w","/static/ec100e031656d56f575259c0711c1973/a5df1/skeleton.png 576w","/static/ec100e031656d56f575259c0711c1973/3cbba/skeleton.png 1152w","/static/ec100e031656d56f575259c0711c1973/0b124/skeleton.png 1728w","/static/ec100e031656d56f575259c0711c1973/99571/skeleton.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,o.kt)(u,{mdxType:"Caption"},"Example of a skeleton state"))),(0,o.kt)("p",null,"Skeleton states use motion to convey that the page is not stuck and that data is\nstill being loaded. This can help to\n",(0,o.kt)("a",{parentName:"p",href:"https://www.nngroup.com/articles/progress-indicators/"},"reduce user uncertainty"),"."),(0,o.kt)("p",null,"Only use skeleton states on container-based components like tiles and structured\nlists or data-based components like data tables and cards. In most cases, action\ncomponents (e.g. buttons, input fields, checkboxes, toggles) do not need to have\na skeleton state."),(0,o.kt)("p",null,"Never represent toast notifications, overflow menus, dropdown items, modals, and\nloaders with skeleton states. Elements inside a modal may have a skeleton state,\nbut the modal itself should not."),(0,o.kt)("h2",null,"Loading indicators"),(0,o.kt)("p",null,"Loading indicators signal a user action is processing. Unlike progress bars,\nloading indicators only signal that loading is occurring and do not give any\nindication of progress. If a process will take more than a moment or two to\ncomplete, use a progress indicator instead."),(0,o.kt)("p",null,"Full-screen loading indicators tell a user the entire application is processing,\nwhile inline indicators show that a specific selection or action is processing."),(0,o.kt)("h3",null,"Full-screen loading"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/components/loading/usage"},"loading component")," should be used when the\nentire page is processing. This is often applied after data is submitted or\nsaved by the user."),(0,o.kt)("p",null,"If the process is going to take more than a few minutes, consider including a\n",(0,o.kt)("a",{parentName:"p",href:"/patterns/notification-pattern"},"notification"),"."),(0,o.kt)(g,{mdxType:"Row"},(0,o.kt)(m,{colLg:8,mdxType:"Column"},(0,o.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,o.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"76.38888888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAAsSAAALEgHS3X78AAAB90lEQVQ4y52TzW7aQBCA9zH6BFYeICcLCYQEFrf2AMccyo22aVOpl4gY/+zu7NhAEXeatoGWS8o1j5WDD1GseKpZliptRRV6+DS7Y8+369m16Ha7otVqHddqtZ7v+899339xIFzDtce+7wvR6/VEEATXnU6Hms0m1et1ajQaW+y4bmP9HwRBQO12+5pdIs9zYYz5ioiEiHfGYCmlKjVAaTArec4g7uWOa9kxmUyEAACRpulSSklSyjJNJQ0vRjSKEroYxTQMY4rihKIoojiOyb33mJIjO9jFuxNSyqVSipRSZZqmlCQxaa0dyhXa57/gnIuli0t2/SV0q1kZ52yUiWW3yMHCnYjHHM+Tj3SeTH/71J30ScIwDG2/tjlJH6I5vQoXlEqwc/nUHe4azACAxYCiUZrRSI7JgLa5/+qhFSvuF/cwPbiHVy55r7WuELMqy7Ca5lBNc11JKSutoQLYopSyOY5KqXtXe/VYuHIH8DAcDqnff0mD16d0cmro5A0Q302+Pn9eG8eDiysrREQWLtzJ3oZhWAwGg+Ltu/dF/wyK/pkupFSFUnu5dQss2CXG4zHv8hkiHgGAN5/Pvc1m462/Lb2blfZuVuDlGXoG0cP9HLGDXTuh3Sn/OrPZTHxfr8WXz5/Ej0stNpcgsgyFMWjf2Qc7WPgTdpqLabG4+DoAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,o.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of a progress indicator in an application",title:"Example of a progress indicator in an application",src:"/static/b0657cce1eef0389ace2ae0afb6df9e9/3cbba/larger-loader.png",srcSet:["/static/b0657cce1eef0389ace2ae0afb6df9e9/7fc1e/larger-loader.png 288w","/static/b0657cce1eef0389ace2ae0afb6df9e9/a5df1/larger-loader.png 576w","/static/b0657cce1eef0389ace2ae0afb6df9e9/3cbba/larger-loader.png 1152w","/static/b0657cce1eef0389ace2ae0afb6df9e9/0b124/larger-loader.png 1728w","/static/b0657cce1eef0389ace2ae0afb6df9e9/99571/larger-loader.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,o.kt)(u,{mdxType:"Caption"},"Example of a progress indicator in an application"))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"When to use"),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"An action temporarily disables the application")),(0,o.kt)("td",{parentName:"tr",align:null},"If a user’s action temporarily disables the application while processing occurs, use a loading indicator and a full-screen overlay.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"Processing takes more than a few seconds")),(0,o.kt)("td",{parentName:"tr",align:null},"If a loading process will require the application’s full resources and will take longer than a moment or two, use a full-screen loading indicator.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"Data from user input is being saved or submitted")),(0,o.kt)("td",{parentName:"tr",align:null},"Saving data following with user input often takes a few moments. Using a loading indicator allows the application to finish processing before allowing the user to continue.")))),(0,o.kt)("h3",null,"Inline loading"),(0,o.kt)("p",null,"Use the inline loading component when a single component is processing. For\nexample, when an administrator invites a user, an inline loading component\nindicates the system is processing the invite request."),(0,o.kt)(g,{mdxType:"Row"},(0,o.kt)(m,{colLg:8,mdxType:"Column"},(0,o.kt)("img",{src:"/a12da714d1543a1ebf216983682adb8d/inline-loading-animated.gif",alt:"Example of an inline loading indicator"}),(0,o.kt)(u,{mdxType:"Caption"},"Example of an inline loading indicator"))),(0,o.kt)("h2",null,"Progressive loading"),(0,o.kt)("p",null,"Progressive loading is a technique that loads pages in batches. The simplest\nview of the page loads first, followed by progressively more detailed batches\nuntil the entire viewport has loaded."),(0,o.kt)("p",null,"The primary batch should show a page’s basic structure (the skeleton state\nversions of the container-based components), data-based text (the skeleton state\nversion of text) and non-data text. Following batches can include images,\ncontent outside of the viewport, interactive (action-based) components, and\ndata-based text."),(0,o.kt)("p",null,"Not all items need a skeleton state and instead can be expressed as negative or\nwhite space until they load. For example, a 600 x 600px image can be shown as a\n600 x 600px area of white space until the full image loads."),(0,o.kt)(g,{mdxType:"Row"},(0,o.kt)(m,{colLg:4,mdxType:"Column"},(0,o.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,o.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"64.93055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAABp0lEQVQ4y52SwU7bQBCGh4NJIb7maCfxLbc8Qk68QN+BB8CiwsYWPvXQNyC50sK1AuVSITj0BXqsihBCxA6Jouw6G29ixx60eBNSVUh1Rvr0z8xKv/RrB5rNJlQqFVBVFUql0j8oivIu29sK7H5QoLyjgFreBbW8swWtVgsajcZHwzBsXdcPqtWqqeu6uVRN095F1zXTqGkHRk1zjHptz6hXAdrtNnie99PzPLRtG13XRcdxVmpZ1ut+HUvqkWWjeWih+clGxz05t45dAEQUXGJeHBHj/2WCGH++xujLDeKvZzz9cYcAo9EIhsNhNwgC7Pf7idAlvu+vdEk+i3cfn3oB/r734z8PAfaCQeexNwCI4xgIId3xeIyEkIQQIhTFLHerfjkT2VNKcELH8SQkou+ElOSROeddGTnB4iXiY8R5Zz6f54ZRFHXTNMU0TROpRYiFTqfTzmw2ezPMsgyzLEukFuHVMIqivwyv5ONMmhaBS8P2uuHtBlFXLBYLEfmMc54bUkqPGGPfGWPfGGMXBfk6YeyKUrofhmFuKE5HHvjGiB9OkgReAM5ZGjZHEhnnAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,o.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"First phase of a dashboard using skeleton states to demonstrate progressive loading",title:"First phase of a dashboard using skeleton states to demonstrate progressive loading",src:"/static/7a6a74b4dd24381bd15edbea45d54fe8/3cbba/prog-loading-1.png",srcSet:["/static/7a6a74b4dd24381bd15edbea45d54fe8/7fc1e/prog-loading-1.png 288w","/static/7a6a74b4dd24381bd15edbea45d54fe8/a5df1/prog-loading-1.png 576w","/static/7a6a74b4dd24381bd15edbea45d54fe8/3cbba/prog-loading-1.png 1152w","/static/7a6a74b4dd24381bd15edbea45d54fe8/0b124/prog-loading-1.png 1728w","/static/7a6a74b4dd24381bd15edbea45d54fe8/99571/prog-loading-1.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,o.kt)(u,{mdxType:"Caption"},"Phases of progressive loading")),(0,o.kt)(m,{colLg:4,mdxType:"Column"},(0,o.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,o.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"64.93055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAABq0lEQVQ4y7WSTWrbQBSAXxaKnVhbLyU5WnrnK3jRC/QOOUBES6RKVKtCb+DW2/5kGxq8CIR20Qt0WQjF1NaMLQkHOWPJHll6RSMptIuUOJAHH++XDwYGer0etNttkGUZGo0GNJtNkWskSbqX/X0JDpsStA4kkFuHILcO9qDf70O3232u67qladqJpmmGqqpGnRVFuRdVVQy9o5zoHcXWjzrP9CMNYDAYgOu6313XRcuy0LZtdBxHUNSmaYp5QV2bZtmfmhYaL0w0XlpoO68/m68cAEQs+IJlJIjIH8otIn9zhfHbr4g/5vju8hoBgiAA3/dHlFKklKaz2QwLql7UhBCB53liRsSOoEco/vxF+PV4hh4Nhr89H2A8HkMYhqPpdHonDIJAiCaTCc7n8ztZdSPwCCnvqMcXoY83N4vhYhGWT06SZJTnOeZ5nha5jmqG/4sckWdZjnEcD9frdSmM4/gf4Y7wLMueXnhRLdeVdBeSSvj+b+G3YvhYttstrlarD0mSlMIoik4ZY+eMsU+MsbMd+XjL2EUURcfL5bIUcs7rD/5oNpsNpGkKfwA0oBhOLQFmggAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,o.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Second phase of a dashboard using skeleton states to demonstrate progressive loading",title:"Second phase of a dashboard using skeleton states to demonstrate progressive loading",src:"/static/9a230a4bba16bef5fa9fff55c0702f5a/3cbba/prog-loading-2.png",srcSet:["/static/9a230a4bba16bef5fa9fff55c0702f5a/7fc1e/prog-loading-2.png 288w","/static/9a230a4bba16bef5fa9fff55c0702f5a/a5df1/prog-loading-2.png 576w","/static/9a230a4bba16bef5fa9fff55c0702f5a/3cbba/prog-loading-2.png 1152w","/static/9a230a4bba16bef5fa9fff55c0702f5a/0b124/prog-loading-2.png 1728w","/static/9a230a4bba16bef5fa9fff55c0702f5a/99571/prog-loading-2.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    ")),(0,o.kt)(m,{colLg:4,mdxType:"Column"},(0,o.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,o.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"64.93055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAAB3UlEQVQ4y52STW7TQBSAHws3aeNtlo5TL7PLFbLgAtyBAzQC1SZRvULiBoFs+ekWUWWBhGDBBVgiVQSR2E7qKJXjGY8zY/uhGdehElQEnvTp/czos59l6Ha70Gw2Qdd1qNVqUK/XVa7QNO1ODg40OKpr0DjUQG8cgd44vAe9Xg86nc4Dy7Ic0zRPTNPst1qtfpUNw7iTVsvoW23jxGobA+u4fd86NgFGoxG4rvvZdV10HAcHgwEOh0OFrG3bVnNJVdt22Z/aDvYf2dh/7OBgePbGfjIEQETJOyyDISLflxiRP/2AybOPiF+W+Pz9JQKsVisIw3ASBAEGQSAWiwVKbnpV+76v8DxPzXx15qPnB/j1m88vvy/QC8LxD+8KYDqdSulkNpvthGEYKpGcLZfLnWw+n+8e5Pl+eS/w+Hp1hdfX6/F6vSpXTpJkkqYpcs5FURRYhaxv93+KApHneYFJkozTNP0lZIwhIUQIIZQkz/Od8C9wefc3YZIkyBgT8vD22/2v8EKunGVZmue5yLJMrr4v7Eb4YieklH6ilGIcx/JAfku18r5kWYaU0peMsVIYRdEpIeRtHMevCSHnlNJzmffkVUzIRRRFDzebTSnknKtcFEX1o/8z2+0WhBDwE77eF0a7deBtAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,o.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Third phase of a dashboard using skeleton states to demonstrate progressive loading",title:"Third phase of a dashboard using skeleton states to demonstrate progressive loading",src:"/static/46c774ab268cba8b512d2f0d7261446c/3cbba/prog-loading-3.png",srcSet:["/static/46c774ab268cba8b512d2f0d7261446c/7fc1e/prog-loading-3.png 288w","/static/46c774ab268cba8b512d2f0d7261446c/a5df1/prog-loading-3.png 576w","/static/46c774ab268cba8b512d2f0d7261446c/3cbba/prog-loading-3.png 1152w","/static/46c774ab268cba8b512d2f0d7261446c/0b124/prog-loading-3.png 1728w","/static/46c774ab268cba8b512d2f0d7261446c/99571/prog-loading-3.png 2240w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,o.kt)("br",null),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"When to use"),(0,o.kt)("th",{parentName:"tr",align:null}))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"A page view is slow to load")),(0,o.kt)("td",{parentName:"tr",align:null},"Pages that source data from multiple sources, such as dashboards, and can be slow to load.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("em",{parentName:"td"},"A user changes filters or facets in a table view")),(0,o.kt)("td",{parentName:"tr",align:null},"Tables may be sourcing information from large data sets and so processing may take a few moments.")))),(0,o.kt)("h2",null,"Load more options"),(0,o.kt)("p",null,"A Load more option can be used to extend a list where only a small fraction of\noptions are displayed. It can also be used in cases where the list of options is\npopulated via a database. Using Load more allows the data to load in progressive\nbatches."),(0,o.kt)(g,{mdxType:"Row"},(0,o.kt)(m,{colLg:8,mdxType:"Column"},(0,o.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,o.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.861111111111114%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAACdUlEQVQoz0WSy27TQBSGT2wJsazCCyBWbCgta96AdQtSl0h0wauxALFC6rJqkXJxfJ2xPbbr+DLOeNzETklI6jJo3BAWn85I/vQfjecHXddBgjHuWZal2LatOI6jEEIUz/MU3/eBEALT6RQQQnsHY7x35HeJdOHi4qJjMpnA1dUVXF9fw2AwANd1wbZtGdKdGWMwGo06R6Jp2t7xPK8DYwxweXnZYZrm8+FweDwcDg81TXvted4hQugYY9yXcp7nqq7rLweDwZF0DMM4dF33teM40n0qHbkAxuOxIjdjjL8YhiFM01w5jrOJomhFCBGEkI9RFEFRFAeO47g7Z40xls6GENKGYfgqDEMIgkABIUSvbVsoy/I7Y0zUdf3QNE0367oWnPPz+XwOlNI+Y+yGcy6apvmzczoopcecc+CcK7Ddbnur1Vr+o29Zlov5YrFtmkaGyimqqjqv6xoqzvtFUQSUUhlyv3O65ZTSo6qqHgPb+03v9/oXlIx9pXkm6nqxaZbLtmmazS7wkwzkvOrPZgWZzahYdsuW7XLZsQ+sqkqBuwfRq7cCKLv9EdOFoOXjNRa765Rl+fm24pBG6BmJ0gKRXMRJLoqCijRNRZIkIoqiN2maQhzHCtzdC2g2AuJp9jZKZmdxQk8opaeUdvMsjuMX0/gGJqOfTwwLvdMM94NpoxPXxae6rp+ORqP3tm0fyBc2DANgsRFwuxYwTQsIEg5xyrrO/UNuzrOkh8wB6JYLQ90Hy3GB+L6sWtdH2VVZbMuyAFohYPsgIMsLJaVMzQumMvafLMt6WZaCqY8Bu76K3ED1fKKGYaAihFTLslRZ6CAIuuC/OKCHSO0VHNMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,o.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of Load more",title:"Example of Load more",src:"/static/2222cb53459d13f190a04782ab1c1d4e/3cbba/load-more.png",srcSet:["/static/2222cb53459d13f190a04782ab1c1d4e/7fc1e/load-more.png 288w","/static/2222cb53459d13f190a04782ab1c1d4e/a5df1/load-more.png 576w","/static/2222cb53459d13f190a04782ab1c1d4e/3cbba/load-more.png 1152w","/static/2222cb53459d13f190a04782ab1c1d4e/392b1/load-more.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "),(0,o.kt)(u,{mdxType:"Caption"},"Example of Load more"))),(0,o.kt)("h2",null,"Accessibility"),(0,o.kt)("p",null,"A screen reader should\n",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/WAI/GL/wiki/Notification_of_Loading/Busy"},"notify a user")," if\nan application is loading, busy, gets stuck, or if a process fails."),(0,o.kt)("p",null,"For specific loading accessibility concerns, see the WCAG documentation for\n",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/WAI/GL/wiki/Notification_of_Loading/Busy"},"Notification of Loading/Busy"),"\nand adhere to accessibility guidelines for the\n",(0,o.kt)("a",{parentName:"p",href:"/components/loading/accessibility"},"loading component"),"."),(0,o.kt)("h2",null,"Related"),(0,o.kt)(g,{mdxType:"Row"},(0,o.kt)(m,{colSm:2,colMd:2,colLg:3,mdxType:"Column"},(0,o.kt)("h4",null,"Components"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/components/data-table/usage"},"Data table")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/components/loading/usage"},"Loading")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/components/pagination/usage"},"Pagination")))),(0,o.kt)(m,{colSm:2,colMd:2,colLg:3,mdxType:"Column"},(0,o.kt)("h4",null,"Patterns"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/patterns/empty-states-pattern"},"Empty states")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/patterns/forms-pattern"},"Forms")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/patterns/notification-pattern"},"Notifications"))))),(0,o.kt)("h2",null,"References"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bill Chung,\n",(0,o.kt)("a",{parentName:"li",href:"https://uxdesign.cc/what-you-should-know-about-skeleton-screens-a820c45a571a"},"Everything you need to know about skeleton states"),"\n(Medium UX Collective, 2018)"),(0,o.kt)("li",{parentName:"ul"},"Jakob Nielsen,\n",(0,o.kt)("a",{parentName:"li",href:"https://www.nngroup.com/articles/progress-indicators/"},"Progress Indicators Make a Slow System Less Insufferable"),"\n(Nielsen Norman Group, 2001)"),(0,o.kt)("li",{parentName:"ul"},"Web Content Accessibility Guidelines,\n",(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/WAI/GL/wiki/Notification_of_Loading/Busy"},"Notification of Loading/Busy"),"\n(W3C, 2016)")),(0,o.kt)("h2",null,"Feedback"),(0,o.kt)("p",null,"Help us improve this pattern by providing feedback, asking questions, and\nleaving any other comments\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-website/issues/new?assignees=&labels=feedback&template=feedback.md"},"on GitHub"),"."))}h.isMDXComponent=!0}}]);