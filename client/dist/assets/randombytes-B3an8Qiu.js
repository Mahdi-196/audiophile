import{c as f}from"./asn1.js-CNcqmYN1.js";import{r as c}from"./safe-buffer-BaiuebXe.js";var n={exports:{}},u;function y(){if(u)return n.exports;u=1;var s=65536,i=4294967295;function m(){throw new Error(`Secure random number generation is not supported by this browser.
Use Chrome, Firefox or Internet Explorer 11`)}var p=c().Buffer,o=f.crypto||f.msCrypto;o&&o.getRandomValues?n.exports=l:n.exports=m;function l(r,a){if(r>i)throw new RangeError("requested too many random bytes");var e=p.allocUnsafe(r);if(r>0)if(r>s)for(var t=0;t<r;t+=s)o.getRandomValues(e.slice(t,t+s));else o.getRandomValues(e);return typeof a=="function"?process.nextTick(function(){a(null,e)}):e}return n.exports}export{y as r};
