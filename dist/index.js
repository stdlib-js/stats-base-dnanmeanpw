"use strict";var w=function(i,n){return function(){return n||i((n={exports:{}}).exports,n),n.exports}};var _=w(function(V,S){
var Z=require('@stdlib/math-base-assert-is-nan/dist'),b=require('@stdlib/math-base-special-floor/dist'),g=128;function O(i,n,e,v,s){var a,p,q,l,y,j,o,t,E,K,m,f,r,u;if(i<=0)return n;if(i===1||v===0)return Z(e[s])||(n[0]+=e[s],n[1]+=1),n;if(a=s,i<8){for(m=0,f=0,u=0;u<i;u++)r=e[a],r===r&&(m+=r,f+=1),a+=v;return n[0]+=m,n[1]+=f,n}if(i<=g){for(p=0,q=0,l=0,y=0,j=0,o=0,t=0,E=0,f=0,K=i%8,u=0;u<i-K;u+=8)r=e[a],r===r&&(p+=r,f+=1),a+=v,r=e[a],r===r&&(q+=r,f+=1),a+=v,r=e[a],r===r&&(l+=r,f+=1),a+=v,r=e[a],r===r&&(y+=r,f+=1),a+=v,r=e[a],r===r&&(j+=r,f+=1),a+=v,r=e[a],r===r&&(o+=r,f+=1),a+=v,r=e[a],r===r&&(t+=r,f+=1),a+=v,r=e[a],r===r&&(E+=r,f+=1),a+=v;for(m=p+q+(l+y)+(j+o+(t+E)),u;u<i;u++)r=e[a],r===r&&(m+=r,f+=1),a+=v;return n[0]+=m,n[1]+=f,n}return f=b(i/2),f-=f%8,O(f,n,e,v,a)+O(i-f,n,e,v,a+f*v)}S.exports=O
});var R=w(function(X,A){
var h=_(),c=[0,0];function k(i,n,e,v){return c[0]=0,c[1]=0,h(i,c,n,e,v),c[0]/c[1]}A.exports=k
});var I=w(function(Y,B){
var z=R();function D(i,n,e){var v,s,a,p,q;if(i<=0)return NaN;if(i===1||e===0)return n[0];if(e<0?v=(1-i)*e:v=0,i<8){for(a=0,p=0,q=0;q<i;q++)s=n[v],s===s&&(a+=s,p+=1),v+=e;return p===0?NaN:a/p}return z(i,n,e,v)}B.exports=D
});var P=w(function($,M){
var F=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),L=I(),G=R();F(L,"ndarray",G);M.exports=L
});var H=require("path").join,J=require('@stdlib/utils-try-require/dist'),Q=require('@stdlib/assert-is-error/dist'),T=P(),C,W=J(H(__dirname,"./native.js"));Q(W)?C=T:C=W;module.exports=C;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
