/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/accordion.js":
/*!*****************************!*\
  !*** ./src/js/accordion.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function accordion() {
  var accordions = document.querySelectorAll(".accordion");
  if (accordions.length === 0) return;
  accordions.forEach(function (accordion) {
    var handleEvent = function handleEvent(e) {
      var activePanel = e.target.closest(".accordion__panel");
      if (!activePanel) return;
      openAccordion(activePanel);
    };
    accordion.addEventListener("mouseover", handleEvent);
    accordion.addEventListener("click", handleEvent);
  });
  function openAccordion(panelToActivate) {
    var accordion = panelToActivate.parentElement;
    var buttons = accordion.querySelectorAll(".accordion__trigger");
    var contents = accordion.querySelectorAll(".accordion__content");
    buttons.forEach(function (button) {
      button.setAttribute("aria-expanded", "false");
    });
    contents.forEach(function (content) {
      content.setAttribute("aria-hidden", "true");
    });
    panelToActivate.querySelector(".accordion__trigger").setAttribute("aria-expanded", "true");
    panelToActivate.querySelector(".accordion__content").setAttribute("aria-hidden", "false");
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordion);

/***/ }),

/***/ "./src/js/animation.js":
/*!*****************************!*\
  !*** ./src/js/animation.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function scrollTrigger(selector) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var elements = [];
  selector.forEach(function (selector) {
    var els = document.querySelectorAll(selector);
    elements.push.apply(elements, _toConsumableArray(Array.from(els)));
  });
  elements.forEach(function (el) {
    addObserver(el, options);
  });
}
function addObserver(el, options) {
  if (!("IntersectionObserver" in window)) {
    entry.target.classList.add("animate");
    return;
  }
  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      entry.target.classList.toggle("animate", entry.isIntersecting);
    });
  }, options);
  observer.observe(el);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollTrigger);

/***/ }),

/***/ "./src/js/navigationToggle.js":
/*!************************************!*\
  !*** ./src/js/navigationToggle.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function navigationToggle() {
  var navToggle = document.querySelector('.mobile-nav-toggle');
  var nav = document.getElementById('primary-navigation');

  // Clear existing click and keydown listeners before adding new ones
  function clearPreviousListeners() {
    document.removeEventListener('click', outsideClickListener);
    document.removeEventListener('keydown', escapeKeyListener);
  }
  var toggleNav = function toggleNav() {
    var isVisible = nav.dataset.visible === 'true';
    nav.dataset.visible = !isVisible;
    navToggle.setAttribute('aria-expanded', !isVisible);
    if (isVisible) {
      clearPreviousListeners();
    } else {
      document.addEventListener('click', outsideClickListener);
      document.addEventListener('keydown', escapeKeyListener);
    }
  };
  navToggle.addEventListener('click', toggleNav);
  var outsideClickListener = function outsideClickListener(event) {
    if (!nav.contains(event.target) && !navToggle.contains(event.target)) {
      toggleNav();
    }
  };
  var escapeKeyListener = function escapeKeyListener(event) {
    if (event.key === 'Escape') {
      toggleNav();
    }
  };
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (navigationToggle);

/***/ }),

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/main.scss */ "./src/style/main.scss");
/* harmony import */ var _js_navigationToggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/navigationToggle */ "./src/js/navigationToggle.js");
/* harmony import */ var _js_animation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/animation */ "./src/js/animation.js");
/* harmony import */ var _js_accordion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/accordion */ "./src/js/accordion.js");




function isDOMReady(fn) {
  if (typeof fn !== 'function') return;
  if (document.readyState === 'complete') {
    return fn();
  }
  document.addEventListener('DOMContentLoaded', fn, false);
}
var animationClasses = ['[class*="animations"]', ".clipIn"];
isDOMReady(function () {
  (0,_js_navigationToggle__WEBPACK_IMPORTED_MODULE_1__["default"])();
  (0,_js_animation__WEBPACK_IMPORTED_MODULE_2__["default"])(animationClasses, {
    rootMargin: "0px"
  });
  (0,_js_accordion__WEBPACK_IMPORTED_MODULE_3__["default"])();
});
/******/ })()
;
//# sourceMappingURL=main.a2a77dad62ca4b147cbe.js.map