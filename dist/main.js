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
___CSS_LOADER_EXPORT___.push([module.id, "html,\nbody {\n  margin: 0;\n  height: 100%;\n  overflow: hidden;\n}\n\n#content {\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  display: grid;\n  grid-template-columns: 1fr 7fr;\n  grid-template-rows: 1.5fr 2fr;\n  grid-auto-flow: row;\n  gap: 15px;\n  background: linear-gradient(\n    21deg,\n    rgba(249, 197, 3, 1) 0%,\n    rgba(0, 4, 4, 1) 30%,\n    rgba(0, 1, 1, 1) 70%,\n    rgba(0, 255, 192, 1) 100%\n  );\n}\n\n.div-background {\n  background-color: rgba(255, 255, 255, 0.61);\n  border: 2px solid black;\n  border-radius: 25px;\n}\n\n#project-form-div {\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n  display: flex;\n  padding: 0;\n  flex-direction: column;\n  margin: 15px 0 0 15px;\n  min-width: 200px;\n  height: 380px;\n}\n\n#project-div-head {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: -15px;\n  padding: 10px 10px 0 10px;\n  height: 50px;\n}\n\n#title-div {\n  display: flex;\n  padding-top: 6px;\n  padding-left: 1em;\n  align-items: flex-end;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n\n#projects-title {\n  text-decoration: underline;\n  font-size: 28px;\n}\n\n#button-div {\n  display: flex;\n  justify-content: flex-end;\n  height: 100%;\n}\n\n#projects-btn {\n  font-size: 18px;\n  font-weight: bold;\n  border-radius: 5px;\n  border: 1px solid black;\n  height: fit-content;\n  width: fit-content;\n  cursor: pointer;\n}\n\n#projects-list-div {\n  height: 100%;\n  padding: 0 10px 10px 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n#projects-list-div::-webkit-scrollbar {\n  width: 5px;\n}\n\n#projects-list-div::-webkit-scrollbar-track {\n  background-color: rgba(255, 255, 255, 0.13);\n  border: 1px solid rgba(255, 255, 255, 0.13);\n  border-radius: 20px;\n  margin-bottom: 20px;\n}\n\n#projects-list-div::-webkit-scrollbar-thumb {\n  background-color: rgba(255, 166, 0, 0.541);\n  border-radius: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.13);\n}\n\n.project-container {\n  width: 100%;\n  display: flex;\n}\n\n.project-name-div {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.delete-project-button-div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.delete-project-button {\n  cursor: pointer;\n  border: 1px solid black;\n  border-radius: 5px;\n  width: 15px;\n  height: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-weight: bold;\n}\n\n.project {\n  cursor: pointer;\n  font-size: 20px;\n  margin: 1px;\n}\n\n#active-project-div {\n  grid-column: 2 / 3;\n  grid-row: 1 / 3;\n  margin: 15px 15px 15px 0;\n  display: flex;\n  flex-direction: column;\n}\n\n.active {\n  font-weight: bold;\n  text-decoration: underline;\n}\n\n#active-project-head {\n  width: 100%;\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#active-project-title {\n  font-size: 46px;\n  text-decoration: underline;\n}\n\n#active-todo-div {\n  display: grid;\n  /* grid-template-rows: repeat(auto-fit, minmax(200px, 1fr)); */\n  grid-template-columns: repeat(auto-fit, 250px);\n  gap: 20px;\n  padding: 20px;\n  overflow-y: scroll;\n}\n\n#active-todo-div::-webkit-scrollbar {\n  width: 5px;\n}\n\n#active-todo-div:-webkit-scrollbar-track {\n  background-color: rgba(255, 255, 255, 0.13);\n  border: 1px solid rgba(255, 255, 255, 0.13);\n  border-radius: 20px;\n  margin-bottom: 20px;\n}\n\n#active-todo-div::-webkit-scrollbar-thumb {\n  background-color: rgba(255, 166, 0, 0.541);\n  border-radius: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.13);\n}\n\n.todo-div {\n  width: 200px;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  margin: 15px;\n}\n\n.todo-header {\n  display: flex;\n  justify-content: space-between;\n}\n\n.todo-title-div {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\n.delete-todo-div {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.delete-todo-btn {\n  font-size: 10px;\n  font-weight: bold;\n  border-radius: 5px;\n  border: 1px solid black;\n  height: 16px;\n  width: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.todo-title {\n  font-size: 24px;\n  font-weight: bold;\n  text-decoration: underline;\n}\n\n.todo-description {\n  font-style: italic;\n}\n\n.expand-todo-div {\n  display: flex;\n  justify-content: center;\n  margin-top: 10px;\n}\n\n.expand-todo-button {\n  border: none;\n  background: rgba(0, 0, 0, 0);\n  cursor: pointer;\n}\n\n.todo-properties {\n  margin: 10px;\n  display: table;\n}\n\n#todo-form-container {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  display: flex;\n  padding: 0;\n  margin: 0 0 15px 15px;\n  min-width: 200px;\n  align-items: center;\n  flex-direction: column;\n}\n\n#todo-div-head {\n  width: 100%;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50px;\n}\n\n#todo-div-header {\n  font-size: 28px;\n  text-decoration: underline;\n}\n\n#todo-form-div {\n  width: 100%;\n  height: 100%;\n}\n\n#todo-form {\n  display: flex;\n  flex-direction: column;\n  padding: 0 10px 0 10px;\n  gap: 10px;\n}\n\n.form-elements {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n#priority-levels {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 3px 0 3px;\n  margin-bottom: -15px;\n  margin-top: -10px;\n}\n\n.todo-button-div {\n  display: flex;\n  justify-content: center;\n  margin-top: 10px;\n}\n\n.todo-button {\n  border: 2px solid black;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n#todo-submit-div {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 5px;\n}\n\n#todo-submit-div button {\n  font-size: 14px;\n  border-radius: 5px;\n  border: 1px solid black;\n  height: fit-content;\n  width: fit-content;\n  cursor: pointer;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html,\nbody {\n  margin: 0;\n  height: 100%;\n  overflow: hidden;\n}\n\n#content {\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  display: grid;\n  grid-template-columns: 1fr 7fr;\n  grid-template-rows: 1.5fr 2fr;\n  grid-auto-flow: row;\n  gap: 15px;\n  background: linear-gradient(\n    21deg,\n    rgba(249, 197, 3, 1) 0%,\n    rgba(0, 4, 4, 1) 30%,\n    rgba(0, 1, 1, 1) 70%,\n    rgba(0, 255, 192, 1) 100%\n  );\n}\n\n.div-background {\n  background-color: rgba(255, 255, 255, 0.61);\n  border: 2px solid black;\n  border-radius: 25px;\n}\n\n#project-form-div {\n  grid-column: 1 / 2;\n  grid-row: 1 / 2;\n  display: flex;\n  padding: 0;\n  flex-direction: column;\n  margin: 15px 0 0 15px;\n  min-width: 200px;\n  height: 380px;\n}\n\n#project-div-head {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: -15px;\n  padding: 10px 10px 0 10px;\n  height: 50px;\n}\n\n#title-div {\n  display: flex;\n  padding-top: 6px;\n  padding-left: 1em;\n  align-items: flex-end;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n}\n\n#projects-title {\n  text-decoration: underline;\n  font-size: 28px;\n}\n\n#button-div {\n  display: flex;\n  justify-content: flex-end;\n  height: 100%;\n}\n\n#projects-btn {\n  font-size: 18px;\n  font-weight: bold;\n  border-radius: 5px;\n  border: 1px solid black;\n  height: fit-content;\n  width: fit-content;\n  cursor: pointer;\n}\n\n#projects-list-div {\n  height: 100%;\n  padding: 0 10px 10px 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n#projects-list-div::-webkit-scrollbar {\n  width: 5px;\n}\n\n#projects-list-div::-webkit-scrollbar-track {\n  background-color: rgba(255, 255, 255, 0.13);\n  border: 1px solid rgba(255, 255, 255, 0.13);\n  border-radius: 20px;\n  margin-bottom: 20px;\n}\n\n#projects-list-div::-webkit-scrollbar-thumb {\n  background-color: rgba(255, 166, 0, 0.541);\n  border-radius: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.13);\n}\n\n.project-container {\n  width: 100%;\n  display: flex;\n}\n\n.project-name-div {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n\n.delete-project-button-div {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.delete-project-button {\n  cursor: pointer;\n  border: 1px solid black;\n  border-radius: 5px;\n  width: 15px;\n  height: 15px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10px;\n  font-weight: bold;\n}\n\n.project {\n  cursor: pointer;\n  font-size: 20px;\n  margin: 1px;\n}\n\n#active-project-div {\n  grid-column: 2 / 3;\n  grid-row: 1 / 3;\n  margin: 15px 15px 15px 0;\n  display: flex;\n  flex-direction: column;\n}\n\n.active {\n  font-weight: bold;\n  text-decoration: underline;\n}\n\n#active-project-head {\n  width: 100%;\n  height: 100px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#active-project-title {\n  font-size: 46px;\n  text-decoration: underline;\n}\n\n#active-todo-div {\n  display: grid;\n  /* grid-template-rows: repeat(auto-fit, minmax(200px, 1fr)); */\n  grid-template-columns: repeat(auto-fit, 250px);\n  gap: 20px;\n  padding: 20px;\n  overflow-y: scroll;\n}\n\n#active-todo-div::-webkit-scrollbar {\n  width: 5px;\n}\n\n#active-todo-div:-webkit-scrollbar-track {\n  background-color: rgba(255, 255, 255, 0.13);\n  border: 1px solid rgba(255, 255, 255, 0.13);\n  border-radius: 20px;\n  margin-bottom: 20px;\n}\n\n#active-todo-div::-webkit-scrollbar-thumb {\n  background-color: rgba(255, 166, 0, 0.541);\n  border-radius: 20px;\n  border: 1px solid rgba(255, 255, 255, 0.13);\n}\n\n.todo-div {\n  width: 200px;\n  height: fit-content;\n  display: flex;\n  flex-direction: column;\n  padding: 10px;\n  margin: 15px;\n}\n\n.todo-header {\n  display: flex;\n  justify-content: space-between;\n}\n\n.todo-title-div {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\n.delete-todo-div {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.delete-todo-btn {\n  font-size: 10px;\n  font-weight: bold;\n  border-radius: 5px;\n  border: 1px solid black;\n  height: 16px;\n  width: 16px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  cursor: pointer;\n}\n\n.todo-title {\n  font-size: 24px;\n  font-weight: bold;\n  text-decoration: underline;\n}\n\n.todo-description {\n  font-style: italic;\n}\n\n.expand-todo-div {\n  display: flex;\n  justify-content: center;\n  margin-top: 10px;\n}\n\n.expand-todo-button {\n  border: none;\n  background: rgba(0, 0, 0, 0);\n  cursor: pointer;\n}\n\n.todo-properties {\n  margin: 10px;\n  display: table;\n}\n\n#todo-form-container {\n  grid-column: 1 / 2;\n  grid-row: 2 / 3;\n  display: flex;\n  padding: 0;\n  margin: 0 0 15px 15px;\n  min-width: 200px;\n  align-items: center;\n  flex-direction: column;\n}\n\n#todo-div-head {\n  width: 100%;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 50px;\n}\n\n#todo-div-header {\n  font-size: 28px;\n  text-decoration: underline;\n}\n\n#todo-form-div {\n  width: 100%;\n  height: 100%;\n}\n\n#todo-form {\n  display: flex;\n  flex-direction: column;\n  padding: 0 10px 0 10px;\n  gap: 10px;\n}\n\n.form-elements {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n#priority-levels {\n  display: flex;\n  justify-content: space-between;\n  padding: 0 3px 0 3px;\n  margin-bottom: -15px;\n  margin-top: -10px;\n}\n\n.todo-button-div {\n  display: flex;\n  justify-content: center;\n  margin-top: 10px;\n}\n\n.todo-button {\n  border: 2px solid black;\n  border-radius: 5px;\n  cursor: pointer;\n}\n\n#todo-submit-div {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 5px;\n}\n\n#todo-submit-div button {\n  font-size: 14px;\n  border-radius: 5px;\n  border: 1px solid black;\n  height: fit-content;\n  width: fit-content;\n  cursor: pointer;\n}\n"],"sourceRoot":""}]);
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
  let expandTodoDiv = document.createElement("div");
  let expandTodoBtn = document.createElement("button");

  todoDiv.classList.add("todo-div");
  todoDiv.classList.add("div-background");
  todoHeader.classList.add("todo-header");
  todoTitleDiv.classList.add("todo-title-div");
  todoTitle.classList.add("todo-title");
  deleteTodoDiv.classList.add("delete-todo-div");
  deleteTodoBtn.classList.add("delete-todo-btn");
  todoDueDate.classList.add("todo-due-date");
  todoDescription.classList.add("todo-description");
  todoPriority.classList.add("todo-priority");
  todoNotes.classList.add("todo-notes");
  todoComplete.classList.add("todo-complete");
  todoTitle.classList.add("todo-properties");
  todoDueDate.classList.add("todo-properties");
  todoDescription.classList.add("todo-properties");
  todoPriority.classList.add("todo-properties");
  todoNotes.classList.add("todo-properties");
  todoCompleteDiv.classList.add("todo-button-div");
  todoComplete.classList.add("todo-button");
  expandTodoDiv.classList.add("expand-todo-div");
  expandTodoBtn.classList.add("expand-todo-button");

  deleteTodoBtn.textContent = "X";
  expandTodoBtn.textContent = "▾";

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

      if (todo.complete == false) {
        todoComplete.style.border = "2px solid red";
        todoComplete.style.boxShadow = "red 0px 0px 5px 1px";
        todoComplete.style.background = "red";
      } else if (todo.complete == true) {
        todoComplete.style.border = "2px solid #05db05";
        todoComplete.style.boxShadow = "#05db05 0px 0px 5px 1px";
        todoComplete.style.background = "#05db05";
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
  todoDiv.appendChild(todoCompleteDiv);
  todoCompleteDiv.appendChild(todoComplete);
  todoDiv.appendChild(expandTodoDiv);
  expandTodoDiv.appendChild(expandTodoBtn);

  todoComplete.addEventListener("click", (e) => {
    const storedProjects = JSON.parse(localStorage.getItem("projects"));
    const clickedTodoIndex = parseInt(
      e.target.closest(".todo-div").dataset.todoIndex
    );
    const activeProject = storedProjects.find(
      (project) => project.active === true
    );

    if (todo.complete == false) {
      todo.complete = true;
      e.target.textContent = "complete";
      e.target.style.border = "2px solid #05db05";
      e.target.style.boxShadow = "#05db05 0px 0px 5px 1px";
      e.target.style.background = "#05db05";
      console.log(_projects_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray);
    } else if (todo.complete == true) {
      todo.complete = false;
      e.target.textContent = "incomplete";
      e.target.style.border = "2px solid red";
      e.target.style.boxShadow = "red 0px 0px 5px 1px";
      e.target.style.background = "red";
      console.log(_projects_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray);
    }

    if (activeProject) {
      // Find and toggle the complete status of the clicked todo
      if (activeProject.todos[clickedTodoIndex]) {
        activeProject.todos[clickedTodoIndex].complete =
          !activeProject.todos[clickedTodoIndex].complete;

        // Update localStorage with the modified active project
        localStorage.setItem("projects", JSON.stringify(storedProjects));
      }
    }
  });

  deleteTodoBtn.addEventListener("click", (e) => {
    let buttonDiv = e.target.parentNode;
    let todoHead = buttonDiv.parentNode;
    let todoToRemove = todoHead.parentNode;
    const todoList = activeTodoDiv.children;
    const storedProjects = JSON.parse(localStorage.getItem("projects"));
    const clickedTodoIndex = parseInt(
      e.target.closest(".todo-div").dataset.todoIndex
    );
    const activeProject = storedProjects.find(
      (project) => project.active === true
    );
    todoToRemove.remove();

    for (let i = 0; i < todoList.length; i++) {
      todoList[i].setAttribute("data-todo-index", i);
    }

    if (activeProject) {
      if (activeProject.todos[clickedTodoIndex]) {
        activeProject.todos.splice(clickedTodoIndex, 1);

        localStorage.setItem("projects", JSON.stringify(storedProjects));
      }
    }

    for (let i = 0; i < _projects_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray.length; i++) {
      if (_projects_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[i].active == true) {
        let thisTodo = _projects_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[i].todos.indexOf(todo);
        _projects_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[i].todos.splice(thisTodo, 1);
        return;
      }
    }
  });

  expandTodoBtn.addEventListener("click", () => {
    if (todoDiv.querySelector(".todo-priority") === null) {
      todoCompleteDiv.remove();
      expandTodoDiv.remove();
      todoDiv.appendChild(todoPriority);
      todoDiv.appendChild(todoNotes);
      todoDiv.appendChild(todoCompleteDiv);
      todoDiv.appendChild(expandTodoDiv);
      expandTodoBtn.textContent = "▴";
    } else {
      todoPriority.remove();
      todoNotes.remove();
      expandTodoBtn.textContent = "▾";
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
/* harmony export */   "deleteProject": () => (/* binding */ deleteProject),
/* harmony export */   "displayActiveTodos": () => (/* binding */ displayActiveTodos),
/* harmony export */   "projectFormDiv": () => (/* binding */ projectFormDiv),
/* harmony export */   "projectListDiv": () => (/* binding */ projectListDiv)
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
  const projectContainer = document.createElement("div");
  const projectNameDiv = document.createElement("div");
  const deleteProjectBtn = document.createElement("button");
  const deleteProjectBtnDiv = document.createElement("div");

  deleteProjectBtn.textContent = "x";
  deleteProjectBtn.classList.add("delete-project-button");
  projectContainer.classList.add("project-container");
  projectNameDiv.classList.add("project-name-div");
  deleteProjectBtnDiv.classList.add("delete-project-button-div");

  if (e.code === "Enter") {
    e.preventDefault();
    projectName.textContent = document.querySelector(".project-input").value;
    for (let i = 0; i < projectListDiv.children.length; i++) {
      projectContainer.setAttribute("data-index", i);
    }
    projectListForm.reset();
    projectListForm.remove();
    projectListDiv.appendChild(projectContainer);
    projectContainer.appendChild(projectNameDiv);
    projectContainer.appendChild(deleteProjectBtnDiv);
    projectNameDiv.appendChild(projectName);
    deleteProjectBtnDiv.appendChild(deleteProjectBtn);
    setActiveToFalse();
    (0,_projects_js__WEBPACK_IMPORTED_MODULE_1__.createProject)(projectName.textContent, [], true);
    removeActiveClass();
    projectName.classList.add("active");
    projectName.classList.add("project");
    (0,_activeProject_js__WEBPACK_IMPORTED_MODULE_0__.changeTitle)();
    storageProjectActiveStatus();
    (0,_activeProject_js__WEBPACK_IMPORTED_MODULE_0__.clearTodos)();
    console.log(_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray);
  }

  deleteProjectBtn.addEventListener("click", (e) => {
    deleteProject(e);
  });
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

const deleteProject = (e) => {
  const storedProjects = JSON.parse(localStorage.getItem("projects"));
  const projects = projectListDiv.children;
  projectContainer.remove();

  for (let i = 0; i < projects.length; i++) {
    projects[i].setAttribute("data-index", i);
  }

  for (let i = 0; i < _projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray.length; i++) {
    if (
      parseInt(_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray.indexOf(_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray[i])) ===
      parseInt(e.target.closest(".project-container").dataset.index)
    ) {
      _projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray.splice(i, 1);
      console.log(_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray);
    }
  }

  for (let i = 0; i < storedProjects.length; i++) {
    if (
      parseInt(e.target.closest(".project-container").dataset.index) ===
      parseInt(storedProjects.indexOf(storedProjects[i]))
    ) {
      storedProjects.splice(i, 1);
      localStorage.setItem("projects", [JSON.stringify(storedProjects)]);
      return;
    }
    storageProjectActiveStatus();
  }

  if (
    e.target.parentNode.previousElementSibling.children[0].classList.contains(
      "active"
    )
  ) {
    (0,_activeProject_js__WEBPACK_IMPORTED_MODULE_0__.clearTodos)();
    _activeProject_js__WEBPACK_IMPORTED_MODULE_0__.activeProjectTitle.textContent = "";
  }
};

const setActiveToFalse = () => {
  for (let i = 0; i < _projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray.length; i++) {
    _projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray[i].active = false;
  }
};

const removeActiveClass = () => {
  const children = document.getElementById("projects-list-div").children;

  for (let i = 0; i < children.length; i++) {
    const nestedChild = children[i];
    const grandChild = nestedChild.firstChild;
    const greatGrandChild = grandChild.firstChild;
    greatGrandChild.classList.remove("active");
  }
};

const activeProject = () => {
  const projectSelect = document.getElementById("projects-list-div");
  projectSelect.addEventListener("click", (e) => {
    for (let i = 0; i < _projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray.length; i++) {
      if (
        e.target.tagName == "P" &&
        parseInt(_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray.indexOf(_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray[i])) ===
          parseInt(e.target.closest(".project-container").dataset.index) &&
        e.target.classList.contains("active")
      ) {
        _projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray[i].active = true;
        console.log(_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray);
      } else if (
        e.target.tagName == "P" &&
        parseInt(_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray.indexOf(_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray[i])) !==
          parseInt(e.target.closest(".project-container").dataset.index) &&
        e.target.classList.contains("active")
      ) {
        _projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray[i].active = false;
      }
      if (e.target.tagName == "P") {
        displayActiveTodos(e, i);
      }
    }
    storageProjectActiveStatus();
    (0,_activeProject_js__WEBPACK_IMPORTED_MODULE_0__.changeTitle)();
    console.log(_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray);
  });
};

const storageProjectActiveStatus = () => {
  const storedProjects = JSON.parse(localStorage.getItem("projects"));

  for (let i = 0; i < _projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray.length; i++) {
    for (let p = 0; p < storedProjects.length; p++) {
      if (
        parseInt(_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray.indexOf(_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray[i])) ===
        parseInt(storedProjects.indexOf(storedProjects[p]))
      ) {
        storedProjects[p].active = _projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray[i].active;
        localStorage.setItem("projects", [JSON.stringify(storedProjects)]);
      }
    }
  }
};

const displayActiveTodos = (e, i) => {
  for (let n = 0; n < _projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray[i].todos.length; n++) {
    if (
      parseInt(_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray.indexOf(_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray[i])) ===
        parseInt(e.target.closest(".project-container").dataset.index) &&
      e.target.classList.contains("active")
    ) {
      (0,_activeProject_js__WEBPACK_IMPORTED_MODULE_0__.displayTodos)(_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray[i].todos[n]);
      for (let t = 0; t < _activeProject_js__WEBPACK_IMPORTED_MODULE_0__.activeTodoDiv.children.length; t++) {
        _activeProject_js__WEBPACK_IMPORTED_MODULE_0__.activeTodoDiv.children[t].setAttribute("data-todo-index", t);
      }
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
/* harmony export */   "Project": () => (/* binding */ Project),
/* harmony export */   "createProject": () => (/* binding */ createProject),
/* harmony export */   "createTodo": () => (/* binding */ createTodo),
/* harmony export */   "projectsArray": () => (/* binding */ projectsArray)
/* harmony export */ });
/* harmony import */ var _activeProject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activeProject.js */ "./src/activeProject.js");
/* harmony import */ var _storeProjects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storeProjects.js */ "./src/storeProjects.js");



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
  (0,_storeProjects_js__WEBPACK_IMPORTED_MODULE_1__.localStorageProject)(newProject);
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
  (0,_activeProject_js__WEBPACK_IMPORTED_MODULE_0__.displayTodos)(newTodo);
  newProject.push(newTodo);
  (0,_storeProjects_js__WEBPACK_IMPORTED_MODULE_1__.localStorageTodos)(newTodo);
};




/***/ }),

/***/ "./src/storeProjects.js":
/*!******************************!*\
  !*** ./src/storeProjects.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "localStorageProject": () => (/* binding */ localStorageProject),
/* harmony export */   "localStorageTodos": () => (/* binding */ localStorageTodos),
/* harmony export */   "onloadStorage": () => (/* binding */ onloadStorage)
/* harmony export */ });
/* harmony import */ var _projectForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectForm.js */ "./src/projectForm.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");



const onloadStorage = () => {
  // Add a "load" event listener to the window
  window.addEventListener("load", () => {
    // Check if the "projects" key in local storage is null or empty
    if (localStorage.getItem("projects") === null) {
      // If it's null or empty, set it to an empty array as a JSON string
      localStorage.setItem("projects", "[]");
    } else {
      const storedProjects = JSON.parse(localStorage.getItem("projects"));

      for (let i = 0; i < storedProjects.length; i++) {
        const projectName = document.createElement("p");
        const projectContainer = document.createElement("div");
        const projectNameDiv = document.createElement("div");
        const deleteProjectBtn = document.createElement("button");
        const deleteProjectBtnDiv = document.createElement("div");

        deleteProjectBtn.textContent = "x";
        deleteProjectBtn.classList.add("delete-project-button");
        projectContainer.classList.add("project-container");
        projectNameDiv.classList.add("project-name-div");
        deleteProjectBtnDiv.classList.add("delete-project-button-div");
        projectName.textContent = storedProjects[i].title;
        for (let t = 0; t <= _projectForm_js__WEBPACK_IMPORTED_MODULE_0__.projectListDiv.children.length; t++) {
          projectContainer.setAttribute("data-index", t);
        }
        _projectForm_js__WEBPACK_IMPORTED_MODULE_0__.projectListDiv.appendChild(projectContainer);
        projectContainer.appendChild(projectNameDiv);
        projectContainer.appendChild(deleteProjectBtnDiv);
        projectNameDiv.appendChild(projectName);
        deleteProjectBtnDiv.appendChild(deleteProjectBtn);
        projectName.classList.add("project");
        if (
          projectName.textContent == storedProjects[i].title &&
          storedProjects[i].active === true
        ) {
          projectName.classList.add("active");
        }
        deleteProjectBtn.addEventListener("click", (e) => {
          (0,_projectForm_js__WEBPACK_IMPORTED_MODULE_0__.deleteProject)(e);
        });
        createStoredProjects(
          storedProjects[i].title,
          storedProjects[i].todos,
          storedProjects[i].active
        );
      }
    }
  });
};
const localStorageProject = (newProject) => {
  // Store the new project data in a variable
  const storeNewProject = newProject;

  // Retrieve the existing projects from local storage
  const storedProjects = JSON.parse(localStorage.getItem("projects"));

  // Push the new project data to the existing projects array
  storedProjects.push(storeNewProject);

  // Update the "projects" key in local storage with the modified projects array
  localStorage.setItem("projects", [JSON.stringify(storedProjects)]);
};

const createStoredProjects = (title, todos, active) => {
  let newProject = (0,_projects_js__WEBPACK_IMPORTED_MODULE_1__.Project)();
  newProject.title = title;
  newProject.todos = [...todos];
  newProject.active = active;
  _projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray.push(newProject);
};

const localStorageTodos = (newTodo) => {
  // Retrieve existing projects from local storage
  const storedProjects = JSON.parse(localStorage.getItem("projects"));

  if (Array.isArray(storedProjects)) {
    // Find the active project (you might need to specify how to identify the active project)
    const activeProject = storedProjects.find(
      (project) => project.active === true
    );

    if (activeProject) {
      // Update the todos of the active project
      activeProject.todos.push(newTodo);

      // Save the updated projects back to local storage
      localStorage.setItem("projects", JSON.stringify(storedProjects));
    }
  }
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
/* harmony import */ var _activeProject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./activeProject.js */ "./src/activeProject.js");



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
  for (let i = 0; i < _projects_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray.length; i++) {
    if (_projects_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray.length > 0 && _projects_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[i].active == true) {
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
    }
  }
  for (let i = 0; i < _activeProject_js__WEBPACK_IMPORTED_MODULE_1__.activeTodoDiv.children.length; i++) {
    _activeProject_js__WEBPACK_IMPORTED_MODULE_1__.activeTodoDiv.children[i].setAttribute("data-todo-index", i);
  }
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
/* harmony import */ var _storeProjects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storeProjects */ "./src/storeProjects.js");







const content = document.querySelector("#content");
content.appendChild(_projectForm_js__WEBPACK_IMPORTED_MODULE_2__.projectFormDiv);
content.appendChild(_activeProject_js__WEBPACK_IMPORTED_MODULE_3__.activeProjectDiv);
content.append(_toDoForm__WEBPACK_IMPORTED_MODULE_4__.todoFormContainer);
_activeProject_js__WEBPACK_IMPORTED_MODULE_3__.activeProjectDiv.appendChild(_activeProject_js__WEBPACK_IMPORTED_MODULE_3__.activeProjectHead);
_activeProject_js__WEBPACK_IMPORTED_MODULE_3__.activeProjectDiv.appendChild(_activeProject_js__WEBPACK_IMPORTED_MODULE_3__.activeTodoDiv);
_activeProject_js__WEBPACK_IMPORTED_MODULE_3__.activeProjectHead.appendChild(_activeProject_js__WEBPACK_IMPORTED_MODULE_3__.activeProjectTitle);

(0,_projectForm_js__WEBPACK_IMPORTED_MODULE_2__.changeActiveClass)();
(0,_projectForm_js__WEBPACK_IMPORTED_MODULE_2__.activeProject)();
(0,_storeProjects__WEBPACK_IMPORTED_MODULE_5__.onloadStorage)();

console.log(_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray);



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsdURBQXVELGNBQWMsaUJBQWlCLHFCQUFxQixHQUFHLGNBQWMsa0JBQWtCLGlCQUFpQixjQUFjLGtCQUFrQixtQ0FBbUMsa0NBQWtDLHdCQUF3QixjQUFjLHFLQUFxSyxHQUFHLHFCQUFxQixnREFBZ0QsNEJBQTRCLHdCQUF3QixHQUFHLHVCQUF1Qix1QkFBdUIsb0JBQW9CLGtCQUFrQixlQUFlLDJCQUEyQiwwQkFBMEIscUJBQXFCLGtCQUFrQixHQUFHLHVCQUF1QixrQkFBa0IsbUNBQW1DLHlCQUF5Qiw4QkFBOEIsaUJBQWlCLEdBQUcsZ0JBQWdCLGtCQUFrQixxQkFBcUIsc0JBQXNCLDBCQUEwQiw0QkFBNEIsZ0JBQWdCLGlCQUFpQixHQUFHLHFCQUFxQiwrQkFBK0Isb0JBQW9CLEdBQUcsaUJBQWlCLGtCQUFrQiw4QkFBOEIsaUJBQWlCLEdBQUcsbUJBQW1CLG9CQUFvQixzQkFBc0IsdUJBQXVCLDRCQUE0Qix3QkFBd0IsdUJBQXVCLG9CQUFvQixHQUFHLHdCQUF3QixpQkFBaUIsOEJBQThCLGtCQUFrQiwyQkFBMkIsd0JBQXdCLHFCQUFxQix1QkFBdUIsR0FBRywyQ0FBMkMsZUFBZSxHQUFHLGlEQUFpRCxnREFBZ0QsZ0RBQWdELHdCQUF3Qix3QkFBd0IsR0FBRyxpREFBaUQsK0NBQStDLHdCQUF3QixnREFBZ0QsR0FBRyx3QkFBd0IsZ0JBQWdCLGtCQUFrQixHQUFHLHVCQUF1QixnQkFBZ0Isa0JBQWtCLDRCQUE0QixHQUFHLGdDQUFnQyxrQkFBa0Isd0JBQXdCLDRCQUE0QixHQUFHLDRCQUE0QixvQkFBb0IsNEJBQTRCLHVCQUF1QixnQkFBZ0IsaUJBQWlCLGtCQUFrQix3QkFBd0IsNEJBQTRCLG9CQUFvQixzQkFBc0IsR0FBRyxjQUFjLG9CQUFvQixvQkFBb0IsZ0JBQWdCLEdBQUcseUJBQXlCLHVCQUF1QixvQkFBb0IsNkJBQTZCLGtCQUFrQiwyQkFBMkIsR0FBRyxhQUFhLHNCQUFzQiwrQkFBK0IsR0FBRywwQkFBMEIsZ0JBQWdCLGtCQUFrQixrQkFBa0IsNEJBQTRCLHdCQUF3QixHQUFHLDJCQUEyQixvQkFBb0IsK0JBQStCLEdBQUcsc0JBQXNCLGtCQUFrQixpRUFBaUUscURBQXFELGNBQWMsa0JBQWtCLHVCQUF1QixHQUFHLHlDQUF5QyxlQUFlLEdBQUcsOENBQThDLGdEQUFnRCxnREFBZ0Qsd0JBQXdCLHdCQUF3QixHQUFHLCtDQUErQywrQ0FBK0Msd0JBQXdCLGdEQUFnRCxHQUFHLGVBQWUsaUJBQWlCLHdCQUF3QixrQkFBa0IsMkJBQTJCLGtCQUFrQixpQkFBaUIsR0FBRyxrQkFBa0Isa0JBQWtCLG1DQUFtQyxHQUFHLHFCQUFxQixrQkFBa0IsNEJBQTRCLGdCQUFnQixHQUFHLHNCQUFzQixrQkFBa0IsOEJBQThCLEdBQUcsc0JBQXNCLG9CQUFvQixzQkFBc0IsdUJBQXVCLDRCQUE0QixpQkFBaUIsZ0JBQWdCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLG9CQUFvQixHQUFHLGlCQUFpQixvQkFBb0Isc0JBQXNCLCtCQUErQixHQUFHLHVCQUF1Qix1QkFBdUIsR0FBRyxzQkFBc0Isa0JBQWtCLDRCQUE0QixxQkFBcUIsR0FBRyx5QkFBeUIsaUJBQWlCLGlDQUFpQyxvQkFBb0IsR0FBRyxzQkFBc0IsaUJBQWlCLG1CQUFtQixHQUFHLDBCQUEwQix1QkFBdUIsb0JBQW9CLGtCQUFrQixlQUFlLDBCQUEwQixxQkFBcUIsd0JBQXdCLDJCQUEyQixHQUFHLG9CQUFvQixnQkFBZ0IsaUJBQWlCLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGlCQUFpQixHQUFHLHNCQUFzQixvQkFBb0IsK0JBQStCLEdBQUcsb0JBQW9CLGdCQUFnQixpQkFBaUIsR0FBRyxnQkFBZ0Isa0JBQWtCLDJCQUEyQiwyQkFBMkIsY0FBYyxHQUFHLG9CQUFvQixrQkFBa0IsMkJBQTJCLGdCQUFnQixHQUFHLHNCQUFzQixrQkFBa0IsbUNBQW1DLHlCQUF5Qix5QkFBeUIsc0JBQXNCLEdBQUcsc0JBQXNCLGtCQUFrQiw0QkFBNEIscUJBQXFCLEdBQUcsa0JBQWtCLDRCQUE0Qix1QkFBdUIsb0JBQW9CLEdBQUcsc0JBQXNCLGtCQUFrQiw4QkFBOEIsb0JBQW9CLEdBQUcsNkJBQTZCLG9CQUFvQix1QkFBdUIsNEJBQTRCLHdCQUF3Qix1QkFBdUIsb0JBQW9CLEdBQUcsU0FBUyxpRkFBaUYsVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLHVDQUF1QyxjQUFjLGlCQUFpQixxQkFBcUIsR0FBRyxjQUFjLGtCQUFrQixpQkFBaUIsY0FBYyxrQkFBa0IsbUNBQW1DLGtDQUFrQyx3QkFBd0IsY0FBYyxxS0FBcUssR0FBRyxxQkFBcUIsZ0RBQWdELDRCQUE0Qix3QkFBd0IsR0FBRyx1QkFBdUIsdUJBQXVCLG9CQUFvQixrQkFBa0IsZUFBZSwyQkFBMkIsMEJBQTBCLHFCQUFxQixrQkFBa0IsR0FBRyx1QkFBdUIsa0JBQWtCLG1DQUFtQyx5QkFBeUIsOEJBQThCLGlCQUFpQixHQUFHLGdCQUFnQixrQkFBa0IscUJBQXFCLHNCQUFzQiwwQkFBMEIsNEJBQTRCLGdCQUFnQixpQkFBaUIsR0FBRyxxQkFBcUIsK0JBQStCLG9CQUFvQixHQUFHLGlCQUFpQixrQkFBa0IsOEJBQThCLGlCQUFpQixHQUFHLG1CQUFtQixvQkFBb0Isc0JBQXNCLHVCQUF1Qiw0QkFBNEIsd0JBQXdCLHVCQUF1QixvQkFBb0IsR0FBRyx3QkFBd0IsaUJBQWlCLDhCQUE4QixrQkFBa0IsMkJBQTJCLHdCQUF3QixxQkFBcUIsdUJBQXVCLEdBQUcsMkNBQTJDLGVBQWUsR0FBRyxpREFBaUQsZ0RBQWdELGdEQUFnRCx3QkFBd0Isd0JBQXdCLEdBQUcsaURBQWlELCtDQUErQyx3QkFBd0IsZ0RBQWdELEdBQUcsd0JBQXdCLGdCQUFnQixrQkFBa0IsR0FBRyx1QkFBdUIsZ0JBQWdCLGtCQUFrQiw0QkFBNEIsR0FBRyxnQ0FBZ0Msa0JBQWtCLHdCQUF3Qiw0QkFBNEIsR0FBRyw0QkFBNEIsb0JBQW9CLDRCQUE0Qix1QkFBdUIsZ0JBQWdCLGlCQUFpQixrQkFBa0Isd0JBQXdCLDRCQUE0QixvQkFBb0Isc0JBQXNCLEdBQUcsY0FBYyxvQkFBb0Isb0JBQW9CLGdCQUFnQixHQUFHLHlCQUF5Qix1QkFBdUIsb0JBQW9CLDZCQUE2QixrQkFBa0IsMkJBQTJCLEdBQUcsYUFBYSxzQkFBc0IsK0JBQStCLEdBQUcsMEJBQTBCLGdCQUFnQixrQkFBa0Isa0JBQWtCLDRCQUE0Qix3QkFBd0IsR0FBRywyQkFBMkIsb0JBQW9CLCtCQUErQixHQUFHLHNCQUFzQixrQkFBa0IsaUVBQWlFLHFEQUFxRCxjQUFjLGtCQUFrQix1QkFBdUIsR0FBRyx5Q0FBeUMsZUFBZSxHQUFHLDhDQUE4QyxnREFBZ0QsZ0RBQWdELHdCQUF3Qix3QkFBd0IsR0FBRywrQ0FBK0MsK0NBQStDLHdCQUF3QixnREFBZ0QsR0FBRyxlQUFlLGlCQUFpQix3QkFBd0Isa0JBQWtCLDJCQUEyQixrQkFBa0IsaUJBQWlCLEdBQUcsa0JBQWtCLGtCQUFrQixtQ0FBbUMsR0FBRyxxQkFBcUIsa0JBQWtCLDRCQUE0QixnQkFBZ0IsR0FBRyxzQkFBc0Isa0JBQWtCLDhCQUE4QixHQUFHLHNCQUFzQixvQkFBb0Isc0JBQXNCLHVCQUF1Qiw0QkFBNEIsaUJBQWlCLGdCQUFnQixrQkFBa0IsNEJBQTRCLHdCQUF3QixvQkFBb0IsR0FBRyxpQkFBaUIsb0JBQW9CLHNCQUFzQiwrQkFBK0IsR0FBRyx1QkFBdUIsdUJBQXVCLEdBQUcsc0JBQXNCLGtCQUFrQiw0QkFBNEIscUJBQXFCLEdBQUcseUJBQXlCLGlCQUFpQixpQ0FBaUMsb0JBQW9CLEdBQUcsc0JBQXNCLGlCQUFpQixtQkFBbUIsR0FBRywwQkFBMEIsdUJBQXVCLG9CQUFvQixrQkFBa0IsZUFBZSwwQkFBMEIscUJBQXFCLHdCQUF3QiwyQkFBMkIsR0FBRyxvQkFBb0IsZ0JBQWdCLGlCQUFpQixrQkFBa0IsNEJBQTRCLHdCQUF3QixpQkFBaUIsR0FBRyxzQkFBc0Isb0JBQW9CLCtCQUErQixHQUFHLG9CQUFvQixnQkFBZ0IsaUJBQWlCLEdBQUcsZ0JBQWdCLGtCQUFrQiwyQkFBMkIsMkJBQTJCLGNBQWMsR0FBRyxvQkFBb0Isa0JBQWtCLDJCQUEyQixnQkFBZ0IsR0FBRyxzQkFBc0Isa0JBQWtCLG1DQUFtQyx5QkFBeUIseUJBQXlCLHNCQUFzQixHQUFHLHNCQUFzQixrQkFBa0IsNEJBQTRCLHFCQUFxQixHQUFHLGtCQUFrQiw0QkFBNEIsdUJBQXVCLG9CQUFvQixHQUFHLHNCQUFzQixrQkFBa0IsOEJBQThCLG9CQUFvQixHQUFHLDZCQUE2QixvQkFBb0IsdUJBQXVCLDRCQUE0Qix3QkFBd0IsdUJBQXVCLG9CQUFvQixHQUFHLHFCQUFxQjtBQUNoN2M7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ3BGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGNBQWM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2RBLE1BQStGO0FBQy9GLE1BQXFGO0FBQ3JGLE1BQTRGO0FBQzVGLE1BQStHO0FBQy9HLE1BQXdHO0FBQ3hHLE1BQXdHO0FBQ3hHLE1BQW1HO0FBQ25HO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLHFHQUFtQjtBQUMvQyx3QkFBd0Isa0hBQWE7O0FBRXJDLHVCQUF1Qix1R0FBYTtBQUNwQztBQUNBLGlCQUFpQiwrRkFBTTtBQUN2Qiw2QkFBNkIsc0dBQWtCOztBQUUvQyxhQUFhLDBHQUFHLENBQUMsc0ZBQU87Ozs7QUFJNkM7QUFDckUsT0FBTyxpRUFBZSxzRkFBTyxJQUFJLDZGQUFjLEdBQUcsNkZBQWMsWUFBWSxFQUFDOzs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw0QkFBNEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNuRmE7O0FBRWI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNiOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsSUFBSSw4REFBb0IsRUFBRTtBQUM1QyxRQUFRLHVEQUFhO0FBQ3JCLHVDQUF1Qyx1REFBYTtBQUNwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLElBQUksOERBQW9CLEVBQUU7QUFDNUMsUUFBUSx1REFBYTtBQUNyQjtBQUNBLHdDQUF3QyxhQUFhO0FBQ3JEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVEQUFhO0FBQy9CLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHVEQUFhO0FBQy9COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixJQUFJLDhEQUFvQixFQUFFO0FBQzlDLFVBQVUsdURBQWE7QUFDdkIsdUJBQXVCLHVEQUFhO0FBQ3BDLFFBQVEsdURBQWE7QUFDckI7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBVUU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3TTBCO0FBQ2lDOztBQUU3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isb0NBQW9DO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwyREFBYTtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxJQUFJLDhEQUFXO0FBQ2Y7QUFDQSxJQUFJLDZEQUFVO0FBQ2QsZ0JBQWdCLHVEQUFhO0FBQzdCOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sNkRBQVU7QUFDaEI7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IscUJBQXFCO0FBQ3ZDO0FBQ0E7O0FBRUEsa0JBQWtCLElBQUksOERBQW9CLEVBQUU7QUFDNUM7QUFDQSxlQUFlLCtEQUFxQixDQUFDLHVEQUFhO0FBQ2xEO0FBQ0E7QUFDQSxNQUFNLDhEQUFvQjtBQUMxQixrQkFBa0IsdURBQWE7QUFDL0I7QUFDQTs7QUFFQSxrQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLDZEQUFVO0FBQ2QsSUFBSSw2RUFBOEI7QUFDbEM7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixJQUFJLDhEQUFvQixFQUFFO0FBQzVDLElBQUksdURBQWE7QUFDakI7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGtCQUFrQixxQkFBcUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixJQUFJLDhEQUFvQixFQUFFO0FBQzlDO0FBQ0E7QUFDQSxpQkFBaUIsK0RBQXFCLENBQUMsdURBQWE7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsUUFBUSx1REFBYTtBQUNyQixvQkFBb0IsdURBQWE7QUFDakMsUUFBUTtBQUNSO0FBQ0EsaUJBQWlCLCtEQUFxQixDQUFDLHVEQUFhO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsdURBQWE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSw4REFBVztBQUNmLGdCQUFnQix1REFBYTtBQUM3QixHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0IsSUFBSSw4REFBb0IsRUFBRTtBQUM1QyxvQkFBb0IsMkJBQTJCO0FBQy9DO0FBQ0EsaUJBQWlCLCtEQUFxQixDQUFDLHVEQUFhO0FBQ3BEO0FBQ0E7QUFDQSxtQ0FBbUMsdURBQWE7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixJQUFJLHVEQUFhLGtCQUFrQjtBQUNyRDtBQUNBLGVBQWUsK0RBQXFCLENBQUMsdURBQWE7QUFDbEQ7QUFDQTtBQUNBO0FBQ0EsTUFBTSwrREFBWSxDQUFDLHVEQUFhO0FBQ2hDLHNCQUFzQixJQUFJLDRFQUE2QixFQUFFO0FBQ3pELFFBQVEscUVBQXNCO0FBQzlCO0FBQ0E7QUFDQTtBQUNBOztBQVNFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BPZ0Q7QUFDMEI7O0FBRTVFOztBQUVBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsc0VBQW1CO0FBQ3JCOztBQUVBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwrREFBWTtBQUNkO0FBQ0EsRUFBRSxvRUFBaUI7QUFDbkI7O0FBRTZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NJO0FBQ1Y7O0FBRXZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOOztBQUVBLHNCQUFzQiwyQkFBMkI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsS0FBSywyRUFBOEIsRUFBRTtBQUM3RDtBQUNBO0FBQ0EsUUFBUSx1RUFBMEI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSw4REFBYTtBQUN2QixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQixxREFBTztBQUMxQjtBQUNBO0FBQ0E7QUFDQSxFQUFFLDREQUFrQjtBQUNwQjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFaUU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0ZQO0FBQ1A7O0FBRW5EO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQixJQUFJLDhEQUFvQixFQUFFO0FBQzVDLFFBQVEsdURBQWE7QUFDckIsYUFBYSx1REFBYTtBQUMxQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFrQixJQUFJLDhEQUFvQixFQUFFO0FBQzVDLFFBQVEsOERBQW9CLFFBQVEsdURBQWE7QUFDakQsTUFBTSx3REFBVTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsdURBQWE7QUFDL0I7QUFDQTtBQUNBLGtCQUFrQixJQUFJLDRFQUE2QixFQUFFO0FBQ3JELElBQUkscUVBQXNCO0FBQzFCO0FBQ0EsQ0FBQzs7QUFFNEI7Ozs7Ozs7VUNySTdCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FxQjtBQUN5QjtBQUtwQjtBQU1FO0FBQ21CO0FBQ0M7O0FBRWhEO0FBQ0Esb0JBQW9CLDJEQUFjO0FBQ2xDLG9CQUFvQiwrREFBZ0I7QUFDcEMsZUFBZSx3REFBaUI7QUFDaEMsMkVBQTRCLENBQUMsZ0VBQWlCO0FBQzlDLDJFQUE0QixDQUFDLDREQUFhO0FBQzFDLDRFQUE2QixDQUFDLGlFQUFrQjs7QUFFaEQsa0VBQWlCO0FBQ2pCLDhEQUFhO0FBQ2IsNkRBQWE7O0FBRWIsWUFBWSx1REFBYTs7QUFFTiIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9hY3RpdmVQcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdEZvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0b3JlUHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy90b0RvRm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiaHRtbCxcXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgN2ZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjVmciAyZnI7XFxuICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgZ2FwOiAxNXB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICAyMWRlZyxcXG4gICAgcmdiYSgyNDksIDE5NywgMywgMSkgMCUsXFxuICAgIHJnYmEoMCwgNCwgNCwgMSkgMzAlLFxcbiAgICByZ2JhKDAsIDEsIDEsIDEpIDcwJSxcXG4gICAgcmdiYSgwLCAyNTUsIDE5MiwgMSkgMTAwJVxcbiAgKTtcXG59XFxuXFxuLmRpdi1iYWNrZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufVxcblxcbiNwcm9qZWN0LWZvcm0tZGl2IHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAwO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogMTVweCAwIDAgMTVweDtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDM4MHB4O1xcbn1cXG5cXG4jcHJvamVjdC1kaXYtaGVhZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLWJvdHRvbTogLTE1cHg7XFxuICBwYWRkaW5nOiAxMHB4IDEwcHggMCAxMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4jdGl0bGUtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nLXRvcDogNnB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxZW07XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jcHJvamVjdHMtdGl0bGUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBmb250LXNpemU6IDI4cHg7XFxufVxcblxcbiNidXR0b24tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jcHJvamVjdHMtYnRuIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jcHJvamVjdHMtbGlzdC1kaXYge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMCAxMHB4IDEwcHggMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbiNwcm9qZWN0cy1saXN0LWRpdjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDVweDtcXG59XFxuXFxuI3Byb2plY3RzLWxpc3QtZGl2Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTMpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEzKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4jcHJvamVjdHMtbGlzdC1kaXY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNjYsIDAsIDAuNTQxKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTMpO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lLWRpdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbi1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBtYXJnaW46IDFweDtcXG59XFxuXFxuI2FjdGl2ZS1wcm9qZWN0LWRpdiB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMSAvIDM7XFxuICBtYXJnaW46IDE1cHggMTVweCAxNXB4IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4jYWN0aXZlLXByb2plY3QtaGVhZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jYWN0aXZlLXByb2plY3QtdGl0bGUge1xcbiAgZm9udC1zaXplOiA0NnB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbiNhY3RpdmUtdG9kby1kaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIC8qIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpOyAqL1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDI1MHB4KTtcXG4gIGdhcDogMjBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbiNhY3RpdmUtdG9kby1kaXY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA1cHg7XFxufVxcblxcbiNhY3RpdmUtdG9kby1kaXY6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEzKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMyk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuI2FjdGl2ZS10b2RvLWRpdjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE2NiwgMCwgMC41NDEpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMyk7XFxufVxcblxcbi50b2RvLWRpdiB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luOiAxNXB4O1xcbn1cXG5cXG4udG9kby1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRvZG8tdGl0bGUtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZGVsZXRlLXRvZG8tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4uZGVsZXRlLXRvZG8tYnRuIHtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICB3aWR0aDogMTZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi50b2RvLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmV4cGFuZC10b2RvLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uZXhwYW5kLXRvZG8tYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvLXByb3BlcnRpZXMge1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgZGlzcGxheTogdGFibGU7XFxufVxcblxcbiN0b2RvLWZvcm0tY29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwIDAgMTVweCAxNXB4O1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jdG9kby1kaXYtaGVhZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbiN0b2RvLWRpdi1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbiN0b2RvLWZvcm0tZGl2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jdG9kby1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMCAxMHB4IDAgMTBweDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmZvcm0tZWxlbWVudHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3ByaW9yaXR5LWxldmVscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMCAzcHggMCAzcHg7XFxuICBtYXJnaW4tYm90dG9tOiAtMTVweDtcXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xcbn1cXG5cXG4udG9kby1idXR0b24tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi50b2RvLWJ1dHRvbiB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3RvZG8tc3VibWl0LWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuI3RvZG8tc3VibWl0LWRpdiBidXR0b24ge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFLFNBQVM7RUFDVCxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixTQUFTO0VBQ1QsYUFBYTtFQUNiLDhCQUE4QjtFQUM5Qiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVDs7Ozs7O0dBTUM7QUFDSDs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQyx1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixhQUFhO0VBQ2IsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsb0JBQW9CO0VBQ3BCLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIsdUJBQXVCO0VBQ3ZCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQywyQ0FBMkM7RUFDM0MsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyxtQkFBbUI7RUFDbkIsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2Ysd0JBQXdCO0VBQ3hCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOERBQThEO0VBQzlELDhDQUE4QztFQUM5QyxTQUFTO0VBQ1QsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLDJDQUEyQztFQUMzQywyQ0FBMkM7RUFDM0MsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLDBDQUEwQztFQUMxQyxtQkFBbUI7RUFDbkIsMkNBQTJDO0FBQzdDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osNEJBQTRCO0VBQzVCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLFVBQVU7RUFDVixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixzQkFBc0I7RUFDdEIsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG9CQUFvQjtFQUNwQixvQkFBb0I7RUFDcEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCxcXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbiNjb250ZW50IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgN2ZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjVmciAyZnI7XFxuICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgZ2FwOiAxNXB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KFxcbiAgICAyMWRlZyxcXG4gICAgcmdiYSgyNDksIDE5NywgMywgMSkgMCUsXFxuICAgIHJnYmEoMCwgNCwgNCwgMSkgMzAlLFxcbiAgICByZ2JhKDAsIDEsIDEsIDEpIDcwJSxcXG4gICAgcmdiYSgwLCAyNTUsIDE5MiwgMSkgMTAwJVxcbiAgKTtcXG59XFxuXFxuLmRpdi1iYWNrZ3JvdW5kIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42MSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxufVxcblxcbiNwcm9qZWN0LWZvcm0tZGl2IHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAxIC8gMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAwO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogMTVweCAwIDAgMTVweDtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IDM4MHB4O1xcbn1cXG5cXG4jcHJvamVjdC1kaXYtaGVhZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luLWJvdHRvbTogLTE1cHg7XFxuICBwYWRkaW5nOiAxMHB4IDEwcHggMCAxMHB4O1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4jdGl0bGUtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nLXRvcDogNnB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxZW07XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jcHJvamVjdHMtdGl0bGUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBmb250LXNpemU6IDI4cHg7XFxufVxcblxcbiNidXR0b24tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jcHJvamVjdHMtYnRuIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jcHJvamVjdHMtbGlzdC1kaXYge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcGFkZGluZzogMCAxMHB4IDEwcHggMTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxuICBvdmVyZmxvdy14OiBoaWRkZW47XFxufVxcblxcbiNwcm9qZWN0cy1saXN0LWRpdjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDVweDtcXG59XFxuXFxuI3Byb2plY3RzLWxpc3QtZGl2Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTMpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEzKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4jcHJvamVjdHMtbGlzdC1kaXY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNjYsIDAsIDAuNTQxKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTMpO1xcbn1cXG5cXG4ucHJvamVjdC1jb250YWluZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4ucHJvamVjdC1uYW1lLWRpdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbi1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmRlbGV0ZS1wcm9qZWN0LWJ1dHRvbiB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHdpZHRoOiAxNXB4O1xcbiAgaGVpZ2h0OiAxNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ucHJvamVjdCB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXNpemU6IDIwcHg7XFxuICBtYXJnaW46IDFweDtcXG59XFxuXFxuI2FjdGl2ZS1wcm9qZWN0LWRpdiB7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxuICBncmlkLXJvdzogMSAvIDM7XFxuICBtYXJnaW46IDE1cHggMTVweCAxNXB4IDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4jYWN0aXZlLXByb2plY3QtaGVhZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jYWN0aXZlLXByb2plY3QtdGl0bGUge1xcbiAgZm9udC1zaXplOiA0NnB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbiNhY3RpdmUtdG9kby1kaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIC8qIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMjAwcHgsIDFmcikpOyAqL1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIDI1MHB4KTtcXG4gIGdhcDogMjBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbiNhY3RpdmUtdG9kby1kaXY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA1cHg7XFxufVxcblxcbiNhY3RpdmUtdG9kby1kaXY6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEzKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMyk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuI2FjdGl2ZS10b2RvLWRpdjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE2NiwgMCwgMC41NDEpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMyk7XFxufVxcblxcbi50b2RvLWRpdiB7XFxuICB3aWR0aDogMjAwcHg7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luOiAxNXB4O1xcbn1cXG5cXG4udG9kby1oZWFkZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuXFxuLnRvZG8tdGl0bGUtZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uZGVsZXRlLXRvZG8tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbn1cXG5cXG4uZGVsZXRlLXRvZG8tYnRuIHtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICB3aWR0aDogMTZweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvLXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMjRweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi50b2RvLWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmV4cGFuZC10b2RvLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4uZXhwYW5kLXRvZG8tYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi50b2RvLXByb3BlcnRpZXMge1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgZGlzcGxheTogdGFibGU7XFxufVxcblxcbiN0b2RvLWZvcm0tY29udGFpbmVyIHtcXG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gIGdyaWQtcm93OiAyIC8gMztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwIDAgMTVweCAxNXB4O1xcbiAgbWluLXdpZHRoOiAyMDBweDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4jdG9kby1kaXYtaGVhZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDUwcHg7XFxufVxcblxcbiN0b2RvLWRpdi1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbiN0b2RvLWZvcm0tZGl2IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4jdG9kby1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMCAxMHB4IDAgMTBweDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuLmZvcm0tZWxlbWVudHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuI3ByaW9yaXR5LWxldmVscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMCAzcHggMCAzcHg7XFxuICBtYXJnaW4tYm90dG9tOiAtMTVweDtcXG4gIG1hcmdpbi10b3A6IC0xMHB4O1xcbn1cXG5cXG4udG9kby1idXR0b24tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcblxcbi50b2RvLWJ1dHRvbiB7XFxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3RvZG8tc3VibWl0LWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG59XFxuXFxuI3RvZG8tc3VibWl0LWRpdiBidXR0b24ge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBoZWlnaHQ6IGZpdC1jb250ZW50O1xcbiAgd2lkdGg6IGZpdC1jb250ZW50O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0IHsgcHJvamVjdHNBcnJheSB9IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5cbmNvbnN0IGFjdGl2ZVByb2plY3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgYWN0aXZlUHJvamVjdEhlYWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgYWN0aXZlUHJvamVjdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuY29uc3QgYWN0aXZlVG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbmFjdGl2ZVByb2plY3REaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhY3RpdmUtcHJvamVjdC1kaXZcIik7XG5hY3RpdmVQcm9qZWN0RGl2LmNsYXNzTGlzdC5hZGQoXCJkaXYtYmFja2dyb3VuZFwiKTtcbmFjdGl2ZVByb2plY3RIZWFkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWN0aXZlLXByb2plY3QtaGVhZFwiKTtcbmFjdGl2ZVByb2plY3RUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFjdGl2ZS1wcm9qZWN0LXRpdGxlXCIpO1xuYWN0aXZlVG9kb0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFjdGl2ZS10b2RvLWRpdlwiKTtcblxuY29uc3QgY2hhbmdlVGl0bGUgPSAoKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwcm9qZWN0c0FycmF5W2ldLmFjdGl2ZSA9PSB0cnVlKSB7XG4gICAgICBhY3RpdmVQcm9qZWN0VGl0bGUudGV4dENvbnRlbnQgPSBwcm9qZWN0c0FycmF5W2ldLnRpdGxlO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgY2xlYXJUb2RvcyA9ICgpID0+IHtcbiAgd2hpbGUgKGFjdGl2ZVRvZG9EaXYuaGFzQ2hpbGROb2RlcygpKSB7XG4gICAgYWN0aXZlVG9kb0Rpdi5maXJzdENoaWxkLnJlbW92ZSgpO1xuICB9XG59O1xuXG5jb25zdCBkaXNwbGF5VG9kb3MgPSAodG9kbykgPT4ge1xuICBsZXQgdG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCB0b2RvSGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IHRvZG9UaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCB0b2RvVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbGV0IGRlbGV0ZVRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgZGVsZXRlVG9kb0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGxldCB0b2RvRHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBsZXQgdG9kb0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGxldCB0b2RvUHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbGV0IHRvZG9Ob3RlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBsZXQgdG9kb0NvbXBsZXRlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IHRvZG9Db21wbGV0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGxldCBleHBhbmRUb2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IGV4cGFuZFRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXG4gIHRvZG9EaXYuY2xhc3NMaXN0LmFkZChcInRvZG8tZGl2XCIpO1xuICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoXCJkaXYtYmFja2dyb3VuZFwiKTtcbiAgdG9kb0hlYWRlci5jbGFzc0xpc3QuYWRkKFwidG9kby1oZWFkZXJcIik7XG4gIHRvZG9UaXRsZURpdi5jbGFzc0xpc3QuYWRkKFwidG9kby10aXRsZS1kaXZcIik7XG4gIHRvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKFwidG9kby10aXRsZVwiKTtcbiAgZGVsZXRlVG9kb0Rpdi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXRvZG8tZGl2XCIpO1xuICBkZWxldGVUb2RvQnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtdG9kby1idG5cIik7XG4gIHRvZG9EdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWR1ZS1kYXRlXCIpO1xuICB0b2RvRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInRvZG8tZGVzY3JpcHRpb25cIik7XG4gIHRvZG9Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidG9kby1wcmlvcml0eVwiKTtcbiAgdG9kb05vdGVzLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLW5vdGVzXCIpO1xuICB0b2RvQ29tcGxldGUuY2xhc3NMaXN0LmFkZChcInRvZG8tY29tcGxldGVcIik7XG4gIHRvZG9UaXRsZS5jbGFzc0xpc3QuYWRkKFwidG9kby1wcm9wZXJ0aWVzXCIpO1xuICB0b2RvRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwidG9kby1wcm9wZXJ0aWVzXCIpO1xuICB0b2RvRGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZChcInRvZG8tcHJvcGVydGllc1wiKTtcbiAgdG9kb1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXByb3BlcnRpZXNcIik7XG4gIHRvZG9Ob3Rlcy5jbGFzc0xpc3QuYWRkKFwidG9kby1wcm9wZXJ0aWVzXCIpO1xuICB0b2RvQ29tcGxldGVEaXYuY2xhc3NMaXN0LmFkZChcInRvZG8tYnV0dG9uLWRpdlwiKTtcbiAgdG9kb0NvbXBsZXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWJ1dHRvblwiKTtcbiAgZXhwYW5kVG9kb0Rpdi5jbGFzc0xpc3QuYWRkKFwiZXhwYW5kLXRvZG8tZGl2XCIpO1xuICBleHBhbmRUb2RvQnRuLmNsYXNzTGlzdC5hZGQoXCJleHBhbmQtdG9kby1idXR0b25cIik7XG5cbiAgZGVsZXRlVG9kb0J0bi50ZXh0Q29udGVudCA9IFwiWFwiO1xuICBleHBhbmRUb2RvQnRuLnRleHRDb250ZW50ID0gXCLilr5cIjtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocHJvamVjdHNBcnJheVtpXS5hY3RpdmUgPT0gdHJ1ZSkge1xuICAgICAgdG9kb1RpdGxlLnRleHRDb250ZW50ID0gdG9kby50aXRsZTtcbiAgICAgIHRvZG9EdWVEYXRlLnRleHRDb250ZW50ID0gYER1ZTogJHt0b2RvLmR1ZURhdGV9YDtcbiAgICAgIHRvZG9EZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRvZG8uZGVzY3JpcHRpb247XG4gICAgICB0b2RvTm90ZXMudGV4dENvbnRlbnQgPSB0b2RvLm5vdGVzO1xuICAgICAgdG9kb0NvbXBsZXRlLnRleHRDb250ZW50ID0gXCJpbmNvbXBsZXRlXCI7XG5cbiAgICAgIGlmICh0b2RvLnByaW9yaXR5ID09IDEpIHtcbiAgICAgICAgdG9kb0Rpdi5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCByZWRcIjtcbiAgICAgICAgdG9kb0Rpdi5zdHlsZS5ib3hTaGFkb3cgPSBcIjAgMCAxMHB4IDVweCByZWRcIjtcbiAgICAgICAgdG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gXCJQcmlvcml0eTogTG93XCI7XG4gICAgICB9IGVsc2UgaWYgKHRvZG8ucHJpb3JpdHkgPT0gMikge1xuICAgICAgICB0b2RvRGl2LnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkIHllbGxvd1wiO1xuICAgICAgICB0b2RvRGl2LnN0eWxlLmJveFNoYWRvdyA9IFwiMCAwIDEwcHggNXB4IHllbGxvd1wiO1xuICAgICAgICB0b2RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBNaWRcIjtcbiAgICAgIH0gZWxzZSBpZiAodG9kby5wcmlvcml0eSA9PSAzKSB7XG4gICAgICAgIHRvZG9EaXYuc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgIzM5ZmMwM1wiO1xuICAgICAgICB0b2RvRGl2LnN0eWxlLmJveFNoYWRvdyA9IFwiMCAwIDEwcHggNXB4ICMzOWZjMDNcIjtcbiAgICAgICAgdG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gXCJQcmlvcml0eTogSGlnaFwiO1xuICAgICAgfVxuXG4gICAgICBpZiAodG9kby5jb21wbGV0ZSA9PSBmYWxzZSkge1xuICAgICAgICB0b2RvQ29tcGxldGUuc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgcmVkXCI7XG4gICAgICAgIHRvZG9Db21wbGV0ZS5zdHlsZS5ib3hTaGFkb3cgPSBcInJlZCAwcHggMHB4IDVweCAxcHhcIjtcbiAgICAgICAgdG9kb0NvbXBsZXRlLnN0eWxlLmJhY2tncm91bmQgPSBcInJlZFwiO1xuICAgICAgfSBlbHNlIGlmICh0b2RvLmNvbXBsZXRlID09IHRydWUpIHtcbiAgICAgICAgdG9kb0NvbXBsZXRlLnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkICMwNWRiMDVcIjtcbiAgICAgICAgdG9kb0NvbXBsZXRlLnN0eWxlLmJveFNoYWRvdyA9IFwiIzA1ZGIwNSAwcHggMHB4IDVweCAxcHhcIjtcbiAgICAgICAgdG9kb0NvbXBsZXRlLnN0eWxlLmJhY2tncm91bmQgPSBcIiMwNWRiMDVcIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgYWN0aXZlVG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvRGl2KTtcbiAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvSGVhZGVyKTtcbiAgdG9kb0hlYWRlci5hcHBlbmRDaGlsZCh0b2RvVGl0bGVEaXYpO1xuICB0b2RvSGVhZGVyLmFwcGVuZENoaWxkKGRlbGV0ZVRvZG9EaXYpO1xuICB0b2RvVGl0bGVEaXYuYXBwZW5kQ2hpbGQodG9kb1RpdGxlKTtcbiAgZGVsZXRlVG9kb0Rpdi5hcHBlbmRDaGlsZChkZWxldGVUb2RvQnRuKTtcbiAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvRHVlRGF0ZSk7XG4gIHRvZG9EaXYuYXBwZW5kQ2hpbGQodG9kb0Rlc2NyaXB0aW9uKTtcbiAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvQ29tcGxldGVEaXYpO1xuICB0b2RvQ29tcGxldGVEaXYuYXBwZW5kQ2hpbGQodG9kb0NvbXBsZXRlKTtcbiAgdG9kb0Rpdi5hcHBlbmRDaGlsZChleHBhbmRUb2RvRGl2KTtcbiAgZXhwYW5kVG9kb0Rpdi5hcHBlbmRDaGlsZChleHBhbmRUb2RvQnRuKTtcblxuICB0b2RvQ29tcGxldGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc3Qgc3RvcmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuICAgIGNvbnN0IGNsaWNrZWRUb2RvSW5kZXggPSBwYXJzZUludChcbiAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoXCIudG9kby1kaXZcIikuZGF0YXNldC50b2RvSW5kZXhcbiAgICApO1xuICAgIGNvbnN0IGFjdGl2ZVByb2plY3QgPSBzdG9yZWRQcm9qZWN0cy5maW5kKFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QuYWN0aXZlID09PSB0cnVlXG4gICAgKTtcblxuICAgIGlmICh0b2RvLmNvbXBsZXRlID09IGZhbHNlKSB7XG4gICAgICB0b2RvLmNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID0gXCJjb21wbGV0ZVwiO1xuICAgICAgZS50YXJnZXQuc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgIzA1ZGIwNVwiO1xuICAgICAgZS50YXJnZXQuc3R5bGUuYm94U2hhZG93ID0gXCIjMDVkYjA1IDBweCAwcHggNXB4IDFweFwiO1xuICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9IFwiIzA1ZGIwNVwiO1xuICAgICAgY29uc29sZS5sb2cocHJvamVjdHNBcnJheSk7XG4gICAgfSBlbHNlIGlmICh0b2RvLmNvbXBsZXRlID09IHRydWUpIHtcbiAgICAgIHRvZG8uY29tcGxldGUgPSBmYWxzZTtcbiAgICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID0gXCJpbmNvbXBsZXRlXCI7XG4gICAgICBlLnRhcmdldC5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCByZWRcIjtcbiAgICAgIGUudGFyZ2V0LnN0eWxlLmJveFNoYWRvdyA9IFwicmVkIDBweCAwcHggNXB4IDFweFwiO1xuICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9IFwicmVkXCI7XG4gICAgICBjb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5KTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlUHJvamVjdCkge1xuICAgICAgLy8gRmluZCBhbmQgdG9nZ2xlIHRoZSBjb21wbGV0ZSBzdGF0dXMgb2YgdGhlIGNsaWNrZWQgdG9kb1xuICAgICAgaWYgKGFjdGl2ZVByb2plY3QudG9kb3NbY2xpY2tlZFRvZG9JbmRleF0pIHtcbiAgICAgICAgYWN0aXZlUHJvamVjdC50b2Rvc1tjbGlja2VkVG9kb0luZGV4XS5jb21wbGV0ZSA9XG4gICAgICAgICAgIWFjdGl2ZVByb2plY3QudG9kb3NbY2xpY2tlZFRvZG9JbmRleF0uY29tcGxldGU7XG5cbiAgICAgICAgLy8gVXBkYXRlIGxvY2FsU3RvcmFnZSB3aXRoIHRoZSBtb2RpZmllZCBhY3RpdmUgcHJvamVjdFxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KHN0b3JlZFByb2plY3RzKSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBkZWxldGVUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGxldCBidXR0b25EaXYgPSBlLnRhcmdldC5wYXJlbnROb2RlO1xuICAgIGxldCB0b2RvSGVhZCA9IGJ1dHRvbkRpdi5wYXJlbnROb2RlO1xuICAgIGxldCB0b2RvVG9SZW1vdmUgPSB0b2RvSGVhZC5wYXJlbnROb2RlO1xuICAgIGNvbnN0IHRvZG9MaXN0ID0gYWN0aXZlVG9kb0Rpdi5jaGlsZHJlbjtcbiAgICBjb25zdCBzdG9yZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG4gICAgY29uc3QgY2xpY2tlZFRvZG9JbmRleCA9IHBhcnNlSW50KFxuICAgICAgZS50YXJnZXQuY2xvc2VzdChcIi50b2RvLWRpdlwiKS5kYXRhc2V0LnRvZG9JbmRleFxuICAgICk7XG4gICAgY29uc3QgYWN0aXZlUHJvamVjdCA9IHN0b3JlZFByb2plY3RzLmZpbmQoXG4gICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5hY3RpdmUgPT09IHRydWVcbiAgICApO1xuICAgIHRvZG9Ub1JlbW92ZS5yZW1vdmUoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRvZG9MaXN0W2ldLnNldEF0dHJpYnV0ZShcImRhdGEtdG9kby1pbmRleFwiLCBpKTtcbiAgICB9XG5cbiAgICBpZiAoYWN0aXZlUHJvamVjdCkge1xuICAgICAgaWYgKGFjdGl2ZVByb2plY3QudG9kb3NbY2xpY2tlZFRvZG9JbmRleF0pIHtcbiAgICAgICAgYWN0aXZlUHJvamVjdC50b2Rvcy5zcGxpY2UoY2xpY2tlZFRvZG9JbmRleCwgMSk7XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShzdG9yZWRQcm9qZWN0cykpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHByb2plY3RzQXJyYXlbaV0uYWN0aXZlID09IHRydWUpIHtcbiAgICAgICAgbGV0IHRoaXNUb2RvID0gcHJvamVjdHNBcnJheVtpXS50b2Rvcy5pbmRleE9mKHRvZG8pO1xuICAgICAgICBwcm9qZWN0c0FycmF5W2ldLnRvZG9zLnNwbGljZSh0aGlzVG9kbywgMSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGV4cGFuZFRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBpZiAodG9kb0Rpdi5xdWVyeVNlbGVjdG9yKFwiLnRvZG8tcHJpb3JpdHlcIikgPT09IG51bGwpIHtcbiAgICAgIHRvZG9Db21wbGV0ZURpdi5yZW1vdmUoKTtcbiAgICAgIGV4cGFuZFRvZG9EaXYucmVtb3ZlKCk7XG4gICAgICB0b2RvRGl2LmFwcGVuZENoaWxkKHRvZG9Qcmlvcml0eSk7XG4gICAgICB0b2RvRGl2LmFwcGVuZENoaWxkKHRvZG9Ob3Rlcyk7XG4gICAgICB0b2RvRGl2LmFwcGVuZENoaWxkKHRvZG9Db21wbGV0ZURpdik7XG4gICAgICB0b2RvRGl2LmFwcGVuZENoaWxkKGV4cGFuZFRvZG9EaXYpO1xuICAgICAgZXhwYW5kVG9kb0J0bi50ZXh0Q29udGVudCA9IFwi4pa0XCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRvZG9Qcmlvcml0eS5yZW1vdmUoKTtcbiAgICAgIHRvZG9Ob3Rlcy5yZW1vdmUoKTtcbiAgICAgIGV4cGFuZFRvZG9CdG4udGV4dENvbnRlbnQgPSBcIuKWvlwiO1xuICAgIH1cbiAgfSk7XG59O1xuXG5leHBvcnQge1xuICBhY3RpdmVQcm9qZWN0RGl2LFxuICBhY3RpdmVQcm9qZWN0SGVhZCxcbiAgYWN0aXZlUHJvamVjdFRpdGxlLFxuICBjaGFuZ2VUaXRsZSxcbiAgYWN0aXZlVG9kb0RpdixcbiAgZGlzcGxheVRvZG9zLFxuICBjbGVhclRvZG9zLFxufTtcbiIsImltcG9ydCB7XG4gIGFjdGl2ZVByb2plY3RUaXRsZSxcbiAgY2hhbmdlVGl0bGUsXG4gIGNsZWFyVG9kb3MsXG4gIGRpc3BsYXlUb2RvcyxcbiAgYWN0aXZlVG9kb0Rpdixcbn0gZnJvbSBcIi4vYWN0aXZlUHJvamVjdC5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCwgcHJvamVjdHNBcnJheSB9IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5cbmNvbnN0IHByb2plY3RGb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHByb2plY3REaXZIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHByb2plY3RUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBwcm9qZWN0c1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5jb25zdCBwcm9qZWN0TGlzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBwcm9qZWN0c0J0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmNvbnN0IHByb2plY3RMaXN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbnByb2plY3RzVGl0bGUudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG5hZGRQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCIrXCI7XG5cbnByb2plY3RGb3JtRGl2LmNsYXNzTGlzdC5hZGQoXCJkaXYtYmFja2dyb3VuZFwiKTtcbnByb2plY3RGb3JtRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC1mb3JtLWRpdlwiKTtcbnByb2plY3REaXZIZWFkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC1kaXYtaGVhZFwiKTtcbnByb2plY3RUaXRsZURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRpdGxlLWRpdlwiKTtcbnByb2plY3RMaXN0RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdHMtbGlzdC1kaXZcIik7XG5wcm9qZWN0c0J0bkRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJ1dHRvbi1kaXZcIik7XG5wcm9qZWN0c1RpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdHMtdGl0bGVcIik7XG5hZGRQcm9qZWN0QnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdHMtYnRuXCIpO1xucHJvamVjdExpc3RGb3JtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWZvcm1cIik7XG5pbnB1dC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pbnB1dFwiKTtcblxucHJvamVjdEZvcm1EaXYuYXBwZW5kQ2hpbGQocHJvamVjdERpdkhlYWQpO1xucHJvamVjdERpdkhlYWQuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlRGl2KTtcbnByb2plY3REaXZIZWFkLmFwcGVuZENoaWxkKHByb2plY3RzQnRuRGl2KTtcbnByb2plY3RUaXRsZURpdi5hcHBlbmRDaGlsZChwcm9qZWN0c1RpdGxlKTtcbnByb2plY3RzQnRuRGl2LmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG4pO1xucHJvamVjdEZvcm1EaXYuYXBwZW5kQ2hpbGQocHJvamVjdExpc3REaXYpO1xucHJvamVjdExpc3RGb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcblxuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpZiAocHJvamVjdExpc3REaXYucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWZvcm1cIikgPT0gbnVsbCkge1xuICAgIHByb2plY3RMaXN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RMaXN0Rm9ybSk7XG4gICAgcHJvamVjdExpc3REaXYuc2Nyb2xsVG9wID0gcHJvamVjdExpc3REaXYuc2Nyb2xsSGVpZ2h0O1xuICB9XG59KTtcblxuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XG4gIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcm9qZWN0TmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBkZWxldGVQcm9qZWN0QnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBkZWxldGVQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gIGRlbGV0ZVByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1wcm9qZWN0LWJ1dHRvblwiKTtcbiAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jb250YWluZXJcIik7XG4gIHByb2plY3ROYW1lRGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWUtZGl2XCIpO1xuICBkZWxldGVQcm9qZWN0QnRuRGl2LmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtcHJvamVjdC1idXR0b24tZGl2XCIpO1xuXG4gIGlmIChlLmNvZGUgPT09IFwiRW50ZXJcIikge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1pbnB1dFwiKS52YWx1ZTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RMaXN0RGl2LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICBwcm9qZWN0Q29udGFpbmVyLnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgaSk7XG4gICAgfVxuICAgIHByb2plY3RMaXN0Rm9ybS5yZXNldCgpO1xuICAgIHByb2plY3RMaXN0Rm9ybS5yZW1vdmUoKTtcbiAgICBwcm9qZWN0TGlzdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lRGl2KTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdG5EaXYpO1xuICAgIHByb2plY3ROYW1lRGl2LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICBkZWxldGVQcm9qZWN0QnRuRGl2LmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdG4pO1xuICAgIHNldEFjdGl2ZVRvRmFsc2UoKTtcbiAgICBjcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lLnRleHRDb250ZW50LCBbXSwgdHJ1ZSk7XG4gICAgcmVtb3ZlQWN0aXZlQ2xhc3MoKTtcbiAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpO1xuICAgIGNoYW5nZVRpdGxlKCk7XG4gICAgc3RvcmFnZVByb2plY3RBY3RpdmVTdGF0dXMoKTtcbiAgICBjbGVhclRvZG9zKCk7XG4gICAgY29uc29sZS5sb2cocHJvamVjdHNBcnJheSk7XG4gIH1cblxuICBkZWxldGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGRlbGV0ZVByb2plY3QoZSk7XG4gIH0pO1xufSk7XG5cbmNvbnN0IGNoYW5nZUFjdGl2ZUNsYXNzID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtbGlzdC1kaXZcIik7XG5cbiAgcHJvamVjdExpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUgPT0gXCJQXCIpIHtcbiAgICAgIHJlbW92ZUFjdGl2ZUNsYXNzKCk7XG4gICAgICBjbGVhclRvZG9zKCk7XG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBkZWxldGVQcm9qZWN0ID0gKGUpID0+IHtcbiAgY29uc3Qgc3RvcmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuICBjb25zdCBwcm9qZWN0cyA9IHByb2plY3RMaXN0RGl2LmNoaWxkcmVuO1xuICBwcm9qZWN0Q29udGFpbmVyLnJlbW92ZSgpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICBwcm9qZWN0c1tpXS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIsIGkpO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKFxuICAgICAgcGFyc2VJbnQocHJvamVjdHNBcnJheS5pbmRleE9mKHByb2plY3RzQXJyYXlbaV0pKSA9PT1cbiAgICAgIHBhcnNlSW50KGUudGFyZ2V0LmNsb3Nlc3QoXCIucHJvamVjdC1jb250YWluZXJcIikuZGF0YXNldC5pbmRleClcbiAgICApIHtcbiAgICAgIHByb2plY3RzQXJyYXkuc3BsaWNlKGksIDEpO1xuICAgICAgY29uc29sZS5sb2cocHJvamVjdHNBcnJheSk7XG4gICAgfVxuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdG9yZWRQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChcbiAgICAgIHBhcnNlSW50KGUudGFyZ2V0LmNsb3Nlc3QoXCIucHJvamVjdC1jb250YWluZXJcIikuZGF0YXNldC5pbmRleCkgPT09XG4gICAgICBwYXJzZUludChzdG9yZWRQcm9qZWN0cy5pbmRleE9mKHN0b3JlZFByb2plY3RzW2ldKSlcbiAgICApIHtcbiAgICAgIHN0b3JlZFByb2plY3RzLnNwbGljZShpLCAxKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgW0pTT04uc3RyaW5naWZ5KHN0b3JlZFByb2plY3RzKV0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzdG9yYWdlUHJvamVjdEFjdGl2ZVN0YXR1cygpO1xuICB9XG5cbiAgaWYgKFxuICAgIGUudGFyZ2V0LnBhcmVudE5vZGUucHJldmlvdXNFbGVtZW50U2libGluZy5jaGlsZHJlblswXS5jbGFzc0xpc3QuY29udGFpbnMoXG4gICAgICBcImFjdGl2ZVwiXG4gICAgKVxuICApIHtcbiAgICBjbGVhclRvZG9zKCk7XG4gICAgYWN0aXZlUHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gXCJcIjtcbiAgfVxufTtcblxuY29uc3Qgc2V0QWN0aXZlVG9GYWxzZSA9ICgpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgcHJvamVjdHNBcnJheVtpXS5hY3RpdmUgPSBmYWxzZTtcbiAgfVxufTtcblxuY29uc3QgcmVtb3ZlQWN0aXZlQ2xhc3MgPSAoKSA9PiB7XG4gIGNvbnN0IGNoaWxkcmVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1saXN0LWRpdlwiKS5jaGlsZHJlbjtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgbmVzdGVkQ2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICBjb25zdCBncmFuZENoaWxkID0gbmVzdGVkQ2hpbGQuZmlyc3RDaGlsZDtcbiAgICBjb25zdCBncmVhdEdyYW5kQ2hpbGQgPSBncmFuZENoaWxkLmZpcnN0Q2hpbGQ7XG4gICAgZ3JlYXRHcmFuZENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XG4gIH1cbn07XG5cbmNvbnN0IGFjdGl2ZVByb2plY3QgPSAoKSA9PiB7XG4gIGNvbnN0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLWxpc3QtZGl2XCIpO1xuICBwcm9qZWN0U2VsZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKFxuICAgICAgICBlLnRhcmdldC50YWdOYW1lID09IFwiUFwiICYmXG4gICAgICAgIHBhcnNlSW50KHByb2plY3RzQXJyYXkuaW5kZXhPZihwcm9qZWN0c0FycmF5W2ldKSkgPT09XG4gICAgICAgICAgcGFyc2VJbnQoZS50YXJnZXQuY2xvc2VzdChcIi5wcm9qZWN0LWNvbnRhaW5lclwiKS5kYXRhc2V0LmluZGV4KSAmJlxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIilcbiAgICAgICkge1xuICAgICAgICBwcm9qZWN0c0FycmF5W2ldLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzQXJyYXkpO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgZS50YXJnZXQudGFnTmFtZSA9PSBcIlBcIiAmJlxuICAgICAgICBwYXJzZUludChwcm9qZWN0c0FycmF5LmluZGV4T2YocHJvamVjdHNBcnJheVtpXSkpICE9PVxuICAgICAgICAgIHBhcnNlSW50KGUudGFyZ2V0LmNsb3Nlc3QoXCIucHJvamVjdC1jb250YWluZXJcIikuZGF0YXNldC5pbmRleCkgJiZcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpXG4gICAgICApIHtcbiAgICAgICAgcHJvamVjdHNBcnJheVtpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChlLnRhcmdldC50YWdOYW1lID09IFwiUFwiKSB7XG4gICAgICAgIGRpc3BsYXlBY3RpdmVUb2RvcyhlLCBpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc3RvcmFnZVByb2plY3RBY3RpdmVTdGF0dXMoKTtcbiAgICBjaGFuZ2VUaXRsZSgpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RzQXJyYXkpO1xuICB9KTtcbn07XG5cbmNvbnN0IHN0b3JhZ2VQcm9qZWN0QWN0aXZlU3RhdHVzID0gKCkgPT4ge1xuICBjb25zdCBzdG9yZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgZm9yIChsZXQgcCA9IDA7IHAgPCBzdG9yZWRQcm9qZWN0cy5sZW5ndGg7IHArKykge1xuICAgICAgaWYgKFxuICAgICAgICBwYXJzZUludChwcm9qZWN0c0FycmF5LmluZGV4T2YocHJvamVjdHNBcnJheVtpXSkpID09PVxuICAgICAgICBwYXJzZUludChzdG9yZWRQcm9qZWN0cy5pbmRleE9mKHN0b3JlZFByb2plY3RzW3BdKSlcbiAgICAgICkge1xuICAgICAgICBzdG9yZWRQcm9qZWN0c1twXS5hY3RpdmUgPSBwcm9qZWN0c0FycmF5W2ldLmFjdGl2ZTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBbSlNPTi5zdHJpbmdpZnkoc3RvcmVkUHJvamVjdHMpXSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBkaXNwbGF5QWN0aXZlVG9kb3MgPSAoZSwgaSkgPT4ge1xuICBmb3IgKGxldCBuID0gMDsgbiA8IHByb2plY3RzQXJyYXlbaV0udG9kb3MubGVuZ3RoOyBuKyspIHtcbiAgICBpZiAoXG4gICAgICBwYXJzZUludChwcm9qZWN0c0FycmF5LmluZGV4T2YocHJvamVjdHNBcnJheVtpXSkpID09PVxuICAgICAgICBwYXJzZUludChlLnRhcmdldC5jbG9zZXN0KFwiLnByb2plY3QtY29udGFpbmVyXCIpLmRhdGFzZXQuaW5kZXgpICYmXG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIilcbiAgICApIHtcbiAgICAgIGRpc3BsYXlUb2Rvcyhwcm9qZWN0c0FycmF5W2ldLnRvZG9zW25dKTtcbiAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgYWN0aXZlVG9kb0Rpdi5jaGlsZHJlbi5sZW5ndGg7IHQrKykge1xuICAgICAgICBhY3RpdmVUb2RvRGl2LmNoaWxkcmVuW3RdLnNldEF0dHJpYnV0ZShcImRhdGEtdG9kby1pbmRleFwiLCB0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmV4cG9ydCB7XG4gIHByb2plY3RGb3JtRGl2LFxuICBjaGFuZ2VBY3RpdmVDbGFzcyxcbiAgYWN0aXZlUHJvamVjdCxcbiAgZGlzcGxheUFjdGl2ZVRvZG9zLFxuICBwcm9qZWN0TGlzdERpdixcbiAgZGVsZXRlUHJvamVjdCxcbn07XG4iLCJpbXBvcnQgeyBkaXNwbGF5VG9kb3MgfSBmcm9tIFwiLi9hY3RpdmVQcm9qZWN0LmpzXCI7XG5pbXBvcnQgeyBsb2NhbFN0b3JhZ2VQcm9qZWN0LCBsb2NhbFN0b3JhZ2VUb2RvcyB9IGZyb20gXCIuL3N0b3JlUHJvamVjdHMuanNcIjtcblxuY29uc3QgcHJvamVjdHNBcnJheSA9IFtdO1xuXG5jb25zdCBQcm9qZWN0ID0gKHRpdGxlLCB0b2RvcywgYWN0aXZlKSA9PiB7XG4gIHJldHVybiB7IHRpdGxlLCB0b2RvcywgYWN0aXZlIH07XG59O1xuXG5jb25zdCBjcmVhdGVQcm9qZWN0ID0gKHRpdGxlLCB0b2RvcywgYWN0aXZlKSA9PiB7XG4gIGxldCBuZXdQcm9qZWN0ID0gUHJvamVjdCgpO1xuICBuZXdQcm9qZWN0LnRpdGxlID0gdGl0bGU7XG4gIG5ld1Byb2plY3QudG9kb3MgPSBbLi4udG9kb3NdO1xuICBuZXdQcm9qZWN0LmFjdGl2ZSA9IGFjdGl2ZTtcbiAgcHJvamVjdHNBcnJheS5wdXNoKG5ld1Byb2plY3QpO1xuICBsb2NhbFN0b3JhZ2VQcm9qZWN0KG5ld1Byb2plY3QpO1xufTtcblxuY29uc3QgVG9kbyA9ICh0aXRsZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBub3RlcywgY29tcGxldGUpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgbm90ZXMsIGNvbXBsZXRlIH07XG59O1xuXG5jb25zdCBjcmVhdGVUb2RvID0gKFxuICB0aXRsZSxcbiAgZHVlRGF0ZSxcbiAgZGVzY3JpcHRpb24sXG4gIHByaW9yaXR5LFxuICBub3RlcyxcbiAgY29tcGxldGUsXG4gIG5ld1Byb2plY3RcbikgPT4ge1xuICBsZXQgbmV3VG9kbyA9IFRvZG8oKTtcbiAgbmV3VG9kby50aXRsZSA9IHRpdGxlO1xuICBuZXdUb2RvLmR1ZURhdGUgPSBkdWVEYXRlO1xuICBuZXdUb2RvLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gIG5ld1RvZG8ucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgbmV3VG9kby5ub3RlcyA9IG5vdGVzO1xuICBuZXdUb2RvLmNvbXBsZXRlID0gY29tcGxldGU7XG4gIGRpc3BsYXlUb2RvcyhuZXdUb2RvKTtcbiAgbmV3UHJvamVjdC5wdXNoKG5ld1RvZG8pO1xuICBsb2NhbFN0b3JhZ2VUb2RvcyhuZXdUb2RvKTtcbn07XG5cbmV4cG9ydCB7IHByb2plY3RzQXJyYXksIGNyZWF0ZVByb2plY3QsIGNyZWF0ZVRvZG8sIFByb2plY3QgfTtcbiIsImltcG9ydCB7IHByb2plY3RMaXN0RGl2LCBkZWxldGVQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdEZvcm0uanNcIjtcbmltcG9ydCB7IFByb2plY3QsIHByb2plY3RzQXJyYXkgfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuXG5jb25zdCBvbmxvYWRTdG9yYWdlID0gKCkgPT4ge1xuICAvLyBBZGQgYSBcImxvYWRcIiBldmVudCBsaXN0ZW5lciB0byB0aGUgd2luZG93XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gICAgLy8gQ2hlY2sgaWYgdGhlIFwicHJvamVjdHNcIiBrZXkgaW4gbG9jYWwgc3RvcmFnZSBpcyBudWxsIG9yIGVtcHR5XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikgPT09IG51bGwpIHtcbiAgICAgIC8vIElmIGl0J3MgbnVsbCBvciBlbXB0eSwgc2V0IGl0IHRvIGFuIGVtcHR5IGFycmF5IGFzIGEgSlNPTiBzdHJpbmdcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgXCJbXVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qgc3RvcmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0b3JlZFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjb25zdCBkZWxldGVQcm9qZWN0QnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICBkZWxldGVQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gICAgICAgIGRlbGV0ZVByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1wcm9qZWN0LWJ1dHRvblwiKTtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jb250YWluZXJcIik7XG4gICAgICAgIHByb2plY3ROYW1lRGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWUtZGl2XCIpO1xuICAgICAgICBkZWxldGVQcm9qZWN0QnRuRGl2LmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtcHJvamVjdC1idXR0b24tZGl2XCIpO1xuICAgICAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHN0b3JlZFByb2plY3RzW2ldLnRpdGxlO1xuICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8PSBwcm9qZWN0TGlzdERpdi5jaGlsZHJlbi5sZW5ndGg7IHQrKykge1xuICAgICAgICAgIHByb2plY3RDb250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCB0KTtcbiAgICAgICAgfVxuICAgICAgICBwcm9qZWN0TGlzdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZURpdik7XG4gICAgICAgIHByb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVsZXRlUHJvamVjdEJ0bkRpdik7XG4gICAgICAgIHByb2plY3ROYW1lRGl2LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICAgICAgZGVsZXRlUHJvamVjdEJ0bkRpdi5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnRuKTtcbiAgICAgICAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZChcInByb2plY3RcIik7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9PSBzdG9yZWRQcm9qZWN0c1tpXS50aXRsZSAmJlxuICAgICAgICAgIHN0b3JlZFByb2plY3RzW2ldLmFjdGl2ZSA9PT0gdHJ1ZVxuICAgICAgICApIHtcbiAgICAgICAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgICAgICAgZGVsZXRlUHJvamVjdChlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNyZWF0ZVN0b3JlZFByb2plY3RzKFxuICAgICAgICAgIHN0b3JlZFByb2plY3RzW2ldLnRpdGxlLFxuICAgICAgICAgIHN0b3JlZFByb2plY3RzW2ldLnRvZG9zLFxuICAgICAgICAgIHN0b3JlZFByb2plY3RzW2ldLmFjdGl2ZVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59O1xuY29uc3QgbG9jYWxTdG9yYWdlUHJvamVjdCA9IChuZXdQcm9qZWN0KSA9PiB7XG4gIC8vIFN0b3JlIHRoZSBuZXcgcHJvamVjdCBkYXRhIGluIGEgdmFyaWFibGVcbiAgY29uc3Qgc3RvcmVOZXdQcm9qZWN0ID0gbmV3UHJvamVjdDtcblxuICAvLyBSZXRyaWV2ZSB0aGUgZXhpc3RpbmcgcHJvamVjdHMgZnJvbSBsb2NhbCBzdG9yYWdlXG4gIGNvbnN0IHN0b3JlZFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcblxuICAvLyBQdXNoIHRoZSBuZXcgcHJvamVjdCBkYXRhIHRvIHRoZSBleGlzdGluZyBwcm9qZWN0cyBhcnJheVxuICBzdG9yZWRQcm9qZWN0cy5wdXNoKHN0b3JlTmV3UHJvamVjdCk7XG5cbiAgLy8gVXBkYXRlIHRoZSBcInByb2plY3RzXCIga2V5IGluIGxvY2FsIHN0b3JhZ2Ugd2l0aCB0aGUgbW9kaWZpZWQgcHJvamVjdHMgYXJyYXlcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBbSlNPTi5zdHJpbmdpZnkoc3RvcmVkUHJvamVjdHMpXSk7XG59O1xuXG5jb25zdCBjcmVhdGVTdG9yZWRQcm9qZWN0cyA9ICh0aXRsZSwgdG9kb3MsIGFjdGl2ZSkgPT4ge1xuICBsZXQgbmV3UHJvamVjdCA9IFByb2plY3QoKTtcbiAgbmV3UHJvamVjdC50aXRsZSA9IHRpdGxlO1xuICBuZXdQcm9qZWN0LnRvZG9zID0gWy4uLnRvZG9zXTtcbiAgbmV3UHJvamVjdC5hY3RpdmUgPSBhY3RpdmU7XG4gIHByb2plY3RzQXJyYXkucHVzaChuZXdQcm9qZWN0KTtcbn07XG5cbmNvbnN0IGxvY2FsU3RvcmFnZVRvZG9zID0gKG5ld1RvZG8pID0+IHtcbiAgLy8gUmV0cmlldmUgZXhpc3RpbmcgcHJvamVjdHMgZnJvbSBsb2NhbCBzdG9yYWdlXG4gIGNvbnN0IHN0b3JlZFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShzdG9yZWRQcm9qZWN0cykpIHtcbiAgICAvLyBGaW5kIHRoZSBhY3RpdmUgcHJvamVjdCAoeW91IG1pZ2h0IG5lZWQgdG8gc3BlY2lmeSBob3cgdG8gaWRlbnRpZnkgdGhlIGFjdGl2ZSBwcm9qZWN0KVxuICAgIGNvbnN0IGFjdGl2ZVByb2plY3QgPSBzdG9yZWRQcm9qZWN0cy5maW5kKFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QuYWN0aXZlID09PSB0cnVlXG4gICAgKTtcblxuICAgIGlmIChhY3RpdmVQcm9qZWN0KSB7XG4gICAgICAvLyBVcGRhdGUgdGhlIHRvZG9zIG9mIHRoZSBhY3RpdmUgcHJvamVjdFxuICAgICAgYWN0aXZlUHJvamVjdC50b2Rvcy5wdXNoKG5ld1RvZG8pO1xuXG4gICAgICAvLyBTYXZlIHRoZSB1cGRhdGVkIHByb2plY3RzIGJhY2sgdG8gbG9jYWwgc3RvcmFnZVxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShzdG9yZWRQcm9qZWN0cykpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IHsgb25sb2FkU3RvcmFnZSwgbG9jYWxTdG9yYWdlUHJvamVjdCwgbG9jYWxTdG9yYWdlVG9kb3MgfTtcbiIsImltcG9ydCB7IGNyZWF0ZVRvZG8sIHByb2plY3RzQXJyYXkgfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuaW1wb3J0IHsgYWN0aXZlVG9kb0RpdiB9IGZyb20gXCIuL2FjdGl2ZVByb2plY3QuanNcIjtcblxuY29uc3QgdG9kb0Zvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xudG9kb0Zvcm1Db250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLWZvcm0tY29udGFpbmVyXCIpO1xudG9kb0Zvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImRpdi1iYWNrZ3JvdW5kXCIpO1xuXG5jb25zdCB0b2RvRGl2SGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCB0b2RvRGl2SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG50b2RvRGl2SGVhZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tZGl2LWhlYWRcIik7XG50b2RvRGl2SGVhZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1kaXYtaGVhZGVyXCIpO1xudG9kb0RpdkhlYWRlci50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIFRvLURvXCI7XG5cbmNvbnN0IHRvZG9Gb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG50b2RvRm9ybURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tZm9ybS1kaXZcIik7XG50b2RvRm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tZm9ybVwiKTtcblxuY29uc3QgdG9kb1RpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHRvZG9UaXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuY29uc3QgdG9kb1RpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG50b2RvVGl0bGVEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLXRpdGxlLWRpdlwiKTtcbnRvZG9UaXRsZURpdi5jbGFzc0xpc3QuYWRkKFwiZm9ybS1lbGVtZW50c1wiKTtcbnRvZG9UaXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZTpcIjtcbnRvZG9UaXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXG5jb25zdCB0b2RvRHVlRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCB0b2RvRHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuY29uc3QgdG9kb0R1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbnRvZG9EdWVEYXRlRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1kdWVkYXRlLWRpdlwiKTtcbnRvZG9EdWVEYXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWVsZW1lbnRzXCIpO1xudG9kb0R1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRGF0ZTpcIjtcbnRvZG9EdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG5cbmNvbnN0IHRvZG9EZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCB0b2RvRGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbmNvbnN0IHRvZG9EZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xudG9kb0Rlc2NyaXB0aW9uRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1kZXNjcmlwdGlvbi1kaXZcIik7XG50b2RvRGVzY3JpcHRpb25EaXYuY2xhc3NMaXN0LmFkZChcImZvcm0tZWxlbWVudHNcIik7XG50b2RvRGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246XCI7XG50b2RvRGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcblxuY29uc3QgdG9kb1ByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHRvZG9Qcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuY29uc3QgdG9kb1ByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5jb25zdCB0b2RvUHJpb3JpdHlMZXZlbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgdG9kb1ByaW9yaXR5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5jb25zdCB0b2RvUHJpb3JpdHlNaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbmNvbnN0IHRvZG9Qcmlvcml0eUhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbnRvZG9Qcmlvcml0eURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tcHJpb3JpdHktZGl2XCIpO1xudG9kb1ByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWVsZW1lbnRzXCIpO1xudG9kb1ByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OlwiO1xudG9kb1ByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhbmdlXCIpO1xudG9kb1ByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKFwibWluXCIsIFwiMVwiKTtcbnRvZG9Qcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZShcIm1heFwiLCBcIjNcIik7XG50b2RvUHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIjFcIik7XG50b2RvUHJpb3JpdHlMZXZlbHMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eS1sZXZlbHNcIik7XG50b2RvUHJpb3JpdHlMb3cudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xudG9kb1ByaW9yaXR5TG93LnN0eWxlLnRleHRTaGFkb3cgPSBcIjAgMCA3cHggcmVkXCI7XG50b2RvUHJpb3JpdHlNaWQudGV4dENvbnRlbnQgPSBcIk1pZFwiO1xudG9kb1ByaW9yaXR5TWlkLnN0eWxlLnRleHRTaGFkb3cgPSBcIjAgMCA3cHggeWVsbG93XCI7XG50b2RvUHJpb3JpdHlIaWdoLnRleHRDb250ZW50ID0gXCJIaWdoXCI7XG50b2RvUHJpb3JpdHlIaWdoLnN0eWxlLnRleHRTaGFkb3cgPSBcIjAgMCA3cHggIzM5ZmMwM1wiO1xuXG5jb25zdCB0b2RvTm90ZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgdG9kb05vdGVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5jb25zdCB0b2RvTm90ZXNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbnRvZG9Ob3Rlc0Rpdi5jbGFzc0xpc3QuYWRkKFwiZm9ybS1lbGVtZW50c1wiKTtcbnRvZG9Ob3Rlc0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tbm90ZXMtZGl2XCIpO1xudG9kb05vdGVzSW5wdXQuc2V0QXR0cmlidXRlKFwicm93c1wiLCBcIjVcIik7XG50b2RvTm90ZXNMYWJlbC50ZXh0Q29udGVudCA9IFwiTm90ZXM6XCI7XG5cbmNvbnN0IHRvZG9TdWJtaXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgdG9kb1N1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG50b2RvU3VibWl0RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1zdWJtaXQtZGl2XCIpO1xudG9kb1N1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG5cbnRvZG9Gb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9EaXZIZWFkKTtcbnRvZG9Gb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Gb3JtRGl2KTtcbnRvZG9EaXZIZWFkLmFwcGVuZENoaWxkKHRvZG9EaXZIZWFkZXIpO1xudG9kb0Zvcm1EaXYuYXBwZW5kQ2hpbGQodG9kb0Zvcm0pO1xudG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb1RpdGxlRGl2KTtcbnRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9EdWVEYXRlRGl2KTtcbnRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9EZXNjcmlwdGlvbkRpdik7XG50b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvUHJpb3JpdHlEaXYpO1xudG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb05vdGVzRGl2KTtcbnRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9TdWJtaXREaXYpO1xudG9kb1RpdGxlRGl2LmFwcGVuZENoaWxkKHRvZG9UaXRsZUxhYmVsKTtcbnRvZG9UaXRsZURpdi5hcHBlbmRDaGlsZCh0b2RvVGl0bGVJbnB1dCk7XG50b2RvRHVlRGF0ZURpdi5hcHBlbmRDaGlsZCh0b2RvRHVlRGF0ZUxhYmVsKTtcbnRvZG9EdWVEYXRlRGl2LmFwcGVuZENoaWxkKHRvZG9EdWVEYXRlSW5wdXQpO1xudG9kb0Rlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKHRvZG9EZXNjcmlwdGlvbkxhYmVsKTtcbnRvZG9EZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZCh0b2RvRGVzY3JpcHRpb25JbnB1dCk7XG50b2RvUHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQodG9kb1ByaW9yaXR5TGFiZWwpO1xudG9kb1ByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHRvZG9Qcmlvcml0eUxldmVscyk7XG50b2RvUHJpb3JpdHlMZXZlbHMuYXBwZW5kQ2hpbGQodG9kb1ByaW9yaXR5TG93KTtcbnRvZG9Qcmlvcml0eUxldmVscy5hcHBlbmRDaGlsZCh0b2RvUHJpb3JpdHlNaWQpO1xudG9kb1ByaW9yaXR5TGV2ZWxzLmFwcGVuZENoaWxkKHRvZG9Qcmlvcml0eUhpZ2gpO1xudG9kb1ByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHRvZG9Qcmlvcml0eUlucHV0KTtcbnRvZG9Ob3Rlc0Rpdi5hcHBlbmRDaGlsZCh0b2RvTm90ZXNMYWJlbCk7XG50b2RvTm90ZXNEaXYuYXBwZW5kQ2hpbGQodG9kb05vdGVzSW5wdXQpO1xudG9kb1N1Ym1pdERpdi5hcHBlbmRDaGlsZCh0b2RvU3VibWl0QnRuKTtcblxuY29uc3QgcHVzaFRvQWN0aXZlUHJvamVjdCA9ICgpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHByb2plY3RzQXJyYXlbaV0uYWN0aXZlID09IHRydWUpIHtcbiAgICAgIHJldHVybiBwcm9qZWN0c0FycmF5W2ldLnRvZG9zO1xuICAgIH1cbiAgfVxufTtcblxudG9kb1N1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwcm9qZWN0c0FycmF5Lmxlbmd0aCA+IDAgJiYgcHJvamVjdHNBcnJheVtpXS5hY3RpdmUgPT0gdHJ1ZSkge1xuICAgICAgY3JlYXRlVG9kbyhcbiAgICAgICAgdG9kb1RpdGxlSW5wdXQudmFsdWUsXG4gICAgICAgIHRvZG9EdWVEYXRlSW5wdXQudmFsdWUsXG4gICAgICAgIHRvZG9EZXNjcmlwdGlvbklucHV0LnZhbHVlLFxuICAgICAgICB0b2RvUHJpb3JpdHlJbnB1dC52YWx1ZSxcbiAgICAgICAgdG9kb05vdGVzSW5wdXQudmFsdWUsXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBwdXNoVG9BY3RpdmVQcm9qZWN0KClcbiAgICAgICk7XG4gICAgICB0b2RvRm9ybS5yZXNldCgpO1xuICAgICAgY29uc29sZS5sb2cocHJvamVjdHNBcnJheSk7XG4gICAgfVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aXZlVG9kb0Rpdi5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGFjdGl2ZVRvZG9EaXYuY2hpbGRyZW5baV0uc2V0QXR0cmlidXRlKFwiZGF0YS10b2RvLWluZGV4XCIsIGkpO1xuICB9XG59KTtcblxuZXhwb3J0IHsgdG9kb0Zvcm1Db250YWluZXIgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBwcm9qZWN0c0FycmF5IH0gZnJvbSBcIi4vcHJvamVjdHMuanNcIjtcbmltcG9ydCB7XG4gIHByb2plY3RGb3JtRGl2LFxuICBjaGFuZ2VBY3RpdmVDbGFzcyxcbiAgYWN0aXZlUHJvamVjdCxcbn0gZnJvbSBcIi4vcHJvamVjdEZvcm0uanNcIjtcbmltcG9ydCB7XG4gIGFjdGl2ZVByb2plY3REaXYsXG4gIGFjdGl2ZVByb2plY3RIZWFkLFxuICBhY3RpdmVQcm9qZWN0VGl0bGUsXG4gIGFjdGl2ZVRvZG9EaXYsXG59IGZyb20gXCIuL2FjdGl2ZVByb2plY3QuanNcIjtcbmltcG9ydCB7IHRvZG9Gb3JtQ29udGFpbmVyIH0gZnJvbSBcIi4vdG9Eb0Zvcm1cIjtcbmltcG9ydCB7IG9ubG9hZFN0b3JhZ2UgfSBmcm9tIFwiLi9zdG9yZVByb2plY3RzXCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5jb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RGb3JtRGl2KTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoYWN0aXZlUHJvamVjdERpdik7XG5jb250ZW50LmFwcGVuZCh0b2RvRm9ybUNvbnRhaW5lcik7XG5hY3RpdmVQcm9qZWN0RGl2LmFwcGVuZENoaWxkKGFjdGl2ZVByb2plY3RIZWFkKTtcbmFjdGl2ZVByb2plY3REaXYuYXBwZW5kQ2hpbGQoYWN0aXZlVG9kb0Rpdik7XG5hY3RpdmVQcm9qZWN0SGVhZC5hcHBlbmRDaGlsZChhY3RpdmVQcm9qZWN0VGl0bGUpO1xuXG5jaGFuZ2VBY3RpdmVDbGFzcygpO1xuYWN0aXZlUHJvamVjdCgpO1xub25sb2FkU3RvcmFnZSgpO1xuXG5jb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5KTtcblxuZXhwb3J0IHsgY29udGVudCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9