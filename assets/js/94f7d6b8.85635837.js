"use strict";(self.webpackChunkdocument=self.webpackChunkdocument||[]).push([[8469],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),c=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=c(t.components);return r.createElement(p.Provider,{value:e},t.children)},d="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,p=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),d=c(n),u=a,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||i;return n?r.createElement(f,o(o({ref:e},s),{},{components:n})):r.createElement(f,o({ref:e},s))}));function f(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var p in e)hasOwnProperty.call(e,p)&&(l[p]=e[p]);l.originalType=t,l[d]="string"==typeof t?t:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9926:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={id:"notification",title:"Notification",sidebar_label:"Notification",original_id:"notification"},o=void 0,l={unversionedId:"components/desktop/notification",id:"version-1.0.1/components/desktop/notification",title:"Notification",description:"Overview",source:"@site/versioned_docs/version-1.0.1/components/desktop/notification.md",sourceDirName:"components/desktop",slug:"/components/desktop/notification",permalink:"/docv2/docs/components/desktop/notification",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0.1/components/desktop/notification.md",tags:[],version:"1.0.1",frontMatter:{id:"notification",title:"Notification",sidebar_label:"Notification",original_id:"notification"},sidebar:"version-1.0.1-docs",previous:{title:"MultiChoice",permalink:"/docv2/docs/components/desktop/multichoice"},next:{title:"RadioButton",permalink:"/docv2/docs/components/desktop/radio-button"}},p={},c=[{value:"Overview",id:"overview",level:2},{value:"Specification",id:"specification",level:2},{value:"Property",id:"property",level:3},{value:"Constructor",id:"constructor",level:3},{value:"Parameter",id:"parameter",level:4},{value:"Method",id:"method",level:3},{value:"open()",id:"open",level:4},{value:"Parameter",id:"parameter-1",level:5},{value:"Return",id:"return",level:5},{value:"close()",id:"close",level:4},{value:"Parameter",id:"parameter-2",level:5},{value:"Return",id:"return-1",level:5},{value:"Sample Code",id:"sample-code",level:2}],s={toc:c};function d(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The Notification component allows the user to display pop-up notifications."),(0,a.kt)("div",{class:"sample-container",id:"notification"},(0,a.kt)("div",{id:"sample-container__components"},(0,a.kt)("iframe",{id:"iframe",title:"notification",width:"300px",height:"250px"}))),(0,a.kt)("script",{src:"/js/samples/desktop/notification.js"}),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"specification"},"Specification"),(0,a.kt)("h3",{id:"property"},"Property"),(0,a.kt)("p",null,"Here is a list of properties that can be used for modifying the component:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"className"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},'""'),(0,a.kt)("td",{parentName:"tr",align:"left"},"Component class name"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"text"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},'""'),(0,a.kt)("td",{parentName:"tr",align:"left"},"Text to be displayed"),(0,a.kt)("td",{parentName:"tr",align:"left"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"type"),(0,a.kt)("td",{parentName:"tr",align:"left"},"string"),(0,a.kt)("td",{parentName:"tr",align:"left"},'"danger"'),(0,a.kt)("td",{parentName:"tr",align:"left"},"Background color"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Available options:",(0,a.kt)("br",null),'"danger" : Red (#e74c3c)',(0,a.kt)("br",null),'"info" : Blue (#3498db)',(0,a.kt)("br",null),'"success" : Green (#91c36c)')))),(0,a.kt)("h3",{id:"constructor"},"Constructor"),(0,a.kt)("p",null,"Notification(options)",(0,a.kt)("br",null),"\nHere is a list of available constructors:"),(0,a.kt)("h4",{id:"parameter"},"Parameter"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Remark"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"options"),(0,a.kt)("td",{parentName:"tr",align:"left"},"object"),(0,a.kt)("td",{parentName:"tr",align:"left"},"{}"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Object that includes component properties"),(0,a.kt)("td",{parentName:"tr",align:"left"})))),(0,a.kt)("h3",{id:"method"},"Method"),(0,a.kt)("p",null,"Here is a list of available methods:"),(0,a.kt)("h4",{id:"open"},"open()"),(0,a.kt)("p",null,"Show the Notification"),(0,a.kt)("h5",{id:"parameter-1"},"Parameter"),(0,a.kt)("p",null,"none"),(0,a.kt)("h5",{id:"return"},"Return"),(0,a.kt)("p",null,"none"),(0,a.kt)("h4",{id:"close"},"close()"),(0,a.kt)("p",null,"Hide the Notification"),(0,a.kt)("h5",{id:"parameter-2"},"Parameter"),(0,a.kt)("p",null,"none"),(0,a.kt)("h5",{id:"return-1"},"Return"),(0,a.kt)("p",null,"none"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"sample-code"},"Sample Code"),(0,a.kt)("p",null,"Here is a sample code when all parameters are specified:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const notification = new Kuc.Notification({\n  text:  'Error occurred!',\n  type: 'danger',\n  className: 'options-class'\n});\nnotification.open();\nnotification.close();\n")))}d.isMDXComponent=!0}}]);