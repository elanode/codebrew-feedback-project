function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== 'string' && !Array.isArray(e)) { for (const k in e) {
      if (k !== 'default' && !(k in n)) {
        const d = Object.getOwnPropertyDescriptor(e, k);
        if (d) {
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      }
    } }
  }
  return Object.freeze(n);
}

var pages = {};

var ids = pages.ids = [4,2];
var modules = pages.modules = {

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(70);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(7).default;
module.exports.__inject__ = function (context) {
  add("64051f3d", content, true, context);
};

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--34-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--32-0!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--33-0!./components/The/TheLogo.vue?vue&type=template&id=31a0c9d0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{attrs:{"id":"Layer_1","data-name":"Layer 1","xmlns":"http://www.w3.org/2000/svg","width":"350","height":"350","viewBox":"0 0 1080 1080"}},[_vm._ssrNode("<defs><style>\n      .cls-1,\n      .cls-2,\n      .cls-3 {\n        fill: #473b2f;\n      }\n      .cls-2,\n      .cls-3 {\n        isolation: isolate;\n      }\n      .cls-2 {\n        font-size: 114.12px;\n        font-family: FiraCode-SemiBold, Fira Code;\n        font-weight: 700;\n        letter-spacing: 0.1em;\n      }\n      .cls-3 {\n        font-size: 46.87px;\n        font-family: Poppins-Medium, Poppins;\n        letter-spacing: 0.1em;\n      }\n    </style></defs> <title>CodeBrew Branding Guide</title> <path d=\"M108.19,583.31a9.17,9.17,0,0,1-8.82-6.72L93,553.24a9.17,9.17,0,0,1,6.26-11.17l21.28-6.18a9.13,9.13,0,0,1,11.37,6.43l6.36,24a9.13,9.13,0,0,1-6.54,11.17L110.45,583A9,9,0,0,1,108.19,583.31Zm-6.28-32.41,6.34,23.26,21.17-5.55L123,544.68Z\" class=\"cls-1\"></path> <path d=\"M180.14,603.7h-.38l-22-.9a9.16,9.16,0,0,1-8.75-9.37l.66-24.18a9.17,9.17,0,0,1,9.12-8.88h.1l22.16.25a9.13,9.13,0,0,1,9,9.44l-.87,24.84a9.13,9.13,0,0,1-9.11,8.81Zm-21.22-34.13-.66,24.1,21.87.81.78-24.76Z\" class=\"cls-1\"></path> <path d=\"M165.73,550.18a9.09,9.09,0,0,1-4.19-1L142,539a9.16,9.16,0,0,1-4-12.19l10.83-21.63h0A9.17,9.17,0,0,1,161,501.08l20,9.6a9.12,9.12,0,0,1,4.18,12.37l-11.3,22.14a9.15,9.15,0,0,1-8.14,5Zm-8.63-40.76L146.3,531l19.48,10L177,518.86Z\" class=\"cls-1\"></path> <path d=\"M72.66,449.79a307.15,307.15,0,0,0-12.44,64.78q-.6,8.2-.64,16.4c0,5.46.24,10.9.7,16.31a141.4,141.4,0,0,0,2.32,16c.29,1.31.54,2.63.86,3.94l1,3.89c.34,1.29.76,2.53,1.13,3.8s.87,2.49,1.3,3.73A86.47,86.47,0,0,0,83,605.56a91.27,91.27,0,0,0,24.35,19.53,99.45,99.45,0,0,0,29.3,10.69,111,111,0,0,0,15.55,1.94l3.92.15h3.93c1.3,0,2.59-.11,3.88-.15.64,0,1.29,0,1.93-.1l1.92-.19a79.5,79.5,0,0,0,52.94-26.69,90.73,90.73,0,0,0,9.2-12,107,107,0,0,0,7.36-13.32,124,124,0,0,0,9.44-29.21,102.92,102.92,0,0,0,2-15.42l.27-3.92c.08-1.31.22-2.61.18-3.94l0-7.94a259.8,259.8,0,0,0-2.93-32.06l-1.32-8-1.57-8c-1.12-5.34-2.31-10.69-3.64-16-2.59-10.68-5.71-21.28-9.14-31.82l1.59-.77a224.44,224.44,0,0,1,15.22,30l1.6,3.91c.54,1.3,1.07,2.61,1.55,3.93,1,2.64,2,5.28,2.91,8l2.66,8.06,2.36,8.18a215.64,215.64,0,0,1,6.31,33.75l.59,8.68c.13,1.45.09,2.91.1,4.37v4.39a117.16,117.16,0,0,1-1.32,17.64A120.4,120.4,0,0,1,254,593.27a115.44,115.44,0,0,1-9,15.61,103.33,103.33,0,0,1-11.57,13.92,97.87,97.87,0,0,1-29.76,20.5A99.73,99.73,0,0,1,186.58,649c-1.47.32-2.92.69-4.39.95l-4.42.74c-3,.36-5.92.74-8.88.86l-2.22.13c-.74,0-1.48,0-2.22,0-1.48,0-3,0-4.43,0l-4.38-.16-4.38-.32a124.2,124.2,0,0,1-17.34-2.8,111.82,111.82,0,0,1-32.48-13.2,102.31,102.31,0,0,1-26.3-23.06,96.06,96.06,0,0,1-16.59-30.61c-.41-1.4-.85-2.78-1.22-4.19s-.73-2.82-1-4.23l-.86-4.22c-.27-1.41-.46-2.82-.7-4.23a149,149,0,0,1-1.58-17c-.2-5.66-.16-11.31.13-16.93s.82-11.22,1.51-16.78A289,289,0,0,1,71,449.18Z\" class=\"cls-1\"></path> <path d=\"M204.33,428.35a33.91,33.91,0,0,1,4.37,4.56c1.34,1.62,2.56,3.31,3.72,5a85.82,85.82,0,0,1,6.08,10.85c.9,1.87,1.7,3.76,2.49,5.67s1.51,3.84,2.14,5.79,1.29,3.91,1.84,5.88l.82,3,.72,3a104.57,104.57,0,0,1,2.75,24.6,86.29,86.29,0,0,1-1,12.39,54.24,54.24,0,0,1-3.14,12.13c-2.14-8.11-3.84-15.83-5.6-23.52l-5.14-22.83c-1.75-7.59-3.46-15.26-5.12-22.94Z\" class=\"cls-1\"></path> <text transform=\"translate(338.72 538.06)\" class=\"cls-2\">codebrew</text> <text transform=\"translate(338.37 611.18)\" class=\"cls-3\">\n    REFACTORS YOUR COFFEE\n  </text>")])};
var staticRenderFns = [];


// CONCATENATED MODULE: ./components/The/TheLogo.vue?vue&type=template&id=31a0c9d0&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--34-0!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--32-0!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--33-0!./components/The/TheLogo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var TheLogovue_type_script_lang_js_ = ({
  name: 'TheLogo'
});
// CONCATENATED MODULE: ./components/The/TheLogo.vue?vue&type=script&lang=js&
 /* harmony default export */ var The_TheLogovue_type_script_lang_js_ = (TheLogovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/The/TheLogo.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  The_TheLogovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3d4fcab8"
  
);

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_33_0_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(66);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_33_0_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_unplugin_dist_webpack_loaders_transform_js_ref_34_0_node_modules_vue_style_loader_index_js_ref_5_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_5_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_2_0_node_modules_vue_loader_lib_index_js_vue_loader_options_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_32_0_node_modules_unplugin_dist_webpack_loaders_transform_js_ref_33_0_index_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }); }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(6);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".main-form{min-height:100%}.text-center{text-align:center}.van-form{border:1px;border-radius:50%}.container{margin:0 auto;display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.spacer{margin-top:2rem}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--34-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--32-0!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--33-0!./pages/index.vue?vue&type=template&id=817a6d00&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-form"},[_vm._ssrNode("<div class=\"text-center\">","</div>",[_c('TheLogo')],1),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"container\">","</div>",[_vm._ssrNode("<h1>Welcome!</h1> <p style=\"margin: 0\">We need your feedback for our codebrew.</p> <div class=\"spacer\"></div> "),_c('van-form',{on:{"submit":_vm.writeToFirestore}},[_c('van-field',{attrs:{"name":"Email","label":"E-mail","placeholder":"your_email@example.com","rules":[{ required: true }]},model:{value:(_vm.email),callback:function ($$v) {_vm.email=$$v;},expression:"email"}}),_vm._v(" "),_c('van-field',{attrs:{"name":"rate","label":"Rate"},scopedSlots:_vm._u([{key:"input",fn:function(){return [_c('van-rate',{model:{value:(_vm.rating),callback:function ($$v) {_vm.rating=$$v;},expression:"rating"}})]},proxy:true}])}),_vm._v(" "),_c('van-field',{attrs:{"rows":"2","autosize":"","label":"Comment","type":"textarea","maxlength":"250","placeholder":"Comment here ...","show-word-limit":"","rules":[{ required: true }]},model:{value:(_vm.comment),callback:function ($$v) {_vm.comment=$$v;},expression:"comment"}}),_vm._v(" "),_c('div',{staticClass:"spacer"},[_c('van-button',{attrs:{"round":"","block":"","color":"#473b2f","native-type":"submit"}},[_vm._v("\n          Submit\n        ")])],1)],1)],2)],2)};
var staticRenderFns = [];


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=817a6d00&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--34-0!./node_modules/babel-loader/lib??ref--4-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--32-0!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--33-0!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var transform_ref_33_0_pagesvue_type_script_lang_js_ = ({
  name: 'IndexPage',

  data() {
    return {
      email: '',
      rating: 4,
      comment: ''
    };
  },

  methods: {
    onSubmit(values) {
      console.log(this.$supabase);
    },

    async writeToFirestore() {
      const {
        data,
        error
      } = await this.$supabase.from('feedback').insert([{
        email: this.email,
        rating: this.rating,
        comment: this.comment
      }]);
      console.log(data);
      console.log(error);
    }

  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (transform_ref_33_0_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(4);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(69);
if (style0.__inject__) style0.__inject__(context);

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "34af8af8"
  
);

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {TheLogo: __webpack_require__(68).default});


/***/ })

};

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  'default': pages,
  ids: ids,
  modules: modules
}, [pages]));

export { index as i };
