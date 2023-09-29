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
// Import the projectsArray from an external module


// Create HTML elements for the active project display
const activeProjectDiv = document.createElement("div");
const activeProjectHead = document.createElement("div");
const activeProjectTitle = document.createElement("h3");
const activeTodoDiv = document.createElement("div");

// Set attributes and add classes to the created elements
activeProjectDiv.setAttribute("id", "active-project-div");
activeProjectDiv.classList.add("div-background");
activeProjectHead.setAttribute("id", "active-project-head");
activeProjectTitle.setAttribute("id", "active-project-title");
activeTodoDiv.setAttribute("id", "active-todo-div");

// Function to change the title displayed for the active project
const changeTitle = () => {
  for (let i = 0; i < _projects_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray.length; i++) {
    if (_projects_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[i].active == true) {
      activeProjectTitle.textContent = _projects_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[i].title;
    }
  }
};

// Function to clear all todos from the active project display
const clearTodos = () => {
  while (activeTodoDiv.hasChildNodes()) {
    activeTodoDiv.firstChild.remove();
  }
};

// Function to display a single todo in the active project display
const displayTodos = (todo) => {
  // Create HTML elements for displaying the todo
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
  let todoCompleteBtn = document.createElement("button");
  let expandTodoDiv = document.createElement("div");
  let expandTodoBtn = document.createElement("button");

  // Add CSS classes to style the created elements
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
  todoCompleteBtn.classList.add("todo-complete");
  todoTitle.classList.add("todo-properties");
  todoDueDate.classList.add("todo-properties");
  todoDescription.classList.add("todo-properties");
  todoPriority.classList.add("todo-properties");
  todoNotes.classList.add("todo-properties");
  todoCompleteDiv.classList.add("todo-button-div");
  todoCompleteBtn.classList.add("todo-button");
  expandTodoDiv.classList.add("expand-todo-div");
  expandTodoBtn.classList.add("expand-todo-button");

  // Set text content for delete and expand buttons
  deleteTodoBtn.textContent = "X";
  expandTodoBtn.textContent = "▾";

  // Iterate through the projects to find the active one
  for (let i = 0; i < _projects_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray.length; i++) {
    if (_projects_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[i].active == true) {
      // Set text content and styles based on the todo's properties
      todoTitle.textContent = todo.title;
      todoDueDate.textContent = `Due: ${todo.dueDate}`;
      todoDescription.textContent = todo.description;
      todoNotes.textContent = todo.notes;
      todoCompleteBtn.textContent = "incomplete";

      // Set styles based on todo priority
      if (todo.priority == 1) {
        // Low priority
        todoDiv.style.border = "2px solid red";
        todoDiv.style.boxShadow = "0 0 10px 5px red";
        todoPriority.textContent = "Priority: Low";
      } else if (todo.priority == 2) {
        // Medium priority
        todoDiv.style.border = "2px solid yellow";
        todoDiv.style.boxShadow = "0 0 10px 5px yellow";
        todoPriority.textContent = "Priority: Mid";
      } else if (todo.priority == 3) {
        // High priority
        todoDiv.style.border = "2px solid #39fc03";
        todoDiv.style.boxShadow = "0 0 10px 5px #39fc03";
        todoPriority.textContent = "Priority: High";
      }

      // Set styles and text for todo completion status
      if (todo.complete == false) {
        //Incomplete
        todoCompleteBtn.textContent = "incomplete";
        todoCompleteBtn.style.border = "2px solid red";
        todoCompleteBtn.style.boxShadow = "red 0px 0px 5px 1px";
        todoCompleteBtn.style.background = "red";
      } else if (todo.complete == true) {
        //Complete
        todoCompleteBtn.textContent = "complete";
        todoCompleteBtn.style.border = "2px solid #05db05";
        todoCompleteBtn.style.boxShadow = "#05db05 0px 0px 5px 1px";
        todoCompleteBtn.style.background = "#05db05";
      }
    }
  }

  // Append the created elements to the activeTodoDiv
  activeTodoDiv.appendChild(todoDiv);
  todoDiv.appendChild(todoHeader);
  todoHeader.appendChild(todoTitleDiv);
  todoHeader.appendChild(deleteTodoDiv);
  todoTitleDiv.appendChild(todoTitle);
  deleteTodoDiv.appendChild(deleteTodoBtn);
  todoDiv.appendChild(todoDueDate);
  todoDiv.appendChild(todoDescription);
  todoDiv.appendChild(todoCompleteDiv);
  todoCompleteDiv.appendChild(todoCompleteBtn);
  todoDiv.appendChild(expandTodoDiv);
  expandTodoDiv.appendChild(expandTodoBtn);

  // Event listener for completing/incompleting a todo
  todoCompleteBtn.addEventListener("click", (e) => {
    const storedProjects = JSON.parse(localStorage.getItem("projects"));
    const clickedTodoIndex = parseInt(
      e.target.closest(".todo-div").dataset.todoIndex
    );
    const activeProject = storedProjects.find(
      (project) => project.active === true
    );

    // Toggle the completion status and update styles
    if (todo.complete == false) {
      todo.complete = true;
      e.target.textContent = "complete";
      e.target.style.border = "2px solid #05db05";
      e.target.style.boxShadow = "#05db05 0px 0px 5px 1px";
      e.target.style.background = "#05db05";
    } else if (todo.complete == true) {
      todo.complete = false;
      e.target.textContent = "incomplete";
      e.target.style.border = "2px solid red";
      e.target.style.boxShadow = "red 0px 0px 5px 1px";
      e.target.style.background = "red";
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
// Import statements to bring in elements and functions from other modules
 // Import elements and functions related to active project display
 // Import project creation function and data array

// Create HTML elements for the project form and project list
const projectFormDiv = document.createElement("div");
const projectDivHead = document.createElement("div");
const projectTitleDiv = document.createElement("div");
const projectsTitle = document.createElement("p");
const projectListDiv = document.createElement("div");
const projectsBtnDiv = document.createElement("div");
const addProjectBtn = document.createElement("button");
const projectListForm = document.createElement("form");
const input = document.createElement("input");

// Set text content for elements
projectsTitle.textContent = "Projects";
addProjectBtn.textContent = "+";

// Add classes and IDs to HTML elements
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

// Append elements to create the project form structure
projectFormDiv.appendChild(projectDivHead);
projectDivHead.appendChild(projectTitleDiv);
projectDivHead.appendChild(projectsBtnDiv);
projectTitleDiv.appendChild(projectsTitle);
projectsBtnDiv.appendChild(addProjectBtn);
projectFormDiv.appendChild(projectListDiv);
projectListForm.appendChild(input);

// Event listener to show the project input field when the "+" button is clicked
addProjectBtn.addEventListener("click", () => {
  if (projectListDiv.querySelector(".project-form") == null) {
    projectListDiv.appendChild(projectListForm);
    projectListDiv.scrollTop = projectListDiv.scrollHeight;
  }
});

// Event listener to create a new project when the "Enter" key is pressed in the input field
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

    // Set a data-index attribute to track the project index
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
    setActiveToFalse(); // Deactivate all other projects
    (0,_projects_js__WEBPACK_IMPORTED_MODULE_1__.createProject)(projectName.textContent, [], true); // Create a new project
    removeActiveClass(); // Remove the active class from other projects
    projectName.classList.add("active"); // Set the newly created project as active
    projectName.classList.add("project"); //Add the project class to the new project
    (0,_activeProject_js__WEBPACK_IMPORTED_MODULE_0__.changeTitle)(); // Change the title displayed for the active project
    storageProjectActiveStatus(); // Update the active status in local storage
    (0,_activeProject_js__WEBPACK_IMPORTED_MODULE_0__.clearTodos)(); // Clear todos from the active project display
  }

  // Event listener to delete a project when the "x" button is clicked
  deleteProjectBtn.addEventListener("click", (e) => {
    deleteProject(e); // Function to delete a project
  });
});

// Function to change the active class when a project is clicked
const changeActiveClass = () => {
  const projectList = document.getElementById("projects-list-div");

  projectList.addEventListener("click", (e) => {
    if (e.target.tagName == "P") {
      removeActiveClass(); // Remove the active class from other projects
      (0,_activeProject_js__WEBPACK_IMPORTED_MODULE_0__.clearTodos)(); // Clear todos from the active project display
      e.target.classList.add("active");
    }
  });
};

// Function to delete a project
const deleteProject = (e) => {
  const storedProjects = JSON.parse(localStorage.getItem("projects"));
  const projects = projectListDiv.children;
  e.target.closest(".project-container").remove();

  // Set data-index attributes to track project indices
  for (let i = 0; i < projects.length; i++) {
    projects[i].setAttribute("data-index", i);
  }

  // Remove the deleted project from the projectsArray
  for (let i = 0; i < _projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray.length; i++) {
    if (
      parseInt(_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray.indexOf(_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray[i])) ===
      parseInt(e.target.closest(".project-container").dataset.index)
    ) {
      _projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray.splice(i, 1);
    }
  }

  // Remove the deleted project from storedProjects in local storage
  for (let i = 0; i < storedProjects.length; i++) {
    if (
      parseInt(e.target.closest(".project-container").dataset.index) ===
      parseInt(storedProjects.indexOf(storedProjects[i]))
    ) {
      storedProjects.splice(i, 1);
      localStorage.setItem("projects", [JSON.stringify(storedProjects)]);
      return;
    }
    storageProjectActiveStatus(); // Update active status in storage
  }

  // If the deleted project was active, clear todos and reset the title
  if (
    e.target.parentNode.previousElementSibling.children[0].classList.contains(
      "active"
    )
  ) {
    (0,_activeProject_js__WEBPACK_IMPORTED_MODULE_0__.clearTodos)(); // Clear todos from the active project display
    _activeProject_js__WEBPACK_IMPORTED_MODULE_0__.activeProjectTitle.textContent = "";
  }
};

// Function to set all projects' "active" property to false
const setActiveToFalse = () => {
  for (let i = 0; i < _projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray.length; i++) {
    _projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray[i].active = false;
  }
};

// Function to remove the "active" class from all project names
const removeActiveClass = () => {
  const children = document.getElementById("projects-list-div").children;

  for (let i = 0; i < children.length; i++) {
    const nestedChild = children[i];
    const grandChild = nestedChild.firstChild;
    const greatGrandChild = grandChild.firstChild;
    greatGrandChild.classList.remove("active");
  }
};

// Function to activate a project when it is clicked
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
    storageProjectActiveStatus(); // Update active status in storage
    (0,_activeProject_js__WEBPACK_IMPORTED_MODULE_0__.changeTitle)(); // Change the title displayed for the active project
  });
};

// Function to update the active status in local storage
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

// Function to display active todos when a project is clicked
const displayActiveTodos = (e, i) => {
  for (let n = 0; n < _projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray[i].todos.length; n++) {
    if (
      parseInt(_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray.indexOf(_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray[i])) ===
        parseInt(e.target.closest(".project-container").dataset.index) &&
      e.target.classList.contains("active")
    ) {
      (0,_activeProject_js__WEBPACK_IMPORTED_MODULE_0__.displayTodos)(_projects_js__WEBPACK_IMPORTED_MODULE_1__.projectsArray[i].todos[n]); // Function to display a single todo in the active project display
      for (let t = 0; t < _activeProject_js__WEBPACK_IMPORTED_MODULE_0__.activeTodoDiv.children.length; t++) {
        _activeProject_js__WEBPACK_IMPORTED_MODULE_0__.activeTodoDiv.children[t].setAttribute("data-todo-index", t);
      }
    }
  }
};

// Export statements to make functions and elements available to other modules



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
// Import statements to bring in functions and data from other modules
 // Importing the displayTodos function
 // Importing functions related to local storage

// Define an empty array to store projects
const projectsArray = [];

// Factory function to create a project object
const Project = (title, todos, active) => {
  return { title, todos, active };
};

// Function to create a new project and add it to the projectsArray
const createProject = (title, todos, active) => {
  // Create a new project object
  let newProject = Project();
  // Assign properties to the new project
  newProject.title = title;
  newProject.todos = [...todos];
  newProject.active = active;
  // Push the new project to the projectsArray
  projectsArray.push(newProject);
  // Save the new project to local storage
  (0,_storeProjects_js__WEBPACK_IMPORTED_MODULE_1__.localStorageProject)(newProject);
};

// Factory function to create a todo object
const Todo = (title, dueDate, description, priority, notes, complete) => {
  return { title, dueDate, description, priority, notes, complete };
};

// Function to create a new todo, display it, add it to a project, and save it to local storage
const createTodo = (
  title,
  dueDate,
  description,
  priority,
  notes,
  complete,
  newProject
) => {
  // Create a new todo object
  let newTodo = Todo();
  // Assign properties to the new todo
  newTodo.title = title;
  newTodo.dueDate = dueDate;
  newTodo.description = description;
  newTodo.priority = priority;
  newTodo.notes = notes;
  newTodo.complete = complete;
  // Display the new todo
  (0,_activeProject_js__WEBPACK_IMPORTED_MODULE_0__.displayTodos)(newTodo);
  // Push the new todo to the specified project
  newProject.push(newTodo);
  // Save the new todo to local storage
  (0,_storeProjects_js__WEBPACK_IMPORTED_MODULE_1__.localStorageTodos)(newTodo);
};

// Export statements to make functions and data available to other modules



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
/* harmony import */ var _activeProject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./activeProject.js */ "./src/activeProject.js");
/* harmony import */ var _projectForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectForm.js */ "./src/projectForm.js");
/* harmony import */ var _projects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects.js */ "./src/projects.js");
// Import statements to bring in functions and data from other modules
 // Importing functions related to active projects
 // Importing functions related to project list
 // Importing Project and projectsArray

// Function to load data from local storage when the window loads
const onloadStorage = () => {
  // Add a "load" event listener to the window
  window.addEventListener("load", () => {
    // Check if the "projects" key in local storage is null or empty
    if (localStorage.getItem("projects") === null) {
      // If it's null or empty, set it to an empty array as a JSON string
      localStorage.setItem("projects", "[]");
    } else {
      // Retrieve stored projects from local storage and parse them
      const storedProjects = JSON.parse(localStorage.getItem("projects"));

      // Loop through the stored projects and create elements for each
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

        // Set data-index attribute for projectContainer
        for (let t = 0; t <= _projectForm_js__WEBPACK_IMPORTED_MODULE_1__.projectListDiv.children.length; t++) {
          projectContainer.setAttribute("data-index", t);
        }

        // Append elements to the project list
        _projectForm_js__WEBPACK_IMPORTED_MODULE_1__.projectListDiv.appendChild(projectContainer);
        projectContainer.appendChild(projectNameDiv);
        projectContainer.appendChild(deleteProjectBtnDiv);
        projectNameDiv.appendChild(projectName);
        deleteProjectBtnDiv.appendChild(deleteProjectBtn);
        projectName.classList.add("project");

        // Add "active" class to projectName if the project is active
        if (
          projectName.textContent == storedProjects[i].title &&
          storedProjects[i].active === true
        ) {
          projectName.classList.add("active");
        }

        // Add click event listener to deleteProjectBtn
        deleteProjectBtn.addEventListener("click", (e) => {
          (0,_projectForm_js__WEBPACK_IMPORTED_MODULE_1__.deleteProject)(e); // Function to delete a project
        });

        // Create and add stored projects to projectsArray
        createStoredProjects(
          storedProjects[i].title,
          storedProjects[i].todos,
          storedProjects[i].active
        );

        // Call changeTitle function to update the active project title
        (0,_activeProject_js__WEBPACK_IMPORTED_MODULE_0__.changeTitle)();
      }

      // Loop through projectsArray and display todos for the active project
      for (let i = 0; i < _projects_js__WEBPACK_IMPORTED_MODULE_2__.projectsArray.length; i++) {
        for (let n = 0; n < _projects_js__WEBPACK_IMPORTED_MODULE_2__.projectsArray[i].todos.length; n++) {
          if (_projects_js__WEBPACK_IMPORTED_MODULE_2__.projectsArray[i].active === true) {
            (0,_activeProject_js__WEBPACK_IMPORTED_MODULE_0__.displayTodos)(_projects_js__WEBPACK_IMPORTED_MODULE_2__.projectsArray[i].todos[n]); // Function to display a single todo in the active project display

            // Set data-todo-index attribute for activeTodoDiv children
            for (let t = 0; t < _activeProject_js__WEBPACK_IMPORTED_MODULE_0__.activeTodoDiv.children.length; t++) {
              _activeProject_js__WEBPACK_IMPORTED_MODULE_0__.activeTodoDiv.children[t].setAttribute("data-todo-index", t);
            }
          }
        }
      }
    }
  });
};

// Function to store a new project in local storage
const localStorageProject = (newProject) => {
  // Store the new project data in a variable
  const storeNewProject = newProject;

  // Retrieve the existing projects from local storage
  const storedProjects = JSON.parse(localStorage.getItem("projects"));

  // Push the new project data to the existing projects array
  storedProjects.push(storeNewProject);

  // Update the "projects" key in local storage with the modified projects array
  localStorage.setItem("projects", JSON.stringify(storedProjects));
};

// Function to create and add stored projects to projectsArray
const createStoredProjects = (title, todos, active) => {
  let newProject = (0,_projects_js__WEBPACK_IMPORTED_MODULE_2__.Project)();
  newProject.title = title;
  newProject.todos = [...todos];
  newProject.active = active;
  _projects_js__WEBPACK_IMPORTED_MODULE_2__.projectsArray.push(newProject);
};

// Function to store a new todo in local storage
const localStorageTodos = (newTodo) => {
  // Retrieve existing projects from local storage
  const storedProjects = JSON.parse(localStorage.getItem("projects"));

  if (Array.isArray(storedProjects)) {
    // Find the active project
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

// Export statements to make functions available to other modules



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
// Import statements to bring in functions and data from other modules
 // Importing createTodo function and projectsArray
 // Importing activeTodoDiv

// Create a container for the todo form
const todoFormContainer = document.createElement("div");
todoFormContainer.setAttribute("id", "todo-form-container");
todoFormContainer.classList.add("div-background");

// Create the header for the todo form
const todoDivHead = document.createElement("div");
const todoDivHeader = document.createElement("p");
todoDivHead.setAttribute("id", "todo-div-head");
todoDivHeader.setAttribute("id", "todo-div-header");
todoDivHeader.textContent = "Create To-Do";

// Create the todo form and its elements
const todoFormDiv = document.createElement("div");
const todoForm = document.createElement("form");
todoFormDiv.setAttribute("id", "todo-form-div");
todoForm.setAttribute("id", "todo-form");

// Create input fields for todo properties (title, due date, description, priority, notes)
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

// Create a submit button for the todo form
const todoSubmitDiv = document.createElement("div");
const todoSubmitBtn = document.createElement("button");
todoSubmitDiv.setAttribute("id", "todo-submit-div");
todoSubmitBtn.textContent = "Submit";

// Append elements to the todo form
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

// Function to get the active project's todos
const pushToActiveProject = () => {
  for (let i = 0; i < _projects_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray.length; i++) {
    if (_projects_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[i].active == true) {
      return _projects_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[i].todos;
    }
  }
};

// Event listener for the todo form submission
todoSubmitBtn.addEventListener("click", (event) => {
  event.preventDefault();
  for (let i = 0; i < _projects_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray.length; i++) {
    if (_projects_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray.length > 0 && _projects_js__WEBPACK_IMPORTED_MODULE_0__.projectsArray[i].active == true) {
      // Create a new todo and add it to the active project
      (0,_projects_js__WEBPACK_IMPORTED_MODULE_0__.createTodo)(
        todoTitleInput.value,
        todoDueDateInput.value,
        todoDescriptionInput.value,
        todoPriorityInput.value,
        todoNotesInput.value,
        false,
        pushToActiveProject() // Function to get the active project's todos
      );

      // Reset the form
      todoForm.reset();
    }
  }
  // Set data-todo-index attribute for activeTodoDiv children
  for (let i = 0; i < _activeProject_js__WEBPACK_IMPORTED_MODULE_1__.activeTodoDiv.children.length; i++) {
    _activeProject_js__WEBPACK_IMPORTED_MODULE_1__.activeTodoDiv.children[i].setAttribute("data-todo-index", i);
  }
});

// Export the todo form container



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
/* harmony import */ var _toDoForm_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toDoForm.js */ "./src/toDoForm.js");
/* harmony import */ var _storeProjects_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storeProjects.js */ "./src/storeProjects.js");
// Importing styles and modules
 // Import styles from CSS file
 // Import project data from projects.js
 // Import elements and functions related to project form
 // Import elements related to active project display
 // Import todo form container
 // Import function to load stored projects

// Get a reference to the content container in the HTML file
const content = document.querySelector("#content");

// Append project form, active project display, and todo form container to the content container
content.appendChild(_projectForm_js__WEBPACK_IMPORTED_MODULE_2__.projectFormDiv);
content.appendChild(_activeProject_js__WEBPACK_IMPORTED_MODULE_3__.activeProjectDiv);
content.appendChild(_toDoForm_js__WEBPACK_IMPORTED_MODULE_4__.todoFormContainer);

// Append active project header and todo list to the active project display
_activeProject_js__WEBPACK_IMPORTED_MODULE_3__.activeProjectDiv.appendChild(_activeProject_js__WEBPACK_IMPORTED_MODULE_3__.activeProjectHead);
_activeProject_js__WEBPACK_IMPORTED_MODULE_3__.activeProjectDiv.appendChild(_activeProject_js__WEBPACK_IMPORTED_MODULE_3__.activeTodoDiv);

// Append active project title to the active project header
_activeProject_js__WEBPACK_IMPORTED_MODULE_3__.activeProjectHead.appendChild(_activeProject_js__WEBPACK_IMPORTED_MODULE_3__.activeProjectTitle);

// Call functions to initialize project form, active project, and load stored projects
(0,_projectForm_js__WEBPACK_IMPORTED_MODULE_2__.changeActiveClass)(); // Initialize project form behavior
(0,_projectForm_js__WEBPACK_IMPORTED_MODULE_2__.activeProject)(); // Initialize active project display
(0,_storeProjects_js__WEBPACK_IMPORTED_MODULE_5__.onloadStorage)(); // Load projects from local storage

// Export the content container for use in other modules


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFVO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixJQUFJLDRFQUE2QixFQUFFO0FBQ3JELElBQUkscUVBQXNCO0FBQzFCO0FBQ0EsQ0FBQzs7QUFFRDtBQUM2Qjs7Ozs7OztVQ2xKN0I7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDcUIsQ0FBQztBQUN3QixDQUFDO0FBS3JCLENBQUM7QUFNQyxDQUFDO0FBQ3FCLENBQUM7QUFDQSxDQUFDOztBQUVwRDtBQUNBOztBQUVBO0FBQ0Esb0JBQW9CLDJEQUFjO0FBQ2xDLG9CQUFvQiwrREFBZ0I7QUFDcEMsb0JBQW9CLDJEQUFpQjs7QUFFckM7QUFDQSwyRUFBNEIsQ0FBQyxnRUFBaUI7QUFDOUMsMkVBQTRCLENBQUMsNERBQWE7O0FBRTFDO0FBQ0EsNEVBQTZCLENBQUMsaUVBQWtCOztBQUVoRDtBQUNBLGtFQUFpQixJQUFJO0FBQ3JCLDhEQUFhLElBQUk7QUFDakIsZ0VBQWEsSUFBSTs7QUFFakI7QUFDbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvYWN0aXZlUHJvamVjdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3Byb2plY3RGb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvcHJvamVjdHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdG9yZVByb2plY3RzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvdG9Eb0Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImh0bWwsXFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDdmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMS41ZnIgMmZyO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gIGdhcDogMTVweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgMjFkZWcsXFxuICAgIHJnYmEoMjQ5LCAxOTcsIDMsIDEpIDAlLFxcbiAgICByZ2JhKDAsIDQsIDQsIDEpIDMwJSxcXG4gICAgcmdiYSgwLCAxLCAxLCAxKSA3MCUsXFxuICAgIHJnYmEoMCwgMjU1LCAxOTIsIDEpIDEwMCVcXG4gICk7XFxufVxcblxcbi5kaXYtYmFja2dyb3VuZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjEpO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtLWRpdiB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDE1cHggMCAwIDE1cHg7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAzODBweDtcXG59XFxuXFxuI3Byb2plY3QtZGl2LWhlYWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1ib3R0b206IC0xNXB4O1xcbiAgcGFkZGluZzogMTBweCAxMHB4IDAgMTBweDtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuXFxuI3RpdGxlLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZy10b3A6IDZweDtcXG4gIHBhZGRpbmctbGVmdDogMWVtO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI3Byb2plY3RzLXRpdGxlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbn1cXG5cXG4jYnV0dG9uLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI3Byb2plY3RzLWJ0biB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3Byb2plY3RzLWxpc3QtZGl2IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDAgMTBweCAxMHB4IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4jcHJvamVjdHMtbGlzdC1kaXY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA1cHg7XFxufVxcblxcbiNwcm9qZWN0cy1saXN0LWRpdjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEzKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMyk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuI3Byb2plY3RzLWxpc3QtZGl2Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTY2LCAwLCAwLjU0MSk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEzKTtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnByb2plY3QtbmFtZS1kaXYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdC1idXR0b24tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdC1idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB3aWR0aDogMTVweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbWFyZ2luOiAxcHg7XFxufVxcblxcbiNhY3RpdmUtcHJvamVjdC1kaXYge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgbWFyZ2luOiAxNXB4IDE1cHggMTVweCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5hY3RpdmUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuI2FjdGl2ZS1wcm9qZWN0LWhlYWQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2FjdGl2ZS1wcm9qZWN0LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogNDZweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4jYWN0aXZlLXRvZG8tZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTsgKi9cXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAyNTBweCk7XFxuICBnYXA6IDIwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4jYWN0aXZlLXRvZG8tZGl2Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogNXB4O1xcbn1cXG5cXG4jYWN0aXZlLXRvZG8tZGl2Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMyk7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTMpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbiNhY3RpdmUtdG9kby1kaXY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNjYsIDAsIDAuNTQxKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTMpO1xcbn1cXG5cXG4udG9kby1kaXYge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbjogMTVweDtcXG59XFxuXFxuLnRvZG8taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50b2RvLXRpdGxlLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmRlbGV0ZS10b2RvLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLmRlbGV0ZS10b2RvLWJ0biB7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgd2lkdGg6IDE2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kby10aXRsZSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4udG9kby1kZXNjcmlwdGlvbiB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5leHBhbmQtdG9kby1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmV4cGFuZC10b2RvLWJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kby1wcm9wZXJ0aWVzIHtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbn1cXG5cXG4jdG9kby1mb3JtLWNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMCAwIDE1cHggMTVweDtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3RvZG8tZGl2LWhlYWQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4jdG9kby1kaXYtaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4jdG9kby1mb3JtLWRpdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI3RvZG8tZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5mb3JtLWVsZW1lbnRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNwcmlvcml0eS1sZXZlbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAgM3B4IDAgM3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogLTE1cHg7XFxuICBtYXJnaW4tdG9wOiAtMTBweDtcXG59XFxuXFxuLnRvZG8tYnV0dG9uLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4udG9kby1idXR0b24ge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN0b2RvLXN1Ym1pdC1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbiN0b2RvLXN1Ym1pdC1kaXYgYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRSxTQUFTO0VBQ1QsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osU0FBUztFQUNULGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsNkJB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aHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDdmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMS41ZnIgMmZyO1xcbiAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcXG4gIGdhcDogMTVweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcXG4gICAgMjFkZWcsXFxuICAgIHJnYmEoMjQ5LCAxOTcsIDMsIDEpIDAlLFxcbiAgICByZ2JhKDAsIDQsIDQsIDEpIDMwJSxcXG4gICAgcmdiYSgwLCAxLCAxLCAxKSA3MCUsXFxuICAgIHJnYmEoMCwgMjU1LCAxOTIsIDEpIDEwMCVcXG4gICk7XFxufVxcblxcbi5kaXYtYmFja2dyb3VuZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNjEpO1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtLWRpdiB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMSAvIDI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW46IDE1cHggMCAwIDE1cHg7XFxuICBtaW4td2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiAzODBweDtcXG59XFxuXFxuI3Byb2plY3QtZGl2LWhlYWQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIG1hcmdpbi1ib3R0b206IC0xNXB4O1xcbiAgcGFkZGluZzogMTBweCAxMHB4IDAgMTBweDtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuXFxuI3RpdGxlLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZy10b3A6IDZweDtcXG4gIHBhZGRpbmctbGVmdDogMWVtO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI3Byb2plY3RzLXRpdGxlIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgZm9udC1zaXplOiAyOHB4O1xcbn1cXG5cXG4jYnV0dG9uLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI3Byb2plY3RzLWJ0biB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI3Byb2plY3RzLWxpc3QtZGl2IHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmc6IDAgMTBweCAxMHB4IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4jcHJvamVjdHMtbGlzdC1kaXY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiA1cHg7XFxufVxcblxcbiNwcm9qZWN0cy1saXN0LWRpdjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEzKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMyk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuI3Byb2plY3RzLWxpc3QtZGl2Ojotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTY2LCAwLCAwLjU0MSk7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEzKTtcXG59XFxuXFxuLnByb2plY3QtY29udGFpbmVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLnByb2plY3QtbmFtZS1kaXYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdC1idXR0b24tZGl2IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5kZWxldGUtcHJvamVjdC1idXR0b24ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB3aWR0aDogMTVweDtcXG4gIGhlaWdodDogMTVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLnByb2plY3Qge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgbWFyZ2luOiAxcHg7XFxufVxcblxcbiNhY3RpdmUtcHJvamVjdC1kaXYge1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgZ3JpZC1yb3c6IDEgLyAzO1xcbiAgbWFyZ2luOiAxNXB4IDE1cHggMTVweCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxufVxcblxcbi5hY3RpdmUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXFxuI2FjdGl2ZS1wcm9qZWN0LWhlYWQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2FjdGl2ZS1wcm9qZWN0LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogNDZweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4jYWN0aXZlLXRvZG8tZGl2IHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICAvKiBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDIwMHB4LCAxZnIpKTsgKi9cXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCAyNTBweCk7XFxuICBnYXA6IDIwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbn1cXG5cXG4jYWN0aXZlLXRvZG8tZGl2Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICB3aWR0aDogNXB4O1xcbn1cXG5cXG4jYWN0aXZlLXRvZG8tZGl2Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMyk7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTMpO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbiNhY3RpdmUtdG9kby1kaXY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNjYsIDAsIDAuNTQxKTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTMpO1xcbn1cXG5cXG4udG9kby1kaXYge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgcGFkZGluZzogMTBweDtcXG4gIG1hcmdpbjogMTVweDtcXG59XFxuXFxuLnRvZG8taGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcblxcbi50b2RvLXRpdGxlLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmRlbGV0ZS10b2RvLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG59XFxuXFxuLmRlbGV0ZS10b2RvLWJ0biB7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgd2lkdGg6IDE2cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kby10aXRsZSB7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4udG9kby1kZXNjcmlwdGlvbiB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5leHBhbmQtdG9kby1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuXFxuLmV4cGFuZC10b2RvLWJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDApO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4udG9kby1wcm9wZXJ0aWVzIHtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbn1cXG5cXG4jdG9kby1mb3JtLWNvbnRhaW5lciB7XFxuICBncmlkLWNvbHVtbjogMSAvIDI7XFxuICBncmlkLXJvdzogMiAvIDM7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMCAwIDE1cHggMTVweDtcXG4gIG1pbi13aWR0aDogMjAwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3RvZG8tZGl2LWhlYWQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbn1cXG5cXG4jdG9kby1kaXYtaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMjhweDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4jdG9kby1mb3JtLWRpdiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI3RvZG8tZm9ybSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDAgMTBweCAwIDEwcHg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi5mb3JtLWVsZW1lbnRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbiNwcmlvcml0eS1sZXZlbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAgM3B4IDAgM3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogLTE1cHg7XFxuICBtYXJnaW4tdG9wOiAtMTBweDtcXG59XFxuXFxuLnRvZG8tYnV0dG9uLWRpdiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbn1cXG5cXG4udG9kby1idXR0b24ge1xcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN0b2RvLXN1Ym1pdC1kaXYge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcblxcbiN0b2RvLXN1Ym1pdC1kaXYgYnV0dG9uIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgaGVpZ2h0OiBmaXQtY29udGVudDtcXG4gIHdpZHRoOiBmaXQtY29udGVudDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIEltcG9ydCB0aGUgcHJvamVjdHNBcnJheSBmcm9tIGFuIGV4dGVybmFsIG1vZHVsZVxuaW1wb3J0IHsgcHJvamVjdHNBcnJheSB9IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7XG5cbi8vIENyZWF0ZSBIVE1MIGVsZW1lbnRzIGZvciB0aGUgYWN0aXZlIHByb2plY3QgZGlzcGxheVxuY29uc3QgYWN0aXZlUHJvamVjdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBhY3RpdmVQcm9qZWN0SGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBhY3RpdmVQcm9qZWN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG5jb25zdCBhY3RpdmVUb2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuLy8gU2V0IGF0dHJpYnV0ZXMgYW5kIGFkZCBjbGFzc2VzIHRvIHRoZSBjcmVhdGVkIGVsZW1lbnRzXG5hY3RpdmVQcm9qZWN0RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWN0aXZlLXByb2plY3QtZGl2XCIpO1xuYWN0aXZlUHJvamVjdERpdi5jbGFzc0xpc3QuYWRkKFwiZGl2LWJhY2tncm91bmRcIik7XG5hY3RpdmVQcm9qZWN0SGVhZC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFjdGl2ZS1wcm9qZWN0LWhlYWRcIik7XG5hY3RpdmVQcm9qZWN0VGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhY3RpdmUtcHJvamVjdC10aXRsZVwiKTtcbmFjdGl2ZVRvZG9EaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhY3RpdmUtdG9kby1kaXZcIik7XG5cbi8vIEZ1bmN0aW9uIHRvIGNoYW5nZSB0aGUgdGl0bGUgZGlzcGxheWVkIGZvciB0aGUgYWN0aXZlIHByb2plY3RcbmNvbnN0IGNoYW5nZVRpdGxlID0gKCkgPT4ge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocHJvamVjdHNBcnJheVtpXS5hY3RpdmUgPT0gdHJ1ZSkge1xuICAgICAgYWN0aXZlUHJvamVjdFRpdGxlLnRleHRDb250ZW50ID0gcHJvamVjdHNBcnJheVtpXS50aXRsZTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIEZ1bmN0aW9uIHRvIGNsZWFyIGFsbCB0b2RvcyBmcm9tIHRoZSBhY3RpdmUgcHJvamVjdCBkaXNwbGF5XG5jb25zdCBjbGVhclRvZG9zID0gKCkgPT4ge1xuICB3aGlsZSAoYWN0aXZlVG9kb0Rpdi5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICBhY3RpdmVUb2RvRGl2LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gIH1cbn07XG5cbi8vIEZ1bmN0aW9uIHRvIGRpc3BsYXkgYSBzaW5nbGUgdG9kbyBpbiB0aGUgYWN0aXZlIHByb2plY3QgZGlzcGxheVxuY29uc3QgZGlzcGxheVRvZG9zID0gKHRvZG8pID0+IHtcbiAgLy8gQ3JlYXRlIEhUTUwgZWxlbWVudHMgZm9yIGRpc3BsYXlpbmcgdGhlIHRvZG9cbiAgbGV0IHRvZG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgdG9kb0hlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCB0b2RvVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBsZXQgdG9kb1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGxldCBkZWxldGVUb2RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbGV0IGRlbGV0ZVRvZG9CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBsZXQgdG9kb0R1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbGV0IHRvZG9EZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICBsZXQgdG9kb1ByaW9yaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGxldCB0b2RvTm90ZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgbGV0IHRvZG9Db21wbGV0ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCB0b2RvQ29tcGxldGVCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBsZXQgZXhwYW5kVG9kb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGxldCBleHBhbmRUb2RvQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcblxuICAvLyBBZGQgQ1NTIGNsYXNzZXMgdG8gc3R5bGUgdGhlIGNyZWF0ZWQgZWxlbWVudHNcbiAgdG9kb0Rpdi5jbGFzc0xpc3QuYWRkKFwidG9kby1kaXZcIik7XG4gIHRvZG9EaXYuY2xhc3NMaXN0LmFkZChcImRpdi1iYWNrZ3JvdW5kXCIpO1xuICB0b2RvSGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLWhlYWRlclwiKTtcbiAgdG9kb1RpdGxlRGl2LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXRpdGxlLWRpdlwiKTtcbiAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXRpdGxlXCIpO1xuICBkZWxldGVUb2RvRGl2LmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtdG9kby1kaXZcIik7XG4gIGRlbGV0ZVRvZG9CdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS10b2RvLWJ0blwiKTtcbiAgdG9kb0R1ZURhdGUuY2xhc3NMaXN0LmFkZChcInRvZG8tZHVlLWRhdGVcIik7XG4gIHRvZG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwidG9kby1kZXNjcmlwdGlvblwiKTtcbiAgdG9kb1ByaW9yaXR5LmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXByaW9yaXR5XCIpO1xuICB0b2RvTm90ZXMuY2xhc3NMaXN0LmFkZChcInRvZG8tbm90ZXNcIik7XG4gIHRvZG9Db21wbGV0ZUJ0bi5jbGFzc0xpc3QuYWRkKFwidG9kby1jb21wbGV0ZVwiKTtcbiAgdG9kb1RpdGxlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXByb3BlcnRpZXNcIik7XG4gIHRvZG9EdWVEYXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXByb3BlcnRpZXNcIik7XG4gIHRvZG9EZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKFwidG9kby1wcm9wZXJ0aWVzXCIpO1xuICB0b2RvUHJpb3JpdHkuY2xhc3NMaXN0LmFkZChcInRvZG8tcHJvcGVydGllc1wiKTtcbiAgdG9kb05vdGVzLmNsYXNzTGlzdC5hZGQoXCJ0b2RvLXByb3BlcnRpZXNcIik7XG4gIHRvZG9Db21wbGV0ZURpdi5jbGFzc0xpc3QuYWRkKFwidG9kby1idXR0b24tZGl2XCIpO1xuICB0b2RvQ29tcGxldGVCdG4uY2xhc3NMaXN0LmFkZChcInRvZG8tYnV0dG9uXCIpO1xuICBleHBhbmRUb2RvRGl2LmNsYXNzTGlzdC5hZGQoXCJleHBhbmQtdG9kby1kaXZcIik7XG4gIGV4cGFuZFRvZG9CdG4uY2xhc3NMaXN0LmFkZChcImV4cGFuZC10b2RvLWJ1dHRvblwiKTtcblxuICAvLyBTZXQgdGV4dCBjb250ZW50IGZvciBkZWxldGUgYW5kIGV4cGFuZCBidXR0b25zXG4gIGRlbGV0ZVRvZG9CdG4udGV4dENvbnRlbnQgPSBcIlhcIjtcbiAgZXhwYW5kVG9kb0J0bi50ZXh0Q29udGVudCA9IFwi4pa+XCI7XG5cbiAgLy8gSXRlcmF0ZSB0aHJvdWdoIHRoZSBwcm9qZWN0cyB0byBmaW5kIHRoZSBhY3RpdmUgb25lXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwcm9qZWN0c0FycmF5W2ldLmFjdGl2ZSA9PSB0cnVlKSB7XG4gICAgICAvLyBTZXQgdGV4dCBjb250ZW50IGFuZCBzdHlsZXMgYmFzZWQgb24gdGhlIHRvZG8ncyBwcm9wZXJ0aWVzXG4gICAgICB0b2RvVGl0bGUudGV4dENvbnRlbnQgPSB0b2RvLnRpdGxlO1xuICAgICAgdG9kb0R1ZURhdGUudGV4dENvbnRlbnQgPSBgRHVlOiAke3RvZG8uZHVlRGF0ZX1gO1xuICAgICAgdG9kb0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gdG9kby5kZXNjcmlwdGlvbjtcbiAgICAgIHRvZG9Ob3Rlcy50ZXh0Q29udGVudCA9IHRvZG8ubm90ZXM7XG4gICAgICB0b2RvQ29tcGxldGVCdG4udGV4dENvbnRlbnQgPSBcImluY29tcGxldGVcIjtcblxuICAgICAgLy8gU2V0IHN0eWxlcyBiYXNlZCBvbiB0b2RvIHByaW9yaXR5XG4gICAgICBpZiAodG9kby5wcmlvcml0eSA9PSAxKSB7XG4gICAgICAgIC8vIExvdyBwcmlvcml0eVxuICAgICAgICB0b2RvRGl2LnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkIHJlZFwiO1xuICAgICAgICB0b2RvRGl2LnN0eWxlLmJveFNoYWRvdyA9IFwiMCAwIDEwcHggNXB4IHJlZFwiO1xuICAgICAgICB0b2RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBMb3dcIjtcbiAgICAgIH0gZWxzZSBpZiAodG9kby5wcmlvcml0eSA9PSAyKSB7XG4gICAgICAgIC8vIE1lZGl1bSBwcmlvcml0eVxuICAgICAgICB0b2RvRGl2LnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkIHllbGxvd1wiO1xuICAgICAgICB0b2RvRGl2LnN0eWxlLmJveFNoYWRvdyA9IFwiMCAwIDEwcHggNXB4IHllbGxvd1wiO1xuICAgICAgICB0b2RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBNaWRcIjtcbiAgICAgIH0gZWxzZSBpZiAodG9kby5wcmlvcml0eSA9PSAzKSB7XG4gICAgICAgIC8vIEhpZ2ggcHJpb3JpdHlcbiAgICAgICAgdG9kb0Rpdi5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCAjMzlmYzAzXCI7XG4gICAgICAgIHRvZG9EaXYuc3R5bGUuYm94U2hhZG93ID0gXCIwIDAgMTBweCA1cHggIzM5ZmMwM1wiO1xuICAgICAgICB0b2RvUHJpb3JpdHkudGV4dENvbnRlbnQgPSBcIlByaW9yaXR5OiBIaWdoXCI7XG4gICAgICB9XG5cbiAgICAgIC8vIFNldCBzdHlsZXMgYW5kIHRleHQgZm9yIHRvZG8gY29tcGxldGlvbiBzdGF0dXNcbiAgICAgIGlmICh0b2RvLmNvbXBsZXRlID09IGZhbHNlKSB7XG4gICAgICAgIC8vSW5jb21wbGV0ZVxuICAgICAgICB0b2RvQ29tcGxldGVCdG4udGV4dENvbnRlbnQgPSBcImluY29tcGxldGVcIjtcbiAgICAgICAgdG9kb0NvbXBsZXRlQnRuLnN0eWxlLmJvcmRlciA9IFwiMnB4IHNvbGlkIHJlZFwiO1xuICAgICAgICB0b2RvQ29tcGxldGVCdG4uc3R5bGUuYm94U2hhZG93ID0gXCJyZWQgMHB4IDBweCA1cHggMXB4XCI7XG4gICAgICAgIHRvZG9Db21wbGV0ZUJ0bi5zdHlsZS5iYWNrZ3JvdW5kID0gXCJyZWRcIjtcbiAgICAgIH0gZWxzZSBpZiAodG9kby5jb21wbGV0ZSA9PSB0cnVlKSB7XG4gICAgICAgIC8vQ29tcGxldGVcbiAgICAgICAgdG9kb0NvbXBsZXRlQnRuLnRleHRDb250ZW50ID0gXCJjb21wbGV0ZVwiO1xuICAgICAgICB0b2RvQ29tcGxldGVCdG4uc3R5bGUuYm9yZGVyID0gXCIycHggc29saWQgIzA1ZGIwNVwiO1xuICAgICAgICB0b2RvQ29tcGxldGVCdG4uc3R5bGUuYm94U2hhZG93ID0gXCIjMDVkYjA1IDBweCAwcHggNXB4IDFweFwiO1xuICAgICAgICB0b2RvQ29tcGxldGVCdG4uc3R5bGUuYmFja2dyb3VuZCA9IFwiIzA1ZGIwNVwiO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEFwcGVuZCB0aGUgY3JlYXRlZCBlbGVtZW50cyB0byB0aGUgYWN0aXZlVG9kb0RpdlxuICBhY3RpdmVUb2RvRGl2LmFwcGVuZENoaWxkKHRvZG9EaXYpO1xuICB0b2RvRGl2LmFwcGVuZENoaWxkKHRvZG9IZWFkZXIpO1xuICB0b2RvSGVhZGVyLmFwcGVuZENoaWxkKHRvZG9UaXRsZURpdik7XG4gIHRvZG9IZWFkZXIuYXBwZW5kQ2hpbGQoZGVsZXRlVG9kb0Rpdik7XG4gIHRvZG9UaXRsZURpdi5hcHBlbmRDaGlsZCh0b2RvVGl0bGUpO1xuICBkZWxldGVUb2RvRGl2LmFwcGVuZENoaWxkKGRlbGV0ZVRvZG9CdG4pO1xuICB0b2RvRGl2LmFwcGVuZENoaWxkKHRvZG9EdWVEYXRlKTtcbiAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvRGVzY3JpcHRpb24pO1xuICB0b2RvRGl2LmFwcGVuZENoaWxkKHRvZG9Db21wbGV0ZURpdik7XG4gIHRvZG9Db21wbGV0ZURpdi5hcHBlbmRDaGlsZCh0b2RvQ29tcGxldGVCdG4pO1xuICB0b2RvRGl2LmFwcGVuZENoaWxkKGV4cGFuZFRvZG9EaXYpO1xuICBleHBhbmRUb2RvRGl2LmFwcGVuZENoaWxkKGV4cGFuZFRvZG9CdG4pO1xuXG4gIC8vIEV2ZW50IGxpc3RlbmVyIGZvciBjb21wbGV0aW5nL2luY29tcGxldGluZyBhIHRvZG9cbiAgdG9kb0NvbXBsZXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGNvbnN0IHN0b3JlZFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcbiAgICBjb25zdCBjbGlja2VkVG9kb0luZGV4ID0gcGFyc2VJbnQoXG4gICAgICBlLnRhcmdldC5jbG9zZXN0KFwiLnRvZG8tZGl2XCIpLmRhdGFzZXQudG9kb0luZGV4XG4gICAgKTtcbiAgICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gc3RvcmVkUHJvamVjdHMuZmluZChcbiAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmFjdGl2ZSA9PT0gdHJ1ZVxuICAgICk7XG5cbiAgICAvLyBUb2dnbGUgdGhlIGNvbXBsZXRpb24gc3RhdHVzIGFuZCB1cGRhdGUgc3R5bGVzXG4gICAgaWYgKHRvZG8uY29tcGxldGUgPT0gZmFsc2UpIHtcbiAgICAgIHRvZG8uY29tcGxldGUgPSB0cnVlO1xuICAgICAgZS50YXJnZXQudGV4dENvbnRlbnQgPSBcImNvbXBsZXRlXCI7XG4gICAgICBlLnRhcmdldC5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCAjMDVkYjA1XCI7XG4gICAgICBlLnRhcmdldC5zdHlsZS5ib3hTaGFkb3cgPSBcIiMwNWRiMDUgMHB4IDBweCA1cHggMXB4XCI7XG4gICAgICBlLnRhcmdldC5zdHlsZS5iYWNrZ3JvdW5kID0gXCIjMDVkYjA1XCI7XG4gICAgfSBlbHNlIGlmICh0b2RvLmNvbXBsZXRlID09IHRydWUpIHtcbiAgICAgIHRvZG8uY29tcGxldGUgPSBmYWxzZTtcbiAgICAgIGUudGFyZ2V0LnRleHRDb250ZW50ID0gXCJpbmNvbXBsZXRlXCI7XG4gICAgICBlLnRhcmdldC5zdHlsZS5ib3JkZXIgPSBcIjJweCBzb2xpZCByZWRcIjtcbiAgICAgIGUudGFyZ2V0LnN0eWxlLmJveFNoYWRvdyA9IFwicmVkIDBweCAwcHggNXB4IDFweFwiO1xuICAgICAgZS50YXJnZXQuc3R5bGUuYmFja2dyb3VuZCA9IFwicmVkXCI7XG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZVByb2plY3QpIHtcbiAgICAgIC8vIEZpbmQgYW5kIHRvZ2dsZSB0aGUgY29tcGxldGUgc3RhdHVzIG9mIHRoZSBjbGlja2VkIHRvZG9cbiAgICAgIGlmIChhY3RpdmVQcm9qZWN0LnRvZG9zW2NsaWNrZWRUb2RvSW5kZXhdKSB7XG4gICAgICAgIGFjdGl2ZVByb2plY3QudG9kb3NbY2xpY2tlZFRvZG9JbmRleF0uY29tcGxldGUgPVxuICAgICAgICAgICFhY3RpdmVQcm9qZWN0LnRvZG9zW2NsaWNrZWRUb2RvSW5kZXhdLmNvbXBsZXRlO1xuXG4gICAgICAgIC8vIFVwZGF0ZSBsb2NhbFN0b3JhZ2Ugd2l0aCB0aGUgbW9kaWZpZWQgYWN0aXZlIHByb2plY3RcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShzdG9yZWRQcm9qZWN0cykpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgZGVsZXRlVG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBsZXQgYnV0dG9uRGl2ID0gZS50YXJnZXQucGFyZW50Tm9kZTtcbiAgICBsZXQgdG9kb0hlYWQgPSBidXR0b25EaXYucGFyZW50Tm9kZTtcbiAgICBsZXQgdG9kb1RvUmVtb3ZlID0gdG9kb0hlYWQucGFyZW50Tm9kZTtcbiAgICBjb25zdCB0b2RvTGlzdCA9IGFjdGl2ZVRvZG9EaXYuY2hpbGRyZW47XG4gICAgY29uc3Qgc3RvcmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuICAgIGNvbnN0IGNsaWNrZWRUb2RvSW5kZXggPSBwYXJzZUludChcbiAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoXCIudG9kby1kaXZcIikuZGF0YXNldC50b2RvSW5kZXhcbiAgICApO1xuICAgIGNvbnN0IGFjdGl2ZVByb2plY3QgPSBzdG9yZWRQcm9qZWN0cy5maW5kKFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QuYWN0aXZlID09PSB0cnVlXG4gICAgKTtcbiAgICB0b2RvVG9SZW1vdmUucmVtb3ZlKCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRvZG9MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB0b2RvTGlzdFtpXS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRvZG8taW5kZXhcIiwgaSk7XG4gICAgfVxuXG4gICAgaWYgKGFjdGl2ZVByb2plY3QpIHtcbiAgICAgIGlmIChhY3RpdmVQcm9qZWN0LnRvZG9zW2NsaWNrZWRUb2RvSW5kZXhdKSB7XG4gICAgICAgIGFjdGl2ZVByb2plY3QudG9kb3Muc3BsaWNlKGNsaWNrZWRUb2RvSW5kZXgsIDEpO1xuXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoc3RvcmVkUHJvamVjdHMpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwcm9qZWN0c0FycmF5W2ldLmFjdGl2ZSA9PSB0cnVlKSB7XG4gICAgICAgIGxldCB0aGlzVG9kbyA9IHByb2plY3RzQXJyYXlbaV0udG9kb3MuaW5kZXhPZih0b2RvKTtcbiAgICAgICAgcHJvamVjdHNBcnJheVtpXS50b2Rvcy5zcGxpY2UodGhpc1RvZG8sIDEpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBleHBhbmRUb2RvQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgaWYgKHRvZG9EaXYucXVlcnlTZWxlY3RvcihcIi50b2RvLXByaW9yaXR5XCIpID09PSBudWxsKSB7XG4gICAgICB0b2RvQ29tcGxldGVEaXYucmVtb3ZlKCk7XG4gICAgICBleHBhbmRUb2RvRGl2LnJlbW92ZSgpO1xuICAgICAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvUHJpb3JpdHkpO1xuICAgICAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvTm90ZXMpO1xuICAgICAgdG9kb0Rpdi5hcHBlbmRDaGlsZCh0b2RvQ29tcGxldGVEaXYpO1xuICAgICAgdG9kb0Rpdi5hcHBlbmRDaGlsZChleHBhbmRUb2RvRGl2KTtcbiAgICAgIGV4cGFuZFRvZG9CdG4udGV4dENvbnRlbnQgPSBcIuKWtFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICB0b2RvUHJpb3JpdHkucmVtb3ZlKCk7XG4gICAgICB0b2RvTm90ZXMucmVtb3ZlKCk7XG4gICAgICBleHBhbmRUb2RvQnRuLnRleHRDb250ZW50ID0gXCLilr5cIjtcbiAgICB9XG4gIH0pO1xufTtcblxuZXhwb3J0IHtcbiAgYWN0aXZlUHJvamVjdERpdixcbiAgYWN0aXZlUHJvamVjdEhlYWQsXG4gIGFjdGl2ZVByb2plY3RUaXRsZSxcbiAgY2hhbmdlVGl0bGUsXG4gIGFjdGl2ZVRvZG9EaXYsXG4gIGRpc3BsYXlUb2RvcyxcbiAgY2xlYXJUb2Rvcyxcbn07XG4iLCIvLyBJbXBvcnQgc3RhdGVtZW50cyB0byBicmluZyBpbiBlbGVtZW50cyBhbmQgZnVuY3Rpb25zIGZyb20gb3RoZXIgbW9kdWxlc1xuaW1wb3J0IHtcbiAgYWN0aXZlUHJvamVjdFRpdGxlLFxuICBjaGFuZ2VUaXRsZSxcbiAgY2xlYXJUb2RvcyxcbiAgZGlzcGxheVRvZG9zLFxuICBhY3RpdmVUb2RvRGl2LFxufSBmcm9tIFwiLi9hY3RpdmVQcm9qZWN0LmpzXCI7IC8vIEltcG9ydCBlbGVtZW50cyBhbmQgZnVuY3Rpb25zIHJlbGF0ZWQgdG8gYWN0aXZlIHByb2plY3QgZGlzcGxheVxuaW1wb3J0IHsgY3JlYXRlUHJvamVjdCwgcHJvamVjdHNBcnJheSB9IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7IC8vIEltcG9ydCBwcm9qZWN0IGNyZWF0aW9uIGZ1bmN0aW9uIGFuZCBkYXRhIGFycmF5XG5cbi8vIENyZWF0ZSBIVE1MIGVsZW1lbnRzIGZvciB0aGUgcHJvamVjdCBmb3JtIGFuZCBwcm9qZWN0IGxpc3RcbmNvbnN0IHByb2plY3RGb3JtRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHByb2plY3REaXZIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHByb2plY3RUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBwcm9qZWN0c1RpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5jb25zdCBwcm9qZWN0TGlzdERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBwcm9qZWN0c0J0bkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbmNvbnN0IHByb2plY3RMaXN0Rm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbi8vIFNldCB0ZXh0IGNvbnRlbnQgZm9yIGVsZW1lbnRzXG5wcm9qZWN0c1RpdGxlLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuYWRkUHJvamVjdEJ0bi50ZXh0Q29udGVudCA9IFwiK1wiO1xuXG4vLyBBZGQgY2xhc3NlcyBhbmQgSURzIHRvIEhUTUwgZWxlbWVudHNcbnByb2plY3RGb3JtRGl2LmNsYXNzTGlzdC5hZGQoXCJkaXYtYmFja2dyb3VuZFwiKTtcbnByb2plY3RGb3JtRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC1mb3JtLWRpdlwiKTtcbnByb2plY3REaXZIZWFkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdC1kaXYtaGVhZFwiKTtcbnByb2plY3RUaXRsZURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRpdGxlLWRpdlwiKTtcbnByb2plY3RMaXN0RGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdHMtbGlzdC1kaXZcIik7XG5wcm9qZWN0c0J0bkRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImJ1dHRvbi1kaXZcIik7XG5wcm9qZWN0c1RpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdHMtdGl0bGVcIik7XG5hZGRQcm9qZWN0QnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdHMtYnRuXCIpO1xucHJvamVjdExpc3RGb3JtLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LWZvcm1cIik7XG5pbnB1dC5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1pbnB1dFwiKTtcblxuLy8gQXBwZW5kIGVsZW1lbnRzIHRvIGNyZWF0ZSB0aGUgcHJvamVjdCBmb3JtIHN0cnVjdHVyZVxucHJvamVjdEZvcm1EaXYuYXBwZW5kQ2hpbGQocHJvamVjdERpdkhlYWQpO1xucHJvamVjdERpdkhlYWQuYXBwZW5kQ2hpbGQocHJvamVjdFRpdGxlRGl2KTtcbnByb2plY3REaXZIZWFkLmFwcGVuZENoaWxkKHByb2plY3RzQnRuRGl2KTtcbnByb2plY3RUaXRsZURpdi5hcHBlbmRDaGlsZChwcm9qZWN0c1RpdGxlKTtcbnByb2plY3RzQnRuRGl2LmFwcGVuZENoaWxkKGFkZFByb2plY3RCdG4pO1xucHJvamVjdEZvcm1EaXYuYXBwZW5kQ2hpbGQocHJvamVjdExpc3REaXYpO1xucHJvamVjdExpc3RGb3JtLmFwcGVuZENoaWxkKGlucHV0KTtcblxuLy8gRXZlbnQgbGlzdGVuZXIgdG8gc2hvdyB0aGUgcHJvamVjdCBpbnB1dCBmaWVsZCB3aGVuIHRoZSBcIitcIiBidXR0b24gaXMgY2xpY2tlZFxuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBpZiAocHJvamVjdExpc3REaXYucXVlcnlTZWxlY3RvcihcIi5wcm9qZWN0LWZvcm1cIikgPT0gbnVsbCkge1xuICAgIHByb2plY3RMaXN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RMaXN0Rm9ybSk7XG4gICAgcHJvamVjdExpc3REaXYuc2Nyb2xsVG9wID0gcHJvamVjdExpc3REaXYuc2Nyb2xsSGVpZ2h0O1xuICB9XG59KTtcblxuLy8gRXZlbnQgbGlzdGVuZXIgdG8gY3JlYXRlIGEgbmV3IHByb2plY3Qgd2hlbiB0aGUgXCJFbnRlclwiIGtleSBpcyBwcmVzc2VkIGluIHRoZSBpbnB1dCBmaWVsZFxuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImtleXByZXNzXCIsIChlKSA9PiB7XG4gIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBwcm9qZWN0TmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGNvbnN0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBjb25zdCBkZWxldGVQcm9qZWN0QnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICBkZWxldGVQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gIGRlbGV0ZVByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1wcm9qZWN0LWJ1dHRvblwiKTtcbiAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jb250YWluZXJcIik7XG4gIHByb2plY3ROYW1lRGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWUtZGl2XCIpO1xuICBkZWxldGVQcm9qZWN0QnRuRGl2LmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtcHJvamVjdC1idXR0b24tZGl2XCIpO1xuXG4gIGlmIChlLmNvZGUgPT09IFwiRW50ZXJcIikge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvamVjdC1pbnB1dFwiKS52YWx1ZTtcblxuICAgIC8vIFNldCBhIGRhdGEtaW5kZXggYXR0cmlidXRlIHRvIHRyYWNrIHRoZSBwcm9qZWN0IGluZGV4XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0TGlzdERpdi5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgcHJvamVjdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoXCJkYXRhLWluZGV4XCIsIGkpO1xuICAgIH1cblxuICAgIHByb2plY3RMaXN0Rm9ybS5yZXNldCgpO1xuICAgIHByb2plY3RMaXN0Rm9ybS5yZW1vdmUoKTtcbiAgICBwcm9qZWN0TGlzdERpdi5hcHBlbmRDaGlsZChwcm9qZWN0Q29udGFpbmVyKTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lRGl2KTtcbiAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdG5EaXYpO1xuICAgIHByb2plY3ROYW1lRGl2LmFwcGVuZENoaWxkKHByb2plY3ROYW1lKTtcbiAgICBkZWxldGVQcm9qZWN0QnRuRGl2LmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdG4pO1xuICAgIHNldEFjdGl2ZVRvRmFsc2UoKTsgLy8gRGVhY3RpdmF0ZSBhbGwgb3RoZXIgcHJvamVjdHNcbiAgICBjcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lLnRleHRDb250ZW50LCBbXSwgdHJ1ZSk7IC8vIENyZWF0ZSBhIG5ldyBwcm9qZWN0XG4gICAgcmVtb3ZlQWN0aXZlQ2xhc3MoKTsgLy8gUmVtb3ZlIHRoZSBhY3RpdmUgY2xhc3MgZnJvbSBvdGhlciBwcm9qZWN0c1xuICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7IC8vIFNldCB0aGUgbmV3bHkgY3JlYXRlZCBwcm9qZWN0IGFzIGFjdGl2ZVxuICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0XCIpOyAvL0FkZCB0aGUgcHJvamVjdCBjbGFzcyB0byB0aGUgbmV3IHByb2plY3RcbiAgICBjaGFuZ2VUaXRsZSgpOyAvLyBDaGFuZ2UgdGhlIHRpdGxlIGRpc3BsYXllZCBmb3IgdGhlIGFjdGl2ZSBwcm9qZWN0XG4gICAgc3RvcmFnZVByb2plY3RBY3RpdmVTdGF0dXMoKTsgLy8gVXBkYXRlIHRoZSBhY3RpdmUgc3RhdHVzIGluIGxvY2FsIHN0b3JhZ2VcbiAgICBjbGVhclRvZG9zKCk7IC8vIENsZWFyIHRvZG9zIGZyb20gdGhlIGFjdGl2ZSBwcm9qZWN0IGRpc3BsYXlcbiAgfVxuXG4gIC8vIEV2ZW50IGxpc3RlbmVyIHRvIGRlbGV0ZSBhIHByb2plY3Qgd2hlbiB0aGUgXCJ4XCIgYnV0dG9uIGlzIGNsaWNrZWRcbiAgZGVsZXRlUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBkZWxldGVQcm9qZWN0KGUpOyAvLyBGdW5jdGlvbiB0byBkZWxldGUgYSBwcm9qZWN0XG4gIH0pO1xufSk7XG5cbi8vIEZ1bmN0aW9uIHRvIGNoYW5nZSB0aGUgYWN0aXZlIGNsYXNzIHdoZW4gYSBwcm9qZWN0IGlzIGNsaWNrZWRcbmNvbnN0IGNoYW5nZUFjdGl2ZUNsYXNzID0gKCkgPT4ge1xuICBjb25zdCBwcm9qZWN0TGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtbGlzdC1kaXZcIik7XG5cbiAgcHJvamVjdExpc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgaWYgKGUudGFyZ2V0LnRhZ05hbWUgPT0gXCJQXCIpIHtcbiAgICAgIHJlbW92ZUFjdGl2ZUNsYXNzKCk7IC8vIFJlbW92ZSB0aGUgYWN0aXZlIGNsYXNzIGZyb20gb3RoZXIgcHJvamVjdHNcbiAgICAgIGNsZWFyVG9kb3MoKTsgLy8gQ2xlYXIgdG9kb3MgZnJvbSB0aGUgYWN0aXZlIHByb2plY3QgZGlzcGxheVxuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcbiAgICB9XG4gIH0pO1xufTtcblxuLy8gRnVuY3Rpb24gdG8gZGVsZXRlIGEgcHJvamVjdFxuY29uc3QgZGVsZXRlUHJvamVjdCA9IChlKSA9PiB7XG4gIGNvbnN0IHN0b3JlZFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcbiAgY29uc3QgcHJvamVjdHMgPSBwcm9qZWN0TGlzdERpdi5jaGlsZHJlbjtcbiAgZS50YXJnZXQuY2xvc2VzdChcIi5wcm9qZWN0LWNvbnRhaW5lclwiKS5yZW1vdmUoKTtcblxuICAvLyBTZXQgZGF0YS1pbmRleCBhdHRyaWJ1dGVzIHRvIHRyYWNrIHByb2plY3QgaW5kaWNlc1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgcHJvamVjdHNbaV0uc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCBpKTtcbiAgfVxuXG4gIC8vIFJlbW92ZSB0aGUgZGVsZXRlZCBwcm9qZWN0IGZyb20gdGhlIHByb2plY3RzQXJyYXlcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0c0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKFxuICAgICAgcGFyc2VJbnQocHJvamVjdHNBcnJheS5pbmRleE9mKHByb2plY3RzQXJyYXlbaV0pKSA9PT1cbiAgICAgIHBhcnNlSW50KGUudGFyZ2V0LmNsb3Nlc3QoXCIucHJvamVjdC1jb250YWluZXJcIikuZGF0YXNldC5pbmRleClcbiAgICApIHtcbiAgICAgIHByb2plY3RzQXJyYXkuc3BsaWNlKGksIDEpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFJlbW92ZSB0aGUgZGVsZXRlZCBwcm9qZWN0IGZyb20gc3RvcmVkUHJvamVjdHMgaW4gbG9jYWwgc3RvcmFnZVxuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0b3JlZFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKFxuICAgICAgcGFyc2VJbnQoZS50YXJnZXQuY2xvc2VzdChcIi5wcm9qZWN0LWNvbnRhaW5lclwiKS5kYXRhc2V0LmluZGV4KSA9PT1cbiAgICAgIHBhcnNlSW50KHN0b3JlZFByb2plY3RzLmluZGV4T2Yoc3RvcmVkUHJvamVjdHNbaV0pKVxuICAgICkge1xuICAgICAgc3RvcmVkUHJvamVjdHMuc3BsaWNlKGksIDEpO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBbSlNPTi5zdHJpbmdpZnkoc3RvcmVkUHJvamVjdHMpXSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHN0b3JhZ2VQcm9qZWN0QWN0aXZlU3RhdHVzKCk7IC8vIFVwZGF0ZSBhY3RpdmUgc3RhdHVzIGluIHN0b3JhZ2VcbiAgfVxuXG4gIC8vIElmIHRoZSBkZWxldGVkIHByb2plY3Qgd2FzIGFjdGl2ZSwgY2xlYXIgdG9kb3MgYW5kIHJlc2V0IHRoZSB0aXRsZVxuICBpZiAoXG4gICAgZS50YXJnZXQucGFyZW50Tm9kZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLmNoaWxkcmVuWzBdLmNsYXNzTGlzdC5jb250YWlucyhcbiAgICAgIFwiYWN0aXZlXCJcbiAgICApXG4gICkge1xuICAgIGNsZWFyVG9kb3MoKTsgLy8gQ2xlYXIgdG9kb3MgZnJvbSB0aGUgYWN0aXZlIHByb2plY3QgZGlzcGxheVxuICAgIGFjdGl2ZVByb2plY3RUaXRsZS50ZXh0Q29udGVudCA9IFwiXCI7XG4gIH1cbn07XG5cbi8vIEZ1bmN0aW9uIHRvIHNldCBhbGwgcHJvamVjdHMnIFwiYWN0aXZlXCIgcHJvcGVydHkgdG8gZmFsc2VcbmNvbnN0IHNldEFjdGl2ZVRvRmFsc2UgPSAoKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIHByb2plY3RzQXJyYXlbaV0uYWN0aXZlID0gZmFsc2U7XG4gIH1cbn07XG5cbi8vIEZ1bmN0aW9uIHRvIHJlbW92ZSB0aGUgXCJhY3RpdmVcIiBjbGFzcyBmcm9tIGFsbCBwcm9qZWN0IG5hbWVzXG5jb25zdCByZW1vdmVBY3RpdmVDbGFzcyA9ICgpID0+IHtcbiAgY29uc3QgY2hpbGRyZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLWxpc3QtZGl2XCIpLmNoaWxkcmVuO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBuZXN0ZWRDaGlsZCA9IGNoaWxkcmVuW2ldO1xuICAgIGNvbnN0IGdyYW5kQ2hpbGQgPSBuZXN0ZWRDaGlsZC5maXJzdENoaWxkO1xuICAgIGNvbnN0IGdyZWF0R3JhbmRDaGlsZCA9IGdyYW5kQ2hpbGQuZmlyc3RDaGlsZDtcbiAgICBncmVhdEdyYW5kQ2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcbiAgfVxufTtcblxuLy8gRnVuY3Rpb24gdG8gYWN0aXZhdGUgYSBwcm9qZWN0IHdoZW4gaXQgaXMgY2xpY2tlZFxuY29uc3QgYWN0aXZlUHJvamVjdCA9ICgpID0+IHtcbiAgY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdHMtbGlzdC1kaXZcIik7XG5cbiAgcHJvamVjdFNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChcbiAgICAgICAgZS50YXJnZXQudGFnTmFtZSA9PSBcIlBcIiAmJlxuICAgICAgICBwYXJzZUludChwcm9qZWN0c0FycmF5LmluZGV4T2YocHJvamVjdHNBcnJheVtpXSkpID09PVxuICAgICAgICAgIHBhcnNlSW50KGUudGFyZ2V0LmNsb3Nlc3QoXCIucHJvamVjdC1jb250YWluZXJcIikuZGF0YXNldC5pbmRleCkgJiZcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpXG4gICAgICApIHtcbiAgICAgICAgcHJvamVjdHNBcnJheVtpXS5hY3RpdmUgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgZS50YXJnZXQudGFnTmFtZSA9PSBcIlBcIiAmJlxuICAgICAgICBwYXJzZUludChwcm9qZWN0c0FycmF5LmluZGV4T2YocHJvamVjdHNBcnJheVtpXSkpICE9PVxuICAgICAgICAgIHBhcnNlSW50KGUudGFyZ2V0LmNsb3Nlc3QoXCIucHJvamVjdC1jb250YWluZXJcIikuZGF0YXNldC5pbmRleCkgJiZcbiAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKFwiYWN0aXZlXCIpXG4gICAgICApIHtcbiAgICAgICAgcHJvamVjdHNBcnJheVtpXS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGlmIChlLnRhcmdldC50YWdOYW1lID09IFwiUFwiKSB7XG4gICAgICAgIGRpc3BsYXlBY3RpdmVUb2RvcyhlLCBpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc3RvcmFnZVByb2plY3RBY3RpdmVTdGF0dXMoKTsgLy8gVXBkYXRlIGFjdGl2ZSBzdGF0dXMgaW4gc3RvcmFnZVxuICAgIGNoYW5nZVRpdGxlKCk7IC8vIENoYW5nZSB0aGUgdGl0bGUgZGlzcGxheWVkIGZvciB0aGUgYWN0aXZlIHByb2plY3RcbiAgfSk7XG59O1xuXG4vLyBGdW5jdGlvbiB0byB1cGRhdGUgdGhlIGFjdGl2ZSBzdGF0dXMgaW4gbG9jYWwgc3RvcmFnZVxuY29uc3Qgc3RvcmFnZVByb2plY3RBY3RpdmVTdGF0dXMgPSAoKSA9PiB7XG4gIGNvbnN0IHN0b3JlZFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBmb3IgKGxldCBwID0gMDsgcCA8IHN0b3JlZFByb2plY3RzLmxlbmd0aDsgcCsrKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHBhcnNlSW50KHByb2plY3RzQXJyYXkuaW5kZXhPZihwcm9qZWN0c0FycmF5W2ldKSkgPT09XG4gICAgICAgIHBhcnNlSW50KHN0b3JlZFByb2plY3RzLmluZGV4T2Yoc3RvcmVkUHJvamVjdHNbcF0pKVxuICAgICAgKSB7XG4gICAgICAgIHN0b3JlZFByb2plY3RzW3BdLmFjdGl2ZSA9IHByb2plY3RzQXJyYXlbaV0uYWN0aXZlO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInByb2plY3RzXCIsIFtKU09OLnN0cmluZ2lmeShzdG9yZWRQcm9qZWN0cyldKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8vIEZ1bmN0aW9uIHRvIGRpc3BsYXkgYWN0aXZlIHRvZG9zIHdoZW4gYSBwcm9qZWN0IGlzIGNsaWNrZWRcbmNvbnN0IGRpc3BsYXlBY3RpdmVUb2RvcyA9IChlLCBpKSA9PiB7XG4gIGZvciAobGV0IG4gPSAwOyBuIDwgcHJvamVjdHNBcnJheVtpXS50b2Rvcy5sZW5ndGg7IG4rKykge1xuICAgIGlmIChcbiAgICAgIHBhcnNlSW50KHByb2plY3RzQXJyYXkuaW5kZXhPZihwcm9qZWN0c0FycmF5W2ldKSkgPT09XG4gICAgICAgIHBhcnNlSW50KGUudGFyZ2V0LmNsb3Nlc3QoXCIucHJvamVjdC1jb250YWluZXJcIikuZGF0YXNldC5pbmRleCkgJiZcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFjdGl2ZVwiKVxuICAgICkge1xuICAgICAgZGlzcGxheVRvZG9zKHByb2plY3RzQXJyYXlbaV0udG9kb3Nbbl0pOyAvLyBGdW5jdGlvbiB0byBkaXNwbGF5IGEgc2luZ2xlIHRvZG8gaW4gdGhlIGFjdGl2ZSBwcm9qZWN0IGRpc3BsYXlcbiAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgYWN0aXZlVG9kb0Rpdi5jaGlsZHJlbi5sZW5ndGg7IHQrKykge1xuICAgICAgICBhY3RpdmVUb2RvRGl2LmNoaWxkcmVuW3RdLnNldEF0dHJpYnV0ZShcImRhdGEtdG9kby1pbmRleFwiLCB0KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8vIEV4cG9ydCBzdGF0ZW1lbnRzIHRvIG1ha2UgZnVuY3Rpb25zIGFuZCBlbGVtZW50cyBhdmFpbGFibGUgdG8gb3RoZXIgbW9kdWxlc1xuZXhwb3J0IHtcbiAgcHJvamVjdEZvcm1EaXYsXG4gIGNoYW5nZUFjdGl2ZUNsYXNzLFxuICBhY3RpdmVQcm9qZWN0LFxuICBkaXNwbGF5QWN0aXZlVG9kb3MsXG4gIHByb2plY3RMaXN0RGl2LFxuICBkZWxldGVQcm9qZWN0LFxufTtcbiIsIi8vIEltcG9ydCBzdGF0ZW1lbnRzIHRvIGJyaW5nIGluIGZ1bmN0aW9ucyBhbmQgZGF0YSBmcm9tIG90aGVyIG1vZHVsZXNcbmltcG9ydCB7IGRpc3BsYXlUb2RvcyB9IGZyb20gXCIuL2FjdGl2ZVByb2plY3QuanNcIjsgLy8gSW1wb3J0aW5nIHRoZSBkaXNwbGF5VG9kb3MgZnVuY3Rpb25cbmltcG9ydCB7IGxvY2FsU3RvcmFnZVByb2plY3QsIGxvY2FsU3RvcmFnZVRvZG9zIH0gZnJvbSBcIi4vc3RvcmVQcm9qZWN0cy5qc1wiOyAvLyBJbXBvcnRpbmcgZnVuY3Rpb25zIHJlbGF0ZWQgdG8gbG9jYWwgc3RvcmFnZVxuXG4vLyBEZWZpbmUgYW4gZW1wdHkgYXJyYXkgdG8gc3RvcmUgcHJvamVjdHNcbmNvbnN0IHByb2plY3RzQXJyYXkgPSBbXTtcblxuLy8gRmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgYSBwcm9qZWN0IG9iamVjdFxuY29uc3QgUHJvamVjdCA9ICh0aXRsZSwgdG9kb3MsIGFjdGl2ZSkgPT4ge1xuICByZXR1cm4geyB0aXRsZSwgdG9kb3MsIGFjdGl2ZSB9O1xufTtcblxuLy8gRnVuY3Rpb24gdG8gY3JlYXRlIGEgbmV3IHByb2plY3QgYW5kIGFkZCBpdCB0byB0aGUgcHJvamVjdHNBcnJheVxuY29uc3QgY3JlYXRlUHJvamVjdCA9ICh0aXRsZSwgdG9kb3MsIGFjdGl2ZSkgPT4ge1xuICAvLyBDcmVhdGUgYSBuZXcgcHJvamVjdCBvYmplY3RcbiAgbGV0IG5ld1Byb2plY3QgPSBQcm9qZWN0KCk7XG4gIC8vIEFzc2lnbiBwcm9wZXJ0aWVzIHRvIHRoZSBuZXcgcHJvamVjdFxuICBuZXdQcm9qZWN0LnRpdGxlID0gdGl0bGU7XG4gIG5ld1Byb2plY3QudG9kb3MgPSBbLi4udG9kb3NdO1xuICBuZXdQcm9qZWN0LmFjdGl2ZSA9IGFjdGl2ZTtcbiAgLy8gUHVzaCB0aGUgbmV3IHByb2plY3QgdG8gdGhlIHByb2plY3RzQXJyYXlcbiAgcHJvamVjdHNBcnJheS5wdXNoKG5ld1Byb2plY3QpO1xuICAvLyBTYXZlIHRoZSBuZXcgcHJvamVjdCB0byBsb2NhbCBzdG9yYWdlXG4gIGxvY2FsU3RvcmFnZVByb2plY3QobmV3UHJvamVjdCk7XG59O1xuXG4vLyBGYWN0b3J5IGZ1bmN0aW9uIHRvIGNyZWF0ZSBhIHRvZG8gb2JqZWN0XG5jb25zdCBUb2RvID0gKHRpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIG5vdGVzLCBjb21wbGV0ZSkgPT4ge1xuICByZXR1cm4geyB0aXRsZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBub3RlcywgY29tcGxldGUgfTtcbn07XG5cbi8vIEZ1bmN0aW9uIHRvIGNyZWF0ZSBhIG5ldyB0b2RvLCBkaXNwbGF5IGl0LCBhZGQgaXQgdG8gYSBwcm9qZWN0LCBhbmQgc2F2ZSBpdCB0byBsb2NhbCBzdG9yYWdlXG5jb25zdCBjcmVhdGVUb2RvID0gKFxuICB0aXRsZSxcbiAgZHVlRGF0ZSxcbiAgZGVzY3JpcHRpb24sXG4gIHByaW9yaXR5LFxuICBub3RlcyxcbiAgY29tcGxldGUsXG4gIG5ld1Byb2plY3RcbikgPT4ge1xuICAvLyBDcmVhdGUgYSBuZXcgdG9kbyBvYmplY3RcbiAgbGV0IG5ld1RvZG8gPSBUb2RvKCk7XG4gIC8vIEFzc2lnbiBwcm9wZXJ0aWVzIHRvIHRoZSBuZXcgdG9kb1xuICBuZXdUb2RvLnRpdGxlID0gdGl0bGU7XG4gIG5ld1RvZG8uZHVlRGF0ZSA9IGR1ZURhdGU7XG4gIG5ld1RvZG8uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgbmV3VG9kby5wcmlvcml0eSA9IHByaW9yaXR5O1xuICBuZXdUb2RvLm5vdGVzID0gbm90ZXM7XG4gIG5ld1RvZG8uY29tcGxldGUgPSBjb21wbGV0ZTtcbiAgLy8gRGlzcGxheSB0aGUgbmV3IHRvZG9cbiAgZGlzcGxheVRvZG9zKG5ld1RvZG8pO1xuICAvLyBQdXNoIHRoZSBuZXcgdG9kbyB0byB0aGUgc3BlY2lmaWVkIHByb2plY3RcbiAgbmV3UHJvamVjdC5wdXNoKG5ld1RvZG8pO1xuICAvLyBTYXZlIHRoZSBuZXcgdG9kbyB0byBsb2NhbCBzdG9yYWdlXG4gIGxvY2FsU3RvcmFnZVRvZG9zKG5ld1RvZG8pO1xufTtcblxuLy8gRXhwb3J0IHN0YXRlbWVudHMgdG8gbWFrZSBmdW5jdGlvbnMgYW5kIGRhdGEgYXZhaWxhYmxlIHRvIG90aGVyIG1vZHVsZXNcbmV4cG9ydCB7IHByb2plY3RzQXJyYXksIGNyZWF0ZVByb2plY3QsIGNyZWF0ZVRvZG8sIFByb2plY3QgfTtcbiIsIi8vIEltcG9ydCBzdGF0ZW1lbnRzIHRvIGJyaW5nIGluIGZ1bmN0aW9ucyBhbmQgZGF0YSBmcm9tIG90aGVyIG1vZHVsZXNcbmltcG9ydCB7IGNoYW5nZVRpdGxlLCBkaXNwbGF5VG9kb3MsIGFjdGl2ZVRvZG9EaXYgfSBmcm9tIFwiLi9hY3RpdmVQcm9qZWN0LmpzXCI7IC8vIEltcG9ydGluZyBmdW5jdGlvbnMgcmVsYXRlZCB0byBhY3RpdmUgcHJvamVjdHNcbmltcG9ydCB7IHByb2plY3RMaXN0RGl2LCBkZWxldGVQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdEZvcm0uanNcIjsgLy8gSW1wb3J0aW5nIGZ1bmN0aW9ucyByZWxhdGVkIHRvIHByb2plY3QgbGlzdFxuaW1wb3J0IHsgUHJvamVjdCwgcHJvamVjdHNBcnJheSB9IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7IC8vIEltcG9ydGluZyBQcm9qZWN0IGFuZCBwcm9qZWN0c0FycmF5XG5cbi8vIEZ1bmN0aW9uIHRvIGxvYWQgZGF0YSBmcm9tIGxvY2FsIHN0b3JhZ2Ugd2hlbiB0aGUgd2luZG93IGxvYWRzXG5jb25zdCBvbmxvYWRTdG9yYWdlID0gKCkgPT4ge1xuICAvLyBBZGQgYSBcImxvYWRcIiBldmVudCBsaXN0ZW5lciB0byB0aGUgd2luZG93XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gICAgLy8gQ2hlY2sgaWYgdGhlIFwicHJvamVjdHNcIiBrZXkgaW4gbG9jYWwgc3RvcmFnZSBpcyBudWxsIG9yIGVtcHR5XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikgPT09IG51bGwpIHtcbiAgICAgIC8vIElmIGl0J3MgbnVsbCBvciBlbXB0eSwgc2V0IGl0IHRvIGFuIGVtcHR5IGFycmF5IGFzIGEgSlNPTiBzdHJpbmdcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgXCJbXVwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmV0cmlldmUgc3RvcmVkIHByb2plY3RzIGZyb20gbG9jYWwgc3RvcmFnZSBhbmQgcGFyc2UgdGhlbVxuICAgICAgY29uc3Qgc3RvcmVkUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpO1xuXG4gICAgICAvLyBMb29wIHRocm91Z2ggdGhlIHN0b3JlZCBwcm9qZWN0cyBhbmQgY3JlYXRlIGVsZW1lbnRzIGZvciBlYWNoXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0b3JlZFByb2plY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnN0IGRlbGV0ZVByb2plY3RCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjb25zdCBkZWxldGVQcm9qZWN0QnRuRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICBkZWxldGVQcm9qZWN0QnRuLnRleHRDb250ZW50ID0gXCJ4XCI7XG4gICAgICAgIGRlbGV0ZVByb2plY3RCdG4uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1wcm9qZWN0LWJ1dHRvblwiKTtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwicHJvamVjdC1jb250YWluZXJcIik7XG4gICAgICAgIHByb2plY3ROYW1lRGl2LmNsYXNzTGlzdC5hZGQoXCJwcm9qZWN0LW5hbWUtZGl2XCIpO1xuICAgICAgICBkZWxldGVQcm9qZWN0QnRuRGl2LmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtcHJvamVjdC1idXR0b24tZGl2XCIpO1xuICAgICAgICBwcm9qZWN0TmFtZS50ZXh0Q29udGVudCA9IHN0b3JlZFByb2plY3RzW2ldLnRpdGxlO1xuXG4gICAgICAgIC8vIFNldCBkYXRhLWluZGV4IGF0dHJpYnV0ZSBmb3IgcHJvamVjdENvbnRhaW5lclxuICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8PSBwcm9qZWN0TGlzdERpdi5jaGlsZHJlbi5sZW5ndGg7IHQrKykge1xuICAgICAgICAgIHByb2plY3RDb250YWluZXIuc2V0QXR0cmlidXRlKFwiZGF0YS1pbmRleFwiLCB0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEFwcGVuZCBlbGVtZW50cyB0byB0aGUgcHJvamVjdCBsaXN0XG4gICAgICAgIHByb2plY3RMaXN0RGl2LmFwcGVuZENoaWxkKHByb2plY3RDb250YWluZXIpO1xuICAgICAgICBwcm9qZWN0Q29udGFpbmVyLmFwcGVuZENoaWxkKHByb2plY3ROYW1lRGl2KTtcbiAgICAgICAgcHJvamVjdENvbnRhaW5lci5hcHBlbmRDaGlsZChkZWxldGVQcm9qZWN0QnRuRGl2KTtcbiAgICAgICAgcHJvamVjdE5hbWVEaXYuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWUpO1xuICAgICAgICBkZWxldGVQcm9qZWN0QnRuRGl2LmFwcGVuZENoaWxkKGRlbGV0ZVByb2plY3RCdG4pO1xuICAgICAgICBwcm9qZWN0TmFtZS5jbGFzc0xpc3QuYWRkKFwicHJvamVjdFwiKTtcblxuICAgICAgICAvLyBBZGQgXCJhY3RpdmVcIiBjbGFzcyB0byBwcm9qZWN0TmFtZSBpZiB0aGUgcHJvamVjdCBpcyBhY3RpdmVcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHByb2plY3ROYW1lLnRleHRDb250ZW50ID09IHN0b3JlZFByb2plY3RzW2ldLnRpdGxlICYmXG4gICAgICAgICAgc3RvcmVkUHJvamVjdHNbaV0uYWN0aXZlID09PSB0cnVlXG4gICAgICAgICkge1xuICAgICAgICAgIHByb2plY3ROYW1lLmNsYXNzTGlzdC5hZGQoXCJhY3RpdmVcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBZGQgY2xpY2sgZXZlbnQgbGlzdGVuZXIgdG8gZGVsZXRlUHJvamVjdEJ0blxuICAgICAgICBkZWxldGVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgIGRlbGV0ZVByb2plY3QoZSk7IC8vIEZ1bmN0aW9uIHRvIGRlbGV0ZSBhIHByb2plY3RcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGFuZCBhZGQgc3RvcmVkIHByb2plY3RzIHRvIHByb2plY3RzQXJyYXlcbiAgICAgICAgY3JlYXRlU3RvcmVkUHJvamVjdHMoXG4gICAgICAgICAgc3RvcmVkUHJvamVjdHNbaV0udGl0bGUsXG4gICAgICAgICAgc3RvcmVkUHJvamVjdHNbaV0udG9kb3MsXG4gICAgICAgICAgc3RvcmVkUHJvamVjdHNbaV0uYWN0aXZlXG4gICAgICAgICk7XG5cbiAgICAgICAgLy8gQ2FsbCBjaGFuZ2VUaXRsZSBmdW5jdGlvbiB0byB1cGRhdGUgdGhlIGFjdGl2ZSBwcm9qZWN0IHRpdGxlXG4gICAgICAgIGNoYW5nZVRpdGxlKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIExvb3AgdGhyb3VnaCBwcm9qZWN0c0FycmF5IGFuZCBkaXNwbGF5IHRvZG9zIGZvciB0aGUgYWN0aXZlIHByb2plY3RcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgICBmb3IgKGxldCBuID0gMDsgbiA8IHByb2plY3RzQXJyYXlbaV0udG9kb3MubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICBpZiAocHJvamVjdHNBcnJheVtpXS5hY3RpdmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGRpc3BsYXlUb2Rvcyhwcm9qZWN0c0FycmF5W2ldLnRvZG9zW25dKTsgLy8gRnVuY3Rpb24gdG8gZGlzcGxheSBhIHNpbmdsZSB0b2RvIGluIHRoZSBhY3RpdmUgcHJvamVjdCBkaXNwbGF5XG5cbiAgICAgICAgICAgIC8vIFNldCBkYXRhLXRvZG8taW5kZXggYXR0cmlidXRlIGZvciBhY3RpdmVUb2RvRGl2IGNoaWxkcmVuXG4gICAgICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IGFjdGl2ZVRvZG9EaXYuY2hpbGRyZW4ubGVuZ3RoOyB0KyspIHtcbiAgICAgICAgICAgICAgYWN0aXZlVG9kb0Rpdi5jaGlsZHJlblt0XS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXRvZG8taW5kZXhcIiwgdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn07XG5cbi8vIEZ1bmN0aW9uIHRvIHN0b3JlIGEgbmV3IHByb2plY3QgaW4gbG9jYWwgc3RvcmFnZVxuY29uc3QgbG9jYWxTdG9yYWdlUHJvamVjdCA9IChuZXdQcm9qZWN0KSA9PiB7XG4gIC8vIFN0b3JlIHRoZSBuZXcgcHJvamVjdCBkYXRhIGluIGEgdmFyaWFibGVcbiAgY29uc3Qgc3RvcmVOZXdQcm9qZWN0ID0gbmV3UHJvamVjdDtcblxuICAvLyBSZXRyaWV2ZSB0aGUgZXhpc3RpbmcgcHJvamVjdHMgZnJvbSBsb2NhbCBzdG9yYWdlXG4gIGNvbnN0IHN0b3JlZFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcblxuICAvLyBQdXNoIHRoZSBuZXcgcHJvamVjdCBkYXRhIHRvIHRoZSBleGlzdGluZyBwcm9qZWN0cyBhcnJheVxuICBzdG9yZWRQcm9qZWN0cy5wdXNoKHN0b3JlTmV3UHJvamVjdCk7XG5cbiAgLy8gVXBkYXRlIHRoZSBcInByb2plY3RzXCIga2V5IGluIGxvY2FsIHN0b3JhZ2Ugd2l0aCB0aGUgbW9kaWZpZWQgcHJvamVjdHMgYXJyYXlcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJwcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShzdG9yZWRQcm9qZWN0cykpO1xufTtcblxuLy8gRnVuY3Rpb24gdG8gY3JlYXRlIGFuZCBhZGQgc3RvcmVkIHByb2plY3RzIHRvIHByb2plY3RzQXJyYXlcbmNvbnN0IGNyZWF0ZVN0b3JlZFByb2plY3RzID0gKHRpdGxlLCB0b2RvcywgYWN0aXZlKSA9PiB7XG4gIGxldCBuZXdQcm9qZWN0ID0gUHJvamVjdCgpO1xuICBuZXdQcm9qZWN0LnRpdGxlID0gdGl0bGU7XG4gIG5ld1Byb2plY3QudG9kb3MgPSBbLi4udG9kb3NdO1xuICBuZXdQcm9qZWN0LmFjdGl2ZSA9IGFjdGl2ZTtcbiAgcHJvamVjdHNBcnJheS5wdXNoKG5ld1Byb2plY3QpO1xufTtcblxuLy8gRnVuY3Rpb24gdG8gc3RvcmUgYSBuZXcgdG9kbyBpbiBsb2NhbCBzdG9yYWdlXG5jb25zdCBsb2NhbFN0b3JhZ2VUb2RvcyA9IChuZXdUb2RvKSA9PiB7XG4gIC8vIFJldHJpZXZlIGV4aXN0aW5nIHByb2plY3RzIGZyb20gbG9jYWwgc3RvcmFnZVxuICBjb25zdCBzdG9yZWRQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwcm9qZWN0c1wiKSk7XG5cbiAgaWYgKEFycmF5LmlzQXJyYXkoc3RvcmVkUHJvamVjdHMpKSB7XG4gICAgLy8gRmluZCB0aGUgYWN0aXZlIHByb2plY3RcbiAgICBjb25zdCBhY3RpdmVQcm9qZWN0ID0gc3RvcmVkUHJvamVjdHMuZmluZChcbiAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmFjdGl2ZSA9PT0gdHJ1ZVxuICAgICk7XG5cbiAgICBpZiAoYWN0aXZlUHJvamVjdCkge1xuICAgICAgLy8gVXBkYXRlIHRoZSB0b2RvcyBvZiB0aGUgYWN0aXZlIHByb2plY3RcbiAgICAgIGFjdGl2ZVByb2plY3QudG9kb3MucHVzaChuZXdUb2RvKTtcblxuICAgICAgLy8gU2F2ZSB0aGUgdXBkYXRlZCBwcm9qZWN0cyBiYWNrIHRvIGxvY2FsIHN0b3JhZ2VcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkoc3RvcmVkUHJvamVjdHMpKTtcbiAgICB9XG4gIH1cbn07XG5cbi8vIEV4cG9ydCBzdGF0ZW1lbnRzIHRvIG1ha2UgZnVuY3Rpb25zIGF2YWlsYWJsZSB0byBvdGhlciBtb2R1bGVzXG5leHBvcnQgeyBvbmxvYWRTdG9yYWdlLCBsb2NhbFN0b3JhZ2VQcm9qZWN0LCBsb2NhbFN0b3JhZ2VUb2RvcyB9O1xuIiwiLy8gSW1wb3J0IHN0YXRlbWVudHMgdG8gYnJpbmcgaW4gZnVuY3Rpb25zIGFuZCBkYXRhIGZyb20gb3RoZXIgbW9kdWxlc1xuaW1wb3J0IHsgY3JlYXRlVG9kbywgcHJvamVjdHNBcnJheSB9IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7IC8vIEltcG9ydGluZyBjcmVhdGVUb2RvIGZ1bmN0aW9uIGFuZCBwcm9qZWN0c0FycmF5XG5pbXBvcnQgeyBhY3RpdmVUb2RvRGl2IH0gZnJvbSBcIi4vYWN0aXZlUHJvamVjdC5qc1wiOyAvLyBJbXBvcnRpbmcgYWN0aXZlVG9kb0RpdlxuXG4vLyBDcmVhdGUgYSBjb250YWluZXIgZm9yIHRoZSB0b2RvIGZvcm1cbmNvbnN0IHRvZG9Gb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbnRvZG9Gb3JtQ29udGFpbmVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1mb3JtLWNvbnRhaW5lclwiKTtcbnRvZG9Gb3JtQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkaXYtYmFja2dyb3VuZFwiKTtcblxuLy8gQ3JlYXRlIHRoZSBoZWFkZXIgZm9yIHRoZSB0b2RvIGZvcm1cbmNvbnN0IHRvZG9EaXZIZWFkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHRvZG9EaXZIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbnRvZG9EaXZIZWFkLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1kaXYtaGVhZFwiKTtcbnRvZG9EaXZIZWFkZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLWRpdi1oZWFkZXJcIik7XG50b2RvRGl2SGVhZGVyLnRleHRDb250ZW50ID0gXCJDcmVhdGUgVG8tRG9cIjtcblxuLy8gQ3JlYXRlIHRoZSB0b2RvIGZvcm0gYW5kIGl0cyBlbGVtZW50c1xuY29uc3QgdG9kb0Zvcm1EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgdG9kb0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZm9ybVwiKTtcbnRvZG9Gb3JtRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1mb3JtLWRpdlwiKTtcbnRvZG9Gb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby1mb3JtXCIpO1xuXG4vLyBDcmVhdGUgaW5wdXQgZmllbGRzIGZvciB0b2RvIHByb3BlcnRpZXMgKHRpdGxlLCBkdWUgZGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBub3RlcylcbmNvbnN0IHRvZG9UaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCB0b2RvVGl0bGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbmNvbnN0IHRvZG9UaXRsZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xudG9kb1RpdGxlRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9kby10aXRsZS1kaXZcIik7XG50b2RvVGl0bGVEaXYuY2xhc3NMaXN0LmFkZChcImZvcm0tZWxlbWVudHNcIik7XG50b2RvVGl0bGVMYWJlbC50ZXh0Q29udGVudCA9IFwiVGl0bGU6XCI7XG50b2RvVGl0bGVJbnB1dC5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwidGV4dFwiKTtcblxuY29uc3QgdG9kb0R1ZURhdGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgdG9kb0R1ZURhdGVMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbmNvbnN0IHRvZG9EdWVEYXRlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG50b2RvRHVlRGF0ZURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tZHVlZGF0ZS1kaXZcIik7XG50b2RvRHVlRGF0ZURpdi5jbGFzc0xpc3QuYWRkKFwiZm9ybS1lbGVtZW50c1wiKTtcbnRvZG9EdWVEYXRlTGFiZWwudGV4dENvbnRlbnQgPSBcIkRhdGU6XCI7XG50b2RvRHVlRGF0ZUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJkYXRlXCIpO1xuXG5jb25zdCB0b2RvRGVzY3JpcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuY29uc3QgdG9kb0Rlc2NyaXB0aW9uTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG5jb25zdCB0b2RvRGVzY3JpcHRpb25JbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbnRvZG9EZXNjcmlwdGlvbkRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tZGVzY3JpcHRpb24tZGl2XCIpO1xudG9kb0Rlc2NyaXB0aW9uRGl2LmNsYXNzTGlzdC5hZGQoXCJmb3JtLWVsZW1lbnRzXCIpO1xudG9kb0Rlc2NyaXB0aW9uTGFiZWwudGV4dENvbnRlbnQgPSBcIkRlc2NyaXB0aW9uOlwiO1xudG9kb0Rlc2NyaXB0aW9uSW5wdXQuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcInRleHRcIik7XG5cbmNvbnN0IHRvZG9Qcmlvcml0eURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5jb25zdCB0b2RvUHJpb3JpdHlMYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbmNvbnN0IHRvZG9Qcmlvcml0eUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuY29uc3QgdG9kb1ByaW9yaXR5TGV2ZWxzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHRvZG9Qcmlvcml0eUxvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuY29uc3QgdG9kb1ByaW9yaXR5TWlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG5jb25zdCB0b2RvUHJpb3JpdHlIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG50b2RvUHJpb3JpdHlEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLXByaW9yaXR5LWRpdlwiKTtcbnRvZG9Qcmlvcml0eURpdi5jbGFzc0xpc3QuYWRkKFwiZm9ybS1lbGVtZW50c1wiKTtcbnRvZG9Qcmlvcml0eUxhYmVsLnRleHRDb250ZW50ID0gXCJQcmlvcml0eTpcIjtcbnRvZG9Qcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJyYW5nZVwiKTtcbnRvZG9Qcmlvcml0eUlucHV0LnNldEF0dHJpYnV0ZShcIm1pblwiLCBcIjFcIik7XG50b2RvUHJpb3JpdHlJbnB1dC5zZXRBdHRyaWJ1dGUoXCJtYXhcIiwgXCIzXCIpO1xudG9kb1ByaW9yaXR5SW5wdXQuc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCIxXCIpO1xudG9kb1ByaW9yaXR5TGV2ZWxzLnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJpb3JpdHktbGV2ZWxzXCIpO1xudG9kb1ByaW9yaXR5TG93LnRleHRDb250ZW50ID0gXCJMb3dcIjtcbnRvZG9Qcmlvcml0eUxvdy5zdHlsZS50ZXh0U2hhZG93ID0gXCIwIDAgN3B4IHJlZFwiO1xudG9kb1ByaW9yaXR5TWlkLnRleHRDb250ZW50ID0gXCJNaWRcIjtcbnRvZG9Qcmlvcml0eU1pZC5zdHlsZS50ZXh0U2hhZG93ID0gXCIwIDAgN3B4IHllbGxvd1wiO1xudG9kb1ByaW9yaXR5SGlnaC50ZXh0Q29udGVudCA9IFwiSGlnaFwiO1xudG9kb1ByaW9yaXR5SGlnaC5zdHlsZS50ZXh0U2hhZG93ID0gXCIwIDAgN3B4ICMzOWZjMDNcIjtcblxuY29uc3QgdG9kb05vdGVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHRvZG9Ob3Rlc0xhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuY29uc3QgdG9kb05vdGVzSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG50b2RvTm90ZXNEaXYuY2xhc3NMaXN0LmFkZChcImZvcm0tZWxlbWVudHNcIik7XG50b2RvTm90ZXNEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b2RvLW5vdGVzLWRpdlwiKTtcbnRvZG9Ob3Rlc0lucHV0LnNldEF0dHJpYnV0ZShcInJvd3NcIiwgXCI1XCIpO1xudG9kb05vdGVzTGFiZWwudGV4dENvbnRlbnQgPSBcIk5vdGVzOlwiO1xuXG4vLyBDcmVhdGUgYSBzdWJtaXQgYnV0dG9uIGZvciB0aGUgdG9kbyBmb3JtXG5jb25zdCB0b2RvU3VibWl0RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbmNvbnN0IHRvZG9TdWJtaXRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xudG9kb1N1Ym1pdERpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvZG8tc3VibWl0LWRpdlwiKTtcbnRvZG9TdWJtaXRCdG4udGV4dENvbnRlbnQgPSBcIlN1Ym1pdFwiO1xuXG4vLyBBcHBlbmQgZWxlbWVudHMgdG8gdGhlIHRvZG8gZm9ybVxudG9kb0Zvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0RpdkhlYWQpO1xudG9kb0Zvcm1Db250YWluZXIuYXBwZW5kQ2hpbGQodG9kb0Zvcm1EaXYpO1xudG9kb0RpdkhlYWQuYXBwZW5kQ2hpbGQodG9kb0RpdkhlYWRlcik7XG50b2RvRm9ybURpdi5hcHBlbmRDaGlsZCh0b2RvRm9ybSk7XG50b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvVGl0bGVEaXYpO1xudG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb0R1ZURhdGVEaXYpO1xudG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb0Rlc2NyaXB0aW9uRGl2KTtcbnRvZG9Gb3JtLmFwcGVuZENoaWxkKHRvZG9Qcmlvcml0eURpdik7XG50b2RvRm9ybS5hcHBlbmRDaGlsZCh0b2RvTm90ZXNEaXYpO1xudG9kb0Zvcm0uYXBwZW5kQ2hpbGQodG9kb1N1Ym1pdERpdik7XG50b2RvVGl0bGVEaXYuYXBwZW5kQ2hpbGQodG9kb1RpdGxlTGFiZWwpO1xudG9kb1RpdGxlRGl2LmFwcGVuZENoaWxkKHRvZG9UaXRsZUlucHV0KTtcbnRvZG9EdWVEYXRlRGl2LmFwcGVuZENoaWxkKHRvZG9EdWVEYXRlTGFiZWwpO1xudG9kb0R1ZURhdGVEaXYuYXBwZW5kQ2hpbGQodG9kb0R1ZURhdGVJbnB1dCk7XG50b2RvRGVzY3JpcHRpb25EaXYuYXBwZW5kQ2hpbGQodG9kb0Rlc2NyaXB0aW9uTGFiZWwpO1xudG9kb0Rlc2NyaXB0aW9uRGl2LmFwcGVuZENoaWxkKHRvZG9EZXNjcmlwdGlvbklucHV0KTtcbnRvZG9Qcmlvcml0eURpdi5hcHBlbmRDaGlsZCh0b2RvUHJpb3JpdHlMYWJlbCk7XG50b2RvUHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQodG9kb1ByaW9yaXR5TGV2ZWxzKTtcbnRvZG9Qcmlvcml0eUxldmVscy5hcHBlbmRDaGlsZCh0b2RvUHJpb3JpdHlMb3cpO1xudG9kb1ByaW9yaXR5TGV2ZWxzLmFwcGVuZENoaWxkKHRvZG9Qcmlvcml0eU1pZCk7XG50b2RvUHJpb3JpdHlMZXZlbHMuYXBwZW5kQ2hpbGQodG9kb1ByaW9yaXR5SGlnaCk7XG50b2RvUHJpb3JpdHlEaXYuYXBwZW5kQ2hpbGQodG9kb1ByaW9yaXR5SW5wdXQpO1xudG9kb05vdGVzRGl2LmFwcGVuZENoaWxkKHRvZG9Ob3Rlc0xhYmVsKTtcbnRvZG9Ob3Rlc0Rpdi5hcHBlbmRDaGlsZCh0b2RvTm90ZXNJbnB1dCk7XG50b2RvU3VibWl0RGl2LmFwcGVuZENoaWxkKHRvZG9TdWJtaXRCdG4pO1xuXG4vLyBGdW5jdGlvbiB0byBnZXQgdGhlIGFjdGl2ZSBwcm9qZWN0J3MgdG9kb3NcbmNvbnN0IHB1c2hUb0FjdGl2ZVByb2plY3QgPSAoKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdHNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChwcm9qZWN0c0FycmF5W2ldLmFjdGl2ZSA9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gcHJvamVjdHNBcnJheVtpXS50b2RvcztcbiAgICB9XG4gIH1cbn07XG5cbi8vIEV2ZW50IGxpc3RlbmVyIGZvciB0aGUgdG9kbyBmb3JtIHN1Ym1pc3Npb25cbnRvZG9TdWJtaXRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3RzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAocHJvamVjdHNBcnJheS5sZW5ndGggPiAwICYmIHByb2plY3RzQXJyYXlbaV0uYWN0aXZlID09IHRydWUpIHtcbiAgICAgIC8vIENyZWF0ZSBhIG5ldyB0b2RvIGFuZCBhZGQgaXQgdG8gdGhlIGFjdGl2ZSBwcm9qZWN0XG4gICAgICBjcmVhdGVUb2RvKFxuICAgICAgICB0b2RvVGl0bGVJbnB1dC52YWx1ZSxcbiAgICAgICAgdG9kb0R1ZURhdGVJbnB1dC52YWx1ZSxcbiAgICAgICAgdG9kb0Rlc2NyaXB0aW9uSW5wdXQudmFsdWUsXG4gICAgICAgIHRvZG9Qcmlvcml0eUlucHV0LnZhbHVlLFxuICAgICAgICB0b2RvTm90ZXNJbnB1dC52YWx1ZSxcbiAgICAgICAgZmFsc2UsXG4gICAgICAgIHB1c2hUb0FjdGl2ZVByb2plY3QoKSAvLyBGdW5jdGlvbiB0byBnZXQgdGhlIGFjdGl2ZSBwcm9qZWN0J3MgdG9kb3NcbiAgICAgICk7XG5cbiAgICAgIC8vIFJlc2V0IHRoZSBmb3JtXG4gICAgICB0b2RvRm9ybS5yZXNldCgpO1xuICAgIH1cbiAgfVxuICAvLyBTZXQgZGF0YS10b2RvLWluZGV4IGF0dHJpYnV0ZSBmb3IgYWN0aXZlVG9kb0RpdiBjaGlsZHJlblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFjdGl2ZVRvZG9EaXYuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBhY3RpdmVUb2RvRGl2LmNoaWxkcmVuW2ldLnNldEF0dHJpYnV0ZShcImRhdGEtdG9kby1pbmRleFwiLCBpKTtcbiAgfVxufSk7XG5cbi8vIEV4cG9ydCB0aGUgdG9kbyBmb3JtIGNvbnRhaW5lclxuZXhwb3J0IHsgdG9kb0Zvcm1Db250YWluZXIgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8vIEltcG9ydGluZyBzdHlsZXMgYW5kIG1vZHVsZXNcbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7IC8vIEltcG9ydCBzdHlsZXMgZnJvbSBDU1MgZmlsZVxuaW1wb3J0IHsgcHJvamVjdHNBcnJheSB9IGZyb20gXCIuL3Byb2plY3RzLmpzXCI7IC8vIEltcG9ydCBwcm9qZWN0IGRhdGEgZnJvbSBwcm9qZWN0cy5qc1xuaW1wb3J0IHtcbiAgcHJvamVjdEZvcm1EaXYsXG4gIGNoYW5nZUFjdGl2ZUNsYXNzLFxuICBhY3RpdmVQcm9qZWN0LFxufSBmcm9tIFwiLi9wcm9qZWN0Rm9ybS5qc1wiOyAvLyBJbXBvcnQgZWxlbWVudHMgYW5kIGZ1bmN0aW9ucyByZWxhdGVkIHRvIHByb2plY3QgZm9ybVxuaW1wb3J0IHtcbiAgYWN0aXZlUHJvamVjdERpdixcbiAgYWN0aXZlUHJvamVjdEhlYWQsXG4gIGFjdGl2ZVByb2plY3RUaXRsZSxcbiAgYWN0aXZlVG9kb0Rpdixcbn0gZnJvbSBcIi4vYWN0aXZlUHJvamVjdC5qc1wiOyAvLyBJbXBvcnQgZWxlbWVudHMgcmVsYXRlZCB0byBhY3RpdmUgcHJvamVjdCBkaXNwbGF5XG5pbXBvcnQgeyB0b2RvRm9ybUNvbnRhaW5lciB9IGZyb20gXCIuL3RvRG9Gb3JtLmpzXCI7IC8vIEltcG9ydCB0b2RvIGZvcm0gY29udGFpbmVyXG5pbXBvcnQgeyBvbmxvYWRTdG9yYWdlIH0gZnJvbSBcIi4vc3RvcmVQcm9qZWN0cy5qc1wiOyAvLyBJbXBvcnQgZnVuY3Rpb24gdG8gbG9hZCBzdG9yZWQgcHJvamVjdHNcblxuLy8gR2V0IGEgcmVmZXJlbmNlIHRvIHRoZSBjb250ZW50IGNvbnRhaW5lciBpbiB0aGUgSFRNTCBmaWxlXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50XCIpO1xuXG4vLyBBcHBlbmQgcHJvamVjdCBmb3JtLCBhY3RpdmUgcHJvamVjdCBkaXNwbGF5LCBhbmQgdG9kbyBmb3JtIGNvbnRhaW5lciB0byB0aGUgY29udGVudCBjb250YWluZXJcbmNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdEZvcm1EaXYpO1xuY29udGVudC5hcHBlbmRDaGlsZChhY3RpdmVQcm9qZWN0RGl2KTtcbmNvbnRlbnQuYXBwZW5kQ2hpbGQodG9kb0Zvcm1Db250YWluZXIpO1xuXG4vLyBBcHBlbmQgYWN0aXZlIHByb2plY3QgaGVhZGVyIGFuZCB0b2RvIGxpc3QgdG8gdGhlIGFjdGl2ZSBwcm9qZWN0IGRpc3BsYXlcbmFjdGl2ZVByb2plY3REaXYuYXBwZW5kQ2hpbGQoYWN0aXZlUHJvamVjdEhlYWQpO1xuYWN0aXZlUHJvamVjdERpdi5hcHBlbmRDaGlsZChhY3RpdmVUb2RvRGl2KTtcblxuLy8gQXBwZW5kIGFjdGl2ZSBwcm9qZWN0IHRpdGxlIHRvIHRoZSBhY3RpdmUgcHJvamVjdCBoZWFkZXJcbmFjdGl2ZVByb2plY3RIZWFkLmFwcGVuZENoaWxkKGFjdGl2ZVByb2plY3RUaXRsZSk7XG5cbi8vIENhbGwgZnVuY3Rpb25zIHRvIGluaXRpYWxpemUgcHJvamVjdCBmb3JtLCBhY3RpdmUgcHJvamVjdCwgYW5kIGxvYWQgc3RvcmVkIHByb2plY3RzXG5jaGFuZ2VBY3RpdmVDbGFzcygpOyAvLyBJbml0aWFsaXplIHByb2plY3QgZm9ybSBiZWhhdmlvclxuYWN0aXZlUHJvamVjdCgpOyAvLyBJbml0aWFsaXplIGFjdGl2ZSBwcm9qZWN0IGRpc3BsYXlcbm9ubG9hZFN0b3JhZ2UoKTsgLy8gTG9hZCBwcm9qZWN0cyBmcm9tIGxvY2FsIHN0b3JhZ2VcblxuLy8gRXhwb3J0IHRoZSBjb250ZW50IGNvbnRhaW5lciBmb3IgdXNlIGluIG90aGVyIG1vZHVsZXNcbmV4cG9ydCB7IGNvbnRlbnQgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==