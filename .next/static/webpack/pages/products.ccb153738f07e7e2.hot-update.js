"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/products",{

/***/ "./pages/products/index.js":
/*!*********************************!*\
  !*** ./pages/products/index.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ProductsIndex = (param)=>{\n    let { products  } = param;\n    console.log(products);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"products-container\",\n        children: products.data.map((product)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"product-card\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                        src: \"\".concat(\"http://localhost:1337/api\" / product.attributes.images.data[0].attributes.url),\n                        alt: product.attributes.name + product.attributes.flavour,\n                        width: 500,\n                        height: 500\n                    }, void 0, false, {\n                        fileName: \"/Users/romainmosser/Desktop/piquette/front/pages/products/index.js\",\n                        lineNumber: 10,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: product.attributes.name\n                    }, void 0, false, {\n                        fileName: \"/Users/romainmosser/Desktop/piquette/front/pages/products/index.js\",\n                        lineNumber: 16,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        children: product.attributes.flavour\n                    }, void 0, false, {\n                        fileName: \"/Users/romainmosser/Desktop/piquette/front/pages/products/index.js\",\n                        lineNumber: 17,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: [\n                            product.attributes.price,\n                            \"€ | \",\n                            product.attributes.weight,\n                            \" grammes\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/romainmosser/Desktop/piquette/front/pages/products/index.js\",\n                        lineNumber: 18,\n                        columnNumber: 21\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                        fileName: \"/Users/romainmosser/Desktop/piquette/front/pages/products/index.js\",\n                        lineNumber: 19,\n                        columnNumber: 21\n                    }, undefined)\n                ]\n            }, product.id, true, {\n                fileName: \"/Users/romainmosser/Desktop/piquette/front/pages/products/index.js\",\n                lineNumber: 9,\n                columnNumber: 17\n            }, undefined))\n    }, void 0, false, {\n        fileName: \"/Users/romainmosser/Desktop/piquette/front/pages/products/index.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, undefined);\n};\n_c = ProductsIndex;\nvar __N_SSP = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductsIndex);\nvar _c;\n$RefreshReg$(_c, \"ProductsIndex\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wcm9kdWN0cy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQThCO0FBRzlCLE1BQU1DLGdCQUFnQixTQUFrQjtRQUFqQixFQUFFQyxTQUFRLEVBQUU7SUFDL0JDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixxQkFDSSw4REFBQ0c7UUFBSUMsV0FBVTtrQkFDVkosU0FBU0ssSUFBSSxDQUFDQyxHQUFHLENBQUNDLENBQUFBLHdCQUNmLDhEQUFDSjtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNOLG1EQUFLQTt3QkFDRlUsS0FBSyxHQUEyRixPQUF4RkMsMkJBQXNDLEdBQUNGLFFBQVFLLFVBQVUsQ0FBQ0MsTUFBTSxDQUFDUixJQUFJLENBQUMsRUFBRSxDQUFDTyxVQUFVLENBQUNFLEdBQUc7d0JBQy9GQyxLQUFLUixRQUFRSyxVQUFVLENBQUNJLElBQUksR0FBR1QsUUFBUUssVUFBVSxDQUFDSyxPQUFPO3dCQUN6REMsT0FBTzt3QkFDUEMsUUFBUTs7Ozs7O2tDQUVaLDhEQUFDQztrQ0FBSWIsUUFBUUssVUFBVSxDQUFDSSxJQUFJOzs7Ozs7a0NBQzVCLDhEQUFDSztrQ0FBSWQsUUFBUUssVUFBVSxDQUFDSyxPQUFPOzs7Ozs7a0NBQy9CLDhEQUFDSzs7NEJBQUdmLFFBQVFLLFVBQVUsQ0FBQ1csS0FBSzs0QkFBQzs0QkFBS2hCLFFBQVFLLFVBQVUsQ0FBQ1ksTUFBTTs0QkFBQzs7Ozs7OztrQ0FDNUQsOERBQUNDOzs7Ozs7ZUFWOEJsQixRQUFRbUIsRUFBRTs7Ozs7Ozs7OztBQWU3RDtLQXBCTTNCOztBQStCTiwrREFBZUEsYUFBYUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9wcm9kdWN0cy9pbmRleC5qcz9hMmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHsgZmV0Y2hlciB9IGZyb20gJy4uLy4uL2xpYi9hcGknXG5cbmNvbnN0IFByb2R1Y3RzSW5kZXggPSAoeyBwcm9kdWN0cyB9KSA9PiB7XG4gICAgY29uc29sZS5sb2cocHJvZHVjdHMpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0cy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIHtwcm9kdWN0cy5kYXRhLm1hcChwcm9kdWN0ID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2R1Y3QtY2FyZFwiIGtleT17cHJvZHVjdC5pZH0+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTC9wcm9kdWN0LmF0dHJpYnV0ZXMuaW1hZ2VzLmRhdGFbMF0uYXR0cmlidXRlcy51cmx9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17cHJvZHVjdC5hdHRyaWJ1dGVzLm5hbWUgKyBwcm9kdWN0LmF0dHJpYnV0ZXMuZmxhdm91cn1cbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MDB9XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUwMH1cbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPGgxPntwcm9kdWN0LmF0dHJpYnV0ZXMubmFtZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICA8aDI+e3Byb2R1Y3QuYXR0cmlidXRlcy5mbGF2b3VyfTwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxwPntwcm9kdWN0LmF0dHJpYnV0ZXMucHJpY2V94oKsIHwge3Byb2R1Y3QuYXR0cmlidXRlcy53ZWlnaHR9IGdyYW1tZXM8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxociAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgICBjb25zdCBwcm9kdWN0c1Jlc3BvbnNlID0gYXdhaXQgZmV0Y2hlcihgJHtwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTH0vcHJvZHVjdHM/cG9wdWxhdGU9aW1hZ2VzYClcbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgcHJvZHVjdHM6IHByb2R1Y3RzUmVzcG9uc2VcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdHNJbmRleCJdLCJuYW1lcyI6WyJJbWFnZSIsIlByb2R1Y3RzSW5kZXgiLCJwcm9kdWN0cyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJkYXRhIiwibWFwIiwicHJvZHVjdCIsInNyYyIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19TVFJBUElfQVBJX1VSTCIsImF0dHJpYnV0ZXMiLCJpbWFnZXMiLCJ1cmwiLCJhbHQiLCJuYW1lIiwiZmxhdm91ciIsIndpZHRoIiwiaGVpZ2h0IiwiaDEiLCJoMiIsInAiLCJwcmljZSIsIndlaWdodCIsImhyIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/products/index.js\n"));

/***/ })

});