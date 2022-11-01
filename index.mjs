// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@esm/index.mjs";function n(r,s,i,a,f){var o,d,u,m,l,p,j,h,c,b,v,x,y,N;if(r<=0)return s;if(1===r||0===a)return e(i[f])||(s[0]+=i[f],s[1]+=1),s;if(o=f,r<8){for(v=0,x=0,N=0;N<r;N++)(y=i[o])==y&&(v+=y,x+=1),o+=a;return s[0]+=v,s[1]+=x,s}if(r<=128){for(d=0,u=0,m=0,l=0,p=0,j=0,h=0,c=0,x=0,b=r%8,N=0;N<r-b;N+=8)(y=i[o])==y&&(d+=y,x+=1),(y=i[o+=a])==y&&(u+=y,x+=1),(y=i[o+=a])==y&&(m+=y,x+=1),(y=i[o+=a])==y&&(l+=y,x+=1),(y=i[o+=a])==y&&(p+=y,x+=1),(y=i[o+=a])==y&&(j+=y,x+=1),(y=i[o+=a])==y&&(h+=y,x+=1),(y=i[o+=a])==y&&(c+=y,x+=1),o+=a;for(v=d+u+(m+l)+(p+j+(h+c));N<r;N++)(y=i[o])==y&&(v+=y,x+=1),o+=a;return s[0]+=v,s[1]+=x,s}return x=t(r/2),n(x-=x%8,s,i,a,o)+n(r-x,s,i,a,o+x*a)}var s=[0,0];function i(r,e,t,i){return s[0]=0,s[1]=0,n(r,s,e,t,i),s[0]/s[1]}function a(r,e,t){var n,s,a,f,o;if(r<=0)return NaN;if(1===r||0===t)return e[0];if(n=t<0?(1-r)*t:0,r<8){for(a=0,f=0,o=0;o<r;o++)(s=e[n])==s&&(a+=s,f+=1),n+=t;return 0===f?NaN:a/f}return i(r,e,t,n)}r(a,"ndarray",i);export{a as default,i as ndarray};
//# sourceMappingURL=index.mjs.map
