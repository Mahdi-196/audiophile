function i(t,o){if(t==null)return{};var r={};for(var e in t)if({}.hasOwnProperty.call(t,e)){if(o.indexOf(e)!==-1)continue;r[e]=t[e]}return r}function n(t,o){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,e){return r.__proto__=e,r},n(t,o)}function c(t,o){t.prototype=Object.create(o.prototype),t.prototype.constructor=t,n(t,o)}export{c as _,i as a};
