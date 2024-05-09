"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[358],{9009:function(e,t,n){n.d(t,{ET:function(){return i1},JU:function(){return ig},PL:function(){return i$},ad:function(){return iw},cf:function(){return i2},hJ:function(){return im},r7:function(){return i0}});var r,i,s=n(5723),a=n(6574),o=n(9858),l=n(8954),u=n(1197);n(9079);let c="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h{isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}constructor(e){this.uid=e}}h.UNAUTHENTICATED=new h(null),h.GOOGLE_CREDENTIALS=new h("google-credentials-uid"),h.FIRST_PARTY=new h("first-party-uid"),h.MOCK_USER=new h("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let d="10.3.1",f=new o.Yd("@firebase/firestore");function m(){return f.logLevel}function g(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(f.logLevel<=o.in.DEBUG){let t=n.map(v);f.debug("Firestore (".concat(d,"): ").concat(e),...t)}}function p(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(f.logLevel<=o.in.ERROR){let t=n.map(v);f.error("Firestore (".concat(d,"): ").concat(e),...t)}}function y(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];if(f.logLevel<=o.in.WARN){let t=n.map(v);f.warn("Firestore (".concat(d,"): ").concat(e),...t)}}function v(e){if("string"==typeof e)return e;try{/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return JSON.stringify(e)}catch(t){return e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Unexpected state",t="FIRESTORE (".concat(d,") INTERNAL ASSERTION FAILED: ")+e;throw p(t),Error(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends l.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>"".concat(this.name,": [code=").concat(this.code,"]: ").concat(this.message)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization","Bearer ".concat(e))}}class I{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(h.UNAUTHENTICATED))}shutdown(){}}class S{getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}constructor(e){this.token=e,this.changeListener=null}}class A{start(e,t){let n=this.i,r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve(),i=new T;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new T,e.enqueueRetryable(()=>r(this.currentUser))};let s=()=>{let t=i;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},a=e=>{g("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(e=>a(e)),setTimeout(()=>{if(!this.auth){let e=this.t.getImmediate({optional:!0});e?a(e):(g("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new T)}},0),s()}getToken(){let e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(g("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?("string"==typeof t.accessToken||w(),new C(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){let e=this.auth&&this.auth.getUid();return null===e||"string"==typeof e||w(),new h(e)}constructor(e){this.t=e,this.currentUser=h.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}}class N{T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);let e=this.T();return e&&this.I.set("Authorization",e),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}constructor(e,t,n){this.l=e,this.h=t,this.P=n,this.type="FirstParty",this.user=h.FIRST_PARTY,this.I=new Map}}class k{getToken(){return Promise.resolve(new N(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(h.FIRST_PARTY))}shutdown(){}invalidateToken(){}constructor(e,t,n){this.l=e,this.h=t,this.P=n}}class b{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class D{start(e,t){let n=e=>{null!=e.error&&g("FirebaseAppCheckTokenProvider","Error getting App Check token; using placeholder token instead. Error: ".concat(e.error.message));let n=e.token!==this.R;return this.R=e.token,g("FirebaseAppCheckTokenProvider","Received ".concat(n?"new":"existing"," token.")),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};let r=e=>{g("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.A.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){let e=this.A.getImmediate({optional:!0});e?r(e):g("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){let e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?("string"==typeof e.token||w(),this.R=e.token,new b(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}constructor(e){this.A=e,this.forceRefresh=!1,this.appCheck=null,this.R=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R{static V(){let e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length,n="";for(;n.length<20;){let r=/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function(e){let t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let t=0;t<e;t++)n[t]=Math.floor(256*Math.random());return n}(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function x(e,t){return e<t?-1:e>t?1:0}function L(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{static now(){return V.fromMillis(Date.now())}static fromDate(e){return V.fromMillis(e.getTime())}static fromMillis(e){let t=Math.floor(e/1e3);return new V(t,Math.floor(1e6*(e-1e3*t)))}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?x(this.nanoseconds,e.nanoseconds):x(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){return String(this.seconds- -62135596800).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0||t>=1e9)throw new E(_.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800||e>=253402300800)throw new E(_.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{static fromTimestamp(e){return new M(e)}static min(){return new M(new V(0,0))}static max(){return new M(new V(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}constructor(e){this.timestamp=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P{get length(){return this.len}isEqual(e){return 0===P.comparator(this,e)}child(e){let t=this.segments.slice(this.offset,this.limit());return e instanceof P?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){let n=Math.min(e.length,t.length);for(let r=0;r<n;r++){let n=e.get(r),i=t.get(r);if(n<i)return -1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}constructor(e,t,n){void 0===t?t=0:t>e.length&&w(),void 0===n?n=e.length-t:n>e.length-t&&w(),this.segments=e,this.offset=t,this.len=n}}class F extends P{construct(e,t,n){return new F(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let r=[];for(let e of t){if(e.indexOf("//")>=0)throw new E(_.INVALID_ARGUMENT,"Invalid segment (".concat(e,"). Paths must not contain // in them."));r.push(...e.split("/").filter(e=>e.length>0))}return new F(r)}static emptyPath(){return new F([])}}let O=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class U extends P{construct(e,t,n){return new U(e,t,n)}static isValidIdentifier(e){return O.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),U.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new U(["__name__"])}static fromServerFormat(e){let t=[],n="",r=0,i=()=>{if(0===n.length)throw new E(_.INVALID_ARGUMENT,"Invalid field path (".concat(e,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"));t.push(n),n=""},s=!1;for(;r<e.length;){let t=e[r];if("\\"===t){if(r+1===e.length)throw new E(_.INVALID_ARGUMENT,"Path has trailing escape character: "+e);let t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new E(_.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?s=!s:"."!==t||s?n+=t:i(),r++}if(i(),s)throw new E(_.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new U(t)}static emptyPath(){return new U([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{static fromPath(e){return new q(F.fromString(e))}static fromName(e){return new q(F.fromString(e).popFirst(5))}static empty(){return new q(F.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===F.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return F.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new q(new F(e.slice()))}constructor(e){this.path=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}B.UNKNOWN_ID=-1;class K{static min(){return new K(M.min(),q.empty(),-1)}static max(){return new K(M.max(),q.empty(),-1)}constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}}class z{addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}constructor(){this.onCommittedListeners=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e){if(e.code!==_.FAILED_PRECONDITION||"The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab."!==e.message)throw e;g("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j{catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&w(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new j((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{let t=e();return t instanceof j?t:j.resolve(t)}catch(e){return j.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):j.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):j.reject(t)}static resolve(e){return new j((t,n)=>{t(e)})}static reject(e){return new j((t,n)=>{n(e)})}static waitFor(e){return new j((t,n)=>{let r=0,i=0,s=!1;e.forEach(e=>{++r,e.next(()=>{++i,s&&i===r&&t()},e=>n(e))}),s=!0,i===r&&t()})}static or(e){let t=j.resolve(!1);for(let n of e)t=t.next(e=>e?j.resolve(e):n());return t}static forEach(e,t){let n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new j((n,r)=>{let i=e.length,s=Array(i),a=0;for(let o=0;o<i;o++){let l=o;t(e[l]).next(e=>{s[l]=e,++a===i&&n(s)},e=>r(e))}})}static doWhile(e,t){return new j((n,r)=>{let i=()=>{!0===e()?t().next(()=>{i()},r):n()};i()})}constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}}function G(e){return"IndexedDbTransactionError"===e.name}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){let e=++this.previousValue;return this._e&&this._e(e),e}constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.oe(e),this._e=e=>t.writeSequenceNumber(e))}}function W(e){return 0===e&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(e){let t=0;for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function X(e,t){for(let n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function J(e){for(let t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}H.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{insert(e,t){return new Z(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ee.BLACK,null,null))}remove(e){return new Z(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ee.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){let n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){let r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return -1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){let e=[];return this.inorderTraversal((t,n)=>(e.push("".concat(t,":").concat(n)),!1)),"{".concat(e.join(", "),"}")}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new $(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new $(this.root,e,this.comparator,!1)}getReverseIterator(){return new $(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new $(this.root,e,this.comparator,!0)}constructor(e,t){this.comparator=e,this.root=t||ee.EMPTY}}class ${getNext(){let e=this.nodeStack.pop(),t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;let e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}}class ee{copy(e,t,n,r,i){return new ee(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this,i=n(e,r.key);return(r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n))).fixUp()}removeMin(){if(this.left.isEmpty())return ee.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),(e=e.copy(null,null,null,e.left.removeMin(),null)).fixUp()}remove(e,t){let n,r=this;if(0>t(e,r.key))r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return ee.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=(e=(e=e.copy(null,null,null,null,e.right.rotateRight())).rotateLeft()).colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=(e=e.rotateRight()).colorFlip()),e}rotateLeft(){let e=this.copy(null,null,ee.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){let e=this.copy(null,null,ee.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){let e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){return Math.pow(2,this.check())<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw w();let e=this.left.check();if(e!==this.right.check())throw w();return e+(this.isRed()?0:1)}constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:ee.RED,this.left=null!=r?r:ee.EMPTY,this.right=null!=i?i:ee.EMPTY,this.size=this.left.size+1+this.right.size}}ee.EMPTY=null,ee.RED=!0,ee.BLACK=!1,ee.EMPTY=new class{get key(){throw w()}get value(){throw w()}get color(){throw w()}get left(){throw w()}get right(){throw w()}copy(e,t,n,r,i){return this}insert(e,t,n){return new ee(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}constructor(){this.size=0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){let n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){let r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){let t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new en(this.data.getIterator())}getIteratorFrom(e){return new en(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof et)||this.size!==e.size)return!1;let t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){let e=[];return this.forEach(t=>{e.push(t)}),e}toString(){let e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){let t=new et(this.comparator);return t.data=e,t}constructor(e){this.comparator=e,this.data=new Z(this.comparator)}}class en{getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}constructor(e){this.iter=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{static empty(){return new er([])}unionWith(e){let t=new et(U.comparator);for(let e of this.fields)t=t.add(e);for(let n of e)t=t.add(n);return new er(t.toArray())}covers(e){for(let t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return L(this.fields,e.fields,(e,t)=>e.isEqual(t))}constructor(e){this.fields=e,e.sort(U.comparator)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{static fromBase64String(e){return new es(function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new ei("Invalid base64 string: "+e):e}}(e))}static fromUint8Array(e){return new es(function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e))}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return btoa(this.binaryString)}toUint8Array(){return function(e){let t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return x(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}constructor(e){this.binaryString=e}}es.EMPTY_BYTE_STRING=new es("");let ea=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function eo(e){if(e||w(),"string"==typeof e){let t=0,n=ea.exec(e);if(n||w(),n[1]){let e=n[1];t=Number(e=(e+"000000000").substr(0,9))}return{seconds:Math.floor(new Date(e).getTime()/1e3),nanos:t}}return{seconds:el(e.seconds),nanos:el(e.nanos)}}function el(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function eu(e){return"string"==typeof e?es.fromBase64String(e):es.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function eh(e){let t=e.mapValue.fields.__previous_value__;return ec(t)?eh(t):t}function ed(e){let t=eo(e.mapValue.fields.__local_write_time__.timestampValue);return new V(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ef{constructor(e,t,n,r,i,s,a,o,l){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=a,this.longPollingOptions=o,this.useFetchStreams=l}}class em{static empty(){return new em("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof em&&e.projectId===this.projectId&&e.database===this.database}constructor(e,t){this.projectId=e,this.database=t||"(default)"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let eg={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ep(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?ec(e)?4:ek(e)?9007199254740991:10:w()}function ey(e,t){if(e===t)return!0;let n=ep(e);if(n!==ep(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return ed(e).isEqual(ed(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;let n=eo(e.timestampValue),r=eo(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return eu(e.bytesValue).isEqual(eu(t.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return el(e.geoPointValue.latitude)===el(t.geoPointValue.latitude)&&el(e.geoPointValue.longitude)===el(t.geoPointValue.longitude);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return el(e.integerValue)===el(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){let n=el(e.doubleValue),r=el(t.doubleValue);return n===r?W(n)===W(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return L(e.arrayValue.values||[],t.arrayValue.values||[],ey);case 10:return function(e,t){let n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Y(n)!==Y(r))return!1;for(let e in n)if(n.hasOwnProperty(e)&&(void 0===r[e]||!ey(n[e],r[e])))return!1;return!0}(e,t);default:return w()}}function ev(e,t){return void 0!==(e.values||[]).find(e=>ey(e,t))}function ew(e,t){if(e===t)return 0;let n=ep(e),r=ep(t);if(n!==r)return x(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return x(e.booleanValue,t.booleanValue);case 2:return function(e,t){let n=el(e.integerValue||e.doubleValue),r=el(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return e_(e.timestampValue,t.timestampValue);case 4:return e_(ed(e),ed(t));case 5:return x(e.stringValue,t.stringValue);case 6:return function(e,t){let n=eu(e),r=eu(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){let n=e.split("/"),r=t.split("/");for(let e=0;e<n.length&&e<r.length;e++){let t=x(n[e],r[e]);if(0!==t)return t}return x(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){let n=x(el(e.latitude),el(t.latitude));return 0!==n?n:x(el(e.longitude),el(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){let n=e.values||[],r=t.values||[];for(let e=0;e<n.length&&e<r.length;++e){let t=ew(n[e],r[e]);if(t)return t}return x(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===eg.mapValue&&t===eg.mapValue)return 0;if(e===eg.mapValue)return 1;if(t===eg.mapValue)return -1;let n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let e=0;e<r.length&&e<s.length;++e){let t=x(r[e],s[e]);if(0!==t)return t;let a=ew(n[r[e]],i[s[e]]);if(0!==a)return a}return x(r.length,s.length)}(e.mapValue,t.mapValue);default:throw w()}}function e_(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return x(e,t);let n=eo(e),r=eo(t),i=x(n.seconds,r.seconds);return 0!==i?i:x(n.nanos,r.nanos)}function eE(e){var t,n;return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){let t=eo(e);return"time(".concat(t.seconds,",").concat(t.nanos,")")}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?eu(e.bytesValue).toBase64():"referenceValue"in e?(t=e.referenceValue,q.fromName(t).toString()):"geoPointValue"in e?(n=e.geoPointValue,"geo(".concat(n.latitude,",").concat(n.longitude,")")):"arrayValue"in e?function(e){let t="[",n=!0;for(let r of e.values||[])n?n=!1:t+=",",t+=eE(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){let t=Object.keys(e.fields||{}).sort(),n="{",r=!0;for(let i of t)r?r=!1:n+=",",n+="".concat(i,":").concat(eE(e.fields[i]));return n+"}"}(e.mapValue):w()}function eT(e){return!!e&&"integerValue"in e}function eC(e){return!!e&&"arrayValue"in e}function eI(e){return!!e&&"nullValue"in e}function eS(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function eA(e){return!!e&&"mapValue"in e}function eN(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){let t={mapValue:{fields:{}}};return X(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=eN(n)),t}if(e.arrayValue){let t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=eN(e.arrayValue.values[n]);return t}return Object.assign({},e)}function ek(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eb{static empty(){return new eb({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(!eA(t=(t.mapValue.fields||{})[e.get(n)]))return null;return(t=(t.mapValue.fields||{})[e.lastSegment()])||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=eN(t)}setAll(e){let t=U.emptyPath(),n={},r=[];e.forEach((e,i)=>{if(!t.isImmediateParentOf(i)){let e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=eN(e):r.push(i.lastSegment())});let i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){let t=this.field(e.popLast());eA(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return ey(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];eA(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){for(let r of(X(t,(t,n)=>e[t]=n),n))delete e[r]}clone(){return new eb(eN(this.value))}constructor(e){this.value=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{static newInvalidDocument(e){return new eD(e,0,M.min(),M.min(),M.min(),eb.empty(),0)}static newFoundDocument(e,t,n,r){return new eD(e,1,t,M.min(),n,r,0)}static newNoDocument(e,t){return new eD(e,2,t,M.min(),M.min(),eb.empty(),0)}static newUnknownDocument(e,t){return new eD(e,3,t,M.min(),M.min(),eb.empty(),2)}convertToFoundDocument(e,t){return this.createTime.isEqual(M.min())&&(2===this.documentType||0===this.documentType)&&(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=eb.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=eb.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=M.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof eD&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new eD(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return"Document(".concat(this.key,", ").concat(this.version,", ").concat(JSON.stringify(this.data.value),", {createTime: ").concat(this.createTime,"}), {documentType: ").concat(this.documentType,"}), {documentState: ").concat(this.documentState,"})")}constructor(e,t,n,r,i,s,a){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=i,this.data=s,this.documentState=a}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e,t){this.position=e,this.inclusive=t}}function ex(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){let s=t[i],a=e.position[i];if(r=s.field.isKeyField()?q.comparator(q.fromName(a.referenceValue),n.key):ew(a,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function eL(e,t){if(null===e)return null===t;if(null===t||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!ey(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eV{constructor(e,t="asc"){this.field=e,this.dir=t}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eM{}class eP extends eM{static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new eq(e,t,n):"array-contains"===t?new eQ(e,n):"in"===t?new ej(e,n):"not-in"===t?new eG(e,n):"array-contains-any"===t?new eH(e,n):new eP(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new eB(e,n):new eK(e,n)}matches(e){let t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(ew(t,this.value)):null!==t&&ep(this.value)===ep(t)&&this.matchesComparison(ew(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return w()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}}class eF extends eM{static create(e,t){return new eF(e,t)}matches(e){return eO(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.ce||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){let e=this.le(e=>e.isInequality());return null!==e?e.field:null}le(e){for(let t of this.getFlattenedFilters())if(e(t))return t;return null}constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}}function eO(e){return"and"===e.op}function eU(e){for(let t of e.filters)if(t instanceof eF)return!1;return!0}class eq extends eP{matches(e){let t=q.comparator(e.key,this.key);return this.matchesComparison(t)}constructor(e,t,n){super(e,t,n),this.key=q.fromName(n.referenceValue)}}class eB extends eP{matches(e){return this.keys.some(t=>t.isEqual(e.key))}constructor(e,t){super(e,"in",t),this.keys=ez("in",t)}}class eK extends eP{matches(e){return!this.keys.some(t=>t.isEqual(e.key))}constructor(e,t){super(e,"not-in",t),this.keys=ez("not-in",t)}}function ez(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>q.fromName(e.referenceValue))}class eQ extends eP{matches(e){let t=e.data.field(this.field);return eC(t)&&ev(t.arrayValue,this.value)}constructor(e,t){super(e,"array-contains",t)}}class ej extends eP{matches(e){let t=e.data.field(this.field);return null!==t&&ev(this.value.arrayValue,t)}constructor(e,t){super(e,"in",t)}}class eG extends eP{matches(e){if(ev(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;let t=e.data.field(this.field);return null!==t&&!ev(this.value.arrayValue,t)}constructor(e,t){super(e,"not-in",t)}}class eH extends eP{matches(e){let t=e.data.field(this.field);return!(!eC(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>ev(this.value.arrayValue,e))}constructor(e,t){super(e,"array-contains-any",t)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eW{constructor(e,t=null,n=[],r=[],i=null,s=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=a,this.he=null}}function eY(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:null,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:null;return new eW(e,t,n,r,i,s,a)}function eX(e){if(null===e.he){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:"+e.filters.map(e=>(function e(t){if(t instanceof eP)return t.field.canonicalString()+t.op.toString()+eE(t.value);if(eU(t)&&eO(t))return t.filters.map(t=>e(t)).join(",");{let n=t.filters.map(t=>e(t)).join(",");return"".concat(t.op,"(").concat(n,")")}})(e)).join(",")+"|ob:"+e.orderBy.map(e=>e.field.canonicalString()+e.dir).join(","),null==e.limit||(t+="|l:"+e.limit),e.startAt&&(t+="|lb:"+(e.startAt.inclusive?"b:":"a:")+e.startAt.position.map(e=>eE(e)).join(",")),e.endAt&&(t+="|ub:"+(e.endAt.inclusive?"a:":"b:")+e.endAt.position.map(e=>eE(e)).join(",")),e.he=t}return e.he}function eJ(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++){var n,r;if(n=e.orderBy[i],r=t.orderBy[i],!(n.dir===r.dir&&n.field.isEqual(r.field)))return!1}if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!function e(t,n){return t instanceof eP?n instanceof eP&&t.op===n.op&&t.field.isEqual(n.field)&&ey(t.value,n.value):t instanceof eF?n instanceof eF&&t.op===n.op&&t.filters.length===n.filters.length&&t.filters.reduce((t,r,i)=>t&&e(r,n.filters[i]),!0):void w()}(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!eL(e.startAt,t.startAt)&&eL(e.endAt,t.endAt)}function eZ(e){return q.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e${constructor(e,t=null,n=[],r=[],i=null,s="F",a=null,o=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=a,this.endAt=o,this.Pe=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function e0(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function e1(e){if(null===e.Pe){e.Pe=[];let t=function(e){for(let t of e.filters){let e=t.getFirstInequalityField();if(null!==e)return e}return null}(e),n=e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null;if(null!==t&&null===n)t.isKeyField()||e.Pe.push(new eV(t)),e.Pe.push(new eV(U.keyField(),"asc"));else{let t=!1;for(let n of e.explicitOrderBy)e.Pe.push(n),n.field.isKeyField()&&(t=!0);if(!t){let t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.Pe.push(new eV(U.keyField(),t))}}}return e.Pe}function e2(e){return e.Ie||(e.Ie=function(e,t){if("F"===e.limitType)return eY(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{let t="desc"===e.dir?"asc":"desc";return new eV(e.field,t)});let n=e.endAt?new eR(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new eR(e.startAt.position,e.startAt.inclusive):null;return eY(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}(e,e1(e))),e.Ie}function e3(e,t,n){return new e$(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function e4(e,t){return eJ(e2(e),e2(t))&&e.limitType===t.limitType}function e9(e){return"".concat(eX(e2(e)),"|lt:").concat(e.limitType)}function e8(e){var t;let n;return"Query(target=".concat((n=(t=e2(e)).path.canonicalString(),null!==t.collectionGroup&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=", filters: [".concat(t.filters.map(e=>(function e(t){return t instanceof eP?"".concat(t.field.canonicalString()," ").concat(t.op," ").concat(eE(t.value)):t instanceof eF?t.op.toString()+" {"+t.getFilters().map(e).join(" ,")+"}":"Filter"})(e)).join(", "),"]")),null==t.limit||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=", orderBy: [".concat(t.orderBy.map(e=>"".concat(e.field.canonicalString()," (").concat(e.dir,")")).join(", "),"]")),t.startAt&&(n+=", startAt: "+(t.startAt.inclusive?"b:":"a:")+t.startAt.position.map(e=>eE(e)).join(",")),t.endAt&&(n+=", endAt: "+(t.endAt.inclusive?"a:":"b:")+t.endAt.position.map(e=>eE(e)).join(",")),"Target(".concat(n,")")),"; limitType=").concat(e.limitType,")")}function e5(e,t){return t.isFoundDocument()&&function(e,t){let n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):q.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(let n of e1(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(let n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(!e.startAt||!!function(e,t,n){let r=ex(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,e1(e),t))&&(!e.endAt||!!function(e,t,n){let r=ex(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,e1(e),t))}function e6(e){return(t,n)=>{let r=!1;for(let i of e1(e)){let e=function(e,t,n){let r=e.field.isKeyField()?q.comparator(t.key,n.key):function(e,t,n){let r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?ew(r,i):w()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return -1*r;default:return w()}}(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e7{get(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n){for(let[t,r]of n)if(this.equalsFn(t,e))return r}}has(e){return void 0!==this.get(e)}set(e,t){let n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){let t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){X(this.inner,(t,n)=>{for(let[t,r]of n)e(t,r)})}isEmpty(){return J(this.inner)}size(){return this.innerSize}constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let te=new Z(q.comparator),tt=new Z(q.comparator);function tn(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let r=tt;for(let e of t)r=r.insert(e.key,e);return r}function tr(e){let t=tt;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function ti(){return new e7(e=>e.toString(),(e,t)=>e.isEqual(t))}let ts=new Z(q.comparator),ta=new et(q.comparator);function to(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];let r=ta;for(let e of t)r=r.add(e);return r}let tl=new et(x);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:W(t)?"-0":t}}function tc(e){return{integerValue:""+e}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(){this._=void 0}}function td(e,t){return e instanceof tv?eT(t)||t&&"doubleValue"in t?t:{integerValue:0}:null}class tf extends th{}class tm extends th{constructor(e){super(),this.elements=e}}function tg(e,t){let n=t_(t);for(let t of e.elements)n.some(e=>ey(e,t))||n.push(t);return{arrayValue:{values:n}}}class tp extends th{constructor(e){super(),this.elements=e}}function ty(e,t){let n=t_(t);for(let t of e.elements)n=n.filter(e=>!ey(e,t));return{arrayValue:{values:n}}}class tv extends th{constructor(e,t){super(),this.serializer=e,this.Te=t}}function tw(e){return el(e.integerValue||e.doubleValue)}function t_(e){return eC(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class tE{constructor(e,t){this.version=e,this.transformResults=t}}class tT{static none(){return new tT}static exists(e){return new tT(void 0,e)}static updateTime(e){return new tT(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}constructor(e,t){this.updateTime=e,this.exists=t}}function tC(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class tI{}function tS(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new tL(e.key,tT.none()):new tk(e.key,e.data,tT.none());{let n=e.data,r=eb.empty(),i=new et(U.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new tb(e.key,r,new er(i.toArray()),tT.none())}}function tA(e,t,n,r){return e instanceof tk?function(e,t,n,r){if(!tC(e.precondition,t))return n;let i=e.value.clone(),s=tx(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof tb?function(e,t,n,r){if(!tC(e.precondition,t))return n;let i=tx(e.fieldTransforms,r,t),s=t.data;return(s.setAll(tD(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n)?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):tC(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}function tN(e,t){var n,r;return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||!(!n||!r)&&L(n,r,(e,t)=>{var n,r;return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof tm&&r instanceof tm||n instanceof tp&&r instanceof tp?L(n.elements,r.elements,ey):n instanceof tv&&r instanceof tv?ey(n.Te,r.Te):n instanceof tf&&r instanceof tf)})))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class tk extends tI{getFieldMask(){return null}constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class tb extends tI{getFieldMask(){return this.fieldMask}constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function tD(e){let t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){let r=e.data.field(n);t.set(n,r)}}),t}function tR(e,t,n){var r;let i=new Map;e.length===n.length||w();for(let s=0;s<n.length;s++){let a=e[s],o=a.transform,l=t.data.field(a.field);i.set(a.field,(r=n[s],o instanceof tm?tg(o,l):o instanceof tp?ty(o,l):r))}return i}function tx(e,t,n){let r=new Map;for(let i of e){let e=i.transform,s=n.data.field(i.field);r.set(i.field,e instanceof tf?function(e,t){let n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&ec(t)&&(t=eh(t)),t&&(n.fields.__previous_value__=t),{mapValue:n}}(t,s):e instanceof tm?tg(e,s):e instanceof tp?ty(e,s):function(e,t){let n=td(e,t),r=tw(n)+tw(e.Te);return eT(n)&&eT(e.Te)?tc(r):tu(e.serializer,r)}(e,s))}return r}class tL extends tI{getFieldMask(){return null}constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class tV extends tI{getFieldMask(){return null}constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tM{applyToRemoteDocument(e,t){let n=t.mutationResults;for(let t=0;t<this.mutations.length;t++){let i=this.mutations[t];if(i.key.isEqual(e.key)){var r;r=n[t],i instanceof tk?function(e,t,n){let r=e.value.clone(),i=tR(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(i,e,r):i instanceof tb?function(e,t,n){if(!tC(e.precondition,t))return void t.convertToUnknownDocument(n.version);let r=tR(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(tD(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(i,e,r):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,r)}}}applyToLocalView(e,t){for(let n of this.baseMutations)n.key.isEqual(e.key)&&(t=tA(n,e,t,this.localWriteTime));for(let n of this.mutations)n.key.isEqual(e.key)&&(t=tA(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){let n=ti();return this.mutations.forEach(r=>{let i=e.get(r.key),s=i.overlayedDocument,a=this.applyToLocalView(s,i.mutatedFields),o=tS(s,a=t.has(r.key)?null:a);null!==o&&n.set(r.key,o),s.isValidDocument()||s.convertToNoDocument(M.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),to())}isEqual(e){return this.batchId===e.batchId&&L(this.mutations,e.mutations,(e,t)=>tN(e,t))&&L(this.baseMutations,e.baseMutations,(e,t)=>tN(e,t))}constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}}class tP{static from(e,t,n){e.mutations.length===n.length||w();let r=ts,i=e.mutations;for(let e=0;e<i.length;e++)r=r.insert(i[e].key,n[e].version);return new tP(e,t,n,r)}constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tF{getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return"Overlay{\n      largestBatchId: ".concat(this.largestBatchId,",\n      mutation: ").concat(this.mutation.toString(),"\n    }")}constructor(e,t){this.largestBatchId=e,this.mutation=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tO{constructor(e,t){this.count=e,this.unchangedNames=t}}function tU(e){if(void 0===e)return p("GRPC error has no .code"),_.UNKNOWN;switch(e){case r.OK:return _.OK;case r.CANCELLED:return _.CANCELLED;case r.UNKNOWN:return _.UNKNOWN;case r.DEADLINE_EXCEEDED:return _.DEADLINE_EXCEEDED;case r.RESOURCE_EXHAUSTED:return _.RESOURCE_EXHAUSTED;case r.INTERNAL:return _.INTERNAL;case r.UNAVAILABLE:return _.UNAVAILABLE;case r.UNAUTHENTICATED:return _.UNAUTHENTICATED;case r.INVALID_ARGUMENT:return _.INVALID_ARGUMENT;case r.NOT_FOUND:return _.NOT_FOUND;case r.ALREADY_EXISTS:return _.ALREADY_EXISTS;case r.PERMISSION_DENIED:return _.PERMISSION_DENIED;case r.FAILED_PRECONDITION:return _.FAILED_PRECONDITION;case r.ABORTED:return _.ABORTED;case r.OUT_OF_RANGE:return _.OUT_OF_RANGE;case r.UNIMPLEMENTED:return _.UNIMPLEMENTED;case r.DATA_LOSS:return _.DATA_LOSS;default:return w()}}(i=r||(r={}))[i.OK=0]="OK",i[i.CANCELLED=1]="CANCELLED",i[i.UNKNOWN=2]="UNKNOWN",i[i.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",i[i.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",i[i.NOT_FOUND=5]="NOT_FOUND",i[i.ALREADY_EXISTS=6]="ALREADY_EXISTS",i[i.PERMISSION_DENIED=7]="PERMISSION_DENIED",i[i.UNAUTHENTICATED=16]="UNAUTHENTICATED",i[i.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",i[i.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",i[i.ABORTED=10]="ABORTED",i[i.OUT_OF_RANGE=11]="OUT_OF_RANGE",i[i.UNIMPLEMENTED=12]="UNIMPLEMENTED",i[i.INTERNAL=13]="INTERNAL",i[i.UNAVAILABLE=14]="UNAVAILABLE",i[i.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tq=new u.z8([4294967295,4294967295],0);function tB(e){let t=(new TextEncoder).encode(e),n=new u.V8;return n.update(t),new Uint8Array(n.digest())}function tK(e){let t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new u.z8([n,r],0),new u.z8([i,s],0)]}class tz{Ve(e,t,n){let r=e.add(t.multiply(u.z8.fromNumber(n)));return 1===r.compare(tq)&&(r=new u.z8([r.getBits(0),r.getBits(1)],0)),r.modulo(this.Re).toNumber()}me(e){return 0!=(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.Ae)return!1;let[t,n]=tK(tB(e));for(let e=0;e<this.hashCount;e++){let r=this.Ve(t,n,e);if(!this.me(r))return!1}return!0}static create(e,t,n){let r=new tz(new Uint8Array(Math.ceil(e/8)),e%8==0?0:8-e%8,t);return n.forEach(e=>r.insert(e)),r}insert(e){if(0===this.Ae)return;let[t,n]=tK(tB(e));for(let e=0;e<this.hashCount;e++){let r=this.Ve(t,n,e);this.fe(r)}}fe(e){this.bitmap[Math.floor(e/8)]|=1<<e%8}constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new tQ("Invalid padding: ".concat(t));if(n<0||e.length>0&&0===this.hashCount)throw new tQ("Invalid hash count: ".concat(n));if(0===e.length&&0!==t)throw new tQ("Invalid padding when bitmap length is 0: ".concat(t));this.Ae=8*e.length-t,this.Re=u.z8.fromNumber(this.Ae)}}class tQ extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tj{static createSynthesizedRemoteEventForCurrentChange(e,t,n){let r=new Map;return r.set(e,tG.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new tj(M.min(),r,new Z(x),te,to())}constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}}class tG{static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new tG(n,t,to(),to(),to())}constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tH{constructor(e,t,n,r){this.ge=e,this.removedTargetIds=t,this.key=n,this.pe=r}}class tW{constructor(e,t){this.targetId=e,this.ye=t}}class tY{constructor(e,t,n=es.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class tX{get current(){return this.De}get resumeToken(){return this.be}get ve(){return 0!==this.we}get Fe(){return this.Ce}Me(e){e.approximateByteSize()>0&&(this.Ce=!0,this.be=e)}xe(){let e=to(),t=to(),n=to();return this.Se.forEach((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:w()}}),new tG(this.be,this.De,e,t,n)}Oe(){this.Ce=!1,this.Se=t$()}Ne(e,t){this.Ce=!0,this.Se=this.Se.insert(e,t)}Be(e){this.Ce=!0,this.Se=this.Se.remove(e)}Le(){this.we+=1}ke(){this.we-=1}qe(){this.Ce=!0,this.De=!0}constructor(){this.we=0,this.Se=t$(),this.be=es.EMPTY_BYTE_STRING,this.De=!1,this.Ce=!0}}class tJ{Ge(e){for(let t of e.ge)e.pe&&e.pe.isFoundDocument()?this.ze(t,e.pe):this.je(t,e.key,e.pe);for(let t of e.removedTargetIds)this.je(t,e.key,e.pe)}He(e){this.forEachTarget(e,t=>{let n=this.Je(t);switch(e.state){case 0:this.Ye(t)&&n.Me(e.resumeToken);break;case 1:n.ke(),n.ve||n.Oe(),n.Me(e.resumeToken);break;case 2:n.ke(),n.ve||this.removeTarget(t);break;case 3:this.Ye(t)&&(n.qe(),n.Me(e.resumeToken));break;case 4:this.Ye(t)&&(this.Ze(t),n.Me(e.resumeToken));break;default:w()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ke.forEach((e,n)=>{this.Ye(n)&&t(n)})}Xe(e){let t=e.targetId,n=e.ye.count,r=this.et(t);if(r){let i=r.target;if(eZ(i)){if(0===n){let e=new q(i.path);this.je(t,e,eD.newNoDocument(e,M.min()))}else 1===n||w()}else{let r=this.tt(t);if(r!==n){let n=this.nt(e),i=n?this.rt(n,e,r):1;0!==i&&(this.Ze(t),this.We=this.We.insert(t,2===i?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch"))}}}}nt(e){let t,n;let r=e.ye.unchangedNames;if(!r||!r.bits)return null;let{bits:{bitmap:i="",padding:s=0},hashCount:a=0}=r;try{t=eu(i).toUint8Array()}catch(e){if(e instanceof ei)return y("Decoding the base64 bloom filter in existence filter failed ("+e.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw e}try{n=new tz(t,s,a)}catch(e){return y(e instanceof tQ?"BloomFilter error: ":"Applying bloom filter failed: ",e),null}return 0===n.Ae?null:n}rt(e,t,n){return t.ye.count===n-this.ot(e,t.targetId)?0:2}ot(e,t){let n=this.Qe.getRemoteKeysForTarget(t),r=0;return n.forEach(n=>{let i=this.Qe.st(),s="projects/".concat(i.projectId,"/databases/").concat(i.database,"/documents/").concat(n.path.canonicalString());e.mightContain(s)||(this.je(t,n,null),r++)}),r}_t(e){let t=new Map;this.Ke.forEach((n,r)=>{let i=this.et(r);if(i){if(n.current&&eZ(i.target)){let t=new q(i.target.path);null!==this.$e.get(t)||this.ut(r,t)||this.je(r,t,eD.newNoDocument(t,e))}n.Fe&&(t.set(r,n.xe()),n.Oe())}});let n=to();this.Ue.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{let t=this.et(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.$e.forEach((t,n)=>n.setReadTime(e));let r=new tj(e,t,this.We,this.$e,n);return this.$e=te,this.Ue=tZ(),this.We=new Z(x),r}ze(e,t){if(!this.Ye(e))return;let n=this.ut(e,t.key)?2:0;this.Je(e).Ne(t.key,n),this.$e=this.$e.insert(t.key,t),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}je(e,t,n){if(!this.Ye(e))return;let r=this.Je(e);this.ut(e,t)?r.Ne(t,1):r.Be(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),n&&(this.$e=this.$e.insert(t,n))}removeTarget(e){this.Ke.delete(e)}tt(e){let t=this.Je(e).xe();return this.Qe.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Le(e){this.Je(e).Le()}Je(e){let t=this.Ke.get(e);return t||(t=new tX,this.Ke.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new et(x),this.Ue=this.Ue.insert(e,t)),t}Ye(e){let t=null!==this.et(e);return t||g("WatchChangeAggregator","Detected inactive target",e),t}et(e){let t=this.Ke.get(e);return t&&t.ve?null:this.Qe.lt(e)}Ze(e){this.Ke.set(e,new tX),this.Qe.getRemoteKeysForTarget(e).forEach(t=>{this.je(e,t,null)})}ut(e,t){return this.Qe.getRemoteKeysForTarget(e).has(t)}constructor(e){this.Qe=e,this.Ke=new Map,this.$e=te,this.Ue=tZ(),this.We=new Z(x)}}function tZ(){return new Z(q.comparator)}function t$(){return new Z(q.comparator)}let t0={asc:"ASCENDING",desc:"DESCENDING"},t1={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},t2={and:"AND",or:"OR"};class t3{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function t4(e,t){return e.useProto3Json||null==t?t:{value:t}}function t9(e,t){return e.useProto3Json?"".concat(new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z",""),".").concat(("000000000"+t.nanoseconds).slice(-9),"Z"):{seconds:""+t.seconds,nanos:t.nanoseconds}}function t8(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function t5(e){return e||w(),M.fromTimestamp(function(e){let t=eo(e);return new V(t.seconds,t.nanos)}(e))}function t6(e,t){return new F(["projects",e.projectId,"databases",e.database]).child("documents").child(t).canonicalString()}function t7(e){let t=F.fromString(e);return nl(t)||w(),t}function ne(e,t){return t6(e.databaseId,t.path)}function nt(e,t){let n=t7(t);if(n.get(1)!==e.databaseId.projectId)throw new E(_.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new E(_.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new q(ni(n))}function nn(e,t){return t6(e.databaseId,t)}function nr(e){return new F(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ni(e){return e.length>4&&"documents"===e.get(4)||w(),e.popFirst(5)}function ns(e,t,n){return{name:ne(e,t),fields:n.value.mapValue.fields}}function na(e){return{fieldPath:e.canonicalString()}}function no(e){return U.fromServerFormat(e.fieldPath)}function nl(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{withSequenceNumber(e){return new nu(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new nu(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new nu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new nu(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}constructor(e,t,n,r,i=M.min(),s=M.min(),a=es.EMPTY_BYTE_STRING,o=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=a,this.expectedCount=o}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nc{constructor(e){this.ht=e}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nh{dt(e,t){this.Tt(e,t),t.Et()}Tt(e,t){if("nullValue"in e)this.At(t,5);else if("booleanValue"in e)this.At(t,10),t.Rt(e.booleanValue?1:0);else if("integerValue"in e)this.At(t,15),t.Rt(el(e.integerValue));else if("doubleValue"in e){let n=el(e.doubleValue);isNaN(n)?this.At(t,13):(this.At(t,15),W(n)?t.Rt(0):t.Rt(n))}else if("timestampValue"in e){let n=e.timestampValue;this.At(t,20),"string"==typeof n?t.Vt(n):(t.Vt("".concat(n.seconds||"")),t.Rt(n.nanos||0))}else if("stringValue"in e)this.ft(e.stringValue,t),this.gt(t);else if("bytesValue"in e)this.At(t,30),t.yt(eu(e.bytesValue)),this.gt(t);else if("referenceValue"in e)this.wt(e.referenceValue,t);else if("geoPointValue"in e){let n=e.geoPointValue;this.At(t,45),t.Rt(n.latitude||0),t.Rt(n.longitude||0)}else"mapValue"in e?ek(e)?this.At(t,Number.MAX_SAFE_INTEGER):(this.St(e.mapValue,t),this.gt(t)):"arrayValue"in e?(this.bt(e.arrayValue,t),this.gt(t)):w()}ft(e,t){this.At(t,25),this.Dt(e,t)}Dt(e,t){t.Vt(e)}St(e,t){let n=e.fields||{};for(let e of(this.At(t,55),Object.keys(n)))this.ft(e,t),this.Tt(n[e],t)}bt(e,t){let n=e.values||[];for(let e of(this.At(t,50),n))this.Tt(e,t)}wt(e,t){this.At(t,37),q.fromName(e).path.forEach(e=>{this.At(t,60),this.Dt(e,t)})}At(e,t){e.Rt(t)}gt(e){e.Rt(2)}constructor(){}}nh.Ct=new nh;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nd{addToCollectionParentIndex(e,t){return this.an.add(t),j.resolve()}getCollectionParents(e,t){return j.resolve(this.an.getEntries(t))}addFieldIndex(e,t){return j.resolve()}deleteFieldIndex(e,t){return j.resolve()}deleteAllFieldIndexes(e){return j.resolve()}createTargetIndexes(e,t){return j.resolve()}getDocumentsMatchingTarget(e,t){return j.resolve(null)}getIndexType(e,t){return j.resolve(0)}getFieldIndexes(e,t){return j.resolve([])}getNextCollectionGroupToUpdate(e){return j.resolve(null)}getMinOffset(e,t){return j.resolve(K.min())}getMinOffsetFromCollectionGroup(e,t){return j.resolve(K.min())}updateCollectionGroup(e,t,n){return j.resolve()}updateIndexEntries(e,t){return j.resolve()}constructor(){this.an=new nf}}class nf{add(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new et(F.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){let t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new et(F.comparator)).toArray()}constructor(){this.index={}}}new Uint8Array(0);class nm{static withCacheSize(e){return new nm(e,nm.DEFAULT_COLLECTION_PERCENTILE,nm.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */nm.DEFAULT_COLLECTION_PERCENTILE=10,nm.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,nm.DEFAULT=new nm(41943040,nm.DEFAULT_COLLECTION_PERCENTILE,nm.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),nm.DISABLED=new nm(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ng{next(){return this.Nn+=2,this.Nn}static Bn(){return new ng(0)}static Ln(){return new ng(-1)}constructor(e){this.Nn=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,eD.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();let n=this.changes.get(t);return void 0!==n?j.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}constructor(){this.changes=new e7(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ny{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&tA(n.mutation,e,er.empty(),V.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,to()).next(()=>t))}getLocalViewOfDocuments(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:to(),r=ti();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=tn();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){let n=ti();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,to()))}populateOverlays(e,t,n){let r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let i=te,s=ti(),a=ti();return t.forEach((e,t)=>{let a=n.get(t.key);r.has(t.key)&&(void 0===a||a.mutation instanceof tb)?i=i.insert(t.key,t):void 0!==a?(s.set(t.key,a.mutation.getFieldMask()),tA(a.mutation,t,a.mutation.getFieldMask(),V.now())):s.set(t.key,er.empty())}),this.recalculateAndSaveOverlays(e,i).next(e=>(e.forEach((e,t)=>s.set(e,t)),t.forEach((e,t)=>{var n;return a.set(e,new ny(t,null!==(n=s.get(e))&&void 0!==n?n:null))}),a))}recalculateAndSaveOverlays(e,t){let n=ti(),r=new Z((e,t)=>e-t),i=to();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(let i of e)i.keys().forEach(e=>{let s=t.get(e);if(null===s)return;let a=n.get(e)||er.empty();a=i.applyToLocalView(s,a),n.set(e,a);let o=(r.get(i.batchId)||to()).add(e);r=r.insert(i.batchId,o)})}).next(()=>{let s=[],a=r.getReverseIterator();for(;a.hasNext();){let r=a.getNext(),o=r.key,l=r.value,u=ti();l.forEach(e=>{if(!i.has(e)){let r=tS(t.get(e),n.get(e));null!==r&&u.set(e,r),i=i.add(e)}}),s.push(this.documentOverlayCache.saveOverlays(e,o,u))}return j.waitFor(s)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return q.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):null!==t.collectionGroup?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(i=>{let s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):j.resolve(ti()),a=-1,o=i;return s.next(t=>j.forEach(t,(t,n)=>(a<n.largestBatchId&&(a=n.largestBatchId),i.get(t)?j.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{o=o.insert(t,e)}))).next(()=>this.populateOverlays(e,t,i)).next(()=>this.computeViews(e,o,t,to())).next(e=>({batchId:a,changes:tr(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new q(t)).next(e=>{let t=tn();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){let i=t.collectionGroup,s=tn();return this.indexManager.getCollectionParents(e,i).next(a=>j.forEach(a,a=>{let o=new e$(a.child(i),null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt);return this.getDocumentsMatchingCollectionQuery(e,o,n,r).next(e=>{e.forEach((e,t)=>{s=s.insert(e,t)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,t,n,r){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(s=>(i=s,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i,r))).next(e=>{i.forEach((t,n)=>{let r=n.getKey();null===e.get(r)&&(e=e.insert(r,eD.newInvalidDocument(r)))});let n=tn();return e.forEach((e,r)=>{let s=i.get(e);void 0!==s&&tA(s.mutation,r,er.empty(),V.now()),e5(t,r)&&(n=n.insert(e,r))}),n})}constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nw{getBundleMetadata(e,t){return j.resolve(this.lr.get(t))}saveBundleMetadata(e,t){return this.lr.set(t.id,{id:t.id,version:t.version,createTime:t5(t.createTime)}),j.resolve()}getNamedQuery(e,t){return j.resolve(this.hr.get(t))}saveNamedQuery(e,t){return this.hr.set(t.name,{name:t.name,query:function(e){let t=function(e){var t;let n,r=function(e){let t=t7(e);return 4===t.length?F.emptyPath():ni(t)}(e.parent),i=e.structuredQuery,s=i.from?i.from.length:0,a=null;if(s>0){1===s||w();let e=i.from[0];e.allDescendants?a=e.collectionId:r=r.child(e.collectionId)}let o=[];i.where&&(o=function(e){var t;let n=function e(t){return void 0!==t.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":let t=no(e.unaryFilter.field);return eP.create(t,"==",{doubleValue:NaN});case"IS_NULL":let n=no(e.unaryFilter.field);return eP.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":let r=no(e.unaryFilter.field);return eP.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":let i=no(e.unaryFilter.field);return eP.create(i,"!=",{nullValue:"NULL_VALUE"});default:return w()}}(t):void 0!==t.fieldFilter?eP.create(no(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return w()}}(t.fieldFilter.op),t.fieldFilter.value):void 0!==t.compositeFilter?eF.create(t.compositeFilter.filters.map(t=>e(t)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return w()}}(t.compositeFilter.op)):w()}(e);return n instanceof eF&&eU(t=n)&&eO(t)?n.getFilters():[n]}(i.where));let l=[];i.orderBy&&(l=i.orderBy.map(e=>new eV(no(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))));let u=null;i.limit&&(u=null==(n="object"==typeof(t=i.limit)?t.value:t)?null:n);let c=null;i.startAt&&(c=function(e){let t=!!e.before;return new eR(e.values||[],t)}(i.startAt));let h=null;return i.endAt&&(h=function(e){let t=!e.before;return new eR(e.values||[],t)}(i.endAt)),new e$(r,a,l,o,u,"F",c,h)}({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?e3(t,t.limit,"L"):t}(t.bundledQuery),readTime:t5(t.readTime)}),j.resolve()}constructor(e){this.serializer=e,this.lr=new Map,this.hr=new Map}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{getOverlay(e,t){return j.resolve(this.overlays.get(t))}getOverlays(e,t){let n=ti();return j.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.It(e,t,r)}),j.resolve()}removeOverlaysForBatchId(e,t,n){let r=this.Pr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.Pr.delete(n)),j.resolve()}getOverlaysForCollection(e,t,n){let r=ti(),i=t.length+1,s=new q(t.child("")),a=this.overlays.getIteratorFrom(s);for(;a.hasNext();){let e=a.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return j.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Z((e,t)=>e-t),s=this.overlays.getIterator();for(;s.hasNext();){let e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=ti(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}let a=ti(),o=i.getIterator();for(;o.hasNext()&&(o.getNext().value.forEach((e,t)=>a.set(e,t)),!(a.size()>=r)););return j.resolve(a)}It(e,t,n){let r=this.overlays.get(n.key);if(null!==r){let e=this.Pr.get(r.largestBatchId).delete(n.key);this.Pr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new tF(t,n));let i=this.Pr.get(t);void 0===i&&(i=to(),this.Pr.set(t,i)),this.Pr.set(t,i.add(n.key))}constructor(){this.overlays=new Z(q.comparator),this.Pr=new Map}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nE{isEmpty(){return this.Ir.isEmpty()}addReference(e,t){let n=new nT(e,t);this.Ir=this.Ir.add(n),this.Tr=this.Tr.add(n)}Ar(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Rr(new nT(e,t))}Vr(e,t){e.forEach(e=>this.removeReference(e,t))}mr(e){let t=new q(new F([])),n=new nT(t,e),r=new nT(t,e+1),i=[];return this.Tr.forEachInRange([n,r],e=>{this.Rr(e),i.push(e.key)}),i}gr(){this.Ir.forEach(e=>this.Rr(e))}Rr(e){this.Ir=this.Ir.delete(e),this.Tr=this.Tr.delete(e)}pr(e){let t=new q(new F([])),n=new nT(t,e),r=new nT(t,e+1),i=to();return this.Tr.forEachInRange([n,r],e=>{i=i.add(e.key)}),i}containsKey(e){let t=new nT(e,0),n=this.Ir.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}constructor(){this.Ir=new et(nT.dr),this.Tr=new et(nT.Er)}}class nT{static dr(e,t){return q.comparator(e.key,t.key)||x(e.yr,t.yr)}static Er(e,t){return x(e.yr,t.yr)||q.comparator(e.key,t.key)}constructor(e,t){this.key=e,this.yr=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nC{checkEmpty(e){return j.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){let i=this.wr;this.wr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];let s=new tM(i,t,n,r);for(let t of(this.mutationQueue.push(s),r))this.Sr=this.Sr.add(new nT(t.key,i)),this.indexManager.addToCollectionParentIndex(e,t.key.path.popLast());return j.resolve(s)}lookupMutationBatch(e,t){return j.resolve(this.br(t))}getNextMutationBatchAfterBatchId(e,t){let n=this.Dr(t+1),r=n<0?0:n;return j.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return j.resolve(0===this.mutationQueue.length?-1:this.wr-1)}getAllMutationBatches(e){return j.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){let n=new nT(t,0),r=new nT(t,Number.POSITIVE_INFINITY),i=[];return this.Sr.forEachInRange([n,r],e=>{let t=this.br(e.yr);i.push(t)}),j.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new et(x);return t.forEach(e=>{let t=new nT(e,0),r=new nT(e,Number.POSITIVE_INFINITY);this.Sr.forEachInRange([t,r],e=>{n=n.add(e.yr)})}),j.resolve(this.Cr(n))}getAllMutationBatchesAffectingQuery(e,t){let n=t.path,r=n.length+1,i=n;q.isDocumentKey(i)||(i=i.child(""));let s=new nT(new q(i),0),a=new et(x);return this.Sr.forEachWhile(e=>{let t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(a=a.add(e.yr)),!0)},s),j.resolve(this.Cr(a))}Cr(e){let t=[];return e.forEach(e=>{let n=this.br(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){0===this.vr(t.batchId,"removed")||w(),this.mutationQueue.shift();let n=this.Sr;return j.forEach(t.mutations,r=>{let i=new nT(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Sr=n})}xn(e){}containsKey(e,t){let n=new nT(t,0),r=this.Sr.firstAfterOrEqual(n);return j.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,j.resolve()}vr(e,t){return this.Dr(e)}Dr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}br(e){let t=this.Dr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.wr=1,this.Sr=new et(nT.dr)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nI{setIndexManager(e){this.indexManager=e}addEntry(e,t){let n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.Fr(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){let t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){let n=this.docs.get(t);return j.resolve(n?n.document.mutableCopy():eD.newInvalidDocument(t))}getEntries(e,t){let n=te;return t.forEach(e=>{let t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():eD.newInvalidDocument(e))}),j.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let i=te,s=t.path,a=new q(s.child("")),o=this.docs.getIteratorFrom(a);for(;o.hasNext();){let{key:e,value:{document:a}}=o.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||0>=function(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:0!==(n=q.comparator(e.documentKey,t.documentKey))?n:x(e.largestBatchId,t.largestBatchId)}(new K(a.readTime,a.key,-1),n)||(r.has(a.key)||e5(t,a))&&(i=i.insert(a.key,a.mutableCopy()))}return j.resolve(i)}getAllFromCollectionGroup(e,t,n,r){w()}Mr(e,t){return j.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new nS(this)}getSize(e){return j.resolve(this.size)}constructor(e){this.Fr=e,this.docs=new Z(q.comparator),this.size=0}}class nS extends np{applyChanges(e){let t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.ur.addEntry(e,r)):this.ur.removeEntry(n)}),j.waitFor(t)}getFromCache(e,t){return this.ur.getEntry(e,t)}getAllFromCache(e,t){return this.ur.getEntries(e,t)}constructor(e){super(),this.ur=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nA{forEachTarget(e,t){return this.Or.forEach((e,n)=>t(n)),j.resolve()}getLastRemoteSnapshotVersion(e){return j.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return j.resolve(this.Nr)}allocateTargetId(e){return this.highestTargetId=this.Lr.next(),j.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Nr&&(this.Nr=t),j.resolve()}Qn(e){this.Or.set(e.target,e);let t=e.targetId;t>this.highestTargetId&&(this.Lr=new ng(t),this.highestTargetId=t),e.sequenceNumber>this.Nr&&(this.Nr=e.sequenceNumber)}addTargetData(e,t){return this.Qn(t),this.targetCount+=1,j.resolve()}updateTargetData(e,t){return this.Qn(t),j.resolve()}removeTargetData(e,t){return this.Or.delete(t.target),this.Br.mr(t.targetId),this.targetCount-=1,j.resolve()}removeTargets(e,t,n){let r=0,i=[];return this.Or.forEach((s,a)=>{a.sequenceNumber<=t&&null===n.get(a.targetId)&&(this.Or.delete(s),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),r++)}),j.waitFor(i).next(()=>r)}getTargetCount(e){return j.resolve(this.targetCount)}getTargetData(e,t){let n=this.Or.get(t)||null;return j.resolve(n)}addMatchingKeys(e,t,n){return this.Br.Ar(t,n),j.resolve()}removeMatchingKeys(e,t,n){this.Br.Vr(t,n);let r=this.persistence.referenceDelegate,i=[];return r&&t.forEach(t=>{i.push(r.markPotentiallyOrphaned(e,t))}),j.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Br.mr(t),j.resolve()}getMatchingKeysForTargetId(e,t){let n=this.Br.pr(t);return j.resolve(n)}containsKey(e,t){return j.resolve(this.Br.containsKey(t))}constructor(e){this.persistence=e,this.Or=new e7(e=>eX(e),eJ),this.lastRemoteSnapshotVersion=M.min(),this.highestTargetId=0,this.Nr=0,this.Br=new nE,this.targetCount=0,this.Lr=ng.Bn()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nN{start(){return Promise.resolve()}shutdown(){return this.Qr=!1,Promise.resolve()}get started(){return this.Qr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new n_,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.kr[e.toKey()];return n||(n=new nC(t,this.referenceDelegate),this.kr[e.toKey()]=n),n}getTargetCache(){return this.Kr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ur}runTransaction(e,t,n){g("MemoryPersistence","Starting transaction:",e);let r=new nk(this.qr.next());return this.referenceDelegate.Wr(),n(r).next(e=>this.referenceDelegate.Gr(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}zr(e,t){return j.or(Object.values(this.kr).map(n=>()=>n.containsKey(e,t)))}constructor(e,t){this.kr={},this.overlays={},this.qr=new H(0),this.Qr=!1,this.Qr=!0,this.referenceDelegate=e(this),this.Kr=new nA(this),this.indexManager=new nd,this.remoteDocumentCache=new nI(e=>this.referenceDelegate.$r(e)),this.serializer=new nc(t),this.Ur=new nw(this.serializer)}}class nk extends z{constructor(e){super(),this.currentSequenceNumber=e}}class nb{static Jr(e){return new nb(e)}get Yr(){if(this.Hr)return this.Hr;throw w()}addReference(e,t,n){return this.jr.addReference(n,t),this.Yr.delete(n.toString()),j.resolve()}removeReference(e,t,n){return this.jr.removeReference(n,t),this.Yr.add(n.toString()),j.resolve()}markPotentiallyOrphaned(e,t){return this.Yr.add(t.toString()),j.resolve()}removeTarget(e,t){this.jr.mr(t.targetId).forEach(e=>this.Yr.add(e.toString()));let n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.Yr.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Wr(){this.Hr=new Set}Gr(e){let t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return j.forEach(this.Yr,n=>{let r=q.fromPath(n);return this.Zr(e,r).next(e=>{e||t.removeEntry(r,M.min())})}).next(()=>(this.Hr=null,t.apply(e)))}updateLimboDocument(e,t){return this.Zr(e,t).next(e=>{e?this.Yr.delete(t.toString()):this.Yr.add(t.toString())})}$r(e){return 0}Zr(e,t){return j.or([()=>j.resolve(this.jr.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.zr(e,t)])}constructor(e){this.persistence=e,this.jr=new nE,this.Hr=null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nD{static $i(e,t){let n=to(),r=to();for(let e of t.docChanges)switch(e.type){case 0:n=n.add(e.doc.key);break;case 1:r=r.add(e.doc.key)}return new nD(e,t.fromCache,n,r)}constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Qi=n,this.Ki=r}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nR{get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}constructor(){this._documentReadCount=0}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nx{initialize(e,t){this.ji=e,this.indexManager=t,this.Ui=!0}getDocumentsMatchingQuery(e,t,n,r){let i={result:null};return this.Hi(e,t).next(e=>{i.result=e}).next(()=>{if(!i.result)return this.Ji(e,t,r,n).next(e=>{i.result=e})}).next(()=>{if(i.result)return;let n=new nR;return this.Yi(e,t,n).next(r=>{if(i.result=r,this.Wi)return this.Zi(e,t,n,r.size)})}).next(()=>i.result)}Zi(e,t,n,r){return n.documentReadCount<this.Gi?(m()<=o.in.DEBUG&&g("QueryEngine","SDK will not create cache indexes for query:",e8(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Gi,"documents"),j.resolve()):(m()<=o.in.DEBUG&&g("QueryEngine","Query:",e8(t),"scans",n.documentReadCount,"local documents and returns",r,"documents as results."),n.documentReadCount>this.zi*r?(m()<=o.in.DEBUG&&g("QueryEngine","The SDK decides to create cache indexes for query:",e8(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,e2(t))):j.resolve())}Hi(e,t){if(e0(t))return j.resolve(null);let n=e2(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(n=e2(t=e3(t,null,"F"))),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{let i=to(...r);return this.ji.getDocuments(e,i).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{let s=this.Xi(t,r);return this.es(t,s,i,n.readTime)?this.Hi(e,e3(t,null,"F")):this.ts(e,s,t,n)}))})))}Ji(e,t,n,r){return e0(t)||r.isEqual(M.min())?j.resolve(null):this.ji.getDocuments(e,n).next(i=>{let s=this.Xi(t,i);return this.es(t,s,n,r)?j.resolve(null):(m()<=o.in.DEBUG&&g("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),e8(t)),this.ts(e,s,t,function(e,t){let n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1;return new K(M.fromTimestamp(1e9===r?new V(n+1,0):new V(n,r)),q.empty(),-1)}(r,0)).next(e=>e))})}Xi(e,t){let n=new et(e6(e));return t.forEach((t,r)=>{e5(e,r)&&(n=n.add(r))}),n}es(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;let i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Yi(e,t,n){return m()<=o.in.DEBUG&&g("QueryEngine","Using full collection scan to execute query:",e8(t)),this.ji.getDocumentsMatchingQuery(e,t,K.min(),n)}ts(e,t,n,r){return this.ji.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}constructor(){this.Ui=!1,this.Wi=!1,this.Gi=100,this.zi=2}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nL{us(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nv(this._s,this.mutationQueue,this.documentOverlayCache,this.indexManager),this._s.setIndexManager(this.indexManager),this.ns.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.rs))}constructor(e,t,n,r){this.persistence=e,this.ns=t,this.serializer=r,this.rs=new Z(x),this.ss=new e7(e=>eX(e),eJ),this.os=new Map,this._s=e.getRemoteDocumentCache(),this.Kr=e.getTargetCache(),this.Ur=e.getBundleCache(),this.us(n)}}async function nV(e,t){return await e.persistence.runTransaction("Handle user change","readonly",n=>{let r;return e.mutationQueue.getAllMutationBatches(n).next(i=>(r=i,e.us(t),e.mutationQueue.getAllMutationBatches(n))).next(t=>{let i=[],s=[],a=to();for(let e of r)for(let t of(i.push(e.batchId),e.mutations))a=a.add(t.key);for(let e of t)for(let t of(s.push(e.batchId),e.mutations))a=a.add(t.key);return e.localDocuments.getDocuments(n,a).next(e=>({cs:e,removedBatchIds:i,addedBatchIds:s}))})})}function nM(e){return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Kr.getLastRemoteSnapshotVersion(t))}async function nP(e,t,n){let r=e.rs.get(t);try{n||await e.persistence.runTransaction("Release target",n?"readwrite":"readwrite-primary",t=>e.persistence.referenceDelegate.removeTarget(t,r))}catch(e){if(!G(e))throw e;g("LocalStore","Failed to update sequence numbers for target ".concat(t,": ").concat(e))}e.rs=e.rs.remove(t),e.ss.delete(r.target)}function nF(e,t,n){let r=M.min(),i=to();return e.persistence.runTransaction("Execute query","readwrite",s=>(function(e,t,n){let r=e.ss.get(n);return void 0!==r?j.resolve(e.rs.get(r)):e.Kr.getTargetData(t,n)})(e,s,e2(t)).next(t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,e.Kr.getMatchingKeysForTargetId(s,t.targetId).next(e=>{i=e})}).next(()=>e.ns.getDocumentsMatchingQuery(s,t,n?r:M.min(),n?i:to())).next(n=>{var r;let s;return r=t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2)),s=e.os.get(r)||M.min(),n.forEach((e,t)=>{t.readTime.compareTo(s)>0&&(s=t.readTime)}),e.os.set(r,s),{documents:n,Ps:i}}))}class nO{Rs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}As(){return JSON.stringify({activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()})}constructor(){this.activeTargetIds=tl}}class nU{addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.ro.Rs(e),this.io[e]||"not-current"}updateQueryState(e,t,n){this.io[e]=t}removeLocalQueryTarget(e){this.ro.Vs(e)}isLocalQueryTarget(e){return this.ro.activeTargetIds.has(e)}clearQueryState(e){delete this.io[e]}getAllActiveQueryTargets(){return this.ro.activeTargetIds}isActiveQueryTarget(e){return this.ro.activeTargetIds.has(e)}start(){return this.ro=new nO,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}constructor(){this.ro=new nO,this.io={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nq{so(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nB{so(e){this.co.push(e)}shutdown(){window.removeEventListener("online",this.oo),window.removeEventListener("offline",this.ao)}lo(){window.addEventListener("online",this.oo),window.addEventListener("offline",this.ao)}_o(){for(let e of(g("ConnectivityMonitor","Network connectivity changed: AVAILABLE"),this.co))e(0)}uo(){for(let e of(g("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE"),this.co))e(1)}static C(){return void 0!==window.addEventListener&&void 0!==window.removeEventListener}constructor(){this.oo=()=>this._o(),this.ao=()=>this.uo(),this.co=[],this.lo()}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nK=null;function nz(){return null===nK?nK=268435456+Math.round(2147483648*Math.random()):nK++,"0x"+nK.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nQ={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nj{Io(e){this.To=e}Eo(e){this.Ao=e}onMessage(e){this.Ro=e}close(){this.Po()}send(e){this.ho(e)}Vo(){this.To()}mo(e){this.Ao(e)}fo(e){this.Ro(e)}constructor(e){this.ho=e.ho,this.Po=e.Po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let nG="WebChannelConnection";class nH extends class{get So(){return!1}bo(e,t,n,r,i){let s=nz(),a=this.Do(e,t);g("RestConnection","Sending RPC '".concat(e,"' ").concat(s,":"),a,n);let o={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Co(o,r,i),this.vo(e,a,o,n).then(t=>(g("RestConnection","Received RPC '".concat(e,"' ").concat(s,": "),t),t),t=>{throw y("RestConnection","RPC '".concat(e,"' ").concat(s," failed with error: "),t,"url: ",a,"request:",n),t})}Fo(e,t,n,r,i,s){return this.bo(e,t,n,r,i)}Co(e,t,n){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+d}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}Do(e,t){let n=nQ[e];return"".concat(this.po,"/v1/").concat(t,":").concat(n)}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;let t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo="projects/".concat(n,"/databases/").concat(r),this.wo="(default)"===this.databaseId.database?"project_id=".concat(n):"project_id=".concat(n,"&database_id=").concat(r)}}{vo(e,t,n,r){let i=nz();return new Promise((s,a)=>{let o=new u.JJ;o.setWithCredentials(!0),o.listenOnce(u.tw.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case u.jK.NO_ERROR:let t=o.getResponseJson();g(nG,"XHR for RPC '".concat(e,"' ").concat(i," received:"),JSON.stringify(t)),s(t);break;case u.jK.TIMEOUT:g(nG,"RPC '".concat(e,"' ").concat(i," timed out")),a(new E(_.DEADLINE_EXCEEDED,"Request time out"));break;case u.jK.HTTP_ERROR:let n=o.getStatus();if(g(nG,"RPC '".concat(e,"' ").concat(i," failed with status:"),n,"response text:",o.getResponseText()),n>0){let e=o.getResponseJson();Array.isArray(e)&&(e=e[0]);let t=null==e?void 0:e.error;if(t&&t.status&&t.message){let e=function(e){let t=e.toLowerCase().replace(/_/g,"-");return Object.values(_).indexOf(t)>=0?t:_.UNKNOWN}(t.status);a(new E(e,t.message))}else a(new E(_.UNKNOWN,"Server responded with status "+o.getStatus()))}else a(new E(_.UNAVAILABLE,"Connection failed."));break;default:w()}}finally{g(nG,"RPC '".concat(e,"' ").concat(i," completed."))}});let l=JSON.stringify(r);g(nG,"RPC '".concat(e,"' ").concat(i," sending request:"),r),o.send(t,"POST",l,n,15)})}Mo(e,t,n){let i=nz(),s=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],a=(0,u.UE)(),o=(0,u.FJ)(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:"projects/".concat(this.databaseId.projectId,"/databases/").concat(this.databaseId.database)},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},c=this.longPollingOptions.timeoutSeconds;void 0!==c&&(l.longPollingTimeout=Math.round(1e3*c)),this.useFetchStreams&&(l.useFetchStreams=!0),this.Co(l.initMessageHeaders,t,n),l.encodeInitMessageHeaders=!0;let h=s.join("");g(nG,"Creating RPC '".concat(e,"' stream ").concat(i,": ").concat(h),l);let d=a.createWebChannel(h,l),f=!1,m=!1,p=new nj({ho:t=>{m?g(nG,"Not sending because RPC '".concat(e,"' stream ").concat(i," is closed:"),t):(f||(g(nG,"Opening RPC '".concat(e,"' stream ").concat(i," transport.")),d.open(),f=!0),g(nG,"RPC '".concat(e,"' stream ").concat(i," sending:"),t),d.send(t))},Po:()=>d.close()}),v=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(e){setTimeout(()=>{throw e},0)}})};return v(d,u.ii.EventType.OPEN,()=>{m||g(nG,"RPC '".concat(e,"' stream ").concat(i," transport opened."))}),v(d,u.ii.EventType.CLOSE,()=>{m||(m=!0,g(nG,"RPC '".concat(e,"' stream ").concat(i," transport closed")),p.mo())}),v(d,u.ii.EventType.ERROR,t=>{m||(m=!0,y(nG,"RPC '".concat(e,"' stream ").concat(i," transport errored:"),t),p.mo(new E(_.UNAVAILABLE,"The operation could not be completed")))}),v(d,u.ii.EventType.MESSAGE,t=>{var n;if(!m){let s=t.data[0];s||w();let a=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(a){g(nG,"RPC '".concat(e,"' stream ").concat(i," received error:"),a);let t=a.status,n=function(e){let t=r[e];if(void 0!==t)return tU(t)}(t),s=a.message;void 0===n&&(n=_.INTERNAL,s="Unknown error status: "+t+" with message "+a.message),m=!0,p.mo(new E(n,s)),d.close()}else g(nG,"RPC '".concat(e,"' stream ").concat(i," received:"),s),p.fo(s)}}),v(o,u.ju.STAT_EVENT,t=>{t.stat===u.kN.PROXY?g(nG,"RPC '".concat(e,"' stream ").concat(i," detected buffering proxy")):t.stat===u.kN.NOPROXY&&g(nG,"RPC '".concat(e,"' stream ").concat(i," detected no buffering proxy"))}),setTimeout(()=>{p.Vo()},0),p}constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}}function nW(){return"undefined"!=typeof document?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nY(e){return new t3(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nX{reset(){this.Bo=0}qo(){this.Bo=this.No}Qo(e){this.cancel();let t=Math.floor(this.Bo+this.Ko()),n=Math.max(0,Date.now()-this.ko),r=Math.max(0,t-n);r>0&&g("ExponentialBackoff","Backing off for ".concat(r," ms (base delay: ").concat(this.Bo," ms, delay with jitter: ").concat(t," ms, last attempt: ").concat(n," ms ago)")),this.Lo=this._i.enqueueAfterDelay(this.timerId,r,()=>(this.ko=Date.now(),e())),this.Bo*=this.Oo,this.Bo<this.xo&&(this.Bo=this.xo),this.Bo>this.No&&(this.Bo=this.No)}$o(){null!==this.Lo&&(this.Lo.skipDelay(),this.Lo=null)}cancel(){null!==this.Lo&&(this.Lo.cancel(),this.Lo=null)}Ko(){return(Math.random()-.5)*this.Bo}constructor(e,t,n=1e3,r=1.5,i=6e4){this._i=e,this.timerId=t,this.xo=n,this.Oo=r,this.No=i,this.Bo=0,this.Lo=null,this.ko=Date.now(),this.reset()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nJ{Jo(){return 1===this.state||5===this.state||this.Yo()}Yo(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.Zo()}async stop(){this.Jo()&&await this.close(0)}Xo(){this.state=0,this.Ho.reset()}e_(){this.Yo()&&null===this.zo&&(this.zo=this._i.enqueueAfterDelay(this.Uo,6e4,()=>this.t_()))}n_(e){this.r_(),this.stream.send(e)}async t_(){if(this.Yo())return this.close(0)}r_(){this.zo&&(this.zo.cancel(),this.zo=null)}i_(){this.jo&&(this.jo.cancel(),this.jo=null)}async close(e,t){this.r_(),this.i_(),this.Ho.cancel(),this.Go++,4!==e?this.Ho.reset():t&&t.code===_.RESOURCE_EXHAUSTED?(p(t.toString()),p("Using maximum backoff delay to prevent overloading the backend."),this.Ho.qo()):t&&t.code===_.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.s_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Eo(t)}s_(){}auth(){this.state=1;let e=this.o_(this.Go),t=this.Go;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(e=>{let[n,r]=e;this.Go===t&&this.__(n,r)},t=>{e(()=>{let e=new E(_.UNKNOWN,"Fetching auth token failed: "+t.message);return this.a_(e)})})}__(e,t){let n=this.o_(this.Go);this.stream=this.u_(e,t),this.stream.Io(()=>{n(()=>(this.state=2,this.jo=this._i.enqueueAfterDelay(this.Wo,1e4,()=>(this.Yo()&&(this.state=3),Promise.resolve())),this.listener.Io()))}),this.stream.Eo(e=>{n(()=>this.a_(e))}),this.stream.onMessage(e=>{n(()=>this.onMessage(e))})}Zo(){this.state=5,this.Ho.Qo(async()=>{this.state=0,this.start()})}a_(e){return g("PersistentStream","close with error: ".concat(e)),this.stream=null,this.close(4,e)}o_(e){return t=>{this._i.enqueueAndForget(()=>this.Go===e?t():(g("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}constructor(e,t,n,r,i,s,a,o){this._i=e,this.Uo=n,this.Wo=r,this.connection=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=a,this.listener=o,this.state=0,this.Go=0,this.zo=null,this.jo=null,this.stream=null,this.Ho=new nX(e,t)}}class nZ extends nJ{u_(e,t){return this.connection.Mo("Listen",e,t)}onMessage(e){this.Ho.reset();let t=function(e,t){let n;if("targetChange"in t){var r,i;t.targetChange;let s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:w(),a=t.targetChange.targetIds||[],o=(i=t.targetChange.resumeToken,e.useProto3Json?(void 0===i||"string"==typeof i||w(),es.fromBase64String(i||"")):(void 0===i||i instanceof Uint8Array||w(),es.fromUint8Array(i||new Uint8Array))),l=t.targetChange.cause;n=new tY(s,a,o,l&&new E(void 0===l.code?_.UNKNOWN:tU(l.code),l.message||"")||null)}else if("documentChange"in t){t.documentChange;let r=t.documentChange;r.document,r.document.name,r.document.updateTime;let i=nt(e,r.document.name),s=t5(r.document.updateTime),a=r.document.createTime?t5(r.document.createTime):M.min(),o=new eb({mapValue:{fields:r.document.fields}}),l=eD.newFoundDocument(i,s,a,o);n=new tH(r.targetIds||[],r.removedTargetIds||[],l.key,l)}else if("documentDelete"in t){t.documentDelete;let r=t.documentDelete;r.document;let i=nt(e,r.document),s=r.readTime?t5(r.readTime):M.min(),a=eD.newNoDocument(i,s);n=new tH([],r.removedTargetIds||[],a.key,a)}else if("documentRemove"in t){t.documentRemove;let r=t.documentRemove;r.document;let i=nt(e,r.document);n=new tH([],r.removedTargetIds||[],i,null)}else{if(!("filter"in t))return w();{t.filter;let e=t.filter;e.targetId;let{count:r=0,unchangedNames:i}=e,s=new tO(r,i);n=new tW(e.targetId,s)}}return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return M.min();let t=e.targetChange;return t.targetIds&&t.targetIds.length?M.min():t.readTime?t5(t.readTime):M.min()}(e);return this.listener.c_(t,n)}l_(e){let t={};t.database=nr(this.serializer),t.addTarget=function(e,t){let n;let r=t.target;if((n=eZ(r)?{documents:{documents:[nn(e,r.path)]}}:{query:function(e,t){var n,r;let i={structuredQuery:{}},s=t.path;null!==t.collectionGroup?(i.parent=nn(e,s),i.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(i.parent=nn(e,s.popLast()),i.structuredQuery.from=[{collectionId:s.lastSegment()}]);let a=function(e){if(0!==e.length)return function e(t){return t instanceof eP?function(e){if("=="===e.op){if(eS(e.value))return{unaryFilter:{field:na(e.field),op:"IS_NAN"}};if(eI(e.value))return{unaryFilter:{field:na(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(eS(e.value))return{unaryFilter:{field:na(e.field),op:"IS_NOT_NAN"}};if(eI(e.value))return{unaryFilter:{field:na(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:na(e.field),op:t1[e.op],value:e.value}}}(t):t instanceof eF?function(t){let n=t.getFilters().map(t=>e(t));return 1===n.length?n[0]:{compositeFilter:{op:t2[t.op],filters:n}}}(t):w()}(eF.create(e,"and"))}(t.filters);a&&(i.structuredQuery.where=a);let o=function(e){if(0!==e.length)return e.map(e=>({field:na(e.field),direction:t0[e.dir]}))}(t.orderBy);o&&(i.structuredQuery.orderBy=o);let l=t4(e,t.limit);return null!==l&&(i.structuredQuery.limit=l),t.startAt&&(i.structuredQuery.startAt={before:(n=t.startAt).inclusive,values:n.position}),t.endAt&&(i.structuredQuery.endAt={before:!(r=t.endAt).inclusive,values:r.position}),i}(e,r)}).targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=t8(e,t.resumeToken);let r=t4(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(M.min())>0){n.readTime=t9(e,t.snapshotVersion.toTimestamp());let r=t4(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);let n=function(e,t){let n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return w()}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.n_(t)}h_(e){let t={};t.database=nr(this.serializer),t.removeTarget=e,this.n_(t)}constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i}}class n$ extends nJ{get I_(){return this.P_}start(){this.P_=!1,this.lastStreamToken=void 0,super.start()}s_(){this.P_&&this.d_([])}u_(e,t){return this.connection.Mo("Write",e,t)}onMessage(e){var t,n;if(e.streamToken||w(),this.lastStreamToken=e.streamToken,this.P_){this.Ho.reset();let r=(t=e.writeResults,n=e.commitTime,t&&t.length>0?(void 0!==n||w(),t.map(e=>{let t;return(t=e.updateTime?t5(e.updateTime):t5(n)).isEqual(M.min())&&(t=t5(n)),new tE(t,e.transformResults||[])})):[]),i=t5(e.commitTime);return this.listener.T_(i,r)}return e.writeResults&&0!==e.writeResults.length&&w(),this.P_=!0,this.listener.E_()}A_(){let e={};e.database=nr(this.serializer),this.n_(e)}d_(e){let t={streamToken:this.lastStreamToken,writes:e.map(e=>(function(e,t){var n;let r;if(t instanceof tk)r={update:ns(e,t.key,t.value)};else if(t instanceof tL)r={delete:ne(e,t.key)};else if(t instanceof tb)r={update:ns(e,t.key,t.data),updateMask:function(e){let t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}(t.fieldMask)};else{if(!(t instanceof tV))return w();r={verify:ne(e,t.key)}}return t.fieldTransforms.length>0&&(r.updateTransforms=t.fieldTransforms.map(e=>(function(e,t){let n=t.transform;if(n instanceof tf)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof tm)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof tp)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof tv)return{fieldPath:t.field.canonicalString(),increment:n.Te};throw w()})(0,e))),t.precondition.isNone||(r.currentDocument=void 0!==(n=t.precondition).updateTime?{updateTime:t9(e,n.updateTime.toTimestamp())}:void 0!==n.exists?{exists:n.exists}:w()),r})(this.serializer,e))};this.n_(t)}constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.serializer=i,this.P_=!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0 extends class{}{V_(){if(this.R_)throw new E(_.FAILED_PRECONDITION,"The client has already been terminated.")}bo(e,t,n){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(r=>{let[i,s]=r;return this.connection.bo(e,t,n,i,s)}).catch(e=>{throw"FirebaseError"===e.name?(e.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new E(_.UNKNOWN,e.toString())})}Fo(e,t,n,r){return this.V_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(i=>{let[s,a]=i;return this.connection.Fo(e,t,n,s,a,r)}).catch(e=>{throw"FirebaseError"===e.name?(e.code===_.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new E(_.UNKNOWN,e.toString())})}terminate(){this.R_=!0}constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.R_=!1}}class n1{y_(){0===this.f_&&(this.w_("Unknown"),this.g_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.g_=null,this.S_("Backend didn't respond within 10 seconds."),this.w_("Offline"),Promise.resolve())))}b_(e){"Online"===this.state?this.w_("Unknown"):(this.f_++,this.f_>=1&&(this.D_(),this.S_("Connection failed 1 times. Most recent error: ".concat(e.toString())),this.w_("Offline")))}set(e){this.D_(),this.f_=0,"Online"===e&&(this.p_=!1),this.w_(e)}w_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}S_(e){let t="Could not reach Cloud Firestore backend. ".concat(e,"\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.");this.p_?(p(t),this.p_=!1):g("OnlineStateTracker",t)}D_(){null!==this.g_&&(this.g_.cancel(),this.g_=null)}constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.f_=0,this.g_=null,this.p_=!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n2{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.C_=[],this.v_=new Map,this.F_=new Set,this.M_=[],this.x_=i,this.x_.so(e=>{n.enqueueAndForget(async()=>{rt(this)&&(g("RemoteStore","Restarting streams for network reachability change."),await async function(e){e.F_.add(4),await n4(e),e.O_.set("Unknown"),e.F_.delete(4),await n3(e)}(this))})}),this.O_=new n1(n,r)}}async function n3(e){if(rt(e))for(let t of e.M_)await t(!0)}async function n4(e){for(let t of e.M_)await t(!1)}function n9(e,t){e.v_.has(t.targetId)||(e.v_.set(t.targetId,t),re(e)?n7(e):rp(e).Yo()&&n5(e,t))}function n8(e,t){let n=rp(e);e.v_.delete(t),n.Yo()&&n6(e,t),0===e.v_.size&&(n.Yo()?n.e_():rt(e)&&e.O_.set("Unknown"))}function n5(e,t){if(e.N_.Le(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(M.min())>0){let n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}rp(e).l_(t)}function n6(e,t){e.N_.Le(t),rp(e).h_(t)}function n7(e){e.N_=new tJ({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),lt:t=>e.v_.get(t)||null,st:()=>e.datastore.serializer.databaseId}),rp(e).start(),e.O_.y_()}function re(e){return rt(e)&&!rp(e).Jo()&&e.v_.size>0}function rt(e){return 0===e.F_.size}async function rn(e){e.v_.forEach((t,n)=>{n5(e,t)})}async function rr(e,t){e.N_=void 0,re(e)?(e.O_.b_(t),n7(e)):e.O_.set("Unknown")}async function ri(e,t,n){if(e.O_.set("Online"),t instanceof tY&&2===t.state&&t.cause)try{await async function(e,t){let n=t.cause;for(let r of t.targetIds)e.v_.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.v_.delete(r),e.N_.removeTarget(r))}(e,t)}catch(n){g("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await rs(e,n)}else if(t instanceof tH?e.N_.Ge(t):t instanceof tW?e.N_.Xe(t):e.N_.He(t),!n.isEqual(M.min()))try{let t=await nM(e.localStore);n.compareTo(t)>=0&&await function(e,t){let n=e.N_._t(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){let i=e.v_.get(r);i&&e.v_.set(r,i.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{let r=e.v_.get(t);if(!r)return;e.v_.set(t,r.withResumeToken(es.EMPTY_BYTE_STRING,r.snapshotVersion)),n6(e,t);let i=new nu(r.target,t,n,r.sequenceNumber);n5(e,i)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){g("RemoteStore","Failed to raise snapshot:",t),await rs(e,t)}}async function rs(e,t,n){if(!G(t))throw t;e.F_.add(1),await n4(e),e.O_.set("Offline"),n||(n=()=>nM(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{g("RemoteStore","Retrying IndexedDB access"),await n(),e.F_.delete(1),await n3(e)})}function ra(e,t){return t().catch(n=>rs(e,n,t))}async function ro(e){let t=ry(e),n=e.C_.length>0?e.C_[e.C_.length-1].batchId:-1;for(;rt(e)&&e.C_.length<10;)try{let r=await function(e,t){return e.persistence.runTransaction("Get next mutation batch","readonly",n=>(void 0===t&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(n,t)))}(e.localStore,n);if(null===r){0===e.C_.length&&t.e_();break}n=r.batchId,function(e,t){e.C_.push(t);let n=ry(e);n.Yo()&&n.I_&&n.d_(t.mutations)}(e,r)}catch(t){await rs(e,t)}rl(e)&&ru(e)}function rl(e){return rt(e)&&!ry(e).Jo()&&e.C_.length>0}function ru(e){ry(e).start()}async function rc(e){ry(e).A_()}async function rh(e){let t=ry(e);for(let n of e.C_)t.d_(n.mutations)}async function rd(e,t,n){let r=e.C_.shift(),i=tP.from(r,t,n);await ra(e,()=>e.remoteSyncer.applySuccessfulWrite(i)),await ro(e)}async function rf(e,t){t&&ry(e).I_&&await async function(e,t){var n;if(function(e){switch(e){default:return w();case _.CANCELLED:case _.UNKNOWN:case _.DEADLINE_EXCEEDED:case _.RESOURCE_EXHAUSTED:case _.INTERNAL:case _.UNAVAILABLE:case _.UNAUTHENTICATED:return!1;case _.INVALID_ARGUMENT:case _.NOT_FOUND:case _.ALREADY_EXISTS:case _.PERMISSION_DENIED:case _.FAILED_PRECONDITION:case _.ABORTED:case _.OUT_OF_RANGE:case _.UNIMPLEMENTED:case _.DATA_LOSS:return!0}}(n=t.code)&&n!==_.ABORTED){let n=e.C_.shift();ry(e).Xo(),await ra(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await ro(e)}}(e,t),rl(e)&&ru(e)}async function rm(e,t){e.asyncQueue.verifyOperationInProgress(),g("RemoteStore","RemoteStore received new credentials");let n=rt(e);e.F_.add(3),await n4(e),n&&e.O_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.F_.delete(3),await n3(e)}async function rg(e,t){t?(e.F_.delete(2),await n3(e)):t||(e.F_.add(2),await n4(e),e.O_.set("Unknown"))}function rp(e){var t,n,r;return e.B_||(e.B_=(t=e.datastore,n=e.asyncQueue,r={Io:rn.bind(null,e),Eo:rr.bind(null,e),c_:ri.bind(null,e)},t.V_(),new nZ(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.M_.push(async t=>{t?(e.B_.Xo(),re(e)?n7(e):e.O_.set("Unknown")):(await e.B_.stop(),e.N_=void 0)})),e.B_}function ry(e){var t,n,r;return e.L_||(e.L_=(t=e.datastore,n=e.asyncQueue,r={Io:rc.bind(null,e),Eo:rf.bind(null,e),E_:rh.bind(null,e),T_:rd.bind(null,e)},t.V_(),new n$(n,t.connection,t.authCredentials,t.appCheckCredentials,t.serializer,r)),e.M_.push(async t=>{t?(e.L_.Xo(),await ro(e)):(await e.L_.stop(),e.C_.length>0&&(g("RemoteStore","Stopping write stream with ".concat(e.C_.length," pending writes")),e.C_=[]))})),e.L_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,i){let s=new rv(e,t,Date.now()+n,r,i);return s.start(n),s}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new E(_.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new T,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}}function rw(e,t){if(p("AsyncQueue","".concat(t,": ").concat(e)),G(e))return new E(_.UNAVAILABLE,"".concat(t,": ").concat(e));throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{static emptySet(e){return new r_(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){let t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){let t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){let t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof r_)||this.size!==e.size)return!1;let t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){let e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){let e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){let n=new r_;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}constructor(e){this.comparator=e?(t,n)=>e(t,n)||q.comparator(t.key,n.key):(e,t)=>q.comparator(e.key,t.key),this.keyedMap=tn(),this.sortedSet=new Z(this.comparator)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rE{track(e){let t=e.doc.key,n=this.k_.get(t);n?0!==e.type&&3===n.type?this.k_=this.k_.insert(t,e):3===e.type&&1!==n.type?this.k_=this.k_.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.k_=this.k_.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.k_=this.k_.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.k_=this.k_.remove(t):1===e.type&&2===n.type?this.k_=this.k_.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.k_=this.k_.insert(t,{type:2,doc:e.doc}):w():this.k_=this.k_.insert(t,e)}q_(){let e=[];return this.k_.inorderTraversal((t,n)=>{e.push(n)}),e}constructor(){this.k_=new Z(q.comparator)}}class rT{static fromInitialDocuments(e,t,n,r,i){let s=[];return t.forEach(e=>{s.push({type:0,doc:e})}),new rT(e,t,r_.emptySet(t),s,n,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&e4(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;let t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let e=0;e<t.length;e++)if(t[e].type!==n[e].type||!t[e].doc.isEqual(n[e].doc))return!1;return!0}constructor(e,t,n,r,i,s,a,o,l){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=a,this.excludesMetadataChanges=o,this.hasCachedResults=l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rC{constructor(){this.Q_=void 0,this.listeners=[]}}class rI{constructor(){this.queries=new e7(e=>e9(e),e4),this.onlineState="Unknown",this.K_=new Set}}async function rS(e,t){let n=t.query,r=!1,i=e.queries.get(n);if(i||(r=!0,i=new rC),r)try{i.Q_=await e.onListen(n)}catch(n){let e=rw(n,"Initialization of query '".concat(e8(t.query),"' failed"));return void t.onError(e)}e.queries.set(n,i),i.listeners.push(t),t.U_(e.onlineState),i.Q_&&t.W_(i.Q_)&&rb(e)}async function rA(e,t){let n=t.query,r=!1,i=e.queries.get(n);if(i){let e=i.listeners.indexOf(t);e>=0&&(i.listeners.splice(e,1),r=0===i.listeners.length)}if(r)return e.queries.delete(n),e.onUnlisten(n)}function rN(e,t){let n=!1;for(let r of t){let t=r.query,i=e.queries.get(t);if(i){for(let e of i.listeners)e.W_(r)&&(n=!0);i.Q_=r}}n&&rb(e)}function rk(e,t,n){let r=e.queries.get(t);if(r)for(let e of r.listeners)e.onError(n);e.queries.delete(t)}function rb(e){e.K_.forEach(e=>{e.next()})}class rD{W_(e){if(!this.options.includeMetadataChanges){let t=[];for(let n of e.docChanges)3!==n.type&&t.push(n);e=new rT(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.z_?this.H_(e)&&(this.G_.next(e),t=!0):this.J_(e,this.onlineState)&&(this.Y_(e),t=!0),this.j_=e,t}onError(e){this.G_.error(e)}U_(e){this.onlineState=e;let t=!1;return this.j_&&!this.z_&&this.J_(this.j_,e)&&(this.Y_(this.j_),t=!0),t}J_(e,t){return!e.fromCache||(!this.options.Z_||!("Offline"!==t))&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}H_(e){if(e.docChanges.length>0)return!0;let t=this.j_&&this.j_.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Y_(e){e=rT.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.z_=!0,this.G_.next(e)}constructor(e,t,n){this.query=e,this.G_=t,this.z_=!1,this.j_=null,this.onlineState="Unknown",this.options=n||{}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e){this.key=e}}class rx{constructor(e){this.key=e}}class rL{get la(){return this.oa}ha(e,t){let n=t?t.Pa:new rE,r=t?t.ca:this.ca,i=t?t.mutatedKeys:this.mutatedKeys,s=r,a=!1,o="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{let u=r.get(e),c=e5(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!c&&(c.hasLocalMutations||this.mutatedKeys.has(c.key)&&c.hasCommittedMutations),f=!1;u&&c?u.data.isEqual(c.data)?h!==d&&(n.track({type:3,doc:c}),f=!0):this.Ia(u,c)||(n.track({type:2,doc:c}),f=!0,(o&&this.ua(c,o)>0||l&&0>this.ua(c,l))&&(a=!0)):!u&&c?(n.track({type:0,doc:c}),f=!0):u&&!c&&(n.track({type:1,doc:u}),f=!0,(o||l)&&(a=!0)),f&&(c?(s=s.add(c),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))}),null!==this.query.limit)for(;s.size>this.query.limit;){let e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{ca:s,Pa:n,es:a,mutatedKeys:i}}Ia(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){let r=this.ca;this.ca=e.ca,this.mutatedKeys=e.mutatedKeys;let i=e.Pa.q_();i.sort((e,t)=>(function(e,t){let n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return w()}};return n(e)-n(t)})(e.type,t.type)||this.ua(e.doc,t.doc)),this.da(n);let s=t?this.Ta():[],a=0===this.aa.size&&this.current?1:0,o=a!==this._a;return(this._a=a,0!==i.length||o)?{snapshot:new rT(this.query,e.ca,r,i,e.mutatedKeys,0===a,o,!1,!!n&&n.resumeToken.approximateByteSize()>0),Ea:s}:{Ea:s}}U_(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({ca:this.ca,Pa:new rE,mutatedKeys:this.mutatedKeys,es:!1},!1)):{Ea:[]}}Aa(e){return!this.oa.has(e)&&!!this.ca.has(e)&&!this.ca.get(e).hasLocalMutations}da(e){e&&(e.addedDocuments.forEach(e=>this.oa=this.oa.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.oa=this.oa.delete(e)),this.current=e.current)}Ta(){if(!this.current)return[];let e=this.aa;this.aa=to(),this.ca.forEach(e=>{this.Aa(e.key)&&(this.aa=this.aa.add(e.key))});let t=[];return e.forEach(e=>{this.aa.has(e)||t.push(new rx(e))}),this.aa.forEach(n=>{e.has(n)||t.push(new rR(n))}),t}Ra(e){this.oa=e.Ps,this.aa=to();let t=this.ha(e.documents);return this.applyChanges(t,!0)}Va(){return rT.fromInitialDocuments(this.query,this.ca,this.mutatedKeys,0===this._a,this.hasCachedResults)}constructor(e,t){this.query=e,this.oa=t,this._a=null,this.hasCachedResults=!1,this.current=!1,this.aa=to(),this.mutatedKeys=to(),this.ua=e6(e),this.ca=new r_(this.ua)}}class rV{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class rM{constructor(e){this.key=e,this.ma=!1}}class rP{get isPrimaryClient(){return!0===this.Fa}constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.fa={},this.ga=new e7(e=>e9(e),e4),this.pa=new Map,this.ya=new Set,this.wa=new Z(q.comparator),this.Sa=new Map,this.ba=new nE,this.Da={},this.Ca=new Map,this.va=ng.Ln(),this.onlineState="Unknown",this.Fa=void 0}}async function rF(e,t){var n,r;let i,s;let a=(e.remoteStore.remoteSyncer.applyRemoteEvent=rB.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=r0.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=rz.bind(null,e),e.fa.c_=rN.bind(null,e.eventManager),e.fa.xa=rk.bind(null,e.eventManager),e),o=a.ga.get(t);if(o)i=o.targetId,a.sharedClientState.addLocalQueryTarget(i),s=o.view.Va();else{let e=await (n=a.localStore,r=e2(t),n.persistence.runTransaction("Allocate target","readwrite",e=>{let t;return n.Kr.getTargetData(e,r).next(i=>i?(t=i,j.resolve(t)):n.Kr.allocateTargetId(e).next(i=>(t=new nu(r,i,"TargetPurposeListen",e.currentSequenceNumber),n.Kr.addTargetData(e,t).next(()=>t))))}).then(e=>{let t=n.rs.get(e.targetId);return(null===t||e.snapshotVersion.compareTo(t.snapshotVersion)>0)&&(n.rs=n.rs.insert(e.targetId,e),n.ss.set(r,e.targetId)),e})),o=a.sharedClientState.addLocalQueryTarget(e.targetId);i=e.targetId,s=await rO(a,t,i,"current"===o,e.resumeToken),a.isPrimaryClient&&n9(a.remoteStore,e)}return s}async function rO(e,t,n,r,i){e.Ma=(t,n,r)=>(async function(e,t,n,r){let i=t.view.ha(n);i.es&&(i=await nF(e.localStore,t.query,!1).then(e=>{let{documents:n}=e;return t.view.ha(n,i)}));let s=r&&r.targetChanges.get(t.targetId),a=t.view.applyChanges(i,e.isPrimaryClient,s);return rX(e,t.targetId,a.Ea),a.snapshot})(e,t,n,r);let s=await nF(e.localStore,t,!0),a=new rL(t,s.Ps),o=a.ha(s.documents),l=tG.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,i),u=a.applyChanges(o,e.isPrimaryClient,l);rX(e,n,u.Ea);let c=new rV(t,n,a);return e.ga.set(t,c),e.pa.has(n)?e.pa.get(n).push(t):e.pa.set(n,[t]),u.snapshot}async function rU(e,t){let n=e.ga.get(t),r=e.pa.get(n.targetId);if(r.length>1)return e.pa.set(n.targetId,r.filter(e=>!e4(e,t))),void e.ga.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(n.targetId),e.sharedClientState.isActiveQueryTarget(n.targetId)||await nP(e.localStore,n.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(n.targetId),n8(e.remoteStore,n.targetId),rW(e,n.targetId)}).catch(Q)):(rW(e,n.targetId),await nP(e.localStore,n.targetId,!0))}async function rq(e,t,n){var r;let i=(e.remoteStore.remoteSyncer.applySuccessfulWrite=rQ.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=rj.bind(null,e),e);try{let e;let s=await function(e,t){let n,r;let i=V.now(),s=t.reduce((e,t)=>e.add(t.key),to());return e.persistence.runTransaction("Locally write mutations","readwrite",a=>{let o=te,l=to();return e._s.getEntries(a,s).next(e=>{(o=e).forEach((e,t)=>{t.isValidDocument()||(l=l.add(e))})}).next(()=>e.localDocuments.getOverlayedDocuments(a,o)).next(r=>{n=r;let s=[];for(let e of t){let t=function(e,t){let n=null;for(let r of e.fieldTransforms){let e=t.data.field(r.field),i=td(r.transform,e||null);null!=i&&(null===n&&(n=eb.empty()),n.set(r.field,i))}return n||null}(e,n.get(e.key).overlayedDocument);null!=t&&s.push(new tb(e.key,t,function e(t){let n=[];return X(t.fields,(t,r)=>{let i=new U([t]);if(eA(r)){let t=e(r.mapValue).fields;if(0===t.length)n.push(i);else for(let e of t)n.push(i.child(e))}else n.push(i)}),new er(n)}(t.value.mapValue),tT.exists(!0)))}return e.mutationQueue.addMutationBatch(a,i,s,t)}).next(t=>{r=t;let i=t.applyToLocalDocumentSet(n,l);return e.documentOverlayCache.saveOverlays(a,t.batchId,i)})}).then(()=>({batchId:r.batchId,changes:tr(n)}))}(i.localStore,t);i.sharedClientState.addPendingMutation(s.batchId),r=s.batchId,(e=i.Da[i.currentUser.toKey()])||(e=new Z(x)),e=e.insert(r,n),i.Da[i.currentUser.toKey()]=e,await rZ(i,s.changes),await ro(i.remoteStore)}catch(t){let e=rw(t,"Failed to persist write");n.reject(e)}}async function rB(e,t){try{let n=await function(e,t){let n=t.snapshotVersion,r=e.rs;return e.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{var s;let a,o;let l=e._s.newChangeBuffer({trackRemovals:!0});r=e.rs;let u=[];t.targetChanges.forEach((s,a)=>{var o;let l=r.get(a);if(!l)return;u.push(e.Kr.removeMatchingKeys(i,s.removedDocuments,a).next(()=>e.Kr.addMatchingKeys(i,s.addedDocuments,a)));let c=l.withSequenceNumber(i.currentSequenceNumber);null!==t.targetMismatches.get(a)?c=c.withResumeToken(es.EMPTY_BYTE_STRING,M.min()).withLastLimboFreeSnapshotVersion(M.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,n)),r=r.insert(a,c),o=c,(0===l.resumeToken.approximateByteSize()||o.snapshotVersion.toMicroseconds()-l.snapshotVersion.toMicroseconds()>=3e8||s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size>0)&&u.push(e.Kr.updateTargetData(i,c))});let c=te,h=to();if(t.documentUpdates.forEach(n=>{t.resolvedLimboDocuments.has(n)&&u.push(e.persistence.referenceDelegate.updateLimboDocument(i,n))}),u.push((s=t.documentUpdates,a=to(),o=to(),s.forEach(e=>a=a.add(e)),l.getEntries(i,a).next(e=>{let t=te;return s.forEach((n,r)=>{let i=e.get(n);r.isFoundDocument()!==i.isFoundDocument()&&(o=o.add(n)),r.isNoDocument()&&r.version.isEqual(M.min())?(l.removeEntry(n,r.readTime),t=t.insert(n,r)):!i.isValidDocument()||r.version.compareTo(i.version)>0||0===r.version.compareTo(i.version)&&i.hasPendingWrites?(l.addEntry(r),t=t.insert(n,r)):g("LocalStore","Ignoring outdated watch update for ",n,". Current version:",i.version," Watch version:",r.version)}),{ls:t,hs:o}})).next(e=>{c=e.ls,h=e.hs})),!n.isEqual(M.min())){let t=e.Kr.getLastRemoteSnapshotVersion(i).next(t=>e.Kr.setTargetsMetadata(i,i.currentSequenceNumber,n));u.push(t)}return j.waitFor(u).next(()=>l.apply(i)).next(()=>e.localDocuments.getLocalViewOfDocuments(i,c,h)).next(()=>c)}).then(t=>(e.rs=r,t))}(e.localStore,t);t.targetChanges.forEach((t,n)=>{let r=e.Sa.get(n);r&&(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1||w(),t.addedDocuments.size>0?r.ma=!0:t.modifiedDocuments.size>0?r.ma||w():t.removedDocuments.size>0&&(r.ma||w(),r.ma=!1))}),await rZ(e,n,t)}catch(e){await Q(e)}}function rK(e,t,n){var r;if(e.isPrimaryClient&&0===n||!e.isPrimaryClient&&1===n){let n;let i=[];e.ga.forEach((e,n)=>{let r=n.view.U_(t);r.snapshot&&i.push(r.snapshot)}),(r=e.eventManager).onlineState=t,n=!1,r.queries.forEach((e,r)=>{for(let e of r.listeners)e.U_(t)&&(n=!0)}),n&&rb(r),i.length&&e.fa.c_(i),e.onlineState=t,e.isPrimaryClient&&e.sharedClientState.setOnlineState(t)}}async function rz(e,t,n){e.sharedClientState.updateQueryState(t,"rejected",n);let r=e.Sa.get(t),i=r&&r.key;if(i){let n=new Z(q.comparator);n=n.insert(i,eD.newNoDocument(i,M.min()));let r=to().add(i),s=new tj(M.min(),new Map,new Z(x),n,r);await rB(e,s),e.wa=e.wa.remove(i),e.Sa.delete(t),rJ(e)}else await nP(e.localStore,t,!1).then(()=>rW(e,t,n)).catch(Q)}async function rQ(e,t){var n;let r=t.batch.batchId;try{let i=await (n=e.localStore).persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{let r=t.batch.keys(),i=n._s.newChangeBuffer({trackRemovals:!0});return(function(e,t,n,r){let i=n.batch,s=i.keys(),a=j.resolve();return s.forEach(e=>{a=a.next(()=>r.getEntry(t,e)).next(t=>{let s=n.docVersions.get(e);null!==s||w(),0>t.version.compareTo(s)&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),a.next(()=>e.mutationQueue.removeMutationBatch(t,i))})(n,e,t,i).next(()=>i.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=to();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))});rH(e,r,null),rG(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await rZ(e,i)}catch(e){await Q(e)}}async function rj(e,t,n){var r;try{let i=await (r=e.localStore).persistence.runTransaction("Reject batch","readwrite-primary",e=>{let n;return r.mutationQueue.lookupMutationBatch(e,t).next(t=>(null!==t||w(),n=t.keys(),r.mutationQueue.removeMutationBatch(e,t))).next(()=>r.mutationQueue.performConsistencyCheck(e)).next(()=>r.documentOverlayCache.removeOverlaysForBatchId(e,n,t)).next(()=>r.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,n)).next(()=>r.localDocuments.getDocuments(e,n))});rH(e,t,n),rG(e,t),e.sharedClientState.updateMutationState(t,"rejected",n),await rZ(e,i)}catch(e){await Q(e)}}function rG(e,t){(e.Ca.get(t)||[]).forEach(e=>{e.resolve()}),e.Ca.delete(t)}function rH(e,t,n){let r=e.Da[e.currentUser.toKey()];if(r){let i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),e.Da[e.currentUser.toKey()]=r}}function rW(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;for(let r of(e.sharedClientState.removeLocalQueryTarget(t),e.pa.get(t)))e.ga.delete(r),n&&e.fa.xa(r,n);e.pa.delete(t),e.isPrimaryClient&&e.ba.mr(t).forEach(t=>{e.ba.containsKey(t)||rY(e,t)})}function rY(e,t){e.ya.delete(t.path.canonicalString());let n=e.wa.get(t);null!==n&&(n8(e.remoteStore,n),e.wa=e.wa.remove(t),e.Sa.delete(n),rJ(e))}function rX(e,t,n){for(let r of n)r instanceof rR?(e.ba.addReference(r.key,t),function(e,t){let n=t.key,r=n.path.canonicalString();e.wa.get(n)||e.ya.has(r)||(g("SyncEngine","New document in limbo: "+n),e.ya.add(r),rJ(e))}(e,r)):r instanceof rx?(g("SyncEngine","Document no longer in limbo: "+r.key),e.ba.removeReference(r.key,t),e.ba.containsKey(r.key)||rY(e,r.key)):w()}function rJ(e){for(;e.ya.size>0&&e.wa.size<e.maxConcurrentLimboResolutions;){let t=e.ya.values().next().value;e.ya.delete(t);let n=new q(F.fromString(t)),r=e.va.next();e.Sa.set(r,new rM(n)),e.wa=e.wa.insert(n,r),n9(e.remoteStore,new nu(e2(new e$(n.path)),r,"TargetPurposeLimboResolution",H.ae))}}async function rZ(e,t,n){let r=[],i=[],s=[];e.ga.isEmpty()||(e.ga.forEach((a,o)=>{s.push(e.Ma(o,t,n).then(t=>{if((t||n)&&e.isPrimaryClient&&e.sharedClientState.updateQueryState(o.targetId,(null==t?void 0:t.fromCache)?"not-current":"current"),t){r.push(t);let e=nD.$i(o.targetId,t);i.push(e)}}))}),await Promise.all(s),e.fa.c_(r),await async function(e,t){try{await e.persistence.runTransaction("notifyLocalViewChanges","readwrite",n=>j.forEach(t,t=>j.forEach(t.Qi,r=>e.persistence.referenceDelegate.addReference(n,t.targetId,r)).next(()=>j.forEach(t.Ki,r=>e.persistence.referenceDelegate.removeReference(n,t.targetId,r)))))}catch(e){if(!G(e))throw e;g("LocalStore","Failed to update sequence numbers: "+e)}for(let n of t){let t=n.targetId;if(!n.fromCache){let n=e.rs.get(t),r=n.snapshotVersion,i=n.withLastLimboFreeSnapshotVersion(r);e.rs=e.rs.insert(t,i)}}}(e.localStore,i))}async function r$(e,t){if(!e.currentUser.isEqual(t)){g("SyncEngine","User change. New user:",t.toKey());let n=await nV(e.localStore,t);e.currentUser=t,e.Ca.forEach(e=>{e.forEach(e=>{e.reject(new E(_.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),e.Ca.clear(),e.sharedClientState.handleUserChange(t,n.removedBatchIds,n.addedBatchIds),await rZ(e,n.cs)}}function r0(e,t){let n=e.Sa.get(t);if(n&&n.ma)return to().add(n.key);{let n=to(),r=e.pa.get(t);if(!r)return n;for(let t of r){let r=e.ga.get(t);n=n.unionWith(r.view.la)}return n}}class r1{async initialize(e){this.serializer=nY(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){var t;return t=this.persistence,new nL(t,new nx,e.initialUser,this.serializer)}createPersistence(e){return new nN(nb.Jr,this.serializer)}createSharedClientState(e){return new nU}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}constructor(){this.synchronizeTabs=!1}}class r2{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>rK(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=r$.bind(null,this.syncEngine),await rg(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new rI}createDatastore(e){let t=nY(e.databaseInfo.databaseId),n=new nH(e.databaseInfo);return new n0(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){var t;return t=this.localStore,new n2(t,this.datastore,e.asyncQueue,e=>rK(this.syncEngine,e,0),nB.C()?new nB:new nq)}createSyncEngine(e,t){return function(e,t,n,r,i,s,a){let o=new rP(e,t,n,r,i,s);return a&&(o.Fa=!0),o}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){g("RemoteStore","RemoteStore shutting down."),e.F_.add(5),await n4(e),e.x_.shutdown(),e.O_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r3{next(e){this.observer.next&&this.Ba(this.observer.next,e)}error(e){this.observer.error?this.Ba(this.observer.error,e):p("Uncaught Error in snapshot listener:",e.toString())}La(){this.muted=!0}Ba(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}constructor(e){this.observer=e,this.muted=!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r4{async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(_.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();let e=new T;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){let t=rw(n,"Failed to shutdown persistence");e.reject(t)}}),e.promise}constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=h.UNAUTHENTICATED,this.clientId=R.V(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,async e=>{g("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(g("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}}async function r9(e,t){e.asyncQueue.verifyOperationInProgress(),g("FirestoreClient","Initializing OfflineComponentProvider");let n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await nV(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function r8(e,t){e.asyncQueue.verifyOperationInProgress();let n=await r5(e);g("FirestoreClient","Initializing OnlineComponentProvider");let r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener(e=>rm(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>rm(t.remoteStore,n)),e._onlineComponents=t}async function r5(e){if(!e._offlineComponents){if(e._uninitializedComponentsProvider){g("FirestoreClient","Using user provided OfflineComponentProvider");try{await r9(e,e._uninitializedComponentsProvider._offline)}catch(t){if(!("FirebaseError"===t.name?t.code===_.FAILED_PRECONDITION||t.code===_.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw t;y("Error using user provided cache. Falling back to memory cache: "+t),await r9(e,new r1)}}else g("FirestoreClient","Using default OfflineComponentProvider"),await r9(e,new r1)}return e._offlineComponents}async function r6(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(g("FirestoreClient","Using user provided OnlineComponentProvider"),await r8(e,e._uninitializedComponentsProvider._online)):(g("FirestoreClient","Using default OnlineComponentProvider"),await r8(e,new r2))),e._onlineComponents}async function r7(e){let t=await r6(e),n=t.eventManager;return n.onListen=rF.bind(null,t.syncEngine),n.onUnlisten=rU.bind(null,t.syncEngine),n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e){let t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let it=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(e,t,n){if(!n)throw new E(_.INVALID_ARGUMENT,"Function ".concat(e,"() cannot be called with an empty ").concat(t,"."))}function ii(e){if(!q.isDocumentKey(e))throw new E(_.INVALID_ARGUMENT,"Invalid document reference. Document references must have an even number of segments, but ".concat(e," has ").concat(e.length,"."))}function is(e){if(q.isDocumentKey(e))throw new E(_.INVALID_ARGUMENT,"Invalid collection reference. Collection references must have an odd number of segments, but ".concat(e," has ").concat(e.length,"."))}function ia(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e="".concat(e.substring(0,20),"...")),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{var t;let n=(t=e).constructor?t.constructor.name:null;return n?"a custom ".concat(n," object"):"an object"}}return"function"==typeof e?"a function":w()}function io(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new E(_.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{let n=ia(e);throw new E(_.INVALID_ARGUMENT,"Expected type '".concat(t.name,"', but it was: ").concat(n))}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{isEqual(e){var t,n;return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new E(_.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new E(_.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}(function(e,t,n,r){if(!0===t&&!0===r)throw new E(_.INVALID_ARGUMENT,"".concat(e," and ").concat(n," cannot be used together."))})("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ie(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new E(_.INVALID_ARGUMENT,"invalid long polling timeout: ".concat(e.timeoutSeconds," (must not be NaN)"));if(e.timeoutSeconds<5)throw new E(_.INVALID_ARGUMENT,"invalid long polling timeout: ".concat(e.timeoutSeconds," (minimum allowed value is 5)"));if(e.timeoutSeconds>30)throw new E(_.INVALID_ARGUMENT,"invalid long polling timeout: ".concat(e.timeoutSeconds," (maximum allowed value is 30)"))}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}}class iu{get app(){if(!this._app)throw new E(_.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new E(_.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new il(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new I;switch(e.type){case"firstParty":return new k(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new E(_.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){let t=it.get(e);t&&(g("ComponentProvider","Removing Datastore"),it.delete(e),t.terminate())}(this),Promise.resolve()}constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new il({}),this._settingsFrozen=!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ic{withConverter(e){return new ic(this.firestore,e,this._query)}constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}}class ih{get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new id(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ih(this.firestore,e,this._key)}constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}}class id extends ic{get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){let e=this._path.popLast();return e.isEmpty()?null:new ih(this.firestore,null,new q(e))}withConverter(e){return new id(this.firestore,e,this._path)}constructor(e,t,n){super(e,t,new e$(n)),this._path=n,this.type="collection"}}function im(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];if(e=(0,l.m9)(e),ir("collection","path",t),e instanceof iu){let n=F.fromString(t,...r);return is(n),new id(e,null,n)}{if(!(e instanceof ih||e instanceof id))throw new E(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(F.fromString(t,...r));return is(n),new id(e.firestore,null,n)}}function ig(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];if(e=(0,l.m9)(e),1==arguments.length&&(t=R.V()),ir("doc","path",t),e instanceof iu){let n=F.fromString(t,...r);return ii(n),new ih(e,null,new q(n))}{if(!(e instanceof ih||e instanceof id))throw new E(_.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");let n=e._path.child(F.fromString(t,...r));return ii(n),new ih(e.firestore,e instanceof id?e.converter:null,new q(n))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{get isShuttingDown(){return this.eu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this._u(),this.au(e)}enterRestrictedMode(e){if(!this.eu){this.eu=!0,this.iu=e||!1;let t=nW();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.ou)}}enqueue(e){if(this._u(),this.eu)return new Promise(()=>{});let t=new T;return this.au(()=>this.eu&&this.iu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Xa.push(e),this.uu()))}async uu(){if(0!==this.Xa.length){try{await this.Xa[0](),this.Xa.shift(),this.Ho.reset()}catch(e){if(!G(e))throw e;g("AsyncQueue","Operation failed with retryable error: "+e)}this.Xa.length>0&&this.Ho.Qo(()=>this.uu())}}au(e){let t=this.Za.then(()=>(this.ru=!0,e().catch(e=>{let t;throw this.nu=e,this.ru=!1,p("INTERNAL UNHANDLED ERROR: ",(t=e.message||"",e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t)),e}).then(e=>(this.ru=!1,e))));return this.Za=t,t}enqueueAfterDelay(e,t,n){this._u(),this.su.indexOf(e)>-1&&(t=0);let r=rv.createAndSchedule(this,e,t,n,e=>this.cu(e));return this.tu.push(r),r}_u(){this.nu&&w()}verifyOperationInProgress(){}async lu(){let e;do e=this.Za,await e;while(e!==this.Za)}hu(e){for(let t of this.tu)if(t.timerId===e)return!0;return!1}Pu(e){return this.lu().then(()=>{for(let t of(this.tu.sort((e,t)=>e.targetTimeMs-t.targetTimeMs),this.tu))if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.lu()})}Iu(e){this.su.push(e)}cu(e){let t=this.tu.indexOf(e);this.tu.splice(t,1)}constructor(){this.Za=Promise.resolve(),this.Xa=[],this.eu=!1,this.tu=[],this.nu=null,this.ru=!1,this.iu=!1,this.su=[],this.Ho=new nX(this,"async_queue_retry"),this.ou=()=>{let e=nW();e&&g("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Ho.$o()};let e=nW();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.ou)}}function iy(e){return function(e,t){if("object"!=typeof e||null===e)return!1;for(let n of t)if(n in e&&"function"==typeof e[n])return!0;return!1}(e,["next","error","complete"])}class iv extends iu{_terminate(){return this._firestoreClient||iE(this),this._firestoreClient.terminate()}constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new ip,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}}function iw(e,t){let n="object"==typeof e?e:(0,s.Mq)(),r=(0,s.qX)(n,"firestore").getImmediate({identifier:"string"==typeof e?e:t||"(default)"});if(!r._initialized){let e=(0,l.P0)("firestore");e&&function(e,t,n){var r;let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},s=(e=io(e,iu))._getSettings(),a="".concat(t,":").concat(n);if("firestore.googleapis.com"!==s.host&&s.host!==a&&y("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),e._setSettings(Object.assign(Object.assign({},s),{host:a,ssl:!1})),i.mockUserToken){let t,n;if("string"==typeof i.mockUserToken)t=i.mockUserToken,n=h.MOCK_USER;else{t=(0,l.Sg)(i.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);let s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new E(_.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new h(s)}e._authCredentials=new S(new C(t,n))}}(r,...e)}return r}function i_(e){return e._firestoreClient||iE(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function iE(e){var t,n,r,i;let s=e._freezeSettings(),a=(i=e._databaseId,new ef(i,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,s.host,s.ssl,s.experimentalForceLongPolling,s.experimentalAutoDetectLongPolling,ie(s.experimentalLongPollingOptions),s.useFetchStreams));e._firestoreClient=new r4(e._authCredentials,e._appCheckCredentials,e._queue,a),(null===(n=s.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=s.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.localCache.kind,_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iT{static fromBase64String(e){try{return new iT(es.fromBase64String(e))}catch(e){throw new E(_.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new iT(es.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}constructor(e){this._byteString=e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iC{isEqual(e){return this._internalPath.isEqual(e._internalPath)}constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new E(_.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new U(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iS{get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return x(this._lat,e._lat)||x(this._long,e._long)}constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new E(_.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new E(_.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let iA=/^__.*__$/;class iN{toMutation(e,t){return null!==this.fieldMask?new tb(e,this.data,this.fieldMask,t,this.fieldTransforms):new tk(e,this.data,t,this.fieldTransforms)}constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}}class ik{toMutation(e,t){return new tb(e,this.data,this.fieldMask,t,this.fieldTransforms)}constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}}function ib(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw w()}}class iD{get path(){return this.settings.path}get Tu(){return this.settings.Tu}Eu(e){return new iD(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Au(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Eu({path:n,Ru:!1});return r.Vu(e),r}mu(e){var t;let n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Eu({path:n,Ru:!1});return r.du(),r}fu(e){return this.Eu({path:void 0,Ru:!0})}gu(e){return iB(e,this.settings.methodName,this.settings.pu||!1,this.path,this.settings.yu)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}du(){if(this.path)for(let e=0;e<this.path.length;e++)this.Vu(this.path.get(e))}Vu(e){if(0===e.length)throw this.gu("Document fields must not be empty");if(ib(this.Tu)&&iA.test(e))throw this.gu('Document fields cannot begin and end with "__"')}constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.du(),this.fieldTransforms=i||[],this.fieldMask=s||[]}}class iR{wu(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return new iD({Tu:e,methodName:t,yu:n,path:U.emptyPath(),Ru:!1,pu:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||nY(e)}}function ix(e){let t=e._freezeSettings(),n=nY(e._databaseId);return new iR(e._databaseId,!!t.ignoreUndefinedProperties,n)}class iL extends iI{_toFieldTransform(e){if(2!==e.Tu)throw 1===e.Tu?e.gu("".concat(this._methodName,"() can only appear at the top level of your update data")):e.gu("".concat(this._methodName,"() cannot be used with set() unless you pass {merge:true}"));return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof iL}}function iV(e,t){if(iP(e=(0,l.m9)(e)))return iF("Unsupported field value:",t,e),iM(e,t);if(e instanceof iI)return function(e,t){if(!ib(t.Tu))throw t.gu("".concat(e._methodName,"() can only be used with update() and set()"));if(!t.path)throw t.gu("".concat(e._methodName,"() is not currently supported inside arrays"));let n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Ru&&4!==t.Tu)throw t.gu("Nested arrays are not supported");return function(e,t){let n=[],r=0;for(let i of e){let e=iV(i,t.fu(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,l.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e){var n,r,i;return n=t.serializer,"number"==typeof(i=r=e)&&Number.isInteger(i)&&!W(i)&&i<=Number.MAX_SAFE_INTEGER&&i>=Number.MIN_SAFE_INTEGER?tc(r):tu(n,r)}if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){let n=V.fromDate(e);return{timestampValue:t9(t.serializer,n)}}if(e instanceof V){let n=new V(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:t9(t.serializer,n)}}if(e instanceof iS)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof iT)return{bytesValue:t8(t.serializer,e._byteString)};if(e instanceof ih){let n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.gu("Document reference is for database ".concat(r.projectId,"/").concat(r.database," but should be for database ").concat(n.projectId,"/").concat(n.database));return{referenceValue:t6(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.gu("Unsupported field value: ".concat(ia(e)))}(e,t)}function iM(e,t){let n={};return J(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):X(e,(e,r)=>{let i=iV(r,t.Au(e));null!=i&&(n[e]=i)}),{mapValue:{fields:n}}}function iP(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof V||e instanceof iS||e instanceof iT||e instanceof ih||e instanceof iI)}function iF(e,t,n){if(!iP(n)||!("object"==typeof n&&null!==n&&(Object.getPrototypeOf(n)===Object.prototype||null===Object.getPrototypeOf(n)))){let r=ia(n);throw"an object"===r?t.gu(e+" a custom object"):t.gu(e+" "+r)}}function iO(e,t,n){if((t=(0,l.m9)(t))instanceof iC)return t._internalPath;if("string"==typeof t)return iq(e,t);throw iB("Field path arguments must be of type string or ",e,!1,void 0,n)}let iU=RegExp("[~\\*/\\[\\]]");function iq(e,t,n){if(t.search(iU)>=0)throw iB("Invalid field path (".concat(t,"). Paths must not contain '~', '*', '/', '[', or ']'"),e,!1,void 0,n);try{return new iC(...t.split("."))._internalPath}catch(r){throw iB("Invalid field path (".concat(t,"). Paths must not be empty, begin with '.', end with '.', or contain '..'"),e,!1,void 0,n)}}function iB(e,t,n,r,i){let s=r&&!r.isEmpty(),a=void 0!==i,o="Function ".concat(t,"() called with invalid data");n&&(o+=" (via `toFirestore()`)"),o+=". ";let l="";return(s||a)&&(l+=" (found",s&&(l+=" in field ".concat(r)),a&&(l+=" in document ".concat(i)),l+=")"),new E(_.INVALID_ARGUMENT,o+e+l)}function iK(e,t){return e.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iz{get id(){return this._key.path.lastSegment()}get ref(){return new ih(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){let e=new iQ(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){let t=this._document.data.field(ij("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}}class iQ extends iz{data(){return super.data()}}function ij(e,t){return"string"==typeof t?iq(e,t):t instanceof iC?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iG(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new E(_.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class iH{convertValue(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none";switch(ep(e)){case 0:return null;case 1:return e.booleanValue;case 2:return el(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(eu(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw w()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"none",n={};return X(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertGeoPoint(e){return new iS(el(e.latitude),el(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":let n=eh(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(ed(e));default:return null}}convertTimestamp(e){let t=eo(e);return new V(t.seconds,t.nanos)}convertDocumentKey(e,t){let n=F.fromString(e);nl(n)||w();let r=new em(n.get(1),n.get(3)),i=new q(n.popFirst(5));return r.isEqual(t)||p("Document ".concat(i," contains a document reference within a different database (").concat(r.projectId,"/").concat(r.database,") which is not supported. It will be treated as a reference in the current database (").concat(t.projectId,"/").concat(t.database,") instead.")),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iW{isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}}class iY extends iz{exists(){return super.exists()}data(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(this._document){if(this._converter){let t=new iX(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(this._document){let n=this._document.data.field(ij("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}}class iX extends iY{data(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return super.data(e)}}class iJ{get docs(){let e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new iX(this._firestore,this._userDataWriter,n.key,n,new iW(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new E(_.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{let r=new iX(e._firestore,e._userDataWriter,n.doc.key,n.doc,new iW(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{let r=new iX(e._firestore,e._userDataWriter,t.doc.key,t.doc,new iW(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter),i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(s=(n=n.add(t.doc)).indexOf(t.doc.key)),{type:function(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return w()}}(t.type),doc:r,oldIndex:i,newIndex:s}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new iW(r.hasPendingWrites,r.fromCache),this.query=n}}class iZ extends iH{convertBytes(e){return new iT(e)}convertReference(e){let t=this.convertDocumentKey(e,this.firestore._databaseId);return new ih(this.firestore,null,t)}constructor(e){super(),this.firestore=e}}function i$(e){e=io(e,ic);let t=io(e.firestore,iv),n=i_(t),r=new iZ(t);return iG(e._query),(function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=new T;return e.asyncQueue.enqueueAndForget(async()=>(function(e,t,n,r,i){let s=new rD(n,new r3({next:n=>{t.enqueueAndForget(()=>rA(e,s)),n.fromCache&&"server"===r.source?i.reject(new E(_.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),{includeMetadataChanges:!0,Z_:!0});return rS(e,s)})(await r7(e),e.asyncQueue,t,n,r)),r.promise})(n,e._query).then(n=>new iJ(t,r,e,n))}function i0(e,t,n){for(var r=arguments.length,i=Array(r>3?r-3:0),s=3;s<r;s++)i[s-3]=arguments[s];e=io(e,ih);let a=io(e.firestore,iv),o=ix(a);return i3(a,[("string"==typeof(t=(0,l.m9)(t))||t instanceof iC?function(e,t,n,r,i,s){let a=e.wu(1,t,n),o=[iO(t,r,n)],u=[i];if(s.length%2!=0)throw new E(_.INVALID_ARGUMENT,"Function ".concat(t,"() needs to be called with an even number of arguments that alternate between field names and values."));for(let e=0;e<s.length;e+=2)o.push(iO(t,s[e])),u.push(s[e+1]);let c=[],h=eb.empty();for(let e=o.length-1;e>=0;--e)if(!iK(c,o[e])){let t=o[e],n=u[e];n=(0,l.m9)(n);let r=a.mu(t);if(n instanceof iL)c.push(t);else{let e=iV(n,r);null!=e&&(c.push(t),h.set(t,e))}}return new ik(h,new er(c),a.fieldTransforms)}(o,"updateDoc",e._key,t,n,i):function(e,t,n,r){let i=e.wu(1,t,n);iF("Data must be an object, but it was:",i,r);let s=[],a=eb.empty();return X(r,(e,r)=>{let o=iq(t,e,n);r=(0,l.m9)(r);let u=i.mu(o);if(r instanceof iL)s.push(o);else{let e=iV(r,u);null!=e&&(s.push(o),a.set(o,e))}}),new ik(a,new er(s),i.fieldTransforms)}(o,"updateDoc",e._key,t)).toMutation(e._key,tT.exists(!0))])}function i1(e,t){var n,r;let i=io(e.firestore,iv),s=ig(e),a=(n=e.converter)?r&&(r.merge||r.mergeFields)?n.toFirestore(t,r):n.toFirestore(t):t;return i3(i,[(function(e,t,n,r,i){let s,a,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:{},l=e.wu(o.merge||o.mergeFields?2:0,t,n,i);iF("Data must be an object, but it was:",l,r);let u=iM(r,l);if(o.merge)s=new er(l.fieldMask),a=l.fieldTransforms;else if(o.mergeFields){let e=[];for(let r of o.mergeFields){let i=iO(t,r,n);if(!l.contains(i))throw new E(_.INVALID_ARGUMENT,"Field '".concat(i,"' is specified in your field mask but missing from your input data."));iK(e,i)||e.push(i)}s=new er(e),a=l.fieldTransforms.filter(e=>s.covers(e.field))}else s=null,a=l.fieldTransforms;return new iN(new eb(u),s,a)})(ix(e.firestore),"addDoc",s._key,a,null!==e.converter,{}).toMutation(s._key,tT.exists(!1))]).then(()=>s)}function i2(e){let t,n,r;for(var i,s,a,o=arguments.length,u=Array(o>1?o-1:0),c=1;c<o;c++)u[c-1]=arguments[c];e=(0,l.m9)(e);let h={includeMetadataChanges:!1},d=0;"object"!=typeof u[0]||iy(u[d])||(h=u[d],d++);let f={includeMetadataChanges:h.includeMetadataChanges};if(iy(u[d])){let e=u[d];u[d]=null===(i=e.next)||void 0===i?void 0:i.bind(e),u[d+1]=null===(s=e.error)||void 0===s?void 0:s.bind(e),u[d+2]=null===(a=e.complete)||void 0===a?void 0:a.bind(e)}if(e instanceof ih)n=io(e.firestore,iv),r=new e$(e._key.path),t={next:t=>{u[d]&&u[d](function(e,t,n){let r=n.docs.get(t._key),i=new iZ(e);return new iY(e,i,t._key,r,new iW(n.hasPendingWrites,n.fromCache),t.converter)}(n,e,t))},error:u[d+1],complete:u[d+2]};else{let i=io(e,ic);n=io(i.firestore,iv),r=i._query;let s=new iZ(n);t={next:e=>{u[d]&&u[d](new iJ(n,s,i,e))},error:u[d+1],complete:u[d+2]},iG(e._query)}return function(e,t,n,r){let i=new r3(r),s=new rD(t,i,n);return e.asyncQueue.enqueueAndForget(async()=>rS(await r7(e),s)),()=>{i.La(),e.asyncQueue.enqueueAndForget(async()=>rA(await r7(e),s))}}(i_(n),r,f,t)}function i3(e,t){return function(e,t){let n=new T;return e.asyncQueue.enqueueAndForget(async()=>rq(await r6(e).then(e=>e.syncEngine),t,n)),n.promise}(i_(e),t)}new WeakMap,function(){let e=!(arguments.length>1)||void 0===arguments[1]||arguments[1];d=s.Jn,(0,s.Xd)(new a.wA("firestore",(t,n)=>{let{instanceIdentifier:r,options:i}=n,s=t.getProvider("app").getImmediate(),a=new iv(new A(t.getProvider("auth-internal")),new D(t.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new E(_.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new em(e.options.projectId,t)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),a._setSettings(i),a},"PUBLIC").setMultipleInstances(!0)),(0,s.KN)(c,"4.1.3",void 0),(0,s.KN)(c,"4.1.3","esm2017")}()}}]);