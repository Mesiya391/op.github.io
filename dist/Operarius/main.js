(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  admin works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/guard/auth.guard */ "./src/app/shared/guard/auth.guard.ts");
/* harmony import */ var _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./verify-email/verify-email.component */ "./src/app/verify-email/verify-email.component.ts");
/* harmony import */ var _forrgot_password_forrgot_password_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./forrgot-password/forrgot-password.component */ "./src/app/forrgot-password/forrgot-password.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _offers_offers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./offers/offers.component */ "./src/app/offers/offers.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/faq/faq.component.ts");
/* harmony import */ var _offers_offer_offer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./offers/offer/offer.component */ "./src/app/offers/offer/offer.component.ts");
/* harmony import */ var _how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./how-it-works/how-it-works.component */ "./src/app/how-it-works/how-it-works.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");
















var routes = [
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: 'faq', component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_10__["FAQComponent"] },
    { path: 'sign-in', component: _signin_signin_component__WEBPACK_IMPORTED_MODULE_14__["SigninComponent"] },
    { path: 'offers', component: _offers_offers_component__WEBPACK_IMPORTED_MODULE_9__["OffersComponent"], canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'new-offer', component: _offers_offer_offer_component__WEBPACK_IMPORTED_MODULE_11__["OfferComponent"], canActivate: [_shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]] },
    { path: 'profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_13__["ProfileComponent"], },
    { path: 'how-it-works', component: _how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_12__["HowItWorksComponent"] },
    { path: 'register-user', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__["SignUpComponent"] },
    { path: 'forgot-password', component: _forrgot_password_forrgot_password_component__WEBPACK_IMPORTED_MODULE_5__["ForgotPasswordComponent"] },
    { path: 'verify-email-address', component: _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_4__["VerifyEmailComponent"] },
    { path: 'user-profile', component: _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_1__["UserProfileComponent"] },
    { path: 'chat', component: _chat_chat_component__WEBPACK_IMPORTED_MODULE_15__["ChatComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n\r\n\r\n<router-outlet></router-outlet>\r\n\r\n\r\n<app-footer></app-footer>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Operarius';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: firebaseConfig, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "firebaseConfig", function() { return firebaseConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_guard_secure_inner_pages_guard_ts_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/guard/secure-inner-pages.guard.ts.guard */ "./src/app/shared/guard/secure-inner-pages.guard.ts.guard.ts");
/* harmony import */ var _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/guard/auth.guard */ "./src/app/shared/guard/auth.guard.ts");
/* harmony import */ var _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signin/signin.component */ "./src/app/signin/signin.component.ts");
/* harmony import */ var _forrgot_password_forrgot_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forrgot-password/forrgot-password.component */ "./src/app/forrgot-password/forrgot-password.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _background_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./background/header.component */ "./src/app/background/header.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _offers_offers_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./offers/offers.component */ "./src/app/offers/offers.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _faq_faq_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./faq/faq.component */ "./src/app/faq/faq.component.ts");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _offers_offer_offer_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./offers/offer/offer.component */ "./src/app/offers/offer/offer.component.ts");
/* harmony import */ var _shared_offer_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./shared/offer.service */ "./src/app/shared/offer.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./how-it-works/how-it-works.component */ "./src/app/how-it-works/how-it-works.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _email_email_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./email/email.component */ "./src/app/email/email.component.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./verify-email/verify-email.component */ "./src/app/verify-email/verify-email.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./user-profile/user-profile.component */ "./src/app/user-profile/user-profile.component.ts");
/* harmony import */ var ngx_chat_ui__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ngx-chat-ui */ "./node_modules/ngx-chat-ui/fesm5/ngx-chat-ui.js");
/* harmony import */ var ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-dropzone-wrapper */ "./node_modules/ngx-dropzone-wrapper/dist/ngx-dropzone-wrapper.es5.js");
/* harmony import */ var _chat_chat_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./chat/chat.component */ "./src/app/chat/chat.component.ts");





































var firebaseConfig = {
    apiKey: 'AIzaSyAkJCUFuDBkBO3pKN6I7CwoJyhhfQYaZFw',
    authDomain: 'operarius-3f1cb.firebaseapp.com',
    databaseURL: 'https://operarius-3f1cb.firebaseio.com',
    projectId: 'operarius-3f1cb',
    storageBucket: 'operarius-3f1cb.appspot.com',
    messagingSenderId: '680782784545',
    appId: '1:680782784545:web:a0893c864505ee5f'
};
var DEFAULT_DROPZONE_CONFIG = {
    url: '/',
    acceptedFiles: 'image/*',
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
                _background_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_14__["AdminComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"],
                _offers_offers_component__WEBPACK_IMPORTED_MODULE_16__["OffersComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"],
                _faq_faq_component__WEBPACK_IMPORTED_MODULE_20__["FAQComponent"],
                _offers_offer_offer_component__WEBPACK_IMPORTED_MODULE_22__["OfferComponent"],
                _how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_25__["HowItWorksComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_26__["ProfileComponent"],
                _email_email_component__WEBPACK_IMPORTED_MODULE_27__["EmailComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_30__["SignUpComponent"],
                _forrgot_password_forrgot_password_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"],
                _signin_signin_component__WEBPACK_IMPORTED_MODULE_3__["SigninComponent"],
                _verify_email_verify_email_component__WEBPACK_IMPORTED_MODULE_31__["VerifyEmailComponent"],
                _user_profile_user_profile_component__WEBPACK_IMPORTED_MODULE_33__["UserProfileComponent"],
                _chat_chat_component__WEBPACK_IMPORTED_MODULE_36__["ChatComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_21__["environment"].firebaseConfig),
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestoreModule"],
                ngx_chat_ui__WEBPACK_IMPORTED_MODULE_34__["NgxChatUiModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_32__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_17__["NgbModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_18__["DataTablesModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_24__["ToastrModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot([
                    {
                        path: 'admin',
                        component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_14__["AdminComponent"]
                    },
                    {
                        path: '',
                        component: _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"]
                    },
                    {
                        path: 'new-offer',
                        component: _offers_offer_offer_component__WEBPACK_IMPORTED_MODULE_22__["OfferComponent"]
                    }
                ])
            ],
            providers: [_shared_offer_service__WEBPACK_IMPORTED_MODULE_23__["OfferService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_10__["AngularFirestore"], _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_29__["AuthService"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_28__["AngularFireAuth"], _shared_guard_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"], _shared_guard_secure_inner_pages_guard_ts_guard__WEBPACK_IMPORTED_MODULE_1__["SecureInnerPagesGuard"], {
                    provide: ngx_dropzone_wrapper__WEBPACK_IMPORTED_MODULE_35__["DROPZONE_CONFIG"],
                    useValue: DEFAULT_DROPZONE_CONFIG
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
                _background_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/background/header.component.css":
/*!*************************************************!*\
  !*** ./src/app/background/header.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JhY2tncm91bmQvaGVhZGVyLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/background/header.component.html":
/*!**************************************************!*\
  !*** ./src/app/background/header.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header>\r\n</header>\r\n"

/***/ }),

/***/ "./src/app/background/header.component.ts":
/*!************************************************!*\
  !*** ./src/app/background/header.component.ts ***!
  \************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/background/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/background/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/chat/chat.component.html":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Select Action Payload</h2>\n<ngx-chat-ui-container\n  chatKey=\"demoSelect\"\n  [state]=\"state.demoSelect\"\n  [partners]=\"partners\"\n  [messages]=\"messages.demoSelect\"\n  (response)=\"onResponse('demoSelect', $event)\"\n></ngx-chat-ui-container>\n\n<h2>Text Action Payload</h2>\n<ngx-chat-ui-container\n  chatKey=\"demoText\"\n  [state]=\"state.demoText\"\n  [partners]=\"partners\"\n  [messages]=\"messages.demoText\"\n  (response)=\"onResponse('demoText', $event)\"\n></ngx-chat-ui-container>\n\n<h2>List Action Payload</h2>\n<ngx-chat-ui-container\n  chatKey=\"demoList\"\n  [state]=\"state.demoList\"\n  [partners]=\"partners\"\n  [messages]=\"messages.demoList\"\n  (response)=\"onResponse('demoList', $event)\"\n></ngx-chat-ui-container>\n\n<h2>Autocomplete Action Payload</h2>\n<ngx-chat-ui-container\n  chatKey=\"demoAutocomplete\"\n  [state]=\"state.demoAutocomplete\"\n  [partners]=\"partners\"\n  [messages]=\"messages.demoAutocomplete\"\n  (response)=\"onResponse('demoAutocomplete', $event)\"\n  [callbacks]=\"callbacks.demoAutocomplete\"\n></ngx-chat-ui-container>\n\n<h2>Upload Action Payload</h2>\n<ngx-chat-ui-container\n  chatKey=\"demoUpload\"\n  [state]=\"state.demoUpload\"\n  [partners]=\"partners\"\n  [messages]=\"messages.demoUpload\"\n  (response)=\"onResponse('demoUpload', $event)\"\n  [callbacks]=\"callbacks.demoUpload\"\n></ngx-chat-ui-container>"

/***/ }),

/***/ "./src/app/chat/chat.component.scss":
/*!******************************************!*\
  !*** ./src/app/chat/chat.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\nngx-chat-ui-container {\n  flex: 1 0 auto;\n  display: flex;\n  flex-direction: column; }\nngx-chat-ui-message-list {\n  flex: 1 1 auto;\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  padding: 20px 20px 0; }\nngx-chat-ui-message-item {\n  margin-left: 20%;\n  margin-bottom: 20px;\n  background-color: #f0f9ff;\n  border-radius: 4px;\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n  padding: 7px 10px;\n  position: relative; }\nngx-chat-ui-message-item .ngx-chat-ui-action-select-item-icon {\n    font-size: 20px; }\nngx-chat-ui-message-item:before {\n    content: '';\n    position: absolute;\n    right: -5px;\n    bottom: 5px;\n    width: 0;\n    height: 0;\n    border-style: solid;\n    border-width: 5px 0 5px 5px;\n    border-color: transparent transparent transparent #f0f9ff; }\nngx-chat-ui-message-item ngx-chat-ui-message-meta {\n    right: 5px; }\nngx-chat-ui-message-item ngx-chat-ui-message-partner {\n    left: -35px; }\nngx-chat-ui-message-item.ngx-chat-ui-message-item-incoming {\n    margin-left: 0;\n    margin-right: 20%;\n    background-color: #ffffff; }\nngx-chat-ui-message-item.ngx-chat-ui-message-item-incoming:before {\n      right: auto;\n      left: -5px;\n      border-width: 5px 5px 5px 0;\n      border-color: transparent #ffffff transparent transparent; }\nngx-chat-ui-message-item.ngx-chat-ui-message-item-incoming ngx-chat-ui-message-meta {\n      left: 5px;\n      right: auto; }\nngx-chat-ui-message-item.ngx-chat-ui-message-item-incoming ngx-chat-ui-message-partner {\n      right: -35px;\n      left: auto; }\n.ngx-chat-ui-message-spacer {\n  flex: 1 0 auto; }\n.ngx-chat-ui-message-typing {\n  height: 20px;\n  width: 100%;\n  overflow: hidden;\n  text-indent: -1000px;\n  background-size: 50px 40px;\n  background: no-repeat url(data:image/svg+xml;base64,PHN2ZyBjbGFzcz0ibGRzLW1lc3NhZ2UiIHdpZHRoPSI2MHB4IiBoZWlnaHQ9IjEycHgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHZpZXdCb3g9IjAgMCA2MCAxMiIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYgNikiPg0KPGNpcmNsZSBjeD0iMCIgY3k9IjAiIHI9IjYiIGZpbGw9IiM5MjkyOTIiIHRyYW5zZm9ybT0ic2NhbGUoMC45NzUyMjQgMC45NzUyMjQpIj4NCiAgPGFuaW1hdGVUcmFuc2Zvcm0gYXR0cmlidXRlTmFtZT0idHJhbnNmb3JtIiB0eXBlPSJzY2FsZSIgYmVnaW49Ii0wLjM3NXMiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9IjAuMyAwIDAuNyAxOzAuMyAwIDAuNyAxIiB2YWx1ZXM9IjA7MTswIiBrZXlUaW1lcz0iMDswLjU7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT4NCjwvY2lyY2xlPg0KPC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIyIDYpIj4NCjxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSI2IiBmaWxsPSIjOTI5MjkyIiB0cmFuc2Zvcm09InNjYWxlKDAuNzI2NDI2IDAuNzI2NDI2KSI+DQogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGJlZ2luPSItMC4yNXMiIGNhbGNNb2RlPSJzcGxpbmUiIGtleVNwbGluZXM9IjAuMyAwIDAuNyAxOzAuMyAwIDAuNyAxIiB2YWx1ZXM9IjA7MTswIiBrZXlUaW1lcz0iMDswLjU7MSIgZHVyPSIxcyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZVRyYW5zZm9ybT4NCjwvY2lyY2xlPg0KPC9nPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM4IDYpIj4NCjxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSI2IiBmaWxsPSIjOTI5MjkyIiB0cmFuc2Zvcm09InNjYWxlKDAuMzcwOTA0IDAuMzcwOTA0KSI+DQogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGJlZ2luPSItMC4xMjVzIiBjYWxjTW9kZT0ic3BsaW5lIiBrZXlTcGxpbmVzPSIwLjMgMCAwLjcgMTswLjMgMCAwLjcgMSIgdmFsdWVzPSIwOzE7MCIga2V5VGltZXM9IjA7MC41OzEiIGR1cj0iMXMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGVUcmFuc2Zvcm0+DQo8L2NpcmNsZT4NCjwvZz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSg1NCA2KSI+DQo8Y2lyY2xlIGN4PSIwIiBjeT0iMCIgcj0iNiIgZmlsbD0iIzkyOTI5MiIgdHJhbnNmb3JtPSJzY2FsZSgwLjA3ODkzOTcgMC4wNzg5Mzk3KSI+DQogIDxhbmltYXRlVHJhbnNmb3JtIGF0dHJpYnV0ZU5hbWU9InRyYW5zZm9ybSIgdHlwZT0ic2NhbGUiIGJlZ2luPSIwcyIgY2FsY01vZGU9InNwbGluZSIga2V5U3BsaW5lcz0iMC4zIDAgMC43IDE7MC4zIDAgMC43IDEiIHZhbHVlcz0iMDsxOzAiIGtleVRpbWVzPSIwOzAuNTsxIiBkdXI9IjFzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlVHJhbnNmb3JtPg0KPC9jaXJjbGU+DQo8L2c+PC9zdmc+); }\nngx-chat-ui-message-partner {\n  overflow: hidden;\n  width: 24px;\n  height: 24px;\n  line-height: 24px;\n  position: absolute;\n  border-radius: 50%;\n  background-color: #e1e1e1;\n  margin-top: -3px;\n  text-align: center;\n  font-size: 12px;\n  font-weight: bold; }\nngx-chat-ui-message-partner img {\n    display: block;\n    width: 24px;\n    height: 24px; }\nngx-chat-ui-message-meta {\n  position: absolute;\n  font-size: 10px;\n  color: #888888;\n  bottom: -17px; }\n.ngx-chat-ui-action-select-frame {\n  display: flex;\n  padding: 15px 20px; }\n.ngx-chat-ui-action-select-frame.ngx-chat-ui-action-select-button .ngx-chat-ui-action-select-items {\n    display: flex;\n    align-items: center; }\n.ngx-chat-ui-action-select-frame.ngx-chat-ui-action-select-button ngx-chat-ui-action-select-item {\n    margin-left: 20px; }\n.ngx-chat-ui-action-select-frame.ngx-chat-ui-action-select-button ngx-chat-ui-action-select-item a {\n      text-decoration: none;\n      color: #000000; }\n.ngx-chat-ui-action-select-frame.ngx-chat-ui-action-select-button ngx-chat-ui-action-select-item .ngx-chat-ui-action-select-item-cta,\n    .ngx-chat-ui-action-select-frame.ngx-chat-ui-action-select-button ngx-chat-ui-action-select-item .ngx-chat-ui-action-select-item-secondary {\n      font-size: 24px;\n      line-height: 44px;\n      padding: 7px 20px;\n      background-color: #97D2FF;\n      border-radius: 22px;\n      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); }\n.ngx-chat-ui-action-select-frame.ngx-chat-ui-action-select-button ngx-chat-ui-action-select-item .ngx-chat-ui-action-select-item-cta:hover,\n      .ngx-chat-ui-action-select-frame.ngx-chat-ui-action-select-button ngx-chat-ui-action-select-item .ngx-chat-ui-action-select-item-secondary:hover {\n        background-color: #7ec7ff; }\n.ngx-chat-ui-action-select-frame.ngx-chat-ui-action-select-button ngx-chat-ui-action-select-item .ngx-chat-ui-action-select-item-secondary {\n      background-color: #97ffa4; }\n.ngx-chat-ui-action-select-frame.ngx-chat-ui-action-select-button ngx-chat-ui-action-select-item .ngx-chat-ui-action-select-item-secondary:hover {\n        background-color: #7eff8e; }\n.ngx-chat-ui-action-select-frame.ngx-chat-ui-action-select-hidden {\n    display: none; }\n.ngx-chat-ui-action-select-frame.ngx-chat-ui-action-select-list .ngx-chat-ui-action-select-items {\n    width: 100%; }\n@media (min-width: 500px) {\n      .ngx-chat-ui-action-select-frame.ngx-chat-ui-action-select-list .ngx-chat-ui-action-select-items {\n        width: 60%; } }\n.ngx-chat-ui-action-select-frame.ngx-chat-ui-action-select-list ngx-chat-ui-action-select-item {\n    margin-bottom: 15px;\n    display: block; }\n.ngx-chat-ui-action-select-frame.ngx-chat-ui-action-select-list ngx-chat-ui-action-select-item:last-child {\n      margin-bottom: 0; }\n.ngx-chat-ui-action-select-frame.ngx-chat-ui-action-select-list ngx-chat-ui-action-select-item a {\n      display: block;\n      background-color: #ffffff;\n      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n      text-decoration: none;\n      color: #000000;\n      padding: 7px 15px; }\n.ngx-chat-ui-action-select-frame.ngx-chat-ui-action-select-list ngx-chat-ui-action-select-item a:hover {\n        background-color: #eeeeee; }\nngx-chat-ui-action-text {\n  padding: 15px 20px;\n  display: block; }\nngx-chat-ui-action-text form {\n    display: flex; }\nngx-chat-ui-action-text form input {\n      flex: 1 0 auto;\n      padding: 0 20px;\n      background-color: #ffffff;\n      border-radius: 16px;\n      box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);\n      border: 0;\n      outline: none; }\nngx-chat-ui-action-text form button {\n      font-size: 18px;\n      line-height: 18px;\n      width: 32px;\n      padding: 7px;\n      background-color: #97D2FF;\n      border-radius: 22px;\n      border: 0;\n      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n      margin-left: 15px;\n      outline: none;\n      cursor: pointer; }\nngx-chat-ui-action-text form button:before {\n        content: '✔'; }\nngx-chat-ui-action-text form button:hover {\n        background-color: #7ec7ff; }\nngx-chat-ui-action-autocomplete {\n  padding: 15px 20px;\n  display: block; }\nngx-chat-ui-action-autocomplete .ngx-chat-ui-action-autocomplete-tags {\n    margin: -5px -5px 5px -5px; }\nngx-chat-ui-action-autocomplete .ngx-chat-ui-action-autocomplete-tags .ngx-chat-ui-action-autocomplete-tags-item {\n      position: relative;\n      padding-right: 18px;\n      margin: 5px;\n      display: inline-block; }\nngx-chat-ui-action-autocomplete .ngx-chat-ui-action-autocomplete-tags .ngx-chat-ui-action-autocomplete-tags-item .ngx-chat-ui-action-autocomplete-tags-item-remove {\n        position: absolute;\n        right: 0;\n        top: 4px;\n        display: block;\n        font-size: 10px;\n        line-height: 10px;\n        text-align: center;\n        text-decoration: none; }\nngx-chat-ui-action-autocomplete .ngx-chat-ui-action-autocomplete-tags .ngx-chat-ui-action-autocomplete-tags-item .ngx-chat-ui-action-autocomplete-tags-item-remove:before {\n          content: '❌'; }\nngx-chat-ui-action-autocomplete .ngx-chat-ui-action-autocomplete-picker {\n    display: flex; }\nngx-chat-ui-action-autocomplete .ngx-chat-ui-action-autocomplete-picker ng-autocomplete {\n      flex: 1 0 auto;\n      width: auto; }\nngx-chat-ui-action-autocomplete .ngx-chat-ui-action-autocomplete-picker ng-autocomplete .autocomplete-container {\n        box-shadow: none;\n        height: auto; }\nngx-chat-ui-action-autocomplete .ngx-chat-ui-action-autocomplete-picker ng-autocomplete .suggestions-container {\n        bottom: 37px; }\nngx-chat-ui-action-autocomplete .ngx-chat-ui-action-autocomplete-picker ng-autocomplete .not-found {\n        display: none; }\nngx-chat-ui-action-autocomplete .ngx-chat-ui-action-autocomplete-picker ng-autocomplete input {\n        padding: 0 20px !important;\n        background-color: #ffffff;\n        border-radius: 16px;\n        box-shadow: 0 0 3px rgba(0, 0, 0, 0.2) !important;\n        border: 0;\n        outline: none;\n        line-height: 32px !important;\n        height: 32px !important; }\nngx-chat-ui-action-autocomplete .ngx-chat-ui-action-autocomplete-picker button {\n      font-size: 18px;\n      line-height: 18px;\n      width: 32px;\n      padding: 7px;\n      background-color: #97D2FF;\n      border-radius: 22px;\n      border: 0;\n      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n      margin-left: 15px;\n      outline: none;\n      cursor: pointer; }\nngx-chat-ui-action-autocomplete .ngx-chat-ui-action-autocomplete-picker button:before {\n        content: '✔'; }\nngx-chat-ui-action-autocomplete .ngx-chat-ui-action-autocomplete-picker button:hover {\n        background-color: #7ec7ff; }\nngx-chat-ui-action-upload {\n  padding: 15px 20px;\n  display: block; }\nngx-chat-ui-action-upload .ngx-chat-ui-action-upload-uploading {\n    pointer-events: none;\n    position: relative; }\nngx-chat-ui-action-upload .ngx-chat-ui-action-upload-uploading:after {\n      content: '';\n      background-color: rgba(241, 241, 241, 0.4);\n      position: absolute;\n      left: 0;\n      top: 0;\n      right: 0;\n      bottom: 0; }\nngx-chat-ui-action-upload .ngx-chat-ui-action-upload-dropzone {\n    display: flex; }\nngx-chat-ui-action-upload .ngx-chat-ui-action-upload-dropzone .dz-preview {\n      display: none; }\nngx-chat-ui-action-upload .ngx-chat-ui-action-upload-dropzone .dropzone {\n      flex: 1 0 auto;\n      background-color: #ffffff;\n      border: 1px dotted #cccccc;\n      padding: 7px;\n      text-align: center;\n      cursor: pointer; }\nngx-chat-ui-action-upload .ngx-chat-ui-action-upload-dropzone button {\n      font-size: 18px;\n      line-height: 18px;\n      width: 32px;\n      padding: 7px;\n      background-color: #97D2FF;\n      border-radius: 22px;\n      border: 0;\n      box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n      margin-left: 15px;\n      outline: none;\n      cursor: pointer; }\nngx-chat-ui-action-upload .ngx-chat-ui-action-upload-dropzone button:before {\n        content: '✔'; }\nngx-chat-ui-action-upload .ngx-chat-ui-action-upload-dropzone button:hover {\n        background-color: #7ec7ff; }\nngx-chat-ui-action-upload .ngx-chat-ui-action-upload-files {\n    display: flex;\n    flex-wrap: wrap;\n    margin: -5px -5px 5px -5px; }\nngx-chat-ui-action-upload .ngx-chat-ui-action-upload-files .ngx-chat-ui-action-upload-files-item {\n      overflow: hidden;\n      position: relative;\n      margin: 5px;\n      background-color: #ffffff;\n      box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);\n      padding: 5px; }\nngx-chat-ui-action-upload .ngx-chat-ui-action-upload-files .ngx-chat-ui-action-upload-files-item .ngx-chat-ui-action-upload-files-item-image {\n        width: 40px;\n        height: 40px;\n        background: no-repeat 50% 50%;\n        background-size: contain; }\nngx-chat-ui-action-upload .ngx-chat-ui-action-upload-files .ngx-chat-ui-action-upload-files-item .ngx-chat-ui-action-upload-files-item-remove {\n        position: absolute;\n        right: 5px;\n        top: 5px;\n        display: block;\n        font-size: 10px;\n        line-height: 10px;\n        text-align: center;\n        text-decoration: none; }\nngx-chat-ui-action-upload .ngx-chat-ui-action-upload-files .ngx-chat-ui-action-upload-files-item .ngx-chat-ui-action-upload-files-item-remove:before {\n          content: '❌'; }\nngx-chat-ui-message-payload-upload {\n  display: flex;\n  flex-wrap: wrap;\n  margin: -2px -5px; }\nngx-chat-ui-message-payload-upload .ngx-chat-ui-message-payload-upload-files-item {\n    display: block;\n    overflow: hidden;\n    position: relative;\n    margin: 5px;\n    background-color: #ffffff;\n    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);\n    padding: 5px; }\nngx-chat-ui-message-payload-upload .ngx-chat-ui-message-payload-upload-files-item .ngx-chat-ui-message-payload-upload-files-item-image {\n      width: 40px;\n      height: 40px;\n      background: no-repeat 50% 50%;\n      background-size: contain; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9jaGF0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jaGF0L0M6XFxVc2Vyc1xcTWVzaXlhMzkxXFxEZXNrdG9wXFxvcGVyYVxcT3BlcmFyaXVzXFxPcGVyYXJpdXMvbm9kZV9tb2R1bGVzXFxuZ3gtY2hhdC11aVxcc3JjXFx0aGVtZXNcXGRlZmF1bHRcXHN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0JBQXNCLEVBQUE7QUFHeEI7RUFDRSxjQUFjO0VBQ2QsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsb0JBQW9CLEVBQUE7QUFHdEI7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsc0NBQXFDO0VBQ3JDLGlCQUFpQjtFQUNqQixrQkFBa0IsRUFBQTtBQVBwQjtJQVVJLGVBQWUsRUFBQTtBQVZuQjtJQWNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFdBQVc7SUFDWCxRQUFRO0lBQ1IsU0FBUztJQUNULG1CQUFtQjtJQUNuQiwyQkFBMkI7SUFDM0IseURBQXlELEVBQUE7QUF0QjdEO0lBMEJJLFVBQVUsRUFBQTtBQTFCZDtJQThCSSxXQUFXLEVBQUE7QUE5QmY7SUFrQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQix5QkFBeUIsRUFBQTtBQXBDN0I7TUF1Q00sV0FBVztNQUNYLFVBQVU7TUFDViwyQkFBMkI7TUFDM0IseURBQXlELEVBQUE7QUExQy9EO01BOENNLFNBQVM7TUFDVCxXQUFXLEVBQUE7QUEvQ2pCO01BbURNLFlBQVk7TUFDWixVQUFVLEVBQUE7QUFLaEI7RUFDRSxjQUFjLEVBQUE7QUFHaEI7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsMEJBQTBCO0VBQzFCLDZtRUFBNm1FLEVBQUE7QUFHL21FO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGlCQUFpQixFQUFBO0FBWG5CO0lBY0ksY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZLEVBQUE7QUFJaEI7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxhQUFhLEVBQUE7QUFHZjtFQUNFLGFBQWE7RUFDYixrQkFBa0IsRUFBQTtBQUZwQjtJQU1NLGFBQWE7SUFDYixtQkFBbUIsRUFBQTtBQVB6QjtJQVdNLGlCQUFpQixFQUFBO0FBWHZCO01BY1EscUJBQXFCO01BQ3JCLGNBQWMsRUFBQTtBQWZ0Qjs7TUFvQlEsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixpQkFBaUI7TUFDakIseUJBQXlCO01BQ3pCLG1CQUFtQjtNQUNuQixzQ0FBcUMsRUFBQTtBQXpCN0M7O1FBNEJVLHlCQUFxQyxFQUFBO0FBNUIvQztNQWlDUSx5QkFBeUIsRUFBQTtBQWpDakM7UUFvQ1UseUJBQXFDLEVBQUE7QUFwQy9DO0lBMkNJLGFBQWEsRUFBQTtBQTNDakI7SUFnRE0sV0FBVyxFQUFBO0FBRVg7TUFsRE47UUFtRFEsVUFBVSxFQUFBLEVBRWI7QUFyREw7SUF3RE0sbUJBQW1CO0lBQ25CLGNBQWMsRUFBQTtBQXpEcEI7TUE0RFEsZ0JBQWdCLEVBQUE7QUE1RHhCO01BZ0VRLGNBQWM7TUFDZCx5QkFBeUI7TUFDekIsc0NBQXFDO01BQ3JDLHFCQUFxQjtNQUNyQixjQUFjO01BQ2QsaUJBQWlCLEVBQUE7QUFyRXpCO1FBd0VVLHlCQUFxQyxFQUFBO0FBTy9DO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTtBQUZoQjtJQUtJLGFBQWEsRUFBQTtBQUxqQjtNQVFNLGNBQWM7TUFDZCxlQUFlO01BQ2YseUJBQXlCO01BQ3pCLG1CQUFtQjtNQUNuQixzQ0FBcUM7TUFDckMsU0FBUztNQUNULGFBQWEsRUFBQTtBQWRuQjtNQWtCTSxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLFdBQVc7TUFDWCxZQUFZO01BQ1oseUJBQXlCO01BQ3pCLG1CQUFtQjtNQUNuQixTQUFTO01BQ1Qsc0NBQXFDO01BQ3JDLGlCQUFpQjtNQUNqQixhQUFhO01BQ2IsZUFBZSxFQUFBO0FBNUJyQjtRQStCUSxZQUFTLEVBQUk7QUEvQnJCO1FBbUNRLHlCQUFxQyxFQUFBO0FBTTdDO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTtBQUZoQjtJQUtJLDBCQUEwQixFQUFBO0FBTDlCO01BUU0sa0JBQWtCO01BQ2xCLG1CQUFtQjtNQUNuQixXQUFXO01BQ1gscUJBQXFCLEVBQUE7QUFYM0I7UUFjUSxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLFFBQVE7UUFDUixjQUFjO1FBQ2QsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIscUJBQXFCLEVBQUE7QUFyQjdCO1VBd0JVLFlBQVMsRUFBSTtBQXhCdkI7SUErQkksYUFBYSxFQUFBO0FBL0JqQjtNQWtDTSxjQUFjO01BQ2QsV0FBVyxFQUFBO0FBbkNqQjtRQXNDUSxnQkFBZ0I7UUFDaEIsWUFBWSxFQUFBO0FBdkNwQjtRQTJDUSxZQUFZLEVBQUE7QUEzQ3BCO1FBK0NRLGFBQWEsRUFBQTtBQS9DckI7UUFtRFEsMEJBQTBCO1FBQzFCLHlCQUF5QjtRQUN6QixtQkFBbUI7UUFDbkIsaURBQWdEO1FBQ2hELFNBQVM7UUFDVCxhQUFhO1FBQ2IsNEJBQTRCO1FBQzVCLHVCQUF1QixFQUFBO0FBMUQvQjtNQStETSxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLFdBQVc7TUFDWCxZQUFZO01BQ1oseUJBQXlCO01BQ3pCLG1CQUFtQjtNQUNuQixTQUFTO01BQ1Qsc0NBQXFDO01BQ3JDLGlCQUFpQjtNQUNqQixhQUFhO01BQ2IsZUFBZSxFQUFBO0FBekVyQjtRQTRFUSxZQUFTLEVBQUk7QUE1RXJCO1FBZ0ZRLHlCQUFxQyxFQUFBO0FBTTdDO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWMsRUFBQTtBQUZoQjtJQUtJLG9CQUFvQjtJQUNwQixrQkFBa0IsRUFBQTtBQU50QjtNQVNNLFdBQVc7TUFDWCwwQ0FBeUM7TUFDekMsa0JBQWtCO01BQ2xCLE9BQU87TUFDUCxNQUFNO01BQ04sUUFBUTtNQUNSLFNBQVMsRUFBQTtBQWZmO0lBb0JJLGFBQWEsRUFBQTtBQXBCakI7TUF1Qk0sYUFBYSxFQUFBO0FBdkJuQjtNQTJCTSxjQUFjO01BQ2QseUJBQXlCO01BQ3pCLDBCQUEwQjtNQUMxQixZQUFZO01BQ1osa0JBQWtCO01BQ2xCLGVBQWUsRUFBQTtBQWhDckI7TUFvQ00sZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixXQUFXO01BQ1gsWUFBWTtNQUNaLHlCQUF5QjtNQUN6QixtQkFBbUI7TUFDbkIsU0FBUztNQUNULHNDQUFxQztNQUNyQyxpQkFBaUI7TUFDakIsYUFBYTtNQUNiLGVBQWUsRUFBQTtBQTlDckI7UUFpRFEsWUFBUyxFQUFJO0FBakRyQjtRQXFEUSx5QkFBcUMsRUFBQTtBQXJEN0M7SUEyREksYUFBYTtJQUNiLGVBQWU7SUFDZiwwQkFBMEIsRUFBQTtBQTdEOUI7TUFnRU0sZ0JBQWdCO01BQ2hCLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gseUJBQXlCO01BQ3pCLHNDQUFxQztNQUNyQyxZQUFZLEVBQUE7QUFyRWxCO1FBd0VRLFdBQVc7UUFDWCxZQUFZO1FBQ1osNkJBQTZCO1FBQzdCLHdCQUF3QixFQUFBO0FBM0VoQztRQStFUSxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLFFBQVE7UUFDUixjQUFjO1FBQ2QsZUFBZTtRQUNmLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEIscUJBQXFCLEVBQUE7QUF0RjdCO1VBeUZVLFlBQVMsRUFBSTtBQU92QjtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsaUJBQWlCLEVBQUE7QUFIbkI7SUFNSSxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHNDQUFxQztJQUNyQyxZQUFZLEVBQUE7QUFaaEI7TUFlTSxXQUFXO01BQ1gsWUFBWTtNQUNaLDZCQUE2QjtNQUM3Qix3QkFBd0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbm5neC1jaGF0LXVpLWNvbnRhaW5lciB7XG4gIGZsZXg6IDEgMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XG5cbm5neC1jaGF0LXVpLW1lc3NhZ2UtbGlzdCB7XG4gIGZsZXg6IDEgMSBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBwYWRkaW5nOiAyMHB4IDIwcHggMDsgfVxuXG5uZ3gtY2hhdC11aS1tZXNzYWdlLWl0ZW0ge1xuICBtYXJnaW4tbGVmdDogMjAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmOWZmO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICBwYWRkaW5nOiA3cHggMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XG4gIG5neC1jaGF0LXVpLW1lc3NhZ2UtaXRlbSAubmd4LWNoYXQtdWktYWN0aW9uLXNlbGVjdC1pdGVtLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjBweDsgfVxuICBuZ3gtY2hhdC11aS1tZXNzYWdlLWl0ZW06YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IC01cHg7XG4gICAgYm90dG9tOiA1cHg7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiA1cHggMCA1cHggNXB4O1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2YwZjlmZjsgfVxuICBuZ3gtY2hhdC11aS1tZXNzYWdlLWl0ZW0gbmd4LWNoYXQtdWktbWVzc2FnZS1tZXRhIHtcbiAgICByaWdodDogNXB4OyB9XG4gIG5neC1jaGF0LXVpLW1lc3NhZ2UtaXRlbSBuZ3gtY2hhdC11aS1tZXNzYWdlLXBhcnRuZXIge1xuICAgIGxlZnQ6IC0zNXB4OyB9XG4gIG5neC1jaGF0LXVpLW1lc3NhZ2UtaXRlbS5uZ3gtY2hhdC11aS1tZXNzYWdlLWl0ZW0taW5jb21pbmcge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogMjAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7IH1cbiAgICBuZ3gtY2hhdC11aS1tZXNzYWdlLWl0ZW0ubmd4LWNoYXQtdWktbWVzc2FnZS1pdGVtLWluY29taW5nOmJlZm9yZSB7XG4gICAgICByaWdodDogYXV0bztcbiAgICAgIGxlZnQ6IC01cHg7XG4gICAgICBib3JkZXItd2lkdGg6IDVweCA1cHggNXB4IDA7XG4gICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50ICNmZmZmZmYgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7IH1cbiAgICBuZ3gtY2hhdC11aS1tZXNzYWdlLWl0ZW0ubmd4LWNoYXQtdWktbWVzc2FnZS1pdGVtLWluY29taW5nIG5neC1jaGF0LXVpLW1lc3NhZ2UtbWV0YSB7XG4gICAgICBsZWZ0OiA1cHg7XG4gICAgICByaWdodDogYXV0bzsgfVxuICAgIG5neC1jaGF0LXVpLW1lc3NhZ2UtaXRlbS5uZ3gtY2hhdC11aS1tZXNzYWdlLWl0ZW0taW5jb21pbmcgbmd4LWNoYXQtdWktbWVzc2FnZS1wYXJ0bmVyIHtcbiAgICAgIHJpZ2h0OiAtMzVweDtcbiAgICAgIGxlZnQ6IGF1dG87IH1cblxuLm5neC1jaGF0LXVpLW1lc3NhZ2Utc3BhY2VyIHtcbiAgZmxleDogMSAwIGF1dG87IH1cblxuLm5neC1jaGF0LXVpLW1lc3NhZ2UtdHlwaW5nIHtcbiAgaGVpZ2h0OiAyMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1pbmRlbnQ6IC0xMDAwcHg7XG4gIGJhY2tncm91bmQtc2l6ZTogNTBweCA0MHB4O1xuICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgdXJsKGRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QmpiR0Z6Y3owaWJHUnpMVzFsYzNOaFoyVWlJSGRwWkhSb1BTSTJNSEI0SWlCb1pXbG5hSFE5SWpFeWNIZ2lJSGh0Ykc1elBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHlNREF3TDNOMlp5SWdlRzFzYm5NNmVHeHBibXM5SW1oMGRIQTZMeTkzZDNjdWR6TXViM0puTHpFNU9Ua3ZlR3hwYm1zaUlIWnBaWGRDYjNnOUlqQWdNQ0EyTUNBeE1pSWdjSEpsYzJWeWRtVkJjM0JsWTNSU1lYUnBiejBpZUUxcFpGbE5hV1FpUGp4bklIUnlZVzV6Wm05eWJUMGlkSEpoYm5Oc1lYUmxLRFlnTmlraVBnMEtQR05wY21Oc1pTQmplRDBpTUNJZ1kzazlJakFpSUhJOUlqWWlJR1pwYkd3OUlpTTVNamt5T1RJaUlIUnlZVzV6Wm05eWJUMGljMk5oYkdVb01DNDVOelV5TWpRZ01DNDVOelV5TWpRcElqNE5DaUFnUEdGdWFXMWhkR1ZVY21GdWMyWnZjbTBnWVhSMGNtbGlkWFJsVG1GdFpUMGlkSEpoYm5ObWIzSnRJaUIwZVhCbFBTSnpZMkZzWlNJZ1ltVm5hVzQ5SWkwd0xqTTNOWE1pSUdOaGJHTk5iMlJsUFNKemNHeHBibVVpSUd0bGVWTndiR2x1WlhNOUlqQXVNeUF3SURBdU55QXhPekF1TXlBd0lEQXVOeUF4SWlCMllXeDFaWE05SWpBN01Uc3dJaUJyWlhsVWFXMWxjejBpTURzd0xqVTdNU0lnWkhWeVBTSXhjeUlnY21Wd1pXRjBRMjkxYm5ROUltbHVaR1ZtYVc1cGRHVWlQand2WVc1cGJXRjBaVlJ5WVc1elptOXliVDROQ2p3dlkybHlZMnhsUGcwS1BDOW5QanhuSUhSeVlXNXpabTl5YlQwaWRISmhibk5zWVhSbEtESXlJRFlwSWo0TkNqeGphWEpqYkdVZ1kzZzlJakFpSUdONVBTSXdJaUJ5UFNJMklpQm1hV3hzUFNJak9USTVNamt5SWlCMGNtRnVjMlp2Y20wOUluTmpZV3hsS0RBdU56STJOREkySURBdU56STJOREkyS1NJK0RRb2dJRHhoYm1sdFlYUmxWSEpoYm5ObWIzSnRJR0YwZEhKcFluVjBaVTVoYldVOUluUnlZVzV6Wm05eWJTSWdkSGx3WlQwaWMyTmhiR1VpSUdKbFoybHVQU0l0TUM0eU5YTWlJR05oYkdOTmIyUmxQU0p6Y0d4cGJtVWlJR3RsZVZOd2JHbHVaWE05SWpBdU15QXdJREF1TnlBeE96QXVNeUF3SURBdU55QXhJaUIyWVd4MVpYTTlJakE3TVRzd0lpQnJaWGxVYVcxbGN6MGlNRHN3TGpVN01TSWdaSFZ5UFNJeGN5SWdjbVZ3WldGMFEyOTFiblE5SW1sdVpHVm1hVzVwZEdVaVBqd3ZZVzVwYldGMFpWUnlZVzV6Wm05eWJUNE5Dand2WTJseVkyeGxQZzBLUEM5blBqeG5JSFJ5WVc1elptOXliVDBpZEhKaGJuTnNZWFJsS0RNNElEWXBJajROQ2p4amFYSmpiR1VnWTNnOUlqQWlJR041UFNJd0lpQnlQU0kySWlCbWFXeHNQU0lqT1RJNU1qa3lJaUIwY21GdWMyWnZjbTA5SW5OallXeGxLREF1TXpjd09UQTBJREF1TXpjd09UQTBLU0krRFFvZ0lEeGhibWx0WVhSbFZISmhibk5tYjNKdElHRjBkSEpwWW5WMFpVNWhiV1U5SW5SeVlXNXpabTl5YlNJZ2RIbHdaVDBpYzJOaGJHVWlJR0psWjJsdVBTSXRNQzR4TWpWeklpQmpZV3hqVFc5a1pUMGljM0JzYVc1bElpQnJaWGxUY0d4cGJtVnpQU0l3TGpNZ01DQXdMamNnTVRzd0xqTWdNQ0F3TGpjZ01TSWdkbUZzZFdWelBTSXdPekU3TUNJZ2EyVjVWR2x0WlhNOUlqQTdNQzQxT3pFaUlHUjFjajBpTVhNaUlISmxjR1ZoZEVOdmRXNTBQU0pwYm1SbFptbHVhWFJsSWo0OEwyRnVhVzFoZEdWVWNtRnVjMlp2Y20wK0RRbzhMMk5wY21Oc1pUNE5Dand2Wno0OFp5QjBjbUZ1YzJadmNtMDlJblJ5WVc1emJHRjBaU2cxTkNBMktTSStEUW84WTJseVkyeGxJR040UFNJd0lpQmplVDBpTUNJZ2NqMGlOaUlnWm1sc2JEMGlJemt5T1RJNU1pSWdkSEpoYm5ObWIzSnRQU0p6WTJGc1pTZ3dMakEzT0Rrek9UY2dNQzR3TnpnNU16azNLU0krRFFvZ0lEeGhibWx0WVhSbFZISmhibk5tYjNKdElHRjBkSEpwWW5WMFpVNWhiV1U5SW5SeVlXNXpabTl5YlNJZ2RIbHdaVDBpYzJOaGJHVWlJR0psWjJsdVBTSXdjeUlnWTJGc1kwMXZaR1U5SW5Od2JHbHVaU0lnYTJWNVUzQnNhVzVsY3owaU1DNHpJREFnTUM0M0lERTdNQzR6SURBZ01DNDNJREVpSUhaaGJIVmxjejBpTURzeE96QWlJR3RsZVZScGJXVnpQU0l3T3pBdU5Uc3hJaUJrZFhJOUlqRnpJaUJ5WlhCbFlYUkRiM1Z1ZEQwaWFXNWtaV1pwYm1sMFpTSStQQzloYm1sdFlYUmxWSEpoYm5ObWIzSnRQZzBLUEM5amFYSmpiR1UrRFFvOEwyYytQQzl6ZG1jKyk7IH1cblxubmd4LWNoYXQtdWktbWVzc2FnZS1wYXJ0bmVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlMWUxO1xuICBtYXJnaW4tdG9wOiAtM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7IH1cbiAgbmd4LWNoYXQtdWktbWVzc2FnZS1wYXJ0bmVyIGltZyB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4OyB9XG5cbm5neC1jaGF0LXVpLW1lc3NhZ2UtbWV0YSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBjb2xvcjogIzg4ODg4ODtcbiAgYm90dG9tOiAtMTdweDsgfVxuXG4ubmd4LWNoYXQtdWktYWN0aW9uLXNlbGVjdC1mcmFtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDE1cHggMjBweDsgfVxuICAubmd4LWNoYXQtdWktYWN0aW9uLXNlbGVjdC1mcmFtZS5uZ3gtY2hhdC11aS1hY3Rpb24tc2VsZWN0LWJ1dHRvbiAubmd4LWNoYXQtdWktYWN0aW9uLXNlbGVjdC1pdGVtcyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XG4gIC5uZ3gtY2hhdC11aS1hY3Rpb24tc2VsZWN0LWZyYW1lLm5neC1jaGF0LXVpLWFjdGlvbi1zZWxlY3QtYnV0dG9uIG5neC1jaGF0LXVpLWFjdGlvbi1zZWxlY3QtaXRlbSB7XG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7IH1cbiAgICAubmd4LWNoYXQtdWktYWN0aW9uLXNlbGVjdC1mcmFtZS5uZ3gtY2hhdC11aS1hY3Rpb24tc2VsZWN0LWJ1dHRvbiBuZ3gtY2hhdC11aS1hY3Rpb24tc2VsZWN0LWl0ZW0gYSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICBjb2xvcjogIzAwMDAwMDsgfVxuICAgIC5uZ3gtY2hhdC11aS1hY3Rpb24tc2VsZWN0LWZyYW1lLm5neC1jaGF0LXVpLWFjdGlvbi1zZWxlY3QtYnV0dG9uIG5neC1jaGF0LXVpLWFjdGlvbi1zZWxlY3QtaXRlbSAubmd4LWNoYXQtdWktYWN0aW9uLXNlbGVjdC1pdGVtLWN0YSxcbiAgICAubmd4LWNoYXQtdWktYWN0aW9uLXNlbGVjdC1mcmFtZS5uZ3gtY2hhdC11aS1hY3Rpb24tc2VsZWN0LWJ1dHRvbiBuZ3gtY2hhdC11aS1hY3Rpb24tc2VsZWN0LWl0ZW0gLm5neC1jaGF0LXVpLWFjdGlvbi1zZWxlY3QtaXRlbS1zZWNvbmRhcnkge1xuICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDQ0cHg7XG4gICAgICBwYWRkaW5nOiA3cHggMjBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5N0QyRkY7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICAgICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuMik7IH1cbiAgICAgIC5uZ3gtY2hhdC11aS1hY3Rpb24tc2VsZWN0LWZyYW1lLm5neC1jaGF0LXVpLWFjdGlvbi1zZWxlY3QtYnV0dG9uIG5neC1jaGF0LXVpLWFjdGlvbi1zZWxlY3QtaXRlbSAubmd4LWNoYXQtdWktYWN0aW9uLXNlbGVjdC1pdGVtLWN0YTpob3ZlcixcbiAgICAgIC5uZ3gtY2hhdC11aS1hY3Rpb24tc2VsZWN0LWZyYW1lLm5neC1jaGF0LXVpLWFjdGlvbi1zZWxlY3QtYnV0dG9uIG5neC1jaGF0LXVpLWFjdGlvbi1zZWxlY3QtaXRlbSAubmd4LWNoYXQtdWktYWN0aW9uLXNlbGVjdC1pdGVtLXNlY29uZGFyeTpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZWM3ZmY7IH1cbiAgICAubmd4LWNoYXQtdWktYWN0aW9uLXNlbGVjdC1mcmFtZS5uZ3gtY2hhdC11aS1hY3Rpb24tc2VsZWN0LWJ1dHRvbiBuZ3gtY2hhdC11aS1hY3Rpb24tc2VsZWN0LWl0ZW0gLm5neC1jaGF0LXVpLWFjdGlvbi1zZWxlY3QtaXRlbS1zZWNvbmRhcnkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk3ZmZhNDsgfVxuICAgICAgLm5neC1jaGF0LXVpLWFjdGlvbi1zZWxlY3QtZnJhbWUubmd4LWNoYXQtdWktYWN0aW9uLXNlbGVjdC1idXR0b24gbmd4LWNoYXQtdWktYWN0aW9uLXNlbGVjdC1pdGVtIC5uZ3gtY2hhdC11aS1hY3Rpb24tc2VsZWN0LWl0ZW0tc2Vjb25kYXJ5OmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzdlZmY4ZTsgfVxuICAubmd4LWNoYXQtdWktYWN0aW9uLXNlbGVjdC1mcmFtZS5uZ3gtY2hhdC11aS1hY3Rpb24tc2VsZWN0LWhpZGRlbiB7XG4gICAgZGlzcGxheTogbm9uZTsgfVxuICAubmd4LWNoYXQtdWktYWN0aW9uLXNlbGVjdC1mcmFtZS5uZ3gtY2hhdC11aS1hY3Rpb24tc2VsZWN0LWxpc3QgLm5neC1jaGF0LXVpLWFjdGlvbi1zZWxlY3QtaXRlbXMge1xuICAgIHdpZHRoOiAxMDAlOyB9XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDUwMHB4KSB7XG4gICAgICAubmd4LWNoYXQtdWktYWN0aW9uLXNlbGVjdC1mcmFtZS5uZ3gtY2hhdC11aS1hY3Rpb24tc2VsZWN0LWxpc3QgLm5neC1jaGF0LXVpLWFjdGlvbi1zZWxlY3QtaXRlbXMge1xuICAgICAgICB3aWR0aDogNjAlOyB9IH1cbiAgLm5neC1jaGF0LXVpLWFjdGlvbi1zZWxlY3QtZnJhbWUubmd4LWNoYXQtdWktYWN0aW9uLXNlbGVjdC1saXN0IG5neC1jaGF0LXVpLWFjdGlvbi1zZWxlY3QtaXRlbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgICBkaXNwbGF5OiBibG9jazsgfVxuICAgIC5uZ3gtY2hhdC11aS1hY3Rpb24tc2VsZWN0LWZyYW1lLm5neC1jaGF0LXVpLWFjdGlvbi1zZWxlY3QtbGlzdCBuZ3gtY2hhdC11aS1hY3Rpb24tc2VsZWN0LWl0ZW06bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwOyB9XG4gICAgLm5neC1jaGF0LXVpLWFjdGlvbi1zZWxlY3QtZnJhbWUubmd4LWNoYXQtdWktYWN0aW9uLXNlbGVjdC1saXN0IG5neC1jaGF0LXVpLWFjdGlvbi1zZWxlY3QtaXRlbSBhIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICBwYWRkaW5nOiA3cHggMTVweDsgfVxuICAgICAgLm5neC1jaGF0LXVpLWFjdGlvbi1zZWxlY3QtZnJhbWUubmd4LWNoYXQtdWktYWN0aW9uLXNlbGVjdC1saXN0IG5neC1jaGF0LXVpLWFjdGlvbi1zZWxlY3QtaXRlbSBhOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZWVlZTsgfVxuXG5uZ3gtY2hhdC11aS1hY3Rpb24tdGV4dCB7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgZGlzcGxheTogYmxvY2s7IH1cbiAgbmd4LWNoYXQtdWktYWN0aW9uLXRleHQgZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDsgfVxuICAgIG5neC1jaGF0LXVpLWFjdGlvbi10ZXh0IGZvcm0gaW5wdXQge1xuICAgICAgZmxleDogMSAwIGF1dG87XG4gICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgb3V0bGluZTogbm9uZTsgfVxuICAgIG5neC1jaGF0LXVpLWFjdGlvbi10ZXh0IGZvcm0gYnV0dG9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgd2lkdGg6IDMycHg7XG4gICAgICBwYWRkaW5nOiA3cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTdEMkZGO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgICBuZ3gtY2hhdC11aS1hY3Rpb24tdGV4dCBmb3JtIGJ1dHRvbjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAn4pyUJzsgfVxuICAgICAgbmd4LWNoYXQtdWktYWN0aW9uLXRleHQgZm9ybSBidXR0b246aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2VjN2ZmOyB9XG5cbm5neC1jaGF0LXVpLWFjdGlvbi1hdXRvY29tcGxldGUge1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG4gIG5neC1jaGF0LXVpLWFjdGlvbi1hdXRvY29tcGxldGUgLm5neC1jaGF0LXVpLWFjdGlvbi1hdXRvY29tcGxldGUtdGFncyB7XG4gICAgbWFyZ2luOiAtNXB4IC01cHggNXB4IC01cHg7IH1cbiAgICBuZ3gtY2hhdC11aS1hY3Rpb24tYXV0b2NvbXBsZXRlIC5uZ3gtY2hhdC11aS1hY3Rpb24tYXV0b2NvbXBsZXRlLXRhZ3MgLm5neC1jaGF0LXVpLWFjdGlvbi1hdXRvY29tcGxldGUtdGFncy1pdGVtIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDE4cHg7XG4gICAgICBtYXJnaW46IDVweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jazsgfVxuICAgICAgbmd4LWNoYXQtdWktYWN0aW9uLWF1dG9jb21wbGV0ZSAubmd4LWNoYXQtdWktYWN0aW9uLWF1dG9jb21wbGV0ZS10YWdzIC5uZ3gtY2hhdC11aS1hY3Rpb24tYXV0b2NvbXBsZXRlLXRhZ3MtaXRlbSAubmd4LWNoYXQtdWktYWN0aW9uLWF1dG9jb21wbGV0ZS10YWdzLWl0ZW0tcmVtb3ZlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdG9wOiA0cHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxuICAgICAgICBuZ3gtY2hhdC11aS1hY3Rpb24tYXV0b2NvbXBsZXRlIC5uZ3gtY2hhdC11aS1hY3Rpb24tYXV0b2NvbXBsZXRlLXRhZ3MgLm5neC1jaGF0LXVpLWFjdGlvbi1hdXRvY29tcGxldGUtdGFncy1pdGVtIC5uZ3gtY2hhdC11aS1hY3Rpb24tYXV0b2NvbXBsZXRlLXRhZ3MtaXRlbS1yZW1vdmU6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiAn4p2MJzsgfVxuICBuZ3gtY2hhdC11aS1hY3Rpb24tYXV0b2NvbXBsZXRlIC5uZ3gtY2hhdC11aS1hY3Rpb24tYXV0b2NvbXBsZXRlLXBpY2tlciB7XG4gICAgZGlzcGxheTogZmxleDsgfVxuICAgIG5neC1jaGF0LXVpLWFjdGlvbi1hdXRvY29tcGxldGUgLm5neC1jaGF0LXVpLWFjdGlvbi1hdXRvY29tcGxldGUtcGlja2VyIG5nLWF1dG9jb21wbGV0ZSB7XG4gICAgICBmbGV4OiAxIDAgYXV0bztcbiAgICAgIHdpZHRoOiBhdXRvOyB9XG4gICAgICBuZ3gtY2hhdC11aS1hY3Rpb24tYXV0b2NvbXBsZXRlIC5uZ3gtY2hhdC11aS1hY3Rpb24tYXV0b2NvbXBsZXRlLXBpY2tlciBuZy1hdXRvY29tcGxldGUgLmF1dG9jb21wbGV0ZS1jb250YWluZXIge1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICBoZWlnaHQ6IGF1dG87IH1cbiAgICAgIG5neC1jaGF0LXVpLWFjdGlvbi1hdXRvY29tcGxldGUgLm5neC1jaGF0LXVpLWFjdGlvbi1hdXRvY29tcGxldGUtcGlja2VyIG5nLWF1dG9jb21wbGV0ZSAuc3VnZ2VzdGlvbnMtY29udGFpbmVyIHtcbiAgICAgICAgYm90dG9tOiAzN3B4OyB9XG4gICAgICBuZ3gtY2hhdC11aS1hY3Rpb24tYXV0b2NvbXBsZXRlIC5uZ3gtY2hhdC11aS1hY3Rpb24tYXV0b2NvbXBsZXRlLXBpY2tlciBuZy1hdXRvY29tcGxldGUgLm5vdC1mb3VuZCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgICAgIG5neC1jaGF0LXVpLWFjdGlvbi1hdXRvY29tcGxldGUgLm5neC1jaGF0LXVpLWFjdGlvbi1hdXRvY29tcGxldGUtcGlja2VyIG5nLWF1dG9jb21wbGV0ZSBpbnB1dCB7XG4gICAgICAgIHBhZGRpbmc6IDAgMjBweCAhaW1wb3J0YW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxNnB4O1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYmEoMCwgMCwgMCwgMC4yKSAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogMzJweCAhaW1wb3J0YW50OyB9XG4gICAgbmd4LWNoYXQtdWktYWN0aW9uLWF1dG9jb21wbGV0ZSAubmd4LWNoYXQtdWktYWN0aW9uLWF1dG9jb21wbGV0ZS1waWNrZXIgYnV0dG9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgd2lkdGg6IDMycHg7XG4gICAgICBwYWRkaW5nOiA3cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTdEMkZGO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgICBuZ3gtY2hhdC11aS1hY3Rpb24tYXV0b2NvbXBsZXRlIC5uZ3gtY2hhdC11aS1hY3Rpb24tYXV0b2NvbXBsZXRlLXBpY2tlciBidXR0b246YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJ+KclCc7IH1cbiAgICAgIG5neC1jaGF0LXVpLWFjdGlvbi1hdXRvY29tcGxldGUgLm5neC1jaGF0LXVpLWFjdGlvbi1hdXRvY29tcGxldGUtcGlja2VyIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3ZWM3ZmY7IH1cblxubmd4LWNoYXQtdWktYWN0aW9uLXVwbG9hZCB7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgZGlzcGxheTogYmxvY2s7IH1cbiAgbmd4LWNoYXQtdWktYWN0aW9uLXVwbG9hZCAubmd4LWNoYXQtdWktYWN0aW9uLXVwbG9hZC11cGxvYWRpbmcge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuICAgIG5neC1jaGF0LXVpLWFjdGlvbi11cGxvYWQgLm5neC1jaGF0LXVpLWFjdGlvbi11cGxvYWQtdXBsb2FkaW5nOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0MSwgMjQxLCAwLjQpO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHRvcDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgYm90dG9tOiAwOyB9XG4gIG5neC1jaGF0LXVpLWFjdGlvbi11cGxvYWQgLm5neC1jaGF0LXVpLWFjdGlvbi11cGxvYWQtZHJvcHpvbmUge1xuICAgIGRpc3BsYXk6IGZsZXg7IH1cbiAgICBuZ3gtY2hhdC11aS1hY3Rpb24tdXBsb2FkIC5uZ3gtY2hhdC11aS1hY3Rpb24tdXBsb2FkLWRyb3B6b25lIC5kei1wcmV2aWV3IHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH1cbiAgICBuZ3gtY2hhdC11aS1hY3Rpb24tdXBsb2FkIC5uZ3gtY2hhdC11aS1hY3Rpb24tdXBsb2FkLWRyb3B6b25lIC5kcm9wem9uZSB7XG4gICAgICBmbGV4OiAxIDAgYXV0bztcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICBib3JkZXI6IDFweCBkb3R0ZWQgI2NjY2NjYztcbiAgICAgIHBhZGRpbmc6IDdweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxuICAgIG5neC1jaGF0LXVpLWFjdGlvbi11cGxvYWQgLm5neC1jaGF0LXVpLWFjdGlvbi11cGxvYWQtZHJvcHpvbmUgYnV0dG9uIHtcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xuICAgICAgd2lkdGg6IDMycHg7XG4gICAgICBwYWRkaW5nOiA3cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTdEMkZGO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjJweDtcbiAgICAgIGJvcmRlcjogMDtcbiAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XG4gICAgICBuZ3gtY2hhdC11aS1hY3Rpb24tdXBsb2FkIC5uZ3gtY2hhdC11aS1hY3Rpb24tdXBsb2FkLWRyb3B6b25lIGJ1dHRvbjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAn4pyUJzsgfVxuICAgICAgbmd4LWNoYXQtdWktYWN0aW9uLXVwbG9hZCAubmd4LWNoYXQtdWktYWN0aW9uLXVwbG9hZC1kcm9wem9uZSBidXR0b246aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjN2VjN2ZmOyB9XG4gIG5neC1jaGF0LXVpLWFjdGlvbi11cGxvYWQgLm5neC1jaGF0LXVpLWFjdGlvbi11cGxvYWQtZmlsZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG1hcmdpbjogLTVweCAtNXB4IDVweCAtNXB4OyB9XG4gICAgbmd4LWNoYXQtdWktYWN0aW9uLXVwbG9hZCAubmd4LWNoYXQtdWktYWN0aW9uLXVwbG9hZC1maWxlcyAubmd4LWNoYXQtdWktYWN0aW9uLXVwbG9hZC1maWxlcy1pdGVtIHtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBtYXJnaW46IDVweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgIHBhZGRpbmc6IDVweDsgfVxuICAgICAgbmd4LWNoYXQtdWktYWN0aW9uLXVwbG9hZCAubmd4LWNoYXQtdWktYWN0aW9uLXVwbG9hZC1maWxlcyAubmd4LWNoYXQtdWktYWN0aW9uLXVwbG9hZC1maWxlcy1pdGVtIC5uZ3gtY2hhdC11aS1hY3Rpb24tdXBsb2FkLWZpbGVzLWl0ZW0taW1hZ2Uge1xuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiBuby1yZXBlYXQgNTAlIDUwJTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluOyB9XG4gICAgICBuZ3gtY2hhdC11aS1hY3Rpb24tdXBsb2FkIC5uZ3gtY2hhdC11aS1hY3Rpb24tdXBsb2FkLWZpbGVzIC5uZ3gtY2hhdC11aS1hY3Rpb24tdXBsb2FkLWZpbGVzLWl0ZW0gLm5neC1jaGF0LXVpLWFjdGlvbi11cGxvYWQtZmlsZXMtaXRlbS1yZW1vdmUge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiA1cHg7XG4gICAgICAgIHRvcDogNXB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cbiAgICAgICAgbmd4LWNoYXQtdWktYWN0aW9uLXVwbG9hZCAubmd4LWNoYXQtdWktYWN0aW9uLXVwbG9hZC1maWxlcyAubmd4LWNoYXQtdWktYWN0aW9uLXVwbG9hZC1maWxlcy1pdGVtIC5uZ3gtY2hhdC11aS1hY3Rpb24tdXBsb2FkLWZpbGVzLWl0ZW0tcmVtb3ZlOmJlZm9yZSB7XG4gICAgICAgICAgY29udGVudDogJ+KdjCc7IH1cblxubmd4LWNoYXQtdWktbWVzc2FnZS1wYXlsb2FkLXVwbG9hZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWFyZ2luOiAtMnB4IC01cHg7IH1cbiAgbmd4LWNoYXQtdWktbWVzc2FnZS1wYXlsb2FkLXVwbG9hZCAubmd4LWNoYXQtdWktbWVzc2FnZS1wYXlsb2FkLXVwbG9hZC1maWxlcy1pdGVtIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgwLCAwLCAwLCAwLjIpO1xuICAgIHBhZGRpbmc6IDVweDsgfVxuICAgIG5neC1jaGF0LXVpLW1lc3NhZ2UtcGF5bG9hZC11cGxvYWQgLm5neC1jaGF0LXVpLW1lc3NhZ2UtcGF5bG9hZC11cGxvYWQtZmlsZXMtaXRlbSAubmd4LWNoYXQtdWktbWVzc2FnZS1wYXlsb2FkLXVwbG9hZC1maWxlcy1pdGVtLWltYWdlIHtcbiAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgYmFja2dyb3VuZDogbm8tcmVwZWF0IDUwJSA1MCU7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47IH1cbiIsIm5neC1jaGF0LXVpLWNvbnRhaW5lciB7XG4gIGZsZXg6IDEgMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5uZ3gtY2hhdC11aS1tZXNzYWdlLWxpc3Qge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbiAgcGFkZGluZzogMjBweCAyMHB4IDA7XG59XG5cbm5neC1jaGF0LXVpLW1lc3NhZ2UtaXRlbSB7XG4gIG1hcmdpbi1sZWZ0OiAyMCU7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGY5ZmY7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgcGFkZGluZzogN3B4IDEwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAubmd4LWNoYXQtdWktYWN0aW9uLXNlbGVjdC1pdGVtLWljb24ge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgfVxuXG4gICY6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnJztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IC01cHg7XG4gICAgYm90dG9tOiA1cHg7XG4gICAgd2lkdGg6IDA7XG4gICAgaGVpZ2h0OiAwO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiA1cHggMCA1cHggNXB4O1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2YwZjlmZjtcbiAgfVxuXG4gIG5neC1jaGF0LXVpLW1lc3NhZ2UtbWV0YSB7XG4gICAgcmlnaHQ6IDVweDtcbiAgfVxuXG4gIG5neC1jaGF0LXVpLW1lc3NhZ2UtcGFydG5lciB7XG4gICAgbGVmdDogLTM1cHg7XG4gIH1cblxuICAmLm5neC1jaGF0LXVpLW1lc3NhZ2UtaXRlbS1pbmNvbWluZyB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcblxuICAgICY6YmVmb3JlIHtcbiAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgbGVmdDogLTVweDtcbiAgICAgIGJvcmRlci13aWR0aDogNXB4IDVweCA1cHggMDtcbiAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgI2ZmZmZmZiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICBuZ3gtY2hhdC11aS1tZXNzYWdlLW1ldGEge1xuICAgICAgbGVmdDogNXB4O1xuICAgICAgcmlnaHQ6IGF1dG87XG4gICAgfVxuXG4gICAgbmd4LWNoYXQtdWktbWVzc2FnZS1wYXJ0bmVyIHtcbiAgICAgIHJpZ2h0OiAtMzVweDtcbiAgICAgIGxlZnQ6IGF1dG87XG4gICAgfVxuICB9XG59XG5cbi5uZ3gtY2hhdC11aS1tZXNzYWdlLXNwYWNlciB7XG4gIGZsZXg6IDEgMCBhdXRvO1xufVxuXG4ubmd4LWNoYXQtdWktbWVzc2FnZS10eXBpbmcge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LWluZGVudDogLTEwMDBweDtcbiAgYmFja2dyb3VuZC1zaXplOiA1MHB4IDQwcHg7XG4gIGJhY2tncm91bmQ6IG5vLXJlcGVhdCB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCamJHRnpjejBpYkdSekxXMWxjM05oWjJVaUlIZHBaSFJvUFNJMk1IQjRJaUJvWldsbmFIUTlJakV5Y0hnaUlIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJZ2VHMXNibk02ZUd4cGJtczlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5MekU1T1RrdmVHeHBibXNpSUhacFpYZENiM2c5SWpBZ01DQTJNQ0F4TWlJZ2NISmxjMlZ5ZG1WQmMzQmxZM1JTWVhScGJ6MGllRTFwWkZsTmFXUWlQanhuSUhSeVlXNXpabTl5YlQwaWRISmhibk5zWVhSbEtEWWdOaWtpUGcwS1BHTnBjbU5zWlNCamVEMGlNQ0lnWTNrOUlqQWlJSEk5SWpZaUlHWnBiR3c5SWlNNU1qa3lPVElpSUhSeVlXNXpabTl5YlQwaWMyTmhiR1VvTUM0NU56VXlNalFnTUM0NU56VXlNalFwSWo0TkNpQWdQR0Z1YVcxaGRHVlVjbUZ1YzJadmNtMGdZWFIwY21saWRYUmxUbUZ0WlQwaWRISmhibk5tYjNKdElpQjBlWEJsUFNKelkyRnNaU0lnWW1WbmFXNDlJaTB3TGpNM05YTWlJR05oYkdOTmIyUmxQU0p6Y0d4cGJtVWlJR3RsZVZOd2JHbHVaWE05SWpBdU15QXdJREF1TnlBeE96QXVNeUF3SURBdU55QXhJaUIyWVd4MVpYTTlJakE3TVRzd0lpQnJaWGxVYVcxbGN6MGlNRHN3TGpVN01TSWdaSFZ5UFNJeGN5SWdjbVZ3WldGMFEyOTFiblE5SW1sdVpHVm1hVzVwZEdVaVBqd3ZZVzVwYldGMFpWUnlZVzV6Wm05eWJUNE5Dand2WTJseVkyeGxQZzBLUEM5blBqeG5JSFJ5WVc1elptOXliVDBpZEhKaGJuTnNZWFJsS0RJeUlEWXBJajROQ2p4amFYSmpiR1VnWTNnOUlqQWlJR041UFNJd0lpQnlQU0kySWlCbWFXeHNQU0lqT1RJNU1qa3lJaUIwY21GdWMyWnZjbTA5SW5OallXeGxLREF1TnpJMk5ESTJJREF1TnpJMk5ESTJLU0krRFFvZ0lEeGhibWx0WVhSbFZISmhibk5tYjNKdElHRjBkSEpwWW5WMFpVNWhiV1U5SW5SeVlXNXpabTl5YlNJZ2RIbHdaVDBpYzJOaGJHVWlJR0psWjJsdVBTSXRNQzR5TlhNaUlHTmhiR05OYjJSbFBTSnpjR3hwYm1VaUlHdGxlVk53YkdsdVpYTTlJakF1TXlBd0lEQXVOeUF4T3pBdU15QXdJREF1TnlBeElpQjJZV3gxWlhNOUlqQTdNVHN3SWlCclpYbFVhVzFsY3owaU1Ec3dMalU3TVNJZ1pIVnlQU0l4Y3lJZ2NtVndaV0YwUTI5MWJuUTlJbWx1WkdWbWFXNXBkR1VpUGp3dllXNXBiV0YwWlZSeVlXNXpabTl5YlQ0TkNqd3ZZMmx5WTJ4bFBnMEtQQzluUGp4bklIUnlZVzV6Wm05eWJUMGlkSEpoYm5Oc1lYUmxLRE00SURZcElqNE5DanhqYVhKamJHVWdZM2c5SWpBaUlHTjVQU0l3SWlCeVBTSTJJaUJtYVd4c1BTSWpPVEk1TWpreUlpQjBjbUZ1YzJadmNtMDlJbk5qWVd4bEtEQXVNemN3T1RBMElEQXVNemN3T1RBMEtTSStEUW9nSUR4aGJtbHRZWFJsVkhKaGJuTm1iM0p0SUdGMGRISnBZblYwWlU1aGJXVTlJblJ5WVc1elptOXliU0lnZEhsd1pUMGljMk5oYkdVaUlHSmxaMmx1UFNJdE1DNHhNalZ6SWlCallXeGpUVzlrWlQwaWMzQnNhVzVsSWlCclpYbFRjR3hwYm1WelBTSXdMak1nTUNBd0xqY2dNVHN3TGpNZ01DQXdMamNnTVNJZ2RtRnNkV1Z6UFNJd096RTdNQ0lnYTJWNVZHbHRaWE05SWpBN01DNDFPekVpSUdSMWNqMGlNWE1pSUhKbGNHVmhkRU52ZFc1MFBTSnBibVJsWm1sdWFYUmxJajQ4TDJGdWFXMWhkR1ZVY21GdWMyWnZjbTArRFFvOEwyTnBjbU5zWlQ0TkNqd3ZaejQ4WnlCMGNtRnVjMlp2Y20wOUluUnlZVzV6YkdGMFpTZzFOQ0EyS1NJK0RRbzhZMmx5WTJ4bElHTjRQU0l3SWlCamVUMGlNQ0lnY2owaU5pSWdabWxzYkQwaUl6a3lPVEk1TWlJZ2RISmhibk5tYjNKdFBTSnpZMkZzWlNnd0xqQTNPRGt6T1RjZ01DNHdOemc1TXprM0tTSStEUW9nSUR4aGJtbHRZWFJsVkhKaGJuTm1iM0p0SUdGMGRISnBZblYwWlU1aGJXVTlJblJ5WVc1elptOXliU0lnZEhsd1pUMGljMk5oYkdVaUlHSmxaMmx1UFNJd2N5SWdZMkZzWTAxdlpHVTlJbk53YkdsdVpTSWdhMlY1VTNCc2FXNWxjejBpTUM0eklEQWdNQzQzSURFN01DNHpJREFnTUM0M0lERWlJSFpoYkhWbGN6MGlNRHN4T3pBaUlHdGxlVlJwYldWelBTSXdPekF1TlRzeElpQmtkWEk5SWpGeklpQnlaWEJsWVhSRGIzVnVkRDBpYVc1a1pXWnBibWwwWlNJK1BDOWhibWx0WVhSbFZISmhibk5tYjNKdFBnMEtQQzlqYVhKamJHVStEUW84TDJjK1BDOXpkbWMrKTtcbn1cblxubmd4LWNoYXQtdWktbWVzc2FnZS1wYXJ0bmVyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDI0cHg7XG4gIGhlaWdodDogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTFlMWUxO1xuICBtYXJnaW4tdG9wOiAtM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG5cbiAgaW1nIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gIH1cbn1cblxubmd4LWNoYXQtdWktbWVzc2FnZS1tZXRhIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBmb250LXNpemU6IDEwcHg7XG4gIGNvbG9yOiAjODg4ODg4O1xuICBib3R0b206IC0xN3B4O1xufVxuXG4ubmd4LWNoYXQtdWktYWN0aW9uLXNlbGVjdC1mcmFtZSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcblxuICAmLm5neC1jaGF0LXVpLWFjdGlvbi1zZWxlY3QtYnV0dG9uIHtcbiAgICAubmd4LWNoYXQtdWktYWN0aW9uLXNlbGVjdC1pdGVtcyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICBuZ3gtY2hhdC11aS1hY3Rpb24tc2VsZWN0LWl0ZW0ge1xuICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG5cbiAgICAgIGEge1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgfVxuXG4gICAgICAubmd4LWNoYXQtdWktYWN0aW9uLXNlbGVjdC1pdGVtLWN0YSxcbiAgICAgIC5uZ3gtY2hhdC11aS1hY3Rpb24tc2VsZWN0LWl0ZW0tc2Vjb25kYXJ5IHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgICAgICAgcGFkZGluZzogN3B4IDIwcHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5N0QyRkY7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAuMik7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCM5N0QyRkYsIDUlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAubmd4LWNoYXQtdWktYWN0aW9uLXNlbGVjdC1pdGVtLXNlY29uZGFyeSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5N2ZmYTQ7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCM5N2ZmYTQsIDUlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICYubmd4LWNoYXQtdWktYWN0aW9uLXNlbGVjdC1oaWRkZW4ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAmLm5neC1jaGF0LXVpLWFjdGlvbi1zZWxlY3QtbGlzdCB7XG4gICAgLm5neC1jaGF0LXVpLWFjdGlvbi1zZWxlY3QtaXRlbXMge1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIEBtZWRpYSAobWluLXdpZHRoOiA1MDBweCkge1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgfVxuICAgIH1cblxuICAgIG5neC1jaGF0LXVpLWFjdGlvbi1zZWxlY3QtaXRlbSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG5cbiAgICAgIGEge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBjb2xvcjogIzAwMDAwMDtcbiAgICAgICAgcGFkZGluZzogN3B4IDE1cHg7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCNmMWYxZjEsIDElKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5uZ3gtY2hhdC11aS1hY3Rpb24tdGV4dCB7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgZm9ybSB7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIGlucHV0IHtcbiAgICAgIGZsZXg6IDEgMCBhdXRvO1xuICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDE2cHg7XG4gICAgICBib3gtc2hhZG93OiAwIDAgM3B4IHJnYmEoMCwgMCwgMCwgLjIpO1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICB3aWR0aDogMzJweDtcbiAgICAgIHBhZGRpbmc6IDdweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5N0QyRkY7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAn4pyUJztcbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigjOTdEMkZGLCA1JSk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbm5neC1jaGF0LXVpLWFjdGlvbi1hdXRvY29tcGxldGUge1xuICBwYWRkaW5nOiAxNXB4IDIwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuXG4gIC5uZ3gtY2hhdC11aS1hY3Rpb24tYXV0b2NvbXBsZXRlLXRhZ3Mge1xuICAgIG1hcmdpbjogLTVweCAtNXB4IDVweCAtNXB4O1xuXG4gICAgLm5neC1jaGF0LXVpLWFjdGlvbi1hdXRvY29tcGxldGUtdGFncy1pdGVtIHtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDE4cHg7XG4gICAgICBtYXJnaW46IDVweDtcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcblxuICAgICAgLm5neC1jaGF0LXVpLWFjdGlvbi1hdXRvY29tcGxldGUtdGFncy1pdGVtLXJlbW92ZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRvcDogNHB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAxMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgIGNvbnRlbnQ6ICfinYwnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm5neC1jaGF0LXVpLWFjdGlvbi1hdXRvY29tcGxldGUtcGlja2VyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgbmctYXV0b2NvbXBsZXRlIHtcbiAgICAgIGZsZXg6IDEgMCBhdXRvO1xuICAgICAgd2lkdGg6IGF1dG87XG5cbiAgICAgIC5hdXRvY29tcGxldGUtY29udGFpbmVyIHtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgfVxuXG4gICAgICAuc3VnZ2VzdGlvbnMtY29udGFpbmVyIHtcbiAgICAgICAgYm90dG9tOiAzN3B4O1xuICAgICAgfVxuXG4gICAgICAubm90LWZvdW5kIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgaW5wdXQge1xuICAgICAgICBwYWRkaW5nOiAwIDIwcHggIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTZweDtcbiAgICAgICAgYm94LXNoYWRvdzogMCAwIDNweCByZ2JhKDAsIDAsIDAsIC4yKSAhaW1wb3J0YW50O1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogMzJweCAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIH1cblxuICAgIGJ1dHRvbiB7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgIHdpZHRoOiAzMnB4O1xuICAgICAgcGFkZGluZzogN3B4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk3RDJGRjtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XG4gICAgICBib3JkZXI6IDA7XG4gICAgICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgLjIpO1xuICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICfinJQnO1xuICAgICAgfVxuXG4gICAgICAmOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogZGFya2VuKCM5N0QyRkYsIDUlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxubmd4LWNoYXQtdWktYWN0aW9uLXVwbG9hZCB7XG4gIHBhZGRpbmc6IDE1cHggMjBweDtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgLm5neC1jaGF0LXVpLWFjdGlvbi11cGxvYWQtdXBsb2FkaW5nIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDEsIDI0MSwgMjQxLCAuNCk7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBsZWZ0OiAwO1xuICAgICAgdG9wOiAwO1xuICAgICAgcmlnaHQ6IDA7XG4gICAgICBib3R0b206IDA7XG4gICAgfVxuICB9XG5cbiAgLm5neC1jaGF0LXVpLWFjdGlvbi11cGxvYWQtZHJvcHpvbmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAuZHotcHJldmlldyB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5kcm9wem9uZSB7XG4gICAgICBmbGV4OiAxIDAgYXV0bztcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG4gICAgICBib3JkZXI6IDFweCBkb3R0ZWQgI2NjY2NjYztcbiAgICAgIHBhZGRpbmc6IDdweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICBidXR0b24ge1xuICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XG4gICAgICB3aWR0aDogMzJweDtcbiAgICAgIHBhZGRpbmc6IDdweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5N0QyRkY7XG4gICAgICBib3JkZXItcmFkaXVzOiAyMnB4O1xuICAgICAgYm9yZGVyOiAwO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgJjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAn4pyUJztcbiAgICAgIH1cblxuICAgICAgJjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtlbigjOTdEMkZGLCA1JSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLm5neC1jaGF0LXVpLWFjdGlvbi11cGxvYWQtZmlsZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIG1hcmdpbjogLTVweCAtNXB4IDVweCAtNXB4O1xuXG4gICAgLm5neC1jaGF0LXVpLWFjdGlvbi11cGxvYWQtZmlsZXMtaXRlbSB7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgbWFyZ2luOiA1cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgICAgYm94LXNoYWRvdzogMCAwIDNweCByZ2JhKDAsIDAsIDAsIC4yKTtcbiAgICAgIHBhZGRpbmc6IDVweDtcblxuICAgICAgLm5neC1jaGF0LXVpLWFjdGlvbi11cGxvYWQtZmlsZXMtaXRlbS1pbWFnZSB7XG4gICAgICAgIHdpZHRoOiA0MHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vLXJlcGVhdCA1MCUgNTAlO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG4gICAgICB9XG5cbiAgICAgIC5uZ3gtY2hhdC11aS1hY3Rpb24tdXBsb2FkLWZpbGVzLWl0ZW0tcmVtb3ZlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogNXB4O1xuICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiAn4p2MJztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5uZ3gtY2hhdC11aS1tZXNzYWdlLXBheWxvYWQtdXBsb2FkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW46IC0ycHggLTVweDtcblxuICAubmd4LWNoYXQtdWktbWVzc2FnZS1wYXlsb2FkLXVwbG9hZC1maWxlcy1pdGVtIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXJnaW46IDVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMCAzcHggcmdiYSgwLCAwLCAwLCAuMik7XG4gICAgcGFkZGluZzogNXB4O1xuXG4gICAgLm5neC1jaGF0LXVpLW1lc3NhZ2UtcGF5bG9hZC11cGxvYWQtZmlsZXMtaXRlbS1pbWFnZSB7XG4gICAgICB3aWR0aDogNDBweDtcbiAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIGJhY2tncm91bmQ6IG5vLXJlcGVhdCA1MCUgNTAlO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIH1cbiAgfVxufVxuIl19 */"

/***/ }),

/***/ "./src/app/chat/chat.component.ts":
/*!****************************************!*\
  !*** ./src/app/chat/chat.component.ts ***!
  \****************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_chat_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-chat-ui */ "./node_modules/ngx-chat-ui/fesm5/ngx-chat-ui.js");



var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
        this.partners = [];
        this.messages = {
            demoSelect: [],
            demoText: [],
            demoList: [],
            demoAutocomplete: [],
            demoUpload: []
        };
        this.state = {
            demoSelect: {},
            demoText: {},
            demoList: {},
            demoAutocomplete: {},
            demoUpload: {}
        };
        this.callbacks = {
            demoAutocomplete: {
                autocomplete: this.autocompleteTags.bind(this),
            },
            demoUpload: {
                upload: this.uploadFiles.bind(this),
            }
        };
    }
    // tslint:disable-next-line:use-life-cycle-interface
    ChatComponent.prototype.ngOnInit = function () {
        this.partners = this.partners.concat([
            {
                messagePartnerId: 'me',
                firstName: 'Sergey',
                lastName: 'Kalaus'
            },
            {
                messagePartnerId: 'it',
                // tslint:disable-next-line:max-line-length
                avatar: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/4QBmRXhpZgAATU0AKgAAAAgABAEaAAUAAAABAAAAPgEbAAUAAAABAAAARgEoAAMAAAABAAIAAAExAAIAAAAQAAAATgAAAAAAAABgAAAAAQAAAGAAAAABcGFpbnQubmV0IDQuMS42AP/bAEMABQQEBAQDBQQEBAYFBQYIDQgIBwcIEAsMCQ0TEBQTEhASEhQXHRkUFhwWEhIaIxocHh8hISEUGSQnJCAmHSAhIP/bAEMBBQYGCAcIDwgIDyAVEhUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIP/AABEIABgAGAMBIgACEQEDEQH/xAAfAAABBQEBAQEBAQAAAAAAAAAAAQIDBAUGBwgJCgv/xAC1EAACAQMDAgQDBQUEBAAAAX0BAgMABBEFEiExQQYTUWEHInEUMoGRoQgjQrHBFVLR8CQzYnKCCQoWFxgZGiUmJygpKjQ1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4eLj5OXm5+jp6vHy8/T19vf4+fr/xAAfAQADAQEBAQEBAQEBAAAAAAAAAQIDBAUGBwgJCgv/xAC1EQACAQIEBAMEBwUEBAABAncAAQIDEQQFITEGEkFRB2FxEyIygQgUQpGhscEJIzNS8BVictEKFiQ04SXxFxgZGiYnKCkqNTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqCg4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2dri4+Tl5ufo6ery8/T19vf4+fr/2gAMAwEAAhEDEQA/APsW7uoLGzlu7l9kUS7mP+e9YH/CbaH9hW43y+aW2m2Cgyr7kZxjHOc/rxVXx88kej2hVm8t7gRuqgnPyswJ5xgFR2P4V5nFb3yyBZL7fEgXafLAd8DneenPXgD8K8HH5jPD1fZwS26nqYXBxqw55dz3mORJYkljYMjgMrDoQehorjvh7eXkujXFjeytK9rIAjnuhHA644wRgAcAcUV7FCqq1NVI9Tz6kHTm4PodVe2NrqFqba8iEkZ5weoPqPQ1zf8Awgun+du+13Hl/wB3jP54/pRRUVcLRrNOpG7Kp16lNWg7HSWVja6darbWkQjjHPuT6k96KKK3jFRXLFWRk227s//Z'
            }
        ]);
        this.messages.demoSelect = this.messages.demoSelect.concat([
            {
                date: new Date(),
                messagePartnerId: 'me',
                payload: {
                    type: ngx_chat_ui__WEBPACK_IMPORTED_MODULE_2__["INgxChatUiMessageType"].text,
                    value: 'Hello'
                }
            },
            {
                date: new Date(),
                messageId: '1',
                messagePartnerId: 'it',
                isIncoming: true,
                payload: {
                    type: ngx_chat_ui__WEBPACK_IMPORTED_MODULE_2__["INgxChatUiMessageType"].text,
                    value: 'Wanna play?'
                },
                action: {
                    type: ngx_chat_ui__WEBPACK_IMPORTED_MODULE_2__["INgxChatUiMessageType"].select,
                    items: [
                        {
                            icon: '👌',
                            id: 0,
                            className: 'ngx-chat-ui-action-select-item-cta'
                        },
                        {
                            text: 'No',
                            id: 1
                        }
                    ]
                }
            },
        ]);
        this.messages.demoText = this.messages.demoText.concat([
            {
                date: new Date(),
                messagePartnerId: 'me',
                payload: {
                    type: ngx_chat_ui__WEBPACK_IMPORTED_MODULE_2__["INgxChatUiMessageType"].text,
                    value: 'Hello'
                }
            },
            {
                date: new Date(),
                messageId: '2',
                messagePartnerId: 'it',
                isIncoming: true,
                payload: {
                    type: ngx_chat_ui__WEBPACK_IMPORTED_MODULE_2__["INgxChatUiMessageType"].text,
                    value: 'Wanna play?'
                },
                action: {
                    type: ngx_chat_ui__WEBPACK_IMPORTED_MODULE_2__["INgxChatUiMessageType"].text
                }
            },
        ]);
        this.messages.demoList = this.messages.demoList.concat([
            {
                date: new Date(),
                messagePartnerId: 'me',
                payload: {
                    type: ngx_chat_ui__WEBPACK_IMPORTED_MODULE_2__["INgxChatUiMessageType"].text,
                    value: 'Hello'
                }
            },
            {
                date: new Date(),
                messageId: '2',
                messagePartnerId: 'it',
                isIncoming: true,
                payload: {
                    type: ngx_chat_ui__WEBPACK_IMPORTED_MODULE_2__["INgxChatUiMessageType"].text,
                    value: 'Wanna play?'
                },
                action: {
                    type: ngx_chat_ui__WEBPACK_IMPORTED_MODULE_2__["INgxChatUiMessageType"].select,
                    className: 'ngx-chat-ui-action-select-list',
                    items: [
                        {
                            text: 'Yes',
                            id: 0,
                            className: 'ngx-chat-ui-action-select-item-cta'
                        },
                        {
                            text: 'No',
                            id: 1
                        }
                    ]
                }
            },
        ]);
        this.messages.demoAutocomplete = this.messages.demoAutocomplete.concat([
            {
                date: new Date(),
                messagePartnerId: 'me',
                payload: {
                    type: ngx_chat_ui__WEBPACK_IMPORTED_MODULE_2__["INgxChatUiMessageType"].text,
                    value: 'Hello'
                }
            },
            {
                date: new Date(),
                messagePartnerId: 'it',
                isIncoming: true,
                payload: {
                    type: ngx_chat_ui__WEBPACK_IMPORTED_MODULE_2__["INgxChatUiMessageType"].text,
                    value: 'Wanna play?'
                },
                action: {
                    type: ngx_chat_ui__WEBPACK_IMPORTED_MODULE_2__["INgxChatUiMessageType"].autocomplete,
                    callback: 'autocomplete',
                }
            },
        ]);
        this.messages.demoUpload = this.messages.demoUpload.concat([
            {
                date: new Date(),
                messagePartnerId: 'me',
                payload: {
                    type: ngx_chat_ui__WEBPACK_IMPORTED_MODULE_2__["INgxChatUiMessageType"].text,
                    value: 'Hello'
                }
            },
            {
                date: new Date(),
                messagePartnerId: 'it',
                isIncoming: true,
                payload: {
                    type: ngx_chat_ui__WEBPACK_IMPORTED_MODULE_2__["INgxChatUiMessageType"].text,
                    value: 'Wanna play?'
                },
                action: {
                    type: ngx_chat_ui__WEBPACK_IMPORTED_MODULE_2__["INgxChatUiMessageType"].upload,
                    callback: 'upload',
                }
            },
        ]);
    };
    ChatComponent.prototype.onResponse = function (chatKey, payload) {
        var _this = this;
        setTimeout(function () {
            _this.messages[chatKey] = _this.messages[chatKey].concat([
                {
                    date: new Date(),
                    messagePartnerId: 'me',
                    payload: payload
                }
            ]);
        });
    };
    // tslint:disable-next-line:ban-types
    ChatComponent.prototype.autocompleteTags = function (query, callback) {
        callback([
            '#aabbccdd',
            '#eeffgghh',
            '#iijjkkll',
            '#mmnnoopp',
            '#qqrrsstt',
            '#uuvvwwxx',
            '#yyzz',
        ]);
    };
    // tslint:disable-next-line:ban-types
    ChatComponent.prototype.uploadFiles = function (data, callback) {
        callback({
            name: 'Test.jpg',
            url: 'https://via.placeholder.com/150',
        });
    };
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.scss */ "./src/app/chat/chat.component.scss")]
        })
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/email/email.component.css":
/*!*******************************************!*\
  !*** ./src/app/email/email.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtYWlsL2VtYWlsLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/email/email.component.html":
/*!********************************************!*\
  !*** ./src/app/email/email.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  email works!\n</p>\n"

/***/ }),

/***/ "./src/app/email/email.component.ts":
/*!******************************************!*\
  !*** ./src/app/email/email.component.ts ***!
  \******************************************/
/*! exports provided: EmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailComponent", function() { return EmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmailComponent = /** @class */ (function () {
    function EmailComponent() {
    }
    EmailComponent.prototype.ngOnInit = function () {
    };
    EmailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-email',
            template: __webpack_require__(/*! ./email.component.html */ "./src/app/email/email.component.html"),
            styles: [__webpack_require__(/*! ./email.component.css */ "./src/app/email/email.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmailComponent);
    return EmailComponent;
}());



/***/ }),

/***/ "./src/app/faq/faq.component.css":
/*!***************************************!*\
  !*** ./src/app/faq/faq.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\r\n    color:white;\r\n}\r\nh1 {\r\n    color: blanchedalmond;\r\n}\r\nh2{\r\n    color: silver\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFxL2ZhcS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxxQkFBcUI7QUFDekI7QUFDQTtJQUNJO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9mYXEvZmFxLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICAgIGNvbG9yOndoaXRlO1xyXG59XHJcbmgxIHtcclxuICAgIGNvbG9yOiBibGFuY2hlZGFsbW9uZDtcclxufVxyXG5oMntcclxuICAgIGNvbG9yOiBzaWx2ZXJcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/faq/faq.component.html":
/*!****************************************!*\
  !*** ./src/app/faq/faq.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>FAQ</h1>\r\n<br>\r\n<h2>Is it free?</h2>\r\n<p>Yes, this site is totally free</p>\r\n<h2>Can I only add car parts announcement</h2>\r\n<p>Yes, this is the purpose of this site</p>\r\n<h2>What if I try add something else?</h2>\r\n<p>Administrator won't let you do that. All offers have to be accepted, before they show on the site</p>\r\n<h2>How many announcement can I add?</h2>\r\n<p>Ther is no limitation</p>\r\n<h2></h2>\r\n<p></p>\r\n<h2></h2>\r\n<p></p>\r\n\r\n<!--\r\n<h2>Question</h2>\r\n<p>answer</p>\r\n\r\n-->"

/***/ }),

/***/ "./src/app/faq/faq.component.ts":
/*!**************************************!*\
  !*** ./src/app/faq/faq.component.ts ***!
  \**************************************/
/*! exports provided: FAQComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FAQComponent", function() { return FAQComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FAQComponent = /** @class */ (function () {
    function FAQComponent() {
    }
    FAQComponent.prototype.ngOnInit = function () {
    };
    FAQComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faq',
            template: __webpack_require__(/*! ./faq.component.html */ "./src/app/faq/faq.component.html"),
            styles: [__webpack_require__(/*! ./faq.component.css */ "./src/app/faq/faq.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FAQComponent);
    return FAQComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".context-dark, .bg-gray-dark, .bg-primary {\r\n    color: rgba(255, 255, 255, 0.8);\r\n}\r\n\r\n.footer-classic a, .footer-classic a:focus, .footer-classic a:active {\r\n    color: #ffffff;\r\n}\r\n\r\n.nav-list li {\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n}\r\n\r\n.nav-list li a:hover:before {\r\n    margin-left: 0;\r\n    opacity: 1;\r\n    visibility: visible;\r\n}\r\n\r\nul, ol {\r\n    list-style: none;\r\n    padding: 0;\r\n    margin: 0;\r\n}\r\n\r\n.social-inner {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    width: 100%;\r\n    padding: 23px;\r\n    font: 900 13px/1 \"Lato\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif;\r\n    text-transform: uppercase;\r\n    color: rgba(255, 255, 255, 0.5);\r\n}\r\n\r\n.social-container .col {\r\n    border: 1px solid rgba(255, 255, 255, 0.1);\r\n}\r\n\r\n.nav-list li a:before {\r\n    content: \"\\f14f\";\r\n    font: 400 21px/1 \"Material Design Icons\";\r\n    color: #4d6de6;\r\n    display: inline-block;\r\n    vertical-align: baseline;\r\n    margin-left: -28px;\r\n    margin-right: 7px;\r\n    opacity: 0;\r\n    visibility: hidden;\r\n    transition: .22s ease;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsVUFBVTtJQUNWLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLGFBQWE7SUFDYixtSEFBbUg7SUFDbkgseUJBQXlCO0lBQ3pCLCtCQUErQjtBQUNuQzs7QUFDQTtJQUNJLDBDQUEwQztBQUM5Qzs7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQix3Q0FBd0M7SUFDeEMsY0FBYztJQUNkLHFCQUFxQjtJQUNyQix3QkFBd0I7SUFDeEIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZXh0LWRhcmssIC5iZy1ncmF5LWRhcmssIC5iZy1wcmltYXJ5IHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCk7XHJcbn1cclxuXHJcbi5mb290ZXItY2xhc3NpYyBhLCAuZm9vdGVyLWNsYXNzaWMgYTpmb2N1cywgLmZvb3Rlci1jbGFzc2ljIGE6YWN0aXZlIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5uYXYtbGlzdCBsaSB7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxufVxyXG5cclxuLm5hdi1saXN0IGxpIGE6aG92ZXI6YmVmb3JlIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuXHJcbnVsLCBvbCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG5cclxuLnNvY2lhbC1pbm5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDIzcHg7XHJcbiAgICBmb250OiA5MDAgMTNweC8xIFwiTGF0b1wiLCAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFwiU2Vnb2UgVUlcIiwgUm9ib3RvLCBcIkhlbHZldGljYSBOZXVlXCIsIEFyaWFsLCBzYW5zLXNlcmlmO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbn1cclxuLnNvY2lhbC1jb250YWluZXIgLmNvbCB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XHJcbn1cclxuLm5hdi1saXN0IGxpIGE6YmVmb3JlIHtcclxuICAgIGNvbnRlbnQ6IFwiXFxmMTRmXCI7XHJcbiAgICBmb250OiA0MDAgMjFweC8xIFwiTWF0ZXJpYWwgRGVzaWduIEljb25zXCI7XHJcbiAgICBjb2xvcjogIzRkNmRlNjtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMjhweDtcclxuICAgIG1hcmdpbi1yaWdodDogN3B4O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IC4yMnMgZWFzZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"section footer-classic context-dark bg-dark\" style=\"background: #2d3246;\">\r\n    <div class=\"container\">\r\n      <div class=\"row row-30\">\r\n        <div class=\"col-md-4 col-xl-5\">\r\n          <div class=\"pr-xl-4\"><a class=\"brand\" href=\"index.html\"><img class=\"brand-logo-light\" src=\"images/agency/logo-inverse-140x37.png\" alt=\"\" width=\"140\" height=\"37\" srcset=\"images/agency/logo-retina-inverse-280x74.png 2x\"></a>\r\n            <p>Operarius - connects drivers with doctors of their cars.</p>\r\n            <!-- Rights-->\r\n            <p class=\"rights\">&copy; {{year}}<span ></span><span> Cracow University of Economics, </span><span>Operarius</span><span>. </span>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-4\">\r\n          <h5>Contacts</h5>\r\n          <dl class=\"contact-list\">\r\n            <dt>Address:</dt>\r\n            <dd>27 Rakowicka Street 31-510 Cracow\r\n                </dd>\r\n          </dl>\r\n          <dl class=\"contact-list\">\r\n            <dt>email:</dt>\r\n            <dd><a href=\"mailto:#\">operarius@gmail.com</a></dd>\r\n          </dl>\r\n          <dl class=\"contact-list\">\r\n            <dt>phones:</dt>\r\n            <dd><a href=\"tel:#\">+12 12 293 5200 </a> <span>or</span> <a href=\"tel:#\">+12 293 5700</a>\r\n            </dd>\r\n          </dl>\r\n        </div>\r\n        <div class=\"col-md-4 col-xl-3\">\r\n          <h5>Links</h5>\r\n          <ul class=\"nav-list\">\r\n            <li><a href=\"https://github.com/G0-Pr0/Operarius\">About</a></li>\r\n            <li><a href=\"https://github.com/G0-Pr0/Operarius/projects\">Projects</a></li>\r\n            <li><a href=\"https://github.com/G0-Pr0/Operarius/projects/1\">Blog</a></li>\r\n            <li><a href=\"https://github.com/G0-Pr0/Operarius/graphs/contributors\">Contacts</a></li>\r\n            <li><a href=\"https://github.com/G0-Pr0/Operarius/blob/master/Operarius%20(1).png\">UML</a></li>\r\n          </ul>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row no-gutters social-container\">\r\n      <div class=\"col\"><a class=\"social-inner\" href=\"https://www.facebook.com/\"><span class=\"icon mdi mdi-facebook\"></span><span>Facebook</span></a></div>\r\n      <div class=\"col\"><a class=\"social-inner\" href=\"https://www.instragram.com/\"><span class=\"icon mdi mdi-instagram\"></span><span>instagram</span></a></div>\r\n      <div class=\"col\"><a class=\"social-inner\" href=\"https://www.twitter.com/\"><span class=\"icon mdi mdi-twitter\"></span><span>twitter</span></a></div>\r\n      <div class=\"col\"><a class=\"social-inner\" href=\"https://www.google.com/\"><span class=\"icon mdi mdi-youtube-play\"></span><span>google</span></a></div>\r\n    </div>\r\n  </footer>\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
        this.year = new Date().getFullYear();
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/forrgot-password/forrgot-password.component.html":
/*!******************************************************************!*\
  !*** ./src/app/forrgot-password/forrgot-password.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"displayTable\">\r\n  <div class=\"displayTableCell\">\r\n  <div class=\"authBlock\">\r\n  <h3 ><font color=\"white\">Reset Password</font></h3>\r\n  <p class=\"text-left\"><font color=\"white\">Please enter your email address to request a password reset.</font></p>\r\n  <div class=\"formGroup\">\r\n  <input type=\"email\" class=\"formControl\" placeholder=\"Email Address\" #passwordResetEmail required>\r\n  </div>\r\n  <!-- Calling ForgotPassword from AuthService Api -->\r\n  <div class=\"formGroup\">\r\n  <input type=\"submit\" class=\"btn btn-primary\" value=\"Reset Password\" (click)=\"authService.ForgotPassword(passwordResetEmail.value)\">\r\n  </div>\r\n  </div>\r\n  <div class=\"redirectToLogin\">\r\n  <span><font color=\"white\">Go back to ? </font><span class=\"redirect\" routerLink=\"/sign-in\"><font color=\"white\">Log In </font></span></span>\r\n  </div>\r\n  </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/forrgot-password/forrgot-password.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/forrgot-password/forrgot-password.component.ts ***!
  \****************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");



var ForgotPasswordComponent = /** @class */ (function () {
    function ForgotPasswordComponent(authService) {
        this.authService = authService;
    }
    ForgotPasswordComponent.prototype.ngOnInit = function () {
    };
    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forrgot-password',
            template: __webpack_require__(/*! ./forrgot-password.component.html */ "./src/app/forrgot-password/forrgot-password.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], ForgotPasswordComponent);
    return ForgotPasswordComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#welcome{\r\n    font-family: 'Oswald', sans-serif;\r\n    color: whitesmoke;\r\n}\r\n\r\na{\r\n    margin-right: 20px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQ0FBaUM7SUFDakMsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjd2VsY29tZXtcclxuICAgIGZvbnQtZmFtaWx5OiAnT3N3YWxkJywgc2Fucy1zZXJpZjtcclxuICAgIGNvbG9yOiB3aGl0ZXNtb2tlO1xyXG59XHJcblxyXG5he1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"home-wrapper\">\r\n  <div class=\"container\" id=\"welcome\">\r\n    <br /><br /><br />\r\n    <h2>Witamy w aplikacji operarius!</h2>\r\n    <br /><br /><br />\r\n  </div>\r\n  <div class=\"container\">\r\n    <a class=\"btn btn-success\" routerLink=\"/register-user\">Sign up</a>\r\n    <a class=\"btn btn-info\" routerLink=\"../sign-in\">Log in</a>\r\n    <br /><br />\r\n    <a class=\"btn btn-danger\" routerLink=\"../admin\">Go to admin</a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService, router, ngZone) {
        this.authService = authService;
        this.router = router;
        this.ngZone = ngZone;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/how-it-works/how-it-works.component.css":
/*!*********************************************************!*\
  !*** ./src/app/how-it-works/how-it-works.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6,\r\np {\r\n  color:white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG93LWl0LXdvcmtzL2hvdy1pdC13b3Jrcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7O0VBT0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvaG93LWl0LXdvcmtzL2hvdy1pdC13b3Jrcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEsXHJcbmgyLFxyXG5oMyxcclxuaDQsXHJcbmg1LFxyXG5oNixcclxucCB7XHJcbiAgY29sb3I6d2hpdGU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/how-it-works/how-it-works.component.html":
/*!**********************************************************!*\
  !*** ./src/app/how-it-works/how-it-works.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>How it Works</h1>\r\n<p>This website is an advertising site which is designed to allow the user to issue repair offers for a given car part. <br>\r\n  The mechanics can review these offers and then accept one of them and commit to repair it. Both users and mechanics <br>\r\n  can add offers, because we assume that some mechanics will want to order the repair of their parts to other mechanics <br>\r\n  in case they can not fix the part</p>"

/***/ }),

/***/ "./src/app/how-it-works/how-it-works.component.ts":
/*!********************************************************!*\
  !*** ./src/app/how-it-works/how-it-works.component.ts ***!
  \********************************************************/
/*! exports provided: HowItWorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowItWorksComponent", function() { return HowItWorksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HowItWorksComponent = /** @class */ (function () {
    function HowItWorksComponent() {
    }
    HowItWorksComponent.prototype.ngOnInit = function () {
    };
    HowItWorksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-how-it-works',
            template: __webpack_require__(/*! ./how-it-works.component.html */ "./src/app/how-it-works/how-it-works.component.html"),
            styles: [__webpack_require__(/*! ./how-it-works.component.css */ "./src/app/how-it-works/how-it-works.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HowItWorksComponent);
    return HowItWorksComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-sm-0 {\r\n  margin-right: 10px;\r\nmargin-right: 10px;\r\n}\r\n.offers-btn {\r\n    background-color: transparent;\r\n    color: silver;\r\n    font-weight: 350;\r\n    background-repeat: no-repeat;\r\n    border: none;\r\n    cursor:pointer;\r\n    overflow: hidden;\r\n    outline:none;\r\n    font-size: 1em;\r\n    padding: 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCLGtCQUFrQjtBQUNsQjtBQUNBO0lBQ0ksNkJBQTZCO0lBQzdCLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsNEJBQTRCO0lBQzVCLFlBQVk7SUFDWixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixjQUFjO0lBQ2QsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5teS1zbS0wIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbm1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG4ub2ZmZXJzLWJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGNvbG9yOiBzaWx2ZXI7XHJcbiAgICBmb250LXdlaWdodDogMzUwO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG91dGxpbmU6bm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark app-navbar\">\r\n  <a class=\"navbar-brand\" routerLink=\"home\">Home</a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor02\" aria-controls=\"navbarColor02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapng se navbar-collapse\" id=\"navbarColor02\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"offers\">Show offers</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"how-it-works\">How It Works</a>\r\n        </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"faq\">FAQ</a>\r\n      </li>\r\n      <!--\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\"></a>\r\n        </li>\r\n      -->\r\n      <li ngbDropdown class=\"nav-item dropdown\">\r\n        <a ngbDropdownToggle class=\"nav-link dropdown-toggle\" id=\"dropdown01\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Account</a>\r\n        <div ngbDropdownMenu class=\"dropdown-menu\" aria-labelledby=\"dropdown01\">\r\n          <a class=\"dropdown-item\" href=\"profile\">Profile settings</a>\r\n          <a class=\"dropdown-item\" routerLink=\"new-offer\">Add offer</a>\r\n          <a  class=\"dropdown-item\"  (click)=\"authService.SignOut()\">\r\n            Log out\r\n            </a>\r\n            <a class=\"dropdown-item\" routerLink=\"user-profile\">User details</a>\r\n\r\n        </div>\r\n    </ul>\r\n    <!-- <form class=\"form-inline my-2 my-lg-0\">\r\n      <button class=\"btn btn-primary my-2 my-sm-0\" type=\"submit\">Sign In</button>\r\n      <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Sign Up</button>\r\n    </form>  -->\r\n  </div>\r\n</nav>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(data, router, ngZone) {
        this.data = data;
        this.router = router;
        this.ngZone = ngZone;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/offers/offer/offer.component.css":
/*!**************************************************!*\
  !*** ./src/app/offers/offer/offer.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL29mZmVycy9vZmZlci9vZmZlci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/offers/offer/offer.component.html":
/*!***************************************************!*\
  !*** ./src/app/offers/offer/offer.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"display-4\">Add Offer</h1>\r\n<form #form=\"ngForm\" autocomplete=\"off\" (submit)=\"onSubmit(form)\">\r\n   <div class=\"form-group\">\r\n     <input name =\"title\" #title=\"ngModel\" [(ngModel)]=\"service.formData.title\" type=\"text\" class=\"form-control\" placeholder=\"title\" required>\r\n   </div>\r\n    <div *ngIf=\"title.invalid && title.touched\" class=\"validation-error\">This field is required</div>\r\n   <div class=\"form-group\">\r\n      <input name =\"content\" #content=\"ngModel\" [(ngModel)]=\"service.formData.content\" type=\"text\" class=\"form-control\" placeholder=\"content\" required>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <input name =\"location\" #location=\"ngModel\" [(ngModel)]=\"service.formData.location\" type=\"text\" class=\"form-control\" placeholder=\"location\">\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <button type=\"submit\" [disabled]=\"form.invalid\" class=\"btn btn-lg btn-block btn-info\">SUBIMT</button>\r\n      </div>\r\n </form>\r\n      \r\n      \r\n"

/***/ }),

/***/ "./src/app/offers/offer/offer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/offers/offer/offer.component.ts ***!
  \*************************************************/
/*! exports provided: OfferComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferComponent", function() { return OfferComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_shared_offer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/offer.service */ "./src/app/shared/offer.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var OfferComponent = /** @class */ (function () {
    function OfferComponent(service, firestore, toastr) {
        this.service = service;
        this.firestore = firestore;
        this.toastr = toastr;
    }
    OfferComponent.prototype.ngOnInit = function () {
        this.resetForm();
    };
    OfferComponent.prototype.resetForm = function (form) {
        if (form != null) {
            form.resetForm();
        }
        this.service.formData = {
            id: null,
            title: '',
            content: '',
            location: '',
        };
    };
    OfferComponent.prototype.onSubmit = function (form) {
        var data = form.value;
        this.firestore.collection('auto').add(data);
        this.resetForm(form);
        this.toastr.success('Submitted successfully', 'Offer registerd');
    };
    OfferComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-offer',
            template: __webpack_require__(/*! ./offer.component.html */ "./src/app/offers/offer/offer.component.html"),
            styles: [__webpack_require__(/*! ./offer.component.css */ "./src/app/offers/offer/offer.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_offer_service__WEBPACK_IMPORTED_MODULE_3__["OfferService"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"], ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], OfferComponent);
    return OfferComponent;
}());



/***/ }),

/***/ "./src/app/offers/offers.component.css":
/*!*********************************************!*\
  !*** ./src/app/offers/offers.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.selected {\r\n    background-color: #CFD8DC !important;\r\n    color: white;\r\n  }\r\n  .offers {\r\n    margin: 0 0 2em 0;\r\n    list-style-type: none;\r\n    padding: 0;\r\n    width: 15em;\r\n    \r\n  }\r\n  .offers li {\r\n    cursor: pointer;\r\n    position: relative;\r\n    left: 0;\r\n    background-color: #EEE;\r\n    margin: .5em;\r\n    padding: .3em 0;\r\n    height: 1.6em;\r\n    border-radius: 4px;\r\n    \r\n  }\r\n  .offers li.selected:hover {\r\n    background-color: #BBD8DC !important;\r\n    color: white;\r\n  }\r\n  .offers li:hover {\r\n    color: #607D8B;\r\n    background-color: #DDD;\r\n    left: .1em;\r\n  }\r\n  .offers .text {\r\n    position: relative;\r\n    top: -3px;\r\n  }\r\n  .offers .badge {\r\n    display: inline-block;\r\n    font-size: small;\r\n    color: white;\r\n    padding: 0.8em 0.7em 0 0.7em;\r\n    background-color: #607D8B;\r\n    line-height: 1em;\r\n    position: relative;\r\n    left: -1px;\r\n    top: -4px;\r\n    height: 1.8em;\r\n    margin-right: .8em;\r\n    border-radius: 4px 0 0 4px;\r\n  }\r\n  body{\r\n    padding: 2rem 0rem;\r\n    \r\n  }\r\n  .image-parent {\r\n    max-width: 40px;\r\n  }\r\n  h2{\r\n    color: white;\r\n  }\r\n  .white{\r\n  color:white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb2ZmZXJzL29mZmVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixxQkFBcUI7SUFDckIsVUFBVTtJQUNWLFdBQVc7O0VBRWI7RUFDQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsT0FBTztJQUNQLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7O0VBRXBCO0VBQ0E7SUFDRSxvQ0FBb0M7SUFDcEMsWUFBWTtFQUNkO0VBQ0E7SUFDRSxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLFVBQVU7RUFDWjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7RUFDWDtFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osNEJBQTRCO0lBQzVCLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1QsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQiwwQkFBMEI7RUFDNUI7RUFFQTtJQUNFLGtCQUFrQjs7RUFFcEI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFFQTtJQUNFLFlBQVk7RUFDZDtFQUNGO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvb2ZmZXJzL29mZmVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zZWxlY3RlZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQ0ZEOERDICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5vZmZlcnMge1xyXG4gICAgbWFyZ2luOiAwIDAgMmVtIDA7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgd2lkdGg6IDE1ZW07XHJcbiAgICBcclxuICB9XHJcbiAgLm9mZmVycyBsaSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcclxuICAgIG1hcmdpbjogLjVlbTtcclxuICAgIHBhZGRpbmc6IC4zZW0gMDtcclxuICAgIGhlaWdodDogMS42ZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBcclxuICB9XHJcbiAgLm9mZmVycyBsaS5zZWxlY3RlZDpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkJEOERDICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIC5vZmZlcnMgbGk6aG92ZXIge1xyXG4gICAgY29sb3I6ICM2MDdEOEI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjREREO1xyXG4gICAgbGVmdDogLjFlbTtcclxuICB9XHJcbiAgLm9mZmVycyAudGV4dCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0zcHg7XHJcbiAgfVxyXG4gIC5vZmZlcnMgLmJhZGdlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogc21hbGw7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAwLjhlbSAwLjdlbSAwIDAuN2VtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYwN0Q4QjtcclxuICAgIGxpbmUtaGVpZ2h0OiAxZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiAtMXB4O1xyXG4gICAgdG9wOiAtNHB4O1xyXG4gICAgaGVpZ2h0OiAxLjhlbTtcclxuICAgIG1hcmdpbi1yaWdodDogLjhlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweCAwIDAgNHB4O1xyXG4gIH1cclxuXHJcbiAgYm9keXtcclxuICAgIHBhZGRpbmc6IDJyZW0gMHJlbTtcclxuICAgIFxyXG4gIH1cclxuICAuaW1hZ2UtcGFyZW50IHtcclxuICAgIG1heC13aWR0aDogNDBweDtcclxuICB9XHJcblxyXG4gIGgye1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuLndoaXRle1xyXG4gIGNvbG9yOndoaXRlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/offers/offers.component.html":
/*!**********************************************!*\
  !*** ./src/app/offers/offers.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Offers</h2>\r\n<table datatable class=\"row-border hover\">\r\n<thead>\r\n  <tr class='white'>\r\n    <th>ID</th>\r\n    <th>Title</th>\r\n    <th>Content</th>\r\n    <th>Location</th>\r\n    <th></th>\r\n  </tr>\r\n  </thead>\r\n  <tbody>\r\n  <tr  *ngFor=\"let Offer of list\">\r\n    <td  >{{Offer.id}}</td>\r\n    <td>{{Offer.title}}</td>\r\n    <td>{{Offer.content}}</td>\r\n    <td>{{Offer.location}}</td>\r\n    <td ><a class=\"btn text-danger\"  >Chat</a></td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n\r\n<!-- <app-offer-detail [Offer]=\"selectedOffer\"></app-offer-detail> -->\r\n<!-- <igx-input-group type=\"search\" class=\"search\">\r\n  <igx-prefix>\r\n      <igx-icon>search</igx-icon>\r\n  </igx-prefix>\r\n  <input #search igxInput placeholder=\"Search Contacts\" [(ngModel)]=\"searchContact\">\r\n  <igx-suffix *ngIf=\"search.value.length > 0\" (click)=\"searchContact = null\">\r\n      <igx-icon>clear</igx-icon>\r\n  </igx-suffix>\r\n</igx-input-group>\r\n\r\n<div class=\"list-sample\">\r\n  <igx-list >\r\n      <igx-list-item isHeader=\"true\">Contacts</igx-list-item>\r\n      <igx-list-item #item *ngFor=\"let Offer of offers | igxFilter: filterContacts;\">\r\n          <div class=\"item-container\">\r\n              <div class=\"contact\">\r\n                  <div class=\"contact__info\">\r\n                      <span class=\"name\">{{ offer.id }}</span>\r\n                      <span class=\"phone\">{{ offer.title }}</span>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </igx-list-item>\r\n  </igx-list>\r\n</div> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!-- <h2>My Offers</h2>\r\n<ul class=\"offers\">\r\n  <li *ngFor=\"let Offer of offers\"\r\n    [class.selected]=\"offer === selectedOffer\"\r\n    (click)=\"onSelect(Offer)\">\r\n    <span class=\"badge\">{{Offer.id}}</span> {{Offer.title}}\r\n  </li>\r\n</ul>\r\n \r\n<app-offer-detail [Offer]=\"selectedOffer\"></app-offer-detail> -->"

/***/ }),

/***/ "./src/app/offers/offers.component.ts":
/*!********************************************!*\
  !*** ./src/app/offers/offers.component.ts ***!
  \********************************************/
/*! exports provided: OffersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffersComponent", function() { return OffersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_shared_offer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/offer.service */ "./src/app/shared/offer.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




var OffersComponent = /** @class */ (function () {
    function OffersComponent(service, renderer, router) {
        this.service = service;
        this.renderer = renderer;
        this.router = router;
        this.dtOptions = {};
    }
    OffersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getOffers().subscribe(function (actionArray) {
            _this.list = actionArray.map(function (item) {
                return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: item.payload.doc.id }, item.payload.doc.data());
                // tslint:disable-next-line:semicolon
            });
        });
        this.dtOptions = {
            ajax: 'data/data.json',
            columns: [{
                    title: 'ID',
                    data: 'id'
                }, {
                    title: 'First name',
                    data: 'firstName'
                }, {
                    title: 'Last name',
                    data: 'lastName'
                }, {
                    title: 'Action',
                    render: function (data, type, full) {
                        return 'View';
                    }
                }]
        };
    };
    OffersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-offers',
            template: __webpack_require__(/*! ./offers.component.html */ "./src/app/offers/offers.component.html"),
            styles: [__webpack_require__(/*! ./offers.component.css */ "./src/app/offers/offers.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_shared_offer_service__WEBPACK_IMPORTED_MODULE_2__["OfferService"], _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], OffersComponent);
    return OffersComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h1,\r\nh6,\r\nh3,\r\nhr,\r\n.form-group{\r\n    color:white;\r\n}\r\n* {\r\n    font-size: 98%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7O0lBS0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMSxcclxuaDYsXHJcbmgzLFxyXG5ocixcclxuLmZvcm0tZ3JvdXB7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG4qIHtcclxuICAgIGZvbnQtc2l6ZTogOTglO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>Edit Profile</h1>\r\n  <hr>\r\n<div class=\"row\">\r\n    <!-- left column -->\r\n    <div class=\"col-md-3\">\r\n      <div class=\"text-center\">\r\n        <img src=\"//placehold.it/100\" class=\"avatar img-circle\" alt=\"avatar\">\r\n        <h6>Upload a different photo...</h6>\r\n        \r\n        <input type=\"file\" class=\"form-control\">\r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"row\" *ngIf=\"authService.userData as user\">\r\n      <div class=\"col-md-12\">\r\n      <div class=\"media\">\r\n      <img class=\"align-self-start mr-5 img-thumbnail rounded-circle\" src=\"{{(user.photoURL) ? user.photoURL : '/assets/dummy-user.png'}}\"\r\n      alt=\"{{user.displayName}}\">\r\n      <div class=\"media-body\">\r\n      <h1>Hello: <strong>{{(user.displayName) ? user.displayName : 'User'}}</strong></h1>\r\n      <p>User ID: <strong>{{user.uid}}</strong></p>\r\n      <p>Email: <strong>{{user.email}}</strong></p>\r\n      <p>Email Verified: <strong>{{user.emailVerified}}</strong></p>\r\n      </div>\r\n      </div>\r\n      </div>\r\n      </div>\r\n    <div class=\"col-md-9 personal-info\">\r\n    \r\n      <h3>Personal info</h3>\r\n      \r\n      <form class=\"form-horizontal\" role=\"form\">\r\n        <div class=\"form-group\">\r\n          <label class=\"col-lg-3 control-label\">First name:</label>\r\n          <div class=\"col-lg-8\">\r\n            <input class=\"form-control\" type=\"text\" value=\"First\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"col-lg-3 control-label\">Last name:</label>\r\n          <div class=\"col-lg-8\">\r\n            <input class=\"form-control\" type=\"text\" value=\"Last\">\r\n          </div>\r\n        </div>\r\n        \r\n        <div class=\"form-group\">\r\n          <label class=\"col-lg-3 control-label\">Email:</label>\r\n          <div class=\"col-lg-8\">\r\n            <input class=\"form-control\" type=\"text\" value=\"FirstLast@gmail.com\">\r\n          </div>\r\n        </div>\r\n        \r\n        <div class=\"form-group\">\r\n          <label class=\"col-md-3 control-label\">Username:</label>\r\n          <div class=\"col-md-8\">\r\n            <input class=\"form-control\" type=\"text\" value=\"LastFirst123\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"col-md-3 control-label\">Password:</label>\r\n          <div class=\"col-md-8\">\r\n            <input class=\"form-control\" type=\"password\" value=\"11111122333\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"col-md-3 control-label\">Confirm password:</label>\r\n          <div class=\"col-md-8\">\r\n            <input class=\"form-control\" type=\"password\" value=\"11111122333\">\r\n          </div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label class=\"col-md-3 control-label\"></label>\r\n          <div class=\"col-md-8\">\r\n            <input type=\"button\" class=\"btn btn-primary\" value=\"Save Changes\">\r\n            <span></span>\r\n            <input type=\"reset\" class=\"btn btn-secondary\" value=\"Cancel\">\r\n          </div>\r\n        </div>\r\n      </form>\r\n    </div>\r\n</div>\r\n</div>\r\n<hr>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AuthService = /** @class */ (function () {
    function AuthService(afs, // Inject Firestore service
    afAuth, // Inject Firebase auth service
    router, ngZone // NgZone service to remove outside scope warning
    ) {
        var _this = this;
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.ngZone = ngZone;
        /* Saving user data in localstorage when
        logged in and setting up null when logged out */
        this.afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.userData = user;
                localStorage.setItem('user', JSON.stringify(_this.userData));
                JSON.parse(localStorage.getItem('user'));
            }
            else {
                localStorage.setItem('user', null);
                JSON.parse(localStorage.getItem('user'));
            }
            // tslint:disable-next-line:semicolon
        });
    }
    // Sign in with email/password
    AuthService.prototype.SignIn = function (email, password) {
        var _this = this;
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (result) {
            _this.ngZone.run(function () {
                _this.router.navigate(['home']);
            });
            _this.SetUserData(result.user);
        }).catch(function (error) {
            // tslint:disable-next-line:semicolon
            window.alert(error.message);
            // tslint:disable-next-line:semicolon
        });
    };
    // Sign up with email/password
    AuthService.prototype.SignUp = function (email, password) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (result) {
            /* Call the SendVerificaitonMail() function when new user sign
            up and returns promise */
            _this.SendVerificationMail();
            _this.SetUserData(result.user);
        }).catch(function (error) {
            window.alert(error.message);
        });
    };
    // Send email verfificaiton when new user sign up
    AuthService.prototype.SendVerificationMail = function () {
        var _this = this;
        return this.afAuth.auth.currentUser.sendEmailVerification()
            .then(function () {
            _this.router.navigate(['verify-email-address']);
            // tslint:disable-next-line:semicolon
        });
    };
    // Reset Forggot password
    AuthService.prototype.ForgotPassword = function (passwordResetEmail) {
        return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
            .then(function () {
            window.alert('Password reset email sent, check your inbox.');
        }).catch(function (error) {
            // tslint:disable-next-line:semicolon
            window.alert(error);
            // tslint:disable-next-line:semicolon
        });
    };
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        // Returns true when user is looged in and email is verified
        get: function () {
            var user = JSON.parse(localStorage.getItem('user'));
            return (user !== null && user.emailVerified !== false) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    // Sign in with Google
    AuthService.prototype.GoogleAuth = function () {
        return this.AuthLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider());
    };
    // Auth logic to run auth providers
    AuthService.prototype.AuthLogin = function (provider) {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(provider)
            .then(function (result) {
            _this.ngZone.run(function () {
                _this.router.navigate(['home']);
                // tslint:disable-next-line:semicolon
            });
            _this.SetUserData(result.user);
        }).catch(function (error) {
            // tslint:disable-next-line:semicolon
            window.alert(error);
            // tslint:disable-next-line:semicolon
        });
    };
    /* Setting up user data when sign in with username/password,
    sign up with username/password and sign in with social auth
    provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
    AuthService.prototype.SetUserData = function (user) {
        var userRef = this.afs.doc("users/" + user.uid);
        var userData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified
            // tslint:disable-next-line:semicolon
        };
        return userRef.set(userData, {
            merge: true
            // tslint:disable-next-line:semicolon
        });
    };
    // Sign out
    AuthService.prototype.SignOut = function () {
        var _this = this;
        return this.afAuth.auth.signOut().then(function () {
            localStorage.removeItem('user');
            _this.router.navigate(['sign-in']);
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] // NgZone service to remove outside scope warning
        ])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/guard/auth.guard.ts":
/*!********************************************!*\
  !*** ./src/app/shared/guard/auth.guard.ts ***!
  \********************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (this.authService.isLoggedIn !== true) {
            window.alert('Access Denied, Login is Required to Access This Page!');
            this.router.navigate(['home']);
        }
        return true;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/shared/guard/secure-inner-pages.guard.ts.guard.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/guard/secure-inner-pages.guard.ts.guard.ts ***!
  \*******************************************************************/
/*! exports provided: SecureInnerPagesGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecureInnerPagesGuard", function() { return SecureInnerPagesGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__);





var SecureInnerPagesGuard = /** @class */ (function () {
    function SecureInnerPagesGuard(afAuth, authService, router) {
        this.afAuth = afAuth;
        this.authService = authService;
        this.router = router;
    }
    SecureInnerPagesGuard.prototype.canActivate = function (next, state) {
        if (this.authService.isLoggedIn) {
            window.alert('You are not allowed to access this URL!');
            this.router.navigate(['dashboard']);
        }
        return true;
    };
    SecureInnerPagesGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SecureInnerPagesGuard);
    return SecureInnerPagesGuard;
}());



/***/ }),

/***/ "./src/app/shared/offer.service.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/offer.service.ts ***!
  \*****************************************/
/*! exports provided: OfferService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OfferService", function() { return OfferService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var OfferService = /** @class */ (function () {
    function OfferService(firestore) {
        this.firestore = firestore;
    }
    OfferService.prototype.getOffers = function () {
        return this.firestore.collection('auto').snapshotChanges();
    };
    OfferService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_1__["AngularFirestore"]])
    ], OfferService);
    return OfferService;
}());



/***/ }),

/***/ "./src/app/shared/services/auth.service.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.cjs.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var AuthService = /** @class */ (function () {
    function AuthService(afs, // Inject Firestore service
    afAuth, // Inject Firebase auth service
    router, ngZone // NgZone service to remove outside scope warning
    ) {
        var _this = this;
        this.afs = afs;
        this.afAuth = afAuth;
        this.router = router;
        this.ngZone = ngZone;
        /* Saving user data in localstorage when
        logged in and setting up null when logged out */
        this.afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.userData = user;
                localStorage.setItem('user', JSON.stringify(_this.userData));
                JSON.parse(localStorage.getItem('user'));
            }
            else {
                localStorage.setItem('user', null);
                JSON.parse(localStorage.getItem('user'));
            }
        });
    }
    // Sign in with email/password
    AuthService.prototype.SignIn = function (email, password) {
        var _this = this;
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (result) {
            _this.ngZone.run(function () {
                _this.router.navigate(['home']);
            });
            _this.SetUserData(result.user);
        }).catch(function (error) {
            window.alert(error.message);
        });
    };
    // Sign up with email/password
    AuthService.prototype.SignUp = function (email, password) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (result) {
            /* Call the SendVerificaitonMail() function when new user sign
            up and returns promise */
            _this.SendVerificationMail();
            _this.SetUserData(result.user);
        }).catch(function (error) {
            window.alert(error.message);
        });
    };
    // Send email verfificaiton when new user sign up
    AuthService.prototype.SendVerificationMail = function () {
        var _this = this;
        return this.afAuth.auth.currentUser.sendEmailVerification()
            .then(function () {
            _this.router.navigate(['verify-email-address']);
        });
    };
    // Reset Forggot password
    AuthService.prototype.ForgotPassword = function (passwordResetEmail) {
        return this.afAuth.auth.sendPasswordResetEmail(passwordResetEmail)
            .then(function () {
            window.alert('Password reset email sent, check your inbox.');
        }).catch(function (error) {
            window.alert(error);
        });
    };
    Object.defineProperty(AuthService.prototype, "isLoggedIn", {
        // Returns true when user is looged in and email is verified
        get: function () {
            var user = JSON.parse(localStorage.getItem('user'));
            return (user !== null && user.emailVerified !== false) ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    // Sign in with Google
    AuthService.prototype.GoogleAuth = function () {
        return this.AuthLogin(new firebase_app__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider());
    };
    // Auth logic to run auth providers
    AuthService.prototype.AuthLogin = function (provider) {
        var _this = this;
        return this.afAuth.auth.signInWithPopup(provider)
            .then(function (result) {
            _this.ngZone.run(function () {
                _this.router.navigate(['home']);
            });
            _this.SetUserData(result.user);
        }).catch(function (error) {
            window.alert(error);
        });
    };
    /* Setting up user data when sign in with username/password,
    sign up with username/password and sign in with social auth
    provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */
    AuthService.prototype.SetUserData = function (user) {
        var userRef = this.afs.doc("users/" + user.uid);
        var userData = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            emailVerified: user.emailVerified
        };
        return userRef.set(userData, {
            merge: true
        });
    };
    // Sign out
    AuthService.prototype.SignOut = function () {
        var _this = this;
        return this.afAuth.auth.signOut().then(function () {
            localStorage.removeItem('user');
            _this.router.navigate(['sign-in']);
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"],
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] // NgZone service to remove outside scope warning
        ])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/signin/signin.component.css":
/*!*********************************************!*\
  !*** ./src/app/signin/signin.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".displayTable{\r\n    color: white;\r\n}\r\na{\r\n    color:white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvc2lnbmluL3NpZ25pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRpc3BsYXlUYWJsZXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5he1xyXG4gICAgY29sb3I6d2hpdGU7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/signin/signin.component.html":
/*!**********************************************!*\
  !*** ./src/app/signin/signin.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"displayTable\">\r\n  <div class=\"displayTableCell\">\r\n  <div class=\"authBlock\">\r\n  <h3>Sign In</h3>\r\n  <div class=\"formGroup\">\r\n  <input type=\"text\" class=\"formControl\" placeholder=\"Username\" #userName required>\r\n  </div>\r\n  <div class=\"formGroup\">\r\n  <input type=\"password\" class=\"formControl\" placeholder=\"Password\" #userPassword required>\r\n  </div>\r\n  <!-- Calling SignIn Api from AuthService -->\r\n  <div class=\"formGroup\">\r\n  <input type=\"button\" class=\"btn btn-primary\" value=\"Log in\" (click)=\"authService.SignIn(userName.value, userPassword.value)\">\r\n  </div>\r\n  <div class=\"formGroup\">\r\n  <span class=\"or\"><span class=\"orInner\">Or</span></span>\r\n  </div>\r\n  <!-- Calling GoogleAuth Api from AuthService -->\r\n  <div class=\"formGroup\">\r\n  <button type=\"button\" class=\"btn btn-success\" (click)=\"authService.GoogleAuth()\">\r\n  <i class=\"fab fa-google-plus-g\"></i>\r\n  Log in with Google\r\n  </button>\r\n  </div>\r\n  <div class=\"forgotPassword\">\r\n  <span routerLink=\"/forgot-password\">Forgot Password?</span>\r\n  </div>\r\n  </div>\r\n  <div class=\"redirectToLogin\">\r\n  <span>Don't have an account?<span class=\"redirect\" routerLink=\"/register-user\"> Sign Up</span></span>\r\n  </div>\r\n  </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/signin/signin.component.ts":
/*!********************************************!*\
  !*** ./src/app/signin/signin.component.ts ***!
  \********************************************/
/*! exports provided: SigninComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SigninComponent", function() { return SigninComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var SigninComponent = /** @class */ (function () {
    // tslint:disable-next-line:member-ordering
    function SigninComponent(authService) {
        this.authService = authService;
    }
    SigninComponent.prototype.ngOnInit = function () { };
    SigninComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-signin',
            template: __webpack_require__(/*! ./signin.component.html */ "./src/app/signin/signin.component.html"),
            styles: [__webpack_require__(/*! ./signin.component.css */ "./src/app/signin/signin.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], SigninComponent);
    return SigninComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.displayTable{\r\n    color: white;\r\n}\r\na{\r\n    color:white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uZGlzcGxheVRhYmxle1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcbmF7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*<div class=\"displayTable\">\r\n  <div class=\"displayTableCell\">\r\n  <div class=\"authBlock\">\r\n  <h3>Sign Up</h3>\r\n  <div class=\"formGroup\">\r\n      <input type=\"text\" class=\"formControl\" placeholder=\"displayName\" #displayName required>\r\n      </div>\r\n  <div class=\"formGroup\">\r\n  <input type=\"email\" class=\"formControl\" placeholder=\"Email Address\" #userEmail required>\r\n  </div>\r\n  <div class=\"formGroup\">\r\n  <input type=\"password\" class=\"formControl\" placeholder=\"Password\" #userPwd required>\r\n  </div>\r\n  <div class=\"formGroup\">\r\n  <input type=\"button\" class=\"btn btn-primary\" value=\"Sign Up\" (click)=\"authService.SignUp(userEmail.value, userPwd.value)\">\r\n  </div>\r\n  <div class=\"formGroup\">\r\n  <span class=\"or\"><span class=\"orInner\">Or</span></span>\r\n  </div>\r\n  <!-- Continue with Google -->\r\n  <div class=\"formGroup\">\r\n  <button type=\"button\" class=\"btn btn-success\" (click)=\"authService.GoogleAuth()\">\r\n  <i class=\"fab fa-google-plus-g\"></i>\r\n  Continue with Google\r\n  </button>\r\n  </div>\r\n  <!-- Continue with Facebook -->\r\n  <div class=\"formGroup\">\r\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"authService.FacebookAuth()\">\r\n  <i class=\"fab fa-facebook\"></i>\r\n  Continue with Facebook\r\n  </button>\r\n  </div>\r\n  </div>\r\n  <div class=\"redirectToLogin\">\r\n  <span>Already have an account? <span class=\"redirect\" routerLink=\"/sign-in\"> Log In </span></span>\r\n  </div>\r\n  </div>\r\n  </div>\r\n\r\n\r\n  <!--\r\n    <div class=\"displayTable\">\r\n  <div class=\"displayTableCell\">\r\n  <div class=\"authBlock\">\r\n  <h3>Sign Up</h3>\r\n  <div class=\"formGroup\">\r\n  <input type=\"email\" class=\"formControl\" placeholder=\"Email Address\" #userEmail required>\r\n  </div>\r\n  <div class=\"formGroup\">\r\n  <input type=\"password\" class=\"formControl\" placeholder=\"Password\" #userPwd required>\r\n  </div>\r\n  <div class=\"formGroup\">\r\n  <input type=\"button\" class=\"btn btnPrimary\" value=\"Sign Up\" (click)=\"authService.SignUp(userEmail.value, userPwd.value)\">\r\n  </div>\r\n  <div class=\"formGroup\">\r\n  <span class=\"or\"><span class=\"orInner\">Or</span></span>\r\n  </div>\r\n\r\n  <div class=\"formGroup\">\r\n    <button type=\"button\" class=\"btn googleBtn\" (click)=\"authService.GoogleAuth()\">\r\n    <i class=\"fab fa-google-plus-g\"></i>\r\n    Continue with Google\r\n    </button>\r\n    </div>\r\n    \r\n    <div class=\"formGroup\">\r\n    <button type=\"button\" class=\"btn facebookBtn\" (click)=\"authService.FacebookAuth()\">\r\n    <i class=\"fab fa-facebook\"></i>\r\n    Continue with Facebook\r\n    </button>\r\n    </div>\r\n    </div>\r\n    <div class=\"redirectToLogin\">\r\n    <span>Already have an account? <span class=\"redirect\" routerLink=\"/sign-in\">Log In</span></span>\r\n    </div>\r\n    </div>\r\n    </div>\r\n  -->"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");



var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(authService) {
        this.authService = authService;
    }
    SignUpComponent.prototype.ngOnInit = function () { };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/user-profile/user-profile.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".white  {\r\n    color: azure;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1wcm9maWxlL3VzZXItcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL3VzZXItcHJvZmlsZS91c2VyLXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aGl0ZSAge1xyXG4gICAgY29sb3I6IGF6dXJlO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  \n  <!-- Sidebar navigation -->\n  <div class=\"container-fluid dashboardContainer\">\n    <div class=\"row\">\n  \n      <nav class=\"col-md-2 d-md-block bg-light sidebar\">\n        <div class=\"sidebar-sticky\">\n          <ul class=\"nav flex-column\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\">\n                <i class=\"fas fa-user\"></i>User Profile\n              </a>\n            </li>\n            <!-- Calling SignOut() Api from AuthService -->\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" (click)=\"authService.SignOut()\">\n                <i class=\"fas fa-sign-out-alt\"></i>Log out\n              </a>\n            </li>\n          </ul>\n        </div>\n      </nav>\n  \n      <!-- Main content -->\n      <main role=\"main\" class=\"col-md-9 ml-sm-auto col-lg-10 px-4\">\n        <div class=\"inner-adjust\">\n  \n          <div class=\"pt-3 pb-2 mb-3 border-bottom\">\n            <h1 class=\"h2 white\">User Profile</h1>\n          </div>\n          <!-- Show user data when logged in -->\n          <div class=\"row white\" *ngIf=\"authService.userData as user\">\n            <div class=\"col-md-12\">\n              <div class=\"media\">\n                <img class=\"align-self-start mr-5 img-thumbnail rounded-circle\" src=\"{{(user.photoURL) ? user.photoURL : '/src/resources\\img\\dummy-user'}}\"\n                  alt=\"{{user.displayName}}\">\n                <div class=\"media-body\">\n                  <h1>Hello: <strong>{{(user.displayName) ? user.displayName : 'Kacper'}}</strong></h1>\n                  <p>Email: <strong>{{user.email}}</strong></p>\n                </div>\n              </div>\n            </div>\n          </div>\n  \n        </div>\n      </main>\n  \n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/user-profile/user-profile.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-profile/user-profile.component.ts ***!
  \********************************************************/
/*! exports provided: UserProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProfileComponent", function() { return UserProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var UserProfileComponent = /** @class */ (function () {
    function UserProfileComponent(authService) {
        this.authService = authService;
    }
    UserProfileComponent.prototype.ngOnInit = function () {
    };
    UserProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-user-profile',
            template: __webpack_require__(/*! ./user-profile.component.html */ "./src/app/user-profile/user-profile.component.html"),
            styles: [__webpack_require__(/*! ./user-profile.component.css */ "./src/app/user-profile/user-profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], UserProfileComponent);
    return UserProfileComponent;
}());



/***/ }),

/***/ "./src/app/verify-email/verify-email.component.css":
/*!*********************************************************!*\
  !*** ./src/app/verify-email/verify-email.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ZlcmlmeS1lbWFpbC92ZXJpZnktZW1haWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/verify-email/verify-email.component.html":
/*!**********************************************************!*\
  !*** ./src/app/verify-email/verify-email.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"displayTable\">\n  <div class=\"displayTableCell\">\n  <div class=\"authBlock\">\n  <h3>Thank You for Registering</h3>\n  <div class=\"formGroup\" *ngIf=\"authService.userData as user\">\n  <p class=\"text-center\">We have sent a confirmation email to <strong>{{user.email}}</strong>.</p>\n  <p class=\"text-center\">Please check your email and click on the link to verfiy your email address.</p>\n  </div>\n  <!-- Calling SendVerificationMail() method using authService Api -->\n  <div class=\"formGroup\">\n  <button type=\"button\" class=\"btn btnPrimary\" (click)=\"authService.SendVerificationMail()\">\n  <i class=\"fas fa-redo-alt\"></i>\n  Resend Verification Email\n  </button>\n  </div>\n  </div>\n  <div class=\"redirectToLogin\">\n  <span>Go back to?<span class=\"redirect\" routerLink=\"/sign-in\"> Sign in</span></span>\n  </div>\n  </div>\n  </div>"

/***/ }),

/***/ "./src/app/verify-email/verify-email.component.ts":
/*!********************************************************!*\
  !*** ./src/app/verify-email/verify-email.component.ts ***!
  \********************************************************/
/*! exports provided: VerifyEmailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifyEmailComponent", function() { return VerifyEmailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/auth.service */ "./src/app/shared/services/auth.service.ts");



var VerifyEmailComponent = /** @class */ (function () {
    function VerifyEmailComponent(authService) {
        this.authService = authService;
    }
    VerifyEmailComponent.prototype.ngOnInit = function () {
    };
    VerifyEmailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-verify-email',
            template: __webpack_require__(/*! ./verify-email.component.html */ "./src/app/verify-email/verify-email.component.html"),
            styles: [__webpack_require__(/*! ./verify-email.component.css */ "./src/app/verify-email/verify-email.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], VerifyEmailComponent);
    return VerifyEmailComponent;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    firebaseConfig: {
        apiKey: 'AIzaSyAkJCUFuDBkBO3pKN6I7CwoJyhhfQYaZFw',
        authDomain: 'operarius-3f1cb.firebaseapp.com',
        databaseURL: 'https://operarius-3f1cb.firebaseio.com',
        projectId: 'operarius-3f1cb',
        storageBucket: 'operarius-3f1cb.appspot.com',
        messagingSenderId: '680782784545',
        appId: '1:680782784545:web:a0893c864505ee5f'
    }
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    firebaseConfig: {
        apiKey: 'AIzaSyAkJCUFuDBkBO3pKN6I7CwoJyhhfQYaZFw',
        authDomain: 'operarius-3f1cb.firebaseapp.com',
        databaseURL: 'https://operarius-3f1cb.firebaseio.com',
        projectId: 'operarius-3f1cb',
        storageBucket: 'operarius-3f1cb.appspot.com',
        messagingSenderId: '680782784545',
        appId: '1:680782784545:web:a0893c864505ee5f'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Mesiya391\Desktop\opera\Operarius\Operarius\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map