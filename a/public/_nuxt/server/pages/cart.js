exports.ids = [2];
exports.modules = {

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/cart.vue?vue&type=template&id=fe541d88&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"CARTMAIN"},[_vm._ssrNode("<main id=\"content\" role=\"main\" class=\"cart-page\">","</main>",[_vm._ssrNode("<div class=\"container mt-6\">","</div>",[_vm._ssrNode("<div class=\"mb-4\"><h1 class=\"text-center\">"+_vm._ssrEscape(_vm._s(_vm.localizeFilter('Title')))+"</h1></div> "),_vm._ssrNode("<div class=\"mb-10 cart-table\">","</div>",[_vm._ssrNode("<form action=\"#\" method=\"post\" class=\"mb-4\">","</form>",[_vm._ssrNode("<table cellspacing=\"0\" class=\"table\">","</table>",[_vm._ssrNode("<thead><tr><th class=\"product-remove\"> </th> <th class=\"product-thumbnail\"> </th> <th class=\"product-name\">"+_vm._ssrEscape(_vm._s(_vm.localizeFilter('FirstOptionTitle')))+"</th> <th class=\"product-price\">"+_vm._ssrEscape(_vm._s(_vm.localizeFilter('SecondOptionTitle')))+"</th> <th class=\"product-quantity w-lg-15\">"+_vm._ssrEscape(_vm._s(_vm.localizeFilter('ThirdOptionTitle')))+"</th> <th class=\"product-subtotal\">"+_vm._ssrEscape(_vm._s(_vm.localizeFilter('FourthOptionTitle')))+"</th></tr></thead> "),(_vm.ISCART)?_vm._ssrNode("<tbody>","</tbody>",[_vm._l((_vm.$store.state.cart.cart),function(el,i){return _vm._ssrNode("<tr>","</tr>",[_vm._ssrNode("<td class=\"text-center\"><div class=\"text-gray-32 font-size-26\" style=\"cursor: pointer\">×</div></td> "),_vm._ssrNode("<td class=\"d-none d-md-table-cell\">","</td>",[_c('NuxtLink',{attrs:{"to":'/product?id='+el.offerData.kaspi_id}},[_c('img',{staticClass:"img-fluid max-width-100 p-1 border border-color-1",attrs:{"src":el.offerData.images[0],"alt":"Image Description"}})])],1),_vm._ssrNode(" "),_vm._ssrNode("<td data-title=\"Product\">","</td>",[_c('NuxtLink',{staticClass:"text-gray-90",attrs:{"to":'/product?id='+el.offerData.kaspi_id}},[_vm._v(_vm._s(el.offerData.name))])],1),_vm._ssrNode(" <td data-title=\"Price\"><span>"+_vm._ssrEscape(_vm._s(el.offerData.price)+" тг.")+"</span></td> <td data-title=\"Quantity\"><span class=\"sr-only\">"+_vm._ssrEscape(_vm._s(_vm.localizeFilter('ThirdOptionTitle')))+"</span> <div class=\"border rounded-pill py-1 width-122 w-xl-80 px-3 border-color-1\"><div class=\"js-quantity row align-items-center\"><div class=\"col\"><input type=\"text\""+(_vm._ssrAttr("id",i))+(_vm._ssrAttr("value",el.offerData.count))+" class=\"js-result form-control h-auto border-0 rounded p-0 shadow-none\"></div> <div class=\"col-auto pr-1\"><a href=\"javascript:;\" class=\"js-minus btn btn-icon btn-xs btn-outline-secondary rounded-circle border-0\"><small class=\"fas fa-minus btn-icon__inner\"></small></a> <a href=\"javascript:;\" class=\"js-plus btn btn-icon btn-xs btn-outline-secondary rounded-circle border-0\"><small class=\"fas fa-plus btn-icon__inner\"></small></a></div></div></div></td> <td data-title=\"Total\"><span>"+_vm._ssrEscape(_vm._s(el.offerData.count * el.offerData.price)+" тг.")+"</span></td>")],2)}),_vm._ssrNode(" "),_vm._ssrNode("<tr>","</tr>",[_vm._ssrNode("<td colspan=\"6\" class=\"border-top space-top-2 justify-content-center\">","</td>",[_vm._ssrNode("<div class=\"pt-md-3\">","</div>",[_vm._ssrNode("<div class=\"d-block d-md-flex flex-center-between\">","</div>",[_vm._ssrNode("<div class=\"mb-3 mb-md-0 w-xl-40\"><form class=\"js-focus-state\"><label for=\"subscribeSrEmailExample1\" class=\"sr-only\">"+_vm._ssrEscape(_vm._s(_vm.localizeFilter('CouponTitle')))+"</label> <div class=\"input-group\"><input type=\"text\" name=\"text\" id=\"subscribeSrEmailExample1\" placeholder=\"Coupon code\" aria-label=\"Coupon code\" aria-describedby=\"subscribeButtonExample2\" required=\"required\" class=\"form-control\"> <div class=\"input-group-append\"><button type=\"button\" id=\"subscribeButtonExample2\" class=\"btn btn-block btn-dark px-4\"><i class=\"fas fa-tags d-md-none\"></i><span class=\"d-none d-md-inline\">"+_vm._ssrEscape(_vm._s(_vm.localizeFilter('CouponButtonTitle')))+"</span></button></div></div></form></div> "),_vm._ssrNode("<div class=\"d-md-flex\">","</div>",[_vm._ssrNode("<button type=\"button\" class=\"btn btn-soft-secondary mb-3 mb-md-0 font-weight-normal px-5 px-md-4 px-lg-5 w-100 w-md-auto\">"+_vm._ssrEscape(_vm._s(_vm.localizeFilter('UpdateCartButton')))+"</button> "),_c('NuxtLink',{staticClass:"btn btn-primary-dark-w ml-md-2 px-5 px-md-4 px-lg-5 w-100 w-md-auto d-none d-md-inline-block",attrs:{"to":"/checkout"}},[_vm._v(_vm._s(_vm.localizeFilter('CheckoutButton')))])],2)],2)])])])],2):_vm._e()],2)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"mb-8 cart-total\">","</div>",[_vm._ssrNode("<div class=\"row\">","</div>",[_vm._ssrNode("<div class=\"col-xl-5 col-lg-6 offset-lg-6 offset-xl-7 col-md-8 offset-md-4\">","</div>",[_vm._ssrNode("<div class=\"border-bottom border-color-1 mb-3\"><h3 class=\"d-inline-block section-title mb-0 pb-2 font-size-26\">"+_vm._ssrEscape(_vm._s(_vm.localizeFilter('CartConcludedTitle')))+"</h3></div> <table class=\"table mb-3 mb-md-0\"><tbody><tr class=\"order-total\" style=\"border-bottom: 1px solid #dcdcdc\"><th>"+_vm._ssrEscape(_vm._s(_vm.localizeFilter('CartConcludedThirdSubTitle')))+"</th> <td data-title=\"Total\"><strong><span class=\"amount\">"+_vm._ssrEscape(_vm._s(_vm.TotalPrice() + _vm.ShippingCost)+" тг.")+"</span></strong></td></tr></tbody></table> "),_c('NuxtLink',{staticClass:"btn btn-primary-dark-w ml-md-2 mt-3 px-5 px-md-4 px-lg-5 w-100 w-md-auto d-md-inline-block",attrs:{"to":"/checkout"}},[_vm._v(_vm._s(_vm.localizeFilter('CheckoutButton')))])],2)])])],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/cart.vue?vue&type=template&id=fe541d88&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/cart.vue?vue&type=script&lang=js&
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
//
//
//
//
//
//
/* harmony default export */ var cartvue_type_script_lang_js_ = ({
  data() {
    return {
      Component: "CartPage",
      items: null,
      ShippingCost: 3000,
      ISCART: true
    };
  },

  created() {
    this.items = this.$store.state.cart.cart;
  },

  mounted() {
    $.HSCore.components.HSQantityCounter.init('.js-quantity'); // initialization of malihu scrollbar

    $.HSCore.components.HSMalihuScrollBar.init($('.js-scrollbar')); // initialization of forms

    $.HSCore.components.HSFocusState.init(); // initialization of form validation

    $.HSCore.components.HSValidation.init('.js-validate', {
      rules: {
        confirmPassword: {
          equalTo: '#signupPassword'
        }
      }
    }); // $('#headerSidebarList [data-toggle="collapse"]').on('click', function (e) {
    //     e.preventDefault();
    //     var target = $(this).data('target');
    //     if($(this).attr('aria-expanded') === "true") {
    //         $(target).collapse('hide');
    //     } else {
    //         $(target).collapse('show');
    //     }
    // });
    // // initialization of select picker
    // $.HSCore.components.HSSelectPicker.init('.js-select');
  },

  methods: {
    TotalPrice() {
      if (false) { var total; }
    },

    localizeFilter(key, key2, key3) {
      var _this$$store$state$la, _this$$store$state$la2, _this$$store$state$la3, _this$$store$state$la4, _this$$store$state$la5, _this$$store$state$la6, _this$$store$state$la7, _this$$store$state$la8, _this$$store$state$la9, _this$$store$state$la10, _this$$store$state$la11, _this$$store$state$la12;

      if (key3) return ((_this$$store$state$la = this.$store.state.lang.locales) === null || _this$$store$state$la === void 0 ? void 0 : (_this$$store$state$la2 = _this$$store$state$la[this.$store.state.lang.lang]) === null || _this$$store$state$la2 === void 0 ? void 0 : (_this$$store$state$la3 = _this$$store$state$la2[this.Component]) === null || _this$$store$state$la3 === void 0 ? void 0 : (_this$$store$state$la4 = _this$$store$state$la3[key]) === null || _this$$store$state$la4 === void 0 ? void 0 : (_this$$store$state$la5 = _this$$store$state$la4[key2]) === null || _this$$store$state$la5 === void 0 ? void 0 : _this$$store$state$la5[key3]) || ``;else if (key2) return ((_this$$store$state$la6 = this.$store.state.lang.locales) === null || _this$$store$state$la6 === void 0 ? void 0 : (_this$$store$state$la7 = _this$$store$state$la6[this.$store.state.lang.lang]) === null || _this$$store$state$la7 === void 0 ? void 0 : (_this$$store$state$la8 = _this$$store$state$la7[this.Component]) === null || _this$$store$state$la8 === void 0 ? void 0 : (_this$$store$state$la9 = _this$$store$state$la8[key]) === null || _this$$store$state$la9 === void 0 ? void 0 : _this$$store$state$la9[key2]) || ``;else return ((_this$$store$state$la10 = this.$store.state.lang.locales) === null || _this$$store$state$la10 === void 0 ? void 0 : (_this$$store$state$la11 = _this$$store$state$la10[this.$store.state.lang.lang]) === null || _this$$store$state$la11 === void 0 ? void 0 : (_this$$store$state$la12 = _this$$store$state$la11[this.Component]) === null || _this$$store$state$la12 === void 0 ? void 0 : _this$$store$state$la12[key]) || ``;
    },

    deleteItemFromCart(el) {
      this.$store.commit('cart/DeleteItemFromCart', el);
      this.$nextTick(() => {
        this.items = this.$store.state.cart.cart;
        this.ISCART = false;
        this.$nextTick(() => {
          this.ISCART = true;
        });
      });
    },

    forceUpdate() {
      this.$store.commit('cart/getCart');
    }

  }
});
// CONCATENATED MODULE: ./src/pages/cart.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_cartvue_type_script_lang_js_ = (cartvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./src/pages/cart.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_cartvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "66effa3d"
  
)

/* harmony default export */ var cart = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=cart.js.map