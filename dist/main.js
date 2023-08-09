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
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody {\n  margin: 0;\n  height: 100%;\n  overflow: hidden;\n}\n\n#content {\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  display: grid;\n  grid-template-columns: 1fr 7fr;\n  grid-template-rows: 1.5fr 2fr;\n  grid-auto-flow: row;\n  gap: 15px;\n  background: rgb(249, 197, 3);\n  background: linear-gradient(\n    21deg,\n    rgba(249, 197, 3, 1) 0%,\n    rgba(0, 4, 4, 1) 30%,\n    rgba(0, 1, 1, 1) 70%,\n    rgba(0, 255, 192, 1) 100%\n  );\n}\n\n.div-background {\n  background-color: rgba(255, 255, 255, 0.61);\n  border: 2px solid black;\n  border-radius: 25px;\n}\n\n#project-form-div {\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n  display: flex;\n  padding: 0;\n  flex-direction: column;\n  margin: 15px 0 0 15px;\n  min-width: 200px;\n  height: 380px;\n}\n\n#project-div-head {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: -15px;\n  padding: 10px 10px 0 10px;\n  height: 50px;\n}\n\n#title-div {\n  display: flex;\n  padding-top: 6px;\n  padding-left: 1em;\n  align-items: flex-end;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n\n#projects-title {\n  text-decoration: underline;\n  font-size: 28px;\n}\n\n#button-div {\n  display: flex;\n  justify-content: flex-end;\n  height: 100%;\n}\n\n#projects-btn {\n  font-size: 18px;\n  font-weight: bold;\n  border-radius: 5px;\n  border: 1px solid black;\n  height: fit-content;\n  width: fit-content;\n  cursor: pointer;\n}\n\n#projects-list-div {\n  height: 100%;\n  padding: 0 10px 10px 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n#projects-list-div::-webkit-scrollbar {\n  width: 5px;\n}\n\n#projects-list-div::-webkit-scrollbar-track {\n  background-color: rgba(255, 255, 255, 0.13);\n  border: 1px solid rgba(255, 255, 255, 0.13);\n  border-radius: 20px;\n  margin-bottom: 20px;\n}\n\n#projects-list-div::-webkit-scrollbar-thumb {\n  background-color: rgba(255, 166, 0, 0.541);\n  border-radius: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.13);\n}\n\n.project {\n  cursor: pointer;\n  font-size: 20px;\n  margin: 1px;\n}\n\n#active-project-div {\n  grid-column: 2 / 3;\n  grid-row: 1 / 3;\n  margin: 15px 15px 15px 0;\n  display: flex;\n  flex-direction: column;\n}\n\n.active {\n  font-weight: bold;\n  text-decoration: underline;\n}\n\n#active-project-head {\n  width: 100%;\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#active-project-title {\n  font-size: 46px;\n  text-decoration: underline;\n}\n\n#active-todo-div {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));\n  grid-template-columns: repeat(auto-fill, 250px);\n  gap: 20px;\n  padding: 20px;\n  overflow-y: scroll;\n}\n\n#todo-div {\n  width: 200px;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n}\n\n#todo-header {\n  display: flex;\n  justify-content: space-between;\n}\n\n#todo-title-div {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\n#delete-todo-div {\n  display: flex;\n  justify-content: flex-end;\n}\n\n#delete-todo-btn {\n  font-size: 10px;\n  font-weight: bold;\n  border-radius: 5px;\n  border: 1px solid black;\n  height: 16px;\n  width: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n#todo-title {\n  font-size: 24px;\n  font-weight: bold;\n  text-decoration: underline;\n}\n\n#todo-description {\n  font-style: italic;\n}\n\n.todo-properties {\n  margin: 10px;\n  display: table;\n}\n\n#todo-form-container {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  display: flex;\n  padding: 0;\n  margin: 0 0 15px 15px;\n  min-width: 200px;\n  align-items: center;\n  flex-direction: column;\n}\n\n#todo-div-head {\n  width: 100%;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50px;\n}\n\n#todo-div-header {\n  font-size: 28px;\n  text-decoration: underline;\n}\n\n#todo-form-div {\n  width: 100%;\n  height: 100%;\n}\n\n#todo-form {\n  display: flex;\n  flex-direction: column;\n  padding: 0 10px 0 10px;\n  gap: 10px;\n}\n\n.form-elements {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n#priority-levels {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 3px 0 3px;\n  margin-bottom: -15px;\n  margin-top: -10px;\n}\n\n#todo-button-div {\n  display: flex;\n  justify-content: center;\n  margin-top: 10px;\n}\n\n#todo-button {\n  border: 2px solid black;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n#todo-submit-div {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 5px;\n}\n\n#todo-submit-div button {\n  font-size: 14px;\n  border-radius: 5px;\n  border: 1px solid black;\n  height: fit-content;\n  width: fit-content;\n  cursor: pointer;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html,\nbody {\n  margin: 0;\n  height: 100%;\n  overflow: hidden;\n}\n\n#content {\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  display: grid;\n  grid-template-columns: 1fr 7fr;\n  grid-template-rows: 1.5fr 2fr;\n  grid-auto-flow: row;\n  gap: 15px;\n  background: rgb(249, 197, 3);\n  background: linear-gradient(\n    21deg,\n    rgba(249, 197, 3, 1) 0%,\n    rgba(0, 4, 4, 1) 30%,\n    rgba(0, 1, 1, 1) 70%,\n    rgba(0, 255, 192, 1) 100%\n  );\n}\n\n.div-background {\n  background-color: rgba(255, 255, 255, 0.61);\n  border: 2px solid black;\n  border-radius: 25px;\n}\n\n#project-form-div {\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n  display: flex;\n  padding: 0;\n  flex-direction: column;\n  margin: 15px 0 0 15px;\n  min-width: 200px;\n  height: 380px;\n}\n\n#project-div-head {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: -15px;\n  padding: 10px 10px 0 10px;\n  height: 50px;\n}\n\n#title-div {\n  display: flex;\n  padding-top: 6px;\n  padding-left: 1em;\n  align-items: flex-end;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n\n#projects-title {\n  text-decoration: underline;\n  font-size: 28px;\n}\n\n#button-div {\n  display: flex;\n  justify-content: flex-end;\n  height: 100%;\n}\n\n#projects-btn {\n  font-size: 18px;\n  font-weight: bold;\n  border-radius: 5px;\n  border: 1px solid black;\n  height: fit-content;\n  width: fit-content;\n  cursor: pointer;\n}\n\n#projects-list-div {\n  height: 100%;\n  padding: 0 10px 10px 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n#projects-list-div::-webkit-scrollbar {\n  width: 5px;\n}\n\n#projects-list-div::-webkit-scrollbar-track {\n  background-color: rgba(255, 255, 255, 0.13);\n  border: 1px solid rgba(255, 255, 255, 0.13);\n  border-radius: 20px;\n  margin-bottom: 20px;\n}\n\n#projects-list-div::-webkit-scrollbar-thumb {\n  background-color: rgba(255, 166, 0, 0.541);\n  border-radius: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.13);\n}\n\n.project {\n  cursor: pointer;\n  font-size: 20px;\n  margin: 1px;\n}\n\n#active-project-div {\n  grid-column: 2 / 3;\n  grid-row: 1 / 3;\n  margin: 15px 15px 15px 0;\n  display: flex;\n  flex-direction: column;\n}\n\n.active {\n  font-weight: bold;\n  text-decoration: underline;\n}\n\n#active-project-head {\n  width: 100%;\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#active-project-title {\n  font-size: 46px;\n  text-decoration: underline;\n}\n\n#active-todo-div {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-rows: repeat(auto-fit, minmax(200px, 1fr));\n  grid-template-columns: repeat(auto-fill, 250px);\n  gap: 20px;\n  padding: 20px;\n  overflow-y: scroll;\n}\n\n#todo-div {\n  width: 200px;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n}\n\n#todo-header {\n  display: flex;\n  justify-content: space-between;\n}\n\n#todo-title-div {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\n#delete-todo-div {\n  display: flex;\n  justify-content: flex-end;\n}\n\n#delete-todo-btn {\n  font-size: 10px;\n  font-weight: bold;\n  border-radius: 5px;\n  border: 1px solid black;\n  height: 16px;\n  width: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n#todo-title {\n  font-size: 24px;\n  font-weight: bold;\n  text-decoration: underline;\n}\n\n#todo-description {\n  font-style: italic;\n}\n\n.todo-properties {\n  margin: 10px;\n  display: table;\n}\n\n#todo-form-container {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  display: flex;\n  padding: 0;\n  margin: 0 0 15px 15px;\n  min-width: 200px;\n  align-items: center;\n  flex-direction: column;\n}\n\n#todo-div-head {\n  width: 100%;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50px;\n}\n\n#todo-div-header {\n  font-size: 28px;\n  text-decoration: underline;\n}\n\n#todo-form-div {\n  width: 100%;\n  height: 100%;\n}\n\n#todo-form {\n  display: flex;\n  flex-direction: column;\n  padding: 0 10px 0 10px;\n  gap: 10px;\n}\n\n.form-elements {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n#priority-levels {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 3px 0 3px;\n  margin-bottom: -15px;\n  margin-top: -10px;\n}\n\n#todo-button-div {\n  display: flex;\n  justify-content: center;\n  margin-top: 10px;\n}\n\n#todo-button {\n  border: 2px solid black;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n#todo-submit-div {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 5px;\n}\n\n#todo-submit-div button {\n  font-size: 14px;\n  border-radius: 5px;\n  border: 1px solid black;\n  height: fit-content;\n  width: fit-content;\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/activeProject.js":
/*!******************************!*\
  !*** ./src/activeProject.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activeProjectDiv": () => (/* binding */ activeProjectDiv),
/* harmony export */   "activeProjectHead": () => (/* binding */ activeProjectHead),
/* harmony export */   "activeProjectTitle": () => (/* binding */ activeProjectTitle),
/* harmony export */   "activeTodoDiv": () => (/* binding */ activeTodoDiv),
/* harmony export */   "changeTitle": () => (/* binding */ changeTitle),
/* harmony export */   "clearTodos": () => (/* binding */ clearTodos),
/* harmony export */   "displayTodos": () => (/* binding */ displayTodos)
/* harmony export */ });
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");


const activeProjectDiv = document.createElement("div");
const activeProjectHead = document.createElement("div");
const activeProjectTitle = document.createElement("h3");
const activeTodoDiv = document.createElement("div");

activeProjectDiv.setAttribute("id", "active-project-div");
activeProjectDiv.classList.add("div-background");
activeProjectHead.setAttribute("id", "active-project-head");
activeProjectTitle.setAttribute("id", "active-project-title");
activeTodoDiv.setAttribute("id", "active-todo-div");

const changeTitle = () => {
  for (let i = 0; i < _projects_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray.length; i++) {
    if (_projects_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[i].active == true) {
      activeProjectTitle.textContent = _projects_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[i].title;
    }
  }
};

const clearTodos = () => {
  while (activeTodoDiv.hasChildNodes()) {
    activeTodoDiv.firstChild.remove();
  }
};

const displayTodos = (todo) => {
  let todoDiv = document.createElement("div");
  let todoHeader = document.createElement("div");
  let todoTitleDiv = document.createElement("div");
  let todoTitle = document.createElement("p");
  let deleteTodoDiv = document.createElement("div");
  let deleteTodoBtn = document.createElement("button");
  let todoDueDate = document.createElement("p");
  let todoDescription = document.createElement("p");
  let todoPriority = document.createElement("p");
  let todoNotes = document.createElement("p");
  let todoCompleteDiv = document.createElement("div");
  let todoComplete = document.createElement("button");

  todoDiv.setAttribute("id", "todo-div");
  todoDiv.classList.add("div-background");
  todoHeader.setAttribute("id", "todo-header");
  todoTitleDiv.setAttribute("id", "todo-title-div");
  todoTitle.setAttribute("id", "todo-title");
  deleteTodoDiv.setAttribute("id", "delete-todo-div");
  deleteTodoBtn.setAttribute("id", "delete-todo-btn");
  todoDueDate.setAttribute("id", "todo-due-date");
  todoDescription.setAttribute("id", "todo-description");
  todoPriority.setAttribute("id", "todo-priority");
  todoNotes.setAttribute("id", "todo-notes");
  todoComplete.setAttribute("id", "todo-complete");
  todoTitle.classList.add("todo-properties");
  todoDueDate.classList.add("todo-properties");
  todoDescription.classList.add("todo-properties");
  todoPriority.classList.add("todo-properties");
  todoNotes.classList.add("todo-properties");
  todoCompleteDiv.setAttribute("id", "todo-button-div");
  todoComplete.setAttribute("id", "todo-button");

  deleteTodoBtn.textContent = "X";

  for (let i = 0; i < _projects_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray.length; i++) {
    if (_projects_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[i].active == true) {
      todoTitle.textContent = todo.title;
      todoDueDate.textContent = `Due: ${todo.dueDate}`;
      todoDescription.textContent = todo.description;
      todoNotes.textContent = todo.notes;
      todoComplete.textContent = "incomplete";

      if (todo.priority == 1) {
        todoDiv.style.border = "2px solid red";
        todoDiv.style.boxShadow = "0 0 10px 5px red";
        todoPriority.textContent = "Priority: Low";
      } else if (todo.priority == 2) {
        todoDiv.style.border = "2px solid yellow";
        todoDiv.style.boxShadow = "0 0 10px 5px yellow";
        todoPriority.textContent = "Priority: Mid";
      } else if (todo.priority == 3) {
        todoDiv.style.border = "2px solid #39fc03";
        todoDiv.style.boxShadow = "0 0 10px 5px #39fc03";
        todoPriority.textContent = "Priority: High";
      }
    }
  }
  activeTodoDiv.appendChild(todoDiv);
  todoDiv.appendChild(todoHeader);
  todoHeader.appendChild(todoTitleDiv);
  todoHeader.appendChild(deleteTodoDiv);
  todoTitleDiv.appendChild(todoTitle);
  deleteTodoDiv.appendChild(deleteTodoBtn);
  todoDiv.appendChild(todoDueDate);
  todoDiv.appendChild(todoDescription);
  todoDiv.appendChild(todoPriority);
  todoDiv.appendChild(todoNotes);
  todoDiv.appendChild(todoCompleteDiv);
  todoCompleteDiv.appendChild(todoComplete);

  todoComplete.addEventListener("click", (e) => {
    if (todo.complete == false) {
      todo.complete = true;
      e.target.textContent = "complete";
      console.log(_projects_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray);
    } else if (todo.complete == true) {
      todo.complete = false;
      e.target.textContent = "incomplete";
      console.log(_projects_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray);
    }
  });
};




/***/ }),

/***/ "./src/projectForm.js":
/*!****************************!*\
  !*** ./src/projectForm.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "activeProject": () => (/* binding */ activeProject),
/* harmony export */   "changeActiveClass": () => (/* binding */ changeActiveClass),
/* harmony export */   "displayActiveTodos": () => (/* binding */ displayActiveTodos),
/* harmony export */   "projectFormDiv": () => (/* binding */ projectFormDiv)
/* harmony export */ });
/* harmony import */ var _activeProject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activeProject.js */ "./src/activeProject.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");



const projectFormDiv = document.createElement("div");
const projectDivHead = document.createElement("div");
const projectTitleDiv = document.createElement("div");
const projectsTitle = document.createElement("p");
const projectListDiv = document.createElement("div");
const projectsBtnDiv = document.createElement("div");
const addProjectBtn = document.createElement("button");
const projectListForm = document.createElement("form");
const input = document.createElement("input");

projectsTitle.textContent = "Projects";
addProjectBtn.textContent = "+";

projectFormDiv.classList.add("div-background");
projectFormDiv.setAttribute("id", "project-form-div");
projectDivHead.setAttribute("id", "project-div-head");
projectTitleDiv.setAttribute("id", "title-div");
projectListDiv.setAttribute("id", "projects-list-div");
projectsBtnDiv.setAttribute("id", "button-div");
projectsTitle.setAttribute("id", "projects-title");
addProjectBtn.setAttribute("id", "projects-btn");
projectListForm.classList.add("project-form");
input.classList.add("project-input");

projectFormDiv.appendChild(projectDivHead);
projectDivHead.appendChild(projectTitleDiv);
projectDivHead.appendChild(projectsBtnDiv);
projectTitleDiv.appendChild(projectsTitle);
projectsBtnDiv.appendChild(addProjectBtn);
projectFormDiv.appendChild(projectListDiv);
projectListForm.appendChild(input);

addProjectBtn.addEventListener("click", () => {
  if (projectListDiv.querySelector(".project-form") == null) {
    projectListDiv.appendChild(projectListForm);
    projectListDiv.scrollTop = projectListDiv.scrollHeight;
  }
});

input.addEventListener("keypress", (e) => {
  const projectName = document.createElement("p");
  if (e.code === "Enter") {
    e.preventDefault();
    projectName.textContent = document.querySelector(".project-input").value;
    for (let i = 0; i < projectListDiv.children.length; i++) {
      projectName.setAttribute("data-index", i);
    }
    projectListForm.reset();
    projectListForm.remove();
    projectListDiv.appendChild(projectName);
    setActiveToFalse();
    (0,_projects_js__WEBPACK_IMPORTED_MODULE_1__.createProject)(projectName.textContent, [], true);
    removeActiveClass();
    projectName.classList.add("active");
    projectName.classList.add("project");
    (0,_activeProject_js__WEBPACK_IMPORTED_MODULE_0__.changeTitle)();
    (0,_activeProject_js__WEBPACK_IMPORTED_MODULE_0__.clearTodos)();
    console.log(_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray);
  }
});

const changeActiveClass = () => {
  const projectList = document.getElementById("projects-list-div");

  projectList.addEventListener("click", (e) => {
    if (e.target.tagName == "P") {
      removeActiveClass();
      (0,_activeProject_js__WEBPACK_IMPORTED_MODULE_0__.clearTodos)();
      e.target.classList.add("active");
    }
  });
};

const setActiveToFalse = () => {
  for (let i = 0; i < _projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray.length; i++) {
    _projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray[i].active = false;
  }
};

const removeActiveClass = () => {
  const children = document.getElementById("projects-list-div").children;

  for (let i = 0; i < children.length; i++) {
    children[i].classList.remove("active");
  }
};

const activeProject = () => {
  const projectSelect = document.getElementById("projects-list-div");
  projectSelect.addEventListener("click", (e) => {
    for (let i = 0; i < _projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray.length; i++) {
      if (
        parseInt(_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray.indexOf(_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray[i])) ===
          parseInt(e.target.dataset.index) &&
        e.target.classList.contains("active") &&
        e.target.tagName == "P"
      ) {
        _projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray[i].active = true;
        console.log(_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray);
      } else if (
        parseInt(_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray.indexOf(_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray[i])) !==
          parseInt(e.target.dataset.index) &&
        e.target.classList.contains("active") &&
        e.target.tagName == "P"
      ) {
        _projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray[i].active = false;
      }
      if (e.target.tagName == "P") {
        displayActiveTodos(e, i);
      }
    }
    (0,_activeProject_js__WEBPACK_IMPORTED_MODULE_0__.changeTitle)();
  });
};

const displayActiveTodos = (e, i) => {
  for (let n = 0; n < _projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray[i].todos.length; n++) {
    if (
      parseInt(_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray.indexOf(_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray[i])) ===
        parseInt(e.target.dataset.index) &&
      e.target.classList.contains("active")
    ) {
      (0,_activeProject_js__WEBPACK_IMPORTED_MODULE_0__.displayTodos)(_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray[i].todos[n]);
    }
  }
};




/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "createTodo": () => (/* binding */ createTodo),
/* harmony export */   "projectsArray": () => (/* binding */ projectsArray)
/* harmony export */ });
/* harmony import */ var _activeProject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activeProject */ "./src/activeProject.js");


const projectsArray = [];

const Project = (title, todos, active) => {
  return { title, todos, active };
};

const createProject = (title, todos, active) => {
  let newProject = Project();
  newProject.title = title;
  newProject.todos = [...todos];
  newProject.active = active;
  projectsArray.push(newProject);
};

const Todo = (title, dueDate, description, priority, notes, complete) => {
  return { title, dueDate, description, priority, notes, complete };
};

const createTodo = (
  title,
  dueDate,
  description,
  priority,
  notes,
  complete,
  newProject
) => {
  let newTodo = Todo();
  newTodo.title = title;
  newTodo.dueDate = dueDate;
  newTodo.description = description;
  newTodo.priority = priority;
  newTodo.notes = notes;
  newTodo.complete = complete;
  (0,_activeProject__WEBPACK_IMPORTED_MODULE_0__.displayTodos)(newTodo);
  newProject.push(newTodo);
};




/***/ }),

/***/ "./src/toDoForm.js":
/*!*************************!*\
  !*** ./src/toDoForm.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "todoFormContainer": () => (/* binding */ todoFormContainer)
/* harmony export */ });
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");


const todoFormContainer = document.createElement("div");
todoFormContainer.setAttribute("id", "todo-form-container");
todoFormContainer.classList.add("div-background");

const todoDivHead = document.createElement("div");
const todoDivHeader = document.createElement("p");
todoDivHead.setAttribute("id", "todo-div-head");
todoDivHeader.setAttribute("id", "todo-div-header");
todoDivHeader.textContent = "Create To-Do";

const todoFormDiv = document.createElement("div");
const todoForm = document.createElement("form");
todoFormDiv.setAttribute("id", "todo-form-div");
todoForm.setAttribute("id", "todo-form");

const todoTitleDiv = document.createElement("div");
const todoTitleLabel = document.createElement("label");
const todoTitleInput = document.createElement("input");
todoTitleDiv.setAttribute("id", "todo-title-div");
todoTitleDiv.classList.add("form-elements");
todoTitleLabel.textContent = "Title:";
todoTitleInput.setAttribute("type", "text");

const todoDueDateDiv = document.createElement("div");
const todoDueDateLabel = document.createElement("label");
const todoDueDateInput = document.createElement("input");
todoDueDateDiv.setAttribute("id", "todo-duedate-div");
todoDueDateDiv.classList.add("form-elements");
todoDueDateLabel.textContent = "Date:";
todoDueDateInput.setAttribute("type", "date");

const todoDescriptionDiv = document.createElement("div");
const todoDescriptionLabel = document.createElement("label");
const todoDescriptionInput = document.createElement("input");
todoDescriptionDiv.setAttribute("id", "todo-description-div");
todoDescriptionDiv.classList.add("form-elements");
todoDescriptionLabel.textContent = "Description:";
todoDescriptionInput.setAttribute("type", "text");

const todoPriorityDiv = document.createElement("div");
const todoPriorityLabel = document.createElement("label");
const todoPriorityInput = document.createElement("input");
const todoPriorityLevels = document.createElement("div");
const todoPriorityLow = document.createElement("p");
const todoPriorityMid = document.createElement("p");
const todoPriorityHigh = document.createElement("p");
todoPriorityDiv.setAttribute("id", "todo-priority-div");
todoPriorityDiv.classList.add("form-elements");
todoPriorityLabel.textContent = "Priority:";
todoPriorityInput.setAttribute("type", "range");
todoPriorityInput.setAttribute("min", "1");
todoPriorityInput.setAttribute("max", "3");
todoPriorityInput.setAttribute("value", "1");
todoPriorityLevels.setAttribute("id", "priority-levels");
todoPriorityLow.textContent = "Low";
todoPriorityLow.style.textShadow = "0 0 7px red";
todoPriorityMid.textContent = "Mid";
todoPriorityMid.style.textShadow = "0 0 7px yellow";
todoPriorityHigh.textContent = "High";
todoPriorityHigh.style.textShadow = "0 0 7px #39fc03";

const todoNotesDiv = document.createElement("div");
const todoNotesLabel = document.createElement("label");
const todoNotesInput = document.createElement("textarea");
todoNotesDiv.classList.add("form-elements");
todoNotesDiv.setAttribute("id", "todo-notes-div");
todoNotesInput.setAttribute("rows", "5");
todoNotesLabel.textContent = "Notes:";

const todoSubmitDiv = document.createElement("div");
const todoSubmitBtn = document.createElement("button");
todoSubmitDiv.setAttribute("id", "todo-submit-div");
todoSubmitBtn.textContent = "Submit";

todoFormContainer.appendChild(todoDivHead);
todoFormContainer.appendChild(todoFormDiv);
todoDivHead.appendChild(todoDivHeader);
todoFormDiv.appendChild(todoForm);
todoForm.appendChild(todoTitleDiv);
todoForm.appendChild(todoDueDateDiv);
todoForm.appendChild(todoDescriptionDiv);
todoForm.appendChild(todoPriorityDiv);
todoForm.appendChild(todoNotesDiv);
todoForm.appendChild(todoSubmitDiv);
todoTitleDiv.appendChild(todoTitleLabel);
todoTitleDiv.appendChild(todoTitleInput);
todoDueDateDiv.appendChild(todoDueDateLabel);
todoDueDateDiv.appendChild(todoDueDateInput);
todoDescriptionDiv.appendChild(todoDescriptionLabel);
todoDescriptionDiv.appendChild(todoDescriptionInput);
todoPriorityDiv.appendChild(todoPriorityLabel);
todoPriorityDiv.appendChild(todoPriorityLevels);
todoPriorityLevels.appendChild(todoPriorityLow);
todoPriorityLevels.appendChild(todoPriorityMid);
todoPriorityLevels.appendChild(todoPriorityHigh);
todoPriorityDiv.appendChild(todoPriorityInput);
todoNotesDiv.appendChild(todoNotesLabel);
todoNotesDiv.appendChild(todoNotesInput);
todoSubmitDiv.appendChild(todoSubmitBtn);

const pushToActiveProject = () => {
  for (let i = 0; i < _projects_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray.length; i++) {
    if (_projects_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[i].active == true) {
      return _projects_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[i].todos;
    }
  }
};

todoSubmitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.createTodo)(
    todoTitleInput.value,
    todoDueDateInput.value,
    todoDescriptionInput.value,
    todoPriorityInput.value,
    todoNotesInput.value,
    false,
    pushToActiveProject()
  );
  todoForm.reset();
  console.log(_projects_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray);
});




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
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
/* harmony import */ var _projectForm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectForm.js */ "./src/projectForm.js");
/* harmony import */ var _activeProject_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./activeProject.js */ "./src/activeProject.js");
/* harmony import */ var _toDoForm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toDoForm */ "./src/toDoForm.js");






const content = document.querySelector("#content");
content.appendChild(_projectForm_js__WEBPACK_IMPORTED_MODULE_2__.projectFormDiv);
content.appendChild(_activeProject_js__WEBPACK_IMPORTED_MODULE_3__.activeProjectDiv);
content.append(_toDoForm__WEBPACK_IMPORTED_MODULE_4__.todoFormContainer);
_activeProject_js__WEBPACK_IMPORTED_MODULE_3__.activeProjectDiv.appendChild(_activeProject_js__WEBPACK_IMPORTED_MODULE_3__.activeProjectHead);
_activeProject_js__WEBPACK_IMPORTED_MODULE_3__.activeProjectDiv.appendChild(_activeProject_js__WEBPACK_IMPORTED_MODULE_3__.activeTodoDiv);
_activeProject_js__WEBPACK_IMPORTED_MODULE_3__.activeProjectHead.appendChild(_activeProject_js__WEBPACK_IMPORTED_MODULE_3__.activeProjectTitle);

(0,_projectForm_js__WEBPACK_IMPORTED_MODULE_2__.changeActiveClass)();
(0,_projectForm_js__WEBPACK_IMPORTED_MODULE_2__.activeProject)();

console.log(_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray);



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFN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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixJQUFJLDhEQUFvQixFQUFFO0FBQzVDLFFBQVEsdURBQWE7QUFDckIsYUFBYSx1REFBYTtBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsd0RBQVU7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHVEQUFhO0FBQzNCLENBQUM7O0FBRTRCOzs7Ozs7O1VDN0g3QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUN5QjtBQUtwQjtBQU1FO0FBQ21COztBQUUvQztBQUNBLG9CQUFvQiwyREFBYztBQUNsQyxvQkFBb0IsK0RBQWdCO0FBQ3BDLGVBQWUsd0RBQWlCO0FBQ2hDLDJFQUE0QixDQUFDLGdFQUFpQjtBQUM5QywyRUFBNEIsQ0FBQyw0REFBYTtBQUMxQyw0RUFBNkIsQ0FBQyxpRUFBa0I7O0FBRWhELGtFQUFpQjtBQUNqQiw4REFBYTs7QUFFYixZQUFZLHVEQUFhOztBQUVOIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2FjdGl2ZVByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0Rm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9Eb0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDdmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMS41ZnIgMmZyO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gIGdhcDogMTVweDtcXG4gIGJhY2tncm91bmQ6IHJnYigyNDksIDE5NywgMyk7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgIDIxZGVnLFxcbiAgICByZ2JhKDI0OSwgMTk3LCAzLCAxKSAwJSxcXG4gICAgcmdiYSgwLCA0LCA0LCAxKSAzMCUsXFxuICAgIHJnYmEoMCwgMSwgMSwgMSkgNzAlLFxcbiAgICByZ2JhKDAsIDI1NSwgMTkyLCAxKSAxMDAlXFxuICApO1xcbn1cXG5cXG4uZGl2LWJhY2tncm91bmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYxKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIGJsYWNrO1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG59XFxuXFxuI3Byb2plY3QtZm9ybS1kaXYge1xcbiAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDA7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luOiAxNXB4IDAgMCAxNXB4O1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogMzgwcHg7XFxufVxcblxcbiNwcm9qZWN0LWRpdi1oZWFkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW4tYm90dG9tOiAtMTVweDtcXG4gIHBhZGRpbmc6IDEwcHggMTBweCAwIDEwcHg7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbiN0aXRsZS1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmctdG9wOiA2cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDFlbTtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNwcm9qZWN0cy10aXRsZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG59XFxuXFxuI2J1dHRvbi1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiNwcm9qZWN0cy1idG4ge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICB3aWR0aDogZml0LWNvbnRlbnQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiNwcm9qZWN0cy1saXN0LWRpdiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nOiAwIDEwcHggMTBweCAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG59XFxuXFxuI3Byb2plY3RzLWxpc3QtZGl2Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogNXB4O1xcbn1cXG5cXG4jcHJvamVjdHMtbGlzdC1kaXY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMyk7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTMpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbiNwcm9qZWN0cy1saXN0LWRpdjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE2NiwgMCwgMC41NDEpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMyk7XFxufVxcblxcbi5wcm9qZWN0IHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIG1hcmdpbjogMXB4O1xcbn1cXG5cXG4jYWN0aXZlLXByb2plY3QtZGl2IHtcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gIGdyaWQtcm93OiAxIC8gMztcXG4gIG1hcmdpbjogMTVweCAxNXB4IDE1cHggMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4uYWN0aXZlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbiNhY3RpdmUtcHJvamVjdC1oZWFkIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNhY3RpdmUtcHJvamVjdC10aXRsZSB7XFxuICBmb250LXNpemU6IDQ2cHg7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuI2FjdGl2ZS10b2RvLWRpdiB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgMjUwcHgpO1xcbiAgZ2FwOiAyMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuI3RvZG8tZGl2IHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGhlaWdodDogZml0LWNvbnRlbnQ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDEwcHg7XFxufVxcblxcbiN0b2RvLWhlYWRlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG5cXG4jdG9kby10aXRsZS1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNkZWxldGUtdG9kby1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcblxcbiNkZWxldGUtdG9kby1idG4ge1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGhlaWdodDogMTZweDtcXG4gIHdpZHRoOiAxNnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3RvZG8tdGl0bGUge1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuI3RvZG8tZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG4udG9kby1wcm9wZXJ0aWVzIHtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbn1cXG5cXG4jdG9kby1mb3JtLWNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMCAwIDE1cHggMTVweDtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3RvZG8tZGl2LWhlYWQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4jdG9kby1kaXYtaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4jdG9kby1mb3JtLWRpdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI3RvZG8tZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5mb3JtLWVsZW1lbnRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNwcmlvcml0eS1sZXZlbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAgM3B4IDAgM3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogLTE1cHg7XFxuICBtYXJnaW4tdG9wOiAtMTBweDtcXG59XFxuXFxuI3RvZG8tYnV0dG9uLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4jdG9kby1idXR0b24ge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN0b2RvLXN1Ym1pdC1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbiN0b2RvLXN1Ym1pdC1kaXYgYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osU0FBUztFQUNULGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1QsNEJBQTRCO0VBQzVCOzs7Ozs7R0FNQztBQUNIOztBQUVBO0VBQ0UsMkNBQTJDO0VBQzNDLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGFBQWE7RUFDYixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFB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RUFDdkIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCxcXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgN2ZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjVmciAyZnI7XFxuICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgZ2FwOiAxNXB4O1xcbiAgYmFja2dyb3VuZDogcmdiKDI0OSwgMTk3LCAzKTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgMjFkZWcsXFxuICAgIHJnYmEoMjQ5LCAxOTcsIDMsIDEpIDAlLFxcbiAgICByZ2JhKDAsIDQsIDQsIDEpIDMwJSxcXG4gICAgcmdiYSgwLCAxLCAxLCAxKSA3MCUsXFxuICAgIHJnYmEoMCwgMjU1LCAxOTIsIDEpIDEwMCVcXG4gICk7XFxufVxcblxcbi5kaXYtYmFja2dyb3VuZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjEpO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtLWRpdiB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDE1cHggMCAwIDE1cHg7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAzODBweDtcXG59XFxuXFxuI3Byb2plY3QtZGl2LWhlYWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1ib3R0b206IC0xNXB4O1xcbiAgcGFkZGluZzogMTBweCAxMHB4IDAgMTBweDtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuXFxuI3RpdGxlLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZy10b3A6IDZweDtcXG4gIHBhZGRpbmctbGVmdDogMWVtO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI3Byb2plY3RzLXRpdGxlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbn1cXG5cXG4jYnV0dG9uLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI3Byb2plY3RzLWJ0biB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3Byb2plY3RzLWxpc3QtZGl2IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDAgMTBweCAxMHB4IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4jcHJvamVjdHMtbGlzdC1kaXY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA1cHg7XFxufVxcblxcbiNwcm9qZWN0cy1saXN0LWRpdjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEzKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMyk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuI3Byb2plY3RzLWxpc3QtZGl2Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTY2LCAwLCAwLjU0MSk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEzKTtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbWFyZ2luOiAxcHg7XFxufVxcblxcbiNhY3RpdmUtcHJvamVjdC1kaXYge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgbWFyZ2luOiAxNXB4IDE1cHggMTVweCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5hY3RpdmUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuI2FjdGl2ZS1wcm9qZWN0LWhlYWQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2FjdGl2ZS1wcm9qZWN0LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogNDZweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4jYWN0aXZlLXRvZG8tZGl2IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCAyNTBweCk7XFxuICBnYXA6IDIwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4jdG9kby1kaXYge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuXFxuI3RvZG8taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbiN0b2RvLXRpdGxlLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI2RlbGV0ZS10b2RvLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuI2RlbGV0ZS10b2RvLWJ0biB7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgd2lkdGg6IDE2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jdG9kby10aXRsZSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4jdG9kby1kZXNjcmlwdGlvbiB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi50b2RvLXByb3BlcnRpZXMge1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgZGlzcGxheTogdGFibGU7XFxufVxcblxcbiN0b2RvLWZvcm0tY29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwIDAgMTVweCAxNXB4O1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jdG9kby1kaXYtaGVhZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbiN0b2RvLWRpdi1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbiN0b2RvLWZvcm0tZGl2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jdG9kby1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMCAxMHB4IDAgMTBweDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmZvcm0tZWxlbWVudHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3ByaW9yaXR5LWxldmVscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMCAzcHggMCAzcHg7XFxuICBtYXJnaW4tYm90dG9tOiAtMTVweDtcXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xcbn1cXG5cXG4jdG9kby1idXR0b24tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbiN0b2RvLWJ1dHRvbiB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3RvZG8tc3VibWl0LWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuI3RvZG8tc3VibWl0LWRpdiBidXR0b24ge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcHJvamVjdHNBcnJheSB9IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5cbmNvbnN0IGFjdGl2ZVByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgYWN0aXZlUHJvamVjdEhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgYWN0aXZlUHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuY29uc3QgYWN0aXZlVG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbmFjdGl2ZVByb2plY3REaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhY3RpdmUtcHJvamVjdC1kaXZcIik7XG5hY3RpdmVQcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJkaXYtYmFja2dyb3VuZFwiKTtcbmFjdGl2ZVByb2plY3RIZWFkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWN0aXZlLXByb2plY3QtaGVhZFwiKTtcbmFjdGl2ZVByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFjdGl2ZS1wcm9qZWN0LXRpdGxlXCIpO1xuYWN0aXZlVG9kb0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFjdGl2ZS10b2RvLWRpdlwiKTtcblxuY29uc3QgY2hhbmdlVGl0bGUgPSAoKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwcm9qZWN0c0FycmF5W2ldLmFjdGl2ZSA9PSB0cnVlKSB7XG4gICAgICBhY3RpdmVQcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0c0FycmF5W2ldLnRpdGxlO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgY2xlYXJUb2RvcyA9ICgpID0+IHtcbiAgd2hpbGUgKGFjdGl2ZVRvZG9EaXYuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgYWN0aXZlVG9kb0Rpdi5maXJzdENoaWxkLnJlbW92ZSgpO1xuICB9XG59O1xuXG5jb25zdCBkaXNwbGF5VG9kb3MgPSAodG9kbykgPT4ge1xuICBsZXQgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCB0b2RvSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IHRvZG9UaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbGV0IGRlbGV0ZVRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgZGVsZXRlVG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGxldCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBsZXQgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGxldCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbGV0IHRvZG9Ob3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBsZXQgdG9kb0NvbXBsZXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IHRvZG9Db21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5cbiAgdG9kb0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tZGl2XCIpO1xuICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoXCJkaXYtYmFja2dyb3VuZFwiKTtcbiAgdG9kb0hlYWRlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8taGVhZGVyXCIpO1xuICB0b2RvVGl0bGVEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLXRpdGxlLWRpdlwiKTtcbiAgdG9kb1RpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby10aXRsZVwiKTtcbiAgZGVsZXRlVG9kb0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlbGV0ZS10b2RvLWRpdlwiKTtcbiAgZGVsZXRlVG9kb0J0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlbGV0ZS10b2RvLWJ0blwiKTtcbiAgdG9kb0R1ZURhdGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLWR1ZS1kYXRlXCIpO1xuICB0b2RvRGVzY3JpcHRpb24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLWRlc2NyaXB0aW9uXCIpO1xuICB0b2RvUHJpb3JpdHkuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLXByaW9yaXR5XCIpO1xuICB0b2RvTm90ZXMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLW5vdGVzXCIpO1xuICB0b2RvQ29tcGxldGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLWNvbXBsZXRlXCIpO1xuICB0b2RvVGl0bGUuY2xhc3NMaXN0LmFkZChcInRvZG8tcHJvcGVydGllc1wiKTtcbiAgdG9kb0R1ZURhdGUuY2xhc3NMaXN0LmFkZChcInRvZG8tcHJvcGVydGllc1wiKTtcbiAgdG9kb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXByb3BlcnRpZXNcIik7XG4gIHRvZG9Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidG9kby1wcm9wZXJ0aWVzXCIpO1xuICB0b2RvTm90ZXMuY2xhc3NMaXN0LmFkZChcInRvZG8tcHJvcGVydGllc1wiKTtcbiAgdG9kb0NvbXBsZXRlRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1idXR0b24tZGl2XCIpO1xuICB0b2RvQ29tcGxldGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLWJ1dHRvblwiKTtcblxuICBkZWxldGVUb2RvQnRuLnRleHRDb250ZW50ID0gXCJYXCI7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHByb2plY3RzQXJyYXlbaV0uYWN0aXZlID09IHRydWUpIHtcbiAgICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gICAgICB0b2RvRHVlRGF0ZS50ZXh0Q29udGVudCA9IGBEdWU6ICR7dG9kby5kdWVEYXRlfWA7XG4gICAgICB0b2RvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICAgICAgdG9kb05vdGVzLnRleHRDb250ZW50ID0gdG9kby5ub3RlcztcbiAgICAgIHRvZG9Db21wbGV0ZS50ZXh0Q29udGVudCA9IFwiaW5jb21wbGV0ZVwiO1xuXG4gICAgICBpZiAodG9kby5wcmlvcml0eSA9PSAxKSB7XG4gICAgICAgIHRvZG9EaXYuc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgcmVkXCI7XG4gICAgICAgIHRvZG9EaXYuc3R5bGUuYm94U2hhZG93ID0gXCIwIDAgMTBweCA1cHggcmVkXCI7XG4gICAgICAgIHRvZG9Qcmlvcml0eS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IExvd1wiO1xuICAgICAgfSBlbHNlIGlmICh0b2RvLnByaW9yaXR5ID09IDIpIHtcbiAgICAgICAgdG9kb0Rpdi5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCB5ZWxsb3dcIjtcbiAgICAgICAgdG9kb0Rpdi5zdHlsZS5ib3hTaGFkb3cgPSBcIjAgMCAxMHB4IDVweCB5ZWxsb3dcIjtcbiAgICAgICAgdG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gXCJQcmlvcml0eTogTWlkXCI7XG4gICAgICB9IGVsc2UgaWYgKHRvZG8ucHJpb3JpdHkgPT0gMykge1xuICAgICAgICB0b2RvRGl2LnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkICMzOWZjMDNcIjtcbiAgICAgICAgdG9kb0Rpdi5zdHlsZS5ib3hTaGFkb3cgPSBcIjAgMCAxMHB4IDVweCAjMzlmYzAzXCI7XG4gICAgICAgIHRvZG9Qcmlvcml0eS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IEhpZ2hcIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYWN0aXZlVG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvRGl2KTtcbiAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvSGVhZGVyKTtcbiAgdG9kb0hlYWRlci5hcHBlbmRDaGlsZCh0b2RvVGl0bGVEaXYpO1xuICB0b2RvSGVhZGVyLmFwcGVuZENoaWxkKGRlbGV0ZVRvZG9EaXYpO1xuICB0b2RvVGl0bGVEaXYuYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcbiAgZGVsZXRlVG9kb0Rpdi5hcHBlbmRDaGlsZChkZWxldGVUb2RvQnRuKTtcbiAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvRHVlRGF0ZSk7XG4gIHRvZG9EaXYuYXBwZW5kQ2hpbGQodG9kb0Rlc2NyaXB0aW9uKTtcbiAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvUHJpb3JpdHkpO1xuICB0b2RvRGl2LmFwcGVuZENoaWxkKHRvZG9Ob3Rlcyk7XG4gIHRvZG9EaXYuYXBwZW5kQ2hpbGQodG9kb0NvbXBsZXRlRGl2KTtcbiAgdG9kb0NvbXBsZXRlRGl2LmFwcGVuZENoaWxkKHRvZG9Db21wbGV0ZSk7XG5cbiAgdG9kb0NvbXBsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGlmICh0b2RvLmNvbXBsZXRlID09IGZhbHNlKSB7XG4gICAgICB0b2RvLmNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID0gXCJjb21wbGV0ZVwiO1xuICAgICAgY29uc29sZS5sb2cocHJvamVjdHNBcnJheSk7XG4gICAgfSBlbHNlIGlmICh0b2RvLmNvbXBsZXRlID09IHRydWUpIHtcbiAgICAgIHRvZG8uY29tcGxldGUgPSBmYWxzZTtcbiAgICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID0gXCJpbmNvbXBsZXRlXCI7XG4gICAgICBjb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5KTtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgYWN0aXZlUHJvamVjdERpdixcbiAgYWN0aXZlUHJvamVjdEhlYWQsXG4gIGFjdGl2ZVByb2plY3RUaXRsZSxcbiAgY2hhbmdlVGl0bGUsXG4gIGFjdGl2ZVRvZG9EaXYsXG4gIGRpc3BsYXlUb2RvcyxcbiAgY2xlYXJUb2Rvcyxcbn07XG4iLCJpbXBvcnQgeyBjaGFuZ2VUaXRsZSwgY2xlYXJUb2RvcywgZGlzcGxheVRvZG9zIH0gZnJvbSBcIi4vYWN0aXZlUHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCwgcHJvamVjdHNBcnJheSB9IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5cbmNvbnN0IHByb2plY3RGb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHByb2plY3REaXZIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHByb2plY3RUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBwcm9qZWN0c1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5jb25zdCBwcm9qZWN0TGlzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBwcm9qZWN0c0J0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmNvbnN0IHByb2plY3RMaXN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbnByb2plY3RzVGl0bGUudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG5hZGRQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCIrXCI7XG5cbnByb2plY3RGb3JtRGl2LmNsYXNzTGlzdC5hZGQoXCJkaXYtYmFja2dyb3VuZFwiKTtcbnByb2plY3RGb3JtRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC1mb3JtLWRpdlwiKTtcbnByb2plY3REaXZIZWFkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC1kaXYtaGVhZFwiKTtcbnByb2plY3RUaXRsZURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRpdGxlLWRpdlwiKTtcbnByb2plY3RMaXN0RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdHMtbGlzdC1kaXZcIik7XG5wcm9qZWN0c0J0bkRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJ1dHRvbi1kaXZcIik7XG5wcm9qZWN0c1RpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdHMtdGl0bGVcIik7XG5hZGRQcm9qZWN0QnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdHMtYnRuXCIpO1xucHJvamVjdExpc3RGb3JtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWZvcm1cIik7XG5pbnB1dC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pbnB1dFwiKTtcblxucHJvamVjdEZvcm1EaXYuYXBwZW5kQ2hpbGQocHJvamVjdERpdkhlYWQpO1xucHJvamVjdERpdkhlYWQuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlRGl2KTtcbnByb2plY3REaXZIZWFkLmFwcGVuZENoaWxkKHByb2plY3RzQnRuRGl2KTtcbnByb2plY3RUaXRsZURpdi5hcHBlbmRDaGlsZChwcm9qZWN0c1RpdGxlKTtcbnByb2plY3RzQnRuRGl2LmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG4pO1xucHJvamVjdEZvcm1EaXYuYXBwZW5kQ2hpbGQocHJvamVjdExpc3REaXYpO1xucHJvamVjdExpc3RGb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcblxuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpZiAocHJvamVjdExpc3REaXYucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWZvcm1cIikgPT0gbnVsbCkge1xuICAgIHByb2plY3RMaXN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RMaXN0Rm9ybSk7XG4gICAgcHJvamVjdExpc3REaXYuc2Nyb2xsVG9wID0gcHJvamVjdExpc3REaXYuc2Nyb2xsSGVpZ2h0O1xuICB9XG59KTtcblxuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XG4gIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGlmIChlLmNvZGUgPT09IFwiRW50ZXJcIikge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1pbnB1dFwiKS52YWx1ZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0RGl2LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBwcm9qZWN0TmFtZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIsIGkpO1xuICAgIH1cbiAgICBwcm9qZWN0TGlzdEZvcm0ucmVzZXQoKTtcbiAgICBwcm9qZWN0TGlzdEZvcm0ucmVtb3ZlKCk7XG4gICAgcHJvamVjdExpc3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICAgIHNldEFjdGl2ZVRvRmFsc2UoKTtcbiAgICBjcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lLnRleHRDb250ZW50LCBbXSwgdHJ1ZSk7XG4gICAgcmVtb3ZlQWN0aXZlQ2xhc3MoKTtcbiAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICAgIGNoYW5nZVRpdGxlKCk7XG4gICAgY2xlYXJUb2RvcygpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RzQXJyYXkpO1xuICB9XG59KTtcblxuY29uc3QgY2hhbmdlQWN0aXZlQ2xhc3MgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1saXN0LWRpdlwiKTtcblxuICBwcm9qZWN0TGlzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBpZiAoZS50YXJnZXQudGFnTmFtZSA9PSBcIlBcIikge1xuICAgICAgcmVtb3ZlQWN0aXZlQ2xhc3MoKTtcbiAgICAgIGNsZWFyVG9kb3MoKTtcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IHNldEFjdGl2ZVRvRmFsc2UgPSAoKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIHByb2plY3RzQXJyYXlbaV0uYWN0aXZlID0gZmFsc2U7XG4gIH1cbn07XG5cbmNvbnN0IHJlbW92ZUFjdGl2ZUNsYXNzID0gKCkgPT4ge1xuICBjb25zdCBjaGlsZHJlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtbGlzdC1kaXZcIikuY2hpbGRyZW47XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGNoaWxkcmVuW2ldLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH1cbn07XG5cbmNvbnN0IGFjdGl2ZVByb2plY3QgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLWxpc3QtZGl2XCIpO1xuICBwcm9qZWN0U2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKFxuICAgICAgICBwYXJzZUludChwcm9qZWN0c0FycmF5LmluZGV4T2YocHJvamVjdHNBcnJheVtpXSkpID09PVxuICAgICAgICAgIHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQuaW5kZXgpICYmXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKSAmJlxuICAgICAgICBlLnRhcmdldC50YWdOYW1lID09IFwiUFwiXG4gICAgICApIHtcbiAgICAgICAgcHJvamVjdHNBcnJheVtpXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5KTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHBhcnNlSW50KHByb2plY3RzQXJyYXkuaW5kZXhPZihwcm9qZWN0c0FycmF5W2ldKSkgIT09XG4gICAgICAgICAgcGFyc2VJbnQoZS50YXJnZXQuZGF0YXNldC5pbmRleCkgJiZcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpICYmXG4gICAgICAgIGUudGFyZ2V0LnRhZ05hbWUgPT0gXCJQXCJcbiAgICAgICkge1xuICAgICAgICBwcm9qZWN0c0FycmF5W2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUgPT0gXCJQXCIpIHtcbiAgICAgICAgZGlzcGxheUFjdGl2ZVRvZG9zKGUsIGkpO1xuICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VUaXRsZSgpO1xuICB9KTtcbn07XG5cbmNvbnN0IGRpc3BsYXlBY3RpdmVUb2RvcyA9IChlLCBpKSA9PiB7XG4gIGZvciAobGV0IG4gPSAwOyBuIDwgcHJvamVjdHNBcnJheVtpXS50b2Rvcy5sZW5ndGg7IG4rKykge1xuICAgIGlmIChcbiAgICAgIHBhcnNlSW50KHByb2plY3RzQXJyYXkuaW5kZXhPZihwcm9qZWN0c0FycmF5W2ldKSkgPT09XG4gICAgICAgIHBhcnNlSW50KGUudGFyZ2V0LmRhdGFzZXQuaW5kZXgpICYmXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIilcbiAgICApIHtcbiAgICAgIGRpc3BsYXlUb2Rvcyhwcm9qZWN0c0FycmF5W2ldLnRvZG9zW25dKTtcbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCB7IHByb2plY3RGb3JtRGl2LCBjaGFuZ2VBY3RpdmVDbGFzcywgYWN0aXZlUHJvamVjdCwgZGlzcGxheUFjdGl2ZVRvZG9zIH07XG4iLCJpbXBvcnQgeyBkaXNwbGF5VG9kb3MgfSBmcm9tIFwiLi9hY3RpdmVQcm9qZWN0XCI7XG5cbmNvbnN0IHByb2plY3RzQXJyYXkgPSBbXTtcblxuY29uc3QgUHJvamVjdCA9ICh0aXRsZSwgdG9kb3MsIGFjdGl2ZSkgPT4ge1xuICByZXR1cm4geyB0aXRsZSwgdG9kb3MsIGFjdGl2ZSB9O1xufTtcblxuY29uc3QgY3JlYXRlUHJvamVjdCA9ICh0aXRsZSwgdG9kb3MsIGFjdGl2ZSkgPT4ge1xuICBsZXQgbmV3UHJvamVjdCA9IFByb2plY3QoKTtcbiAgbmV3UHJvamVjdC50aXRsZSA9IHRpdGxlO1xuICBuZXdQcm9qZWN0LnRvZG9zID0gWy4uLnRvZG9zXTtcbiAgbmV3UHJvamVjdC5hY3RpdmUgPSBhY3RpdmU7XG4gIHByb2plY3RzQXJyYXkucHVzaChuZXdQcm9qZWN0KTtcbn07XG5cbmNvbnN0IFRvZG8gPSAodGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgbm90ZXMsIGNvbXBsZXRlKSA9PiB7XG4gIHJldHVybiB7IHRpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIG5vdGVzLCBjb21wbGV0ZSB9O1xufTtcblxuY29uc3QgY3JlYXRlVG9kbyA9IChcbiAgdGl0bGUsXG4gIGR1ZURhdGUsXG4gIGRlc2NyaXB0aW9uLFxuICBwcmlvcml0eSxcbiAgbm90ZXMsXG4gIGNvbXBsZXRlLFxuICBuZXdQcm9qZWN0XG4pID0+IHtcbiAgbGV0IG5ld1RvZG8gPSBUb2RvKCk7XG4gIG5ld1RvZG8udGl0bGUgPSB0aXRsZTtcbiAgbmV3VG9kby5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgbmV3VG9kby5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICBuZXdUb2RvLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gIG5ld1RvZG8ubm90ZXMgPSBub3RlcztcbiAgbmV3VG9kby5jb21wbGV0ZSA9IGNvbXBsZXRlO1xuICBkaXNwbGF5VG9kb3MobmV3VG9kbyk7XG4gIG5ld1Byb2plY3QucHVzaChuZXdUb2RvKTtcbn07XG5cbmV4cG9ydCB7IHByb2plY3RzQXJyYXksIGNyZWF0ZVByb2plY3QsIGNyZWF0ZVRvZG8gfTtcbiIsImltcG9ydCB7IGNyZWF0ZVRvZG8sIHByb2plY3RzQXJyYXkgfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuXG5jb25zdCB0b2RvRm9ybUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG50b2RvRm9ybUNvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tZm9ybS1jb250YWluZXJcIik7XG50b2RvRm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZGl2LWJhY2tncm91bmRcIik7XG5cbmNvbnN0IHRvZG9EaXZIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHRvZG9EaXZIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbnRvZG9EaXZIZWFkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1kaXYtaGVhZFwiKTtcbnRvZG9EaXZIZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLWRpdi1oZWFkZXJcIik7XG50b2RvRGl2SGVhZGVyLnRleHRDb250ZW50ID0gXCJDcmVhdGUgVG8tRG9cIjtcblxuY29uc3QgdG9kb0Zvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbnRvZG9Gb3JtRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1mb3JtLWRpdlwiKTtcbnRvZG9Gb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1mb3JtXCIpO1xuXG5jb25zdCB0b2RvVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgdG9kb1RpdGxlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5jb25zdCB0b2RvVGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbnRvZG9UaXRsZURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tdGl0bGUtZGl2XCIpO1xudG9kb1RpdGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWVsZW1lbnRzXCIpO1xudG9kb1RpdGxlTGFiZWwudGV4dENvbnRlbnQgPSBcIlRpdGxlOlwiO1xudG9kb1RpdGxlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cbmNvbnN0IHRvZG9EdWVEYXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHRvZG9EdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5jb25zdCB0b2RvRHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xudG9kb0R1ZURhdGVEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLWR1ZWRhdGUtZGl2XCIpO1xudG9kb0R1ZURhdGVEaXYuY2xhc3NMaXN0LmFkZChcImZvcm0tZWxlbWVudHNcIik7XG50b2RvRHVlRGF0ZUxhYmVsLnRleHRDb250ZW50ID0gXCJEYXRlOlwiO1xudG9kb0R1ZURhdGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcblxuY29uc3QgdG9kb0Rlc2NyaXB0aW9uRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHRvZG9EZXNjcmlwdGlvbkxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuY29uc3QgdG9kb0Rlc2NyaXB0aW9uSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG50b2RvRGVzY3JpcHRpb25EaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLWRlc2NyaXB0aW9uLWRpdlwiKTtcbnRvZG9EZXNjcmlwdGlvbkRpdi5jbGFzc0xpc3QuYWRkKFwiZm9ybS1lbGVtZW50c1wiKTtcbnRvZG9EZXNjcmlwdGlvbkxhYmVsLnRleHRDb250ZW50ID0gXCJEZXNjcmlwdGlvbjpcIjtcbnRvZG9EZXNjcmlwdGlvbklucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXG5jb25zdCB0b2RvUHJpb3JpdHlEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgdG9kb1ByaW9yaXR5TGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5jb25zdCB0b2RvUHJpb3JpdHlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbmNvbnN0IHRvZG9Qcmlvcml0eUxldmVscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCB0b2RvUHJpb3JpdHlMb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbmNvbnN0IHRvZG9Qcmlvcml0eU1pZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuY29uc3QgdG9kb1ByaW9yaXR5SGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xudG9kb1ByaW9yaXR5RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1wcmlvcml0eS1kaXZcIik7XG50b2RvUHJpb3JpdHlEaXYuY2xhc3NMaXN0LmFkZChcImZvcm0tZWxlbWVudHNcIik7XG50b2RvUHJpb3JpdHlMYWJlbC50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6XCI7XG50b2RvUHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwicmFuZ2VcIik7XG50b2RvUHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtaW5cIiwgXCIxXCIpO1xudG9kb1ByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKFwibWF4XCIsIFwiM1wiKTtcbnRvZG9Qcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwiMVwiKTtcbnRvZG9Qcmlvcml0eUxldmVscy5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByaW9yaXR5LWxldmVsc1wiKTtcbnRvZG9Qcmlvcml0eUxvdy50ZXh0Q29udGVudCA9IFwiTG93XCI7XG50b2RvUHJpb3JpdHlMb3cuc3R5bGUudGV4dFNoYWRvdyA9IFwiMCAwIDdweCByZWRcIjtcbnRvZG9Qcmlvcml0eU1pZC50ZXh0Q29udGVudCA9IFwiTWlkXCI7XG50b2RvUHJpb3JpdHlNaWQuc3R5bGUudGV4dFNoYWRvdyA9IFwiMCAwIDdweCB5ZWxsb3dcIjtcbnRvZG9Qcmlvcml0eUhpZ2gudGV4dENvbnRlbnQgPSBcIkhpZ2hcIjtcbnRvZG9Qcmlvcml0eUhpZ2guc3R5bGUudGV4dFNoYWRvdyA9IFwiMCAwIDdweCAjMzlmYzAzXCI7XG5cbmNvbnN0IHRvZG9Ob3Rlc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCB0b2RvTm90ZXNMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbmNvbnN0IHRvZG9Ob3Rlc0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xudG9kb05vdGVzRGl2LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWVsZW1lbnRzXCIpO1xudG9kb05vdGVzRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1ub3Rlcy1kaXZcIik7XG50b2RvTm90ZXNJbnB1dC5zZXRBdHRyaWJ1dGUoXCJyb3dzXCIsIFwiNVwiKTtcbnRvZG9Ob3Rlc0xhYmVsLnRleHRDb250ZW50ID0gXCJOb3RlczpcIjtcblxuY29uc3QgdG9kb1N1Ym1pdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCB0b2RvU3VibWl0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbnRvZG9TdWJtaXREaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLXN1Ym1pdC1kaXZcIik7XG50b2RvU3VibWl0QnRuLnRleHRDb250ZW50ID0gXCJTdWJtaXRcIjtcblxudG9kb0Zvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0RpdkhlYWQpO1xudG9kb0Zvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0Zvcm1EaXYpO1xudG9kb0RpdkhlYWQuYXBwZW5kQ2hpbGQodG9kb0RpdkhlYWRlcik7XG50b2RvRm9ybURpdi5hcHBlbmRDaGlsZCh0b2RvRm9ybSk7XG50b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvVGl0bGVEaXYpO1xudG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb0R1ZURhdGVEaXYpO1xudG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb0Rlc2NyaXB0aW9uRGl2KTtcbnRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9Qcmlvcml0eURpdik7XG50b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvTm90ZXNEaXYpO1xudG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb1N1Ym1pdERpdik7XG50b2RvVGl0bGVEaXYuYXBwZW5kQ2hpbGQodG9kb1RpdGxlTGFiZWwpO1xudG9kb1RpdGxlRGl2LmFwcGVuZENoaWxkKHRvZG9UaXRsZUlucHV0KTtcbnRvZG9EdWVEYXRlRGl2LmFwcGVuZENoaWxkKHRvZG9EdWVEYXRlTGFiZWwpO1xudG9kb0R1ZURhdGVEaXYuYXBwZW5kQ2hpbGQodG9kb0R1ZURhdGVJbnB1dCk7XG50b2RvRGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQodG9kb0Rlc2NyaXB0aW9uTGFiZWwpO1xudG9kb0Rlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKHRvZG9EZXNjcmlwdGlvbklucHV0KTtcbnRvZG9Qcmlvcml0eURpdi5hcHBlbmRDaGlsZCh0b2RvUHJpb3JpdHlMYWJlbCk7XG50b2RvUHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQodG9kb1ByaW9yaXR5TGV2ZWxzKTtcbnRvZG9Qcmlvcml0eUxldmVscy5hcHBlbmRDaGlsZCh0b2RvUHJpb3JpdHlMb3cpO1xudG9kb1ByaW9yaXR5TGV2ZWxzLmFwcGVuZENoaWxkKHRvZG9Qcmlvcml0eU1pZCk7XG50b2RvUHJpb3JpdHlMZXZlbHMuYXBwZW5kQ2hpbGQodG9kb1ByaW9yaXR5SGlnaCk7XG50b2RvUHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQodG9kb1ByaW9yaXR5SW5wdXQpO1xudG9kb05vdGVzRGl2LmFwcGVuZENoaWxkKHRvZG9Ob3Rlc0xhYmVsKTtcbnRvZG9Ob3Rlc0Rpdi5hcHBlbmRDaGlsZCh0b2RvTm90ZXNJbnB1dCk7XG50b2RvU3VibWl0RGl2LmFwcGVuZENoaWxkKHRvZG9TdWJtaXRCdG4pO1xuXG5jb25zdCBwdXNoVG9BY3RpdmVQcm9qZWN0ID0gKCkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocHJvamVjdHNBcnJheVtpXS5hY3RpdmUgPT0gdHJ1ZSkge1xuICAgICAgcmV0dXJuIHByb2plY3RzQXJyYXlbaV0udG9kb3M7XG4gICAgfVxuICB9XG59O1xuXG50b2RvU3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY3JlYXRlVG9kbyhcbiAgICB0b2RvVGl0bGVJbnB1dC52YWx1ZSxcbiAgICB0b2RvRHVlRGF0ZUlucHV0LnZhbHVlLFxuICAgIHRvZG9EZXNjcmlwdGlvbklucHV0LnZhbHVlLFxuICAgIHRvZG9Qcmlvcml0eUlucHV0LnZhbHVlLFxuICAgIHRvZG9Ob3Rlc0lucHV0LnZhbHVlLFxuICAgIGZhbHNlLFxuICAgIHB1c2hUb0FjdGl2ZVByb2plY3QoKVxuICApO1xuICB0b2RvRm9ybS5yZXNldCgpO1xuICBjb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5KTtcbn0pO1xuXG5leHBvcnQgeyB0b2RvRm9ybUNvbnRhaW5lciB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IHByb2plY3RzQXJyYXkgfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuaW1wb3J0IHtcbiAgcHJvamVjdEZvcm1EaXYsXG4gIGNoYW5nZUFjdGl2ZUNsYXNzLFxuICBhY3RpdmVQcm9qZWN0LFxufSBmcm9tIFwiLi9wcm9qZWN0Rm9ybS5qc1wiO1xuaW1wb3J0IHtcbiAgYWN0aXZlUHJvamVjdERpdixcbiAgYWN0aXZlUHJvamVjdEhlYWQsXG4gIGFjdGl2ZVByb2plY3RUaXRsZSxcbiAgYWN0aXZlVG9kb0Rpdixcbn0gZnJvbSBcIi4vYWN0aXZlUHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgdG9kb0Zvcm1Db250YWluZXIgfSBmcm9tIFwiLi90b0RvRm9ybVwiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuY29udGVudC5hcHBlbmRDaGlsZChwcm9qZWN0Rm9ybURpdik7XG5jb250ZW50LmFwcGVuZENoaWxkKGFjdGl2ZVByb2plY3REaXYpO1xuY29udGVudC5hcHBlbmQodG9kb0Zvcm1Db250YWluZXIpO1xuYWN0aXZlUHJvamVjdERpdi5hcHBlbmRDaGlsZChhY3RpdmVQcm9qZWN0SGVhZCk7XG5hY3RpdmVQcm9qZWN0RGl2LmFwcGVuZENoaWxkKGFjdGl2ZVRvZG9EaXYpO1xuYWN0aXZlUHJvamVjdEhlYWQuYXBwZW5kQ2hpbGQoYWN0aXZlUHJvamVjdFRpdGxlKTtcblxuY2hhbmdlQWN0aXZlQ2xhc3MoKTtcbmFjdGl2ZVByb2plY3QoKTtcblxuY29uc29sZS5sb2cocHJvamVjdHNBcnJheSk7XG5cbmV4cG9ydCB7IGNvbnRlbnQgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==