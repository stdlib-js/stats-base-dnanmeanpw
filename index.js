// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e,r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var l,c,p,_;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),p="get"in t,_="set"in t,c&&(p||_))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return p&&i&&i.call(e,r,t.get),_&&a&&a.call(e,r,t.set),e};var l=e,c=Math.floor;function p(e,r,t,n,o){var i,a,u,f,l,_,d,b,y,s,v,m,j,g;if(e<=0)return r;if(1===e||0===n)return function(e){return e!=e}(t[o])||(r[0]+=t[o],r[1]+=1),r;if(i=o,e<8){for(v=0,m=0,g=0;g<e;g++)(j=t[i])==j&&(v+=j,m+=1),i+=n;return r[0]+=v,r[1]+=m,r}if(e<=128){for(a=0,u=0,f=0,l=0,_=0,d=0,b=0,y=0,m=0,s=e%8,g=0;g<e-s;g+=8)(j=t[i])==j&&(a+=j,m+=1),(j=t[i+=n])==j&&(u+=j,m+=1),(j=t[i+=n])==j&&(f+=j,m+=1),(j=t[i+=n])==j&&(l+=j,m+=1),(j=t[i+=n])==j&&(_+=j,m+=1),(j=t[i+=n])==j&&(d+=j,m+=1),(j=t[i+=n])==j&&(b+=j,m+=1),(j=t[i+=n])==j&&(y+=j,m+=1),i+=n;for(v=a+u+(f+l)+(_+d+(b+y));g<e;g++)(j=t[i])==j&&(v+=j,m+=1),i+=n;return r[0]+=v,r[1]+=m,r}return m=c(e/2),p(m-=m%8,r,t,n,i)+p(e-m,r,t,n,i+m*n)}var _=[0,0];function d(e,r,t,n){return _[0]=0,_[1]=0,p(e,_,r,t,n),_[0]/_[1]}function b(e,r,t){var n,o,i,a,u;if(e<=0)return NaN;if(1===e||0===t)return r[0];if(n=t<0?(1-e)*t:0,e<8){for(i=0,a=0,u=0;u<e;u++)(o=r[n])==o&&(i+=o,a+=1),n+=t;return 0===a?NaN:i/a}return d(e,r,t,n)}return l(b,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:d}),b},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).dnanmeanpw=r();
//# sourceMappingURL=index.js.map
