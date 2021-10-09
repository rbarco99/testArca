"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_components_comics_ApiRick_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/comics/ApiRick.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/comics/ApiRick.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      sub: 'js textogw',
      base_url: 'https://rickandmortyapi.com/api/character/',
      characters: [],
      next: [],
      past: [],
      filter: {
        gender: "",
        status: ""
      }
    };
  },
  mounted: function mounted() {
    // se ejecuta cuando se carga el componente 
    console.log('comics component loaded');
    document.body.style.background = '#081119';
    document.body.style.backgroundImage = "url('/images/rick.png')";
    this.getCharacters();
  },
  methods: {
    getCharacters: function getCharacters() {
      var _this = this;

      // 
      console.log('GetChar');
      axios.get(this.base_url).then(function (response) {
        console.log(response.data);
        _this.characters = response.data.results;
        _this.next = response.data.info.next;
        _this.past = response.data.info.prev;
        _this.filter.gender = "";
        _this.filter.status = "";
      })["catch"](function (e) {
        return console.log(e);
      });
    },
    filterCharacters: function filterCharacters() {
      var _this2 = this;

      console.log('Filters');
      axios.get(this.base_url + '?gender=' + this.filter.gender + '&status=' + this.filter.status).then(function (response) {
        console.log(response.data);
        _this2.characters = response.data.results;
        _this2.next = response.data.info.next;
        _this2.past = response.data.info.prev;
      })["catch"](function (e) {
        return console.log(e);
      });
    },
    newPage: function newPage(url) {
      var _this3 = this;

      // 
      console.log('newPage');
      axios.get(url).then(function (response) {
        console.log(response.data.results);
        _this3.characters = response.data.results;
        _this3.next = response.data.info.next;
        _this3.past = response.data.info.prev;
        window.scrollTo(0, 0);
      })["catch"](function (e) {
        return console.log(e);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/comics/ApiRick.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/comics/ApiRick.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\nbody{\r\n    background: #081119;\r\n    background-image: url('/images/rick.png');\n}\n.logo{\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 50%;\n}\n.cards-container{\r\n    text-align: center;\r\n    margin: 2% auto 0 auto;\r\n    max-width: 50%;\n}\n.api-content{\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr;\r\n  grid-template-rows: 1fr;\r\n  gap: 30px 30px;\r\n  width: 80%;\r\n  margin: 2% auto;\n}\n.content-characters{\r\n  background: #fcfbfbe0;\r\n  padding: 1rem;\r\n  border-radius: 1rem;\n}\n.content-characters:hover {\r\n    background: #afd8e2;\n}\n.character {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\n}\n.info-character{\r\n  display: table-column;\r\n  justify-content: center;\r\n  margin: 0 auto;\n}\nimg {\r\n  height: 50%;\r\n  width: 50%;\r\n  border-radius: 0.5rem;\n}\nh2.name {\r\n  font-weight: bold;\r\n  font-size: 1.5rem;\r\n  font-family: 'Shadows Into Light', cursive;\r\n  padding: 1rem;\r\n  background: #629dc4ec;\r\n  border-radius: 10px 100px / 120px;\r\n  margin: 1rem;\n}\n.info h4 {\r\n  margin: 1rem;\r\n  color: #050505;\r\n  font-weight: inherit;\r\n  font-family: 'Shadows Into Light', cursive;\r\n  padding: 0.2rem 1rem;\n}\n@media screen and (max-width: 918px) {\n.api-content {\r\n  grid-template-columns: 1fr 1fr;\n}\n.character {\r\n  display: flex;\r\n  align-items: center;\n}\nh2.name{\r\n  font-size: 1rem;\n}\n}\n@media screen and (max-width: 540px) {\n.api-content {\r\n  width: 90%;\r\n  grid-template-columns: 1fr;\n}\n.character {\r\n  display: flex;\r\n  align-items: center;\n}\n}\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/comics/ApiRick.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/comics/ApiRick.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ApiRick_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ApiRick.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/comics/ApiRick.vue?vue&type=style&index=0&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ApiRick_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ApiRick_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/comics/ApiRick.vue":
/*!****************************************************!*\
  !*** ./resources/js/components/comics/ApiRick.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ApiRick_vue_vue_type_template_id_abd54326___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ApiRick.vue?vue&type=template&id=abd54326& */ "./resources/js/components/comics/ApiRick.vue?vue&type=template&id=abd54326&");
/* harmony import */ var _ApiRick_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApiRick.vue?vue&type=script&lang=js& */ "./resources/js/components/comics/ApiRick.vue?vue&type=script&lang=js&");
/* harmony import */ var _ApiRick_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ApiRick.vue?vue&type=style&index=0&lang=css& */ "./resources/js/components/comics/ApiRick.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ApiRick_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ApiRick_vue_vue_type_template_id_abd54326___WEBPACK_IMPORTED_MODULE_0__.render,
  _ApiRick_vue_vue_type_template_id_abd54326___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/comics/ApiRick.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/comics/ApiRick.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/components/comics/ApiRick.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ApiRick_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ApiRick.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/comics/ApiRick.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ApiRick_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/comics/ApiRick.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************!*\
  !*** ./resources/js/components/comics/ApiRick.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_9_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ApiRick_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ApiRick.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-9[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/comics/ApiRick.vue?vue&type=style&index=0&lang=css&");


/***/ }),

/***/ "./resources/js/components/comics/ApiRick.vue?vue&type=template&id=abd54326&":
/*!***********************************************************************************!*\
  !*** ./resources/js/components/comics/ApiRick.vue?vue&type=template&id=abd54326& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApiRick_vue_vue_type_template_id_abd54326___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApiRick_vue_vue_type_template_id_abd54326___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ApiRick_vue_vue_type_template_id_abd54326___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ApiRick.vue?vue&type=template&id=abd54326& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/comics/ApiRick.vue?vue&type=template&id=abd54326&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/comics/ApiRick.vue?vue&type=template&id=abd54326&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/comics/ApiRick.vue?vue&type=template&id=abd54326& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container-fluid" }, [
    _c("img", {
      staticClass: "logo",
      attrs: { src: "/images/logoRick.png", alt: "Rick and Morty" }
    }),
    _vm._v(" "),
    _c("div", { staticClass: "cards-container" }, [
      _c(
        "form",
        {
          attrs: { id: "characters-form" },
          on: {
            submit: function($event) {
              $event.preventDefault()
              return _vm.filterCharacters.apply(null, arguments)
            }
          }
        },
        [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-md-4 col-lg-4" }, [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.filter.gender,
                      expression: "filter.gender"
                    }
                  ],
                  staticClass: "form-select form-select-sm",
                  attrs: {
                    id: "gender",
                    "aria-label": "Default select example"
                  },
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.filter,
                        "gender",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("option", { attrs: { value: "", selected: "" } }, [
                    _vm._v("Gender")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "female" } }, [
                    _vm._v("Female")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "male" } }, [_vm._v("Male")]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "genderless" } }, [
                    _vm._v("Genderless")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "unknown" } }, [
                    _vm._v("unknown")
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-4 col-lg-4" }, [
              _c(
                "select",
                {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.filter.status,
                      expression: "filter.status"
                    }
                  ],
                  staticClass: "form-select form-select-sm",
                  attrs: {
                    id: "status",
                    "aria-label": "Default select example"
                  },
                  on: {
                    change: function($event) {
                      var $$selectedVal = Array.prototype.filter
                        .call($event.target.options, function(o) {
                          return o.selected
                        })
                        .map(function(o) {
                          var val = "_value" in o ? o._value : o.value
                          return val
                        })
                      _vm.$set(
                        _vm.filter,
                        "status",
                        $event.target.multiple
                          ? $$selectedVal
                          : $$selectedVal[0]
                      )
                    }
                  }
                },
                [
                  _c("option", { attrs: { value: "", selected: "" } }, [
                    _vm._v("Status")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "alive" } }, [
                    _vm._v("Alive")
                  ]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "dead" } }, [_vm._v("Dead")]),
                  _vm._v(" "),
                  _c("option", { attrs: { value: "unknown" } }, [
                    _vm._v("unknown")
                  ])
                ]
              )
            ]),
            _vm._v(" "),
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-2 col-lg-1 col-sm-6" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-info btn-sm",
                  on: { click: _vm.getCharacters }
                },
                [_vm._v("Reset")]
              )
            ])
          ])
        ]
      )
    ]),
    _vm._v(" "),
    _c(
      "div",
      { staticClass: "api-content" },
      _vm._l(_vm.characters, function(character) {
        return _c(
          "div",
          { key: character.id, staticClass: "content-characters" },
          [
            _c("div", { staticClass: "character" }, [
              _c("img", { attrs: { src: character.image, alt: "" } }),
              _vm._v(" "),
              _c("div", { staticClass: "info-character" }, [
                _c("h2", { staticClass: "name" }, [
                  _vm._v(" " + _vm._s(character.name))
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "info" }, [
                  _c("h4", [_vm._v("  " + _vm._s(character.species))]),
                  _vm._v(" "),
                  _c("h4", [_vm._v(" " + _vm._s(character.status))]),
                  _vm._v(" "),
                  _c("h4", [_vm._v(" " + _vm._s(character.gender))])
                ])
              ])
            ])
          ]
        )
      }),
      0
    ),
    _vm._v(" "),
    _c("div", { staticClass: "cards-container" }, [
      _c(
        "button",
        {
          staticClass: "btn btn-info btn-sm",
          on: {
            click: function($event) {
              return _vm.newPage(_vm.past)
            }
          }
        },
        [_vm._v("Past")]
      ),
      _vm._v(" "),
      _c(
        "button",
        {
          staticClass: "btn btn-info btn-sm",
          on: {
            click: function($event) {
              return _vm.newPage(_vm.next)
            }
          }
        },
        [_vm._v("Next")]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-md-2 col-lg-1 col-sm-6" }, [
      _c(
        "button",
        { staticClass: "btn btn-info btn-sm", attrs: { type: "submit" } },
        [_vm._v("Filter")]
      )
    ])
  }
]
render._withStripped = true



/***/ })

}]);