/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/announcementBar.js":
/*!******************************************!*\
  !*** ./src/functions/announcementBar.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderAnnouncementBar": () => (/* binding */ renderAnnouncementBar)
/* harmony export */ });
/* harmony import */ var _createElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElements */ "./src/functions/createElements.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/index.js");


/* Creates an announcement bar */
function renderAnnouncementBar() {
  const content = "CLICK TO WATCH THE BAKER VIDEO WITH TYSON AND T-FUNK";
  const video = "https://www.youtube.com/watch?v=dGCopkpYuOg&t=12s";

  const header = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("header", "header", "", "");
  const header_content = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("a", "header_video", "", content);

  header_content.href = video;
  header_content.target = "_blank";
  header.appendChild(header_content);
  /* Append to the DOM */
  _index__WEBPACK_IMPORTED_MODULE_1__.maindiv.appendChild(header);
}




/***/ }),

/***/ "./src/functions/createElements.js":
/*!*****************************************!*\
  !*** ./src/functions/createElements.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createHTMLelement": () => (/* binding */ createHTMLelement)
/* harmony export */ });
function createHTMLelement(tag, id, classes, content) {
  /* creates an element with the specified tag*/
  const element = document.createElement(`${tag}`);
  /* if an id was passed, attribute it to the element */
  if (id) element.id = id;
  /* if classes were passed, attribute them to the element */
  if (classes) {
    for (const index in classes) element.classList.add(classes[index]);
  }
  /* if content was passed, attribute it to the element */
  if (content) element.innerHTML = content;
  return element;
}




/***/ }),

/***/ "./src/functions/mailingList.js":
/*!**************************************!*\
  !*** ./src/functions/mailingList.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderMailingList": () => (/* binding */ renderMailingList)
/* harmony export */ });
/* harmony import */ var _createElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElements */ "./src/functions/createElements.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/index.js");


/* Creates a mailing list section */
function renderMailingList() {
  const test = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("div", "", "", "")
  /* Append to the DOM */
  _index__WEBPACK_IMPORTED_MODULE_1__.maindiv.appendChild(test);
}




/***/ }),

/***/ "./src/functions/navbar.js":
/*!*********************************!*\
  !*** ./src/functions/navbar.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderNav": () => (/* binding */ renderNav)
/* harmony export */ });
/* harmony import */ var _createElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElements */ "./src/functions/createElements.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _img_menu_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/menu.png */ "./src/img/menu.png");
/* harmony import */ var _img_baker_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/baker.png */ "./src/img/baker.png");
/* harmony import */ var _img_user_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/user.png */ "./src/img/user.png");
/* harmony import */ var _img_search_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/search.png */ "./src/img/search.png");
/* harmony import */ var _img_bag_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/bag.png */ "./src/img/bag.png");








/* Creates a navbar with menu, logo, currency, user, search and shopping bag */
function renderNav() {
  /* navbar element */
  const navbar = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("nav", "navbar");

  /* menu */
  const menu = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("div", "menu", "", "");
  const menu_img = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("img", "", "", "");
  menu_img.src = _img_menu_png__WEBPACK_IMPORTED_MODULE_2__;
  menu.appendChild(menu_img);
  navbar.appendChild(menu);

  /* logo */
  const logo = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("a", "logo", "", "");
  const logo_img = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("img", "", "", "");
  const videoBaker = "https://bakerskateboards.com/";
  logo_img.src = _img_baker_png__WEBPACK_IMPORTED_MODULE_3__;
  logo.href = videoBaker;
  logo.target = "_blank";
  logo.appendChild(logo_img);
  navbar.appendChild(logo);

  /* options */
  const options = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("div", "options", "", "");

  /* dropdown menu */
  const dropdown_container = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("div", "", "", "");
  const dropdown = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("select", "dropdown", "", "");
  dropdown_container.appendChild(dropdown); 
  options.appendChild(dropdown_container);

  const dropdown_options = ["USD", "CAD", "EUR", "GBP"];
  dropdown_options.forEach((currency) => {
    const dropdown_option = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("option", "", "", currency);
    dropdown.appendChild(dropdown_option);
  });

  /* options items (user, search, bag) */
  const items = ["user", "search", "bag"];
  const images = [_img_user_png__WEBPACK_IMPORTED_MODULE_4__, _img_search_png__WEBPACK_IMPORTED_MODULE_5__, _img_bag_png__WEBPACK_IMPORTED_MODULE_6__];
  let i = 0;

  items.forEach((item) => {
    const list_item = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("div", item, "", "");
    const list_item_img = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("img", "", "", "");
    list_item_img.src = images[i++];
    list_item.appendChild(list_item_img);
    options.appendChild(list_item);
  });
  navbar.appendChild(options);

  /* Append to the DOM */
  _index__WEBPACK_IMPORTED_MODULE_1__.maindiv.appendChild(navbar);
}




/***/ }),

/***/ "./src/functions/spacer.js":
/*!*********************************!*\
  !*** ./src/functions/spacer.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderSpacer": () => (/* binding */ renderSpacer)
/* harmony export */ });
/* harmony import */ var _createElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElements */ "./src/functions/createElements.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/index.js");


/* Creates a little spacer */
function renderSpacer() {
  const spacer = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("div", "spacer", "", "-");
  /* Append to the DOM */
  _index__WEBPACK_IMPORTED_MODULE_1__.maindiv.appendChild(spacer);
}




/***/ }),

/***/ "./src/functions/store.js":
/*!********************************!*\
  !*** ./src/functions/store.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderStore": () => (/* binding */ renderStore)
/* harmony export */ });
/* harmony import */ var _createElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElements */ "./src/functions/createElements.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/index.js");
/* harmony import */ var _img_item1_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../img/item1.png */ "./src/img/item1.png");
/* harmony import */ var _img_item2_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/item2.png */ "./src/img/item2.png");
/* harmony import */ var _img_item3_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/item3.png */ "./src/img/item3.png");
/* harmony import */ var _img_item4_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/item4.png */ "./src/img/item4.png");
/* harmony import */ var _img_item5_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/item5.png */ "./src/img/item5.png");
/* harmony import */ var _img_item6_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/item6.png */ "./src/img/item6.png");
/* harmony import */ var _img_item7_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/item7.png */ "./src/img/item7.png");
/* harmony import */ var _img_item8_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/item8.png */ "./src/img/item8.png");
/* harmony import */ var _img_item9_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/item9.png */ "./src/img/item9.png");
/* harmony import */ var _img_item10_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/item10.png */ "./src/img/item10.png");
/* harmony import */ var _img_item11_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/item11.png */ "./src/img/item11.png");
/* harmony import */ var _img_item12_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/item12.png */ "./src/img/item12.png");















/* Creates a store */
function renderStore() {
  /* store container element */
  const store = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("div", "store", "", "");

  /* items images */
  const items = [
    _img_item1_png__WEBPACK_IMPORTED_MODULE_2__,
    _img_item2_png__WEBPACK_IMPORTED_MODULE_3__,
    _img_item3_png__WEBPACK_IMPORTED_MODULE_4__,
    _img_item4_png__WEBPACK_IMPORTED_MODULE_5__,
    _img_item5_png__WEBPACK_IMPORTED_MODULE_6__,
    _img_item6_png__WEBPACK_IMPORTED_MODULE_7__,
    _img_item7_png__WEBPACK_IMPORTED_MODULE_8__,
    _img_item8_png__WEBPACK_IMPORTED_MODULE_9__,
    _img_item9_png__WEBPACK_IMPORTED_MODULE_10__,
    _img_item10_png__WEBPACK_IMPORTED_MODULE_11__,
    _img_item11_png__WEBPACK_IMPORTED_MODULE_12__,
    _img_item12_png__WEBPACK_IMPORTED_MODULE_13__,
  ];

  /* items texts */
  const text = [
    "Kader Logo Navy B2 8.25",
    "Theotis Logo Mandarin B2 8.0",
    "Spanky Logo Forest B2 8.5",
    "Circle Jerks Album Art Deck 9.6",
    "Circle Jerks Tee White",
    "Capital B Stripe Tee Green/Yellow",
    "Kamikaze Tee Black",
    "Domination Tee Black",
    "Times New Black Snapback",
    "Jolly Man Red Socks",
    "Misty Flip Sticker",
    "Circle Jerks Sticker",
  ];

  /* items prices */
  const price = [
    "$ 71",
    "$ 71",
    "$ 73",
    "$ 75",
    "$ 35",
    "$ 40",
    "$ 35",
    "$ 35",
    "$ 40",
    "$ 12",
    "$ 2",
    "$ 2",
  ];

  const links = [
    "https://bakerskateboards.com/collections/holiday-21/products/kader-logo-navy-b2-8-25",
    "https://bakerskateboards.com/collections/holiday-21/products/theotis-logo-mandarin-b2-8-0",
    "https://bakerskateboards.com/collections/holiday-21/products/spanky-logo-forest-b2-8-5",
    "https://bakerskateboards.com/collections/holiday-21/products/circle-jerks-album-art-deck-9-6",
    "https://bakerskateboards.com/collections/holiday-21/products/circle-jerks-tee-white",
    "https://bakerskateboards.com/collections/holiday-21/products/capital-b-stripe-tee-green-yellow",
    "https://bakerskateboards.com/collections/holiday-21/products/kamikaze-tee-black",
    "https://bakerskateboards.com/collections/holiday-21/products/domination-tee-black",
    "https://bakerskateboards.com/collections/holiday-21/products/times-new-black-snapback",
    "https://bakerskateboards.com/collections/holiday-21/products/jolly-man-red-socks",
    "https://bakerskateboards.com/collections/holiday-21/products/misty-flip-sticker",
    "https://bakerskateboards.com/collections/holiday-21/products/circle-jerks-sticker",
  ];

  let i = 0;
  items.forEach((item) => {
    const placeholder = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("a", "", ["placeholder"], "");
    placeholder.href = links[i]
    /* image */
    const placeholder_img = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("img", "", ["skate_img"], "");
    placeholder_img.src = item;
    placeholder.appendChild(placeholder_img);

    /* text */
    const placeholder_txt = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("p", "", ["skate_txt"], text[i]);
    placeholder.appendChild(placeholder_txt);

    /* price */
    const placeholder_price = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)(
      "p",
      "",
      ["skate_price"],
      price[i]
    );
    placeholder.appendChild(placeholder_price);

    store.appendChild(placeholder);
    i++;
  });
  /* Append to the DOM */
  _index__WEBPACK_IMPORTED_MODULE_1__.maindiv.appendChild(store);
}




/***/ }),

/***/ "./src/functions/storeButton.js":
/*!**************************************!*\
  !*** ./src/functions/storeButton.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderStoreButton": () => (/* binding */ renderStoreButton)
/* harmony export */ });
/* harmony import */ var _createElements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElements */ "./src/functions/createElements.js");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ "./src/index.js");


/* Creates a store button */
function renderStoreButton() {
  const buttonContainer = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)("div", "btnContainer", "", "");
  const button = (0,_createElements__WEBPACK_IMPORTED_MODULE_0__.createHTMLelement)(
    "button",
    "storebutton",
    "",
    "VIEW ALL PRODUCTS"
  );
  buttonContainer.appendChild(button);
  /* Append to the DOM */
  _index__WEBPACK_IMPORTED_MODULE_1__.maindiv.appendChild(buttonContainer);
}




/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "maindiv": () => (/* binding */ maindiv)
/* harmony export */ });
/* harmony import */ var _functions_announcementBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/announcementBar */ "./src/functions/announcementBar.js");
/* harmony import */ var _functions_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/navbar */ "./src/functions/navbar.js");
/* harmony import */ var _functions_spacer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/spacer */ "./src/functions/spacer.js");
/* harmony import */ var _functions_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./functions/store */ "./src/functions/store.js");
/* harmony import */ var _functions_storeButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./functions/storeButton */ "./src/functions/storeButton.js");
/* harmony import */ var _functions_mailingList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./functions/mailingList */ "./src/functions/mailingList.js");







/* Main div, contains everything */
const maindiv = document.getElementById("content");
(0,_functions_announcementBar__WEBPACK_IMPORTED_MODULE_0__.renderAnnouncementBar)();
(0,_functions_navbar__WEBPACK_IMPORTED_MODULE_1__.renderNav)();
(0,_functions_spacer__WEBPACK_IMPORTED_MODULE_2__.renderSpacer)();
(0,_functions_store__WEBPACK_IMPORTED_MODULE_3__.renderStore)();
(0,_functions_storeButton__WEBPACK_IMPORTED_MODULE_4__.renderStoreButton)();
(0,_functions_mailingList__WEBPACK_IMPORTED_MODULE_5__.renderMailingList)();



/***/ }),

/***/ "./src/img/bag.png":
/*!*************************!*\
  !*** ./src/img/bag.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "406119a8b237202aef5f.png";

/***/ }),

/***/ "./src/img/baker.png":
/*!***************************!*\
  !*** ./src/img/baker.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "be47f2ff65be649eb118.png";

/***/ }),

/***/ "./src/img/item1.png":
/*!***************************!*\
  !*** ./src/img/item1.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1239953467eccedf745d.png";

/***/ }),

/***/ "./src/img/item10.png":
/*!****************************!*\
  !*** ./src/img/item10.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6535148fe95dd0c48c8c.png";

/***/ }),

/***/ "./src/img/item11.png":
/*!****************************!*\
  !*** ./src/img/item11.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2b90dcd9cd042e40205b.png";

/***/ }),

/***/ "./src/img/item12.png":
/*!****************************!*\
  !*** ./src/img/item12.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "49326d92129435be8c44.png";

/***/ }),

/***/ "./src/img/item2.png":
/*!***************************!*\
  !*** ./src/img/item2.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "01a6db0b0712ec666fe2.png";

/***/ }),

/***/ "./src/img/item3.png":
/*!***************************!*\
  !*** ./src/img/item3.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cc3a9fab706cea870981.png";

/***/ }),

/***/ "./src/img/item4.png":
/*!***************************!*\
  !*** ./src/img/item4.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6cdcc28eec4d0f19827e.png";

/***/ }),

/***/ "./src/img/item5.png":
/*!***************************!*\
  !*** ./src/img/item5.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "ef16f1060953a428c40f.png";

/***/ }),

/***/ "./src/img/item6.png":
/*!***************************!*\
  !*** ./src/img/item6.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "928f6ce9afba8849c8c0.png";

/***/ }),

/***/ "./src/img/item7.png":
/*!***************************!*\
  !*** ./src/img/item7.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "24c198932f9612764d4c.png";

/***/ }),

/***/ "./src/img/item8.png":
/*!***************************!*\
  !*** ./src/img/item8.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "85b0b9cd11a6a4ea4201.png";

/***/ }),

/***/ "./src/img/item9.png":
/*!***************************!*\
  !*** ./src/img/item9.png ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "48fde98f383380d36097.png";

/***/ }),

/***/ "./src/img/menu.png":
/*!**************************!*\
  !*** ./src/img/menu.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "69146b76b37178e900bb.png";

/***/ }),

/***/ "./src/img/search.png":
/*!****************************!*\
  !*** ./src/img/search.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b4ddcffd7bf071675019.png";

/***/ }),

/***/ "./src/img/user.png":
/*!**************************!*\
  !*** ./src/img/user.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "df249d90d1e60cc8eed2.png";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bmd1aW4taHMvLi9zcmMvZnVuY3Rpb25zL2Fubm91bmNlbWVudEJhci5qcyIsIndlYnBhY2s6Ly9jbHViLXBlbmd1aW4taHMvLi9zcmMvZnVuY3Rpb25zL2NyZWF0ZUVsZW1lbnRzLmpzIiwid2VicGFjazovL2NsdWItcGVuZ3Vpbi1ocy8uL3NyYy9mdW5jdGlvbnMvbWFpbGluZ0xpc3QuanMiLCJ3ZWJwYWNrOi8vY2x1Yi1wZW5ndWluLWhzLy4vc3JjL2Z1bmN0aW9ucy9uYXZiYXIuanMiLCJ3ZWJwYWNrOi8vY2x1Yi1wZW5ndWluLWhzLy4vc3JjL2Z1bmN0aW9ucy9zcGFjZXIuanMiLCJ3ZWJwYWNrOi8vY2x1Yi1wZW5ndWluLWhzLy4vc3JjL2Z1bmN0aW9ucy9zdG9yZS5qcyIsIndlYnBhY2s6Ly9jbHViLXBlbmd1aW4taHMvLi9zcmMvZnVuY3Rpb25zL3N0b3JlQnV0dG9uLmpzIiwid2VicGFjazovL2NsdWItcGVuZ3Vpbi1ocy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9jbHViLXBlbmd1aW4taHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vY2x1Yi1wZW5ndWluLWhzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jbHViLXBlbmd1aW4taHMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9jbHViLXBlbmd1aW4taHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9jbHViLXBlbmd1aW4taHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9jbHViLXBlbmd1aW4taHMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vY2x1Yi1wZW5ndWluLWhzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vY2x1Yi1wZW5ndWluLWhzL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9jbHViLXBlbmd1aW4taHMvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUhUTUxlbGVtZW50IH0gZnJvbSBcIi4vY3JlYXRlRWxlbWVudHNcIjtcbmltcG9ydCB7IG1haW5kaXYgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbi8qIENyZWF0ZXMgYW4gYW5ub3VuY2VtZW50IGJhciAqL1xuZnVuY3Rpb24gcmVuZGVyQW5ub3VuY2VtZW50QmFyKCkge1xuICBjb25zdCBjb250ZW50ID0gXCJDTElDSyBUTyBXQVRDSCBUSEUgQkFLRVIgVklERU8gV0lUSCBUWVNPTiBBTkQgVC1GVU5LXCI7XG4gIGNvbnN0IHZpZGVvID0gXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PWRHQ29wa3BZdU9nJnQ9MTJzXCI7XG5cbiAgY29uc3QgaGVhZGVyID0gY3JlYXRlSFRNTGVsZW1lbnQoXCJoZWFkZXJcIiwgXCJoZWFkZXJcIiwgXCJcIiwgXCJcIik7XG4gIGNvbnN0IGhlYWRlcl9jb250ZW50ID0gY3JlYXRlSFRNTGVsZW1lbnQoXCJhXCIsIFwiaGVhZGVyX3ZpZGVvXCIsIFwiXCIsIGNvbnRlbnQpO1xuXG4gIGhlYWRlcl9jb250ZW50LmhyZWYgPSB2aWRlbztcbiAgaGVhZGVyX2NvbnRlbnQudGFyZ2V0ID0gXCJfYmxhbmtcIjtcbiAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlcl9jb250ZW50KTtcbiAgLyogQXBwZW5kIHRvIHRoZSBET00gKi9cbiAgbWFpbmRpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xufVxuXG5leHBvcnQgeyByZW5kZXJBbm5vdW5jZW1lbnRCYXIgfTtcbiIsImZ1bmN0aW9uIGNyZWF0ZUhUTUxlbGVtZW50KHRhZywgaWQsIGNsYXNzZXMsIGNvbnRlbnQpIHtcbiAgLyogY3JlYXRlcyBhbiBlbGVtZW50IHdpdGggdGhlIHNwZWNpZmllZCB0YWcqL1xuICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgJHt0YWd9YCk7XG4gIC8qIGlmIGFuIGlkIHdhcyBwYXNzZWQsIGF0dHJpYnV0ZSBpdCB0byB0aGUgZWxlbWVudCAqL1xuICBpZiAoaWQpIGVsZW1lbnQuaWQgPSBpZDtcbiAgLyogaWYgY2xhc3NlcyB3ZXJlIHBhc3NlZCwgYXR0cmlidXRlIHRoZW0gdG8gdGhlIGVsZW1lbnQgKi9cbiAgaWYgKGNsYXNzZXMpIHtcbiAgICBmb3IgKGNvbnN0IGluZGV4IGluIGNsYXNzZXMpIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc2VzW2luZGV4XSk7XG4gIH1cbiAgLyogaWYgY29udGVudCB3YXMgcGFzc2VkLCBhdHRyaWJ1dGUgaXQgdG8gdGhlIGVsZW1lbnQgKi9cbiAgaWYgKGNvbnRlbnQpIGVsZW1lbnQuaW5uZXJIVE1MID0gY29udGVudDtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUhUTUxlbGVtZW50IH07XG4iLCJpbXBvcnQgeyBjcmVhdGVIVE1MZWxlbWVudCB9IGZyb20gXCIuL2NyZWF0ZUVsZW1lbnRzXCI7XG5pbXBvcnQgeyBtYWluZGl2IH0gZnJvbSBcIi4uL2luZGV4XCI7XG4vKiBDcmVhdGVzIGEgbWFpbGluZyBsaXN0IHNlY3Rpb24gKi9cbmZ1bmN0aW9uIHJlbmRlck1haWxpbmdMaXN0KCkge1xuICBjb25zdCB0ZXN0ID0gY3JlYXRlSFRNTGVsZW1lbnQoXCJkaXZcIiwgXCJcIiwgXCJcIiwgXCJcIilcbiAgLyogQXBwZW5kIHRvIHRoZSBET00gKi9cbiAgbWFpbmRpdi5hcHBlbmRDaGlsZCh0ZXN0KTtcbn1cblxuZXhwb3J0IHsgcmVuZGVyTWFpbGluZ0xpc3QgfTtcbiIsImltcG9ydCB7IGNyZWF0ZUhUTUxlbGVtZW50IH0gZnJvbSBcIi4vY3JlYXRlRWxlbWVudHNcIjtcbmltcG9ydCB7IG1haW5kaXYgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCBNZW51IGZyb20gXCIuLi9pbWcvbWVudS5wbmdcIjtcbmltcG9ydCBMb2dvIGZyb20gXCIuLi9pbWcvYmFrZXIucG5nXCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiLi4vaW1nL3VzZXIucG5nXCI7XG5pbXBvcnQgU2VhcmNoIGZyb20gXCIuLi9pbWcvc2VhcmNoLnBuZ1wiO1xuaW1wb3J0IEJhZyBmcm9tIFwiLi4vaW1nL2JhZy5wbmdcIjtcblxuLyogQ3JlYXRlcyBhIG5hdmJhciB3aXRoIG1lbnUsIGxvZ28sIGN1cnJlbmN5LCB1c2VyLCBzZWFyY2ggYW5kIHNob3BwaW5nIGJhZyAqL1xuZnVuY3Rpb24gcmVuZGVyTmF2KCkge1xuICAvKiBuYXZiYXIgZWxlbWVudCAqL1xuICBjb25zdCBuYXZiYXIgPSBjcmVhdGVIVE1MZWxlbWVudChcIm5hdlwiLCBcIm5hdmJhclwiKTtcblxuICAvKiBtZW51ICovXG4gIGNvbnN0IG1lbnUgPSBjcmVhdGVIVE1MZWxlbWVudChcImRpdlwiLCBcIm1lbnVcIiwgXCJcIiwgXCJcIik7XG4gIGNvbnN0IG1lbnVfaW1nID0gY3JlYXRlSFRNTGVsZW1lbnQoXCJpbWdcIiwgXCJcIiwgXCJcIiwgXCJcIik7XG4gIG1lbnVfaW1nLnNyYyA9IE1lbnU7XG4gIG1lbnUuYXBwZW5kQ2hpbGQobWVudV9pbWcpO1xuICBuYXZiYXIuYXBwZW5kQ2hpbGQobWVudSk7XG5cbiAgLyogbG9nbyAqL1xuICBjb25zdCBsb2dvID0gY3JlYXRlSFRNTGVsZW1lbnQoXCJhXCIsIFwibG9nb1wiLCBcIlwiLCBcIlwiKTtcbiAgY29uc3QgbG9nb19pbWcgPSBjcmVhdGVIVE1MZWxlbWVudChcImltZ1wiLCBcIlwiLCBcIlwiLCBcIlwiKTtcbiAgY29uc3QgdmlkZW9CYWtlciA9IFwiaHR0cHM6Ly9iYWtlcnNrYXRlYm9hcmRzLmNvbS9cIjtcbiAgbG9nb19pbWcuc3JjID0gTG9nbztcbiAgbG9nby5ocmVmID0gdmlkZW9CYWtlcjtcbiAgbG9nby50YXJnZXQgPSBcIl9ibGFua1wiO1xuICBsb2dvLmFwcGVuZENoaWxkKGxvZ29faW1nKTtcbiAgbmF2YmFyLmFwcGVuZENoaWxkKGxvZ28pO1xuXG4gIC8qIG9wdGlvbnMgKi9cbiAgY29uc3Qgb3B0aW9ucyA9IGNyZWF0ZUhUTUxlbGVtZW50KFwiZGl2XCIsIFwib3B0aW9uc1wiLCBcIlwiLCBcIlwiKTtcblxuICAvKiBkcm9wZG93biBtZW51ICovXG4gIGNvbnN0IGRyb3Bkb3duX2NvbnRhaW5lciA9IGNyZWF0ZUhUTUxlbGVtZW50KFwiZGl2XCIsIFwiXCIsIFwiXCIsIFwiXCIpO1xuICBjb25zdCBkcm9wZG93biA9IGNyZWF0ZUhUTUxlbGVtZW50KFwic2VsZWN0XCIsIFwiZHJvcGRvd25cIiwgXCJcIiwgXCJcIik7XG4gIGRyb3Bkb3duX2NvbnRhaW5lci5hcHBlbmRDaGlsZChkcm9wZG93bik7IFxuICBvcHRpb25zLmFwcGVuZENoaWxkKGRyb3Bkb3duX2NvbnRhaW5lcik7XG5cbiAgY29uc3QgZHJvcGRvd25fb3B0aW9ucyA9IFtcIlVTRFwiLCBcIkNBRFwiLCBcIkVVUlwiLCBcIkdCUFwiXTtcbiAgZHJvcGRvd25fb3B0aW9ucy5mb3JFYWNoKChjdXJyZW5jeSkgPT4ge1xuICAgIGNvbnN0IGRyb3Bkb3duX29wdGlvbiA9IGNyZWF0ZUhUTUxlbGVtZW50KFwib3B0aW9uXCIsIFwiXCIsIFwiXCIsIGN1cnJlbmN5KTtcbiAgICBkcm9wZG93bi5hcHBlbmRDaGlsZChkcm9wZG93bl9vcHRpb24pO1xuICB9KTtcblxuICAvKiBvcHRpb25zIGl0ZW1zICh1c2VyLCBzZWFyY2gsIGJhZykgKi9cbiAgY29uc3QgaXRlbXMgPSBbXCJ1c2VyXCIsIFwic2VhcmNoXCIsIFwiYmFnXCJdO1xuICBjb25zdCBpbWFnZXMgPSBbVXNlciwgU2VhcmNoLCBCYWddO1xuICBsZXQgaSA9IDA7XG5cbiAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGxpc3RfaXRlbSA9IGNyZWF0ZUhUTUxlbGVtZW50KFwiZGl2XCIsIGl0ZW0sIFwiXCIsIFwiXCIpO1xuICAgIGNvbnN0IGxpc3RfaXRlbV9pbWcgPSBjcmVhdGVIVE1MZWxlbWVudChcImltZ1wiLCBcIlwiLCBcIlwiLCBcIlwiKTtcbiAgICBsaXN0X2l0ZW1faW1nLnNyYyA9IGltYWdlc1tpKytdO1xuICAgIGxpc3RfaXRlbS5hcHBlbmRDaGlsZChsaXN0X2l0ZW1faW1nKTtcbiAgICBvcHRpb25zLmFwcGVuZENoaWxkKGxpc3RfaXRlbSk7XG4gIH0pO1xuICBuYXZiYXIuYXBwZW5kQ2hpbGQob3B0aW9ucyk7XG5cbiAgLyogQXBwZW5kIHRvIHRoZSBET00gKi9cbiAgbWFpbmRpdi5hcHBlbmRDaGlsZChuYXZiYXIpO1xufVxuXG5leHBvcnQgeyByZW5kZXJOYXYgfTtcbiIsImltcG9ydCB7IGNyZWF0ZUhUTUxlbGVtZW50IH0gZnJvbSBcIi4vY3JlYXRlRWxlbWVudHNcIjtcbmltcG9ydCB7IG1haW5kaXYgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbi8qIENyZWF0ZXMgYSBsaXR0bGUgc3BhY2VyICovXG5mdW5jdGlvbiByZW5kZXJTcGFjZXIoKSB7XG4gIGNvbnN0IHNwYWNlciA9IGNyZWF0ZUhUTUxlbGVtZW50KFwiZGl2XCIsIFwic3BhY2VyXCIsIFwiXCIsIFwiLVwiKTtcbiAgLyogQXBwZW5kIHRvIHRoZSBET00gKi9cbiAgbWFpbmRpdi5hcHBlbmRDaGlsZChzcGFjZXIpO1xufVxuXG5leHBvcnQgeyByZW5kZXJTcGFjZXIgfTtcbiIsImltcG9ydCB7IGNyZWF0ZUhUTUxlbGVtZW50IH0gZnJvbSBcIi4vY3JlYXRlRWxlbWVudHNcIjtcbmltcG9ydCB7IG1haW5kaXYgfSBmcm9tIFwiLi4vaW5kZXhcIjtcbmltcG9ydCBJdGVtMSBmcm9tIFwiLi4vaW1nL2l0ZW0xLnBuZ1wiO1xuaW1wb3J0IEl0ZW0yIGZyb20gXCIuLi9pbWcvaXRlbTIucG5nXCI7XG5pbXBvcnQgSXRlbTMgZnJvbSBcIi4uL2ltZy9pdGVtMy5wbmdcIjtcbmltcG9ydCBJdGVtNCBmcm9tIFwiLi4vaW1nL2l0ZW00LnBuZ1wiO1xuaW1wb3J0IEl0ZW01IGZyb20gXCIuLi9pbWcvaXRlbTUucG5nXCI7XG5pbXBvcnQgSXRlbTYgZnJvbSBcIi4uL2ltZy9pdGVtNi5wbmdcIjtcbmltcG9ydCBJdGVtNyBmcm9tIFwiLi4vaW1nL2l0ZW03LnBuZ1wiO1xuaW1wb3J0IEl0ZW04IGZyb20gXCIuLi9pbWcvaXRlbTgucG5nXCI7XG5pbXBvcnQgSXRlbTkgZnJvbSBcIi4uL2ltZy9pdGVtOS5wbmdcIjtcbmltcG9ydCBJdGVtMTAgZnJvbSBcIi4uL2ltZy9pdGVtMTAucG5nXCI7XG5pbXBvcnQgSXRlbTExIGZyb20gXCIuLi9pbWcvaXRlbTExLnBuZ1wiO1xuaW1wb3J0IEl0ZW0xMiBmcm9tIFwiLi4vaW1nL2l0ZW0xMi5wbmdcIjtcblxuLyogQ3JlYXRlcyBhIHN0b3JlICovXG5mdW5jdGlvbiByZW5kZXJTdG9yZSgpIHtcbiAgLyogc3RvcmUgY29udGFpbmVyIGVsZW1lbnQgKi9cbiAgY29uc3Qgc3RvcmUgPSBjcmVhdGVIVE1MZWxlbWVudChcImRpdlwiLCBcInN0b3JlXCIsIFwiXCIsIFwiXCIpO1xuXG4gIC8qIGl0ZW1zIGltYWdlcyAqL1xuICBjb25zdCBpdGVtcyA9IFtcbiAgICBJdGVtMSxcbiAgICBJdGVtMixcbiAgICBJdGVtMyxcbiAgICBJdGVtNCxcbiAgICBJdGVtNSxcbiAgICBJdGVtNixcbiAgICBJdGVtNyxcbiAgICBJdGVtOCxcbiAgICBJdGVtOSxcbiAgICBJdGVtMTAsXG4gICAgSXRlbTExLFxuICAgIEl0ZW0xMixcbiAgXTtcblxuICAvKiBpdGVtcyB0ZXh0cyAqL1xuICBjb25zdCB0ZXh0ID0gW1xuICAgIFwiS2FkZXIgTG9nbyBOYXZ5IEIyIDguMjVcIixcbiAgICBcIlRoZW90aXMgTG9nbyBNYW5kYXJpbiBCMiA4LjBcIixcbiAgICBcIlNwYW5reSBMb2dvIEZvcmVzdCBCMiA4LjVcIixcbiAgICBcIkNpcmNsZSBKZXJrcyBBbGJ1bSBBcnQgRGVjayA5LjZcIixcbiAgICBcIkNpcmNsZSBKZXJrcyBUZWUgV2hpdGVcIixcbiAgICBcIkNhcGl0YWwgQiBTdHJpcGUgVGVlIEdyZWVuL1llbGxvd1wiLFxuICAgIFwiS2FtaWthemUgVGVlIEJsYWNrXCIsXG4gICAgXCJEb21pbmF0aW9uIFRlZSBCbGFja1wiLFxuICAgIFwiVGltZXMgTmV3IEJsYWNrIFNuYXBiYWNrXCIsXG4gICAgXCJKb2xseSBNYW4gUmVkIFNvY2tzXCIsXG4gICAgXCJNaXN0eSBGbGlwIFN0aWNrZXJcIixcbiAgICBcIkNpcmNsZSBKZXJrcyBTdGlja2VyXCIsXG4gIF07XG5cbiAgLyogaXRlbXMgcHJpY2VzICovXG4gIGNvbnN0IHByaWNlID0gW1xuICAgIFwiJCA3MVwiLFxuICAgIFwiJCA3MVwiLFxuICAgIFwiJCA3M1wiLFxuICAgIFwiJCA3NVwiLFxuICAgIFwiJCAzNVwiLFxuICAgIFwiJCA0MFwiLFxuICAgIFwiJCAzNVwiLFxuICAgIFwiJCAzNVwiLFxuICAgIFwiJCA0MFwiLFxuICAgIFwiJCAxMlwiLFxuICAgIFwiJCAyXCIsXG4gICAgXCIkIDJcIixcbiAgXTtcblxuICBjb25zdCBsaW5rcyA9IFtcbiAgICBcImh0dHBzOi8vYmFrZXJza2F0ZWJvYXJkcy5jb20vY29sbGVjdGlvbnMvaG9saWRheS0yMS9wcm9kdWN0cy9rYWRlci1sb2dvLW5hdnktYjItOC0yNVwiLFxuICAgIFwiaHR0cHM6Ly9iYWtlcnNrYXRlYm9hcmRzLmNvbS9jb2xsZWN0aW9ucy9ob2xpZGF5LTIxL3Byb2R1Y3RzL3RoZW90aXMtbG9nby1tYW5kYXJpbi1iMi04LTBcIixcbiAgICBcImh0dHBzOi8vYmFrZXJza2F0ZWJvYXJkcy5jb20vY29sbGVjdGlvbnMvaG9saWRheS0yMS9wcm9kdWN0cy9zcGFua3ktbG9nby1mb3Jlc3QtYjItOC01XCIsXG4gICAgXCJodHRwczovL2Jha2Vyc2thdGVib2FyZHMuY29tL2NvbGxlY3Rpb25zL2hvbGlkYXktMjEvcHJvZHVjdHMvY2lyY2xlLWplcmtzLWFsYnVtLWFydC1kZWNrLTktNlwiLFxuICAgIFwiaHR0cHM6Ly9iYWtlcnNrYXRlYm9hcmRzLmNvbS9jb2xsZWN0aW9ucy9ob2xpZGF5LTIxL3Byb2R1Y3RzL2NpcmNsZS1qZXJrcy10ZWUtd2hpdGVcIixcbiAgICBcImh0dHBzOi8vYmFrZXJza2F0ZWJvYXJkcy5jb20vY29sbGVjdGlvbnMvaG9saWRheS0yMS9wcm9kdWN0cy9jYXBpdGFsLWItc3RyaXBlLXRlZS1ncmVlbi15ZWxsb3dcIixcbiAgICBcImh0dHBzOi8vYmFrZXJza2F0ZWJvYXJkcy5jb20vY29sbGVjdGlvbnMvaG9saWRheS0yMS9wcm9kdWN0cy9rYW1pa2F6ZS10ZWUtYmxhY2tcIixcbiAgICBcImh0dHBzOi8vYmFrZXJza2F0ZWJvYXJkcy5jb20vY29sbGVjdGlvbnMvaG9saWRheS0yMS9wcm9kdWN0cy9kb21pbmF0aW9uLXRlZS1ibGFja1wiLFxuICAgIFwiaHR0cHM6Ly9iYWtlcnNrYXRlYm9hcmRzLmNvbS9jb2xsZWN0aW9ucy9ob2xpZGF5LTIxL3Byb2R1Y3RzL3RpbWVzLW5ldy1ibGFjay1zbmFwYmFja1wiLFxuICAgIFwiaHR0cHM6Ly9iYWtlcnNrYXRlYm9hcmRzLmNvbS9jb2xsZWN0aW9ucy9ob2xpZGF5LTIxL3Byb2R1Y3RzL2pvbGx5LW1hbi1yZWQtc29ja3NcIixcbiAgICBcImh0dHBzOi8vYmFrZXJza2F0ZWJvYXJkcy5jb20vY29sbGVjdGlvbnMvaG9saWRheS0yMS9wcm9kdWN0cy9taXN0eS1mbGlwLXN0aWNrZXJcIixcbiAgICBcImh0dHBzOi8vYmFrZXJza2F0ZWJvYXJkcy5jb20vY29sbGVjdGlvbnMvaG9saWRheS0yMS9wcm9kdWN0cy9jaXJjbGUtamVya3Mtc3RpY2tlclwiLFxuICBdO1xuXG4gIGxldCBpID0gMDtcbiAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IHBsYWNlaG9sZGVyID0gY3JlYXRlSFRNTGVsZW1lbnQoXCJhXCIsIFwiXCIsIFtcInBsYWNlaG9sZGVyXCJdLCBcIlwiKTtcbiAgICBwbGFjZWhvbGRlci5ocmVmID0gbGlua3NbaV1cbiAgICAvKiBpbWFnZSAqL1xuICAgIGNvbnN0IHBsYWNlaG9sZGVyX2ltZyA9IGNyZWF0ZUhUTUxlbGVtZW50KFwiaW1nXCIsIFwiXCIsIFtcInNrYXRlX2ltZ1wiXSwgXCJcIik7XG4gICAgcGxhY2Vob2xkZXJfaW1nLnNyYyA9IGl0ZW07XG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQocGxhY2Vob2xkZXJfaW1nKTtcblxuICAgIC8qIHRleHQgKi9cbiAgICBjb25zdCBwbGFjZWhvbGRlcl90eHQgPSBjcmVhdGVIVE1MZWxlbWVudChcInBcIiwgXCJcIiwgW1wic2thdGVfdHh0XCJdLCB0ZXh0W2ldKTtcbiAgICBwbGFjZWhvbGRlci5hcHBlbmRDaGlsZChwbGFjZWhvbGRlcl90eHQpO1xuXG4gICAgLyogcHJpY2UgKi9cbiAgICBjb25zdCBwbGFjZWhvbGRlcl9wcmljZSA9IGNyZWF0ZUhUTUxlbGVtZW50KFxuICAgICAgXCJwXCIsXG4gICAgICBcIlwiLFxuICAgICAgW1wic2thdGVfcHJpY2VcIl0sXG4gICAgICBwcmljZVtpXVxuICAgICk7XG4gICAgcGxhY2Vob2xkZXIuYXBwZW5kQ2hpbGQocGxhY2Vob2xkZXJfcHJpY2UpO1xuXG4gICAgc3RvcmUuYXBwZW5kQ2hpbGQocGxhY2Vob2xkZXIpO1xuICAgIGkrKztcbiAgfSk7XG4gIC8qIEFwcGVuZCB0byB0aGUgRE9NICovXG4gIG1haW5kaXYuYXBwZW5kQ2hpbGQoc3RvcmUpO1xufVxuXG5leHBvcnQgeyByZW5kZXJTdG9yZSB9O1xuIiwiaW1wb3J0IHsgY3JlYXRlSFRNTGVsZW1lbnQgfSBmcm9tIFwiLi9jcmVhdGVFbGVtZW50c1wiO1xuaW1wb3J0IHsgbWFpbmRpdiB9IGZyb20gXCIuLi9pbmRleFwiO1xuLyogQ3JlYXRlcyBhIHN0b3JlIGJ1dHRvbiAqL1xuZnVuY3Rpb24gcmVuZGVyU3RvcmVCdXR0b24oKSB7XG4gIGNvbnN0IGJ1dHRvbkNvbnRhaW5lciA9IGNyZWF0ZUhUTUxlbGVtZW50KFwiZGl2XCIsIFwiYnRuQ29udGFpbmVyXCIsIFwiXCIsIFwiXCIpO1xuICBjb25zdCBidXR0b24gPSBjcmVhdGVIVE1MZWxlbWVudChcbiAgICBcImJ1dHRvblwiLFxuICAgIFwic3RvcmVidXR0b25cIixcbiAgICBcIlwiLFxuICAgIFwiVklFVyBBTEwgUFJPRFVDVFNcIlxuICApO1xuICBidXR0b25Db250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgLyogQXBwZW5kIHRvIHRoZSBET00gKi9cbiAgbWFpbmRpdi5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xufVxuXG5leHBvcnQgeyByZW5kZXJTdG9yZUJ1dHRvbiB9O1xuIiwiaW1wb3J0IHsgcmVuZGVyQW5ub3VuY2VtZW50QmFyIH0gZnJvbSBcIi4vZnVuY3Rpb25zL2Fubm91bmNlbWVudEJhclwiO1xuaW1wb3J0IHsgcmVuZGVyTmF2IH0gZnJvbSBcIi4vZnVuY3Rpb25zL25hdmJhclwiO1xuaW1wb3J0IHsgcmVuZGVyU3BhY2VyIH0gZnJvbSBcIi4vZnVuY3Rpb25zL3NwYWNlclwiO1xuaW1wb3J0IHsgcmVuZGVyU3RvcmUgfSBmcm9tIFwiLi9mdW5jdGlvbnMvc3RvcmVcIjtcbmltcG9ydCB7IHJlbmRlclN0b3JlQnV0dG9uIH0gZnJvbSBcIi4vZnVuY3Rpb25zL3N0b3JlQnV0dG9uXCI7XG5pbXBvcnQgeyByZW5kZXJNYWlsaW5nTGlzdCB9IGZyb20gXCIuL2Z1bmN0aW9ucy9tYWlsaW5nTGlzdFwiO1xuXG4vKiBNYWluIGRpdiwgY29udGFpbnMgZXZlcnl0aGluZyAqL1xuY29uc3QgbWFpbmRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbnJlbmRlckFubm91bmNlbWVudEJhcigpO1xucmVuZGVyTmF2KCk7XG5yZW5kZXJTcGFjZXIoKTtcbnJlbmRlclN0b3JlKCk7XG5yZW5kZXJTdG9yZUJ1dHRvbigpO1xucmVuZGVyTWFpbGluZ0xpc3QoKTtcbmV4cG9ydCB7IG1haW5kaXYgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9