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
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody {\n  margin: 0;\n  height: 100%;\n}\n\n#content {\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-columns: 1fr 7fr;\n  grid-template-rows: 2fr 1.5fr;\n  grid-auto-flow: row;\n  background: rgb(249, 197, 3);\n  background: linear-gradient(\n    21deg,\n    rgba(249, 197, 3, 1) 0%,\n    rgba(0, 4, 4, 1) 30%,\n    rgba(0, 1, 1, 1) 70%,\n    rgba(0, 255, 192, 1) 100%\n  );\n}\n\n#form-div {\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n  border: 3px solid black;\n  border-radius: 15px;\n  margin: 10px 5px 10px 10px;\n  padding: 10px;\n  background: rgba(255, 255, 255, 0.767);\n}\n\n#projects-container {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  border: 3px solid black;\n  border-radius: 15px;\n  margin: 10px 5px 10px 10px;\n  padding: 10px;\n  background: rgba(255, 255, 255, 0.767);\n}\n\n#projects-head-div {\n  display: flex;\n  justify-content: space-between;\n  margin: -5px;\n}\n\n#projects-title-div {\n  width: 100%;\n}\n\n#projects-title-div p {\n  font-size: 28px;\n  margin: 0;\n  font-weight: 700;\n  text-align: center;\n  text-decoration: underline;\n}\n\n#projects-button-div {\n  margin-left: -15px;\n}\n\n#projects-add-button {\n  font-weight: 700;\n  height: 25px;\n  width: 25px;\n  font-size: 16px;\n}\n\n#projects-div {\n  margin: 10px 10px 2px 10px;\n  display: flex;\n  flex-direction: column;\n  height: 90%;\n  overflow-y: auto;\n}\n\n#projects-div p {\n  margin-top: 3px;\n  margin-bottom: 3px;\n  font-size: 24px;\n  cursor: pointer;\n}\n\n#project-title {\n  width: 95%;\n}\n\n#projects-div::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n\n#projects-div::-webkit-scrollbar-track {\n  background: rgba(255, 255, 255);\n  border-radius: 20px;\n  margin: 5px;\n}\n\n#projects-div::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 255, 0.664);\n  border-radius: 20px;\n  border: 2px solid rgb(255, 255, 255);\n}\n\n.active {\n  text-decoration: underline;\n  font-weight: bold;\n}\n\nform {\n  font-weight: bold;\n  font-size: 18px;\n}\n\nform #todo-title {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n}\n\nform #todo-title input {\n  height: 20px;\n}\n\nform #todo-description {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n}\n\nform #todo-due-date {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n}\n\nform #todo-due-date input {\n  height: 20px;\n}\n\nform #todo-priority {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n}\n\nform #priority-level {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: -15px;\n  font-size: 14px;\n}\nform #todo-priority label {\n  margin-bottom: -10px;\n}\n\nform #todo-notes {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n}\n\nform #todo-checklist {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 5px;\n  text-align: center;\n}\n\n#todo-div {\n  grid-column: 2 / 3;\n  grid-row: 1 / 3;\n  display: grid;\n  grid-auto-flow: row;\n  grid-template-columns: repeat(6, 1fr);\n  grid-template-rows: repeat(4, 1fr);\n  border: 3px solid black;\n  border-radius: 15px;\n  margin: 10px 10px 10px 5px;\n  padding: 10px;\n  gap: 20px;\n  background: rgba(255, 255, 255, 0.767);\n  overflow-y: auto;\n}\n\n#todo-div::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n\n#todo-div::-webkit-scrollbar-track {\n  background: rgba(255, 255, 255);\n  border-radius: 20px;\n  margin: 5px;\n}\n\n#todo-div::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 255, 0.664);\n  border-radius: 20px;\n  border: 2px solid rgb(255, 255, 255);\n}\n\n.todo-object {\n  border: 3px solid black;\n  border-radius: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  max-width: 200px;\n  height: fit-content;\n  padding: 10px;\n  background-color: white;\n}\n\n.todo-object h3 {\n  margin-bottom: -5px;\n  margin-top: -5px;\n  text-decoration: underline;\n  font-size: 24px;\n}\n\n.todo-object p {\n  margin-bottom: -5px;\n}\n\n.todo-object button {\n  border-radius: 5px;\n  width: fit-content;\n  align-self: center;\n  margin-top: 15px;\n}\n\n.todo-object #description {\n  font-style: italic;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;EAEE,SAAS;EACT,YAAY;AACd;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,6BAA6B;EAC7B,mBAAmB;EACnB,4BAA4B;EAC5B;;;;;;GAMC;AACH;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,uBAAuB;EACvB,mBAAmB;EACnB,0BAA0B;EAC1B,aAAa;EACb,sCAAsC;AACxC;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,uBAAuB;EACvB,mBAAmB;EACnB,0BAA0B;EAC1B,aAAa;EACb,sCAAsC;AACxC;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;EACf,SAAS;EACT,gBAAgB;EAChB,kBAAkB;EAClB,0BAA0B;AAC5B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,0BAA0B;EAC1B,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,eAAe;EACf,eAAe;AACjB;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,+BAA+B;EAC/B,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,wCAAwC;EACxC,mBAAmB;EACnB,oCAAoC;AACtC;;AAEA;EACE,0BAA0B;EAC1B,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,oBAAoB;EACpB,eAAe;AACjB;AACA;EACE,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,qCAAqC;EACrC,kCAAkC;EAClC,uBAAuB;EACvB,mBAAmB;EACnB,0BAA0B;EAC1B,aAAa;EACb,SAAS;EACT,sCAAsC;EACtC,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,+BAA+B;EAC/B,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,wCAAwC;EACxC,mBAAmB;EACnB,oCAAoC;AACtC;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,0BAA0B;EAC1B,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":["html,\nbody {\n  margin: 0;\n  height: 100%;\n}\n\n#content {\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-columns: 1fr 7fr;\n  grid-template-rows: 2fr 1.5fr;\n  grid-auto-flow: row;\n  background: rgb(249, 197, 3);\n  background: linear-gradient(\n    21deg,\n    rgba(249, 197, 3, 1) 0%,\n    rgba(0, 4, 4, 1) 30%,\n    rgba(0, 1, 1, 1) 70%,\n    rgba(0, 255, 192, 1) 100%\n  );\n}\n\n#form-div {\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n  border: 3px solid black;\n  border-radius: 15px;\n  margin: 10px 5px 10px 10px;\n  padding: 10px;\n  background: rgba(255, 255, 255, 0.767);\n}\n\n#projects-container {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  border: 3px solid black;\n  border-radius: 15px;\n  margin: 10px 5px 10px 10px;\n  padding: 10px;\n  background: rgba(255, 255, 255, 0.767);\n}\n\n#projects-head-div {\n  display: flex;\n  justify-content: space-between;\n  margin: -5px;\n}\n\n#projects-title-div {\n  width: 100%;\n}\n\n#projects-title-div p {\n  font-size: 28px;\n  margin: 0;\n  font-weight: 700;\n  text-align: center;\n  text-decoration: underline;\n}\n\n#projects-button-div {\n  margin-left: -15px;\n}\n\n#projects-add-button {\n  font-weight: 700;\n  height: 25px;\n  width: 25px;\n  font-size: 16px;\n}\n\n#projects-div {\n  margin: 10px 10px 2px 10px;\n  display: flex;\n  flex-direction: column;\n  height: 90%;\n  overflow-y: auto;\n}\n\n#projects-div p {\n  margin-top: 3px;\n  margin-bottom: 3px;\n  font-size: 24px;\n  cursor: pointer;\n}\n\n#project-title {\n  width: 95%;\n}\n\n#projects-div::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n\n#projects-div::-webkit-scrollbar-track {\n  background: rgba(255, 255, 255);\n  border-radius: 20px;\n  margin: 5px;\n}\n\n#projects-div::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 255, 0.664);\n  border-radius: 20px;\n  border: 2px solid rgb(255, 255, 255);\n}\n\n.active {\n  text-decoration: underline;\n  font-weight: bold;\n}\n\nform {\n  font-weight: bold;\n  font-size: 18px;\n}\n\nform #todo-title {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n}\n\nform #todo-title input {\n  height: 20px;\n}\n\nform #todo-description {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n}\n\nform #todo-due-date {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n}\n\nform #todo-due-date input {\n  height: 20px;\n}\n\nform #todo-priority {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n}\n\nform #priority-level {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: -15px;\n  font-size: 14px;\n}\nform #todo-priority label {\n  margin-bottom: -10px;\n}\n\nform #todo-notes {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n}\n\nform #todo-checklist {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 5px;\n  text-align: center;\n}\n\n#todo-div {\n  grid-column: 2 / 3;\n  grid-row: 1 / 3;\n  display: grid;\n  grid-auto-flow: row;\n  grid-template-columns: repeat(6, 1fr);\n  grid-template-rows: repeat(4, 1fr);\n  border: 3px solid black;\n  border-radius: 15px;\n  margin: 10px 10px 10px 5px;\n  padding: 10px;\n  gap: 20px;\n  background: rgba(255, 255, 255, 0.767);\n  overflow-y: auto;\n}\n\n#todo-div::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n\n#todo-div::-webkit-scrollbar-track {\n  background: rgba(255, 255, 255);\n  border-radius: 20px;\n  margin: 5px;\n}\n\n#todo-div::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 255, 0.664);\n  border-radius: 20px;\n  border: 2px solid rgb(255, 255, 255);\n}\n\n.todo-object {\n  border: 3px solid black;\n  border-radius: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  max-width: 200px;\n  height: fit-content;\n  padding: 10px;\n  background-color: white;\n}\n\n.todo-object h3 {\n  margin-bottom: -5px;\n  margin-top: -5px;\n  text-decoration: underline;\n  font-size: 24px;\n}\n\n.todo-object p {\n  margin-bottom: -5px;\n}\n\n.todo-object button {\n  border-radius: 5px;\n  width: fit-content;\n  align-self: center;\n  margin-top: 15px;\n}\n\n.todo-object #description {\n  font-style: italic;\n}\n"],"sourceRoot":""}]);
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
  _newProject_js__WEBPACK_IMPORTED_MODULE_2__.projectTodos.push(todo);
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

const todoColor = (i, todo) => {
  if (_newProject_js__WEBPACK_IMPORTED_MODULE_0__.projectTodos[i].priority == "1") {
    todo.style.boxShadow = "0px 0px 10px 4px #14d10a";
  } else if (_newProject_js__WEBPACK_IMPORTED_MODULE_0__.projectTodos[i].priority == "2") {
    todo.style.boxShadow = "0px 0px 10px 4px #fad900";
  } else if (_newProject_js__WEBPACK_IMPORTED_MODULE_0__.projectTodos[i].priority == "3") {
    todo.style.boxShadow = "0px 0px 10px 4px #fa000c";
  }
};

const priorityLevel = (i) => {
  if (_newProject_js__WEBPACK_IMPORTED_MODULE_0__.projectTodos[i].priority == "1") {
    return (priority.textContent = "Priority: Low");
  } else if (_newProject_js__WEBPACK_IMPORTED_MODULE_0__.projectTodos[i].priority == "2") {
    return (priority.textContent = "Priority: Medium");
  } else if (_newProject_js__WEBPACK_IMPORTED_MODULE_0__.projectTodos[i].priority == "3") {
    return (priority.textContent = "Priority: High");
  }
};

const resetChildNodes = () => {
  while (todoDiv.firstChild) {
    todoDiv.removeChild(todoDiv.firstChild);
  }
};

const displayTodo = () => {
  for (let i = 0; i < _newProject_js__WEBPACK_IMPORTED_MODULE_0__.projectTodos.length; i++) {
    const todoObject = document.createElement("div");
    const title = document.createElement("h3");
    const priority = document.createElement("p");
    const description = document.createElement("p");
    const dueDate = document.createElement("p");
    const notes = document.createElement("p");
    const complete = document.createElement("button");

    title.textContent = _newProject_js__WEBPACK_IMPORTED_MODULE_0__.projectTodos[i].title;
    priority.textContent = priorityLevel(i);
    description.textContent = _newProject_js__WEBPACK_IMPORTED_MODULE_0__.projectTodos[i].description;
    dueDate.textContent = _newProject_js__WEBPACK_IMPORTED_MODULE_0__.projectTodos[i].dueDate;
    notes.textContent = _newProject_js__WEBPACK_IMPORTED_MODULE_0__.projectTodos[i].notes;
    complete.textContent = _newProject_js__WEBPACK_IMPORTED_MODULE_0__.projectTodos[i].complete;

    description.setAttribute("id", "description");
    notes.setAttribute("id", "notes");

    todoColor(i, todoObject);

    complete.addEventListener("click", () => {
      if (_newProject_js__WEBPACK_IMPORTED_MODULE_0__.projectTodos[i].complete == "complete") {
        _newProject_js__WEBPACK_IMPORTED_MODULE_0__.projectTodos[i].complete = "incomplete";
        complete.textContent = _newProject_js__WEBPACK_IMPORTED_MODULE_0__.projectTodos[i].complete;
      } else if (_newProject_js__WEBPACK_IMPORTED_MODULE_0__.projectTodos[i].complete == "incomplete") {
        _newProject_js__WEBPACK_IMPORTED_MODULE_0__.projectTodos[i].complete = "complete";
        complete.textContent = _newProject_js__WEBPACK_IMPORTED_MODULE_0__.projectTodos[i].complete;
      }
      console.log(_newProject_js__WEBPACK_IMPORTED_MODULE_0__.projectTodos);
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
  console.log(_newProject_js__WEBPACK_IMPORTED_MODULE_0__.projectTodos);
};




/***/ }),

/***/ "./src/newProject.js":
/*!***************************!*\
  !*** ./src/newProject.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addProject": () => (/* binding */ addProject),
/* harmony export */   "newProjectFormCreate": () => (/* binding */ newProjectFormCreate),
/* harmony export */   "projectTodos": () => (/* binding */ projectTodos),
/* harmony export */   "selectProject": () => (/* binding */ selectProject)
/* harmony export */ });
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");


const projectsArray = [];
let projectTodos = [];

const Project = (title, todos) => {
  return { title, todos };
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
  project.todos = projectTodos;
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
  let projectList = document.getElementById("projects-div");
  let children = document.getElementById("projects-div").children;

  projectList.addEventListener("click", (e) => {
    for (let i = 0; i < children.length; i++) {
      children[i].classList.remove("active");
    }
    if (e.target.classList.contains("project")) {
      e.target.classList.add("active");
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



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFeUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckV6RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRXlEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekJ6RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVpRTs7Ozs7OztVQzdIakU7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTREO0FBQ2Y7QUFDRjtBQUN0QjtBQUM0QztBQUt4Qzs7QUFFekI7O0FBRUEsaUVBQW9COztBQUVwQixvQkFBb0IsOENBQU87QUFDM0Isb0JBQW9CLDJEQUFpQjtBQUNyQyxvQkFBb0Isb0RBQU87O0FBRTNCLHFEQUFVO0FBQ1YsMERBQVU7QUFDViwwREFBVTtBQUNWLG9EQUFTO0FBQ1Qsd0VBQThCLFVBQVUsZ0VBQW9CO0FBQzVELDZEQUFhOztBQUVNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NyZWF0ZVRvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9kaXNwbGF5VG9kby5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL25ld1Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3RvZG9Gb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sLFxcbmJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDdmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDEuNWZyO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gIGJhY2tncm91bmQ6IHJnYigyNDksIDE5NywgMyk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDIxZGVnLFxcbiAgICByZ2JhKDI0OSwgMTk3LCAzLCAxKSAwJSxcXG4gICAgcmdiYSgwLCA0LCA0LCAxKSAzMCUsXFxuICAgIHJnYmEoMCwgMSwgMSwgMSkgNzAlLFxcbiAgICByZ2JhKDAsIDI1NSwgMTkyLCAxKSAxMDAlXFxuICApO1xcbn1cXG5cXG4jZm9ybS1kaXYge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgbWFyZ2luOiAxMHB4IDVweCAxMHB4IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc2Nyk7XFxufVxcblxcbiNwcm9qZWN0cy1jb250YWluZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDIgLyAzO1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgbWFyZ2luOiAxMHB4IDVweCAxMHB4IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc2Nyk7XFxufVxcblxcbiNwcm9qZWN0cy1oZWFkLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luOiAtNXB4O1xcbn1cXG5cXG4jcHJvamVjdHMtdGl0bGUtZGl2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jcHJvamVjdHMtdGl0bGUtZGl2IHAge1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4jcHJvamVjdHMtYnV0dG9uLWRpdiB7XFxuICBtYXJnaW4tbGVmdDogLTE1cHg7XFxufVxcblxcbiNwcm9qZWN0cy1hZGQtYnV0dG9uIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMjVweDtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuI3Byb2plY3RzLWRpdiB7XFxuICBtYXJnaW46IDEwcHggMTBweCAycHggMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4jcHJvamVjdHMtZGl2IHAge1xcbiAgbWFyZ2luLXRvcDogM3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogM3B4O1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jcHJvamVjdC10aXRsZSB7XFxuICB3aWR0aDogOTUlO1xcbn1cXG5cXG4jcHJvamVjdHMtZGl2Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMTBweDtcXG4gIGhlaWdodDogMTBweDtcXG59XFxuXFxuI3Byb2plY3RzLWRpdjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBtYXJnaW46IDVweDtcXG59XFxuXFxuI3Byb2plY3RzLWRpdjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuNjY0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcblxcbi5hY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuZm9ybSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuZm9ybSAjdG9kby10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuZm9ybSAjdG9kby10aXRsZSBpbnB1dCB7XFxuICBoZWlnaHQ6IDIwcHg7XFxufVxcblxcbmZvcm0gI3RvZG8tZGVzY3JpcHRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbmZvcm0gI3RvZG8tZHVlLWRhdGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbmZvcm0gI3RvZG8tZHVlLWRhdGUgaW5wdXQge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG5mb3JtICN0b2RvLXByaW9yaXR5IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5mb3JtICNwcmlvcml0eS1sZXZlbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLWJvdHRvbTogLTE1cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbmZvcm0gI3RvZG8tcHJpb3JpdHkgbGFiZWwge1xcbiAgbWFyZ2luLWJvdHRvbTogLTEwcHg7XFxufVxcblxcbmZvcm0gI3RvZG8tbm90ZXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbmZvcm0gI3RvZG8tY2hlY2tsaXN0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nOiA1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiN0b2RvLWRpdiB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMSAvIDM7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDYsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpO1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgbWFyZ2luOiAxMHB4IDEwcHggMTBweCA1cHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZ2FwOiAyMHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjc2Nyk7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4jdG9kby1kaXY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbn1cXG5cXG4jdG9kby1kaXY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgbWFyZ2luOiA1cHg7XFxufVxcblxcbiN0b2RvLWRpdjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuNjY0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcblxcbi50b2RvLW9iamVjdCB7XFxuICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBsZWZ0O1xcbiAgbWF4LXdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbi50b2RvLW9iamVjdCBoMyB7XFxuICBtYXJnaW4tYm90dG9tOiAtNXB4O1xcbiAgbWFyZ2luLXRvcDogLTVweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbn1cXG5cXG4udG9kby1vYmplY3QgcCB7XFxuICBtYXJnaW4tYm90dG9tOiAtNXB4O1xcbn1cXG5cXG4udG9kby1vYmplY3QgYnV0dG9uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxufVxcblxcbi50b2RvLW9iamVjdCAjZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFLFNBQVM7RUFDVCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQiw0QkFBNEI7RUFDNUI7Ozs7OztHQU1DO0FBQ0g7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixzQ0FBc0M7QUFDeEM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFdBQVc7RUFDWCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsbUJBQW1CO0VBQ25CLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHFDQUFxQztFQUNyQyxrQ0FBa0M7RUFDbEMsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLFNBQVM7RUFDVCxzQ0FBc0M7RUFDdEMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLG1CQUFtQjtFQUNuQixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCxcXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA3ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxLjVmcjtcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjQ5LCAxOTcsIDMpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICAyMWRlZyxcXG4gICAgcmdiYSgyNDksIDE5NywgMywgMSkgMCUsXFxuICAgIHJnYmEoMCwgNCwgNCwgMSkgMzAlLFxcbiAgICByZ2JhKDAsIDEsIDEsIDEpIDcwJSxcXG4gICAgcmdiYSgwLCAyNTUsIDE5MiwgMSkgMTAwJVxcbiAgKTtcXG59XFxuXFxuI2Zvcm0tZGl2IHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIG1hcmdpbjogMTBweCA1cHggMTBweCAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NjcpO1xcbn1cXG5cXG4jcHJvamVjdHMtY29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIG1hcmdpbjogMTBweCA1cHggMTBweCAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NjcpO1xcbn1cXG5cXG4jcHJvamVjdHMtaGVhZC1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbjogLTVweDtcXG59XFxuXFxuI3Byb2plY3RzLXRpdGxlLWRpdiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3Byb2plY3RzLXRpdGxlLWRpdiBwIHtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuI3Byb2plY3RzLWJ1dHRvbi1kaXYge1xcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xcbn1cXG5cXG4jcHJvamVjdHMtYWRkLWJ1dHRvbiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbiNwcm9qZWN0cy1kaXYge1xcbiAgbWFyZ2luOiAxMHB4IDEwcHggMnB4IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogOTAlO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuI3Byb2plY3RzLWRpdiBwIHtcXG4gIG1hcmdpbi10b3A6IDNweDtcXG4gIG1hcmdpbi1ib3R0b206IDNweDtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3Byb2plY3QtdGl0bGUge1xcbiAgd2lkdGg6IDk1JTtcXG59XFxuXFxuI3Byb2plY3RzLWRpdjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDEwcHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxufVxcblxcbiNwcm9qZWN0cy1kaXY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgbWFyZ2luOiA1cHg7XFxufVxcblxcbiNwcm9qZWN0cy1kaXY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjY2NCk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbmZvcm0ge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbmZvcm0gI3RvZG8tdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbmZvcm0gI3RvZG8tdGl0bGUgaW5wdXQge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG5mb3JtICN0b2RvLWRlc2NyaXB0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5mb3JtICN0b2RvLWR1ZS1kYXRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5mb3JtICN0b2RvLWR1ZS1kYXRlIGlucHV0IHtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuZm9ybSAjdG9kby1wcmlvcml0eSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuZm9ybSAjcHJpb3JpdHktbGV2ZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1ib3R0b206IC0xNXB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5mb3JtICN0b2RvLXByaW9yaXR5IGxhYmVsIHtcXG4gIG1hcmdpbi1ib3R0b206IC0xMHB4O1xcbn1cXG5cXG5mb3JtICN0b2RvLW5vdGVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5mb3JtICN0b2RvLWNoZWNrbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jdG9kby1kaXYge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIG1hcmdpbjogMTBweCAxMHB4IDEwcHggNXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGdhcDogMjBweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NjcpO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuI3RvZG8tZGl2Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMTBweDtcXG4gIGhlaWdodDogMTBweDtcXG59XFxuXFxuI3RvZG8tZGl2Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4jdG9kby1kaXY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjY2NCk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG5cXG4udG9kby1vYmplY3Qge1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogbGVmdDtcXG4gIG1heC13aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udG9kby1vYmplY3QgaDMge1xcbiAgbWFyZ2luLWJvdHRvbTogLTVweDtcXG4gIG1hcmdpbi10b3A6IC01cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLnRvZG8tb2JqZWN0IHAge1xcbiAgbWFyZ2luLWJvdHRvbTogLTVweDtcXG59XFxuXFxuLnRvZG8tb2JqZWN0IGJ1dHRvbiB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5cXG4udG9kby1vYmplY3QgI2Rlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHN1Ym1pdCwgY29tcGxldGVJbnB1dCB9IGZyb20gXCIuL3RvZG9Gb3JtLmpzXCI7XG5pbXBvcnQgeyBkaXNwbGF5VG9kbywgcmVzZXRDaGlsZE5vZGVzIH0gZnJvbSBcIi4vZGlzcGxheVRvZG8uanNcIjtcbmltcG9ydCB7IHByb2plY3RUb2RvcyB9IGZyb20gXCIuL25ld1Byb2plY3QuanNcIjtcblxuY29uc3QgVG9kbyA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgY29tcGxldGUpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcmlvcml0eSwgbm90ZXMsIGNvbXBsZXRlIH07XG59O1xuXG5jb25zdCBjb21wbGV0ZVZhbHVlID0gKHRvZG8pID0+IHtcbiAgaWYgKGNvbXBsZXRlSW5wdXQuY2hlY2tlZCkge1xuICAgIHJldHVybiAodG9kby5jb21wbGV0ZSA9IFwiY29tcGxldGVcIik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICh0b2RvLmNvbXBsZXRlID0gXCJpbmNvbXBsZXRlXCIpO1xuICB9XG59O1xuXG5jb25zdCBuZXdUb2RvID0gKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGxldCB0b2RvID0gVG9kbygpO1xuICB0b2RvLnRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS52YWx1ZTtcbiAgdG9kby5kZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIikudmFsdWU7XG4gIHRvZG8uZHVlRGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZHVlLWRhdGVcIikudmFsdWU7XG4gIHRvZG8ucHJpb3JpdHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByaW9yaXR5XCIpLnZhbHVlO1xuICB0b2RvLm5vdGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJub3Rlc1wiKS52YWx1ZTtcbiAgdG9kby5jb21wbGV0ZSA9IGNvbXBsZXRlVmFsdWUodG9kbyk7XG4gIHByb2plY3RUb2Rvcy5wdXNoKHRvZG8pO1xufTtcblxuY29uc3QgY3JlYXRlVG9kbyA9ICgpID0+IHtcbiAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXNldENoaWxkTm9kZXMpO1xuICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5ld1RvZG8pO1xuICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlUb2RvKTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZVRvZG8gfTtcbiIsImltcG9ydCB7IHByb2plY3RUb2RvcyB9IGZyb20gXCIuL25ld1Byb2plY3QuanNcIjtcblxuY29uc3QgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbmNvbnN0IHRvZG9Db2xvciA9IChpLCB0b2RvKSA9PiB7XG4gIGlmIChwcm9qZWN0VG9kb3NbaV0ucHJpb3JpdHkgPT0gXCIxXCIpIHtcbiAgICB0b2RvLnN0eWxlLmJveFNoYWRvdyA9IFwiMHB4IDBweCAxMHB4IDRweCAjMTRkMTBhXCI7XG4gIH0gZWxzZSBpZiAocHJvamVjdFRvZG9zW2ldLnByaW9yaXR5ID09IFwiMlwiKSB7XG4gICAgdG9kby5zdHlsZS5ib3hTaGFkb3cgPSBcIjBweCAwcHggMTBweCA0cHggI2ZhZDkwMFwiO1xuICB9IGVsc2UgaWYgKHByb2plY3RUb2Rvc1tpXS5wcmlvcml0eSA9PSBcIjNcIikge1xuICAgIHRvZG8uc3R5bGUuYm94U2hhZG93ID0gXCIwcHggMHB4IDEwcHggNHB4ICNmYTAwMGNcIjtcbiAgfVxufTtcblxuY29uc3QgcHJpb3JpdHlMZXZlbCA9IChpKSA9PiB7XG4gIGlmIChwcm9qZWN0VG9kb3NbaV0ucHJpb3JpdHkgPT0gXCIxXCIpIHtcbiAgICByZXR1cm4gKHByaW9yaXR5LnRleHRDb250ZW50ID0gXCJQcmlvcml0eTogTG93XCIpO1xuICB9IGVsc2UgaWYgKHByb2plY3RUb2Rvc1tpXS5wcmlvcml0eSA9PSBcIjJcIikge1xuICAgIHJldHVybiAocHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBNZWRpdW1cIik7XG4gIH0gZWxzZSBpZiAocHJvamVjdFRvZG9zW2ldLnByaW9yaXR5ID09IFwiM1wiKSB7XG4gICAgcmV0dXJuIChwcmlvcml0eS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IEhpZ2hcIik7XG4gIH1cbn07XG5cbmNvbnN0IHJlc2V0Q2hpbGROb2RlcyA9ICgpID0+IHtcbiAgd2hpbGUgKHRvZG9EaXYuZmlyc3RDaGlsZCkge1xuICAgIHRvZG9EaXYucmVtb3ZlQ2hpbGQodG9kb0Rpdi5maXJzdENoaWxkKTtcbiAgfVxufTtcblxuY29uc3QgZGlzcGxheVRvZG8gPSAoKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdFRvZG9zLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgdG9kb09iamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBjb25zdCBub3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IGNvbXBsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAgIHRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdFRvZG9zW2ldLnRpdGxlO1xuICAgIHByaW9yaXR5LnRleHRDb250ZW50ID0gcHJpb3JpdHlMZXZlbChpKTtcbiAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHByb2plY3RUb2Rvc1tpXS5kZXNjcmlwdGlvbjtcbiAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gcHJvamVjdFRvZG9zW2ldLmR1ZURhdGU7XG4gICAgbm90ZXMudGV4dENvbnRlbnQgPSBwcm9qZWN0VG9kb3NbaV0ubm90ZXM7XG4gICAgY29tcGxldGUudGV4dENvbnRlbnQgPSBwcm9qZWN0VG9kb3NbaV0uY29tcGxldGU7XG5cbiAgICBkZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICAgIG5vdGVzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibm90ZXNcIik7XG5cbiAgICB0b2RvQ29sb3IoaSwgdG9kb09iamVjdCk7XG5cbiAgICBjb21wbGV0ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgaWYgKHByb2plY3RUb2Rvc1tpXS5jb21wbGV0ZSA9PSBcImNvbXBsZXRlXCIpIHtcbiAgICAgICAgcHJvamVjdFRvZG9zW2ldLmNvbXBsZXRlID0gXCJpbmNvbXBsZXRlXCI7XG4gICAgICAgIGNvbXBsZXRlLnRleHRDb250ZW50ID0gcHJvamVjdFRvZG9zW2ldLmNvbXBsZXRlO1xuICAgICAgfSBlbHNlIGlmIChwcm9qZWN0VG9kb3NbaV0uY29tcGxldGUgPT0gXCJpbmNvbXBsZXRlXCIpIHtcbiAgICAgICAgcHJvamVjdFRvZG9zW2ldLmNvbXBsZXRlID0gXCJjb21wbGV0ZVwiO1xuICAgICAgICBjb21wbGV0ZS50ZXh0Q29udGVudCA9IHByb2plY3RUb2Rvc1tpXS5jb21wbGV0ZTtcbiAgICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKHByb2plY3RUb2Rvcyk7XG4gICAgfSk7XG5cbiAgICB0b2RvT2JqZWN0LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLW9iamVjdFwiKTtcblxuICAgIHRvZG9EaXYuYXBwZW5kQ2hpbGQodG9kb09iamVjdCk7XG4gICAgdG9kb09iamVjdC5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgdG9kb09iamVjdC5hcHBlbmRDaGlsZChkdWVEYXRlKTtcbiAgICB0b2RvT2JqZWN0LmFwcGVuZENoaWxkKHByaW9yaXR5KTtcbiAgICB0b2RvT2JqZWN0LmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgICB0b2RvT2JqZWN0LmFwcGVuZENoaWxkKG5vdGVzKTtcbiAgICB0b2RvT2JqZWN0LmFwcGVuZENoaWxkKGNvbXBsZXRlKTtcbiAgfVxuICBjb25zb2xlLmxvZyhwcm9qZWN0VG9kb3MpO1xufTtcblxuZXhwb3J0IHsgZGlzcGxheVRvZG8sIHJlc2V0Q2hpbGROb2RlcywgdG9kb0RpdiB9O1xuIiwiaW1wb3J0IHsgcHJvamVjdHNEaXYgfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuXG5jb25zdCBwcm9qZWN0c0FycmF5ID0gW107XG5sZXQgcHJvamVjdFRvZG9zID0gW107XG5cbmNvbnN0IFByb2plY3QgPSAodGl0bGUsIHRvZG9zKSA9PiB7XG4gIHJldHVybiB7IHRpdGxlLCB0b2RvcyB9O1xufTtcblxuY29uc3QgbmV3UHJvamVjdEZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcblxuY29uc3QgcHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHByb2plY3RUaXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuY29uc3QgcHJvamVjdFRpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbm5ld1Byb2plY3RGb3JtRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC1mb3JtLWRpdlwiKTtcblxucHJvamVjdFRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC10aXRsZS1kaXZcIik7XG5wcm9qZWN0VGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbnByb2plY3RUaXRsZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcm9qZWN0LXRpdGxlXCIpO1xucHJvamVjdFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0LXRpdGxlXCIpO1xucHJvamVjdFRpdGxlSW5wdXQucGxhY2Vob2xkZXIgPSBcIk5ldyBQcm9qZWN0XCI7XG5cbmNvbnN0IG5ld1Byb2plY3RGb3JtQ3JlYXRlID0gKCkgPT4ge1xuICBwcm9qZWN0c0Rpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Rm9ybURpdik7XG4gIG5ld1Byb2plY3RGb3JtRGl2LmFwcGVuZENoaWxkKG5ld1Byb2plY3RGb3JtKTtcbiAgbmV3UHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlKTtcbiAgcHJvamVjdFRpdGxlLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZUxhYmVsKTtcbiAgcHJvamVjdFRpdGxlLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZUlucHV0KTtcbn07XG5cbmNvbnN0IG5ld1Byb2plY3QgPSAoKSA9PiB7XG4gIGxldCBwcm9qZWN0ID0gUHJvamVjdCgpO1xuICBwcm9qZWN0LnRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LXRpdGxlXCIpLnZhbHVlO1xuICBwcm9qZWN0LnRvZG9zID0gcHJvamVjdFRvZG9zO1xuICBwcm9qZWN0c0FycmF5LnB1c2gocHJvamVjdCk7XG4gIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIHByb2plY3ROYW1lLnRleHRDb250ZW50ID0gcHJvamVjdC50aXRsZTtcbiAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gIHByb2plY3RzRGl2LnJlbW92ZUNoaWxkKG5ld1Byb2plY3RGb3JtRGl2KTtcbiAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICBjb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5KTtcbn07XG5cbmNvbnN0IGFkZFByb2plY3QgPSAoKSA9PiB7XG4gIHByb2plY3RUaXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBuZXdQcm9qZWN0KCk7XG4gICAgICBuZXdQcm9qZWN0Rm9ybS5yZXNldCgpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBzZWxlY3RQcm9qZWN0ID0gKCkgPT4ge1xuICBsZXQgcHJvamVjdExpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLWRpdlwiKTtcbiAgbGV0IGNoaWxkcmVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1kaXZcIikuY2hpbGRyZW47XG5cbiAgcHJvamVjdExpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgY2hpbGRyZW5baV0uY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgICB9XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcInByb2plY3RcIikpIHtcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCB7IG5ld1Byb2plY3RGb3JtQ3JlYXRlLCBhZGRQcm9qZWN0LCBwcm9qZWN0VG9kb3MsIHNlbGVjdFByb2plY3QgfTtcbiIsImNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHByb2plY3RzSGVhZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBwcm9qZWN0c1RpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHByb2plY3RzQnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxudGl0bGUudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG5hZGRQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCIrXCI7XG5cbnByb2plY3RzQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdHMtY29udGFpbmVyXCIpO1xucHJvamVjdHNIZWFkRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdHMtaGVhZC1kaXZcIik7XG5wcm9qZWN0c1RpdGxlRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdHMtdGl0bGUtZGl2XCIpO1xucHJvamVjdHNCdXR0b25EaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0cy1idXR0b24tZGl2XCIpO1xuYWRkUHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RzLWFkZC1idXR0b25cIik7XG5wcm9qZWN0c0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RzLWRpdlwiKTtcblxucHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNIZWFkRGl2KTtcbnByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RzRGl2KTtcbnByb2plY3RzSGVhZERpdi5hcHBlbmRDaGlsZChwcm9qZWN0c1RpdGxlRGl2KTtcbnByb2plY3RzSGVhZERpdi5hcHBlbmRDaGlsZChwcm9qZWN0c0J1dHRvbkRpdik7XG5wcm9qZWN0c1RpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbnByb2plY3RzQnV0dG9uRGl2LmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG4pO1xuXG5leHBvcnQgeyBwcm9qZWN0c0NvbnRhaW5lciwgYWRkUHJvamVjdEJ0biwgcHJvamVjdHNEaXYgfTtcbiIsImNvbnN0IGZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbmNvbnN0IHByaW9yaXR5TGV2ZWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgcHJpb3JpdHlMZXZlbExvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuY29uc3QgcHJpb3JpdHlMZXZlbE1pZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuY29uc3QgcHJpb3JpdHlMZXZlbEhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbmNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5jb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuXG5jb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbmNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3Qgbm90ZXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbmNvbnN0IG5vdGVzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG5cbmNvbnN0IGNvbXBsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IGNvbXBsZXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5jb25zdCBjb21wbGV0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG5jb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG5mb3JtRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9ybS1kaXZcIik7XG5cbnRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby10aXRsZVwiKTtcbnRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGl0bGVcIik7XG50aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZTpcIjtcbnRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG50aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aXRsZVwiKTtcbnRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aXRsZVwiKTtcblxucHJpb3JpdHkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLXByaW9yaXR5XCIpO1xucHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcmlvcml0eVwiKTtcbnByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OlwiO1xucHJpb3JpdHlMZXZlbERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5LWxldmVsXCIpO1xucHJpb3JpdHlMZXZlbExvdy50ZXh0Q29udGVudCA9IFwiTG93XCI7XG5wcmlvcml0eUxldmVsTG93LnN0eWxlLnRleHRTaGFkb3cgPSBcIjJweCAycHggOHB4ICMxNGQxMGFcIjtcbnByaW9yaXR5TGV2ZWxNaWQudGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xucHJpb3JpdHlMZXZlbE1pZC5zdHlsZS50ZXh0U2hhZG93ID0gXCIycHggMnB4IDhweCAjZmFkOTAwXCI7XG5wcmlvcml0eUxldmVsSGlnaC50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xucHJpb3JpdHlMZXZlbEhpZ2guc3R5bGUudGV4dFNoYWRvdyA9IFwiMnB4IDJweCA4cHggI2ZhMDAwY1wiO1xuXG5wcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYW5nZVwiKTtcbnByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpO1xucHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5XCIpO1xucHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgXCIxXCIpO1xucHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhcIiwgXCIzXCIpO1xuXG5kZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tZGVzY3JpcHRpb25cIik7XG5kZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRlc2NyaXB0aW9uXCIpO1xuZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246XCI7XG5kZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcInJvd3NcIiwgXCI1XCIpO1xuZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJjb2xzXCIsIFwiMzNcIik7XG5kZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkZXNjcmlwdGlvblwiKTtcbmRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZXNjcmlwdGlvblwiKTtcblxuZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tZHVlLWRhdGVcIik7XG5kdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZHVlLWRhdGVcIik7XG5kdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlOlwiO1xuZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkdWUtZGF0ZVwiKTtcbmR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImR1ZS1kYXRlXCIpO1xuXG5ub3Rlcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tbm90ZXNcIik7XG5ub3Rlc0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm5vdGVzXCIpO1xubm90ZXNMYWJlbC50ZXh0Q29udGVudCA9IFwiTm90ZXM6XCI7XG5ub3Rlc0lucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJub3Rlc1wiKTtcbm5vdGVzSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJub3Rlc1wiKTtcbm5vdGVzSW5wdXQuc2V0QXR0cmlidXRlKFwicm93c1wiLCBcIjVcIik7XG5ub3Rlc0lucHV0LnNldEF0dHJpYnV0ZShcImNvbHNcIiwgXCIzM1wiKTtcblxuY29tcGxldGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLWNoZWNrbGlzdFwiKTtcbmNvbXBsZXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiY29tcGxldGVcIik7XG5jb21wbGV0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJDb21wbGV0ZVwiO1xuY29tcGxldGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG5jb21wbGV0ZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJjb21wbGV0ZVwiKTtcbmNvbXBsZXRlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb21wbGV0ZVwiKTtcblxuc3VibWl0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3VibWl0XCIpO1xuc3VibWl0LnRleHRDb250ZW50ID0gXCJzdWJtaXRcIjtcblxuY29uc3QgZm9ybUNyZWF0ZSA9ICgpID0+IHtcbiAgZm9ybURpdi5hcHBlbmRDaGlsZChmb3JtKTtcbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChub3Rlcyk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoY29tcGxldGUpO1xuICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gIHRpdGxlLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICB0aXRsZS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgZHVlRGF0ZS5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpO1xuICBkdWVEYXRlLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XG4gIHByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICBwcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvcml0eUxldmVsRGl2KTtcbiAgcHJpb3JpdHlMZXZlbERpdi5hcHBlbmRDaGlsZChwcmlvcml0eUxldmVsTG93KTtcbiAgcHJpb3JpdHlMZXZlbERpdi5hcHBlbmRDaGlsZChwcmlvcml0eUxldmVsTWlkKTtcbiAgcHJpb3JpdHlMZXZlbERpdi5hcHBlbmRDaGlsZChwcmlvcml0eUxldmVsSGlnaCk7XG4gIHByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xuICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcbiAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG4gIG5vdGVzLmFwcGVuZENoaWxkKG5vdGVzTGFiZWwpO1xuICBub3Rlcy5hcHBlbmRDaGlsZChub3Rlc0lucHV0KTtcbiAgY29tcGxldGUuYXBwZW5kQ2hpbGQoY29tcGxldGVJbnB1dCk7XG4gIGNvbXBsZXRlLmFwcGVuZENoaWxkKGNvbXBsZXRlTGFiZWwpO1xufTtcblxuY29uc3QgZm9ybUNsZWFyID0gKCkgPT4ge1xuICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBmb3JtLnJlc2V0KCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgZm9ybUNyZWF0ZSwgZm9ybURpdiwgc3VibWl0LCBjb21wbGV0ZUlucHV0LCBmb3JtQ2xlYXIgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGZvcm1DcmVhdGUsIGZvcm1DbGVhciwgZm9ybURpdiB9IGZyb20gXCIuL3RvZG9Gb3JtXCI7XG5pbXBvcnQgeyBjcmVhdGVUb2RvIH0gZnJvbSBcIi4vY3JlYXRlVG9kby5qc1wiO1xuaW1wb3J0IHsgdG9kb0RpdiB9IGZyb20gXCIuL2Rpc3BsYXlUb2RvLmpzXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgcHJvamVjdHNDb250YWluZXIsIGFkZFByb2plY3RCdG4gfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuaW1wb3J0IHtcbiAgYWRkUHJvamVjdCxcbiAgbmV3UHJvamVjdEZvcm1DcmVhdGUsXG4gIHNlbGVjdFByb2plY3QsXG59IGZyb20gXCIuL25ld1Byb2plY3QuanNcIjtcblxuY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcblxudG9kb0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tZGl2XCIpO1xuXG5jb250ZW50LmFwcGVuZENoaWxkKGZvcm1EaXYpO1xuY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0c0NvbnRhaW5lcik7XG5jb250ZW50LmFwcGVuZENoaWxkKHRvZG9EaXYpO1xuXG5mb3JtQ3JlYXRlKCk7XG5hZGRQcm9qZWN0KCk7XG5jcmVhdGVUb2RvKCk7XG5mb3JtQ2xlYXIoKTtcbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5ld1Byb2plY3RGb3JtQ3JlYXRlKTtcbnNlbGVjdFByb2plY3QoKTtcblxuZXhwb3J0IHsgY29udGVudCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9