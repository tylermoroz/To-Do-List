/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody {\n  margin: 0;\n  height: 100%;\n}\n\n#content {\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-columns: 1fr 7fr;\n  grid-template-rows: 2fr 1.5fr;\n  grid-auto-flow: row;\n  background: rgb(249, 197, 3);\n  background: linear-gradient(\n    21deg,\n    rgba(249, 197, 3, 1) 0%,\n    rgba(0, 4, 4, 1) 30%,\n    rgba(0, 1, 1, 1) 70%,\n    rgba(0, 255, 192, 1) 100%\n  );\n}\n\n#projects-container {\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n  border: 3px solid black;\n  border-radius: 15px;\n  margin: 10px 5px 10px 10px;\n  padding: 10px;\n  background: rgba(255, 255, 255, 0.767);\n}\n\n#projects-head-div {\n  display: flex;\n  justify-content: space-between;\n  margin: -5px;\n}\n\n#projects-title-div {\n  width: 100%;\n}\n\n#projects-title-div p {\n  font-size: 28px;\n  margin: 0;\n  font-weight: 700;\n  text-align: center;\n  text-decoration: underline;\n}\n\n#projects-button-div {\n  margin-left: -15px;\n}\n\n#projects-add-button {\n  font-weight: 700;\n  height: 25px;\n  width: 25px;\n  font-size: 16px;\n}\n\n#projects-div {\n  margin: 10px 10px 2px 10px;\n  display: flex;\n  flex-direction: column;\n  height: 90%;\n  overflow-y: auto;\n}\n\n#projects-div p {\n  margin-top: 3px;\n  margin-bottom: 3px;\n  font-size: 24px;\n  cursor: pointer;\n  width: fit-content;\n}\n\n#project-title {\n  width: 95%;\n}\n\n#projects-div::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n\n#projects-div::-webkit-scrollbar-track {\n  background: rgba(255, 255, 255);\n  border-radius: 20px;\n  margin: 5px;\n}\n\n#projects-div::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 255, 0.664);\n  border-radius: 20px;\n  border: 2px solid rgb(255, 255, 255);\n}\n\n.active {\n  text-decoration: underline;\n  font-weight: bold;\n}\n\n#form-div {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  border: 3px solid black;\n  border-radius: 15px;\n  margin: 10px 5px 10px 10px;\n  padding: 10px;\n  background: rgba(255, 255, 255, 0.767);\n  display: flex;\n  flex-direction: column-reverse;\n}\n\n#form-header {\n  font-size: 28px;\n  margin: 0;\n  font-weight: 700;\n  text-align: center;\n  text-decoration: underline;\n}\n\nform {\n  font-weight: bold;\n  font-size: 18px;\n}\n\nform #todo-title {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n}\n\nform #todo-title input {\n  height: 20px;\n}\n\nform #todo-description {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n}\n\nform #todo-due-date {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n}\n\nform #todo-due-date input {\n  height: 20px;\n}\n\nform #todo-priority {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n}\n\nform #priority-level {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: -15px;\n  font-size: 14px;\n}\nform #todo-priority label {\n  margin-bottom: -10px;\n}\n\nform #todo-notes {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n}\n\nform #todo-checklist {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 5px;\n  text-align: center;\n}\n\n#todo-div {\n  grid-column: 2 / 3;\n  grid-row: 1 / 3;\n  display: grid;\n  grid-auto-flow: row;\n  grid-template-columns: repeat(6, 1fr);\n  grid-template-rows: repeat(4, 1fr);\n  border: 3px solid black;\n  border-radius: 15px;\n  margin: 10px 10px 10px 5px;\n  padding: 10px;\n  gap: 20px;\n  background: rgba(255, 255, 255, 0.767);\n  overflow-y: auto;\n}\n\n#todo-div::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n\n#todo-div::-webkit-scrollbar-track {\n  background: rgba(255, 255, 255);\n  border-radius: 20px;\n  margin: 5px;\n}\n\n#todo-div::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 255, 0.664);\n  border-radius: 20px;\n  border: 2px solid rgb(255, 255, 255);\n}\n\n.todo-object {\n  border: 3px solid black;\n  border-radius: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  max-width: 200px;\n  height: fit-content;\n  padding: 10px;\n  background-color: white;\n}\n\n.todo-object h3 {\n  margin-bottom: -5px;\n  margin-top: -5px;\n  text-decoration: underline;\n  font-size: 24px;\n}\n\n.todo-object p {\n  margin-bottom: -5px;\n}\n\n.todo-object button {\n  border-radius: 5px;\n  width: fit-content;\n  align-self: center;\n  margin-top: 15px;\n}\n\n.todo-object #description {\n  font-style: italic;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;EAEE,SAAS;EACT,YAAY;AACd;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,6BAA6B;EAC7B,mBAAmB;EACnB,4BAA4B;EAC5B;;;;;;GAMC;AACH;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,uBAAuB;EACvB,mBAAmB;EACnB,0BAA0B;EAC1B,aAAa;EACb,sCAAsC;AACxC;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;EACf,SAAS;EACT,gBAAgB;EAChB,kBAAkB;EAClB,0BAA0B;AAC5B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,0BAA0B;EAC1B,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,eAAe;EACf,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,+BAA+B;EAC/B,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,wCAAwC;EACxC,mBAAmB;EACnB,oCAAoC;AACtC;;AAEA;EACE,0BAA0B;EAC1B,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,uBAAuB;EACvB,mBAAmB;EACnB,0BAA0B;EAC1B,aAAa;EACb,sCAAsC;EACtC,aAAa;EACb,8BAA8B;AAChC;;AAEA;EACE,eAAe;EACf,SAAS;EACT,gBAAgB;EAChB,kBAAkB;EAClB,0BAA0B;AAC5B;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,oBAAoB;EACpB,eAAe;AACjB;AACA;EACE,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,qCAAqC;EACrC,kCAAkC;EAClC,uBAAuB;EACvB,mBAAmB;EACnB,0BAA0B;EAC1B,aAAa;EACb,SAAS;EACT,sCAAsC;EACtC,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,+BAA+B;EAC/B,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,wCAAwC;EACxC,mBAAmB;EACnB,oCAAoC;AACtC;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,0BAA0B;EAC1B,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":["html,\nbody {\n  margin: 0;\n  height: 100%;\n}\n\n#content {\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-columns: 1fr 7fr;\n  grid-template-rows: 2fr 1.5fr;\n  grid-auto-flow: row;\n  background: rgb(249, 197, 3);\n  background: linear-gradient(\n    21deg,\n    rgba(249, 197, 3, 1) 0%,\n    rgba(0, 4, 4, 1) 30%,\n    rgba(0, 1, 1, 1) 70%,\n    rgba(0, 255, 192, 1) 100%\n  );\n}\n\n#projects-container {\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n  border: 3px solid black;\n  border-radius: 15px;\n  margin: 10px 5px 10px 10px;\n  padding: 10px;\n  background: rgba(255, 255, 255, 0.767);\n}\n\n#projects-head-div {\n  display: flex;\n  justify-content: space-between;\n  margin: -5px;\n}\n\n#projects-title-div {\n  width: 100%;\n}\n\n#projects-title-div p {\n  font-size: 28px;\n  margin: 0;\n  font-weight: 700;\n  text-align: center;\n  text-decoration: underline;\n}\n\n#projects-button-div {\n  margin-left: -15px;\n}\n\n#projects-add-button {\n  font-weight: 700;\n  height: 25px;\n  width: 25px;\n  font-size: 16px;\n}\n\n#projects-div {\n  margin: 10px 10px 2px 10px;\n  display: flex;\n  flex-direction: column;\n  height: 90%;\n  overflow-y: auto;\n}\n\n#projects-div p {\n  margin-top: 3px;\n  margin-bottom: 3px;\n  font-size: 24px;\n  cursor: pointer;\n  width: fit-content;\n}\n\n#project-title {\n  width: 95%;\n}\n\n#projects-div::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n\n#projects-div::-webkit-scrollbar-track {\n  background: rgba(255, 255, 255);\n  border-radius: 20px;\n  margin: 5px;\n}\n\n#projects-div::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 255, 0.664);\n  border-radius: 20px;\n  border: 2px solid rgb(255, 255, 255);\n}\n\n.active {\n  text-decoration: underline;\n  font-weight: bold;\n}\n\n#form-div {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  border: 3px solid black;\n  border-radius: 15px;\n  margin: 10px 5px 10px 10px;\n  padding: 10px;\n  background: rgba(255, 255, 255, 0.767);\n  display: flex;\n  flex-direction: column-reverse;\n}\n\n#form-header {\n  font-size: 28px;\n  margin: 0;\n  font-weight: 700;\n  text-align: center;\n  text-decoration: underline;\n}\n\nform {\n  font-weight: bold;\n  font-size: 18px;\n}\n\nform #todo-title {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n}\n\nform #todo-title input {\n  height: 20px;\n}\n\nform #todo-description {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n}\n\nform #todo-due-date {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n}\n\nform #todo-due-date input {\n  height: 20px;\n}\n\nform #todo-priority {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n}\n\nform #priority-level {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: -15px;\n  font-size: 14px;\n}\nform #todo-priority label {\n  margin-bottom: -10px;\n}\n\nform #todo-notes {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n}\n\nform #todo-checklist {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 5px;\n  text-align: center;\n}\n\n#todo-div {\n  grid-column: 2 / 3;\n  grid-row: 1 / 3;\n  display: grid;\n  grid-auto-flow: row;\n  grid-template-columns: repeat(6, 1fr);\n  grid-template-rows: repeat(4, 1fr);\n  border: 3px solid black;\n  border-radius: 15px;\n  margin: 10px 10px 10px 5px;\n  padding: 10px;\n  gap: 20px;\n  background: rgba(255, 255, 255, 0.767);\n  overflow-y: auto;\n}\n\n#todo-div::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n\n#todo-div::-webkit-scrollbar-track {\n  background: rgba(255, 255, 255);\n  border-radius: 20px;\n  margin: 5px;\n}\n\n#todo-div::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 255, 0.664);\n  border-radius: 20px;\n  border: 2px solid rgb(255, 255, 255);\n}\n\n.todo-object {\n  border: 3px solid black;\n  border-radius: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  max-width: 200px;\n  height: fit-content;\n  padding: 10px;\n  background-color: white;\n}\n\n.todo-object h3 {\n  margin-bottom: -5px;\n  margin-top: -5px;\n  text-decoration: underline;\n  font-size: 24px;\n}\n\n.todo-object p {\n  margin-bottom: -5px;\n}\n\n.todo-object button {\n  border-radius: 5px;\n  width: fit-content;\n  align-self: center;\n  margin-top: 15px;\n}\n\n.todo-object #description {\n  font-style: italic;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/createTodo.js":
/*!***************************!*\
  !*** ./src/createTodo.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTodo": () => (/* binding */ createTodo)
/* harmony export */ });
/* harmony import */ var _todoForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoForm.js */ "./src/todoForm.js");
/* harmony import */ var _displayTodo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTodo.js */ "./src/displayTodo.js");
/* harmony import */ var _newProject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newProject.js */ "./src/newProject.js");




const Todo = (title, description, dueDate, priority, notes, complete) => {
  return { title, description, dueDate, priority, notes, complete };
};

const completeValue = (todo) => {
  if (_todoForm_js__WEBPACK_IMPORTED_MODULE_0__.completeInput.checked) {
    return (todo.complete = "complete");
  } else {
    return (todo.complete = "incomplete");
  }
};

const newTodo = (event) => {
  event.preventDefault();
  let todo = Todo();
  todo.title = document.getElementById("title").value;
  todo.description = document.getElementById("description").value;
  todo.dueDate = document.getElementById("due-date").value;
  todo.priority = document.getElementById("priority").value;
  todo.notes = document.getElementById("notes").value;
  todo.complete = completeValue(todo);
  for (let i = 0; i < _newProject_js__WEBPACK_IMPORTED_MODULE_2__.projectsArray.length; i++) {
    if (_newProject_js__WEBPACK_IMPORTED_MODULE_2__.projectsArray[i].active) {
      _newProject_js__WEBPACK_IMPORTED_MODULE_2__.projectsArray[i].todos.push(todo);
    }
  }
};

const createTodo = () => {
  _todoForm_js__WEBPACK_IMPORTED_MODULE_0__.submit.addEventListener("click", _displayTodo_js__WEBPACK_IMPORTED_MODULE_1__.resetChildNodes);
  _todoForm_js__WEBPACK_IMPORTED_MODULE_0__.submit.addEventListener("click", newTodo);
  _todoForm_js__WEBPACK_IMPORTED_MODULE_0__.submit.addEventListener("click", _displayTodo_js__WEBPACK_IMPORTED_MODULE_1__.displayTodo);
};




/***/ }),

/***/ "./src/displayTodo.js":
/*!****************************!*\
  !*** ./src/displayTodo.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayTodo": () => (/* binding */ displayTodo),
/* harmony export */   "resetChildNodes": () => (/* binding */ resetChildNodes),
/* harmony export */   "todoDiv": () => (/* binding */ todoDiv)
/* harmony export */ });
/* harmony import */ var _newProject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./newProject.js */ "./src/newProject.js");


const todoDiv = document.createElement("div");

const todoColor = (i, j, todo) => {
  if (_newProject_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[i].todos[j].priority == "1") {
    todo.style.boxShadow = "0px 0px 10px 4px #14d10a";
  } else if (_newProject_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[i].todos[j].priority == "2") {
    todo.style.boxShadow = "0px 0px 10px 4px #fad900";
  } else if (_newProject_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[i].todos[j].priority == "3") {
    todo.style.boxShadow = "0px 0px 10px 4px #fa000c";
  }
};

const priorityLevel = (i, j) => {
  if (_newProject_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[i].todos[j].priority == "1") {
    return (priority.textContent = "Priority: Low");
  } else if (_newProject_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[i].todos[j].priority == "2") {
    return (priority.textContent = "Priority: Medium");
  } else if (_newProject_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[i].todos[j].priority == "3") {
    return (priority.textContent = "Priority: High");
  }
};

const resetChildNodes = () => {
  while (todoDiv.firstChild) {
    todoDiv.removeChild(todoDiv.firstChild);
  }
};

const displayTodo = () => {
  for (let i = 0; i < _newProject_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray.length; i++) {
    for (let j = 0; j < _newProject_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[i].todos.length; j++) {
      const todoObject = document.createElement("div");
      const title = document.createElement("h3");
      const priority = document.createElement("p");
      const description = document.createElement("p");
      const dueDate = document.createElement("p");
      const notes = document.createElement("p");
      const complete = document.createElement("button");

      title.textContent = _newProject_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[i].todos[j].title;
      priority.textContent = priorityLevel(i, j);
      description.textContent = _newProject_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[i].todos[j].description;
      dueDate.textContent = _newProject_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[i].todos[j].dueDate;
      notes.textContent = _newProject_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[i].todos[j].notes;
      complete.textContent = _newProject_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[i].todos[j].complete;

      description.setAttribute("id", "description");
      notes.setAttribute("id", "notes");

      todoColor(i, j, todoObject);

      complete.addEventListener("click", () => {
        if (_newProject_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[i].todos[j].complete == "complete") {
          _newProject_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[i].todos[j].complete = "incomplete";
          complete.textContent = _newProject_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[i].todos[j].complete;
        } else if (_newProject_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[i].todos[j].complete == "incomplete") {
          _newProject_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[i].todos[j].complete = "complete";
          complete.textContent = _newProject_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[i].todos[j].complete;
        }
      });

      todoObject.classList.add("todo-object");

      todoDiv.appendChild(todoObject);
      todoObject.appendChild(title);
      todoObject.appendChild(dueDate);
      todoObject.appendChild(priority);
      todoObject.appendChild(description);
      todoObject.appendChild(notes);
      todoObject.appendChild(complete);
    }
  }
};




/***/ }),

/***/ "./src/newProject.js":
/*!***************************!*\
  !*** ./src/newProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activeProject": () => (/* binding */ activeProject),
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "newProjectFormCreate": () => (/* binding */ newProjectFormCreate),
/* harmony export */   "projectsArray": () => (/* binding */ projectsArray),
/* harmony export */   "selectProject": () => (/* binding */ selectProject)
/* harmony export */ });
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");


const projectsArray = [];
// let projectTodos = [];

const Project = (title, todos, active) => {
  return { title, todos, active };
};

const newProjectFormDiv = document.createElement("div");
const newProjectForm = document.createElement("form");

const projectTitle = document.createElement("div");
const projectTitleLabel = document.createElement("label");
const projectTitleInput = document.createElement("input");

newProjectFormDiv.setAttribute("id", "project-form-div");

projectTitle.setAttribute("id", "project-title-div");
projectTitleInput.setAttribute("type", "text");
projectTitleInput.setAttribute("name", "project-title");
projectTitleInput.setAttribute("id", "project-title");
projectTitleInput.placeholder = "New Project";

const newProjectFormCreate = () => {
  _projects_js__WEBPACK_IMPORTED_MODULE_0__.projectsDiv.appendChild(newProjectFormDiv);
  newProjectFormDiv.appendChild(newProjectForm);
  newProjectForm.appendChild(projectTitle);
  projectTitle.appendChild(projectTitleLabel);
  projectTitle.appendChild(projectTitleInput);
};

const newProject = () => {
  let project = Project();
  project.title = document.getElementById("project-title").value;
  project.todos = [];
  project.active = false;
  projectsArray.push(project);
  const projectName = document.createElement("p");
  projectName.textContent = project.title;
  projectName.classList.add("project");
  _projects_js__WEBPACK_IMPORTED_MODULE_0__.projectsDiv.removeChild(newProjectFormDiv);
  _projects_js__WEBPACK_IMPORTED_MODULE_0__.projectsDiv.appendChild(projectName);
  console.log(projectsArray);
};

const addProject = () => {
  projectTitleInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      newProject();
      newProjectForm.reset();
    }
  });
};

const selectProject = () => {
  const projectList = document.getElementById("projects-div");
  const children = document.getElementById("projects-div").children;

  projectList.addEventListener("click", (e) => {
    for (let i = 0; i < children.length; i++) {
      children[i].classList.remove("active");
    }
    if (e.target.classList.contains("project")) {
      e.target.classList.add("active");
    }
  });
};

const activeProject = () => {
  const projectSelection = document.getElementById("projects-div");
  projectSelection.addEventListener("click", (e) => {
    for (let i = 0; i < projectsArray.length; i++) {
      if (
        projectsArray[i].title === e.target.textContent &&
        e.target.classList.contains("active")
      ) {
        projectsArray[i].active = true;
        console.log(projectsArray);
      } else if (
        projectsArray[i].title !== e.target.textContent &&
        e.target.classList.contains("active")
      ) {
        projectsArray[i].active = false;
      }
    }
  });
};




/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProjectBtn": () => (/* binding */ addProjectBtn),
/* harmony export */   "projectsContainer": () => (/* binding */ projectsContainer),
/* harmony export */   "projectsDiv": () => (/* binding */ projectsDiv)
/* harmony export */ });
const projectsContainer = document.createElement("div");
const projectsHeadDiv = document.createElement("div");
const projectsTitleDiv = document.createElement("div");
const projectsButtonDiv = document.createElement("div");
const projectsDiv = document.createElement("div");
const title = document.createElement("p");
const addProjectBtn = document.createElement("button");

title.textContent = "Projects";
addProjectBtn.textContent = "+";

projectsContainer.setAttribute("id", "projects-container");
projectsHeadDiv.setAttribute("id", "projects-head-div");
projectsTitleDiv.setAttribute("id", "projects-title-div");
projectsButtonDiv.setAttribute("id", "projects-button-div");
addProjectBtn.setAttribute("id", "projects-add-button");
projectsDiv.setAttribute("id", "projects-div");

projectsContainer.appendChild(projectsHeadDiv);
projectsContainer.appendChild(projectsDiv);
projectsHeadDiv.appendChild(projectsTitleDiv);
projectsHeadDiv.appendChild(projectsButtonDiv);
projectsTitleDiv.appendChild(title);
projectsButtonDiv.appendChild(addProjectBtn);




/***/ }),

/***/ "./src/todoForm.js":
/*!*************************!*\
  !*** ./src/todoForm.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "completeInput": () => (/* binding */ completeInput),
/* harmony export */   "formClear": () => (/* binding */ formClear),
/* harmony export */   "formCreate": () => (/* binding */ formCreate),
/* harmony export */   "formDiv": () => (/* binding */ formDiv),
/* harmony export */   "submit": () => (/* binding */ submit)
/* harmony export */ });
const formDiv = document.createElement("div");
const formHead = document.createElement("p");
const form = document.createElement("form");

const title = document.createElement("div");
const titleLabel = document.createElement("label");
const titleInput = document.createElement("input");

const priority = document.createElement("div");
const priorityLabel = document.createElement("label");
const priorityLevelDiv = document.createElement("div");
const priorityLevelLow = document.createElement("p");
const priorityLevelMid = document.createElement("p");
const priorityLevelHigh = document.createElement("p");
const priorityInput = document.createElement("input");

const description = document.createElement("div");
const descriptionLabel = document.createElement("label");
const descriptionInput = document.createElement("textarea");

const dueDate = document.createElement("div");
const dueDateLabel = document.createElement("label");
const dueDateInput = document.createElement("input");

const notes = document.createElement("div");
const notesLabel = document.createElement("label");
const notesInput = document.createElement("textarea");

const complete = document.createElement("div");
const completeLabel = document.createElement("label");
const completeInput = document.createElement("input");

const submit = document.createElement("button");

formDiv.setAttribute("id", "form-div");

formHead.setAttribute("id", "form-header");
formHead.textContent = "Create To-Do";

title.setAttribute("id", "todo-title");
titleLabel.setAttribute("for", "title");
titleLabel.textContent = "Title:";
titleInput.setAttribute("type", "text");
titleInput.setAttribute("name", "title");
titleInput.setAttribute("id", "title");

priority.setAttribute("id", "todo-priority");
priorityLabel.setAttribute("for", "priority");
priorityLabel.textContent = "Priority:";
priorityLevelDiv.setAttribute("id", "priority-level");
priorityLevelLow.textContent = "Low";
priorityLevelLow.style.textShadow = "2px 2px 8px #14d10a";
priorityLevelMid.textContent = "Medium";
priorityLevelMid.style.textShadow = "2px 2px 8px #fad900";
priorityLevelHigh.textContent = "High";
priorityLevelHigh.style.textShadow = "2px 2px 8px #fa000c";

priorityInput.setAttribute("type", "range");
priorityInput.setAttribute("name", "priority");
priorityInput.setAttribute("id", "priority");
priorityInput.setAttribute("min", "1");
priorityInput.setAttribute("max", "3");

description.setAttribute("id", "todo-description");
descriptionLabel.setAttribute("for", "description");
descriptionLabel.textContent = "Description:";
descriptionInput.setAttribute("rows", "5");
descriptionInput.setAttribute("cols", "33");
descriptionInput.setAttribute("name", "description");
descriptionInput.setAttribute("id", "description");

dueDate.setAttribute("id", "todo-due-date");
dueDateLabel.setAttribute("for", "due-date");
dueDateLabel.textContent = "Due Date:";
dueDateInput.setAttribute("type", "date");
dueDateInput.setAttribute("name", "due-date");
dueDateInput.setAttribute("id", "due-date");

notes.setAttribute("id", "todo-notes");
notesLabel.setAttribute("for", "notes");
notesLabel.textContent = "Notes:";
notesInput.setAttribute("name", "notes");
notesInput.setAttribute("id", "notes");
notesInput.setAttribute("rows", "5");
notesInput.setAttribute("cols", "33");

complete.setAttribute("id", "todo-checklist");
completeLabel.setAttribute("for", "complete");
completeLabel.textContent = "Complete";
completeInput.setAttribute("type", "checkbox");
completeInput.setAttribute("name", "complete");
completeInput.setAttribute("id", "complete");

submit.setAttribute("id", "submit");
submit.textContent = "submit";

const formCreate = () => {
  formDiv.appendChild(form);
  formDiv.appendChild(formHead);
  form.appendChild(title);
  form.appendChild(dueDate);
  form.appendChild(priority);
  form.appendChild(description);
  form.appendChild(notes);
  form.appendChild(complete);
  form.appendChild(submit);
  title.appendChild(titleLabel);
  title.appendChild(titleInput);
  dueDate.appendChild(dueDateLabel);
  dueDate.appendChild(dueDateInput);
  priority.appendChild(priorityLabel);
  priority.appendChild(priorityLevelDiv);
  priorityLevelDiv.appendChild(priorityLevelLow);
  priorityLevelDiv.appendChild(priorityLevelMid);
  priorityLevelDiv.appendChild(priorityLevelHigh);
  priority.appendChild(priorityInput);
  description.appendChild(descriptionLabel);
  description.appendChild(descriptionInput);
  notes.appendChild(notesLabel);
  notes.appendChild(notesInput);
  complete.appendChild(completeInput);
  complete.appendChild(completeLabel);
};

const formClear = () => {
  submit.addEventListener("click", () => {
    form.reset();
  });
};




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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "content": () => (/* binding */ content)
/* harmony export */ });
/* harmony import */ var _todoForm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoForm */ "./src/todoForm.js");
/* harmony import */ var _createTodo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./createTodo.js */ "./src/createTodo.js");
/* harmony import */ var _displayTodo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayTodo.js */ "./src/displayTodo.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _newProject_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./newProject.js */ "./src/newProject.js");







const content = document.querySelector("#content");

_displayTodo_js__WEBPACK_IMPORTED_MODULE_2__.todoDiv.setAttribute("id", "todo-div");

content.appendChild(_todoForm__WEBPACK_IMPORTED_MODULE_0__.formDiv);
content.appendChild(_projects_js__WEBPACK_IMPORTED_MODULE_4__.projectsContainer);
content.appendChild(_displayTodo_js__WEBPACK_IMPORTED_MODULE_2__.todoDiv);

(0,_todoForm__WEBPACK_IMPORTED_MODULE_0__.formCreate)();
(0,_newProject_js__WEBPACK_IMPORTED_MODULE_5__.addProject)();
(0,_createTodo_js__WEBPACK_IMPORTED_MODULE_1__.createTodo)();
(0,_todoForm__WEBPACK_IMPORTED_MODULE_0__.formClear)();
_projects_js__WEBPACK_IMPORTED_MODULE_4__.addProjectBtn.addEventListener("click", _newProject_js__WEBPACK_IMPORTED_MODULE_5__.newProjectFormCreate);
(0,_newProject_js__WEBPACK_IMPORTED_MODULE_5__.selectProject)();
(0,_newProject_js__WEBPACK_IMPORTED_MODULE_5__.activeProject)();



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY3JlYXRlVG9kby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2Rpc3BsYXlUb2RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbmV3UHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9kb0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgN2ZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgMS41ZnI7XFxuICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgYmFja2dyb3VuZDogcmdiKDI0OSwgMTk3LCAzKTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgMjFkZWcsXFxuICAgIHJnYmEoMjQ5LCAxOTcsIDMsIDEpIDAlLFxcbiAgICByZ2JhKDAsIDQsIDQsIDEpIDMwJSxcXG4gICAgcmdiYSgwLCAxLCAxLCAxKSA3MCUsXFxuICAgIHJnYmEoMCwgMjU1LCAxOTIsIDEpIDEwMCVcXG4gICk7XFxufVxcblxcbiNwcm9qZWN0cy1jb250YWluZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgbWFyZ2luOiAxMHB4IDVweCAxMHB4IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc2Nyk7XFxufVxcblxcbiNwcm9qZWN0cy1oZWFkLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luOiAtNXB4O1xcbn1cXG5cXG4jcHJvamVjdHMtdGl0bGUtZGl2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jcHJvamVjdHMtdGl0bGUtZGl2IHAge1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4jcHJvamVjdHMtYnV0dG9uLWRpdiB7XFxuICBtYXJnaW4tbGVmdDogLTE1cHg7XFxufVxcblxcbiNwcm9qZWN0cy1hZGQtYnV0dG9uIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMjVweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuI3Byb2plY3RzLWRpdiB7XFxuICBtYXJnaW46IDEwcHggMTBweCAycHggMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4jcHJvamVjdHMtZGl2IHAge1xcbiAgbWFyZ2luLXRvcDogM3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbn1cXG5cXG4jcHJvamVjdC10aXRsZSB7XFxuICB3aWR0aDogOTUlO1xcbn1cXG5cXG4jcHJvamVjdHMtZGl2Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMTBweDtcXG4gIGhlaWdodDogMTBweDtcXG59XFxuXFxuI3Byb2plY3RzLWRpdjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBtYXJnaW46IDVweDtcXG59XFxuXFxuI3Byb2plY3RzLWRpdjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuNjY0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuI2Zvcm0tZGl2IHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIG1hcmdpbjogMTBweCA1cHggMTBweCAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NjcpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcXG59XFxuXFxuI2Zvcm0taGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuZm9ybSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuZm9ybSAjdG9kby10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuZm9ybSAjdG9kby10aXRsZSBpbnB1dCB7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbmZvcm0gI3RvZG8tZGVzY3JpcHRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbmZvcm0gI3RvZG8tZHVlLWRhdGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbmZvcm0gI3RvZG8tZHVlLWRhdGUgaW5wdXQge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG5mb3JtICN0b2RvLXByaW9yaXR5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5mb3JtICNwcmlvcml0eS1sZXZlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLWJvdHRvbTogLTE1cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbmZvcm0gI3RvZG8tcHJpb3JpdHkgbGFiZWwge1xcbiAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XFxufVxcblxcbmZvcm0gI3RvZG8tbm90ZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbmZvcm0gI3RvZG8tY2hlY2tsaXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiN0b2RvLWRpdiB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMSAvIDM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpO1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCA1cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc2Nyk7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4jdG9kby1kaXY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbn1cXG5cXG4jdG9kby1kaXY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgbWFyZ2luOiA1cHg7XFxufVxcblxcbiN0b2RvLWRpdjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuNjY0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcblxcbi50b2RvLW9iamVjdCB7XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBsZWZ0O1xcbiAgbWF4LXdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi50b2RvLW9iamVjdCBoMyB7XFxuICBtYXJnaW4tYm90dG9tOiAtNXB4O1xcbiAgbWFyZ2luLXRvcDogLTVweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4udG9kby1vYmplY3QgcCB7XFxuICBtYXJnaW4tYm90dG9tOiAtNXB4O1xcbn1cXG5cXG4udG9kby1vYmplY3QgYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcblxcbi50b2RvLW9iamVjdCAjZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUI7Ozs7OztHQU1DO0FBQ0g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsbUJBQW1CO0VBQ25CLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHFDQUFxQztFQUNyQyxrQ0FBa0M7RUFDbEMsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLFNBQVM7RUFDVCxzQ0FBc0M7RUFDdEMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLG1CQUFtQjtFQUNuQixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCxcXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA3ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxLjVmcjtcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjQ5LCAxOTcsIDMpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICAyMWRlZyxcXG4gICAgcmdiYSgyNDksIDE5NywgMywgMSkgMCUsXFxuICAgIHJnYmEoMCwgNCwgNCwgMSkgMzAlLFxcbiAgICByZ2JhKDAsIDEsIDEsIDEpIDcwJSxcXG4gICAgcmdiYSgwLCAyNTUsIDE5MiwgMSkgMTAwJVxcbiAgKTtcXG59XFxuXFxuI3Byb2plY3RzLWNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBtYXJnaW46IDEwcHggNXB4IDEwcHggMTBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzY3KTtcXG59XFxuXFxuI3Byb2plY3RzLWhlYWQtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW46IC01cHg7XFxufVxcblxcbiNwcm9qZWN0cy10aXRsZS1kaXYge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNwcm9qZWN0cy10aXRsZS1kaXYgcCB7XFxuICBmb250LXNpemU6IDI4cHg7XFxuICBtYXJnaW46IDA7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbiNwcm9qZWN0cy1idXR0b24tZGl2IHtcXG4gIG1hcmdpbi1sZWZ0OiAtMTVweDtcXG59XFxuXFxuI3Byb2plY3RzLWFkZC1idXR0b24ge1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGhlaWdodDogMjVweDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4jcHJvamVjdHMtZGl2IHtcXG4gIG1hcmdpbjogMTBweCAxMHB4IDJweCAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDkwJTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbiNwcm9qZWN0cy1kaXYgcCB7XFxuICBtYXJnaW4tdG9wOiAzcHg7XFxuICBtYXJnaW4tYm90dG9tOiAzcHg7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxufVxcblxcbiNwcm9qZWN0LXRpdGxlIHtcXG4gIHdpZHRoOiA5NSU7XFxufVxcblxcbiNwcm9qZWN0cy1kaXY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbn1cXG5cXG4jcHJvamVjdHMtZGl2Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4jcHJvamVjdHMtZGl2Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC42NjQpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4jZm9ybS1kaXYge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgbWFyZ2luOiAxMHB4IDVweCAxMHB4IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc2Nyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xcbn1cXG5cXG4jZm9ybS1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5mb3JtIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG5mb3JtICN0b2RvLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5mb3JtICN0b2RvLXRpdGxlIGlucHV0IHtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuZm9ybSAjdG9kby1kZXNjcmlwdGlvbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuZm9ybSAjdG9kby1kdWUtZGF0ZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuZm9ybSAjdG9kby1kdWUtZGF0ZSBpbnB1dCB7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbmZvcm0gI3RvZG8tcHJpb3JpdHkge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbmZvcm0gI3ByaW9yaXR5LWxldmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tYm90dG9tOiAtMTVweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuZm9ybSAjdG9kby1wcmlvcml0eSBsYWJlbCB7XFxuICBtYXJnaW4tYm90dG9tOiAtMTBweDtcXG59XFxuXFxuZm9ybSAjdG9kby1ub3RlcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuZm9ybSAjdG9kby1jaGVja2xpc3Qge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuI3RvZG8tZGl2IHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAxIC8gMztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNiwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDFmcik7XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBtYXJnaW46IDEwcHggMTBweCAxMHB4IDVweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBnYXA6IDIwcHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNzY3KTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcblxcbiN0b2RvLWRpdjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxufVxcblxcbiN0b2RvLWRpdjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBtYXJnaW46IDVweDtcXG59XFxuXFxuI3RvZG8tZGl2Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC42NjQpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNTUsIDI1NSwgMjU1KTtcXG59XFxuXFxuLnRvZG8tb2JqZWN0IHtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGxlZnQ7XFxuICBtYXgtd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLnRvZG8tb2JqZWN0IGgzIHtcXG4gIG1hcmdpbi1ib3R0b206IC01cHg7XFxuICBtYXJnaW4tdG9wOiAtNXB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBmb250LXNpemU6IDI0cHg7XFxufVxcblxcbi50b2RvLW9iamVjdCBwIHtcXG4gIG1hcmdpbi1ib3R0b206IC01cHg7XFxufVxcblxcbi50b2RvLW9iamVjdCBidXR0b24ge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG59XFxuXFxuLnRvZG8tb2JqZWN0ICNkZXNjcmlwdGlvbiB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgeyBzdWJtaXQsIGNvbXBsZXRlSW5wdXQgfSBmcm9tIFwiLi90b2RvRm9ybS5qc1wiO1xuaW1wb3J0IHsgZGlzcGxheVRvZG8sIHJlc2V0Q2hpbGROb2RlcyB9IGZyb20gXCIuL2Rpc3BsYXlUb2RvLmpzXCI7XG5pbXBvcnQgeyBwcm9qZWN0c0FycmF5IH0gZnJvbSBcIi4vbmV3UHJvamVjdC5qc1wiO1xuXG5jb25zdCBUb2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBjb21wbGV0ZSkgPT4ge1xuICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgY29tcGxldGUgfTtcbn07XG5cbmNvbnN0IGNvbXBsZXRlVmFsdWUgPSAodG9kbykgPT4ge1xuICBpZiAoY29tcGxldGVJbnB1dC5jaGVja2VkKSB7XG4gICAgcmV0dXJuICh0b2RvLmNvbXBsZXRlID0gXCJjb21wbGV0ZVwiKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKHRvZG8uY29tcGxldGUgPSBcImluY29tcGxldGVcIik7XG4gIH1cbn07XG5cbmNvbnN0IG5ld1RvZG8gPSAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgbGV0IHRvZG8gPSBUb2RvKCk7XG4gIHRvZG8udGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLnZhbHVlO1xuICB0b2RvLmRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgdG9kby5kdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWUtZGF0ZVwiKS52YWx1ZTtcbiAgdG9kby5wcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlcIikudmFsdWU7XG4gIHRvZG8ubm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVzXCIpLnZhbHVlO1xuICB0b2RvLmNvbXBsZXRlID0gY29tcGxldGVWYWx1ZSh0b2RvKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHByb2plY3RzQXJyYXlbaV0uYWN0aXZlKSB7XG4gICAgICBwcm9qZWN0c0FycmF5W2ldLnRvZG9zLnB1c2godG9kbyk7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBjcmVhdGVUb2RvID0gKCkgPT4ge1xuICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHJlc2V0Q2hpbGROb2Rlcyk7XG4gIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV3VG9kbyk7XG4gIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZGlzcGxheVRvZG8pO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlVG9kbyB9O1xuIiwiaW1wb3J0IHsgcHJvamVjdHNBcnJheSB9IGZyb20gXCIuL25ld1Byb2plY3QuanNcIjtcblxuY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbmNvbnN0IHRvZG9Db2xvciA9IChpLCBqLCB0b2RvKSA9PiB7XG4gIGlmIChwcm9qZWN0c0FycmF5W2ldLnRvZG9zW2pdLnByaW9yaXR5ID09IFwiMVwiKSB7XG4gICAgdG9kby5zdHlsZS5ib3hTaGFkb3cgPSBcIjBweCAwcHggMTBweCA0cHggIzE0ZDEwYVwiO1xuICB9IGVsc2UgaWYgKHByb2plY3RzQXJyYXlbaV0udG9kb3Nbal0ucHJpb3JpdHkgPT0gXCIyXCIpIHtcbiAgICB0b2RvLnN0eWxlLmJveFNoYWRvdyA9IFwiMHB4IDBweCAxMHB4IDRweCAjZmFkOTAwXCI7XG4gIH0gZWxzZSBpZiAocHJvamVjdHNBcnJheVtpXS50b2Rvc1tqXS5wcmlvcml0eSA9PSBcIjNcIikge1xuICAgIHRvZG8uc3R5bGUuYm94U2hhZG93ID0gXCIwcHggMHB4IDEwcHggNHB4ICNmYTAwMGNcIjtcbiAgfVxufTtcblxuY29uc3QgcHJpb3JpdHlMZXZlbCA9IChpLCBqKSA9PiB7XG4gIGlmIChwcm9qZWN0c0FycmF5W2ldLnRvZG9zW2pdLnByaW9yaXR5ID09IFwiMVwiKSB7XG4gICAgcmV0dXJuIChwcmlvcml0eS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IExvd1wiKTtcbiAgfSBlbHNlIGlmIChwcm9qZWN0c0FycmF5W2ldLnRvZG9zW2pdLnByaW9yaXR5ID09IFwiMlwiKSB7XG4gICAgcmV0dXJuIChwcmlvcml0eS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IE1lZGl1bVwiKTtcbiAgfSBlbHNlIGlmIChwcm9qZWN0c0FycmF5W2ldLnRvZG9zW2pdLnByaW9yaXR5ID09IFwiM1wiKSB7XG4gICAgcmV0dXJuIChwcmlvcml0eS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IEhpZ2hcIik7XG4gIH1cbn07XG5cbmNvbnN0IHJlc2V0Q2hpbGROb2RlcyA9ICgpID0+IHtcbiAgd2hpbGUgKHRvZG9EaXYuZmlyc3RDaGlsZCkge1xuICAgIHRvZG9EaXYucmVtb3ZlQ2hpbGQodG9kb0Rpdi5maXJzdENoaWxkKTtcbiAgfVxufTtcblxuY29uc3QgZGlzcGxheVRvZG8gPSAoKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGZvciAobGV0IGogPSAwOyBqIDwgcHJvamVjdHNBcnJheVtpXS50b2Rvcy5sZW5ndGg7IGorKykge1xuICAgICAgY29uc3QgdG9kb09iamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgIGNvbnN0IGNvbXBsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgICAgdGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0c0FycmF5W2ldLnRvZG9zW2pdLnRpdGxlO1xuICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBwcmlvcml0eUxldmVsKGksIGopO1xuICAgICAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBwcm9qZWN0c0FycmF5W2ldLnRvZG9zW2pdLmRlc2NyaXB0aW9uO1xuICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IHByb2plY3RzQXJyYXlbaV0udG9kb3Nbal0uZHVlRGF0ZTtcbiAgICAgIG5vdGVzLnRleHRDb250ZW50ID0gcHJvamVjdHNBcnJheVtpXS50b2Rvc1tqXS5ub3RlcztcbiAgICAgIGNvbXBsZXRlLnRleHRDb250ZW50ID0gcHJvamVjdHNBcnJheVtpXS50b2Rvc1tqXS5jb21wbGV0ZTtcblxuICAgICAgZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgICAgIG5vdGVzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibm90ZXNcIik7XG5cbiAgICAgIHRvZG9Db2xvcihpLCBqLCB0b2RvT2JqZWN0KTtcblxuICAgICAgY29tcGxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgaWYgKHByb2plY3RzQXJyYXlbaV0udG9kb3Nbal0uY29tcGxldGUgPT0gXCJjb21wbGV0ZVwiKSB7XG4gICAgICAgICAgcHJvamVjdHNBcnJheVtpXS50b2Rvc1tqXS5jb21wbGV0ZSA9IFwiaW5jb21wbGV0ZVwiO1xuICAgICAgICAgIGNvbXBsZXRlLnRleHRDb250ZW50ID0gcHJvamVjdHNBcnJheVtpXS50b2Rvc1tqXS5jb21wbGV0ZTtcbiAgICAgICAgfSBlbHNlIGlmIChwcm9qZWN0c0FycmF5W2ldLnRvZG9zW2pdLmNvbXBsZXRlID09IFwiaW5jb21wbGV0ZVwiKSB7XG4gICAgICAgICAgcHJvamVjdHNBcnJheVtpXS50b2Rvc1tqXS5jb21wbGV0ZSA9IFwiY29tcGxldGVcIjtcbiAgICAgICAgICBjb21wbGV0ZS50ZXh0Q29udGVudCA9IHByb2plY3RzQXJyYXlbaV0udG9kb3Nbal0uY29tcGxldGU7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB0b2RvT2JqZWN0LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLW9iamVjdFwiKTtcblxuICAgICAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvT2JqZWN0KTtcbiAgICAgIHRvZG9PYmplY3QuYXBwZW5kQ2hpbGQodGl0bGUpO1xuICAgICAgdG9kb09iamVjdC5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICAgIHRvZG9PYmplY3QuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgICAgdG9kb09iamVjdC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICB0b2RvT2JqZWN0LmFwcGVuZENoaWxkKG5vdGVzKTtcbiAgICAgIHRvZG9PYmplY3QuYXBwZW5kQ2hpbGQoY29tcGxldGUpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IHsgZGlzcGxheVRvZG8sIHJlc2V0Q2hpbGROb2RlcywgdG9kb0RpdiB9O1xuIiwiaW1wb3J0IHsgcHJvamVjdHNEaXYgfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuXG5jb25zdCBwcm9qZWN0c0FycmF5ID0gW107XG4vLyBsZXQgcHJvamVjdFRvZG9zID0gW107XG5cbmNvbnN0IFByb2plY3QgPSAodGl0bGUsIHRvZG9zLCBhY3RpdmUpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGUsIHRvZG9zLCBhY3RpdmUgfTtcbn07XG5cbmNvbnN0IG5ld1Byb2plY3RGb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cbmNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBwcm9qZWN0VGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbmNvbnN0IHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG5uZXdQcm9qZWN0Rm9ybURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3QtZm9ybS1kaXZcIik7XG5cbnByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3QtdGl0bGUtZGl2XCIpO1xucHJvamVjdFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5wcm9qZWN0VGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwicHJvamVjdC10aXRsZVwiKTtcbnByb2plY3RUaXRsZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC10aXRsZVwiKTtcbnByb2plY3RUaXRsZUlucHV0LnBsYWNlaG9sZGVyID0gXCJOZXcgUHJvamVjdFwiO1xuXG5jb25zdCBuZXdQcm9qZWN0Rm9ybUNyZWF0ZSA9ICgpID0+IHtcbiAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm1EaXYpO1xuICBuZXdQcm9qZWN0Rm9ybURpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Rm9ybSk7XG4gIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gIHByb2plY3RUaXRsZS5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGVMYWJlbCk7XG4gIHByb2plY3RUaXRsZS5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGVJbnB1dCk7XG59O1xuXG5jb25zdCBuZXdQcm9qZWN0ID0gKCkgPT4ge1xuICBsZXQgcHJvamVjdCA9IFByb2plY3QoKTtcbiAgcHJvamVjdC50aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC10aXRsZVwiKS52YWx1ZTtcbiAgcHJvamVjdC50b2RvcyA9IFtdO1xuICBwcm9qZWN0LmFjdGl2ZSA9IGZhbHNlO1xuICBwcm9qZWN0c0FycmF5LnB1c2gocHJvamVjdCk7XG4gIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gIHByb2plY3RzRGl2LnJlbW92ZUNoaWxkKG5ld1Byb2plY3RGb3JtRGl2KTtcbiAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICBjb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5KTtcbn07XG5cbmNvbnN0IGFkZFByb2plY3QgPSAoKSA9PiB7XG4gIHByb2plY3RUaXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBuZXdQcm9qZWN0KCk7XG4gICAgICBuZXdQcm9qZWN0Rm9ybS5yZXNldCgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBzZWxlY3RQcm9qZWN0ID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtZGl2XCIpO1xuICBjb25zdCBjaGlsZHJlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtZGl2XCIpLmNoaWxkcmVuO1xuXG4gIHByb2plY3RMaXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNoaWxkcmVuW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gICAgfVxuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJwcm9qZWN0XCIpKSB7XG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBhY3RpdmVQcm9qZWN0ID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0U2VsZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1kaXZcIik7XG4gIHByb2plY3RTZWxlY3Rpb24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHByb2plY3RzQXJyYXlbaV0udGl0bGUgPT09IGUudGFyZ2V0LnRleHRDb250ZW50ICYmXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKVxuICAgICAgKSB7XG4gICAgICAgIHByb2plY3RzQXJyYXlbaV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHNBcnJheSk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBwcm9qZWN0c0FycmF5W2ldLnRpdGxlICE9PSBlLnRhcmdldC50ZXh0Q29udGVudCAmJlxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIilcbiAgICAgICkge1xuICAgICAgICBwcm9qZWN0c0FycmF5W2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQge1xuICBuZXdQcm9qZWN0Rm9ybUNyZWF0ZSxcbiAgYWRkUHJvamVjdCxcbiAgLy8gcHJvamVjdFRvZG9zLFxuICBzZWxlY3RQcm9qZWN0LFxuICBhY3RpdmVQcm9qZWN0LFxuICBwcm9qZWN0c0FycmF5LFxufTtcbiIsImNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHByb2plY3RzSGVhZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBwcm9qZWN0c1RpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHByb2plY3RzQnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxudGl0bGUudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG5hZGRQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCIrXCI7XG5cbnByb2plY3RzQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdHMtY29udGFpbmVyXCIpO1xucHJvamVjdHNIZWFkRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdHMtaGVhZC1kaXZcIik7XG5wcm9qZWN0c1RpdGxlRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdHMtdGl0bGUtZGl2XCIpO1xucHJvamVjdHNCdXR0b25EaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0cy1idXR0b24tZGl2XCIpO1xuYWRkUHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RzLWFkZC1idXR0b25cIik7XG5wcm9qZWN0c0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RzLWRpdlwiKTtcblxucHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNIZWFkRGl2KTtcbnByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RzRGl2KTtcbnByb2plY3RzSGVhZERpdi5hcHBlbmRDaGlsZChwcm9qZWN0c1RpdGxlRGl2KTtcbnByb2plY3RzSGVhZERpdi5hcHBlbmRDaGlsZChwcm9qZWN0c0J1dHRvbkRpdik7XG5wcm9qZWN0c1RpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbnByb2plY3RzQnV0dG9uRGl2LmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG4pO1xuXG5leHBvcnQgeyBwcm9qZWN0c0NvbnRhaW5lciwgYWRkUHJvamVjdEJ0biwgcHJvamVjdHNEaXYgfTtcbiIsImNvbnN0IGZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgZm9ybUhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgdGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbmNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbmNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5jb25zdCBwcmlvcml0eUxldmVsRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHByaW9yaXR5TGV2ZWxMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbmNvbnN0IHByaW9yaXR5TGV2ZWxNaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbmNvbnN0IHByaW9yaXR5TGV2ZWxIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5jb25zdCBwcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG5jb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBkZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuY29uc3QgZGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcblxuY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBkdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5jb25zdCBkdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbmNvbnN0IG5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IG5vdGVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5jb25zdCBub3Rlc0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuXG5jb25zdCBjb21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBjb21wbGV0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuY29uc3QgY29tcGxldGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuZm9ybURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvcm0tZGl2XCIpO1xuXG5mb3JtSGVhZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImZvcm0taGVhZGVyXCIpO1xuZm9ybUhlYWQudGV4dENvbnRlbnQgPSBcIkNyZWF0ZSBUby1Eb1wiO1xuXG50aXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tdGl0bGVcIik7XG50aXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInRpdGxlXCIpO1xudGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGU6XCI7XG50aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xudGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGl0bGVcIik7XG50aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGl0bGVcIik7XG5cbnByaW9yaXR5LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1wcmlvcml0eVwiKTtcbnByaW9yaXR5TGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwicHJpb3JpdHlcIik7XG5wcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gXCJQcmlvcml0eTpcIjtcbnByaW9yaXR5TGV2ZWxEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eS1sZXZlbFwiKTtcbnByaW9yaXR5TGV2ZWxMb3cudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xucHJpb3JpdHlMZXZlbExvdy5zdHlsZS50ZXh0U2hhZG93ID0gXCIycHggMnB4IDhweCAjMTRkMTBhXCI7XG5wcmlvcml0eUxldmVsTWlkLnRleHRDb250ZW50ID0gXCJNZWRpdW1cIjtcbnByaW9yaXR5TGV2ZWxNaWQuc3R5bGUudGV4dFNoYWRvdyA9IFwiMnB4IDJweCA4cHggI2ZhZDkwMFwiO1xucHJpb3JpdHlMZXZlbEhpZ2gudGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcbnByaW9yaXR5TGV2ZWxIaWdoLnN0eWxlLnRleHRTaGFkb3cgPSBcIjJweCAycHggOHB4ICNmYTAwMGNcIjtcblxucHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFuZ2VcIik7XG5wcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcmlvcml0eVwiKTtcbnByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eVwiKTtcbnByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKFwibWluXCIsIFwiMVwiKTtcbnByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKFwibWF4XCIsIFwiM1wiKTtcblxuZGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLWRlc2NyaXB0aW9uXCIpO1xuZGVzY3JpcHRpb25MYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJkZXNjcmlwdGlvblwiKTtcbmRlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOlwiO1xuZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJyb3dzXCIsIFwiNVwiKTtcbmRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwiY29sc1wiLCBcIjMzXCIpO1xuZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZGVzY3JpcHRpb25cIik7XG5kZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVzY3JpcHRpb25cIik7XG5cbmR1ZURhdGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLWR1ZS1kYXRlXCIpO1xuZHVlRGF0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImR1ZS1kYXRlXCIpO1xuZHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEdWUgRGF0ZTpcIjtcbmR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbmR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiZHVlLWRhdGVcIik7XG5kdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkdWUtZGF0ZVwiKTtcblxubm90ZXMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLW5vdGVzXCIpO1xubm90ZXNMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJub3Rlc1wiKTtcbm5vdGVzTGFiZWwudGV4dENvbnRlbnQgPSBcIk5vdGVzOlwiO1xubm90ZXNJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwibm90ZXNcIik7XG5ub3Rlc0lucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibm90ZXNcIik7XG5ub3Rlc0lucHV0LnNldEF0dHJpYnV0ZShcInJvd3NcIiwgXCI1XCIpO1xubm90ZXNJbnB1dC5zZXRBdHRyaWJ1dGUoXCJjb2xzXCIsIFwiMzNcIik7XG5cbmNvbXBsZXRlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1jaGVja2xpc3RcIik7XG5jb21wbGV0ZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImNvbXBsZXRlXCIpO1xuY29tcGxldGVMYWJlbC50ZXh0Q29udGVudCA9IFwiQ29tcGxldGVcIjtcbmNvbXBsZXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImNoZWNrYm94XCIpO1xuY29tcGxldGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwiY29tcGxldGVcIik7XG5jb21wbGV0ZUlucHV0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29tcGxldGVcIik7XG5cbnN1Ym1pdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInN1Ym1pdFwiKTtcbnN1Ym1pdC50ZXh0Q29udGVudCA9IFwic3VibWl0XCI7XG5cbmNvbnN0IGZvcm1DcmVhdGUgPSAoKSA9PiB7XG4gIGZvcm1EaXYuYXBwZW5kQ2hpbGQoZm9ybSk7XG4gIGZvcm1EaXYuYXBwZW5kQ2hpbGQoZm9ybUhlYWQpO1xuICBmb3JtLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICBmb3JtLmFwcGVuZENoaWxkKG5vdGVzKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChjb21wbGV0ZSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgdGl0bGUuYXBwZW5kQ2hpbGQodGl0bGVMYWJlbCk7XG4gIHRpdGxlLmFwcGVuZENoaWxkKHRpdGxlSW5wdXQpO1xuICBkdWVEYXRlLmFwcGVuZENoaWxkKGR1ZURhdGVMYWJlbCk7XG4gIGR1ZURhdGUuYXBwZW5kQ2hpbGQoZHVlRGF0ZUlucHV0KTtcbiAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQocHJpb3JpdHlMYWJlbCk7XG4gIHByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5TGV2ZWxEaXYpO1xuICBwcmlvcml0eUxldmVsRGl2LmFwcGVuZENoaWxkKHByaW9yaXR5TGV2ZWxMb3cpO1xuICBwcmlvcml0eUxldmVsRGl2LmFwcGVuZENoaWxkKHByaW9yaXR5TGV2ZWxNaWQpO1xuICBwcmlvcml0eUxldmVsRGl2LmFwcGVuZENoaWxkKHByaW9yaXR5TGV2ZWxIaWdoKTtcbiAgcHJpb3JpdHkuYXBwZW5kQ2hpbGQocHJpb3JpdHlJbnB1dCk7XG4gIGRlc2NyaXB0aW9uLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uTGFiZWwpO1xuICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbklucHV0KTtcbiAgbm90ZXMuYXBwZW5kQ2hpbGQobm90ZXNMYWJlbCk7XG4gIG5vdGVzLmFwcGVuZENoaWxkKG5vdGVzSW5wdXQpO1xuICBjb21wbGV0ZS5hcHBlbmRDaGlsZChjb21wbGV0ZUlucHV0KTtcbiAgY29tcGxldGUuYXBwZW5kQ2hpbGQoY29tcGxldGVMYWJlbCk7XG59O1xuXG5jb25zdCBmb3JtQ2xlYXIgPSAoKSA9PiB7XG4gIHN1Ym1pdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGZvcm0ucmVzZXQoKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgeyBmb3JtQ3JlYXRlLCBmb3JtRGl2LCBzdWJtaXQsIGNvbXBsZXRlSW5wdXQsIGZvcm1DbGVhciB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IHsgZm9ybUNyZWF0ZSwgZm9ybUNsZWFyLCBmb3JtRGl2IH0gZnJvbSBcIi4vdG9kb0Zvcm1cIjtcbmltcG9ydCB7IGNyZWF0ZVRvZG8gfSBmcm9tIFwiLi9jcmVhdGVUb2RvLmpzXCI7XG5pbXBvcnQgeyB0b2RvRGl2IH0gZnJvbSBcIi4vZGlzcGxheVRvZG8uanNcIjtcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBwcm9qZWN0c0NvbnRhaW5lciwgYWRkUHJvamVjdEJ0biB9IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5pbXBvcnQge1xuICBhY3RpdmVQcm9qZWN0LFxuICBhZGRQcm9qZWN0LFxuICBuZXdQcm9qZWN0Rm9ybUNyZWF0ZSxcbiAgc2VsZWN0UHJvamVjdCxcbn0gZnJvbSBcIi4vbmV3UHJvamVjdC5qc1wiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG50b2RvRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1kaXZcIik7XG5cbmNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9ybURpdik7XG5jb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RzQ29udGFpbmVyKTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb0Rpdik7XG5cbmZvcm1DcmVhdGUoKTtcbmFkZFByb2plY3QoKTtcbmNyZWF0ZVRvZG8oKTtcbmZvcm1DbGVhcigpO1xuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgbmV3UHJvamVjdEZvcm1DcmVhdGUpO1xuc2VsZWN0UHJvamVjdCgpO1xuYWN0aXZlUHJvamVjdCgpO1xuXG5leHBvcnQgeyBjb250ZW50IH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=