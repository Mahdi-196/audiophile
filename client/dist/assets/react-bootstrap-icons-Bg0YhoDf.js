import{r as v,R as n}from"./react-DBNuGw78.js";import{P as o}from"./prop-types-ADYMeEvB.js";var g=["color","size","title","className"];function s(){return s=Object.assign?Object.assign.bind():function(e){for(var l=1;l<arguments.length;l++){var r=arguments[l];for(var t in r)({}).hasOwnProperty.call(r,t)&&(e[t]=r[t])}return e},s.apply(null,arguments)}function h(e,l){if(e==null)return{};var r,t,a=b(e,l);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],l.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}function b(e,l){if(e==null)return{};var r={};for(var t in e)if({}.hasOwnProperty.call(e,t)){if(l.includes(t))continue;r[t]=e[t]}return r}var d=v.forwardRef(function(e,l){var r=e.color,t=r===void 0?"currentColor":r,a=e.size,i=a===void 0?"1em":a,c=e.title,u=c===void 0?null:c,m=e.className,p=m===void 0?"":m,f=h(e,g);return n.createElement("svg",s({ref:l,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",width:i,height:i,fill:t,className:["bi","bi-pencil",p].filter(Boolean).join(" ")},f),u?n.createElement("title",null,u):null,n.createElement("path",{d:"M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325"}))});d.propTypes={color:o.string,size:o.oneOfType([o.string,o.number]),title:o.string,className:o.string};export{d as P};
