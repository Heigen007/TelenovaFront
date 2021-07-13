<template>
    <div class="CHECKOUTMAIN">
        
        <loader v-if='loaderM' object="#ff9633" color1="#ffffff" color2="#17fd3d" size="5" speed="1.7" bg="#343a40" objectbg="#999793" opacity="80" disableScrolling="false" name="dots"></loader>
        <!-- ========== MAIN CONTENT ========== -->
        <main id="content" role="main" class="checkout-page">
            <div class="container mt-6">
                <div class="mb-5">
                    <h1 class="text-center">{{localizeFilter('MainTitle')}}</h1>
                </div>
                <!-- Accordion -->
                <div id="shopCartAccordion1" class="accordion rounded mb-6">
                    <!-- Card -->
                    <div class="card border-0">
                        <div id="shopCartHeadingTwo" class="alert alert-primary mb-0" role="alert">
                            {{localizeFilter('CouponPart', 'Fquestion')}}<NuxtLink to="#" class="alert-link" data-toggle="collapse" data-target="#shopCartTwo" aria-expanded="false" aria-controls="shopCartTwo">{{localizeFilter('CouponPart', 'FLink')}}</NuxtLink>
                        </div>
                        <div id="shopCartTwo" class="collapse border border-top-0" aria-labelledby="shopCartHeadingTwo" data-parent="#shopCartAccordion1" style="">
                            <form class="p-5" novalidate="novalidate">
                                <p class="w-100 text-gray-90">{{localizeFilter('CouponPart', 'CouponDescription')}}</p>
                                <div class="input-group input-group-pill max-width-660-xl">
                                    <input type="text" class="form-control" name="name" :placeholder="localizeFilter('CouponPart', 'InputPlaceholder')" aria-label="Promo code">
                                    <div class="input-group-append">
                                        <button type="submit" class="btn btn-block btn-dark font-weight-normal btn-pill px-4">
                                            <i class="fas fa-tags d-md-none"></i>
                                            <span class="d-none d-md-inline">{{localizeFilter('CouponPart', 'ButtonTitle')}}</span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <!-- End Card -->
                </div>
                <!-- End Accordion -->
                <div novalidate="novalidate">
                    <div class="row">


                        <div class="col-lg-7 order-lg-1">
                            <div class="pb-7 mb-7">
                                <!-- Title -->
                                <div class="border-bottom border-color-1 mb-5">
                                    <h3 class="section-title mb-0 pb-2 font-size-25">{{localizeFilter('Bill', 'Title')}}</h3>
                                </div>
                                <!-- End Title -->

                                <!-- Billing Form -->
                                <client-only>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <!-- Input -->
                                            <div class="js-form-message mb-6">
                                                <label class="form-label">
                                                    {{localizeFilter('Bill', 'FirstInputLabel')}}
                                                    <span class="text-danger">*</span>
                                                </label>
                                                <input v-model='info.FName' type="text" class="form-control" name="firstName" :placeholder="localizeFilter('Bill', 'FirstInputPlaceholder')">
                                            </div>
                                            <!-- End Input -->
                                        </div>

                                        <div class="col-md-6">
                                            <!-- Input -->
                                            <div class="js-form-message mb-6">
                                                <label class="form-label">
                                                    {{localizeFilter('Bill', 'SecondInputLabel')}}
                                                    <span class="text-danger">*</span>
                                                </label>
                                                <input v-model='info.SName' type="text" class="form-control" name="lastName" :placeholder="localizeFilter('Bill', 'SecondInputPlaceholder')" aria-label="Wayley" required="" data-msg="Please enter your last name." data-error-class="u-has-error" data-success-class="u-has-success">
                                            </div>
                                            <!-- End Input -->
                                        </div>

                                        <div class="w-100"></div>

                                        <div class="col-md-12">
                                            <!-- Input -->
                                            <div class="js-form-message mb-6">
                                                <label class="form-label">
                                                    {{localizeFilter('Bill', 'ThirdInputLabel')}}
                                                </label>
                                                <input v-model='info.CompanyName' type="text" class="form-control" name="companyName" :placeholder="localizeFilter('Bill', 'ThirdInputPlaceholder')" aria-label="Company Name" data-msg="Please enter a company name." data-error-class="u-has-error" data-success-class="u-has-success">
                                            </div>
                                            <!-- End Input -->
                                        </div>

                                        <div class="col-md-12">
                                            <!-- Input -->
                                            <div class="js-form-message mb-6">
                                                <label class="form-label">
                                                    {{localizeFilter('Bill', 'FourthInputLabel')}}
                                                    <span class="text-danger">*</span>
                                                </label>
                                                <select class="form-control dropdown-select" v-model='info.Country'>
                                                    <option value="">{{localizeFilter('Bill', 'FourthInputPlaceholder')}}</option>
                                                    <option value="AF">Afghanistan</option>
                                                    <option value="AX">Åland Islands</option>
                                                    <option value="AL">Albania</option>
                                                    <option value="DZ">Algeria</option>
                                                    <option value="AS">American Samoa</option>
                                                    <option value="AD">Andorra</option>
                                                    <option value="AO">Angola</option>
                                                    <option value="AI">Anguilla</option>
                                                    <option value="AQ">Antarctica</option>
                                                    <option value="AG">Antigua and Barbuda</option>
                                                    <option value="AR">Argentina</option>
                                                    <option value="AM">Armenia</option>
                                                    <option value="AW">Aruba</option>
                                                    <option value="AU">Australia</option>
                                                    <option value="AT">Austria</option>
                                                    <option value="AZ">Azerbaijan</option>
                                                    <option value="BS">Bahamas</option>
                                                    <option value="BH">Bahrain</option>
                                                    <option value="BD">Bangladesh</option>
                                                    <option value="BB">Barbados</option>
                                                    <option value="BY">Belarus</option>
                                                    <option value="BE">Belgium</option>
                                                    <option value="BZ">Belize</option>
                                                    <option value="BJ">Benin</option>
                                                    <option value="BM">Bermuda</option>
                                                    <option value="BT">Bhutan</option>
                                                    <option value="BO">Bolivia, Plurinational State of</option>
                                                    <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                                                    <option value="BA">Bosnia and Herzegovina</option>
                                                    <option value="BW">Botswana</option>
                                                    <option value="BV">Bouvet Island</option>
                                                    <option value="BR">Brazil</option>
                                                    <option value="IO">British Indian Ocean Territory</option>
                                                    <option value="BN">Brunei Darussalam</option>
                                                    <option value="BG">Bulgaria</option>
                                                    <option value="BF">Burkina Faso</option>
                                                    <option value="BI">Burundi</option>
                                                    <option value="KH">Cambodia</option>
                                                    <option value="CM">Cameroon</option>
                                                    <option value="CA">Canada</option>
                                                    <option value="CV">Cape Verde</option>
                                                    <option value="KY">Cayman Islands</option>
                                                    <option value="CF">Central African Republic</option>
                                                    <option value="TD">Chad</option>
                                                    <option value="CL">Chile</option>
                                                    <option value="CN">China</option>
                                                    <option value="CX">Christmas Island</option>
                                                    <option value="CC">Cocos (Keeling) Islands</option>
                                                    <option value="CO">Colombia</option>
                                                    <option value="KM">Comoros</option>
                                                    <option value="CG">Congo</option>
                                                    <option value="CD">Congo, the Democratic Republic of the</option>
                                                    <option value="CK">Cook Islands</option>
                                                    <option value="CR">Costa Rica</option>
                                                    <option value="CI">Côte d'Ivoire</option>
                                                    <option value="HR">Croatia</option>
                                                    <option value="CU">Cuba</option>
                                                    <option value="CW">Curaçao</option>
                                                    <option value="CY">Cyprus</option>
                                                    <option value="CZ">Czech Republic</option>
                                                    <option value="DK">Denmark</option>
                                                    <option value="DJ">Djibouti</option>
                                                    <option value="DM">Dominica</option>
                                                    <option value="DO">Dominican Republic</option>
                                                    <option value="EC">Ecuador</option>
                                                    <option value="EG">Egypt</option>
                                                    <option value="SV">El Salvador</option>
                                                    <option value="GQ">Equatorial Guinea</option>
                                                    <option value="ER">Eritrea</option>
                                                    <option value="EE">Estonia</option>
                                                    <option value="ET">Ethiopia</option>
                                                    <option value="FK">Falkland Islands (Malvinas)</option>
                                                    <option value="FO">Faroe Islands</option>
                                                    <option value="FJ">Fiji</option>
                                                    <option value="FI">Finland</option>
                                                    <option value="FR">France</option>
                                                    <option value="GF">French Guiana</option>
                                                    <option value="PF">French Polynesia</option>
                                                    <option value="TF">French Southern Territories</option>
                                                    <option value="GA">Gabon</option>
                                                    <option value="GM">Gambia</option>
                                                    <option value="GE">Georgia</option>
                                                    <option value="DE">Germany</option>
                                                    <option value="GH">Ghana</option>
                                                    <option value="GI">Gibraltar</option>
                                                    <option value="GR">Greece</option>
                                                    <option value="GL">Greenland</option>
                                                    <option value="GD">Grenada</option>
                                                    <option value="GP">Guadeloupe</option>
                                                    <option value="GU">Guam</option>
                                                    <option value="GT">Guatemala</option>
                                                    <option value="GG">Guernsey</option>
                                                    <option value="GN">Guinea</option>
                                                    <option value="GW">Guinea-Bissau</option>
                                                    <option value="GY">Guyana</option>
                                                    <option value="HT">Haiti</option>
                                                    <option value="HM">Heard Island and McDonald Islands</option>
                                                    <option value="VA">Holy See (Vatican City State)</option>
                                                    <option value="HN">Honduras</option>
                                                    <option value="HK">Hong Kong</option>
                                                    <option value="HU">Hungary</option>
                                                    <option value="IS">Iceland</option>
                                                    <option value="IN">India</option>
                                                    <option value="ID">Indonesia</option>
                                                    <option value="IR">Iran, Islamic Republic of</option>
                                                    <option value="IQ">Iraq</option>
                                                    <option value="IE">Ireland</option>
                                                    <option value="IM">Isle of Man</option>
                                                    <option value="IL">Israel</option>
                                                    <option value="IT">Italy</option>
                                                    <option value="JM">Jamaica</option>
                                                    <option value="JP">Japan</option>
                                                    <option value="JE">Jersey</option>
                                                    <option value="JO">Jordan</option>
                                                    <option value="KZ">Kazakhstan</option>
                                                    <option value="KE">Kenya</option>
                                                    <option value="KI">Kiribati</option>
                                                    <option value="KP">Korea, Democratic People's Republic of</option>
                                                    <option value="KR">Korea, Republic of</option>
                                                    <option value="KW">Kuwait</option>
                                                    <option value="KG">Kyrgyzstan</option>
                                                    <option value="LA">Lao People's Democratic Republic</option>
                                                    <option value="LV">Latvia</option>
                                                    <option value="LB">Lebanon</option>
                                                    <option value="LS">Lesotho</option>
                                                    <option value="LR">Liberia</option>
                                                    <option value="LY">Libya</option>
                                                    <option value="LI">Liechtenstein</option>
                                                    <option value="LT">Lithuania</option>
                                                    <option value="LU">Luxembourg</option>
                                                    <option value="MO">Macao</option>
                                                    <option value="MK">Macedonia, the former Yugoslav Republic of</option>
                                                    <option value="MG">Madagascar</option>
                                                    <option value="MW">Malawi</option>
                                                    <option value="MY">Malaysia</option>
                                                    <option value="MV">Maldives</option>
                                                    <option value="ML">Mali</option>
                                                    <option value="MT">Malta</option>
                                                    <option value="MH">Marshall Islands</option>
                                                    <option value="MQ">Martinique</option>
                                                    <option value="MR">Mauritania</option>
                                                    <option value="MU">Mauritius</option>
                                                    <option value="YT">Mayotte</option>
                                                    <option value="MX">Mexico</option>
                                                    <option value="FM">Micronesia, Federated States of</option>
                                                    <option value="MD">Moldova, Republic of</option>
                                                    <option value="MC">Monaco</option>
                                                    <option value="MN">Mongolia</option>
                                                    <option value="ME">Montenegro</option>
                                                    <option value="MS">Montserrat</option>
                                                    <option value="MA">Morocco</option>
                                                    <option value="MZ">Mozambique</option>
                                                    <option value="MM">Myanmar</option>
                                                    <option value="NA">Namibia</option>
                                                    <option value="NR">Nauru</option>
                                                    <option value="NP">Nepal</option>
                                                    <option value="NL">Netherlands</option>
                                                    <option value="NC">New Caledonia</option>
                                                    <option value="NZ">New Zealand</option>
                                                    <option value="NI">Nicaragua</option>
                                                    <option value="NE">Niger</option>
                                                    <option value="NG">Nigeria</option>
                                                    <option value="NU">Niue</option>
                                                    <option value="NF">Norfolk Island</option>
                                                    <option value="MP">Northern Mariana Islands</option>
                                                    <option value="NO">Norway</option>
                                                    <option value="OM">Oman</option>
                                                    <option value="PK">Pakistan</option>
                                                    <option value="PW">Palau</option>
                                                    <option value="PS">Palestinian Territory, Occupied</option>
                                                    <option value="PA">Panama</option>
                                                    <option value="PG">Papua New Guinea</option>
                                                    <option value="PY">Paraguay</option>
                                                    <option value="PE">Peru</option>
                                                    <option value="PH">Philippines</option>
                                                    <option value="PN">Pitcairn</option>
                                                    <option value="PL">Poland</option>
                                                    <option value="PT">Portugal</option>
                                                    <option value="PR">Puerto Rico</option>
                                                    <option value="QA">Qatar</option>
                                                    <option value="RE">Réunion</option>
                                                    <option value="RO">Romania</option>
                                                    <option value="RU">Russian Federation</option>
                                                    <option value="RW">Rwanda</option>
                                                    <option value="BL">Saint Barthélemy</option>
                                                    <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                                                    <option value="KN">Saint Kitts and Nevis</option>
                                                    <option value="LC">Saint Lucia</option>
                                                    <option value="MF">Saint Martin (French part)</option>
                                                    <option value="PM">Saint Pierre and Miquelon</option>
                                                    <option value="VC">Saint Vincent and the Grenadines</option>
                                                    <option value="WS">Samoa</option>
                                                    <option value="SM">San Marino</option>
                                                    <option value="ST">Sao Tome and Principe</option>
                                                    <option value="SA">Saudi Arabia</option>
                                                    <option value="SN">Senegal</option>
                                                    <option value="RS">Serbia</option>
                                                    <option value="SC">Seychelles</option>
                                                    <option value="SL">Sierra Leone</option>
                                                    <option value="SG">Singapore</option>
                                                    <option value="SX">Sint Maarten (Dutch part)</option>
                                                    <option value="SK">Slovakia</option>
                                                    <option value="SI">Slovenia</option>
                                                    <option value="SB">Solomon Islands</option>
                                                    <option value="SO">Somalia</option>
                                                    <option value="ZA">South Africa</option>
                                                    <option value="GS">South Georgia and the South Sandwich Islands</option>
                                                    <option value="SS">South Sudan</option>
                                                    <option value="ES">Spain</option>
                                                    <option value="LK">Sri Lanka</option>
                                                    <option value="SD">Sudan</option>
                                                    <option value="SR">Suriname</option>
                                                    <option value="SJ">Svalbard and Jan Mayen</option>
                                                    <option value="SZ">Swaziland</option>
                                                    <option value="SE">Sweden</option>
                                                    <option value="CH">Switzerland</option>
                                                    <option value="SY">Syrian Arab Republic</option>
                                                    <option value="TW">Taiwan, Province of China</option>
                                                    <option value="TJ">Tajikistan</option>
                                                    <option value="TZ">Tanzania, United Republic of</option>
                                                    <option value="TH">Thailand</option>
                                                    <option value="TL">Timor-Leste</option>
                                                    <option value="TG">Togo</option>
                                                    <option value="TK">Tokelau</option>
                                                    <option value="TO">Tonga</option>
                                                    <option value="TT">Trinidad and Tobago</option>
                                                    <option value="TN">Tunisia</option>
                                                    <option value="TR">Turkey</option>
                                                    <option value="TM">Turkmenistan</option>
                                                    <option value="TC">Turks and Caicos Islands</option>
                                                    <option value="TV">Tuvalu</option>
                                                    <option value="UG">Uganda</option>
                                                    <option value="UA">Ukraine</option>
                                                    <option value="AE">United Arab Emirates</option>
                                                    <option value="GB">United Kingdom</option>
                                                    <option value="US">United States</option>
                                                    <option value="UM">United States Minor Outlying Islands</option>
                                                    <option value="UY">Uruguay</option>
                                                    <option value="UZ">Uzbekistan</option>
                                                    <option value="VU">Vanuatu</option>
                                                    <option value="VE">Venezuela, Bolivarian Republic of</option>
                                                    <option value="VN">Viet Nam</option>
                                                    <option value="VG">Virgin Islands, British</option>
                                                    <option value="VI">Virgin Islands, U.S.</option>
                                                    <option value="WF">Wallis and Futuna</option>
                                                    <option value="EH">Western Sahara</option>
                                                    <option value="YE">Yemen</option>
                                                    <option value="ZM">Zambia</option>
                                                    <option value="ZW">Zimbabwe</option>
                                                </select>
                                            </div>
                                            <!-- End Input -->
                                        </div>

                                        <div class="col-md-8">
                                            <!-- Input -->
                                            <div class="js-form-message mb-6">
                                                <label class="form-label">
                                                    {{localizeFilter('Bill', 'FifthInputLabel')}}
                                                    <span class="text-danger">*</span>
                                                </label>
                                                <input v-model='info.Adress' type="text" class="form-control" name="streetAddress" :placeholder="localizeFilter('Bill', 'FifthInputPlaceholder')" aria-label="470 Lucy Forks" required="" data-msg="Please enter a valid address." data-error-class="u-has-error" data-success-class="u-has-success">
                                            </div>
                                            <!-- End Input -->
                                        </div>

                                        <div class="col-md-4">
                                            <!-- Input -->
                                            <div class="js-form-message mb-6">
                                                <label class="form-label">
                                                    {{localizeFilter('Bill', 'SixthInputLabel')}}
                                                </label>
                                                <input type="text" class="form-control" :placeholder="localizeFilter('Bill', 'SixthInputPlaceholder')" aria-label="YC7B 3UT" data-msg="Please enter a valid address." data-error-class="u-has-error" data-success-class="u-has-success">
                                            </div>
                                            <!-- End Input -->
                                        </div>

                                        <div class="col-md-6">
                                            <!-- Input -->
                                            <div class="js-form-message mb-6">
                                                <label class="form-label">
                                                    {{localizeFilter('Bill', 'SeventhInputLabel')}}
                                                    <span class="text-danger">*</span>
                                                </label>
                                                <input v-model='info.City' type="text" class="form-control" name="cityAddress" :placeholder="localizeFilter('Bill', 'SeventhInputPlaceholder')" aria-label="London" required="" data-msg="Please enter a valid address." data-error-class="u-has-error" data-success-class="u-has-success" autocomplete="off">
                                            </div>
                                            <!-- End Input -->
                                        </div>

                                        <div class="col-md-6">
                                            <!-- Input -->
                                            <div class="js-form-message mb-6">
                                                <label class="form-label">
                                                    {{localizeFilter('Bill', 'EighthInputLabel')}}
                                                    <span class="text-danger">*</span>
                                                </label>
                                                <input v-model='info.Postcode' type="text" class="form-control" name="postcode" :placeholder="localizeFilter('Bill', 'EighthInputPlaceholder')" aria-label="99999" required="" data-msg="Please enter a postcode or zip code." data-error-class="u-has-error" data-success-class="u-has-success">
                                            </div>
                                            <!-- End Input -->
                                        </div>

                                        <div class="w-100"></div>

                                        <div class="col-md-6">
                                            <!-- Input -->
                                            <div class="js-form-message mb-6">
                                                <label class="form-label">
                                                    {{localizeFilter('Bill', 'TenthInputLabel')}}
                                                    <span class="text-danger">*</span>
                                                </label>
                                                <input v-model='info.Email' type="email" class="form-control" name="emailAddress" :placeholder="localizeFilter('Bill', 'TenthInputPlaceholder')" aria-label="jackwayley@gmail.com" required="" data-msg="Please enter a valid email address." data-error-class="u-has-error" data-success-class="u-has-success">
                                            </div>
                                            <!-- End Input -->
                                        </div>

                                        <div class="col-md-6">
                                            <!-- Input -->
                                            <div class="js-form-message mb-6">
                                                <label class="form-label">
                                                    {{localizeFilter('Bill', 'EleventhInputLabel')}}
                                                </label>
                                                <input v-model='info.Phone' type="text" class="form-control" :placeholder="localizeFilter('Bill', 'EleventhInputPlaceholder')" aria-label="+1 (062) 109-9222" data-msg="Please enter your last name." data-error-class="u-has-error" data-success-class="u-has-success">
                                            </div>
                                            <!-- End Input -->
                                        </div>

                                        <div class="w-100"></div>
                                    </div>
                                <!-- End Billing Form -->
                                </client-only>
                                <!-- Title -->
                                <div class="border-bottom border-color-1 mb-5">
                                    <h3 class="section-title mb-0 pb-2 font-size-25">{{localizeFilter('Bill', 'DetailsTitle')}}</h3>
                                </div>
                                <!-- End Title -->
                                <!-- Input -->
                                <client-only>
                                    <div class="js-form-message mb-6">
                                        <label class="form-label">
                                            {{localizeFilter('Bill', 'TwelfthInputLabel')}}
                                        </label>

                                        <div class="input-group">
                                            <textarea class="form-control p-5" rows="4" name="text" :placeholder="localizeFilter('Bill', 'TwelfthInputPlaceholder')"></textarea>
                                        </div>
                                    </div>
                                </client-only>
                                <!-- End Input -->
                            </div>
                        </div>
                        <div class="col-lg-5 order-lg-2 mb-7 mb-lg-0">
                            <div class="pl-lg-3 ">
                                <div class="bg-gray-1 rounded-lg">
                                    <!-- Order Summary -->
                                    <div class="p-4 mb-4 checkout-table">
                                        <!-- Title -->
                                        <div class="border-bottom border-color-1 mb-5">
                                            <h3 class="section-title mb-0 pb-2 font-size-25">{{localizeFilter('Order', 'Title')}}</h3>
                                        </div>
                                        <!-- End Title -->

                                        <!-- Product Content -->
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th class="product-name">{{localizeFilter('Order', 'FirstProductsTitle')}}</th>
                                                    <th class="product-total">{{localizeFilter('Order', 'ProductsTotalTitle')}}</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(el, i) in $store.state.cart.cart" :key='i' class="cart_item">
                                                    <td>{{el.offerData.name}}&nbsp;<strong class="product-quantity">× {{el.offerData.count}}</strong></td>
                                                    <td>{{el.offerData.price * el.offerData.count}} тг.</td>
                                                </tr>
                                            </tbody>
                                            <tfoot>
                                                <!-- <tr>
                                                    <th>{{localizeFilter('Order', 'SecondProductsTitle')}}</th>
                                                    <td>{{TotalPrice()}} тг.</td>
                                                </tr>
                                                <tr>
                                                    <th>{{localizeFilter('Order', 'ThirdProductsTitle')}}</th>
                                                    <td>Flat rate: {{ShippingCost}} тг.</td>
                                                </tr> -->
                                                <tr>
                                                    <th>{{localizeFilter('Order', 'FourthProductsTitle')}}</th>
                                                    <td><strong>{{TotalPrice()}} тг.</strong></td>
                                                </tr>
                                            </tfoot>
                                        </table>
                                        <!-- End Product Content -->
                                        <div class="border-top border-width-3 border-color-1 pt-3 mb-3">
                                            <!-- Basics Accordion -->
                                            <div id="basicsAccordion1">
                                                <!-- Card -->
                                                <div class="border-bottom border-color-1 border-dotted-bottom">
                                                    <!-- <div class="p-3" id="basicsHeadingOne">
                                                        <div class="custom-control custom-radio">
                                                            <input type="radio" class="custom-control-input" id="stylishRadio1" name="stylishRadio" checked>
                                                            <label class="custom-control-label form-label" for="stylishRadio1"
                                                                data-toggle="collapse"
                                                                data-target="#basicsCollapseOnee"
                                                                aria-expanded="true"
                                                                aria-controls="basicsCollapseOnee">
                                                                {{localizeFilter('Order', 'TransferVariations', 'FirstVariationTitle')}}
                                                            </label>
                                                        </div>
                                                    </div> -->
                                                    <div id="basicsCollapseOnee" class="collapse show border-top border-color-1 border-dotted-top bg-dark-lighter"
                                                        aria-labelledby="basicsHeadingOne"
                                                        data-parent="#basicsAccordion1">
                                                        <div class="p-4">
                                                            {{localizeFilter('Order', 'TransferVariations', 'FirstVariationText')}}
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- End Card -->

                                                <!-- Card -->
                                                <!-- <div class="border-bottom border-color-1 border-dotted-bottom">
                                                    <div class="p-3" id="basicsHeadingTwo">
                                                        <div class="custom-control custom-radio">
                                                            <input type="radio" class="custom-control-input" id="secondStylishRadio1" name="stylishRadio">
                                                            <label class="custom-control-label form-label" for="secondStylishRadio1"
                                                                data-toggle="collapse"
                                                                data-target="#basicsCollapseTwo"
                                                                aria-expanded="false"
                                                                aria-controls="basicsCollapseTwo">
                                                                {{localizeFilter('Order', 'TransferVariations', 'SecondVariationTitle')}}
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div id="basicsCollapseTwo" class="collapse border-top border-color-1 border-dotted-top bg-dark-lighter"
                                                        aria-labelledby="basicsHeadingTwo"
                                                        data-parent="#basicsAccordion1">
                                                        <div class="p-4">
                                                            {{localizeFilter('Order', 'TransferVariations', 'SecondVariationText')}}
                                                        </div>
                                                    </div>
                                                </div> -->
                                                <!-- End Card -->

                                                <!-- Card -->
                                                <div class="border-bottom border-color-1 border-dotted-bottom">
                                                    <div class="p-3" id="basicsHeadingThree">
                                                        <div class="custom-control custom-radio">
                                                            <input type="radio" class="custom-control-input" id="thirdstylishRadio1" name="stylishRadio">
                                                            <label class="custom-control-label form-label" for="thirdstylishRadio1"
                                                                data-toggle="collapse"
                                                                data-target="#basicsCollapseThree"
                                                                aria-expanded="false"
                                                                aria-controls="basicsCollapseThree">
                                                                {{localizeFilter('Order', 'TransferVariations', 'ThirdVariationTitle')}}
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div id="basicsCollapseThree" class="collapse border-top border-color-1 border-dotted-top bg-dark-lighter"
                                                        aria-labelledby="basicsHeadingThree"
                                                        data-parent="#basicsAccordion1">
                                                        <div class="p-4">
                                                            {{localizeFilter('Order', 'TransferVariations', 'ThirdVariationText')}}
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- End Card -->

                                                <!-- Card -->
                                                <div class="border-bottom border-color-1 border-dotted-bottom">
                                                    <div class="p-3" id="basicsHeadingFour">
                                                        <div class="custom-control custom-radio">
                                                            <input type="radio" class="custom-control-input" id="FourstylishRadio1" name="stylishRadio">
                                                            <label class="custom-control-label form-label" for="FourstylishRadio1"
                                                                data-toggle="collapse"
                                                                data-target="#basicsCollapseFour"
                                                                aria-expanded="false"
                                                                aria-controls="basicsCollapseFour">
                                                                {{localizeFilter('Order', 'TransferVariations', 'FourthVariationTitle')}} <div class="text-blue">{{localizeFilter('Order', 'TransferVariations', 'FourthVariationQuestion')}}</div>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div id="basicsCollapseFour" class="collapse border-top border-color-1 border-dotted-top bg-dark-lighter"
                                                        aria-labelledby="basicsHeadingFour"
                                                        data-parent="#basicsAccordion1">
                                                        <div class="p-4">
                                                            {{localizeFilter('Order', 'TransferVariations', 'FourthVariationText')}}
                                                        </div>
                                                    </div>
                                                </div>
                                                <!-- End Card -->
                                            </div>
                                            <!-- End Basics Accordion -->
                                        </div>
                                        <div class="form-group d-flex align-items-center justify-content-between px-3 mb-5">
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox">
                                                <label class="form-check-label form-label">
                                                    {{localizeFilter('Order', 'TransferVariations', 'AgreedTermsTitle')}}<NuxtLink to="/terms" class="text-blue"> {{localizeFilter('Order', 'TransferVariations', 'AgreedTermsLinkToTermsPage')}}</NuxtLink>{{'\xa0'}}<span class="text-danger">*</span>
                                                </label>
                                            </div>
                                        </div>
                                        <a v-if="LinkActive" @click='Ship' target="_blank" rel="nofollow noopener noreferrer" :href="PayLink()"><button class="btn btn-primary-dark-w btn-block btn-pill font-size-20 mb-3 py-3">{{localizeFilter('Order', 'TransferVariations', 'SuccessButtonText')}}</button></a>
                                    </div>
                                    <!-- End Order Summary -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <!-- ========== END MAIN CONTENT ========== -->
    </div>
</template>

<script>
import loader from "../js/vue-ui-preloader/src/components/loaders/dots.vue";
import axios from 'axios'
import CryptoJS from 'crypto-js'
import Swal from 'sweetalert2'
export default {
    data(){
        return{
            Component: "CheckoutPage",
            items: null,
            LinkActive: false,
            ShippingCost: 3000,
            pg_order_id: Math.floor(Math.random() * 100000),
            pg_merchant_id: 533272,
            pg_description: "Product",
            pg_language: "en",
            pg_salt: "SALT PAPER",
            info: {
                FName: '',
                SName: '',
                CompanyName: '',
                Country: '',
                Adress: '',
                City: '',
                Postcode: '',
                Email: '',
                Phone: ''
            },
            loaderM: false
        }
    },
    components: {
        loader
    },
    beforeMount(){
        this.items = this.$store.state.cart
    },
    mounted(){
        setTimeout(() => {
            window.scrollTo(0, 0)
        }, 1000);
        setTimeout(() => {
            this.LinkActive = true
        }, 100);
        $(document).on('ready', function () {
        // initialization of forms
        $.HSCore.components.HSFocusState.init();

        $('#headerSidebarList [data-toggle="collapse"]').on('click', function (e) {
            e.preventDefault();

            var target = $(this).data('target');

            if($(this).attr('aria-expanded') === "true") {
                $(target).collapse('hide');
            } else {
                $(target).collapse('show');
            }
        });
        })
    },
    methods: {
        Ship(e){
            if(this.items.cart.length > 0){
                var self = this
                var but = document.querySelector('.form-check-input').checked
                if(document.querySelectorAll('input[name="stylishRadio"]:checked').length > 0){
                    if(document.querySelectorAll('input[name="stylishRadio"]:checked')[0].id != 'FourstylishRadio1'){
                        e.preventDefault()
                        if(this.info.Adress && this.info.Phone && this.info.Email && this.info.FName && this.info.SName) {
                            if(but) {
                                var filteredCart = JSON.parse(JSON.stringify(self.items.cart))
                                for(var el = 0; el < filteredCart.length ; el++) {
                                    filteredCart[el] = {
                                        kaspi_id: filteredCart[el].offerData.kaspi_id,
                                        count: filteredCart[el].offerData.count
                                    }
                                }
                                console.log(filteredCart)
                                var checkout = {
                                    address: this.info.Adress, // адрес доставки
                                    phoneNumber: this.info.Phone, // номер телефона
                                    email: this.info.Email, // почта
                                    goods: filteredCart,
                                    name: this.info.FName + ' ' + this.info.SName, // имя
                                    paymentMethod: 'cash', // способ оплаты, enum: 'card', 'cash' default: 'cash'
                                }
                                this.loaderM = true
                                axios.post('https://textforeva.ru/order', checkout)
                                .then(response => {
                                    console.log(response)
                                    self.loaderM = true
                                    Swal.fire(
                                        'Success!',
                                        'Your order has been created!',
                                        'success'
                                    )
                                    self.$store.commit('cart/clear')
                                    self.$router.push('/')
                                })
                                .catch(error => {
                                    console.log(error);
                                })
                            } else {
                                Swal.fire(
                                    'Error!',
                                    'Please, agree with Terms And Conditions',
                                    'error'
                                )
                            }
                        } else {
                            Swal.fire(
                                'Error!',
                                'Please, write down all the information!',
                                'error'
                            )
                        }
                    } else {
                        if(!but) {
                            e.preventDefault()
                            Swal.fire(
                                'Error!',
                                'Please, agree with Terms And Conditions',
                                'error'
                            )
                            return
                        }
                        if(this.info.Adress && this.info.Phone && this.info.Email && this.info.FName && this.info.SName) {
                        } else {
                            e.preventDefault()
                            Swal.fire(
                                'Error!',
                                'Please, write down all the information!',
                                'error'
                            )
                        }
                    }
                } else {
                    e.preventDefault()
                    Swal.fire(
                        'Error!',
                        'Please, choose the paying variant!',
                        'error'
                    )
                }
            } else {
                e.preventDefault()
                Swal.fire(
                    'Error!',
                    'You forgot to add products to your cart!',
                    'error'
                )
            }
        },
        localizeFilter(key, key2, key3) {
            if(key3) return this.$store.state.lang.locales?.[this.$store.state.lang.lang]?.[this.Component]?.[key]?.[key2]?.[key3] || ``
            else if(key2) return this.$store.state.lang.locales?.[this.$store.state.lang.lang]?.[this.Component]?.[key]?.[key2]|| ``
            else return this.$store.state.lang.locales?.[this.$store.state.lang.lang]?.[this.Component]?.[key] || ``
        },
        TotalPrice(){
            if(process.browser){
                var total = this.$store?.state?.cart?.cart?.reduce((accumulator, item) => accumulator + Number(item.offerData.price) * Number(item.offerData.count),0)
                return total || 0
            }
        },
        PayLink(){
            var sign = this.makeSignature()
            return `https://api.paybox.money/payment.php?pg_order_id=${this.pg_order_id}&pg_merchant_id=${this.pg_merchant_id}&pg_amount=${this.TotalPrice()}&pg_description=${this.pg_description}&pg_language=${this.$store.state.lang.lang == 'en-US' ? 'en' : 'ru'}&pg_salt=${this.pg_salt}&MyObject=${this.objMake()}&pg_testing_mode=1&pg_sig=${sign}`
        },
        makeSignature() {
            var methodName = 'payment.php'
            var obj = {
                address: "abay 150/230"
            }
            var requestFields = {
                "pg_order_id": this.pg_order_id,
                "pg_merchant_id": this.pg_merchant_id,
                "pg_amount": this.TotalPrice(),
                "pg_description": this.pg_description,
                "pg_language": this.$store.state.lang.lang == 'en-US' ? 'en' : 'ru',
                "pg_salt": this.pg_salt,
                "MyDataObj": this.objMake(),
                "pg_testing_mode": "1"
            };
            //Секретный ключ
            var secretKey = this.getSecretKey(methodName);

            var signature = [methodName];
            // Сортировка по алфавиту
            Object.keys(requestFields).sort().forEach(function(key) {
            if (key != 'pg_sig') {
                signature.push((requestFields[key]));
            }
            });

            var string = signature.join(';') + ';' + secretKey;

            signature = CryptoJS.MD5(string).toString();

            return signature;
        },
        getSecretKey(methodName) {
            //ВСТАВИТЬ КЛЮЧИ
            var secretKey = 'aPVUBJQP7CajiqTi';
            var payoutSecretKey = 'nxr3H2cD7XIKB0w1';
            var payoutMethods = ['reg2reg', 'reg2nonreg', 'payment_status', 'p2p', 'p2p_secure', 'p2p2nonreg', 'p2p2nonreg_foreign'];

            if (payoutMethods.indexOf(methodName) + 1) {
                secretKey = payoutSecretKey;
            }
            return secretKey;
        },
        objMake(){
            var filteredCart = JSON.parse(JSON.stringify(this.items.cart))
            for(var el = 0; el < filteredCart.length ; el++) {
                filteredCart[el] = {
                    kaspi_id: filteredCart[el].offerData.kaspi_id,
                    count: filteredCart[el].offerData.count
                }
            }
            var MyObj = {
                address: this.info.Adress, // адрес доставки
                phoneNumber: this.info.Phone, // номер телефона
                email: this.info.Email, // почта
                goods: filteredCart,
                name: this.info.FName + ' ' + this.info.SName, // имя
                paymentMethod: 'card', // способ оплаты, enum: 'card', 'cash' default: 'cash'
            }
            return JSON.stringify(MyObj)
        }
    },
}
</script>