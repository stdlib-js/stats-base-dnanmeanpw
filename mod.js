// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function i(r){return"number"==typeof r}function t(r){var e,i="";for(e=0;e<r;e++)i+="0";return i}function a(r,e,i){var a=!1,n=e-r.length;return n<0||(function(r){return"-"===r[0]}(r)&&(a=!0,r=r.substr(1)),r=i?r+t(n):t(n)+r,a&&(r="-"+r)),r}var n=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function s(r){var e,t,s;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,s=parseInt(t,10),!isFinite(s)){if(!i(t))throw new Error("invalid integer. Value: "+t);s=0}return s<0&&("u"===r.specifier||10!==e)&&(s=4294967295+s+1),s<0?(t=(-s).toString(e),r.precision&&(t=a(t,r.precision,r.padRight)),t="-"+t):(t=s.toString(e),s||r.precision?r.precision&&(t=a(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=r.specifier===o.call(r.specifier)?o.call(t):n.call(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t}function c(r){return"string"==typeof r}var p=Math.abs,l=String.prototype.toLowerCase,u=String.prototype.toUpperCase,f=String.prototype.replace,g=/e\+(\d)$/,d=/e-(\d)$/,h=/^(\d+)$/,w=/^(\d+)e/,v=/\.0$/,b=/\.0*e/,y=/(\..*[^0])0*e/;function m(r){var e,t,a=parseFloat(r.arg);if(!isFinite(a)){if(!i(r.arg))throw new Error("invalid floating-point number. Value: "+t);a=r.arg}switch(r.specifier){case"e":case"E":t=a.toExponential(r.precision);break;case"f":case"F":t=a.toFixed(r.precision);break;case"g":case"G":p(a)<1e-4?((e=r.precision)>0&&(e-=1),t=a.toExponential(e)):t=a.toPrecision(r.precision),r.alternate||(t=f.call(t,y,"$1e"),t=f.call(t,b,"e"),t=f.call(t,v,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=f.call(t,g,"e+0$1"),t=f.call(t,d,"e-0$1"),r.alternate&&(t=f.call(t,h,"$1."),t=f.call(t,w,"$1.e")),a>=0&&r.sign&&(t=r.sign+t),t=r.specifier===u.call(r.specifier)?u.call(t):l.call(t)}function _(r){var e,i="";for(e=0;e<r;e++)i+=" ";return i}function k(r,e,i){var t=e-r.length;return t<0?r:r=i?r+_(t):_(t)+r}var x=String.fromCharCode,E=isNaN,S=Array.isArray;function V(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function j(r){var e,i,t,n,o,p,l,u,f;if(!S(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(p="",l=1,u=0;u<r.length;u++)if(c(t=r[u]))p+=t;else{if(e=void 0!==t.precision,!(t=V(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+u+"`. Value: `"+t+"`.");for(t.mapping&&(l=t.mapping),i=t.flags,f=0;f<i.length;f++)switch(n=i.charAt(f)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=i.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+n)}if("*"===t.width){if(t.width=parseInt(arguments[l],10),l+=1,E(t.width))throw new TypeError("the argument for * width at position "+l+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[l],10),l+=1,E(t.precision))throw new TypeError("the argument for * precision at position "+l+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[l],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=s(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!E(t.arg)){if((o=parseInt(t.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=E(o)?String(t.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=m(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=a(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=k(t.arg,t.width,t.padRight)),p+=t.arg||"",l+=1}return p}var $=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function F(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function A(r){var e,i,t,a;for(i=[],a=0,t=$.exec(r);t;)(e=r.slice(a,$.lastIndex-t[0].length)).length&&i.push(e),i.push(F(t)),a=$.lastIndex,t=$.exec(r);return(e=r.slice(a)).length&&i.push(e),i}function I(r){return"string"==typeof r}function T(r){var e,i,t;if(!I(r))throw new TypeError(T("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=A(r),(i=new Array(arguments.length))[0]=e,t=1;t<i.length;t++)i[t]=arguments[t];return j.apply(null,i)}var C,N=Object.prototype,R=N.toString,O=N.__defineGetter__,P=N.__defineSetter__,Z=N.__lookupGetter__,G=N.__lookupSetter__;C=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,i){var t,a,n,o;if("object"!=typeof r||null===r||"[object Array]"===R.call(r))throw new TypeError(T("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof i||null===i||"[object Array]"===R.call(i))throw new TypeError(T("invalid argument. Property descriptor must be an object. Value: `%s`.",i));if((a="value"in i)&&(Z.call(r,e)||G.call(r,e)?(t=r.__proto__,r.__proto__=N,delete r[e],r[e]=i.value,r.__proto__=t):r[e]=i.value),n="get"in i,o="set"in i,a&&(n||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return n&&O&&O.call(r,e,i.get),o&&P&&P.call(r,e,i.set),r};var W=C;var L=Math.floor;function M(r,e,i,t,a){var n,o,s,c,p,l,u,f,g,d,h,w,v,b;if(r<=0)return e;if(1===r||0===t)return function(r){return r!=r}(i[a])||(e[0]+=i[a],e[1]+=1),e;if(n=a,r<8){for(h=0,w=0,b=0;b<r;b++)(v=i[n])==v&&(h+=v,w+=1),n+=t;return e[0]+=h,e[1]+=w,e}if(r<=128){for(o=0,s=0,c=0,p=0,l=0,u=0,f=0,g=0,w=0,d=r%8,b=0;b<r-d;b+=8)(v=i[n])==v&&(o+=v,w+=1),(v=i[n+=t])==v&&(s+=v,w+=1),(v=i[n+=t])==v&&(c+=v,w+=1),(v=i[n+=t])==v&&(p+=v,w+=1),(v=i[n+=t])==v&&(l+=v,w+=1),(v=i[n+=t])==v&&(u+=v,w+=1),(v=i[n+=t])==v&&(f+=v,w+=1),(v=i[n+=t])==v&&(g+=v,w+=1),n+=t;for(h=o+s+(c+p)+(l+u+(f+g));b<r;b++)(v=i[n])==v&&(h+=v,w+=1),n+=t;return e[0]+=h,e[1]+=w,e}return w=L(r/2),M(w-=w%8,e,i,t,n)+M(r-w,e,i,t,n+w*t)}var U=[0,0];function X(r,e,i,t){return U[0]=0,U[1]=0,M(r,U,e,i,t),U[0]/U[1]}function z(r,e,i){var t,a,n,o,s;if(r<=0)return NaN;if(1===r||0===i)return e[0];if(t=i<0?(1-r)*i:0,r<8){for(n=0,o=0,s=0;s<r;s++)(a=e[t])==a&&(n+=a,o+=1),t+=i;return 0===o?NaN:n/o}return X(r,e,i,t)}W(z,"ndarray",{configurable:!1,enumerable:!1,writable:!1,value:X});export{z as default,X as ndarray};
//# sourceMappingURL=mod.js.map
