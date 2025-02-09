"use strict";var i=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var t=i(function(K,s){"use strict";var c=require("@stdlib/blas-ext-base-dnannsumpw").ndarray,w=require("@stdlib/array-float64"),a=new w(2);function f(e,r,n,y){return a[0]=0,a[1]=0,c(e,r,n,y,a,1,0),a[0]/a[1]}s.exports=f});var q=i(function(P,v){"use strict";var x=require("@stdlib/strided-base-stride2offset"),j=t();function l(e,r,n){return j(e,r,n,x(e,n))}v.exports=l});var p=i(function(S,o){"use strict";var R=require("@stdlib/utils-define-nonenumerable-read-only-property"),d=q(),A=t();R(d,"ndarray",A);o.exports=d});var E=require("path").join,O=require("@stdlib/utils-try-require"),_=require("@stdlib/assert-is-error"),C=p(),u,m=O(E(__dirname,"./native.js"));_(m)?u=C:u=m;module.exports=u;
/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
//# sourceMappingURL=index.js.map
