import { g as getDefaultExportFromNamespaceIfNotNamed, c as commonjsGlobal } from '../_commonjsHelpers.mjs';
import * as ufo from 'ufo';
import * as axios from 'axios';
import * as supabaseJs from '@supabase/supabase-js';
import * as cookieEs from 'cookie-es';
import * as esnext_set_addAll from 'core-js/modules/esnext.set.add-all.js';
import * as esnext_set_deleteAll from 'core-js/modules/esnext.set.delete-all.js';
import * as esnext_set_difference from 'core-js/modules/esnext.set.difference.js';
import * as esnext_set_every from 'core-js/modules/esnext.set.every.js';
import * as esnext_set_filter from 'core-js/modules/esnext.set.filter.js';
import * as esnext_set_find from 'core-js/modules/esnext.set.find.js';
import * as esnext_set_intersection from 'core-js/modules/esnext.set.intersection.js';
import * as esnext_set_isDisjointFrom from 'core-js/modules/esnext.set.is-disjoint-from.js';
import * as esnext_set_isSubsetOf from 'core-js/modules/esnext.set.is-subset-of.js';
import * as esnext_set_isSupersetOf from 'core-js/modules/esnext.set.is-superset-of.js';
import * as esnext_set_join from 'core-js/modules/esnext.set.join.js';
import * as esnext_set_map from 'core-js/modules/esnext.set.map.js';
import * as esnext_set_reduce from 'core-js/modules/esnext.set.reduce.js';
import * as esnext_set_some from 'core-js/modules/esnext.set.some.js';
import * as esnext_set_symmetricDifference from 'core-js/modules/esnext.set.symmetric-difference.js';
import * as esnext_set_union from 'core-js/modules/esnext.set.union.js';
import * as murmurhashEs from 'murmurhash-es';
import * as h3 from 'h3';
import * as destr from 'destr';
import * as hookable from 'hookable';
import * as defu from 'defu';
import * as vant from 'vant';
import * as esnext_weakMap_deleteAll from 'core-js/modules/esnext.weak-map.delete-all.js';
import * as esnext_map_deleteAll from 'core-js/modules/esnext.map.delete-all.js';
import * as esnext_map_every from 'core-js/modules/esnext.map.every.js';
import * as esnext_map_filter from 'core-js/modules/esnext.map.filter.js';
import * as esnext_map_find from 'core-js/modules/esnext.map.find.js';
import * as esnext_map_findKey from 'core-js/modules/esnext.map.find-key.js';
import * as esnext_map_includes from 'core-js/modules/esnext.map.includes.js';
import * as esnext_map_keyOf from 'core-js/modules/esnext.map.key-of.js';
import * as esnext_map_mapKeys from 'core-js/modules/esnext.map.map-keys.js';
import * as esnext_map_mapValues from 'core-js/modules/esnext.map.map-values.js';
import * as esnext_map_merge from 'core-js/modules/esnext.map.merge.js';
import * as esnext_map_reduce from 'core-js/modules/esnext.map.reduce.js';
import * as esnext_map_some from 'core-js/modules/esnext.map.some.js';
import * as esnext_map_update from 'core-js/modules/esnext.map.update.js';
import * as deepmerge from 'deepmerge';

var server$2 = {exports: {}};

const require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(ufo);

const require$$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(axios);

const require$$2 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(supabaseJs);

const require$$3 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(cookieEs);

const require$$4 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_addAll);

const require$$5 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_deleteAll);

const require$$6 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_difference);

const require$$7 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_every);

const require$$8 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_filter);

const require$$9 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_find);

const require$$10 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_intersection);

const require$$11 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_isDisjointFrom);

const require$$12 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_isSubsetOf);

const require$$13 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_isSupersetOf);

const require$$14 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_join);

const require$$15 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_map);

const require$$16 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_reduce);

const require$$17 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_some);

const require$$18 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_symmetricDifference);

const require$$19 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_set_union);

const require$$20 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(murmurhashEs);

const require$$21 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(h3);

const require$$22 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(destr);

const require$$23 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(hookable);

const require$$24 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(defu);

const require$$25 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(vant);

const require$$26 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_weakMap_deleteAll);

const require$$27 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_map_deleteAll);

const require$$28 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_map_every);

const require$$29 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_map_filter);

const require$$30 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_map_find);

const require$$31 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_map_findKey);

const require$$32 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_map_includes);

const require$$33 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_map_keyOf);

const require$$34 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_map_mapKeys);

const require$$35 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_map_mapValues);

const require$$36 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_map_merge);

const require$$37 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_map_reduce);

const require$$38 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_map_some);

const require$$39 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(esnext_map_update);

const require$$40 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(deepmerge);

(function (module) {
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/ 		// Async chunk loading for Nitro
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 			// array of [resolve, reject, promise] means "currently loading"
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// load the chunk and return promise to it
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 					import('../_dynamic-require.mjs').then(r => r.default || r).then(dynamicRequire => dynamicRequire( ({"1":"components/nuxt-logo","2":"components/the-logo","3":"components/tutorial","4":"pages/index"}[chunkId]||chunkId) + ".js")).then(chunk => {
/******/ 						var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 						for(var moduleId in moreModules) {
/******/ 							modules[moduleId] = moreModules[moduleId];
/******/ 						}
/******/ 						var callbacks = [];
/******/ 						for(var i = 0; i < chunkIds.length; i++) {
/******/ 							if(installedChunks[chunkIds[i]])
/******/ 								callbacks = callbacks.concat(installedChunks[chunkIds[i]][0]);
/******/ 							installedChunks[chunkIds[i]] = 0;
/******/ 						}
/******/ 						for(i = 0; i < callbacks.length; i++)
/******/ 							callbacks[i]();
/******/ 					});
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "EffectScope", function() { return /* reexport */ vue_composition_api["a" /* EffectScope */]; });
__webpack_require__.d(__webpack_exports__, "computed", function() { return /* reexport */ vue_composition_api["b" /* computed */]; });
__webpack_require__.d(__webpack_exports__, "createApp", function() { return /* reexport */ vue_composition_api["c" /* createApp */]; });
__webpack_require__.d(__webpack_exports__, "createRef", function() { return /* reexport */ vue_composition_api["d" /* createRef */]; });
__webpack_require__.d(__webpack_exports__, "customRef", function() { return /* reexport */ vue_composition_api["e" /* customRef */]; });
__webpack_require__.d(__webpack_exports__, "defineAsyncComponent", function() { return /* reexport */ vue_composition_api["g" /* defineAsyncComponent */]; });
__webpack_require__.d(__webpack_exports__, "defineComponent", function() { return /* reexport */ vue_composition_api["h" /* defineComponent */]; });
__webpack_require__.d(__webpack_exports__, "del", function() { return /* reexport */ vue_composition_api["i" /* del */]; });
__webpack_require__.d(__webpack_exports__, "effectScope", function() { return /* reexport */ vue_composition_api["j" /* effectScope */]; });
__webpack_require__.d(__webpack_exports__, "getCurrentInstance", function() { return /* reexport */ vue_composition_api["k" /* getCurrentInstance */]; });
__webpack_require__.d(__webpack_exports__, "getCurrentScope", function() { return /* reexport */ vue_composition_api["l" /* getCurrentScope */]; });
__webpack_require__.d(__webpack_exports__, "h", function() { return /* reexport */ vue_composition_api["m" /* h */]; });
__webpack_require__.d(__webpack_exports__, "inject", function() { return /* reexport */ vue_composition_api["n" /* inject */]; });
__webpack_require__.d(__webpack_exports__, "isRaw", function() { return /* reexport */ vue_composition_api["o" /* isRaw */]; });
__webpack_require__.d(__webpack_exports__, "isReactive", function() { return /* reexport */ vue_composition_api["p" /* isReactive */]; });
__webpack_require__.d(__webpack_exports__, "isReadonly", function() { return /* reexport */ vue_composition_api["q" /* isReadonly */]; });
__webpack_require__.d(__webpack_exports__, "isRef", function() { return /* reexport */ vue_composition_api["r" /* isRef */]; });
__webpack_require__.d(__webpack_exports__, "markRaw", function() { return /* reexport */ vue_composition_api["s" /* markRaw */]; });
__webpack_require__.d(__webpack_exports__, "nextTick", function() { return /* reexport */ vue_composition_api["t" /* nextTick */]; });
__webpack_require__.d(__webpack_exports__, "onActivated", function() { return /* reexport */ vue_composition_api["u" /* onActivated */]; });
__webpack_require__.d(__webpack_exports__, "onBeforeMount", function() { return /* reexport */ vue_composition_api["v" /* onBeforeMount */]; });
__webpack_require__.d(__webpack_exports__, "onBeforeUnmount", function() { return /* reexport */ vue_composition_api["w" /* onBeforeUnmount */]; });
__webpack_require__.d(__webpack_exports__, "onBeforeUpdate", function() { return /* reexport */ vue_composition_api["x" /* onBeforeUpdate */]; });
__webpack_require__.d(__webpack_exports__, "onDeactivated", function() { return /* reexport */ vue_composition_api["y" /* onDeactivated */]; });
__webpack_require__.d(__webpack_exports__, "onErrorCaptured", function() { return /* reexport */ vue_composition_api["z" /* onErrorCaptured */]; });
__webpack_require__.d(__webpack_exports__, "onMounted", function() { return /* reexport */ vue_composition_api["A" /* onMounted */]; });
__webpack_require__.d(__webpack_exports__, "onScopeDispose", function() { return /* reexport */ vue_composition_api["B" /* onScopeDispose */]; });
__webpack_require__.d(__webpack_exports__, "onServerPrefetch", function() { return /* reexport */ vue_composition_api["C" /* onServerPrefetch */]; });
__webpack_require__.d(__webpack_exports__, "onUnmounted", function() { return /* reexport */ vue_composition_api["D" /* onUnmounted */]; });
__webpack_require__.d(__webpack_exports__, "onUpdated", function() { return /* reexport */ vue_composition_api["E" /* onUpdated */]; });
__webpack_require__.d(__webpack_exports__, "provide", function() { return /* reexport */ vue_composition_api["F" /* provide */]; });
__webpack_require__.d(__webpack_exports__, "proxyRefs", function() { return /* reexport */ vue_composition_api["G" /* proxyRefs */]; });
__webpack_require__.d(__webpack_exports__, "reactive", function() { return /* reexport */ vue_composition_api["H" /* reactive */]; });
__webpack_require__.d(__webpack_exports__, "readonly", function() { return /* reexport */ vue_composition_api["I" /* readonly */]; });
__webpack_require__.d(__webpack_exports__, "ref", function() { return /* reexport */ vue_composition_api["J" /* ref */]; });
__webpack_require__.d(__webpack_exports__, "set", function() { return /* reexport */ vue_composition_api["K" /* set */]; });
__webpack_require__.d(__webpack_exports__, "shallowReactive", function() { return /* reexport */ vue_composition_api["L" /* shallowReactive */]; });
__webpack_require__.d(__webpack_exports__, "shallowReadonly", function() { return /* reexport */ vue_composition_api["M" /* shallowReadonly */]; });
__webpack_require__.d(__webpack_exports__, "shallowRef", function() { return /* reexport */ vue_composition_api["N" /* shallowRef */]; });
__webpack_require__.d(__webpack_exports__, "toRaw", function() { return /* reexport */ vue_composition_api["O" /* toRaw */]; });
__webpack_require__.d(__webpack_exports__, "toRef", function() { return /* reexport */ vue_composition_api["P" /* toRef */]; });
__webpack_require__.d(__webpack_exports__, "toRefs", function() { return /* reexport */ vue_composition_api["Q" /* toRefs */]; });
__webpack_require__.d(__webpack_exports__, "triggerRef", function() { return /* reexport */ vue_composition_api["R" /* triggerRef */]; });
__webpack_require__.d(__webpack_exports__, "unref", function() { return /* reexport */ vue_composition_api["S" /* unref */]; });
__webpack_require__.d(__webpack_exports__, "useAttrs", function() { return /* reexport */ vue_composition_api["T" /* useAttrs */]; });
__webpack_require__.d(__webpack_exports__, "useCSSModule", function() { return /* reexport */ vue_composition_api["U" /* useCSSModule */]; });
__webpack_require__.d(__webpack_exports__, "useCssModule", function() { return /* reexport */ vue_composition_api["V" /* useCssModule */]; });
__webpack_require__.d(__webpack_exports__, "useSlots", function() { return /* reexport */ vue_composition_api["W" /* useSlots */]; });
__webpack_require__.d(__webpack_exports__, "warn", function() { return /* reexport */ vue_composition_api["X" /* warn */]; });
__webpack_require__.d(__webpack_exports__, "watch", function() { return /* reexport */ vue_composition_api["Y" /* watch */]; });
__webpack_require__.d(__webpack_exports__, "watchEffect", function() { return /* reexport */ vue_composition_api["Z" /* watchEffect */]; });
__webpack_require__.d(__webpack_exports__, "watchPostEffect", function() { return /* reexport */ vue_composition_api["ab" /* watchPostEffect */]; });
__webpack_require__.d(__webpack_exports__, "watchSyncEffect", function() { return /* reexport */ vue_composition_api["bb" /* watchSyncEffect */]; });
__webpack_require__.d(__webpack_exports__, "isFunction", function() { return /* binding */ isFunction; });
__webpack_require__.d(__webpack_exports__, "default", function() { return /* reexport */ vue_runtime_esm; });
__webpack_require__.d(__webpack_exports__, "Vue2", function() { return /* binding */ Vue2; });
__webpack_require__.d(__webpack_exports__, "isVue2", function() { return /* binding */ isVue2; });
__webpack_require__.d(__webpack_exports__, "isVue3", function() { return /* binding */ isVue3; });
__webpack_require__.d(__webpack_exports__, "install", function() { return /* binding */ install; });
__webpack_require__.d(__webpack_exports__, "version", function() { return /* binding */ version; });

// EXTERNAL MODULE: external "core-js/modules/esnext.set.add-all.js"
__webpack_require__(12);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.delete-all.js"
__webpack_require__(13);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.difference.js"
__webpack_require__(14);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.every.js"
__webpack_require__(15);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.filter.js"
__webpack_require__(16);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.find.js"
__webpack_require__(17);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.intersection.js"
__webpack_require__(18);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-disjoint-from.js"
__webpack_require__(19);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-subset-of.js"
__webpack_require__(20);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.is-superset-of.js"
__webpack_require__(21);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.join.js"
__webpack_require__(22);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.map.js"
__webpack_require__(23);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.reduce.js"
__webpack_require__(24);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.some.js"
__webpack_require__(25);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.symmetric-difference.js"
__webpack_require__(26);

// EXTERNAL MODULE: external "core-js/modules/esnext.set.union.js"
__webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/vue/dist/vue.runtime.esm.js

















/*!
 * Vue.js v2.6.14
 * (c) 2014-2021 Evan You
 * Released under the MIT License.
 */

/*  */
var emptyObject = Object.freeze({}); // These helpers produce better VM code in JS engines due to their
// explicitness and function inlining.

function isUndef(v) {
  return v === undefined || v === null;
}

function isDef(v) {
  return v !== undefined && v !== null;
}

function isTrue(v) {
  return v === true;
}

function isFalse(v) {
  return v === false;
}
/**
 * Check if value is primitive.
 */


function isPrimitive(value) {
  return typeof value === 'string' || typeof value === 'number' || // $flow-disable-line
  typeof value === 'symbol' || typeof value === 'boolean';
}
/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */


function isObject(obj) {
  return obj !== null && typeof obj === 'object';
}
/**
 * Get the raw type string of a value, e.g., [object Object].
 */


var _toString = Object.prototype.toString;

function toRawType(value) {
  return _toString.call(value).slice(8, -1);
}
/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */


function isPlainObject(obj) {
  return _toString.call(obj) === '[object Object]';
}

function isRegExp(v) {
  return _toString.call(v) === '[object RegExp]';
}
/**
 * Check if val is a valid array index.
 */


function isValidArrayIndex(val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val);
}

function isPromise(val) {
  return isDef(val) && typeof val.then === 'function' && typeof val.catch === 'function';
}
/**
 * Convert a value to a string that is actually rendered.
 */


function vue_runtime_esm_toString(val) {
  return val == null ? '' : Array.isArray(val) || isPlainObject(val) && val.toString === _toString ? JSON.stringify(val, null, 2) : String(val);
}
/**
 * Convert an input value to a number for persistence.
 * If the conversion fails, return original string.
 */


function toNumber(val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n;
}
/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */


function makeMap(str, expectsLowerCase) {
  var map = Object.create(null);
  var list = str.split(',');

  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }

  return expectsLowerCase ? function (val) {
    return map[val.toLowerCase()];
  } : function (val) {
    return map[val];
  };
}
/**
 * Check if a tag is a built-in tag.
 */


makeMap('slot,component', true);
/**
 * Check if an attribute is a reserved attribute.
 */

var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');
/**
 * Remove an item from an array.
 */

function remove(arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);

    if (index > -1) {
      return arr.splice(index, 1);
    }
  }
}
/**
 * Check whether an object has the property.
 */


var vue_runtime_esm_hasOwnProperty = Object.prototype.hasOwnProperty;

function hasOwn(obj, key) {
  return vue_runtime_esm_hasOwnProperty.call(obj, key);
}
/**
 * Create a cached version of a pure function.
 */


function cached(fn) {
  var cache = Object.create(null);
  return function cachedFn(str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
}
/**
 * Camelize a hyphen-delimited string.
 */


var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) {
    return c ? c.toUpperCase() : '';
  });
});
/**
 * Capitalize a string.
 */

var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
/**
 * Hyphenate a camelCase string.
 */

var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase();
});
/**
 * Simple bind polyfill for environments that do not support it,
 * e.g., PhantomJS 1.x. Technically, we don't need this anymore
 * since native bind is now performant enough in most browsers.
 * But removing it would mean breaking code that was able to run in
 * PhantomJS 1.x, so this must be kept for backward compatibility.
 */

/* istanbul ignore next */

function polyfillBind(fn, ctx) {
  function boundFn(a) {
    var l = arguments.length;
    return l ? l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a) : fn.call(ctx);
  }

  boundFn._length = fn.length;
  return boundFn;
}

function nativeBind(fn, ctx) {
  return fn.bind(ctx);
}

var bind = Function.prototype.bind ? nativeBind : polyfillBind;
/**
 * Convert an Array-like object to a real Array.
 */

function toArray(list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);

  while (i--) {
    ret[i] = list[i + start];
  }

  return ret;
}
/**
 * Mix properties into target object.
 */


function extend(to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }

  return to;
}
/**
 * Merge an Array of Objects into a single Object.
 */


function toObject(arr) {
  var res = {};

  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }

  return res;
}
/* eslint-disable no-unused-vars */

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/).
 */


function noop(a, b, c) {}
/**
 * Always return false.
 */


var no = function (a, b, c) {
  return false;
};
/* eslint-enable no-unused-vars */

/**
 * Return the same value.
 */


var identity = function (_) {
  return _;
};
/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */


function looseEqual(a, b) {
  if (a === b) {
    return true;
  }

  var isObjectA = isObject(a);
  var isObjectB = isObject(b);

  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);

      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i]);
        });
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime();
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key]);
        });
      } else {
        /* istanbul ignore next */
        return false;
      }
    } catch (e) {
      /* istanbul ignore next */
      return false;
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
}
/**
 * Return the first index at which a loosely equal value can be
 * found in the array (if value is a plain object, the array must
 * contain an object of the same shape), or -1 if it is not present.
 */


function looseIndexOf(arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) {
      return i;
    }
  }

  return -1;
}
/**
 * Ensure a function is called only once.
 */


function once(fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  };
}

var SSR_ATTR = 'data-server-rendered';
var ASSET_TYPES = ['component', 'directive', 'filter'];
var LIFECYCLE_HOOKS = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed', 'activated', 'deactivated', 'errorCaptured', 'serverPrefetch'];
/*  */

var config = {
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "production" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "production" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: true,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
};
/*  */

/**
 * unicode letters used for parsing html tags, component names and property paths.
 * using https://www.w3.org/TR/html53/semantics-scripting.html#potentialcustomelementname
 * skipping \u10000-\uEFFFF due to it freezing up PhantomJS
 */

var unicodeRegExp = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
/**
 * Check if a string starts with $ or _
 */

function isReserved(str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F;
}
/**
 * Define a property.
 */


function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}
/**
 * Parse simple path.
 */


var bailRE = new RegExp("[^" + unicodeRegExp.source + ".$_\\d]");

function parsePath(path) {
  if (bailRE.test(path)) {
    return;
  }

  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) {
        return;
      }

      obj = obj[segments[i]];
    }

    return obj;
  };
}
/*  */
// can we use __proto__?


var hasProto = ('__proto__' in {}); // Browser environment sniffing

var inBrowser = "undefined" !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser ;
var isIE9 = UA ;
var isIOS = weexPlatform === 'ios';
var isFF = UA ; // Firefox has a "watch" function on Object.prototype...

var nativeWatch = {}.watch;
// vue-server-renderer can set VUE_ENV


var _isServer;

var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inWeex && typeof commonjsGlobal !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = commonjsGlobal['process'] && commonjsGlobal['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }

  return _isServer;
}; // detect devtools
/* istanbul ignore next */

function isNative(Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
}

var hasSymbol = typeof Symbol !== 'undefined' && isNative(Symbol) && typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */
// $flow-disable-line


if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = /*@__PURE__*/function () {
    function Set() {
      this.set = Object.create(null);
    }

    Set.prototype.has = function has(key) {
      return this.set[key] === true;
    };

    Set.prototype.add = function add(key) {
      this.set[key] = true;
    };

    Set.prototype.clear = function clear() {
      this.set = Object.create(null);
    };

    return Set;
  }();
}
/*  */


var warn = noop;
/*  */


var uid = 0;
/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */

var Dep = function Dep() {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub(sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub(sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend() {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify() {
  // stabilize the subscriber list first
  var subs = this.subs.slice();

  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
}; // The current target watcher being evaluated.
// This is globally unique because only one watcher
// can be evaluated at a time.


Dep.target = null;
var targetStack = [];

function pushTarget(target) {
  targetStack.push(target);
  Dep.target = target;
}

function popTarget() {
  targetStack.pop();
  Dep.target = targetStack[targetStack.length - 1];
}
/*  */


var VNode = function VNode(tag, data, children, text, elm, context, componentOptions, asyncFactory) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = {
  child: {
    configurable: true
  }
}; // DEPRECATED: alias for componentInstance for backwards compat.

/* istanbul ignore next */

prototypeAccessors.child.get = function () {
  return this.componentInstance;
};

Object.defineProperties(VNode.prototype, prototypeAccessors);

var createEmptyVNode = function (text) {
  if (text === void 0) text = '';
  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node;
};

function createTextVNode(val) {
  return new VNode(undefined, undefined, undefined, String(val));
} // optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.


function cloneVNode(vnode) {
  var cloned = new VNode(vnode.tag, vnode.data, // #7975
  // clone children array to avoid mutating original in case of cloning
  // a child.
  vnode.children && vnode.children.slice(), vnode.text, vnode.elm, vnode.context, vnode.componentOptions, vnode.asyncFactory);
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.asyncMeta = vnode.asyncMeta;
  cloned.isCloned = true;
  return cloned;
}
/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */


var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);
var methodsToPatch = ['push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'];
/**
 * Intercept mutating methods and emit events
 */

methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator() {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;

    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break;

      case 'splice':
        inserted = args.slice(2);
        break;
    }

    if (inserted) {
      ob.observeArray(inserted);
    } // notify change


    ob.dep.notify();
    return result;
  });
});
/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */

var shouldObserve = true;

function toggleObserving(value) {
  shouldObserve = value;
}
/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */


var Observer = function Observer(value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);

  if (Array.isArray(value)) {
    if (hasProto) {
      protoAugment(value, arrayMethods);
    } else {
      copyAugment(value, arrayMethods, arrayKeys);
    }

    this.observeArray(value);
  } else {
    this.walk(value);
  }
};
/**
 * Walk through all properties and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */


Observer.prototype.walk = function walk(obj) {
  var keys = Object.keys(obj);

  for (var i = 0; i < keys.length; i++) {
    defineReactive$$1(obj, keys[i]);
  }
};
/**
 * Observe a list of Array items.
 */


Observer.prototype.observeArray = function observeArray(items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
}; // helpers

/**
 * Augment a target Object or Array by intercepting
 * the prototype chain using __proto__
 */


function protoAugment(target, src) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}
/**
 * Augment a target Object or Array by defining
 * hidden properties.
 */

/* istanbul ignore next */


function copyAugment(target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}
/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */


function observe(value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return;
  }

  var ob;

  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (shouldObserve && !isServerRendering() && (Array.isArray(value) || isPlainObject(value)) && Object.isExtensible(value) && !value._isVue) {
    ob = new Observer(value);
  }

  if (asRootData && ob) {
    ob.vmCount++;
  }

  return ob;
}
/**
 * Define a reactive property on an Object.
 */


function defineReactive$$1(obj, key, val, customSetter, shallow) {
  var dep = new Dep();
  var property = Object.getOwnPropertyDescriptor(obj, key);

  if (property && property.configurable === false) {
    return;
  } // cater for pre-defined getter/setters


  var getter = property && property.get;
  var setter = property && property.set;

  if ((!getter || setter) && arguments.length === 2) {
    val = obj[key];
  }

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter() {
      var value = getter ? getter.call(obj) : val;

      if (Dep.target) {
        dep.depend();

        if (childOb) {
          childOb.dep.depend();

          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }

      return value;
    },
    set: function reactiveSetter(newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */

      if (newVal === value || newVal !== newVal && value !== value) {
        return;
      }


      if (getter && !setter) {
        return;
      }

      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }

      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}
/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */


function set(target, key, val) {

  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val;
  }

  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val;
  }

  var ob = target.__ob__;

  if (target._isVue || ob && ob.vmCount) {
    return val;
  }

  if (!ob) {
    target[key] = val;
    return val;
  }

  defineReactive$$1(ob.value, key, val);
  ob.dep.notify();
  return val;
}
/**
 * Delete a property and trigger change if necessary.
 */


function del(target, key) {

  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return;
  }

  var ob = target.__ob__;

  if (target._isVue || ob && ob.vmCount) {
    return;
  }

  if (!hasOwn(target, key)) {
    return;
  }

  delete target[key];

  if (!ob) {
    return;
  }

  ob.dep.notify();
}
/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */


function dependArray(value) {
  for (var e = void 0, i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();

    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}
/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */


var strats = config.optionMergeStrategies;
/**
 * Helper that recursively merges two data objects together.
 */


function mergeData(to, from) {
  if (!from) {
    return to;
  }

  var key, toVal, fromVal;
  var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i]; // in case the object is already observed...

    if (key === '__ob__') {
      continue;
    }

    toVal = to[key];
    fromVal = from[key];

    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (toVal !== fromVal && isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }

  return to;
}
/**
 * Data
 */


function mergeDataOrFn(parentVal, childVal, vm) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal;
    }

    if (!parentVal) {
      return childVal;
    } // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.


    return function mergedDataFn() {
      return mergeData(typeof childVal === 'function' ? childVal.call(this, this) : childVal, typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal);
    };
  } else {
    return function mergedInstanceDataFn() {
      // instance merge
      var instanceData = typeof childVal === 'function' ? childVal.call(vm, vm) : childVal;
      var defaultData = typeof parentVal === 'function' ? parentVal.call(vm, vm) : parentVal;

      if (instanceData) {
        return mergeData(instanceData, defaultData);
      } else {
        return defaultData;
      }
    };
  }
}

strats.data = function (parentVal, childVal, vm) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      return parentVal;
    }

    return mergeDataOrFn(parentVal, childVal);
  }

  return mergeDataOrFn(parentVal, childVal, vm);
};
/**
 * Hooks and props are merged as arrays.
 */


function mergeHook(parentVal, childVal) {
  var res = childVal ? parentVal ? parentVal.concat(childVal) : Array.isArray(childVal) ? childVal : [childVal] : parentVal;
  return res ? dedupeHooks(res) : res;
}

function dedupeHooks(hooks) {
  var res = [];

  for (var i = 0; i < hooks.length; i++) {
    if (res.indexOf(hooks[i]) === -1) {
      res.push(hooks[i]);
    }
  }

  return res;
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});
/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */

function mergeAssets(parentVal, childVal, vm, key) {
  var res = Object.create(parentVal || null);

  if (childVal) {
    return extend(res, childVal);
  } else {
    return res;
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});
/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */

strats.watch = function (parentVal, childVal, vm, key) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) {
    parentVal = undefined;
  }

  if (childVal === nativeWatch) {
    childVal = undefined;
  }
  /* istanbul ignore if */


  if (!childVal) {
    return Object.create(parentVal || null);
  }

  if (!parentVal) {
    return childVal;
  }

  var ret = {};
  extend(ret, parentVal);

  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];

    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }

    ret[key$1] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child];
  }

  return ret;
};
/**
 * Other object hashes.
 */


strats.props = strats.methods = strats.inject = strats.computed = function (parentVal, childVal, vm, key) {
  if (childVal && "production" !== 'production') {
    assertObjectType(key, childVal);
  }

  if (!parentVal) {
    return childVal;
  }

  var ret = Object.create(null);
  extend(ret, parentVal);

  if (childVal) {
    extend(ret, childVal);
  }

  return ret;
};

strats.provide = mergeDataOrFn;
/**
 * Default strategy.
 */

var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined ? parentVal : childVal;
};
/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */


function normalizeProps(options, vm) {
  var props = options.props;

  if (!props) {
    return;
  }

  var res = {};
  var i, val, name;

  if (Array.isArray(props)) {
    i = props.length;

    while (i--) {
      val = props[i];

      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = {
          type: null
        };
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val) ? val : {
        type: val
      };
    }
  } else ;

  options.props = res;
}
/**
 * Normalize all injections into Object-based format
 */


function normalizeInject(options, vm) {
  var inject = options.inject;

  if (!inject) {
    return;
  }

  var normalized = options.inject = {};

  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = {
        from: inject[i]
      };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val) ? extend({
        from: key
      }, val) : {
        from: val
      };
    }
  } else ;
}
/**
 * Normalize raw function directives into object format.
 */


function normalizeDirectives(options) {
  var dirs = options.directives;

  if (dirs) {
    for (var key in dirs) {
      var def$$1 = dirs[key];

      if (typeof def$$1 === 'function') {
        dirs[key] = {
          bind: def$$1,
          update: def$$1
        };
      }
    }
  }
}

function assertObjectType(name, value, vm) {
  if (!isPlainObject(value)) {
    warn("Invalid value for option \"" + name + "\": expected an Object, " + "but got " + toRawType(value) + ".");
  }
}
/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */


function mergeOptions(parent, child, vm) {

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child);
  normalizeInject(child);
  normalizeDirectives(child); // Apply extends and mixins on the child options,
  // but only if it is a raw options object that isn't
  // the result of another mergeOptions call.
  // Only merged options has the _base property.

  if (!child._base) {
    if (child.extends) {
      parent = mergeOptions(parent, child.extends, vm);
    }

    if (child.mixins) {
      for (var i = 0, l = child.mixins.length; i < l; i++) {
        parent = mergeOptions(parent, child.mixins[i], vm);
      }
    }
  }

  var options = {};
  var key;

  for (key in parent) {
    mergeField(key);
  }

  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }

  function mergeField(key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }

  return options;
}
/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */


function resolveAsset(options, type, id, warnMissing) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return;
  }

  var assets = options[type]; // check local registration variations first

  if (hasOwn(assets, id)) {
    return assets[id];
  }

  var camelizedId = camelize(id);

  if (hasOwn(assets, camelizedId)) {
    return assets[camelizedId];
  }

  var PascalCaseId = capitalize(camelizedId);

  if (hasOwn(assets, PascalCaseId)) {
    return assets[PascalCaseId];
  } // fallback to prototype chain


  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];

  return res;
}
/*  */


function validateProp(key, propOptions, propsData, vm) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key]; // boolean casting

  var booleanIndex = getTypeIndex(Boolean, prop.type);

  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);

      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  } // check default value


  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key); // since the default value is a fresh copy,
    // make sure to observe it.

    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }

  return value;
}
/**
 * Get the default value of a prop.
 */


function getPropDefaultValue(vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined;
  }

  var def = prop.default; // warn against non-factory defaults for Object & Array
  // return previous default value to avoid unnecessary watcher trigger


  if (vm && vm.$options.propsData && vm.$options.propsData[key] === undefined && vm._props[key] !== undefined) {
    return vm._props[key];
  } // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context


  return typeof def === 'function' && getType(prop.type) !== 'Function' ? def.call(vm) : def;
}

var functionTypeCheckRE = /^\s*function (\w+)/;
/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */

function getType(fn) {
  var match = fn && fn.toString().match(functionTypeCheckRE);
  return match ? match[1] : '';
}

function isSameType(a, b) {
  return getType(a) === getType(b);
}

function getTypeIndex(type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1;
  }

  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i;
    }
  }

  return -1;
}
/*  */


function handleError(err, vm, info) {
  // Deactivate deps tracking while processing error handler to avoid possible infinite rendering.
  // See: https://github.com/vuejs/vuex/issues/1505
  pushTarget();

  try {
    if (vm) {
      var cur = vm;

      while (cur = cur.$parent) {
        var hooks = cur.$options.errorCaptured;

        if (hooks) {
          for (var i = 0; i < hooks.length; i++) {
            try {
              var capture = hooks[i].call(cur, err, vm, info) === false;

              if (capture) {
                return;
              }
            } catch (e) {
              globalHandleError(e, cur, 'errorCaptured hook');
            }
          }
        }
      }
    }

    globalHandleError(err, vm, info);
  } finally {
    popTarget();
  }
}

function invokeWithErrorHandling(handler, context, args, vm, info) {
  var res;

  try {
    res = args ? handler.apply(context, args) : handler.call(context);

    if (res && !res._isVue && isPromise(res) && !res._handled) {
      res.catch(function (e) {
        return handleError(e, vm, info + " (Promise/async)");
      }); // issue #9511
      // avoid catch triggering multiple times when nested calls

      res._handled = true;
    }
  } catch (e) {
    handleError(e, vm, info);
  }

  return res;
}

function globalHandleError(err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info);
    } catch (e) {
      // if the user intentionally throws the original error in the handler,
      // do not log it twice
      if (e !== err) {
        logError(e);
      }
    }
  }

  logError(err);
}

function logError(err, vm, info) {
  /* istanbul ignore else */


  if ((inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err;
  }
}
/*  */


var isUsingMicroTask = false;
var callbacks = [];
var pending = false;

function flushCallbacks() {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;

  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
} // Here we have async deferring wrappers using microtasks.
// In 2.5 we used (macro) tasks (in combination with microtasks).
// However, it has subtle problems when state is changed right before repaint
// (e.g. #6813, out-in transitions).
// Also, using (macro) tasks in event handler would cause some weird behaviors
// that cannot be circumvented (e.g. #7109, #7153, #7546, #7834, #8109).
// So we now use microtasks everywhere, again.
// A major drawback of this tradeoff is that there are some scenarios
// where microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690, which have workarounds)
// or even between bubbling of the same event (#6566).


var timerFunc; // The nextTick behavior leverages the microtask queue, which can be accessed
// via either native Promise.then or MutationObserver.
// MutationObserver has wider support, however it is seriously bugged in
// UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It
// completely stops working after triggering a few times... so, if native
// Promise is available, we will use it:

/* istanbul ignore next, $flow-disable-line */

if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();

  timerFunc = function () {
    p.then(flushCallbacks); // In problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.

    if (isIOS) {
      setTimeout(noop);
    }
  };

  isUsingMicroTask = true;
} else if (typeof MutationObserver !== 'undefined' && (isNative(MutationObserver) || // PhantomJS and iOS 7.x
MutationObserver.toString() === '[object MutationObserverConstructor]')) {
  // Use MutationObserver where native Promise is not available,
  // e.g. PhantomJS, iOS7, Android 4.4
  // (#6466 MutationObserver is unreliable in IE11)
  var counter = 1;
  var observer = new MutationObserver(flushCallbacks);
  var textNode = document.createTextNode(String(counter));
  observer.observe(textNode, {
    characterData: true
  });

  timerFunc = function () {
    counter = (counter + 1) % 2;
    textNode.data = String(counter);
  };

  isUsingMicroTask = true;
} else if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  // Fallback to setImmediate.
  // Technically it leverages the (macro) task queue,
  // but it is still a better choice than setTimeout.
  timerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else {
  // Fallback to setTimeout.
  timerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

function nextTick(cb, ctx) {
  var _resolve;

  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });

  if (!pending) {
    pending = true;
    timerFunc();
  } // $flow-disable-line


  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    });
  }
}
/*  */


var seenObjects = new _Set();
/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */

function traverse(val) {
  _traverse(val, seenObjects);

  seenObjects.clear();
}

function _traverse(val, seen) {
  var i, keys;
  var isA = Array.isArray(val);

  if (!isA && !isObject(val) || Object.isFrozen(val) || val instanceof VNode) {
    return;
  }

  if (val.__ob__) {
    var depId = val.__ob__.dep.id;

    if (seen.has(depId)) {
      return;
    }

    seen.add(depId);
  }

  if (isA) {
    i = val.length;

    while (i--) {
      _traverse(val[i], seen);
    }
  } else {
    keys = Object.keys(val);
    i = keys.length;

    while (i--) {
      _traverse(val[keys[i]], seen);
    }
  }
}
/*  */


var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first

  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  };
});

function createFnInvoker(fns, vm) {
  function invoker() {
    var arguments$1 = arguments;
    var fns = invoker.fns;

    if (Array.isArray(fns)) {
      var cloned = fns.slice();

      for (var i = 0; i < cloned.length; i++) {
        invokeWithErrorHandling(cloned[i], null, arguments$1, vm, "v-on handler");
      }
    } else {
      // return handler return value for single handlers
      return invokeWithErrorHandling(fns, null, arguments, vm, "v-on handler");
    }
  }

  invoker.fns = fns;
  return invoker;
}

function updateListeners(on, oldOn, add, remove$$1, createOnceHandler, vm) {
  var name, cur, old, event;

  for (name in on) {
    cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);

    if (isUndef(cur)) ; else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur, vm);
      }

      if (isTrue(event.once)) {
        cur = on[name] = createOnceHandler(event.name, cur, event.capture);
      }

      add(event.name, cur, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }

  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}
/*  */


function mergeVNodeHook(def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }

  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook() {
    hook.apply(this, arguments); // important: remove merged hook to ensure it's called only once
    // and prevent memory leak

    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}
/*  */


function extractPropsFromVNodeData(data, Ctor, tag) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;

  if (isUndef(propOptions)) {
    return;
  }

  var res = {};
  var attrs = data.attrs;
  var props = data.props;

  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);

      checkProp(res, props, key, altKey, true) || checkProp(res, attrs, key, altKey, false);
    }
  }

  return res;
}

function checkProp(res, hash, key, altKey, preserve) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];

      if (!preserve) {
        delete hash[key];
      }

      return true;
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];

      if (!preserve) {
        delete hash[altKey];
      }

      return true;
    }
  }

  return false;
}
/*  */
// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:
// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.


function simpleNormalizeChildren(children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children);
    }
  }

  return children;
} // 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.


function normalizeChildren(children) {
  return isPrimitive(children) ? [createTextVNode(children)] : Array.isArray(children) ? normalizeArrayChildren(children) : undefined;
}

function isTextNode(node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment);
}

function normalizeArrayChildren(children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;

  for (i = 0; i < children.length; i++) {
    c = children[i];

    if (isUndef(c) || typeof c === 'boolean') {
      continue;
    }

    lastIndex = res.length - 1;
    last = res[lastIndex]; //  nested

    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, (nestedIndex || '') + "_" + i); // merge adjacent text nodes

        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + c[0].text);
          c.shift();
        }

        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) && isDef(c.tag) && isUndef(c.key) && isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }

        res.push(c);
      }
    }
  }

  return res;
}
/*  */


function initProvide(vm) {
  var provide = vm.$options.provide;

  if (provide) {
    vm._provided = typeof provide === 'function' ? provide.call(vm) : provide;
  }
}

function initInjections(vm) {
  var result = resolveInject(vm.$options.inject, vm);

  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      {
        defineReactive$$1(vm, key, result[key]);
      }
    });
    toggleObserving(true);
  }
}

function resolveInject(inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i]; // #6574 in case the inject object is observed...

      if (key === '__ob__') {
        continue;
      }

      var provideKey = inject[key].from;
      var source = vm;

      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break;
        }

        source = source.$parent;
      }

      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function' ? provideDefault.call(vm) : provideDefault;
        }
      }
    }

    return result;
  }
}
/*  */

/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */


function resolveSlots(children, context) {
  if (!children || !children.length) {
    return {};
  }

  var slots = {};

  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data; // remove slot attribute if the node is resolved as a Vue slot node

    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    } // named slots should only be respected if the vnode was rendered in the
    // same context.


    if ((child.context === context || child.fnContext === context) && data && data.slot != null) {
      var name = data.slot;
      var slot = slots[name] || (slots[name] = []);

      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  } // ignore slots that contains only whitespace


  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }

  return slots;
}

function isWhitespace(node) {
  return node.isComment && !node.asyncFactory || node.text === ' ';
}
/*  */


function isAsyncPlaceholder(node) {
  return node.isComment && node.asyncFactory;
}
/*  */


function normalizeScopedSlots(slots, normalSlots, prevSlots) {
  var res;
  var hasNormalSlots = Object.keys(normalSlots).length > 0;
  var isStable = slots ? !!slots.$stable : !hasNormalSlots;
  var key = slots && slots.$key;

  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized;
  } else if (isStable && prevSlots && prevSlots !== emptyObject && key === prevSlots.$key && !hasNormalSlots && !prevSlots.$hasNormal) {
    // fast path 2: stable scoped slots w/ no normal slots to proxy,
    // only need to normalize once
    return prevSlots;
  } else {
    res = {};

    for (var key$1 in slots) {
      if (slots[key$1] && key$1[0] !== '$') {
        res[key$1] = normalizeScopedSlot(normalSlots, key$1, slots[key$1]);
      }
    }
  } // expose normal slots on scopedSlots


  for (var key$2 in normalSlots) {
    if (!(key$2 in res)) {
      res[key$2] = proxyNormalSlot(normalSlots, key$2);
    }
  } // avoriaz seems to mock a non-extensible $scopedSlots object
  // and when that is passed down this would cause an error


  if (slots && Object.isExtensible(slots)) {
    slots._normalized = res;
  }

  def(res, '$stable', isStable);
  def(res, '$key', key);
  def(res, '$hasNormal', hasNormalSlots);
  return res;
}

function normalizeScopedSlot(normalSlots, key, fn) {
  var normalized = function () {
    var res = arguments.length ? fn.apply(null, arguments) : fn({});
    res = res && typeof res === 'object' && !Array.isArray(res) ? [res] // single vnode
    : normalizeChildren(res);
    var vnode = res && res[0];
    return res && (!vnode || res.length === 1 && vnode.isComment && !isAsyncPlaceholder(vnode) // #9658, #10391
    ) ? undefined : res;
  }; // this is a slot using the new v-slot syntax without scope. although it is
  // compiled as a scoped slot, render fn users would expect it to be present
  // on this.$slots because the usage is semantically a normal slot.


  if (fn.proxy) {
    Object.defineProperty(normalSlots, key, {
      get: normalized,
      enumerable: true,
      configurable: true
    });
  }

  return normalized;
}

function proxyNormalSlot(slots, key) {
  return function () {
    return slots[key];
  };
}
/*  */

/**
 * Runtime helper for rendering v-for lists.
 */


function renderList(val, render) {
  var ret, i, l, keys, key;

  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);

    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);

    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    if (hasSymbol && val[Symbol.iterator]) {
      ret = [];
      var iterator = val[Symbol.iterator]();
      var result = iterator.next();

      while (!result.done) {
        ret.push(render(result.value, ret.length));
        result = iterator.next();
      }
    } else {
      keys = Object.keys(val);
      ret = new Array(keys.length);

      for (i = 0, l = keys.length; i < l; i++) {
        key = keys[i];
        ret[i] = render(val[key], key, i);
      }
    }
  }

  if (!isDef(ret)) {
    ret = [];
  }

  ret._isVList = true;
  return ret;
}
/*  */

/**
 * Runtime helper for rendering <slot>
 */


function renderSlot(name, fallbackRender, props, bindObject) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;

  if (scopedSlotFn) {
    // scoped slot
    props = props || {};

    if (bindObject) {

      props = extend(extend({}, bindObject), props);
    }

    nodes = scopedSlotFn(props) || (typeof fallbackRender === 'function' ? fallbackRender() : fallbackRender);
  } else {
    nodes = this.$slots[name] || (typeof fallbackRender === 'function' ? fallbackRender() : fallbackRender);
  }

  var target = props && props.slot;

  if (target) {
    return this.$createElement('template', {
      slot: target
    }, nodes);
  } else {
    return nodes;
  }
}
/*  */

/**
 * Runtime helper for resolving filters
 */


function resolveFilter(id) {
  return resolveAsset(this.$options, 'filters', id) || identity;
}
/*  */


function isKeyNotMatch(expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1;
  } else {
    return expect !== actual;
  }
}
/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */


function checkKeyCodes(eventKeyCode, key, builtInKeyCode, eventKeyName, builtInKeyName) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;

  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName);
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode);
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key;
  }

  return eventKeyCode === undefined;
}
/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */


function bindObjectProps(data, tag, value, asProp, isSync) {
  if (value) {
    if (!isObject(value)) ; else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }

      var hash;

      var loop = function (key) {
        if (key === 'class' || key === 'style' || isReservedAttribute(key)) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key) ? data.domProps || (data.domProps = {}) : data.attrs || (data.attrs = {});
        }

        var camelizedKey = camelize(key);
        var hyphenatedKey = hyphenate(key);

        if (!(camelizedKey in hash) && !(hyphenatedKey in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});

            on["update:" + key] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop(key);
    }
  }

  return data;
}
/*  */

/**
 * Runtime helper for rendering static trees.
 */


function renderStatic(index, isInFor) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index]; // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.

  if (tree && !isInFor) {
    return tree;
  } // otherwise, render a fresh tree.


  tree = cached[index] = this.$options.staticRenderFns[index].call(this._renderProxy, null, this // for render fns generated for functional component templates
  );
  markStatic(tree, "__static__" + index, false);
  return tree;
}
/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */


function markOnce(tree, index, key) {
  markStatic(tree, "__once__" + index + (key ? "_" + key : ""), true);
  return tree;
}

function markStatic(tree, key, isOnce) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], key + "_" + i, isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode(node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}
/*  */


function bindObjectListeners(data, value) {
  if (value) {
    if (!isPlainObject(value)) ; else {
      var on = data.on = data.on ? extend({}, data.on) : {};

      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }

  return data;
}
/*  */


function resolveScopedSlots(fns, // see flow/vnode
res, // the following are added in 2.6
hasDynamicKeys, contentHashKey) {
  res = res || {
    $stable: !hasDynamicKeys
  };

  for (var i = 0; i < fns.length; i++) {
    var slot = fns[i];

    if (Array.isArray(slot)) {
      resolveScopedSlots(slot, res, hasDynamicKeys);
    } else if (slot) {
      // marker for reverse proxying v-slot without scope on this.$slots
      if (slot.proxy) {
        slot.fn.proxy = true;
      }

      res[slot.key] = slot.fn;
    }
  }

  if (contentHashKey) {
    res.$key = contentHashKey;
  }

  return res;
}
/*  */


function bindDynamicKeys(baseObj, values) {
  for (var i = 0; i < values.length; i += 2) {
    var key = values[i];

    if (typeof key === 'string' && key) {
      baseObj[values[i]] = values[i + 1];
    }
  }

  return baseObj;
} // helper to dynamically append modifier runtime markers to event names.
// ensure only append when value is already string, otherwise it will be cast
// to string and cause the type check to miss.


function prependModifier(value, symbol) {
  return typeof value === 'string' ? symbol + value : value;
}
/*  */


function installRenderHelpers(target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = vue_runtime_esm_toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
  target._d = bindDynamicKeys;
  target._p = prependModifier;
}
/*  */


function FunctionalRenderContext(data, props, children, parent, Ctor) {
  var this$1$1 = this;
  var options = Ctor.options; // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check

  var contextVm;

  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent); // $flow-disable-line

    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent; // $flow-disable-line

    parent = parent._original;
  }

  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;
  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);

  this.slots = function () {
    if (!this$1$1.$slots) {
      normalizeScopedSlots(data.scopedSlots, this$1$1.$slots = resolveSlots(children, parent));
    }

    return this$1$1.$slots;
  };

  Object.defineProperty(this, 'scopedSlots', {
    enumerable: true,
    get: function get() {
      return normalizeScopedSlots(data.scopedSlots, this.slots());
    }
  }); // support for compiled functional template

  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options; // pre-resolve slots for renderSlot()

    this.$slots = this.slots();
    this.$scopedSlots = normalizeScopedSlots(data.scopedSlots, this.$slots);
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);

      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }

      return vnode;
    };
  } else {
    this._c = function (a, b, c, d) {
      return createElement(contextVm, a, b, c, d, needNormalization);
    };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent(Ctor, propsData, data, contextVm, children) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;

  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) {
      mergeProps(props, data.attrs);
    }

    if (isDef(data.props)) {
      mergeProps(props, data.props);
    }
  }

  var renderContext = new FunctionalRenderContext(data, props, children, contextVm, Ctor);
  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options);
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);

    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
    }

    return res;
  }
}

function cloneAndMarkFunctionalResult(vnode, data, contextVm, options, renderContext) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;

  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }

  return clone;
}

function mergeProps(to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}
/*  */

/*  */

/*  */

/*  */
// inline hooks to be invoked on component VNodes during patch


var componentVNodeHooks = {
  init: function init(vnode, hydrating) {
    if (vnode.componentInstance && !vnode.componentInstance._isDestroyed && vnode.data.keepAlive) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow

      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(vnode, activeInstance);
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },
  prepatch: function prepatch(oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(child, options.propsData, // updated props
    options.listeners, // updated listeners
    vnode, // new parent vnode
    options.children // new children
    );
  },
  insert: function insert(vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;

    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }

    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true
        /* direct */
        );
      }
    }
  },
  destroy: function destroy(vnode) {
    var componentInstance = vnode.componentInstance;

    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true
        /* direct */
        );
      }
    }
  }
};
var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent(Ctor, data, context, children, tag) {
  if (isUndef(Ctor)) {
    return;
  }

  var baseCtor = context.$options._base; // plain options object: turn it into a constructor

  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  } // if at this stage it's not a constructor or an async component factory,
  // reject.


  if (typeof Ctor !== 'function') {

    return;
  } // async component


  var asyncFactory;

  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor);

    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(asyncFactory, data, context, children, tag);
    }
  }

  data = data || {}; // resolve constructor options in case global mixins are applied after
  // component constructor creation

  resolveConstructorOptions(Ctor); // transform component v-model data into props & events

  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  } // extract props


  var propsData = extractPropsFromVNodeData(data, Ctor); // functional component

  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children);
  } // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners


  var listeners = data.on; // replace with listeners with .native modifier
  // so it gets processed during parent component patch.

  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot
    // work around flow
    var slot = data.slot;
    data = {};

    if (slot) {
      data.slot = slot;
    }
  } // install component management hooks onto the placeholder node


  installComponentHooks(data); // return a placeholder vnode

  var name = Ctor.options.name || tag;
  var vnode = new VNode("vue-component-" + Ctor.cid + (name ? "-" + name : ''), data, undefined, undefined, undefined, context, {
    Ctor: Ctor,
    propsData: propsData,
    listeners: listeners,
    tag: tag,
    children: children
  }, asyncFactory);
  return vnode;
}

function createComponentInstanceForVnode( // we know it's MountedComponentVNode but flow doesn't
vnode, // activeInstance in lifecycle state
parent) {
  var options = {
    _isComponent: true,
    _parentVnode: vnode,
    parent: parent
  }; // check inline-template render functions

  var inlineTemplate = vnode.data.inlineTemplate;

  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }

  return new vnode.componentOptions.Ctor(options);
}

function installComponentHooks(data) {
  var hooks = data.hook || (data.hook = {});

  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    var existing = hooks[key];
    var toMerge = componentVNodeHooks[key];

    if (existing !== toMerge && !(existing && existing._merged)) {
      hooks[key] = existing ? mergeHook$1(toMerge, existing) : toMerge;
    }
  }
}

function mergeHook$1(f1, f2) {
  var merged = function (a, b) {
    // flow complains about extra args which is why we use any
    f1(a, b);
    f2(a, b);
  };

  merged._merged = true;
  return merged;
} // transform component v-model info (value and callback) into
// prop and event handler respectively.


function transformModel(options, data) {
  var prop = options.model && options.model.prop || 'value';
  var event = options.model && options.model.event || 'input';
  (data.attrs || (data.attrs = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  var existing = on[event];
  var callback = data.model.callback;

  if (isDef(existing)) {
    if (Array.isArray(existing) ? existing.indexOf(callback) === -1 : existing !== callback) {
      on[event] = [callback].concat(existing);
    }
  } else {
    on[event] = callback;
  }
}
/*  */


var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2; // wrapper function for providing a more flexible interface
// without getting yelled at by flow

function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }

  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }

  return _createElement(context, tag, data, children, normalizationType);
}

function _createElement(context, tag, data, children, normalizationType) {
  if (isDef(data) && isDef(data.__ob__)) {
    return createEmptyVNode();
  } // object syntax in v-bind


  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }

  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode();
  } // warn against non-primitive key


  if (Array.isArray(children) && typeof children[0] === 'function') {
    data = data || {};
    data.scopedSlots = {
      default: children[0]
    };
    children.length = 0;
  }

  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }

  var vnode, ns;

  if (typeof tag === 'string') {
    var Ctor;
    ns = context.$vnode && context.$vnode.ns || config.getTagNamespace(tag);

    if (config.isReservedTag(tag)) {

      vnode = new VNode(config.parsePlatformTagName(tag), data, children, undefined, undefined, context);
    } else if ((!data || !data.pre) && isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(tag, data, children, undefined, undefined, context);
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }

  if (Array.isArray(vnode)) {
    return vnode;
  } else if (isDef(vnode)) {
    if (isDef(ns)) {
      applyNS(vnode, ns);
    }

    if (isDef(data)) {
      registerDeepBindings(data);
    }

    return vnode;
  } else {
    return createEmptyVNode();
  }
}

function applyNS(vnode, ns, force) {
  vnode.ns = ns;

  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }

  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];

      if (isDef(child.tag) && (isUndef(child.ns) || isTrue(force) && child.tag !== 'svg')) {
        applyNS(child, ns, force);
      }
    }
  }
} // ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes


function registerDeepBindings(data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }

  if (isObject(data.class)) {
    traverse(data.class);
  }
}
/*  */


function initRender(vm) {
  vm._vnode = null; // the root of the child tree

  vm._staticTrees = null; // v-once cached trees

  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree

  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject; // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates

  vm._c = function (a, b, c, d) {
    return createElement(vm, a, b, c, d, false);
  }; // normalization is always applied for the public version, used in
  // user-written render functions.


  vm.$createElement = function (a, b, c, d) {
    return createElement(vm, a, b, c, d, true);
  }; // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated


  var parentData = parentVnode && parentVnode.data;
  /* istanbul ignore else */

  {
    defineReactive$$1(vm, '$attrs', parentData && parentData.attrs || emptyObject, null, true);
    defineReactive$$1(vm, '$listeners', options._parentListeners || emptyObject, null, true);
  }
}

var currentRenderingInstance = null;

function renderMixin(Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this);
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    if (_parentVnode) {
      vm.$scopedSlots = normalizeScopedSlots(_parentVnode.data.scopedSlots, vm.$slots, vm.$scopedSlots);
    } // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.


    vm.$vnode = _parentVnode; // render self

    var vnode;

    try {
      // There's no need to maintain a stack because all render fns are called
      // separately from one another. Nested component's render fns are called
      // when parent component is patched.
      currentRenderingInstance = vm;
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render"); // return error render result,
      // or previous vnode to prevent render error causing blank component

      /* istanbul ignore else */

      {
        vnode = vm._vnode;
      }
    } finally {
      currentRenderingInstance = null;
    } // if the returned array contains only a single node, allow it


    if (Array.isArray(vnode) && vnode.length === 1) {
      vnode = vnode[0];
    } // return empty vnode in case the render function errored out


    if (!(vnode instanceof VNode)) {

      vnode = createEmptyVNode();
    } // set parent


    vnode.parent = _parentVnode;
    return vnode;
  };
}
/*  */


function ensureCtor(comp, base) {
  if (comp.__esModule || hasSymbol && comp[Symbol.toStringTag] === 'Module') {
    comp = comp.default;
  }

  return isObject(comp) ? base.extend(comp) : comp;
}

function createAsyncPlaceholder(factory, data, context, children, tag) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = {
    data: data,
    context: context,
    children: children,
    tag: tag
  };
  return node;
}

function resolveAsyncComponent(factory, baseCtor) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp;
  }

  if (isDef(factory.resolved)) {
    return factory.resolved;
  }

  var owner = currentRenderingInstance;

  if (owner && isDef(factory.owners) && factory.owners.indexOf(owner) === -1) {
    // already pending
    factory.owners.push(owner);
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp;
  }

  if (owner && !isDef(factory.owners)) {
    var owners = factory.owners = [owner];
    var sync = true;
    var timerLoading = null;
    var timerTimeout = null;
    owner.$on('hook:destroyed', function () {
      return remove(owners, owner);
    });

    var forceRender = function (renderCompleted) {
      for (var i = 0, l = owners.length; i < l; i++) {
        owners[i].$forceUpdate();
      }

      if (renderCompleted) {
        owners.length = 0;

        if (timerLoading !== null) {
          clearTimeout(timerLoading);
          timerLoading = null;
        }

        if (timerTimeout !== null) {
          clearTimeout(timerTimeout);
          timerTimeout = null;
        }
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor); // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)

      if (!sync) {
        forceRender(true);
      } else {
        owners.length = 0;
      }
    });
    var reject = once(function (reason) {

      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender(true);
      }
    });
    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (isPromise(res)) {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isPromise(res.component)) {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);

          if (res.delay === 0) {
            factory.loading = true;
          } else {
            timerLoading = setTimeout(function () {
              timerLoading = null;

              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender(false);
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          timerTimeout = setTimeout(function () {
            timerTimeout = null;

            if (isUndef(factory.resolved)) {
              reject( null);
            }
          }, res.timeout);
        }
      }
    }

    sync = false; // return in case resolved synchronously

    return factory.loading ? factory.loadingComp : factory.resolved;
  }
}
/*  */


function getFirstComponentChild(children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];

      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c;
      }
    }
  }
}
/*  */

/*  */


function initEvents(vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false; // init parent attached events

  var listeners = vm.$options._parentListeners;

  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add(event, fn) {
  target.$on(event, fn);
}

function remove$1(event, fn) {
  target.$off(event, fn);
}

function createOnceHandler(event, fn) {
  var _target = target;
  return function onceHandler() {
    var res = fn.apply(null, arguments);

    if (res !== null) {
      _target.$off(event, onceHandler);
    }
  };
}

function updateComponentListeners(vm, listeners, oldListeners) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, createOnceHandler, vm);
  target = undefined;
}

function eventsMixin(Vue) {
  var hookRE = /^hook:/;

  Vue.prototype.$on = function (event, fn) {
    var vm = this;

    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        vm.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn); // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup

      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }

    return vm;
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;

    function on() {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }

    on.fn = fn;
    vm.$on(event, on);
    return vm;
  };

  Vue.prototype.$off = function (event, fn) {
    var vm = this; // all

    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm;
    } // array of events


    if (Array.isArray(event)) {
      for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {
        vm.$off(event[i$1], fn);
      }

      return vm;
    } // specific event


    var cbs = vm._events[event];

    if (!cbs) {
      return vm;
    }

    if (!fn) {
      vm._events[event] = null;
      return vm;
    } // specific handler


    var cb;
    var i = cbs.length;

    while (i--) {
      cb = cbs[i];

      if (cb === fn || cb.fn === fn) {
        cbs.splice(i, 1);
        break;
      }
    }

    return vm;
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;

    var cbs = vm._events[event];

    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      var info = "event handler for \"" + event + "\"";

      for (var i = 0, l = cbs.length; i < l; i++) {
        invokeWithErrorHandling(cbs[i], vm, args, vm, info);
      }
    }

    return vm;
  };
}
/*  */


var activeInstance = null;

function setActiveInstance(vm) {
  var prevActiveInstance = activeInstance;
  activeInstance = vm;
  return function () {
    activeInstance = prevActiveInstance;
  };
}

function initLifecycle(vm) {
  var options = vm.$options; // locate first non-abstract parent

  var parent = options.parent;

  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }

    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;
  vm.$children = [];
  vm.$refs = {};
  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin(Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var restoreActiveInstance = setActiveInstance(vm);
    vm._vnode = vnode; // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.

    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(vm.$el, vnode, hydrating, false
      /* removeOnly */
      );
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }

    restoreActiveInstance(); // update __vue__ reference

    if (prevEl) {
      prevEl.__vue__ = null;
    }

    if (vm.$el) {
      vm.$el.__vue__ = vm;
    } // if parent is an HOC, update its $el as well


    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    } // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.

  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;

    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;

    if (vm._isBeingDestroyed) {
      return;
    }

    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true; // remove self from parent

    var parent = vm.$parent;

    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    } // teardown watchers


    if (vm._watcher) {
      vm._watcher.teardown();
    }

    var i = vm._watchers.length;

    while (i--) {
      vm._watchers[i].teardown();
    } // remove reference from data ob
    // frozen object may not have observer.


    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    } // call the last hook...


    vm._isDestroyed = true; // invoke destroy hooks on current rendered tree

    vm.__patch__(vm._vnode, null); // fire destroyed hook


    callHook(vm, 'destroyed'); // turn off all instance listeners.

    vm.$off(); // remove __vue__ reference

    if (vm.$el) {
      vm.$el.__vue__ = null;
    } // release circular reference (#6759)


    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent(vm, el, hydrating) {
  vm.$el = el;

  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
  }

  callHook(vm, 'beforeMount');
  var updateComponent;
  /* istanbul ignore if */

  {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  } // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined


  new Watcher(vm, updateComponent, noop, {
    before: function before() {
      if (vm._isMounted && !vm._isDestroyed) {
        callHook(vm, 'beforeUpdate');
      }
    }
  }, true
  /* isRenderWatcher */
  );
  hydrating = false; // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook

  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }

  return vm;
}

function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {
  // we need to do this before overwriting $options._renderChildren.
  // check if there are dynamic scopedSlots (hand-written or compiled but with
  // dynamic slot names). Static scoped slots compiled from template has the
  // "$stable" marker.


  var newScopedSlots = parentVnode.data.scopedSlots;
  var oldScopedSlots = vm.$scopedSlots;
  var hasDynamicScopedSlot = !!(newScopedSlots && !newScopedSlots.$stable || oldScopedSlots !== emptyObject && !oldScopedSlots.$stable || newScopedSlots && vm.$scopedSlots.$key !== newScopedSlots.$key || !newScopedSlots && vm.$scopedSlots.$key); // Any static slot children from the parent may have changed during parent's
  // update. Dynamic scoped slots may also have changed. In such cases, a forced
  // update is necessary to ensure correctness.

  var needsForceUpdate = !!(renderChildren || // has new static slots
  vm.$options._renderChildren || // has old static slots
  hasDynamicScopedSlot);
  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) {
    // update child tree's parent
    vm._vnode.parent = parentVnode;
  }

  vm.$options._renderChildren = renderChildren; // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render

  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject; // update props

  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];

    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?

      props[key] = validateProp(key, propOptions, propsData, vm);
    }

    toggleObserving(true); // keep a copy of raw propsData

    vm.$options.propsData = propsData;
  } // update listeners


  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners); // resolve slots + force update if has children

  if (needsForceUpdate) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }
}

function isInInactiveTree(vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) {
      return true;
    }
  }

  return false;
}

function activateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = false;

    if (isInInactiveTree(vm)) {
      return;
    }
  } else if (vm._directInactive) {
    return;
  }

  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;

    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }

    callHook(vm, 'activated');
  }
}

function deactivateChildComponent(vm, direct) {
  if (direct) {
    vm._directInactive = true;

    if (isInInactiveTree(vm)) {
      return;
    }
  }

  if (!vm._inactive) {
    vm._inactive = true;

    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }

    callHook(vm, 'deactivated');
  }
}

function callHook(vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  var info = hook + " hook";

  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      invokeWithErrorHandling(handlers[i], vm, null, vm, info);
    }
  }

  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }

  popTarget();
}
var queue = [];
var activatedChildren = [];
var has = {};
var waiting = false;
var flushing = false;
var index = 0;
/**
 * Reset the scheduler's state.
 */

function resetSchedulerState() {
  index = queue.length = activatedChildren.length = 0;
  has = {};

  waiting = flushing = false;
} // Async edge case #6566 requires saving the timestamp when event listeners are
// attached. However, calling performance.now() has a perf overhead especially
// if the page has thousands of event listeners. Instead, we take a timestamp
// every time the scheduler flushes and use that for all event listeners
// attached during that flush.


var currentFlushTimestamp = 0; // Async edge case fix requires storing an event listener's attach timestamp.

var getNow = Date.now; // Determine what event timestamp the browser is using. Annoyingly, the
/**
 * Flush both queues and run the watchers.
 */


function flushSchedulerQueue() {
  currentFlushTimestamp = getNow();
  flushing = true;
  var watcher, id; // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.

  queue.sort(function (a, b) {
    return a.id - b.id;
  }); // do not cache length because more watchers might be pushed
  // as we run existing watchers

  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];

    if (watcher.before) {
      watcher.before();
    }

    id = watcher.id;
    has[id] = null;
    watcher.run(); // in dev build, check and stop circular updates.
  } // keep copies of post queues before resetting state


  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();
  resetSchedulerState(); // call component updated and activated hooks

  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue); // devtool hook
}

function callUpdatedHooks(queue) {
  var i = queue.length;

  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;

    if (vm._watcher === watcher && vm._isMounted && !vm._isDestroyed) {
      callHook(vm, 'updated');
    }
  }
}
/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */


function queueActivatedComponent(vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks(queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true
    /* true */
    );
  }
}
/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */


function queueWatcher(watcher) {
  var id = watcher.id;

  if (has[id] == null) {
    has[id] = true;

    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;

      while (i > index && queue[i].id > watcher.id) {
        i--;
      }

      queue.splice(i + 1, 0, watcher);
    } // queue the flush


    if (!waiting) {
      waiting = true;

      nextTick(flushSchedulerQueue);
    }
  }
}
/*  */


var uid$2 = 0;
/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */

var Watcher = function Watcher(vm, expOrFn, cb, options, isRenderWatcher) {
  this.vm = vm;

  if (isRenderWatcher) {
    vm._watcher = this;
  }

  vm._watchers.push(this); // options


  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
    this.before = options.before;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }

  this.cb = cb;
  this.id = ++uid$2; // uid for batching

  this.active = true;
  this.dirty = this.lazy; // for lazy watchers

  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  ''; // parse expression for getter

  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);

    if (!this.getter) {
      this.getter = noop;
    }
  }

  this.value = this.lazy ? undefined : this.get();
};
/**
 * Evaluate the getter, and re-collect dependencies.
 */


Watcher.prototype.get = function get() {
  pushTarget(this);
  var value;
  var vm = this.vm;

  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, "getter for watcher \"" + this.expression + "\"");
    } else {
      throw e;
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }

    popTarget();
    this.cleanupDeps();
  }

  return value;
};
/**
 * Add a dependency to this directive.
 */


Watcher.prototype.addDep = function addDep(dep) {
  var id = dep.id;

  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);

    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};
/**
 * Clean up for dependency collection.
 */


Watcher.prototype.cleanupDeps = function cleanupDeps() {
  var i = this.deps.length;

  while (i--) {
    var dep = this.deps[i];

    if (!this.newDepIds.has(dep.id)) {
      dep.removeSub(this);
    }
  }

  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};
/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */


Watcher.prototype.update = function update() {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};
/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */


Watcher.prototype.run = function run() {
  if (this.active) {
    var value = this.get();

    if (value !== this.value || // Deep watchers and watchers on Object/Arrays should fire even
    // when the value is the same, because the value may
    // have mutated.
    isObject(value) || this.deep) {
      // set new value
      var oldValue = this.value;
      this.value = value;

      if (this.user) {
        var info = "callback for watcher \"" + this.expression + "\"";
        invokeWithErrorHandling(this.cb, this.vm, [value, oldValue], this.vm, info);
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};
/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */


Watcher.prototype.evaluate = function evaluate() {
  this.value = this.get();
  this.dirty = false;
};
/**
 * Depend on all deps collected by this watcher.
 */


Watcher.prototype.depend = function depend() {
  var i = this.deps.length;

  while (i--) {
    this.deps[i].depend();
  }
};
/**
 * Remove self from all dependencies' subscriber list.
 */


Watcher.prototype.teardown = function teardown() {
  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }

    var i = this.deps.length;

    while (i--) {
      this.deps[i].removeSub(this);
    }

    this.active = false;
  }
};
/*  */


var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy(target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter() {
    return this[sourceKey][key];
  };

  sharedPropertyDefinition.set = function proxySetter(val) {
    this[sourceKey][key] = val;
  };

  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState(vm) {
  vm._watchers = [];
  var opts = vm.$options;

  if (opts.props) {
    initProps(vm, opts.props);
  }

  if (opts.methods) {
    initMethods(vm, opts.methods);
  }

  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true
    /* asRootData */
    );
  }

  if (opts.computed) {
    initComputed(vm, opts.computed);
  }

  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps(vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {}; // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.

  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent; // root instance props should be converted

  if (!isRoot) {
    toggleObserving(false);
  }

  var loop = function (key) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */

    {
      defineReactive$$1(props, key, value);
    } // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.


    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop(key);

  toggleObserving(true);
}

function initData(vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function' ? getData(data, vm) : data || {};

  if (!isPlainObject(data)) {
    data = {};
  } // proxy data on instance


  var keys = Object.keys(data);
  var props = vm.$options.props;
  vm.$options.methods;
  var i = keys.length;

  while (i--) {
    var key = keys[i];

    if (props && hasOwn(props, key)) ; else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  } // observe data


  observe(data, true
  /* asRootData */
  );
}

function getData(data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();

  try {
    return data.call(vm, vm);
  } catch (e) {
    handleError(e, vm, "data()");
    return {};
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = {
  lazy: true
};

function initComputed(vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null); // computed properties are just getters during SSR

  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(vm, getter || noop, noop, computedWatcherOptions);
    } // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.


    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    }
  }
}

function defineComputed(target, key, userDef) {
  var shouldCache = !isServerRendering();

  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache ? createComputedGetter(key) : createGetterInvoker(userDef);
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get ? shouldCache && userDef.cache !== false ? createComputedGetter(key) : createGetterInvoker(userDef.get) : noop;
    sharedPropertyDefinition.set = userDef.set || noop;
  }

  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter(key) {
  return function computedGetter() {
    var watcher = this._computedWatchers && this._computedWatchers[key];

    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }

      if (Dep.target) {
        watcher.depend();
      }

      return watcher.value;
    }
  };
}

function createGetterInvoker(fn) {
  return function computedGetter() {
    return fn.call(this, this);
  };
}

function initMethods(vm, methods) {
  vm.$options.props;

  for (var key in methods) {

    vm[key] = typeof methods[key] !== 'function' ? noop : bind(methods[key], vm);
  }
}

function initWatch(vm, watch) {
  for (var key in watch) {
    var handler = watch[key];

    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher(vm, expOrFn, handler, options) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }

  if (typeof handler === 'string') {
    handler = vm[handler];
  }

  return vm.$watch(expOrFn, handler, options);
}

function stateMixin(Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};

  dataDef.get = function () {
    return this._data;
  };

  var propsDef = {};

  propsDef.get = function () {
    return this._props;
  };

  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);
  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (expOrFn, cb, options) {
    var vm = this;

    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options);
    }

    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);

    if (options.immediate) {
      var info = "callback for immediate watcher \"" + watcher.expression + "\"";
      pushTarget();
      invokeWithErrorHandling(cb, vm, [watcher.value], vm, info);
      popTarget();
    }

    return function unwatchFn() {
      watcher.teardown();
    };
  };
}
/*  */


var uid$3 = 0;

function initMixin(Vue) {
  Vue.prototype._init = function (options) {
    var vm = this; // a uid

    vm._uid = uid$3++;


    vm._isVue = true; // merge options

    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(resolveConstructorOptions(vm.constructor), options || {}, vm);
    }
    /* istanbul ignore else */


    {
      vm._renderProxy = vm;
    } // expose real self


    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props

    initState(vm);
    initProvide(vm); // resolve provide after data/props

    callHook(vm, 'created');

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent(vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options); // doing this because it's faster than dynamic enumeration.

  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions(Ctor) {
  var options = Ctor.options;

  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;

    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions; // check if there are any late-modified/attached options (#4976)

      var modifiedOptions = resolveModifiedOptions(Ctor); // update base extend options

      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }

      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);

      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }

  return options;
}

function resolveModifiedOptions(Ctor) {
  var modified;
  var latest = Ctor.options;
  var sealed = Ctor.sealedOptions;

  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) {
        modified = {};
      }

      modified[key] = latest[key];
    }
  }

  return modified;
}

function Vue(options) {

  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);
/*  */

function initUse(Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = this._installedPlugins || (this._installedPlugins = []);

    if (installedPlugins.indexOf(plugin) > -1) {
      return this;
    } // additional parameters


    var args = toArray(arguments, 1);
    args.unshift(this);

    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }

    installedPlugins.push(plugin);
    return this;
  };
}
/*  */


function initMixin$1(Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this;
  };
}
/*  */


function initExtend(Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;
  /**
   * Class inheritance
   */

  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});

    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId];
    }

    var name = extendOptions.name || Super.options.name;

    var Sub = function VueComponent(options) {
      this._init(options);
    };

    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(Super.options, extendOptions);
    Sub['super'] = Super; // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.

    if (Sub.options.props) {
      initProps$1(Sub);
    }

    if (Sub.options.computed) {
      initComputed$1(Sub);
    } // allow further extension/mixin/plugin usage


    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use; // create asset registers, so extended classes
    // can have their private assets too.

    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    }); // enable recursive self-lookup

    if (name) {
      Sub.options.components[name] = Sub;
    } // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.


    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options); // cache constructor

    cachedCtors[SuperId] = Sub;
    return Sub;
  };
}

function initProps$1(Comp) {
  var props = Comp.options.props;

  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1(Comp) {
  var computed = Comp.options.computed;

  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}
/*  */


function initAssetRegisters(Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (id, definition) {
      if (!definition) {
        return this.options[type + 's'][id];
      } else {

        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }

        if (type === 'directive' && typeof definition === 'function') {
          definition = {
            bind: definition,
            update: definition
          };
        }

        this.options[type + 's'][id] = definition;
        return definition;
      }
    };
  });
}
/*  */


function getComponentName(opts) {
  return opts && (opts.Ctor.options.name || opts.tag);
}

function matches(pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1;
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1;
  } else if (isRegExp(pattern)) {
    return pattern.test(name);
  }
  /* istanbul ignore next */


  return false;
}

function pruneCache(keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;

  for (var key in cache) {
    var entry = cache[key];

    if (entry) {
      var name = entry.name;

      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry(cache, key, keys, current) {
  var entry = cache[key];

  if (entry && (!current || entry.tag !== current.tag)) {
    entry.componentInstance.$destroy();
  }

  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];
var KeepAlive = {
  name: 'keep-alive',
  abstract: true,
  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },
  methods: {
    cacheVNode: function cacheVNode() {
      var ref = this;
      var cache = ref.cache;
      var keys = ref.keys;
      var vnodeToCache = ref.vnodeToCache;
      var keyToCache = ref.keyToCache;

      if (vnodeToCache) {
        var tag = vnodeToCache.tag;
        var componentInstance = vnodeToCache.componentInstance;
        var componentOptions = vnodeToCache.componentOptions;
        cache[keyToCache] = {
          name: getComponentName(componentOptions),
          tag: tag,
          componentInstance: componentInstance
        };
        keys.push(keyToCache); // prune oldest entry

        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }

        this.vnodeToCache = null;
      }
    }
  },
  created: function created() {
    this.cache = Object.create(null);
    this.keys = [];
  },
  destroyed: function destroyed() {
    for (var key in this.cache) {
      pruneCacheEntry(this.cache, key, this.keys);
    }
  },
  mounted: function mounted() {
    var this$1$1 = this;
    this.cacheVNode();
    this.$watch('include', function (val) {
      pruneCache(this$1$1, function (name) {
        return matches(val, name);
      });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1$1, function (name) {
        return !matches(val, name);
      });
    });
  },
  updated: function updated() {
    this.cacheVNode();
  },
  render: function render() {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;

    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;

      if ( // not included
      include && (!name || !matches(include, name)) || // excluded
      exclude && name && matches(exclude, name)) {
        return vnode;
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null // same constructor may get registered as different local components
      // so cid alone is not enough (#3269)
      ? componentOptions.Ctor.cid + (componentOptions.tag ? "::" + componentOptions.tag : '') : vnode.key;

      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance; // make current key freshest

        remove(keys, key);
        keys.push(key);
      } else {
        // delay setting the cache until update
        this.vnodeToCache = vnode;
        this.keyToCache = key;
      }

      vnode.data.keepAlive = true;
    }

    return vnode || slot && slot[0];
  }
};
var builtInComponents = {
  KeepAlive: KeepAlive
};
/*  */

function initGlobalAPI(Vue) {
  // config
  var configDef = {};

  configDef.get = function () {
    return config;
  };

  Object.defineProperty(Vue, 'config', configDef); // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.

  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive$$1
  };
  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick; // 2.6 explicit observable API

  Vue.observable = function (obj) {
    observe(obj);
    return obj;
  };

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  }); // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.

  Vue.options._base = Vue;
  extend(Vue.options.components, builtInComponents);
  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);
Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});
Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get() {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext;
  }
}); // expose FunctionalRenderContext for ssr runtime helper installation

Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});
Vue.version = '2.6.14';
/*  */
// these are reserved for web because they are directly compiled away
// during template compilation

var isReservedAttr = makeMap('style,class'); // attributes that should be using props for binding

var acceptValue = makeMap('input,textarea,option,select,progress');

var mustUseProp = function (tag, type, attr) {
  return attr === 'value' && acceptValue(tag) && type !== 'button' || attr === 'selected' && tag === 'option' || attr === 'checked' && tag === 'input' || attr === 'muted' && tag === 'video';
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');
var isValidContentEditableValue = makeMap('events,caret,typing,plaintext-only');

var convertEnumeratedValue = function (key, value) {
  return isFalsyAttrValue(value) || value === 'false' ? 'false' // allow arbitrary string value for contenteditable
  : key === 'contenteditable' && isValidContentEditableValue(value) ? value : 'true';
};

var isBooleanAttr = makeMap('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' + 'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' + 'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' + 'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' + 'required,reversed,scoped,seamless,selected,sortable,' + 'truespeed,typemustmatch,visible');
var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink';
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : '';
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false;
};
/*  */


function genClassForVnode(vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;

  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;

    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }

  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }

  return renderClass(data.staticClass, data.class);
}

function mergeClassData(child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class) ? [child.class, parent.class] : parent.class
  };
}

function renderClass(staticClass, dynamicClass) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass));
  }
  /* istanbul ignore next */


  return '';
}

function concat(a, b) {
  return a ? b ? a + ' ' + b : a : b || '';
}

function stringifyClass(value) {
  if (Array.isArray(value)) {
    return stringifyArray(value);
  }

  if (isObject(value)) {
    return stringifyObject(value);
  }

  if (typeof value === 'string') {
    return value;
  }
  /* istanbul ignore next */


  return '';
}

function stringifyArray(value) {
  var res = '';
  var stringified;

  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) {
        res += ' ';
      }

      res += stringified;
    }
  }

  return res;
}

function stringifyObject(value) {
  var res = '';

  for (var key in value) {
    if (value[key]) {
      if (res) {
        res += ' ';
      }

      res += key;
    }
  }

  return res;
}
/*  */


var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};
var isHTMLTag = makeMap('html,body,base,head,link,meta,style,title,' + 'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' + 'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' + 'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' + 's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' + 'embed,object,param,source,canvas,script,noscript,del,ins,' + 'caption,col,colgroup,table,thead,tbody,td,th,tr,' + 'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' + 'output,progress,select,textarea,' + 'details,dialog,menu,menuitem,summary,' + 'content,element,shadow,template,blockquote,iframe,tfoot'); // this map is intentionally selective, only covering SVG elements that may
// contain child elements.

var isSVG = makeMap('svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' + 'foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' + 'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view', true);

var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag);
};

function getTagNamespace(tag) {
  if (isSVG(tag)) {
    return 'svg';
  } // basic support for MathML
  // note it doesn't support other MathML elements being component roots


  if (tag === 'math') {
    return 'math';
  }
}

function isUnknownElement(tag) {
  /* istanbul ignore if */
  {
    return true;
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');
/*  */

/**
 * Query an element selector if it's not an element already.
 */

function query(el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);

    if (!selected) {
      return document.createElement('div');
    }

    return selected;
  } else {
    return el;
  }
}
/*  */


function createElement$1(tagName, vnode) {
  var elm = document.createElement(tagName);

  if (tagName !== 'select') {
    return elm;
  } // false or null will remove the attribute but undefined will not


  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }

  return elm;
}

function createElementNS(namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName);
}

function createTextNode(text) {
  return document.createTextNode(text);
}

function createComment(text) {
  return document.createComment(text);
}

function insertBefore(parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild(node, child) {
  node.removeChild(child);
}

function appendChild(node, child) {
  node.appendChild(child);
}

function parentNode(node) {
  return node.parentNode;
}

function nextSibling(node) {
  return node.nextSibling;
}

function tagName(node) {
  return node.tagName;
}

function setTextContent(node, text) {
  node.textContent = text;
}

function setStyleScope(node, scopeId) {
  node.setAttribute(scopeId, '');
}

var nodeOps = /*#__PURE__*/Object.freeze({
  createElement: createElement$1,
  createElementNS: createElementNS,
  createTextNode: createTextNode,
  createComment: createComment,
  insertBefore: insertBefore,
  removeChild: removeChild,
  appendChild: appendChild,
  parentNode: parentNode,
  nextSibling: nextSibling,
  tagName: tagName,
  setTextContent: setTextContent,
  setStyleScope: setStyleScope
});
/*  */

var ref = {
  create: function create(_, vnode) {
    registerRef(vnode);
  },
  update: function update(oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy(vnode) {
    registerRef(vnode, true);
  }
};

function registerRef(vnode, isRemoval) {
  var key = vnode.data.ref;

  if (!isDef(key)) {
    return;
  }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;

  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}
/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */


var emptyNode = new VNode('', {}, []);
var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode(a, b) {
  return a.key === b.key && a.asyncFactory === b.asyncFactory && (a.tag === b.tag && a.isComment === b.isComment && isDef(a.data) === isDef(b.data) && sameInputType(a, b) || isTrue(a.isAsyncPlaceholder) && isUndef(b.asyncFactory.error));
}

function sameInputType(a, b) {
  if (a.tag !== 'input') {
    return true;
  }

  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB);
}

function createKeyToOldIdx(children, beginIdx, endIdx) {
  var i, key;
  var map = {};

  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;

    if (isDef(key)) {
      map[key] = i;
    }
  }

  return map;
}

function createPatchFunction(backend) {
  var i, j;
  var cbs = {};
  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];

    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt(elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm);
  }

  function createRmCb(childElm, listeners) {
    function remove$$1() {
      if (--remove$$1.listeners === 0) {
        removeNode(childElm);
      }
    }

    remove$$1.listeners = listeners;
    return remove$$1;
  }

  function removeNode(el) {
    var parent = nodeOps.parentNode(el); // element may have already been removed due to v-html / v-text

    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested, ownerArray, index) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check

    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return;
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;

    if (isDef(tag)) {

      vnode.elm = vnode.ns ? nodeOps.createElementNS(vnode.ns, tag) : nodeOps.createElement(tag, vnode);
      setScope(vnode);
      /* istanbul ignore if */

      {
        createChildren(vnode, children, insertedVnodeQueue);

        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }

        insert(parentElm, vnode.elm, refElm);
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;

    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;

      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false
        /* hydrating */
        );
      } // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.


      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        insert(parentElm, vnode.elm, refElm);

        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }

        return true;
      }
    }
  }

  function initComponent(vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }

    vnode.elm = vnode.componentInstance.$el;

    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode); // make sure to invoke the insert hook

      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {
    var i; // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.

    var innerNode = vnode;

    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;

      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }

        insertedVnodeQueue.push(innerNode);
        break;
      }
    } // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself


    insert(parentElm, vnode.elm, refElm);
  }

  function insert(parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (nodeOps.parentNode(ref$$1) === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren(vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {

      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable(vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }

    return isDef(vnode.tag);
  }

  function invokeCreateHooks(vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }

    i = vnode.data.hook; // Reuse variable

    if (isDef(i)) {
      if (isDef(i.create)) {
        i.create(emptyNode, vnode);
      }

      if (isDef(i.insert)) {
        insertedVnodeQueue.push(vnode);
      }
    }
  } // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.


  function setScope(vnode) {
    var i;

    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;

      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }

        ancestor = ancestor.parent;
      }
    } // for slot content they should also get the scopeId from the host instance.


    if (isDef(i = activeInstance) && i !== vnode.context && i !== vnode.fnContext && isDef(i = i.$options._scopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook(vnode) {
    var i, j;
    var data = vnode.data;

    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) {
        i(vnode);
      }

      for (i = 0; i < cbs.destroy.length; ++i) {
        cbs.destroy[i](vnode);
      }
    }

    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes(vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];

      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else {
          // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook(vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;

      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      } // recursively invoke hooks on child component root node


      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }

      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }

      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm; // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions

    var canMove = !removeOnly;

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) {
        // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue, newCh, newEndIdx);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) {
        // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) {
          oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx);
        }

        idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);

        if (isUndef(idxInOld)) {
          // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];

          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue, newCh, newStartIdx);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }

        newStartVnode = newCh[++newStartIdx];
      }
    }

    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function findIdxInOld(node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];

      if (isDef(c) && sameVnode(node, c)) {
        return i;
      }
    }
  }

  function patchVnode(oldVnode, vnode, insertedVnodeQueue, ownerArray, index, removeOnly) {
    if (oldVnode === vnode) {
      return;
    }

    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // clone reused vnode
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }

      return;
    } // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.


    if (isTrue(vnode.isStatic) && isTrue(oldVnode.isStatic) && vnode.key === oldVnode.key && (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))) {
      vnode.componentInstance = oldVnode.componentInstance;
      return;
    }

    var i;
    var data = vnode.data;

    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;

    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) {
        cbs.update[i](oldVnode, vnode);
      }

      if (isDef(i = data.hook) && isDef(i = i.update)) {
        i(oldVnode, vnode);
      }
    }

    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) {
          updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly);
        }
      } else if (isDef(ch)) {

        if (isDef(oldVnode.text)) {
          nodeOps.setTextContent(elm, '');
        }

        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }

    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) {
        i(oldVnode, vnode);
      }
    }
  }

  function invokeInsertHook(vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).

  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key'); // Note: this is a browser-only function so we can assume elms are DOM nodes.

  function hydrate(elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || data && data.pre;
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true;
    } // assert node match

    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) {
        i(vnode, true
        /* hydrating */
        );
      }

      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true;
      }
    }

    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {

              return false;
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;

            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break;
              }

              childNode = childNode.nextSibling;
            } // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.


            if (!childrenMatch || childNode) {

              return false;
            }
          }
        }
      }

      if (isDef(data)) {
        var fullInvoke = false;

        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break;
          }
        }

        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }

    return true;
  }

  return function patch(oldVnode, vnode, hydrating, removeOnly) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) {
        invokeDestroyHook(oldVnode);
      }

      return;
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);

      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, null, null, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }

          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode;
            }
          } // either not server-rendered, or hydration failed.
          // create an empty node and replace it


          oldVnode = emptyNodeAt(oldVnode);
        } // replacing existing element


        var oldElm = oldVnode.elm;
        var parentElm = nodeOps.parentNode(oldElm); // create new node

        createElm(vnode, insertedVnodeQueue, // extremely rare edge case: do not insert if old element is in a
        // leaving transition. Only happens when combining transition +
        // keep-alive + HOCs. (#4590)
        oldElm._leaveCb ? null : parentElm, nodeOps.nextSibling(oldElm)); // update parent placeholder node element, recursively

        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);

          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }

            ancestor.elm = vnode.elm;

            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              } // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.


              var insert = ancestor.data.hook.insert;

              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }

            ancestor = ancestor.parent;
          }
        } // destroy old node


        if (isDef(parentElm)) {
          removeVnodes([oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm;
  };
}
/*  */


var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives(vnode) {
    updateDirectives(vnode, emptyNode);
  }
};

function updateDirectives(oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update(oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);
  var dirsWithInsert = [];
  var dirsWithPostpatch = [];
  var key, oldDir, dir;

  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];

    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);

      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      dir.oldArg = oldDir.arg;
      callHook$1(dir, 'update', vnode, oldVnode);

      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };

    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1(dirs, vm) {
  var res = Object.create(null);

  if (!dirs) {
    // $flow-disable-line
    return res;
  }

  var i, dir;

  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];

    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }

    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name);
  } // $flow-disable-line


  return res;
}

function getRawDirName(dir) {
  return dir.rawName || dir.name + "." + Object.keys(dir.modifiers || {}).join('.');
}

function callHook$1(dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];

  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, "directive " + dir.name + " " + hook + " hook");
    }
  }
}

var baseModules = [ref, directives];
/*  */

function updateAttrs(oldVnode, vnode) {
  var opts = vnode.componentOptions;

  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return;
  }

  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return;
  }

  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {}; // clone observed objects, as the user probably wants to mutate it

  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];

    if (old !== cur) {
      setAttr(elm, key, cur, vnode.data.pre);
    }
  } // #4391: in IE9, setting type can reset value for input[type=radio]

  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr(el, key, value, isInPre) {
  if (isInPre || el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED' ? 'true' : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, convertEnumeratedValue(key, value));
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr(el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {

    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
};
/*  */

function updateClass(oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticClass) && isUndef(data.class) && (isUndef(oldData) || isUndef(oldData.staticClass) && isUndef(oldData.class))) {
    return;
  }

  var cls = genClassForVnode(vnode); // handle transition classes

  var transitionClass = el._transitionClasses;

  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  } // set the class


  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
};
/*  */

/*  */

/*  */

/*  */
// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.

var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';
/*  */
// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.

function normalizeEvents(on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  } // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4

  /* istanbul ignore if */


  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler$1(event, handler, capture) {
  var _target = target$1; // save current target element in closure

  return function onceHandler() {
    var res = handler.apply(null, arguments);

    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  };
} // #9446: Firefox <= 53 (in particular, ESR 52) has incorrect Event.timeStamp
// implementation and does not fire microtasks in between event propagation, so
// safe to exclude.


var useMicrotaskFix = isUsingMicroTask && !(isFF );

function add$1(name, handler, capture, passive) {
  // async edge case #6566: inner click event triggers patch, event handler
  // attached to outer element during patch, and triggered again. This
  // happens because browsers fire microtask ticks between event propagation.
  // the solution is simple: we save the timestamp when a handler is attached,
  // and the handler would only fire if the event passed to it was fired
  // AFTER it was attached.
  if (useMicrotaskFix) {
    var attachedTimestamp = currentFlushTimestamp;
    var original = handler;

    handler = original._wrapper = function (e) {
      if ( // no bubbling, should always fire.
      // this is just a safety net in case event.timeStamp is unreliable in
      // certain weird environments...
      e.target === e.currentTarget || // event is fired after handler attachment
      e.timeStamp >= attachedTimestamp || // bail for environments that have buggy event.timeStamp implementations
      // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
      // #9681 QtWebEngine event.timeStamp is negative value
      e.timeStamp <= 0 || // #9448 bail if event is fired in another document in a multi-page
      // electron/nw.js app, since event.timeStamp will be using a different
      // starting reference
      e.target.ownerDocument !== document) {
        return original.apply(this, arguments);
      }
    };
  }

  target$1.addEventListener(name, handler, capture);
}

function remove$2(name, handler, capture, _target) {
  (_target || target$1).removeEventListener(name, handler._wrapper || handler, capture);
}

function updateDOMListeners(oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return;
  }

  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, createOnceHandler$1, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
};
/*  */

var svgContainer;

function updateDOMProps(oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return;
  }

  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {}; // clone observed objects, as the user probably wants to mutate it

  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (!(key in props)) {
      elm[key] = '';
    }
  }

  for (key in props) {
    cur = props[key]; // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)

    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) {
        vnode.children.length = 0;
      }

      if (cur === oldProps[key]) {
        continue;
      } // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property


      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value' && elm.tagName !== 'PROGRESS') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur; // avoid resetting cursor position when value is the same

      var strCur = isUndef(cur) ? '' : String(cur);

      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else if (key === 'innerHTML' && isSVG(elm.tagName) && isUndef(elm.innerHTML)) {
      // IE doesn't support innerHTML for SVG elements
      svgContainer = svgContainer || document.createElement('div');
      svgContainer.innerHTML = "<svg>" + cur + "</svg>";
      var svg = svgContainer.firstChild;

      while (elm.firstChild) {
        elm.removeChild(elm.firstChild);
      }

      while (svg.firstChild) {
        elm.appendChild(svg.firstChild);
      }
    } else if ( // skip the update if old and new VDOM state is the same.
    // `value` is handled separately because the DOM value may be temporarily
    // out of sync with VDOM state due to focus, composition and modifiers.
    // This  #4521 by skipping the unnecessary `checked` update.
    cur !== oldProps[key]) {
      // some property updates can throw
      // e.g. `value` on <progress> w/ non-finite value
      try {
        elm[key] = cur;
      } catch (e) {}
    }
  }
} // check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue(elm, checkVal) {
  return !elm.composing && (elm.tagName === 'OPTION' || isNotInFocusAndDirty(elm, checkVal) || isDirtyWithModifiers(elm, checkVal));
}

function isNotInFocusAndDirty(elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true; // #6157
  // work around IE bug when accessing document.activeElement in an iframe

  try {
    notInFocus = document.activeElement !== elm;
  } catch (e) {}

  return notInFocus && elm.value !== checkVal;
}

function isDirtyWithModifiers(elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime

  if (isDef(modifiers)) {
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal);
    }

    if (modifiers.trim) {
      return value.trim() !== newVal.trim();
    }
  }

  return value !== newVal;
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
};
/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res;
}); // merge static and dynamic style data on the same vnode

function normalizeStyleData(data) {
  var style = normalizeStyleBinding(data.style); // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it

  return data.staticStyle ? extend(data.staticStyle, style) : style;
} // normalize possible array / string values into Object


function normalizeStyleBinding(bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle);
  }

  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle);
  }

  return bindingStyle;
}
/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */


function getStyle(vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;

    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;

      if (childNode && childNode.data && (styleData = normalizeStyleData(childNode.data))) {
        extend(res, styleData);
      }
    }
  }

  if (styleData = normalizeStyleData(vnode.data)) {
    extend(res, styleData);
  }

  var parentNode = vnode;

  while (parentNode = parentNode.parent) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }

  return res;
}
/*  */


var cssVarRE = /^--/;
var importantRE = /\s*!important$/;

var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(hyphenate(name), val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);

    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];
var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);

  if (prop !== 'filter' && prop in emptyStyle) {
    return prop;
  }

  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);

  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;

    if (name in emptyStyle) {
      return name;
    }
  }
});

function updateStyle(oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) && isUndef(oldData.staticStyle) && isUndef(oldData.style)) {
    return;
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {}; // if static style exists, stylebinding already merged into it when doing normalizeStyleData

  var oldStyle = oldStaticStyle || oldStyleBinding;
  var style = normalizeStyleBinding(vnode.data.style) || {}; // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.

  vnode.data.normalizedStyle = isDef(style.__ob__) ? extend({}, style) : style;
  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }

  for (name in newStyle) {
    cur = newStyle[name];

    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
};
/*  */

var whitespaceRE = /\s+/;
/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */

function addClass(el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return;
  }
  /* istanbul ignore else */


  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) {
        return el.classList.add(c);
      });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";

    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}
/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */


function removeClass(el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return;
  }
  /* istanbul ignore else */


  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(whitespaceRE).forEach(function (c) {
        return el.classList.remove(c);
      });
    } else {
      el.classList.remove(cls);
    }

    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';

    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }

    cur = cur.trim();

    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}
/*  */


function resolveTransition(def$$1) {
  if (!def$$1) {
    return;
  }
  /* istanbul ignore else */


  if (typeof def$$1 === 'object') {
    var res = {};

    if (def$$1.css !== false) {
      extend(res, autoCssTransition(def$$1.name || 'v'));
    }

    extend(res, def$$1);
    return res;
  } else if (typeof def$$1 === 'string') {
    return autoCssTransition(def$$1);
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: name + "-enter",
    enterToClass: name + "-enter-to",
    enterActiveClass: name + "-enter-active",
    leaveClass: name + "-leave",
    leaveToClass: name + "-leave-to",
    leaveActiveClass: name + "-leave-active"
  };
});
var TRANSITION = 'transition';
var ANIMATION = 'animation'; // Transition property/event sniffing

var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';


var raf = /* istanbul ignore next */
function (fn) {
  return fn();
};

function nextFrame(fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass(el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);

  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass(el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }

  removeClass(el, cls);
}

function whenTransitionEnds(el, expectedType, cb) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;

  if (!type) {
    return cb();
  }

  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;

  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };

  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };

  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo(el, expectedType) {
  var styles = window.getComputedStyle(el); // JSDOM may return undefined for transition properties

  var transitionDelays = (styles[transitionProp + 'Delay'] || '').split(', ');
  var transitionDurations = (styles[transitionProp + 'Duration'] || '').split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = (styles[animationProp + 'Delay'] || '').split(', ');
  var animationDurations = (styles[animationProp + 'Duration'] || '').split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);
  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */

  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0 ? transitionTimeout > animationTimeout ? TRANSITION : ANIMATION : null;
    propCount = type ? type === TRANSITION ? transitionDurations.length : animationDurations.length : 0;
  }

  var hasTransform = type === TRANSITION && transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  };
}

function getTimeout(delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i]);
  }));
} // Old versions of Chromium (below 61.0.3163.100) formats floating pointer numbers
// in a locale-dependent way, using a comma instead of a dot.
// If comma is not replaced with a dot, the input will be rounded down (i.e. acting
// as a floor function) causing unexpected behaviors


function toMs(s) {
  return Number(s.slice(0, -1).replace(',', '.')) * 1000;
}
/*  */


function enter(vnode, toggleDisplay) {
  var el = vnode.elm; // call leave callback now

  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;

    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);

  if (isUndef(data)) {
    return;
  }
  /* istanbul ignore if */


  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return;
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration; // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.

  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;

  while (transitionNode && transitionNode.parent) {
    context = transitionNode.context;
    transitionNode = transitionNode.parent;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return;
  }

  var startClass = isAppear && appearClass ? appearClass : enterClass;
  var activeClass = isAppear && appearActiveClass ? appearActiveClass : enterActiveClass;
  var toClass = isAppear && appearToClass ? appearToClass : enterToClass;
  var beforeEnterHook = isAppear ? beforeAppear || beforeEnter : beforeEnter;
  var enterHook = isAppear ? typeof appear === 'function' ? appear : enter : enter;
  var afterEnterHook = isAppear ? afterAppear || afterEnter : afterEnter;
  var enterCancelledHook = isAppear ? appearCancelled || enterCancelled : enterCancelled;
  var explicitEnterDuration = toNumber(isObject(duration) ? duration.enter : duration);

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);
  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }

    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }

      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }

    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];

      if (pendingNode && pendingNode.tag === vnode.tag && pendingNode.elm._leaveCb) {
        pendingNode.elm._leaveCb();
      }

      enterHook && enterHook(el, cb);
    });
  } // start enter transition


  beforeEnterHook && beforeEnterHook(el);

  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);

      if (!cb.cancelled) {
        addTransitionClass(el, toClass);

        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave(vnode, rm) {
  var el = vnode.elm; // call enter callback now

  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;

    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);

  if (isUndef(data) || el.nodeType !== 1) {
    return rm();
  }
  /* istanbul ignore if */


  if (isDef(el._leaveCb)) {
    return;
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;
  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);
  var explicitLeaveDuration = toNumber(isObject(duration) ? duration.leave : duration);

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }

    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }

    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }

      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }

    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave() {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return;
    } // record leaving element


    if (!vnode.data.show && el.parentNode) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[vnode.key] = vnode;
    }

    beforeLeave && beforeLeave(el);

    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);

        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);

          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }

    leave && leave(el, cb);

    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
} // only used in dev mode

function isValidDuration(val) {
  return typeof val === 'number' && !isNaN(val);
}
/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */


function getHookArgumentsLength(fn) {
  if (isUndef(fn)) {
    return false;
  }

  var invokerFns = fn.fns;

  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(Array.isArray(invokerFns) ? invokerFns[0] : invokerFns);
  } else {
    return (fn._length || fn.length) > 1;
  }
}

var transition = {};
var platformModules = [attrs, klass, events, domProps, style, transition];
/*  */
// the directive module should be applied last, after all
// built-in modules have been applied.

var modules = platformModules.concat(baseModules);
createPatchFunction({
  nodeOps: nodeOps,
  modules: modules
});

var directive = {
  inserted: function inserted(el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }

      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;

      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd); // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.

        el.addEventListener('change', onCompositionEnd);
      }
    }
  },
  componentUpdated: function componentUpdated(el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context); // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.

      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);

      if (curOptions.some(function (o, i) {
        return !looseEqual(o, prevOptions[i]);
      })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple ? binding.value.some(function (v) {
          return hasNoMatchingOption(v, curOptions);
        }) : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);

        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected(el, binding, vm) {
  actuallySetSelected(el, binding);
}

function actuallySetSelected(el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;

  if (isMultiple && !Array.isArray(value)) {
    return;
  }

  var selected, option;

  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];

    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;

      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }

        return;
      }
    }
  }

  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption(value, options) {
  return options.every(function (o) {
    return !looseEqual(o, value);
  });
}

function getValue(option) {
  return '_value' in option ? option._value : option.value;
}

function onCompositionStart(e) {
  e.target.composing = true;
}

function onCompositionEnd(e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) {
    return;
  }

  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger(el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}
/*  */
// recursively search for possible transition defined inside the component root


function locateNode(vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition) ? locateNode(vnode.componentInstance._vnode) : vnode;
}

var show = {
  bind: function bind(el, ref, vnode) {
    var value = ref.value;
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay = el.style.display === 'none' ? '' : el.style.display;

    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },
  update: function update(el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;
    /* istanbul ignore if */

    if (!value === !oldValue) {
      return;
    }

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;

    if (transition$$1) {
      vnode.data.show = true;

      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },
  unbind: function unbind(el, binding, vnode, oldVnode, isDestroy) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
};
var platformDirectives = {
  model: directive,
  show: show
};
/*  */

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
}; // in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered

function getRealChild(vnode) {
  var compOptions = vnode && vnode.componentOptions;

  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children));
  } else {
    return vnode;
  }
}

function extractTransitionData(comp) {
  var data = {};
  var options = comp.$options; // props

  for (var key in options.propsData) {
    data[key] = comp[key];
  } // events.
  // extract listeners and pass them directly to the transition methods


  var listeners = options._parentListeners;

  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }

  return data;
}

function placeholder(h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    });
  }
}

function hasParentTransition(vnode) {
  while (vnode = vnode.parent) {
    if (vnode.data.transition) {
      return true;
    }
  }
}

function isSameChild(child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag;
}

var isNotTextNode = function (c) {
  return c.tag || isAsyncPlaceholder(c);
};

var isVShowDirective = function (d) {
  return d.name === 'show';
};

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,
  render: function render(h) {
    var this$1$1 = this;
    var children = this.$slots.default;

    if (!children) {
      return;
    } // filter out text nodes (possible whitespaces)


    children = children.filter(isNotTextNode);
    /* istanbul ignore if */

    if (!children.length) {
      return;
    } // warn multiple elements

    var mode = this.mode; // warn invalid mode

    var rawChild = children[0]; // if this is a component root node and the component's
    // parent container node also has transition, skip.

    if (hasParentTransition(this.$vnode)) {
      return rawChild;
    } // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive


    var child = getRealChild(rawChild);
    /* istanbul ignore if */

    if (!child) {
      return rawChild;
    }

    if (this._leaving) {
      return placeholder(h, rawChild);
    } // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.


    var id = "__transition-" + this._uid + "-";
    child.key = child.key == null ? child.isComment ? id + 'comment' : id + child.tag : isPrimitive(child.key) ? String(child.key).indexOf(id) === 0 ? child.key : id + child.key : child.key;
    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild); // mark v-show
    // so that the transition module can hand over the control to the directive

    if (child.data.directives && child.data.directives.some(isVShowDirective)) {
      child.data.show = true;
    }

    if (oldChild && oldChild.data && !isSameChild(child, oldChild) && !isAsyncPlaceholder(oldChild) && // #6687 component root is a comment node
    !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data); // handle transition mode

      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1$1._leaving = false;
          this$1$1.$forceUpdate();
        });
        return placeholder(h, rawChild);
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild;
        }

        var delayedLeave;

        var performLeave = function () {
          delayedLeave();
        };

        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) {
          delayedLeave = leave;
        });
      }
    }

    return rawChild;
  }
};
/*  */

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);
delete props.mode;
var TransitionGroup = {
  props: props,
  beforeMount: function beforeMount() {
    var this$1$1 = this;
    var update = this._update;

    this._update = function (vnode, hydrating) {
      var restoreActiveInstance = setActiveInstance(this$1$1); // force removing pass

      this$1$1.__patch__(this$1$1._vnode, this$1$1.kept, false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
      );

      this$1$1._vnode = this$1$1.kept;
      restoreActiveInstance();
      update.call(this$1$1, vnode, hydrating);
    };
  },
  render: function render(h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];

      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c;
          (c.data || (c.data = {})).transition = transitionData;
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];

      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();

        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }

      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children);
  },
  updated: function updated() {
    var children = this.prevChildren;
    var moveClass = this.moveClass || (this.name || 'v') + '-move';

    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return;
    } // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.


    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation); // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line

    this._reflow = document.body.offsetHeight;
    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb(e) {
          if (e && e.target !== el) {
            return;
          }

          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },
  methods: {
    hasMove: function hasMove(el, moveClass) {
      /* istanbul ignore if */
      {
        return false;
      }
    }
  }
};

function callPendingCbs(c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */


  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition(c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation(c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;

  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
};
/*  */
// install platform specific utils

Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement; // install platform runtime directives & components

extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents); // install platform patch function

Vue.prototype.__patch__ = noop; // public mount method

Vue.prototype.$mount = function (el, hydrating) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating);
}; // devtools global hook
/*  */


/* harmony default export */ var vue_runtime_esm = (Vue);
// EXTERNAL MODULE: ./node_modules/@vue/composition-api/dist/vue-composition-api.mjs
var vue_composition_api = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/@nuxt/bridge/dist/runtime/vue2-bridge.mjs


const isFunction = fn => fn instanceof Function;
 // mock for vue-demi

const Vue2 = vue_runtime_esm;
const isVue2 = true;
const isVue3 = false;
const install = () => {};
const version = vue_runtime_esm.version;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EffectScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return computed; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return createApp; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return createRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return customRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Plugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return defineAsyncComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return defineComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return del; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return effectScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getCurrentInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getCurrentScope; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return createElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return inject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return isRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return isReactive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return isReadonly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return isRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return markRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return nextTick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return onActivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return onBeforeMount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "w", function() { return onBeforeUnmount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "x", function() { return onBeforeUpdate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "y", function() { return onDeactivated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "z", function() { return onErrorCaptured; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "A", function() { return onMounted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "B", function() { return onScopeDispose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "C", function() { return onServerPrefetch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D", function() { return onUnmounted; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "E", function() { return onUpdated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "F", function() { return provide; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "G", function() { return proxyRefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "H", function() { return reactive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I", function() { return readonly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "J", function() { return ref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "K", function() { return set$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "L", function() { return shallowReactive; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M", function() { return shallowReadonly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "N", function() { return shallowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "O", function() { return toRaw; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "P", function() { return toRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Q", function() { return toRefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "R", function() { return triggerRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "S", function() { return unref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "T", function() { return useAttrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "U", function() { return useCSSModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "V", function() { return useCssModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "W", function() { return useSlots; });
/* unused harmony export version */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "X", function() { return warn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Y", function() { return watch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Z", function() { return watchEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ab", function() { return watchPostEffect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bb", function() { return watchSyncEffect; });
/* harmony import */ __webpack_require__(41);
/* harmony import */ __webpack_require__(12);
/* harmony import */ __webpack_require__(13);
/* harmony import */ __webpack_require__(14);
/* harmony import */ __webpack_require__(15);
/* harmony import */ __webpack_require__(16);
/* harmony import */ __webpack_require__(17);
/* harmony import */ __webpack_require__(18);
/* harmony import */ __webpack_require__(19);
/* harmony import */ __webpack_require__(20);
/* harmony import */ __webpack_require__(21);
/* harmony import */ __webpack_require__(22);
/* harmony import */ __webpack_require__(23);
/* harmony import */ __webpack_require__(24);
/* harmony import */ __webpack_require__(25);
/* harmony import */ __webpack_require__(26);
/* harmony import */ __webpack_require__(27);
/* harmony import */ __webpack_require__(42);
/* harmony import */ __webpack_require__(43);
/* harmony import */ __webpack_require__(44);
/* harmony import */ __webpack_require__(45);
/* harmony import */ __webpack_require__(46);
/* harmony import */ __webpack_require__(47);
/* harmony import */ __webpack_require__(48);
/* harmony import */ __webpack_require__(49);
/* harmony import */ __webpack_require__(50);
/* harmony import */ __webpack_require__(51);
/* harmony import */ __webpack_require__(52);
/* harmony import */ __webpack_require__(53);
/* harmony import */ __webpack_require__(54);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(0);
































var toString = function (x) {
  return Object.prototype.toString.call(x);
};

function isNative(Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString());
}

var hasSymbol = typeof Symbol !== 'undefined' && isNative(Symbol) && typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var noopFn = function (_) {
  return _;
};

function proxy(target, key, _a) {
  var get = _a.get,
      set = _a.set;
  Object.defineProperty(target, key, {
    enumerable: true,
    configurable: true,
    get: get || noopFn,
    set: set || noopFn
  });
}

function def(obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

function hasOwn(obj, key) {
  return Object.hasOwnProperty.call(obj, key);
}

function assert(condition, msg) {
  if (!condition) {
    throw new Error("[vue-composition-api] " + msg);
  }
}

function isArray(x) {
  return Array.isArray(x);
}

var objectToString = Object.prototype.toString;

var toTypeString = function (value) {
  return objectToString.call(value);
};

var isMap = function (val) {
  return toTypeString(val) === '[object Map]';
};

var isSet = function (val) {
  return toTypeString(val) === '[object Set]';
};

var MAX_VALID_ARRAY_LENGTH = 4294967295; // Math.pow(2, 32) - 1

function isValidArrayIndex(val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val) && n <= MAX_VALID_ARRAY_LENGTH;
}

function isObject(val) {
  return val !== null && typeof val === 'object';
}

function isPlainObject(x) {
  return toString(x) === '[object Object]';
}

function isFunction(x) {
  return typeof x === 'function';
}

function warn$1(msg, vm) {
  vue__WEBPACK_IMPORTED_MODULE_30__["default"].util.warn(msg, vm);
}

function logError(err, vm, info) {

  {
    throw err;
  }
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

/* global Reflect, Promise */


var extendStatics = function (d, b) {
  extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
  };

  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);

  function __() {
    this.constructor = d;
  }

  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function () {
  __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator,
      m = s && o[s],
      i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
    next: function () {
      if (o && i >= o.length) o = void 0;
      return {
        value: o && o[i++],
        done: !o
      };
    }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o),
      r,
      ar = [],
      e;

  try {
    while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  } catch (error) {
    e = {
      error: error
    };
  } finally {
    try {
      if (r && !r.done && (m = i["return"])) m.call(i);
    } finally {
      if (e) throw e.error;
    }
  }

  return ar;
}

function __spreadArray(to, from) {
  for (var i = 0, il = from.length, j = to.length; i < il; i++, j++) to[j] = from[i];

  return to;
}
/**
 * Displays a warning message (using console.error) with a stack trace if the
 * function is called inside of active component.
 *
 * @param message warning message to be displayed
 */


function warn(message) {
  var _a;

  warn$1(message, (_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy);
}

var activeEffectScope;
var effectScopeStack = [];

var EffectScopeImpl =
/** @class */
function () {
  function EffectScopeImpl(vm) {
    this.active = true;
    this.effects = [];
    this.cleanups = [];
    this.vm = vm;
  }

  EffectScopeImpl.prototype.run = function (fn) {
    if (this.active) {
      try {
        this.on();
        return fn();
      } finally {
        this.off();
      }
    }

    return;
  };

  EffectScopeImpl.prototype.on = function () {
    if (this.active) {
      effectScopeStack.push(this);
      activeEffectScope = this;
    }
  };

  EffectScopeImpl.prototype.off = function () {
    if (this.active) {
      effectScopeStack.pop();
      activeEffectScope = effectScopeStack[effectScopeStack.length - 1];
    }
  };

  EffectScopeImpl.prototype.stop = function () {
    if (this.active) {
      this.vm.$destroy();
      this.effects.forEach(function (e) {
        return e.stop();
      });
      this.cleanups.forEach(function (cleanup) {
        return cleanup();
      });
      this.active = false;
    }
  };

  return EffectScopeImpl;
}();

var EffectScope =
/** @class */
function (_super) {
  __extends(EffectScope, _super);

  function EffectScope(detached) {
    if (detached === void 0) {
      detached = false;
    }

    var _this = this;

    var vm = undefined;
    withCurrentInstanceTrackingDisabled(function () {
      vm = defineComponentInstance(getVueConstructor());
    });
    _this = _super.call(this, vm) || this;

    if (!detached) {
      recordEffectScope(_this);
    }

    return _this;
  }

  return EffectScope;
}(EffectScopeImpl);

function recordEffectScope(effect, scope) {
  var _a;

  scope = scope || activeEffectScope;

  if (scope && scope.active) {
    scope.effects.push(effect);
    return;
  } // destory on parent component unmounted


  var vm = (_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy;
  vm && vm.$on('hook:destroyed', function () {
    return effect.stop();
  });
}

function effectScope(detached) {
  return new EffectScope(detached);
}

function getCurrentScope() {
  return activeEffectScope;
}

function onScopeDispose(fn) {
  if (activeEffectScope) {
    activeEffectScope.cleanups.push(fn);
  }
}
/**
 * @internal
 **/


function getCurrentScopeVM() {
  var _a, _b;

  return ((_a = getCurrentScope()) === null || _a === void 0 ? void 0 : _a.vm) || ((_b = getCurrentInstance()) === null || _b === void 0 ? void 0 : _b.proxy);
}
/**
 * @internal
 **/


function bindCurrentScopeToVM(vm) {
  if (!vm.scope) {
    var scope_1 = new EffectScopeImpl(vm.proxy);
    vm.scope = scope_1;
    vm.proxy.$on('hook:destroyed', function () {
      return scope_1.stop();
    });
  }

  return vm.scope;
}

var vueDependency = undefined;

try {
  var requiredVue = __webpack_require__(0);

  if (requiredVue && isVue(requiredVue)) {
    vueDependency = requiredVue;
  } else if (requiredVue && 'default' in requiredVue && isVue(requiredVue.default)) {
    vueDependency = requiredVue.default;
  }
} catch (_a) {// not available
}

var vueConstructor = null;
var currentInstance = null;
var currentInstanceTracking = true;
var PluginInstalledFlag = '__composition_api_installed__';

function isVue(obj) {
  return obj && isFunction(obj) && obj.name === 'Vue';
}

function isVueRegistered(Vue) {
  // resolve issue: https://github.com/vuejs/composition-api/issues/876#issue-1087619365
  return vueConstructor && hasOwn(Vue, PluginInstalledFlag);
}

function getVueConstructor() {

  return vueConstructor;
} // returns registered vue or `vue` dependency


function getRegisteredVueOrDefault() {
  var constructor = vueConstructor || vueDependency;

  return constructor;
}

function setVueConstructor(Vue) {

  vueConstructor = Vue;
  Object.defineProperty(Vue, PluginInstalledFlag, {
    configurable: true,
    writable: true,
    value: true
  });
}
/**
 * For `effectScope` to create instance without populate the current instance
 * @internal
 **/


function withCurrentInstanceTrackingDisabled(fn) {
  var prev = currentInstanceTracking;
  currentInstanceTracking = false;

  try {
    fn();
  } finally {
    currentInstanceTracking = prev;
  }
}

function setCurrentInstance(instance) {
  if (!currentInstanceTracking) return;
  var prev = currentInstance;
  prev === null || prev === void 0 ? void 0 : prev.scope.off();
  currentInstance = instance;
  currentInstance === null || currentInstance === void 0 ? void 0 : currentInstance.scope.on();
}

function getCurrentInstance() {
  return currentInstance;
}

var instanceMapCache = new WeakMap();

function toVue3ComponentInstance(vm) {
  if (instanceMapCache.has(vm)) {
    return instanceMapCache.get(vm);
  }

  var instance = {
    proxy: vm,
    update: vm.$forceUpdate,
    type: vm.$options,
    uid: vm._uid,
    // $emit is defined on prototype and it expected to be bound
    emit: vm.$emit.bind(vm),
    parent: null,
    root: null // to be immediately set

  };
  bindCurrentScopeToVM(instance); // map vm.$props =

  var instanceProps = ['data', 'props', 'attrs', 'refs', 'vnode', 'slots'];
  instanceProps.forEach(function (prop) {
    proxy(instance, prop, {
      get: function () {
        return vm["$" + prop];
      }
    });
  });
  proxy(instance, 'isMounted', {
    get: function () {
      // @ts-expect-error private api
      return vm._isMounted;
    }
  });
  proxy(instance, 'isUnmounted', {
    get: function () {
      // @ts-expect-error private api
      return vm._isDestroyed;
    }
  });
  proxy(instance, 'isDeactivated', {
    get: function () {
      // @ts-expect-error private api
      return vm._inactive;
    }
  });
  proxy(instance, 'emitted', {
    get: function () {
      // @ts-expect-error private api
      return vm._events;
    }
  });
  instanceMapCache.set(vm, instance);

  if (vm.$parent) {
    instance.parent = toVue3ComponentInstance(vm.$parent);
  }

  if (vm.$root) {
    instance.root = toVue3ComponentInstance(vm.$root);
  }

  return instance;
}

function getCurrentInstanceForFn(hook, target) {
  target = target || getCurrentInstance();

  return target;
}

function defineComponentInstance(Ctor, options) {
  if (options === void 0) {
    options = {};
  }

  var silent = Ctor.config.silent;
  Ctor.config.silent = true;
  var vm = new Ctor(options);
  Ctor.config.silent = silent;
  return vm;
}

function isComponentInstance(obj) {
  var Vue = getVueConstructor();
  return Vue && obj instanceof Vue;
}

function createSlotProxy(vm, slotName) {
  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    if (!vm.$scopedSlots[slotName]) {
      return;
    }

    return vm.$scopedSlots[slotName].apply(vm, args);
  };
}

function resolveSlots(slots, normalSlots) {
  var res;

  if (!slots) {
    res = {};
  } else if (slots._normalized) {
    // fast path 1: child component re-render only, parent did not change
    return slots._normalized;
  } else {
    res = {};

    for (var key in slots) {
      if (slots[key] && key[0] !== '$') {
        res[key] = true;
      }
    }
  } // expose normal slots on scopedSlots


  for (var key in normalSlots) {
    if (!(key in res)) {
      res[key] = true;
    }
  }

  return res;
}

var vueInternalClasses;

var getVueInternalClasses = function () {
  if (!vueInternalClasses) {
    var vm = defineComponentInstance(getVueConstructor(), {
      computed: {
        value: function () {
          return 0;
        }
      }
    }); // to get Watcher class

    var Watcher = vm._computedWatchers.value.constructor; // to get Dep class

    var Dep = vm._data.__ob__.dep.constructor;
    vueInternalClasses = {
      Watcher: Watcher,
      Dep: Dep
    };
    vm.$destroy();
  }

  return vueInternalClasses;
};

function createSymbol(name) {
  return hasSymbol ? Symbol.for(name) : name;
}

var WatcherPreFlushQueueKey = createSymbol('composition-api.preFlushQueue');
var WatcherPostFlushQueueKey = createSymbol('composition-api.postFlushQueue'); // must be a string, symbol key is ignored in reactive

var RefKey = 'composition-api.refKey';
var accessModifiedSet = new WeakMap();
var rawSet = new WeakMap();
var readonlySet = new WeakMap();
/**
 * Set a property on an object. Adds the new property, triggers change
 * notification and intercept it's subsequent access if the property doesn't
 * already exist.
 */

function set$1(target, key, val) {
  var Vue = getVueConstructor(); // @ts-expect-error https://github.com/vuejs/vue/pull/12132

  var _a = Vue.util;
      _a.warn;
      var defineReactive = _a.defineReactive;

  var ob = target.__ob__;

  function ssrMockReactivity() {
    // in SSR, there is no __ob__. Mock for reactivity check
    if (ob && isObject(val) && !hasOwn(val, '__ob__')) {
      mockReactivityDeep(val);
    }
  }

  if (isArray(target)) {
    if (isValidArrayIndex(key)) {
      target.length = Math.max(target.length, key);
      target.splice(key, 1, val);
      ssrMockReactivity();
      return val;
    } else if (key === 'length' && val !== target.length) {
      target.length = val;
      ob === null || ob === void 0 ? void 0 : ob.dep.notify();
      return val;
    }
  }

  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    ssrMockReactivity();
    return val;
  }

  if (target._isVue || ob && ob.vmCount) {
    return val;
  }

  if (!ob) {
    target[key] = val;
    return val;
  }

  defineReactive(ob.value, key, val); // IMPORTANT: define access control before trigger watcher

  defineAccessControl(target, key, val);
  ssrMockReactivity();
  ob.dep.notify();
  return val;
}

var RefImpl =
/** @class */
function () {
  function RefImpl(_a) {
    var get = _a.get,
        set = _a.set;
    proxy(this, 'value', {
      get: get,
      set: set
    });
  }

  return RefImpl;
}();

function createRef(options, isReadonly, isComputed) {
  if (isReadonly === void 0) {
    isReadonly = false;
  }

  if (isComputed === void 0) {
    isComputed = false;
  }

  var r = new RefImpl(options); // add effect to differentiate refs from computed

  if (isComputed) r.effect = true; // seal the ref, this could prevent ref from being observed
  // It's safe to seal the ref, since we really shouldn't extend it.
  // related issues: #79

  var sealed = Object.seal(r);
  if (isReadonly) readonlySet.set(sealed, true);
  return sealed;
}

function ref(raw) {
  var _a;

  if (isRef(raw)) {
    return raw;
  }

  var value = reactive((_a = {}, _a[RefKey] = raw, _a));
  return createRef({
    get: function () {
      return value[RefKey];
    },
    set: function (v) {
      return value[RefKey] = v;
    }
  });
}

function isRef(value) {
  return value instanceof RefImpl;
}

function unref(ref) {
  return isRef(ref) ? ref.value : ref;
}

function toRefs(obj) {

  if (!isPlainObject(obj)) return obj;
  var ret = {};

  for (var key in obj) {
    ret[key] = toRef(obj, key);
  }

  return ret;
}

function customRef(factory) {
  var version = ref(0);
  return createRef(factory(function () {
    return void version.value;
  }, function () {
    ++version.value;
  }));
}

function toRef(object, key) {
  if (!(key in object)) set$1(object, key, undefined);
  var v = object[key];
  if (isRef(v)) return v;
  return createRef({
    get: function () {
      return object[key];
    },
    set: function (v) {
      return object[key] = v;
    }
  });
}

function shallowRef(raw) {
  var _a;

  if (isRef(raw)) {
    return raw;
  }

  var value = shallowReactive((_a = {}, _a[RefKey] = raw, _a));
  return createRef({
    get: function () {
      return value[RefKey];
    },
    set: function (v) {
      return value[RefKey] = v;
    }
  });
}

function triggerRef(value) {
  if (!isRef(value)) return;
  value.value = value.value;
}

function proxyRefs(objectWithRefs) {
  var _a, e_1, _b;

  if (isReactive(objectWithRefs)) {
    return objectWithRefs;
  }

  var value = reactive((_a = {}, _a[RefKey] = objectWithRefs, _a));
  def(value, RefKey, value[RefKey], false);

  var _loop_1 = function (key) {
    proxy(value, key, {
      get: function () {
        if (isRef(value[RefKey][key])) {
          return value[RefKey][key].value;
        }

        return value[RefKey][key];
      },
      set: function (v) {
        if (isRef(value[RefKey][key])) {
          return value[RefKey][key].value = unref(v);
        }

        value[RefKey][key] = unref(v);
      }
    });
  };

  try {
    for (var _c = __values(Object.keys(objectWithRefs)), _d = _c.next(); !_d.done; _d = _c.next()) {
      var key = _d.value;

      _loop_1(key);
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  return value;
}

function isRaw(obj) {
  var _a;

  return Boolean(obj && hasOwn(obj, '__ob__') && typeof obj.__ob__ === 'object' && ((_a = obj.__ob__) === null || _a === void 0 ? void 0 : _a.__raw__));
}

function isReactive(obj) {
  var _a;

  return Boolean(obj && hasOwn(obj, '__ob__') && typeof obj.__ob__ === 'object' && !((_a = obj.__ob__) === null || _a === void 0 ? void 0 : _a.__raw__));
}
/**
 * Proxing property access of target.
 * We can do unwrapping and other things here.
 */


function setupAccessControl(target) {
  if (!isPlainObject(target) || isRaw(target) || isArray(target) || isRef(target) || isComponentInstance(target) || accessModifiedSet.has(target)) return;
  accessModifiedSet.set(target, true);
  var keys = Object.keys(target);

  for (var i = 0; i < keys.length; i++) {
    defineAccessControl(target, keys[i]);
  }
}
/**
 * Auto unwrapping when access property
 */


function defineAccessControl(target, key, val) {
  if (key === '__ob__') return;
  if (isRaw(target[key])) return;
  var getter;
  var setter;
  var property = Object.getOwnPropertyDescriptor(target, key);

  if (property) {
    if (property.configurable === false) {
      return;
    }

    getter = property.get;
    setter = property.set;

    if ((!getter || setter
    /* not only have getter */
    ) && arguments.length === 2) {
      val = target[key];
    }
  }

  setupAccessControl(val);
  proxy(target, key, {
    get: function getterHandler() {
      var value = getter ? getter.call(target) : val; // if the key is equal to RefKey, skip the unwrap logic

      if (key !== RefKey && isRef(value)) {
        return value.value;
      } else {
        return value;
      }
    },
    set: function setterHandler(newVal) {
      if (getter && !setter) return; // If the key is equal to RefKey, skip the unwrap logic
      // If and only if "value" is ref and "newVal" is not a ref,
      // the assignment should be proxied to "value" ref.

      if (key !== RefKey && isRef(val) && !isRef(newVal)) {
        val.value = newVal;
      } else if (setter) {
        setter.call(target, newVal);
        val = newVal;
      } else {
        val = newVal;
      }

      setupAccessControl(newVal);
    }
  });
}

function observe(obj) {
  var Vue = getRegisteredVueOrDefault();
  var observed;

  if (Vue.observable) {
    observed = Vue.observable(obj);
  } else {
    var vm = defineComponentInstance(Vue, {
      data: {
        $$state: obj
      }
    });
    observed = vm._data.$$state;
  } // in SSR, there is no __ob__. Mock for reactivity check


  if (!hasOwn(observed, '__ob__')) {
    mockReactivityDeep(observed);
  }

  return observed;
}
/**
 * Mock __ob__ for object recursively
 */


function mockReactivityDeep(obj, seen) {
  var e_1, _a;

  if (seen === void 0) {
    seen = new Set();
  }

  if (seen.has(obj) || hasOwn(obj, '__ob__') || !Object.isExtensible(obj)) return;
  def(obj, '__ob__', mockObserver(obj));
  seen.add(obj);

  try {
    for (var _b = __values(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var key = _c.value;
      var value = obj[key];

      if (!(isPlainObject(value) || isArray(value)) || isRaw(value) || !Object.isExtensible(value)) {
        continue;
      }

      mockReactivityDeep(value, seen);
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
}

function mockObserver(value) {
  if (value === void 0) {
    value = {};
  }

  return {
    value: value,
    dep: {
      notify: noopFn,
      depend: noopFn,
      addSub: noopFn,
      removeSub: noopFn
    }
  };
}

function createObserver() {
  return observe({}).__ob__;
}

function shallowReactive(obj) {
  var e_2, _a;

  if (!isObject(obj)) {

    return obj;
  }

  if (!(isPlainObject(obj) || isArray(obj)) || isRaw(obj) || !Object.isExtensible(obj)) {
    return obj;
  }

  var observed = observe(isArray(obj) ? [] : {});
  setupAccessControl(observed);
  var ob = observed.__ob__;

  var _loop_1 = function (key) {
    var val = obj[key];
    var getter;
    var setter;
    var property = Object.getOwnPropertyDescriptor(obj, key);

    if (property) {
      if (property.configurable === false) {
        return "continue";
      }

      getter = property.get;
      setter = property.set;
    }

    proxy(observed, key, {
      get: function getterHandler() {
        var _a;

        var value = getter ? getter.call(obj) : val;
        (_a = ob.dep) === null || _a === void 0 ? void 0 : _a.depend();
        return value;
      },
      set: function setterHandler(newVal) {
        var _a;

        if (getter && !setter) return;

        if (setter) {
          setter.call(obj, newVal);
        } else {
          val = newVal;
        }

        (_a = ob.dep) === null || _a === void 0 ? void 0 : _a.notify();
      }
    });
  };

  try {
    for (var _b = __values(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var key = _c.value;

      _loop_1(key);
    }
  } catch (e_2_1) {
    e_2 = {
      error: e_2_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    } finally {
      if (e_2) throw e_2.error;
    }
  }

  return observed;
}
/**
 * Make obj reactivity
 */


function reactive(obj) {
  if (!isObject(obj)) {

    return obj;
  }

  if (!(isPlainObject(obj) || isArray(obj)) || isRaw(obj) || !Object.isExtensible(obj)) {
    return obj;
  }

  var observed = observe(obj);
  setupAccessControl(observed);
  return observed;
}
/**
 * Make sure obj can't be a reactive
 */


function markRaw(obj) {
  if (!(isPlainObject(obj) || isArray(obj)) || !Object.isExtensible(obj)) {
    return obj;
  } // set the vue observable flag at obj


  var ob = createObserver();
  ob.__raw__ = true;
  def(obj, '__ob__', ob); // mark as Raw

  rawSet.set(obj, true);
  return obj;
}

function toRaw(observed) {
  var _a, _b;

  if (isRaw(observed) || !Object.isExtensible(observed)) {
    return observed;
  }

  return ((_b = (_a = observed) === null || _a === void 0 ? void 0 : _a.__ob__) === null || _b === void 0 ? void 0 : _b.value) || observed;
}

function isReadonly(obj) {
  return readonlySet.has(obj);
}
/**
 * **In @vue/composition-api, `reactive` only provides type-level readonly check**
 *
 * Creates a readonly copy of the original object. Note the returned copy is not
 * made reactive, but `readonly` can be called on an already reactive object.
 */


function readonly(target) {
  {
    readonlySet.set(target, true);
  }

  return target;
}

function shallowReadonly(obj) {
  var e_1, _a;

  if (!isObject(obj)) {

    return obj;
  }

  if (!(isPlainObject(obj) || isArray(obj)) || !Object.isExtensible(obj) && !isRef(obj)) {
    return obj;
  }

  var readonlyObj = isRef(obj) ? new RefImpl({}) : isReactive(obj) ? observe({}) : {};
  var source = reactive({});
  var ob = source.__ob__;

  var _loop_1 = function (key) {
    var val = obj[key];
    var getter;
    var property = Object.getOwnPropertyDescriptor(obj, key);

    if (property) {
      if (property.configurable === false && !isRef(obj)) {
        return "continue";
      }

      getter = property.get;
    }

    proxy(readonlyObj, key, {
      get: function getterHandler() {
        var value = getter ? getter.call(obj) : val;
        ob.dep.depend();
        return value;
      },
      set: function (v) {
      }
    });
  };

  try {
    for (var _b = __values(Object.keys(obj)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var key = _c.value;

      _loop_1(key);
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    } finally {
      if (e_1) throw e_1.error;
    }
  }

  readonlySet.set(readonlyObj, true);
  return readonlyObj;
}
/**
 * Delete a property and trigger change if necessary.
 */


function del(target, key) {
  var Vue = getVueConstructor();
  Vue.util.warn;

  if (isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return;
  }

  var ob = target.__ob__;

  if (target._isVue || ob && ob.vmCount) {
    return;
  }

  if (!hasOwn(target, key)) {
    return;
  }

  delete target[key];

  if (!ob) {
    return;
  }

  ob.dep.notify();
}

var genName = function (name) {
  return "on" + (name[0].toUpperCase() + name.slice(1));
};

function createLifeCycle(lifeCyclehook) {
  return function (callback, target) {
    var instance = getCurrentInstanceForFn(genName(lifeCyclehook), target);
    return instance && injectHookOption(getVueConstructor(), instance, lifeCyclehook, callback);
  };
}

function injectHookOption(Vue, instance, hook, val) {
  var options = instance.proxy.$options;
  var mergeFn = Vue.config.optionMergeStrategies[hook];
  var wrappedHook = wrapHookCall(instance, val);
  options[hook] = mergeFn(options[hook], wrappedHook);
  return wrappedHook;
}

function wrapHookCall(instance, fn) {
  return function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    var prev = getCurrentInstance();
    setCurrentInstance(instance);

    try {
      return fn.apply(void 0, __spreadArray([], __read(args), false));
    } finally {
      setCurrentInstance(prev);
    }
  };
}

var onBeforeMount = createLifeCycle('beforeMount');
var onMounted = createLifeCycle('mounted');
var onBeforeUpdate = createLifeCycle('beforeUpdate');
var onUpdated = createLifeCycle('updated');
var onBeforeUnmount = createLifeCycle('beforeDestroy');
var onUnmounted = createLifeCycle('destroyed');
var onErrorCaptured = createLifeCycle('errorCaptured');
var onActivated = createLifeCycle('activated');
var onDeactivated = createLifeCycle('deactivated');
var onServerPrefetch = createLifeCycle('serverPrefetch');
var fallbackVM;

function flushPreQueue() {
  flushQueue(this, WatcherPreFlushQueueKey);
}

function flushPostQueue() {
  flushQueue(this, WatcherPostFlushQueueKey);
}

function hasWatchEnv(vm) {
  return vm[WatcherPreFlushQueueKey] !== undefined;
}

function installWatchEnv(vm) {
  vm[WatcherPreFlushQueueKey] = [];
  vm[WatcherPostFlushQueueKey] = [];
  vm.$on('hook:beforeUpdate', flushPreQueue);
  vm.$on('hook:updated', flushPostQueue);
}

function getWatcherOption(options) {
  return __assign({
    immediate: false,
    deep: false,
    flush: 'pre'
  }, options);
}

function getWatchEffectOption(options) {
  return __assign({
    flush: 'pre'
  }, options);
}

function getWatcherVM() {
  var vm = getCurrentScopeVM();

  if (!vm) {
    if (!fallbackVM) {
      fallbackVM = defineComponentInstance(getVueConstructor());
    }

    vm = fallbackVM;
  } else if (!hasWatchEnv(vm)) {
    installWatchEnv(vm);
  }

  return vm;
}

function flushQueue(vm, key) {
  var queue = vm[key];

  for (var index = 0; index < queue.length; index++) {
    queue[index]();
  }

  queue.length = 0;
}

function queueFlushJob(vm, fn, mode) {
  // flush all when beforeUpdate and updated are not fired
  var fallbackFlush = function () {
    vm.$nextTick(function () {
      if (vm[WatcherPreFlushQueueKey].length) {
        flushQueue(vm, WatcherPreFlushQueueKey);
      }

      if (vm[WatcherPostFlushQueueKey].length) {
        flushQueue(vm, WatcherPostFlushQueueKey);
      }
    });
  };

  switch (mode) {
    case 'pre':
      fallbackFlush();
      vm[WatcherPreFlushQueueKey].push(fn);
      break;

    case 'post':
      fallbackFlush();
      vm[WatcherPostFlushQueueKey].push(fn);
      break;

    default:
      assert(false, "flush must be one of [\"post\", \"pre\", \"sync\"], but got " + mode);
      break;
  }
}

function createVueWatcher(vm, getter, callback, options) {
  var index = vm._watchers.length; // @ts-ignore: use undocumented options

  vm.$watch(getter, callback, {
    immediate: options.immediateInvokeCallback,
    deep: options.deep,
    lazy: options.noRun,
    sync: options.sync,
    before: options.before
  });
  return vm._watchers[index];
} // We have to monkeypatch the teardown function so Vue will run
// runCleanup() when it tears down the watcher on unmounted.


function patchWatcherTeardown(watcher, runCleanup) {
  var _teardown = watcher.teardown;

  watcher.teardown = function () {
    var args = [];

    for (var _i = 0; _i < arguments.length; _i++) {
      args[_i] = arguments[_i];
    }

    _teardown.apply(watcher, args);

    runCleanup();
  };
}

function createWatcher(vm, source, cb, options) {
  var _a;

  var flushMode = options.flush;
  var isSync = flushMode === 'sync';
  var cleanup;

  var registerCleanup = function (fn) {
    cleanup = function () {
      try {
        fn();
      } catch ( // FIXME: remove any
      error) {
        logError(error);
      }
    };
  }; // cleanup before running getter again


  var runCleanup = function () {
    if (cleanup) {
      cleanup();
      cleanup = null;
    }
  };

  var createScheduler = function (fn) {
    if (isSync ||
    /* without a current active instance, ignore pre|post mode */
    vm === fallbackVM) {
      return fn;
    }

    return function () {
      var args = [];

      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }

      return queueFlushJob(vm, function () {
        fn.apply(void 0, __spreadArray([], __read(args)));
      }, flushMode);
    };
  }; // effect watch


  if (cb === null) {
    var running_1 = false;

    var getter_1 = function () {
      // preventing the watch callback being call in the same execution
      if (running_1) {
        return;
      }

      try {
        running_1 = true;
        source(registerCleanup);
      } finally {
        running_1 = false;
      }
    };

    var watcher_1 = createVueWatcher(vm, getter_1, noopFn, {
      deep: options.deep || false,
      sync: isSync,
      before: runCleanup
    });
    patchWatcherTeardown(watcher_1, runCleanup); // enable the watcher update

    watcher_1.lazy = false;
    var originGet = watcher_1.get.bind(watcher_1); // always run watchEffect

    watcher_1.get = createScheduler(originGet);
    return function () {
      watcher_1.teardown();
    };
  }

  var deep = options.deep;
  var isMultiSource = false;
  var getter;

  if (isRef(source)) {
    getter = function () {
      return source.value;
    };
  } else if (isReactive(source)) {
    getter = function () {
      return source;
    };

    deep = true;
  } else if (isArray(source)) {
    isMultiSource = true;

    getter = function () {
      return source.map(function (s) {
        if (isRef(s)) {
          return s.value;
        } else if (isReactive(s)) {
          return traverse(s);
        } else if (isFunction(s)) {
          return s();
        } else {
          return noopFn;
        }
      });
    };
  } else if (isFunction(source)) {
    getter = source;
  } else {
    getter = noopFn;
  }

  if (deep) {
    var baseGetter_1 = getter;

    getter = function () {
      return traverse(baseGetter_1());
    };
  }

  var applyCb = function (n, o) {
    if (!deep && isMultiSource && n.every(function (v, i) {
      return Object.is(v, o[i]);
    })) return; // cleanup before running cb again

    runCleanup();
    return cb(n, o, registerCleanup);
  };

  var callback = createScheduler(applyCb);

  if (options.immediate) {
    var originalCallback_1 = callback; // `shiftCallback` is used to handle the first sync effect run.
    // The subsequent callbacks will redirect to `callback`.

    var shiftCallback_1 = function (n, o) {
      shiftCallback_1 = originalCallback_1; // o is undefined on the first call

      return applyCb(n, isArray(n) ? [] : o);
    };

    callback = function (n, o) {
      return shiftCallback_1(n, o);
    };
  } // @ts-ignore: use undocumented option "sync"


  var stop = vm.$watch(getter, callback, {
    immediate: options.immediate,
    deep: deep,
    sync: isSync
  }); // Once again, we have to hack the watcher for proper teardown

  var watcher = vm._watchers[vm._watchers.length - 1]; // if the return value is reactive and deep:true
  // watch for changes, this might happen when new key is added

  if (isReactive(watcher.value) && ((_a = watcher.value.__ob__) === null || _a === void 0 ? void 0 : _a.dep) && deep) {
    watcher.value.__ob__.dep.addSub({
      update: function () {
        // this will force the source to be revaluated and the callback
        // executed if needed
        watcher.run();
      }
    });
  }

  patchWatcherTeardown(watcher, runCleanup);
  return function () {
    stop();
  };
}

function watchEffect(effect, options) {
  var opts = getWatchEffectOption(options);
  var vm = getWatcherVM();
  return createWatcher(vm, effect, null, opts);
}

function watchPostEffect(effect) {
  return watchEffect(effect, {
    flush: 'post'
  });
}

function watchSyncEffect(effect) {
  return watchEffect(effect, {
    flush: 'sync'
  });
} // implementation


function watch(source, cb, options) {
  var callback = null;

  if (isFunction(cb)) {
    // source watch
    callback = cb;
  } else {

    options = cb;
    callback = null;
  }

  var opts = getWatcherOption(options);
  var vm = getWatcherVM();
  return createWatcher(vm, source, callback, opts);
}

function traverse(value, seen) {
  if (seen === void 0) {
    seen = new Set();
  }

  if (!isObject(value) || seen.has(value)) {
    return value;
  }

  seen.add(value);

  if (isRef(value)) {
    traverse(value.value, seen);
  } else if (isArray(value)) {
    for (var i = 0; i < value.length; i++) {
      traverse(value[i], seen);
    }
  } else if (isSet(value) || isMap(value)) {
    value.forEach(function (v) {
      traverse(v, seen);
    });
  } else if (isPlainObject(value)) {
    for (var key in value) {
      traverse(value[key], seen);
    }
  }

  return value;
} // implement


function computed(getterOrOptions) {
  var vm = getCurrentScopeVM();
  var getter;
  var setter;

  if (isFunction(getterOrOptions)) {
    getter = getterOrOptions;
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }

  var computedSetter;
  var computedGetter;

  if (vm && !vm.$isServer) {
    var _a = getVueInternalClasses(),
        Watcher_1 = _a.Watcher,
        Dep_1 = _a.Dep;

    var watcher_1;

    computedGetter = function () {
      if (!watcher_1) {
        watcher_1 = new Watcher_1(vm, getter, noopFn, {
          lazy: true
        });
      }

      if (watcher_1.dirty) {
        watcher_1.evaluate();
      }

      if (Dep_1.target) {
        watcher_1.depend();
      }

      return watcher_1.value;
    };

    computedSetter = function (v) {

      if (setter) {
        setter(v);
      }
    };
  } else {
    // fallback
    var computedHost_1 = defineComponentInstance(getVueConstructor(), {
      computed: {
        $$state: {
          get: getter,
          set: setter
        }
      }
    });
    vm && vm.$on('hook:destroyed', function () {
      return computedHost_1.$destroy();
    });

    computedGetter = function () {
      return computedHost_1.$$state;
    };

    computedSetter = function (v) {

      computedHost_1.$$state = v;
    };
  }

  return createRef({
    get: computedGetter,
    set: computedSetter
  }, !setter, true);
}

var NOT_FOUND = {};

function resolveInject(provideKey, vm) {
  var source = vm;

  while (source) {
    // @ts-ignore
    if (source._provided && hasOwn(source._provided, provideKey)) {
      //@ts-ignore
      return source._provided[provideKey];
    }

    source = source.$parent;
  }

  return NOT_FOUND;
}

function provide(key, value) {
  var _a;

  var vm = (_a = getCurrentInstanceForFn()) === null || _a === void 0 ? void 0 : _a.proxy;
  if (!vm) return;

  if (!vm._provided) {
    var provideCache_1 = {};
    proxy(vm, '_provided', {
      get: function () {
        return provideCache_1;
      },
      set: function (v) {
        return Object.assign(provideCache_1, v);
      }
    });
  }

  vm._provided[key] = value;
}

function inject(key, defaultValue, treatDefaultAsFactory) {
  var _a;

  if (treatDefaultAsFactory === void 0) {
    treatDefaultAsFactory = false;
  }

  var vm = (_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy;

  if (!vm) {
    return;
  }

  if (!key) {
    return defaultValue;
  }

  var val = resolveInject(key, vm);

  if (val !== NOT_FOUND) {
    return val;
  }

  if (defaultValue === undefined && "production" !== 'production') {
    warn$1("Injection \"" + String(key) + "\" not found", vm);
  }

  return treatDefaultAsFactory && isFunction(defaultValue) ? defaultValue() : defaultValue;
}

var EMPTY_OBJ =  {};

var useCssModule = function (name) {
  var _a;

  if (name === void 0) {
    name = '$style';
  }

  var instance = getCurrentInstance();

  if (!instance) {
    return EMPTY_OBJ;
  }

  var mod = (_a = instance.proxy) === null || _a === void 0 ? void 0 : _a[name];

  if (!mod) {
    return EMPTY_OBJ;
  }

  return mod;
};
/**
 * @deprecated use `useCssModule` instead.
 */


var useCSSModule = useCssModule;

function createApp(rootComponent, rootProps) {
  if (rootProps === void 0) {
    rootProps = undefined;
  }

  var V = getVueConstructor();
  var mountedVM = undefined;
  var app = {
    config: V.config,
    use: V.use.bind(V),
    mixin: V.mixin.bind(V),
    component: V.component.bind(V),
    directive: function (name, dir) {
      if (dir) {
        V.directive(name, dir);
        return app;
      } else {
        return V.directive(name);
      }
    },
    mount: function (el, hydrating) {
      if (!mountedVM) {
        mountedVM = new V(__assign({
          propsData: rootProps
        }, rootComponent));
        mountedVM.$mount(el, hydrating);
        return mountedVM;
      } else {

        return mountedVM;
      }
    },
    unmount: function () {
      if (mountedVM) {
        mountedVM.$destroy();
        mountedVM = undefined;
      }
    }
  };
  return app;
}

var nextTick = function nextTick() {
  var _a;

  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  return (_a = getVueConstructor()) === null || _a === void 0 ? void 0 : _a.nextTick.apply(this, args);
};

var fallbackCreateElement;

var createElement = function createElement() {
  var _a;

  var args = [];

  for (var _i = 0; _i < arguments.length; _i++) {
    args[_i] = arguments[_i];
  }

  var instance = (_a = getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy;

  if (!instance) {

    if (!fallbackCreateElement) {
      fallbackCreateElement = defineComponentInstance(getVueConstructor()).$createElement;
    }

    return fallbackCreateElement.apply(fallbackCreateElement, args);
  }

  return instance.$createElement.apply(instance, args);
};

function useSlots() {
  return getContext().slots;
}

function useAttrs() {
  return getContext().attrs;
}

function getContext() {
  var i = getCurrentInstance();

  return i.setupContext;
}

function set(vm, key, value) {
  var state = vm.__composition_api_state__ = vm.__composition_api_state__ || {};
  state[key] = value;
}

function get(vm, key) {
  return (vm.__composition_api_state__ || {})[key];
}

var vmStateManager = {
  set: set,
  get: get
};

function asVmProperty(vm, propName, propValue) {
  var props = vm.$options.props;

  if (!(propName in vm) && !(props && hasOwn(props, propName))) {
    if (isRef(propValue)) {
      proxy(vm, propName, {
        get: function () {
          return propValue.value;
        },
        set: function (val) {
          propValue.value = val;
        }
      });
    } else {
      proxy(vm, propName, {
        get: function () {
          if (isReactive(propValue)) {
            propValue.__ob__.dep.depend();
          }

          return propValue;
        },
        set: function (val) {
          propValue = val;
        }
      });
    }
  }
}

function updateTemplateRef(vm) {
  var rawBindings = vmStateManager.get(vm, 'rawBindings') || {};
  if (!rawBindings || !Object.keys(rawBindings).length) return;
  var refs = vm.$refs;
  var oldRefKeys = vmStateManager.get(vm, 'refs') || [];

  for (var index = 0; index < oldRefKeys.length; index++) {
    var key = oldRefKeys[index];
    var setupValue = rawBindings[key];

    if (!refs[key] && setupValue && isRef(setupValue)) {
      setupValue.value = null;
    }
  }

  var newKeys = Object.keys(refs);
  var validNewKeys = [];

  for (var index = 0; index < newKeys.length; index++) {
    var key = newKeys[index];
    var setupValue = rawBindings[key];

    if (refs[key] && setupValue && isRef(setupValue)) {
      setupValue.value = refs[key];
      validNewKeys.push(key);
    }
  }

  vmStateManager.set(vm, 'refs', validNewKeys);
}

function updateVmAttrs(vm, ctx) {
  var e_1, _a;

  if (!vm) {
    return;
  }

  var attrBindings = vmStateManager.get(vm, 'attrBindings');

  if (!attrBindings && !ctx) {
    // fix 840
    return;
  }

  if (!attrBindings) {
    var observedData = reactive({});
    attrBindings = {
      ctx: ctx,
      data: observedData
    };
    vmStateManager.set(vm, 'attrBindings', attrBindings);
    proxy(ctx, 'attrs', {
      get: function () {
        return attrBindings === null || attrBindings === void 0 ? void 0 : attrBindings.data;
      },
      set: function () {
      }
    });
  }

  var source = vm.$attrs;

  var _loop_1 = function (attr) {
    if (!hasOwn(attrBindings.data, attr)) {
      proxy(attrBindings.data, attr, {
        get: function () {
          // to ensure it always return the latest value
          return vm.$attrs[attr];
        }
      });
    }
  };

  try {
    for (var _b = __values(Object.keys(source)), _c = _b.next(); !_c.done; _c = _b.next()) {
      var attr = _c.value;

      _loop_1(attr);
    }
  } catch (e_1_1) {
    e_1 = {
      error: e_1_1
    };
  } finally {
    try {
      if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
    } finally {
      if (e_1) throw e_1.error;
    }
  }
}

function resolveScopedSlots(vm, slotsProxy) {
  var parentVNode = vm.$options._parentVnode;
  if (!parentVNode) return;
  var prevSlots = vmStateManager.get(vm, 'slots') || [];
  var curSlots = resolveSlots(parentVNode.data.scopedSlots, vm.$slots); // remove staled slots

  for (var index = 0; index < prevSlots.length; index++) {
    var key = prevSlots[index];

    if (!curSlots[key]) {
      delete slotsProxy[key];
    }
  } // proxy fresh slots


  var slotNames = Object.keys(curSlots);

  for (var index = 0; index < slotNames.length; index++) {
    var key = slotNames[index];

    if (!slotsProxy[key]) {
      slotsProxy[key] = createSlotProxy(vm, key);
    }
  }

  vmStateManager.set(vm, 'slots', slotNames);
}

function activateCurrentInstance(instance, fn, onError) {
  var preVm = getCurrentInstance();
  setCurrentInstance(instance);

  try {
    return fn(instance);
  } catch ( // FIXME: remove any
  err) {
    if (onError) {
      onError(err);
    } else {
      throw err;
    }
  } finally {
    setCurrentInstance(preVm);
  }
}

function mixin(Vue) {
  Vue.mixin({
    beforeCreate: functionApiInit,
    mounted: function () {
      updateTemplateRef(this);
    },
    beforeUpdate: function () {
      updateVmAttrs(this);
    },
    updated: function () {
      var _a;

      updateTemplateRef(this);

      if ((_a = this.$vnode) === null || _a === void 0 ? void 0 : _a.context) {
        updateTemplateRef(this.$vnode.context);
      }
    }
  });
  /**
   * Vuex init hook, injected into each instances init hooks list.
   */

  function functionApiInit() {
    var vm = this;
    var $options = vm.$options;
    var setup = $options.setup,
        render = $options.render;

    if (render) {
      // keep currentInstance accessible for createElement
      $options.render = function () {
        var _this = this;

        var args = [];

        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }

        return activateCurrentInstance(toVue3ComponentInstance(vm), function () {
          return render.apply(_this, args);
        });
      };
    }

    if (!setup) {
      return;
    }

    if (!isFunction(setup)) {

      return;
    }

    var data = $options.data; // wrapper the data option, so we can invoke setup before data get resolved

    $options.data = function wrappedData() {
      initSetup(vm, vm.$props);
      return isFunction(data) ? data.call(vm, vm) : data || {};
    };
  }

  function initSetup(vm, props) {
    if (props === void 0) {
      props = {};
    }

    var setup = vm.$options.setup;
    var ctx = createSetupContext(vm);
    var instance = toVue3ComponentInstance(vm);
    instance.setupContext = ctx; // fake reactive for `toRefs(props)`

    def(props, '__ob__', createObserver()); // resolve scopedSlots and slots to functions

    resolveScopedSlots(vm, ctx.slots);
    var binding;
    activateCurrentInstance(instance, function () {
      // make props to be fake reactive, this is for `toRefs(props)`
      binding = setup(props, ctx);
    });
    if (!binding) return;

    if (isFunction(binding)) {
      // keep typescript happy with the binding type.
      var bindingFunc_1 = binding; // keep currentInstance accessible for createElement

      vm.$options.render = function () {
        resolveScopedSlots(vm, ctx.slots);
        return activateCurrentInstance(instance, function () {
          return bindingFunc_1();
        });
      };

      return;
    } else if (isObject(binding)) {
      if (isReactive(binding)) {
        binding = toRefs(binding);
      }

      vmStateManager.set(vm, 'rawBindings', binding);
      var bindingObj_1 = binding;
      Object.keys(bindingObj_1).forEach(function (name) {
        var bindingValue = bindingObj_1[name];

        if (!isRef(bindingValue)) {
          if (!isReactive(bindingValue)) {
            if (isFunction(bindingValue)) {
              var copy_1 = bindingValue;
              bindingValue = bindingValue.bind(vm);
              Object.keys(copy_1).forEach(function (ele) {
                bindingValue[ele] = copy_1[ele];
              });
            } else if (!isObject(bindingValue)) {
              bindingValue = ref(bindingValue);
            } else if (hasReactiveArrayChild(bindingValue)) {
              // creates a custom reactive properties without make the object explicitly reactive
              // NOTE we should try to avoid this, better implementation needed
              customReactive(bindingValue);
            }
          } else if (isArray(bindingValue)) {
            bindingValue = ref(bindingValue);
          }
        }

        asVmProperty(vm, name, bindingValue);
      });
      return;
    }
  }

  function customReactive(target, seen) {
    if (seen === void 0) {
      seen = new Set();
    }

    if (seen.has(target)) return;
    if (!isPlainObject(target) || isRef(target) || isReactive(target) || isRaw(target)) return;
    var Vue = getVueConstructor(); // @ts-expect-error https://github.com/vuejs/vue/pull/12132

    var defineReactive = Vue.util.defineReactive;
    Object.keys(target).forEach(function (k) {
      var val = target[k];
      defineReactive(target, k, val);

      if (val) {
        seen.add(val);
        customReactive(val, seen);
      }

      return;
    });
  }

  function hasReactiveArrayChild(target, visited) {
    if (visited === void 0) {
      visited = new Map();
    }

    if (visited.has(target)) {
      return visited.get(target);
    }

    visited.set(target, false);

    if (isArray(target) && isReactive(target)) {
      visited.set(target, true);
      return true;
    }

    if (!isPlainObject(target) || isRaw(target) || isRef(target)) {
      return false;
    }

    return Object.keys(target).some(function (x) {
      return hasReactiveArrayChild(target[x], visited);
    });
  }

  function createSetupContext(vm) {
    var ctx = {
      slots: {}
    };
    var propsPlain = ['root', 'parent', 'refs', 'listeners', 'isServer', 'ssrContext'];
    var methodReturnVoid = ['emit'];
    propsPlain.forEach(function (key) {
      var srcKey = "$" + key;
      proxy(ctx, key, {
        get: function () {
          return vm[srcKey];
        },
        set: function () {
        }
      });
    });
    updateVmAttrs(vm, ctx);
    methodReturnVoid.forEach(function (key) {
      var srcKey = "$" + key;
      proxy(ctx, key, {
        get: function () {
          return function () {
            var args = [];

            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }

            var fn = vm[srcKey];
            fn.apply(vm, args);
          };
        }
      });
    });

    return ctx;
  }
}
/**
 * Helper that recursively merges two data objects together.
 */


function mergeData(from, to) {
  if (!from) return to;
  if (!to) return from;
  var key;
  var toVal;
  var fromVal;
  var keys = hasSymbol ? Reflect.ownKeys(from) : Object.keys(from);

  for (var i = 0; i < keys.length; i++) {
    key = keys[i]; // in case the object is already observed...

    if (key === '__ob__') continue;
    toVal = to[key];
    fromVal = from[key];

    if (!hasOwn(to, key)) {
      to[key] = fromVal;
    } else if (toVal !== fromVal && isPlainObject(toVal) && !isRef(toVal) && isPlainObject(fromVal) && !isRef(fromVal)) {
      mergeData(fromVal, toVal);
    }
  }

  return to;
}

function install(Vue) {
  if (isVueRegistered(Vue)) {

    return;
  }

  Vue.config.optionMergeStrategies.setup = function (parent, child) {
    return function mergedSetupFn(props, context) {
      return mergeData(isFunction(parent) ? parent(props, context) || {} : undefined, isFunction(child) ? child(props, context) || {} : undefined);
    };
  };

  setVueConstructor(Vue);
  mixin(Vue);
}

var Plugin = {
  install: function (Vue) {
    return install(Vue);
  }
}; // implementation, close to no-op

function defineComponent(options) {
  return options;
}

function defineAsyncComponent(source) {
  if (isFunction(source)) {
    source = {
      loader: source
    };
  }

  var loader = source.loader,
      loadingComponent = source.loadingComponent,
      errorComponent = source.errorComponent,
      _a = source.delay,
      delay = _a === void 0 ? 200 : _a,
      timeout = source.timeout;
      // undefined = never times out
  source.suspensible;
      var // in Vue 3 default is true
  userOnError = source.onError;

  var pendingRequest = null;
  var retries = 0;

  var retry = function () {
    retries++;
    pendingRequest = null;
    return load();
  };

  var load = function () {
    var thisRequest;
    return pendingRequest || (thisRequest = pendingRequest = loader().catch(function (err) {
      err = err instanceof Error ? err : new Error(String(err));

      if (userOnError) {
        return new Promise(function (resolve, reject) {
          var userRetry = function () {
            return resolve(retry());
          };

          var userFail = function () {
            return reject(err);
          };

          userOnError(err, userRetry, userFail, retries + 1);
        });
      } else {
        throw err;
      }
    }).then(function (comp) {
      if (thisRequest !== pendingRequest && pendingRequest) {
        return pendingRequest;
      }


      if (comp && (comp.__esModule || comp[Symbol.toStringTag] === 'Module')) {
        comp = comp.default;
      }

      return comp;
    }));
  };

  return function () {
    var component = load();
    return {
      component: component,
      delay: delay,
      timeout: timeout,
      error: errorComponent,
      loading: loadingComponent
    };
  };
}



/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require$$0;

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

// EXPORTS
__webpack_require__.d(__webpack_exports__, "b", function() { return /* reexport */ setNuxtAppInstance; });
__webpack_require__.d(__webpack_exports__, "a", function() { return /* reexport */ defineNuxtPlugin; });
__webpack_require__.d(__webpack_exports__, "c", function() { return /* reexport */ useNuxtApp; });

// UNUSED EXPORTS: isVue2, isVue3, defineNuxtComponent, useLazyAsyncData, useLazyFetch, useCookie, useRequestHeaders, EffectScope, computed, createApp, createRef, customRef, defineAsyncComponent, defineComponent, del, effectScope, getCurrentInstance, getCurrentScope, h, inject, isRaw, isReactive, isReadonly, isRef, markRaw, nextTick, onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onErrorCaptured, onMounted, onScopeDispose, onServerPrefetch, onUnmounted, onUpdated, provide, proxyRefs, reactive, readonly, ref, set, shallowReactive, shallowReadonly, shallowRef, toRaw, toRef, toRefs, triggerRef, unref, useAttrs, useCSSModule, useCssModule, useSlots, version, warn, watch, watchEffect, watchPostEffect, watchSyncEffect, useAsyncData, useFetch, useHydration, useRuntimeConfig, useRouter, useRoute, useState, useNuxt2Meta

// EXTERNAL MODULE: ./node_modules/@vue/composition-api/dist/vue-composition-api.mjs
var vue_composition_api = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@nuxt/bridge/dist/runtime/vue2-bridge.mjs + 1 modules
__webpack_require__(0);
// EXTERNAL MODULE: external "murmurhash-es"
__webpack_require__(31);
// EXTERNAL MODULE: external "cookie-es"
__webpack_require__(9);

// EXTERNAL MODULE: external "h3"
__webpack_require__(32);

// EXTERNAL MODULE: external "destr"
__webpack_require__(33);
vue_composition_api["h" /* defineComponent */];
let currentNuxtAppInstance;
const setNuxtAppInstance = nuxt => {
  currentNuxtAppInstance = nuxt;
};
function defineNuxtPlugin(plugin) {
  return ctx => {
    setNuxtAppInstance(ctx.$_nuxtApp);
    plugin(ctx.$_nuxtApp);
    setNuxtAppInstance(null);
  };
}
const useNuxtApp = () => {
  const vm = Object(vue_composition_api["k" /* getCurrentInstance */])();

  if (!vm) {
    if (!currentNuxtAppInstance) {
      throw new Error("nuxt app instance unavailable");
    }

    return currentNuxtAppInstance;
  }

  return vm.proxy.$_nuxtApp;
};
// CONCATENATED MODULE: ./node_modules/@nuxt/bridge/dist/runtime/index.mjs



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports;

  // render functions
  if (render) {
    options.render = render;
    options.staticRenderFns = staticRenderFns;
    options._compiled = true;
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true;
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId;
  }

  var hook;
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext); // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context);
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    };
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook;
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        );
      }
      : injectStyles;
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook;
      // register for functional component in vue file
      var originalRender = options.render;
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context);
        return originalRender(h, context)
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook];
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require$$1;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles(parentId, list) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}
// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__;
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      });
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles;
    }

    var styles = context._styles || (context._styles = {});
    list = listToStyles(parentId, list);
    if (isProduction) {
      addStyleProd(styles, list);
    } else {
      addStyleDev(styles, list);
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts;
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j];
      // group style tags by media types.
      var id = part.media || 'default';
      var style = styles[id];
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id);
          style.css += '\n' + part.css;
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        };
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts;
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j];
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      };
    }
  }
}

function renderStyles (styles) {
  var css = '';
  for (var key in styles) {
    var style = styles[key];
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>';
  }
  return css
}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require$$2;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require$$3;

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {
/*!
 * vue-no-ssr v1.1.1
 * (c) 2018-present egoist <0x142857@gmail.com>
 * Released under the MIT License.
 */


var index = {
  name: 'NoSsr',
  functional: true,
  props: {
    placeholder: String,
    placeholderTag: {
      type: String,
      default: 'div'
    }
  },
  render: function render(h, ref) {
    var parent = ref.parent;
    var slots = ref.slots;
    var props = ref.props;
    var ref$1 = slots();
    var defaultSlot = ref$1.default;
    if (defaultSlot === void 0) defaultSlot = [];
    var placeholderSlot = ref$1.placeholder;

    if (parent._isMounted) {
      return defaultSlot;
    }

    parent.$once('hook:mounted', function () {
      parent.$forceUpdate();
    });

    if (props.placeholderTag && (props.placeholder || placeholderSlot)) {
      return h(props.placeholderTag, {
        class: ['no-ssr-placeholder']
      }, props.placeholder || placeholderSlot);
    } // Return a placeholder element for each child in the default slot
    // Or if no children return a single placeholder


    return defaultSlot.length > 0 ? defaultSlot.map(function () {
      return h(false);
    }) : h(false);
  }
};
module.exports = index;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {
/*!
 * vue-client-only v0.0.0-semantic-release
 * (c) 2021-present egoist <0x142857@gmail.com>
 * Released under the MIT License.
 */


var index = {
  name: 'ClientOnly',
  functional: true,
  props: {
    placeholder: String,
    placeholderTag: {
      type: String,
      default: 'div'
    }
  },
  render: function render(h, ref) {
    var parent = ref.parent;
    var slots = ref.slots;
    var props = ref.props;
    var ref$1 = slots();
    var defaultSlot = ref$1.default;
    if (defaultSlot === void 0) defaultSlot = [];
    var placeholderSlot = ref$1.placeholder;

    if (parent._isMounted) {
      return defaultSlot;
    }

    parent.$once('hook:mounted', function () {
      parent.$forceUpdate();
    });

    if (props.placeholderTag && (props.placeholder || placeholderSlot)) {
      return h(props.placeholderTag, {
        class: ['client-only-placeholder']
      }, props.placeholder || placeholderSlot);
    } // Return a placeholder element for each child in the default slot
    // Or if no children return a single placeholder


    return defaultSlot.length > 0 ? defaultSlot.map(function () {
      return h(false);
    }) : h(false);
  }
};
module.exports = index;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require$$4;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require$$5;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require$$6;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require$$7;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require$$8;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require$$9;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require$$10;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require$$11;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require$$12;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require$$13;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require$$14;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require$$15;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require$$16;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require$$17;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require$$18;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require$$19;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(57);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default;
module.exports.__inject__ = function (context) {
  add("75a170ed", content, true, context);
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(59);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default;
module.exports.__inject__ = function (context) {
  add("e8dfedd6", content, true, context);
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(63);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default;
module.exports.__inject__ = function (context) {
  add("51a0ec62", content, true, context);
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require$$20;

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require$$21;

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require$$22;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {
/**
 * vue-meta v2.4.0
 * (c) 2020
 * - Declan de Wet
 * - Sébastien Chopin (@Atinux)
 * - Pim (@pimlie)
 * - All the amazing contributors
 * @license MIT
 */


function _interopDefault(ex) {
  return ex && typeof ex === 'object' && 'default' in ex ? ex['default'] : ex;
}

var deepmerge = _interopDefault(__webpack_require__(55));

var version = "2.4.0";

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it;

  if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (e) {
          throw e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = o[Symbol.iterator]();
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (e) {
      didErr = true;
      err = e;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}
/**
 * checks if passed argument is an array
 * @param  {any}  arg - the object to check
 * @return {Boolean} - true if `arg` is an array
 */


function isArray(arg) {
  return Array.isArray(arg);
}

function isUndefined(arg) {
  return typeof arg === 'undefined';
}

function isObject(arg) {
  return _typeof(arg) === 'object';
}

function isPureObject(arg) {
  return _typeof(arg) === 'object' && arg !== null;
}

function isFunction(arg) {
  return typeof arg === 'function';
}

function isString(arg) {
  return typeof arg === 'string';
}

function hasGlobalWindowFn() {
  try {
    return !isUndefined(window);
  } catch (e) {
    return false;
  }
}

var hasGlobalWindow = hasGlobalWindowFn();

var _global = hasGlobalWindow ? window : commonjsGlobal;

var console = _global.console || {};

function warn(str) {
  /* istanbul ignore next */
  if (!console || !console.warn) {
    return;
  }

  console.warn(str);
}

var showWarningNotSupported = function showWarningNotSupported() {
  return warn('This vue app/component has no vue-meta configuration');
};
/**
 * These are constant variables used throughout the application.
 */
// set some sane defaults


var defaultInfo = {
  title: undefined,
  titleChunk: '',
  titleTemplate: '%s',
  htmlAttrs: {},
  bodyAttrs: {},
  headAttrs: {},
  base: [],
  link: [],
  meta: [],
  style: [],
  script: [],
  noscript: [],
  __dangerouslyDisableSanitizers: [],
  __dangerouslyDisableSanitizersByTagID: {}
};
var rootConfigKey = '_vueMeta'; // This is the name of the component option that contains all the information that
// gets converted to the various meta tags & attributes for the page.

var keyName = 'metaInfo'; // This is the attribute vue-meta arguments on elements to know which it should
// manage and which it should ignore.

var attribute = 'data-vue-meta'; // This is the attribute that goes on the `html` tag to inform `vue-meta`
// that the server has already generated the meta tags for the initial render.

var ssrAttribute = 'data-vue-meta-server-rendered'; // This is the property that tells vue-meta to overwrite (instead of append)
// an item in a tag list. For example, if you have two `meta` tag list items
// that both have `vmid` of "description", then vue-meta will overwrite the
// shallowest one with the deepest one.

var tagIDKeyName = 'vmid'; // This is the key name for possible meta templates

var metaTemplateKeyName = 'template'; // This is the key name for the content-holding property

var contentKeyName = 'content'; // The id used for the ssr app

var ssrAppId = 'ssr'; // How long meta update

var debounceWait = 10; // How long meta update

var waitOnDestroyed = true;
var defaultOptions = {
  keyName: keyName,
  attribute: attribute,
  ssrAttribute: ssrAttribute,
  tagIDKeyName: tagIDKeyName,
  contentKeyName: contentKeyName,
  metaTemplateKeyName: metaTemplateKeyName,
  waitOnDestroyed: waitOnDestroyed,
  debounceWait: debounceWait,
  ssrAppId: ssrAppId
}; // might be a bit ugly, but minimizes the browser bundles a bit

var defaultInfoKeys = Object.keys(defaultInfo); // The metaInfo property keys which are used to disable escaping

var disableOptionKeys = [defaultInfoKeys[12], defaultInfoKeys[13]]; // List of metaInfo property keys which are configuration options (and dont generate html)

var metaInfoOptionKeys = [defaultInfoKeys[1], defaultInfoKeys[2], 'changed'].concat(disableOptionKeys); // List of metaInfo property keys which only generates attributes and no tags

var metaInfoAttributeKeys = [defaultInfoKeys[3], defaultInfoKeys[4], defaultInfoKeys[5]]; // HTML elements which support the onload event

var tagsSupportingOnload = ['link', 'style', 'script']; // HTML elements which dont have a head tag (shortened to our needs)
// see: https://www.w3.org/TR/html52/document-metadata.html

var tagsWithoutEndTag = ['base', 'meta', 'link']; // HTML elements which can have inner content (shortened to our needs)

var tagsWithInnerContent = ['noscript', 'script', 'style']; // Attributes which are inserted as childNodes instead of HTMLAttribute

var tagAttributeAsInnerContent = ['innerHTML', 'cssText', 'json'];
var tagProperties = ['once', 'skip', 'template']; // Attributes which should be added with data- prefix

var commonDataAttributes = ['body', 'pbody']; // from: https://github.com/kangax/html-minifier/blob/gh-pages/src/htmlminifier.js#L202

var booleanHtmlAttributes = ['allowfullscreen', 'amp', 'amp-boilerplate', 'async', 'autofocus', 'autoplay', 'checked', 'compact', 'controls', 'declare', 'default', 'defaultchecked', 'defaultmuted', 'defaultselected', 'defer', 'disabled', 'enabled', 'formnovalidate', 'hidden', 'indeterminate', 'inert', 'ismap', 'itemscope', 'loop', 'multiple', 'muted', 'nohref', 'noresize', 'noshade', 'novalidate', 'nowrap', 'open', 'pauseonexit', 'readonly', 'required', 'reversed', 'scoped', 'seamless', 'selected', 'sortable', 'truespeed', 'typemustmatch', 'visible'];
var batchId = null;

function triggerUpdate(_ref, rootVm, hookName) {
  var debounceWait = _ref.debounceWait; // if an update was triggered during initialization or when an update was triggered by the
  // metaInfo watcher, set initialized to null
  // then we keep falsy value but know we need to run a triggerUpdate after initialization

  if (!rootVm[rootConfigKey].initialized && (rootVm[rootConfigKey].initializing || hookName === 'watcher')) {
    rootVm[rootConfigKey].initialized = null;
  }

  if (rootVm[rootConfigKey].initialized && !rootVm[rootConfigKey].pausing) {
    // batch potential DOM updates to prevent extraneous re-rendering
    // eslint-disable-next-line no-void
    batchUpdate(function () {
      return void rootVm.$meta().refresh();
    }, debounceWait);
  }
}
/**
 * Performs a batched update.
 *
 * @param  {(null|Number)} id - the ID of this update
 * @param  {Function} callback - the update to perform
 * @return {Number} id - a new ID
 */


function batchUpdate(callback, timeout) {
  timeout = timeout === undefined ? 10 : timeout;

  if (!timeout) {
    callback();
    return;
  }

  clearTimeout(batchId);
  batchId = setTimeout(function () {
    callback();
  }, timeout);
  return batchId;
}
/*
 * To reduce build size, this file provides simple polyfills without
 * overly excessive type checking and without modifying
 * the global Array.prototype
 * The polyfills are automatically removed in the commonjs build
 * Also, only files in client/ & shared/ should use these functions
 * files in server/ still use normal js function
 */


function find(array, predicate, thisArg) {
  if (!Array.prototype.find) {
    // idx needs to be a Number, for..in returns string
    for (var idx = 0; idx < array.length; idx++) {
      if (predicate.call(thisArg, array[idx], idx, array)) {
        return array[idx];
      }
    }

    return;
  }

  return array.find(predicate, thisArg);
}

function findIndex(array, predicate, thisArg) {
  if (!Array.prototype.findIndex) {
    // idx needs to be a Number, for..in returns string
    for (var idx = 0; idx < array.length; idx++) {
      if (predicate.call(thisArg, array[idx], idx, array)) {
        return idx;
      }
    }

    return -1;
  }

  return array.findIndex(predicate, thisArg);
}

function toArray(arg) {
  if (!Array.from) {
    return Array.prototype.slice.call(arg);
  }

  return Array.from(arg);
}

function includes(array, value) {
  if (!Array.prototype.includes) {
    for (var idx in array) {
      if (array[idx] === value) {
        return true;
      }
    }

    return false;
  }

  return array.includes(value);
}

var querySelector = function querySelector(arg, el) {
  return (el || document).querySelectorAll(arg);
};

function getTag(tags, tag) {
  if (!tags[tag]) {
    tags[tag] = document.getElementsByTagName(tag)[0];
  }

  return tags[tag];
}

function getElementsKey(_ref) {
  var body = _ref.body,
      pbody = _ref.pbody;
  return body ? 'body' : pbody ? 'pbody' : 'head';
}

function queryElements(parentNode, _ref2, attributes) {
  var appId = _ref2.appId,
      attribute = _ref2.attribute,
      type = _ref2.type,
      tagIDKeyName = _ref2.tagIDKeyName;
  attributes = attributes || {};
  var queries = ["".concat(type, "[").concat(attribute, "=\"").concat(appId, "\"]"), "".concat(type, "[data-").concat(tagIDKeyName, "]")].map(function (query) {
    for (var key in attributes) {
      var val = attributes[key];
      var attributeValue = val && val !== true ? "=\"".concat(val, "\"") : '';
      query += "[data-".concat(key).concat(attributeValue, "]");
    }

    return query;
  });
  return toArray(querySelector(queries.join(', '), parentNode));
}

function removeElementsByAppId(_ref3, appId) {
  var attribute = _ref3.attribute;
  toArray(querySelector("[".concat(attribute, "=\"").concat(appId, "\"]"))).map(function (el) {
    return el.remove();
  });
}

function removeAttribute(el, attributeName) {
  el.removeAttribute(attributeName);
}

function hasMetaInfo(vm) {
  vm = vm || this;
  return vm && (vm[rootConfigKey] === true || isObject(vm[rootConfigKey]));
} // a component is in a metaInfo branch when itself has meta info or one of its (grand-)children has


function inMetaInfoBranch(vm) {
  vm = vm || this;
  return vm && !isUndefined(vm[rootConfigKey]);
}

function pause(rootVm, refresh) {
  rootVm[rootConfigKey].pausing = true;
  return function () {
    return resume(rootVm, refresh);
  };
}

function resume(rootVm, refresh) {
  rootVm[rootConfigKey].pausing = false;

  if (refresh || refresh === undefined) {
    return rootVm.$meta().refresh();
  }
}

function addNavGuards(rootVm) {
  var router = rootVm.$router; // return when nav guards already added or no router exists

  if (rootVm[rootConfigKey].navGuards || !router) {
    /* istanbul ignore next */
    return;
  }

  rootVm[rootConfigKey].navGuards = true;
  router.beforeEach(function (to, from, next) {
    pause(rootVm);
    next();
  });
  router.afterEach(function () {
    rootVm.$nextTick(function () {
      var _resume = resume(rootVm),
          metaInfo = _resume.metaInfo;

      if (metaInfo && isFunction(metaInfo.afterNavigation)) {
        metaInfo.afterNavigation(metaInfo);
      }
    });
  });
}

var appId = 1;

function createMixin(Vue, options) {
  // for which Vue lifecycle hooks should the metaInfo be refreshed
  var updateOnLifecycleHook = ['activated', 'deactivated', 'beforeMount'];
  var wasServerRendered = false; // watch for client side component updates

  return {
    beforeCreate: function beforeCreate() {
      var _this2 = this;

      var rootKey = '$root';
      var $root = this[rootKey];
      var $options = this.$options;
      var devtoolsEnabled = Vue.config.devtools;
      Object.defineProperty(this, '_hasMetaInfo', {
        configurable: true,
        get: function get() {
          // Show deprecation warning once when devtools enabled
          if (devtoolsEnabled && !$root[rootConfigKey].deprecationWarningShown) {
            warn('VueMeta DeprecationWarning: _hasMetaInfo has been deprecated and will be removed in a future version. Please use hasMetaInfo(vm) instead');
            $root[rootConfigKey].deprecationWarningShown = true;
          }

          return hasMetaInfo(this);
        }
      });

      if (this === $root) {
        $root.$once('hook:beforeMount', function () {
          wasServerRendered = this.$el && this.$el.nodeType === 1 && this.$el.hasAttribute('data-server-rendered'); // In most cases when you have a SSR app it will be the first app thats gonna be
          // initiated, if we cant detect the data-server-rendered attribute from Vue but we
          // do see our own ssrAttribute then _assume_ the Vue app with appId 1 is the ssr app
          // attempted fix for #404 & #562, but we rly need to refactor how we pass appIds from
          // ssr to the client

          if (!wasServerRendered && $root[rootConfigKey] && $root[rootConfigKey].appId === 1) {
            var htmlTag = getTag({}, 'html');
            wasServerRendered = htmlTag && htmlTag.hasAttribute(options.ssrAttribute);
          }
        });
      } // Add a marker to know if it uses metaInfo
      // _vnode is used to know that it's attached to a real component
      // useful if we use some mixin to add some meta tags (like nuxt-i18n)


      if (isUndefined($options[options.keyName]) || $options[options.keyName] === null) {
        return;
      }

      if (!$root[rootConfigKey]) {
        $root[rootConfigKey] = {
          appId: appId
        };
        appId++;

        if (devtoolsEnabled && $root.$options[options.keyName]) {
          // use nextTick so the children should be added to $root
          this.$nextTick(function () {
            // find the first child that lists fnOptions
            var child = find($root.$children, function (c) {
              return c.$vnode && c.$vnode.fnOptions;
            });

            if (child && child.$vnode.fnOptions[options.keyName]) {
              warn("VueMeta has detected a possible global mixin which adds a ".concat(options.keyName, " property to all Vue components on the page. This could cause severe performance issues. If possible, use $meta().addApp to add meta information instead"));
            }
          });
        }
      } // to speed up updates we keep track of branches which have a component with vue-meta info defined
      // if _vueMeta = true it has info, if _vueMeta = false a child has info


      if (!this[rootConfigKey]) {
        this[rootConfigKey] = true;
        var parent = this.$parent;

        while (parent && parent !== $root) {
          if (isUndefined(parent[rootConfigKey])) {
            parent[rootConfigKey] = false;
          }

          parent = parent.$parent;
        }
      } // coerce function-style metaInfo to a computed prop so we can observe
      // it on creation


      if (isFunction($options[options.keyName])) {
        $options.computed = $options.computed || {};
        $options.computed.$metaInfo = $options[options.keyName];

        if (!this.$isServer) {
          // if computed $metaInfo exists, watch it for updates & trigger a refresh
          // when it changes (i.e. automatically handle async actions that affect metaInfo)
          // credit for this suggestion goes to [Sébastien Chopin](https://github.com/Atinux)
          this.$on('hook:created', function () {
            this.$watch('$metaInfo', function () {
              triggerUpdate(options, this[rootKey], 'watcher');
            });
          });
        }
      } // force an initial refresh on page load and prevent other lifecycleHooks
      // to triggerUpdate until this initial refresh is finished
      // this is to make sure that when a page is opened in an inactive tab which
      // has throttled rAF/timers we still immediately set the page title


      if (isUndefined($root[rootConfigKey].initialized)) {
        $root[rootConfigKey].initialized = this.$isServer;

        if (!$root[rootConfigKey].initialized) {
          if (!$root[rootConfigKey].initializedSsr) {
            $root[rootConfigKey].initializedSsr = true;
            this.$on('hook:beforeMount', function () {
              var $root = this[rootKey]; // if this Vue-app was server rendered, set the appId to 'ssr'
              // only one SSR app per page is supported

              if (wasServerRendered) {
                $root[rootConfigKey].appId = options.ssrAppId;
              }
            });
          } // we use the mounted hook here as on page load


          this.$on('hook:mounted', function () {
            var $root = this[rootKey];

            if ($root[rootConfigKey].initialized) {
              return;
            } // used in triggerUpdate to check if a change was triggered
            // during initialization


            $root[rootConfigKey].initializing = true; // refresh meta in nextTick so all child components have loaded

            this.$nextTick(function () {
              var _$root$$meta$refresh = $root.$meta().refresh(),
                  tags = _$root$$meta$refresh.tags,
                  metaInfo = _$root$$meta$refresh.metaInfo; // After ssr hydration (identifier by tags === false) check
              // if initialized was set to null in triggerUpdate. That'd mean
              // that during initilazation changes where triggered which need
              // to be applied OR a metaInfo watcher was triggered before the
              // current hook was called
              // (during initialization all changes are blocked)


              if (tags === false && $root[rootConfigKey].initialized === null) {
                this.$nextTick(function () {
                  return triggerUpdate(options, $root, 'init');
                });
              }

              $root[rootConfigKey].initialized = true;
              delete $root[rootConfigKey].initializing; // add the navigation guards if they havent been added yet
              // they are needed for the afterNavigation callback

              if (!options.refreshOnceOnNavigation && metaInfo.afterNavigation) {
                addNavGuards($root);
              }
            });
          }); // add the navigation guards if requested

          if (options.refreshOnceOnNavigation) {
            addNavGuards($root);
          }
        }
      }

      this.$on('hook:destroyed', function () {
        var _this = this; // do not trigger refresh:
        // - when user configured to not wait for transitions on destroyed
        // - when the component doesnt have a parent
        // - doesnt have metaInfo defined


        if (!this.$parent || !hasMetaInfo(this)) {
          return;
        }

        delete this._hasMetaInfo;
        this.$nextTick(function () {
          if (!options.waitOnDestroyed || !_this.$el || !_this.$el.offsetParent) {
            triggerUpdate(options, _this.$root, 'destroyed');
            return;
          } // Wait that element is hidden before refreshing meta tags (to support animations)


          var interval = setInterval(function () {
            if (_this.$el && _this.$el.offsetParent !== null) {
              /* istanbul ignore next line */
              return;
            }

            clearInterval(interval);
            triggerUpdate(options, _this.$root, 'destroyed');
          }, 50);
        });
      }); // do not trigger refresh on the server side

      if (this.$isServer) {
        /* istanbul ignore next */
        return;
      } // no need to add this hooks on server side


      updateOnLifecycleHook.forEach(function (lifecycleHook) {
        _this2.$on("hook:".concat(lifecycleHook), function () {
          triggerUpdate(options, this[rootKey], lifecycleHook);
        });
      });
    }
  };
}

function setOptions(options) {
  // combine options
  options = isObject(options) ? options : {}; // The options are set like this so they can
  // be minified by terser while keeping the
  // user api intact
  // terser --mangle-properties keep_quoted=strict

  /* eslint-disable dot-notation */

  return {
    keyName: options['keyName'] || defaultOptions.keyName,
    attribute: options['attribute'] || defaultOptions.attribute,
    ssrAttribute: options['ssrAttribute'] || defaultOptions.ssrAttribute,
    tagIDKeyName: options['tagIDKeyName'] || defaultOptions.tagIDKeyName,
    contentKeyName: options['contentKeyName'] || defaultOptions.contentKeyName,
    metaTemplateKeyName: options['metaTemplateKeyName'] || defaultOptions.metaTemplateKeyName,
    debounceWait: isUndefined(options['debounceWait']) ? defaultOptions.debounceWait : options['debounceWait'],
    waitOnDestroyed: isUndefined(options['waitOnDestroyed']) ? defaultOptions.waitOnDestroyed : options['waitOnDestroyed'],
    ssrAppId: options['ssrAppId'] || defaultOptions.ssrAppId,
    refreshOnceOnNavigation: !!options['refreshOnceOnNavigation']
  };
  /* eslint-enable dot-notation */
}

function getOptions(options) {
  var optionsCopy = {};

  for (var key in options) {
    optionsCopy[key] = options[key];
  }

  return optionsCopy;
}

function ensureIsArray(arg, key) {
  if (!key || !isObject(arg)) {
    return isArray(arg) ? arg : [];
  }

  if (!isArray(arg[key])) {
    arg[key] = [];
  }

  return arg;
}

var serverSequences = [[/&/g, '&amp;'], [/</g, '&lt;'], [/>/g, '&gt;'], [/"/g, '&quot;'], [/'/g, '&#x27;']];
var clientSequences = [[/&/g, "&"], [/</g, "<"], [/>/g, ">"], [/"/g, "\""], [/'/g, "'"]]; // sanitizes potentially dangerous characters

function escape(info, options, escapeOptions, escapeKeys) {
  var tagIDKeyName = options.tagIDKeyName;
  var _escapeOptions$doEsca = escapeOptions.doEscape,
      doEscape = _escapeOptions$doEsca === void 0 ? function (v) {
    return v;
  } : _escapeOptions$doEsca;
  var escaped = {};

  for (var key in info) {
    var value = info[key]; // no need to escape configuration options

    if (includes(metaInfoOptionKeys, key)) {
      escaped[key] = value;
      continue;
    } // do not use destructuring for disableOptionKeys, it increases transpiled size
    // due to var checks while we are guaranteed the structure of the cb


    var disableKey = disableOptionKeys[0];

    if (escapeOptions[disableKey] && includes(escapeOptions[disableKey], key)) {
      // this info[key] doesnt need to escaped if the option is listed in __dangerouslyDisableSanitizers
      escaped[key] = value;
      continue;
    }

    var tagId = info[tagIDKeyName];

    if (tagId) {
      disableKey = disableOptionKeys[1]; // keys which are listed in __dangerouslyDisableSanitizersByTagID for the current vmid do not need to be escaped

      if (escapeOptions[disableKey] && escapeOptions[disableKey][tagId] && includes(escapeOptions[disableKey][tagId], key)) {
        escaped[key] = value;
        continue;
      }
    }

    if (isString(value)) {
      escaped[key] = doEscape(value);
    } else if (isArray(value)) {
      escaped[key] = value.map(function (v) {
        if (isPureObject(v)) {
          return escape(v, options, escapeOptions, true);
        }

        return doEscape(v);
      });
    } else if (isPureObject(value)) {
      escaped[key] = escape(value, options, escapeOptions, true);
    } else {
      escaped[key] = value;
    }

    if (escapeKeys) {
      var escapedKey = doEscape(key);

      if (key !== escapedKey) {
        escaped[escapedKey] = escaped[key];
        delete escaped[key];
      }
    }
  }

  return escaped;
}

function escapeMetaInfo(options, info, escapeSequences) {
  escapeSequences = escapeSequences || []; // do not use destructuring for seq, it increases transpiled size
  // due to var checks while we are guaranteed the structure of the cb

  var escapeOptions = {
    doEscape: function doEscape(value) {
      return escapeSequences.reduce(function (val, seq) {
        return val.replace(seq[0], seq[1]);
      }, value);
    }
  };
  disableOptionKeys.forEach(function (disableKey, index) {
    if (index === 0) {
      ensureIsArray(info, disableKey);
    } else if (index === 1) {
      for (var key in info[disableKey]) {
        ensureIsArray(info[disableKey], key);
      }
    }

    escapeOptions[disableKey] = info[disableKey];
  }); // begin sanitization

  return escape(info, options, escapeOptions);
}

function applyTemplate(_ref, headObject, template, chunk) {
  var component = _ref.component,
      metaTemplateKeyName = _ref.metaTemplateKeyName,
      contentKeyName = _ref.contentKeyName;

  if (template === true || headObject[metaTemplateKeyName] === true) {
    // abort, template was already applied
    return false;
  }

  if (isUndefined(template) && headObject[metaTemplateKeyName]) {
    template = headObject[metaTemplateKeyName];
    headObject[metaTemplateKeyName] = true;
  } // return early if no template defined


  if (!template) {
    // cleanup faulty template properties
    delete headObject[metaTemplateKeyName];
    return false;
  }

  if (isUndefined(chunk)) {
    chunk = headObject[contentKeyName];
  }

  headObject[contentKeyName] = isFunction(template) ? template.call(component, chunk) : template.replace(/%s/g, chunk);
  return true;
}

function _arrayMerge(_ref, target, source) {
  var component = _ref.component,
      tagIDKeyName = _ref.tagIDKeyName,
      metaTemplateKeyName = _ref.metaTemplateKeyName,
      contentKeyName = _ref.contentKeyName; // we concat the arrays without merging objects contained in,
  // but we check for a `vmid` property on each object in the array
  // using an O(1) lookup associative array exploit

  var destination = [];

  if (!target.length && !source.length) {
    return destination;
  }

  target.forEach(function (targetItem, targetIndex) {
    // no tagID so no need to check for duplicity
    if (!targetItem[tagIDKeyName]) {
      destination.push(targetItem);
      return;
    }

    var sourceIndex = findIndex(source, function (item) {
      return item[tagIDKeyName] === targetItem[tagIDKeyName];
    });
    var sourceItem = source[sourceIndex]; // source doesnt contain any duplicate vmid's, we can keep targetItem

    if (sourceIndex === -1) {
      destination.push(targetItem);
      return;
    } // when sourceItem explictly defines contentKeyName or innerHTML as undefined, its
    // an indication that we need to skip the default behaviour or child has preference over parent
    // which means we keep the targetItem and ignore/remove the sourceItem


    if (contentKeyName in sourceItem && sourceItem[contentKeyName] === undefined || 'innerHTML' in sourceItem && sourceItem.innerHTML === undefined) {
      destination.push(targetItem); // remove current index from source array so its not concatenated to destination below

      source.splice(sourceIndex, 1);
      return;
    } // we now know that targetItem is a duplicate and we should ignore it in favor of sourceItem
    // if source specifies null as content then ignore both the target as the source


    if (sourceItem[contentKeyName] === null || sourceItem.innerHTML === null) {
      // remove current index from source array so its not concatenated to destination below
      source.splice(sourceIndex, 1);
      return;
    } // now we only need to check if the target has a template to combine it with the source


    var targetTemplate = targetItem[metaTemplateKeyName];

    if (!targetTemplate) {
      return;
    }

    var sourceTemplate = sourceItem[metaTemplateKeyName];

    if (!sourceTemplate) {
      // use parent template and child content
      applyTemplate({
        component: component,
        metaTemplateKeyName: metaTemplateKeyName,
        contentKeyName: contentKeyName
      }, sourceItem, targetTemplate); // set template to true to indicate template was already applied

      sourceItem.template = true;
      return;
    }

    if (!sourceItem[contentKeyName]) {
      // use parent content and child template
      applyTemplate({
        component: component,
        metaTemplateKeyName: metaTemplateKeyName,
        contentKeyName: contentKeyName
      }, sourceItem, undefined, targetItem[contentKeyName]);
    }
  });
  return destination.concat(source);
}

var warningShown = false;

function merge(target, source, options) {
  options = options || {}; // remove properties explicitly set to false so child components can
  // optionally _not_ overwrite the parents content
  // (for array properties this is checked in arrayMerge)

  if (source.title === undefined) {
    delete source.title;
  }

  metaInfoAttributeKeys.forEach(function (attrKey) {
    if (!source[attrKey]) {
      return;
    }

    for (var key in source[attrKey]) {
      if (key in source[attrKey] && source[attrKey][key] === undefined) {
        if (includes(booleanHtmlAttributes, key) && !warningShown) {
          warn('VueMeta: Please note that since v2 the value undefined is not used to indicate boolean attributes anymore, see migration guide for details');
          warningShown = true;
        }

        delete source[attrKey][key];
      }
    }
  });
  return deepmerge(target, source, {
    arrayMerge: function arrayMerge(t, s) {
      return _arrayMerge(options, t, s);
    }
  });
}

function getComponentMetaInfo(options, component) {
  return getComponentOption(options || {}, component, defaultInfo);
}
/**
 * Returns the `opts.option` $option value of the given `opts.component`.
 * If methods are encountered, they will be bound to the component context.
 * If `opts.deep` is true, will recursively merge all child component
 * `opts.option` $option values into the returned result.
 *
 * @param  {Object} opts - options
 * @param  {Object} opts.component - Vue component to fetch option data from
 * @param  {Boolean} opts.deep - look for data in child components as well?
 * @param  {Function} opts.arrayMerge - how should arrays be merged?
 * @param  {String} opts.keyName - the name of the option to look for
 * @param  {Object} [result={}] - result so far
 * @return {Object} result - final aggregated result
 */


function getComponentOption(options, component, result) {
  result = result || {};

  if (component._inactive) {
    return result;
  }

  options = options || {};
  var _options = options,
      keyName = _options.keyName;
  var $metaInfo = component.$metaInfo,
      $options = component.$options,
      $children = component.$children; // only collect option data if it exists

  if ($options[keyName]) {
    // if $metaInfo exists then [keyName] was defined as a function
    // and set to the computed prop $metaInfo in the mixin
    // using the computed prop should be a small performance increase
    // because Vue caches those internally
    var data = $metaInfo || $options[keyName]; // only merge data with result when its an object
    // eg it could be a function when metaInfo() returns undefined
    // dueo to the or statement above

    if (isObject(data)) {
      result = merge(result, data, options);
    }
  } // collect & aggregate child options if deep = true


  if ($children.length) {
    $children.forEach(function (childComponent) {
      // check if the childComponent is in a branch
      // return otherwise so we dont walk all component branches unnecessarily
      if (!inMetaInfoBranch(childComponent)) {
        return;
      }

      result = getComponentOption(options, childComponent, result);
    });
  }

  return result;
}

var callbacks = [];

function isDOMComplete(d) {
  return (d || document).readyState === 'complete';
}

function addCallback(query, callback) {
  if (arguments.length === 1) {
    callback = query;
    query = '';
  }

  callbacks.push([query, callback]);
}

function addCallbacks(_ref, type, tags, autoAddListeners) {
  var tagIDKeyName = _ref.tagIDKeyName;
  var hasAsyncCallback = false;
  tags.forEach(function (tag) {
    if (!tag[tagIDKeyName] || !tag.callback) {
      return;
    }

    hasAsyncCallback = true;
    addCallback("".concat(type, "[data-").concat(tagIDKeyName, "=\"").concat(tag[tagIDKeyName], "\"]"), tag.callback);
  });

  if (!autoAddListeners || !hasAsyncCallback) {
    return hasAsyncCallback;
  }

  return addListeners();
}

function addListeners() {
  if (isDOMComplete()) {
    applyCallbacks();
    return;
  } // Instead of using a MutationObserver, we just apply

  /* istanbul ignore next */


  document.onreadystatechange = function () {
    applyCallbacks();
  };
}

function applyCallbacks(matchElement) {
  callbacks.forEach(function (args) {
    // do not use destructuring for args, it increases transpiled size
    // due to var checks while we are guaranteed the structure of the cb
    var query = args[0];
    var callback = args[1];
    var selector = "".concat(query, "[onload=\"this.__vm_l=1\"]");
    var elements = [];

    if (!matchElement) {
      elements = toArray(querySelector(selector));
    }

    if (matchElement && matchElement.matches(selector)) {
      elements = [matchElement];
    }

    elements.forEach(function (element) {
      /* __vm_cb: whether the load callback has been called
       * __vm_l: set by onload attribute, whether the element was loaded
       * __vm_ev: whether the event listener was added or not
       */
      if (element.__vm_cb) {
        return;
      }

      var onload = function onload() {
        /* Mark that the callback for this element has already been called,
         * this prevents the callback to run twice in some (rare) conditions
         */
        element.__vm_cb = true;
        /* onload needs to be removed because we only need the
         * attribute after ssr and if we dont remove it the node
         * will fail isEqualNode on the client
         */

        removeAttribute(element, 'onload');
        callback(element);
      };
      /* IE9 doesnt seem to load scripts synchronously,
       * causing a script sometimes/often already to be loaded
       * when we add the event listener below (thus adding an onload event
       * listener has no use because it will never be triggered).
       * Therefore we add the onload attribute during ssr, and
       * check here if it was already loaded or not
       */


      if (element.__vm_l) {
        onload();
        return;
      }

      if (!element.__vm_ev) {
        element.__vm_ev = true;
        element.addEventListener('load', onload);
      }
    });
  });
} // instead of adding it to the html


var attributeMap = {};
/**
 * Updates the document's html tag attributes
 *
 * @param  {Object} attrs - the new document html attributes
 * @param  {HTMLElement} tag - the HTMLElement tag to update with new attrs
 */

function updateAttribute(appId, options, type, attrs, tag) {
  var _ref = options || {},
      attribute = _ref.attribute;

  var vueMetaAttrString = tag.getAttribute(attribute);

  if (vueMetaAttrString) {
    attributeMap[type] = JSON.parse(decodeURI(vueMetaAttrString));
    removeAttribute(tag, attribute);
  }

  var data = attributeMap[type] || {};
  var toUpdate = []; // remove attributes from the map
  // which have been removed for this appId

  for (var attr in data) {
    if (data[attr] !== undefined && appId in data[attr]) {
      toUpdate.push(attr);

      if (!attrs[attr]) {
        delete data[attr][appId];
      }
    }
  }

  for (var _attr in attrs) {
    var attrData = data[_attr];

    if (!attrData || attrData[appId] !== attrs[_attr]) {
      toUpdate.push(_attr);

      if (attrs[_attr] !== undefined) {
        data[_attr] = data[_attr] || {};
        data[_attr][appId] = attrs[_attr];
      }
    }
  }

  for (var _i = 0, _toUpdate = toUpdate; _i < _toUpdate.length; _i++) {
    var _attr2 = _toUpdate[_i];
    var _attrData = data[_attr2];
    var attrValues = [];

    for (var _appId in _attrData) {
      Array.prototype.push.apply(attrValues, [].concat(_attrData[_appId]));
    }

    if (attrValues.length) {
      var attrValue = includes(booleanHtmlAttributes, _attr2) && attrValues.some(Boolean) ? '' : attrValues.filter(function (v) {
        return v !== undefined;
      }).join(' ');
      tag.setAttribute(_attr2, attrValue);
    } else {
      removeAttribute(tag, _attr2);
    }
  }

  attributeMap[type] = data;
}
/**
 * Updates the document title
 *
 * @param  {String} title - the new title of the document
 */


function updateTitle(title) {
  if (!title && title !== '') {
    return;
  }

  document.title = title;
}
/**
 * Updates meta tags inside <head> and <body> on the client. Borrowed from `react-helmet`:
 * https://github.com/nfl/react-helmet/blob/004d448f8de5f823d10f838b02317521180f34da/src/Helmet.js#L195-L245
 *
 * @param  {('meta'|'base'|'link'|'style'|'script'|'noscript')} type - the name of the tag
 * @param  {(Array<Object>|Object)} tags - an array of tag objects or a single object in case of base
 * @return {Object} - a representation of what tags changed
 */


function updateTag(appId, options, type, tags, head, body) {
  var _ref = options || {},
      attribute = _ref.attribute,
      tagIDKeyName = _ref.tagIDKeyName;

  var dataAttributes = commonDataAttributes.slice();
  dataAttributes.push(tagIDKeyName);
  var newElements = [];
  var queryOptions = {
    appId: appId,
    attribute: attribute,
    type: type,
    tagIDKeyName: tagIDKeyName
  };
  var currentElements = {
    head: queryElements(head, queryOptions),
    pbody: queryElements(body, queryOptions, {
      pbody: true
    }),
    body: queryElements(body, queryOptions, {
      body: true
    })
  };

  if (tags.length > 1) {
    // remove duplicates that could have been found by merging tags
    // which include a mixin with metaInfo and that mixin is used
    // by multiple components on the same page
    var found = [];
    tags = tags.filter(function (x) {
      var k = JSON.stringify(x);
      var res = !includes(found, k);
      found.push(k);
      return res;
    });
  }

  tags.forEach(function (tag) {
    if (tag.skip) {
      return;
    }

    var newElement = document.createElement(type);

    if (!tag.once) {
      newElement.setAttribute(attribute, appId);
    }

    Object.keys(tag).forEach(function (attr) {
      /* istanbul ignore next */
      if (includes(tagProperties, attr)) {
        return;
      }

      if (attr === 'innerHTML') {
        newElement.innerHTML = tag.innerHTML;
        return;
      }

      if (attr === 'json') {
        newElement.innerHTML = JSON.stringify(tag.json);
        return;
      }

      if (attr === 'cssText') {
        if (newElement.styleSheet) {
          /* istanbul ignore next */
          newElement.styleSheet.cssText = tag.cssText;
        } else {
          newElement.appendChild(document.createTextNode(tag.cssText));
        }

        return;
      }

      if (attr === 'callback') {
        newElement.onload = function () {
          return tag[attr](newElement);
        };

        return;
      }

      var _attr = includes(dataAttributes, attr) ? "data-".concat(attr) : attr;

      var isBooleanAttribute = includes(booleanHtmlAttributes, attr);

      if (isBooleanAttribute && !tag[attr]) {
        return;
      }

      var value = isBooleanAttribute ? '' : tag[attr];
      newElement.setAttribute(_attr, value);
    });
    var oldElements = currentElements[getElementsKey(tag)]; // Remove a duplicate tag from domTagstoRemove, so it isn't cleared.

    var indexToDelete;
    var hasEqualElement = oldElements.some(function (existingTag, index) {
      indexToDelete = index;
      return newElement.isEqualNode(existingTag);
    });

    if (hasEqualElement && (indexToDelete || indexToDelete === 0)) {
      oldElements.splice(indexToDelete, 1);
    } else {
      newElements.push(newElement);
    }
  });
  var oldElements = [];

  for (var _type in currentElements) {
    Array.prototype.push.apply(oldElements, currentElements[_type]);
  } // remove old elements


  oldElements.forEach(function (element) {
    element.parentNode.removeChild(element);
  }); // insert new elements

  newElements.forEach(function (element) {
    if (element.hasAttribute('data-body')) {
      body.appendChild(element);
      return;
    }

    if (element.hasAttribute('data-pbody')) {
      body.insertBefore(element, body.firstChild);
      return;
    }

    head.appendChild(element);
  });
  return {
    oldTags: oldElements,
    newTags: newElements
  };
}
/**
 * Performs client-side updates when new meta info is received
 *
 * @param  {Object} newInfo - the meta info to update to
 */


function updateClientMetaInfo(appId, options, newInfo) {
  options = options || {};
  var _options = options,
      ssrAttribute = _options.ssrAttribute,
      ssrAppId = _options.ssrAppId; // only cache tags for current update

  var tags = {};
  var htmlTag = getTag(tags, 'html'); // if this is a server render, then dont update

  if (appId === ssrAppId && htmlTag.hasAttribute(ssrAttribute)) {
    // remove the server render attribute so we can update on (next) changes
    removeAttribute(htmlTag, ssrAttribute); // add load callbacks if the

    var addLoadListeners = false;
    tagsSupportingOnload.forEach(function (type) {
      if (newInfo[type] && addCallbacks(options, type, newInfo[type])) {
        addLoadListeners = true;
      }
    });

    if (addLoadListeners) {
      addListeners();
    }

    return false;
  } // initialize tracked changes


  var tagsAdded = {};
  var tagsRemoved = {};

  for (var type in newInfo) {
    // ignore these
    if (includes(metaInfoOptionKeys, type)) {
      continue;
    }

    if (type === 'title') {
      // update the title
      updateTitle(newInfo.title);
      continue;
    }

    if (includes(metaInfoAttributeKeys, type)) {
      var tagName = type.substr(0, 4);
      updateAttribute(appId, options, type, newInfo[type], getTag(tags, tagName));
      continue;
    } // tags should always be an array, ignore if it isnt


    if (!isArray(newInfo[type])) {
      continue;
    }

    var _updateTag = updateTag(appId, options, type, newInfo[type], getTag(tags, 'head'), getTag(tags, 'body')),
        oldTags = _updateTag.oldTags,
        newTags = _updateTag.newTags;

    if (newTags.length) {
      tagsAdded[type] = newTags;
      tagsRemoved[type] = oldTags;
    }
  }

  return {
    tagsAdded: tagsAdded,
    tagsRemoved: tagsRemoved
  };
}

var appsMetaInfo;

function addApp(rootVm, appId, options) {
  return {
    set: function set(metaInfo) {
      return setMetaInfo(rootVm, appId, options, metaInfo);
    },
    remove: function remove() {
      return removeMetaInfo(rootVm, appId, options);
    }
  };
}

function setMetaInfo(rootVm, appId, options, metaInfo) {
  // if a vm exists _and_ its mounted then immediately update
  if (rootVm && rootVm.$el) {
    return updateClientMetaInfo(appId, options, metaInfo);
  } // store for later, the info
  // will be set on the first refresh


  appsMetaInfo = appsMetaInfo || {};
  appsMetaInfo[appId] = metaInfo;
}

function removeMetaInfo(rootVm, appId, options) {
  if (rootVm && rootVm.$el) {
    var tags = {};

    var _iterator = _createForOfIteratorHelper(metaInfoAttributeKeys),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var type = _step.value;
        var tagName = type.substr(0, 4);
        updateAttribute(appId, options, type, {}, getTag(tags, tagName));
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    return removeElementsByAppId(options, appId);
  }

  if (appsMetaInfo[appId]) {
    delete appsMetaInfo[appId];
    clearAppsMetaInfo();
  }
}

function getAppsMetaInfo() {
  return appsMetaInfo;
}

function clearAppsMetaInfo(force) {
  if (force || !Object.keys(appsMetaInfo).length) {
    appsMetaInfo = undefined;
  }
}
/**
 * Returns the correct meta info for the given component
 * (child components will overwrite parent meta info)
 *
 * @param  {Object} component - the Vue instance to get meta info from
 * @return {Object} - returned meta info
 */


function getMetaInfo(options, info, escapeSequences, component) {
  options = options || {};
  escapeSequences = escapeSequences || [];
  var _options = options,
      tagIDKeyName = _options.tagIDKeyName; // Remove all "template" tags from meta
  // backup the title chunk in case user wants access to it

  if (info.title) {
    info.titleChunk = info.title;
  } // replace title with populated template


  if (info.titleTemplate && info.titleTemplate !== '%s') {
    applyTemplate({
      component: component,
      contentKeyName: 'title'
    }, info, info.titleTemplate, info.titleChunk || '');
  } // convert base tag to an array so it can be handled the same way
  // as the other tags


  if (info.base) {
    info.base = Object.keys(info.base).length ? [info.base] : [];
  }

  if (info.meta) {
    // remove meta items with duplicate vmid's
    info.meta = info.meta.filter(function (metaItem, index, arr) {
      var hasVmid = !!metaItem[tagIDKeyName];

      if (!hasVmid) {
        return true;
      }

      var isFirstItemForVmid = index === findIndex(arr, function (item) {
        return item[tagIDKeyName] === metaItem[tagIDKeyName];
      });
      return isFirstItemForVmid;
    }); // apply templates if needed

    info.meta.forEach(function (metaObject) {
      return applyTemplate(options, metaObject);
    });
  }

  return escapeMetaInfo(options, info, escapeSequences);
}
/**
 * When called, will update the current meta info with new meta info.
 * Useful when updating meta info as the result of an asynchronous
 * action that resolves after the initial render takes place.
 *
 * Credit to [Sébastien Chopin](https://github.com/Atinux) for the suggestion
 * to implement this method.
 *
 * @return {Object} - new meta info
 */


function refresh(rootVm, options) {
  options = options || {}; // make sure vue-meta was initiated

  if (!rootVm[rootConfigKey]) {
    showWarningNotSupported();
    return {};
  } // collect & aggregate all metaInfo $options


  var rawInfo = getComponentMetaInfo(options, rootVm);
  var metaInfo = getMetaInfo(options, rawInfo, clientSequences, rootVm);
  var appId = rootVm[rootConfigKey].appId;
  var tags = updateClientMetaInfo(appId, options, metaInfo); // emit "event" with new info

  if (tags && isFunction(metaInfo.changed)) {
    metaInfo.changed(metaInfo, tags.tagsAdded, tags.tagsRemoved);
    tags = {
      addedTags: tags.tagsAdded,
      removedTags: tags.tagsRemoved
    };
  }

  var appsMetaInfo = getAppsMetaInfo();

  if (appsMetaInfo) {
    for (var additionalAppId in appsMetaInfo) {
      updateClientMetaInfo(additionalAppId, options, appsMetaInfo[additionalAppId]);
      delete appsMetaInfo[additionalAppId];
    }

    clearAppsMetaInfo(true);
  }

  return {
    vm: rootVm,
    metaInfo: metaInfo,
    // eslint-disable-line object-shorthand
    tags: tags
  };
}
/**
 * Generates tag attributes for use on the server.
 *
 * @param  {('bodyAttrs'|'htmlAttrs'|'headAttrs')} type - the type of attributes to generate
 * @param  {Object} data - the attributes to generate
 * @return {Object} - the attribute generator
 */


function attributeGenerator(options, type, data, _ref) {
  var addSsrAttribute = _ref.addSsrAttribute;

  var _ref2 = options || {},
      attribute = _ref2.attribute,
      ssrAttribute = _ref2.ssrAttribute;

  var attributeStr = '';

  for (var attr in data) {
    var attrData = data[attr];
    var attrValues = [];

    for (var appId in attrData) {
      attrValues.push.apply(attrValues, _toConsumableArray([].concat(attrData[appId])));
    }

    if (attrValues.length) {
      attributeStr += booleanHtmlAttributes.includes(attr) && attrValues.some(Boolean) ? "".concat(attr) : "".concat(attr, "=\"").concat(attrValues.join(' '), "\"");
      attributeStr += ' ';
    }
  }

  if (attributeStr) {
    attributeStr += "".concat(attribute, "=\"").concat(encodeURI(JSON.stringify(data)), "\"");
  }

  if (type === 'htmlAttrs' && addSsrAttribute) {
    return "".concat(ssrAttribute).concat(attributeStr ? ' ' : '').concat(attributeStr);
  }

  return attributeStr;
}
/**
 * Generates title output for the server
 *
 * @param  {'title'} type - the string "title"
 * @param  {String} data - the title text
 * @return {Object} - the title generator
 */


function titleGenerator(options, type, data, generatorOptions) {
  var _ref = generatorOptions || {},
      ln = _ref.ln;

  if (!data) {
    return '';
  }

  return "<".concat(type, ">").concat(data, "</").concat(type, ">").concat(ln ? '\n' : '');
}
/**
 * Generates meta, base, link, style, script, noscript tags for use on the server
 *
 * @param  {('meta'|'base'|'link'|'style'|'script'|'noscript')} the name of the tag
 * @param  {(Array<Object>|Object)} tags - an array of tag objects or a single object in case of base
 * @return {Object} - the tag generator
 */


function tagGenerator(options, type, tags, generatorOptions) {
  var _ref = options || {},
      ssrAppId = _ref.ssrAppId,
      attribute = _ref.attribute,
      tagIDKeyName = _ref.tagIDKeyName;

  var _ref2 = generatorOptions || {},
      appId = _ref2.appId,
      _ref2$isSSR = _ref2.isSSR,
      isSSR = _ref2$isSSR === void 0 ? true : _ref2$isSSR,
      _ref2$body = _ref2.body,
      body = _ref2$body === void 0 ? false : _ref2$body,
      _ref2$pbody = _ref2.pbody,
      pbody = _ref2$pbody === void 0 ? false : _ref2$pbody,
      _ref2$ln = _ref2.ln,
      ln = _ref2$ln === void 0 ? false : _ref2$ln;

  var dataAttributes = [tagIDKeyName].concat(_toConsumableArray(commonDataAttributes));

  if (!tags || !tags.length) {
    return '';
  } // build a string containing all tags of this type


  return tags.reduce(function (tagsStr, tag) {
    if (tag.skip) {
      return tagsStr;
    }

    var tagKeys = Object.keys(tag);

    if (tagKeys.length === 0) {
      return tagsStr; // Bail on empty tag object
    }

    if (Boolean(tag.body) !== body || Boolean(tag.pbody) !== pbody) {
      return tagsStr;
    }

    var attrs = tag.once ? '' : " ".concat(attribute, "=\"").concat(appId || (isSSR === false ? '1' : ssrAppId), "\""); // build a string containing all attributes of this tag

    for (var attr in tag) {
      // these attributes are treated as children on the tag
      if (tagAttributeAsInnerContent.includes(attr) || tagProperties.includes(attr)) {
        continue;
      }

      if (attr === 'callback') {
        attrs += ' onload="this.__vm_l=1"';
        continue;
      } // these form the attribute list for this tag


      var prefix = '';

      if (dataAttributes.includes(attr)) {
        prefix = 'data-';
      }

      var isBooleanAttr = !prefix && booleanHtmlAttributes.includes(attr);

      if (isBooleanAttr && !tag[attr]) {
        continue;
      }

      attrs += " ".concat(prefix).concat(attr) + (isBooleanAttr ? '' : "=\"".concat(tag[attr], "\""));
    }

    var json = '';

    if (tag.json) {
      json = JSON.stringify(tag.json);
    } // grab child content from one of these attributes, if possible


    var content = tag.innerHTML || tag.cssText || json; // generate tag exactly without any other redundant attribute
    // these tags have no end tag

    var hasEndTag = !tagsWithoutEndTag.includes(type); // these tag types will have content inserted

    var hasContent = hasEndTag && tagsWithInnerContent.includes(type); // the final string for this specific tag

    return "".concat(tagsStr, "<").concat(type).concat(attrs).concat(!hasContent && hasEndTag ? '/' : '', ">") + (hasContent ? "".concat(content, "</").concat(type, ">") : '') + (ln ? '\n' : '');
  }, '');
}
/**
 * Converts a meta info property to one that can be stringified on the server
 *
 * @param  {String} type - the type of data to convert
 * @param  {(String|Object|Array<Object>)} data - the data value
 * @return {Object} - the new injector
 */


function generateServerInjector(options, metaInfo, globalInjectOptions) {
  var serverInjector = {
    data: metaInfo,
    extraData: undefined,
    addInfo: function addInfo(appId, metaInfo) {
      this.extraData = this.extraData || {};
      this.extraData[appId] = metaInfo;
    },
    callInjectors: function callInjectors(opts) {
      var m = this.injectors; // only call title for the head

      return (opts.body || opts.pbody ? '' : m.title.text(opts)) + m.meta.text(opts) + m.base.text(opts) + m.link.text(opts) + m.style.text(opts) + m.script.text(opts) + m.noscript.text(opts);
    },
    injectors: {
      head: function head(ln) {
        return serverInjector.callInjectors(_objectSpread2(_objectSpread2({}, globalInjectOptions), {}, {
          ln: ln
        }));
      },
      bodyPrepend: function bodyPrepend(ln) {
        return serverInjector.callInjectors(_objectSpread2(_objectSpread2({}, globalInjectOptions), {}, {
          ln: ln,
          pbody: true
        }));
      },
      bodyAppend: function bodyAppend(ln) {
        return serverInjector.callInjectors(_objectSpread2(_objectSpread2({}, globalInjectOptions), {}, {
          ln: ln,
          body: true
        }));
      }
    }
  };

  var _loop = function _loop(type) {
    if (metaInfoOptionKeys.includes(type)) {
      return "continue";
    }

    serverInjector.injectors[type] = {
      text: function text(injectOptions) {
        var addSsrAttribute = injectOptions === true;
        injectOptions = _objectSpread2(_objectSpread2({
          addSsrAttribute: addSsrAttribute
        }, globalInjectOptions), injectOptions);

        if (type === 'title') {
          return titleGenerator(options, type, serverInjector.data[type], injectOptions);
        }

        if (metaInfoAttributeKeys.includes(type)) {
          var attributeData = {};
          var data = serverInjector.data[type];

          if (data) {
            var appId = injectOptions.isSSR === false ? '1' : options.ssrAppId;

            for (var attr in data) {
              attributeData[attr] = _defineProperty({}, appId, data[attr]);
            }
          }

          if (serverInjector.extraData) {
            for (var _appId in serverInjector.extraData) {
              var _data = serverInjector.extraData[_appId][type];

              if (_data) {
                for (var _attr in _data) {
                  attributeData[_attr] = _objectSpread2(_objectSpread2({}, attributeData[_attr]), {}, _defineProperty({}, _appId, _data[_attr]));
                }
              }
            }
          }

          return attributeGenerator(options, type, attributeData, injectOptions);
        }

        var str = tagGenerator(options, type, serverInjector.data[type], injectOptions);

        if (serverInjector.extraData) {
          for (var _appId2 in serverInjector.extraData) {
            var _data2 = serverInjector.extraData[_appId2][type];
            var extraStr = tagGenerator(options, type, _data2, _objectSpread2({
              appId: _appId2
            }, injectOptions));
            str = "".concat(str).concat(extraStr);
          }
        }

        return str;
      }
    };
  };

  for (var type in defaultInfo) {
    var _ret = _loop(type);

    if (_ret === "continue") continue;
  }

  return serverInjector;
}
/**
 * Converts the state of the meta info object such that each item
 * can be compiled to a tag string on the server
 *
 * @vm {Object} - Vue instance - ideally the root component
 * @return {Object} - server meta info with `toString` methods
 */


function inject(rootVm, options, injectOptions) {
  // make sure vue-meta was initiated
  if (!rootVm[rootConfigKey]) {
    showWarningNotSupported();
    return {};
  } // collect & aggregate all metaInfo $options


  var rawInfo = getComponentMetaInfo(options, rootVm);
  var metaInfo = getMetaInfo(options, rawInfo, serverSequences, rootVm); // generate server injector

  var serverInjector = generateServerInjector(options, metaInfo, injectOptions); // add meta info from additional apps

  var appsMetaInfo = getAppsMetaInfo();

  if (appsMetaInfo) {
    for (var additionalAppId in appsMetaInfo) {
      serverInjector.addInfo(additionalAppId, appsMetaInfo[additionalAppId]);
      delete appsMetaInfo[additionalAppId];
    }

    clearAppsMetaInfo(true);
  }

  return serverInjector.injectors;
}

function $meta(options) {
  options = options || {};
  /**
   * Returns an injector for server-side rendering.
   * @this {Object} - the Vue instance (a root component)
   * @return {Object} - injector
   */

  var $root = this.$root;
  return {
    getOptions: function getOptions$1() {
      return getOptions(options);
    },
    setOptions: function setOptions(newOptions) {
      var refreshNavKey = 'refreshOnceOnNavigation';

      if (newOptions && newOptions[refreshNavKey]) {
        options.refreshOnceOnNavigation = !!newOptions[refreshNavKey];
        addNavGuards($root);
      }

      var debounceWaitKey = 'debounceWait';

      if (newOptions && debounceWaitKey in newOptions) {
        var debounceWait = parseInt(newOptions[debounceWaitKey]);

        if (!isNaN(debounceWait)) {
          options.debounceWait = debounceWait;
        }
      }

      var waitOnDestroyedKey = 'waitOnDestroyed';

      if (newOptions && waitOnDestroyedKey in newOptions) {
        options.waitOnDestroyed = !!newOptions[waitOnDestroyedKey];
      }
    },
    refresh: function refresh$1() {
      return refresh($root, options);
    },
    inject: function inject$1(injectOptions) {
      return inject($root, options, injectOptions);
    },
    pause: function pause$1() {
      return pause($root);
    },
    resume: function resume$1() {
      return resume($root);
    },
    addApp: function addApp$1(appId) {
      return addApp($root, appId, options);
    }
  };
}

function generate(rawInfo, options) {
  options = setOptions(options);
  var metaInfo = getMetaInfo(options, rawInfo, serverSequences);
  var serverInjector = generateServerInjector(options, metaInfo);
  return serverInjector.injectors;
}
/**
 * Plugin install function.
 * @param {Function} Vue - the Vue constructor.
 */


function install(Vue, options) {
  if (Vue.__vuemeta_installed) {
    return;
  }

  Vue.__vuemeta_installed = true;
  options = setOptions(options);

  Vue.prototype.$meta = function () {
    return $meta.call(this, options);
  };

  Vue.mixin(createMixin(Vue, options));
}

var index = {
  version: version,
  install: install,
  generate: function generate$1(metaInfo, options) {
    return generate(metaInfo, options);
  },
  hasMetaInfo: hasMetaInfo
};
module.exports = index;

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = require$$23;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require$$24;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require$$25;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(39);
__webpack_require__(40);
module.exports = __webpack_require__(65);


/***/ }),
/* 39 */
/***/ (function(module, exports) {

globalThis.installComponents = function (component, components) {
  var options = typeof component.exports === 'function' ? component.exports.extendOptions : component.options;

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components;
  }

  options.components = options.components || {};

  for (var i in components) {
    options.components[i] = options.components[i] || components[i];
  }

  if (options.functional) {
    provideFunctionalComponents(component, options.components);
  }
};

var functionalPatchKey = '_functionalComponents';

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return;
  }

  component.exports[functionalPatchKey] = true;
  var render = component.exports.render;

  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b);
      }
    }));
  };
}

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
 // eslint-disable-line import/default



vue__WEBPACK_IMPORTED_MODULE_0__["default"].use(_vue_composition_api__WEBPACK_IMPORTED_MODULE_1__[/* default */ "f"].default || _vue_composition_api__WEBPACK_IMPORTED_MODULE_1__[/* default */ "f"]);
/* harmony default export */ __webpack_exports__["default"] = (Object(_app__WEBPACK_IMPORTED_MODULE_2__[/* defineNuxtPlugin */ "a"])(nuxtApp => {
  const _originalSetup = nuxtApp.nuxt2Context.app.setup;

  nuxtApp.nuxt2Context.app.setup = function (...args) {
    const result = _originalSetup instanceof Function ? _originalSetup(...args) : {};
    nuxtApp.hooks.callHookWith(hooks => hooks.map(hook => hook()), 'vue:setup');

    return result;
  };
}));

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = require$$26;

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require$$27;

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require$$28;

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require$$29;

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require$$30;

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require$$31;

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require$$32;

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require$$33;

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require$$34;

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require$$35;

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require$$36;

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require$$37;

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require$$38;

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require$$39;

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require$$40;

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_5_oneOf_1_0_css_loader_dist_cjs_js_ref_5_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_nuxt_components_dist_loader_js_ref_2_0_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_5_oneOf_1_0_css_loader_dist_cjs_js_ref_5_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_nuxt_components_dist_loader_js_ref_2_0_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_5_oneOf_1_0_css_loader_dist_cjs_js_ref_5_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_nuxt_components_dist_loader_js_ref_2_0_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }); }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vue_style_loader_index_js_ref_5_oneOf_1_0_css_loader_dist_cjs_js_ref_5_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_nuxt_components_dist_loader_js_ref_2_0_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _vue_style_loader_index_js_ref_5_oneOf_1_0_css_loader_dist_cjs_js_ref_5_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_nuxt_components_dist_loader_js_ref_2_0_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _vue_style_loader_index_js_ref_5_oneOf_1_0_css_loader_dist_cjs_js_ref_5_oneOf_1_1_vue_loader_lib_loaders_stylePostLoader_js_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_nuxt_components_dist_loader_js_ref_2_0_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }); }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#000;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(61);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(7).default("257f96f2", content, true);

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "html{-webkit-tap-highlight-color:transparent}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",Helvetica,Segoe UI,Arial,Roboto,\"PingFang SC\",miui,\"Hiragino Sans GB\",\"Microsoft Yahei\",sans-serif}a{text-decoration:none}button,input,textarea{color:inherit;font:inherit}[class*=van-]:focus,a:focus,button:focus,input:focus,textarea:focus{outline:0}ol,ul{margin:0;padding:0;list-style:none}.van-ellipsis{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.van-multi-ellipsis--l2{-webkit-line-clamp:2}.van-multi-ellipsis--l2,.van-multi-ellipsis--l3{display:-webkit-box;overflow:hidden;text-overflow:ellipsis;-webkit-box-orient:vertical}.van-multi-ellipsis--l3{-webkit-line-clamp:3}.van-clearfix:after{display:table;clear:both;content:\"\"}[class*=van-hairline]:after{position:absolute;box-sizing:border-box;content:\" \";pointer-events:none;top:-50%;right:-50%;bottom:-50%;left:-50%;border:0 solid #ebedf0;-webkit-transform:scale(.5);transform:scale(.5)}.van-hairline,.van-hairline--bottom,.van-hairline--left,.van-hairline--right,.van-hairline--surround,.van-hairline--top,.van-hairline--top-bottom{position:relative}.van-hairline--top:after{border-top-width:1px}.van-hairline--left:after{border-left-width:1px}.van-hairline--right:after{border-right-width:1px}.van-hairline--bottom:after{border-bottom-width:1px}.van-hairline--top-bottom:after,.van-hairline-unset--top-bottom:after{border-width:1px 0}.van-hairline--surround:after{border-width:1px}@-webkit-keyframes van-slide-up-enter{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@keyframes van-slide-up-enter{0%{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@-webkit-keyframes van-slide-up-leave{to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@keyframes van-slide-up-leave{to{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@-webkit-keyframes van-slide-down-enter{0%{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes van-slide-down-enter{0%{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes van-slide-down-leave{to{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@keyframes van-slide-down-leave{to{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes van-slide-left-enter{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes van-slide-left-enter{0%{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@-webkit-keyframes van-slide-left-leave{to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes van-slide-left-leave{to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@-webkit-keyframes van-slide-right-enter{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@keyframes van-slide-right-enter{0%{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@-webkit-keyframes van-slide-right-leave{to{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@keyframes van-slide-right-leave{to{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}}@-webkit-keyframes van-fade-in{0%{opacity:0}to{opacity:1}}@keyframes van-fade-in{0%{opacity:0}to{opacity:1}}@-webkit-keyframes van-fade-out{0%{opacity:1}to{opacity:0}}@keyframes van-fade-out{0%{opacity:1}to{opacity:0}}@-webkit-keyframes van-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes van-rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.van-fade-enter-active{-webkit-animation:van-fade-in .3s ease-out both;animation:van-fade-in .3s ease-out both}.van-fade-leave-active{-webkit-animation:van-fade-out .3s ease-in both;animation:van-fade-out .3s ease-in both}.van-slide-up-enter-active{-webkit-animation:van-slide-up-enter .3s ease-out both;animation:van-slide-up-enter .3s ease-out both}.van-slide-up-leave-active{-webkit-animation:van-slide-up-leave .3s ease-in both;animation:van-slide-up-leave .3s ease-in both}.van-slide-down-enter-active{-webkit-animation:van-slide-down-enter .3s ease-out both;animation:van-slide-down-enter .3s ease-out both}.van-slide-down-leave-active{-webkit-animation:van-slide-down-leave .3s ease-in both;animation:van-slide-down-leave .3s ease-in both}.van-slide-left-enter-active{-webkit-animation:van-slide-left-enter .3s ease-out both;animation:van-slide-left-enter .3s ease-out both}.van-slide-left-leave-active{-webkit-animation:van-slide-left-leave .3s ease-in both;animation:van-slide-left-leave .3s ease-in both}.van-slide-right-enter-active{-webkit-animation:van-slide-right-enter .3s ease-out both;animation:van-slide-right-enter .3s ease-out both}.van-slide-right-leave-active{-webkit-animation:van-slide-right-leave .3s ease-in both;animation:van-slide-right-leave .3s ease-in both}.van-overlay{position:fixed;top:0;left:0;z-index:1;width:100%;height:100%;background-color:rgba(0,0,0,.7)}.van-info{position:absolute;top:0;right:0;box-sizing:border-box;min-width:16px;padding:0 3px;color:#fff;font-weight:500;font-size:12px;font-family:-apple-system-font,Helvetica Neue,Arial,sans-serif;line-height:1.2;text-align:center;background-color:#ee0a24;border:1px solid #fff;border-radius:16px;-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%);-webkit-transform-origin:100%;transform-origin:100%}.van-info--dot{width:8px;min-width:0;height:8px;background-color:#ee0a24;border-radius:100%}.van-sidebar-item{position:relative;display:block;box-sizing:border-box;padding:20px 12px;overflow:hidden;color:#323233;font-size:14px;line-height:20px;background-color:#f7f8fa;cursor:pointer;-webkit-user-select:none;user-select:none}.van-sidebar-item:active{background-color:#f2f3f5}.van-sidebar-item__text{position:relative;display:inline-block;word-break:break-all}.van-sidebar-item:not(:last-child):after{border-bottom-width:1px}.van-sidebar-item--select{color:#323233;font-weight:500}.van-sidebar-item--select,.van-sidebar-item--select:active{background-color:#fff}.van-sidebar-item--select:before{position:absolute;top:50%;left:0;width:4px;height:16px;background-color:#ee0a24;-webkit-transform:translateY(-50%);transform:translateY(-50%);content:\"\"}.van-sidebar-item--disabled{color:#c8c9cc;cursor:not-allowed}.van-sidebar-item--disabled:active{background-color:#f7f8fa}.van-icon{position:relative;font:normal normal normal 14px/1 vant-icon;font-size:inherit;text-rendering:auto;-webkit-font-smoothing:antialiased}.van-icon,.van-icon:before{display:inline-block}.van-icon-exchange:before{content:\"\\e6af\"}.van-icon-eye:before{content:\"\\e6b0\"}.van-icon-enlarge:before{content:\"\\e6b1\"}.van-icon-expand-o:before{content:\"\\e6b2\"}.van-icon-eye-o:before{content:\"\\e6b3\"}.van-icon-expand:before{content:\"\\e6b4\"}.van-icon-filter-o:before{content:\"\\e6b5\"}.van-icon-fire:before{content:\"\\e6b6\"}.van-icon-fail:before{content:\"\\e6b7\"}.van-icon-failure:before{content:\"\\e6b8\"}.van-icon-fire-o:before{content:\"\\e6b9\"}.van-icon-flag-o:before{content:\"\\e6ba\"}.van-icon-font:before{content:\"\\e6bb\"}.van-icon-font-o:before{content:\"\\e6bc\"}.van-icon-gem-o:before{content:\"\\e6bd\"}.van-icon-flower-o:before{content:\"\\e6be\"}.van-icon-gem:before{content:\"\\e6bf\"}.van-icon-gift-card:before{content:\"\\e6c0\"}.van-icon-friends:before{content:\"\\e6c1\"}.van-icon-friends-o:before{content:\"\\e6c2\"}.van-icon-gold-coin:before{content:\"\\e6c3\"}.van-icon-gold-coin-o:before{content:\"\\e6c4\"}.van-icon-good-job-o:before{content:\"\\e6c5\"}.van-icon-gift:before{content:\"\\e6c6\"}.van-icon-gift-o:before{content:\"\\e6c7\"}.van-icon-gift-card-o:before{content:\"\\e6c8\"}.van-icon-good-job:before{content:\"\\e6c9\"}.van-icon-home-o:before{content:\"\\e6ca\"}.van-icon-goods-collect:before{content:\"\\e6cb\"}.van-icon-graphic:before{content:\"\\e6cc\"}.van-icon-goods-collect-o:before{content:\"\\e6cd\"}.van-icon-hot-o:before{content:\"\\e6ce\"}.van-icon-info:before{content:\"\\e6cf\"}.van-icon-hotel-o:before{content:\"\\e6d0\"}.van-icon-info-o:before{content:\"\\e6d1\"}.van-icon-hot-sale-o:before{content:\"\\e6d2\"}.van-icon-hot:before{content:\"\\e6d3\"}.van-icon-like:before{content:\"\\e6d4\"}.van-icon-idcard:before{content:\"\\e6d5\"}.van-icon-invitation:before{content:\"\\e6d6\"}.van-icon-like-o:before{content:\"\\e6d7\"}.van-icon-hot-sale:before{content:\"\\e6d8\"}.van-icon-location-o:before{content:\"\\e6d9\"}.van-icon-location:before{content:\"\\e6da\"}.van-icon-label:before{content:\"\\e6db\"}.van-icon-lock:before{content:\"\\e6dc\"}.van-icon-label-o:before{content:\"\\e6dd\"}.van-icon-map-marked:before{content:\"\\e6de\"}.van-icon-logistics:before{content:\"\\e6df\"}.van-icon-manager:before{content:\"\\e6e0\"}.van-icon-more:before{content:\"\\e6e1\"}.van-icon-live:before{content:\"\\e6e2\"}.van-icon-manager-o:before{content:\"\\e6e3\"}.van-icon-medal:before{content:\"\\e6e4\"}.van-icon-more-o:before{content:\"\\e6e5\"}.van-icon-music-o:before{content:\"\\e6e6\"}.van-icon-music:before{content:\"\\e6e7\"}.van-icon-new-arrival-o:before{content:\"\\e6e8\"}.van-icon-medal-o:before{content:\"\\e6e9\"}.van-icon-new-o:before{content:\"\\e6ea\"}.van-icon-free-postage:before{content:\"\\e6eb\"}.van-icon-newspaper-o:before{content:\"\\e6ec\"}.van-icon-new-arrival:before{content:\"\\e6ed\"}.van-icon-minus:before{content:\"\\e6ee\"}.van-icon-orders-o:before{content:\"\\e6ef\"}.van-icon-new:before{content:\"\\e6f0\"}.van-icon-paid:before{content:\"\\e6f1\"}.van-icon-notes-o:before{content:\"\\e6f2\"}.van-icon-other-pay:before{content:\"\\e6f3\"}.van-icon-pause-circle:before{content:\"\\e6f4\"}.van-icon-pause:before{content:\"\\e6f5\"}.van-icon-pause-circle-o:before{content:\"\\e6f6\"}.van-icon-peer-pay:before{content:\"\\e6f7\"}.van-icon-pending-payment:before{content:\"\\e6f8\"}.van-icon-passed:before{content:\"\\e6f9\"}.van-icon-plus:before{content:\"\\e6fa\"}.van-icon-phone-circle-o:before{content:\"\\e6fb\"}.van-icon-phone-o:before{content:\"\\e6fc\"}.van-icon-printer:before{content:\"\\e6fd\"}.van-icon-photo-fail:before{content:\"\\e6fe\"}.van-icon-phone:before{content:\"\\e6ff\"}.van-icon-photo-o:before{content:\"\\e700\"}.van-icon-play-circle:before{content:\"\\e701\"}.van-icon-play:before{content:\"\\e702\"}.van-icon-phone-circle:before{content:\"\\e703\"}.van-icon-point-gift-o:before{content:\"\\e704\"}.van-icon-point-gift:before{content:\"\\e705\"}.van-icon-play-circle-o:before{content:\"\\e706\"}.van-icon-shrink:before{content:\"\\e707\"}.van-icon-photo:before{content:\"\\e708\"}.van-icon-qr:before{content:\"\\e709\"}.van-icon-qr-invalid:before{content:\"\\e70a\"}.van-icon-question-o:before{content:\"\\e70b\"}.van-icon-revoke:before{content:\"\\e70c\"}.van-icon-replay:before{content:\"\\e70d\"}.van-icon-service:before{content:\"\\e70e\"}.van-icon-question:before{content:\"\\e70f\"}.van-icon-search:before{content:\"\\e710\"}.van-icon-refund-o:before{content:\"\\e711\"}.van-icon-service-o:before{content:\"\\e712\"}.van-icon-scan:before{content:\"\\e713\"}.van-icon-share:before{content:\"\\e714\"}.van-icon-send-gift-o:before{content:\"\\e715\"}.van-icon-share-o:before{content:\"\\e716\"}.van-icon-setting:before{content:\"\\e717\"}.van-icon-points:before{content:\"\\e718\"}.van-icon-photograph:before{content:\"\\e719\"}.van-icon-shop:before{content:\"\\e71a\"}.van-icon-shop-o:before{content:\"\\e71b\"}.van-icon-shop-collect-o:before{content:\"\\e71c\"}.van-icon-shop-collect:before{content:\"\\e71d\"}.van-icon-smile:before{content:\"\\e71e\"}.van-icon-shopping-cart-o:before{content:\"\\e71f\"}.van-icon-sign:before{content:\"\\e720\"}.van-icon-sort:before{content:\"\\e721\"}.van-icon-star-o:before{content:\"\\e722\"}.van-icon-smile-comment-o:before{content:\"\\e723\"}.van-icon-stop:before{content:\"\\e724\"}.van-icon-stop-circle-o:before{content:\"\\e725\"}.van-icon-smile-o:before{content:\"\\e726\"}.van-icon-star:before{content:\"\\e727\"}.van-icon-success:before{content:\"\\e728\"}.van-icon-stop-circle:before{content:\"\\e729\"}.van-icon-records:before{content:\"\\e72a\"}.van-icon-shopping-cart:before{content:\"\\e72b\"}.van-icon-tosend:before{content:\"\\e72c\"}.van-icon-todo-list:before{content:\"\\e72d\"}.van-icon-thumb-circle-o:before{content:\"\\e72e\"}.van-icon-thumb-circle:before{content:\"\\e72f\"}.van-icon-umbrella-circle:before{content:\"\\e730\"}.van-icon-underway:before{content:\"\\e731\"}.van-icon-upgrade:before{content:\"\\e732\"}.van-icon-todo-list-o:before{content:\"\\e733\"}.van-icon-tv-o:before{content:\"\\e734\"}.van-icon-underway-o:before{content:\"\\e735\"}.van-icon-user-o:before{content:\"\\e736\"}.van-icon-vip-card-o:before{content:\"\\e737\"}.van-icon-vip-card:before{content:\"\\e738\"}.van-icon-send-gift:before{content:\"\\e739\"}.van-icon-wap-home:before{content:\"\\e73a\"}.van-icon-wap-nav:before{content:\"\\e73b\"}.van-icon-volume-o:before{content:\"\\e73c\"}.van-icon-video:before{content:\"\\e73d\"}.van-icon-wap-home-o:before{content:\"\\e73e\"}.van-icon-volume:before{content:\"\\e73f\"}.van-icon-warning:before{content:\"\\e740\"}.van-icon-weapp-nav:before{content:\"\\e741\"}.van-icon-wechat-pay:before{content:\"\\e742\"}.van-icon-warning-o:before{content:\"\\e743\"}.van-icon-wechat:before{content:\"\\e744\"}.van-icon-setting-o:before{content:\"\\e745\"}.van-icon-youzan-shield:before{content:\"\\e746\"}.van-icon-warn-o:before{content:\"\\e747\"}.van-icon-smile-comment:before{content:\"\\e748\"}.van-icon-user-circle-o:before{content:\"\\e749\"}.van-icon-video-o:before{content:\"\\e74a\"}.van-icon-add-square:before{content:\"\\e65c\"}.van-icon-add:before{content:\"\\e65d\"}.van-icon-arrow-down:before{content:\"\\e65e\"}.van-icon-arrow-up:before{content:\"\\e65f\"}.van-icon-arrow:before{content:\"\\e660\"}.van-icon-after-sale:before{content:\"\\e661\"}.van-icon-add-o:before{content:\"\\e662\"}.van-icon-alipay:before{content:\"\\e663\"}.van-icon-ascending:before{content:\"\\e664\"}.van-icon-apps-o:before{content:\"\\e665\"}.van-icon-aim:before{content:\"\\e666\"}.van-icon-award:before{content:\"\\e667\"}.van-icon-arrow-left:before{content:\"\\e668\"}.van-icon-award-o:before{content:\"\\e669\"}.van-icon-audio:before{content:\"\\e66a\"}.van-icon-bag-o:before{content:\"\\e66b\"}.van-icon-balance-list:before{content:\"\\e66c\"}.van-icon-back-top:before{content:\"\\e66d\"}.van-icon-bag:before{content:\"\\e66e\"}.van-icon-balance-pay:before{content:\"\\e66f\"}.van-icon-balance-o:before{content:\"\\e670\"}.van-icon-bar-chart-o:before{content:\"\\e671\"}.van-icon-bars:before{content:\"\\e672\"}.van-icon-balance-list-o:before{content:\"\\e673\"}.van-icon-birthday-cake-o:before{content:\"\\e674\"}.van-icon-bookmark:before{content:\"\\e675\"}.van-icon-bill:before{content:\"\\e676\"}.van-icon-bell:before{content:\"\\e677\"}.van-icon-browsing-history-o:before{content:\"\\e678\"}.van-icon-browsing-history:before{content:\"\\e679\"}.van-icon-bookmark-o:before{content:\"\\e67a\"}.van-icon-bulb-o:before{content:\"\\e67b\"}.van-icon-bullhorn-o:before{content:\"\\e67c\"}.van-icon-bill-o:before{content:\"\\e67d\"}.van-icon-calendar-o:before{content:\"\\e67e\"}.van-icon-brush-o:before{content:\"\\e67f\"}.van-icon-card:before{content:\"\\e680\"}.van-icon-cart-o:before{content:\"\\e681\"}.van-icon-cart-circle:before{content:\"\\e682\"}.van-icon-cart-circle-o:before{content:\"\\e683\"}.van-icon-cart:before{content:\"\\e684\"}.van-icon-cash-on-deliver:before{content:\"\\e685\"}.van-icon-cash-back-record:before{content:\"\\e686\"}.van-icon-cashier-o:before{content:\"\\e687\"}.van-icon-chart-trending-o:before{content:\"\\e688\"}.van-icon-certificate:before{content:\"\\e689\"}.van-icon-chat:before{content:\"\\e68a\"}.van-icon-clear:before{content:\"\\e68b\"}.van-icon-chat-o:before{content:\"\\e68c\"}.van-icon-checked:before{content:\"\\e68d\"}.van-icon-clock:before{content:\"\\e68e\"}.van-icon-clock-o:before{content:\"\\e68f\"}.van-icon-close:before{content:\"\\e690\"}.van-icon-closed-eye:before{content:\"\\e691\"}.van-icon-circle:before{content:\"\\e692\"}.van-icon-cluster-o:before{content:\"\\e693\"}.van-icon-column:before{content:\"\\e694\"}.van-icon-comment-circle-o:before{content:\"\\e695\"}.van-icon-cluster:before{content:\"\\e696\"}.van-icon-comment:before{content:\"\\e697\"}.van-icon-comment-o:before{content:\"\\e698\"}.van-icon-comment-circle:before{content:\"\\e699\"}.van-icon-completed:before{content:\"\\e69a\"}.van-icon-credit-pay:before{content:\"\\e69b\"}.van-icon-coupon:before{content:\"\\e69c\"}.van-icon-debit-pay:before{content:\"\\e69d\"}.van-icon-coupon-o:before{content:\"\\e69e\"}.van-icon-contact:before{content:\"\\e69f\"}.van-icon-descending:before{content:\"\\e6a0\"}.van-icon-desktop-o:before{content:\"\\e6a1\"}.van-icon-diamond-o:before{content:\"\\e6a2\"}.van-icon-description:before{content:\"\\e6a3\"}.van-icon-delete:before{content:\"\\e6a4\"}.van-icon-diamond:before{content:\"\\e6a5\"}.van-icon-delete-o:before{content:\"\\e6a6\"}.van-icon-cross:before{content:\"\\e6a7\"}.van-icon-edit:before{content:\"\\e6a8\"}.van-icon-ellipsis:before{content:\"\\e6a9\"}.van-icon-down:before{content:\"\\e6aa\"}.van-icon-discount:before{content:\"\\e6ab\"}.van-icon-ecard-pay:before{content:\"\\e6ac\"}.van-icon-envelop-o:before{content:\"\\e6ae\"}.van-icon-shield-o:before{content:\"\\e74b\"}.van-icon-guide-o:before{content:\"\\e74c\"}@font-face{font-weight:400;font-family:vant-icon;font-style:normal;font-display:auto;src:url(\"data:font/woff2;charset=utf-8;base64,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\") format(\"woff2\"),url(//at.alicdn.com/t/font_2553510_61agzg96wm8.woff?t=1631948257467) format(\"woff\"),url(//at.alicdn.com/t/font_2553510_61agzg96wm8.ttf?t=1631948257467) format(\"truetype\")}.van-icon__image{width:1em;height:1em;object-fit:contain}.van-tabbar-item{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#646566;font-size:12px;line-height:1;cursor:pointer}.van-tabbar-item__icon{position:relative;margin-bottom:4px;font-size:22px}.van-tabbar-item__icon .van-icon{display:block}.van-tabbar-item__icon img{display:block;height:20px}.van-tabbar-item--active{color:#1989fa;background-color:#fff}.van-tabbar-item .van-info{margin-top:4px}.van-step{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;color:#969799;font-size:14px}.van-step__circle{display:block;width:5px;height:5px;background-color:#969799;border-radius:50%}.van-step__line{position:absolute;background-color:#ebedf0;-webkit-transition:background-color .3s;transition:background-color .3s}.van-step--horizontal{float:left}.van-step--horizontal:first-child .van-step__title{margin-left:0;-webkit-transform:none;transform:none}.van-step--horizontal:last-child{position:absolute;right:1px;width:auto}.van-step--horizontal:last-child .van-step__title{margin-left:0;-webkit-transform:none;transform:none}.van-step--horizontal:last-child .van-step__circle-container{right:-9px;left:auto}.van-step--horizontal .van-step__circle-container{position:absolute;top:30px;left:-8px;z-index:1;padding:0 8px;background-color:#fff;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.van-step--horizontal .van-step__title{display:inline-block;margin-left:3px;font-size:12px;-webkit-transform:translateX(-50%);transform:translateX(-50%)}@media (max-width:321px){.van-step--horizontal .van-step__title{font-size:11px}}.van-step--horizontal .van-step__line{top:30px;left:0;width:100%;height:1px}.van-step--horizontal .van-step__icon{display:block;font-size:12px}.van-step--horizontal .van-step--process{color:#323233}.van-step--vertical{display:block;float:none;padding:10px 10px 10px 0;line-height:18px}.van-step--vertical:not(:last-child):after{border-bottom-width:1px}.van-step--vertical .van-step__circle-container{position:absolute;top:19px;left:-15px;z-index:1;font-size:12px;line-height:1;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.van-step--vertical .van-step__line{top:16px;left:-15px;width:1px;height:100%}.van-step:last-child .van-step__line{width:0}.van-step--finish{color:#323233}.van-step--finish .van-step__circle,.van-step--finish .van-step__line{background-color:#07c160}.van-step__icon,.van-step__title{-webkit-transition:color .3s;transition:color .3s}.van-step__icon--active,.van-step__icon--finish,.van-step__title--active,.van-step__title--finish{color:#07c160}.van-rate{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;cursor:pointer;-webkit-user-select:none;user-select:none}.van-rate__item{position:relative}.van-rate__item:not(:last-child){padding-right:4px}.van-rate__icon{display:block;width:1em;color:#c8c9cc;font-size:20px}.van-rate__icon--half{position:absolute;top:0;left:0;width:.5em;overflow:hidden}.van-rate__icon--full{color:#ee0a24}.van-rate__icon--disabled{color:#c8c9cc}.van-rate--disabled{cursor:not-allowed}.van-rate--readonly{cursor:default}.van-notice-bar{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:40px;padding:0 16px;color:#ed6a0c;font-size:14px;line-height:24px;background-color:#fffbe8}.van-notice-bar__left-icon,.van-notice-bar__right-icon{min-width:24px;font-size:16px}.van-notice-bar__right-icon{text-align:right;cursor:pointer}.van-notice-bar__wrap{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:100%;overflow:hidden}.van-notice-bar__content{position:absolute;white-space:nowrap;-webkit-transition-timing-function:linear;transition-timing-function:linear}.van-notice-bar__content.van-ellipsis{max-width:100%}.van-notice-bar--wrapable{height:auto;padding:8px 16px}.van-notice-bar--wrapable .van-notice-bar__wrap{height:auto}.van-notice-bar--wrapable .van-notice-bar__content{position:relative;white-space:normal;word-wrap:break-word}.van-nav-bar{position:relative;z-index:1;line-height:22px;text-align:center;background-color:#fff;-webkit-user-select:none;user-select:none}.van-nav-bar--fixed{position:fixed;top:0;left:0;width:100%}.van-nav-bar--safe-area-inset-top{padding-top:env(safe-area-inset-top)}.van-nav-bar .van-icon{color:#1989fa}.van-nav-bar__content{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;height:46px}.van-nav-bar__arrow{margin-right:4px;font-size:16px}.van-nav-bar__title{max-width:60%;margin:0 auto;color:#323233;font-weight:500;font-size:16px}.van-nav-bar__left,.van-nav-bar__right{position:absolute;top:0;bottom:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 16px;font-size:14px;cursor:pointer}.van-nav-bar__left:active,.van-nav-bar__right:active{opacity:.7}.van-nav-bar__left{left:0}.van-nav-bar__right{right:0}.van-nav-bar__text{color:#1989fa}.van-grid-item{position:relative;box-sizing:border-box}.van-grid-item--square{height:0}.van-grid-item__icon{font-size:28px}.van-grid-item__icon-wrapper{position:relative}.van-grid-item__text{color:#646566;font-size:12px;line-height:1.5;word-break:break-all}.van-grid-item__icon+.van-grid-item__text{margin-top:8px}.van-grid-item__content{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;box-sizing:border-box;height:100%;padding:16px 8px;background-color:#fff}.van-grid-item__content:after{z-index:1;border-width:0 1px 1px 0}.van-grid-item__content--square{position:absolute;top:0;right:0;left:0}.van-grid-item__content--center{-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.van-grid-item__content--horizontal{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.van-grid-item__content--horizontal .van-grid-item__icon+.van-grid-item__text{margin-top:0;margin-left:8px}.van-grid-item__content--surround:after{border-width:1px}.van-grid-item__content--clickable{cursor:pointer}.van-grid-item__content--clickable:active{background-color:#f2f3f5}.van-goods-action-icon{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;min-width:48px;height:100%;color:#646566;font-size:10px;line-height:1;text-align:center;background-color:#fff;cursor:pointer}.van-goods-action-icon:active{background-color:#f2f3f5}.van-goods-action-icon__icon{position:relative;width:1em;margin:0 auto 5px;color:#323233;font-size:18px}.van-checkbox{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden;cursor:pointer;-webkit-user-select:none;user-select:none}.van-checkbox--disabled{cursor:not-allowed}.van-checkbox--label-disabled{cursor:default}.van-checkbox--horizontal{margin-right:12px}.van-checkbox__icon{-webkit-box-flex:0;-webkit-flex:none;flex:none;height:1em;font-size:20px;line-height:1em;cursor:pointer}.van-checkbox__icon .van-icon{display:block;box-sizing:border-box;width:1.25em;height:1.25em;color:transparent;font-size:.8em;line-height:1.25;text-align:center;border:1px solid #c8c9cc;-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-property:color,border-color,background-color;transition-property:color,border-color,background-color}.van-checkbox__icon--round .van-icon{border-radius:100%}.van-checkbox__icon--checked .van-icon{color:#fff;background-color:#1989fa;border-color:#1989fa}.van-checkbox__icon--disabled{cursor:not-allowed}.van-checkbox__icon--disabled .van-icon{background-color:#ebedf0;border-color:#c8c9cc}.van-checkbox__icon--disabled.van-checkbox__icon--checked .van-icon{color:#c8c9cc}.van-checkbox__label{margin-left:8px;color:#323233;line-height:20px}.van-checkbox__label--left{margin:0 8px 0 0}.van-checkbox__label--disabled{color:#c8c9cc}.van-coupon{margin:0 12px 12px;overflow:hidden;background-color:#fff;border-radius:8px;box-shadow:0 0 4px rgba(0,0,0,.1)}.van-coupon:active{background-color:#f2f3f5}.van-coupon__content{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-sizing:border-box;min-height:84px;padding:14px 0;color:#323233}.van-coupon__head{position:relative;min-width:96px;padding:0 8px;color:#ee0a24;text-align:center}.van-coupon__amount,.van-coupon__condition,.van-coupon__name,.van-coupon__valid{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.van-coupon__amount{margin-bottom:6px;font-weight:500;font-size:30px}.van-coupon__amount span{font-weight:400;font-size:40%}.van-coupon__amount span:not(:empty){margin-left:2px}.van-coupon__condition{font-size:12px;line-height:16px;white-space:pre-wrap}.van-coupon__body{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;border-radius:0 8px 8px 0}.van-coupon__name{margin-bottom:10px;font-weight:700;font-size:14px;line-height:20px}.van-coupon__valid{font-size:12px}.van-coupon__corner{position:absolute;top:0;right:16px;bottom:0}.van-coupon__description{padding:8px 16px;font-size:12px;border-top:1px dashed #ebedf0}.van-coupon--disabled:active{background-color:#fff}.van-coupon--disabled .van-coupon-item__content{height:74px}.van-coupon--disabled .van-coupon__head{color:inherit}.van-image{position:relative;display:inline-block}.van-image--round{overflow:hidden;border-radius:50%}.van-image--round img{border-radius:inherit}.van-image__error,.van-image__img,.van-image__loading{display:block;width:100%;height:100%}.van-image__error,.van-image__loading{position:absolute;top:0;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#969799;font-size:14px;background-color:#f7f8fa}.van-image__error-icon,.van-image__loading-icon{color:#dcdee0;font-size:32px}.van-radio{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;overflow:hidden;cursor:pointer;-webkit-user-select:none;user-select:none}.van-radio--disabled{cursor:not-allowed}.van-radio--label-disabled{cursor:default}.van-radio--horizontal{margin-right:12px}.van-radio__icon{-webkit-box-flex:0;-webkit-flex:none;flex:none;height:1em;font-size:20px;line-height:1em;cursor:pointer}.van-radio__icon .van-icon{display:block;box-sizing:border-box;width:1.25em;height:1.25em;color:transparent;font-size:.8em;line-height:1.25;text-align:center;border:1px solid #c8c9cc;-webkit-transition-duration:.2s;transition-duration:.2s;-webkit-transition-property:color,border-color,background-color;transition-property:color,border-color,background-color}.van-radio__icon--round .van-icon{border-radius:100%}.van-radio__icon--checked .van-icon{color:#fff;background-color:#1989fa;border-color:#1989fa}.van-radio__icon--disabled{cursor:not-allowed}.van-radio__icon--disabled .van-icon{background-color:#ebedf0;border-color:#c8c9cc}.van-radio__icon--disabled.van-radio__icon--checked .van-icon{color:#c8c9cc}.van-radio__label{margin-left:8px;color:#323233;line-height:20px}.van-radio__label--left{margin:0 8px 0 0}.van-radio__label--disabled{color:#c8c9cc}.van-tag{position:relative;display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:0 4px;color:#fff;font-size:12px;line-height:16px;border-radius:2px}.van-tag--default{background-color:#969799}.van-tag--default.van-tag--plain{color:#969799}.van-tag--danger{background-color:#ee0a24}.van-tag--danger.van-tag--plain{color:#ee0a24}.van-tag--primary{background-color:#1989fa}.van-tag--primary.van-tag--plain{color:#1989fa}.van-tag--success{background-color:#07c160}.van-tag--success.van-tag--plain{color:#07c160}.van-tag--warning{background-color:#ff976a}.van-tag--warning.van-tag--plain{color:#ff976a}.van-tag--plain{background-color:#fff;border-color:currentColor}.van-tag--plain:before{position:absolute;top:0;right:0;bottom:0;left:0;border:1px solid;border-color:inherit;border-radius:inherit;content:\"\";pointer-events:none}.van-tag--medium{padding:2px 6px}.van-tag--large{padding:4px 8px;font-size:14px;border-radius:4px}.van-tag--mark{border-radius:0 999px 999px 0}.van-tag--mark:after{display:block;width:2px;content:\"\"}.van-tag--round{border-radius:999px}.van-tag__close{margin-left:2px;cursor:pointer}.van-card{position:relative;box-sizing:border-box;padding:8px 16px;color:#323233;font-size:12px;background-color:#fafafa}.van-card:not(:first-child){margin-top:8px}.van-card__header{display:-webkit-box;display:-webkit-flex;display:flex}.van-card__thumb{position:relative;-webkit-box-flex:0;-webkit-flex:none;flex:none;width:88px;height:88px;margin-right:8px}.van-card__thumb img{border-radius:8px}.van-card__content{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;min-width:0;min-height:88px}.van-card__content--centered{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.van-card__desc,.van-card__title{word-wrap:break-word}.van-card__title{max-height:32px;font-weight:500;line-height:16px}.van-card__desc{max-height:20px;color:#646566}.van-card__bottom,.van-card__desc{line-height:20px}.van-card__price{display:inline-block;color:#323233;font-weight:500;font-size:12px}.van-card__price-integer{font-size:16px}.van-card__price-decimal,.van-card__price-integer{font-family:Avenir-Heavy,PingFang SC,Helvetica Neue,Arial,sans-serif}.van-card__origin-price{display:inline-block;margin-left:5px;color:#969799;font-size:10px;text-decoration:line-through}.van-card__num{float:right;color:#969799}.van-card__tag{position:absolute;top:2px;left:0}.van-card__footer{-webkit-box-flex:0;-webkit-flex:none;flex:none;text-align:right}.van-card__footer .van-button{margin-left:5px}.van-cell{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;box-sizing:border-box;width:100%;padding:10px 16px;overflow:hidden;color:#323233;font-size:14px;line-height:24px;background-color:#fff}.van-cell:after{position:absolute;box-sizing:border-box;content:\" \";pointer-events:none;right:16px;bottom:0;left:16px;border-bottom:1px solid #ebedf0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.van-cell--borderless:after,.van-cell:last-child:after{display:none}.van-cell__label{margin-top:4px;color:#969799;font-size:12px;line-height:18px}.van-cell__title,.van-cell__value{-webkit-box-flex:1;-webkit-flex:1;flex:1}.van-cell__value{position:relative;overflow:hidden;color:#969799;text-align:right;vertical-align:middle;word-wrap:break-word}.van-cell__value--alone{color:#323233;text-align:left}.van-cell__left-icon,.van-cell__right-icon{height:24px;font-size:16px;line-height:24px}.van-cell__left-icon{margin-right:4px}.van-cell__right-icon{margin-left:4px;color:#969799}.van-cell--clickable{cursor:pointer}.van-cell--clickable:active{background-color:#f2f3f5}.van-cell--required{overflow:visible}.van-cell--required:before{position:absolute;left:8px;color:#ee0a24;font-size:14px;content:\"*\"}.van-cell--center{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.van-cell--large{padding-top:12px;padding-bottom:12px}.van-cell--large .van-cell__title{font-size:16px}.van-cell--large .van-cell__label{font-size:14px}.van-coupon-cell__value--selected{color:#323233}.van-contact-card{padding:16px}.van-contact-card__value{margin-left:5px;line-height:20px}.van-contact-card--add .van-contact-card__value{line-height:40px}.van-contact-card--add .van-cell__left-icon{color:#1989fa;font-size:40px}.van-contact-card:before{position:absolute;right:0;bottom:0;left:0;height:2px;background:-webkit-repeating-linear-gradient(135deg,#ff6c6c,#ff6c6c 20%,transparent 0,transparent 25%,#1989fa 0,#1989fa 45%,transparent 0,transparent 50%);background:repeating-linear-gradient(-45deg,#ff6c6c,#ff6c6c 20%,transparent 0,transparent 25%,#1989fa 0,#1989fa 45%,transparent 0,transparent 50%);background-size:80px;content:\"\"}.van-collapse-item{position:relative}.van-collapse-item--border:after{position:absolute;box-sizing:border-box;content:\" \";pointer-events:none;top:0;right:16px;left:16px;border-top:1px solid #ebedf0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.van-collapse-item__title .van-cell__right-icon:before{-webkit-transform:rotate(90deg) translateZ(0);transform:rotate(90deg) translateZ(0);-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s, -webkit-transform .3s;transition:transform .3s,-webkit-transform .3s}.van-collapse-item__title:after{right:16px;display:none}.van-collapse-item__title--expanded .van-cell__right-icon:before{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}.van-collapse-item__title--expanded:after{display:block}.van-collapse-item__title--borderless:after{display:none}.van-collapse-item__title--disabled{cursor:not-allowed}.van-collapse-item__title--disabled,.van-collapse-item__title--disabled .van-cell__right-icon{color:#c8c9cc}.van-collapse-item__title--disabled:active{background-color:#fff}.van-collapse-item__wrapper{overflow:hidden;-webkit-transition:height .3s ease-in-out;transition:height .3s ease-in-out;will-change:height}.van-collapse-item__content{padding:12px 16px;color:#969799;font-size:14px;line-height:1.5;background-color:#fff}.van-field__label{-webkit-box-flex:0;-webkit-flex:none;flex:none;box-sizing:border-box;width:6.2em;margin-right:12px;color:#646566;text-align:left;word-wrap:break-word}.van-field__label--center{text-align:center}.van-field__label--right{text-align:right}.van-field--disabled .van-field__label{color:#c8c9cc}.van-field__value{overflow:visible}.van-field__body{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.van-field__control{display:block;box-sizing:border-box;width:100%;min-width:0;margin:0;padding:0;color:#323233;line-height:inherit;text-align:left;background-color:transparent;border:0;resize:none}.van-field__control::-webkit-input-placeholder{color:#c8c9cc}.van-field__control::placeholder{color:#c8c9cc}.van-field__control:disabled{color:#c8c9cc;cursor:not-allowed;opacity:1;-webkit-text-fill-color:#c8c9cc}.van-field__control:read-only{cursor:default}.van-field__control--center{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;text-align:center}.van-field__control--right{-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;text-align:right}.van-field__control--custom{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;min-height:24px}.van-field__control[type=date],.van-field__control[type=datetime-local],.van-field__control[type=time]{min-height:24px}.van-field__control[type=search]{-webkit-appearance:none}.van-field__button,.van-field__clear,.van-field__icon,.van-field__right-icon{-webkit-flex-shrink:0;flex-shrink:0}.van-field__clear,.van-field__right-icon{margin-right:-8px;padding:0 8px;line-height:inherit}.van-field__clear{color:#c8c9cc;font-size:16px;cursor:pointer}.van-field__left-icon .van-icon,.van-field__right-icon .van-icon{display:block;font-size:16px;line-height:inherit}.van-field__left-icon{margin-right:4px}.van-field__right-icon{color:#969799}.van-field__button{padding-left:8px}.van-field__error-message{color:#ee0a24;font-size:12px;text-align:left}.van-field__error-message--center{text-align:center}.van-field__error-message--right{text-align:right}.van-field__word-limit{margin-top:4px;color:#646566;font-size:12px;line-height:16px;text-align:right}.van-field--error .van-field__control::-webkit-input-placeholder{color:#ee0a24;-webkit-text-fill-color:currentColor}.van-field--error .van-field__control,.van-field--error .van-field__control::placeholder{color:#ee0a24;-webkit-text-fill-color:currentColor}.van-field--min-height .van-field__control{min-height:60px}.van-search{-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-sizing:border-box;padding:10px 12px;background-color:#fff}.van-search,.van-search__content{display:-webkit-box;display:-webkit-flex;display:flex}.van-search__content{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding-left:12px;background-color:#f7f8fa;border-radius:2px}.van-search__content--round{border-radius:999px}.van-search__label{padding:0 5px;color:#323233;font-size:14px;line-height:34px}.van-search .van-cell{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:5px 8px 5px 0;background-color:transparent}.van-search .van-cell__left-icon{color:#969799}.van-search--show-action{padding-right:0}.van-search input::-webkit-search-cancel-button,.van-search input::-webkit-search-decoration,.van-search input::-webkit-search-results-button,.van-search input::-webkit-search-results-decoration{display:none}.van-search__action{padding:0 8px;color:#323233;font-size:14px;line-height:34px;cursor:pointer;-webkit-user-select:none;user-select:none}.van-search__action:active{background-color:#f2f3f5}.van-overflow-hidden{overflow:hidden!important}.van-popup{position:fixed;max-height:100%;overflow-y:auto;background-color:#fff;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s, -webkit-transform .3s;transition:transform .3s,-webkit-transform .3s;-webkit-overflow-scrolling:touch}.van-popup--center{top:50%;left:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}.van-popup--center.van-popup--round{border-radius:16px}.van-popup--top{top:0;left:0;width:100%}.van-popup--top.van-popup--round{border-radius:0 0 16px 16px}.van-popup--right{top:50%;right:0;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.van-popup--right.van-popup--round{border-radius:16px 0 0 16px}.van-popup--bottom{bottom:0;left:0;width:100%}.van-popup--bottom.van-popup--round{border-radius:16px 16px 0 0}.van-popup--left{top:50%;left:0;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.van-popup--left.van-popup--round{border-radius:0 16px 16px 0}.van-popup--safe-area-inset-bottom{padding-bottom:env(safe-area-inset-bottom)}.van-popup-slide-bottom-enter-active,.van-popup-slide-left-enter-active,.van-popup-slide-right-enter-active,.van-popup-slide-top-enter-active{-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}.van-popup-slide-bottom-leave-active,.van-popup-slide-left-leave-active,.van-popup-slide-right-leave-active,.van-popup-slide-top-leave-active{-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in}.van-popup-slide-top-enter,.van-popup-slide-top-leave-active{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}.van-popup-slide-right-enter,.van-popup-slide-right-leave-active{-webkit-transform:translate3d(100%,-50%,0);transform:translate3d(100%,-50%,0)}.van-popup-slide-bottom-enter,.van-popup-slide-bottom-leave-active{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}.van-popup-slide-left-enter,.van-popup-slide-left-leave-active{-webkit-transform:translate3d(-100%,-50%,0);transform:translate3d(-100%,-50%,0)}.van-popup__close-icon{position:absolute;z-index:1;color:#c8c9cc;font-size:22px;cursor:pointer}.van-popup__close-icon:active{color:#969799}.van-popup__close-icon--top-left{top:16px;left:16px}.van-popup__close-icon--top-right{top:16px;right:16px}.van-popup__close-icon--bottom-left{bottom:16px;left:16px}.van-popup__close-icon--bottom-right{right:16px;bottom:16px}.van-share-sheet__header{padding:12px 16px 4px;text-align:center}.van-share-sheet__title{margin-top:8px;color:#323233;font-weight:400;font-size:14px;line-height:20px}.van-share-sheet__description{display:block;margin-top:8px;color:#969799;font-size:12px;line-height:16px}.van-share-sheet__options{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;padding:16px 0 16px 8px;overflow-x:auto;overflow-y:visible;-webkit-overflow-scrolling:touch}.van-share-sheet__options--border:before{position:absolute;box-sizing:border-box;content:\" \";pointer-events:none;top:0;right:0;left:16px;border-top:1px solid #ebedf0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.van-share-sheet__options::-webkit-scrollbar{height:0}.van-share-sheet__option{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;cursor:pointer;-webkit-user-select:none;user-select:none}.van-share-sheet__option:active{opacity:.7}.van-share-sheet__icon{width:48px;height:48px;margin:0 16px}.van-share-sheet__name{margin-top:8px;padding:0 4px;color:#646566;font-size:12px}.van-share-sheet__option-description{padding:0 4px;color:#c8c9cc;font-size:12px}.van-share-sheet__cancel{display:block;width:100%;padding:0;font-size:16px;line-height:48px;text-align:center;background:#fff;border:none;cursor:pointer}.van-share-sheet__cancel:before{display:block;height:8px;background-color:#f7f8fa;content:\" \"}.van-share-sheet__cancel:active{background-color:#f2f3f5}.van-popover{position:absolute;overflow:visible;background-color:transparent;-webkit-transition:opacity .15s,-webkit-transform .15s;transition:opacity .15s,-webkit-transform .15s;transition:opacity .15s,transform .15s;transition:opacity .15s,transform .15s,-webkit-transform .15s}.van-popover__wrapper{display:inline-block}.van-popover__arrow{position:absolute;width:0;height:0;border:6px solid transparent}.van-popover__content{overflow:hidden;border-radius:8px}.van-popover__action{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-sizing:border-box;width:128px;height:44px;padding:0 16px;font-size:14px;line-height:20px;cursor:pointer}.van-popover__action:last-child .van-popover__action-text:after{display:none}.van-popover__action-text{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:100%}.van-popover__action-icon{margin-right:8px;font-size:20px}.van-popover__action--with-icon .van-popover__action-text{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.van-popover[data-popper-placement^=top] .van-popover__arrow{bottom:0;border-top-color:currentColor;border-bottom-width:0;-webkit-transform:translate(-50%,100%);transform:translate(-50%,100%)}.van-popover[data-popper-placement=top]{-webkit-transform-origin:50% 100%;transform-origin:50% 100%}.van-popover[data-popper-placement=top] .van-popover__arrow{left:50%}.van-popover[data-popper-placement=top-start]{-webkit-transform-origin:0 100%;transform-origin:0 100%}.van-popover[data-popper-placement=top-start] .van-popover__arrow{left:16px}.van-popover[data-popper-placement=top-end]{-webkit-transform-origin:100% 100%;transform-origin:100% 100%}.van-popover[data-popper-placement=top-end] .van-popover__arrow{right:16px}.van-popover[data-popper-placement^=left] .van-popover__arrow{right:0;border-right-width:0;border-left-color:currentColor;-webkit-transform:translate(100%,-50%);transform:translate(100%,-50%)}.van-popover[data-popper-placement=left]{-webkit-transform-origin:100% 50%;transform-origin:100% 50%}.van-popover[data-popper-placement=left] .van-popover__arrow{top:50%}.van-popover[data-popper-placement=left-start]{-webkit-transform-origin:100% 0;transform-origin:100% 0}.van-popover[data-popper-placement=left-start] .van-popover__arrow{top:16px}.van-popover[data-popper-placement=left-end]{-webkit-transform-origin:100% 100%;transform-origin:100% 100%}.van-popover[data-popper-placement=left-end] .van-popover__arrow{bottom:16px}.van-popover[data-popper-placement^=right] .van-popover__arrow{left:0;border-right-color:currentColor;border-left-width:0;-webkit-transform:translate(-100%,-50%);transform:translate(-100%,-50%)}.van-popover[data-popper-placement=right]{-webkit-transform-origin:0 50%;transform-origin:0 50%}.van-popover[data-popper-placement=right] .van-popover__arrow{top:50%}.van-popover[data-popper-placement=right-start]{-webkit-transform-origin:0 0;transform-origin:0 0}.van-popover[data-popper-placement=right-start] .van-popover__arrow{top:16px}.van-popover[data-popper-placement=right-end]{-webkit-transform-origin:0 100%;transform-origin:0 100%}.van-popover[data-popper-placement=right-end] .van-popover__arrow{bottom:16px}.van-popover[data-popper-placement^=bottom] .van-popover__arrow{top:0;border-top-width:0;border-bottom-color:currentColor;-webkit-transform:translate(-50%,-100%);transform:translate(-50%,-100%)}.van-popover[data-popper-placement=bottom]{-webkit-transform-origin:50% 0;transform-origin:50% 0}.van-popover[data-popper-placement=bottom] .van-popover__arrow{left:50%}.van-popover[data-popper-placement=bottom-start]{-webkit-transform-origin:0 0;transform-origin:0 0}.van-popover[data-popper-placement=bottom-start] .van-popover__arrow{left:16px}.van-popover[data-popper-placement=bottom-end]{-webkit-transform-origin:100% 0;transform-origin:100% 0}.van-popover[data-popper-placement=bottom-end] .van-popover__arrow{right:16px}.van-popover--light{color:#323233}.van-popover--light .van-popover__content{background-color:#fff;box-shadow:0 2px 12px rgba(50,50,51,.12)}.van-popover--light .van-popover__arrow{color:#fff}.van-popover--light .van-popover__action:active{background-color:#f2f3f5}.van-popover--light .van-popover__action--disabled{color:#c8c9cc;cursor:not-allowed}.van-popover--light .van-popover__action--disabled:active{background-color:transparent}.van-popover--dark{color:#fff}.van-popover--dark .van-popover__content{background-color:#4a4a4a}.van-popover--dark .van-popover__arrow{color:#4a4a4a}.van-popover--dark .van-popover__action:active{background-color:rgba(0,0,0,.2)}.van-popover--dark .van-popover__action--disabled{color:#969799}.van-popover--dark .van-popover__action--disabled:active{background-color:transparent}.van-popover--dark .van-popover__action-text:after{border-color:#646566}.van-popover-zoom-enter,.van-popover-zoom-leave-active{-webkit-transform:scale(.8);transform:scale(.8);opacity:0}.van-popover-zoom-enter-active{-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out}.van-popover-zoom-leave-active{-webkit-transition-timing-function:ease-in;transition-timing-function:ease-in}.van-notify{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;box-sizing:border-box;padding:8px 16px;color:#fff;font-size:14px;line-height:20px;white-space:pre-wrap;text-align:center;word-wrap:break-word}.van-notify--primary{background-color:#1989fa}.van-notify--success{background-color:#07c160}.van-notify--danger{background-color:#ee0a24}.van-notify--warning{background-color:#ff976a}.van-dropdown-item{position:fixed;right:0;left:0;z-index:10;overflow:hidden}.van-dropdown-item__icon{display:block;line-height:inherit}.van-dropdown-item__option{text-align:left}.van-dropdown-item__option--active,.van-dropdown-item__option--active .van-dropdown-item__icon{color:#ee0a24}.van-dropdown-item--up{top:0}.van-dropdown-item--down{bottom:0}.van-dropdown-item__content{position:absolute;max-height:80%}.van-loading{color:#c8c9cc;font-size:0}.van-loading,.van-loading__spinner{position:relative;vertical-align:middle}.van-loading__spinner{display:inline-block;width:30px;max-width:100%;height:30px;max-height:100%;-webkit-animation:van-rotate .8s linear infinite;animation:van-rotate .8s linear infinite}.van-loading__spinner--spinner{-webkit-animation-timing-function:steps(12);animation-timing-function:steps(12)}.van-loading__spinner--spinner i{position:absolute;top:0;left:0;width:100%;height:100%}.van-loading__spinner--spinner i:before{display:block;width:2px;height:25%;margin:0 auto;background-color:currentColor;border-radius:40%;content:\" \"}.van-loading__spinner--circular{-webkit-animation-duration:2s;animation-duration:2s}.van-loading__circular{display:block;width:100%;height:100%}.van-loading__circular circle{-webkit-animation:van-circular 1.5s ease-in-out infinite;animation:van-circular 1.5s ease-in-out infinite;stroke:currentColor;stroke-width:3;stroke-linecap:round}.van-loading__text{display:inline-block;margin-left:8px;color:#969799;font-size:14px;vertical-align:middle}.van-loading--vertical{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center}.van-loading--vertical .van-loading__text{margin:8px 0 0}@-webkit-keyframes van-circular{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-40}to{stroke-dasharray:90,150;stroke-dashoffset:-120}}@keyframes van-circular{0%{stroke-dasharray:1,200;stroke-dashoffset:0}50%{stroke-dasharray:90,150;stroke-dashoffset:-40}to{stroke-dasharray:90,150;stroke-dashoffset:-120}}.van-loading__spinner--spinner i:first-of-type{-webkit-transform:rotate(30deg);transform:rotate(30deg);opacity:1}.van-loading__spinner--spinner i:nth-of-type(2){-webkit-transform:rotate(60deg);transform:rotate(60deg);opacity:.9375}.van-loading__spinner--spinner i:nth-of-type(3){-webkit-transform:rotate(90deg);transform:rotate(90deg);opacity:.875}.van-loading__spinner--spinner i:nth-of-type(4){-webkit-transform:rotate(120deg);transform:rotate(120deg);opacity:.8125}.van-loading__spinner--spinner i:nth-of-type(5){-webkit-transform:rotate(150deg);transform:rotate(150deg);opacity:.75}.van-loading__spinner--spinner i:nth-of-type(6){-webkit-transform:rotate(180deg);transform:rotate(180deg);opacity:.6875}.van-loading__spinner--spinner i:nth-of-type(7){-webkit-transform:rotate(210deg);transform:rotate(210deg);opacity:.625}.van-loading__spinner--spinner i:nth-of-type(8){-webkit-transform:rotate(240deg);transform:rotate(240deg);opacity:.5625}.van-loading__spinner--spinner i:nth-of-type(9){-webkit-transform:rotate(270deg);transform:rotate(270deg);opacity:.5}.van-loading__spinner--spinner i:nth-of-type(10){-webkit-transform:rotate(300deg);transform:rotate(300deg);opacity:.4375}.van-loading__spinner--spinner i:nth-of-type(11){-webkit-transform:rotate(330deg);transform:rotate(330deg);opacity:.375}.van-loading__spinner--spinner i:nth-of-type(12){-webkit-transform:rotate(1turn);transform:rotate(1turn);opacity:.3125}.van-pull-refresh{overflow:hidden;-webkit-user-select:none;user-select:none}.van-pull-refresh__track{position:relative;height:100%;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-property:transform,-webkit-transform}.van-pull-refresh__head{position:absolute;left:0;width:100%;height:50px;overflow:hidden;color:#969799;font-size:14px;line-height:50px;text-align:center;-webkit-transform:translateY(-100%);transform:translateY(-100%)}.van-number-keyboard{position:fixed;bottom:0;left:0;z-index:100;width:100%;padding-bottom:22px;background-color:#f2f3f5;-webkit-user-select:none;user-select:none}.van-number-keyboard--with-title{border-radius:20px 20px 0 0}.van-number-keyboard__header{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;box-sizing:content-box;height:34px;padding-top:6px;color:#646566;font-size:16px}.van-number-keyboard__title{display:inline-block;font-weight:400}.van-number-keyboard__title-left{position:absolute;left:0}.van-number-keyboard__body{display:-webkit-box;display:-webkit-flex;display:flex;padding:6px 0 0 6px}.van-number-keyboard__keys{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:3;-webkit-flex:3;flex:3;-webkit-flex-wrap:wrap;flex-wrap:wrap}.van-number-keyboard__close{position:absolute;right:0;height:100%;padding:0 16px;color:#576b95;font-size:14px;background-color:transparent;border:none;cursor:pointer}.van-number-keyboard__close:active{opacity:.7}.van-number-keyboard__sidebar{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.van-number-keyboard--unfit{padding-bottom:0}.van-key{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:48px;font-size:28px;line-height:1.5;background-color:#fff;border-radius:8px;cursor:pointer}.van-key--large{position:absolute;top:0;right:6px;bottom:6px;left:0;height:auto}.van-key--blue,.van-key--delete{font-size:16px}.van-key--active{background-color:#ebedf0}.van-key--blue{color:#fff;background-color:#1989fa}.van-key--blue.van-key--active{background-color:#0570db}.van-key__wrapper{position:relative;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-flex-basis:33%;flex-basis:33%;box-sizing:border-box;padding:0 6px 6px 0}.van-key__wrapper--wider{-webkit-flex-basis:66%;flex-basis:66%}.van-key__delete-icon{width:32px;height:22px}.van-key__collapse-icon{width:30px;height:24px}.van-key__loading-icon{color:#fff}.van-list__error-text,.van-list__finished-text,.van-list__loading{color:#969799;font-size:14px;line-height:50px;text-align:center}.van-list__placeholder{height:0;pointer-events:none}.van-switch{position:relative;display:inline-block;box-sizing:content-box;width:2em;font-size:30px;border:1px solid rgba(0,0,0,.1);border-radius:1em;cursor:pointer;-webkit-transition:background-color .3s;transition:background-color .3s}.van-switch,.van-switch__node{height:1em;background-color:#fff}.van-switch__node{position:absolute;top:0;left:0;width:1em;font-size:inherit;border-radius:100%;box-shadow:0 3px 1px 0 rgba(0,0,0,.05),0 2px 2px 0 rgba(0,0,0,.1),0 3px 3px 0 rgba(0,0,0,.05);-webkit-transition:-webkit-transform .3s cubic-bezier(.3,1.05,.4,1.05);transition:-webkit-transform .3s cubic-bezier(.3,1.05,.4,1.05);transition:transform .3s cubic-bezier(.3,1.05,.4,1.05);transition:transform .3s cubic-bezier(.3,1.05,.4,1.05), -webkit-transform .3s cubic-bezier(.3,1.05,.4,1.05);transition:transform .3s cubic-bezier(.3,1.05,.4,1.05),-webkit-transform .3s cubic-bezier(.3,1.05,.4,1.05)}.van-switch__loading{top:25%;left:25%;width:50%;height:50%;line-height:1}.van-switch--on{background-color:#1989fa}.van-switch--on .van-switch__node{-webkit-transform:translateX(1em);transform:translateX(1em)}.van-switch--on .van-switch__loading{color:#1989fa}.van-switch--disabled{cursor:not-allowed;opacity:.5}.van-switch--loading{cursor:default}.van-switch-cell{padding-top:9px;padding-bottom:9px}.van-switch-cell--large{padding-top:11px;padding-bottom:11px}.van-switch-cell .van-switch{float:right}.van-button{position:relative;display:inline-block;box-sizing:border-box;height:44px;margin:0;padding:0;font-size:16px;line-height:1.2;text-align:center;border-radius:2px;cursor:pointer;-webkit-transition:opacity .2s;transition:opacity .2s;-webkit-appearance:none}.van-button:before{position:absolute;top:50%;left:50%;width:100%;height:100%;background-color:#000;border:inherit;border-color:#000;border-radius:inherit;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);opacity:0;content:\" \"}.van-button:active:before{opacity:.1}.van-button--disabled:before,.van-button--loading:before{display:none}.van-button--default{color:#323233;background-color:#fff;border:1px solid #ebedf0}.van-button--primary{color:#fff;background-color:#07c160;border:1px solid #07c160}.van-button--info{color:#fff;background-color:#1989fa;border:1px solid #1989fa}.van-button--danger{color:#fff;background-color:#ee0a24;border:1px solid #ee0a24}.van-button--warning{color:#fff;background-color:#ff976a;border:1px solid #ff976a}.van-button--plain{background-color:#fff}.van-button--plain.van-button--primary{color:#07c160}.van-button--plain.van-button--info{color:#1989fa}.van-button--plain.van-button--danger{color:#ee0a24}.van-button--plain.van-button--warning{color:#ff976a}.van-button--large{width:100%;height:50px}.van-button--normal{padding:0 15px;font-size:14px}.van-button--small{height:32px;padding:0 8px;font-size:12px}.van-button__loading{color:inherit;font-size:inherit}.van-button--mini{height:24px;padding:0 4px;font-size:10px}.van-button--mini+.van-button--mini{margin-left:4px}.van-button--block{display:block;width:100%}.van-button--disabled{cursor:not-allowed;opacity:.5}.van-button--loading{cursor:default}.van-button--round{border-radius:999px}.van-button--square{border-radius:0}.van-button__content{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:100%}.van-button__content:before{content:\" \"}.van-button__icon{font-size:1.2em;line-height:inherit}.van-button__icon+.van-button__text,.van-button__loading+.van-button__text,.van-button__text+.van-button__icon,.van-button__text+.van-button__loading{margin-left:4px}.van-button--hairline{border-width:0}.van-button--hairline:after{border-color:inherit;border-radius:4px}.van-button--hairline.van-button--round:after{border-radius:999px}.van-button--hairline.van-button--square:after{border-radius:0}.van-submit-bar{position:fixed;bottom:0;left:0;z-index:100;width:100%;padding-bottom:env(safe-area-inset-bottom);background-color:#fff;-webkit-user-select:none;user-select:none}.van-submit-bar__tip{padding:8px 12px;color:#f56723;font-size:12px;line-height:1.5;background-color:#fff7cc}.van-submit-bar__tip-icon{min-width:18px;font-size:12px;vertical-align:middle}.van-submit-bar__tip-text{vertical-align:middle}.van-submit-bar__bar{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;height:50px;padding:0 16px;font-size:14px}.van-submit-bar__text{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding-right:12px;color:#323233;text-align:right}.van-submit-bar__text span{display:inline-block}.van-submit-bar__suffix-label{margin-left:5px;font-weight:500}.van-submit-bar__price{color:#ee0a24;font-weight:500;font-size:12px}.van-submit-bar__price--integer{font-size:20px;font-family:Avenir-Heavy,PingFang SC,Helvetica Neue,Arial,sans-serif}.van-submit-bar__button{width:110px;height:40px;font-weight:500;border:none}.van-submit-bar__button--danger{background:-webkit-linear-gradient(left,#ff6034,#ee0a24);background:linear-gradient(90deg,#ff6034,#ee0a24)}.van-submit-bar--unfit{padding-bottom:0}.van-goods-action-button{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:40px;font-weight:500;font-size:14px;border:none;border-radius:0}.van-goods-action-button--first{margin-left:5px;border-top-left-radius:999px;border-bottom-left-radius:999px}.van-goods-action-button--last{margin-right:5px;border-top-right-radius:999px;border-bottom-right-radius:999px}.van-goods-action-button--warning{background:-webkit-linear-gradient(left,#ffd01e,#ff8917);background:linear-gradient(90deg,#ffd01e,#ff8917)}.van-goods-action-button--danger{background:-webkit-linear-gradient(left,#ff6034,#ee0a24);background:linear-gradient(90deg,#ff6034,#ee0a24)}@media (max-width:321px){.van-goods-action-button{font-size:13px}}.van-toast{position:fixed;top:50%;left:50%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;box-sizing:content-box;width:88px;max-width:70%;min-height:88px;padding:16px;color:#fff;font-size:14px;line-height:20px;white-space:pre-wrap;text-align:center;word-break:break-all;background-color:rgba(0,0,0,.7);border-radius:8px;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}.van-toast--unclickable{overflow:hidden}.van-toast--unclickable *{pointer-events:none}.van-toast--html,.van-toast--text{width:-webkit-fit-content;width:fit-content;min-width:96px;min-height:0;padding:8px 12px}.van-toast--html .van-toast__text,.van-toast--text .van-toast__text{margin-top:0}.van-toast--top{top:20%}.van-toast--bottom{top:auto;bottom:20%}.van-toast__icon{font-size:36px}.van-toast__loading{padding:4px;color:#fff}.van-toast__text{margin-top:8px}.van-calendar{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;height:100%;background-color:#fff}.van-calendar__popup.van-popup--bottom,.van-calendar__popup.van-popup--top{height:80%}.van-calendar__popup.van-popup--left,.van-calendar__popup.van-popup--right{height:100%}.van-calendar__popup .van-popup__close-icon{top:11px}.van-calendar__header{-webkit-flex-shrink:0;flex-shrink:0;box-shadow:0 2px 10px rgba(125,126,128,.16)}.van-calendar__header-subtitle,.van-calendar__header-title,.van-calendar__month-title{height:44px;font-weight:500;line-height:44px;text-align:center}.van-calendar__header-title{font-size:16px}.van-calendar__header-subtitle,.van-calendar__month-title{font-size:14px}.van-calendar__weekdays{display:-webkit-box;display:-webkit-flex;display:flex}.van-calendar__weekday{-webkit-box-flex:1;-webkit-flex:1;flex:1;font-size:12px;line-height:30px;text-align:center}.van-calendar__body{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:auto;-webkit-overflow-scrolling:touch}.van-calendar__days{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap;-webkit-user-select:none;user-select:none}.van-calendar__month-mark{position:absolute;top:50%;left:50%;z-index:0;color:rgba(242,243,245,.8);font-size:160px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);pointer-events:none}.van-calendar__day,.van-calendar__selected-day{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;text-align:center}.van-calendar__day{position:relative;width:14.285%;height:64px;font-size:16px;cursor:pointer}.van-calendar__day--end,.van-calendar__day--multiple-middle,.van-calendar__day--multiple-selected,.van-calendar__day--start,.van-calendar__day--start-end{color:#fff;background-color:#ee0a24}.van-calendar__day--start{border-radius:4px 0 0 4px}.van-calendar__day--end{border-radius:0 4px 4px 0}.van-calendar__day--multiple-selected,.van-calendar__day--start-end{border-radius:4px}.van-calendar__day--middle{color:#ee0a24}.van-calendar__day--middle:after{position:absolute;top:0;right:0;bottom:0;left:0;background-color:currentColor;opacity:.1;content:\"\"}.van-calendar__day--disabled{color:#c8c9cc;cursor:default}.van-calendar__bottom-info,.van-calendar__top-info{position:absolute;right:0;left:0;font-size:10px;line-height:14px}@media (max-width:350px){.van-calendar__bottom-info,.van-calendar__top-info{font-size:9px}}.van-calendar__top-info{top:6px}.van-calendar__bottom-info{bottom:6px}.van-calendar__selected-day{width:54px;height:54px;color:#fff;background-color:#ee0a24;border-radius:4px}.van-calendar__footer{-webkit-flex-shrink:0;flex-shrink:0;padding:0 16px env(safe-area-inset-bottom)}.van-calendar__footer--unfit{padding-bottom:0}.van-calendar__confirm{height:36px;margin:7px 0}.van-picker{position:relative;background-color:#fff;-webkit-user-select:none;user-select:none}.van-picker__toolbar{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:44px}.van-picker__cancel,.van-picker__confirm{height:100%;padding:0 16px;font-size:14px;background-color:transparent;border:none;cursor:pointer}.van-picker__cancel:active,.van-picker__confirm:active{opacity:.7}.van-picker__confirm{color:#576b95}.van-picker__cancel{color:#969799}.van-picker__title{max-width:50%;font-weight:500;font-size:16px;line-height:20px;text-align:center}.van-picker__columns{position:relative;cursor:grab}.van-picker__columns,.van-picker__loading{display:-webkit-box;display:-webkit-flex;display:flex}.van-picker__loading{position:absolute;top:0;right:0;bottom:0;left:0;z-index:3;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#1989fa;background-color:hsla(0,0%,100%,.9)}.van-picker__frame{top:50%;right:16px;left:16px;z-index:2;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.van-picker__frame,.van-picker__mask{position:absolute;pointer-events:none}.van-picker__mask{top:0;left:0;z-index:1;width:100%;height:100%;background-image:-webkit-linear-gradient(top,hsla(0,0%,100%,.9),hsla(0,0%,100%,.4)),-webkit-linear-gradient(bottom,hsla(0,0%,100%,.9),hsla(0,0%,100%,.4));background-image:linear-gradient(180deg,hsla(0,0%,100%,.9),hsla(0,0%,100%,.4)),linear-gradient(0deg,hsla(0,0%,100%,.9),hsla(0,0%,100%,.4));background-repeat:no-repeat;background-position:top,bottom;-webkit-transform:translateZ(0);transform:translateZ(0)}.van-picker-column{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow:hidden;font-size:16px}.van-picker-column__wrapper{-webkit-transition-timing-function:cubic-bezier(.23,1,.68,1);transition-timing-function:cubic-bezier(.23,1,.68,1)}.van-picker-column__item{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding:0 4px;color:#000}.van-picker-column__item--disabled{cursor:not-allowed;opacity:.3}.van-action-sheet{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;max-height:80%;overflow:hidden;color:#323233}.van-action-sheet__content{-webkit-box-flex:1;-webkit-flex:1 auto;flex:1 auto;overflow-y:auto;-webkit-overflow-scrolling:touch}.van-action-sheet__cancel,.van-action-sheet__item{display:block;width:100%;padding:14px 16px;font-size:16px;background-color:#fff;border:none;cursor:pointer}.van-action-sheet__cancel:active,.van-action-sheet__item:active{background-color:#f2f3f5}.van-action-sheet__item{line-height:22px}.van-action-sheet__item--disabled,.van-action-sheet__item--loading{color:#c8c9cc}.van-action-sheet__item--disabled:active,.van-action-sheet__item--loading:active{background-color:#fff}.van-action-sheet__item--disabled{cursor:not-allowed}.van-action-sheet__item--loading{cursor:default}.van-action-sheet__cancel{-webkit-flex-shrink:0;flex-shrink:0;box-sizing:border-box;color:#646566}.van-action-sheet__subname{margin-top:8px;color:#969799;font-size:12px;line-height:18px}.van-action-sheet__gap{display:block;height:8px;background-color:#f7f8fa}.van-action-sheet__header{-webkit-flex-shrink:0;flex-shrink:0;font-weight:500;font-size:16px;line-height:48px;text-align:center}.van-action-sheet__description{position:relative;-webkit-flex-shrink:0;flex-shrink:0;padding:20px 16px;color:#969799;font-size:14px;line-height:20px;text-align:center}.van-action-sheet__description:after{position:absolute;box-sizing:border-box;content:\" \";pointer-events:none;right:16px;bottom:0;left:16px;border-bottom:1px solid #ebedf0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.van-action-sheet__loading-icon .van-loading__spinner{width:22px;height:22px}.van-action-sheet__close{position:absolute;top:0;right:0;padding:0 16px;color:#c8c9cc;font-size:22px;line-height:inherit}.van-action-sheet__close:active{color:#969799}.van-goods-action{position:fixed;right:0;bottom:0;left:0;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;box-sizing:content-box;height:50px;padding-bottom:env(safe-area-inset-bottom);background-color:#fff}.van-goods-action--unfit{padding-bottom:0}.van-dialog{position:fixed;top:45%;left:50%;width:320px;overflow:hidden;font-size:16px;background-color:#fff;border-radius:16px;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-transition:.3s;transition:.3s;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}@media (max-width:321px){.van-dialog{width:90%}}.van-dialog__header{padding-top:26px;font-weight:500;line-height:24px;text-align:center}.van-dialog__header--isolated{padding:24px 0}.van-dialog__content--isolated{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;min-height:104px}.van-dialog__message{-webkit-box-flex:1;-webkit-flex:1;flex:1;max-height:60vh;padding:26px 24px;overflow-y:auto;font-size:14px;line-height:20px;white-space:pre-wrap;text-align:center;word-wrap:break-word;-webkit-overflow-scrolling:touch}.van-dialog__message--has-title{padding-top:8px;color:#646566}.van-dialog__message--left{text-align:left}.van-dialog__message--right{text-align:right}.van-dialog__footer{display:-webkit-box;display:-webkit-flex;display:flex;overflow:hidden;-webkit-user-select:none;user-select:none}.van-dialog__cancel,.van-dialog__confirm{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:48px;margin:0;border:0}.van-dialog__confirm,.van-dialog__confirm:active{color:#ee0a24}.van-dialog--round-button .van-dialog__footer{position:relative;height:auto;padding:8px 24px 16px}.van-dialog--round-button .van-dialog__message{padding-bottom:16px;color:#323233}.van-dialog--round-button .van-dialog__cancel,.van-dialog--round-button .van-dialog__confirm{height:36px}.van-dialog--round-button .van-dialog__confirm{color:#fff}.van-dialog-bounce-enter{-webkit-transform:translate3d(-50%,-50%,0) scale(.7);transform:translate3d(-50%,-50%,0) scale(.7);opacity:0}.van-dialog-bounce-leave-active{-webkit-transform:translate3d(-50%,-50%,0) scale(.9);transform:translate3d(-50%,-50%,0) scale(.9);opacity:0}.van-contact-edit{padding:16px}.van-contact-edit__fields{overflow:hidden;border-radius:4px}.van-contact-edit__fields .van-field__label{width:4.1em}.van-contact-edit__switch-cell{margin-top:10px;padding-top:9px;padding-bottom:9px;border-radius:4px}.van-contact-edit__buttons{padding:32px 0}.van-contact-edit .van-button{margin-bottom:12px;font-size:16px}.van-address-edit{padding:12px}.van-address-edit__fields{overflow:hidden;border-radius:8px}.van-address-edit__fields .van-field__label{width:4.1em}.van-address-edit__default{margin-top:12px;overflow:hidden;border-radius:8px}.van-address-edit__buttons{padding:32px 4px}.van-address-edit__buttons .van-button{margin-bottom:12px}.van-address-edit-detail{padding:0}.van-address-edit-detail__search-item{background-color:#f2f3f5}.van-address-edit-detail__keyword{color:#ee0a24}.van-address-edit-detail__finish{color:#1989fa;font-size:12px}.van-radio-group--horizontal{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.van-contact-list{box-sizing:border-box;height:100%;padding-bottom:80px}.van-contact-list__item{padding:16px}.van-contact-list__item-value{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-right:32px;padding-left:8px}.van-contact-list__item-tag{-webkit-box-flex:0;-webkit-flex:none;flex:none;margin-left:8px;padding-top:0;padding-bottom:0;line-height:1.4em}.van-contact-list__group{box-sizing:border-box;height:100%;overflow-y:scroll;-webkit-overflow-scrolling:touch}.van-contact-list__edit{font-size:16px}.van-contact-list__bottom{position:fixed;right:0;bottom:0;left:0;z-index:999;padding:0 16px env(safe-area-inset-bottom);background-color:#fff}.van-contact-list__add{height:40px;margin:5px 0}.van-address-list{box-sizing:border-box;height:100%;padding:12px 12px 80px}.van-address-list__bottom{position:fixed;bottom:0;left:0;z-index:999;box-sizing:border-box;width:100%;padding:0 16px env(safe-area-inset-bottom);background-color:#fff}.van-address-list__add{height:40px;margin:5px 0}.van-address-list__disabled-text{padding:20px 0 16px;color:#969799;font-size:14px;line-height:20px}.van-address-item{padding:12px;background-color:#fff;border-radius:8px}.van-address-item:not(:last-child){margin-bottom:12px}.van-address-item__value{padding-right:44px}.van-address-item__name{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin-bottom:8px;font-size:16px;line-height:22px}.van-address-item__tag{-webkit-box-flex:0;-webkit-flex:none;flex:none;margin-left:8px;padding-top:0;padding-bottom:0;line-height:1.4em}.van-address-item__address{color:#323233;font-size:13px;line-height:18px}.van-address-item--disabled .van-address-item__address,.van-address-item--disabled .van-address-item__name{color:#c8c9cc}.van-address-item__edit{position:absolute;top:50%;right:16px;color:#969799;font-size:20px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.van-address-item .van-cell{padding:0}.van-address-item .van-radio__label{margin-left:12px}.van-address-item .van-radio__icon--checked .van-icon{background-color:#ee0a24;border-color:#ee0a24}.van-badge{display:inline-block;box-sizing:border-box;min-width:16px;padding:0 3px;color:#fff;font-weight:500;font-size:12px;font-family:-apple-system-font,Helvetica Neue,Arial,sans-serif;line-height:1.2;text-align:center;background-color:#ee0a24;border:1px solid #fff;border-radius:999px}.van-badge--fixed{position:absolute;top:0;right:0;-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%);-webkit-transform-origin:100%;transform-origin:100%}.van-badge--dot{width:8px;min-width:0;height:8px;background-color:#ee0a24;border-radius:100%}.van-badge__wrapper{position:relative;display:inline-block}.van-tab__pane,.van-tab__pane-wrapper{-webkit-flex-shrink:0;flex-shrink:0;box-sizing:border-box;width:100%}.van-tab__pane-wrapper--inactive{height:0;overflow:visible}.van-sticky--fixed{position:fixed;top:0;right:0;left:0;z-index:99}.van-tab{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;box-sizing:border-box;padding:0 4px;color:#646566;font-size:14px;line-height:20px;cursor:pointer}.van-tab--active{color:#323233;font-weight:500}.van-tab--disabled{color:#c8c9cc;cursor:not-allowed}.van-tab__text--ellipsis{display:-webkit-box;overflow:hidden;-webkit-line-clamp:1;-webkit-box-orient:vertical}.van-tab__text-wrapper,.van-tabs{position:relative}.van-tabs__wrap{overflow:hidden}.van-tabs__wrap--page-top{position:fixed}.van-tabs__wrap--content-bottom{top:auto;bottom:0}.van-tabs__wrap--scrollable .van-tab{-webkit-box-flex:1;-webkit-flex:1 0 auto;flex:1 0 auto;padding:0 12px}.van-tabs__wrap--scrollable .van-tabs__nav{overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch}.van-tabs__wrap--scrollable .van-tabs__nav::-webkit-scrollbar{display:none}.van-tabs__nav{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;background-color:#fff;-webkit-user-select:none;user-select:none}.van-tabs__nav--line{box-sizing:content-box;height:100%;padding-bottom:15px}.van-tabs__nav--line.van-tabs__nav--complete{padding-right:8px;padding-left:8px}.van-tabs__nav--card{box-sizing:border-box;height:30px;margin:0 16px;border:1px solid #ee0a24;border-radius:2px}.van-tabs__nav--card .van-tab{color:#ee0a24;border-right:1px solid #ee0a24}.van-tabs__nav--card .van-tab:last-child{border-right:none}.van-tabs__nav--card .van-tab.van-tab--active{color:#fff;background-color:#ee0a24}.van-tabs__nav--card .van-tab--disabled{color:#c8c9cc}.van-tabs__line{position:absolute;bottom:15px;left:0;z-index:1;width:40px;height:3px;background-color:#ee0a24;border-radius:3px}.van-tabs__track{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;width:100%;height:100%;will-change:left}.van-tabs__content--animated{overflow:hidden}.van-tabs--line .van-tabs__wrap{height:44px}.van-tabs--card>.van-tabs__wrap{height:30px}.van-coupon-list{position:relative;height:100%;background-color:#f7f8fa}.van-coupon-list__field{padding:5px 0 5px 16px}.van-coupon-list__field .van-field__body{height:34px;padding-left:12px;line-height:34px;background:#f7f8fa;border-radius:17px}.van-coupon-list__field .van-field__body::-webkit-input-placeholder{color:#c8c9cc}.van-coupon-list__field .van-field__body::placeholder{color:#c8c9cc}.van-coupon-list__field .van-field__clear{margin-right:0}.van-coupon-list__exchange-bar{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;background-color:#fff}.van-coupon-list__exchange{-webkit-box-flex:0;-webkit-flex:none;flex:none;height:32px;font-size:16px;line-height:30px;border:0}.van-coupon-list .van-tabs__wrap{box-shadow:0 6px 12px -12px #969799}.van-coupon-list__list{box-sizing:border-box;padding:16px 0 24px;overflow-y:auto;-webkit-overflow-scrolling:touch}.van-coupon-list__list--with-bottom{padding-bottom:66px}.van-coupon-list__bottom{position:absolute;bottom:0;left:0;z-index:999;box-sizing:border-box;width:100%;padding:5px 16px;font-weight:500;background-color:#fff}.van-coupon-list__close{height:40px}.van-coupon-list__empty{padding-top:60px;text-align:center}.van-coupon-list__empty p{margin:16px 0;color:#969799;font-size:14px;line-height:20px}.van-coupon-list__empty img{width:200px;height:200px}.van-cascader__header{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;height:48px;padding:0 16px}.van-cascader__title{font-weight:500;font-size:16px;line-height:20px}.van-cascader__close-icon{color:#c8c9cc;font-size:22px}.van-cascader__close-icon:active{color:#969799}.van-cascader__tabs .van-tab{-webkit-box-flex:0;-webkit-flex:none;flex:none;padding:0 10px}.van-cascader__tabs.van-tabs--line .van-tabs__wrap{height:48px}.van-cascader__tabs .van-tabs__nav--complete{padding-right:6px;padding-left:6px}.van-cascader__tab{color:#323233;font-weight:500}.van-cascader__tab--unselected{color:#969799;font-weight:400}.van-cascader__option{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between;padding:10px 16px;font-size:14px;line-height:20px}.van-cascader__option:active{background-color:#f2f3f5}.van-cascader__option--selected{color:#ee0a24;font-weight:500}.van-cascader__selected-icon{font-size:18px}.van-cascader__options{box-sizing:border-box;height:384px;padding-top:6px;overflow-y:auto;-webkit-overflow-scrolling:touch}.van-cell-group{background-color:#fff}.van-cell-group--inset{margin:0 16px;overflow:hidden;border-radius:8px}.van-cell-group__title{padding:16px 16px 8px;color:#969799;font-size:14px;line-height:16px}.van-cell-group__title--inset{padding:16px 16px 8px 32px}.van-panel{background:#fff}.van-panel__header-value{color:#ee0a24}.van-panel__footer{padding:8px 16px}.van-checkbox-group--horizontal{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.van-circle{position:relative;display:inline-block;width:100px;height:100px;text-align:center}.van-circle svg{position:absolute;top:0;left:0;width:100%;height:100%}.van-circle__layer{stroke:#fff}.van-circle__hover{fill:none;stroke:#1989fa;stroke-linecap:round}.van-circle__text{position:absolute;top:50%;left:0;box-sizing:border-box;width:100%;padding:0 4px;color:#323233;font-weight:500;font-size:14px;line-height:20px;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.van-col{float:left;box-sizing:border-box;min-height:1px}.van-col--1{width:4.16666667%}.van-col--offset-1{margin-left:4.16666667%}.van-col--2{width:8.33333333%}.van-col--offset-2{margin-left:8.33333333%}.van-col--3{width:12.5%}.van-col--offset-3{margin-left:12.5%}.van-col--4{width:16.66666667%}.van-col--offset-4{margin-left:16.66666667%}.van-col--5{width:20.83333333%}.van-col--offset-5{margin-left:20.83333333%}.van-col--6{width:25%}.van-col--offset-6{margin-left:25%}.van-col--7{width:29.16666667%}.van-col--offset-7{margin-left:29.16666667%}.van-col--8{width:33.33333333%}.van-col--offset-8{margin-left:33.33333333%}.van-col--9{width:37.5%}.van-col--offset-9{margin-left:37.5%}.van-col--10{width:41.66666667%}.van-col--offset-10{margin-left:41.66666667%}.van-col--11{width:45.83333333%}.van-col--offset-11{margin-left:45.83333333%}.van-col--12{width:50%}.van-col--offset-12{margin-left:50%}.van-col--13{width:54.16666667%}.van-col--offset-13{margin-left:54.16666667%}.van-col--14{width:58.33333333%}.van-col--offset-14{margin-left:58.33333333%}.van-col--15{width:62.5%}.van-col--offset-15{margin-left:62.5%}.van-col--16{width:66.66666667%}.van-col--offset-16{margin-left:66.66666667%}.van-col--17{width:70.83333333%}.van-col--offset-17{margin-left:70.83333333%}.van-col--18{width:75%}.van-col--offset-18{margin-left:75%}.van-col--19{width:79.16666667%}.van-col--offset-19{margin-left:79.16666667%}.van-col--20{width:83.33333333%}.van-col--offset-20{margin-left:83.33333333%}.van-col--21{width:87.5%}.van-col--offset-21{margin-left:87.5%}.van-col--22{width:91.66666667%}.van-col--offset-22{margin-left:91.66666667%}.van-col--23{width:95.83333333%}.van-col--offset-23{margin-left:95.83333333%}.van-col--24{width:100%}.van-col--offset-24{margin-left:100%}.van-count-down{color:#323233;font-size:14px;line-height:20px}.van-divider{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;margin:16px 0;color:#969799;font-size:14px;line-height:24px;border:0 solid #ebedf0}.van-divider:after,.van-divider:before{display:block;-webkit-box-flex:1;-webkit-flex:1;flex:1;box-sizing:border-box;height:1px;border-color:inherit;border-style:inherit;border-width:1px 0 0}.van-divider:before{content:\"\"}.van-divider--hairline:after,.van-divider--hairline:before{-webkit-transform:scaleY(.5);transform:scaleY(.5)}.van-divider--dashed{border-style:dashed}.van-divider--content-center:before,.van-divider--content-left:before,.van-divider--content-right:before{margin-right:16px}.van-divider--content-center:after,.van-divider--content-left:after,.van-divider--content-right:after{margin-left:16px;content:\"\"}.van-divider--content-left:before,.van-divider--content-right:after{max-width:10%}.van-dropdown-menu{-webkit-user-select:none;user-select:none}.van-dropdown-menu__bar{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;height:48px;background-color:#fff;box-shadow:0 2px 12px rgba(100,101,102,.12)}.van-dropdown-menu__bar--opened{z-index:11}.van-dropdown-menu__item{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;min-width:0;cursor:pointer}.van-dropdown-menu__item:active{opacity:.7}.van-dropdown-menu__item--disabled:active{opacity:1}.van-dropdown-menu__item--disabled .van-dropdown-menu__title{color:#969799}.van-dropdown-menu__title{position:relative;box-sizing:border-box;max-width:100%;padding:0 8px;color:#323233;font-size:15px;line-height:22px}.van-dropdown-menu__title:after{position:absolute;top:50%;right:-4px;margin-top:-5px;border-color:transparent transparent #dcdee0 #dcdee0;border-style:solid;border-width:3px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);opacity:.8;content:\"\"}.van-dropdown-menu__title--active{color:#ee0a24}.van-dropdown-menu__title--active:after{border-color:transparent transparent currentColor currentColor}.van-dropdown-menu__title--down:after{margin-top:-1px;-webkit-transform:rotate(135deg);transform:rotate(135deg)}.van-empty{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;box-sizing:border-box;padding:32px 0}.van-empty__image{width:160px;height:160px}.van-empty__image img{width:100%;height:100%}.van-empty__description{margin-top:16px;padding:0 60px;color:#969799;font-size:14px;line-height:20px}.van-empty__bottom{margin-top:24px}.van-grid{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.van-swipe{position:relative;overflow:hidden;-webkit-transform:translateZ(0);transform:translateZ(0);cursor:grab;-webkit-user-select:none;user-select:none}.van-swipe__track{display:-webkit-box;display:-webkit-flex;display:flex;height:100%}.van-swipe__track--vertical{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column}.van-swipe__indicators{position:absolute;bottom:12px;left:50%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.van-swipe__indicators--vertical{top:50%;bottom:auto;left:12px;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.van-swipe__indicators--vertical .van-swipe__indicator:not(:last-child){margin-bottom:6px}.van-swipe__indicator{width:6px;height:6px;background-color:#ebedf0;border-radius:100%;opacity:.3;-webkit-transition:opacity .2s,background-color .2s;transition:opacity .2s,background-color .2s}.van-swipe__indicator:not(:last-child){margin-right:6px}.van-swipe__indicator--active{background-color:#1989fa;opacity:1}.van-swipe-item{position:relative;-webkit-flex-shrink:0;flex-shrink:0;width:100%;height:100%}.van-image-preview{position:fixed;top:0;left:0;width:100%;height:100%}.van-image-preview__swipe{height:100%}.van-image-preview__swipe-item{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;overflow:hidden}.van-image-preview__cover{position:absolute;top:0;left:0}.van-image-preview__image{width:100%;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-property:transform,-webkit-transform}.van-image-preview__image--vertical{width:auto;height:100%}.van-image-preview__image img{-webkit-user-drag:none}.van-image-preview__image .van-image__error{top:30%;height:40%}.van-image-preview__image .van-image__error-icon{font-size:36px}.van-image-preview__image .van-image__loading{background-color:transparent}.van-image-preview__index{position:absolute;top:16px;left:50%;color:#fff;font-size:14px;line-height:20px;text-shadow:0 1px 1px #323233;-webkit-transform:translate(-50%);transform:translate(-50%)}.van-image-preview__overlay{background-color:rgba(0,0,0,.9)}.van-image-preview__close-icon{position:absolute;z-index:1;color:#c8c9cc;font-size:22px;cursor:pointer}.van-image-preview__close-icon:active{color:#969799}.van-image-preview__close-icon--top-left{top:16px;left:16px}.van-image-preview__close-icon--top-right{top:16px;right:16px}.van-image-preview__close-icon--bottom-left{bottom:16px;left:16px}.van-image-preview__close-icon--bottom-right{right:16px;bottom:16px}.van-uploader{position:relative;display:inline-block}.van-uploader__wrapper{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.van-uploader__wrapper--disabled{opacity:.5}.van-uploader__input{position:absolute;top:0;left:0;width:100%;height:100%;overflow:hidden;cursor:pointer;opacity:0}.van-uploader__input-wrapper{position:relative}.van-uploader__input:disabled{cursor:not-allowed}.van-uploader__upload{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;box-sizing:border-box;width:80px;height:80px;margin:0 8px 8px 0;background-color:#f7f8fa}.van-uploader__upload:active{background-color:#f2f3f5}.van-uploader__upload--readonly:active{background-color:#f7f8fa}.van-uploader__upload-icon{color:#dcdee0;font-size:24px}.van-uploader__upload-text{margin-top:8px;color:#969799;font-size:12px}.van-uploader__preview{position:relative;margin:0 8px 8px 0;cursor:pointer}.van-uploader__preview-image{display:block;width:80px;height:80px;overflow:hidden}.van-uploader__preview-delete{position:absolute;top:0;right:0;width:14px;height:14px;background-color:rgba(0,0,0,.7);border-radius:0 0 0 12px}.van-uploader__preview-delete-icon{position:absolute;top:-2px;right:-2px;color:#fff;font-size:16px;-webkit-transform:scale(.5);transform:scale(.5)}.van-uploader__mask,.van-uploader__preview-cover{position:absolute;top:0;right:0;bottom:0;left:0}.van-uploader__mask{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;color:#fff;background-color:rgba(50,50,51,.88)}.van-uploader__mask-icon{font-size:22px}.van-uploader__mask-message{margin-top:6px;padding:0 4px;font-size:12px;line-height:14px}.van-uploader__loading{width:22px;height:22px;color:#fff}.van-uploader__file{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;width:80px;height:80px;background-color:#f7f8fa}.van-uploader__file-icon{color:#646566;font-size:20px}.van-uploader__file-name{box-sizing:border-box;width:100%;margin-top:8px;padding:0 4px;color:#646566;font-size:12px;text-align:center}.van-index-anchor{z-index:1;box-sizing:border-box;padding:0 16px;color:#323233;font-weight:500;font-size:14px;line-height:32px;background-color:transparent}.van-index-anchor--sticky{position:fixed;top:0;right:0;left:0;color:#ee0a24;background-color:#fff}.van-index-bar__sidebar{position:fixed;top:50%;right:0;z-index:2;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;text-align:center;-webkit-transform:translateY(-50%);transform:translateY(-50%);cursor:pointer;-webkit-user-select:none;user-select:none}.van-index-bar__index{padding:0 8px 0 16px;font-weight:500;font-size:10px;line-height:14px}.van-index-bar__index--active{color:#ee0a24}.van-pagination{display:-webkit-box;display:-webkit-flex;display:flex;font-size:14px}.van-pagination__item,.van-pagination__page-desc{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.van-pagination__item{-webkit-box-flex:1;-webkit-flex:1;flex:1;box-sizing:border-box;min-width:36px;height:40px;color:#1989fa;background-color:#fff;cursor:pointer;-webkit-user-select:none;user-select:none}.van-pagination__item:active{color:#fff;background-color:#1989fa}.van-pagination__item:after{border-width:1px 0 1px 1px}.van-pagination__item:last-child:after{border-right-width:1px}.van-pagination__item--active{color:#fff;background-color:#1989fa}.van-pagination__next,.van-pagination__prev{padding:0 4px;cursor:pointer}.van-pagination__item--disabled,.van-pagination__item--disabled:active{color:#646566;background-color:#f7f8fa;cursor:not-allowed;opacity:.5}.van-pagination__page{-webkit-box-flex:0;-webkit-flex-grow:0;flex-grow:0}.van-pagination__page-desc{-webkit-box-flex:1;-webkit-flex:1;flex:1;height:40px;color:#646566}.van-pagination--simple .van-pagination__next:after,.van-pagination--simple .van-pagination__prev:after{border-width:1px}.van-password-input{position:relative;margin:0 16px;-webkit-user-select:none;user-select:none}.van-password-input__error-info,.van-password-input__info{margin-top:16px;font-size:14px;text-align:center}.van-password-input__info{color:#969799}.van-password-input__error-info{color:#ee0a24}.van-password-input__security{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;height:50px;cursor:pointer}.van-password-input__security:after{border-radius:6px}.van-password-input__security li{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;height:100%;font-size:20px;line-height:1.2;background-color:#fff}.van-password-input__security i{width:10px;height:10px;background-color:#000;border-radius:100%;visibility:hidden}.van-password-input__cursor,.van-password-input__security i{position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.van-password-input__cursor{width:1px;height:40%;background-color:#323233;-webkit-animation:van-cursor-flicker 1s infinite;animation:van-cursor-flicker 1s infinite}@-webkit-keyframes van-cursor-flicker{0%{opacity:0}50%{opacity:1}to{opacity:0}}@keyframes van-cursor-flicker{0%{opacity:0}50%{opacity:1}to{opacity:0}}.van-progress{position:relative;height:4px;background:#ebedf0;border-radius:4px}.van-progress__portion{position:absolute;left:0;height:100%;background:#1989fa;border-radius:inherit}.van-progress__pivot{position:absolute;top:50%;box-sizing:border-box;min-width:3.6em;padding:0 5px;color:#fff;font-size:10px;line-height:1.6;text-align:center;word-break:keep-all;background-color:#1989fa;border-radius:1em;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.van-row:after{display:table;clear:both;content:\"\"}.van-row--flex{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-wrap:wrap;flex-wrap:wrap}.van-row--flex:after{display:none}.van-row--justify-center{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.van-row--justify-end{-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.van-row--justify-space-between{-webkit-box-pack:justify;-webkit-justify-content:space-between;justify-content:space-between}.van-row--justify-space-around{-webkit-justify-content:space-around;justify-content:space-around}.van-row--align-center{-webkit-box-align:center;-webkit-align-items:center;align-items:center}.van-row--align-bottom{-webkit-box-align:end;-webkit-align-items:flex-end;align-items:flex-end}.van-sidebar{width:80px;overflow-y:auto;-webkit-overflow-scrolling:touch}.van-tree-select{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;font-size:14px;-webkit-user-select:none;user-select:none}.van-tree-select__nav{-webkit-box-flex:1;-webkit-flex:1;flex:1;overflow-y:auto;background-color:#f7f8fa;-webkit-overflow-scrolling:touch}.van-tree-select__nav-item{padding:14px 12px}.van-tree-select__content{-webkit-box-flex:2;-webkit-flex:2;flex:2;overflow-y:auto;background-color:#fff;-webkit-overflow-scrolling:touch}.van-tree-select__item{position:relative;padding:0 32px 0 16px;font-weight:500;line-height:48px;cursor:pointer}.van-tree-select__item--active{color:#ee0a24}.van-tree-select__item--disabled{color:#c8c9cc;cursor:not-allowed}.van-tree-select__selected{position:absolute;top:50%;right:16px;margin-top:-8px;font-size:16px}.van-skeleton{display:-webkit-box;display:-webkit-flex;display:flex;padding:0 16px}.van-skeleton__avatar{-webkit-flex-shrink:0;flex-shrink:0;width:32px;height:32px;margin-right:16px;background-color:#f2f3f5}.van-skeleton__avatar--round{border-radius:999px}.van-skeleton__content{width:100%}.van-skeleton__avatar+.van-skeleton__content{padding-top:8px}.van-skeleton__row,.van-skeleton__title{height:16px;background-color:#f2f3f5}.van-skeleton__title{width:40%;margin:0}.van-skeleton__row:not(:first-child){margin-top:12px}.van-skeleton__title+.van-skeleton__row{margin-top:20px}.van-skeleton--animate{-webkit-animation:van-skeleton-blink 1.2s ease-in-out infinite;animation:van-skeleton-blink 1.2s ease-in-out infinite}.van-skeleton--round .van-skeleton__row,.van-skeleton--round .van-skeleton__title{border-radius:999px}@-webkit-keyframes van-skeleton-blink{50%{opacity:.6}}@keyframes van-skeleton-blink{50%{opacity:.6}}.van-stepper{font-size:0;-webkit-user-select:none;user-select:none}.van-stepper__minus,.van-stepper__plus{position:relative;box-sizing:border-box;width:28px;height:28px;margin:0;padding:0;color:#323233;vertical-align:middle;background-color:#f2f3f5;border:0;cursor:pointer}.van-stepper__minus:before,.van-stepper__plus:before{width:50%;height:1px}.van-stepper__minus:after,.van-stepper__plus:after{width:1px;height:50%}.van-stepper__minus:after,.van-stepper__minus:before,.van-stepper__plus:after,.van-stepper__plus:before{position:absolute;top:50%;left:50%;background-color:currentColor;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);content:\"\"}.van-stepper__minus:active,.van-stepper__plus:active{background-color:#e8e8e8}.van-stepper__minus--disabled,.van-stepper__plus--disabled{color:#c8c9cc;background-color:#f7f8fa;cursor:not-allowed}.van-stepper__minus--disabled:active,.van-stepper__plus--disabled:active{background-color:#f7f8fa}.van-stepper__minus{border-radius:4px 0 0 4px}.van-stepper__minus:after{display:none}.van-stepper__plus{border-radius:0 4px 4px 0}.van-stepper__input{box-sizing:border-box;width:32px;height:28px;margin:0 2px;padding:0;color:#323233;font-size:14px;line-height:normal;text-align:center;vertical-align:middle;background-color:#f2f3f5;border:0;border-width:1px 0;border-radius:0;-webkit-appearance:none}.van-stepper__input:disabled{color:#c8c9cc;background-color:#f2f3f5;-webkit-text-fill-color:#c8c9cc;opacity:1}.van-stepper__input:read-only{cursor:default}.van-stepper--round .van-stepper__input{background-color:transparent}.van-stepper--round .van-stepper__minus,.van-stepper--round .van-stepper__plus{border-radius:100%}.van-stepper--round .van-stepper__minus:active,.van-stepper--round .van-stepper__plus:active{opacity:.7}.van-stepper--round .van-stepper__minus--disabled,.van-stepper--round .van-stepper__minus--disabled:active,.van-stepper--round .van-stepper__plus--disabled,.van-stepper--round .van-stepper__plus--disabled:active{opacity:.3}.van-stepper--round .van-stepper__plus{color:#fff;background-color:#ee0a24}.van-stepper--round .van-stepper__minus{color:#ee0a24;background-color:#fff;border:1px solid #ee0a24}.van-sku-container{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-align:stretch;-webkit-align-items:stretch;align-items:stretch;min-height:50%;max-height:80%;overflow-y:visible;font-size:14px;background:#fff}.van-sku-body{-webkit-box-flex:1;-webkit-flex:1 1 auto;flex:1 1 auto;min-height:44px;overflow-y:scroll;-webkit-overflow-scrolling:touch}.van-sku-body::-webkit-scrollbar{display:none}.van-sku-header{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-shrink:0;flex-shrink:0;margin:0 16px}.van-sku-header__img-wrap{-webkit-flex-shrink:0;flex-shrink:0;width:96px;height:96px;margin:12px 12px 12px 0;overflow:hidden;border-radius:4px}.van-sku-header__goods-info{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end;padding:12px 20px 12px 0}.van-sku-header-item{margin-top:8px;color:#969799;font-size:12px;line-height:16px}.van-sku__price-symbol{font-size:16px;vertical-align:bottom}.van-sku__price-num{font-weight:500;font-size:22px;vertical-align:bottom;word-wrap:break-word}.van-sku__goods-price{margin-left:-2px;color:#ee0a24}.van-sku__price-tag{position:relative;display:inline-block;margin-left:8px;padding:0 5px;overflow:hidden;color:#ee0a24;font-size:12px;line-height:16px;border-radius:8px}.van-sku__price-tag:before{position:absolute;top:0;left:0;width:100%;height:100%;background:currentColor;opacity:.1;content:\"\"}.van-sku-group-container{padding-top:12px}.van-sku-group-container--hide-soldout .van-sku-row__item--disabled{display:none}.van-sku-row{margin:0 16px 12px}.van-sku-row:last-child{margin-bottom:0}.van-sku-row__image-item,.van-sku-row__item{position:relative;overflow:hidden;color:#323233;border-radius:4px;cursor:pointer}.van-sku-row__image-item:before,.van-sku-row__item:before{position:absolute;top:0;left:0;width:100%;height:100%;background:#f7f8fa;content:\"\"}.van-sku-row__image-item--active,.van-sku-row__item--active{color:#ee0a24}.van-sku-row__image-item--active:before,.van-sku-row__item--active:before{background:currentColor;opacity:.1}.van-sku-row__item{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;min-width:40px;margin:0 12px 12px 0;font-size:13px;line-height:16px;vertical-align:middle}.van-sku-row__item-img{z-index:1;width:24px;height:24px;margin:4px 0 4px 4px;object-fit:cover;border-radius:2px}.van-sku-row__item-name{z-index:1;padding:8px}.van-sku-row__item--disabled{color:#c8c9cc;background:#f2f3f5;cursor:not-allowed}.van-sku-row__item--disabled .van-sku-row__item-img{opacity:.3}.van-sku-row__image{margin-right:0}.van-sku-row__image-item{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:110px;margin:0 4px 4px 0;border:1px solid transparent}.van-sku-row__image-item:last-child{margin-right:0}.van-sku-row__image-item-img{width:100%;height:110px}.van-sku-row__image-item-img-icon{position:absolute;top:0;right:0;z-index:3;width:18px;height:18px;color:#fff;line-height:18px;text-align:center;background-color:rgba(0,0,0,.4);border-bottom-left-radius:4px}.van-sku-row__image-item-name{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;box-sizing:border-box;height:40px;padding:4px;font-size:12px;line-height:16px}.van-sku-row__image-item-name span{word-wrap:break-word}.van-sku-row__image-item--active{border-color:currentColor}.van-sku-row__image-item--disabled{color:#c8c9cc;cursor:not-allowed}.van-sku-row__image-item--disabled:before{z-index:2;background:#f2f3f5;opacity:.4}.van-sku-row__title{padding-bottom:12px}.van-sku-row__title-multiple{color:#969799}.van-sku-row__scroller{margin:0 -16px;overflow-x:scroll;overflow-y:hidden;-webkit-overflow-scrolling:touch}.van-sku-row__scroller::-webkit-scrollbar{display:none}.van-sku-row__row{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;margin-bottom:4px;padding:0 16px}.van-sku-row__indicator{width:40px;height:4px;background:#ebedf0;border-radius:2px}.van-sku-row__indicator-wrapper{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;padding-bottom:16px}.van-sku-row__indicator-slider{width:50%;height:100%;background-color:#ee0a24;border-radius:2px}.van-sku-stepper-stock{padding:12px 16px;overflow:hidden;line-height:30px}.van-sku__stepper{float:right;padding-left:4px}.van-sku__stepper-title{float:left}.van-sku__stepper-quota{float:right;color:#ee0a24;font-size:12px}.van-sku__stock{display:inline-block;margin-right:8px;color:#969799;font-size:12px}.van-sku__stock-num--highlight{color:#ee0a24}.van-sku-messages{padding-bottom:32px}.van-sku-messages__image-cell .van-cell__title{max-width:6.2em;margin-right:12px;color:#646566;text-align:left;word-wrap:break-word}.van-sku-messages__image-cell .van-cell__value{overflow:visible;text-align:left}.van-sku-messages__image-cell-label{color:#969799;font-size:12px;line-height:18px}.van-sku-messages__cell-block{position:relative}.van-sku-messages__cell-block:after{position:absolute;box-sizing:border-box;content:\" \";pointer-events:none;right:16px;bottom:0;left:16px;border-bottom:1px solid #ebedf0;-webkit-transform:scaleY(.5);transform:scaleY(.5)}.van-sku-messages__cell-block:last-child:after{display:none}.van-sku-messages__extra-message{margin-top:-2px;padding:0 16px 12px;color:#969799;font-size:12px;line-height:18px}.van-sku-actions{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-flex-shrink:0;flex-shrink:0;padding:8px 16px}.van-sku-actions .van-button{height:40px;font-weight:500;font-size:14px;border:none;border-radius:0}.van-sku-actions .van-button:first-of-type{border-top-left-radius:20px;border-bottom-left-radius:20px}.van-sku-actions .van-button:last-of-type{border-top-right-radius:20px;border-bottom-right-radius:20px}.van-sku-actions .van-button--warning{background:-webkit-linear-gradient(left,#ffd01e,#ff8917);background:linear-gradient(90deg,#ffd01e,#ff8917)}.van-sku-actions .van-button--danger{background:-webkit-linear-gradient(left,#ff6034,#ee0a24);background:linear-gradient(90deg,#ff6034,#ee0a24)}.van-slider{position:relative;width:100%;height:2px;background-color:#ebedf0;border-radius:999px;cursor:pointer}.van-slider:before{position:absolute;top:-8px;right:0;bottom:-8px;left:0;content:\"\"}.van-slider__bar{position:relative;width:100%;height:100%;background-color:#1989fa;border-radius:inherit;-webkit-transition:all .2s;transition:all .2s}.van-slider__button{width:24px;height:24px;background-color:#fff;border-radius:50%;box-shadow:0 1px 2px rgba(0,0,0,.5)}.van-slider__button-wrapper,.van-slider__button-wrapper-right{position:absolute;top:50%;right:0;-webkit-transform:translate3d(50%,-50%,0);transform:translate3d(50%,-50%,0);cursor:grab}.van-slider__button-wrapper-left{position:absolute;top:50%;left:0;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0);cursor:grab}.van-slider--disabled{cursor:not-allowed;opacity:.5}.van-slider--disabled .van-slider__button-wrapper,.van-slider--disabled .van-slider__button-wrapper-left,.van-slider--disabled .van-slider__button-wrapper-right{cursor:not-allowed}.van-slider--vertical{display:inline-block;width:2px;height:100%}.van-slider--vertical .van-slider__button-wrapper,.van-slider--vertical .van-slider__button-wrapper-right{top:auto;right:50%;bottom:0;-webkit-transform:translate3d(50%,50%,0);transform:translate3d(50%,50%,0)}.van-slider--vertical .van-slider__button-wrapper-left{top:0;right:50%;left:auto;-webkit-transform:translate3d(50%,-50%,0);transform:translate3d(50%,-50%,0)}.van-slider--vertical:before{top:0;right:-8px;bottom:0;left:-8px}.van-steps{overflow:hidden;background-color:#fff}.van-steps--horizontal{padding:10px 10px 0}.van-steps--horizontal .van-steps__items{position:relative;display:-webkit-box;display:-webkit-flex;display:flex;margin:0 0 10px;padding-bottom:22px}.van-steps--vertical{padding:0 0 0 32px}.van-swipe-cell{position:relative;overflow:hidden;cursor:grab}.van-swipe-cell__wrapper{-webkit-transition-timing-function:cubic-bezier(.18,.89,.32,1);transition-timing-function:cubic-bezier(.18,.89,.32,1);-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform, -webkit-transform;transition-property:transform,-webkit-transform}.van-swipe-cell__left,.van-swipe-cell__right{position:absolute;top:0;height:100%}.van-swipe-cell__left{left:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.van-swipe-cell__right{right:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.van-tabbar{z-index:1;display:-webkit-box;display:-webkit-flex;display:flex;box-sizing:content-box;width:100%;height:50px;padding-bottom:env(safe-area-inset-bottom);background-color:#fff}.van-tabbar--fixed{position:fixed;bottom:0;left:0}.van-tabbar--unfit{padding-bottom:0}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_33_0_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_33_0_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_33_0_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }); }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body{font-family:\"Fira Code\",monospace;font-weight:400;background-color:#fbfbfd}*{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.main-content{min-height:100vh}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 64 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./node_modules/.cache/nuxt/components/index.js
var components_namespaceObject = {};
__webpack_require__.r(components_namespaceObject);
__webpack_require__.d(components_namespaceObject, "NuxtLogo", function() { return NuxtLogo; });
__webpack_require__.d(components_namespaceObject, "Tutorial", function() { return Tutorial; });
__webpack_require__.d(components_namespaceObject, "TheLogo", function() { return TheLogo; });

// EXTERNAL MODULE: ./node_modules/@nuxt/bridge/dist/runtime/vue2-bridge.mjs + 1 modules
var vue2_bridge = __webpack_require__(0);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(2);

// CONCATENATED MODULE: ./node_modules/.cache/nuxt/middleware.js
const middleware = {};
/* harmony default export */ var nuxt_middleware = (middleware);

function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}
function globalHandleError(error) {
  if (vue2_bridge["default"].config.errorHandler) {
    vue2_bridge["default"].config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  {
    return data;
  }
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = vue2_bridge["default"].extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      try {
        Component = await Component();
      } catch (error) {
        // Handle webpack chunk loading errors
        // This may be due to a new deployment or a network problem
        if (error && error.name === 'ChunkLoadError' && "undefined" !== 'undefined' && window.sessionStorage) {
          const timeNow = Date.now();
          const previousReloadTime = parseInt(window.sessionStorage.getItem('nuxt-reload')); // check for previous reload time not to reload infinitely

          if (!previousReloadTime || previousReloadTime + 60000 < timeNow) {
            window.sessionStorage.setItem('nuxt-reload', timeNow);
            window.location.reload(true
            /* skip cache */
            );
          }
        }

        throw error;
      }
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: true,
      isDev: false,
      isHMR: false,
      app,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {
        "NITRO_PRESET": "server"
      }
    }; // Only set once

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = Object(external_ufo_["withQuery"])(path, query);

        {
          app.context.next({
            path,
            status
          });
        }
      }
    };

    {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);

      app.context.beforeSerialize = fn => context.beforeSerializeFns.push(fn);
    }
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  }

  base = decodeURI(base).slice(0, -1); // consideration is base is normalized with trailing slash

  let path = decodeURI(window.location.pathname);

  if (base && path.startsWith(base)) {
    path = path.slice(base.length);
  }

  const fullPath = (path || '/') + window.location.search + window.location.hash;
  return Object(external_ufo_["normalizeURL"])(fullPath);
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = external_ufo_["joinURL"];
external_ufo_["withoutTrailingSlash"];
external_ufo_["isSamePath"];
// CONCATENATED MODULE: ./node_modules/.cache/nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch[this._fetchKey] = this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : purifyData(this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    const defaultKey = this.$options._scopeId || this.$options.name || '';
    const getCounter = createGetCounter(this.$ssrContext.fetchCounters, defaultKey);

    if (typeof this.$options.fetchKey === 'function') {
      this._fetchKey = this.$options.fetchKey.call(this, getCounter);
    } else {
      const key = 'string' === typeof this.$options.fetchKey ? this.$options.fetchKey : defaultKey;
      this._fetchKey = key ? key + ':' + getCounter(key) : String(getCounter(key));
    } // Added for remove vue undefined warning while ssr


    this.$fetch = () => {}; // issue #8043


    vue2_bridge["default"].util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: ./node_modules/vue-meta/dist/vue-meta.common.js
var vue_meta_common = __webpack_require__(34);
var vue_meta_common_default = /*#__PURE__*/__webpack_require__.n(vue_meta_common);

// EXTERNAL MODULE: ./node_modules/vue-client-only/dist/vue-client-only.common.js
var vue_client_only_common = __webpack_require__(11);
var vue_client_only_common_default = /*#__PURE__*/__webpack_require__.n(vue_client_only_common);

// EXTERNAL MODULE: ./node_modules/vue-no-ssr/dist/vue-no-ssr.common.js
var vue_no_ssr_common = __webpack_require__(10);
var vue_no_ssr_common_default = /*#__PURE__*/__webpack_require__.n(vue_no_ssr_common);

function extend(a, b) {
  for (var key in b) {
    a[key] = b[key];
  }

  return a;
}
/*  */


var encodeReserveRE = /[!'()*]/g;

var encodeReserveReplacer = function (c) {
  return '%' + c.charCodeAt(0).toString(16);
};

var commaRE = /%2C/g; // fixed encodeURIComponent which is more conformant to RFC3986:
// - escapes [!'()*]
// - preserve commas

var encode = function (str) {
  return encodeURIComponent(str).replace(encodeReserveRE, encodeReserveReplacer).replace(commaRE, ',');
};

function decode(str) {
  try {
    return decodeURIComponent(str);
  } catch (err) {
  }

  return str;
}

function resolveQuery(query, extraQuery, _parseQuery) {
  if (extraQuery === void 0) extraQuery = {};
  var parse = _parseQuery || parseQuery;
  var parsedQuery;

  try {
    parsedQuery = parse(query || '');
  } catch (e) {
    parsedQuery = {};
  }

  for (var key in extraQuery) {
    var value = extraQuery[key];
    parsedQuery[key] = Array.isArray(value) ? value.map(castQueryParamValue) : castQueryParamValue(value);
  }

  return parsedQuery;
}

var castQueryParamValue = function (value) {
  return value == null || typeof value === 'object' ? value : String(value);
};

function parseQuery(query) {
  var res = {};
  query = query.trim().replace(/^(\?|#|&)/, '');

  if (!query) {
    return res;
  }

  query.split('&').forEach(function (param) {
    var parts = param.replace(/\+/g, ' ').split('=');
    var key = decode(parts.shift());
    var val = parts.length > 0 ? decode(parts.join('=')) : null;

    if (res[key] === undefined) {
      res[key] = val;
    } else if (Array.isArray(res[key])) {
      res[key].push(val);
    } else {
      res[key] = [res[key], val];
    }
  });
  return res;
}

function stringifyQuery(obj) {
  var res = obj ? Object.keys(obj).map(function (key) {
    var val = obj[key];

    if (val === undefined) {
      return '';
    }

    if (val === null) {
      return encode(key);
    }

    if (Array.isArray(val)) {
      var result = [];
      val.forEach(function (val2) {
        if (val2 === undefined) {
          return;
        }

        if (val2 === null) {
          result.push(encode(key));
        } else {
          result.push(encode(key) + '=' + encode(val2));
        }
      });
      return result.join('&');
    }

    return encode(key) + '=' + encode(val);
  }).filter(function (x) {
    return x.length > 0;
  }).join('&') : null;
  return res ? "?" + res : '';
}
/*  */


var trailingSlashRE = /\/?$/;

function createRoute(record, location, redirectedFrom, router) {
  var stringifyQuery = router && router.options.stringifyQuery;
  var query = location.query || {};

  try {
    query = clone(query);
  } catch (e) {}

  var route = {
    name: location.name || record && record.name,
    meta: record && record.meta || {},
    path: location.path || '/',
    hash: location.hash || '',
    query: query,
    params: location.params || {},
    fullPath: getFullPath(location, stringifyQuery),
    matched: record ? formatMatch(record) : []
  };

  if (redirectedFrom) {
    route.redirectedFrom = getFullPath(redirectedFrom, stringifyQuery);
  }

  return Object.freeze(route);
}

function clone(value) {
  if (Array.isArray(value)) {
    return value.map(clone);
  } else if (value && typeof value === 'object') {
    var res = {};

    for (var key in value) {
      res[key] = clone(value[key]);
    }

    return res;
  } else {
    return value;
  }
} // the starting route that represents the initial state


var START = createRoute(null, {
  path: '/'
});

function formatMatch(record) {
  var res = [];

  while (record) {
    res.unshift(record);
    record = record.parent;
  }

  return res;
}

function getFullPath(ref, _stringifyQuery) {
  var path = ref.path;
  var query = ref.query;
  if (query === void 0) query = {};
  var hash = ref.hash;
  if (hash === void 0) hash = '';
  var stringify = _stringifyQuery || stringifyQuery;
  return (path || '/') + stringify(query) + hash;
}

function isSameRoute(a, b, onlyPath) {
  if (b === START) {
    return a === b;
  } else if (!b) {
    return false;
  } else if (a.path && b.path) {
    return a.path.replace(trailingSlashRE, '') === b.path.replace(trailingSlashRE, '') && (onlyPath || a.hash === b.hash && isObjectEqual(a.query, b.query));
  } else if (a.name && b.name) {
    return a.name === b.name && (onlyPath || a.hash === b.hash && isObjectEqual(a.query, b.query) && isObjectEqual(a.params, b.params));
  } else {
    return false;
  }
}

function isObjectEqual(a, b) {
  if (a === void 0) a = {};
  if (b === void 0) b = {}; // handle null value #1566

  if (!a || !b) {
    return a === b;
  }

  var aKeys = Object.keys(a).sort();
  var bKeys = Object.keys(b).sort();

  if (aKeys.length !== bKeys.length) {
    return false;
  }

  return aKeys.every(function (key, i) {
    var aVal = a[key];
    var bKey = bKeys[i];

    if (bKey !== key) {
      return false;
    }

    var bVal = b[key]; // query values can be null and undefined

    if (aVal == null || bVal == null) {
      return aVal === bVal;
    } // check nested equality


    if (typeof aVal === 'object' && typeof bVal === 'object') {
      return isObjectEqual(aVal, bVal);
    }

    return String(aVal) === String(bVal);
  });
}

function isIncludedRoute(current, target) {
  return current.path.replace(trailingSlashRE, '/').indexOf(target.path.replace(trailingSlashRE, '/')) === 0 && (!target.hash || current.hash === target.hash) && queryIncludes(current.query, target.query);
}

function queryIncludes(current, target) {
  for (var key in target) {
    if (!(key in current)) {
      return false;
    }
  }

  return true;
}

function handleRouteEntered(route) {
  for (var i = 0; i < route.matched.length; i++) {
    var record = route.matched[i];

    for (var name in record.instances) {
      var instance = record.instances[name];
      var cbs = record.enteredCbs[name];

      if (!instance || !cbs) {
        continue;
      }

      delete record.enteredCbs[name];

      for (var i$1 = 0; i$1 < cbs.length; i$1++) {
        if (!instance._isBeingDestroyed) {
          cbs[i$1](instance);
        }
      }
    }
  }
}

var View = {
  name: 'RouterView',
  functional: true,
  props: {
    name: {
      type: String,
      default: 'default'
    }
  },
  render: function render(_, ref) {
    var props = ref.props;
    var children = ref.children;
    var parent = ref.parent;
    var data = ref.data; // used by devtools to display a router-view badge

    data.routerView = true; // directly use parent context's createElement() function
    // so that components rendered by router-view can resolve named slots

    var h = parent.$createElement;
    var name = props.name;
    var route = parent.$route;
    var cache = parent._routerViewCache || (parent._routerViewCache = {}); // determine current view depth, also check to see if the tree
    // has been toggled inactive but kept-alive.

    var depth = 0;
    var inactive = false;

    while (parent && parent._routerRoot !== parent) {
      var vnodeData = parent.$vnode ? parent.$vnode.data : {};

      if (vnodeData.routerView) {
        depth++;
      }

      if (vnodeData.keepAlive && parent._directInactive && parent._inactive) {
        inactive = true;
      }

      parent = parent.$parent;
    }

    data.routerViewDepth = depth; // render previous view if the tree is inactive and kept-alive

    if (inactive) {
      var cachedData = cache[name];
      var cachedComponent = cachedData && cachedData.component;

      if (cachedComponent) {
        // #2301
        // pass props
        if (cachedData.configProps) {
          fillPropsinData(cachedComponent, data, cachedData.route, cachedData.configProps);
        }

        return h(cachedComponent, data, children);
      } else {
        // render previous empty view
        return h();
      }
    }

    var matched = route.matched[depth];
    var component = matched && matched.components[name]; // render empty node if no matched route or no config component

    if (!matched || !component) {
      cache[name] = null;
      return h();
    } // cache component


    cache[name] = {
      component: component
    }; // attach instance registration hook
    // this will be called in the instance's injected lifecycle hooks

    data.registerRouteInstance = function (vm, val) {
      // val could be undefined for unregistration
      var current = matched.instances[name];

      if (val && current !== vm || !val && current === vm) {
        matched.instances[name] = val;
      }
    } // also register instance in prepatch hook
    // in case the same component instance is reused across different routes
    ;

    (data.hook || (data.hook = {})).prepatch = function (_, vnode) {
      matched.instances[name] = vnode.componentInstance;
    }; // register instance in init hook
    // in case kept-alive component be actived when routes changed


    data.hook.init = function (vnode) {
      if (vnode.data.keepAlive && vnode.componentInstance && vnode.componentInstance !== matched.instances[name]) {
        matched.instances[name] = vnode.componentInstance;
      } // if the route transition has already been confirmed then we weren't
      // able to call the cbs during confirmation as the component was not
      // registered yet, so we call it here.


      handleRouteEntered(route);
    };

    var configProps = matched.props && matched.props[name]; // save route and configProps in cache

    if (configProps) {
      extend(cache[name], {
        route: route,
        configProps: configProps
      });
      fillPropsinData(component, data, route, configProps);
    }

    return h(component, data, children);
  }
};

function fillPropsinData(component, data, route, configProps) {
  // resolve props
  var propsToPass = data.props = resolveProps(route, configProps);

  if (propsToPass) {
    // clone to prevent mutation
    propsToPass = data.props = extend({}, propsToPass); // pass non-declared props as attrs

    var attrs = data.attrs = data.attrs || {};

    for (var key in propsToPass) {
      if (!component.props || !(key in component.props)) {
        attrs[key] = propsToPass[key];
        delete propsToPass[key];
      }
    }
  }
}

function resolveProps(route, config) {
  switch (typeof config) {
    case 'undefined':
      return;

    case 'object':
      return config;

    case 'function':
      return config(route);

    case 'boolean':
      return config ? route.params : undefined;

  }
}
/*  */


function resolvePath(relative, base, append) {
  var firstChar = relative.charAt(0);

  if (firstChar === '/') {
    return relative;
  }

  if (firstChar === '?' || firstChar === '#') {
    return base + relative;
  }

  var stack = base.split('/'); // remove trailing segment if:
  // - not appending
  // - appending to trailing slash (last segment is empty)

  if (!append || !stack[stack.length - 1]) {
    stack.pop();
  } // resolve relative path


  var segments = relative.replace(/^\//, '').split('/');

  for (var i = 0; i < segments.length; i++) {
    var segment = segments[i];

    if (segment === '..') {
      stack.pop();
    } else if (segment !== '.') {
      stack.push(segment);
    }
  } // ensure leading slash


  if (stack[0] !== '') {
    stack.unshift('');
  }

  return stack.join('/');
}

function parsePath(path) {
  var hash = '';
  var query = '';
  var hashIndex = path.indexOf('#');

  if (hashIndex >= 0) {
    hash = path.slice(hashIndex);
    path = path.slice(0, hashIndex);
  }

  var queryIndex = path.indexOf('?');

  if (queryIndex >= 0) {
    query = path.slice(queryIndex + 1);
    path = path.slice(0, queryIndex);
  }

  return {
    path: path,
    query: query,
    hash: hash
  };
}

function cleanPath(path) {
  return path.replace(/\/+/g, '/');
}

var isarray = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};
/**
 * Expose `pathToRegexp`.
 */


var pathToRegexp_1 = pathToRegexp;
var parse_1 = vue_router_esm_parse;
var compile_1 = vue_router_esm_compile;
var tokensToFunction_1 = vue_router_esm_tokensToFunction;
var tokensToRegExp_1 = tokensToRegExp;
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

var vue_router_esm_PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function vue_router_esm_parse(str, options) {
  var tokens = [];
  var key = 0;
  var index = 0;
  var path = '';
  var defaultDelimiter = options && options.delimiter || '/';
  var res;

  while ((res = vue_router_esm_PATH_REGEXP.exec(str)) != null) {
    var m = res[0];
    var escaped = res[1];
    var offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    var next = str[index];
    var prefix = res[2];
    var name = res[3];
    var capture = res[4];
    var group = res[5];
    var modifier = res[6];
    var asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    var partial = prefix != null && next != null && next !== prefix;
    var repeat = modifier === '+' || modifier === '*';
    var optional = modifier === '?' || modifier === '*';
    var delimiter = res[2] || defaultDelimiter;
    var pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter: delimiter,
      optional: optional,
      repeat: repeat,
      partial: partial,
      asterisk: !!asterisk,
      pattern: pattern ? vue_router_esm_escapeGroup(pattern) : asterisk ? '.*' : '[^' + vue_router_esm_escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */


function vue_router_esm_compile(str, options) {
  return vue_router_esm_tokensToFunction(vue_router_esm_parse(str, options), options);
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function vue_router_esm_encodeURIComponentPretty(str) {
  return encodeURI(str).replace(/[\/?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function vue_router_esm_encodeAsterisk(str) {
  return encodeURI(str).replace(/[?#]/g, function (c) {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function vue_router_esm_tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  var matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (var i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', vue_router_esm_flags(options));
    }
  }

  return function (obj, opts) {
    var path = '';
    var data = obj || {};
    var options = opts || {};
    var encode = options.pretty ? vue_router_esm_encodeURIComponentPretty : encodeURIComponent;

    for (var i = 0; i < tokens.length; i++) {
      var token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      var value = data[token.name];
      var segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (isarray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (var j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? vue_router_esm_encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function vue_router_esm_escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|\/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function vue_router_esm_escapeGroup(group) {
  return group.replace(/([=!:$\/()])/g, '\\$1');
}
/**
 * Attach the keys as a property of the regexp.
 *
 * @param  {!RegExp} re
 * @param  {Array}   keys
 * @return {!RegExp}
 */


function attachKeys(re, keys) {
  re.keys = keys;
  return re;
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function vue_router_esm_flags(options) {
  return options && options.sensitive ? '' : 'i';
}
/**
 * Pull out keys from a regexp.
 *
 * @param  {!RegExp} path
 * @param  {!Array}  keys
 * @return {!RegExp}
 */


function regexpToRegexp(path, keys) {
  // Use a negative lookahead to match only capturing groups.
  var groups = path.source.match(/\((?!\?)/g);

  if (groups) {
    for (var i = 0; i < groups.length; i++) {
      keys.push({
        name: i,
        prefix: null,
        delimiter: null,
        optional: false,
        repeat: false,
        partial: false,
        asterisk: false,
        pattern: null
      });
    }
  }

  return attachKeys(path, keys);
}
/**
 * Transform an array into a regexp.
 *
 * @param  {!Array}  path
 * @param  {Array}   keys
 * @param  {!Object} options
 * @return {!RegExp}
 */


function arrayToRegexp(path, keys, options) {
  var parts = [];

  for (var i = 0; i < path.length; i++) {
    parts.push(pathToRegexp(path[i], keys, options).source);
  }

  var regexp = new RegExp('(?:' + parts.join('|') + ')', vue_router_esm_flags(options));
  return attachKeys(regexp, keys);
}
/**
 * Create a path regexp from string input.
 *
 * @param  {string}  path
 * @param  {!Array}  keys
 * @param  {!Object} options
 * @return {!RegExp}
 */


function stringToRegexp(path, keys, options) {
  return tokensToRegExp(vue_router_esm_parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 *
 * @param  {!Array}          tokens
 * @param  {(Array|Object)=} keys
 * @param  {Object=}         options
 * @return {!RegExp}
 */


function tokensToRegExp(tokens, keys, options) {
  if (!isarray(keys)) {
    options =
    /** @type {!Object} */
    keys || options;
    keys = [];
  }

  options = options || {};
  var strict = options.strict;
  var end = options.end !== false;
  var route = ''; // Iterate over the tokens and create our regexp string.

  for (var i = 0; i < tokens.length; i++) {
    var token = tokens[i];

    if (typeof token === 'string') {
      route += vue_router_esm_escapeString(token);
    } else {
      var prefix = vue_router_esm_escapeString(token.prefix);
      var capture = '(?:' + token.pattern + ')';
      keys.push(token);

      if (token.repeat) {
        capture += '(?:' + prefix + capture + ')*';
      }

      if (token.optional) {
        if (!token.partial) {
          capture = '(?:' + prefix + '(' + capture + '))?';
        } else {
          capture = prefix + '(' + capture + ')?';
        }
      } else {
        capture = prefix + '(' + capture + ')';
      }

      route += capture;
    }
  }

  var delimiter = vue_router_esm_escapeString(options.delimiter || '/');
  var endsWithDelimiter = route.slice(-delimiter.length) === delimiter; // In non-strict mode we allow a slash at the end of match. If the path to
  // match already ends with a slash, we remove it for consistency. The slash
  // is valid at the end of a path match, not in the middle. This is important
  // in non-ending mode, where "/test/" shouldn't match "/test//route".

  if (!strict) {
    route = (endsWithDelimiter ? route.slice(0, -delimiter.length) : route) + '(?:' + delimiter + '(?=$))?';
  }

  if (end) {
    route += '$';
  } else {
    // In non-ending mode, we need the capturing groups to match as much as
    // possible by using a positive lookahead to the end or next path segment.
    route += strict && endsWithDelimiter ? '' : '(?=' + delimiter + '|$)';
  }

  return attachKeys(new RegExp('^' + route, vue_router_esm_flags(options)), keys);
}
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 *
 * @param  {(string|RegExp|Array)} path
 * @param  {(Array|Object)=}       keys
 * @param  {Object=}               options
 * @return {!RegExp}
 */


function pathToRegexp(path, keys, options) {
  if (!isarray(keys)) {
    options =
    /** @type {!Object} */
    keys || options;
    keys = [];
  }

  options = options || {};

  if (path instanceof RegExp) {
    return regexpToRegexp(path,
    /** @type {!Array} */
    keys);
  }

  if (isarray(path)) {
    return arrayToRegexp(
    /** @type {!Array} */
    path,
    /** @type {!Array} */
    keys, options);
  }

  return stringToRegexp(
  /** @type {string} */
  path,
  /** @type {!Array} */
  keys, options);
}

pathToRegexp_1.parse = parse_1;
pathToRegexp_1.compile = compile_1;
pathToRegexp_1.tokensToFunction = tokensToFunction_1;
pathToRegexp_1.tokensToRegExp = tokensToRegExp_1;
/*  */
// $flow-disable-line

var regexpCompileCache = Object.create(null);

function fillParams(path, params, routeMsg) {
  params = params || {};

  try {
    var filler = regexpCompileCache[path] || (regexpCompileCache[path] = pathToRegexp_1.compile(path)); // Fix #2505 resolving asterisk routes { name: 'not-found', params: { pathMatch: '/not-found' }}
    // and fix #3106 so that you can work with location descriptor object having params.pathMatch equal to empty string

    if (typeof params.pathMatch === 'string') {
      params[0] = params.pathMatch;
    }

    return filler(params, {
      pretty: true
    });
  } catch (e) {

    return '';
  } finally {
    // delete the 0 if it was added
    delete params[0];
  }
}
/*  */


function normalizeLocation(raw, current, append, router) {
  var next = typeof raw === 'string' ? {
    path: raw
  } : raw; // named target

  if (next._normalized) {
    return next;
  } else if (next.name) {
    next = extend({}, raw);
    var params = next.params;

    if (params && typeof params === 'object') {
      next.params = extend({}, params);
    }

    return next;
  } // relative params


  if (!next.path && next.params && current) {
    next = extend({}, next);
    next._normalized = true;
    var params$1 = extend(extend({}, current.params), next.params);

    if (current.name) {
      next.name = current.name;
      next.params = params$1;
    } else if (current.matched.length) {
      var rawPath = current.matched[current.matched.length - 1].path;
      next.path = fillParams(rawPath, params$1, "path " + current.path);
    } else ;

    return next;
  }

  var parsedPath = parsePath(next.path || '');
  var basePath = current && current.path || '/';
  var path = parsedPath.path ? resolvePath(parsedPath.path, basePath, append || next.append) : basePath;
  var query = resolveQuery(parsedPath.query, next.query, router && router.options.parseQuery);
  var hash = next.hash || parsedPath.hash;

  if (hash && hash.charAt(0) !== '#') {
    hash = "#" + hash;
  }

  return {
    _normalized: true,
    path: path,
    query: query,
    hash: hash
  };
}
/*  */
// work around weird flow bug


var toTypes = [String, Object];
var eventTypes = [String, Array];

var noop = function () {};
var Link = {
  name: 'RouterLink',
  props: {
    to: {
      type: toTypes,
      required: true
    },
    tag: {
      type: String,
      default: 'a'
    },
    custom: Boolean,
    exact: Boolean,
    exactPath: Boolean,
    append: Boolean,
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    ariaCurrentValue: {
      type: String,
      default: 'page'
    },
    event: {
      type: eventTypes,
      default: 'click'
    }
  },
  render: function render(h) {
    var this$1$1 = this;
    var router = this.$router;
    var current = this.$route;
    var ref = router.resolve(this.to, current, this.append);
    var location = ref.location;
    var route = ref.route;
    var href = ref.href;
    var classes = {};
    var globalActiveClass = router.options.linkActiveClass;
    var globalExactActiveClass = router.options.linkExactActiveClass; // Support global empty active class

    var activeClassFallback = globalActiveClass == null ? 'router-link-active' : globalActiveClass;
    var exactActiveClassFallback = globalExactActiveClass == null ? 'router-link-exact-active' : globalExactActiveClass;
    var activeClass = this.activeClass == null ? activeClassFallback : this.activeClass;
    var exactActiveClass = this.exactActiveClass == null ? exactActiveClassFallback : this.exactActiveClass;
    var compareTarget = route.redirectedFrom ? createRoute(null, normalizeLocation(route.redirectedFrom), null, router) : route;
    classes[exactActiveClass] = isSameRoute(current, compareTarget, this.exactPath);
    classes[activeClass] = this.exact || this.exactPath ? classes[exactActiveClass] : isIncludedRoute(current, compareTarget);
    var ariaCurrentValue = classes[exactActiveClass] ? this.ariaCurrentValue : null;

    var handler = function (e) {
      if (guardEvent(e)) {
        if (this$1$1.replace) {
          router.replace(location, noop);
        } else {
          router.push(location, noop);
        }
      }
    };

    var on = {
      click: guardEvent
    };

    if (Array.isArray(this.event)) {
      this.event.forEach(function (e) {
        on[e] = handler;
      });
    } else {
      on[this.event] = handler;
    }

    var data = {
      class: classes
    };
    var scopedSlot = !this.$scopedSlots.$hasNormal && this.$scopedSlots.default && this.$scopedSlots.default({
      href: href,
      route: route,
      navigate: handler,
      isActive: classes[activeClass],
      isExactActive: classes[exactActiveClass]
    });

    if (scopedSlot) {

      if (scopedSlot.length === 1) {
        return scopedSlot[0];
      } else if (scopedSlot.length > 1 || !scopedSlot.length) {

        return scopedSlot.length === 0 ? h() : h('span', {}, scopedSlot);
      }
    }

    if (this.tag === 'a') {
      data.on = on;
      data.attrs = {
        href: href,
        'aria-current': ariaCurrentValue
      };
    } else {
      // find the first <a> child and apply listener and href
      var a = findAnchor(this.$slots.default);

      if (a) {
        // in case the <a> is a static node
        a.isStatic = false;
        var aData = a.data = extend({}, a.data);
        aData.on = aData.on || {}; // transform existing events in both objects into arrays so we can push later

        for (var event in aData.on) {
          var handler$1 = aData.on[event];

          if (event in on) {
            aData.on[event] = Array.isArray(handler$1) ? handler$1 : [handler$1];
          }
        } // append new listeners for router-link


        for (var event$1 in on) {
          if (event$1 in aData.on) {
            // on[event] is always a function
            aData.on[event$1].push(on[event$1]);
          } else {
            aData.on[event$1] = handler;
          }
        }

        var aAttrs = a.data.attrs = extend({}, a.data.attrs);
        aAttrs.href = href;
        aAttrs['aria-current'] = ariaCurrentValue;
      } else {
        // doesn't have <a> child, apply listener to self
        data.on = on;
      }
    }

    return h(this.tag, data, this.$slots.default);
  }
};

function guardEvent(e) {
  // don't redirect with control keys
  if (e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) {
    return;
  } // don't redirect when preventDefault called


  if (e.defaultPrevented) {
    return;
  } // don't redirect on right click


  if (e.button !== undefined && e.button !== 0) {
    return;
  } // don't redirect if `target="_blank"`


  if (e.currentTarget && e.currentTarget.getAttribute) {
    var target = e.currentTarget.getAttribute('target');

    if (/\b_blank\b/i.test(target)) {
      return;
    }
  } // this may be a Weex event which doesn't have this method


  if (e.preventDefault) {
    e.preventDefault();
  }

  return true;
}

function findAnchor(children) {
  if (children) {
    var child;

    for (var i = 0; i < children.length; i++) {
      child = children[i];

      if (child.tag === 'a') {
        return child;
      }

      if (child.children && (child = findAnchor(child.children))) {
        return child;
      }
    }
  }
}

var _Vue;

function install(Vue) {
  if (install.installed && _Vue === Vue) {
    return;
  }

  install.installed = true;
  _Vue = Vue;

  var isDef = function (v) {
    return v !== undefined;
  };

  var registerInstance = function (vm, callVal) {
    var i = vm.$options._parentVnode;

    if (isDef(i) && isDef(i = i.data) && isDef(i = i.registerRouteInstance)) {
      i(vm, callVal);
    }
  };

  Vue.mixin({
    beforeCreate: function beforeCreate() {
      if (isDef(this.$options.router)) {
        this._routerRoot = this;
        this._router = this.$options.router;

        this._router.init(this);

        Vue.util.defineReactive(this, '_route', this._router.history.current);
      } else {
        this._routerRoot = this.$parent && this.$parent._routerRoot || this;
      }

      registerInstance(this, this);
    },
    destroyed: function destroyed() {
      registerInstance(this);
    }
  });
  Object.defineProperty(Vue.prototype, '$router', {
    get: function get() {
      return this._routerRoot._router;
    }
  });
  Object.defineProperty(Vue.prototype, '$route', {
    get: function get() {
      return this._routerRoot._route;
    }
  });
  Vue.component('RouterView', View);
  Vue.component('RouterLink', Link);
  var strats = Vue.config.optionMergeStrategies; // use the same hook merging strategy for route hooks

  strats.beforeRouteEnter = strats.beforeRouteLeave = strats.beforeRouteUpdate = strats.created;
}
/*  */


var inBrowser = "undefined" !== 'undefined';
/*  */

function createRouteMap(routes, oldPathList, oldPathMap, oldNameMap, parentRoute) {
  // the path list is used to control path matching priority
  var pathList = oldPathList || []; // $flow-disable-line

  var pathMap = oldPathMap || Object.create(null); // $flow-disable-line

  var nameMap = oldNameMap || Object.create(null);
  routes.forEach(function (route) {
    addRouteRecord(pathList, pathMap, nameMap, route, parentRoute);
  }); // ensure wildcard routes are always at the end

  for (var i = 0, l = pathList.length; i < l; i++) {
    if (pathList[i] === '*') {
      pathList.push(pathList.splice(i, 1)[0]);
      l--;
      i--;
    }
  }

  return {
    pathList: pathList,
    pathMap: pathMap,
    nameMap: nameMap
  };
}

function addRouteRecord(pathList, pathMap, nameMap, route, parent, matchAs) {
  var path = route.path;
  var name = route.name;

  var pathToRegexpOptions = route.pathToRegexpOptions || {};
  var normalizedPath = normalizePath(path, parent, pathToRegexpOptions.strict);

  if (typeof route.caseSensitive === 'boolean') {
    pathToRegexpOptions.sensitive = route.caseSensitive;
  }

  var record = {
    path: normalizedPath,
    regex: compileRouteRegex(normalizedPath, pathToRegexpOptions),
    components: route.components || {
      default: route.component
    },
    alias: route.alias ? typeof route.alias === 'string' ? [route.alias] : route.alias : [],
    instances: {},
    enteredCbs: {},
    name: name,
    parent: parent,
    matchAs: matchAs,
    redirect: route.redirect,
    beforeEnter: route.beforeEnter,
    meta: route.meta || {},
    props: route.props == null ? {} : route.components ? route.props : {
      default: route.props
    }
  };

  if (route.children) {

    route.children.forEach(function (child) {
      var childMatchAs = matchAs ? cleanPath(matchAs + "/" + child.path) : undefined;
      addRouteRecord(pathList, pathMap, nameMap, child, record, childMatchAs);
    });
  }

  if (!pathMap[record.path]) {
    pathList.push(record.path);
    pathMap[record.path] = record;
  }

  if (route.alias !== undefined) {
    var aliases = Array.isArray(route.alias) ? route.alias : [route.alias];

    for (var i = 0; i < aliases.length; ++i) {
      var alias = aliases[i];

      var aliasRoute = {
        path: alias,
        children: route.children
      };
      addRouteRecord(pathList, pathMap, nameMap, aliasRoute, parent, record.path || '/' // matchAs
      );
    }
  }

  if (name) {
    if (!nameMap[name]) {
      nameMap[name] = record;
    }
  }
}

function compileRouteRegex(path, pathToRegexpOptions) {
  var regex = pathToRegexp_1(path, [], pathToRegexpOptions);

  return regex;
}

function normalizePath(path, parent, strict) {
  if (!strict) {
    path = path.replace(/\/$/, '');
  }

  if (path[0] === '/') {
    return path;
  }

  if (parent == null) {
    return path;
  }

  return cleanPath(parent.path + "/" + path);
}
/*  */


function createMatcher(routes, router) {
  var ref = createRouteMap(routes);
  var pathList = ref.pathList;
  var pathMap = ref.pathMap;
  var nameMap = ref.nameMap;

  function addRoutes(routes) {
    createRouteMap(routes, pathList, pathMap, nameMap);
  }

  function addRoute(parentOrRoute, route) {
    var parent = typeof parentOrRoute !== 'object' ? nameMap[parentOrRoute] : undefined; // $flow-disable-line

    createRouteMap([route || parentOrRoute], pathList, pathMap, nameMap, parent); // add aliases of parent

    if (parent && parent.alias.length) {
      createRouteMap( // $flow-disable-line route is defined if parent is
      parent.alias.map(function (alias) {
        return {
          path: alias,
          children: [route]
        };
      }), pathList, pathMap, nameMap, parent);
    }
  }

  function getRoutes() {
    return pathList.map(function (path) {
      return pathMap[path];
    });
  }

  function match(raw, currentRoute, redirectedFrom) {
    var location = normalizeLocation(raw, currentRoute, false, router);
    var name = location.name;

    if (name) {
      var record = nameMap[name];

      if (!record) {
        return _createRoute(null, location);
      }

      var paramNames = record.regex.keys.filter(function (key) {
        return !key.optional;
      }).map(function (key) {
        return key.name;
      });

      if (typeof location.params !== 'object') {
        location.params = {};
      }

      if (currentRoute && typeof currentRoute.params === 'object') {
        for (var key in currentRoute.params) {
          if (!(key in location.params) && paramNames.indexOf(key) > -1) {
            location.params[key] = currentRoute.params[key];
          }
        }
      }

      location.path = fillParams(record.path, location.params);
      return _createRoute(record, location, redirectedFrom);
    } else if (location.path) {
      location.params = {};

      for (var i = 0; i < pathList.length; i++) {
        var path = pathList[i];
        var record$1 = pathMap[path];

        if (matchRoute(record$1.regex, location.path, location.params)) {
          return _createRoute(record$1, location, redirectedFrom);
        }
      }
    } // no match


    return _createRoute(null, location);
  }

  function redirect(record, location) {
    var originalRedirect = record.redirect;
    var redirect = typeof originalRedirect === 'function' ? originalRedirect(createRoute(record, location, null, router)) : originalRedirect;

    if (typeof redirect === 'string') {
      redirect = {
        path: redirect
      };
    }

    if (!redirect || typeof redirect !== 'object') {

      return _createRoute(null, location);
    }

    var re = redirect;
    var name = re.name;
    var path = re.path;
    var query = location.query;
    var hash = location.hash;
    var params = location.params;
    query = re.hasOwnProperty('query') ? re.query : query;
    hash = re.hasOwnProperty('hash') ? re.hash : hash;
    params = re.hasOwnProperty('params') ? re.params : params;

    if (name) {
      // resolved named direct
      nameMap[name];

      return match({
        _normalized: true,
        name: name,
        query: query,
        hash: hash,
        params: params
      }, undefined, location);
    } else if (path) {
      // 1. resolve relative redirect
      var rawPath = resolveRecordPath(path, record); // 2. resolve params

      var resolvedPath = fillParams(rawPath, params); // 3. rematch with existing query and hash

      return match({
        _normalized: true,
        path: resolvedPath,
        query: query,
        hash: hash
      }, undefined, location);
    } else {

      return _createRoute(null, location);
    }
  }

  function alias(record, location, matchAs) {
    var aliasedPath = fillParams(matchAs, location.params);
    var aliasedMatch = match({
      _normalized: true,
      path: aliasedPath
    });

    if (aliasedMatch) {
      var matched = aliasedMatch.matched;
      var aliasedRecord = matched[matched.length - 1];
      location.params = aliasedMatch.params;
      return _createRoute(aliasedRecord, location);
    }

    return _createRoute(null, location);
  }

  function _createRoute(record, location, redirectedFrom) {
    if (record && record.redirect) {
      return redirect(record, redirectedFrom || location);
    }

    if (record && record.matchAs) {
      return alias(record, location, record.matchAs);
    }

    return createRoute(record, location, redirectedFrom, router);
  }

  return {
    match: match,
    addRoute: addRoute,
    getRoutes: getRoutes,
    addRoutes: addRoutes
  };
}

function matchRoute(regex, path, params) {
  var m = path.match(regex);

  if (!m) {
    return false;
  } else if (!params) {
    return true;
  }

  for (var i = 1, len = m.length; i < len; ++i) {
    var key = regex.keys[i - 1];

    if (key) {
      // Fix #1994: using * with props: true generates a param named 0
      params[key.name || 'pathMatch'] = typeof m[i] === 'string' ? decode(m[i]) : m[i];
    }
  }

  return true;
}

function resolveRecordPath(path, record) {
  return resolvePath(path, record.parent ? record.parent.path : '/', true);
}
/*  */
// use User Timing api (if present) for more accurate key precision


var Time = Date;

function genStateKey() {
  return Time.now().toFixed(3);
}

var _key = genStateKey();

function getStateKey() {
  return _key;
}

function setStateKey(key) {
  return _key = key;
}
/*  */


var positionStore = Object.create(null);

function handleScroll(router, to, from, isPop) {
  if (!router.app) {
    return;
  }

  var behavior = router.options.scrollBehavior;

  if (!behavior) {
    return;
  }


  router.app.$nextTick(function () {
    var position = getScrollPosition();
    var shouldScroll = behavior.call(router, to, from, isPop ? position : null);

    if (!shouldScroll) {
      return;
    }

    if (typeof shouldScroll.then === 'function') {
      shouldScroll.then(function (shouldScroll) {
        scrollToPosition(shouldScroll, position);
      }).catch(function (err) {
      });
    } else {
      scrollToPosition(shouldScroll, position);
    }
  });
}

function saveScrollPosition() {
  var key = getStateKey();

  if (key) {
    positionStore[key] = {
      x: window.pageXOffset,
      y: window.pageYOffset
    };
  }
}

function getScrollPosition() {
  var key = getStateKey();

  if (key) {
    return positionStore[key];
  }
}

function getElementPosition(el, offset) {
  var docEl = document.documentElement;
  var docRect = docEl.getBoundingClientRect();
  var elRect = el.getBoundingClientRect();
  return {
    x: elRect.left - docRect.left - offset.x,
    y: elRect.top - docRect.top - offset.y
  };
}

function isValidPosition(obj) {
  return isNumber(obj.x) || isNumber(obj.y);
}

function normalizePosition(obj) {
  return {
    x: isNumber(obj.x) ? obj.x : window.pageXOffset,
    y: isNumber(obj.y) ? obj.y : window.pageYOffset
  };
}

function normalizeOffset(obj) {
  return {
    x: isNumber(obj.x) ? obj.x : 0,
    y: isNumber(obj.y) ? obj.y : 0
  };
}

function isNumber(v) {
  return typeof v === 'number';
}

var hashStartsWithNumberRE = /^#\d/;

function scrollToPosition(shouldScroll, position) {
  var isObject = typeof shouldScroll === 'object';

  if (isObject && typeof shouldScroll.selector === 'string') {
    // getElementById would still fail if the selector contains a more complicated query like #main[data-attr]
    // but at the same time, it doesn't make much sense to select an element with an id and an extra selector
    var el = hashStartsWithNumberRE.test(shouldScroll.selector) // $flow-disable-line
    ? document.getElementById(shouldScroll.selector.slice(1)) // $flow-disable-line
    : document.querySelector(shouldScroll.selector);

    if (el) {
      var offset = shouldScroll.offset && typeof shouldScroll.offset === 'object' ? shouldScroll.offset : {};
      offset = normalizeOffset(offset);
      position = getElementPosition(el, offset);
    } else if (isValidPosition(shouldScroll)) {
      position = normalizePosition(shouldScroll);
    }
  } else if (isObject && isValidPosition(shouldScroll)) {
    position = normalizePosition(shouldScroll);
  }

  if (position) {
    // $flow-disable-line
    if ('scrollBehavior' in document.documentElement.style) {
      window.scrollTo({
        left: position.x,
        top: position.y,
        // $flow-disable-line
        behavior: shouldScroll.behavior
      });
    } else {
      window.scrollTo(position.x, position.y);
    }
  }
}
/*  */


var supportsPushState = inBrowser ;

function pushState(url, replace) {
  saveScrollPosition(); // try...catch the pushState call to get around Safari
  // DOM Exception 18 where it limits to 100 pushState calls

  var history = window.history;

  try {
    if (replace) {
      // preserve existing history state as it could be overriden by the user
      var stateCopy = extend({}, history.state);
      stateCopy.key = getStateKey();
      history.replaceState(stateCopy, '', url);
    } else {
      history.pushState({
        key: setStateKey(genStateKey())
      }, '', url);
    }
  } catch (e) {
    window.location[replace ? 'replace' : 'assign'](url);
  }
}

function replaceState(url) {
  pushState(url, true);
}
/*  */


function runQueue(queue, fn, cb) {
  var step = function (index) {
    if (index >= queue.length) {
      cb();
    } else {
      if (queue[index]) {
        fn(queue[index], function () {
          step(index + 1);
        });
      } else {
        step(index + 1);
      }
    }
  };

  step(0);
} // When changing thing, also edit router.d.ts


var NavigationFailureType = {
  redirected: 2,
  aborted: 4,
  cancelled: 8,
  duplicated: 16
};

function createNavigationRedirectedError(from, to) {
  return createRouterError(from, to, NavigationFailureType.redirected, "Redirected when going from \"" + from.fullPath + "\" to \"" + stringifyRoute(to) + "\" via a navigation guard.");
}

function createNavigationDuplicatedError(from, to) {
  var error = createRouterError(from, to, NavigationFailureType.duplicated, "Avoided redundant navigation to current location: \"" + from.fullPath + "\"."); // backwards compatible with the first introduction of Errors

  error.name = 'NavigationDuplicated';
  return error;
}

function createNavigationCancelledError(from, to) {
  return createRouterError(from, to, NavigationFailureType.cancelled, "Navigation cancelled from \"" + from.fullPath + "\" to \"" + to.fullPath + "\" with a new navigation.");
}

function createNavigationAbortedError(from, to) {
  return createRouterError(from, to, NavigationFailureType.aborted, "Navigation aborted from \"" + from.fullPath + "\" to \"" + to.fullPath + "\" via a navigation guard.");
}

function createRouterError(from, to, type, message) {
  var error = new Error(message);
  error._isRouter = true;
  error.from = from;
  error.to = to;
  error.type = type;
  return error;
}

var propertiesToLog = ['params', 'query', 'hash'];

function stringifyRoute(to) {
  if (typeof to === 'string') {
    return to;
  }

  if ('path' in to) {
    return to.path;
  }

  var location = {};
  propertiesToLog.forEach(function (key) {
    if (key in to) {
      location[key] = to[key];
    }
  });
  return JSON.stringify(location, null, 2);
}

function isError(err) {
  return Object.prototype.toString.call(err).indexOf('Error') > -1;
}

function isNavigationFailure(err, errorType) {
  return isError(err) && err._isRouter && (errorType == null || err.type === errorType);
}
/*  */


function resolveAsyncComponents(matched) {
  return function (to, from, next) {
    var hasAsync = false;
    var pending = 0;
    var error = null;
    vue_router_esm_flatMapComponents(matched, function (def, _, match, key) {
      // if it's a function and doesn't have cid attached,
      // assume it's an async component resolve function.
      // we are not using Vue's default async resolving mechanism because
      // we want to halt the navigation until the incoming component has been
      // resolved.
      if (typeof def === 'function' && def.cid === undefined) {
        hasAsync = true;
        pending++;
        var resolve = once(function (resolvedDef) {
          if (isESModule(resolvedDef)) {
            resolvedDef = resolvedDef.default;
          } // save resolved on async factory in case it's used elsewhere


          def.resolved = typeof resolvedDef === 'function' ? resolvedDef : _Vue.extend(resolvedDef);
          match.components[key] = resolvedDef;
          pending--;

          if (pending <= 0) {
            next();
          }
        });
        var reject = once(function (reason) {
          var msg = "Failed to resolve async component " + key + ": " + reason;

          if (!error) {
            error = isError(reason) ? reason : new Error(msg);
            next(error);
          }
        });
        var res;

        try {
          res = def(resolve, reject);
        } catch (e) {
          reject(e);
        }

        if (res) {
          if (typeof res.then === 'function') {
            res.then(resolve, reject);
          } else {
            // new syntax in Vue 2.3
            var comp = res.component;

            if (comp && typeof comp.then === 'function') {
              comp.then(resolve, reject);
            }
          }
        }
      }
    });

    if (!hasAsync) {
      next();
    }
  };
}

function vue_router_esm_flatMapComponents(matched, fn) {
  return flatten(matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return fn(m.components[key], m.instances[key], m, key);
    });
  }));
}

function flatten(arr) {
  return Array.prototype.concat.apply([], arr);
}

var hasSymbol = typeof Symbol === 'function' && typeof Symbol.toStringTag === 'symbol';

function isESModule(obj) {
  return obj.__esModule || hasSymbol && obj[Symbol.toStringTag] === 'Module';
} // in Webpack 2, require.ensure now also returns a Promise
// so the resolve/reject functions may get called an extra time
// if the user uses an arrow function shorthand that happens to
// return that Promise.


function once(fn) {
  var called = false;
  return function () {
    var args = [],
        len = arguments.length;

    while (len--) args[len] = arguments[len];

    if (called) {
      return;
    }

    called = true;
    return fn.apply(this, args);
  };
}
/*  */


var History = function History(router, base) {
  this.router = router;
  this.base = normalizeBase(base); // start with a route object that stands for "nowhere"

  this.current = START;
  this.pending = null;
  this.ready = false;
  this.readyCbs = [];
  this.readyErrorCbs = [];
  this.errorCbs = [];
  this.listeners = [];
};

History.prototype.listen = function listen(cb) {
  this.cb = cb;
};

History.prototype.onReady = function onReady(cb, errorCb) {
  if (this.ready) {
    cb();
  } else {
    this.readyCbs.push(cb);

    if (errorCb) {
      this.readyErrorCbs.push(errorCb);
    }
  }
};

History.prototype.onError = function onError(errorCb) {
  this.errorCbs.push(errorCb);
};

History.prototype.transitionTo = function transitionTo(location, onComplete, onAbort) {
  var this$1$1 = this;
  var route; // catch redirect option https://github.com/vuejs/vue-router/issues/3201

  try {
    route = this.router.match(location, this.current);
  } catch (e) {
    this.errorCbs.forEach(function (cb) {
      cb(e);
    }); // Exception should still be thrown

    throw e;
  }

  var prev = this.current;
  this.confirmTransition(route, function () {
    this$1$1.updateRoute(route);
    onComplete && onComplete(route);
    this$1$1.ensureURL();
    this$1$1.router.afterHooks.forEach(function (hook) {
      hook && hook(route, prev);
    }); // fire ready cbs once

    if (!this$1$1.ready) {
      this$1$1.ready = true;
      this$1$1.readyCbs.forEach(function (cb) {
        cb(route);
      });
    }
  }, function (err) {
    if (onAbort) {
      onAbort(err);
    }

    if (err && !this$1$1.ready) {
      // Initial redirection should not mark the history as ready yet
      // because it's triggered by the redirection instead
      // https://github.com/vuejs/vue-router/issues/3225
      // https://github.com/vuejs/vue-router/issues/3331
      if (!isNavigationFailure(err, NavigationFailureType.redirected) || prev !== START) {
        this$1$1.ready = true;
        this$1$1.readyErrorCbs.forEach(function (cb) {
          cb(err);
        });
      }
    }
  });
};

History.prototype.confirmTransition = function confirmTransition(route, onComplete, onAbort) {
  var this$1$1 = this;
  var current = this.current;
  this.pending = route;

  var abort = function (err) {
    // changed after adding errors with
    // https://github.com/vuejs/vue-router/pull/3047 before that change,
    // redirect and aborted navigation would produce an err == null
    if (!isNavigationFailure(err) && isError(err)) {
      if (this$1$1.errorCbs.length) {
        this$1$1.errorCbs.forEach(function (cb) {
          cb(err);
        });
      } else {

        console.error(err);
      }
    }

    onAbort && onAbort(err);
  };

  var lastRouteIndex = route.matched.length - 1;
  var lastCurrentIndex = current.matched.length - 1;

  if (isSameRoute(route, current) && // in the case the route map has been dynamically appended to
  lastRouteIndex === lastCurrentIndex && route.matched[lastRouteIndex] === current.matched[lastCurrentIndex]) {
    this.ensureURL();

    if (route.hash) {
      handleScroll(this.router, current, route, false);
    }

    return abort(createNavigationDuplicatedError(current, route));
  }

  var ref = resolveQueue(this.current.matched, route.matched);
  var updated = ref.updated;
  var deactivated = ref.deactivated;
  var activated = ref.activated;
  var queue = [].concat( // in-component leave guards
  extractLeaveGuards(deactivated), // global before hooks
  this.router.beforeHooks, // in-component update hooks
  extractUpdateHooks(updated), // in-config enter guards
  activated.map(function (m) {
    return m.beforeEnter;
  }), // async components
  resolveAsyncComponents(activated));

  var iterator = function (hook, next) {
    if (this$1$1.pending !== route) {
      return abort(createNavigationCancelledError(current, route));
    }

    try {
      hook(route, current, function (to) {
        if (to === false) {
          // next(false) -> abort navigation, ensure current URL
          this$1$1.ensureURL(true);
          abort(createNavigationAbortedError(current, route));
        } else if (isError(to)) {
          this$1$1.ensureURL(true);
          abort(to);
        } else if (typeof to === 'string' || typeof to === 'object' && (typeof to.path === 'string' || typeof to.name === 'string')) {
          // next('/') or next({ path: '/' }) -> redirect
          abort(createNavigationRedirectedError(current, route));

          if (typeof to === 'object' && to.replace) {
            this$1$1.replace(to);
          } else {
            this$1$1.push(to);
          }
        } else {
          // confirm transition and pass on the value
          next(to);
        }
      });
    } catch (e) {
      abort(e);
    }
  };

  runQueue(queue, iterator, function () {
    // wait until async components are resolved before
    // extracting in-component enter guards
    var enterGuards = extractEnterGuards(activated);
    var queue = enterGuards.concat(this$1$1.router.resolveHooks);
    runQueue(queue, iterator, function () {
      if (this$1$1.pending !== route) {
        return abort(createNavigationCancelledError(current, route));
      }

      this$1$1.pending = null;
      onComplete(route);

      if (this$1$1.router.app) {
        this$1$1.router.app.$nextTick(function () {
          handleRouteEntered(route);
        });
      }
    });
  });
};

History.prototype.updateRoute = function updateRoute(route) {
  this.current = route;
  this.cb && this.cb(route);
};

History.prototype.setupListeners = function setupListeners() {// Default implementation is empty
};

History.prototype.teardown = function teardown() {
  // clean up event listeners
  // https://github.com/vuejs/vue-router/issues/2341
  this.listeners.forEach(function (cleanupListener) {
    cleanupListener();
  });
  this.listeners = []; // reset current history route
  // https://github.com/vuejs/vue-router/issues/3294

  this.current = START;
  this.pending = null;
};

function normalizeBase(base) {
  if (!base) {
    {
      base = '/';
    }
  } // make sure there's the starting slash


  if (base.charAt(0) !== '/') {
    base = '/' + base;
  } // remove trailing slash


  return base.replace(/\/$/, '');
}

function resolveQueue(current, next) {
  var i;
  var max = Math.max(current.length, next.length);

  for (i = 0; i < max; i++) {
    if (current[i] !== next[i]) {
      break;
    }
  }

  return {
    updated: next.slice(0, i),
    activated: next.slice(i),
    deactivated: current.slice(i)
  };
}

function extractGuards(records, name, bind, reverse) {
  var guards = vue_router_esm_flatMapComponents(records, function (def, instance, match, key) {
    var guard = extractGuard(def, name);

    if (guard) {
      return Array.isArray(guard) ? guard.map(function (guard) {
        return bind(guard, instance, match, key);
      }) : bind(guard, instance, match, key);
    }
  });
  return flatten(reverse ? guards.reverse() : guards);
}

function extractGuard(def, key) {
  if (typeof def !== 'function') {
    // extend now so that global mixins are applied.
    def = _Vue.extend(def);
  }

  return def.options[key];
}

function extractLeaveGuards(deactivated) {
  return extractGuards(deactivated, 'beforeRouteLeave', bindGuard, true);
}

function extractUpdateHooks(updated) {
  return extractGuards(updated, 'beforeRouteUpdate', bindGuard);
}

function bindGuard(guard, instance) {
  if (instance) {
    return function boundRouteGuard() {
      return guard.apply(instance, arguments);
    };
  }
}

function extractEnterGuards(activated) {
  return extractGuards(activated, 'beforeRouteEnter', function (guard, _, match, key) {
    return bindEnterGuard(guard, match, key);
  });
}

function bindEnterGuard(guard, match, key) {
  return function routeEnterGuard(to, from, next) {
    return guard(to, from, function (cb) {
      if (typeof cb === 'function') {
        if (!match.enteredCbs[key]) {
          match.enteredCbs[key] = [];
        }

        match.enteredCbs[key].push(cb);
      }

      next(cb);
    });
  };
}
/*  */


var HTML5History = /*@__PURE__*/function (History) {
  function HTML5History(router, base) {
    History.call(this, router, base);
    this._startLocation = vue_router_esm_getLocation(this.base);
  }

  if (History) HTML5History.__proto__ = History;
  HTML5History.prototype = Object.create(History && History.prototype);
  HTML5History.prototype.constructor = HTML5History;

  HTML5History.prototype.setupListeners = function setupListeners() {
    var this$1$1 = this;

    if (this.listeners.length > 0) {
      return;
    }

    var router = this.router;
    router.options.scrollBehavior;

    var handleRoutingEvent = function () {
      this$1$1.current; // Avoiding first `popstate` event dispatched in some browsers but first
      // history route not updated since async guard at the same time.

      var location = vue_router_esm_getLocation(this$1$1.base);

      if (this$1$1.current === START && location === this$1$1._startLocation) {
        return;
      }

      this$1$1.transitionTo(location, function (route) {
      });
    };

    window.addEventListener('popstate', handleRoutingEvent);
    this.listeners.push(function () {
      window.removeEventListener('popstate', handleRoutingEvent);
    });
  };

  HTML5History.prototype.go = function go(n) {
    window.history.go(n);
  };

  HTML5History.prototype.push = function push(location, onComplete, onAbort) {
    var this$1$1 = this;
    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushState(cleanPath(this$1$1.base + route.fullPath));
      handleScroll(this$1$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.replace = function replace(location, onComplete, onAbort) {
    var this$1$1 = this;
    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceState(cleanPath(this$1$1.base + route.fullPath));
      handleScroll(this$1$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HTML5History.prototype.ensureURL = function ensureURL(push) {
    if (vue_router_esm_getLocation(this.base) !== this.current.fullPath) {
      var current = cleanPath(this.base + this.current.fullPath);
      push ? pushState(current) : replaceState(current);
    }
  };

  HTML5History.prototype.getCurrentLocation = function getCurrentLocation() {
    return vue_router_esm_getLocation(this.base);
  };

  return HTML5History;
}(History);

function vue_router_esm_getLocation(base) {
  var path = window.location.pathname;
  var pathLowerCase = path.toLowerCase();
  var baseLowerCase = base.toLowerCase(); // base="/a" shouldn't turn path="/app" into "/a/pp"
  // https://github.com/vuejs/vue-router/issues/3555
  // so we ensure the trailing slash in the base

  if (base && (pathLowerCase === baseLowerCase || pathLowerCase.indexOf(cleanPath(baseLowerCase + '/')) === 0)) {
    path = path.slice(base.length);
  }

  return (path || '/') + window.location.search + window.location.hash;
}
/*  */


var HashHistory = /*@__PURE__*/function (History) {
  function HashHistory(router, base, fallback) {
    History.call(this, router, base); // check history fallback deeplinking

    if (fallback && checkFallback(this.base)) {
      return;
    }

    ensureSlash();
  }

  if (History) HashHistory.__proto__ = History;
  HashHistory.prototype = Object.create(History && History.prototype);
  HashHistory.prototype.constructor = HashHistory; // this is delayed until the app mounts
  // to avoid the hashchange listener being fired too early

  HashHistory.prototype.setupListeners = function setupListeners() {
    var this$1$1 = this;

    if (this.listeners.length > 0) {
      return;
    }

    var router = this.router;
    router.options.scrollBehavior;

    var handleRoutingEvent = function () {
      this$1$1.current;

      if (!ensureSlash()) {
        return;
      }

      this$1$1.transitionTo(getHash(), function (route) {

        {
          replaceHash(route.fullPath);
        }
      });
    };

    var eventType = 'hashchange';
    window.addEventListener(eventType, handleRoutingEvent);
    this.listeners.push(function () {
      window.removeEventListener(eventType, handleRoutingEvent);
    });
  };

  HashHistory.prototype.push = function push(location, onComplete, onAbort) {
    var this$1$1 = this;
    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      pushHash(route.fullPath);
      handleScroll(this$1$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.replace = function replace(location, onComplete, onAbort) {
    var this$1$1 = this;
    var ref = this;
    var fromRoute = ref.current;
    this.transitionTo(location, function (route) {
      replaceHash(route.fullPath);
      handleScroll(this$1$1.router, route, fromRoute, false);
      onComplete && onComplete(route);
    }, onAbort);
  };

  HashHistory.prototype.go = function go(n) {
    window.history.go(n);
  };

  HashHistory.prototype.ensureURL = function ensureURL(push) {
    var current = this.current.fullPath;

    if (getHash() !== current) {
      push ? pushHash(current) : replaceHash(current);
    }
  };

  HashHistory.prototype.getCurrentLocation = function getCurrentLocation() {
    return getHash();
  };

  return HashHistory;
}(History);

function checkFallback(base) {
  var location = vue_router_esm_getLocation(base);

  if (!/^\/#/.test(location)) {
    window.location.replace(cleanPath(base + '/#' + location));
    return true;
  }
}

function ensureSlash() {
  var path = getHash();

  if (path.charAt(0) === '/') {
    return true;
  }

  replaceHash('/' + path);
  return false;
}

function getHash() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  var href = window.location.href;
  var index = href.indexOf('#'); // empty path

  if (index < 0) {
    return '';
  }

  href = href.slice(index + 1);
  return href;
}

function getUrl(path) {
  var href = window.location.href;
  var i = href.indexOf('#');
  var base = i >= 0 ? href.slice(0, i) : href;
  return base + "#" + path;
}

function pushHash(path) {
  {
    window.location.hash = path;
  }
}

function replaceHash(path) {
  {
    window.location.replace(getUrl(path));
  }
}
/*  */


var AbstractHistory = /*@__PURE__*/function (History) {
  function AbstractHistory(router, base) {
    History.call(this, router, base);
    this.stack = [];
    this.index = -1;
  }

  if (History) AbstractHistory.__proto__ = History;
  AbstractHistory.prototype = Object.create(History && History.prototype);
  AbstractHistory.prototype.constructor = AbstractHistory;

  AbstractHistory.prototype.push = function push(location, onComplete, onAbort) {
    var this$1$1 = this;
    this.transitionTo(location, function (route) {
      this$1$1.stack = this$1$1.stack.slice(0, this$1$1.index + 1).concat(route);
      this$1$1.index++;
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.replace = function replace(location, onComplete, onAbort) {
    var this$1$1 = this;
    this.transitionTo(location, function (route) {
      this$1$1.stack = this$1$1.stack.slice(0, this$1$1.index).concat(route);
      onComplete && onComplete(route);
    }, onAbort);
  };

  AbstractHistory.prototype.go = function go(n) {
    var this$1$1 = this;
    var targetIndex = this.index + n;

    if (targetIndex < 0 || targetIndex >= this.stack.length) {
      return;
    }

    var route = this.stack[targetIndex];
    this.confirmTransition(route, function () {
      var prev = this$1$1.current;
      this$1$1.index = targetIndex;
      this$1$1.updateRoute(route);
      this$1$1.router.afterHooks.forEach(function (hook) {
        hook && hook(route, prev);
      });
    }, function (err) {
      if (isNavigationFailure(err, NavigationFailureType.duplicated)) {
        this$1$1.index = targetIndex;
      }
    });
  };

  AbstractHistory.prototype.getCurrentLocation = function getCurrentLocation() {
    var current = this.stack[this.stack.length - 1];
    return current ? current.fullPath : '/';
  };

  AbstractHistory.prototype.ensureURL = function ensureURL() {// noop
  };

  return AbstractHistory;
}(History);
/*  */


var VueRouter = function VueRouter(options) {
  if (options === void 0) options = {};

  this.app = null;
  this.apps = [];
  this.options = options;
  this.beforeHooks = [];
  this.resolveHooks = [];
  this.afterHooks = [];
  this.matcher = createMatcher(options.routes || [], this);
  var mode = options.mode || 'hash';
  this.fallback = mode === 'history' && !supportsPushState && options.fallback !== false;

  if (this.fallback) {
    mode = 'hash';
  }

  {
    mode = 'abstract';
  }

  this.mode = mode;

  switch (mode) {
    case 'history':
      this.history = new HTML5History(this, options.base);
      break;

    case 'hash':
      this.history = new HashHistory(this, options.base, this.fallback);
      break;

    case 'abstract':
      this.history = new AbstractHistory(this, options.base);
      break;

  }
};

var prototypeAccessors = {
  currentRoute: {
    configurable: true
  }
};

VueRouter.prototype.match = function match(raw, current, redirectedFrom) {
  return this.matcher.match(raw, current, redirectedFrom);
};

prototypeAccessors.currentRoute.get = function () {
  return this.history && this.history.current;
};

VueRouter.prototype.init = function init(app
/* Vue component instance */
) {
  var this$1$1 = this;
  this.apps.push(app); // set up app destroyed handler
  // https://github.com/vuejs/vue-router/issues/2639

  app.$once('hook:destroyed', function () {
    // clean out app from this.apps array once destroyed
    var index = this$1$1.apps.indexOf(app);

    if (index > -1) {
      this$1$1.apps.splice(index, 1);
    } // ensure we still have a main app or null if no apps
    // we do not release the router so it can be reused


    if (this$1$1.app === app) {
      this$1$1.app = this$1$1.apps[0] || null;
    }

    if (!this$1$1.app) {
      this$1$1.history.teardown();
    }
  }); // main app previously initialized
  // return as we don't need to set up new history listener

  if (this.app) {
    return;
  }

  this.app = app;
  var history = this.history;

  if (history instanceof HTML5History || history instanceof HashHistory) {
    var handleInitialScroll = function (routeOrError) {
      history.current;
      this$1$1.options.scrollBehavior;
    };

    var setupListeners = function (routeOrError) {
      history.setupListeners();
      handleInitialScroll(routeOrError);
    };

    history.transitionTo(history.getCurrentLocation(), setupListeners, setupListeners);
  }

  history.listen(function (route) {
    this$1$1.apps.forEach(function (app) {
      app._route = route;
    });
  });
};

VueRouter.prototype.beforeEach = function beforeEach(fn) {
  return registerHook(this.beforeHooks, fn);
};

VueRouter.prototype.beforeResolve = function beforeResolve(fn) {
  return registerHook(this.resolveHooks, fn);
};

VueRouter.prototype.afterEach = function afterEach(fn) {
  return registerHook(this.afterHooks, fn);
};

VueRouter.prototype.onReady = function onReady(cb, errorCb) {
  this.history.onReady(cb, errorCb);
};

VueRouter.prototype.onError = function onError(errorCb) {
  this.history.onError(errorCb);
};

VueRouter.prototype.push = function push(location, onComplete, onAbort) {
  var this$1$1 = this; // $flow-disable-line

  if (!onComplete && !onAbort && typeof Promise !== 'undefined') {
    return new Promise(function (resolve, reject) {
      this$1$1.history.push(location, resolve, reject);
    });
  } else {
    this.history.push(location, onComplete, onAbort);
  }
};

VueRouter.prototype.replace = function replace(location, onComplete, onAbort) {
  var this$1$1 = this; // $flow-disable-line

  if (!onComplete && !onAbort && typeof Promise !== 'undefined') {
    return new Promise(function (resolve, reject) {
      this$1$1.history.replace(location, resolve, reject);
    });
  } else {
    this.history.replace(location, onComplete, onAbort);
  }
};

VueRouter.prototype.go = function go(n) {
  this.history.go(n);
};

VueRouter.prototype.back = function back() {
  this.go(-1);
};

VueRouter.prototype.forward = function forward() {
  this.go(1);
};

VueRouter.prototype.getMatchedComponents = function getMatchedComponents(to) {
  var route = to ? to.matched ? to : this.resolve(to).route : this.currentRoute;

  if (!route) {
    return [];
  }

  return [].concat.apply([], route.matched.map(function (m) {
    return Object.keys(m.components).map(function (key) {
      return m.components[key];
    });
  }));
};

VueRouter.prototype.resolve = function resolve(to, current, append) {
  current = current || this.history.current;
  var location = normalizeLocation(to, current, append, this);
  var route = this.match(location, current);
  var fullPath = route.redirectedFrom || route.fullPath;
  var base = this.history.base;
  var href = createHref(base, fullPath, this.mode);
  return {
    location: location,
    route: route,
    href: href,
    // for backwards compat
    normalizedTo: location,
    resolved: route
  };
};

VueRouter.prototype.getRoutes = function getRoutes() {
  return this.matcher.getRoutes();
};

VueRouter.prototype.addRoute = function addRoute(parentOrRoute, route) {
  this.matcher.addRoute(parentOrRoute, route);

  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

VueRouter.prototype.addRoutes = function addRoutes(routes) {

  this.matcher.addRoutes(routes);

  if (this.history.current !== START) {
    this.history.transitionTo(this.history.getCurrentLocation());
  }
};

Object.defineProperties(VueRouter.prototype, prototypeAccessors);

function registerHook(list, fn) {
  list.push(fn);
  return function () {
    var i = list.indexOf(fn);

    if (i > -1) {
      list.splice(i, 1);
    }
  };
}

function createHref(base, fullPath, mode) {
  var path = mode === 'hash' ? '#' + fullPath : fullPath;
  return base ? cleanPath(base + '/' + path) : path;
}

VueRouter.install = install;
VueRouter.version = '3.5.3';
VueRouter.isNavigationFailure = isNavigationFailure;
VueRouter.NavigationFailureType = NavigationFailureType;
VueRouter.START_LOCATION = START;

/* harmony default export */ var vue_router_esm = (VueRouter);

function shouldScrollToTop(route) {
  const Pages = getMatchedComponents(route);

  if (Pages.length === 1) {
    const {
      options = {}
    } = Pages[0];
    return options.scrollToTop !== false;
  }

  return Pages.some(({
    options
  }) => options && options.scrollToTop);
}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // If the returned position is falsy or an empty object, will retain current scroll position
  let position = false;
  const isRouteChanged = to !== from; // savedPosition is only available for popstate navigations (back button)

  if (savedPosition) {
    position = savedPosition;
  } else if (isRouteChanged && shouldScrollToTop(to)) {
    position = {
      x: 0,
      y: 0
    };
  }

  const nuxt = window.$nuxt;

  if ( // Initial load (vuejs/vue-router#3199)
  !isRouteChanged || // Route hash changes
  to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          const el = document.querySelector(hash);

          if (el) {
            var _getComputedStyle$scr;

            // scroll to anchor by returning the selector
            position = {
              selector: hash
            }; // Respect any scroll-margin-top set in CSS when scrolling to anchor

            const y = Number((_getComputedStyle$scr = getComputedStyle(el)['scroll-margin-top']) === null || _getComputedStyle$scr === void 0 ? void 0 : _getComputedStyle$scr.replace('px', ''));

            if (y) {
              position.offset = {
                y
              };
            }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./node_modules/.cache/nuxt/router.js






const _247d34a6 = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 4).then(__webpack_require__.bind(null, 73)));

const emptyFn = () => {};

vue2_bridge["default"].use(vue_router_esm);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/",
    component: _247d34a6,
    name: "index"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new vue_router_esm({ ...routerOptions,
    base
  }); // TODO: remove in Nuxt 3

  const originalPush = router.push;

  router.push = function push(location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort);
  };

  const resolve = router.resolve.bind(router);

  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = Object(external_ufo_["normalizeURL"])(to);
    }

    return resolve(to, current, append);
  };

  return router;
}
// CONCATENATED MODULE: ./node_modules/.cache/nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/.cache/nuxt/components/nuxt-error.vue?vue&type=template&id=608a1420&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"__nuxt-error-page"},[_vm._ssrNode("<div class=\"error\">","</div>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</div> "),(_vm.statusCode === 404)?_vm._ssrNode("<p class=\"description\">","</p>",[(typeof _vm.$route === 'undefined')?_vm._ssrNode("<a href=\"/\" class=\"error-link\">","</a>"):_c('NuxtLink',{staticClass:"error-link",attrs:{"to":"/"}},[_vm._v("Back to the home page")])],1):_vm._e(),_vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt</a></div>")],2)])};
var staticRenderFns = [];


// CONCATENATED MODULE: ./node_modules/.cache/nuxt/components/nuxt-error.vue?vue&type=template&id=608a1420&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/.cache/nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },

    message() {
      return this.error.message || 'Error';
    }

  },

  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }

});
// CONCATENATED MODULE: ./node_modules/.cache/nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/.cache/nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(56);
if (style0.__inject__) style0.__inject__(context);

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "e61f0886"
  
);

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./node_modules/.cache/nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    vue2_bridge["default"].util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/.cache/nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./node_modules/.cache/nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/.cache/nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns;


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(58);
if (style0.__inject__) style0.__inject__(context);

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "edd1049e"
  
);

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/vant/lib/index.css
__webpack_require__(60);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--34-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--32-0!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--33-0!./layouts/default.vue?vue&type=template&id=1fc01f0c&
var defaultvue_type_template_id_1fc01f0c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-content"},[_c('Nuxt')],1)};
var defaultvue_type_template_id_1fc01f0c_staticRenderFns = [];


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=1fc01f0c&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--34-0!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--32-0!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--33-0!./layouts/default.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var defaultvue_type_script_lang_js_ = ({});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/default.vue



function default_injectStyles (context) {
  
  var style0 = __webpack_require__(62);
if (style0.__inject__) style0.__inject__(context);

}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_1fc01f0c_render,
  defaultvue_type_template_id_1fc01f0c_staticRenderFns,
  false,
  default_injectStyles,
  null,
  "51d32ff8"
  
);

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./node_modules/.cache/nuxt/App.js







const layouts = {
  "_default": sanitizeComponent(layouts_default)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    vue2_bridge["default"].util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;

    if (this.isPreview) {
      if (this.$store && this.$store._actions.nuxtServerInit) {
        this.$loading.start();
        await this.$store.dispatch('nuxtServerInit', this.context);
      }

      await this.refresh();
      this.$loading.finish();
    }
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    },

    isPreview() {
      return Boolean(this.$options.previewData);
    }

  },
  methods: {
    refreshOnlineStatus() {
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              vue2_bridge["default"].set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err) {
        if (this.$loading) {
          if (this.$loading.fail) {
            this.$loading.fail(this.nuxt.err);
          }

          if (this.$loading.finish) {
            this.$loading.finish();
          }
        }

        let errorLayout = (nuxt_error.options || nuxt_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    },

    getRouterBase() {
      return Object(external_ufo_["withoutTrailingSlash"])(this.$router.options.base);
    },

    getRoutePath(route = '/') {
      const base = this.getRouterBase();
      return Object(external_ufo_["withoutTrailingSlash"])(Object(external_ufo_["withoutBase"])(Object(external_ufo_["parsePath"])(route).pathname, base));
    },

    getStaticAssetsPath(route = '/') {
      const {
        staticAssetsBase
      } = window.__NUXT__;
      return urlJoin(staticAssetsBase, this.getRoutePath(route));
    },

    setPagePayload(payload) {
      this._pagePayload = payload;
      this._fetchCounters = {};
    },

    async fetchPayload(route, prefetch) {
      const path = Object(external_ufo_["decode"])(this.getRoutePath(route));
      const src = urlJoin(this.getStaticAssetsPath(route), 'payload.js');

      try {
        const payload = await window.__NUXT_IMPORT__(path, Object(external_ufo_["normalizeURL"])(src));

        if (!prefetch) {
          this.setPagePayload(payload);
        }

        return payload;
      } catch (err) {
        if (!prefetch) {
          this.setPagePayload(false);
        }

        throw err;
      }
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./node_modules/.cache/nuxt/components/index.js
const NuxtLogo = () => __webpack_require__.e(/* import() | components/nuxt-logo */ 1).then(__webpack_require__.bind(null, 75)).then(c => wrapFunctional(c.default || c));
const Tutorial = () => __webpack_require__.e(/* import() | components/tutorial */ 3).then(__webpack_require__.bind(null, 74)).then(c => wrapFunctional(c.default || c));
const TheLogo = () => __webpack_require__.e(/* import() | components/the-logo */ 2).then(__webpack_require__.bind(null, 68)).then(c => wrapFunctional(c.default || c)); // nuxt/nuxt.js#8607

function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options;
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {});
  return {
    render(h) {
      const attrs = {};
      const props = {};

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key];
        } else {
          attrs[key] = this.$attrs[key];
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots
      }, this.$slots.default);
    }

  };
}
// CONCATENATED MODULE: ./node_modules/.cache/nuxt/components/plugin.js



for (const name in components_namespaceObject) {
  vue2_bridge["default"].component(name, components_namespaceObject[name]);
  vue2_bridge["default"].component('Lazy' + name, components_namespaceObject[name]);
}
// EXTERNAL MODULE: external "hookable"
var external_hookable_ = __webpack_require__(35);

// EXTERNAL MODULE: ./node_modules/@nuxt/bridge/dist/runtime/index.mjs + 6 modules
var runtime = __webpack_require__(3);

// CONCATENATED MODULE: ./node_modules/.cache/nuxt/runtime.app.plugin.62dc558c.mjs


 // Reshape payload to match key `useLazyAsyncData` expects

function proxiedState(state) {
  state._asyncData = state._asyncData || {};
  state._errors = state._errors || {};
  return new Proxy(state, {
    get(target, prop) {
      if (prop === 'data') {
        return target._asyncData;
      }

      if (prop === '_data') {
        return target.state;
      }

      return Reflect.get(target, prop);
    }

  });
}

/* harmony default export */ var runtime_app_plugin_62dc558c = ((ctx, inject) => {
  const nuxtApp = {
    vueApp: {
      component: vue2_bridge["default"].component.bind(vue2_bridge["default"]),
      config: {
        globalProperties: {}
      },
      directive: vue2_bridge["default"].directive.bind(vue2_bridge["default"]),
      mixin: vue2_bridge["default"].mixin.bind(vue2_bridge["default"]),
      mount: () => {},
      provide: inject,
      unmount: () => {},

      use(vuePlugin) {
        vuePlugin.install(this);
      },

      version: vue2_bridge["default"].version
    },
    provide: inject,
    globalName: 'nuxt',
    payload: proxiedState( ctx.ssrContext.nuxt),
    _asyncDataPromises: [],
    isHydrating: true,
    nuxt2Context: ctx
  };
  nuxtApp.hooks = Object(external_hookable_["createHooks"])();
  nuxtApp.hook = nuxtApp.hooks.hook;
  nuxtApp.callHook = nuxtApp.hooks.callHook;

  if (!Array.isArray(ctx.app.created)) {
    ctx.app.created = [ctx.app.created].filter(Boolean);
  }

  if (!Array.isArray(ctx.app.mounted)) {
    ctx.app.mounted = [ctx.app.mounted].filter(Boolean);
  }

  {
    nuxtApp.ssrContext = ctx.ssrContext;
  }

  ctx.app.created.push(function () {
    nuxtApp.vue2App = this;
  });
  ctx.app.mounted.push(() => {
    nuxtApp.isHydrating = false;
  });
  const proxiedApp = new Proxy(nuxtApp, {
    get(target, prop) {
      if (prop[0] === '$') {
        var _target$vue2App;

        return target.nuxt2Context[prop] || ((_target$vue2App = target.vue2App) === null || _target$vue2App === void 0 ? void 0 : _target$vue2App[prop]);
      }

      return Reflect.get(target, prop);
    }

  });
  Object(runtime["b" /* setNuxtAppInstance */])(proxiedApp);
  inject('_nuxtApp', proxiedApp);
});
// EXTERNAL MODULE: external "@supabase/supabase-js"
var supabase_js_ = __webpack_require__(8);

// CONCATENATED MODULE: ./node_modules/vue-supabase/dist/esm/symbol.js
const supabaseSymbol = Symbol("supabase");
/* harmony default export */ var symbol = (supabaseSymbol);
// CONCATENATED MODULE: ./node_modules/vue-supabase/dist/esm/VueSupabaseClient.js
// @ts-ignore



class VueSupabaseClient_VueSupabaseClient extends supabase_js_["SupabaseClient"] {
  constructor(supabaseUrl, supabaseKey, supabaseOptions) {
    super(supabaseUrl, supabaseKey, supabaseOptions);
  }

  install(app) {
    const self = this;

    if (vue2_bridge["isVue3"]) {
      app.provide(symbol, self);
      Object.defineProperty(app.config.globalProperties, "$supabase", {
        get: () => self,
        configurable: true
      });
    } else {
      Object.defineProperty(app.prototype, "$supabase", {
        get: () => self,
        configurable: true
      });
      app.$supabase = self;
    }
  }

}
function createVueSupabase({
  supabaseUrl,
  supabaseKey,
  supabaseOptions
}) {
  return new VueSupabaseClient_VueSupabaseClient(supabaseUrl, supabaseKey, supabaseOptions);
}
// CONCATENATED MODULE: ./node_modules/.cache/nuxt/supabase.js


const supabase_supabase = createVueSupabase({
  supabaseUrl: "https://fxedsueghpxtbnavbklu.supabase.co",
  supabaseKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MTQwMzAwMiwiZXhwIjoxOTU2OTc5MDAyfQ.6syaiLAIKiAU72hh1HIu4BeIyHQ8Nz5a5xfDl5CIzOw"
});
vue2_bridge["default"].use(supabase_supabase); // Inject Supabase into Nuxt Context

/* harmony default export */ var nuxt_supabase = ((ctx, inject) => {
  ctx.$supabase = supabase_supabase;
  inject("supabase", supabase_supabase);
});
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(5);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(36);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./node_modules/.cache/nuxt/axios.js

 // Axios.prototype cannot be modified

const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },

  setHeader(name, value, scopes = 'common') {
    for (const scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        continue;
      }

      this.defaults.headers[scope][name] = value;
    }
  },

  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },

  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },

  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },

  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },

  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }

}; // Request helpers ($get, $post, ...)

for (const method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}

const extendAxiosInstance = axios => {
  for (const key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};

const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel; // Extend axios proto

  extendAxiosInstance(axios); // Intercept to apply default headers

  axios.onRequest(config => {
    config.headers = { ...axios.defaults.headers.common,
      ...config.headers
    };
  }); // Setup interceptors
  return axios;
};

/* harmony default export */ var nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {}; // baseURL

  const baseURL =  runtimeConfig.baseURL || runtimeConfig.baseUrl || process.env._AXIOS_BASE_URL_ || '/'; // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js

  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  }; // Proxy SSR request headers headers

  if ( ctx.req && ctx.req.headers) {
    const reqHeaders = { ...ctx.req.headers
    };

    for (const h of ["accept", "cf-connecting-ip", "cf-ray", "content-length", "content-md5", "content-type", "host", "x-forwarded-host", "x-forwarded-port", "x-forwarded-proto"]) {
      delete reqHeaders[h];
    }

    axiosOptions.headers.common = { ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }

  {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }

  const axios = createAxiosInstance(axiosOptions); // Inject axios to the context as $axios

  ctx.$axios = axios;
  inject('axios', axios);
});
// EXTERNAL MODULE: ./node_modules/@vue/composition-api/dist/vue-composition-api.mjs
var vue_composition_api = __webpack_require__(1);

// CONCATENATED MODULE: ./node_modules/.cache/nuxt/capi.plugin.mjs
 // eslint-disable-line import/default



vue2_bridge["default"].use(vue_composition_api["f" /* default */].default || vue_composition_api["f" /* default */]);
/* harmony default export */ var capi_plugin = (Object(runtime["a" /* defineNuxtPlugin */])(nuxtApp => {
  const _originalSetup = nuxtApp.nuxt2Context.app.setup;

  nuxtApp.nuxt2Context.app.setup = function (...args) {
    const result = _originalSetup instanceof Function ? _originalSetup(...args) : {};
    nuxtApp.hooks.callHookWith(hooks => hooks.map(hook => hook()), 'vue:setup');

    return result;
  };
}));
// CONCATENATED MODULE: ./node_modules/.cache/nuxt/nitro-bridge.server.mjs


const vueMetaRenderer = nuxt => {
  const meta = nuxt.ssrContext.meta.inject({
    isSSR: nuxt.ssrContext.nuxt.serverRendered,
    ln: "production" === 'development'
  });
  return {
    htmlAttrs: meta.htmlAttrs.text(),
    headAttrs: meta.headAttrs.text(),
    headTags: meta.title.text() + meta.base.text() + meta.meta.text() + meta.link.text() + meta.style.text() + meta.script.text() + meta.noscript.text(),
    bodyAttrs: meta.bodyAttrs.text(),
    bodyScriptsPrepend: meta.meta.text({
      pbody: true
    }) + meta.link.text({
      pbody: true
    }) + meta.style.text({
      pbody: true
    }) + meta.script.text({
      pbody: true
    }) + meta.noscript.text({
      pbody: true
    }),
    bodyScripts: meta.meta.text({
      body: true
    }) + meta.link.text({
      body: true
    }) + meta.style.text({
      body: true
    }) + meta.script.text({
      body: true
    }) + meta.noscript.text({
      body: true
    })
  };
};

/* harmony default export */ var nitro_bridge_server = (Object(runtime["a" /* defineNuxtPlugin */])(nuxtApp => {
  const metaRenderers = [vueMetaRenderer];
  nuxtApp.callHook('meta:register', metaRenderers);

  nuxtApp.ssrContext.renderMeta = async () => {
    const metadata = {
      htmlAttrs: '',
      headAttrs: '',
      headTags: '',
      bodyAttrs: '',
      bodyScriptsPrepend: '',
      bodyScripts: ''
    };

    for await (const renderer of metaRenderers) {
      const result = await renderer(nuxtApp);

      for (const key in result) {
        metadata[key] += result[key];
      }
    }

    return metadata;
  };
}));
// EXTERNAL MODULE: ./node_modules/.cache/nuxt/empty.js
__webpack_require__(64);

// EXTERNAL MODULE: external "vant"
var external_vant_ = __webpack_require__(37);
var external_vant_default = /*#__PURE__*/__webpack_require__.n(external_vant_);

// CONCATENATED MODULE: ./plugins/vant.js


vue2_bridge["default"].use(external_vant_default.a);
// CONCATENATED MODULE: ./node_modules/.cache/nuxt/index.js










/* Plugins */

 // Source: ./components/plugin.js (mode: 'all')

 // Source: ./runtime.app.plugin.62dc558c.mjs (mode: 'all')

 // Source: ./supabase.js (mode: 'all')

 // Source: ./axios.js (mode: 'all')

 // Source: ./capi.plugin.mjs (mode: 'all')

 // Source: ./nitro-bridge.server.mjs (mode: 'server')

 // Source: ./nitro.client.mjs (mode: 'client')

 // Source: ../../../plugins/vant (mode: 'all')
// Component: <ClientOnly>

vue2_bridge["default"].component(vue_client_only_common_default.a.name, vue_client_only_common_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

vue2_bridge["default"].component(vue_no_ssr_common_default.a.name, { ...vue_no_ssr_common_default.a,

  render(h, ctx) {

    return vue_no_ssr_common_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

vue2_bridge["default"].component(nuxt_child.name, nuxt_child);
vue2_bridge["default"].component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

vue2_bridge["default"].component(components_nuxt.name, components_nuxt);
Object.defineProperty(vue2_bridge["default"].prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root ? this.$root.$options.$nuxt : null;

    return globalNuxt;
  },

  configurable: true
});
vue2_bridge["default"].use(vue_meta_common_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config); // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "CodeBrew | Feedback",
      "htmlAttrs": {
        "lang": "en"
      },
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": ""
      }, {
        "name": "format-detection",
        "content": "telephone=no"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }, {
        "rel": "preconnect",
        "href": "https:\u002F\u002Ffonts.googleapis.com"
      }, {
        "reL": "preconnect",
        "href": "https:\u002F\u002Ffonts.gstatic.com",
        "crossorigin": true
      }, {
        "rel": "stylesheet",
        "href": "https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Fira+Code:wght@400;500;600&display=swap"
      }],
      "style": [],
      "script": []
    },
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  };
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    beforeSerializeFns: ssrContext ? ssrContext.beforeSerializeFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Check if plugin not already installed


    const installKey = '__nuxt_' + key + '_installed__';

    if (vue2_bridge["default"][installKey]) {
      return;
    }

    vue2_bridge["default"][installKey] = true; // Call Vue.use() to install the plugin into vm

    vue2_bridge["default"].use(() => {
      if (!Object.prototype.hasOwnProperty.call(vue2_bridge["default"].prototype, key)) {
        Object.defineProperty(vue2_bridge["default"].prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config); // Add enablePreview(previewData = {}) in context for plugins

  if (typeof runtime_app_plugin_62dc558c === 'function') {
    await runtime_app_plugin_62dc558c(app.context, inject);
  }

  if (typeof nuxt_supabase === 'function') {
    await nuxt_supabase(app.context, inject);
  }

  if (typeof nuxt_axios === 'function') {
    await nuxt_axios(app.context, inject);
  }

  if (typeof capi_plugin === 'function') {
    await capi_plugin(app.context, inject);
  }

  if ( typeof nitro_bridge_server === 'function') {
    await nitro_bridge_server(app.context, inject);
  }


  await new Promise((resolve, reject) => {

    router.replace(app.context.route.fullPath, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2
      /* NavigationFailureType.redirected */
      ) return resolve(); // navigated to a different route in router guard

      const unregister = router.afterEach(async (to, from) => {
        if ( ssrContext && ssrContext.url) {
          ssrContext.url = to.fullPath;
        }

        app.context.route = await getRouteData(to);
        app.context.params = to.params || {};
        app.context.query = to.query || {};
        unregister();
        resolve();
      });
    });
  });
  return {
    app,
    router
  };
}


// CONCATENATED MODULE: ./node_modules/.cache/nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: vue2_bridge["default"].component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./node_modules/.cache/nuxt/server.js






 // should be included after ./index.js
// Update serverPrefetch strategy

vue2_bridge["default"].config.optionMergeStrategies.serverPrefetch = vue2_bridge["default"].config.optionMergeStrategies.created; // Fetch mixin

if (!vue2_bridge["default"].__nuxt__fetch__mixin__) {
  vue2_bridge["default"].mixin(fetch_server);
  vue2_bridge["default"].__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


vue2_bridge["default"].component(nuxt_link_server.name, nuxt_link_server);
vue2_bridge["default"].component('NLink', nuxt_link_server);

const noopApp = () => new vue2_bridge["default"]({
  render: h => h('div', {
    domProps: {
      id: '__nuxt'
    }
  })
});

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  let fullPath = Object(external_ufo_["withQuery"])(opts.path, opts.query);
  const $config = ssrContext.nuxt.config || {};
  const routerBase = $config._app && $config._app.basePath || '/';

  if (!fullPath.startsWith('http') && routerBase !== '/' && !fullPath.startsWith(routerBase)) {
    fullPath = Object(external_ufo_["joinURL"])(routerBase, fullPath);
  } // Avoid loop redirect


  if (decodeURI(fullPath) === decodeURI(ssrContext.url)) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: Object(external_ufo_["normalizeURL"])(fullPath)
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // for beforeSerialize(nuxtState)

  ssrContext.beforeSerializeFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {}; // Remove query from url is static target

  if (ssrContext.url) {
    ssrContext.url = ssrContext.url.split('?')[0];
  } // Public runtime config


  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;

  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  } // Create the app definition and the instance (created for each request)


  const {
    app,
    router
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);

  const _app = new vue2_bridge["default"](app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));

    ssrContext.rendered = () => {
      // Call beforeSerialize() hooks
      ssrContext.beforeSerializeFns.forEach(fn => fn(ssrContext.nuxt));
    };
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(app.context.route);
  /*
  ** Call global middleware (nuxt.config.js)
  */

  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ })
/******/ ]);
}(server$2));

var server = server$2.exports;

const server$1 = server;

export { server$1 as default };
