/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{195:function(e,t,n){"undefined"!=typeof self&&self,e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=29)}([function(e,t,n){"use strict";var r=n(2),o=Object.prototype.toString;function i(e){return"[object Array]"===o.call(e)}function s(e){return void 0===e}function u(e){return null!==e&&"object"==typeof e}function a(e){return"[object Function]"===o.call(e)}function c(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var n=0,r=e.length;n<r;n++)t.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:u,isUndefined:s,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:a,isStream:function(e){return u(e)&&a(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:c,merge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]=n}for(var r=0,o=arguments.length;r<o;r++)c(arguments[r],n);return t},deepMerge:function e(){var t={};function n(n,r){"object"==typeof t[r]&&"object"==typeof n?t[r]=e(t[r],n):t[r]="object"==typeof n?e({},n):n}for(var r=0,o=arguments.length;r<o;r++)c(arguments[r],n);return t},extend:function(e,t,n){return c(t,(function(t,o){e[o]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}}},function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));const r="undefined"==typeof window||"undefined"==typeof document;function o(e,t={}){let n=[],r=Object.keys(t);for(var o=0;o<r.length;o++)n.push(r[o]+"="+t[r[o]]);return n.length>0?e+(e.indexOf("?")>-1?"&":"?")+n.join("&"):e}"undefined"==typeof window||window}).call(this,n(11))},function(e,t,n){"use strict";e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),r=0;r<n.length;r++)n[r]=arguments[r];return e.apply(t,n)}}},function(e,t,n){"use strict";var r=n(0);function o(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var i;if(n)i=n(t);else if(r.isURLSearchParams(t))i=t.toString();else{var s=[];r.forEach(t,(function(e,t){null!=e&&(r.isArray(e)?t+="[]":e=[e],r.forEach(e,(function(e){r.isDate(e)?e=e.toISOString():r.isObject(e)&&(e=JSON.stringify(e)),s.push(o(t)+"="+o(e))})))})),i=s.join("&")}if(i){var u=e.indexOf("#");-1!==u&&(e=e.slice(0,u)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},function(e,t,n){"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},function(e,t,n){"use strict";(function(t){var r=n(0),o=n(18),i={"Content-Type":"application/x-www-form-urlencoded"};function s(e,t){!r.isUndefined(e)&&r.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var u,a={adapter:(("undefined"!=typeof XMLHttpRequest||void 0!==t&&"[object process]"===Object.prototype.toString.call(t))&&(u=n(6)),u),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),r.isFormData(e)||r.isArrayBuffer(e)||r.isBuffer(e)||r.isStream(e)||r.isFile(e)||r.isBlob(e)?e:r.isArrayBufferView(e)?e.buffer:r.isURLSearchParams(e)?(s(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):r.isObject(e)?(s(t,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(e){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};r.forEach(["delete","get","head"],(function(e){a.headers[e]={}})),r.forEach(["post","put","patch"],(function(e){a.headers[e]=r.merge(i)})),e.exports=a}).call(this,n(17))},function(e,t,n){"use strict";var r=n(0),o=n(19),i=n(3),s=n(21),u=n(24),a=n(25),c=n(7);e.exports=function(e){return new Promise((function(t,f){var p=e.data,l=e.headers;r.isFormData(p)&&delete l["Content-Type"];var d=new XMLHttpRequest;if(e.auth){var h=e.auth.username||"",m=e.auth.password||"";l.Authorization="Basic "+btoa(h+":"+m)}var v=s(e.baseURL,e.url);if(d.open(e.method.toUpperCase(),i(v,e.params,e.paramsSerializer),!0),d.timeout=e.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var n="getAllResponseHeaders"in d?u(d.getAllResponseHeaders()):null,r={data:e.responseType&&"text"!==e.responseType?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:n,config:e,request:d};o(t,f,r),d=null}},d.onabort=function(){d&&(f(c("Request aborted",e,"ECONNABORTED",d)),d=null)},d.onerror=function(){f(c("Network Error",e,null,d)),d=null},d.ontimeout=function(){var t="timeout of "+e.timeout+"ms exceeded";e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),f(c(t,e,"ECONNABORTED",d)),d=null},r.isStandardBrowserEnv()){var y=n(26),g=(e.withCredentials||a(v))&&e.xsrfCookieName?y.read(e.xsrfCookieName):void 0;g&&(l[e.xsrfHeaderName]=g)}if("setRequestHeader"in d&&r.forEach(l,(function(e,t){void 0===p&&"content-type"===t.toLowerCase()?delete l[t]:d.setRequestHeader(t,e)})),r.isUndefined(e.withCredentials)||(d.withCredentials=!!e.withCredentials),e.responseType)try{d.responseType=e.responseType}catch(t){if("json"!==e.responseType)throw t}"function"==typeof e.onDownloadProgress&&d.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",e.onUploadProgress),e.cancelToken&&e.cancelToken.promise.then((function(e){d&&(d.abort(),f(e),d=null)})),void 0===p&&(p=null),d.send(p)}))}},function(e,t,n){"use strict";var r=n(20);e.exports=function(e,t,n,o,i){var s=new Error(e);return r(s,t,n,o,i)}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){t=t||{};var n={},o=["url","method","params","data"],i=["headers","auth","proxy"],s=["baseURL","url","transformRequest","transformResponse","paramsSerializer","timeout","withCredentials","adapter","responseType","xsrfCookieName","xsrfHeaderName","onUploadProgress","onDownloadProgress","maxContentLength","validateStatus","maxRedirects","httpAgent","httpsAgent","cancelToken","socketPath"];r.forEach(o,(function(e){void 0!==t[e]&&(n[e]=t[e])})),r.forEach(i,(function(o){r.isObject(t[o])?n[o]=r.deepMerge(e[o],t[o]):void 0!==t[o]?n[o]=t[o]:r.isObject(e[o])?n[o]=r.deepMerge(e[o]):void 0!==e[o]&&(n[o]=e[o])})),r.forEach(s,(function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])}));var u=o.concat(i).concat(s),a=Object.keys(t).filter((function(e){return-1===u.indexOf(e)}));return r.forEach(a,(function(r){void 0!==t[r]?n[r]=t[r]:void 0!==e[r]&&(n[r]=e[r])})),n}},function(e,t,n){"use strict";function r(e){this.message=e}r.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},r.prototype.__CANCEL__=!0,e.exports=r},function(e,t,n){e.exports=n(12)},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";var r=n(0),o=n(2),i=n(13),s=n(8);function u(e){var t=new i(e),n=o(i.prototype.request,t);return r.extend(n,i.prototype,t),r.extend(n,t),n}var a=u(n(5));a.Axios=i,a.create=function(e){return u(s(a.defaults,e))},a.Cancel=n(9),a.CancelToken=n(27),a.isCancel=n(4),a.all=function(e){return Promise.all(e)},a.spread=n(28),e.exports=a,e.exports.default=a},function(e,t,n){"use strict";var r=n(0),o=n(3),i=n(14),s=n(15),u=n(8);function a(e){this.defaults=e,this.interceptors={request:new i,response:new i}}a.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=u(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=[s,void 0],n=Promise.resolve(e);for(this.interceptors.request.forEach((function(e){t.unshift(e.fulfilled,e.rejected)})),this.interceptors.response.forEach((function(e){t.push(e.fulfilled,e.rejected)}));t.length;)n=n.then(t.shift(),t.shift());return n},a.prototype.getUri=function(e){return e=u(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},r.forEach(["delete","get","head","options"],(function(e){a.prototype[e]=function(t,n){return this.request(r.merge(n||{},{method:e,url:t}))}})),r.forEach(["post","put","patch"],(function(e){a.prototype[e]=function(t,n,o){return this.request(r.merge(o||{},{method:e,url:t,data:n}))}})),e.exports=a},function(e,t,n){"use strict";var r=n(0);function o(){this.handlers=[]}o.prototype.use=function(e,t){return this.handlers.push({fulfilled:e,rejected:t}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){r.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},function(e,t,n){"use strict";var r=n(0),o=n(16),i=n(4),s=n(5);function u(e){e.cancelToken&&e.cancelToken.throwIfRequested()}e.exports=function(e){return u(e),e.headers=e.headers||{},e.data=o(e.data,e.headers,e.transformRequest),e.headers=r.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),r.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||s.adapter)(e).then((function(t){return u(e),t.data=o(t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(u(e),t&&t.response&&(t.response.data=o(t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t,n){return r.forEach(n,(function(n){e=n(e,t)})),e}},function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function u(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var a,c=[],f=!1,p=-1;function l(){f&&a&&(f=!1,a.length?c=a.concat(c):p=-1,c.length&&d())}function d(){if(!f){var e=u(l);f=!0;for(var t=c.length;t;){for(a=c,c=[];++p<t;)a&&a[p].run();p=-1,t=c.length}a=null,f=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new h(e,t)),1!==c.length||f||u(d)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=m,o.addListener=m,o.once=m,o.off=m,o.removeListener=m,o.removeAllListeners=m,o.emit=m,o.prependListener=m,o.prependOnceListener=m,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}},function(e,t,n){"use strict";var r=n(0);e.exports=function(e,t){r.forEach(e,(function(n,r){r!==t&&r.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[r])}))}},function(e,t,n){"use strict";var r=n(7);e.exports=function(e,t,n){var o=n.config.validateStatus;!o||o(n.status)?e(n):t(r("Request failed with status code "+n.status,n.config,null,n.request,n))}},function(e,t,n){"use strict";e.exports=function(e,t,n,r,o){return e.config=t,n&&(e.code=n),e.request=r,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code}},e}},function(e,t,n){"use strict";var r=n(22),o=n(23);e.exports=function(e,t){return e&&!r(t)?o(e,t):t}},function(e,t,n){"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},function(e,t,n){"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},function(e,t,n){"use strict";var r=n(0),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,i,s={};return e?(r.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=r.trim(e.substr(0,i)).toLowerCase(),n=r.trim(e.substr(i+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}})),s):s}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function o(e){var r=e;return t&&(n.setAttribute("href",r),r=n.href),n.setAttribute("href",r),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=o(window.location.href),function(t){var n=r.isString(t)?o(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},function(e,t,n){"use strict";var r=n(0);e.exports=r.isStandardBrowserEnv()?{write:function(e,t,n,o,i,s){var u=[];u.push(e+"="+encodeURIComponent(t)),r.isNumber(n)&&u.push("expires="+new Date(n).toGMTString()),r.isString(o)&&u.push("path="+o),r.isString(i)&&u.push("domain="+i),!0===s&&u.push("secure"),document.cookie=u.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},function(e,t,n){"use strict";var r=n(9);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;e((function(e){n.reason||(n.reason=new r(e),t(n.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},function(e,t,n){"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(10),i=n.n(o);const s=e=>e,u=e=>e;var a=function(e,t,n,o,s){let u=n;return r.a&&(u.cache=!1,u.loading=!1,u.success=!1),o(u),u.download?(function(e){let t=document.querySelector("HHH");t||(t=document.createElement("iframe"),t.setAttribute("id","HHH"),document.body.appendChild(t)),t.setAttribute("src",e)}(Object(r.b)(/^http/i.test(t)?t:u.baseURL?u.baseURL:"//localhost:8000")),Promise.resolve({retcode:0})):(!r.a&&/authkey=/gi.test(window.location.search)&&(t=t+(t.indexOf("?")>-1?"?":"&")+window.location.search.replace("?","")),new Promise((function(n,r){let{data:o,params:a,...c}=u;(0,i.a)(Object.assign({baseURL:"//localhost:8000",url:t,method:e.toLowerCase()}),c).then(e=>{let t=e.data.data;console.log(t);var r=s(JSON.parse(JSON.stringify(t)));n(r)}).catch(e=>{r({error:e})})})))};const c=(e="",t={},n=s,r=u)=>a("GET",e,t,n,r),f=(e="",t={},n=s,r=u)=>a("POST",e,t,n,r);n.d(t,"get",(function(){return c})),n.d(t,"post",(function(){return f}))}])},197:function(e,t,n){"use strict";n(15),n(195);t.a={getList:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];return new Promise((function(e,t){e({data:[1,2,3]})}))},getFeature:function(){return this.getList().then((function(data){var e=[];return e.push(1),e.push(2),e.push(3),e}))}}},203:function(e,t,n){var content=n(222);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(30).default)("e46b6ba2",content,!0,{sourceMap:!1})},204:function(e,t,n){var content=n(224);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(30).default)("5cb25678",content,!0,{sourceMap:!1})},205:function(e,t,n){var content=n(226);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(30).default)("2e107364",content,!0,{sourceMap:!1})},221:function(e,t,n){"use strict";var r=n(203);n.n(r).a},222:function(e,t,n){(t=n(29)(!1)).push([e.i,".NuxtLogo{-webkit-animation:appear 1s;animation:appear 1s;margin:auto}@-webkit-keyframes appear{0%{opacity:0}to{opacity:1}}@keyframes appear{0%{opacity:0}to{opacity:1}}",""]),e.exports=t},223:function(e,t,n){"use strict";var r=n(204);n.n(r).a},224:function(e,t,n){(t=n(29)(!1)).push([e.i,".slide[data-v-053b8706]{display:flex;align-items:center;justify-content:center}.pv[data-v-053b8706],.slide[data-v-053b8706]{height:100%}.pv[data-v-053b8706]{width:100%;overflow:hidden;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.pv .pv__play[data-v-053b8706]{position:absolute;z-index:2;left:50%;top:50%;transform:translate(-280px,-62px);width:100px;height:60px;background:#238a85;cursor:pointer}",""]),e.exports=t},225:function(e,t,n){"use strict";var r=n(205);n.n(r).a},226:function(e,t,n){(t=n(29)(!1)).push([e.i,".index{background:#fff;visibility:inherit}.index.visible{visibility:hidden}.pv__modal{overflow:visible!important;position:absolute!important;left:50%!important;top:50%!important;padding-top:24px;background:#fffcf7;font-size:0;border-radius:8px 8px 0 0;transform:translate(-50%,-50%)}.pv__modal button{position:absolute;top:0;right:0;width:24px;height:24px;background:#18688d;font-size:0}",""]),e.exports=t},228:function(e,t,n){"use strict";n.r(t);n(221);var r=n(14),o=Object(r.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("svg",{staticClass:"NuxtLogo",attrs:{width:"245",height:"180",viewBox:"0 0 452 342",xmlns:"http://www.w3.org/2000/svg"}},[t("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[t("path",{attrs:{d:"M139 330l-1-2c-2-4-2-8-1-13H29L189 31l67 121 22-16-67-121c-1-2-9-14-22-14-6 0-15 2-22 15L5 303c-1 3-8 16-2 27 4 6 10 12 24 12h136c-14 0-21-6-24-12z",fill:"#00C58E"}}),this._v(" "),t("path",{attrs:{d:"M447 304L317 70c-2-2-9-15-22-15-6 0-15 3-22 15l-17 28v54l39-67 129 230h-49a23 23 0 0 1-2 14l-1 1c-6 11-21 12-23 12h76c3 0 17-1 24-12 3-5 5-14-2-26z",fill:"#108775"}}),this._v(" "),t("path",{attrs:{d:"M376 330v-1l1-2c1-4 2-8 1-12l-4-12-102-178-15-27h-1l-15 27-102 178-4 12a24 24 0 0 0 2 15c4 6 10 12 24 12h190c3 0 18-1 25-12zM256 152l93 163H163l93-163z",fill:"#2F495E","fill-rule":"nonzero"}})])])}),[],!1,null,null,null).exports,c=(n(107),n(197),{props:["index"],computed:{conH:function(){return this.$store.state.viewH+"px"}},methods:{openPvModal:function(){this.$emit("play-pv")}}}),f=(n(223),Object(r.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pv",style:{height:e.conH}},[n("div",{staticClass:"slide"},[e._v("slide "+e._s(e.index))]),e._v(" "),1===e.index?n("div",{staticClass:"pv__play",on:{click:e.openPvModal}},[e._v("play")]):e._e()])}),[],!1,null,"053b8706",null).exports),l=n(117),d=[n.n(l).a],h={components:{Logo:o,pv:f},data:function(){return{isVisible:!1,swiperOption:{direction:"vertical",height:window.innerHeight,speed:1e3,autoHeight:!0,pagination:!1,mousewheel:!0,parallax:!0,slidesPerView:"auto",allowTouchMove:!1,observer:!0,observeParents:!0,scrollbar:{el:".swiper-scrollbar",hide:!0},lazy:{loadPrevNext:!0,loadOnTransitionStart:!0}}}},asyncData:function(){},computed:{swiper:function(){return this.$refs.mySwiper.swiper}},mounted:function(){var e=this;this.$nextTick((function(){e.initPage()}))},methods:{initPage:function(){var e=sessionStorage.getItem("loading");e||(this.$loading.init({preload:d,time:6e3,callBackFn:function(){console.log("fin"),e=sessionStorage.setItem("loading",Date.now())}}),this.$loading.show())},resizeView:function(){console.log(this.$refs),this.swiper.updateSize(),this.swiper.update()},openPvModal:function(){this.$modal.show("pv")},hidePvModal:function(){this.$modal.hide("pv")}}},m=(n(225),Object(r.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return e.isVisible?e._e():r("div",{staticClass:"index",class:{visible:e.isVisible}},[r("no-ssr",[r("swiper",{ref:"mySwiper",attrs:{options:e.swiperOption},on:{resize:e.resizeView}},[e._l([1,2,3],(function(t){return r("swiper-slide",{key:t},[r("pv",{attrs:{index:t},on:{"play-pv":e.openPvModal}})],1)})),e._v(" "),r("div",{staticClass:"swiper-scrollbar",attrs:{slot:"scrollbar"},slot:"scrollbar"})],2),e._v(" "),r("modal",{attrs:{width:620,height:"auto",resizable:!0,"pivot-x":0,"pivot-y":0,"click-to-close":!0,classes:"pv__modal",name:"pv"},on:{close:e.hidePvModal}},[r("div",{staticClass:"video__modal"},[r("button",{on:{click:e.hidePvModal}},[e._v("close")]),e._v(" "),r("video",{attrs:{src:n(117),controls:"",autoplay:"",width:"100%",height:"auto"}})])])],1)],1)}),[],!1,null,null,null));t.default=m.exports}}]);