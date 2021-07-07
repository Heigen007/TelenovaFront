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
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"pages/about","2":"pages/cart","3":"pages/checkout","4":"pages/contact","5":"pages/faq","6":"pages/index","7":"pages/product","8":"pages/shop","9":"pages/terms"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("ufo");

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Header.vue?vue&type=template&id=132a2f36&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<header id=\"header\" class=\"u-header u-header-left-aligned-nav mb-3\" data-v-132a2f36>","</header>",[_vm._ssrNode("<div class=\"u-header__section shadow-none\" data-v-132a2f36>","</div>",[_vm._ssrNode("<div class=\"u-header-topbar py-2 d-none d-xl-block\" data-v-132a2f36>","</div>",[_vm._ssrNode("<div class=\"container\" data-v-132a2f36>","</div>",[_vm._ssrNode("<div class=\"d-flex align-items-center\" data-v-132a2f36>","</div>",[_vm._ssrNode("<div class=\"topbar-left\" data-v-132a2f36>","</div>",[_c('NuxtLink',{staticClass:"text-gray-110 font-size-13 u-header-topbar__nav-link",attrs:{"to":"#"}},[_vm._v(_vm._s(_vm.localizeFilter( 'Greeting')))])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"topbar-right ml-auto\" style=\"margin-right: 100px !important\" data-v-132a2f36>","</div>",[_vm._ssrNode("<ul class=\"list-inline mb-0\" style=\"display: flex; align-items: center; justify-content: center\" data-v-132a2f36>","</ul>",[_vm._ssrNode("<li data-event=\"hover\" data-position=\"left\" class=\"nav-item u-header__nav-item\" data-v-132a2f36>","</li>",[_c('NuxtLink',{staticClass:"nav-link u-header__nav-link font-weight-bold",attrs:{"to":"/"}},[_vm._v("Home")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-event=\"hover\" data-position=\"left\" class=\"nav-item u-header__nav-item\" data-v-132a2f36>","</li>",[_c('NuxtLink',{staticClass:"nav-link u-header__nav-link font-weight-bold",attrs:{"to":"/cart"}},[_vm._v("Cart")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-event=\"hover\" data-position=\"left\" class=\"nav-item u-header__nav-item\" data-v-132a2f36>","</li>",[_c('NuxtLink',{staticClass:"nav-link u-header__nav-link font-weight-bold",attrs:{"to":"/about"}},[_vm._v("Adout Us")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-event=\"hover\" data-position=\"left\" class=\"nav-item u-header__nav-item\" data-v-132a2f36>","</li>",[_c('NuxtLink',{staticClass:"nav-link u-header__nav-link font-weight-bold",attrs:{"to":"/terms"}},[_vm._v("Terms")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-event=\"hover\" data-position=\"left\" class=\"nav-item u-header__nav-item\" data-v-132a2f36>","</li>",[_c('NuxtLink',{staticClass:"nav-link u-header__nav-link font-weight-bold",attrs:{"to":"/faq"}},[_vm._v("FAQ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-event=\"hover\" data-position=\"left\" class=\"nav-item u-header__nav-item mr-5\" data-v-132a2f36>","</li>",[_c('NuxtLink',{staticClass:"nav-link u-header__nav-link font-weight-bold",attrs:{"to":"/contact"}},[_vm._v("Contact Us")])],1),_vm._ssrNode(" <li class=\"list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border u-header-topbar__nav-item-no-border u-header-topbar__nav-item-border-single\" data-v-132a2f36><div class=\"d-flex align-items-center\" data-v-132a2f36><div class=\"position-relative\" data-v-132a2f36><a id=\"languageDropdownInvoker\" href=\"javascript:;\" role=\"button\" aria-controls=\"languageDropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" data-unfold-event=\"hover\" data-unfold-target=\"#languageDropdown\" data-unfold-type=\"css-animation\" data-unfold-duration=\"300\" data-unfold-delay=\"300\" data-unfold-hide-on-scroll=\"true\" data-unfold-animation-in=\"slideInUp\" data-unfold-animation-out=\"fadeOut\" class=\"dropdown-nav-link dropdown-toggle d-flex align-items-center u-header-topbar__nav-link font-weight-normal\" data-v-132a2f36><span class=\"d-inline-block d-sm-none\" data-v-132a2f36>US</span> <span class=\"d-none d-sm-inline-flex align-items-center\" data-v-132a2f36><i class=\"ec ec-dollar mr-1\" data-v-132a2f36></i>"+_vm._ssrEscape(_vm._s(this.$store.state.lang.lang == 'en-US' ? 'English' : this.$store.state.lang.lang == 'ru-RU' ? 'Russian' : this.$store.state.lang.lang == 'kz-KZ' ? 'Kazakh' : 'Choose your'))+"</span></a> <div id=\"languageDropdown\" aria-labelledby=\"languageDropdownInvoker\" class=\"dropdown-menu dropdown-unfold\" data-v-132a2f36><div class=\"dropdown-item\" style=\"cursor: pointer\" data-v-132a2f36>English</div> <div class=\"dropdown-item\" style=\"cursor: pointer\" data-v-132a2f36>Russian</div> <div class=\"dropdown-item\" style=\"cursor: pointer\" data-v-132a2f36>Kazakh‎</div></div></div></div></li>")],2)])],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"border-bottom border-lg-down-0 bg-primary bg-xl-transparent min-height-64 flex-horizontal-center\" data-v-132a2f36>","</div>",[_vm._ssrNode("<div class=\"container\" data-v-132a2f36>","</div>",[_vm._ssrNode("<div class=\"row align-items-center justify-content-between justify-content-xl-start\" data-v-132a2f36>","</div>",[_vm._ssrNode("<div class=\"col-auto\" data-v-132a2f36>","</div>",[_vm._ssrNode("<div class=\"d-inline-flex d-xl-flex align-items-center justify-content-xl-between position-relative\" data-v-132a2f36>","</div>",[_vm._ssrNode("<div id=\"logoAndNav\" data-v-132a2f36>","</div>",[_vm._ssrNode("<nav class=\"navbar navbar-expand u-header__navbar\" data-v-132a2f36>","</nav>",[_vm._ssrNode("<button id=\"sidebarHeaderInvoker\" type=\"button\" aria-controls=\"sidebarHeader\" aria-haspopup=\"true\" aria-expanded=\"false\" data-unfold-event=\"click\" data-unfold-hide-on-scroll=\"false\" data-unfold-target=\"#sidebarHeader\" data-unfold-type=\"css-animation\" data-unfold-animation-in=\"fadeInLeft\" data-unfold-animation-out=\"fadeOutLeft\" data-unfold-duration=\"500\" class=\"mr-2 pl-0 navbar-toggler d-block d-xl-none btn u-hamburger ml-auto\" data-v-132a2f36><span id=\"hamburgerTrigger\" class=\"u-hamburger__box\" data-v-132a2f36><span class=\"u-hamburger__inner\" data-v-132a2f36></span></span></button> "),_c('router-link',{staticClass:"navbar-brand u-header__navbar-brand u-header__navbar-brand-center ml-1 ml-xl-0",staticStyle:{"width":"9rem"},attrs:{"to":"/","aria-label":"Electro"}},[_c('img',{staticStyle:{"width":"9rem","margin-top":"5px"},attrs:{"src":"logo.svg"}})])],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div id=\"basicsAccordion\" class=\"d-none d-xl-block\" data-v-132a2f36>","</div>",[_vm._ssrNode("<div class=\"card border-0 py-3 position-static\" data-v-132a2f36>","</div>",[_vm._ssrNode("<div id=\"basicsHeadingOne\" class=\"card-header bg-transparent card-collapse border-0 my-1 d-none d-xl-block\" data-v-132a2f36><button type=\"button\" data-toggle=\"collapse\" data-target=\"#basicsCollapseOne\" aria-expanded=\"true\" aria-controls=\"basicsCollapseOne\" class=\"btn-link btn-block d-flex card-btn py-3 text-lh-1 px-0 shadow-none rounded-0 bg-transparent border-0 font-weight-bold text-gray-90\" data-v-132a2f36><span class=\"text-gray-90 font-size-15\" data-v-132a2f36>Categories <i class=\"ml-2 ec ec-arrow-down-search\" data-v-132a2f36></i></span></button></div> "),_vm._ssrNode("<div id=\"basicsCollapseOne\" aria-labelledby=\"basicsHeadingOne\" data-parent=\"#basicsAccordion\" class=\"collapse vertical-menu v3 border-top-primary border-top border-width-2\" style=\"min-height: 500px\" data-v-132a2f36>","</div>",[_vm._ssrNode("<div class=\"card-body p-0\" data-v-132a2f36>","</div>",[_vm._ssrNode("<nav class=\"js-mega-menu navbar navbar-expand-xl u-header__navbar u-header__navbar--no-space hs-menu-initialized\" data-v-132a2f36>","</nav>",[_vm._ssrNode("<div id=\"navBar\" class=\"collapse navbar-collapse u-header__navbar-collapse\" data-v-132a2f36>","</div>",[_vm._ssrNode("<ul class=\"navbar-nav u-header__navbar-nav\" data-v-132a2f36>","</ul>",_vm._l((_vm.Categories),function(el,i){return _vm._ssrNode("<li data-event=\"hover\" data-animation-in=\"slideInUp\" data-animation-out=\"fadeOut\" data-position=\"left\" class=\"nav-item hs-has-mega-menu u-header__nav-item\" data-v-132a2f36>","</li>",[_vm._ssrNode("<a id=\"basicMegaMenu\" href=\"javascript:;\" aria-haspopup=\"true\" aria-expanded=\"false\" class=\"nav-link u-header__nav-link u-header__nav-link-toggle\" data-v-132a2f36>"+_vm._ssrEscape(_vm._s(Object.keys(el)[0]))+"</a> "),_vm._ssrNode("<div aria-labelledby=\"basicMegaMenu\" class=\"hs-mega-menu vmm-tfw u-header__sub-menu\" style=\"overflow-y: scroll; min-height: 500px\" data-v-132a2f36>","</div>",[_vm._ssrNode("<div class=\"vmm-bg\" style=\"bottom: auto\" data-v-132a2f36><img"+(_vm._ssrAttr("src",'https://textforeva.ru/categoryTree/download/' + Object.keys(el)[0]))+" alt=\"Image Description\" class=\"img-fluid\" style=\"width: 400px; height: 300px; opacity: 0.5\" data-v-132a2f36></div> "),_vm._ssrNode("<div class=\"row u-header__mega-menu-wrapper\" data-v-132a2f36>","</div>",_vm._l((el),function(cat,o){return _vm._ssrNode("<div data-v-132a2f36>","</div>",_vm._l((cat),function(fil,y){return _vm._ssrNode("<div class=\"col mb-3 mb-sm-0\" data-v-132a2f36>","</div>",[_c('NuxtLink',{staticClass:"u-header__sub-menu-title",attrs:{"to":'/shop?SCat?'+y}},[_vm._v(_vm._s(y))]),_vm._ssrNode(" "),_vm._ssrNode("<ul class=\"u-header__sub-menu-nav-group mb-3\" data-v-132a2f36>","</ul>",_vm._l((fil),function(fil2,l){return _vm._ssrNode("<li data-v-132a2f36>","</li>",[_c('NuxtLink',{staticClass:"nav-link u-header__sub-menu-nav-link",attrs:{"to":'/shop?'+fil2}},[(!fil2.includes("not show"))?_c('div',[_vm._v(_vm._s(fil2))]):_vm._e()])],1)}),0)],2)}),0)}),0)],2)],2)}),0)])])])])],2)])],2)]),_vm._ssrNode(" <div class=\"col d-none d-xl-block\" data-v-132a2f36><form class=\"js-focus-state\" data-v-132a2f36><label for=\"searchproduct\" class=\"sr-only\" data-v-132a2f36>Search</label> <div class=\"input-group\" data-v-132a2f36><input type=\"email\" name=\"email\" id=\"searchproduct-item\" placeholder=\"Search for Products\" aria-label=\"Search for Products\" aria-describedby=\"searchProduct1\" required=\"required\""+(_vm._ssrAttr("value",(_vm.InputValue)))+" class=\"form-control py-2 pl-5 font-size-15 border-right-0 height-40 border-width-2 rounded-left-pill border-primary\" data-v-132a2f36> <div class=\"input-group-append\" data-v-132a2f36><button type=\"button\" id=\"searchProduct1\" class=\"btn btn-primary height-40 py-2 px-3 rounded-right-pill\" data-v-132a2f36><span class=\"ec ec-search font-size-24\" data-v-132a2f36></span></button></div></div></form></div> "),_vm._ssrNode("<div class=\"col-auto position-static\" style=\"padding-left: 0\" data-v-132a2f36>","</div>",[_vm._ssrNode("<div class=\"d-flex\" data-v-132a2f36>","</div>",[_vm._ssrNode("<ul class=\"d-flex list-unstyled mb-0\" data-v-132a2f36>","</ul>",[_vm._ssrNode("<li class=\"col d-xl-none px-2 px-sm-3 position-static\" data-v-132a2f36><a id=\"searchClassicInvoker\" href=\"javascript:;\" role=\"button\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Search\" aria-controls=\"searchClassic\" aria-haspopup=\"true\" aria-expanded=\"false\" data-unfold-target=\"#searchClassic\" data-unfold-type=\"css-animation\" data-unfold-duration=\"300\" data-unfold-delay=\"300\" data-unfold-hide-on-scroll=\"true\" data-unfold-animation-in=\"slideInUp\" data-unfold-animation-out=\"fadeOut\" class=\"font-size-22 text-gray-90 text-lh-1 btn-text-secondary\" data-v-132a2f36><span class=\"ec ec-search\" data-v-132a2f36></span></a> <div id=\"searchClassic\" aria-labelledby=\"searchClassicInvoker\" class=\"dropdown-menu dropdown-unfold dropdown-menu-right left-0 mx-2\" data-v-132a2f36><form class=\"js-focus-state input-group px-3\" data-v-132a2f36><input type=\"search\" placeholder=\"Search Product\""+(_vm._ssrAttr("value",(_vm.InputValue)))+" class=\"form-control\" data-v-132a2f36> <div class=\"input-group-append\" data-v-132a2f36><button type=\"button\" class=\"btn btn-primary px-3\" data-v-132a2f36><i class=\"font-size-18 ec ec-search\" data-v-132a2f36></i></button></div></form></div></li> "),_vm._ssrNode("<li class=\"col pr-xl-0 px-2 px-sm-3\" data-v-132a2f36>","</li>",[_c('NuxtLink',{staticClass:"text-gray-90 position-relative d-flex ",attrs:{"to":"/cart","data-toggle":"tooltip","data-placement":"top","title":"Cart"}},[_c('i',{staticClass:"font-size-22 ec ec-shopping-bag"}),_vm._v(" "),_c('span',{staticClass:"width-22 height-22 bg-dark position-absolute flex-content-center text-white rounded-circle left-12 top-8 font-weight-bold font-size-12"},[_vm._v(_vm._s(_vm.AmountOfCartProducts))]),_vm._v(" "),_c('span',{staticClass:"Cost font-weight-bold font-size-16 text-gray-90 ml-4"},[_vm._v(_vm._s(_vm.Cost)+_vm._s('\xa0')+"тг.")])])],1)],2)])])],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container d-none d-xl-block\" data-v-132a2f36>","</div>",[_vm._ssrNode("<div class=\"secondary-menu flex-horizontal-center position-relative pt-2\" data-v-132a2f36>","</div>",[_vm._ssrNode("<div class=\"ml-wd-4 flex-shrink-0\" data-v-132a2f36><h6 class=\"font-weight-bold font-size-13 mb-0 mr-2\" data-v-132a2f36>Electro Best Selling: </h6></div> "),_vm._ssrNode("<nav class=\"js-mega-menu navbar navbar-expand-md u-header__navbar u-header__navbar--no-space position-static\" data-v-132a2f36>","</nav>",[_vm._ssrNode("<div id=\"navBar\" class=\"collapse navbar-collapse u-header__navbar-collapse\" data-v-132a2f36>","</div>",[(_vm.BestCategories)?_vm._ssrNode("<ul class=\"navbar-nav u-header__navbar-nav u-header__navbar-nav-divider flex-wrap\" data-v-132a2f36>","</ul>",_vm._l((_vm.BestCategories.slice(0,10)),function(el,i){return _vm._ssrNode("<li data-v-132a2f36>","</li>",[_c('NuxtLink',{staticClass:"nav-link u-header__nav-link",attrs:{"to":'/shop?FCat?'+Object.keys(el)[0]}},[_vm._v(_vm._s(Object.keys(el)[0]))])],1)}),0):_vm._e()])])],2)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"d-none d-xl-block bg-primary\" style=\"display: none !important\" data-v-132a2f36>","</div>",[_vm._ssrNode("<div class=\"container\" data-v-132a2f36>","</div>",[_vm._ssrNode("<div class=\"row align-items-stretch min-height-50\" data-v-132a2f36>","</div>",[_vm._ssrNode("<div class=\"col-md-auto d-none d-xl-flex align-items-end\" data-v-132a2f36>","</div>",[_vm._ssrNode("<div class=\"max-width-270 min-width-270\" data-v-132a2f36>","</div>",[_vm._ssrNode("<div id=\"basicsAccordion\" data-v-132a2f36>","</div>",[_vm._ssrNode("<div class=\"card border-0 rounded-0\" data-v-132a2f36>","</div>",[_vm._ssrNode("<div id=\"basicsHeadingOne\" class=\"card-header bg-primary rounded-0 card-collapse border-0\" data-v-132a2f36><button type=\"button\" data-toggle=\"collapse\" data-target=\"#basicsCollapseOne\" aria-expanded=\"true\" aria-controls=\"basicsCollapseOne\" class=\"btn-link btn-remove-focus btn-block d-flex card-btn py-3 text-lh-1 px-4 shadow-none btn-primary rounded-top-lg border-0 font-weight-bold text-gray-90\" data-v-132a2f36><span class=\"pl-1 text-gray-90\" data-v-132a2f36>"+_vm._ssrEscape(_vm._s(_vm.localizeFilter('AccordionTitle')))+"</span> <span class=\"text-gray-90 ml-3\" data-v-132a2f36><span class=\"ec ec-arrow-down-search\" data-v-132a2f36></span></span></button></div> "),_c('client-only')],2)])])]),_vm._ssrNode(" <div class=\"col align-self-center\" data-v-132a2f36><form class=\"js-focus-state\" data-v-132a2f36><label for=\"searchProduct\" class=\"sr-only\" data-v-132a2f36>"+_vm._ssrEscape(_vm._s(_vm.localizeFilter('SearchSuggestion')))+"</label> <div class=\"input-group\" data-v-132a2f36><input type=\"email\" name=\"email\" id=\"searchProduct\" placeholder=\"Search for Products\" aria-label=\"Search for Products\" aria-describedby=\"searchProduct1\" required=\"required\""+(_vm._ssrAttr("value",(_vm.InputValue)))+" class=\"form-control py-2 pl-5 font-size-15 border-0 height-40 rounded-left-pill\" data-v-132a2f36> <div class=\"input-group-append\" data-v-132a2f36><button type=\"button\" id=\"searchProduct1\" class=\"btn btn-dark height-40 py-2 px-3 rounded-right-pill\" data-v-132a2f36><span class=\"ec ec-search font-size-24\" data-v-132a2f36></span></button></div></div></form></div> "),_vm._ssrNode("<div class=\"col-md-auto align-self-center\" data-v-132a2f36>","</div>",[_vm._ssrNode("<div class=\"d-flex\" data-v-132a2f36>","</div>",[_vm._ssrNode("<ul class=\"d-flex list-unstyled mb-0\" data-v-132a2f36>","</ul>",[_vm._ssrNode("<li class=\"col pr-0\" data-v-132a2f36>","</li>",[_c('NuxtLink',{staticClass:"text-gray-90 position-relative d-flex ",attrs:{"to":"/cart","data-toggle":"tooltip","data-placement":"top","title":_vm.localizeFilter('CartSuggestion')}},[_c('i',{staticClass:"font-size-22 ec ec-shopping-bag"}),_vm._v(" "),_c('span',{staticClass:"width-22 height-22 bg-dark position-absolute flex-content-center text-white rounded-circle left-12 top-8 font-weight-bold font-size-12"},[_vm._v(_vm._s(_vm.AmountOfCartProducts))]),_vm._v(" "),_c('span',{staticClass:"Cost font-weight-bold font-size-16 text-gray-90 ml-4"},[_vm._v(_vm._s(_vm.Cost)+_vm._s('\xa0')+"тг.")])])],1)])])])],2)])])],2),_vm._ssrNode(" "),_vm._ssrNode("<aside id=\"sidebarHeader\" aria-labelledby=\"sidebarHeaderInvoker\" class=\"u-sidebar u-sidebar--left\" data-v-132a2f36>","</aside>",[_vm._ssrNode("<div class=\"u-sidebar__scroller\" data-v-132a2f36>","</div>",[_vm._ssrNode("<div class=\"u-sidebar__container\" data-v-132a2f36>","</div>",[_vm._ssrNode("<div class=\"u-header-sidebar__footer-offset\" style=\"padding-bottom: 0\" data-v-132a2f36>","</div>",[_vm._ssrNode("<div class=\"d-sm-none position-absolute top-0 right-0 z-index-2 pt-4 pr-4 bg-white\" data-v-132a2f36><button type=\"button\" aria-controls=\"sidebarHeader\" aria-haspopup=\"true\" aria-expanded=\"false\" data-unfold-event=\"click\" data-unfold-hide-on-scroll=\"false\" data-unfold-target=\"#sidebarHeader\" data-unfold-type=\"css-animation\" data-unfold-animation-in=\"fadeInLeft\" data-unfold-animation-out=\"fadeOutLeft\" data-unfold-duration=\"500\" class=\"close ml-auto\" data-v-132a2f36><span aria-hidden=\"true\" data-v-132a2f36><i class=\"ec ec-close-remove text-gray-90 font-size-20\" data-v-132a2f36></i></span></button></div> "),_vm._ssrNode("<div class=\"js-scrollbar u-sidebar__body\" data-v-132a2f36>","</div>",[_vm._ssrNode("<div id=\"headerSidebarContent\" class=\"u-sidebar__content u-header-sidebar__content\" data-v-132a2f36>","</div>",[_c('NuxtLink',{staticClass:"navbar-brand u-header__navbar-brand u-header__navbar-brand-center mb-3",staticStyle:{"width":"9rem"},attrs:{"to":"/","aria-label":"Electro"}},[_c('img',{staticStyle:{"width":"9rem"},attrs:{"src":"logo.svg"}})]),_vm._ssrNode(" "),_vm._ssrNode("<ul id=\"headerSidebarList\" class=\"u-header-collapse__nav\" data-v-132a2f36>","</ul>",[_vm._ssrNode("<li data-v-132a2f36>","</li>",[_c('NuxtLink',{staticClass:"u-header-collapse__nav-link font-weight-bold",attrs:{"to":"/"}},[_vm._v("Home")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-132a2f36>","</li>",[_c('NuxtLink',{staticClass:"u-header-collapse__nav-link font-weight-bold",attrs:{"to":"/cart"}},[_vm._v("Cart")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-132a2f36>","</li>",[_c('NuxtLink',{staticClass:"u-header-collapse__nav-link font-weight-bold",attrs:{"to":"/about"}},[_vm._v("Adout Us")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-132a2f36>","</li>",[_c('NuxtLink',{staticClass:"u-header-collapse__nav-link font-weight-bold",attrs:{"to":"/terms"}},[_vm._v("Terms")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-132a2f36>","</li>",[_c('NuxtLink',{staticClass:"u-header-collapse__nav-link font-weight-bold",attrs:{"to":"/faq"}},[_vm._v("FAQ")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-132a2f36>","</li>",[_c('NuxtLink',{staticClass:"u-header-collapse__nav-link font-weight-bold",attrs:{"to":"/contact"}},[_vm._v("Contact Us")])],1),_vm._ssrNode(" "),_vm._l((_vm.Categories),function(el,i){return _vm._ssrNode("<li class=\"u-has-submenu u-header-collapse__submenu\" data-v-132a2f36>","</li>",[_vm._ssrNode("<a href=\"javascript:;\""+(_vm._ssrAttr("data-target",'#headerSidebarMoviesCollapse'+i))+" role=\"button\" data-toggle=\"collapse\" aria-expanded=\"false\""+(_vm._ssrAttr("aria-controls",'#headerSidebarMoviesCollapse'+i))+" class=\"u-header-collapse__nav-link u-header-collapse__nav-pointer\" data-v-132a2f36>"+_vm._ssrEscape("\r\n                                            "+_vm._s(Object.keys(el)[0])+"\r\n                                        ")+"</a> "),_vm._ssrNode("<div"+(_vm._ssrAttr("id",'headerSidebarMoviesCollapse'+i))+" data-parent=\"#headerSidebarContent\" class=\"collapse\" data-v-132a2f36>","</div>",[_vm._ssrNode("<ul class=\"u-header-collapse__nav-list\" data-v-132a2f36>","</ul>",_vm._l((el),function(cat,o){return _vm._ssrNode("<li data-v-132a2f36>","</li>",[_vm._ssrNode("<div class=\"u-header-collapse__submenu-nav-link\" style=\"display: flex; flex-direction: column; justify-content: flex-start; align-items: flex-start\" data-v-132a2f36>","</div>",_vm._l((cat),function(fil,y){return _vm._ssrNode("<div data-v-132a2f36>","</div>",[_c('NuxtLink',{staticStyle:{"color":"#2f2f2f","font-size":"1.1em"},attrs:{"to":'/shop?SCat?' + y}},[_vm._v(_vm._s(y))]),_vm._ssrNode(" "),_vm._l((fil),function(fil2,l){return _vm._ssrNode("<div data-v-132a2f36>","</div>",[(!fil2.includes("not show"))?_c('NuxtLink',{staticStyle:{"color":"#b7b7b7"},attrs:{"to":'/shop?' + fil2}},[_vm._v(_vm._s(fil2))]):_vm._e()],1)})],2)}),0)])}),0)])],2)})],2)],2)])],2)])])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Header.vue?vue&type=template&id=132a2f36&scoped=true&

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Header.vue?vue&type=script&lang=js&
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

/* harmony default export */ var Headervue_type_script_lang_js_ = ({
  name: 'Header',
  data: () => ({
    Component: 'Header',
    InputValue: ''
  }),

  mounted() {
    $(window).on('load', function () {
      // initialization of HSMegaMenu component
      $('.js-mega-menu').HSMegaMenu({
        event: 'hover',
        direction: 'horizontal',
        pageContainer: $('.container'),
        breakpoint: 767.98,
        hideTimeOut: 0
      });
    });
    $(document).on('ready', function () {
      // initialization of header
      $.HSCore.components.HSHeader.init($('#header')); // initialization of animation

      $.HSCore.components.HSOnScrollAnimation.init('[data-animation]'); // initialization of unfold component

      $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
        afterOpen: function () {
          $(this).find('input[type="search"]').focus();
        }
      }); // initialization of forms

      $.HSCore.components.HSFocusState.init(); // initialization of form validation

      $.HSCore.components.HSValidation.init('.js-validate', {
        rules: {
          confirmPassword: {
            equalTo: '#signupPassword'
          }
        }
      }); // initialization of show animations

      $.HSCore.components.HSShowAnimation.init('.js-animation-link'); // initialization of hamburgers

      $.HSCore.components.HSHamburgers.init('#hamburgerTrigger'); // initialization of unfold component

      $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
        beforeClose: function () {
          $('#hamburgerTrigger').removeClass('is-active');
        },
        afterClose: function () {
          $('#headerSidebarList .collapse.show').collapse('hide');
        }
      });
      $('#headerSidebarList [data-toggle="collapse"]').on('click', function (e) {
        e.preventDefault();
        var target = $(this).data('target');

        if ($(this).attr('aria-expanded') === "true") {
          $(target).collapse('hide');
        } else {
          $(target).collapse('show');
        }
      }); // initialization of unfold component

      $.HSCore.components.HSUnfold.init($('[data-unfold-target]')); // initialization of select picker

      $.HSCore.components.HSSelectPicker.init('.js-select');
    });
  },

  methods: {
    localizeFilter(key, key2, key3) {
      var _this$$store$state$la, _this$$store$state$la2, _this$$store$state$la3, _this$$store$state$la4, _this$$store$state$la5, _this$$store$state$la6, _this$$store$state$la7, _this$$store$state$la8, _this$$store$state$la9, _this$$store$state$la10, _this$$store$state$la11, _this$$store$state$la12;

      if (key3) return ((_this$$store$state$la = this.$store.state.lang.locales) === null || _this$$store$state$la === void 0 ? void 0 : (_this$$store$state$la2 = _this$$store$state$la[this.$store.state.lang.lang]) === null || _this$$store$state$la2 === void 0 ? void 0 : (_this$$store$state$la3 = _this$$store$state$la2[this.Component]) === null || _this$$store$state$la3 === void 0 ? void 0 : (_this$$store$state$la4 = _this$$store$state$la3[key]) === null || _this$$store$state$la4 === void 0 ? void 0 : (_this$$store$state$la5 = _this$$store$state$la4[key2]) === null || _this$$store$state$la5 === void 0 ? void 0 : _this$$store$state$la5[key3]) || ``;else if (key2) return ((_this$$store$state$la6 = this.$store.state.lang.locales) === null || _this$$store$state$la6 === void 0 ? void 0 : (_this$$store$state$la7 = _this$$store$state$la6[this.$store.state.lang.lang]) === null || _this$$store$state$la7 === void 0 ? void 0 : (_this$$store$state$la8 = _this$$store$state$la7[this.Component]) === null || _this$$store$state$la8 === void 0 ? void 0 : (_this$$store$state$la9 = _this$$store$state$la8[key]) === null || _this$$store$state$la9 === void 0 ? void 0 : _this$$store$state$la9[key2]) || ``;else return ((_this$$store$state$la10 = this.$store.state.lang.locales) === null || _this$$store$state$la10 === void 0 ? void 0 : (_this$$store$state$la11 = _this$$store$state$la10[this.$store.state.lang.lang]) === null || _this$$store$state$la11 === void 0 ? void 0 : (_this$$store$state$la12 = _this$$store$state$la11[this.Component]) === null || _this$$store$state$la12 === void 0 ? void 0 : _this$$store$state$la12[key]) || ``;
    },

    changeLang(lang) {
      this.$store.commit('lang/changeLang', lang);
    },

    InputSearch() {
      this.$store.commit('SearchByQuery', this.InputValue);
      this.InputValue = '';
      this.$router.push('/shop');
    }

  },
  computed: { ...Object(external_vuex_["mapGetters"])({
      Cart: 'cart/cart',
      BestCategories: 'BestCategories'
    }),

    Cost() {
      if (false) { var price, stateCart; }

      return 0;
    },

    AmountOfCartProducts() {
      if (false) { var stateCart; }

      return 0;
    },

    Categories() {
      return this.$store.state.categories;
    }

  }
});
// CONCATENATED MODULE: ./src/components/Header.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Headervue_type_script_lang_js_ = (Headervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/Header.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(31)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Headervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "132a2f36",
  "c0a97984"
  
)

/* harmony default export */ var Header = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Header: __webpack_require__(6).default})


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Footer.vue?vue&type=template&id=522899be&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('footer',[_vm._ssrNode("<div class=\"container d-none d-lg-block mb-3\" data-v-522899be>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-522899be>","</div>",[_vm._ssrNode("<div class=\"col-wd-3 col-lg-4\" data-v-522899be>","</div>",[_vm._ssrNode("<div class=\"widget-column\" data-v-522899be>","</div>",[_vm._ssrNode("<div class=\"border-bottom border-color-1 mb-5\" data-v-522899be><h3 class=\"section-title section-title__sm mb-0 pb-2 font-size-18\" data-v-522899be>"+_vm._ssrEscape(_vm._s(_vm.localizeFilter('FirstCategory')))+"</h3></div> "),_vm._ssrNode("<ul class=\"list-unstyled products-group\" data-v-522899be>","</ul>",_vm._l((_vm.popularProducts.slice(0,3)),function(el,i){return _vm._ssrNode("<li class=\"product-item product-item__list row no-gutters mb-6 remove-divider\" data-v-522899be>","</li>",[_vm._ssrNode("<div class=\"col-auto\" data-v-522899be>","</div>",[_c('NuxtLink',{staticClass:"d-block width-75 text-center",attrs:{"to":'/product?id='+el.offerData.kaspi_id}},[_c('img',{staticClass:"img-fluid",attrs:{"src":el.offerData.images[0],"alt":"Image Description"}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col pl-4 d-flex flex-column\" data-v-522899be>","</div>",[_vm._ssrNode("<h5 class=\"product-item__title mb-0\" data-v-522899be>","</h5>",[_c('NuxtLink',{staticClass:"text-blue font-weight-bold",attrs:{"to":'/product?id='+el.offerData.kaspi_id}},[_vm._v(_vm._s(el.offerData.kaspi_name))])],1),_vm._ssrNode(" <div class=\"prodcut-price mt-auto\" data-v-522899be><div class=\"font-size-15\" data-v-522899be>"+_vm._ssrEscape(_vm._s(el.offerData.price)+" тг.")+"</div></div>")],2)],2)}),0)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-wd-3 col-lg-4\" data-v-522899be>","</div>",[_vm._ssrNode("<div class=\"border-bottom border-color-1 mb-5\" data-v-522899be><h3 class=\"section-title section-title__sm mb-0 pb-2 font-size-18\" data-v-522899be>"+_vm._ssrEscape(_vm._s(_vm.localizeFilter('SecondCategory')))+"</h3></div> "),_vm._ssrNode("<ul class=\"list-unstyled products-group\" data-v-522899be>","</ul>",_vm._l((_vm.popularProducts.slice(4,7)),function(el,i){return _vm._ssrNode("<li class=\"product-item product-item__list row no-gutters mb-6 remove-divider\" data-v-522899be>","</li>",[_vm._ssrNode("<div class=\"col-auto\" data-v-522899be>","</div>",[_c('NuxtLink',{staticClass:"d-block width-75 text-center",attrs:{"to":'/product?id='+el.offerData.kaspi_id}},[_c('img',{staticClass:"img-fluid",attrs:{"src":el.offerData.images[0],"alt":"Image Description"}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col pl-4 d-flex flex-column\" data-v-522899be>","</div>",[_vm._ssrNode("<h5 class=\"product-item__title mb-0\" data-v-522899be>","</h5>",[_c('NuxtLink',{staticClass:"text-blue font-weight-bold",attrs:{"to":'/product?id='+el.offerData.kaspi_id}},[_vm._v(_vm._s(el.offerData.kaspi_name))])],1),_vm._ssrNode(" <div class=\"prodcut-price mt-auto\" data-v-522899be><div class=\"font-size-15\" data-v-522899be>"+_vm._ssrEscape(_vm._s(el.offerData.price)+" тг.")+"</div></div>")],2)],2)}),0)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-wd-3 col-lg-4\" data-v-522899be>","</div>",[_vm._ssrNode("<div class=\"border-bottom border-color-1 mb-5\" data-v-522899be><h3 class=\"section-title section-title__sm mb-0 pb-2 font-size-18\" data-v-522899be>"+_vm._ssrEscape(_vm._s(_vm.localizeFilter('ThirdCategory')))+"</h3></div> "),_vm._ssrNode("<ul class=\"list-unstyled products-group\" data-v-522899be>","</ul>",_vm._l((_vm.popularProducts.slice(7,10)),function(el,i){return _vm._ssrNode("<li class=\"product-item product-item__list row no-gutters mb-6 remove-divider\" data-v-522899be>","</li>",[_vm._ssrNode("<div class=\"col-auto\" data-v-522899be>","</div>",[_c('NuxtLink',{staticClass:"d-block width-75 text-center",attrs:{"to":'/product?id='+el.offerData.kaspi_id}},[_c('img',{staticClass:"img-fluid",attrs:{"src":el.offerData.images[0],"alt":"Image Description"}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col pl-4 d-flex flex-column\" data-v-522899be>","</div>",[_vm._ssrNode("<h5 class=\"product-item__title mb-0\" data-v-522899be>","</h5>",[_c('NuxtLink',{staticClass:"text-blue font-weight-bold",attrs:{"to":'/product?id='+el.offerData.kaspi_id}},[_vm._v(_vm._s(el.offerData.kaspi_name))])],1),_vm._ssrNode(" <div class=\"text-warning mb-2\" data-v-522899be>"+(_vm._ssrList((Math.floor(el.offerData.kaspi_rating)),function(fil,o){return ("<small class=\"fas fa-star\" data-v-522899be></small>")}))+" "+(_vm._ssrList((5 - Math.floor(el.offerData.kaspi_rating)),function(fil,o){return ("<small class=\"fas fa-star text-muted\" data-v-522899be></small>")}))+"</div> <div class=\"prodcut-price mt-auto\" data-v-522899be><div class=\"font-size-15\" data-v-522899be>"+_vm._ssrEscape(_vm._s(el.offerData.price)+" тг.")+"</div></div>")],2)],2)}),0)],2),_vm._ssrNode(" <div class=\"col-wd-3 d-none d-wd-block\" data-v-522899be><img src=\"/img/330X360/img1.jpg\" alt=\"Image Description\" class=\"img-fluid d-block img360x330\" data-v-522899be></div>")],2)]),_vm._ssrNode(" <div class=\"bg-primary py-3\" data-v-522899be><div class=\"container\" data-v-522899be><div class=\"row align-items-center\" data-v-522899be><div class=\"col-lg-7 mb-md-3 mb-lg-0\" data-v-522899be><div class=\"row align-items-center\" data-v-522899be><div class=\"col-auto flex-horizontal-center\" data-v-522899be><i class=\"ec ec-newsletter font-size-40\" data-v-522899be></i> <h2 class=\"font-size-20 mb-0 ml-3\" data-v-522899be>"+_vm._ssrEscape(_vm._s(_vm.localizeFilter('SignOnLetterTitle')))+"</h2></div> <div class=\"col my-4 my-md-0\" data-v-522899be><h5 class=\"font-size-15 ml-4 mb-0\" data-v-522899be><strong data-v-522899be>"+_vm._ssrEscape(_vm._s(_vm.localizeFilter('SignOnLetterEnding')))+"</strong></h5></div></div></div> <div class=\"col-lg-5\" data-v-522899be><div data-v-522899be><label class=\"sr-only\" data-v-522899be>Email address</label> <div class=\"input-group input-group-pill\" data-v-522899be><input type=\"email\" name=\"email\" placeholder=\"Email address\" aria-label=\"Email address\" required=\"required\" data-msg=\"Please enter a valid email address.\" class=\"form-control border-0 height-40\" data-v-522899be> <div class=\"input-group-append\" data-v-522899be><button class=\"btn btn-dark btn-sm-wide height-40 py-2\" style=\"cursor: pointer\" data-v-522899be>"+_vm._ssrEscape(_vm._s(_vm.localizeFilter('SubmitButton')))+"</button></div></div></div></div></div></div></div> "),_vm._ssrNode("<div class=\"pt-8 pb-4 bg-gray-13\" data-v-522899be>","</div>",[_vm._ssrNode("<div class=\"container mt-1\" data-v-522899be>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-522899be>","</div>",[_vm._ssrNode("<div class=\"col-lg-5\" data-v-522899be>","</div>",[_vm._ssrNode("<div class=\"mb-6\" data-v-522899be>","</div>",[_c('NuxtLink',{staticClass:"d-inline-block",staticStyle:{"width":"9rem"},attrs:{"to":"#"}},[_c('img',{staticStyle:{"width":"9rem","margin-top":"5px"},attrs:{"src":"logo.svg"}})])],1),_vm._ssrNode(" <div class=\"mb-4\" data-v-522899be><div class=\"row no-gutters\" data-v-522899be><div class=\"col-auto\" data-v-522899be><i class=\"ec ec-support text-primary font-size-56\" data-v-522899be></i></div> <div class=\"col pl-3\" data-v-522899be><div class=\"font-size-13 font-weight-light\" data-v-522899be>"+_vm._ssrEscape(_vm._s(_vm.localizeFilter('FirstQuestion')))+"</div> <a"+(_vm._ssrAttr("href",_vm.localizeFilter('FNumber')))+" class=\"font-size-20 text-gray-90\" data-v-522899be>"+_vm._ssrEscape(_vm._s(_vm.localizeFilter('FNumber')))+"</a>, <a"+(_vm._ssrAttr("href",_vm.localizeFilter('SNumber')))+" class=\"font-size-20 text-gray-90\" data-v-522899be>"+_vm._ssrEscape(_vm._s(_vm.localizeFilter('SNumber')))+"</a></div></div></div> <div class=\"mb-4\" data-v-522899be><h6 class=\"mb-1 font-weight-bold\" data-v-522899be>"+_vm._ssrEscape(_vm._s(_vm.localizeFilter('ContactInfoTitle')))+"</h6> <address data-v-522899be>"+_vm._ssrEscape("\n                            "+_vm._s(_vm.localizeFilter('ContactInfoValue'))+"\n                        ")+"</address></div> "),_vm._ssrNode("<div class=\"my-4 my-md-4\" data-v-522899be>","</div>",[_vm._ssrNode("<ul class=\"list-inline mb-0 opacity-7\" data-v-522899be>","</ul>",[_vm._ssrNode("<li class=\"list-inline-item mr-0\" data-v-522899be>","</li>",[_c('NuxtLink',{staticClass:"btn font-size-20 btn-icon btn-soft-dark btn-bg-transparent rounded-circle",attrs:{"to":"#"}},[_c('span',{staticClass:"fab fa-facebook-f btn-icon__inner"})])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"list-inline-item mr-0\" data-v-522899be>","</li>",[_c('NuxtLink',{staticClass:"btn font-size-20 btn-icon btn-soft-dark btn-bg-transparent rounded-circle",attrs:{"to":"#"}},[_c('span',{staticClass:"fab fa-google btn-icon__inner"})])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"list-inline-item mr-0\" data-v-522899be>","</li>",[_c('NuxtLink',{staticClass:"btn font-size-20 btn-icon btn-soft-dark btn-bg-transparent rounded-circle",attrs:{"to":"#"}},[_c('span',{staticClass:"fab fa-twitter btn-icon__inner"})])],1),_vm._ssrNode(" "),_vm._ssrNode("<li class=\"list-inline-item mr-0\" data-v-522899be>","</li>",[_c('NuxtLink',{staticClass:"btn font-size-20 btn-icon btn-soft-dark btn-bg-transparent rounded-circle",attrs:{"to":"#"}},[_c('span',{staticClass:"fab fa-github btn-icon__inner"})])],1)],2)])],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-lg-7\" data-v-522899be>","</div>",[_vm._ssrNode("<div class=\"row\" data-v-522899be>","</div>",[_vm._ssrNode("<div class=\"col-12 col-md mb-4 mb-md-0\" data-v-522899be>","</div>",[_vm._ssrNode("<h6 class=\"mb-3 font-weight-bold\" data-v-522899be>"+_vm._ssrEscape(_vm._s(_vm.localizeFilter('CategoriesTitle')))+"</h6> "),_vm._ssrNode("<ul class=\"list-group list-group-flush list-group-borderless mb-0 list-group-transparent\" data-v-522899be>","</ul>",_vm._l((this.$store.state.categories),function(el,i){return _vm._ssrNode("<li data-v-522899be>","</li>",[_c('NuxtLink',{staticClass:"list-group-item list-group-item-action",attrs:{"to":'/shop?FCat?'+Object.keys(el)[0]}},[_vm._v(_vm._s(Object.keys(el)[0]))])],1)}),0)],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"col-12 col-md mb-4 mb-md-0\" data-v-522899be>","</div>",[_vm._ssrNode("<h6 class=\"mb-3 font-weight-bold\" data-v-522899be>"+_vm._ssrEscape(_vm._s(_vm.localizeFilter('OtherInfoTitle')))+"</h6> "),_vm._ssrNode("<ul class=\"list-group list-group-flush list-group-borderless mb-0 list-group-transparent\" data-v-522899be>","</ul>",[_vm._ssrNode("<li data-v-522899be>","</li>",[_c('NuxtLink',{staticClass:"list-group-item list-group-item-action",attrs:{"to":"/terms"}},[_vm._v("Customer Service")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-522899be>","</li>",[_c('NuxtLink',{staticClass:"list-group-item list-group-item-action",attrs:{"to":"/terms"}},[_vm._v("Returns / Exchange")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-522899be>","</li>",[_c('NuxtLink',{staticClass:"list-group-item list-group-item-action",attrs:{"to":"/faq"}},[_vm._v("FAQs")])],1),_vm._ssrNode(" "),_vm._ssrNode("<li data-v-522899be>","</li>",[_c('NuxtLink',{staticClass:"list-group-item list-group-item-action",attrs:{"to":"/terms"}},[_vm._v("Product Support")])],1)],2)],2),_vm._ssrNode(" <div class=\"col-12 col-md mb-4 mb-md-0\" data-v-522899be><h6 class=\"mb-3 font-weight-bold\" data-v-522899be>Language</h6> <li class=\"list-inline-item mr-0 u-header-topbar__nav-item u-header-topbar__nav-item-border u-header-topbar__nav-item-no-border u-header-topbar__nav-item-border-single\" data-v-522899be><div class=\"d-flex align-items-center\" data-v-522899be><div class=\"position-relative\" data-v-522899be><a id=\"languageDropdownInvoker2\" href=\"javascript:;\" role=\"button\" aria-controls=\"languageDropdown2\" aria-haspopup=\"true\" aria-expanded=\"false\" data-unfold-event=\"hover\" data-unfold-target=\"#languageDropdown2\" data-unfold-type=\"css-animation\" data-unfold-duration=\"300\" data-unfold-delay=\"300\" data-unfold-hide-on-scroll=\"true\" data-unfold-animation-in=\"slideInUp\" data-unfold-animation-out=\"fadeOut\" class=\"dropdown-nav-link dropdown-toggle d-flex align-items-center u-header-topbar__nav-link font-weight-normal\" data-v-522899be><span class=\"d-sm-inline-flex align-items-center\" data-v-522899be><i class=\"ec ec-dollar mr-1\" data-v-522899be></i>"+_vm._ssrEscape(_vm._s(this.$store.state.lang.lang == 'en-US' ? 'English' : this.$store.state.lang.lang == 'ru-RU' ? 'Russian' : this.$store.state.lang.lang == 'kz-KZ' ? 'Kazakh' : 'Choose your'))+"</span></a> <div id=\"languageDropdown2\" aria-labelledby=\"languageDropdownInvoker2\" class=\"dropdown-menu dropdown-unfold\" data-v-522899be><div class=\"dropdown-item\" style=\"cursor: pointer\" data-v-522899be>English</div> <div class=\"dropdown-item\" style=\"cursor: pointer\" data-v-522899be>Russian</div> <div class=\"dropdown-item\" style=\"cursor: pointer\" data-v-522899be>Kazakh‎</div></div></div></div></li></div>")],2)])],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"bg-gray-14 py-2\" data-v-522899be>","</div>",[_vm._ssrNode("<div class=\"container\" data-v-522899be>","</div>",[_vm._ssrNode("<div class=\"flex-center-between d-block d-md-flex\" data-v-522899be>","</div>",[_vm._ssrNode("<div class=\"mb-3 mb-md-0\" data-v-522899be>","</div>",[_vm._ssrNode("© "),_c('NuxtLink',{staticClass:"font-weight-bold text-gray-90",attrs:{"to":"#"}},[_vm._v(_vm._s(_vm.localizeFilter('BottomCompanyName')))]),_vm._ssrNode(_vm._ssrEscape(_vm._s(_vm.localizeFilter('BottomMessage'))))],2),_vm._ssrNode(" <div class=\"text-md-right\" data-v-522899be><span class=\"d-inline-block bg-white border rounded p-1\" data-v-522899be><img src=\"/img/100X60/img1.jpg\" alt=\"Image Description\" class=\"max-width-5\" data-v-522899be></span> <span class=\"d-inline-block bg-white border rounded p-1\" data-v-522899be><img src=\"/img/100X60/img2.jpg\" alt=\"Image Description\" class=\"max-width-5\" data-v-522899be></span> <span class=\"d-inline-block bg-white border rounded p-1\" data-v-522899be><img src=\"/img/100X60/img3.jpg\" alt=\"Image Description\" class=\"max-width-5\" data-v-522899be></span> <span class=\"d-inline-block bg-white border rounded p-1\" data-v-522899be><img src=\"/img/100X60/img4.jpg\" alt=\"Image Description\" class=\"max-width-5\" data-v-522899be></span> <span class=\"d-inline-block bg-white border rounded p-1\" data-v-522899be><img src=\"/img/100X60/img5.jpg\" alt=\"Image Description\" class=\"max-width-5\" data-v-522899be></span></div>")],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/Footer.vue?vue&type=template&id=522899be&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/Footer.vue?vue&type=script&lang=js&
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
//
//
//
//

/* harmony default export */ var Footervue_type_script_lang_js_ = ({
  data() {
    return {
      Component: 'Footer',
      popularProducts: []
    };
  },

  methods: {
    localizeFilter(key, key2, key3) {
      var _this$$store$state$la, _this$$store$state$la2, _this$$store$state$la3, _this$$store$state$la4, _this$$store$state$la5, _this$$store$state$la6, _this$$store$state$la7, _this$$store$state$la8, _this$$store$state$la9, _this$$store$state$la10, _this$$store$state$la11, _this$$store$state$la12;

      if (key3) return ((_this$$store$state$la = this.$store.state.lang.locales) === null || _this$$store$state$la === void 0 ? void 0 : (_this$$store$state$la2 = _this$$store$state$la[this.$store.state.lang.lang]) === null || _this$$store$state$la2 === void 0 ? void 0 : (_this$$store$state$la3 = _this$$store$state$la2[this.Component]) === null || _this$$store$state$la3 === void 0 ? void 0 : (_this$$store$state$la4 = _this$$store$state$la3[key]) === null || _this$$store$state$la4 === void 0 ? void 0 : (_this$$store$state$la5 = _this$$store$state$la4[key2]) === null || _this$$store$state$la5 === void 0 ? void 0 : _this$$store$state$la5[key3]) || ``;else if (key2) return ((_this$$store$state$la6 = this.$store.state.lang.locales) === null || _this$$store$state$la6 === void 0 ? void 0 : (_this$$store$state$la7 = _this$$store$state$la6[this.$store.state.lang.lang]) === null || _this$$store$state$la7 === void 0 ? void 0 : (_this$$store$state$la8 = _this$$store$state$la7[this.Component]) === null || _this$$store$state$la8 === void 0 ? void 0 : (_this$$store$state$la9 = _this$$store$state$la8[key]) === null || _this$$store$state$la9 === void 0 ? void 0 : _this$$store$state$la9[key2]) || ``;else return ((_this$$store$state$la10 = this.$store.state.lang.locales) === null || _this$$store$state$la10 === void 0 ? void 0 : (_this$$store$state$la11 = _this$$store$state$la10[this.$store.state.lang.lang]) === null || _this$$store$state$la11 === void 0 ? void 0 : (_this$$store$state$la12 = _this$$store$state$la11[this.Component]) === null || _this$$store$state$la12 === void 0 ? void 0 : _this$$store$state$la12[key]) || ``;
    },

    changeLang(lang) {
      this.$store.commit('lang/changeLang', lang);
    }

  },

  created() {
    external_axios_default.a.get('https://textforeva.ru/storage/mostPopular/products/25').then(response => {
      console.log(response);
      this.popularProducts = response.data.reverse();
    }).catch(function (error) {
      console.log(error);
    });
  },

  mounted() {
    $(window).on('load', function () {
      // initialization of HSMegaMenu component
      $('.js-mega-menu').HSMegaMenu({
        event: 'hover',
        direction: 'horizontal',
        pageContainer: $('.container'),
        breakpoint: 767.98,
        hideTimeOut: 0
      });
    });
    $(document).on('ready', function () {
      // initialization of header
      $.HSCore.components.HSHeader.init($('#header')); // initialization of animation

      $.HSCore.components.HSOnScrollAnimation.init('[data-animation]'); // initialization of unfold component

      $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
        afterOpen: function () {
          $(this).find('input[type="search"]').focus();
        }
      }); // initialization of forms

      $.HSCore.components.HSFocusState.init(); // initialization of form validation

      $.HSCore.components.HSValidation.init('.js-validate', {
        rules: {
          confirmPassword: {
            equalTo: '#signupPassword'
          }
        }
      }); // initialization of show animations

      $.HSCore.components.HSShowAnimation.init('.js-animation-link'); // initialization of hamburgers

      $.HSCore.components.HSHamburgers.init('#hamburgerTrigger'); // initialization of unfold component

      $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {
        beforeClose: function () {
          $('#hamburgerTrigger').removeClass('is-active');
        },
        afterClose: function () {
          $('#headerSidebarList .collapse.show').collapse('hide');
        }
      });
      $('#headerSidebarList [data-toggle="collapse"]').on('click', function (e) {
        e.preventDefault();
        var target = $(this).data('target');

        if ($(this).attr('aria-expanded') === "true") {
          $(target).collapse('hide');
        } else {
          $(target).collapse('show');
        }
      }); // initialization of unfold component

      $.HSCore.components.HSUnfold.init($('[data-unfold-target]')); // initialization of select picker

      $.HSCore.components.HSSelectPicker.init('.js-select');
    });
  }

});
// CONCATENATED MODULE: ./src/components/Footer.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_Footervue_type_script_lang_js_ = (Footervue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/components/Footer.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(32)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Footervue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "522899be",
  "7e78df4c"
  
)

/* harmony default export */ var Footer = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Footer: __webpack_require__(7).default})


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 12 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 17 */
/***/ (function(module) {

module.exports = JSON.parse("{\"Header\":{\"Greeting\":\"Привет Мир\",\"AboutUs\":\"About Us\",\"FAQs\":\"FAQs\",\"ContactUs\":\"Contact Us\",\"Support\":\"Support\",\"PhoneNumber\":\"(+800) 856 800 604\",\"E-mailTitle\":\"E-mail: \",\"E-mailValue\":\"info@electro.com\",\"AccordionTitle\":\"Shop By Department\",\"SearchInputPlaceholder\":\"Search for Products\",\"SearchSuggestion\":\"Search\",\"CartSuggestion\":\"Cart\"}}");

/***/ }),
/* 18 */
/***/ (function(module) {

module.exports = JSON.parse("{\"Header\":{\"Greeting\":\"Welcome to Telenova\",\"Categories\":\"Categories\"},\"Footer\":{\"FirstCategory\":\"Featured Products\",\"SecondCategory\":\"Onsale Products\",\"ThirdCategory\":\"Top Rated Products\",\"SignOnLetterTitle\":\"Sign up to Newsletter\",\"SignOnLetterEnding\":\"...and receive $20 coupon for first shopping.\",\"SubmitButton\":\"Sign Up\",\"FirstQuestion\":\"Got questions? Call us 24/7!\",\"FNumber\":\"(800)8001-8588\",\"SNumber\":\"(0600)874-548\",\"ContactInfoTitle\":\"Contact info\",\"ContactInfoValue\":\"17 Princess Road, London, Greater London NW1 8JR, UK\",\"CategoriesTitle\":\"Find it Fast\",\"OtherInfoTitle\":\"Customer Care\",\"BottomCompanyName\":\"Electro\",\"BottomMessage\":\" - All rights Reserved\"},\"ErrorPage\":{\"ErrorTitle\":\"404!\",\"ErrorText\":\"Nothing was found at this location. Try searching, or check out the links below.\"},\"MainPage\":{\"FirstPartTitle\":\"Newest Products\",\"FirstPartSuggestionLink\":\"Go to Daily Deals Section \",\"SecondPartTitle\":\"Trending products\",\"SecondPartSuggestionLink\":\"Go to Trending products\",\"ThirdPartTitle\":\"Popular Products\",\"FourthPartTitle\":\"Laptops & Computers\",\"FifthPartTitle\":\"Television Entertainment\"},\"CartPage\":{\"Title\":\"Cart\",\"FirstOptionTitle\":\"Product\",\"SecondOptionTitle\":\"Price\",\"ThirdOptionTitle\":\"Quantity\",\"FourthOptionTitle\":\"Total\",\"CouponTitle\":\"Coupon code\",\"CouponButtonTitle\":\"Apply coupon\",\"UpdateCartButton\":\"Update cart\",\"CheckoutButton\":\"Proceed to checkout\",\"CartConcludedTitle\":\"Cart totals\",\"CartConcludedFirstSubTitle\":\"Subtotal\",\"CartConcludedSecondSubTitle\":\"Shipping\",\"CartConcludedSecondSubTitleFText\":\"Flat Rate\",\"CartConcludedSecondSubTitleSText\":\"Calculate Shipping\",\"CartConcludedThirdSubTitle\":\"Total\"},\"CheckoutPage\":{\"MainTitle\":\"Checkout\",\"CouponPart\":{\"Fquestion\":\"Have a coupon? \",\"FLink\":\"Click here to enter your code\",\"CouponDescription\":\"If you have a coupon code, please apply it below.\",\"InputPlaceholder\":\"Coupon code\",\"ButtonTitle\":\"Apply coupon\"},\"Bill\":{\"Title\":\"Billing details\",\"FirstInputLabel\":\"First Name\",\"FirstInputPlaceholder\":\"Jack\",\"SecondInputLabel\":\"Last Name\",\"SecondInputPlaceholder\":\"Wayley\",\"ThirdInputLabel\":\"Company Name (Optional)\",\"ThirdInputPlaceholder\":\"Company Name\",\"FourthInputLabel\":\"Country\",\"FourthInputPlaceholder\":\"Select country\",\"FifthInputLabel\":\"Street Address\",\"FifthInputPlaceholder\":\"470 Lucy Forks\",\"SixthInputLabel\":\"Apt, Suite, Etc.\",\"SixthInputPlaceholder\":\"YC7B 3UT\",\"SeventhInputLabel\":\"City\",\"SeventhInputPlaceholder\":\"London\",\"EighthInputLabel\":\"Postcode/Zip\",\"EighthInputPlaceholder\":\"99999\",\"TenthInputLabel\":\"Email Address\",\"TenthInputPlaceholder\":\"jackwayley@gmail.com\",\"EleventhInputLabel\":\"Phone\",\"EleventhInputPlaceholder\":\"+1 (062) 109-9222\",\"DetailsTitle\":\"Shipping Details details\",\"TwelfthInputLabel\":\"Order Notes (Optional)\",\"TwelfthInputPlaceholder\":\"Notes about your order, e.g. special notes for delivery.\"},\"Order\":{\"Title\":\"Your order\",\"FirstProductsTitle\":\"Product\",\"ProductsTotalTitle\":\"Total\",\"SecondProductsTitle\":\"Subtotal\",\"ThirdProductsTitle\":\"Shipping\",\"FourthProductsTitle\":\"Total\",\"TransferVariations\":{\"FirstVariationTitle\":\"Direct Bank Transfer\",\"FirstVariationText\":\"Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.\",\"SecondVariationTitle\":\"Check Payments\",\"SecondVariationText\":\"Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.\",\"ThirdVariationTitle\":\"Cash On Delivery\",\"ThirdVariationText\":\"Pay with cash upon delivery.\",\"FourthVariationTitle\":\"PayBox\",\"FourthVariationQuestion\":\"What Is PayBox?\",\"FourthVariationText\":\"Pay via PayBox; you can pay with your credit card if you don’t have a PayBox account.\",\"AgreedTermsTitle\":\"I have read and agree to the website\",\"AgreedTermsLinkToTermsPage\":\"terms and conditions \",\"SuccessButtonText\":\"Place order\"}}},\"AboutUsPage\":{\"Title\":\"About Us\",\"TitleText\":\"Passion may be a friendly or eager interest in or admiration for a proposal, cause, discovery, or activity or love to a feeling of unusual excitement.\",\"FirstPart\":{\"FirstCardTitle\":\"What we really do?\",\"FirstCardText\":\"Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna,vitae ultrices lacus purus vitae metus.\",\"SecondCardTitle\":\"Our Vision\",\"SecondCardText\":\"Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna,vitae ultrices lacus purus vitae metus.\",\"ThirdCardTitle\":\"History of Beginning\",\"ThirdCardText\":\"Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna,vitae ultrices lacus purus vitae metus.\",\"FirstWorkerName\":\"Thomas Snow\",\"FirstWorkerProfession\":\"CEO/Founder\",\"SecondWorkerName\":\"Anna Baranov\",\"SecondWorkerProfession\":\"Client Care\",\"ThirdWorkerName\":\"Andre Kowalsy\",\"ThirdWorkerProfession\":\"Support Boss\",\"FourthWorkerName\":\"Pamela Doe\",\"FourthWorkerProfession\":\"Delivery Driver\",\"FifthWorkerName\":\"Susan McCain\",\"FifthWorkerProfession\":\"Packaging Girl\",\"LastCircleTitle\":\"See Details\"},\"SecondPart\":{\"FirstTitle\":\"What we really do?\",\"FirstText\":\"Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna, vitae ultrices lacus purus vitae metus. Ut nec odio facilisis, ultricies nunc eget, fringilla orci.\",\"SecondTitle\":\"Our Vision\",\"SecondText\":\"Vestibulum velit nibh, egestas vel faucibus vitae, feugiat sollicitudin urna. Praesent iaculis id ipsum sit amet pretium. Aliquam tristique sapien nec enim euismod, scelerisque facilisis arcu consectetur. Vestibulum velit nibh, egestas vel faucibus vitae.\",\"ThirdTitle\":\"History of the Company\",\"ThirdText\":\"Mauris rhoncus aliquet purus, a ornare nisi euismod in. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam imperdiet eu metus vel ornare. Nullam in risus vel orci feugiat vestibulum. In sed aliquam mi. Nullam condimentum sollicitudin dui.\",\"FourthTitle\":\"Cooperate with Us!\",\"FourthText\":\"Donec libero dolor, tincidunt id laoreet vitae, ullamcorper eu tortor. Maecenas pellentesque, dui vitae iaculis mattis, tortor nisi faucibus magna, vitae ultrices lacus purus vitae metus. Ut nec odio facilisis, ultricies nunc eget, fringilla orci.\"},\"ThirdPart\":{\"MainTitle\":\"What can we do for you ?\",\"FirstTitle\":\"Support 24/7\",\"FirstText\":\"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\",\"SecondTitle\":\"Best Quality\",\"SecondText\":\"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\",\"ThirdTitle\":\"Fastest Delivery\",\"ThirdText\":\"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\",\"FourthTitle\":\"Customer Care\",\"FourthText\":\"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\",\"FifthTitle\":\"Over 200 Satisfied Customers\",\"FifthText\":\"Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\"}},\"ContactUsPage\":{\"FirstPart\":{\"Title\":\"Leave us a Message\",\"FText\":\"Maecenas dolor elit, semper a sem sed, pulvinar molestie lacus. Aliquam dignissim, elit non mattis ultrices, neque odio ultricies tellus, eu porttitor nisl ipsum eu massa.\",\"FirstInputLabel\":\"First Name\",\"SecondInputLabel\":\"Last Name\",\"ThirdInputLabel\":\"Subject\",\"FourthInputLabel\":\"Your Message\",\"SendButtonText\":\"Send Message\"},\"SecondPart\":{\"Title\":\"Our Store\",\"Address1Line\":\"121 King Street, \",\"Address2Line\":\"Melbourne VIC 3000, \",\"Address3Line\":\"Australia\",\"WorkingHoursTitle\":\"Hours of Operation\",\"1dayTitle\":\"Monday:\",\"1dayTime\":\"12-6 PM\",\"2dayTitle\":\"Tuesday:\",\"2dayTime\":\"12-6 PM\",\"3dayTitle\":\"Wednesday:\",\"3dayTime\":\"12-6 PM\",\"4dayTitle\":\"Thursday:\",\"4dayTime\":\"12-6 PM\",\"5dayTitle\":\"Friday:\",\"5dayTime\":\"12-6 PM\",\"6dayTitle\":\"Saturday:\",\"6dayTime\":\"12-6 PM\",\"7dayTitle\":\"Sunday:\",\"7dayTime\":\"Closed\"}},\"TermsPage\":{\"Title\":\"Terms and Conditions\",\"SubTitle\":\"This Agreement was last modified on 18th february 2019\",\"FirstPart\":{\"MainTitle\":\"Intellectual Propertly\",\"1Term\":\" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis diam erat. Duis velit lectus, posuere a blandit sit amet, tempor at lorem. Donec ultricies, lorem sed ultrices interdum.\",\"2Term\":\" Leo metus luctus sem, vel vulputate diam ipsum sed lorem. Donec tempor arcu nisl, et molestie massa scelerisque ut. Nunc at rutrum leo. Mauris metus mauris, tristique quis sapien eu, rutrum vulputate enim.\",\"3Term\":\" Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat fermentum.\",\"4Term\":\" Aliquam non tincidunt urna. Integer tincidunt nec nisl vitae ullamcorper. Proin sed ultrices erat. Praesent varius ultrices massa at faucibus.\",\"5Term\":\" Aenean dignissim, orci sed faucibus pharetra, dui mi dignissim tortor, sit amet condimentum mi ligula sit amet augue.\",\"6Term\":\" Pellentesque vitae eros eget enim mollis placerat.\"},\"SecondPart\":{\"MainTitle\":\"Termination\",\"1Term\":\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam quis diam erat. Duis velit lectus, posuere a blandit sit amet, tempor at lorem. Donec ultricies, lorem sed ultrices interdum.\",\"2Term\":\"Leo metus luctus sem, vel vulputate diam ipsum sed lorem. Donec tempor arcu nisl, et molestie massa scelerisque ut. Nunc at rutrum leo. Mauris metus mauris, tristique quis sapien eu, rutrum vulputate enim.\",\"3Term\":\"Mauris tempus erat laoreet turpis lobortis, eu tincidunt erat fermentum.\",\"4Term\":\"Aliquam non tincidunt urna. Integer tincidunt nec nisl vitae ullamcorper. Proin sed ultrices erat. Praesent varius ultrices massa at faucibus.\",\"5Term\":\"Aenean dignissim, orci sed faucibus pharetra, dui mi dignissim tortor, sit amet condimentum mi ligula sit amet augue.\",\"6Term\":\"Pellentesque vitae eros eget enim mollis placerat.\"},\"ThirdPart\":{\"MainTitle\":\"Changes To This Agreement\",\"1Term\":\"We reserve the right, at our sole discretion, to modify or replace these Terms and Conditions by posting the updated terms on the Site. Your continued use of the Site after any such changes constitutes your acceptance of the new Terms and Conditions.\"},\"FourthPart\":{\"MainTitle\":\"Contact Us\",\"1Part\":\"If you have any questions about this Agreement, please contact us filling this \",\"2Part\":\"contact form\"}},\"FAQPage\":{\"Title\":\"Frequently Asked Questions\",\"SubTitle\":\"This Agreement was last modified on 18th february 2019\",\"FirstTitle\":\"What Shipping Methods Are Available?\",\"FirstText\":\"In egestas, libero vitae scelerisque tristique, turpis augue faucibus dolor, at aliquet ligula massa at justo. Donec viverra tortor quis tortor pretium, in pretium risus finibus. Integer viverra pretium auctor. Aliquam eget convallis eros, varius sagittis nulla. Suspendisse potenti. Aenean consequat ex sit amet metus ultrices tristique. Nam ac nunc augue. Suspendisse finibus in dolor eget volutpat.\",\"SecondTitle\":\"How Long Will it Take To Get My Package?\",\"SecondText\":\"In egestas, libero vitae scelerisque tristique, turpis augue faucibus dolor, at aliquet ligula massa at justo. Donec viverra tortor quis tortor pretium, in pretium risus finibus. Integer viverra pretium auctor. Aliquam eget convallis eros, varius sagittis nulla. Suspendisse potenti. Aenean consequat ex sit amet metus ultrices tristique. Nam ac nunc augue. Suspendisse finibus in dolor eget volutpat.\",\"ThirdTitle\":\"How Do I Track My Order?\",\"ThirdText\":\"In egestas, libero vitae scelerisque tristique, turpis augue faucibus dolor, at aliquet ligula massa at justo. Donec viverra tortor quis tortor pretium, in pretium risus finibus. Integer viverra pretium auctor. Aliquam eget convallis eros, varius sagittis nulla. Suspendisse potenti. Aenean consequat ex sit amet metus ultrices tristique. Nam ac nunc augue. Suspendisse finibus in dolor eget volutpat.\",\"FourthTitle\":\"How Do I Place an Order?\",\"FourthText\":\"In egestas, libero vitae scelerisque tristique, turpis augue faucibus dolor, at aliquet ligula massa at justo. Donec viverra tortor quis tortor pretium, in pretium risus finibus. Integer viverra pretium auctor. Aliquam eget convallis eros, varius sagittis nulla. Suspendisse potenti. Aenean consequat ex sit amet metus ultrices tristique. Nam ac nunc augue. Suspendisse finibus in dolor eget volutpat.\",\"FifthTitle\":\"How Should I to Contact if I Have Any Queries?\",\"FifthText\":\"In egestas, libero vitae scelerisque tristique, turpis augue faucibus dolor, at aliquet ligula massa at justo. Donec viverra tortor quis tortor pretium, in pretium risus finibus. Integer viverra pretium auctor. Aliquam eget convallis eros, varius sagittis nulla. Suspendisse potenti. Aenean consequat ex sit amet metus ultrices tristique. Nam ac nunc augue. Suspendisse finibus in dolor eget volutpat.\",\"SixthTitle\":\"Do I Need an Account to Place an Order?\",\"SixthText\":\"In egestas, libero vitae scelerisque tristique, turpis augue faucibus dolor, at aliquet ligula massa at justo. Donec viverra tortor quis tortor pretium, in pretium risus finibus. Integer viverra pretium auctor. Aliquam eget convallis eros, varius sagittis nulla. Suspendisse potenti. Aenean consequat ex sit amet metus ultrices tristique. Nam ac nunc augue. Suspendisse finibus in dolor eget volutpat.\"},\"ProductPage\":{\"CardAvailabilityText\":\"Availability:\",\"CardQuantityText\":\"Quantity\",\"CardColorText\":\"Color\",\"AddToCartText\":\"Add to Cart\",\"BuyNowText\":\"Buy Now\",\"BuyKaspiText\":\"Buy On Kaspi\",\"SecondDescriptionPartTitle\":\"Specification\",\"RelatedProductsPartTitle\":\"Related products\"},\"ShopPage\":{\"FirstOptionalTitle\":\"Recommended Products\",\"FilterPart\":{\"FirstPartTitle\":\"Browse Categories\",\"SecondPartTitle\":\"Filters\",\"SecondPartFirstSubTitle\":\"Brands\",\"SecondPartSecondSubTitle\":\"Color\",\"SecondPartThirdSubTitle\":\"Price\",\"ButtonText\":\"Filter\",\"ThirdPartTitle\":\"Latest Products\"},\"SecondTitle\":\"Shop\"}}");

/***/ }),
/* 19 */
/***/ (function(module) {

module.exports = JSON.parse("{}");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(22);
module.exports = __webpack_require__(39);


/***/ }),
/* 22 */
/***/ (function(module, exports) {

global.installComponents = function (component, components) {
  var options = typeof component.exports === 'function'
    ? component.exports.extendOptions
    : component.options

  if (typeof component.exports === 'function') {
    options.components = component.exports.options.components
  }

  options.components = options.components || {}

  for (var i in components) {
    options.components[i] = options.components[i] || components[i]
  }


  if (options.functional) {
    provideFunctionalComponents(component, options.components)
  }
}

var functionalPatchKey = '_functionalComponents'

function provideFunctionalComponents(component, components) {
  if (component.exports[functionalPatchKey]) {
    return
  }
  component.exports[functionalPatchKey] = true

  var render = component.exports.render
  component.exports.render = function (h, vm) {
    return render(h, Object.assign({}, vm, {
      _c: function (n, a, b) {
        return vm._c(components[n] || n, a, b)
      }
    }))
  }
}


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 24 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 29 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_132a2f36_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_132a2f36_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_132a2f36_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_132a2f36_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Header_vue_vue_type_style_index_0_id_132a2f36_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_522899be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_522899be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_522899be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_522899be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Footer_vue_vue_type_style_index_0_id_522899be_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 33 */
/***/ (function(module, exports) {

// Exports
module.exports = {

};


/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_0_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_1_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "state", function() { return state; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mutations", function() { return mutations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actions", function() { return actions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getters", function() { return getters; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const state = () => ({
  categories: null,
  products: null,
  productsFilteredCopy: null,
  productsFilteredCopyCopy: null,
  BackUrl: 'https://textforeva.ru',
  ws: null,
  filters: []
});
const mutations = {
  SetProducts(state, response) {
    state.products = response;
    state.productsFilteredCopy = response;
    state.productsFilteredCopyCopy = response;
  },

  SetCategories(state, response) {
    state.categories = response;
  },

  SetWs(state, ws) {
    state.ws = ws;
  },

  ChFilters(state, filters) {
    state.filters = filters;
  },

  ChProductsCopy(state, products) {
    var arr = products;

    while (arr.length % 3 != 0 && arr.length > 3) {
      arr.pop();
    }

    state.productsFilteredCopy = arr;
    state.productsFilteredCopyCopy = arr;
  },

  FilterProducts(state, MyArray) {
    var ExceptionsArray = [];
    MyArray[0].forEach(element => {
      ExceptionsArray.push({
        name: element[0],
        value: element[1]
      });
    });

    if (MyArray[2][0] == 'FCat') {
      var JSON_Obj = {
        "action": "search",
        "agent": "client",
        "data": {
          "query": "",
          "filters": {
            "firstLevelCategory": MyArray[2][1],
            "priceRange": MyArray[1],
            "exceptions": ExceptionsArray
          }
        }
      };
    } else if (MyArray[2][0] == 'SCat') {
      var JSON_Obj = {
        "action": "search",
        "agent": "client",
        "data": {
          "query": "",
          "filters": {
            "secondLevelCategory": MyArray[2][1],
            "priceRange": MyArray[1],
            "exceptions": ExceptionsArray
          }
        }
      };
    } else if (MyArray[2][0] == 'TCat') {
      var JSON_Obj = {
        "action": "search",
        "agent": "client",
        "data": {
          "query": "",
          "filters": {
            "thirdLevelCategory": MyArray[2][1],
            "priceRange": MyArray[1],
            "exceptions": ExceptionsArray
          }
        }
      };
    } else {
      var JSON_Obj = {
        "action": "search",
        "agent": "client",
        "data": {
          "query": "",
          "filters": {
            "priceRange": MyArray[1],
            "exceptions": ExceptionsArray
          }
        }
      };
    }

    state.ws.send(JSON.stringify(JSON_Obj));
  },

  DefaultSorting(state) {
    state.productsFilteredCopyCopy = state.productsFilteredCopy;
  },

  SortByPopularity(state, arr) {
    state.productsFilteredCopyCopy = arr;
  },

  ThirdCategoryFilter(state, string) {
    var JSON_Obj = {
      "action": "search",
      "agent": "client",
      "data": {
        "query": "",
        "filters": {
          "thirdLevelCategory": string
        }
      }
    };

    if (state !== null && state !== void 0 && state.ws) {
      state.ws.send(JSON.stringify(JSON_Obj));
    } else {
      setTimeout(() => {
        state.ws.send(JSON.stringify(JSON_Obj));
      }, 1000);
    }
  },

  FirstCategoryFilter(state, string) {
    var JSON_Obj = {
      "action": "search",
      "agent": "client",
      "data": {
        "query": "",
        "filters": {
          "firstLevelCategory": string
        }
      }
    };
    console.log(JSON_Obj);

    if (state !== null && state !== void 0 && state.ws) {
      state.ws.send(JSON.stringify(JSON_Obj));
    } else {
      setTimeout(() => {
        state.ws.send(JSON.stringify(JSON_Obj));
      }, 1000);
    }
  },

  SecondCategoryFilter(state, string) {
    var JSON_Obj = {
      "action": "search",
      "agent": "client",
      "data": {
        "query": "",
        "filters": {
          "secondLevelCategory": string
        }
      }
    };

    if (state !== null && state !== void 0 && state.ws) {
      state.ws.send(JSON.stringify(JSON_Obj));
    } else {
      setTimeout(() => {
        state.ws.send(JSON.stringify(JSON_Obj));
      }, 1000);
    }
  },

  SearchByQuery(state, query) {
    var obj = {
      "action": "search",
      "agent": "client",
      "data": {
        "query": query
      }
    };
    state.ws.send(JSON.stringify(obj));
  }

};
const actions = {
  FrontInit({
    commit,
    dispatch
  }) {
    console.log('FrontInit');
    dispatch('connect'); // axios.get(`https://textforeva.ru/storage`)
    // .then(response => {
    //   commit('SetProducts', response.data)
    // })
    // .catch(function (error) {
    //   console.log(error);
    // })

    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`https://textforeva.ru/storage/getAllCategories`).then(response => {
      commit('SetCategories', response.data);
    }).catch(function (error) {
      console.log(error);
    });
  },

  async connect({
    commit,
    dispatch
  }) {
    var connection = new WebSocket(`wss://textforeva.ru/ws/`);

    connection.onmessage = async msg => {
      let data = JSON.parse(msg.data);
      console.log(data);
      commit('ChFilters', data.filterKeys);
      commit('ChProductsCopy', data.products);
    };

    connection.onopen = function () {
      console.log('START WEBSOCKET CONNECTION');
      commit('SetWs', connection);
    };

    connection.onclose = async e => {
      console.log('CLOSE WEBSOCKET CONNECTION');
      setTimeout(() => dispatch('connect'), 1);
    };

    connection.onerror = err => {
      console.log(err);
    };
  }

};
const getters = {
  BestCategories: s => s.categories
};

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    cart: []
  },
  getters: {
    cart: s => s.cart
  },
  mutations: {
    AmountCh(state, ValueId) {
      if (state.cart[ValueId[1]].offerData.count + ValueId[0] > 0) {
        state.cart[ValueId[1]].offerData.count += ValueId[0];
        localStorage.setItem('cart', JSON.stringify(state.cart));
      }
    },

    cartChange(state, product) {
      var Updated = false;
      if (!product.offerData.count) product.offerData.count = 1;

      if (localStorage.getItem('cart')) {
        var currentCart = state.cart;
        currentCart.forEach(function (item) {
          if (item.offerData.name == product.offerData.name) {
            item.offerData.count += 1;
            Updated = true;
          }
        });
        if (!Updated) currentCart.push(product);
        localStorage.setItem('cart', JSON.stringify(currentCart));
      } else {
        localStorage.setItem('cart', JSON.stringify([product]));
      }

      state.cart = JSON.parse(localStorage.getItem('cart'));
    },

    getCart(state) {
      state.cart = JSON.parse(localStorage.getItem('cart'));
    },

    DeleteItemFromCart(state, el) {
      var filteredData = state.cart.filter(cartItem => cartItem.offerData.name != el.offerData.name);
      console.log(filteredData);
      state.cart = filteredData;
      localStorage.setItem('cart', JSON.stringify(filteredData));
    }

  }
});

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _locales_ru_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
var _locales_ru_json__WEBPACK_IMPORTED_MODULE_0___namespace = /*#__PURE__*/__webpack_require__.t(17, 1);
/* harmony import */ var _locales_en_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18);
var _locales_en_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(18, 1);
/* harmony import */ var _locales_kz_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(19);
var _locales_kz_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(19, 1);



/* harmony default export */ __webpack_exports__["default"] = ({
  namespaced: true,
  state: {
    lang: '',
    locales: {
      'ru-RU': _locales_ru_json__WEBPACK_IMPORTED_MODULE_0__,
      'en-US': _locales_en_json__WEBPACK_IMPORTED_MODULE_1__,
      'kz-KZ': _locales_kz_json__WEBPACK_IMPORTED_MODULE_2__
    }
  },
  getters: {
    lang: s => s.lang
  },
  mutations: {
    getLang(state) {
      state.lang = localStorage.getItem('lang') || 'en-US';
      console.log(state.lang);
    },

    changeLang(state, lang) {
      state.lang = lang;
      localStorage.setItem('lang', lang);
    }

  }
});

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "ufo"
var external_ufo_ = __webpack_require__(1);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(15);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./functions/.nuxt/middleware.js
const middleware = {};
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./functions/.nuxt/utils.js

 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function createGetCounter(counterObject, defaultKey = '') {
  return function getCounter(id = defaultKey) {
    if (counterObject[id] === undefined) {
      counterObject[id] = 0;
    }

    return counterObject[id]++;
  };
}
function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function purifyData(data) {
  if (true) {
    return data;
  }

  return Object.entries(data).filter(([key, value]) => {
    const valid = !(value instanceof Function) && !(value instanceof Promise);

    if (!valid) {
      console.warn(`${key} is not able to be stringified. This will break in a production environment.`);
    }

    return valid;
  }).reduce((obj, [key, value]) => {
    obj[key] = value;
    return obj;
  }, {});
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
    Component = external_vue_default.a.extend(Component); // fix issue #6

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
        if (error && error.name === 'ChunkLoadError' && typeof window !== 'undefined' && window.sessionStorage) {
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
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      store: app.store,
      payload: context.payload,
      error: context.error,
      base: app.router.options.base,
      env: {}
    }; // Only set once

    if (context.req) {
      app.context.req = context.req;
    }

    if (context.res) {
      app.context.res = context.res;
    }

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

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
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
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
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
const stripTrailingSlash = external_ufo_["withoutTrailingSlash"];
const isSamePath = external_ufo_["isSamePath"];
function setScrollRestoration(newVal) {
  try {
    window.history.scrollRestoration = newVal;
  } catch (e) {}
}
// CONCATENATED MODULE: ./functions/.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this._fetchKey || this.$ssrContext.fetchCounters['']++; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  if (this.$ssrContext.nuxt.fetch[this._fetchKey] !== undefined) {
    console.warn(`Duplicate fetch key detected (${this._fetchKey}). This may lead to unexpected results.`);
  }

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


    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(4);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(16);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(8);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(5);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(9);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./functions/.nuxt/router.scrollBehavior.js


if (false) {}

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
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./functions/.nuxt/router.js






const _ded94b7c = () => interopDefault(__webpack_require__.e(/* import() | pages/about */ 1).then(__webpack_require__.bind(null, 51)));

const _6aa9437b = () => interopDefault(__webpack_require__.e(/* import() | pages/cart */ 2).then(__webpack_require__.bind(null, 52)));

const _73540dbe = () => interopDefault(__webpack_require__.e(/* import() | pages/checkout */ 3).then(__webpack_require__.bind(null, 53)));

const _88bab3d6 = () => interopDefault(__webpack_require__.e(/* import() | pages/contact */ 4).then(__webpack_require__.bind(null, 54)));

const _8a864eea = () => interopDefault(__webpack_require__.e(/* import() | pages/faq */ 5).then(__webpack_require__.bind(null, 55)));

const _604a4f64 = () => interopDefault(__webpack_require__.e(/* import() | pages/product */ 7).then(__webpack_require__.bind(null, 56)));

const _55b0c851 = () => interopDefault(__webpack_require__.e(/* import() | pages/shop */ 8).then(__webpack_require__.bind(null, 57)));

const _5a48f33c = () => interopDefault(__webpack_require__.e(/* import() | pages/terms */ 9).then(__webpack_require__.bind(null, 58)));

const _9f6995f2 = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 6).then(__webpack_require__.bind(null, 59)));

const emptyFn = () => {};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/about",
    component: _ded94b7c,
    name: "about"
  }, {
    path: "/cart",
    component: _6aa9437b,
    name: "cart"
  }, {
    path: "/checkout",
    component: _73540dbe,
    name: "checkout"
  }, {
    path: "/contact",
    component: _88bab3d6,
    name: "contact"
  }, {
    path: "/faq",
    component: _8a864eea,
    name: "faq"
  }, {
    path: "/product",
    component: _604a4f64,
    name: "product"
  }, {
    path: "/shop",
    component: _55b0c851,
    name: "shop"
  }, {
    path: "/terms",
    component: _5a48f33c,
    name: "terms"
  }, {
    path: "/",
    component: _9f6995f2,
    name: "index"
  }],
  fallback: false
};
function createRouter(ssrContext, config) {
  const base = config._app && config._app.basePath || routerOptions.base;
  const router = new external_vue_router_default.a({ ...routerOptions,
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
// CONCATENATED MODULE: ./functions/.nuxt/components/nuxt-child.js
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

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


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
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/error.vue?vue&type=template&id=a96d3dfa&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"MAINERROR"},[_vm._ssrNode("<main id=\"content\" role=\"main\"><div class=\"container mt-6\"><div class=\"mb-5 text-center pb-3 border-bottom border-color-1\"><h1 class=\"font-size-sl-72 font-weight-light mb-3\">"+_vm._ssrEscape(_vm._s(_vm.localizeFilter('ErrorTitle')))+"</h1> <p class=\"text-gray-90 font-size-20 mb-0 font-weight-light\">"+_vm._ssrEscape(_vm._s(_vm.localizeFilter('ErrorText')))+"</p></div></div></main>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/layouts/error.vue?vue&type=template&id=a96d3dfa&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/error.vue?vue&type=script&lang=js&
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
/* harmony default export */ var errorvue_type_script_lang_js_ = ({
  data() {
    return {
      Component: 'ErrorPage'
    };
  },

  mounted() {},

  methods: {
    localizeFilter(key, key2, key3) {
      var _this$$store$state$la, _this$$store$state$la2, _this$$store$state$la3, _this$$store$state$la4, _this$$store$state$la5, _this$$store$state$la6, _this$$store$state$la7, _this$$store$state$la8, _this$$store$state$la9, _this$$store$state$la10, _this$$store$state$la11, _this$$store$state$la12;

      if (key3) return ((_this$$store$state$la = this.$store.state.lang.locales) === null || _this$$store$state$la === void 0 ? void 0 : (_this$$store$state$la2 = _this$$store$state$la[this.$store.state.lang.lang]) === null || _this$$store$state$la2 === void 0 ? void 0 : (_this$$store$state$la3 = _this$$store$state$la2[this.Component]) === null || _this$$store$state$la3 === void 0 ? void 0 : (_this$$store$state$la4 = _this$$store$state$la3[key]) === null || _this$$store$state$la4 === void 0 ? void 0 : (_this$$store$state$la5 = _this$$store$state$la4[key2]) === null || _this$$store$state$la5 === void 0 ? void 0 : _this$$store$state$la5[key3]) || ``;else if (key2) return ((_this$$store$state$la6 = this.$store.state.lang.locales) === null || _this$$store$state$la6 === void 0 ? void 0 : (_this$$store$state$la7 = _this$$store$state$la6[this.$store.state.lang.lang]) === null || _this$$store$state$la7 === void 0 ? void 0 : (_this$$store$state$la8 = _this$$store$state$la7[this.Component]) === null || _this$$store$state$la8 === void 0 ? void 0 : (_this$$store$state$la9 = _this$$store$state$la8[key]) === null || _this$$store$state$la9 === void 0 ? void 0 : _this$$store$state$la9[key2]) || ``;else return ((_this$$store$state$la10 = this.$store.state.lang.locales) === null || _this$$store$state$la10 === void 0 ? void 0 : (_this$$store$state$la11 = _this$$store$state$la10[this.$store.state.lang.lang]) === null || _this$$store$state$la11 === void 0 ? void 0 : (_this$$store$state$la12 = _this$$store$state$la11[this.Component]) === null || _this$$store$state$la12 === void 0 ? void 0 : _this$$store$state$la12[key]) || ``;
    }

  }
});
// CONCATENATED MODULE: ./src/layouts/error.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_errorvue_type_script_lang_js_ = (errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/layouts/error.vue





/* normalize component */

var error_component = Object(componentNormalizer["a" /* default */])(
  layouts_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "cbb98700"
  
)

/* harmony default export */ var layouts_error = (error_component.exports);
// CONCATENATED MODULE: ./functions/.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: layouts_error
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
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
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
    return h(layouts_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./functions/.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
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
// CONCATENATED MODULE: ./functions/.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./functions/.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function injectStyles (context) {
  
  var style0 = __webpack_require__(23)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  injectStyles,
  null,
  "1ba8940f"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./src/static/css/font-electro.css
var font_electro = __webpack_require__(24);

// EXTERNAL MODULE: ./src/static/vendor/font-awesome/css/fontawesome-all.min.css
var fontawesome_all_min = __webpack_require__(25);

// EXTERNAL MODULE: ./src/static/vendor/animate.css/animate.min.css
var animate_min = __webpack_require__(26);

// EXTERNAL MODULE: ./src/static/vendor/hs-megamenu/src/hs.megamenu.css
var hs_megamenu = __webpack_require__(27);

// EXTERNAL MODULE: ./src/static/vendor/malihu-custom-scrollbar-plugin/jquery.mCustomScrollbar.css
var jquery_mCustomScrollbar = __webpack_require__(28);

// EXTERNAL MODULE: ./src/static/vendor/fancybox/jquery.fancybox.css
var jquery_fancybox = __webpack_require__(29);

// EXTERNAL MODULE: ./src/static/vendor/slick-carousel/slick/slick.css
var slick = __webpack_require__(30);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/default.vue?vue&type=template&id=41dab27e&
var defaultvue_type_template_id_41dab27e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('MyHeader'),_vm._ssrNode(" "),_c('Nuxt'),_vm._ssrNode(" "),_c('NuxtLink',{staticClass:"js-go-to u-go-to",attrs:{"to":"#","data-position":"{\"bottom\": 15, \"right\": 15 }","data-type":"fixed","data-offset-top":"400","data-compensation":"#header","data-show-effect":"slideInUp","data-hide-effect":"slideOutDown"}},[_c('span',{staticClass:"fas fa-arrow-up u-go-to__inner"})]),_vm._ssrNode(" "),_c('MyFooter')],2)}
var defaultvue_type_template_id_41dab27e_staticRenderFns = []


// CONCATENATED MODULE: ./src/layouts/default.vue?vue&type=template&id=41dab27e&

// EXTERNAL MODULE: ./src/components/Header.vue + 4 modules
var Header = __webpack_require__(6);

// EXTERNAL MODULE: ./src/components/Footer.vue + 4 modules
var Footer = __webpack_require__(7);

// EXTERNAL MODULE: ./src/static/css/theme.css
var theme = __webpack_require__(33);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/default.vue?vue&type=script&lang=js&
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
//
//




/* harmony default export */ var defaultvue_type_script_lang_js_ = ({
  components: {
    MyHeader: Header["default"],
    MyFooter: Footer["default"]
  },

  beforeMount() {
    this.$store.commit('cart/getCart');
    this.$store.commit('lang/getLang');
  },

  mounted() {
    $.HSCore.components.HSGoTo.init('.js-go-to');
    this.FrontInit();
  },

  methods: Object(external_vuex_["mapActions"])(["FrontInit"])
});
// CONCATENATED MODULE: ./src/layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./src/layouts/default.vue



function default_injectStyles (context) {
  
  var style0 = __webpack_require__(34)
if (style0.__inject__) style0.__inject__(context)
var style1 = __webpack_require__(35)
if (style1.__inject__) style1.__inject__(context)

}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_41dab27e_render,
  defaultvue_type_template_id_41dab27e_staticRenderFns,
  false,
  default_injectStyles,
  null,
  "08640439"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./functions/.nuxt/App.js













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
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    this.$root.$options.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
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
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
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
              external_vue_default.a.set(page.$data, key, newData[key]);
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

        let errorLayout = (layouts_error.options || layouts_error).layout;

        if (typeof errorLayout === 'function') {
          errorLayout = errorLayout(this.context);
        }

        this.setLayout(errorLayout);
      }
    },

    setLayout(layout) {
      if (layout && typeof layout !== 'string') {
        throw new Error('[nuxt] Avoid using non-string value as layout property.');
      }

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
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// CONCATENATED MODULE: ./functions/.nuxt/store.js


external_vue_default.a.use(external_vuex_default.a);
const VUEX_PROPERTIES = ['state', 'getters', 'actions', 'mutations'];
let store_store = {};

(function updateModules() {
  store_store = normalizeRoot(__webpack_require__(36), 'store/index.js'); // If store is an exported method = classic mode (deprecated)
  // Enforce store modules

  store_store.modules = store_store.modules || {};
  resolveStoreModules(__webpack_require__(37), 'cart.js');
  resolveStoreModules(__webpack_require__(38), 'lang.js'); // If the environment supports hot reloading...
})(); // createStore


const createStore = store_store instanceof Function ? store_store : () => {
  return new external_vuex_default.a.Store(Object.assign({
    strict: "production" !== 'production'
  }, store_store));
};

function normalizeRoot(moduleData, filePath) {
  moduleData = moduleData.default || moduleData;

  if (moduleData.commit) {
    throw new Error(`[nuxt] ${filePath} should export a method that returns a Vuex instance.`);
  }

  if (typeof moduleData !== 'function') {
    // Avoid TypeError: setting a property that has only a getter when overwriting top level keys
    moduleData = Object.assign({}, moduleData);
  }

  return normalizeModule(moduleData, filePath);
}

function normalizeModule(moduleData, filePath) {
  if (moduleData.state && typeof moduleData.state !== 'function') {
    console.warn(`'state' should be a method that returns an object in ${filePath}`);
    const state = Object.assign({}, moduleData.state); // Avoid TypeError: setting a property that has only a getter when overwriting top level keys

    moduleData = Object.assign({}, moduleData, {
      state: () => state
    });
  }

  return moduleData;
}

function resolveStoreModules(moduleData, filename) {
  moduleData = moduleData.default || moduleData; // Remove store src + extension (./foo/index.js -> foo/index)

  const namespace = filename.replace(/\.(js|mjs)$/, '');
  const namespaces = namespace.split('/');
  let moduleName = namespaces[namespaces.length - 1];
  const filePath = `store/${filename}`;
  moduleData = moduleName === 'state' ? normalizeState(moduleData, filePath) : normalizeModule(moduleData, filePath); // If src is a known Vuex property

  if (VUEX_PROPERTIES.includes(moduleName)) {
    const property = moduleName;
    const propertyStoreModule = getStoreModule(store_store, namespaces, {
      isProperty: true
    }); // Replace state since it's a function

    mergeProperty(propertyStoreModule, moduleData, property);
    return;
  } // If file is foo/index.js, it should be saved as foo


  const isIndexModule = moduleName === 'index';

  if (isIndexModule) {
    namespaces.pop();
    moduleName = namespaces[namespaces.length - 1];
  }

  const storeModule = getStoreModule(store_store, namespaces);

  for (const property of VUEX_PROPERTIES) {
    mergeProperty(storeModule, moduleData[property], property);
  }

  if (moduleData.namespaced === false) {
    delete storeModule.namespaced;
  }
}

function normalizeState(moduleData, filePath) {
  if (typeof moduleData !== 'function') {
    console.warn(`${filePath} should export a method that returns an object`);
    const state = Object.assign({}, moduleData);
    return () => state;
  }

  return normalizeModule(moduleData, filePath);
}

function getStoreModule(storeModule, namespaces, {
  isProperty = false
} = {}) {
  // If ./mutations.js
  if (!namespaces.length || isProperty && namespaces.length === 1) {
    return storeModule;
  }

  const namespace = namespaces.shift();
  storeModule.modules[namespace] = storeModule.modules[namespace] || {};
  storeModule.modules[namespace].namespaced = true;
  storeModule.modules[namespace].modules = storeModule.modules[namespace].modules || {};
  return getStoreModule(storeModule.modules[namespace], namespaces, {
    isProperty
  });
}

function mergeProperty(storeModule, moduleData, property) {
  if (!moduleData) {
    return;
  }

  if (property === 'state') {
    storeModule.state = moduleData || storeModule.state;
  } else {
    storeModule[property] = Object.assign({}, storeModule[property], moduleData);
  }
}
// CONCATENATED MODULE: ./functions/.nuxt/components/utils.js
// nuxt/nuxt.js#8607
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
// CONCATENATED MODULE: ./functions/.nuxt/components/plugin.js


const components = {
  Footer: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 7)).then(c => wrapFunctional(c.default || c)),
  Header: () => Promise.resolve(/* import() */).then(__webpack_require__.bind(null, 6)).then(c => wrapFunctional(c.default || c))
};

for (const name in components) {
  external_vue_default.a.component(name, components[name]);
  external_vue_default.a.component('Lazy' + name, components[name]);
}
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(3);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(20);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./functions/.nuxt/axios.js

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

  setupProgress(axios);
  return axios;
};

const setupProgress = axios => {
  if (true) {
    return;
  } // A noop loading inteterface for when $nuxt is not yet ready


  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };

  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };

  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }

    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }

    currentRequests--;

    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }

    currentRequests--;

    if (external_axios_default.a.isCancel(error)) {
      if (currentRequests <= 0) {
        currentRequests = 0;
        $loading().finish();
      }

      return;
    }

    $loading().fail();
    $loading().finish();
  });

  const onProgress = e => {
    if (!currentRequests || !e.total) {
      return;
    }

    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };

  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};

/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // runtimeConfig
  const runtimeConfig = ctx.$config && ctx.$config.axios || {}; // baseURL

  const baseURL =  false ? undefined : runtimeConfig.baseURL || runtimeConfig.baseUrl || process.env._AXIOS_BASE_URL_ || 'http://localhost:3000/'; // Create fresh objects for all default header scopes
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

  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = { ...ctx.req.headers
    };

    for (const h of ["accept", "cf-connecting-ip", "cf-ray", "content-length", "content-md5", "content-type", "host", "x-forwarded-host", "x-forwarded-port", "x-forwarded-proto"]) {
      delete reqHeaders[h];
    }

    axiosOptions.headers.common = { ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }

  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }

  const axios = createAxiosInstance(axiosOptions); // Inject axios to the context as $axios

  ctx.$axios = axios;
  inject('axios', axios);
});
// CONCATENATED MODULE: ./functions/.nuxt/index.js












/* Plugins */

 // Source: .\\components\\plugin.js (mode: 'all')

 // Source: .\\axios.js (mode: 'all')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
Object.defineProperty(external_vue_default.a.prototype, '$nuxt', {
  get() {
    const globalNuxt = this.$root.$options.$nuxt;

    if (false) {}

    return globalNuxt;
  },

  configurable: true
});
external_vue_default.a.use(external_vue_meta_default.a, {
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
const originalRegisterModule = external_vuex_default.a.Store.prototype.registerModule;

function registerModule(path, rawModule, options = {}) {
  const preserveState =  false && (false);
  return originalRegisterModule.call(this, path, rawModule, {
    preserveState,
    ...options
  });
}

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext, config);
  const store = createStore(ssrContext); // Add this.$router into store actions/mutations

  store.$router = router; // Fix SSR caveat https://github.com/nuxt/nuxt.js/issues/3757#issuecomment-414689141

  store.registerModule = registerModule; // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "intshop",
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": ""
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Ffavicon.ico"
      }],
      "script": [{
        "type": "text\u002Fjavascript",
        "src": "vendor\u002Fjquery\u002Fdist\u002Fjquery.min.js",
        "body": true
      }, {
        "type": "text\u002Fjavascript",
        "src": "vendor\u002Fjquery-migrate\u002Fdist\u002Fjquery-migrate.min.js",
        "body": true
      }, {
        "type": "text\u002Fjavascript",
        "src": "vendor\u002Fpopper.js\u002Fdist\u002Fumd\u002Fpopper.min.js",
        "body": true
      }, {
        "type": "text\u002Fjavascript",
        "src": "vendor\u002Fbootstrap\u002Fbootstrap.min.js",
        "body": true
      }, {
        "type": "text\u002Fjavascript",
        "src": "vendor\u002Fappear.js",
        "body": true
      }, {
        "type": "text\u002Fjavascript",
        "src": "vendor\u002Fjquery.countdown.min.js",
        "body": true
      }, {
        "type": "text\u002Fjavascript",
        "src": "vendor\u002Fhs-megamenu\u002Fsrc\u002Fhs.megamenu.js",
        "body": true
      }, {
        "type": "text\u002Fjavascript",
        "src": "vendor\u002Fsvg-injector\u002Fdist\u002Fsvg-injector.min.js",
        "body": true
      }, {
        "type": "text\u002Fjavascript",
        "src": "vendor\u002Fmalihu-custom-scrollbar-plugin\u002Fjquery.mCustomScrollbar.concat.min.js",
        "body": true
      }, {
        "type": "text\u002Fjavascript",
        "src": "vendor\u002Fjquery-validation\u002Fdist\u002Fjquery.validate.min.js",
        "body": true
      }, {
        "type": "text\u002Fjavascript",
        "src": "vendor\u002Fslick-carousel\u002Fslick\u002Fslick.js",
        "body": true
      }, {
        "type": "text\u002Fjavascript",
        "src": "js\u002Fhs.core.js",
        "body": true
      }, {
        "type": "text\u002Fjavascript",
        "src": "js\u002Fcomponents\u002Fhs.countdown.js",
        "body": true
      }, {
        "type": "text\u002Fjavascript",
        "src": "js\u002Fcomponents\u002Fhs.header.js",
        "body": true
      }, {
        "type": "text\u002Fjavascript",
        "src": "js\u002Fcomponents\u002Fhs.hamburgers.js",
        "body": true
      }, {
        "type": "text\u002Fjavascript",
        "src": "js\u002Fcomponents\u002Fhs.unfold.js",
        "body": true
      }, {
        "type": "text\u002Fjavascript",
        "src": "js\u002Fcomponents\u002Fhs.focus-state.js",
        "body": true
      }, {
        "type": "text\u002Fjavascript",
        "src": "js\u002Fcomponents\u002Fhs.malihu-scrollbar.js",
        "body": true
      }, {
        "type": "text\u002Fjavascript",
        "src": "js\u002Fcomponents\u002Fhs.validation.js",
        "body": true
      }, {
        "type": "text\u002Fjavascript",
        "src": "js\u002Fcomponents\u002Fhs.fancybox.js",
        "body": true
      }, {
        "type": "text\u002Fjavascript",
        "src": "js\u002Fcomponents\u002Fhs.onscroll-animation.js",
        "body": true
      }, {
        "type": "text\u002Fjavascript",
        "src": "js\u002Fcomponents\u002Fhs.slick-carousel.js",
        "body": true
      }, {
        "type": "text\u002Fjavascript",
        "src": "js\u002Fcomponents\u002Fhs.range-slider.js",
        "body": true
      }, {
        "type": "text\u002Fjavascript",
        "src": "js\u002Fcomponents\u002Fhs.quantity-counter.js",
        "body": true
      }, {
        "type": "text\u002Fjavascript",
        "src": "js\u002Fcomponents\u002Fhs.scroll-nav.js",
        "body": true
      }, {
        "type": "text\u002Fjavascript",
        "src": "js\u002Fcomponents\u002Fhs.show-animation.js",
        "body": true
      }, {
        "type": "text\u002Fjavascript",
        "src": "js\u002Fcomponents\u002Fhs.svg-injector.js",
        "body": true
      }, {
        "type": "text\u002Fjavascript",
        "src": "js\u002Fcomponents\u002Fhs.go-to.js",
        "body": true
      }, {
        "type": "text\u002Fjavascript",
        "src": "js\u002Fcomponents\u002Fhs.selectpicker.js",
        "body": true
      }, {
        "type": "text\u002Fjavascript",
        "src": "vendor\u002Ftyped.js\u002Flib\u002Ftyped.min.js",
        "body": true
      }, {
        "type": "text\u002Fjavascript",
        "src": "vendor\u002Fion-rangeslider\u002Fjs\u002Fion.rangeSlider.min.js",
        "body": true
      }],
      "style": []
    },
    store,
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
  }; // Make app available into store via this.app

  store.app = app;
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    store,
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
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
    } // Add into store


    store[key] = app[key]; // Check if plugin not already installed

    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config);

  if (false) {} // Add enablePreview(previewData = {}) in context for plugins


  if (false) {} // Plugin execution


  if (typeof /* Cannot get final name for export "default" in "./functions/.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./functions/.nuxt/components/plugin.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  } // Lock enablePreview in context


  if (false) {} // Wait for async component to be resolved first


  await new Promise((resolve, reject) => {
    const {
      route
    } = router.resolve(app.context.route.fullPath); // Ignore 404s rather than blindly replacing URL

    if (!route.matched.length && false) {
      return resolve();
    }

    router.replace(route, resolve, err => {
      // https://github.com/vuejs/vue-router/blob/v3.4.3/src/util/errors.js
      if (!err._isRouter) return reject(err);
      if (err.type !== 2
      /* NavigationFailureType.redirected */
      ) return resolve(); // navigated to a different route in router guard

      const unregister = router.afterEach(async (to, from) => {
        if ( true && ssrContext && ssrContext.url) {
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
    store,
    app,
    router
  };
}


// CONCATENATED MODULE: ./functions/.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
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
// CONCATENATED MODULE: ./functions/.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
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
  const $config = ssrContext.runtimeConfig || {};
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


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: {},
    error: null,
    state: null,
    serverRendered: true,
    routePath: ''
  };
  ssrContext.fetchCounters = {}; // Remove query from url is static target
  // Public runtime config

  ssrContext.nuxt.config = ssrContext.runtimeConfig.public;

  if (ssrContext.nuxt.config._app) {
    __webpack_require__.p = Object(external_ufo_["joinURL"])(ssrContext.nuxt.config._app.cdnURL, ssrContext.nuxt.config._app.assetsPath);
  } // Create the app definition and the instance (created for each request)


  const {
    app,
    router,
    store
  } = await createApp(ssrContext, ssrContext.runtimeConfig.private);

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


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
      // Add the state from the vuex store
      ssrContext.nuxt.state = store.state;
    };
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (layouts_error.options || layouts_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(layouts_error, app.context) : layout;
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
  };

  const s = Date.now(); // Components are already resolved by setContext -> getRouteData (app/utils.js)

  const Components = getMatchedComponents(app.context.route);
  /*
  ** Dispatch store nuxtServerInit
  */

  if (store._actions && store._actions.nuxtServerInit) {
    try {
      await store.dispatch('nuxtServerInit', app.context);
    } catch (err) {
      console.debug('Error occurred when calling nuxtServerInit: ', err.message);
      throw err;
    }
  } // ...If there is a redirect or an error, stop the process


  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call global middleware (nuxt.config.js)
  */


  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
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


  let layout = Components.length ? Components[0].options.layout : layouts_error.layout;

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

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
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
  }));
  if (process.env.DEBUG && asyncDatas.length) console.debug('Data fetching ' + ssrContext.url + ': ' + (Date.now() - s) + 'ms'); // datas are the first row of each

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

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = require("crypto-js");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map