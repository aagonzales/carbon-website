"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[94421],{28399:function(e,t,n){n.d(t,{Z:function(){return f}});var o=n(67294),a=n(88650),s=n.n(a),l=n(1597),r=n(64905),i=n(81151),c=n(75900),m=n.n(c);var d=e=>{let{title:t,theme:n,tabs:a=[]}=e;return o.createElement("div",{className:m()("PageHeader-module--page-header--NqfPe",{"PageHeader-module--with-tabs--vbQ-W":a.length,"PageHeader-module--dark-mode--WCeH8":"dark"===n})},o.createElement("div",{className:"cds--grid"},o.createElement("div",{className:"cds--row"},o.createElement("div",{className:"cds--col-lg-12"},o.createElement("h1",{id:"page-title",className:"PageHeader-module--text--Er2EO"},t)))))};var p=e=>{let{relativePagePath:t,repository:n}=e;const{site:{siteMetadata:{repository:a}}}=(0,l.useStaticQuery)("1364590287"),{baseUrl:s,subDirectory:r,branch:i}=n||a,c=`${s}/edit/${i}${r}/src/pages${t}`;return s?o.createElement("div",{className:"cds--row EditLink-module--row--BEmSX"},o.createElement("div",{className:"cds--col"},o.createElement("a",{className:"EditLink-module--link--IDrl1",href:c},"Edit this page on GitHub"))):null},u=n(56328),b=n(51721);let h=function(e){function t(){return e.apply(this,arguments)||this}return(0,b.Z)(t,e),t.prototype.render=function(){const{title:e,tabs:t,slug:n}=this.props,a=n.split("/").filter(Boolean).slice(-1)[0],r=t.map((e=>{const t=s()(e,{lower:!0,strict:!0}),r=t===a,i=new RegExp(`${a}/?(#.*)?$`),c=n.replace(i,t);return o.createElement("li",{key:e,className:m()({"PageTabs-module--selected-item--aBB0K":r},"PageTabs-module--list-item--024o6")},o.createElement(l.Link,{className:"PageTabs-module--link--Kz-7R",to:`${c}`},e))}));return o.createElement("div",{className:"PageTabs-module--tabs-container--Cdfzw"},o.createElement("div",{className:"cds--grid"},o.createElement("div",{className:"cds--row"},o.createElement("div",{className:"cds--col-lg-12 cds--col-no-gutter"},o.createElement("nav",{"aria-label":e},o.createElement("ul",{className:"PageTabs-module--list--xLqxG"},r))))))},t}(o.Component);var g=h,y=n(17680),x=n(75387),w=n(50041);var v=e=>{let{date:t}=e;const n=new Date(t);return t?o.createElement(w.X2,{className:"last-modified-date-module--row--XJoYQ"},o.createElement(w.sg,null,o.createElement("div",{className:"last-modified-date-module--text--ogPQF"},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};var f=e=>{let{pageContext:t,children:n,location:a,Title:c}=e;const{frontmatter:m={},relativePagePath:b,titleType:h}=t,{tabs:w,title:f,theme:k,description:C,keywords:T,date:E}=m,{interiorTheme:P}=(0,x.Z)(),{site:{pathPrefix:M}}=(0,l.useStaticQuery)("2456312558"),N=M?a.pathname.replace(M,""):a.pathname,D=w?N.split("/").filter(Boolean).slice(-1)[0]||s()(w[0],{lower:!0}):"",S=k||P;return o.createElement(i.Z,{tabs:w,homepage:!1,theme:S,pageTitle:f,pageDescription:C,pageKeywords:T,titleType:h},o.createElement(d,{title:c?o.createElement(c,null):f,label:"label",tabs:w,theme:S}),w&&o.createElement(g,{title:f,slug:N,tabs:w,currentTab:D}),o.createElement(y.Z,{padded:!0},n,o.createElement(p,{relativePagePath:b}),o.createElement(v,{date:E})),o.createElement(u.Z,{pageContext:t,location:a,slug:N,tabs:w,currentTab:D}),o.createElement(r.Z,null))}},47591:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return i},default:function(){return w}});var o=n(45987),a=(n(67294),n(64983)),s=n(28399),l=n(73281);const r=["components"],i={},c=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",t)},m=c("PageDescription"),d=c("Row"),p=c("Column"),u=c("ResourceCard"),b=c("MdxIcon"),h=c("ComponentDemo"),g=c("ComponentVariant"),y={_frontmatter:i},x=s.Z;function w(e){let{components:t}=e,n=(0,o.Z)(e,r);return(0,a.kt)(x,Object.assign({},y,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)(m,{mdxType:"PageDescription"},(0,a.kt)("p",null,"Preview the dropdown component with the React live demo. For detailed code usage\ndocumentation, see the Storybooks for each framework below.")),(0,a.kt)("h2",null,"Documentation"),(0,a.kt)(d,{className:"resource-card-group",mdxType:"Row"},(0,a.kt)(p,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,a.kt)(u,{subTitle:"React",href:"https://react.carbondesignsystem.com/?path=/story/components-dropdown--default",mdxType:"ResourceCard"},(0,a.kt)(b,{name:"react",mdxType:"MdxIcon"}))),(0,a.kt)(p,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,a.kt)(u,{subTitle:"Angular (Community)",href:"https://angular.carbondesignsystem.com/?path=/story/components-dropdown--basic",mdxType:"ResourceCard"},(0,a.kt)(b,{name:"angular",mdxType:"MdxIcon"}))),(0,a.kt)(p,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,a.kt)(u,{subTitle:"Vue (Community)",href:"http://vue.carbondesignsystem.com/?path=/story/components-cvdropdown--default",mdxType:"ResourceCard"},(0,a.kt)(b,{name:"vue",mdxType:"MdxIcon"}))),(0,a.kt)(p,{colLg:4,colMd:4,noGutterSm:!0,mdxType:"Column"},(0,a.kt)(u,{subTitle:"Web Components (Community)",href:"https://web-components.carbondesignsystem.com/?path=/story/components-dropdown--default",mdxType:"ResourceCard"},(0,a.kt)(b,{name:"webcomponents",mdxType:"MdxIcon"})))),(0,a.kt)("h2",null,"Live demo"),(0,a.kt)(h,{components:[{id:"default-dropdown",label:"Default"},{id:"combo-box",label:"Combo box"},{id:"multiselect",label:"Multiselect"},{id:"filter-multiselect",label:"Filterable multiselect"}],scope:{items:l.Z},mdxType:"ComponentDemo"},(0,a.kt)(g,{id:"default-dropdown",knobs:{Dropdown:["size","disabled","invalid","warn"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-dropdown--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-dropdown--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvdropdown--default","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-dropdown--default"},mdxType:"ComponentVariant"},'\n      <div style={{width: \'300px\', height: \'100px\'}}>\n        <Dropdown\n          ariaLabel="Dropdown"\n          id="carbon-dropdown-example"\n          items={items}\n          label="Dropdown menu options"\n          titleText="Dropdown title"\n        />\n      </div>\n  '),(0,a.kt)(g,{id:"combo-box",knobs:{ComboBox:["size","disabled","invalid","warn"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-combobox--combobox",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-dropdown--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvcombobox--default","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-combo-box--default"},mdxType:"ComponentVariant"},'\n      <div style={{width: \'300px\', height: \'100px\'}}>\n        <ComboBox\n          ariaLabel="ComboBox"\n          id="carbon-combobox-example"\n          items={items}\n          label="Combo box menu options"\n          titleText="Combo box title"\n        />\n      </div>\n  '),(0,a.kt)(g,{id:"multiselect",knobs:{MultiSelect:["size","disabled","invalid","warn"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-multiselect--default",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-dropdown--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvmultiselect--default","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-multi-select--default"},mdxType:"ComponentVariant"},'\n      <div style={{width: \'300px\', height: \'100px\'}}>\n        <MultiSelect\n          ariaLabel="MultiSelect"\n          id="carbon-multiselect-example"\n          items={items}\n          label="Multiselect menu options"\n          titleText="Multiselect title"\n        />\n      </div>\n  '),(0,a.kt)(g,{id:"filter-multiselect",knobs:{FilterableMultiSelect:["size","disabled","invalid","warn"]},links:{React:"https://react.carbondesignsystem.com/?path=/story/components-multiselect--filterable",Angular:"https://angular.carbondesignsystem.com/?path=/story/components-dropdown--basic",Vue:"http://vue.carbondesignsystem.com/?path=/story/components-cvmultiselect--user-filter-and-or-highlight","Web Components":"https://web-components.carbondesignsystem.com/?path=/story/components-multi-select--default"},mdxType:"ComponentVariant"},'\n      <div style={{width: \'300px\', height: \'100px\'}}>\n        <FilterableMultiSelect\n          ariaLabel="Filterable MultiSelect"\n          id="filterable-multiselect-example"\n          items={items}\n          label="Filterable multiselect options"\n          titleText="Filterable multiselect title"\n        />\n      </div>\n ')),(0,a.kt)("h2",null,"Sample data"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const items = [\n  {\n    id: 'option-1',\n    label: 'Option 1',\n  },\n  {\n    id: 'option-2',\n    label: 'Option 2',\n  },\n  {\n    id: 'option-3',\n    label: 'Option 3',\n  },\n  {\n    id: 'option-4',\n    label: 'Option 4',\n  },\n];\n")))}w.isMDXComponent=!0}}]);