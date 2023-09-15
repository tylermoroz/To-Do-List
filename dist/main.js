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
    for (let i = 0; i < storedProjects.length; i++) {
      const storedTodos = storedProjects[i].todos;
      for (let t = 0; t < storedTodos.length; t++) {
        if (
          parseInt(e.target.closest(".todo-div").dataset.todoIndex) ===
          parseInt(storedTodos.indexOf(storedTodos[t]))
        ) {
          if (e.target.textContent == "complete") {
            storedTodos[t].complete = true;
            localStorage.setItem(
              "projects",
              `[{"title":${JSON.stringify(
                storedProjects[i].title
              )},"todos":${JSON.stringify(storedTodos)},"active":${
                storedProjects[i].active
              }}]`
            );
          } else {
            storedTodos[t].complete = false;
            localStorage.setItem(
              "projects",
              `[{"title":${JSON.stringify(
                storedProjects[i].title
              )},"todos":${JSON.stringify(storedTodos)},"active":${
                storedProjects[i].active
              }}]`
            );
          }
        }
      }
    }
  });

  deleteTodoBtn.addEventListener("click", (e) => {
    let buttonDiv = e.target.parentNode;
    let todoHead = buttonDiv.parentNode;
    let todoToRemove = todoHead.parentNode;
    const todoList = activeTodoDiv.children;
    todoToRemove.remove();

    for (let i = 0; i < todoList.length; i++) {
      todoList[i].setAttribute("data-todo-index", i);
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
    (0,_activeProject_js__WEBPACK_IMPORTED_MODULE_0__.clearTodos)();
    console.log(_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray);
  }

  deleteProjectBtn.addEventListener("click", (e) => {
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
      }

      for (let i = 0; i <= storedProjects.length; i++) {
        if (
          parseInt(e.target.closest(".project-container").dataset.index) ===
          parseInt(storedProjects.indexOf(storedProjects[i]))
        ) {
          storedProjects.splice(i, 1);
          localStorage.setItem("projects", [JSON.stringify(storedProjects)]);
          return;
        }
      }
    }
    if (
      e.target.parentNode.previousElementSibling.children[0].classList.contains(
        "active"
      )
    ) {
      (0,_activeProject_js__WEBPACK_IMPORTED_MODULE_0__.clearTodos)();
      _activeProject_js__WEBPACK_IMPORTED_MODULE_0__.activeProjectTitle.textContent = "";
    }
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
    (0,_activeProject_js__WEBPACK_IMPORTED_MODULE_0__.changeTitle)();
    console.log(_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray);
  });
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
const onloadStorage = () => {
  window.addEventListener("load", () => {
    if (localStorage.getItem("projects") === null) {
      localStorage.setItem("projects", "[]");
    }
  });
};

const localStorageProject = (newProject) => {
  const storeNewProject = newProject;
  const storedProjects = JSON.parse(localStorage.getItem("projects"));
  storedProjects.push(storeNewProject);
  localStorage.setItem("projects", [JSON.stringify(storedProjects)]);
};

const localStorageTodos = (newTodo) => {
  const storedProjects = JSON.parse(localStorage.getItem("projects"));
  for (let i = 0; i < storedProjects.length; i++) {
    if (storedProjects[i].active === true) {
      const storedTodos = storedProjects[i].todos;
      storedTodos.push(newTodo);
      localStorage.setItem(
        "projects",
        `[{"title":${JSON.stringify(
          storedProjects[i].title
        )},"todos":${JSON.stringify(storedTodos)},"active":${
          storedProjects[i].active
        }}]`
      );
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDeUI7QUFLcEI7QUFNRTtBQUNtQjtBQUNDOztBQUVoRDtBQUNBLG9CQUFvQiwyREFBYztBQUNsQyxvQkFBb0IsK0RBQWdCO0FBQ3BDLGVBQWUsd0RBQWlCO0FBQ2hDLDJFQUE0QixDQUFDLGdFQUFpQjtBQUM5QywyRUFBNEIsQ0FBQyw0REFBYTtBQUMxQyw0RUFBNkIsQ0FBQyxpRUFBa0I7O0FBRWhELGtFQUFpQjtBQUNqQiw4REFBYTtBQUNiLDZEQUFhOztBQUViLFlBQVksdURBQWE7O0FBRU4iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYWN0aXZlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RGb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdG9yZVByb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9Eb0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDdmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMS41ZnIgMmZyO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gIGdhcDogMTVweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgMjFkZWcsXFxuICAgIHJnYmEoMjQ5LCAxOTcsIDMsIDEpIDAlLFxcbiAgICByZ2JhKDAsIDQsIDQsIDEpIDMwJSxcXG4gICAgcmdiYSgwLCAxLCAxLCAxKSA3MCUsXFxuICAgIHJnYmEoMCwgMjU1LCAxOTIsIDEpIDEwMCVcXG4gICk7XFxufVxcblxcbi5kaXYtYmFja2dyb3VuZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjEpO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtLWRpdiB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDE1cHggMCAwIDE1cHg7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAzODBweDtcXG59XFxuXFxuI3Byb2plY3QtZGl2LWhlYWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1ib3R0b206IC0xNXB4O1xcbiAgcGFkZGluZzogMTBweCAxMHB4IDAgMTBweDtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuXFxuI3RpdGxlLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZy10b3A6IDZweDtcXG4gIHBhZGRpbmctbGVmdDogMWVtO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI3Byb2plY3RzLXRpdGxlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbn1cXG5cXG4jYnV0dG9uLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI3Byb2plY3RzLWJ0biB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3Byb2plY3RzLWxpc3QtZGl2IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDAgMTBweCAxMHB4IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4jcHJvamVjdHMtbGlzdC1kaXY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA1cHg7XFxufVxcblxcbiNwcm9qZWN0cy1saXN0LWRpdjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEzKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMyk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuI3Byb2plY3RzLWxpc3QtZGl2Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTY2LCAwLCAwLjU0MSk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEzKTtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnByb2plY3QtbmFtZS1kaXYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdC1idXR0b24tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdC1idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB3aWR0aDogMTVweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbWFyZ2luOiAxcHg7XFxufVxcblxcbiNhY3RpdmUtcHJvamVjdC1kaXYge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgbWFyZ2luOiAxNXB4IDE1cHggMTVweCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5hY3RpdmUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuI2FjdGl2ZS1wcm9qZWN0LWhlYWQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2FjdGl2ZS1wcm9qZWN0LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogNDZweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4jYWN0aXZlLXRvZG8tZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTsgKi9cXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAyNTBweCk7XFxuICBnYXA6IDIwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4jYWN0aXZlLXRvZG8tZGl2Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogNXB4O1xcbn1cXG5cXG4jYWN0aXZlLXRvZG8tZGl2Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMyk7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTMpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbiNhY3RpdmUtdG9kby1kaXY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNjYsIDAsIDAuNTQxKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTMpO1xcbn1cXG5cXG4udG9kby1kaXYge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbjogMTVweDtcXG59XFxuXFxuLnRvZG8taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50b2RvLXRpdGxlLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmRlbGV0ZS10b2RvLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLmRlbGV0ZS10b2RvLWJ0biB7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgd2lkdGg6IDE2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kby10aXRsZSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4udG9kby1kZXNjcmlwdGlvbiB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5leHBhbmQtdG9kby1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmV4cGFuZC10b2RvLWJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kby1wcm9wZXJ0aWVzIHtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbn1cXG5cXG4jdG9kby1mb3JtLWNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMCAwIDE1cHggMTVweDtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3RvZG8tZGl2LWhlYWQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4jdG9kby1kaXYtaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4jdG9kby1mb3JtLWRpdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI3RvZG8tZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5mb3JtLWVsZW1lbnRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNwcmlvcml0eS1sZXZlbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAgM3B4IDAgM3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogLTE1cHg7XFxuICBtYXJnaW4tdG9wOiAtMTBweDtcXG59XFxuXFxuLnRvZG8tYnV0dG9uLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4udG9kby1idXR0b24ge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN0b2RvLXN1Ym1pdC1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbiN0b2RvLXN1Ym1pdC1kaXYgYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osU0FBUztFQUNULGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1Q7Ozs7OztHQU1DO0FBQ0g7O0FBRUE7RUFDRSwyQ0FBMkM7RUFDM0MsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsYUFBYTtFQUNiLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLG9CQUFvQjtFQUNwQix5QkFBeUI7RUFDekIsWUFBWTtBQUNk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QixtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsc0JBQXNCO0VBQ3RCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixvQkFBb0I7RUFDcEIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImh0bWwsXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDdmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMS41ZnIgMmZyO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gIGdhcDogMTVweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgMjFkZWcsXFxuICAgIHJnYmEoMjQ5LCAxOTcsIDMsIDEpIDAlLFxcbiAgICByZ2JhKDAsIDQsIDQsIDEpIDMwJSxcXG4gICAgcmdiYSgwLCAxLCAxLCAxKSA3MCUsXFxuICAgIHJnYmEoMCwgMjU1LCAxOTIsIDEpIDEwMCVcXG4gICk7XFxufVxcblxcbi5kaXYtYmFja2dyb3VuZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjEpO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtLWRpdiB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDE1cHggMCAwIDE1cHg7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAzODBweDtcXG59XFxuXFxuI3Byb2plY3QtZGl2LWhlYWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1ib3R0b206IC0xNXB4O1xcbiAgcGFkZGluZzogMTBweCAxMHB4IDAgMTBweDtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuXFxuI3RpdGxlLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZy10b3A6IDZweDtcXG4gIHBhZGRpbmctbGVmdDogMWVtO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI3Byb2plY3RzLXRpdGxlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbn1cXG5cXG4jYnV0dG9uLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI3Byb2plY3RzLWJ0biB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3Byb2plY3RzLWxpc3QtZGl2IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDAgMTBweCAxMHB4IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4jcHJvamVjdHMtbGlzdC1kaXY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA1cHg7XFxufVxcblxcbiNwcm9qZWN0cy1saXN0LWRpdjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEzKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMyk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuI3Byb2plY3RzLWxpc3QtZGl2Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTY2LCAwLCAwLjU0MSk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEzKTtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnByb2plY3QtbmFtZS1kaXYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdC1idXR0b24tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdC1idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB3aWR0aDogMTVweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbWFyZ2luOiAxcHg7XFxufVxcblxcbiNhY3RpdmUtcHJvamVjdC1kaXYge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgbWFyZ2luOiAxNXB4IDE1cHggMTVweCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5hY3RpdmUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuI2FjdGl2ZS1wcm9qZWN0LWhlYWQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2FjdGl2ZS1wcm9qZWN0LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogNDZweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4jYWN0aXZlLXRvZG8tZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTsgKi9cXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAyNTBweCk7XFxuICBnYXA6IDIwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4jYWN0aXZlLXRvZG8tZGl2Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogNXB4O1xcbn1cXG5cXG4jYWN0aXZlLXRvZG8tZGl2Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMyk7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTMpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbiNhY3RpdmUtdG9kby1kaXY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNjYsIDAsIDAuNTQxKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTMpO1xcbn1cXG5cXG4udG9kby1kaXYge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbjogMTVweDtcXG59XFxuXFxuLnRvZG8taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50b2RvLXRpdGxlLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmRlbGV0ZS10b2RvLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLmRlbGV0ZS10b2RvLWJ0biB7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgd2lkdGg6IDE2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kby10aXRsZSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4udG9kby1kZXNjcmlwdGlvbiB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5leHBhbmQtdG9kby1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmV4cGFuZC10b2RvLWJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kby1wcm9wZXJ0aWVzIHtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbn1cXG5cXG4jdG9kby1mb3JtLWNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMCAwIDE1cHggMTVweDtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3RvZG8tZGl2LWhlYWQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4jdG9kby1kaXYtaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4jdG9kby1mb3JtLWRpdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI3RvZG8tZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5mb3JtLWVsZW1lbnRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNwcmlvcml0eS1sZXZlbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAgM3B4IDAgM3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogLTE1cHg7XFxuICBtYXJnaW4tdG9wOiAtMTBweDtcXG59XFxuXFxuLnRvZG8tYnV0dG9uLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4udG9kby1idXR0b24ge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN0b2RvLXN1Ym1pdC1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbiN0b2RvLXN1Ym1pdC1kaXYgYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCB7IHByb2plY3RzQXJyYXkgfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuXG5jb25zdCBhY3RpdmVQcm9qZWN0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IGFjdGl2ZVByb2plY3RIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IGFjdGl2ZVByb2plY3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoM1wiKTtcbmNvbnN0IGFjdGl2ZVRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5hY3RpdmVQcm9qZWN0RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWN0aXZlLXByb2plY3QtZGl2XCIpO1xuYWN0aXZlUHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwiZGl2LWJhY2tncm91bmRcIik7XG5hY3RpdmVQcm9qZWN0SGVhZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFjdGl2ZS1wcm9qZWN0LWhlYWRcIik7XG5hY3RpdmVQcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhY3RpdmUtcHJvamVjdC10aXRsZVwiKTtcbmFjdGl2ZVRvZG9EaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhY3RpdmUtdG9kby1kaXZcIik7XG5cbmNvbnN0IGNoYW5nZVRpdGxlID0gKCkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocHJvamVjdHNBcnJheVtpXS5hY3RpdmUgPT0gdHJ1ZSkge1xuICAgICAgYWN0aXZlUHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdHNBcnJheVtpXS50aXRsZTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGNsZWFyVG9kb3MgPSAoKSA9PiB7XG4gIHdoaWxlIChhY3RpdmVUb2RvRGl2Lmhhc0NoaWxkTm9kZXMoKSkge1xuICAgIGFjdGl2ZVRvZG9EaXYuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgfVxufTtcblxuY29uc3QgZGlzcGxheVRvZG9zID0gKHRvZG8pID0+IHtcbiAgbGV0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgdG9kb0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCB0b2RvVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGxldCBkZWxldGVUb2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IGRlbGV0ZVRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBsZXQgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbGV0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBsZXQgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGxldCB0b2RvTm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbGV0IHRvZG9Db21wbGV0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCB0b2RvQ29tcGxldGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBsZXQgZXhwYW5kVG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBleHBhbmRUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICB0b2RvRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRpdlwiKTtcbiAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKFwiZGl2LWJhY2tncm91bmRcIik7XG4gIHRvZG9IZWFkZXIuY2xhc3NMaXN0LmFkZChcInRvZG8taGVhZGVyXCIpO1xuICB0b2RvVGl0bGVEaXYuY2xhc3NMaXN0LmFkZChcInRvZG8tdGl0bGUtZGl2XCIpO1xuICB0b2RvVGl0bGUuY2xhc3NMaXN0LmFkZChcInRvZG8tdGl0bGVcIik7XG4gIGRlbGV0ZVRvZG9EaXYuY2xhc3NMaXN0LmFkZChcImRlbGV0ZS10b2RvLWRpdlwiKTtcbiAgZGVsZXRlVG9kb0J0bi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXRvZG8tYnRuXCIpO1xuICB0b2RvRHVlRGF0ZS5jbGFzc0xpc3QuYWRkKFwidG9kby1kdWUtZGF0ZVwiKTtcbiAgdG9kb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWRlc2NyaXB0aW9uXCIpO1xuICB0b2RvUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInRvZG8tcHJpb3JpdHlcIik7XG4gIHRvZG9Ob3Rlcy5jbGFzc0xpc3QuYWRkKFwidG9kby1ub3Rlc1wiKTtcbiAgdG9kb0NvbXBsZXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWNvbXBsZXRlXCIpO1xuICB0b2RvVGl0bGUuY2xhc3NMaXN0LmFkZChcInRvZG8tcHJvcGVydGllc1wiKTtcbiAgdG9kb0R1ZURhdGUuY2xhc3NMaXN0LmFkZChcInRvZG8tcHJvcGVydGllc1wiKTtcbiAgdG9kb0Rlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXByb3BlcnRpZXNcIik7XG4gIHRvZG9Qcmlvcml0eS5jbGFzc0xpc3QuYWRkKFwidG9kby1wcm9wZXJ0aWVzXCIpO1xuICB0b2RvTm90ZXMuY2xhc3NMaXN0LmFkZChcInRvZG8tcHJvcGVydGllc1wiKTtcbiAgdG9kb0NvbXBsZXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWJ1dHRvbi1kaXZcIik7XG4gIHRvZG9Db21wbGV0ZS5jbGFzc0xpc3QuYWRkKFwidG9kby1idXR0b25cIik7XG4gIGV4cGFuZFRvZG9EaXYuY2xhc3NMaXN0LmFkZChcImV4cGFuZC10b2RvLWRpdlwiKTtcbiAgZXhwYW5kVG9kb0J0bi5jbGFzc0xpc3QuYWRkKFwiZXhwYW5kLXRvZG8tYnV0dG9uXCIpO1xuXG4gIGRlbGV0ZVRvZG9CdG4udGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgZXhwYW5kVG9kb0J0bi50ZXh0Q29udGVudCA9IFwi4pa+XCI7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHByb2plY3RzQXJyYXlbaV0uYWN0aXZlID09IHRydWUpIHtcbiAgICAgIHRvZG9UaXRsZS50ZXh0Q29udGVudCA9IHRvZG8udGl0bGU7XG4gICAgICB0b2RvRHVlRGF0ZS50ZXh0Q29udGVudCA9IGBEdWU6ICR7dG9kby5kdWVEYXRlfWA7XG4gICAgICB0b2RvRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB0b2RvLmRlc2NyaXB0aW9uO1xuICAgICAgdG9kb05vdGVzLnRleHRDb250ZW50ID0gdG9kby5ub3RlcztcbiAgICAgIHRvZG9Db21wbGV0ZS50ZXh0Q29udGVudCA9IFwiaW5jb21wbGV0ZVwiO1xuXG4gICAgICBpZiAodG9kby5wcmlvcml0eSA9PSAxKSB7XG4gICAgICAgIHRvZG9EaXYuc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgcmVkXCI7XG4gICAgICAgIHRvZG9EaXYuc3R5bGUuYm94U2hhZG93ID0gXCIwIDAgMTBweCA1cHggcmVkXCI7XG4gICAgICAgIHRvZG9Qcmlvcml0eS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IExvd1wiO1xuICAgICAgfSBlbHNlIGlmICh0b2RvLnByaW9yaXR5ID09IDIpIHtcbiAgICAgICAgdG9kb0Rpdi5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCB5ZWxsb3dcIjtcbiAgICAgICAgdG9kb0Rpdi5zdHlsZS5ib3hTaGFkb3cgPSBcIjAgMCAxMHB4IDVweCB5ZWxsb3dcIjtcbiAgICAgICAgdG9kb1ByaW9yaXR5LnRleHRDb250ZW50ID0gXCJQcmlvcml0eTogTWlkXCI7XG4gICAgICB9IGVsc2UgaWYgKHRvZG8ucHJpb3JpdHkgPT0gMykge1xuICAgICAgICB0b2RvRGl2LnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkICMzOWZjMDNcIjtcbiAgICAgICAgdG9kb0Rpdi5zdHlsZS5ib3hTaGFkb3cgPSBcIjAgMCAxMHB4IDVweCAjMzlmYzAzXCI7XG4gICAgICAgIHRvZG9Qcmlvcml0eS50ZXh0Q29udGVudCA9IFwiUHJpb3JpdHk6IEhpZ2hcIjtcbiAgICAgIH1cblxuICAgICAgaWYgKHRvZG8uY29tcGxldGUgPT0gZmFsc2UpIHtcbiAgICAgICAgdG9kb0NvbXBsZXRlLnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkIHJlZFwiO1xuICAgICAgICB0b2RvQ29tcGxldGUuc3R5bGUuYm94U2hhZG93ID0gXCJyZWQgMHB4IDBweCA1cHggMXB4XCI7XG4gICAgICAgIHRvZG9Db21wbGV0ZS5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZWRcIjtcbiAgICAgIH0gZWxzZSBpZiAodG9kby5jb21wbGV0ZSA9PSB0cnVlKSB7XG4gICAgICAgIHRvZG9Db21wbGV0ZS5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCAjMDVkYjA1XCI7XG4gICAgICAgIHRvZG9Db21wbGV0ZS5zdHlsZS5ib3hTaGFkb3cgPSBcIiMwNWRiMDUgMHB4IDBweCA1cHggMXB4XCI7XG4gICAgICAgIHRvZG9Db21wbGV0ZS5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjMDVkYjA1XCI7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGFjdGl2ZVRvZG9EaXYuYXBwZW5kQ2hpbGQodG9kb0Rpdik7XG4gIHRvZG9EaXYuYXBwZW5kQ2hpbGQodG9kb0hlYWRlcik7XG4gIHRvZG9IZWFkZXIuYXBwZW5kQ2hpbGQodG9kb1RpdGxlRGl2KTtcbiAgdG9kb0hlYWRlci5hcHBlbmRDaGlsZChkZWxldGVUb2RvRGl2KTtcbiAgdG9kb1RpdGxlRGl2LmFwcGVuZENoaWxkKHRvZG9UaXRsZSk7XG4gIGRlbGV0ZVRvZG9EaXYuYXBwZW5kQ2hpbGQoZGVsZXRlVG9kb0J0bik7XG4gIHRvZG9EaXYuYXBwZW5kQ2hpbGQodG9kb0R1ZURhdGUpO1xuICB0b2RvRGl2LmFwcGVuZENoaWxkKHRvZG9EZXNjcmlwdGlvbik7XG4gIHRvZG9EaXYuYXBwZW5kQ2hpbGQodG9kb0NvbXBsZXRlRGl2KTtcbiAgdG9kb0NvbXBsZXRlRGl2LmFwcGVuZENoaWxkKHRvZG9Db21wbGV0ZSk7XG4gIHRvZG9EaXYuYXBwZW5kQ2hpbGQoZXhwYW5kVG9kb0Rpdik7XG4gIGV4cGFuZFRvZG9EaXYuYXBwZW5kQ2hpbGQoZXhwYW5kVG9kb0J0bik7XG5cbiAgdG9kb0NvbXBsZXRlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNvbnN0IHN0b3JlZFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcbiAgICBpZiAodG9kby5jb21wbGV0ZSA9PSBmYWxzZSkge1xuICAgICAgdG9kby5jb21wbGV0ZSA9IHRydWU7XG4gICAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9IFwiY29tcGxldGVcIjtcbiAgICAgIGUudGFyZ2V0LnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkICMwNWRiMDVcIjtcbiAgICAgIGUudGFyZ2V0LnN0eWxlLmJveFNoYWRvdyA9IFwiIzA1ZGIwNSAwcHggMHB4IDVweCAxcHhcIjtcbiAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSBcIiMwNWRiMDVcIjtcbiAgICAgIGNvbnNvbGUubG9nKHByb2plY3RzQXJyYXkpO1xuICAgIH0gZWxzZSBpZiAodG9kby5jb21wbGV0ZSA9PSB0cnVlKSB7XG4gICAgICB0b2RvLmNvbXBsZXRlID0gZmFsc2U7XG4gICAgICBlLnRhcmdldC50ZXh0Q29udGVudCA9IFwiaW5jb21wbGV0ZVwiO1xuICAgICAgZS50YXJnZXQuc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgcmVkXCI7XG4gICAgICBlLnRhcmdldC5zdHlsZS5ib3hTaGFkb3cgPSBcInJlZCAwcHggMHB4IDVweCAxcHhcIjtcbiAgICAgIGUudGFyZ2V0LnN0eWxlLmJhY2tncm91bmQgPSBcInJlZFwiO1xuICAgICAgY29uc29sZS5sb2cocHJvamVjdHNBcnJheSk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RvcmVkUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGNvbnN0IHN0b3JlZFRvZG9zID0gc3RvcmVkUHJvamVjdHNbaV0udG9kb3M7XG4gICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IHN0b3JlZFRvZG9zLmxlbmd0aDsgdCsrKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICBwYXJzZUludChlLnRhcmdldC5jbG9zZXN0KFwiLnRvZG8tZGl2XCIpLmRhdGFzZXQudG9kb0luZGV4KSA9PT1cbiAgICAgICAgICBwYXJzZUludChzdG9yZWRUb2Rvcy5pbmRleE9mKHN0b3JlZFRvZG9zW3RdKSlcbiAgICAgICAgKSB7XG4gICAgICAgICAgaWYgKGUudGFyZ2V0LnRleHRDb250ZW50ID09IFwiY29tcGxldGVcIikge1xuICAgICAgICAgICAgc3RvcmVkVG9kb3NbdF0uY29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXG4gICAgICAgICAgICAgIFwicHJvamVjdHNcIixcbiAgICAgICAgICAgICAgYFt7XCJ0aXRsZVwiOiR7SlNPTi5zdHJpbmdpZnkoXG4gICAgICAgICAgICAgICAgc3RvcmVkUHJvamVjdHNbaV0udGl0bGVcbiAgICAgICAgICAgICAgKX0sXCJ0b2Rvc1wiOiR7SlNPTi5zdHJpbmdpZnkoc3RvcmVkVG9kb3MpfSxcImFjdGl2ZVwiOiR7XG4gICAgICAgICAgICAgICAgc3RvcmVkUHJvamVjdHNbaV0uYWN0aXZlXG4gICAgICAgICAgICAgIH19XWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0b3JlZFRvZG9zW3RdLmNvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcbiAgICAgICAgICAgICAgXCJwcm9qZWN0c1wiLFxuICAgICAgICAgICAgICBgW3tcInRpdGxlXCI6JHtKU09OLnN0cmluZ2lmeShcbiAgICAgICAgICAgICAgICBzdG9yZWRQcm9qZWN0c1tpXS50aXRsZVxuICAgICAgICAgICAgICApfSxcInRvZG9zXCI6JHtKU09OLnN0cmluZ2lmeShzdG9yZWRUb2Rvcyl9LFwiYWN0aXZlXCI6JHtcbiAgICAgICAgICAgICAgICBzdG9yZWRQcm9qZWN0c1tpXS5hY3RpdmVcbiAgICAgICAgICAgICAgfX1dYFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGRlbGV0ZVRvZG9CdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgbGV0IGJ1dHRvbkRpdiA9IGUudGFyZ2V0LnBhcmVudE5vZGU7XG4gICAgbGV0IHRvZG9IZWFkID0gYnV0dG9uRGl2LnBhcmVudE5vZGU7XG4gICAgbGV0IHRvZG9Ub1JlbW92ZSA9IHRvZG9IZWFkLnBhcmVudE5vZGU7XG4gICAgY29uc3QgdG9kb0xpc3QgPSBhY3RpdmVUb2RvRGl2LmNoaWxkcmVuO1xuICAgIHRvZG9Ub1JlbW92ZS5yZW1vdmUoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdG9kb0xpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgIHRvZG9MaXN0W2ldLnNldEF0dHJpYnV0ZShcImRhdGEtdG9kby1pbmRleFwiLCBpKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwcm9qZWN0c0FycmF5W2ldLmFjdGl2ZSA9PSB0cnVlKSB7XG4gICAgICAgIGxldCB0aGlzVG9kbyA9IHByb2plY3RzQXJyYXlbaV0udG9kb3MuaW5kZXhPZih0b2RvKTtcbiAgICAgICAgcHJvamVjdHNBcnJheVtpXS50b2Rvcy5zcGxpY2UodGhpc1RvZG8sIDEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBleHBhbmRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKHRvZG9EaXYucXVlcnlTZWxlY3RvcihcIi50b2RvLXByaW9yaXR5XCIpID09PSBudWxsKSB7XG4gICAgICB0b2RvQ29tcGxldGVEaXYucmVtb3ZlKCk7XG4gICAgICBleHBhbmRUb2RvRGl2LnJlbW92ZSgpO1xuICAgICAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvUHJpb3JpdHkpO1xuICAgICAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvTm90ZXMpO1xuICAgICAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvQ29tcGxldGVEaXYpO1xuICAgICAgdG9kb0Rpdi5hcHBlbmRDaGlsZChleHBhbmRUb2RvRGl2KTtcbiAgICAgIGV4cGFuZFRvZG9CdG4udGV4dENvbnRlbnQgPSBcIuKWtFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2RvUHJpb3JpdHkucmVtb3ZlKCk7XG4gICAgICB0b2RvTm90ZXMucmVtb3ZlKCk7XG4gICAgICBleHBhbmRUb2RvQnRuLnRleHRDb250ZW50ID0gXCLilr5cIjtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgYWN0aXZlUHJvamVjdERpdixcbiAgYWN0aXZlUHJvamVjdEhlYWQsXG4gIGFjdGl2ZVByb2plY3RUaXRsZSxcbiAgY2hhbmdlVGl0bGUsXG4gIGFjdGl2ZVRvZG9EaXYsXG4gIGRpc3BsYXlUb2RvcyxcbiAgY2xlYXJUb2Rvcyxcbn07XG4iLCJpbXBvcnQge1xuICBhY3RpdmVQcm9qZWN0VGl0bGUsXG4gIGNoYW5nZVRpdGxlLFxuICBjbGVhclRvZG9zLFxuICBkaXNwbGF5VG9kb3MsXG4gIGFjdGl2ZVRvZG9EaXYsXG59IGZyb20gXCIuL2FjdGl2ZVByb2plY3QuanNcIjtcbmltcG9ydCB7IGNyZWF0ZVByb2plY3QsIHByb2plY3RzQXJyYXkgfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuXG5jb25zdCBwcm9qZWN0Rm9ybURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBwcm9qZWN0RGl2SGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBwcm9qZWN0VGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgcHJvamVjdHNUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuY29uc3QgcHJvamVjdExpc3REaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgcHJvamVjdHNCdG5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG5jb25zdCBwcm9qZWN0TGlzdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbmNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG5wcm9qZWN0c1RpdGxlLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuYWRkUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IFwiK1wiO1xuXG5wcm9qZWN0Rm9ybURpdi5jbGFzc0xpc3QuYWRkKFwiZGl2LWJhY2tncm91bmRcIik7XG5wcm9qZWN0Rm9ybURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3QtZm9ybS1kaXZcIik7XG5wcm9qZWN0RGl2SGVhZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3QtZGl2LWhlYWRcIik7XG5wcm9qZWN0VGl0bGVEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aXRsZS1kaXZcIik7XG5wcm9qZWN0TGlzdERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RzLWxpc3QtZGl2XCIpO1xucHJvamVjdHNCdG5EaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJidXR0b24tZGl2XCIpO1xucHJvamVjdHNUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RzLXRpdGxlXCIpO1xuYWRkUHJvamVjdEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RzLWJ0blwiKTtcbnByb2plY3RMaXN0Rm9ybS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1mb3JtXCIpO1xuaW5wdXQuY2xhc3NMaXN0LmFkZChcInByb2plY3QtaW5wdXRcIik7XG5cbnByb2plY3RGb3JtRGl2LmFwcGVuZENoaWxkKHByb2plY3REaXZIZWFkKTtcbnByb2plY3REaXZIZWFkLmFwcGVuZENoaWxkKHByb2plY3RUaXRsZURpdik7XG5wcm9qZWN0RGl2SGVhZC5hcHBlbmRDaGlsZChwcm9qZWN0c0J0bkRpdik7XG5wcm9qZWN0VGl0bGVEaXYuYXBwZW5kQ2hpbGQocHJvamVjdHNUaXRsZSk7XG5wcm9qZWN0c0J0bkRpdi5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QnRuKTtcbnByb2plY3RGb3JtRGl2LmFwcGVuZENoaWxkKHByb2plY3RMaXN0RGl2KTtcbnByb2plY3RMaXN0Rm9ybS5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgaWYgKHByb2plY3RMaXN0RGl2LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1mb3JtXCIpID09IG51bGwpIHtcbiAgICBwcm9qZWN0TGlzdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0TGlzdEZvcm0pO1xuICAgIHByb2plY3RMaXN0RGl2LnNjcm9sbFRvcCA9IHByb2plY3RMaXN0RGl2LnNjcm9sbEhlaWdodDtcbiAgfVxufSk7XG5cbmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZSkgPT4ge1xuICBjb25zdCBwcm9qZWN0TmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBjb25zdCBwcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgcHJvamVjdE5hbWVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkZWxldGVQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29uc3QgZGVsZXRlUHJvamVjdEJ0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgZGVsZXRlUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IFwieFwiO1xuICBkZWxldGVQcm9qZWN0QnRuLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtcHJvamVjdC1idXR0b25cIik7XG4gIHByb2plY3RDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInByb2plY3QtY29udGFpbmVyXCIpO1xuICBwcm9qZWN0TmFtZURpdi5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1uYW1lLWRpdlwiKTtcbiAgZGVsZXRlUHJvamVjdEJ0bkRpdi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLXByb2plY3QtYnV0dG9uLWRpdlwiKTtcblxuICBpZiAoZS5jb2RlID09PSBcIkVudGVyXCIpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgcHJvamVjdE5hbWUudGV4dENvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnByb2plY3QtaW5wdXRcIikudmFsdWU7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdERpdi5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgcHJvamVjdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIsIGkpO1xuICAgIH1cbiAgICBwcm9qZWN0TGlzdEZvcm0ucmVzZXQoKTtcbiAgICBwcm9qZWN0TGlzdEZvcm0ucmVtb3ZlKCk7XG4gICAgcHJvamVjdExpc3REaXYuYXBwZW5kQ2hpbGQocHJvamVjdENvbnRhaW5lcik7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZURpdik7XG4gICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnRuRGl2KTtcbiAgICBwcm9qZWN0TmFtZURpdi5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZSk7XG4gICAgZGVsZXRlUHJvamVjdEJ0bkRpdi5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnRuKTtcbiAgICBzZXRBY3RpdmVUb0ZhbHNlKCk7XG4gICAgY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZS50ZXh0Q29udGVudCwgW10sIHRydWUpO1xuICAgIHJlbW92ZUFjdGl2ZUNsYXNzKCk7XG4gICAgcHJvamVjdE5hbWUuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcbiAgICBjaGFuZ2VUaXRsZSgpO1xuICAgIGNsZWFyVG9kb3MoKTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5KTtcbiAgfVxuXG4gIGRlbGV0ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc3Qgc3RvcmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuICAgIGNvbnN0IHByb2plY3RzID0gcHJvamVjdExpc3REaXYuY2hpbGRyZW47XG4gICAgcHJvamVjdENvbnRhaW5lci5yZW1vdmUoKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHByb2plY3RzW2ldLnNldEF0dHJpYnV0ZShcImRhdGEtaW5kZXhcIiwgaSk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHBhcnNlSW50KHByb2plY3RzQXJyYXkuaW5kZXhPZihwcm9qZWN0c0FycmF5W2ldKSkgPT09XG4gICAgICAgIHBhcnNlSW50KGUudGFyZ2V0LmNsb3Nlc3QoXCIucHJvamVjdC1jb250YWluZXJcIikuZGF0YXNldC5pbmRleClcbiAgICAgICkge1xuICAgICAgICBwcm9qZWN0c0FycmF5LnNwbGljZShpLCAxKTtcbiAgICAgIH1cblxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPD0gc3RvcmVkUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHBhcnNlSW50KGUudGFyZ2V0LmNsb3Nlc3QoXCIucHJvamVjdC1jb250YWluZXJcIikuZGF0YXNldC5pbmRleCkgPT09XG4gICAgICAgICAgcGFyc2VJbnQoc3RvcmVkUHJvamVjdHMuaW5kZXhPZihzdG9yZWRQcm9qZWN0c1tpXSkpXG4gICAgICAgICkge1xuICAgICAgICAgIHN0b3JlZFByb2plY3RzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIFtKU09OLnN0cmluZ2lmeShzdG9yZWRQcm9qZWN0cyldKTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKFxuICAgICAgZS50YXJnZXQucGFyZW50Tm9kZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5jb250YWlucyhcbiAgICAgICAgXCJhY3RpdmVcIlxuICAgICAgKVxuICAgICkge1xuICAgICAgY2xlYXJUb2RvcygpO1xuICAgICAgYWN0aXZlUHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICB9XG4gIH0pO1xufSk7XG5cbmNvbnN0IGNoYW5nZUFjdGl2ZUNsYXNzID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtbGlzdC1kaXZcIik7XG5cbiAgcHJvamVjdExpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUgPT0gXCJQXCIpIHtcbiAgICAgIHJlbW92ZUFjdGl2ZUNsYXNzKCk7XG4gICAgICBjbGVhclRvZG9zKCk7XG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBzZXRBY3RpdmVUb0ZhbHNlID0gKCkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBwcm9qZWN0c0FycmF5W2ldLmFjdGl2ZSA9IGZhbHNlO1xuICB9XG59O1xuXG5jb25zdCByZW1vdmVBY3RpdmVDbGFzcyA9ICgpID0+IHtcbiAgY29uc3QgY2hpbGRyZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLWxpc3QtZGl2XCIpLmNoaWxkcmVuO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBuZXN0ZWRDaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgIGNvbnN0IGdyYW5kQ2hpbGQgPSBuZXN0ZWRDaGlsZC5maXJzdENoaWxkO1xuICAgIGNvbnN0IGdyZWF0R3JhbmRDaGlsZCA9IGdyYW5kQ2hpbGQuZmlyc3RDaGlsZDtcbiAgICBncmVhdEdyYW5kQ2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfVxufTtcblxuY29uc3QgYWN0aXZlUHJvamVjdCA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtbGlzdC1kaXZcIik7XG4gIHByb2plY3RTZWxlY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoXG4gICAgICAgIGUudGFyZ2V0LnRhZ05hbWUgPT0gXCJQXCIgJiZcbiAgICAgICAgcGFyc2VJbnQocHJvamVjdHNBcnJheS5pbmRleE9mKHByb2plY3RzQXJyYXlbaV0pKSA9PT1cbiAgICAgICAgICBwYXJzZUludChlLnRhcmdldC5jbG9zZXN0KFwiLnByb2plY3QtY29udGFpbmVyXCIpLmRhdGFzZXQuaW5kZXgpICYmXG4gICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKVxuICAgICAgKSB7XG4gICAgICAgIHByb2plY3RzQXJyYXlbaV0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHNBcnJheSk7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBlLnRhcmdldC50YWdOYW1lID09IFwiUFwiICYmXG4gICAgICAgIHBhcnNlSW50KHByb2plY3RzQXJyYXkuaW5kZXhPZihwcm9qZWN0c0FycmF5W2ldKSkgIT09XG4gICAgICAgICAgcGFyc2VJbnQoZS50YXJnZXQuY2xvc2VzdChcIi5wcm9qZWN0LWNvbnRhaW5lclwiKS5kYXRhc2V0LmluZGV4KSAmJlxuICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhY3RpdmVcIilcbiAgICAgICkge1xuICAgICAgICBwcm9qZWN0c0FycmF5W2ldLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUgPT0gXCJQXCIpIHtcbiAgICAgICAgZGlzcGxheUFjdGl2ZVRvZG9zKGUsIGkpO1xuICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VUaXRsZSgpO1xuICAgIGNvbnNvbGUubG9nKHByb2plY3RzQXJyYXkpO1xuICB9KTtcbn07XG5cbmNvbnN0IGRpc3BsYXlBY3RpdmVUb2RvcyA9IChlLCBpKSA9PiB7XG4gIGZvciAobGV0IG4gPSAwOyBuIDwgcHJvamVjdHNBcnJheVtpXS50b2Rvcy5sZW5ndGg7IG4rKykge1xuICAgIGlmIChcbiAgICAgIHBhcnNlSW50KHByb2plY3RzQXJyYXkuaW5kZXhPZihwcm9qZWN0c0FycmF5W2ldKSkgPT09XG4gICAgICAgIHBhcnNlSW50KGUudGFyZ2V0LmNsb3Nlc3QoXCIucHJvamVjdC1jb250YWluZXJcIikuZGF0YXNldC5pbmRleCkgJiZcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKVxuICAgICkge1xuICAgICAgZGlzcGxheVRvZG9zKHByb2plY3RzQXJyYXlbaV0udG9kb3Nbbl0pO1xuICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPCBhY3RpdmVUb2RvRGl2LmNoaWxkcmVuLmxlbmd0aDsgdCsrKSB7XG4gICAgICAgIGFjdGl2ZVRvZG9EaXYuY2hpbGRyZW5bdF0uc2V0QXR0cmlidXRlKFwiZGF0YS10b2RvLWluZGV4XCIsIHQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IHsgcHJvamVjdEZvcm1EaXYsIGNoYW5nZUFjdGl2ZUNsYXNzLCBhY3RpdmVQcm9qZWN0LCBkaXNwbGF5QWN0aXZlVG9kb3MgfTtcbiIsImltcG9ydCB7IGRpc3BsYXlUb2RvcyB9IGZyb20gXCIuL2FjdGl2ZVByb2plY3QuanNcIjtcbmltcG9ydCB7IGxvY2FsU3RvcmFnZVByb2plY3QsIGxvY2FsU3RvcmFnZVRvZG9zIH0gZnJvbSBcIi4vc3RvcmVQcm9qZWN0cy5qc1wiO1xuXG5jb25zdCBwcm9qZWN0c0FycmF5ID0gW107XG5cbmNvbnN0IFByb2plY3QgPSAodGl0bGUsIHRvZG9zLCBhY3RpdmUpID0+IHtcbiAgcmV0dXJuIHsgdGl0bGUsIHRvZG9zLCBhY3RpdmUgfTtcbn07XG5cbmNvbnN0IGNyZWF0ZVByb2plY3QgPSAodGl0bGUsIHRvZG9zLCBhY3RpdmUpID0+IHtcbiAgbGV0IG5ld1Byb2plY3QgPSBQcm9qZWN0KCk7XG4gIG5ld1Byb2plY3QudGl0bGUgPSB0aXRsZTtcbiAgbmV3UHJvamVjdC50b2RvcyA9IFsuLi50b2Rvc107XG4gIG5ld1Byb2plY3QuYWN0aXZlID0gYWN0aXZlO1xuICBwcm9qZWN0c0FycmF5LnB1c2gobmV3UHJvamVjdCk7XG4gIGxvY2FsU3RvcmFnZVByb2plY3QobmV3UHJvamVjdCk7XG59O1xuXG5jb25zdCBUb2RvID0gKHRpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIG5vdGVzLCBjb21wbGV0ZSkgPT4ge1xuICByZXR1cm4geyB0aXRsZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBub3RlcywgY29tcGxldGUgfTtcbn07XG5cbmNvbnN0IGNyZWF0ZVRvZG8gPSAoXG4gIHRpdGxlLFxuICBkdWVEYXRlLFxuICBkZXNjcmlwdGlvbixcbiAgcHJpb3JpdHksXG4gIG5vdGVzLFxuICBjb21wbGV0ZSxcbiAgbmV3UHJvamVjdFxuKSA9PiB7XG4gIGxldCBuZXdUb2RvID0gVG9kbygpO1xuICBuZXdUb2RvLnRpdGxlID0gdGl0bGU7XG4gIG5ld1RvZG8uZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIG5ld1RvZG8uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgbmV3VG9kby5wcmlvcml0eSA9IHByaW9yaXR5O1xuICBuZXdUb2RvLm5vdGVzID0gbm90ZXM7XG4gIG5ld1RvZG8uY29tcGxldGUgPSBjb21wbGV0ZTtcbiAgZGlzcGxheVRvZG9zKG5ld1RvZG8pO1xuICBuZXdQcm9qZWN0LnB1c2gobmV3VG9kbyk7XG4gIGxvY2FsU3RvcmFnZVRvZG9zKG5ld1RvZG8pO1xufTtcblxuZXhwb3J0IHsgcHJvamVjdHNBcnJheSwgY3JlYXRlUHJvamVjdCwgY3JlYXRlVG9kbyB9O1xuIiwiY29uc3Qgb25sb2FkU3RvcmFnZSA9ICgpID0+IHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsICgpID0+IHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSA9PT0gbnVsbCkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBcIltdXCIpO1xuICAgIH1cbiAgfSk7XG59O1xuXG5jb25zdCBsb2NhbFN0b3JhZ2VQcm9qZWN0ID0gKG5ld1Byb2plY3QpID0+IHtcbiAgY29uc3Qgc3RvcmVOZXdQcm9qZWN0ID0gbmV3UHJvamVjdDtcbiAgY29uc3Qgc3RvcmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuICBzdG9yZWRQcm9qZWN0cy5wdXNoKHN0b3JlTmV3UHJvamVjdCk7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgW0pTT04uc3RyaW5naWZ5KHN0b3JlZFByb2plY3RzKV0pO1xufTtcblxuY29uc3QgbG9jYWxTdG9yYWdlVG9kb3MgPSAobmV3VG9kbykgPT4ge1xuICBjb25zdCBzdG9yZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RvcmVkUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3RvcmVkUHJvamVjdHNbaV0uYWN0aXZlID09PSB0cnVlKSB7XG4gICAgICBjb25zdCBzdG9yZWRUb2RvcyA9IHN0b3JlZFByb2plY3RzW2ldLnRvZG9zO1xuICAgICAgc3RvcmVkVG9kb3MucHVzaChuZXdUb2RvKTtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxuICAgICAgICBcInByb2plY3RzXCIsXG4gICAgICAgIGBbe1widGl0bGVcIjoke0pTT04uc3RyaW5naWZ5KFxuICAgICAgICAgIHN0b3JlZFByb2plY3RzW2ldLnRpdGxlXG4gICAgICAgICl9LFwidG9kb3NcIjoke0pTT04uc3RyaW5naWZ5KHN0b3JlZFRvZG9zKX0sXCJhY3RpdmVcIjoke1xuICAgICAgICAgIHN0b3JlZFByb2plY3RzW2ldLmFjdGl2ZVxuICAgICAgICB9fV1gXG4gICAgICApO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IHsgb25sb2FkU3RvcmFnZSwgbG9jYWxTdG9yYWdlUHJvamVjdCwgbG9jYWxTdG9yYWdlVG9kb3MgfTtcbiIsImltcG9ydCB7IGNyZWF0ZVRvZG8sIHByb2plY3RzQXJyYXkgfSBmcm9tIFwiLi9wcm9qZWN0cy5qc1wiO1xuaW1wb3J0IHsgYWN0aXZlVG9kb0RpdiB9IGZyb20gXCIuL2FjdGl2ZVByb2plY3QuanNcIjtcblxuY29uc3QgdG9kb0Zvcm1Db250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xudG9kb0Zvcm1Db250YWluZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLWZvcm0tY29udGFpbmVyXCIpO1xudG9kb0Zvcm1Db250YWluZXIuY2xhc3NMaXN0LmFkZChcImRpdi1iYWNrZ3JvdW5kXCIpO1xuXG5jb25zdCB0b2RvRGl2SGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCB0b2RvRGl2SGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG50b2RvRGl2SGVhZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tZGl2LWhlYWRcIik7XG50b2RvRGl2SGVhZGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1kaXYtaGVhZGVyXCIpO1xudG9kb0RpdkhlYWRlci50ZXh0Q29udGVudCA9IFwiQ3JlYXRlIFRvLURvXCI7XG5cbmNvbnN0IHRvZG9Gb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHRvZG9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG50b2RvRm9ybURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tZm9ybS1kaXZcIik7XG50b2RvRm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tZm9ybVwiKTtcblxuY29uc3QgdG9kb1RpdGxlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHRvZG9UaXRsZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuY29uc3QgdG9kb1RpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG50b2RvVGl0bGVEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLXRpdGxlLWRpdlwiKTtcbnRvZG9UaXRsZURpdi5jbGFzc0xpc3QuYWRkKFwiZm9ybS1lbGVtZW50c1wiKTtcbnRvZG9UaXRsZUxhYmVsLnRleHRDb250ZW50ID0gXCJUaXRsZTpcIjtcbnRvZG9UaXRsZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuXG5jb25zdCB0b2RvRHVlRGF0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCB0b2RvRHVlRGF0ZUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuY29uc3QgdG9kb0R1ZURhdGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbnRvZG9EdWVEYXRlRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1kdWVkYXRlLWRpdlwiKTtcbnRvZG9EdWVEYXRlRGl2LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWVsZW1lbnRzXCIpO1xudG9kb0R1ZURhdGVMYWJlbC50ZXh0Q29udGVudCA9IFwiRGF0ZTpcIjtcbnRvZG9EdWVEYXRlSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImRhdGVcIik7XG5cbmNvbnN0IHRvZG9EZXNjcmlwdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCB0b2RvRGVzY3JpcHRpb25MYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbmNvbnN0IHRvZG9EZXNjcmlwdGlvbklucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xudG9kb0Rlc2NyaXB0aW9uRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1kZXNjcmlwdGlvbi1kaXZcIik7XG50b2RvRGVzY3JpcHRpb25EaXYuY2xhc3NMaXN0LmFkZChcImZvcm0tZWxlbWVudHNcIik7XG50b2RvRGVzY3JpcHRpb25MYWJlbC50ZXh0Q29udGVudCA9IFwiRGVzY3JpcHRpb246XCI7XG50b2RvRGVzY3JpcHRpb25JbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcblxuY29uc3QgdG9kb1ByaW9yaXR5RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHRvZG9Qcmlvcml0eUxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuY29uc3QgdG9kb1ByaW9yaXR5SW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5jb25zdCB0b2RvUHJpb3JpdHlMZXZlbHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgdG9kb1ByaW9yaXR5TG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5jb25zdCB0b2RvUHJpb3JpdHlNaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbmNvbnN0IHRvZG9Qcmlvcml0eUhpZ2ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbnRvZG9Qcmlvcml0eURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tcHJpb3JpdHktZGl2XCIpO1xudG9kb1ByaW9yaXR5RGl2LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWVsZW1lbnRzXCIpO1xudG9kb1ByaW9yaXR5TGFiZWwudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OlwiO1xudG9kb1ByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInJhbmdlXCIpO1xudG9kb1ByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKFwibWluXCIsIFwiMVwiKTtcbnRvZG9Qcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZShcIm1heFwiLCBcIjNcIik7XG50b2RvUHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcIjFcIik7XG50b2RvUHJpb3JpdHlMZXZlbHMuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcmlvcml0eS1sZXZlbHNcIik7XG50b2RvUHJpb3JpdHlMb3cudGV4dENvbnRlbnQgPSBcIkxvd1wiO1xudG9kb1ByaW9yaXR5TG93LnN0eWxlLnRleHRTaGFkb3cgPSBcIjAgMCA3cHggcmVkXCI7XG50b2RvUHJpb3JpdHlNaWQudGV4dENvbnRlbnQgPSBcIk1pZFwiO1xudG9kb1ByaW9yaXR5TWlkLnN0eWxlLnRleHRTaGFkb3cgPSBcIjAgMCA3cHggeWVsbG93XCI7XG50b2RvUHJpb3JpdHlIaWdoLnRleHRDb250ZW50ID0gXCJIaWdoXCI7XG50b2RvUHJpb3JpdHlIaWdoLnN0eWxlLnRleHRTaGFkb3cgPSBcIjAgMCA3cHggIzM5ZmMwM1wiO1xuXG5jb25zdCB0b2RvTm90ZXNEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgdG9kb05vdGVzTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5jb25zdCB0b2RvTm90ZXNJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbnRvZG9Ob3Rlc0Rpdi5jbGFzc0xpc3QuYWRkKFwiZm9ybS1lbGVtZW50c1wiKTtcbnRvZG9Ob3Rlc0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tbm90ZXMtZGl2XCIpO1xudG9kb05vdGVzSW5wdXQuc2V0QXR0cmlidXRlKFwicm93c1wiLCBcIjVcIik7XG50b2RvTm90ZXNMYWJlbC50ZXh0Q29udGVudCA9IFwiTm90ZXM6XCI7XG5cbmNvbnN0IHRvZG9TdWJtaXREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgdG9kb1N1Ym1pdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG50b2RvU3VibWl0RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1zdWJtaXQtZGl2XCIpO1xudG9kb1N1Ym1pdEJ0bi50ZXh0Q29udGVudCA9IFwiU3VibWl0XCI7XG5cbnRvZG9Gb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9EaXZIZWFkKTtcbnRvZG9Gb3JtQ29udGFpbmVyLmFwcGVuZENoaWxkKHRvZG9Gb3JtRGl2KTtcbnRvZG9EaXZIZWFkLmFwcGVuZENoaWxkKHRvZG9EaXZIZWFkZXIpO1xudG9kb0Zvcm1EaXYuYXBwZW5kQ2hpbGQodG9kb0Zvcm0pO1xudG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb1RpdGxlRGl2KTtcbnRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9EdWVEYXRlRGl2KTtcbnRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9EZXNjcmlwdGlvbkRpdik7XG50b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvUHJpb3JpdHlEaXYpO1xudG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb05vdGVzRGl2KTtcbnRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9TdWJtaXREaXYpO1xudG9kb1RpdGxlRGl2LmFwcGVuZENoaWxkKHRvZG9UaXRsZUxhYmVsKTtcbnRvZG9UaXRsZURpdi5hcHBlbmRDaGlsZCh0b2RvVGl0bGVJbnB1dCk7XG50b2RvRHVlRGF0ZURpdi5hcHBlbmRDaGlsZCh0b2RvRHVlRGF0ZUxhYmVsKTtcbnRvZG9EdWVEYXRlRGl2LmFwcGVuZENoaWxkKHRvZG9EdWVEYXRlSW5wdXQpO1xudG9kb0Rlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKHRvZG9EZXNjcmlwdGlvbkxhYmVsKTtcbnRvZG9EZXNjcmlwdGlvbkRpdi5hcHBlbmRDaGlsZCh0b2RvRGVzY3JpcHRpb25JbnB1dCk7XG50b2RvUHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQodG9kb1ByaW9yaXR5TGFiZWwpO1xudG9kb1ByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHRvZG9Qcmlvcml0eUxldmVscyk7XG50b2RvUHJpb3JpdHlMZXZlbHMuYXBwZW5kQ2hpbGQodG9kb1ByaW9yaXR5TG93KTtcbnRvZG9Qcmlvcml0eUxldmVscy5hcHBlbmRDaGlsZCh0b2RvUHJpb3JpdHlNaWQpO1xudG9kb1ByaW9yaXR5TGV2ZWxzLmFwcGVuZENoaWxkKHRvZG9Qcmlvcml0eUhpZ2gpO1xudG9kb1ByaW9yaXR5RGl2LmFwcGVuZENoaWxkKHRvZG9Qcmlvcml0eUlucHV0KTtcbnRvZG9Ob3Rlc0Rpdi5hcHBlbmRDaGlsZCh0b2RvTm90ZXNMYWJlbCk7XG50b2RvTm90ZXNEaXYuYXBwZW5kQ2hpbGQodG9kb05vdGVzSW5wdXQpO1xudG9kb1N1Ym1pdERpdi5hcHBlbmRDaGlsZCh0b2RvU3VibWl0QnRuKTtcblxuY29uc3QgcHVzaFRvQWN0aXZlUHJvamVjdCA9ICgpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHByb2plY3RzQXJyYXlbaV0uYWN0aXZlID09IHRydWUpIHtcbiAgICAgIHJldHVybiBwcm9qZWN0c0FycmF5W2ldLnRvZG9zO1xuICAgIH1cbiAgfVxufTtcblxudG9kb1N1Ym1pdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwcm9qZWN0c0FycmF5Lmxlbmd0aCA+IDAgJiYgcHJvamVjdHNBcnJheVtpXS5hY3RpdmUgPT0gdHJ1ZSkge1xuICAgICAgY3JlYXRlVG9kbyhcbiAgICAgICAgdG9kb1RpdGxlSW5wdXQudmFsdWUsXG4gICAgICAgIHRvZG9EdWVEYXRlSW5wdXQudmFsdWUsXG4gICAgICAgIHRvZG9EZXNjcmlwdGlvbklucHV0LnZhbHVlLFxuICAgICAgICB0b2RvUHJpb3JpdHlJbnB1dC52YWx1ZSxcbiAgICAgICAgdG9kb05vdGVzSW5wdXQudmFsdWUsXG4gICAgICAgIGZhbHNlLFxuICAgICAgICBwdXNoVG9BY3RpdmVQcm9qZWN0KClcbiAgICAgICk7XG4gICAgICB0b2RvRm9ybS5yZXNldCgpO1xuICAgICAgY29uc29sZS5sb2cocHJvamVjdHNBcnJheSk7XG4gICAgfVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgYWN0aXZlVG9kb0Rpdi5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgIGFjdGl2ZVRvZG9EaXYuY2hpbGRyZW5baV0uc2V0QXR0cmlidXRlKFwiZGF0YS10b2RvLWluZGV4XCIsIGkpO1xuICB9XG59KTtcblxuZXhwb3J0IHsgdG9kb0Zvcm1Db250YWluZXIgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBwcm9qZWN0c0FycmF5IH0gZnJvbSBcIi4vcHJvamVjdHMuanNcIjtcbmltcG9ydCB7XG4gIHByb2plY3RGb3JtRGl2LFxuICBjaGFuZ2VBY3RpdmVDbGFzcyxcbiAgYWN0aXZlUHJvamVjdCxcbn0gZnJvbSBcIi4vcHJvamVjdEZvcm0uanNcIjtcbmltcG9ydCB7XG4gIGFjdGl2ZVByb2plY3REaXYsXG4gIGFjdGl2ZVByb2plY3RIZWFkLFxuICBhY3RpdmVQcm9qZWN0VGl0bGUsXG4gIGFjdGl2ZVRvZG9EaXYsXG59IGZyb20gXCIuL2FjdGl2ZVByb2plY3QuanNcIjtcbmltcG9ydCB7IHRvZG9Gb3JtQ29udGFpbmVyIH0gZnJvbSBcIi4vdG9Eb0Zvcm1cIjtcbmltcG9ydCB7IG9ubG9hZFN0b3JhZ2UgfSBmcm9tIFwiLi9zdG9yZVByb2plY3RzXCI7XG5cbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRcIik7XG5jb250ZW50LmFwcGVuZENoaWxkKHByb2plY3RGb3JtRGl2KTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQoYWN0aXZlUHJvamVjdERpdik7XG5jb250ZW50LmFwcGVuZCh0b2RvRm9ybUNvbnRhaW5lcik7XG5hY3RpdmVQcm9qZWN0RGl2LmFwcGVuZENoaWxkKGFjdGl2ZVByb2plY3RIZWFkKTtcbmFjdGl2ZVByb2plY3REaXYuYXBwZW5kQ2hpbGQoYWN0aXZlVG9kb0Rpdik7XG5hY3RpdmVQcm9qZWN0SGVhZC5hcHBlbmRDaGlsZChhY3RpdmVQcm9qZWN0VGl0bGUpO1xuXG5jaGFuZ2VBY3RpdmVDbGFzcygpO1xuYWN0aXZlUHJvamVjdCgpO1xub25sb2FkU3RvcmFnZSgpO1xuXG5jb25zb2xlLmxvZyhwcm9qZWN0c0FycmF5KTtcblxuZXhwb3J0IHsgY29udGVudCB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9