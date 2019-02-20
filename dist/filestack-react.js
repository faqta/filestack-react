!function(e,n){if("object"==typeof exports&&"object"==typeof module)module.exports=n(require("prop-types"),require("filestack-js"),require("react"));else if("function"==typeof define&&define.amd)define(["prop-types","filestack-js","react"],n);else{var t="object"==typeof exports?n(require("prop-types"),require("filestack-js"),require("react")):n(e["prop-types"],e["filestack-js"],e.react);for(var r in t)("object"==typeof exports?exports:e)[r]=t[r]}}(window,function(e,n,t){return function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=3)}([function(n,t){n.exports=e},function(e,t){e.exports=n},function(e,n){e.exports=t},function(e,n,t){"use strict";t.r(n);var r=t(1),o=t(2),i=t.n(o),c=t(0),u=t.n(c);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){b(e,n,t[n])})}return e}function s(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e,n){return(y=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function b(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var d=function(e){function n(e){var t,o,i;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),o=this,i=f(n).call(this,e),t=!i||"object"!==a(i)&&"function"!=typeof i?p(o):i,b(p(t),"onClickPick",function(e){e.stopPropagation(),e.preventDefault();var n=t.state,r=n.client,o=n.picker,i=t.props,c=i.options,u=i.mode,a=i.file,l=i.security,s=i.preload;t.callPicker(u,c,a,l,s,r,o).then(t.onFinished).catch(t.onFail)}),b(p(t),"onFinished",function(e){var n=t.props.onSuccess;"function"==typeof n?n(e):console.log(e)}),b(p(t),"onFail",function(e){var n=t.props.onError;"function"==typeof n?n(e):console.error(e)}),b(p(t),"callPicker",function(e,n,r,o,i,c,u){var a=n.url,s=n.handle;return delete n.handle,delete n.url,"transform"===e?new Promise(function(e,t){try{e(c.transform(s,n))}catch(e){t(e)}}):"retrieve"===e?c.retrieve(s,n):"metadata"===e?c.metadata(s,n):"storeUrl"===e?c.storeURL(a,n):"upload"===e?c.upload(r,n):"remove"===e?c.remove(s,o):new Promise(function(){i?u.open():c.picker(l({},n,{onUploadDone:t.onFinished})).open()})});var c=t.props,u=c.apikey,s=c.security,y=c.cname,d=c.sessionCache,m=c.preload,v=c.options,h=r.init(u,{security:s,cname:y,sessionCache:d});return t.state={client:h,picker:m?h.picker(l({},v,{onUploadDone:t.onFinished})):null},t.onFinished=t.onFinished.bind(p(t)),t.onFail=t.onFail.bind(p(t)),t}var t,c,u;return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&y(e,n)}(n,o["Component"]),t=n,(c=[{key:"render",value:function(){var e=this.props,n=e.buttonClass,t=e.buttonText,r=e.link,o=e.children,c=e.render;if(c)return i.a.createElement(c,{onPick:this.onClickPick});var u=r?"a":"button";return i.a.createElement(u,{name:"filestack",onClick:this.onClickPick,className:n},o||t)}}])&&s(t.prototype,c),u&&s(t,u),n}();b(d,"defaultProps",{file:null,link:!1,buttonText:"Pick file",buttonClass:"",onSuccess:function(e){return console.log(e)},onError:function(e){return console.error(e)},mode:"pick",options:{},security:null,children:null,render:null,cname:null,sessionCache:!1,preload:!1}),b(d,"propTypes",{file:u.a.objectOf(u.a.any),apikey:u.a.string.isRequired,link:u.a.bool,mode:u.a.string,buttonText:u.a.string,buttonClass:u.a.string,onSuccess:u.a.func,onError:u.a.func,options:u.a.objectOf(u.a.any),security:u.a.objectOf(u.a.any),children:u.a.node,render:u.a.func,cname:u.a.string,sessionCache:u.a.bool,preload:u.a.bool});var m=d;t.d(n,"client",function(){return r});n.default=m}])});
//# sourceMappingURL=filestack-react.js.map