"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[8342],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>k});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},c="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),c=d(n),u=r,k=c["".concat(p,".").concat(u)]||c[u]||s[u]||l;return n?a.createElement(k,o(o({ref:e},m),{},{components:n})):a.createElement(k,o({ref:e},m))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[c]="string"==typeof t?t:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2892:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const l={id:"button",title:"Button",sidebar_label:"Button",original_id:"button"},o=void 0,i={unversionedId:"components/desktop/button",id:"components/desktop/button",title:"Button",description:"Overview",source:"@site/docs/components/desktop/button.md",sourceDirName:"components/desktop",slug:"/components/desktop/button",permalink:"/docv2/ja/docs/next/components/desktop/button",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/components/desktop/button.md",tags:[],version:"current",frontMatter:{id:"button",title:"Button",sidebar_label:"Button",original_id:"button"},sidebar:"tutorialSidebar",next:{title:"Checkbox",permalink:"/docv2/ja/docs/next/components/desktop/checkbox"}},p={},d=[{value:"Overview",id:"overview",level:2},{value:"Specification",id:"specification",level:2},{value:"Property",id:"property",level:3},{value:"Event",id:"event",level:3},{value:"Constructor",id:"constructor",level:3},{value:"Parameter",id:"parameter",level:4},{value:"Sample Code",id:"sample-code",level:2}],m={toc:d};function c(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"overview"},"Overview"),(0,r.kt)("p",null,"The Button component allows the user to create and display buttons."),(0,r.kt)("div",{class:"sample-container",id:"button"},(0,r.kt)("div",{id:"sample-container__components"})),(0,r.kt)("script",{src:"/js/samples/desktop/button.js"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"specification"},"Specification"),(0,r.kt)("h3",{id:"property"},"Property"),(0,r.kt)("p",null,"Here is a list of properties that can be used for modifying the component:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"className"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Component class name"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"id"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Component id name"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"text"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'""'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Text to be displayed inside the button"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"string"),(0,r.kt)("td",{parentName:"tr",align:"left"},'"normal"'),(0,r.kt)("td",{parentName:"tr",align:"left"},"Button design type"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Available options:",(0,r.kt)("br",null),'"normal" : Gray (#f7f9fA)',(0,r.kt)("br",null),'"submit" : Blue (#3498db)',(0,r.kt)("br",null),'"alert" : Red (#e74c3c)')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"disabled"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Enable/Disable the component"),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"visible"),(0,r.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,r.kt)("td",{parentName:"tr",align:"left"},"true"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Show/Hide the component"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("h3",{id:"event"},"Event"),(0,r.kt)("p",null,"Here is a list of events that can be specified:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"click"),(0,r.kt)("td",{parentName:"tr",align:"left"},"function"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Event handler when clicked"),(0,r.kt)("td",{parentName:"tr",align:"left"},"It will pass the event object as the argument")))),(0,r.kt)("h3",{id:"constructor"},"Constructor"),(0,r.kt)("p",null,"Button(options)",(0,r.kt)("br",null),"\nHere is a list of available constructors:"),(0,r.kt)("h4",{id:"parameter"},"Parameter"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"options"),(0,r.kt)("td",{parentName:"tr",align:"left"},"object"),(0,r.kt)("td",{parentName:"tr",align:"left"},"{}"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Object that includes component properties"),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"sample-code"},"Sample Code"),(0,r.kt)("p",null,"Here is a sample code when all parameters are specified:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"const header = kintone.app.getHeaderMenuSpaceElement();\nconst button = new Kuc.Button({\n    text: 'Submit',\n    type: 'submit',\n    className: 'options-class',\n    id: 'options-id',\n    visible: true,\n    disabled: false\n});\nheader.appendChild(button);\n\nbutton.addEventListener('click', event => {\n  console.log(event);\n});\n")))}c.isMDXComponent=!0}}]);