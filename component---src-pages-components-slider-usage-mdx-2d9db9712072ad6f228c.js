"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[41161],{28399:function(e,t,a){a.d(t,{Z:function(){return E}});var n=a(67294),l=a(88650),s=a.n(l),i=a(1597),r=a(64905),o=a(81151),d=a(75900),c=a.n(d);var m=e=>{let{title:t,theme:a,tabs:l=[]}=e;return n.createElement("div",{className:c()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":l.length,"PageHeader-module--dark-mode--WCeH8":"dark"===a})},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12"},n.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var p=e=>{let{relativePagePath:t,repository:a}=e;const{site:{siteMetadata:{repository:l}}}=(0,i.useStaticQuery)("1364590287"),{baseUrl:s,subDirectory:r,branch:o}=a||l,d=`${s}/edit/${o}${r}/src/pages${t}`;return s?n.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},n.createElement("div",{className:"cds--col"},n.createElement("a",{className:"EditLink-module--link--IDrl1",href:d},"Edit this page on GitHub"))):null},u=a(56328),h=a(51721);let g=function(e){function t(){return e.apply(this,arguments)||this}return(0,h.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:a}=this.props,l=a.split("/").filter(Boolean).slice(-1)[0],r=t.map((e=>{const t=s()(e,{lower:!0,strict:!0}),r=t===l,o=new RegExp(`${l}/?(#.*)?$`),d=a.replace(o,t);return n.createElement("li",{key:e,className:c()({"PageTabs-module--selected-item--aBB0K":r},"PageTabs-module--list-item--024o6")},n.createElement(i.Link,{className:"PageTabs-module--link--Kz-7R",to:`${d}`},e))}));return n.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},n.createElement("div",{className:"cds--grid"},n.createElement("div",{className:"cds--row"},n.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},n.createElement("nav",{"aria-label":e},n.createElement("ul",{className:"PageTabs-module--list--xLqxG"},r))))))},t}(n.Component);var b=g,k=a(17680),f=a(75387),y=a(50041);var v=e=>{let{date:t}=e;const a=new Date(t);return t?n.createElement(y.X2,{className:"last-modified-date-module--row--XJoYQ"},n.createElement(y.sg,null,n.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var E=e=>{let{pageContext:t,children:a,location:l,Title:d}=e;const{frontmatter:c={},relativePagePath:h,titleType:g}=t,{tabs:y,title:E,theme:A,description:w,keywords:x,date:N}=c,{interiorTheme:T}=(0,f.Z)(),{site:{pathPrefix:C}}=(0,i.useStaticQuery)("2456312558"),L=C?l.pathname.replace(C,""):l.pathname,P=y?L.split("/").filter(Boolean).slice(-1)[0]||s()(y[0],{lower:!0}):"",B=A||T;return n.createElement(o.Z,{tabs:y,homepage:!1,theme:B,pageTitle:E,pageDescription:w,pageKeywords:x,titleType:g},n.createElement(m,{title:d?n.createElement(d,null):E,label:"label",tabs:y,theme:B}),y&&n.createElement(b,{title:E,slug:L,tabs:y,currentTab:P}),n.createElement(k.Z,{padded:!0},a,n.createElement(p,{relativePagePath:h}),n.createElement(v,{date:N})),n.createElement(u.Z,{pageContext:t,location:l,slug:L,tabs:y,currentTab:P}),n.createElement(r.Z,null))}},2675:function(e,t,a){a.r(t),a.d(t,{_frontmatter:function(){return r},default:function(){return f}});var n=a(45987),l=(a(67294),a(64983)),s=a(28399);const i=["components"],r={},o=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,l.kt)("div",t)},d=o("PageDescription"),c=o("AnchorLinks"),m=o("AnchorLink"),p=o("Row"),u=o("Column"),h=o("ComponentDemo"),g=o("ComponentVariant"),b={_frontmatter:r},k=s.Z;function f(e){let{components:t}=e,a=(0,n.Z)(e,i);return(0,l.kt)(k,Object.assign({},b,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(d,{mdxType:"PageDescription"},(0,l.kt)("p",null,"Sliders provide a visual indication of adjustable content, where the user can\nincrease or decrease the value by moving the handle along a horizontal track.")),(0,l.kt)(c,{mdxType:"AnchorLinks"},(0,l.kt)(m,{mdxType:"AnchorLink"},"Overview"),(0,l.kt)(m,{mdxType:"AnchorLink"},"Live demo"),(0,l.kt)(m,{mdxType:"AnchorLink"},"Interactions"),(0,l.kt)(m,{mdxType:"AnchorLink"},"Best practices"),(0,l.kt)(m,{mdxType:"AnchorLink"},"Feedback")),(0,l.kt)("h2",null,"Overview"),(0,l.kt)("p",null,"The slider in its basic form should be accompanied by a label and a number input\nthat doubles as a display for the slider’s current value."),(0,l.kt)("p",null,"The basic slider does ",(0,l.kt)("strong",{parentName:"p"},"not")," include discrete values, as the slider represents\na percentage of 0-100. In this case it is not necessary for a user to choose a\nspecific value, but instead generally increase or decrease an input. For\nexample, the user increases the slider amount and the volume of the music gets\nlouder."),(0,l.kt)("p",null,"The more complex versions should be used for selecting a specific value within a\nvalue range."),(0,l.kt)(p,{mdxType:"Row"},(0,l.kt)(u,{colLg:8,mdxType:"Column"},(0,l.kt)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",(0,l.kt)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"29.86111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAGCAYAAADDl76dAAAACXBIWXMAAAsSAAALEgHS3X78AAABTElEQVQY02WRv4rCQBDGPy96hZfjmvMPmlRW8QV8gGvTCAENqCDYCb5Gdsl2YqWFJuBzpAwpfYPrJNEYRawEjx3Og3ADw3w7w/7YbwcA8Hg8MBqN0O/3MZlMZAu9Xg+e54ExBiEEOOfYbrc02+12SNP05XQ6FY7Ho9T4F7PZDIPBAI7j0FnC1+t1DrjZbGgWBAEOhwOB4jiGhObCMAx0u11YlgXTNN86nc6Hbdul1WqlMMYUIYTCOVd83y8CKERRpKZp+pVlmfELLuSA1WoVrVaLdL1eLzWbTc2yrE/P88qMMVUIoXLOVd/33wEUwzA04jj+TpLE3e/38pVKDlipVNBut6FpGqWu6xgOh1gul2T1aXmxWGA8HtOd6/X6miSJcr/fcblc8pZrtRrZbjQaBJMpl/QEuq5LdT6fYzqd0hLP5zP94+12Q5Zlf7AfyU+hF1LUy1sAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",(0,l.kt)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Example of volume slider",title:"Example of volume slider",src:"/static/8784e6dc23427701fbddf67e0f84b009/3cbba/slider-usage-1.png",srcSet:["/static/8784e6dc23427701fbddf67e0f84b009/7fc1e/slider-usage-1.png 288w","/static/8784e6dc23427701fbddf67e0f84b009/a5df1/slider-usage-1.png 576w","/static/8784e6dc23427701fbddf67e0f84b009/3cbba/slider-usage-1.png 1152w","/static/8784e6dc23427701fbddf67e0f84b009/392b1/slider-usage-1.png 1472w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy",decoding:"async"}),"\n    "))),(0,l.kt)("h2",null,"Live demo"),(0,l.kt)(h,{components:[{id:"slider",label:"Slider"}],mdxType:"ComponentDemo"},(0,l.kt)(g,{id:"slider",knobs:{Slider:["disabled","hideTextInput","light"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-slider--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-slider--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvslider--default","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-slider--default"},mdxType:"ComponentVariant"},'\n  <div className="some-container">\n<Slider\n  ariaLabelInput="Label for slider value"\n  id="slider"\n  labelText="Slider label"\n  max={100}\n  min={0}\n  step={1}\n  stepMuliplier={4}\n  value={50}\n/>\n</div>\n  ')),(0,l.kt)("h2",null,"Interactions"),(0,l.kt)("h3",null,"Mouse"),(0,l.kt)("p",null,"Users can trigger a value change by clicking anywhere on the horizontal track.\nUsers can also drag the slider handle. Either method repositions the slider and\nautomatically updates the value in the text input."),(0,l.kt)("h3",null,"Keyboard"),(0,l.kt)("p",null,"Users can enter an exact numeric value into the text input field. While in the\ntext field, using the ↑ ↓ ← → arrow keys increments the value in the text input.\nEither method adjusts the slider handle to the corresponding position."),(0,l.kt)("p",null,"With the focus on the slider itself, users can also increment the value using\nthe arrow keys. The arrow keys in combination with the ",(0,l.kt)("inlineCode",{parentName:"p"},"Shift")," key can alter the\nslider by the value of the ",(0,l.kt)("strong",{parentName:"p"},"stepMultiplier"),". ",(0,l.kt)("em",{parentName:"p"},"Example: With ",(0,l.kt)("inlineCode",{parentName:"em"},"stepMultiplier"),"\nset at ",(0,l.kt)("inlineCode",{parentName:"em"},"10"),", typing ",(0,l.kt)("inlineCode",{parentName:"em"},"Shift")," + ",(0,l.kt)("inlineCode",{parentName:"em"},"→")," changes the value from 60 to 70, increasing\nthe inputted value by 10 units.")),(0,l.kt)(p,{mdxType:"Row"},(0,l.kt)(u,{colLg:8,mdxType:"Column"},(0,l.kt)("img",{src:"/2a96fbaab3ebd3b9be282abfd9df91a1/slider-usage-animation-1.gif",alt:"slider interaction"}))),(0,l.kt)("h2",null,"Best practices"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"The slider label should indicate what value the slider is changing."),(0,l.kt)("li",{parentName:"ul"},"Range values are used to describe the range in numbers."),(0,l.kt)("li",{parentName:"ul"},"Do not use for ranges that are extremely large ",(0,l.kt)("em",{parentName:"li"},"i.e. 1-1000"),"."),(0,l.kt)("li",{parentName:"ul"},"Do not use for ranges that are too small ",(0,l.kt)("em",{parentName:"li"},"i.e. 1-3"),".")),(0,l.kt)("h2",null,"Feedback"),(0,l.kt)("p",null,"Help us improve this component by providing feedback, asking questions, and\nleaving any other comments on\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon-website/issues/new?assignees=&labels=feedback&template=feedback.md"},"GitHub"),"."))}f.isMDXComponent=!0}}]);