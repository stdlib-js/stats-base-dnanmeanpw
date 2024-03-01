// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-floor@v0.2.1-esm/index.mjs";var n=128;function s(r,i,a,f,o){var d,u,m,l,p,v,j,h,c,b,x,y,N,g;if(r<=0)return i;if(1===r||0===f)return e(a[o])||(i[0]+=a[o],i[1]+=1),i;if(d=o,r<8){for(x=0,y=0,g=0;g<r;g++)(N=a[d])==N&&(x+=N,y+=1),d+=f;return i[0]+=x,i[1]+=y,i}if(r<=n){for(u=0,m=0,l=0,p=0,v=0,j=0,h=0,c=0,y=0,b=r%8,g=0;g<r-b;g+=8)(N=a[d])==N&&(u+=N,y+=1),(N=a[d+=f])==N&&(m+=N,y+=1),(N=a[d+=f])==N&&(l+=N,y+=1),(N=a[d+=f])==N&&(p+=N,y+=1),(N=a[d+=f])==N&&(v+=N,y+=1),(N=a[d+=f])==N&&(j+=N,y+=1),(N=a[d+=f])==N&&(h+=N,y+=1),(N=a[d+=f])==N&&(c+=N,y+=1),d+=f;for(x=u+m+(l+p)+(v+j+(h+c));g<r;g++)(N=a[d])==N&&(x+=N,y+=1),d+=f;return i[0]+=x,i[1]+=y,i}return y=t(r/2),s(y-=y%8,i,a,f,d)+s(r-y,i,a,f,d+y*f)}var i=[0,0];function a(r,e,t,n){return i[0]=0,i[1]=0,s(r,i,e,t,n),i[0]/i[1]}function f(r,e,t){var n,s,i,f,o;if(r<=0)return NaN;if(1===r||0===t)return e[0];if(n=t<0?(1-r)*t:0,r<8){for(i=0,f=0,o=0;o<r;o++)(s=e[n])==s&&(i+=s,f+=1),n+=t;return 0===f?NaN:i/f}return a(r,e,t,n)}r(f,"ndarray",a);export{f as default,a as ndarray};
//# sourceMappingURL=index.mjs.map
