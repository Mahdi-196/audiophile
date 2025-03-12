import{r as I}from"./buffer-xor-B2N0t8YZ.js";import{r as C}from"./safe-buffer-BaiuebXe.js";import{r as R}from"./cipher-base-BS0poRdv.js";import{r as T}from"./inherits-BICa84dG.js";import{r as fe}from"./evp_bytestokey-BHfVHUFa.js";var E={},U={},k={},Z;function ye(){return Z||(Z=1,k.encrypt=function(s,c){return s._cipher.encryptBlock(c)},k.decrypt=function(s,c){return s._cipher.decryptBlock(c)}),k}var x={},$;function de(){if($)return x;$=1;var s=I();return x.encrypt=function(c,u){var o=s(u,c._prev);return c._prev=c._cipher.encryptBlock(o),c._prev},x.decrypt=function(c,u){var o=c._prev;c._prev=u;var v=c._cipher.decryptBlock(u);return s(v,o)},x}var F={},W;function ge(){if(W)return F;W=1;var s=C().Buffer,c=I();function u(o,v,e){var n=v.length,t=c(v,o._cache);return o._cache=o._cache.slice(n),o._prev=s.concat([o._prev,e?v:t]),t}return F.encrypt=function(o,v,e){for(var n=s.allocUnsafe(0),t;v.length;)if(o._cache.length===0&&(o._cache=o._cipher.encryptBlock(o._prev),o._prev=s.allocUnsafe(0)),o._cache.length<=v.length)t=o._cache.length,n=s.concat([n,u(o,v.slice(0,t),e)]),v=v.slice(t);else{n=s.concat([n,u(o,v,e)]);break}return n},F}var X={},J;function me(){if(J)return X;J=1;var s=C().Buffer;function c(u,o,v){var e=u._cipher.encryptBlock(u._prev),n=e[0]^o;return u._prev=s.concat([u._prev.slice(1),s.from([v?o:n])]),n}return X.encrypt=function(u,o,v){for(var e=o.length,n=s.allocUnsafe(e),t=-1;++t<e;)n[t]=c(u,o[t],v);return n},X}var O={},Q;function Be(){if(Q)return O;Q=1;var s=C().Buffer;function c(o,v,e){for(var n,t=-1,h=8,_=0,a,l;++t<h;)n=o._cipher.encryptBlock(o._prev),a=v&1<<7-t?128:0,l=n[0]^a,_+=(l&128)>>t%8,o._prev=u(o._prev,e?a:l);return _}function u(o,v){var e=o.length,n=-1,t=s.allocUnsafe(o.length);for(o=s.concat([o,s.from([v])]);++n<e;)t[n]=o[n]<<1|o[n+1]>>7;return t}return O.encrypt=function(o,v,e){for(var n=v.length,t=s.allocUnsafe(n),h=-1;++h<n;)t[h]=c(o,v[h],e);return t},O}var M={},Y;function Ee(){if(Y)return M;Y=1;var s=I();function c(u){return u._prev=u._cipher.encryptBlock(u._prev),u._prev}return M.encrypt=function(u,o){for(;u._cache.length<o.length;)u._cache=Buffer.concat([u._cache,c(u)]);var v=u._cache.slice(0,o.length);return u._cache=u._cache.slice(o.length),s(o,v)},M}var N={},V,j;function pe(){if(j)return V;j=1;function s(c){for(var u=c.length,o;u--;)if(o=c.readUInt8(u),o===255)c.writeUInt8(0,u);else{o++,c.writeUInt8(o,u);break}}return V=s,V}var ee;function re(){if(ee)return N;ee=1;var s=I(),c=C().Buffer,u=pe();function o(e){var n=e._cipher.encryptBlockRaw(e._prev);return u(e._prev),n}var v=16;return N.encrypt=function(e,n){var t=Math.ceil(n.length/v),h=e._cache.length;e._cache=c.concat([e._cache,c.allocUnsafe(t*v)]);for(var _=0;_<t;_++){var a=o(e),l=h+_*v;e._cache.writeUInt32BE(a[0],l+0),e._cache.writeUInt32BE(a[1],l+4),e._cache.writeUInt32BE(a[2],l+8),e._cache.writeUInt32BE(a[3],l+12)}var y=e._cache.slice(0,n.length);return e._cache=e._cache.slice(n.length),s(n,y)},N}const Ce={cipher:"AES",key:128,iv:16,mode:"CBC",type:"block"},we={cipher:"AES",key:192,iv:16,mode:"CBC",type:"block"},Se={cipher:"AES",key:256,iv:16,mode:"CBC",type:"block"},se={"aes-128-ecb":{cipher:"AES",key:128,iv:0,mode:"ECB",type:"block"},"aes-192-ecb":{cipher:"AES",key:192,iv:0,mode:"ECB",type:"block"},"aes-256-ecb":{cipher:"AES",key:256,iv:0,mode:"ECB",type:"block"},"aes-128-cbc":{cipher:"AES",key:128,iv:16,mode:"CBC",type:"block"},"aes-192-cbc":{cipher:"AES",key:192,iv:16,mode:"CBC",type:"block"},"aes-256-cbc":{cipher:"AES",key:256,iv:16,mode:"CBC",type:"block"},aes128:Ce,aes192:we,aes256:Se,"aes-128-cfb":{cipher:"AES",key:128,iv:16,mode:"CFB",type:"stream"},"aes-192-cfb":{cipher:"AES",key:192,iv:16,mode:"CFB",type:"stream"},"aes-256-cfb":{cipher:"AES",key:256,iv:16,mode:"CFB",type:"stream"},"aes-128-cfb8":{cipher:"AES",key:128,iv:16,mode:"CFB8",type:"stream"},"aes-192-cfb8":{cipher:"AES",key:192,iv:16,mode:"CFB8",type:"stream"},"aes-256-cfb8":{cipher:"AES",key:256,iv:16,mode:"CFB8",type:"stream"},"aes-128-cfb1":{cipher:"AES",key:128,iv:16,mode:"CFB1",type:"stream"},"aes-192-cfb1":{cipher:"AES",key:192,iv:16,mode:"CFB1",type:"stream"},"aes-256-cfb1":{cipher:"AES",key:256,iv:16,mode:"CFB1",type:"stream"},"aes-128-ofb":{cipher:"AES",key:128,iv:16,mode:"OFB",type:"stream"},"aes-192-ofb":{cipher:"AES",key:192,iv:16,mode:"OFB",type:"stream"},"aes-256-ofb":{cipher:"AES",key:256,iv:16,mode:"OFB",type:"stream"},"aes-128-ctr":{cipher:"AES",key:128,iv:16,mode:"CTR",type:"stream"},"aes-192-ctr":{cipher:"AES",key:192,iv:16,mode:"CTR",type:"stream"},"aes-256-ctr":{cipher:"AES",key:256,iv:16,mode:"CTR",type:"stream"},"aes-128-gcm":{cipher:"AES",key:128,iv:12,mode:"GCM",type:"auth"},"aes-192-gcm":{cipher:"AES",key:192,iv:12,mode:"GCM",type:"auth"},"aes-256-gcm":{cipher:"AES",key:256,iv:12,mode:"GCM",type:"auth"}};var G,te;function ve(){if(te)return G;te=1;var s={ECB:ye(),CBC:de(),CFB:ge(),CFB8:me(),CFB1:Be(),OFB:Ee(),CTR:re(),GCM:re()},c=se;for(var u in c)c[u].module=s[c[u].mode];return G=c,G}var z={},ie;function D(){if(ie)return z;ie=1;var s=C().Buffer;function c(t){s.isBuffer(t)||(t=s.from(t));for(var h=t.length/4|0,_=new Array(h),a=0;a<h;a++)_[a]=t.readUInt32BE(a*4);return _}function u(t){for(var h=0;h<t.length;t++)t[h]=0}function o(t,h,_,a,l){for(var y=_[0],r=_[1],i=_[2],f=_[3],p=t[0]^h[0],d=t[1]^h[1],m=t[2]^h[2],B=t[3]^h[3],g,S,A,b,w=4,P=1;P<l;P++)g=y[p>>>24]^r[d>>>16&255]^i[m>>>8&255]^f[B&255]^h[w++],S=y[d>>>24]^r[m>>>16&255]^i[B>>>8&255]^f[p&255]^h[w++],A=y[m>>>24]^r[B>>>16&255]^i[p>>>8&255]^f[d&255]^h[w++],b=y[B>>>24]^r[p>>>16&255]^i[d>>>8&255]^f[m&255]^h[w++],p=g,d=S,m=A,B=b;return g=(a[p>>>24]<<24|a[d>>>16&255]<<16|a[m>>>8&255]<<8|a[B&255])^h[w++],S=(a[d>>>24]<<24|a[m>>>16&255]<<16|a[B>>>8&255]<<8|a[p&255])^h[w++],A=(a[m>>>24]<<24|a[B>>>16&255]<<16|a[p>>>8&255]<<8|a[d&255])^h[w++],b=(a[B>>>24]<<24|a[p>>>16&255]<<16|a[d>>>8&255]<<8|a[m&255])^h[w++],g=g>>>0,S=S>>>0,A=A>>>0,b=b>>>0,[g,S,A,b]}var v=[0,1,2,4,8,16,32,64,128,27,54],e=function(){for(var t=new Array(256),h=0;h<256;h++)h<128?t[h]=h<<1:t[h]=h<<1^283;for(var _=[],a=[],l=[[],[],[],[]],y=[[],[],[],[]],r=0,i=0,f=0;f<256;++f){var p=i^i<<1^i<<2^i<<3^i<<4;p=p>>>8^p&255^99,_[r]=p,a[p]=r;var d=t[r],m=t[d],B=t[m],g=t[p]*257^p*16843008;l[0][r]=g<<24|g>>>8,l[1][r]=g<<16|g>>>16,l[2][r]=g<<8|g>>>24,l[3][r]=g,g=B*16843009^m*65537^d*257^r*16843008,y[0][p]=g<<24|g>>>8,y[1][p]=g<<16|g>>>16,y[2][p]=g<<8|g>>>24,y[3][p]=g,r===0?r=i=1:(r=d^t[t[t[B^d]]],i^=t[t[i]])}return{SBOX:_,INV_SBOX:a,SUB_MIX:l,INV_SUB_MIX:y}}();function n(t){this._key=c(t),this._reset()}return n.blockSize=4*4,n.keySize=256/8,n.prototype.blockSize=n.blockSize,n.prototype.keySize=n.keySize,n.prototype._reset=function(){for(var t=this._key,h=t.length,_=h+6,a=(_+1)*4,l=[],y=0;y<h;y++)l[y]=t[y];for(y=h;y<a;y++){var r=l[y-1];y%h===0?(r=r<<8|r>>>24,r=e.SBOX[r>>>24]<<24|e.SBOX[r>>>16&255]<<16|e.SBOX[r>>>8&255]<<8|e.SBOX[r&255],r^=v[y/h|0]<<24):h>6&&y%h===4&&(r=e.SBOX[r>>>24]<<24|e.SBOX[r>>>16&255]<<16|e.SBOX[r>>>8&255]<<8|e.SBOX[r&255]),l[y]=l[y-h]^r}for(var i=[],f=0;f<a;f++){var p=a-f,d=l[p-(f%4?0:4)];f<4||p<=4?i[f]=d:i[f]=e.INV_SUB_MIX[0][e.SBOX[d>>>24]]^e.INV_SUB_MIX[1][e.SBOX[d>>>16&255]]^e.INV_SUB_MIX[2][e.SBOX[d>>>8&255]]^e.INV_SUB_MIX[3][e.SBOX[d&255]]}this._nRounds=_,this._keySchedule=l,this._invKeySchedule=i},n.prototype.encryptBlockRaw=function(t){return t=c(t),o(t,this._keySchedule,e.SUB_MIX,e.SBOX,this._nRounds)},n.prototype.encryptBlock=function(t){var h=this.encryptBlockRaw(t),_=s.allocUnsafe(16);return _.writeUInt32BE(h[0],0),_.writeUInt32BE(h[1],4),_.writeUInt32BE(h[2],8),_.writeUInt32BE(h[3],12),_},n.prototype.decryptBlock=function(t){t=c(t);var h=t[1];t[1]=t[3],t[3]=h;var _=o(t,this._invKeySchedule,e.INV_SUB_MIX,e.INV_SBOX,this._nRounds),a=s.allocUnsafe(16);return a.writeUInt32BE(_[0],0),a.writeUInt32BE(_[3],4),a.writeUInt32BE(_[2],8),a.writeUInt32BE(_[1],12),a},n.prototype.scrub=function(){u(this._keySchedule),u(this._invKeySchedule),u(this._key)},z.AES=n,z}var H,ae;function Ae(){if(ae)return H;ae=1;var s=C().Buffer,c=s.alloc(16,0);function u(e){return[e.readUInt32BE(0),e.readUInt32BE(4),e.readUInt32BE(8),e.readUInt32BE(12)]}function o(e){var n=s.allocUnsafe(16);return n.writeUInt32BE(e[0]>>>0,0),n.writeUInt32BE(e[1]>>>0,4),n.writeUInt32BE(e[2]>>>0,8),n.writeUInt32BE(e[3]>>>0,12),n}function v(e){this.h=e,this.state=s.alloc(16,0),this.cache=s.allocUnsafe(0)}return v.prototype.ghash=function(e){for(var n=-1;++n<e.length;)this.state[n]^=e[n];this._multiply()},v.prototype._multiply=function(){for(var e=u(this.h),n=[0,0,0,0],t,h,_,a=-1;++a<128;){for(h=(this.state[~~(a/8)]&1<<7-a%8)!==0,h&&(n[0]^=e[0],n[1]^=e[1],n[2]^=e[2],n[3]^=e[3]),_=(e[3]&1)!==0,t=3;t>0;t--)e[t]=e[t]>>>1|(e[t-1]&1)<<31;e[0]=e[0]>>>1,_&&(e[0]=e[0]^225<<24)}this.state=o(n)},v.prototype.update=function(e){this.cache=s.concat([this.cache,e]);for(var n;this.cache.length>=16;)n=this.cache.slice(0,16),this.cache=this.cache.slice(16),this.ghash(n)},v.prototype.final=function(e,n){return this.cache.length&&this.ghash(s.concat([this.cache,c],16)),this.ghash(o([0,e,0,n])),this.state},H=v,H}var K,ne;function le(){if(ne)return K;ne=1;var s=D(),c=C().Buffer,u=R(),o=T(),v=Ae(),e=I(),n=pe();function t(a,l){var y=0;a.length!==l.length&&y++;for(var r=Math.min(a.length,l.length),i=0;i<r;++i)y+=a[i]^l[i];return y}function h(a,l,y){if(l.length===12)return a._finID=c.concat([l,c.from([0,0,0,1])]),c.concat([l,c.from([0,0,0,2])]);var r=new v(y),i=l.length,f=i%16;r.update(l),f&&(f=16-f,r.update(c.alloc(f,0))),r.update(c.alloc(8,0));var p=i*8,d=c.alloc(8);d.writeUIntBE(p,0,8),r.update(d),a._finID=r.state;var m=c.from(a._finID);return n(m),m}function _(a,l,y,r){u.call(this);var i=c.alloc(4,0);this._cipher=new s.AES(l);var f=this._cipher.encryptBlock(i);this._ghash=new v(f),y=h(this,y,f),this._prev=c.from(y),this._cache=c.allocUnsafe(0),this._secCache=c.allocUnsafe(0),this._decrypt=r,this._alen=0,this._len=0,this._mode=a,this._authTag=null,this._called=!1}return o(_,u),_.prototype._update=function(a){if(!this._called&&this._alen){var l=16-this._alen%16;l<16&&(l=c.alloc(l,0),this._ghash.update(l))}this._called=!0;var y=this._mode.encrypt(this,a);return this._decrypt?this._ghash.update(a):this._ghash.update(y),this._len+=a.length,y},_.prototype._final=function(){if(this._decrypt&&!this._authTag)throw new Error("Unsupported state or unable to authenticate data");var a=e(this._ghash.final(this._alen*8,this._len*8),this._cipher.encryptBlock(this._finID));if(this._decrypt&&t(a,this._authTag))throw new Error("Unsupported state or unable to authenticate data");this._authTag=a,this._cipher.scrub()},_.prototype.getAuthTag=function(){if(this._decrypt||!c.isBuffer(this._authTag))throw new Error("Attempting to get auth tag in unsupported state");return this._authTag},_.prototype.setAuthTag=function(l){if(!this._decrypt)throw new Error("Attempting to set auth tag in unsupported state");this._authTag=l},_.prototype.setAAD=function(l){if(this._called)throw new Error("Attempting to set AAD in unsupported state");this._ghash.update(l),this._alen+=l.length},K=_,K}var L,ce;function _e(){if(ce)return L;ce=1;var s=D(),c=C().Buffer,u=R(),o=T();function v(e,n,t,h){u.call(this),this._cipher=new s.AES(n),this._prev=c.from(t),this._cache=c.allocUnsafe(0),this._secCache=c.allocUnsafe(0),this._decrypt=h,this._mode=e}return o(v,u),v.prototype._update=function(e){return this._mode.encrypt(this,e,this._decrypt)},v.prototype._final=function(){this._cipher.scrub()},L=v,L}var he;function be(){if(he)return U;he=1;var s=ve(),c=le(),u=C().Buffer,o=_e(),v=R(),e=D(),n=fe(),t=T();function h(r,i,f){v.call(this),this._cache=new a,this._cipher=new e.AES(i),this._prev=u.from(f),this._mode=r,this._autopadding=!0}t(h,v),h.prototype._update=function(r){this._cache.add(r);for(var i,f,p=[];i=this._cache.get();)f=this._mode.encrypt(this,i),p.push(f);return u.concat(p)};var _=u.alloc(16,16);h.prototype._final=function(){var r=this._cache.flush();if(this._autopadding)return r=this._mode.encrypt(this,r),this._cipher.scrub(),r;if(!r.equals(_))throw this._cipher.scrub(),new Error("data not multiple of block length")},h.prototype.setAutoPadding=function(r){return this._autopadding=!!r,this};function a(){this.cache=u.allocUnsafe(0)}a.prototype.add=function(r){this.cache=u.concat([this.cache,r])},a.prototype.get=function(){if(this.cache.length>15){var r=this.cache.slice(0,16);return this.cache=this.cache.slice(16),r}return null},a.prototype.flush=function(){for(var r=16-this.cache.length,i=u.allocUnsafe(r),f=-1;++f<r;)i.writeUInt8(r,f);return u.concat([this.cache,i])};function l(r,i,f){var p=s[r.toLowerCase()];if(!p)throw new TypeError("invalid suite type");if(typeof i=="string"&&(i=u.from(i)),i.length!==p.key/8)throw new TypeError("invalid key length "+i.length);if(typeof f=="string"&&(f=u.from(f)),p.mode!=="GCM"&&f.length!==p.iv)throw new TypeError("invalid iv length "+f.length);return p.type==="stream"?new o(p.module,i,f):p.type==="auth"?new c(p.module,i,f):new h(p.module,i,f)}function y(r,i){var f=s[r.toLowerCase()];if(!f)throw new TypeError("invalid suite type");var p=n(i,!1,f.key,f.iv);return l(r,p.key,p.iv)}return U.createCipheriv=l,U.createCipher=y,U}var q={},oe;function Ie(){if(oe)return q;oe=1;var s=le(),c=C().Buffer,u=ve(),o=_e(),v=R(),e=D(),n=fe(),t=T();function h(r,i,f){v.call(this),this._cache=new _,this._last=void 0,this._cipher=new e.AES(i),this._prev=c.from(f),this._mode=r,this._autopadding=!0}t(h,v),h.prototype._update=function(r){this._cache.add(r);for(var i,f,p=[];i=this._cache.get(this._autopadding);)f=this._mode.decrypt(this,i),p.push(f);return c.concat(p)},h.prototype._final=function(){var r=this._cache.flush();if(this._autopadding)return a(this._mode.decrypt(this,r));if(r)throw new Error("data not multiple of block length")},h.prototype.setAutoPadding=function(r){return this._autopadding=!!r,this};function _(){this.cache=c.allocUnsafe(0)}_.prototype.add=function(r){this.cache=c.concat([this.cache,r])},_.prototype.get=function(r){var i;if(r){if(this.cache.length>16)return i=this.cache.slice(0,16),this.cache=this.cache.slice(16),i}else if(this.cache.length>=16)return i=this.cache.slice(0,16),this.cache=this.cache.slice(16),i;return null},_.prototype.flush=function(){if(this.cache.length)return this.cache};function a(r){var i=r[15];if(i<1||i>16)throw new Error("unable to decrypt data");for(var f=-1;++f<i;)if(r[f+(16-i)]!==i)throw new Error("unable to decrypt data");if(i!==16)return r.slice(0,16-i)}function l(r,i,f){var p=u[r.toLowerCase()];if(!p)throw new TypeError("invalid suite type");if(typeof f=="string"&&(f=c.from(f)),p.mode!=="GCM"&&f.length!==p.iv)throw new TypeError("invalid iv length "+f.length);if(typeof i=="string"&&(i=c.from(i)),i.length!==p.key/8)throw new TypeError("invalid key length "+i.length);return p.type==="stream"?new o(p.module,i,f,!0):p.type==="auth"?new s(p.module,i,f,!0):new h(p.module,i,f)}function y(r,i){var f=u[r.toLowerCase()];if(!f)throw new TypeError("invalid suite type");var p=n(i,!1,f.key,f.iv);return l(r,p.key,p.iv)}return q.createDecipher=y,q.createDecipheriv=l,q}var ue;function Te(){if(ue)return E;ue=1;var s=be(),c=Ie(),u=se;function o(){return Object.keys(u)}return E.createCipher=E.Cipher=s.createCipher,E.createCipheriv=E.Cipheriv=s.createCipheriv,E.createDecipher=E.Decipher=c.createDecipher,E.createDecipheriv=E.Decipheriv=c.createDecipheriv,E.listCiphers=E.getCiphers=o,E}export{ve as a,Te as r};
