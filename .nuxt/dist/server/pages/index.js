exports.ids = [2];
exports.modules = Array(28).concat([
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(56);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("07b306a4", content, true, context)
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./img/img_1.png": 30,
	"./img/img_10.jpg": 31,
	"./img/img_11.png": 32,
	"./img/img_12.jpg": 33,
	"./img/img_13.jpg": 34,
	"./img/img_14.jpg": 35,
	"./img/img_15.jpg": 36,
	"./img/img_16.jpg": 37,
	"./img/img_17.jpg": 38,
	"./img/img_18.jpg": 39,
	"./img/img_19.jpg": 40,
	"./img/img_2.png": 41,
	"./img/img_20.jpg": 42,
	"./img/img_21.jpg": 43,
	"./img/img_22.jpg": 44,
	"./img/img_23.jpg": 45,
	"./img/img_24.jpg": 46,
	"./img/img_25.jpg": 47,
	"./img/img_3.png": 48,
	"./img/img_4.png": 49,
	"./img/img_5.png": 50,
	"./img/img_6.png": 51,
	"./img/img_7.png": 52,
	"./img/img_8.png": 53,
	"./img/img_9.png": 54
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 29;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img_1.c2c0d1b.png";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img_10.b038895.jpg";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img_11.50e0577.png";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img_12.c003270.jpg";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img_13.19582bc.jpg";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img_14.3f9ecd7.jpg";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img_15.51ea039.jpg";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img_16.e6c07d1.jpg";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img_17.bd13a0f.jpg";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img_18.9d49d06.jpg";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img_19.c6169b8.jpg";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img_2.10f0614.png";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img_20.c89c3e9.jpg";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img_21.1f7f59c.jpg";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img_22.a1f0c31.jpg";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img_23.85160b2.jpg";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img_24.89299aa.jpg";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img_25.cd636bf.jpg";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img_3.92f7b98.png";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img_4.bd3b1f8.png";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img_5.0c3a4df.png";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img_6.e29fa20.png";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img_7.75e841f.png";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img_8.2173c55.png";

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/img_9.3b12464.png";

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_bea9db0a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_bea9db0a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_bea9db0a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_bea9db0a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_bea9db0a_prod_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(false);
___CSS_LOADER_EXPORT___.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".img[data-v-bea9db0a]{margin-left:2%}img[data-v-bea9db0a]{width:150%;padding:2%}.flexbox-wrapper[data-v-bea9db0a]{display:flex;flex-direction:row;justify-content:flex-start;padding:2%}.title-fix[data-v-bea9db0a]{color:#30f;position:fixed;font-family:\"Montserrat\",sans-serif;-webkit-font-smoothing:antialiase;width:25%;padding-top:2%}.title-back[data-v-bea9db0a]{width:25%;height:100px;background-image:linear-gradient(0deg,rgba(255,0,0,0),red)}#year[data-v-bea9db0a]{font-size:30px}#type[data-v-bea9db0a]{font-size:20px}#title[data-v-bea9db0a]{font-size:130px}", ""]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),
/* 57 */,
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=bea9db0a&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "page"
  }, [_vm._ssrNode("<div class=\"flexbox-wrapper\" data-v-bea9db0a><div class=\"title-fix border-style:solid\" data-v-bea9db0a><div class=\"title col-12 col-md-4 col-sm-6\" data-v-bea9db0a><h1 id=\"title\" data-v-bea9db0a>" + _vm._ssrEscape(_vm._s(_vm.name)) + "</h1></div> <div class=\"col-12\" data-v-bea9db0a><p id=\"type\" data-v-bea9db0a>" + _vm._ssrEscape(_vm._s(_vm.type)) + "</p></div> <br data-v-bea9db0a> <br data-v-bea9db0a> <br data-v-bea9db0a> <br data-v-bea9db0a> <br data-v-bea9db0a> <br data-v-bea9db0a> <br data-v-bea9db0a> <br data-v-bea9db0a> <div class=\"description\" style=\"font-size:15px; color: black;\" data-v-bea9db0a><p data-v-bea9db0a>" + _vm._ssrEscape(" " + _vm._s(_vm.description) + " ") + "</p></div></div> <div class=\"title-back\" data-v-bea9db0a><div class=\"col-4\" data-v-bea9db0a><h1 data-v-bea9db0a></h1></div></div> <div class=\"grid-system-page\" data-v-bea9db0a><div class=\"container\" style=\"height:60%;width:90%;border:0.1px solid #ccc; overflow:auto;\" data-v-bea9db0a><div class=\"row justify-content-md-center\" data-v-bea9db0a>" + _vm._ssrList(_vm.works, function (work, i) {
    return "<div class=\"img col-md-3\" data-v-bea9db0a><img" + _vm._ssrAttr("src", __webpack_require__(29)(`./${work.imgSrc}`)) + " class=\"img-fluid\" data-v-bea9db0a></div>";
  }) + "</div></div></div></div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=bea9db0a&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  data() {
    return {
      name: "The Shift",
      year: "2022",
      type: "Location-based, interactive AR installation",
      description: "The Shift is a series of digital sculptures that explores the inherently dynamic relationship between the conscious and the unconscious.",
      works: [{
        imgSrc: "img/img_1.png"
      }, {
        imgSrc: "img/img_2.png"
      }, {
        imgSrc: "img/img_3.png"
      }, {
        imgSrc: "img/img_4.png"
      }, {
        imgSrc: "img/img_5.png"
      }, {
        imgSrc: "img/img_6.png"
      }, {
        imgSrc: "img/img_7.png"
      }, {
        imgSrc: "img/img_8.png"
      }, {
        imgSrc: "img/img_9.png"
      }, {
        imgSrc: "img/img_10.jpg"
      }, {
        imgSrc: "img/img_11.png"
      }, {
        imgSrc: "img/img_12.jpg"
      }, {
        imgSrc: "img/img_13.jpg"
      }, {
        imgSrc: "img/img_14.jpg"
      }, {
        imgSrc: "img/img_15.jpg"
      }, {
        imgSrc: "img/img_16.jpg"
      }, {
        imgSrc: "img/img_17.png"
      }, {
        imgSrc: "img/img_18.jpg"
      }, {
        imgSrc: "img/img_19.jpg"
      }, {
        imgSrc: "img/img_20.jpg"
      }, {
        imgSrc: "img/img_21.jpg"
      }, {
        imgSrc: "img/img_22.jpg"
      }, {
        imgSrc: "img/img_23.jpg"
      }, {
        imgSrc: "img/img_24.jpg"
      }, {
        imgSrc: "img/img_25.jpg"
      }]
    };
  },

  mounted() {
    // console.log(this.name);
    this.myFunction();
  },

  methods: {
    myFunction() {
      console.log(this.name);
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(55)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "bea9db0a",
  "42cc31d2"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })
]);;
//# sourceMappingURL=index.js.map