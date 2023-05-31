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
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody {\n  margin: 0;\n  height: 100%;\n}\n\n#content {\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-columns: 1fr 7fr;\n  grid-template-rows: 2fr 1.5fr;\n  grid-auto-flow: row;\n  background: rgb(249, 197, 3);\n  background: linear-gradient(\n    21deg,\n    rgba(249, 197, 3, 1) 0%,\n    rgba(0, 4, 4, 1) 30%,\n    rgba(0, 1, 1, 1) 70%,\n    rgba(0, 255, 192, 1) 100%\n  );\n}\n\n#form-div {\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n  border: 3px solid black;\n  border-radius: 15px;\n  margin: 10px 5px 10px 10px;\n  padding: 10px;\n  background: rgba(255, 255, 255, 0.767);\n}\n\n#projects-container {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  border: 3px solid black;\n  border-radius: 15px;\n  margin: 10px 5px 10px 10px;\n  padding: 10px;\n  background: rgba(255, 255, 255, 0.767);\n}\n\n#projects-head-div {\n  display: flex;\n  justify-content: space-between;\n  margin: -5px;\n}\n\n#projects-title-div {\n  width: 100%;\n}\n\n#projects-title-div p {\n  font-size: 28px;\n  margin: 0;\n  font-weight: 700;\n  text-align: center;\n  text-decoration: underline;\n}\n\n#projects-button-div {\n  margin-left: -15px;\n}\n\n#projects-add-button {\n  font-weight: 700;\n  height: 25px;\n  width: 25px;\n  font-size: 16px;\n}\n\n#projects-div {\n  border: 1px solid black;\n  margin: 2px;\n  display: flex;\n  flex-direction: column;\n  height: 90%;\n  overflow-y: auto;\n}\n\n#projects-div::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n\n#projects-div::-webkit-scrollbar-track {\n  background: rgba(255, 255, 255);\n  border-radius: 20px;\n  margin: 5px;\n}\n\n#projects-div::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 255, 0.664);\n  border-radius: 20px;\n  border: 2px solid rgb(255, 255, 255);\n}\n\nform {\n  font-weight: bold;\n  font-size: 18px;\n}\n\nform #todo-title {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n}\n\nform #todo-title input {\n  height: 20px;\n}\n\nform #todo-description {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n}\n\nform #todo-due-date {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n}\n\nform #todo-due-date input {\n  height: 20px;\n}\n\nform #todo-priority {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n}\n\nform #priority-level {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: -15px;\n  font-size: 14px;\n}\nform #todo-priority label {\n  margin-bottom: -10px;\n}\n\nform #todo-notes {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n}\n\nform #todo-checklist {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 5px;\n  text-align: center;\n}\n\n#todo-div {\n  grid-column: 2 / 3;\n  grid-row: 1 / 3;\n  display: grid;\n  grid-auto-flow: row;\n  grid-template-columns: repeat(6, 1fr);\n  grid-template-rows: repeat(4, 1fr);\n  border: 3px solid black;\n  border-radius: 15px;\n  margin: 10px 10px 10px 5px;\n  padding: 10px;\n  gap: 20px;\n  background: rgba(255, 255, 255, 0.767);\n  overflow-y: auto;\n}\n\n#todo-div::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n\n#todo-div::-webkit-scrollbar-track {\n  background: rgba(255, 255, 255);\n  border-radius: 20px;\n  margin: 5px;\n}\n\n#todo-div::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 255, 0.664);\n  border-radius: 20px;\n  border: 2px solid rgb(255, 255, 255);\n}\n\n.todo-object {\n  border: 3px solid black;\n  border-radius: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  max-width: 200px;\n  height: fit-content;\n  padding: 10px;\n  background-color: white;\n}\n\n.todo-object h3 {\n  margin-bottom: -5px;\n  margin-top: -5px;\n  text-decoration: underline;\n  font-size: 24px;\n}\n\n.todo-object p {\n  margin-bottom: -5px;\n}\n\n.todo-object button {\n  border-radius: 5px;\n  width: fit-content;\n  align-self: center;\n  margin-top: 15px;\n}\n\n.todo-object #description {\n  font-style: italic;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;EAEE,SAAS;EACT,YAAY;AACd;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,aAAa;EACb,8BAA8B;EAC9B,6BAA6B;EAC7B,mBAAmB;EACnB,4BAA4B;EAC5B;;;;;;GAMC;AACH;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,uBAAuB;EACvB,mBAAmB;EACnB,0BAA0B;EAC1B,aAAa;EACb,sCAAsC;AACxC;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,uBAAuB;EACvB,mBAAmB;EACnB,0BAA0B;EAC1B,aAAa;EACb,sCAAsC;AACxC;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,YAAY;AACd;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,eAAe;EACf,SAAS;EACT,gBAAgB;EAChB,kBAAkB;EAClB,0BAA0B;AAC5B;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,WAAW;EACX,eAAe;AACjB;;AAEA;EACE,uBAAuB;EACvB,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,WAAW;EACX,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,+BAA+B;EAC/B,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,wCAAwC;EACxC,mBAAmB;EACnB,oCAAoC;AACtC;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,oBAAoB;EACpB,eAAe;AACjB;AACA;EACE,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,qCAAqC;EACrC,kCAAkC;EAClC,uBAAuB;EACvB,mBAAmB;EACnB,0BAA0B;EAC1B,aAAa;EACb,SAAS;EACT,sCAAsC;EACtC,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,+BAA+B;EAC/B,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,wCAAwC;EACxC,mBAAmB;EACnB,oCAAoC;AACtC;;AAEA;EACE,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,gBAAgB;EAChB,mBAAmB;EACnB,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,0BAA0B;EAC1B,eAAe;AACjB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;AACpB","sourcesContent":["html,\nbody {\n  margin: 0;\n  height: 100%;\n}\n\n#content {\n  height: 100vh;\n  width: 100vw;\n  display: grid;\n  grid-template-columns: 1fr 7fr;\n  grid-template-rows: 2fr 1.5fr;\n  grid-auto-flow: row;\n  background: rgb(249, 197, 3);\n  background: linear-gradient(\n    21deg,\n    rgba(249, 197, 3, 1) 0%,\n    rgba(0, 4, 4, 1) 30%,\n    rgba(0, 1, 1, 1) 70%,\n    rgba(0, 255, 192, 1) 100%\n  );\n}\n\n#form-div {\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n  border: 3px solid black;\n  border-radius: 15px;\n  margin: 10px 5px 10px 10px;\n  padding: 10px;\n  background: rgba(255, 255, 255, 0.767);\n}\n\n#projects-container {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  border: 3px solid black;\n  border-radius: 15px;\n  margin: 10px 5px 10px 10px;\n  padding: 10px;\n  background: rgba(255, 255, 255, 0.767);\n}\n\n#projects-head-div {\n  display: flex;\n  justify-content: space-between;\n  margin: -5px;\n}\n\n#projects-title-div {\n  width: 100%;\n}\n\n#projects-title-div p {\n  font-size: 28px;\n  margin: 0;\n  font-weight: 700;\n  text-align: center;\n  text-decoration: underline;\n}\n\n#projects-button-div {\n  margin-left: -15px;\n}\n\n#projects-add-button {\n  font-weight: 700;\n  height: 25px;\n  width: 25px;\n  font-size: 16px;\n}\n\n#projects-div {\n  border: 1px solid black;\n  margin: 2px;\n  display: flex;\n  flex-direction: column;\n  height: 90%;\n  overflow-y: auto;\n}\n\n#projects-div::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n\n#projects-div::-webkit-scrollbar-track {\n  background: rgba(255, 255, 255);\n  border-radius: 20px;\n  margin: 5px;\n}\n\n#projects-div::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 255, 0.664);\n  border-radius: 20px;\n  border: 2px solid rgb(255, 255, 255);\n}\n\nform {\n  font-weight: bold;\n  font-size: 18px;\n}\n\nform #todo-title {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n}\n\nform #todo-title input {\n  height: 20px;\n}\n\nform #todo-description {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n}\n\nform #todo-due-date {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n}\n\nform #todo-due-date input {\n  height: 20px;\n}\n\nform #todo-priority {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n}\n\nform #priority-level {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: -15px;\n  font-size: 14px;\n}\nform #todo-priority label {\n  margin-bottom: -10px;\n}\n\nform #todo-notes {\n  display: flex;\n  flex-direction: column;\n  padding: 5px;\n}\n\nform #todo-checklist {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 5px;\n  text-align: center;\n}\n\n#todo-div {\n  grid-column: 2 / 3;\n  grid-row: 1 / 3;\n  display: grid;\n  grid-auto-flow: row;\n  grid-template-columns: repeat(6, 1fr);\n  grid-template-rows: repeat(4, 1fr);\n  border: 3px solid black;\n  border-radius: 15px;\n  margin: 10px 10px 10px 5px;\n  padding: 10px;\n  gap: 20px;\n  background: rgba(255, 255, 255, 0.767);\n  overflow-y: auto;\n}\n\n#todo-div::-webkit-scrollbar {\n  width: 10px;\n  height: 10px;\n}\n\n#todo-div::-webkit-scrollbar-track {\n  background: rgba(255, 255, 255);\n  border-radius: 20px;\n  margin: 5px;\n}\n\n#todo-div::-webkit-scrollbar-thumb {\n  background-color: rgba(0, 0, 255, 0.664);\n  border-radius: 20px;\n  border: 2px solid rgb(255, 255, 255);\n}\n\n.todo-object {\n  border: 3px solid black;\n  border-radius: 15px;\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  max-width: 200px;\n  height: fit-content;\n  padding: 10px;\n  background-color: white;\n}\n\n.todo-object h3 {\n  margin-bottom: -5px;\n  margin-top: -5px;\n  text-decoration: underline;\n  font-size: 24px;\n}\n\n.todo-object p {\n  margin-bottom: -5px;\n}\n\n.todo-object button {\n  border-radius: 5px;\n  width: fit-content;\n  align-self: center;\n  margin-top: 15px;\n}\n\n.todo-object #description {\n  font-style: italic;\n}\n"],"sourceRoot":""}]);
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
/* harmony export */   "createTodo": () => (/* binding */ createTodo),
/* harmony export */   "todoArray": () => (/* binding */ todoArray)
/* harmony export */ });
/* harmony import */ var _todoForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todoForm.js */ "./src/todoForm.js");
/* harmony import */ var _displayTodo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayTodo.js */ "./src/displayTodo.js");
/* harmony import */ var _newProject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./newProject.js */ "./src/newProject.js");




let todoArray = [];

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
  todoArray.push(todo);
};

const pushToProject = () => {
  _newProject_js__WEBPACK_IMPORTED_MODULE_2__.projectTodos.push(todoArray);
  console.log(_newProject_js__WEBPACK_IMPORTED_MODULE_2__.projectTodos);
};

const createTodo = () => {
  _todoForm_js__WEBPACK_IMPORTED_MODULE_0__.submit.addEventListener("click", _displayTodo_js__WEBPACK_IMPORTED_MODULE_1__.resetChildNodes);
  _todoForm_js__WEBPACK_IMPORTED_MODULE_0__.submit.addEventListener("click", newTodo);
  _todoForm_js__WEBPACK_IMPORTED_MODULE_0__.submit.addEventListener("click", pushToProject);
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
/* harmony import */ var _createTodo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createTodo.js */ "./src/createTodo.js");


const todoDiv = document.createElement("div");

const todoColor = (i, todo) => {
  if (_createTodo_js__WEBPACK_IMPORTED_MODULE_0__.todoArray[i].priority == "1") {
    todo.style.boxShadow = "0px 0px 10px 4px #14d10a";
  } else if (_createTodo_js__WEBPACK_IMPORTED_MODULE_0__.todoArray[i].priority == "2") {
    todo.style.boxShadow = "0px 0px 10px 4px #fad900";
  } else if (_createTodo_js__WEBPACK_IMPORTED_MODULE_0__.todoArray[i].priority == "3") {
    todo.style.boxShadow = "0px 0px 10px 4px #fa000c";
  }
};

const priorityLevel = (i) => {
  if (_createTodo_js__WEBPACK_IMPORTED_MODULE_0__.todoArray[i].priority == "1") {
    return (priority.textContent = "Priority: Low");
  } else if (_createTodo_js__WEBPACK_IMPORTED_MODULE_0__.todoArray[i].priority == "2") {
    return (priority.textContent = "Priority: Medium");
  } else if (_createTodo_js__WEBPACK_IMPORTED_MODULE_0__.todoArray[i].priority == "3") {
    return (priority.textContent = "Priority: High");
  }
};

const resetChildNodes = () => {
  while (todoDiv.firstChild) {
    todoDiv.removeChild(todoDiv.firstChild);
  }
};

const displayTodo = () => {
  for (let i = 0; i < _createTodo_js__WEBPACK_IMPORTED_MODULE_0__.todoArray.length; i++) {
    const todoObject = document.createElement("div");
    const title = document.createElement("h3");
    const priority = document.createElement("p");
    const description = document.createElement("p");
    const dueDate = document.createElement("p");
    const notes = document.createElement("p");
    const complete = document.createElement("button");

    title.textContent = _createTodo_js__WEBPACK_IMPORTED_MODULE_0__.todoArray[i].title;
    priority.textContent = priorityLevel(i);
    description.textContent = _createTodo_js__WEBPACK_IMPORTED_MODULE_0__.todoArray[i].description;
    dueDate.textContent = _createTodo_js__WEBPACK_IMPORTED_MODULE_0__.todoArray[i].dueDate;
    notes.textContent = _createTodo_js__WEBPACK_IMPORTED_MODULE_0__.todoArray[i].notes;
    complete.textContent = _createTodo_js__WEBPACK_IMPORTED_MODULE_0__.todoArray[i].complete;

    description.setAttribute("id", "description");
    notes.setAttribute("id", "notes");

    todoColor(i, todoObject);

    complete.addEventListener("click", () => {
      if (_createTodo_js__WEBPACK_IMPORTED_MODULE_0__.todoArray[i].complete == "complete") {
        _createTodo_js__WEBPACK_IMPORTED_MODULE_0__.todoArray[i].complete = "incomplete";
        complete.textContent = _createTodo_js__WEBPACK_IMPORTED_MODULE_0__.todoArray[i].complete;
      } else if (_createTodo_js__WEBPACK_IMPORTED_MODULE_0__.todoArray[i].complete == "incomplete") {
        _createTodo_js__WEBPACK_IMPORTED_MODULE_0__.todoArray[i].complete = "complete";
        complete.textContent = _createTodo_js__WEBPACK_IMPORTED_MODULE_0__.todoArray[i].complete;
      }
      console.log(_createTodo_js__WEBPACK_IMPORTED_MODULE_0__.todoArray);
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
  console.log(_createTodo_js__WEBPACK_IMPORTED_MODULE_0__.todoArray);
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
/* harmony export */   "projectTodos": () => (/* binding */ projectTodos)
/* harmony export */ });
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");


const projectsArray = [];
const projectTodos = [];

const Project = (title, todos) => {
  return { title, todos };
};

const newProjectFormDiv = document.createElement("div");
const newProjectForm = document.createElement("form");

const projectTitle = document.createElement("div");
const projectTitleLabel = document.createElement("label");
const projectTitleInput = document.createElement("input");

newProjectFormDiv.setAttribute("id", "-project-form-div");

projectTitle.setAttribute("id", "project-title-div");
projectTitleLabel.setAttribute("for", "project-title");
projectTitleLabel.textContent = "New Project:";
projectTitleInput.setAttribute("type", "text");
projectTitleInput.setAttribute("name", "project-title");
projectTitleInput.setAttribute("id", "project-title");

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
  console.log(projectsArray);
};

const addProject = () => {
  projectTitleInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      newProject();
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



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNmO0FBQ0Y7QUFDdEI7QUFDNEM7QUFDRTs7QUFFbkU7O0FBRUEsaUVBQW9COztBQUVwQixvQkFBb0IsOENBQU87QUFDM0Isb0JBQW9CLDJEQUFpQjtBQUNyQyxvQkFBb0Isb0RBQU87O0FBRTNCLHFEQUFVO0FBQ1YsMERBQVU7QUFDViwwREFBVTtBQUNWLG9EQUFTO0FBQ1Qsd0VBQThCLFVBQVUsZ0VBQW9COztBQUV6QyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jcmVhdGVUb2RvLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvZGlzcGxheVRvZG8uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9uZXdQcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b2RvRm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCxcXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA3ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxLjVmcjtcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjQ5LCAxOTcsIDMpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICAyMWRlZyxcXG4gICAgcmdiYSgyNDksIDE5NywgMywgMSkgMCUsXFxuICAgIHJnYmEoMCwgNCwgNCwgMSkgMzAlLFxcbiAgICByZ2JhKDAsIDEsIDEsIDEpIDcwJSxcXG4gICAgcmdiYSgwLCAyNTUsIDE5MiwgMSkgMTAwJVxcbiAgKTtcXG59XFxuXFxuI2Zvcm0tZGl2IHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIG1hcmdpbjogMTBweCA1cHggMTBweCAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NjcpO1xcbn1cXG5cXG4jcHJvamVjdHMtY29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIG1hcmdpbjogMTBweCA1cHggMTBweCAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NjcpO1xcbn1cXG5cXG4jcHJvamVjdHMtaGVhZC1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbjogLTVweDtcXG59XFxuXFxuI3Byb2plY3RzLXRpdGxlLWRpdiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3Byb2plY3RzLXRpdGxlLWRpdiBwIHtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuI3Byb2plY3RzLWJ1dHRvbi1kaXYge1xcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xcbn1cXG5cXG4jcHJvamVjdHMtYWRkLWJ1dHRvbiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbiNwcm9qZWN0cy1kaXYge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBtYXJnaW46IDJweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4jcHJvamVjdHMtZGl2Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMTBweDtcXG4gIGhlaWdodDogMTBweDtcXG59XFxuXFxuI3Byb2plY3RzLWRpdjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBtYXJnaW46IDVweDtcXG59XFxuXFxuI3Byb2plY3RzLWRpdjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuNjY0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcblxcbmZvcm0ge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbmZvcm0gI3RvZG8tdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbmZvcm0gI3RvZG8tdGl0bGUgaW5wdXQge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG5mb3JtICN0b2RvLWRlc2NyaXB0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5mb3JtICN0b2RvLWR1ZS1kYXRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5mb3JtICN0b2RvLWR1ZS1kYXRlIGlucHV0IHtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuZm9ybSAjdG9kby1wcmlvcml0eSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuZm9ybSAjcHJpb3JpdHktbGV2ZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1ib3R0b206IC0xNXB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5mb3JtICN0b2RvLXByaW9yaXR5IGxhYmVsIHtcXG4gIG1hcmdpbi1ib3R0b206IC0xMHB4O1xcbn1cXG5cXG5mb3JtICN0b2RvLW5vdGVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5mb3JtICN0b2RvLWNoZWNrbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jdG9kby1kaXYge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIG1hcmdpbjogMTBweCAxMHB4IDEwcHggNXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGdhcDogMjBweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NjcpO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuI3RvZG8tZGl2Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMTBweDtcXG4gIGhlaWdodDogMTBweDtcXG59XFxuXFxuI3RvZG8tZGl2Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4jdG9kby1kaXY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjY2NCk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG5cXG4udG9kby1vYmplY3Qge1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogbGVmdDtcXG4gIG1heC13aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udG9kby1vYmplY3QgaDMge1xcbiAgbWFyZ2luLWJvdHRvbTogLTVweDtcXG4gIG1hcmdpbi10b3A6IC01cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLnRvZG8tb2JqZWN0IHAge1xcbiAgbWFyZ2luLWJvdHRvbTogLTVweDtcXG59XFxuXFxuLnRvZG8tb2JqZWN0IGJ1dHRvbiB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5cXG4udG9kby1vYmplY3QgI2Rlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRSxTQUFTO0VBQ1QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsNEJBQTRCO0VBQzVCOzs7Ozs7R0FNQztBQUNIOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2Isc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2Isc0NBQXNDO0FBQ3hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztFQUNULGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLG1CQUFtQjtFQUNuQixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixvQkFBb0I7RUFDcEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHFDQUFxQztFQUNyQyxrQ0FBa0M7RUFDbEMsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQiwwQkFBMEI7RUFDMUIsYUFBYTtFQUNiLFNBQVM7RUFDVCxzQ0FBc0M7RUFDdEMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLCtCQUErQjtFQUMvQixtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0Usd0NBQXdDO0VBQ3hDLG1CQUFtQjtFQUNuQixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCxcXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA3ZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDJmciAxLjVmcjtcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICBiYWNrZ3JvdW5kOiByZ2IoMjQ5LCAxOTcsIDMpO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICAyMWRlZyxcXG4gICAgcmdiYSgyNDksIDE5NywgMywgMSkgMCUsXFxuICAgIHJnYmEoMCwgNCwgNCwgMSkgMzAlLFxcbiAgICByZ2JhKDAsIDEsIDEsIDEpIDcwJSxcXG4gICAgcmdiYSgwLCAyNTUsIDE5MiwgMSkgMTAwJVxcbiAgKTtcXG59XFxuXFxuI2Zvcm0tZGl2IHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIG1hcmdpbjogMTBweCA1cHggMTBweCAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NjcpO1xcbn1cXG5cXG4jcHJvamVjdHMtY29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIG1hcmdpbjogMTBweCA1cHggMTBweCAxMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NjcpO1xcbn1cXG5cXG4jcHJvamVjdHMtaGVhZC1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbjogLTVweDtcXG59XFxuXFxuI3Byb2plY3RzLXRpdGxlLWRpdiB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3Byb2plY3RzLXRpdGxlLWRpdiBwIHtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIG1hcmdpbjogMDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuI3Byb2plY3RzLWJ1dHRvbi1kaXYge1xcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xcbn1cXG5cXG4jcHJvamVjdHMtYWRkLWJ1dHRvbiB7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcblxcbiNwcm9qZWN0cy1kaXYge1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBtYXJnaW46IDJweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiA5MCU7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG5cXG4jcHJvamVjdHMtZGl2Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMTBweDtcXG4gIGhlaWdodDogMTBweDtcXG59XFxuXFxuI3Byb2plY3RzLWRpdjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBtYXJnaW46IDVweDtcXG59XFxuXFxuI3Byb2plY3RzLWRpdjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuNjY0KTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3JkZXI6IDJweCBzb2xpZCByZ2IoMjU1LCAyNTUsIDI1NSk7XFxufVxcblxcbmZvcm0ge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbmZvcm0gI3RvZG8tdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiA1cHg7XFxufVxcblxcbmZvcm0gI3RvZG8tdGl0bGUgaW5wdXQge1xcbiAgaGVpZ2h0OiAyMHB4O1xcbn1cXG5cXG5mb3JtICN0b2RvLWRlc2NyaXB0aW9uIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5mb3JtICN0b2RvLWR1ZS1kYXRlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5mb3JtICN0b2RvLWR1ZS1kYXRlIGlucHV0IHtcXG4gIGhlaWdodDogMjBweDtcXG59XFxuXFxuZm9ybSAjdG9kby1wcmlvcml0eSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuXFxuZm9ybSAjcHJpb3JpdHktbGV2ZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1ib3R0b206IC0xNXB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5mb3JtICN0b2RvLXByaW9yaXR5IGxhYmVsIHtcXG4gIG1hcmdpbi1ib3R0b206IC0xMHB4O1xcbn1cXG5cXG5mb3JtICN0b2RvLW5vdGVzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG5cXG5mb3JtICN0b2RvLWNoZWNrbGlzdCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgcGFkZGluZzogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jdG9kby1kaXYge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg2LCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKTtcXG4gIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIG1hcmdpbjogMTBweCAxMHB4IDEwcHggNXB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGdhcDogMjBweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC43NjcpO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuXFxuI3RvZG8tZGl2Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogMTBweDtcXG4gIGhlaWdodDogMTBweDtcXG59XFxuXFxuI3RvZG8tZGl2Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIG1hcmdpbjogNXB4O1xcbn1cXG5cXG4jdG9kby1kaXY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjY2NCk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYm9yZGVyOiAycHggc29saWQgcmdiKDI1NSwgMjU1LCAyNTUpO1xcbn1cXG5cXG4udG9kby1vYmplY3Qge1xcbiAgYm9yZGVyOiAzcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogbGVmdDtcXG4gIG1heC13aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4udG9kby1vYmplY3QgaDMge1xcbiAgbWFyZ2luLWJvdHRvbTogLTVweDtcXG4gIG1hcmdpbi10b3A6IC01cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG59XFxuXFxuLnRvZG8tb2JqZWN0IHAge1xcbiAgbWFyZ2luLWJvdHRvbTogLTVweDtcXG59XFxuXFxuLnRvZG8tb2JqZWN0IGJ1dHRvbiB7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbn1cXG5cXG4udG9kby1vYmplY3QgI2Rlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHN1Ym1pdCwgY29tcGxldGVJbnB1dCB9IGZyb20gXCIuL3RvZG9Gb3JtLmpzXCI7XG5pbXBvcnQgeyBkaXNwbGF5VG9kbywgcmVzZXRDaGlsZE5vZGVzIH0gZnJvbSBcIi4vZGlzcGxheVRvZG8uanNcIjtcbmltcG9ydCB7IHByb2plY3RUb2RvcyB9IGZyb20gXCIuL25ld1Byb2plY3QuanNcIjtcblxubGV0IHRvZG9BcnJheSA9IFtdO1xuXG5jb25zdCBUb2RvID0gKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJpb3JpdHksIG5vdGVzLCBjb21wbGV0ZSkgPT4ge1xuICByZXR1cm4geyB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByaW9yaXR5LCBub3RlcywgY29tcGxldGUgfTtcbn07XG5cbmNvbnN0IGNvbXBsZXRlVmFsdWUgPSAodG9kbykgPT4ge1xuICBpZiAoY29tcGxldGVJbnB1dC5jaGVja2VkKSB7XG4gICAgcmV0dXJuICh0b2RvLmNvbXBsZXRlID0gXCJjb21wbGV0ZVwiKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gKHRvZG8uY29tcGxldGUgPSBcImluY29tcGxldGVcIik7XG4gIH1cbn07XG5cbmNvbnN0IG5ld1RvZG8gPSAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgbGV0IHRvZG8gPSBUb2RvKCk7XG4gIHRvZG8udGl0bGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRpdGxlXCIpLnZhbHVlO1xuICB0b2RvLmRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgdG9kby5kdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkdWUtZGF0ZVwiKS52YWx1ZTtcbiAgdG9kby5wcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJpb3JpdHlcIikudmFsdWU7XG4gIHRvZG8ubm90ZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5vdGVzXCIpLnZhbHVlO1xuICB0b2RvLmNvbXBsZXRlID0gY29tcGxldGVWYWx1ZSh0b2RvKTtcbiAgdG9kb0FycmF5LnB1c2godG9kbyk7XG59O1xuXG5jb25zdCBwdXNoVG9Qcm9qZWN0ID0gKCkgPT4ge1xuICBwcm9qZWN0VG9kb3MucHVzaCh0b2RvQXJyYXkpO1xuICBjb25zb2xlLmxvZyhwcm9qZWN0VG9kb3MpO1xufTtcblxuY29uc3QgY3JlYXRlVG9kbyA9ICgpID0+IHtcbiAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCByZXNldENoaWxkTm9kZXMpO1xuICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG5ld1RvZG8pO1xuICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHB1c2hUb1Byb2plY3QpO1xuICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGRpc3BsYXlUb2RvKTtcbn07XG5cbmV4cG9ydCB7IGNyZWF0ZVRvZG8sIHRvZG9BcnJheSB9O1xuIiwiaW1wb3J0IHsgdG9kb0FycmF5IH0gZnJvbSBcIi4vY3JlYXRlVG9kby5qc1wiO1xuXG5jb25zdCB0b2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuY29uc3QgdG9kb0NvbG9yID0gKGksIHRvZG8pID0+IHtcbiAgaWYgKHRvZG9BcnJheVtpXS5wcmlvcml0eSA9PSBcIjFcIikge1xuICAgIHRvZG8uc3R5bGUuYm94U2hhZG93ID0gXCIwcHggMHB4IDEwcHggNHB4ICMxNGQxMGFcIjtcbiAgfSBlbHNlIGlmICh0b2RvQXJyYXlbaV0ucHJpb3JpdHkgPT0gXCIyXCIpIHtcbiAgICB0b2RvLnN0eWxlLmJveFNoYWRvdyA9IFwiMHB4IDBweCAxMHB4IDRweCAjZmFkOTAwXCI7XG4gIH0gZWxzZSBpZiAodG9kb0FycmF5W2ldLnByaW9yaXR5ID09IFwiM1wiKSB7XG4gICAgdG9kby5zdHlsZS5ib3hTaGFkb3cgPSBcIjBweCAwcHggMTBweCA0cHggI2ZhMDAwY1wiO1xuICB9XG59O1xuXG5jb25zdCBwcmlvcml0eUxldmVsID0gKGkpID0+IHtcbiAgaWYgKHRvZG9BcnJheVtpXS5wcmlvcml0eSA9PSBcIjFcIikge1xuICAgIHJldHVybiAocHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBMb3dcIik7XG4gIH0gZWxzZSBpZiAodG9kb0FycmF5W2ldLnByaW9yaXR5ID09IFwiMlwiKSB7XG4gICAgcmV0dXJuIChwcmlvcml0eS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IE1lZGl1bVwiKTtcbiAgfSBlbHNlIGlmICh0b2RvQXJyYXlbaV0ucHJpb3JpdHkgPT0gXCIzXCIpIHtcbiAgICByZXR1cm4gKHByaW9yaXR5LnRleHRDb250ZW50ID0gXCJQcmlvcml0eTogSGlnaFwiKTtcbiAgfVxufTtcblxuY29uc3QgcmVzZXRDaGlsZE5vZGVzID0gKCkgPT4ge1xuICB3aGlsZSAodG9kb0Rpdi5maXJzdENoaWxkKSB7XG4gICAgdG9kb0Rpdi5yZW1vdmVDaGlsZCh0b2RvRGl2LmZpcnN0Q2hpbGQpO1xuICB9XG59O1xuXG5jb25zdCBkaXNwbGF5VG9kbyA9ICgpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b2RvQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCB0b2RvT2JqZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGNvbnN0IG5vdGVzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgY29uc3QgY29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSB0b2RvQXJyYXlbaV0udGl0bGU7XG4gICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBwcmlvcml0eUxldmVsKGkpO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9kb0FycmF5W2ldLmRlc2NyaXB0aW9uO1xuICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSB0b2RvQXJyYXlbaV0uZHVlRGF0ZTtcbiAgICBub3Rlcy50ZXh0Q29udGVudCA9IHRvZG9BcnJheVtpXS5ub3RlcztcbiAgICBjb21wbGV0ZS50ZXh0Q29udGVudCA9IHRvZG9BcnJheVtpXS5jb21wbGV0ZTtcblxuICAgIGRlc2NyaXB0aW9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVzY3JpcHRpb25cIik7XG4gICAgbm90ZXMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJub3Rlc1wiKTtcblxuICAgIHRvZG9Db2xvcihpLCB0b2RvT2JqZWN0KTtcblxuICAgIGNvbXBsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBpZiAodG9kb0FycmF5W2ldLmNvbXBsZXRlID09IFwiY29tcGxldGVcIikge1xuICAgICAgICB0b2RvQXJyYXlbaV0uY29tcGxldGUgPSBcImluY29tcGxldGVcIjtcbiAgICAgICAgY29tcGxldGUudGV4dENvbnRlbnQgPSB0b2RvQXJyYXlbaV0uY29tcGxldGU7XG4gICAgICB9IGVsc2UgaWYgKHRvZG9BcnJheVtpXS5jb21wbGV0ZSA9PSBcImluY29tcGxldGVcIikge1xuICAgICAgICB0b2RvQXJyYXlbaV0uY29tcGxldGUgPSBcImNvbXBsZXRlXCI7XG4gICAgICAgIGNvbXBsZXRlLnRleHRDb250ZW50ID0gdG9kb0FycmF5W2ldLmNvbXBsZXRlO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2codG9kb0FycmF5KTtcbiAgICB9KTtcblxuICAgIHRvZG9PYmplY3QuY2xhc3NMaXN0LmFkZChcInRvZG8tb2JqZWN0XCIpO1xuXG4gICAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvT2JqZWN0KTtcbiAgICB0b2RvT2JqZWN0LmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB0b2RvT2JqZWN0LmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuICAgIHRvZG9PYmplY3QuYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICAgIHRvZG9PYmplY3QuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuICAgIHRvZG9PYmplY3QuYXBwZW5kQ2hpbGQobm90ZXMpO1xuICAgIHRvZG9PYmplY3QuYXBwZW5kQ2hpbGQoY29tcGxldGUpO1xuICB9XG4gIGNvbnNvbGUubG9nKHRvZG9BcnJheSk7XG59O1xuXG5leHBvcnQgeyBkaXNwbGF5VG9kbywgcmVzZXRDaGlsZE5vZGVzLCB0b2RvRGl2IH07XG4iLCJpbXBvcnQgeyBwcm9qZWN0c0RpdiB9IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5cbmNvbnN0IHByb2plY3RzQXJyYXkgPSBbXTtcbmNvbnN0IHByb2plY3RUb2RvcyA9IFtdO1xuXG5jb25zdCBQcm9qZWN0ID0gKHRpdGxlLCB0b2RvcykgPT4ge1xuICByZXR1cm4geyB0aXRsZSwgdG9kb3MgfTtcbn07XG5cbmNvbnN0IG5ld1Byb2plY3RGb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG5cbmNvbnN0IHByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBwcm9qZWN0VGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbmNvbnN0IHByb2plY3RUaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG5uZXdQcm9qZWN0Rm9ybURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIi1wcm9qZWN0LWZvcm0tZGl2XCIpO1xuXG5wcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0LXRpdGxlLWRpdlwiKTtcbnByb2plY3RUaXRsZUxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByb2plY3QtdGl0bGVcIik7XG5wcm9qZWN0VGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiTmV3IFByb2plY3Q6XCI7XG5wcm9qZWN0VGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcbnByb2plY3RUaXRsZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJwcm9qZWN0LXRpdGxlXCIpO1xucHJvamVjdFRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0LXRpdGxlXCIpO1xuXG5jb25zdCBuZXdQcm9qZWN0Rm9ybUNyZWF0ZSA9ICgpID0+IHtcbiAgcHJvamVjdHNEaXYuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEZvcm1EaXYpO1xuICBuZXdQcm9qZWN0Rm9ybURpdi5hcHBlbmRDaGlsZChuZXdQcm9qZWN0Rm9ybSk7XG4gIG5ld1Byb2plY3RGb3JtLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZSk7XG4gIHByb2plY3RUaXRsZS5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGVMYWJlbCk7XG4gIHByb2plY3RUaXRsZS5hcHBlbmRDaGlsZChwcm9qZWN0VGl0bGVJbnB1dCk7XG59O1xuXG5jb25zdCBuZXdQcm9qZWN0ID0gKCkgPT4ge1xuICBsZXQgcHJvamVjdCA9IFByb2plY3QoKTtcbiAgcHJvamVjdC50aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdC10aXRsZVwiKS52YWx1ZTtcbiAgcHJvamVjdC50b2RvcyA9IHByb2plY3RUb2RvcztcbiAgcHJvamVjdHNBcnJheS5wdXNoKHByb2plY3QpO1xuICBjb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5KTtcbn07XG5cbmNvbnN0IGFkZFByb2plY3QgPSAoKSA9PiB7XG4gIHByb2plY3RUaXRsZUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBuZXdQcm9qZWN0KCk7XG4gICAgfVxuICB9KTtcbn07XG5cbmV4cG9ydCB7IG5ld1Byb2plY3RGb3JtQ3JlYXRlLCBhZGRQcm9qZWN0LCBwcm9qZWN0VG9kb3MgfTtcbiIsImNvbnN0IHByb2plY3RzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHByb2plY3RzSGVhZERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBwcm9qZWN0c1RpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHByb2plY3RzQnV0dG9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHByb2plY3RzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxudGl0bGUudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG5hZGRQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCIrXCI7XG5cbnByb2plY3RzQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdHMtY29udGFpbmVyXCIpO1xucHJvamVjdHNIZWFkRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdHMtaGVhZC1kaXZcIik7XG5wcm9qZWN0c1RpdGxlRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdHMtdGl0bGUtZGl2XCIpO1xucHJvamVjdHNCdXR0b25EaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0cy1idXR0b24tZGl2XCIpO1xuYWRkUHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RzLWFkZC1idXR0b25cIik7XG5wcm9qZWN0c0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RzLWRpdlwiKTtcblxucHJvamVjdHNDb250YWluZXIuYXBwZW5kQ2hpbGQocHJvamVjdHNIZWFkRGl2KTtcbnByb2plY3RzQ29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3RzRGl2KTtcbnByb2plY3RzSGVhZERpdi5hcHBlbmRDaGlsZChwcm9qZWN0c1RpdGxlRGl2KTtcbnByb2plY3RzSGVhZERpdi5hcHBlbmRDaGlsZChwcm9qZWN0c0J1dHRvbkRpdik7XG5wcm9qZWN0c1RpdGxlRGl2LmFwcGVuZENoaWxkKHRpdGxlKTtcbnByb2plY3RzQnV0dG9uRGl2LmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG4pO1xuXG5leHBvcnQgeyBwcm9qZWN0c0NvbnRhaW5lciwgYWRkUHJvamVjdEJ0biwgcHJvamVjdHNEaXYgfTtcbiIsImNvbnN0IGZvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCB0aXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuY29uc3QgdGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgcHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbmNvbnN0IHByaW9yaXR5TGV2ZWxEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgcHJpb3JpdHlMZXZlbExvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuY29uc3QgcHJpb3JpdHlMZXZlbE1pZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuY29uc3QgcHJpb3JpdHlMZXZlbEhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbmNvbnN0IHByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbmNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IGRlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5jb25zdCBkZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuXG5jb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IGR1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbmNvbnN0IGR1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuY29uc3Qgbm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3Qgbm90ZXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbmNvbnN0IG5vdGVzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG5cbmNvbnN0IGNvbXBsZXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IGNvbXBsZXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5jb25zdCBjb21wbGV0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG5jb25zdCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG5mb3JtRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZm9ybS1kaXZcIik7XG5cbnRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby10aXRsZVwiKTtcbnRpdGxlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwidGl0bGVcIik7XG50aXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZTpcIjtcbnRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG50aXRsZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJ0aXRsZVwiKTtcbnRpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aXRsZVwiKTtcblxucHJpb3JpdHkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLXByaW9yaXR5XCIpO1xucHJpb3JpdHlMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJwcmlvcml0eVwiKTtcbnByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OlwiO1xucHJpb3JpdHlMZXZlbERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5LWxldmVsXCIpO1xucHJpb3JpdHlMZXZlbExvdy50ZXh0Q29udGVudCA9IFwiTG93XCI7XG5wcmlvcml0eUxldmVsTG93LnN0eWxlLnRleHRTaGFkb3cgPSBcIjJweCAycHggOHB4ICMxNGQxMGFcIjtcbnByaW9yaXR5TGV2ZWxNaWQudGV4dENvbnRlbnQgPSBcIk1lZGl1bVwiO1xucHJpb3JpdHlMZXZlbE1pZC5zdHlsZS50ZXh0U2hhZG93ID0gXCIycHggMnB4IDhweCAjZmFkOTAwXCI7XG5wcmlvcml0eUxldmVsSGlnaC50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xucHJpb3JpdHlMZXZlbEhpZ2guc3R5bGUudGV4dFNoYWRvdyA9IFwiMnB4IDJweCA4cHggI2ZhMDAwY1wiO1xuXG5wcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYW5nZVwiKTtcbnByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInByaW9yaXR5XCIpO1xucHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5XCIpO1xucHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgXCIxXCIpO1xucHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhcIiwgXCIzXCIpO1xuXG5kZXNjcmlwdGlvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tZGVzY3JpcHRpb25cIik7XG5kZXNjcmlwdGlvbkxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcImRlc2NyaXB0aW9uXCIpO1xuZGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246XCI7XG5kZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcInJvd3NcIiwgXCI1XCIpO1xuZGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJjb2xzXCIsIFwiMzNcIik7XG5kZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkZXNjcmlwdGlvblwiKTtcbmRlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZXNjcmlwdGlvblwiKTtcblxuZHVlRGF0ZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tZHVlLWRhdGVcIik7XG5kdWVEYXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiZHVlLWRhdGVcIik7XG5kdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkR1ZSBEYXRlOlwiO1xuZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuZHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJkdWUtZGF0ZVwiKTtcbmR1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImR1ZS1kYXRlXCIpO1xuXG5ub3Rlcy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tbm90ZXNcIik7XG5ub3Rlc0xhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcIm5vdGVzXCIpO1xubm90ZXNMYWJlbC50ZXh0Q29udGVudCA9IFwiTm90ZXM6XCI7XG5ub3Rlc0lucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJub3Rlc1wiKTtcbm5vdGVzSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJub3Rlc1wiKTtcbm5vdGVzSW5wdXQuc2V0QXR0cmlidXRlKFwicm93c1wiLCBcIjVcIik7XG5ub3Rlc0lucHV0LnNldEF0dHJpYnV0ZShcImNvbHNcIiwgXCIzM1wiKTtcblxuY29tcGxldGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLWNoZWNrbGlzdFwiKTtcbmNvbXBsZXRlTGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwiY29tcGxldGVcIik7XG5jb21wbGV0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJDb21wbGV0ZVwiO1xuY29tcGxldGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiY2hlY2tib3hcIik7XG5jb21wbGV0ZUlucHV0LnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJjb21wbGV0ZVwiKTtcbmNvbXBsZXRlSW5wdXQuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjb21wbGV0ZVwiKTtcblxuc3VibWl0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwic3VibWl0XCIpO1xuc3VibWl0LnRleHRDb250ZW50ID0gXCJzdWJtaXRcIjtcblxuY29uc3QgZm9ybUNyZWF0ZSA9ICgpID0+IHtcbiAgZm9ybURpdi5hcHBlbmRDaGlsZChmb3JtKTtcbiAgZm9ybS5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQocHJpb3JpdHkpO1xuICBmb3JtLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcbiAgZm9ybS5hcHBlbmRDaGlsZChub3Rlcyk7XG4gIGZvcm0uYXBwZW5kQ2hpbGQoY29tcGxldGUpO1xuICBmb3JtLmFwcGVuZENoaWxkKHN1Ym1pdCk7XG4gIHRpdGxlLmFwcGVuZENoaWxkKHRpdGxlTGFiZWwpO1xuICB0aXRsZS5hcHBlbmRDaGlsZCh0aXRsZUlucHV0KTtcbiAgZHVlRGF0ZS5hcHBlbmRDaGlsZChkdWVEYXRlTGFiZWwpO1xuICBkdWVEYXRlLmFwcGVuZENoaWxkKGR1ZURhdGVJbnB1dCk7XG4gIHByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5TGFiZWwpO1xuICBwcmlvcml0eS5hcHBlbmRDaGlsZChwcmlvcml0eUxldmVsRGl2KTtcbiAgcHJpb3JpdHlMZXZlbERpdi5hcHBlbmRDaGlsZChwcmlvcml0eUxldmVsTG93KTtcbiAgcHJpb3JpdHlMZXZlbERpdi5hcHBlbmRDaGlsZChwcmlvcml0eUxldmVsTWlkKTtcbiAgcHJpb3JpdHlMZXZlbERpdi5hcHBlbmRDaGlsZChwcmlvcml0eUxldmVsSGlnaCk7XG4gIHByaW9yaXR5LmFwcGVuZENoaWxkKHByaW9yaXR5SW5wdXQpO1xuICBkZXNjcmlwdGlvbi5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbkxhYmVsKTtcbiAgZGVzY3JpcHRpb24uYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb25JbnB1dCk7XG4gIG5vdGVzLmFwcGVuZENoaWxkKG5vdGVzTGFiZWwpO1xuICBub3Rlcy5hcHBlbmRDaGlsZChub3Rlc0lucHV0KTtcbiAgY29tcGxldGUuYXBwZW5kQ2hpbGQoY29tcGxldGVJbnB1dCk7XG4gIGNvbXBsZXRlLmFwcGVuZENoaWxkKGNvbXBsZXRlTGFiZWwpO1xufTtcblxuY29uc3QgZm9ybUNsZWFyID0gKCkgPT4ge1xuICBzdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBmb3JtLnJlc2V0KCk7XG4gIH0pO1xufTtcblxuZXhwb3J0IHsgZm9ybUNyZWF0ZSwgZm9ybURpdiwgc3VibWl0LCBjb21wbGV0ZUlucHV0LCBmb3JtQ2xlYXIgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCB7IGZvcm1DcmVhdGUsIGZvcm1DbGVhciwgZm9ybURpdiB9IGZyb20gXCIuL3RvZG9Gb3JtXCI7XG5pbXBvcnQgeyBjcmVhdGVUb2RvIH0gZnJvbSBcIi4vY3JlYXRlVG9kby5qc1wiO1xuaW1wb3J0IHsgdG9kb0RpdiB9IGZyb20gXCIuL2Rpc3BsYXlUb2RvLmpzXCI7XG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgcHJvamVjdHNDb250YWluZXIsIGFkZFByb2plY3RCdG4gfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuaW1wb3J0IHsgYWRkUHJvamVjdCwgbmV3UHJvamVjdEZvcm1DcmVhdGUgfSBmcm9tIFwiLi9uZXdQcm9qZWN0LmpzXCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5cbnRvZG9EaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLWRpdlwiKTtcblxuY29udGVudC5hcHBlbmRDaGlsZChmb3JtRGl2KTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdHNDb250YWluZXIpO1xuY29udGVudC5hcHBlbmRDaGlsZCh0b2RvRGl2KTtcblxuZm9ybUNyZWF0ZSgpO1xuYWRkUHJvamVjdCgpO1xuY3JlYXRlVG9kbygpO1xuZm9ybUNsZWFyKCk7XG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBuZXdQcm9qZWN0Rm9ybUNyZWF0ZSk7XG5cbmV4cG9ydCB7IGNvbnRlbnQgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==