var __webpack_modules__ = ({
"251": (function (__unused_webpack_module, exports, __webpack_require__) {
eval("var __webpack_unused_export__;\n/**\n * @license React\n * react-jsx-runtime.production.min.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\nvar f=__webpack_require__(294),k=Symbol.for(\"react.element\"),l=Symbol.for(\"react.fragment\"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};\nfunction q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=\"\"+g);void 0!==a.key&&(e=\"\"+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}__webpack_unused_export__=l;exports.jsx=q;exports.jsxs=q;\n\n\n//# sourceURL=webpack://@examples/react-component-umd/./node_modules/react/cjs/react-jsx-runtime.production.min.js?c243");

}),
"408": (function (__unused_webpack_module, exports) {
eval("/**\n * @license React\n * react.production.min.js\n *\n * Copyright (c) Facebook, Inc. and its affiliates.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\nvar l=Symbol.for(\"react.element\"),n=Symbol.for(\"react.portal\"),p=Symbol.for(\"react.fragment\"),q=Symbol.for(\"react.strict_mode\"),r=Symbol.for(\"react.profiler\"),t=Symbol.for(\"react.provider\"),u=Symbol.for(\"react.context\"),v=Symbol.for(\"react.forward_ref\"),w=Symbol.for(\"react.suspense\"),x=Symbol.for(\"react.memo\"),y=Symbol.for(\"react.lazy\"),z=Symbol.iterator;function A(a){if(null===a||\"object\"!==typeof a)return null;a=z&&a[z]||a[\"@@iterator\"];return\"function\"===typeof a?a:null}\nvar B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}E.prototype.isReactComponent={};\nE.prototype.setState=function(a,b){if(\"object\"!==typeof a&&\"function\"!==typeof a&&null!=a)throw Error(\"setState(...): takes an object of state variables to update or a function which returns an object of state variables.\");this.updater.enqueueSetState(this,a,b,\"setState\")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,\"forceUpdate\")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}var H=G.prototype=new F;\nH.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};\nfunction M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=\"\"+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}\nfunction N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return\"object\"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={\"=\":\"=0\",\":\":\"=2\"};return\"$\"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\\/+/g;function Q(a,b){return\"object\"===typeof a&&null!==a&&null!=a.key?escape(\"\"+a.key):b.toString(36)}\nfunction R(a,b,e,d,c){var k=typeof a;if(\"undefined\"===k||\"boolean\"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case \"string\":case \"number\":h=!0;break;case \"object\":switch(a.$$typeof){case l:case n:h=!0}}if(h)return h=a,c=c(h),a=\"\"===d?\".\"+Q(h,0):d,I(c)?(e=\"\",null!=a&&(e=a.replace(P,\"$&/\")+\"/\"),R(c,b,e,\"\",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?\"\":(\"\"+c.key).replace(P,\"$&/\")+\"/\")+a)),b.push(c)),1;h=0;d=\"\"===d?\".\":d+\":\";if(I(a))for(var g=0;g<a.length;g++){k=\na[g];var f=d+Q(k,g);h+=R(k,b,e,f,c)}else if(f=A(a),\"function\"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if(\"object\"===k)throw b=String(a),Error(\"Objects are not valid as a React child (found: \"+(\"[object Object]\"===b?\"object with keys {\"+Object.keys(a).join(\", \")+\"}\":b)+\"). If you meant to render a collection of children, use an array instead.\");return h}\nfunction S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,\"\",\"\",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}\nvar U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};function X(){throw Error(\"act(...) is not supported in production builds of React.\");}\nexports.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments)},e)},count:function(a){var b=0;S(a,function(){b++});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error(\"React.Children.only expected to receive a single React element child.\");return a}};exports.Component=E;exports.Fragment=p;exports.Profiler=r;exports.PureComponent=G;exports.StrictMode=q;exports.Suspense=w;\nexports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;exports.act=X;\nexports.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error(\"React.cloneElement(...): The argument must be a React element, but you passed \"+a+\".\");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=\"\"+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);\nfor(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};exports.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};\nexports.forwardRef=function(a){return{$$typeof:v,render:a}};exports.isValidElement=O;exports.lazy=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};exports.memo=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}};exports.startTransition=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}};exports.unstable_act=X;exports.useCallback=function(a,b){return U.current.useCallback(a,b)};exports.useContext=function(a){return U.current.useContext(a)};\nexports.useDebugValue=function(){};exports.useDeferredValue=function(a){return U.current.useDeferredValue(a)};exports.useEffect=function(a,b){return U.current.useEffect(a,b)};exports.useId=function(){return U.current.useId()};exports.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};exports.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};exports.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};\nexports.useMemo=function(a,b){return U.current.useMemo(a,b)};exports.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};exports.useRef=function(a){return U.current.useRef(a)};exports.useState=function(a){return U.current.useState(a)};exports.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};exports.useTransition=function(){return U.current.useTransition()};exports.version=\"18.3.1\";\n\n\n//# sourceURL=webpack://@examples/react-component-umd/./node_modules/react/cjs/react.production.min.js?644a");

}),
"294": (function (module, __unused_webpack_exports, __webpack_require__) {
eval("\n\nif (true) {\n  module.exports = __webpack_require__(408);\n} else {}\n\n\n//# sourceURL=webpack://@examples/react-component-umd/./node_modules/react/index.js?2f3a");

}),
"893": (function (module, __unused_webpack_exports, __webpack_require__) {
eval("\n\nif (true) {\n  module.exports = __webpack_require__(251);\n} else {}\n\n\n//# sourceURL=webpack://@examples/react-component-umd/./node_modules/react/jsx-runtime.js?829c");

}),
"857": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
eval("// ESM COMPAT FLAG\n__webpack_require__.r(__webpack_exports__);\n\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  Counter: () => (/* binding */ Counter),\n  \"default\": () => (/* binding */ src)\n});\n\n// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js\nvar jsx_runtime = __webpack_require__(\"893\");\n// EXTERNAL MODULE: ./node_modules/react/index.js\nvar react = __webpack_require__(\"294\");\n;// CONCATENATED MODULE: ./src/components/CounterButton/index.module.scss\n// extracted by css-extract-rspack-plugin\n/* ESM default export */ const index_module = ({\"button\":\"button-QzSThJ\"});\n;// CONCATENATED MODULE: ./src/components/CounterButton/index.tsx\n\n\n\nconst CounterButton = (param)=>{\n    let { onClick, label } = param;\n    return /*#__PURE__*/ (0,jsx_runtime.jsx)(\"button\", {\n        type: \"button\",\n        className: index_module.button,\n        onClick: onClick,\n        children: label\n    });\n};\n\n;// CONCATENATED MODULE: ./src/useCounter.tsx\n\nconst useCounter = function() {\n    let initialValue = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;\n    const [count, setCount] = (0,react.useState)(initialValue);\n    const increment = ()=>setCount((prev)=>prev + 1);\n    const decrement = ()=>setCount((prev)=>prev - 1);\n    return {\n        count,\n        increment,\n        decrement\n    };\n};\n\n;// CONCATENATED MODULE: ./src/index.scss\n// extracted by css-extract-rspack-plugin\n\n;// CONCATENATED MODULE: ./src/index.tsx\n\n\n\n\n\nconst Counter = ()=>{\n    const { count, increment, decrement } = useCounter();\n    return /*#__PURE__*/ (0,jsx_runtime.jsxs)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,jsx_runtime.jsxs)(\"h2\", {\n                className: \"counter-text\",\n                children: [\n                    \"Counter: \",\n                    count\n                ]\n            }),\n            /*#__PURE__*/ (0,jsx_runtime.jsx)(CounterButton, {\n                onClick: decrement,\n                label: \"-\"\n            }),\n            /*#__PURE__*/ (0,jsx_runtime.jsx)(CounterButton, {\n                onClick: increment,\n                label: \"+\"\n            })\n        ]\n    });\n};\n/* ESM default export */ const src = (Counter);\n\n\n//# sourceURL=webpack://@examples/react-component-umd/./src/index.tsx_+_4_modules?2032");

}),

});
/************************************************************************/
// The module cache
var __webpack_module_cache__ = {};

// The require function
function __webpack_require__(moduleId) {

// Check if module is in cache
var cachedModule = __webpack_module_cache__[moduleId];
if (cachedModule !== undefined) {
return cachedModule.exports;
}
// Create a new module (and put it into the cache)
var module = (__webpack_module_cache__[moduleId] = {
exports: {}
});
// Execute the module function
__webpack_modules__[moduleId](module, module.exports, __webpack_require__);

// Return the exports of the module
return module.exports;

}

/************************************************************************/
// webpack/runtime/define_property_getters
(() => {
__webpack_require__.d = function(exports, definition) {
	for(var key in definition) {
        if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
            Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
        }
    }
};
})();
// webpack/runtime/has_own_property
(() => {
__webpack_require__.o = function (obj, prop) {
	return Object.prototype.hasOwnProperty.call(obj, prop);
};

})();
// webpack/runtime/make_namespace_object
(() => {
// define __esModule on exports
__webpack_require__.r = function(exports) {
	if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	}
	Object.defineProperty(exports, '__esModule', { value: true });
};

})();
/************************************************************************/
// startup
// Load entry module and return exports
// This entry module can't be inlined because the eval devtool is used.
var __webpack_exports__ = __webpack_require__("857");
Object.defineProperty(exports, '__esModule', { value: true });
