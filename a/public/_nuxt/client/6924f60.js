(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{370:function(t,o){},372:function(t,o){},382:function(t,o){},384:function(t,o){},409:function(t,o){},411:function(t,o){},412:function(t,o){},417:function(t,o){},419:function(t,o){},425:function(t,o){},427:function(t,o){},446:function(t,o){},458:function(t,o){},461:function(t,o){},494:function(t,o,e){"use strict";e.r(o);e(54),e(172),e(70),e(19),e(274),e(37),e(117),e(11),e(71);var l=e(27),r=e.n(l),n=e(364),v=e.n(n),_={data:function(){return{Component:"CheckoutPage",items:null,LinkActive:!1,ShippingCost:3e3,pg_order_id:Math.floor(1e5*Math.random()),pg_merchant_id:533272,pg_description:"Product",pg_language:"en",pg_salt:"SALT PAPER",obj:{address:"abay 150/230"},info:{FName:"",SName:"",CompanyName:"",Country:"",Adress:"",City:"",Postcode:"",Email:"",Phone:""}}},beforeMount:function(){this.items=this.$store.state.cart},mounted:function(){var t=this;setTimeout((function(){t.LinkActive=!0}),100),$(document).on("ready",(function(){$.HSCore.components.HSFocusState.init(),$('#headerSidebarList [data-toggle="collapse"]').on("click",(function(t){t.preventDefault();var o=$(this).data("target");"true"===$(this).attr("aria-expanded")?$(o).collapse("hide"):$(o).collapse("show")}))}))},methods:{Ship:function(t){if("FourstylishRadio1"!=document.querySelectorAll('input[name="stylishRadio"]:checked')[0].id){t.preventDefault();for(var o=JSON.parse(JSON.stringify(this.items.cart)),e=0;e<o.length;e++)o[e]={kaspi_id:o[e].offerData.kaspi_id,count:o[e].offerData.count};console.log(o);var l={address:this.info.Adress,phoneNumber:this.info.Phone,email:this.info.Email,goods:o,name:this.info.FName+" "+this.info.SName,paymentMethod:"cash"};r.a.post("https://textforeva.ru/order",l).then((function(t){console.log(t)})).catch((function(t){console.log(t)}))}},localizeFilter:function(t,o,e){var l,r,n,v,_,c,d,m,h,C,f,y;return e?(null===(l=this.$store.state.lang.locales)||void 0===l||null===(r=l[this.$store.state.lang.lang])||void 0===r||null===(n=r[this.Component])||void 0===n||null===(v=n[t])||void 0===v||null===(_=v[o])||void 0===_?void 0:_[e])||"":o?(null===(c=this.$store.state.lang.locales)||void 0===c||null===(d=c[this.$store.state.lang.lang])||void 0===d||null===(m=d[this.Component])||void 0===m||null===(h=m[t])||void 0===h?void 0:h[o])||"":(null===(C=this.$store.state.lang.locales)||void 0===C||null===(f=C[this.$store.state.lang.lang])||void 0===f||null===(y=f[this.Component])||void 0===y?void 0:y[t])||""},TotalPrice:function(){return this.$store.state.cart.cart.reduce((function(t,o){return t+Number(o.offerData.price)*Number(o.offerData.count)}),0)},PayLink:function(){var t=this.makeSignature();return"https://api.paybox.money/payment.php?pg_order_id=".concat(this.pg_order_id,"&pg_merchant_id=").concat(this.pg_merchant_id,"&pg_amount=").concat(this.TotalPrice(),"&pg_description=").concat(this.pg_description,"&pg_language=").concat("en-US"==this.$store.state.lang.lang?"en":"ru","&pg_result_url=https://textforeva.ru/order&pg_salt=").concat(this.pg_salt,"&MyObject=").concat(JSON.stringify(this.obj),"&pg_testing_mode=1&pg_sig=").concat(t)},makeSignature:function(){var t="payment.php",o={pg_order_id:this.pg_order_id,pg_merchant_id:this.pg_merchant_id,pg_amount:this.TotalPrice(),pg_description:this.pg_description,pg_language:"en-US"==this.$store.state.lang.lang?"en":"ru",pg_salt:this.pg_salt,pg_result_url:"https://textforeva.ru/order",MyObject:JSON.stringify(this.obj),pg_testing_mode:"1"},e=this.getSecretKey(t),l=[t];Object.keys(o).sort().forEach((function(t){"pg_sig"!=t&&l.push(o[t])}));var r=l.join(";")+";"+e;return l=v.a.MD5(r).toString()},getSecretKey:function(t){var o="aPVUBJQP7CajiqTi";return["reg2reg","reg2nonreg","payment_status","p2p","p2p_secure","p2p2nonreg","p2p2nonreg_foreign"].indexOf(t)+1&&(o="nxr3H2cD7XIKB0w1"),o}}},c=e(22),component=Object(c.a)(_,(function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",{staticClass:"CHECKOUTMAIN"},[e("main",{staticClass:"checkout-page",attrs:{id:"content",role:"main"}},[e("div",{staticClass:"container mt-6"},[e("div",{staticClass:"mb-5"},[e("h1",{staticClass:"text-center"},[t._v(t._s(t.localizeFilter("MainTitle")))])]),t._v(" "),e("div",{staticClass:"accordion rounded mb-6",attrs:{id:"shopCartAccordion1"}},[e("div",{staticClass:"card border-0"},[e("div",{staticClass:"alert alert-primary mb-0",attrs:{id:"shopCartHeadingTwo",role:"alert"}},[t._v("\n                        "+t._s(t.localizeFilter("CouponPart","Fquestion"))),e("NuxtLink",{staticClass:"alert-link",attrs:{to:"#","data-toggle":"collapse","data-target":"#shopCartTwo","aria-expanded":"false","aria-controls":"shopCartTwo"}},[t._v(t._s(t.localizeFilter("CouponPart","FLink")))])],1),t._v(" "),e("div",{staticClass:"collapse border border-top-0",attrs:{id:"shopCartTwo","aria-labelledby":"shopCartHeadingTwo","data-parent":"#shopCartAccordion1"}},[e("form",{staticClass:"p-5",attrs:{novalidate:"novalidate"}},[e("p",{staticClass:"w-100 text-gray-90"},[t._v(t._s(t.localizeFilter("CouponPart","CouponDescription")))]),t._v(" "),e("div",{staticClass:"input-group input-group-pill max-width-660-xl"},[e("input",{staticClass:"form-control",attrs:{type:"text",name:"name",placeholder:t.localizeFilter("CouponPart","InputPlaceholder"),"aria-label":"Promo code"}}),t._v(" "),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-block btn-dark font-weight-normal btn-pill px-4",attrs:{type:"submit"}},[e("i",{staticClass:"fas fa-tags d-md-none"}),t._v(" "),e("span",{staticClass:"d-none d-md-inline"},[t._v(t._s(t.localizeFilter("CouponPart","ButtonTitle")))])])])])])])])]),t._v(" "),e("div",{attrs:{novalidate:"novalidate"}},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-lg-7 order-lg-1"},[e("div",{staticClass:"pb-7 mb-7"},[e("div",{staticClass:"border-bottom border-color-1 mb-5"},[e("h3",{staticClass:"section-title mb-0 pb-2 font-size-25"},[t._v(t._s(t.localizeFilter("Bill","Title")))])]),t._v(" "),e("client-only",[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"js-form-message mb-6"},[e("label",{staticClass:"form-label"},[t._v("\n                                                "+t._s(t.localizeFilter("Bill","FirstInputLabel"))+"\n                                                "),e("span",{staticClass:"text-danger"},[t._v("*")])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.info.FName,expression:"info.FName"}],staticClass:"form-control",attrs:{type:"text",name:"firstName",placeholder:t.localizeFilter("Bill","FirstInputPlaceholder")},domProps:{value:t.info.FName},on:{input:function(o){o.target.composing||t.$set(t.info,"FName",o.target.value)}}})])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"js-form-message mb-6"},[e("label",{staticClass:"form-label"},[t._v("\n                                                "+t._s(t.localizeFilter("Bill","SecondInputLabel"))+"\n                                                "),e("span",{staticClass:"text-danger"},[t._v("*")])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.info.SName,expression:"info.SName"}],staticClass:"form-control",attrs:{type:"text",name:"lastName",placeholder:t.localizeFilter("Bill","SecondInputPlaceholder"),"aria-label":"Wayley",required:"","data-msg":"Please enter your last name.","data-error-class":"u-has-error","data-success-class":"u-has-success"},domProps:{value:t.info.SName},on:{input:function(o){o.target.composing||t.$set(t.info,"SName",o.target.value)}}})])]),t._v(" "),e("div",{staticClass:"w-100"}),t._v(" "),e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"js-form-message mb-6"},[e("label",{staticClass:"form-label"},[t._v("\n                                                "+t._s(t.localizeFilter("Bill","ThirdInputLabel"))+"\n                                            ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.info.CompanyName,expression:"info.CompanyName"}],staticClass:"form-control",attrs:{type:"text",name:"companyName",placeholder:t.localizeFilter("Bill","ThirdInputPlaceholder"),"aria-label":"Company Name","data-msg":"Please enter a company name.","data-error-class":"u-has-error","data-success-class":"u-has-success"},domProps:{value:t.info.CompanyName},on:{input:function(o){o.target.composing||t.$set(t.info,"CompanyName",o.target.value)}}})])]),t._v(" "),e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"js-form-message mb-6"},[e("label",{staticClass:"form-label"},[t._v("\n                                                "+t._s(t.localizeFilter("Bill","FourthInputLabel"))+"\n                                                "),e("span",{staticClass:"text-danger"},[t._v("*")])]),t._v(" "),e("select",{directives:[{name:"model",rawName:"v-model",value:t.info.Country,expression:"info.Country"}],staticClass:"form-control dropdown-select",on:{change:function(o){var e=Array.prototype.filter.call(o.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.info,"Country",o.target.multiple?e:e[0])}}},[e("option",{attrs:{value:""}},[t._v(t._s(t.localizeFilter("Bill","FourthInputPlaceholder")))]),t._v(" "),e("option",{attrs:{value:"AF"}},[t._v("Afghanistan")]),t._v(" "),e("option",{attrs:{value:"AX"}},[t._v("Åland Islands")]),t._v(" "),e("option",{attrs:{value:"AL"}},[t._v("Albania")]),t._v(" "),e("option",{attrs:{value:"DZ"}},[t._v("Algeria")]),t._v(" "),e("option",{attrs:{value:"AS"}},[t._v("American Samoa")]),t._v(" "),e("option",{attrs:{value:"AD"}},[t._v("Andorra")]),t._v(" "),e("option",{attrs:{value:"AO"}},[t._v("Angola")]),t._v(" "),e("option",{attrs:{value:"AI"}},[t._v("Anguilla")]),t._v(" "),e("option",{attrs:{value:"AQ"}},[t._v("Antarctica")]),t._v(" "),e("option",{attrs:{value:"AG"}},[t._v("Antigua and Barbuda")]),t._v(" "),e("option",{attrs:{value:"AR"}},[t._v("Argentina")]),t._v(" "),e("option",{attrs:{value:"AM"}},[t._v("Armenia")]),t._v(" "),e("option",{attrs:{value:"AW"}},[t._v("Aruba")]),t._v(" "),e("option",{attrs:{value:"AU"}},[t._v("Australia")]),t._v(" "),e("option",{attrs:{value:"AT"}},[t._v("Austria")]),t._v(" "),e("option",{attrs:{value:"AZ"}},[t._v("Azerbaijan")]),t._v(" "),e("option",{attrs:{value:"BS"}},[t._v("Bahamas")]),t._v(" "),e("option",{attrs:{value:"BH"}},[t._v("Bahrain")]),t._v(" "),e("option",{attrs:{value:"BD"}},[t._v("Bangladesh")]),t._v(" "),e("option",{attrs:{value:"BB"}},[t._v("Barbados")]),t._v(" "),e("option",{attrs:{value:"BY"}},[t._v("Belarus")]),t._v(" "),e("option",{attrs:{value:"BE"}},[t._v("Belgium")]),t._v(" "),e("option",{attrs:{value:"BZ"}},[t._v("Belize")]),t._v(" "),e("option",{attrs:{value:"BJ"}},[t._v("Benin")]),t._v(" "),e("option",{attrs:{value:"BM"}},[t._v("Bermuda")]),t._v(" "),e("option",{attrs:{value:"BT"}},[t._v("Bhutan")]),t._v(" "),e("option",{attrs:{value:"BO"}},[t._v("Bolivia, Plurinational State of")]),t._v(" "),e("option",{attrs:{value:"BQ"}},[t._v("Bonaire, Sint Eustatius and Saba")]),t._v(" "),e("option",{attrs:{value:"BA"}},[t._v("Bosnia and Herzegovina")]),t._v(" "),e("option",{attrs:{value:"BW"}},[t._v("Botswana")]),t._v(" "),e("option",{attrs:{value:"BV"}},[t._v("Bouvet Island")]),t._v(" "),e("option",{attrs:{value:"BR"}},[t._v("Brazil")]),t._v(" "),e("option",{attrs:{value:"IO"}},[t._v("British Indian Ocean Territory")]),t._v(" "),e("option",{attrs:{value:"BN"}},[t._v("Brunei Darussalam")]),t._v(" "),e("option",{attrs:{value:"BG"}},[t._v("Bulgaria")]),t._v(" "),e("option",{attrs:{value:"BF"}},[t._v("Burkina Faso")]),t._v(" "),e("option",{attrs:{value:"BI"}},[t._v("Burundi")]),t._v(" "),e("option",{attrs:{value:"KH"}},[t._v("Cambodia")]),t._v(" "),e("option",{attrs:{value:"CM"}},[t._v("Cameroon")]),t._v(" "),e("option",{attrs:{value:"CA"}},[t._v("Canada")]),t._v(" "),e("option",{attrs:{value:"CV"}},[t._v("Cape Verde")]),t._v(" "),e("option",{attrs:{value:"KY"}},[t._v("Cayman Islands")]),t._v(" "),e("option",{attrs:{value:"CF"}},[t._v("Central African Republic")]),t._v(" "),e("option",{attrs:{value:"TD"}},[t._v("Chad")]),t._v(" "),e("option",{attrs:{value:"CL"}},[t._v("Chile")]),t._v(" "),e("option",{attrs:{value:"CN"}},[t._v("China")]),t._v(" "),e("option",{attrs:{value:"CX"}},[t._v("Christmas Island")]),t._v(" "),e("option",{attrs:{value:"CC"}},[t._v("Cocos (Keeling) Islands")]),t._v(" "),e("option",{attrs:{value:"CO"}},[t._v("Colombia")]),t._v(" "),e("option",{attrs:{value:"KM"}},[t._v("Comoros")]),t._v(" "),e("option",{attrs:{value:"CG"}},[t._v("Congo")]),t._v(" "),e("option",{attrs:{value:"CD"}},[t._v("Congo, the Democratic Republic of the")]),t._v(" "),e("option",{attrs:{value:"CK"}},[t._v("Cook Islands")]),t._v(" "),e("option",{attrs:{value:"CR"}},[t._v("Costa Rica")]),t._v(" "),e("option",{attrs:{value:"CI"}},[t._v("Côte d'Ivoire")]),t._v(" "),e("option",{attrs:{value:"HR"}},[t._v("Croatia")]),t._v(" "),e("option",{attrs:{value:"CU"}},[t._v("Cuba")]),t._v(" "),e("option",{attrs:{value:"CW"}},[t._v("Curaçao")]),t._v(" "),e("option",{attrs:{value:"CY"}},[t._v("Cyprus")]),t._v(" "),e("option",{attrs:{value:"CZ"}},[t._v("Czech Republic")]),t._v(" "),e("option",{attrs:{value:"DK"}},[t._v("Denmark")]),t._v(" "),e("option",{attrs:{value:"DJ"}},[t._v("Djibouti")]),t._v(" "),e("option",{attrs:{value:"DM"}},[t._v("Dominica")]),t._v(" "),e("option",{attrs:{value:"DO"}},[t._v("Dominican Republic")]),t._v(" "),e("option",{attrs:{value:"EC"}},[t._v("Ecuador")]),t._v(" "),e("option",{attrs:{value:"EG"}},[t._v("Egypt")]),t._v(" "),e("option",{attrs:{value:"SV"}},[t._v("El Salvador")]),t._v(" "),e("option",{attrs:{value:"GQ"}},[t._v("Equatorial Guinea")]),t._v(" "),e("option",{attrs:{value:"ER"}},[t._v("Eritrea")]),t._v(" "),e("option",{attrs:{value:"EE"}},[t._v("Estonia")]),t._v(" "),e("option",{attrs:{value:"ET"}},[t._v("Ethiopia")]),t._v(" "),e("option",{attrs:{value:"FK"}},[t._v("Falkland Islands (Malvinas)")]),t._v(" "),e("option",{attrs:{value:"FO"}},[t._v("Faroe Islands")]),t._v(" "),e("option",{attrs:{value:"FJ"}},[t._v("Fiji")]),t._v(" "),e("option",{attrs:{value:"FI"}},[t._v("Finland")]),t._v(" "),e("option",{attrs:{value:"FR"}},[t._v("France")]),t._v(" "),e("option",{attrs:{value:"GF"}},[t._v("French Guiana")]),t._v(" "),e("option",{attrs:{value:"PF"}},[t._v("French Polynesia")]),t._v(" "),e("option",{attrs:{value:"TF"}},[t._v("French Southern Territories")]),t._v(" "),e("option",{attrs:{value:"GA"}},[t._v("Gabon")]),t._v(" "),e("option",{attrs:{value:"GM"}},[t._v("Gambia")]),t._v(" "),e("option",{attrs:{value:"GE"}},[t._v("Georgia")]),t._v(" "),e("option",{attrs:{value:"DE"}},[t._v("Germany")]),t._v(" "),e("option",{attrs:{value:"GH"}},[t._v("Ghana")]),t._v(" "),e("option",{attrs:{value:"GI"}},[t._v("Gibraltar")]),t._v(" "),e("option",{attrs:{value:"GR"}},[t._v("Greece")]),t._v(" "),e("option",{attrs:{value:"GL"}},[t._v("Greenland")]),t._v(" "),e("option",{attrs:{value:"GD"}},[t._v("Grenada")]),t._v(" "),e("option",{attrs:{value:"GP"}},[t._v("Guadeloupe")]),t._v(" "),e("option",{attrs:{value:"GU"}},[t._v("Guam")]),t._v(" "),e("option",{attrs:{value:"GT"}},[t._v("Guatemala")]),t._v(" "),e("option",{attrs:{value:"GG"}},[t._v("Guernsey")]),t._v(" "),e("option",{attrs:{value:"GN"}},[t._v("Guinea")]),t._v(" "),e("option",{attrs:{value:"GW"}},[t._v("Guinea-Bissau")]),t._v(" "),e("option",{attrs:{value:"GY"}},[t._v("Guyana")]),t._v(" "),e("option",{attrs:{value:"HT"}},[t._v("Haiti")]),t._v(" "),e("option",{attrs:{value:"HM"}},[t._v("Heard Island and McDonald Islands")]),t._v(" "),e("option",{attrs:{value:"VA"}},[t._v("Holy See (Vatican City State)")]),t._v(" "),e("option",{attrs:{value:"HN"}},[t._v("Honduras")]),t._v(" "),e("option",{attrs:{value:"HK"}},[t._v("Hong Kong")]),t._v(" "),e("option",{attrs:{value:"HU"}},[t._v("Hungary")]),t._v(" "),e("option",{attrs:{value:"IS"}},[t._v("Iceland")]),t._v(" "),e("option",{attrs:{value:"IN"}},[t._v("India")]),t._v(" "),e("option",{attrs:{value:"ID"}},[t._v("Indonesia")]),t._v(" "),e("option",{attrs:{value:"IR"}},[t._v("Iran, Islamic Republic of")]),t._v(" "),e("option",{attrs:{value:"IQ"}},[t._v("Iraq")]),t._v(" "),e("option",{attrs:{value:"IE"}},[t._v("Ireland")]),t._v(" "),e("option",{attrs:{value:"IM"}},[t._v("Isle of Man")]),t._v(" "),e("option",{attrs:{value:"IL"}},[t._v("Israel")]),t._v(" "),e("option",{attrs:{value:"IT"}},[t._v("Italy")]),t._v(" "),e("option",{attrs:{value:"JM"}},[t._v("Jamaica")]),t._v(" "),e("option",{attrs:{value:"JP"}},[t._v("Japan")]),t._v(" "),e("option",{attrs:{value:"JE"}},[t._v("Jersey")]),t._v(" "),e("option",{attrs:{value:"JO"}},[t._v("Jordan")]),t._v(" "),e("option",{attrs:{value:"KZ"}},[t._v("Kazakhstan")]),t._v(" "),e("option",{attrs:{value:"KE"}},[t._v("Kenya")]),t._v(" "),e("option",{attrs:{value:"KI"}},[t._v("Kiribati")]),t._v(" "),e("option",{attrs:{value:"KP"}},[t._v("Korea, Democratic People's Republic of")]),t._v(" "),e("option",{attrs:{value:"KR"}},[t._v("Korea, Republic of")]),t._v(" "),e("option",{attrs:{value:"KW"}},[t._v("Kuwait")]),t._v(" "),e("option",{attrs:{value:"KG"}},[t._v("Kyrgyzstan")]),t._v(" "),e("option",{attrs:{value:"LA"}},[t._v("Lao People's Democratic Republic")]),t._v(" "),e("option",{attrs:{value:"LV"}},[t._v("Latvia")]),t._v(" "),e("option",{attrs:{value:"LB"}},[t._v("Lebanon")]),t._v(" "),e("option",{attrs:{value:"LS"}},[t._v("Lesotho")]),t._v(" "),e("option",{attrs:{value:"LR"}},[t._v("Liberia")]),t._v(" "),e("option",{attrs:{value:"LY"}},[t._v("Libya")]),t._v(" "),e("option",{attrs:{value:"LI"}},[t._v("Liechtenstein")]),t._v(" "),e("option",{attrs:{value:"LT"}},[t._v("Lithuania")]),t._v(" "),e("option",{attrs:{value:"LU"}},[t._v("Luxembourg")]),t._v(" "),e("option",{attrs:{value:"MO"}},[t._v("Macao")]),t._v(" "),e("option",{attrs:{value:"MK"}},[t._v("Macedonia, the former Yugoslav Republic of")]),t._v(" "),e("option",{attrs:{value:"MG"}},[t._v("Madagascar")]),t._v(" "),e("option",{attrs:{value:"MW"}},[t._v("Malawi")]),t._v(" "),e("option",{attrs:{value:"MY"}},[t._v("Malaysia")]),t._v(" "),e("option",{attrs:{value:"MV"}},[t._v("Maldives")]),t._v(" "),e("option",{attrs:{value:"ML"}},[t._v("Mali")]),t._v(" "),e("option",{attrs:{value:"MT"}},[t._v("Malta")]),t._v(" "),e("option",{attrs:{value:"MH"}},[t._v("Marshall Islands")]),t._v(" "),e("option",{attrs:{value:"MQ"}},[t._v("Martinique")]),t._v(" "),e("option",{attrs:{value:"MR"}},[t._v("Mauritania")]),t._v(" "),e("option",{attrs:{value:"MU"}},[t._v("Mauritius")]),t._v(" "),e("option",{attrs:{value:"YT"}},[t._v("Mayotte")]),t._v(" "),e("option",{attrs:{value:"MX"}},[t._v("Mexico")]),t._v(" "),e("option",{attrs:{value:"FM"}},[t._v("Micronesia, Federated States of")]),t._v(" "),e("option",{attrs:{value:"MD"}},[t._v("Moldova, Republic of")]),t._v(" "),e("option",{attrs:{value:"MC"}},[t._v("Monaco")]),t._v(" "),e("option",{attrs:{value:"MN"}},[t._v("Mongolia")]),t._v(" "),e("option",{attrs:{value:"ME"}},[t._v("Montenegro")]),t._v(" "),e("option",{attrs:{value:"MS"}},[t._v("Montserrat")]),t._v(" "),e("option",{attrs:{value:"MA"}},[t._v("Morocco")]),t._v(" "),e("option",{attrs:{value:"MZ"}},[t._v("Mozambique")]),t._v(" "),e("option",{attrs:{value:"MM"}},[t._v("Myanmar")]),t._v(" "),e("option",{attrs:{value:"NA"}},[t._v("Namibia")]),t._v(" "),e("option",{attrs:{value:"NR"}},[t._v("Nauru")]),t._v(" "),e("option",{attrs:{value:"NP"}},[t._v("Nepal")]),t._v(" "),e("option",{attrs:{value:"NL"}},[t._v("Netherlands")]),t._v(" "),e("option",{attrs:{value:"NC"}},[t._v("New Caledonia")]),t._v(" "),e("option",{attrs:{value:"NZ"}},[t._v("New Zealand")]),t._v(" "),e("option",{attrs:{value:"NI"}},[t._v("Nicaragua")]),t._v(" "),e("option",{attrs:{value:"NE"}},[t._v("Niger")]),t._v(" "),e("option",{attrs:{value:"NG"}},[t._v("Nigeria")]),t._v(" "),e("option",{attrs:{value:"NU"}},[t._v("Niue")]),t._v(" "),e("option",{attrs:{value:"NF"}},[t._v("Norfolk Island")]),t._v(" "),e("option",{attrs:{value:"MP"}},[t._v("Northern Mariana Islands")]),t._v(" "),e("option",{attrs:{value:"NO"}},[t._v("Norway")]),t._v(" "),e("option",{attrs:{value:"OM"}},[t._v("Oman")]),t._v(" "),e("option",{attrs:{value:"PK"}},[t._v("Pakistan")]),t._v(" "),e("option",{attrs:{value:"PW"}},[t._v("Palau")]),t._v(" "),e("option",{attrs:{value:"PS"}},[t._v("Palestinian Territory, Occupied")]),t._v(" "),e("option",{attrs:{value:"PA"}},[t._v("Panama")]),t._v(" "),e("option",{attrs:{value:"PG"}},[t._v("Papua New Guinea")]),t._v(" "),e("option",{attrs:{value:"PY"}},[t._v("Paraguay")]),t._v(" "),e("option",{attrs:{value:"PE"}},[t._v("Peru")]),t._v(" "),e("option",{attrs:{value:"PH"}},[t._v("Philippines")]),t._v(" "),e("option",{attrs:{value:"PN"}},[t._v("Pitcairn")]),t._v(" "),e("option",{attrs:{value:"PL"}},[t._v("Poland")]),t._v(" "),e("option",{attrs:{value:"PT"}},[t._v("Portugal")]),t._v(" "),e("option",{attrs:{value:"PR"}},[t._v("Puerto Rico")]),t._v(" "),e("option",{attrs:{value:"QA"}},[t._v("Qatar")]),t._v(" "),e("option",{attrs:{value:"RE"}},[t._v("Réunion")]),t._v(" "),e("option",{attrs:{value:"RO"}},[t._v("Romania")]),t._v(" "),e("option",{attrs:{value:"RU"}},[t._v("Russian Federation")]),t._v(" "),e("option",{attrs:{value:"RW"}},[t._v("Rwanda")]),t._v(" "),e("option",{attrs:{value:"BL"}},[t._v("Saint Barthélemy")]),t._v(" "),e("option",{attrs:{value:"SH"}},[t._v("Saint Helena, Ascension and Tristan da Cunha")]),t._v(" "),e("option",{attrs:{value:"KN"}},[t._v("Saint Kitts and Nevis")]),t._v(" "),e("option",{attrs:{value:"LC"}},[t._v("Saint Lucia")]),t._v(" "),e("option",{attrs:{value:"MF"}},[t._v("Saint Martin (French part)")]),t._v(" "),e("option",{attrs:{value:"PM"}},[t._v("Saint Pierre and Miquelon")]),t._v(" "),e("option",{attrs:{value:"VC"}},[t._v("Saint Vincent and the Grenadines")]),t._v(" "),e("option",{attrs:{value:"WS"}},[t._v("Samoa")]),t._v(" "),e("option",{attrs:{value:"SM"}},[t._v("San Marino")]),t._v(" "),e("option",{attrs:{value:"ST"}},[t._v("Sao Tome and Principe")]),t._v(" "),e("option",{attrs:{value:"SA"}},[t._v("Saudi Arabia")]),t._v(" "),e("option",{attrs:{value:"SN"}},[t._v("Senegal")]),t._v(" "),e("option",{attrs:{value:"RS"}},[t._v("Serbia")]),t._v(" "),e("option",{attrs:{value:"SC"}},[t._v("Seychelles")]),t._v(" "),e("option",{attrs:{value:"SL"}},[t._v("Sierra Leone")]),t._v(" "),e("option",{attrs:{value:"SG"}},[t._v("Singapore")]),t._v(" "),e("option",{attrs:{value:"SX"}},[t._v("Sint Maarten (Dutch part)")]),t._v(" "),e("option",{attrs:{value:"SK"}},[t._v("Slovakia")]),t._v(" "),e("option",{attrs:{value:"SI"}},[t._v("Slovenia")]),t._v(" "),e("option",{attrs:{value:"SB"}},[t._v("Solomon Islands")]),t._v(" "),e("option",{attrs:{value:"SO"}},[t._v("Somalia")]),t._v(" "),e("option",{attrs:{value:"ZA"}},[t._v("South Africa")]),t._v(" "),e("option",{attrs:{value:"GS"}},[t._v("South Georgia and the South Sandwich Islands")]),t._v(" "),e("option",{attrs:{value:"SS"}},[t._v("South Sudan")]),t._v(" "),e("option",{attrs:{value:"ES"}},[t._v("Spain")]),t._v(" "),e("option",{attrs:{value:"LK"}},[t._v("Sri Lanka")]),t._v(" "),e("option",{attrs:{value:"SD"}},[t._v("Sudan")]),t._v(" "),e("option",{attrs:{value:"SR"}},[t._v("Suriname")]),t._v(" "),e("option",{attrs:{value:"SJ"}},[t._v("Svalbard and Jan Mayen")]),t._v(" "),e("option",{attrs:{value:"SZ"}},[t._v("Swaziland")]),t._v(" "),e("option",{attrs:{value:"SE"}},[t._v("Sweden")]),t._v(" "),e("option",{attrs:{value:"CH"}},[t._v("Switzerland")]),t._v(" "),e("option",{attrs:{value:"SY"}},[t._v("Syrian Arab Republic")]),t._v(" "),e("option",{attrs:{value:"TW"}},[t._v("Taiwan, Province of China")]),t._v(" "),e("option",{attrs:{value:"TJ"}},[t._v("Tajikistan")]),t._v(" "),e("option",{attrs:{value:"TZ"}},[t._v("Tanzania, United Republic of")]),t._v(" "),e("option",{attrs:{value:"TH"}},[t._v("Thailand")]),t._v(" "),e("option",{attrs:{value:"TL"}},[t._v("Timor-Leste")]),t._v(" "),e("option",{attrs:{value:"TG"}},[t._v("Togo")]),t._v(" "),e("option",{attrs:{value:"TK"}},[t._v("Tokelau")]),t._v(" "),e("option",{attrs:{value:"TO"}},[t._v("Tonga")]),t._v(" "),e("option",{attrs:{value:"TT"}},[t._v("Trinidad and Tobago")]),t._v(" "),e("option",{attrs:{value:"TN"}},[t._v("Tunisia")]),t._v(" "),e("option",{attrs:{value:"TR"}},[t._v("Turkey")]),t._v(" "),e("option",{attrs:{value:"TM"}},[t._v("Turkmenistan")]),t._v(" "),e("option",{attrs:{value:"TC"}},[t._v("Turks and Caicos Islands")]),t._v(" "),e("option",{attrs:{value:"TV"}},[t._v("Tuvalu")]),t._v(" "),e("option",{attrs:{value:"UG"}},[t._v("Uganda")]),t._v(" "),e("option",{attrs:{value:"UA"}},[t._v("Ukraine")]),t._v(" "),e("option",{attrs:{value:"AE"}},[t._v("United Arab Emirates")]),t._v(" "),e("option",{attrs:{value:"GB"}},[t._v("United Kingdom")]),t._v(" "),e("option",{attrs:{value:"US"}},[t._v("United States")]),t._v(" "),e("option",{attrs:{value:"UM"}},[t._v("United States Minor Outlying Islands")]),t._v(" "),e("option",{attrs:{value:"UY"}},[t._v("Uruguay")]),t._v(" "),e("option",{attrs:{value:"UZ"}},[t._v("Uzbekistan")]),t._v(" "),e("option",{attrs:{value:"VU"}},[t._v("Vanuatu")]),t._v(" "),e("option",{attrs:{value:"VE"}},[t._v("Venezuela, Bolivarian Republic of")]),t._v(" "),e("option",{attrs:{value:"VN"}},[t._v("Viet Nam")]),t._v(" "),e("option",{attrs:{value:"VG"}},[t._v("Virgin Islands, British")]),t._v(" "),e("option",{attrs:{value:"VI"}},[t._v("Virgin Islands, U.S.")]),t._v(" "),e("option",{attrs:{value:"WF"}},[t._v("Wallis and Futuna")]),t._v(" "),e("option",{attrs:{value:"EH"}},[t._v("Western Sahara")]),t._v(" "),e("option",{attrs:{value:"YE"}},[t._v("Yemen")]),t._v(" "),e("option",{attrs:{value:"ZM"}},[t._v("Zambia")]),t._v(" "),e("option",{attrs:{value:"ZW"}},[t._v("Zimbabwe")])])])]),t._v(" "),e("div",{staticClass:"col-md-8"},[e("div",{staticClass:"js-form-message mb-6"},[e("label",{staticClass:"form-label"},[t._v("\n                                                "+t._s(t.localizeFilter("Bill","FifthInputLabel"))+"\n                                                "),e("span",{staticClass:"text-danger"},[t._v("*")])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.info.Adress,expression:"info.Adress"}],staticClass:"form-control",attrs:{type:"text",name:"streetAddress",placeholder:t.localizeFilter("Bill","FifthInputPlaceholder"),"aria-label":"470 Lucy Forks",required:"","data-msg":"Please enter a valid address.","data-error-class":"u-has-error","data-success-class":"u-has-success"},domProps:{value:t.info.Adress},on:{input:function(o){o.target.composing||t.$set(t.info,"Adress",o.target.value)}}})])]),t._v(" "),e("div",{staticClass:"col-md-4"},[e("div",{staticClass:"js-form-message mb-6"},[e("label",{staticClass:"form-label"},[t._v("\n                                                "+t._s(t.localizeFilter("Bill","SixthInputLabel"))+"\n                                            ")]),t._v(" "),e("input",{staticClass:"form-control",attrs:{type:"text",placeholder:t.localizeFilter("Bill","SixthInputPlaceholder"),"aria-label":"YC7B 3UT","data-msg":"Please enter a valid address.","data-error-class":"u-has-error","data-success-class":"u-has-success"}})])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"js-form-message mb-6"},[e("label",{staticClass:"form-label"},[t._v("\n                                                "+t._s(t.localizeFilter("Bill","SeventhInputLabel"))+"\n                                                "),e("span",{staticClass:"text-danger"},[t._v("*")])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.info.City,expression:"info.City"}],staticClass:"form-control",attrs:{type:"text",name:"cityAddress",placeholder:t.localizeFilter("Bill","SeventhInputPlaceholder"),"aria-label":"London",required:"","data-msg":"Please enter a valid address.","data-error-class":"u-has-error","data-success-class":"u-has-success",autocomplete:"off"},domProps:{value:t.info.City},on:{input:function(o){o.target.composing||t.$set(t.info,"City",o.target.value)}}})])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"js-form-message mb-6"},[e("label",{staticClass:"form-label"},[t._v("\n                                                "+t._s(t.localizeFilter("Bill","EighthInputLabel"))+"\n                                                "),e("span",{staticClass:"text-danger"},[t._v("*")])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.info.Postcode,expression:"info.Postcode"}],staticClass:"form-control",attrs:{type:"text",name:"postcode",placeholder:t.localizeFilter("Bill","EighthInputPlaceholder"),"aria-label":"99999",required:"","data-msg":"Please enter a postcode or zip code.","data-error-class":"u-has-error","data-success-class":"u-has-success"},domProps:{value:t.info.Postcode},on:{input:function(o){o.target.composing||t.$set(t.info,"Postcode",o.target.value)}}})])]),t._v(" "),e("div",{staticClass:"w-100"}),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"js-form-message mb-6"},[e("label",{staticClass:"form-label"},[t._v("\n                                                "+t._s(t.localizeFilter("Bill","TenthInputLabel"))+"\n                                                "),e("span",{staticClass:"text-danger"},[t._v("*")])]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.info.Email,expression:"info.Email"}],staticClass:"form-control",attrs:{type:"email",name:"emailAddress",placeholder:t.localizeFilter("Bill","TenthInputPlaceholder"),"aria-label":"jackwayley@gmail.com",required:"","data-msg":"Please enter a valid email address.","data-error-class":"u-has-error","data-success-class":"u-has-success"},domProps:{value:t.info.Email},on:{input:function(o){o.target.composing||t.$set(t.info,"Email",o.target.value)}}})])]),t._v(" "),e("div",{staticClass:"col-md-6"},[e("div",{staticClass:"js-form-message mb-6"},[e("label",{staticClass:"form-label"},[t._v("\n                                                "+t._s(t.localizeFilter("Bill","EleventhInputLabel"))+"\n                                            ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.info.Phone,expression:"info.Phone"}],staticClass:"form-control",attrs:{type:"text",placeholder:t.localizeFilter("Bill","EleventhInputPlaceholder"),"aria-label":"+1 (062) 109-9222","data-msg":"Please enter your last name.","data-error-class":"u-has-error","data-success-class":"u-has-success"},domProps:{value:t.info.Phone},on:{input:function(o){o.target.composing||t.$set(t.info,"Phone",o.target.value)}}})])]),t._v(" "),e("div",{staticClass:"w-100"})])]),t._v(" "),e("div",{staticClass:"border-bottom border-color-1 mb-5"},[e("h3",{staticClass:"section-title mb-0 pb-2 font-size-25"},[t._v(t._s(t.localizeFilter("Bill","DetailsTitle")))])]),t._v(" "),e("client-only",[e("div",{staticClass:"js-form-message mb-6"},[e("label",{staticClass:"form-label"},[t._v("\n                                        "+t._s(t.localizeFilter("Bill","TwelfthInputLabel"))+"\n                                    ")]),t._v(" "),e("div",{staticClass:"input-group"},[e("textarea",{staticClass:"form-control p-5",attrs:{rows:"4",name:"text",placeholder:t.localizeFilter("Bill","TwelfthInputPlaceholder")}})])])])],1)]),t._v(" "),e("div",{staticClass:"col-lg-5 order-lg-2 mb-7 mb-lg-0"},[e("div",{staticClass:"pl-lg-3 "},[e("div",{staticClass:"bg-gray-1 rounded-lg"},[e("div",{staticClass:"p-4 mb-4 checkout-table"},[e("div",{staticClass:"border-bottom border-color-1 mb-5"},[e("h3",{staticClass:"section-title mb-0 pb-2 font-size-25"},[t._v(t._s(t.localizeFilter("Order","Title")))])]),t._v(" "),e("table",{staticClass:"table"},[e("thead",[e("tr",[e("th",{staticClass:"product-name"},[t._v(t._s(t.localizeFilter("Order","FirstProductsTitle")))]),t._v(" "),e("th",{staticClass:"product-total"},[t._v(t._s(t.localizeFilter("Order","ProductsTotalTitle")))])])]),t._v(" "),e("tbody",t._l(t.$store.state.cart.cart,(function(o,i){return e("tr",{key:i,staticClass:"cart_item"},[e("td",[t._v(t._s(o.offerData.name)+" "),e("strong",{staticClass:"product-quantity"},[t._v("× "+t._s(o.offerData.count))])]),t._v(" "),e("td",[t._v(t._s(o.offerData.price*o.offerData.count)+" тг.")])])})),0),t._v(" "),e("tfoot",[e("tr",[e("th",[t._v(t._s(t.localizeFilter("Order","FourthProductsTitle")))]),t._v(" "),e("td",[e("strong",[t._v(t._s(t.TotalPrice())+" тг.")])])])])]),t._v(" "),e("div",{staticClass:"border-top border-width-3 border-color-1 pt-3 mb-3"},[e("div",{attrs:{id:"basicsAccordion1"}},[e("div",{staticClass:"border-bottom border-color-1 border-dotted-bottom"},[e("div",{staticClass:"p-3",attrs:{id:"basicsHeadingOne"}},[e("div",{staticClass:"custom-control custom-radio"},[e("input",{staticClass:"custom-control-input",attrs:{type:"radio",id:"stylishRadio1",name:"stylishRadio",checked:""}}),t._v(" "),e("label",{staticClass:"custom-control-label form-label",attrs:{for:"stylishRadio1","data-toggle":"collapse","data-target":"#basicsCollapseOnee","aria-expanded":"true","aria-controls":"basicsCollapseOnee"}},[t._v("\n                                                            "+t._s(t.localizeFilter("Order","TransferVariations","FirstVariationTitle"))+"\n                                                        ")])])]),t._v(" "),e("div",{staticClass:"collapse show border-top border-color-1 border-dotted-top bg-dark-lighter",attrs:{id:"basicsCollapseOnee","aria-labelledby":"basicsHeadingOne","data-parent":"#basicsAccordion1"}},[e("div",{staticClass:"p-4"},[t._v("\n                                                        "+t._s(t.localizeFilter("Order","TransferVariations","FirstVariationText"))+"\n                                                    ")])])]),t._v(" "),e("div",{staticClass:"border-bottom border-color-1 border-dotted-bottom"},[e("div",{staticClass:"p-3",attrs:{id:"basicsHeadingThree"}},[e("div",{staticClass:"custom-control custom-radio"},[e("input",{staticClass:"custom-control-input",attrs:{type:"radio",id:"thirdstylishRadio1",name:"stylishRadio"}}),t._v(" "),e("label",{staticClass:"custom-control-label form-label",attrs:{for:"thirdstylishRadio1","data-toggle":"collapse","data-target":"#basicsCollapseThree","aria-expanded":"false","aria-controls":"basicsCollapseThree"}},[t._v("\n                                                            "+t._s(t.localizeFilter("Order","TransferVariations","ThirdVariationTitle"))+"\n                                                        ")])])]),t._v(" "),e("div",{staticClass:"collapse border-top border-color-1 border-dotted-top bg-dark-lighter",attrs:{id:"basicsCollapseThree","aria-labelledby":"basicsHeadingThree","data-parent":"#basicsAccordion1"}},[e("div",{staticClass:"p-4"},[t._v("\n                                                        "+t._s(t.localizeFilter("Order","TransferVariations","ThirdVariationText"))+"\n                                                    ")])])]),t._v(" "),e("div",{staticClass:"border-bottom border-color-1 border-dotted-bottom"},[e("div",{staticClass:"p-3",attrs:{id:"basicsHeadingFour"}},[e("div",{staticClass:"custom-control custom-radio"},[e("input",{staticClass:"custom-control-input",attrs:{type:"radio",id:"FourstylishRadio1",name:"stylishRadio"}}),t._v(" "),e("label",{staticClass:"custom-control-label form-label",attrs:{for:"FourstylishRadio1","data-toggle":"collapse","data-target":"#basicsCollapseFour","aria-expanded":"false","aria-controls":"basicsCollapseFour"}},[t._v("\n                                                            "+t._s(t.localizeFilter("Order","TransferVariations","FourthVariationTitle"))+" "),e("div",{staticClass:"text-blue"},[t._v(t._s(t.localizeFilter("Order","TransferVariations","FourthVariationQuestion")))])])])]),t._v(" "),e("div",{staticClass:"collapse border-top border-color-1 border-dotted-top bg-dark-lighter",attrs:{id:"basicsCollapseFour","aria-labelledby":"basicsHeadingFour","data-parent":"#basicsAccordion1"}},[e("div",{staticClass:"p-4"},[t._v("\n                                                        "+t._s(t.localizeFilter("Order","TransferVariations","FourthVariationText"))+"\n                                                    ")])])])])]),t._v(" "),e("div",{staticClass:"form-group d-flex align-items-center justify-content-between px-3 mb-5"},[e("div",{staticClass:"form-check"},[e("input",{staticClass:"form-check-input",attrs:{type:"checkbox"}}),t._v(" "),e("label",{staticClass:"form-check-label form-label"},[t._v("\n                                                "+t._s(t.localizeFilter("Order","TransferVariations","AgreedTermsTitle"))),e("NuxtLink",{staticClass:"text-blue",attrs:{to:"/terms"}},[t._v(" "+t._s(t.localizeFilter("Order","TransferVariations","AgreedTermsLinkToTermsPage")))]),t._v(t._s(" ")),e("span",{staticClass:"text-danger"},[t._v("*")])],1)])]),t._v(" "),t.LinkActive?e("a",{attrs:{target:"_blank",rel:"nofollow noopener noreferrer",href:t.PayLink()},on:{click:t.Ship}},[e("button",{staticClass:"btn btn-primary-dark-w btn-block btn-pill font-size-20 mb-3 py-3"},[t._v(t._s(t.localizeFilter("Order","TransferVariations","SuccessButtonText")))])]):t._e()])])])])])])])])])}),[],!1,null,null,null);o.default=component.exports}}]);