(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "3vVB":
/*!*********************************************!*\
  !*** ./src/app/campaign/campaign.module.ts ***!
  \*********************************************/
/*! exports provided: CampaignModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignModule", function() { return CampaignModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _campaign_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./campaign-routing.module */ "MCi1");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "KHsv");
/* harmony import */ var _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/nav/nav.component */ "ClTg");
/* harmony import */ var _components_feature_feature_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/feature/feature.component */ "57ZV");
/* harmony import */ var _components_create_create_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/create/create.component */ "IYVN");
/* harmony import */ var _components_view_view_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/view/view.component */ "tsvL");
/* harmony import */ var _components_nav_plain_nav_plain_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/nav-plain/nav-plain.component */ "kthj");
/* harmony import */ var _components_prepare_prepare_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/prepare/prepare.component */ "Nkrz");
/* harmony import */ var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular-slider/ngx-slider */ "mgaL");
/* harmony import */ var _components_campaign_user_campaign_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/campaign-user/campaign-user.component */ "ew8j");
/* harmony import */ var _common_common_func_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../common/common-func.module */ "VeTl");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ "fXoL");














class CampaignModule {
}
CampaignModule.ɵfac = function CampaignModule_Factory(t) { return new (t || CampaignModule)(); };
CampaignModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: CampaignModule });
CampaignModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _campaign_routing_module__WEBPACK_IMPORTED_MODULE_1__["CampaignRoutingModule"],
            _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_9__["NgxSliderModule"],
            _common_common_func_module__WEBPACK_IMPORTED_MODULE_11__["CommonFuncModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](CampaignModule, { declarations: [_components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], _components_nav_nav_component__WEBPACK_IMPORTED_MODULE_3__["NavComponent"], _components_feature_feature_component__WEBPACK_IMPORTED_MODULE_4__["FeatureComponent"], _components_create_create_component__WEBPACK_IMPORTED_MODULE_5__["CreateComponent"], _components_view_view_component__WEBPACK_IMPORTED_MODULE_6__["ViewComponent"], _components_nav_plain_nav_plain_component__WEBPACK_IMPORTED_MODULE_7__["NavPlainComponent"], _components_prepare_prepare_component__WEBPACK_IMPORTED_MODULE_8__["PrepareComponent"], _components_campaign_user_campaign_user_component__WEBPACK_IMPORTED_MODULE_10__["CampaignUserComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _campaign_routing_module__WEBPACK_IMPORTED_MODULE_1__["CampaignRoutingModule"],
        _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_9__["NgxSliderModule"],
        _common_common_func_module__WEBPACK_IMPORTED_MODULE_11__["CommonFuncModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"]] }); })();


/***/ }),

/***/ "57ZV":
/*!******************************************************************!*\
  !*** ./src/app/campaign/components/feature/feature.component.ts ***!
  \******************************************************************/
/*! exports provided: FeatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureComponent", function() { return FeatureComponent; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_common_service_person_person_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/service/person/person.service */ "NzDZ");
/* harmony import */ var src_app_common_service_campaign_campaign_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/service/campaign/campaign.service */ "Oom1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _common_pipes_limit_to_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/pipes/limit-to.pipe */ "SC6h");







function FeatureComponent_img_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 11);
} if (rf & 2) {
    const peopleImg_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", peopleImg_r1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
class FeatureComponent {
    constructor(router, activeRoute, personService, campaignService) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.personService = personService;
        this.campaignService = campaignService;
        this.text = "";
        this.location = "/home";
        this.peopleImgList = [];
    }
    ngOnInit() {
        this.personService.getUsersByCount(src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].api.person.displayCount, this.location).then((personList) => {
            this.peopleImgList.splice(0);
            personList.forEach((person) => {
                this.peopleImgList.push(person.img);
            });
        });
    }
    navigateToLocation() {
        this.router.navigate(['../view/' + this.location], { relativeTo: this.activeRoute });
    }
    removeCampaign(event) {
        this.campaignService.remove(this.location);
        event.stopPropagation();
    }
}
FeatureComponent.ɵfac = function FeatureComponent_Factory(t) { return new (t || FeatureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_service_person_person_service__WEBPACK_IMPORTED_MODULE_3__["PersonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_service_campaign_campaign_service__WEBPACK_IMPORTED_MODULE_4__["CampaignService"])); };
FeatureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: FeatureComponent, selectors: [["app-feature"]], inputs: { text: "text", location: "location" }, decls: 13, vars: 5, consts: [[1, "square-border-gradient", "feature", 3, "click"], [1, "d-flex", "justify-content-center", "align-middle"], [1, "m-0", "p-0", "feature-text", "col-8", "text-color-1", "text-uppercase", "font-size-4", "text-center"], [1, "d-flex", "justify-content-center"], [1, "col-4"], ["id", "img12", "src", "../../../../assets/img/Img12.png"], [1, "d-flex", "d-flex", "justify-content-between"], [1, "col-10"], ["class", "campaign-user-image mx-2", 3, "src", 4, "ngFor", "ngForOf"], [1, "col-2"], ["id", "img12", "src", "../../../../assets/img/Img28.png", 3, "click"], [1, "campaign-user-image", "mx-2", 3, "src"]], template: function FeatureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FeatureComponent_Template_div_click_0_listener() { return ctx.navigateToLocation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "limitTo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](10, FeatureComponent_img_10_Template, 1, 1, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function FeatureComponent_Template_img_click_12_listener($event) { return ctx.removeCampaign($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 2, ctx.text, 14), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.peopleImgList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]], pipes: [_common_pipes_limit_to_pipe__WEBPACK_IMPORTED_MODULE_6__["LimitToPipe"]], styles: [".feature[_ngcontent-%COMP%] {\r\n    height: 160px;\r\n}\r\n\r\n.feature-text[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    top: -25px;\r\n    min-height: 50px;\r\n    background-color: black;\r\n    vertical-align: center;\r\n    line-height: 50px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZlYXR1cmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJmZWF0dXJlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmVhdHVyZSB7XHJcbiAgICBoZWlnaHQ6IDE2MHB4O1xyXG59XHJcblxyXG4uZmVhdHVyZS10ZXh0IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogLTI1cHg7XHJcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "A/ap":
/*!*********************************************************!*\
  !*** ./node_modules/detect-passive-events/lib/index.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// adapted from https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md
var detectPassiveEvents = {
  update: function update() {
    if (typeof window !== 'undefined' && typeof window.addEventListener === 'function') {
      var passive = false;
      var options = Object.defineProperty({}, 'passive', {
        get: function get() {
          passive = true;
        }
      });
      // note: have to set and remove a no-op listener instead of null
      // (which was used previously), becasue Edge v15 throws an error
      // when providing a null callback.
      // https://github.com/rafgraph/detect-passive-events/pull/3
      var noop = function noop() {};
      window.addEventListener('testPassiveEventSupport', noop, options);
      window.removeEventListener('testPassiveEventSupport', noop, options);
      detectPassiveEvents.hasSupport = passive;
    }
  }
};

detectPassiveEvents.update();
exports.default = detectPassiveEvents;

/***/ }),

/***/ "ClTg":
/*!**********************************************************!*\
  !*** ./src/app/campaign/components/nav/nav.component.ts ***!
  \**********************************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class NavComponent {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
    }
    navigateToHome() {
        this.router.navigateByUrl("/home");
    }
    navigateToCreateCampaign() {
        this.router.navigate(['../create'], { relativeTo: this.activatedRoute });
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 12, vars: 0, consts: [["id", "nav", 1, "vertical-align"], [1, "col-3", "text-uppercase", "font-size-4", "text-color-1", "d-flex", "justify-content-between"], [1, "px-2"], ["id", "img3", "src", "../../../../assets/img/Img3.png", 3, "click"], [1, "pl-4"], ["id", "img13", "src", "../../../../assets/img/Img13.png", 3, "click"], [1, "px-2", 3, "click"], [1, "col-6", "text-center", "text-uppercase", "font-size-8", "text-color-1"], [1, "col-3"], ["id", "img4", "src", "../../../../assets/img/Img4.png", 1, "float-right"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_img_click_3_listener() { return ctx.navigateToHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_img_click_5_listener() { return ctx.navigateToCreateCampaign(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_div_click_6_listener() { return ctx.navigateToCreateCampaign(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " create new campaign ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " campaign dashboard ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#nav[_ngcontent-%COMP%]{\r\n    height: 15vh;\r\n}\r\n\r\n.vertical-align[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkIiLCJmaWxlIjoibmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbmF2e1xyXG4gICAgaGVpZ2h0OiAxNXZoO1xyXG59XHJcblxyXG4udmVydGljYWwtYWxpZ24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "GiGY":
/*!****************************************************************!*\
  !*** ./src/app/common/guard/campaign-plan-validation.guard.ts ***!
  \****************************************************************/
/*! exports provided: CampaignPlanValidationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignPlanValidationGuard", function() { return CampaignPlanValidationGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var _enums_subcription_state_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/subcription-state.enum */ "hBP7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _service_subcription_subscription_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/subcription/subscription.service */ "4/0Z");






class CampaignPlanValidationGuard {
    constructor(toaster, subcriptionService) {
        this.toaster = toaster;
        this.subcriptionService = subcriptionService;
    }
    canActivate() {
        return new Promise((success) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            var _a, _b, _c, _d, _e, _f, _g;
            const subscription = yield this.subcriptionService.getSubscription();
            if (subscription != null) {
                if (subscription.state == _enums_subcription_state_enum__WEBPACK_IMPORTED_MODULE_2__["SubcriptionState"].PENDING) {
                    this.toaster.error("If you think this is a mistake please contact " + src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].help.email + " for more assistance.");
                    this.toaster.error("We could not confirm the payment for " + ((_a = subscription.plan) === null || _a === void 0 ? void 0 : _a.name) + " please try after sometime.");
                }
                else if (subscription.state == _enums_subcription_state_enum__WEBPACK_IMPORTED_MODULE_2__["SubcriptionState"].INACTIVE) {
                    this.toaster.error("If you think this is a mistake please contact " + src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].help.email + " for more assistance.");
                    this.toaster.error("Your subcription for " + ((_b = subscription.plan) === null || _b === void 0 ? void 0 : _b.name) + " is inactivated");
                }
                else if (subscription.state == _enums_subcription_state_enum__WEBPACK_IMPORTED_MODULE_2__["SubcriptionState"].ACTIVE) {
                    if (subscription.track != null && subscription.plan != null) {
                        if (((_c = subscription.track) === null || _c === void 0 ? void 0 : _c.campaign) < ((_d = subscription.plan) === null || _d === void 0 ? void 0 : _d.campaign) || ((_e = subscription.plan) === null || _e === void 0 ? void 0 : _e.campaign) == -1) {
                            return success(true);
                        }
                        else {
                            this.toaster.error("Your subcription " + ((_f = subscription.plan) === null || _f === void 0 ? void 0 : _f.name) + " only allows creation of " + subscription.plan.campaign + " campaign.");
                        }
                    }
                    else {
                        this.toaster.error("We could not load information related your subcription" + ((_g = subscription.plan) === null || _g === void 0 ? void 0 : _g.name) + ".");
                    }
                    return success(false);
                }
            }
            else {
                this.toaster.error("If you think this is a mistake please contact " + src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].help.email + " for more assistance.");
                this.toaster.error("We could not find product subcription associated with your email address");
            }
            return success(false);
        }));
    }
}
CampaignPlanValidationGuard.ɵfac = function CampaignPlanValidationGuard_Factory(t) { return new (t || CampaignPlanValidationGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_service_subcription_subscription_service__WEBPACK_IMPORTED_MODULE_5__["SubscriptionService"])); };
CampaignPlanValidationGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CampaignPlanValidationGuard, factory: CampaignPlanValidationGuard.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "IYVN":
/*!****************************************************************!*\
  !*** ./src/app/campaign/components/create/create.component.ts ***!
  \****************************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nav_plain_nav_plain_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav-plain/nav-plain.component */ "kthj");



class CreateComponent {
    constructor(router, activeRoute) {
        this.router = router;
        this.activeRoute = activeRoute;
    }
    ngOnInit() {
    }
    navigateToPrepare() {
        this.router.navigate(['../prepare'], { relativeTo: this.activeRoute });
    }
}
CreateComponent.ɵfac = function CreateComponent_Factory(t) { return new (t || CreateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
CreateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateComponent, selectors: [["app-create"]], decls: 26, vars: 0, consts: [[1, "row"], [1, "col-12", "text-center", "text-uppercase", "font-size-8", "text-color-1", "font-bold-6"], [1, "row", "justify-content-center", "pt-5", 3, "click"], [1, "col-4", "text-center"], ["id", "img9", "src", "../../../../assets/img/Img9.png"], ["id", "img10", "src", "../../../../assets/img/Img10.png"], ["id", "img11", "src", "../../../../assets/img/Img11.png"], [1, "row", "justify-content-center", "d-flex", "align-items-center", "pt-5", 3, "click"], [1, "col-4", "text-center", "text-uppercase", "font-size-6", "text-color-1", "font-bold-6"], [1, "row", "justify-content-center", "d-flex", "pt-2", 3, "click"], [1, "col-4", "text-center", "text-uppercase", "font-size-4", "text-color-2"]], template: function CreateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav-plain");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " select where you want your leads to come from ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateComponent_Template_div_click_5_listener() { return ctx.navigateToPrepare(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateComponent_Template_div_click_12_listener() { return ctx.navigateToPrepare(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Linkedin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Sales Navigator ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " 1st Degree connections ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateComponent_Template_div_click_19_listener() { return ctx.navigateToPrepare(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " copy and paste a regular linkedin search ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " cut and paste from sales nav, list, and saved searches ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " import your current connections ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nav_plain_nav_plain_component__WEBPACK_IMPORTED_MODULE_2__["NavPlainComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjcmVhdGUuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "KHsv":
/*!**********************************************************************!*\
  !*** ./src/app/campaign/components/dashboard/dashboard.component.ts ***!
  \**********************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_common_service_campaign_campaign_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/service/campaign/campaign.service */ "Oom1");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav/nav.component */ "ClTg");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _feature_feature_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../feature/feature.component */ "57ZV");





function DashboardComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-feature", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const campaign_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", campaign_r1.name)("location", campaign_r1.id);
} }
class DashboardComponent {
    constructor(campaignService) {
        this.campaignService = campaignService;
        this.campaignList = this.campaignService.getAllCampaign();
    }
    ngOnInit() {
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_service_campaign_campaign_service__WEBPACK_IMPORTED_MODULE_1__["CampaignService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 4, vars: 1, consts: [[1, "row"], [1, "row", "height-80"], ["class", "col-3 pt-5", 4, "ngFor", "ngForOf"], [1, "col-3", "pt-5"], [3, "text", "location"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DashboardComponent_div_3_Template, 2, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.campaignList);
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _feature_feature_component__WEBPACK_IMPORTED_MODULE_4__["FeatureComponent"]], styles: [".height-80[_ngcontent-%COMP%] {\r\n    height: 80vh;\r\n    overflow-y: scroll;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWlnaHQtODAge1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59Il19 */"] });


/***/ }),

/***/ "MCi1":
/*!*****************************************************!*\
  !*** ./src/app/campaign/campaign-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: CampaignRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignRoutingModule", function() { return CampaignRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_guard_campaign_plan_validation_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/guard/campaign-plan-validation.guard */ "GiGY");
/* harmony import */ var _components_create_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/create/create.component */ "IYVN");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "KHsv");
/* harmony import */ var _components_prepare_prepare_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/prepare/prepare.component */ "Nkrz");
/* harmony import */ var _components_view_view_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/view/view.component */ "tsvL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "fXoL");








const routes = [
    {
        path: "",
        pathMatch: "prefix",
        children: [
            {
                path: "",
                pathMatch: "full",
                redirectTo: "dashboard"
            },
            {
                path: "dashboard",
                pathMatch: "full",
                component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
            },
            {
                path: "dashboard",
                pathMatch: "full",
                component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
            },
            {
                canActivate: [_common_guard_campaign_plan_validation_guard__WEBPACK_IMPORTED_MODULE_1__["CampaignPlanValidationGuard"]],
                path: "create",
                pathMatch: "full",
                component: _components_create_create_component__WEBPACK_IMPORTED_MODULE_2__["CreateComponent"]
            },
            {
                path: "prepare",
                pathMatch: "full",
                component: _components_prepare_prepare_component__WEBPACK_IMPORTED_MODULE_4__["PrepareComponent"]
            },
            {
                path: "view/:id",
                pathMatch: "full",
                component: _components_view_view_component__WEBPACK_IMPORTED_MODULE_5__["ViewComponent"]
            }
        ]
    }
];
class CampaignRoutingModule {
}
CampaignRoutingModule.ɵfac = function CampaignRoutingModule_Factory(t) { return new (t || CampaignRoutingModule)(); };
CampaignRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: CampaignRoutingModule });
CampaignRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](CampaignRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "Nkrz":
/*!******************************************************************!*\
  !*** ./src/app/campaign/components/prepare/prepare.component.ts ***!
  \******************************************************************/
/*! exports provided: PrepareComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrepareComponent", function() { return PrepareComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_common_service_campaign_campaign_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/service/campaign/campaign.service */ "Oom1");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_common_service_person_person_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/service/person/person.service */ "NzDZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_common_service_subcription_subscription_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/common/service/subcription/subscription.service */ "4/0Z");
/* harmony import */ var _nav_plain_nav_plain_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../nav-plain/nav-plain.component */ "kthj");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular-slider/ngx-slider */ "mgaL");











function PrepareComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide valid URL. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PrepareComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide valid campaign name. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PrepareComponent_div_26_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide valid number of leads. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PrepareComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ngx-slider", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PrepareComponent_div_26_div_3_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r2.options)("formControl", ctx_r2.sliderControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r2.prepareForm.controls.loadCount.touched == true && ctx_r2.prepareForm.controls.loadCount.errors !== null);
} }
function PrepareComponent_div_27_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide valid number of leads. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function PrepareComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ngx-slider", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, PrepareComponent_div_27_div_3_Template, 2, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("options", ctx_r3.options)("formControl", ctx_r3.sliderControl);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r3.prepareForm.controls.loadCount.touched == true && ctx_r3.prepareForm.controls.loadCount.errors !== null);
} }
class PrepareComponent {
    constructor(builder, campaignService, toastr, personService, router, activeRoute, subcriptionService) {
        this.campaignService = campaignService;
        this.toastr = toastr;
        this.personService = personService;
        this.router = router;
        this.activeRoute = activeRoute;
        this.subcriptionService = subcriptionService;
        this.showLeadSlidebar = false;
        this.value = 0;
        this.options = {
            ceil: 1,
            step: 1
        };
        this.sliderControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].maxLength(2500)]);
        this.prepareForm = builder.group({
            url: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]],
            loadCount: this.sliderControl
        });
        this.configureSliderOptions();
    }
    configureSliderOptions() {
        this.subcriptionService.getSubscription().then((subscription) => {
            var _a;
            if (subscription != null) {
                this.options.ceil = (_a = subscription.plan) === null || _a === void 0 ? void 0 : _a.loadLimit;
                this.options.step = 1;
                this.showLeadSlidebar = true;
            }
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        this.prepareForm.markAllAsTouched();
        if (this.prepareForm.valid) {
            const campaign = this.prepareForm.value;
            this.campaignService.create(campaign).then((campaign) => {
                this.toastr.success("Campaign was created successfully. Please allow us some time to load result");
                this.personService.fetchUsersProfiles(campaign);
                this.router.navigate(['../view/' + campaign.id], {
                    relativeTo: this.activeRoute
                });
            }, (reason) => {
                if (reason.message != undefined) {
                    this.toastr.error("Could not create campaign due to '" + reason.message + "'");
                }
                else {
                    this.toastr.error("Could not create campaign. Please try after some time.");
                }
            });
        }
    }
}
PrepareComponent.ɵfac = function PrepareComponent_Factory(t) { return new (t || PrepareComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_service_campaign_campaign_service__WEBPACK_IMPORTED_MODULE_2__["CampaignService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_service_person_person_service__WEBPACK_IMPORTED_MODULE_4__["PersonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_service_subcription_subscription_service__WEBPACK_IMPORTED_MODULE_6__["SubscriptionService"])); };
PrepareComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: PrepareComponent, selectors: [["app-prepare"]], decls: 35, vars: 5, consts: [[1, "row"], [3, "formGroup", "submit"], [1, "row", "justify-content-center", "pt-2"], [1, "col-6", "d-block", "text-uppercase", "font-size-4", "text-color-1", "font-bold-6"], [1, "text-color-2"], [1, "col-6", "d-block", "text-uppercase", "font-size-4", "text-color-1"], ["type", "text", "autocomplete", "on", "formControlName", "url", 1, "w-100", "input-box-gradient"], ["class", "invalid-feedback d-block", 4, "ngIf"], ["type", "text", "type", "text", "autocomplete", "on", "formControlName", "name", 1, "w-100", "input-box-gradient"], ["class", "row justify-content-center pt-2", 4, "ngIf"], [1, "row", "justify-content-center", "pt-5"], [1, "col-3", "text-uppercase", "text-color-1", "font-bold-6"], ["type", "submit", 1, "btn", "btn-info", "btn-block", "btn-gradient", "font-size-4"], [1, "col-6", "d-block", "text-center", "text-uppercase", "font-size-2", "text-color-1"], [1, "invalid-feedback", "d-block"], [1, "col-6", "d-block", "text-center", "text-uppercase", "font-size-4", "text-color-1"], [3, "options", "formControl"]], template: function PrepareComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-nav-plain");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function PrepareComponent_Template_form_submit_2_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "step 1:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " please paste url in box below ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](11, PrepareComponent_div_11_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "step 2:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, " name your campaign ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, PrepareComponent_div_20_Template, 2, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "step 3:");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " how many leads would you like to import? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](26, PrepareComponent_div_26_Template, 4, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](27, PrepareComponent_div_27_Template, 4, 3, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Execute Campaign");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " please allow 3-5 minutes for campaign to finish loading profiles ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.prepareForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.prepareForm.controls.url.touched == true && ctx.prepareForm.controls.url.errors !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.prepareForm.controls.name.touched == true && ctx.prepareForm.controls.name.errors !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showLeadSlidebar == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.showLeadSlidebar == false);
    } }, directives: [_nav_plain_nav_plain_component__WEBPACK_IMPORTED_MODULE_7__["NavPlainComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_9__["ɵa"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmVwYXJlLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "ew8j":
/*!******************************************************************************!*\
  !*** ./src/app/campaign/components/campaign-user/campaign-user.component.ts ***!
  \******************************************************************************/
/*! exports provided: CampaignUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignUserComponent", function() { return CampaignUserComponent; });
/* harmony import */ var src_app_common_dto_person__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/dto/person */ "SY1a");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_pipes_limit_to_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/pipes/limit-to.pipe */ "SC6h");



class CampaignUserComponent {
    constructor() {
        this.person = new src_app_common_dto_person__WEBPACK_IMPORTED_MODULE_0__["Person"]();
    }
    ngOnInit() {
    }
}
CampaignUserComponent.ɵfac = function CampaignUserComponent_Factory(t) { return new (t || CampaignUserComponent)(); };
CampaignUserComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CampaignUserComponent, selectors: [["app-campaign-user"]], inputs: { person: "person" }, decls: 13, vars: 7, consts: [[1, "gradient-border-bottom", "d-flex", "justify-content-around", "pb-1"], [1, "col-1", "px-1", "text-center"], [1, "campaign-user-image", "user-icon", 3, "src"], [1, "col-3", "px-2"], [1, "font-size-4", "text-color-1"], [1, "col-5", "px-2"]], template: function CampaignUserComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "limitTo");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.person.img, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.person.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](9, 4, ctx.person.company, 55));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.person.location);
    } }, pipes: [_common_pipes_limit_to_pipe__WEBPACK_IMPORTED_MODULE_2__["LimitToPipe"]], styles: [".user-icon[_ngcontent-%COMP%] {\r\n    border-radius: 50%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhbXBhaWduLXVzZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJjYW1wYWlnbi11c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1pY29uIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "kthj":
/*!**********************************************************************!*\
  !*** ./src/app/campaign/components/nav-plain/nav-plain.component.ts ***!
  \**********************************************************************/
/*! exports provided: NavPlainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavPlainComponent", function() { return NavPlainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class NavPlainComponent {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
    }
    navigateToHome() {
        this.router.navigateByUrl("/home");
    }
}
NavPlainComponent.ɵfac = function NavPlainComponent_Factory(t) { return new (t || NavPlainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
NavPlainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavPlainComponent, selectors: [["app-nav-plain"]], decls: 8, vars: 0, consts: [["id", "nav", 1, "vertical-align"], [1, "col-3", "text-uppercase", "font-size-4", "text-color-1", "d-flex", "justify-content-between"], [1, "px-2"], ["id", "img3", "src", "../../../../assets/img/Img3.png", 3, "click"], [1, "col-6", "text-center", "text-uppercase", "font-size-8", "text-color-1"], [1, "col-3"], ["id", "img4", "src", "../../../../assets/img/Img4.png", 1, "float-right"]], template: function NavPlainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavPlainComponent_Template_img_click_3_listener() { return ctx.navigateToHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#nav[_ngcontent-%COMP%]{\r\n    height: 15vh;\r\n}\r\n\r\n.vertical-align[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdi1wbGFpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkIiLCJmaWxlIjoibmF2LXBsYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbmF2e1xyXG4gICAgaGVpZ2h0OiAxNXZoO1xyXG59XHJcblxyXG4udmVydGljYWwtYWxpZ24ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iXX0= */"] });


/***/ }),

/***/ "mgaL":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@angular-slider/ngx-slider/__ivy_ngcc__/fesm2015/angular-slider-ngx-slider.js ***!
  \****************************************************************************************************/
/*! exports provided: NgxSliderModule, ChangeContext, PointerType, LabelType, Options, ɵb, ɵc, ɵd, ɵa, ɵe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxSliderModule", function() { return NgxSliderModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeContext", function() { return ChangeContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointerType", function() { return PointerType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LabelType", function() { return LabelType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Options", function() { return Options; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return SliderElementDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return SliderHandleDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵd", function() { return SliderLabelDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return SliderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵe", function() { return TooltipWrapperComponent; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var detect_passive_events__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! detect-passive-events */ "A/ap");
/* harmony import */ var detect_passive_events__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(detect_passive_events__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");







/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {number} */



const _c0 = ["tooltipTemplate"];
const _c1 = ["leftOuterSelectionBar"];
const _c2 = ["rightOuterSelectionBar"];
const _c3 = ["fullBar"];
const _c4 = ["selectionBar"];
const _c5 = ["minHandle"];
const _c6 = ["maxHandle"];
const _c7 = ["floorLabel"];
const _c8 = ["ceilLabel"];
const _c9 = ["minHandleLabel"];
const _c10 = ["maxHandleLabel"];
const _c11 = ["combinedLabel"];
const _c12 = ["ticksElement"];
function SliderComponent_span_28_ngx_slider_tooltip_wrapper_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ngx-slider-tooltip-wrapper", 31);
} if (rf & 2) {
    const t_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("template", ctx_r14.tooltipTemplate)("tooltip", t_r13.valueTooltip)("placement", t_r13.valueTooltipPlacement)("content", t_r13.value);
} }
function SliderComponent_span_28_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 32);
} if (rf & 2) {
    const t_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", t_r13.legend, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
} }
const _c13 = function (a0) { return { "ngx-slider-selected": a0 }; };
function SliderComponent_span_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "ngx-slider-tooltip-wrapper", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, SliderComponent_span_28_ngx_slider_tooltip_wrapper_2_Template, 1, 4, "ngx-slider-tooltip-wrapper", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, SliderComponent_span_28_span_3_Template, 1, 1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const t_r13 = ctx.$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c13, t_r13.selected))("ngStyle", t_r13.style);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("template", ctx_r12.tooltipTemplate)("tooltip", t_r13.tooltip)("placement", t_r13.tooltipPlacement);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", t_r13.value != null);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", t_r13.legend != null);
} }
function TooltipWrapperComponent_ng_container_0_1_ng_template_0_Template(rf, ctx) { }
function TooltipWrapperComponent_ng_container_0_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, TooltipWrapperComponent_ng_container_0_1_ng_template_0_Template, 0, 0, "ng-template");
} }
const _c14 = function (a0, a1, a2) { return { tooltip: a0, placement: a1, content: a2 }; };
function TooltipWrapperComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TooltipWrapperComponent_ng_container_0_1_Template, 1, 0, undefined, 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngTemplateOutlet", ctx_r0.template)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](2, _c14, ctx_r0.tooltip, ctx_r0.placement, ctx_r0.content));
} }
function TooltipWrapperComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("title", ctx_r1.tooltip)("data-tooltip-placement", ctx_r1.placement);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r1.content, " ");
} }
const LabelType = {
    /** Label above low pointer */
    Low: 0,
    /** Label above high pointer */
    High: 1,
    /** Label for minimum slider value */
    Floor: 2,
    /** Label for maximum slider value */
    Ceil: 3,
    /** Label below legend tick */
    TickValue: 4,
};
LabelType[LabelType.Low] = 'Low';
LabelType[LabelType.High] = 'High';
LabelType[LabelType.Floor] = 'Floor';
LabelType[LabelType.Ceil] = 'Ceil';
LabelType[LabelType.TickValue] = 'TickValue';
/**
 * Slider options
 */
class Options {
    constructor() {
        /**
         * Minimum value for a slider.
         * Not applicable when using stepsArray.
         */
        this.floor = 0;
        /**
         * Maximum value for a slider.
         * Not applicable when using stepsArray.
         */
        this.ceil = null;
        /**
         * Step between each value.
         * Not applicable when using stepsArray.
         */
        this.step = 1;
        /**
         * The minimum range authorized on the slider.
         * Applies to range slider only.
         * When using stepsArray, expressed as index into stepsArray.
         */
        this.minRange = null;
        /**
         * The maximum range authorized on the slider.
         * Applies to range slider only.
         * When using stepsArray, expressed as index into stepsArray.
         */
        this.maxRange = null;
        /**
         * Set to true to have a push behavior. When the min handle goes above the max,
         * the max is moved as well (and vice-versa). The range between min and max is
         * defined by the step option (defaults to 1) and can also be overriden by
         * the minRange option. Applies to range slider only.
         */
        this.pushRange = false;
        /**
         * The minimum value authorized on the slider.
         * When using stepsArray, expressed as index into stepsArray.
         */
        this.minLimit = null;
        /**
         * The maximum value authorized on the slider.
         * When using stepsArray, expressed as index into stepsArray.
         */
        this.maxLimit = null;
        /**
         * Custom translate function. Use this if you want to translate values displayed
         * on the slider.
         */
        this.translate = null;
        /**
         * Custom function for combining overlapping labels in range slider.
         * It takes the min and max values (already translated with translate fuction)
         * and should return how these two values should be combined.
         * If not provided, the default function will join the two values with
         * ' - ' as separator.
         */
        this.combineLabels = null;
        /**
         * Use to display legend under ticks (thus, it needs to be used along with
         * showTicks or showTicksValues). The function will be called with each tick
         * value and returned content will be displayed under the tick as a legend.
         * If the returned value is null, then no legend is displayed under
         * the corresponding tick.You can also directly provide the legend values
         * in the stepsArray option.
         */
        this.getLegend = null;
        /**
         * If you want to display a slider with non linear/number steps.
         * Just pass an array with each slider value and that's it; the floor, ceil and step settings
         * of the slider will be computed automatically.
         * By default, the value model and valueHigh model values will be the value of the selected item
         * in the stepsArray.
         * They can also be bound to the index of the selected item by setting the bindIndexForStepsArray
         * option to true.
         */
        this.stepsArray = null;
        /**
         * Set to true to bind the index of the selected item to value model and valueHigh model.
         */
        this.bindIndexForStepsArray = false;
        /**
         * When set to true and using a range slider, the range can be dragged by the selection bar.
         * Applies to range slider only.
         */
        this.draggableRange = false;
        /**
         * Same as draggableRange but the slider range can't be changed.
         * Applies to range slider only.
         */
        this.draggableRangeOnly = false;
        /**
         * Set to true to always show the selection bar before the slider handle.
         */
        this.showSelectionBar = false;
        /**
         * Set to true to always show the selection bar after the slider handle.
         */
        this.showSelectionBarEnd = false;
        /**
         * Set a number to draw the selection bar between this value and the slider handle.
         * When using stepsArray, expressed as index into stepsArray.
         */
        this.showSelectionBarFromValue = null;
        /**
         * Only for range slider. Set to true to visualize in different colour the areas
         * on the left/right (top/bottom for vertical range slider) of selection bar between the handles.
         */
        this.showOuterSelectionBars = false;
        /**
         * Set to true to hide pointer labels
         */
        this.hidePointerLabels = false;
        /**
         * Set to true to hide min / max labels
         */
        this.hideLimitLabels = false;
        /**
         * Set to false to disable the auto-hiding behavior of the limit labels.
         */
        this.autoHideLimitLabels = true;
        /**
         * Set to true to make the slider read-only.
         */
        this.readOnly = false;
        /**
         * Set to true to disable the slider.
         */
        this.disabled = false;
        /**
         * Throttle interval for mouse events in milliseconds.
         * This is provided to avoid a flood of events when moving the slider with mouse.
         */
        this.mouseEventsInterval = 50;
        /**
         * Throttle interval for touch events in milliseconds.
         * This is provided to avoid a flood of events when moving the slider with touch gesture.
         */
        this.touchEventsInterval = 50;
        /**
         * Throttle interval for input changes (changes to bindings or reactive form inputs)
         * This is provided to avoid a flood of events on frequent input binding changes affecting performance.
         */
        this.inputEventsInterval = 100;
        /**
         * Throttle interval for output changes (signalling changes to output bindings and user callbacks)
         * This is provided to avoid a flood of outgoing events affecting Angular app performance.
         */
        this.outputEventsInterval = 100;
        /**
         * Set to true to display a tick for each step of the slider.
         */
        this.showTicks = false;
        /**
         * Set to true to display a tick and the step value for each step of the slider..
         */
        this.showTicksValues = false;
        /* The step between each tick to display. If not set, the step value is used.
            Not used when ticksArray is specified. */
        this.tickStep = null;
        /* The step between displaying each tick step value.
            If not set, then tickStep or step is used, depending on which one is set. */
        this.tickValueStep = null;
        /**
         * Use to display ticks at specific positions.
         * The array contains the index of the ticks that should be displayed.
         * For example, [0, 1, 5] will display a tick for the first, second and sixth values.
         */
        this.ticksArray = null;
        /**
         * Used to display a tooltip when a tick is hovered.
         * Set to a function that returns the tooltip content for a given value.
         */
        this.ticksTooltip = null;
        /**
         * Same as ticksTooltip but for ticks values.
         */
        this.ticksValuesTooltip = null;
        /**
         * Set to true to display the slider vertically.
         * The slider will take the full height of its parent.
         * Changing this value at runtime is not currently supported.
         */
        this.vertical = false;
        /**
         * Function that returns the current color of the selection bar.
         * If your color won't change, don't use this option but set it through CSS.
         * If the returned color depends on a model value (either value or valueHigh),
         * you should use the argument passed to the function.
         * Indeed, when the function is called, there is no certainty that the model
         * has already been updated.
         */
        this.getSelectionBarColor = null;
        /**
         * Function that returns the color of a tick. showTicks must be enabled.
         */
        this.getTickColor = null;
        /**
         * Function that returns the current color of a pointer.
         * If your color won't change, don't use this option but set it through CSS.
         * If the returned color depends on a model value (either value or valueHigh),
         * you should use the argument passed to the function.
         * Indeed, when the function is called, there is no certainty that the model has already been updated.
         * To handle range slider pointers independently, you should evaluate pointerType within the given
         * function where "min" stands for value model and "max" for valueHigh model values.
         */
        this.getPointerColor = null;
        /**
         * Handles are focusable (on click or with tab) and can be modified using the following keyboard controls:
         * Left/bottom arrows: -1
         * Right/top arrows: +1
         * Page-down: -10%
         * Page-up: +10%
         * Home: minimum value
         * End: maximum value
         */
        this.keyboardSupport = true;
        /**
         * If you display the slider in an element that uses transform: scale(0.5), set the scale value to 2
         * so that the slider is rendered properly and the events are handled correctly.
         */
        this.scale = 1;
        /**
         * Set to true to force the value(s) to be rounded to the step, even when modified from the outside.
         * When set to false, if the model values are modified from outside the slider, they are not rounded
         * and can be between two steps.
         */
        this.enforceStep = true;
        /**
         * Set to true to force the value(s) to be normalised to allowed range (floor to ceil), even when modified from the outside.
         * When set to false, if the model values are modified from outside the slider, and they are outside allowed range,
         * the slider may be rendered incorrectly. However, setting this to false may be useful if you want to perform custom normalisation.
         */
        this.enforceRange = true;
        /**
         * Set to true to force the value(s) to be rounded to the nearest step value, even when modified from the outside.
         * When set to false, if the model values are modified from outside the slider, and they are outside allowed range,
         * the slider may be rendered incorrectly. However, setting this to false may be useful if you want to perform custom normalisation.
         */
        this.enforceStepsArray = true;
        /**
         * Set to true to prevent to user from switching the min and max handles. Applies to range slider only.
         */
        this.noSwitching = false;
        /**
         * Set to true to only bind events on slider handles.
         */
        this.onlyBindHandles = false;
        /**
         * Set to true to show graphs right to left.
         * If vertical is true it will be from top to bottom and left / right arrow functions reversed.
         */
        this.rightToLeft = false;
        /**
         * Set to true to reverse keyboard navigation:
         * Right/top arrows: -1
         * Left/bottom arrows: +1
         * Page-up: -10%
         * Page-down: +10%
         * End: minimum value
         * Home: maximum value
         */
        this.reversedControls = false;
        /**
         * Set to true to keep the slider labels inside the slider bounds.
         */
        this.boundPointerLabels = true;
        /**
         * Set to true to use a logarithmic scale to display the slider.
         */
        this.logScale = false;
        /**
         * Function that returns the position on the slider for a given value.
         * The position must be a percentage between 0 and 1.
         * The function should be monotonically increasing or decreasing; otherwise the slider may behave incorrectly.
         */
        this.customValueToPosition = null;
        /**
         * Function that returns the value for a given position on the slider.
         * The position is a percentage between 0 and 1.
         * The function should be monotonically increasing or decreasing; otherwise the slider may behave incorrectly.
         */
        this.customPositionToValue = null;
        /**
         * Precision limit for calculated values.
         * Values used in calculations will be rounded to this number of significant digits
         * to prevent accumulating small floating-point errors.
         */
        this.precisionLimit = 12;
        /**
         * Use to display the selection bar as a gradient.
         * The given object must contain from and to properties which are colors.
         */
        this.selectionBarGradient = null;
        /**
         * Use to add a label directly to the slider for accessibility. Adds the aria-label attribute.
         */
        this.ariaLabel = null;
        /**
         * Use instead of ariaLabel to reference the id of an element which will be used to label the slider.
         * Adds the aria-labelledby attribute.
         */
        this.ariaLabelledBy = null;
        /**
         * Use to add a label directly to the slider range for accessibility. Adds the aria-label attribute.
         */
        this.ariaLabelHigh = null;
        /**
         * Use instead of ariaLabelHigh to reference the id of an element which will be used to label the slider range.
         * Adds the aria-labelledby attribute.
         */
        this.ariaLabelledByHigh = null;
        /**
         * Use to increase rendering performance. If the value is not provided, the slider calculates the with/height of the handle
         */
        this.handleDimension = null;
        /**
         * Use to increase rendering performance. If the value is not provided, the slider calculates the with/height of the bar
         */
        this.barDimension = null;
        /**
         * Enable/disable CSS animations
         */
        this.animate = true;
        /**
         * Enable/disable CSS animations while moving the slider
         */
        this.animateOnMove = false;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/** @enum {number} */
const PointerType = {
    /** Low pointer */
    Min: 0,
    /** High pointer */
    Max: 1,
};
PointerType[PointerType.Min] = 'Min';
PointerType[PointerType.Max] = 'Max';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class ChangeContext {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 *  Collection of functions to handle conversions/lookups of values
 */
class ValueHelper {
    /**
     * @param {?} value
     * @return {?}
     */
    static isNullOrUndefined(value) {
        return value === undefined || value === null;
    }
    /**
     * @param {?} array1
     * @param {?} array2
     * @return {?}
     */
    static areArraysEqual(array1, array2) {
        if (array1.length !== array2.length) {
            return false;
        }
        for (let i = 0; i < array1.length; ++i) {
            if (array1[i] !== array2[i]) {
                return false;
            }
        }
        return true;
    }
    /**
     * @param {?} val
     * @param {?} minVal
     * @param {?} maxVal
     * @return {?}
     */
    static linearValueToPosition(val, minVal, maxVal) {
        /** @type {?} */
        const range = maxVal - minVal;
        return (val - minVal) / range;
    }
    /**
     * @param {?} val
     * @param {?} minVal
     * @param {?} maxVal
     * @return {?}
     */
    static logValueToPosition(val, minVal, maxVal) {
        val = Math.log(val);
        minVal = Math.log(minVal);
        maxVal = Math.log(maxVal);
        /** @type {?} */
        const range = maxVal - minVal;
        return (val - minVal) / range;
    }
    /**
     * @param {?} percent
     * @param {?} minVal
     * @param {?} maxVal
     * @return {?}
     */
    static linearPositionToValue(percent, minVal, maxVal) {
        return percent * (maxVal - minVal) + minVal;
    }
    /**
     * @param {?} percent
     * @param {?} minVal
     * @param {?} maxVal
     * @return {?}
     */
    static logPositionToValue(percent, minVal, maxVal) {
        minVal = Math.log(minVal);
        maxVal = Math.log(maxVal);
        /** @type {?} */
        const value = percent * (maxVal - minVal) + minVal;
        return Math.exp(value);
    }
    /**
     * @param {?} modelValue
     * @param {?} stepsArray
     * @return {?}
     */
    static findStepIndex(modelValue, stepsArray) {
        /** @type {?} */
        const differences = stepsArray.map((step) => Math.abs(modelValue - step.value));
        /** @type {?} */
        let minDifferenceIndex = 0;
        for (let index = 0; index < stepsArray.length; index++) {
            if (differences[index] !== differences[minDifferenceIndex] && differences[index] < differences[minDifferenceIndex]) {
                minDifferenceIndex = index;
            }
        }
        return minDifferenceIndex;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Helper with compatibility functions to support different browsers
 */
class CompatibilityHelper {
    /**
     * Workaround for TouchEvent constructor sadly not being available on all browsers (e.g. Firefox, Safari)
     * @param {?} event
     * @return {?}
     */
    static isTouchEvent(event) {
        if ((/** @type {?} */ (window)).TouchEvent !== undefined) {
            return event instanceof TouchEvent;
        }
        return event.touches !== undefined;
    }
    /**
     * Detect presence of ResizeObserver API
     * @return {?}
     */
    static isResizeObserverAvailable() {
        return (/** @type {?} */ (window)).ResizeObserver !== undefined;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Helper with mathematical functions
 */
class MathHelper {
    /**
     * @param {?} value
     * @param {?} precisionLimit
     * @return {?}
     */
    static roundToPrecisionLimit(value, precisionLimit) {
        return +(value.toPrecision(precisionLimit));
    }
    /**
     * @param {?} value
     * @param {?} modulo
     * @param {?} precisionLimit
     * @return {?}
     */
    static isModuloWithinPrecisionLimit(value, modulo, precisionLimit) {
        /** @type {?} */
        const limit = Math.pow(10, -precisionLimit);
        return Math.abs(value % modulo) <= limit || Math.abs(Math.abs(value % modulo) - modulo) <= limit;
    }
    /**
     * @param {?} value
     * @param {?} floor
     * @param {?} ceil
     * @return {?}
     */
    static clampToRange(value, floor, ceil) {
        return Math.min(Math.max(value, floor), ceil);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class EventListener {
    constructor() {
        this.eventName = null;
        this.events = null;
        this.eventsSubscription = null;
        this.teardownCallback = null;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * Helper class to attach event listeners to DOM elements with debounce support using rxjs
 */
class EventListenerHelper {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
    }
    /**
     * @param {?} nativeElement
     * @param {?} eventName
     * @param {?} callback
     * @param {?=} throttleInterval
     * @return {?}
     */
    attachPassiveEventListener(nativeElement, eventName, callback, throttleInterval) {
        // Only use passive event listeners if the browser supports it
        if (detect_passive_events__WEBPACK_IMPORTED_MODULE_2___default.a.hasSupport !== true) {
            return this.attachEventListener(nativeElement, eventName, callback, throttleInterval);
        }
        /** @type {?} */
        const listener = new EventListener();
        listener.eventName = eventName;
        listener.events = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        /** @type {?} */
        const observerCallback = (event) => {
            listener.events.next(event);
        };
        nativeElement.addEventListener(eventName, observerCallback, { passive: true, capture: false });
        listener.teardownCallback = () => {
            nativeElement.removeEventListener(eventName, observerCallback, { passive: true, capture: false });
        };
        listener.eventsSubscription = listener.events
            .pipe((!ValueHelper.isNullOrUndefined(throttleInterval))
            ? Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["throttleTime"])(throttleInterval, undefined, { leading: true, trailing: true })
            : Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => { }) // no-op
        )
            .subscribe((event) => {
            callback(event);
        });
        return listener;
    }
    /**
     * @param {?} eventListener
     * @return {?}
     */
    detachEventListener(eventListener) {
        if (!ValueHelper.isNullOrUndefined(eventListener.eventsSubscription)) {
            eventListener.eventsSubscription.unsubscribe();
            eventListener.eventsSubscription = null;
        }
        if (!ValueHelper.isNullOrUndefined(eventListener.events)) {
            eventListener.events.complete();
            eventListener.events = null;
        }
        if (!ValueHelper.isNullOrUndefined(eventListener.teardownCallback)) {
            eventListener.teardownCallback();
            eventListener.teardownCallback = null;
        }
    }
    /**
     * @param {?} nativeElement
     * @param {?} eventName
     * @param {?} callback
     * @param {?=} throttleInterval
     * @return {?}
     */
    attachEventListener(nativeElement, eventName, callback, throttleInterval) {
        /** @type {?} */
        const listener = new EventListener();
        listener.eventName = eventName;
        listener.events = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        /** @type {?} */
        const observerCallback = (event) => {
            listener.events.next(event);
        };
        listener.teardownCallback = this.renderer.listen(nativeElement, eventName, observerCallback);
        listener.eventsSubscription = listener.events
            .pipe((!ValueHelper.isNullOrUndefined(throttleInterval))
            ? Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["throttleTime"])(throttleInterval, undefined, { leading: true, trailing: true })
            : Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => { }) // no-op
        )
            .subscribe((event) => { callback(event); });
        return listener;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SliderElementDirective {
    /**
     * @param {?} elemRef
     * @param {?} renderer
     * @param {?} changeDetectionRef
     */
    constructor(elemRef, renderer, changeDetectionRef) {
        this.elemRef = elemRef;
        this.renderer = renderer;
        this.changeDetectionRef = changeDetectionRef;
        this._position = 0;
        this._dimension = 0;
        this._alwaysHide = false;
        this._vertical = false;
        this._scale = 1;
        this.opacity = 1;
        this.visibility = 'visible';
        this.left = '';
        this.bottom = '';
        this.height = '';
        this.width = '';
        this.eventListeners = [];
        this.eventListenerHelper = new EventListenerHelper(this.renderer);
    }
    /**
     * @return {?}
     */
    get position() {
        return this._position;
    }
    /**
     * @return {?}
     */
    get dimension() {
        return this._dimension;
    }
    /**
     * @return {?}
     */
    get alwaysHide() {
        return this._alwaysHide;
    }
    /**
     * @return {?}
     */
    get vertical() {
        return this._vertical;
    }
    /**
     * @return {?}
     */
    get scale() {
        return this._scale;
    }
    /**
     * @param {?} hide
     * @return {?}
     */
    setAlwaysHide(hide) {
        this._alwaysHide = hide;
        if (hide) {
            this.visibility = 'hidden';
        }
        else {
            this.visibility = 'visible';
        }
    }
    /**
     * @return {?}
     */
    hide() {
        this.opacity = 0;
    }
    /**
     * @return {?}
     */
    show() {
        if (this.alwaysHide) {
            return;
        }
        this.opacity = 1;
    }
    /**
     * @return {?}
     */
    isVisible() {
        if (this.alwaysHide) {
            return false;
        }
        return this.opacity !== 0;
    }
    /**
     * @param {?} vertical
     * @return {?}
     */
    setVertical(vertical) {
        this._vertical = vertical;
        if (this._vertical) {
            this.left = '';
            this.width = '';
        }
        else {
            this.bottom = '';
            this.height = '';
        }
    }
    /**
     * @param {?} scale
     * @return {?}
     */
    setScale(scale) {
        this._scale = scale;
    }
    /**
     * @param {?} pos
     * @return {?}
     */
    setPosition(pos) {
        if (this._position !== pos && !this.isRefDestroyed()) {
            this.changeDetectionRef.markForCheck();
        }
        this._position = pos;
        if (this._vertical) {
            this.bottom = Math.round(pos) + 'px';
        }
        else {
            this.left = Math.round(pos) + 'px';
        }
    }
    /**
     * @return {?}
     */
    calculateDimension() {
        /** @type {?} */
        const val = this.getBoundingClientRect();
        if (this.vertical) {
            this._dimension = (val.bottom - val.top) * this.scale;
        }
        else {
            this._dimension = (val.right - val.left) * this.scale;
        }
    }
    /**
     * @param {?} dim
     * @return {?}
     */
    setDimension(dim) {
        if (this._dimension !== dim && !this.isRefDestroyed()) {
            this.changeDetectionRef.markForCheck();
        }
        this._dimension = dim;
        if (this._vertical) {
            this.height = Math.round(dim) + 'px';
        }
        else {
            this.width = Math.round(dim) + 'px';
        }
    }
    /**
     * @return {?}
     */
    getBoundingClientRect() {
        return this.elemRef.nativeElement.getBoundingClientRect();
    }
    /**
     * @param {?} eventName
     * @param {?} callback
     * @param {?=} debounceInterval
     * @return {?}
     */
    on(eventName, callback, debounceInterval) {
        /** @type {?} */
        const listener = this.eventListenerHelper.attachEventListener(this.elemRef.nativeElement, eventName, callback, debounceInterval);
        this.eventListeners.push(listener);
    }
    /**
     * @param {?} eventName
     * @param {?} callback
     * @param {?=} debounceInterval
     * @return {?}
     */
    onPassive(eventName, callback, debounceInterval) {
        /** @type {?} */
        const listener = this.eventListenerHelper.attachPassiveEventListener(this.elemRef.nativeElement, eventName, callback, debounceInterval);
        this.eventListeners.push(listener);
    }
    /**
     * @param {?=} eventName
     * @return {?}
     */
    off(eventName) {
        /** @type {?} */
        let listenersToKeep;
        /** @type {?} */
        let listenersToRemove;
        if (!ValueHelper.isNullOrUndefined(eventName)) {
            listenersToKeep = this.eventListeners.filter((event) => event.eventName !== eventName);
            listenersToRemove = this.eventListeners.filter((event) => event.eventName === eventName);
        }
        else {
            listenersToKeep = [];
            listenersToRemove = this.eventListeners;
        }
        for (const listener of listenersToRemove) {
            this.eventListenerHelper.detachEventListener(listener);
        }
        this.eventListeners = listenersToKeep;
    }
    /**
     * @return {?}
     */
    isRefDestroyed() {
        return ValueHelper.isNullOrUndefined(this.changeDetectionRef) || this.changeDetectionRef['destroyed'];
    }
}
SliderElementDirective.ɵfac = function SliderElementDirective_Factory(t) { return new (t || SliderElementDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"])); };
SliderElementDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: SliderElementDirective, selectors: [["", "ngxSliderElement", ""]], hostVars: 12, hostBindings: function SliderElementDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("opacity", ctx.opacity)("visibility", ctx.visibility)("left", ctx.left)("bottom", ctx.bottom)("height", ctx.height)("width", ctx.width);
    } } });
/** @nocollapse */
SliderElementDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
SliderElementDirective.propDecorators = {
    opacity: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['style.opacity',] }],
    visibility: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['style.visibility',] }],
    left: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['style.left',] }],
    bottom: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['style.bottom',] }],
    height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['style.height',] }],
    width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['style.width',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](SliderElementDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[ngxSliderElement]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }]; }, { opacity: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['style.opacity']
        }], visibility: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['style.visibility']
        }], left: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['style.left']
        }], bottom: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['style.bottom']
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['style.height']
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['style.width']
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SliderHandleDirective extends SliderElementDirective {
    /**
     * @param {?} elemRef
     * @param {?} renderer
     * @param {?} changeDetectionRef
     */
    constructor(elemRef, renderer, changeDetectionRef) {
        super(elemRef, renderer, changeDetectionRef);
        this.active = false;
        this.role = '';
        this.tabindex = '';
        this.ariaOrientation = '';
        this.ariaLabel = '';
        this.ariaLabelledBy = '';
        this.ariaValueNow = '';
        this.ariaValueText = '';
        this.ariaValueMin = '';
        this.ariaValueMax = '';
    }
    /**
     * @return {?}
     */
    focus() {
        this.elemRef.nativeElement.focus();
    }
}
SliderHandleDirective.ɵfac = function SliderHandleDirective_Factory(t) { return new (t || SliderHandleDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"])); };
SliderHandleDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: SliderHandleDirective, selectors: [["", "ngxSliderHandle", ""]], hostVars: 11, hostBindings: function SliderHandleDirective_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("role", ctx.role)("tabindex", ctx.tabindex)("aria-orientation", ctx.ariaOrientation)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy)("aria-valuenow", ctx.ariaValueNow)("aria-valuetext", ctx.ariaValueText)("aria-valuemin", ctx.ariaValueMin)("aria-valuemax", ctx.ariaValueMax);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ngx-slider-active", ctx.active);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
/** @nocollapse */
SliderHandleDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
SliderHandleDirective.propDecorators = {
    active: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['class.ngx-slider-active',] }],
    role: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['attr.role',] }],
    tabindex: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['attr.tabindex',] }],
    ariaOrientation: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['attr.aria-orientation',] }],
    ariaLabel: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['attr.aria-label',] }],
    ariaLabelledBy: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['attr.aria-labelledby',] }],
    ariaValueNow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['attr.aria-valuenow',] }],
    ariaValueText: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['attr.aria-valuetext',] }],
    ariaValueMin: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['attr.aria-valuemin',] }],
    ariaValueMax: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['attr.aria-valuemax',] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](SliderHandleDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[ngxSliderHandle]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }]; }, { active: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['class.ngx-slider-active']
        }], role: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['attr.role']
        }], tabindex: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['attr.tabindex']
        }], ariaOrientation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['attr.aria-orientation']
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['attr.aria-label']
        }], ariaLabelledBy: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['attr.aria-labelledby']
        }], ariaValueNow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['attr.aria-valuenow']
        }], ariaValueText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['attr.aria-valuetext']
        }], ariaValueMin: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['attr.aria-valuemin']
        }], ariaValueMax: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['attr.aria-valuemax']
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class SliderLabelDirective extends SliderElementDirective {
    /**
     * @param {?} elemRef
     * @param {?} renderer
     * @param {?} changeDetectionRef
     */
    constructor(elemRef, renderer, changeDetectionRef) {
        super(elemRef, renderer, changeDetectionRef);
        this._value = null;
    }
    /**
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setValue(value) {
        /** @type {?} */
        let recalculateDimension = false;
        if (!this.alwaysHide &&
            (ValueHelper.isNullOrUndefined(this.value) ||
                this.value.length !== value.length ||
                (this.value.length > 0 && this.dimension === 0))) {
            recalculateDimension = true;
        }
        this._value = value;
        this.elemRef.nativeElement.innerHTML = value;
        // Update dimension only when length of the label have changed
        if (recalculateDimension) {
            this.calculateDimension();
        }
    }
}
SliderLabelDirective.ɵfac = function SliderLabelDirective_Factory(t) { return new (t || SliderLabelDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"])); };
SliderLabelDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({ type: SliderLabelDirective, selectors: [["", "ngxSliderLabel", ""]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵInheritDefinitionFeature"]] });
/** @nocollapse */
SliderLabelDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }
];
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](SliderLabelDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
                selector: '[ngxSliderLabel]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }]; }, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class Tick {
    constructor() {
        this.selected = false;
        this.style = {};
        this.tooltip = null;
        this.tooltipPlacement = null;
        this.value = null;
        this.valueTooltip = null;
        this.valueTooltipPlacement = null;
        this.legend = null;
    }
}
class Dragging {
    constructor() {
        this.active = false;
        this.value = 0;
        this.difference = 0;
        this.position = 0;
        this.lowLimit = 0;
        this.highLimit = 0;
    }
}
class ModelValues {
    /**
     * @param {?=} x
     * @param {?=} y
     * @return {?}
     */
    static compare(x, y) {
        if (ValueHelper.isNullOrUndefined(x) && ValueHelper.isNullOrUndefined(y)) {
            return false;
        }
        if (ValueHelper.isNullOrUndefined(x) !== ValueHelper.isNullOrUndefined(y)) {
            return false;
        }
        return x.value === y.value && x.highValue === y.highValue;
    }
}
class ModelChange extends ModelValues {
    /**
     * @param {?=} x
     * @param {?=} y
     * @return {?}
     */
    static compare(x, y) {
        if (ValueHelper.isNullOrUndefined(x) && ValueHelper.isNullOrUndefined(y)) {
            return false;
        }
        if (ValueHelper.isNullOrUndefined(x) !== ValueHelper.isNullOrUndefined(y)) {
            return false;
        }
        return x.value === y.value &&
            x.highValue === y.highValue &&
            x.forceChange === y.forceChange;
    }
}
/** @type {?} */
const NGX_SLIDER_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"],
    /* tslint:disable-next-line: no-use-before-declare */
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["forwardRef"])(() => SliderComponent),
    multi: true,
};
class SliderComponent {
    /**
     * @param {?} renderer
     * @param {?} elementRef
     * @param {?} changeDetectionRef
     * @param {?} zone
     */
    constructor(renderer, elementRef, changeDetectionRef, zone) {
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.changeDetectionRef = changeDetectionRef;
        this.zone = zone;
        // Model for low value of slider. For simple slider, this is the only input. For range slider, this is the low value.
        this.value = null;
        // Output for low value slider to support two-way bindings
        this.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        // Model for high value of slider. Not used in simple slider. For range slider, this is the high value.
        this.highValue = null;
        // Output for high value slider to support two-way bindings
        this.highValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        // An object with all the other options of the slider.
        // Each option can be updated at runtime and the slider will automatically be re-rendered.
        this.options = new Options();
        // Event emitted when user starts interaction with the slider
        this.userChangeStart = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        // Event emitted on each change coming from user interaction
        this.userChange = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        // Event emitted when user finishes interaction with the slider
        this.userChangeEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
        this.initHasRun = false;
        this.inputModelChangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.inputModelChangeSubscription = null;
        this.outputModelChangeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.outputModelChangeSubscription = null;
        this.viewLowValue = null;
        this.viewHighValue = null;
        this.viewOptions = new Options();
        this.handleHalfDimension = 0;
        this.maxHandlePosition = 0;
        this.currentTrackingPointer = null;
        this.currentFocusPointer = null;
        this.firstKeyDown = false;
        this.touchId = null;
        this.dragging = new Dragging();
        // Host element class bindings
        this.sliderElementVerticalClass = false;
        this.sliderElementAnimateClass = false;
        this.sliderElementWithLegendClass = false;
        this.sliderElementDisabledAttr = null;
        this.barStyle = {};
        this.minPointerStyle = {};
        this.maxPointerStyle = {};
        this.fullBarTransparentClass = false;
        this.selectionBarDraggableClass = false;
        this.ticksUnderValuesClass = false;
        this.intermediateTicks = false;
        this.ticks = [];
        this.eventListenerHelper = null;
        this.onMoveEventListener = null;
        this.onEndEventListener = null;
        this.moving = false;
        this.resizeObserver = null;
        this.onTouchedCallback = null;
        this.onChangeCallback = null;
        this.eventListenerHelper = new EventListenerHelper(this.renderer);
    }
    /**
     * @param {?} manualRefresh
     * @return {?}
     */
    set manualRefresh(manualRefresh) {
        this.unsubscribeManualRefresh();
        this.manualRefreshSubscription = manualRefresh.subscribe(() => {
            setTimeout(() => this.calculateViewDimensionsAndDetectChanges());
        });
    }
    /**
     * @param {?} triggerFocus
     * @return {?}
     */
    set triggerFocus(triggerFocus) {
        this.unsubscribeTriggerFocus();
        this.triggerFocusSubscription = triggerFocus.subscribe((pointerType) => {
            this.focusPointer(pointerType);
        });
    }
    /**
     * @return {?}
     */
    get range() {
        return !ValueHelper.isNullOrUndefined(this.value) && !ValueHelper.isNullOrUndefined(this.highValue);
    }
    /**
     * @return {?}
     */
    get showTicks() {
        return this.viewOptions.showTicks;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.viewOptions = new Options();
        Object.assign(this.viewOptions, this.options);
        // We need to run these two things first, before the rest of the init in ngAfterViewInit(),
        // because these two settings are set through @HostBinding and Angular change detection
        // mechanism doesn't like them changing in ngAfterViewInit()
        this.updateDisabledState();
        this.updateVerticalState();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.applyOptions();
        this.subscribeInputModelChangeSubject(this.viewOptions.inputEventsInterval);
        this.subscribeOutputModelChangeSubject(this.viewOptions.outputEventsInterval);
        // Once we apply options, we need to normalise model values for the first time
        this.renormaliseModelValues();
        this.viewLowValue = this.modelValueToViewValue(this.value);
        if (this.range) {
            this.viewHighValue = this.modelValueToViewValue(this.highValue);
        }
        else {
            this.viewHighValue = null;
        }
        this.updateVerticalState(); // need to run this again to cover changes to slider elements
        this.manageElementsStyle();
        this.updateDisabledState();
        this.calculateViewDimensions();
        this.addAccessibility();
        this.updateCeilLabel();
        this.updateFloorLabel();
        this.initHandles();
        this.manageEventsBindings();
        this.subscribeResizeObserver();
        this.initHasRun = true;
        // Run change detection manually to resolve some issues when init procedure changes values used in the view
        if (!this.isRefDestroyed()) {
            this.changeDetectionRef.detectChanges();
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        // Always apply options first
        if (!ValueHelper.isNullOrUndefined(changes["options"])) {
            this.onChangeOptions();
        }
        // Then value changes
        if (!ValueHelper.isNullOrUndefined(changes["value"]) ||
            !ValueHelper.isNullOrUndefined(changes["highValue"])) {
            this.inputModelChangeSubject.next({
                value: this.value,
                highValue: this.highValue,
                forceChange: false,
                internalChange: false
            });
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unbindEvents();
        this.unsubscribeResizeObserver();
        this.unsubscribeInputModelChangeSubject();
        this.unsubscribeOutputModelChangeSubject();
        this.unsubscribeManualRefresh();
        this.unsubscribeTriggerFocus();
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    writeValue(obj) {
        if (obj instanceof Array) {
            this.value = obj[0];
            this.highValue = obj[1];
        }
        else {
            this.value = obj;
        }
        // ngOnChanges() is not called in this instance, so we need to communicate the change manually
        this.inputModelChangeSubject.next({
            value: this.value,
            highValue: this.highValue,
            forceChange: false,
            internalChange: false
        });
    }
    /**
     * @param {?} onChangeCallback
     * @return {?}
     */
    registerOnChange(onChangeCallback) {
        this.onChangeCallback = onChangeCallback;
    }
    /**
     * @param {?} onTouchedCallback
     * @return {?}
     */
    registerOnTouched(onTouchedCallback) {
        this.onTouchedCallback = onTouchedCallback;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.viewOptions.disabled = isDisabled;
        this.updateDisabledState();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        this.calculateViewDimensionsAndDetectChanges();
    }
    /**
     * @param {?=} interval
     * @return {?}
     */
    subscribeInputModelChangeSubject(interval) {
        this.inputModelChangeSubscription = this.inputModelChangeSubject
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(ModelChange.compare), 
        // Hack to reset the status of the distinctUntilChanged() - if a "fake" event comes through with forceChange=true,
        // we forcefully by-pass distinctUntilChanged(), but otherwise drop the event
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])((modelChange) => !modelChange.forceChange && !modelChange.internalChange), (!ValueHelper.isNullOrUndefined(interval))
            ? Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["throttleTime"])(interval, undefined, { leading: true, trailing: true })
            : Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => { }) // no-op
        )
            .subscribe((modelChange) => this.applyInputModelChange(modelChange));
    }
    /**
     * @param {?=} interval
     * @return {?}
     */
    subscribeOutputModelChangeSubject(interval) {
        this.outputModelChangeSubscription = this.outputModelChangeSubject
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])(ModelChange.compare), (!ValueHelper.isNullOrUndefined(interval))
            ? Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["throttleTime"])(interval, undefined, { leading: true, trailing: true })
            : Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(() => { }) // no-op
        )
            .subscribe((modelChange) => this.publishOutputModelChange(modelChange));
    }
    /**
     * @return {?}
     */
    subscribeResizeObserver() {
        if (CompatibilityHelper.isResizeObserverAvailable()) {
            this.resizeObserver = new ResizeObserver(() => this.calculateViewDimensionsAndDetectChanges());
            this.resizeObserver.observe(this.elementRef.nativeElement);
        }
    }
    /**
     * @return {?}
     */
    unsubscribeResizeObserver() {
        if (CompatibilityHelper.isResizeObserverAvailable() && this.resizeObserver !== null) {
            this.resizeObserver.disconnect();
            this.resizeObserver = null;
        }
    }
    /**
     * @return {?}
     */
    unsubscribeOnMove() {
        if (!ValueHelper.isNullOrUndefined(this.onMoveEventListener)) {
            this.eventListenerHelper.detachEventListener(this.onMoveEventListener);
            this.onMoveEventListener = null;
        }
    }
    /**
     * @return {?}
     */
    unsubscribeOnEnd() {
        if (!ValueHelper.isNullOrUndefined(this.onEndEventListener)) {
            this.eventListenerHelper.detachEventListener(this.onEndEventListener);
            this.onEndEventListener = null;
        }
    }
    /**
     * @return {?}
     */
    unsubscribeInputModelChangeSubject() {
        if (!ValueHelper.isNullOrUndefined(this.inputModelChangeSubscription)) {
            this.inputModelChangeSubscription.unsubscribe();
            this.inputModelChangeSubscription = null;
        }
    }
    /**
     * @return {?}
     */
    unsubscribeOutputModelChangeSubject() {
        if (!ValueHelper.isNullOrUndefined(this.outputModelChangeSubscription)) {
            this.outputModelChangeSubscription.unsubscribe();
            this.outputModelChangeSubscription = null;
        }
    }
    /**
     * @return {?}
     */
    unsubscribeManualRefresh() {
        if (!ValueHelper.isNullOrUndefined(this.manualRefreshSubscription)) {
            this.manualRefreshSubscription.unsubscribe();
            this.manualRefreshSubscription = null;
        }
    }
    /**
     * @return {?}
     */
    unsubscribeTriggerFocus() {
        if (!ValueHelper.isNullOrUndefined(this.triggerFocusSubscription)) {
            this.triggerFocusSubscription.unsubscribe();
            this.triggerFocusSubscription = null;
        }
    }
    /**
     * @param {?} pointerType
     * @return {?}
     */
    getPointerElement(pointerType) {
        if (pointerType === PointerType.Min) {
            return this.minHandleElement;
        }
        else if (pointerType === PointerType.Max) {
            return this.maxHandleElement;
        }
        return null;
    }
    /**
     * @return {?}
     */
    getCurrentTrackingValue() {
        if (this.currentTrackingPointer === PointerType.Min) {
            return this.viewLowValue;
        }
        else if (this.currentTrackingPointer === PointerType.Max) {
            return this.viewHighValue;
        }
        return null;
    }
    /**
     * @param {?} modelValue
     * @return {?}
     */
    modelValueToViewValue(modelValue) {
        if (ValueHelper.isNullOrUndefined(modelValue)) {
            return NaN;
        }
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray) && !this.viewOptions.bindIndexForStepsArray) {
            return ValueHelper.findStepIndex(+modelValue, this.viewOptions.stepsArray);
        }
        return +modelValue;
    }
    /**
     * @param {?} viewValue
     * @return {?}
     */
    viewValueToModelValue(viewValue) {
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray) && !this.viewOptions.bindIndexForStepsArray) {
            return this.getStepValue(viewValue);
        }
        return viewValue;
    }
    /**
     * @param {?} sliderValue
     * @return {?}
     */
    getStepValue(sliderValue) {
        /** @type {?} */
        const step = this.viewOptions.stepsArray[sliderValue];
        return (!ValueHelper.isNullOrUndefined(step)) ? step.value : NaN;
    }
    /**
     * @return {?}
     */
    applyViewChange() {
        this.value = this.viewValueToModelValue(this.viewLowValue);
        if (this.range) {
            this.highValue = this.viewValueToModelValue(this.viewHighValue);
        }
        this.outputModelChangeSubject.next({
            value: this.value,
            highValue: this.highValue,
            userEventInitiated: true,
            forceChange: false
        });
        // At this point all changes are applied and outputs are emitted, so we should be done.
        // However, input changes are communicated in different stream and we need to be ready to
        // act on the next input change even if it is exactly the same as last input change.
        // Therefore, we send a special event to reset the stream.
        this.inputModelChangeSubject.next({
            value: this.value,
            highValue: this.highValue,
            forceChange: false,
            internalChange: true
        });
    }
    /**
     * @param {?} modelChange
     * @return {?}
     */
    applyInputModelChange(modelChange) {
        /** @type {?} */
        const normalisedModelChange = this.normaliseModelValues(modelChange);
        /** @type {?} */
        const normalisationChange = !ModelValues.compare(modelChange, normalisedModelChange);
        if (normalisationChange) {
            this.value = normalisedModelChange.value;
            this.highValue = normalisedModelChange.highValue;
        }
        this.viewLowValue = this.modelValueToViewValue(normalisedModelChange.value);
        if (this.range) {
            this.viewHighValue = this.modelValueToViewValue(normalisedModelChange.highValue);
        }
        else {
            this.viewHighValue = null;
        }
        this.updateLowHandle(this.valueToPosition(this.viewLowValue));
        if (this.range) {
            this.updateHighHandle(this.valueToPosition(this.viewHighValue));
        }
        this.updateSelectionBar();
        this.updateTicksScale();
        this.updateAriaAttributes();
        if (this.range) {
            this.updateCombinedLabel();
        }
        // At the end, we need to communicate the model change to the outputs as well
        // Normalisation changes are also always forced out to ensure that subscribers always end up in correct state
        this.outputModelChangeSubject.next({
            value: normalisedModelChange.value,
            highValue: normalisedModelChange.highValue,
            forceChange: normalisationChange,
            userEventInitiated: false
        });
    }
    /**
     * @param {?} modelChange
     * @return {?}
     */
    publishOutputModelChange(modelChange) {
        /** @type {?} */
        const emitOutputs = () => {
            this.valueChange.emit(modelChange.value);
            if (this.range) {
                this.highValueChange.emit(modelChange.highValue);
            }
            if (!ValueHelper.isNullOrUndefined(this.onChangeCallback)) {
                if (this.range) {
                    this.onChangeCallback([modelChange.value, modelChange.highValue]);
                }
                else {
                    this.onChangeCallback(modelChange.value);
                }
            }
            if (!ValueHelper.isNullOrUndefined(this.onTouchedCallback)) {
                if (this.range) {
                    this.onTouchedCallback([modelChange.value, modelChange.highValue]);
                }
                else {
                    this.onTouchedCallback(modelChange.value);
                }
            }
        };
        if (modelChange.userEventInitiated) {
            // If this change was initiated by a user event, we can emit outputs in the same tick
            emitOutputs();
            this.userChange.emit(this.getChangeContext());
        }
        else {
            // But, if the change was initated by something else like a change in input bindings,
            // we need to wait until next tick to emit the outputs to keep Angular change detection happy
            setTimeout(() => { emitOutputs(); });
        }
    }
    /**
     * @param {?} input
     * @return {?}
     */
    normaliseModelValues(input) {
        /** @type {?} */
        const normalisedInput = new ModelValues();
        normalisedInput.value = input.value;
        normalisedInput.highValue = input.highValue;
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray)) {
            // When using steps array, only round to nearest step in the array
            // No other enforcement can be done, as the step array may be out of order, and that is perfectly fine
            if (this.viewOptions.enforceStepsArray) {
                /** @type {?} */
                const valueIndex = ValueHelper.findStepIndex(normalisedInput.value, this.viewOptions.stepsArray);
                normalisedInput.value = this.viewOptions.stepsArray[valueIndex].value;
                if (this.range) {
                    /** @type {?} */
                    const highValueIndex = ValueHelper.findStepIndex(normalisedInput.highValue, this.viewOptions.stepsArray);
                    normalisedInput.highValue = this.viewOptions.stepsArray[highValueIndex].value;
                }
            }
            return normalisedInput;
        }
        if (this.viewOptions.enforceStep) {
            normalisedInput.value = this.roundStep(normalisedInput.value);
            if (this.range) {
                normalisedInput.highValue = this.roundStep(normalisedInput.highValue);
            }
        }
        if (this.viewOptions.enforceRange) {
            normalisedInput.value = MathHelper.clampToRange(normalisedInput.value, this.viewOptions.floor, this.viewOptions.ceil);
            if (this.range) {
                normalisedInput.highValue = MathHelper.clampToRange(normalisedInput.highValue, this.viewOptions.floor, this.viewOptions.ceil);
            }
            // Make sure that range slider invariant (value <= highValue) is always satisfied
            if (this.range && input.value > input.highValue) {
                // We know that both values are now clamped correctly, they may just be in the wrong order
                // So the easy solution is to swap them... except swapping is sometimes disabled in options, so we make the two values the same
                if (this.viewOptions.noSwitching) {
                    normalisedInput.value = normalisedInput.highValue;
                }
                else {
                    /** @type {?} */
                    const tempValue = input.value;
                    normalisedInput.value = input.highValue;
                    normalisedInput.highValue = tempValue;
                }
            }
        }
        return normalisedInput;
    }
    /**
     * @return {?}
     */
    renormaliseModelValues() {
        /** @type {?} */
        const previousModelValues = {
            value: this.value,
            highValue: this.highValue
        };
        /** @type {?} */
        const normalisedModelValues = this.normaliseModelValues(previousModelValues);
        if (!ModelValues.compare(normalisedModelValues, previousModelValues)) {
            this.value = normalisedModelValues.value;
            this.highValue = normalisedModelValues.highValue;
            this.outputModelChangeSubject.next({
                value: this.value,
                highValue: this.highValue,
                forceChange: true,
                userEventInitiated: false
            });
        }
    }
    /**
     * @return {?}
     */
    onChangeOptions() {
        if (!this.initHasRun) {
            return;
        }
        /** @type {?} */
        const previousInputEventsInterval = this.viewOptions.inputEventsInterval;
        /** @type {?} */
        const previousOutputEventsInterval = this.viewOptions.outputEventsInterval;
        /** @type {?} */
        const previousOptionsInfluencingEventBindings = this.getOptionsInfluencingEventBindings(this.viewOptions);
        this.applyOptions();
        /** @type {?} */
        const newOptionsInfluencingEventBindings = this.getOptionsInfluencingEventBindings(this.viewOptions);
        /** @type {?} */
        const rebindEvents = !ValueHelper.areArraysEqual(previousOptionsInfluencingEventBindings, newOptionsInfluencingEventBindings);
        if (previousInputEventsInterval !== this.viewOptions.inputEventsInterval) {
            this.unsubscribeInputModelChangeSubject();
            this.subscribeInputModelChangeSubject(this.viewOptions.inputEventsInterval);
        }
        if (previousOutputEventsInterval !== this.viewOptions.outputEventsInterval) {
            this.unsubscribeInputModelChangeSubject();
            this.subscribeInputModelChangeSubject(this.viewOptions.outputEventsInterval);
        }
        // With new options, we need to re-normalise model values if necessary
        this.renormaliseModelValues();
        this.viewLowValue = this.modelValueToViewValue(this.value);
        if (this.range) {
            this.viewHighValue = this.modelValueToViewValue(this.highValue);
        }
        else {
            this.viewHighValue = null;
        }
        this.resetSlider(rebindEvents);
    }
    /**
     * @return {?}
     */
    applyOptions() {
        this.viewOptions = new Options();
        Object.assign(this.viewOptions, this.options);
        this.viewOptions.draggableRange = this.range && this.viewOptions.draggableRange;
        this.viewOptions.draggableRangeOnly = this.range && this.viewOptions.draggableRangeOnly;
        if (this.viewOptions.draggableRangeOnly) {
            this.viewOptions.draggableRange = true;
        }
        this.viewOptions.showTicks = this.viewOptions.showTicks ||
            this.viewOptions.showTicksValues ||
            !ValueHelper.isNullOrUndefined(this.viewOptions.ticksArray);
        if (this.viewOptions.showTicks &&
            (!ValueHelper.isNullOrUndefined(this.viewOptions.tickStep) || !ValueHelper.isNullOrUndefined(this.viewOptions.ticksArray))) {
            this.intermediateTicks = true;
        }
        this.viewOptions.showSelectionBar = this.viewOptions.showSelectionBar ||
            this.viewOptions.showSelectionBarEnd ||
            !ValueHelper.isNullOrUndefined(this.viewOptions.showSelectionBarFromValue);
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray)) {
            this.applyStepsArrayOptions();
        }
        else {
            this.applyFloorCeilOptions();
        }
        if (ValueHelper.isNullOrUndefined(this.viewOptions.combineLabels)) {
            this.viewOptions.combineLabels = (minValue, maxValue) => {
                return minValue + ' - ' + maxValue;
            };
        }
        if (this.viewOptions.logScale && this.viewOptions.floor === 0) {
            throw Error('Can\'t use floor=0 with logarithmic scale');
        }
    }
    /**
     * @return {?}
     */
    applyStepsArrayOptions() {
        this.viewOptions.floor = 0;
        this.viewOptions.ceil = this.viewOptions.stepsArray.length - 1;
        this.viewOptions.step = 1;
        if (ValueHelper.isNullOrUndefined(this.viewOptions.translate)) {
            this.viewOptions.translate = (modelValue) => {
                if (this.viewOptions.bindIndexForStepsArray) {
                    return String(this.getStepValue(modelValue));
                }
                return String(modelValue);
            };
        }
    }
    /**
     * @return {?}
     */
    applyFloorCeilOptions() {
        if (ValueHelper.isNullOrUndefined(this.viewOptions.step)) {
            this.viewOptions.step = 1;
        }
        else {
            this.viewOptions.step = +this.viewOptions.step;
            if (this.viewOptions.step <= 0) {
                this.viewOptions.step = 1;
            }
        }
        if (ValueHelper.isNullOrUndefined(this.viewOptions.ceil) ||
            ValueHelper.isNullOrUndefined(this.viewOptions.floor)) {
            throw Error('floor and ceil options must be supplied');
        }
        this.viewOptions.ceil = +this.viewOptions.ceil;
        this.viewOptions.floor = +this.viewOptions.floor;
        if (ValueHelper.isNullOrUndefined(this.viewOptions.translate)) {
            this.viewOptions.translate = (value) => String(value);
        }
    }
    /**
     * @param {?=} rebindEvents
     * @return {?}
     */
    resetSlider(rebindEvents = true) {
        this.manageElementsStyle();
        this.addAccessibility();
        this.updateCeilLabel();
        this.updateFloorLabel();
        if (rebindEvents) {
            this.unbindEvents();
            this.manageEventsBindings();
        }
        this.updateDisabledState();
        this.calculateViewDimensions();
        this.refocusPointerIfNeeded();
    }
    /**
     * @param {?} pointerType
     * @return {?}
     */
    focusPointer(pointerType) {
        // If not supplied, use min pointer as default
        if (pointerType !== PointerType.Min && pointerType !== PointerType.Max) {
            pointerType = PointerType.Min;
        }
        if (pointerType === PointerType.Min) {
            this.minHandleElement.focus();
        }
        else if (this.range && pointerType === PointerType.Max) {
            this.maxHandleElement.focus();
        }
    }
    /**
     * @return {?}
     */
    refocusPointerIfNeeded() {
        if (!ValueHelper.isNullOrUndefined(this.currentFocusPointer)) {
            this.onPointerFocus(this.currentFocusPointer);
            /** @type {?} */
            const element = this.getPointerElement(this.currentFocusPointer);
            element.focus();
        }
    }
    /**
     * @return {?}
     */
    manageElementsStyle() {
        this.updateScale();
        this.floorLabelElement.setAlwaysHide(this.viewOptions.showTicksValues || this.viewOptions.hideLimitLabels);
        this.ceilLabelElement.setAlwaysHide(this.viewOptions.showTicksValues || this.viewOptions.hideLimitLabels);
        /** @type {?} */
        const hideLabelsForTicks = this.viewOptions.showTicksValues && !this.intermediateTicks;
        this.minHandleLabelElement.setAlwaysHide(hideLabelsForTicks || this.viewOptions.hidePointerLabels);
        this.maxHandleLabelElement.setAlwaysHide(hideLabelsForTicks || !this.range || this.viewOptions.hidePointerLabels);
        this.combinedLabelElement.setAlwaysHide(hideLabelsForTicks || !this.range || this.viewOptions.hidePointerLabels);
        this.selectionBarElement.setAlwaysHide(!this.range && !this.viewOptions.showSelectionBar);
        this.leftOuterSelectionBarElement.setAlwaysHide(!this.range || !this.viewOptions.showOuterSelectionBars);
        this.rightOuterSelectionBarElement.setAlwaysHide(!this.range || !this.viewOptions.showOuterSelectionBars);
        this.fullBarTransparentClass = this.range && this.viewOptions.showOuterSelectionBars;
        this.selectionBarDraggableClass = this.viewOptions.draggableRange && !this.viewOptions.onlyBindHandles;
        this.ticksUnderValuesClass = this.intermediateTicks && this.options.showTicksValues;
        if (this.sliderElementVerticalClass !== this.viewOptions.vertical) {
            this.updateVerticalState();
            // The above change in host component class will not be applied until the end of this cycle
            // However, functions calculating the slider position expect the slider to be already styled as vertical
            // So as a workaround, we need to reset the slider once again to compute the correct values
            setTimeout(() => { this.resetSlider(); });
        }
        // Changing animate class may interfere with slider reset/initialisation, so we should set it separately,
        // after all is properly set up
        if (this.sliderElementAnimateClass !== this.viewOptions.animate) {
            setTimeout(() => { this.sliderElementAnimateClass = this.viewOptions.animate; });
        }
    }
    /**
     * @return {?}
     */
    manageEventsBindings() {
        if (this.viewOptions.disabled || this.viewOptions.readOnly) {
            this.unbindEvents();
        }
        else {
            this.bindEvents();
        }
    }
    /**
     * @return {?}
     */
    updateDisabledState() {
        this.sliderElementDisabledAttr = this.viewOptions.disabled ? 'disabled' : null;
    }
    /**
     * @return {?}
     */
    updateVerticalState() {
        this.sliderElementVerticalClass = this.viewOptions.vertical;
        for (const element of this.getAllSliderElements()) {
            // This is also called before ngAfterInit, so need to check that view child bindings work
            if (!ValueHelper.isNullOrUndefined(element)) {
                element.setVertical(this.viewOptions.vertical);
            }
        }
    }
    /**
     * @return {?}
     */
    updateScale() {
        for (const element of this.getAllSliderElements()) {
            element.setScale(this.viewOptions.scale);
        }
    }
    /**
     * @return {?}
     */
    getAllSliderElements() {
        return [this.leftOuterSelectionBarElement,
            this.rightOuterSelectionBarElement,
            this.fullBarElement,
            this.selectionBarElement,
            this.minHandleElement,
            this.maxHandleElement,
            this.floorLabelElement,
            this.ceilLabelElement,
            this.minHandleLabelElement,
            this.maxHandleLabelElement,
            this.combinedLabelElement,
            this.ticksElement
        ];
    }
    /**
     * @return {?}
     */
    initHandles() {
        this.updateLowHandle(this.valueToPosition(this.viewLowValue));
        /*
           the order here is important since the selection bar should be
           updated after the high handle but before the combined label
           */
        if (this.range) {
            this.updateHighHandle(this.valueToPosition(this.viewHighValue));
        }
        this.updateSelectionBar();
        if (this.range) {
            this.updateCombinedLabel();
        }
        this.updateTicksScale();
    }
    /**
     * @return {?}
     */
    addAccessibility() {
        this.updateAriaAttributes();
        this.minHandleElement.role = 'slider';
        if (this.viewOptions.keyboardSupport &&
            !(this.viewOptions.readOnly || this.viewOptions.disabled)) {
            this.minHandleElement.tabindex = '0';
        }
        else {
            this.minHandleElement.tabindex = '';
        }
        this.minHandleElement.ariaOrientation = this.viewOptions.vertical ? 'vertical' : 'horizontal';
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.ariaLabel)) {
            this.minHandleElement.ariaLabel = this.viewOptions.ariaLabel;
        }
        else if (!ValueHelper.isNullOrUndefined(this.viewOptions.ariaLabelledBy)) {
            this.minHandleElement.ariaLabelledBy = this.viewOptions.ariaLabelledBy;
        }
        if (this.range) {
            this.maxHandleElement.role = 'slider';
            if (this.viewOptions.keyboardSupport &&
                !(this.viewOptions.readOnly || this.viewOptions.disabled)) {
                this.maxHandleElement.tabindex = '0';
            }
            else {
                this.maxHandleElement.tabindex = '';
            }
            this.maxHandleElement.ariaOrientation = this.viewOptions.vertical ? 'vertical' : 'horizontal';
            if (!ValueHelper.isNullOrUndefined(this.viewOptions.ariaLabelHigh)) {
                this.maxHandleElement.ariaLabel = this.viewOptions.ariaLabelHigh;
            }
            else if (!ValueHelper.isNullOrUndefined(this.viewOptions.ariaLabelledByHigh)) {
                this.maxHandleElement.ariaLabelledBy = this.viewOptions.ariaLabelledByHigh;
            }
        }
    }
    /**
     * @return {?}
     */
    updateAriaAttributes() {
        this.minHandleElement.ariaValueNow = (+this.value).toString();
        this.minHandleElement.ariaValueText = this.viewOptions.translate(+this.value, LabelType.Low);
        this.minHandleElement.ariaValueMin = this.viewOptions.floor.toString();
        this.minHandleElement.ariaValueMax = this.viewOptions.ceil.toString();
        if (this.range) {
            this.maxHandleElement.ariaValueNow = (+this.highValue).toString();
            this.maxHandleElement.ariaValueText = this.viewOptions.translate(+this.highValue, LabelType.High);
            this.maxHandleElement.ariaValueMin = this.viewOptions.floor.toString();
            this.maxHandleElement.ariaValueMax = this.viewOptions.ceil.toString();
        }
    }
    /**
     * @return {?}
     */
    calculateViewDimensions() {
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.handleDimension)) {
            this.minHandleElement.setDimension(this.viewOptions.handleDimension);
        }
        else {
            this.minHandleElement.calculateDimension();
        }
        /** @type {?} */
        const handleWidth = this.minHandleElement.dimension;
        this.handleHalfDimension = handleWidth / 2;
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.barDimension)) {
            this.fullBarElement.setDimension(this.viewOptions.barDimension);
        }
        else {
            this.fullBarElement.calculateDimension();
        }
        this.maxHandlePosition = this.fullBarElement.dimension - handleWidth;
        if (this.initHasRun) {
            this.updateFloorLabel();
            this.updateCeilLabel();
            this.initHandles();
        }
    }
    /**
     * @return {?}
     */
    calculateViewDimensionsAndDetectChanges() {
        this.calculateViewDimensions();
        if (!this.isRefDestroyed()) {
            this.changeDetectionRef.detectChanges();
        }
    }
    /**
     * If the slider reference is already destroyed
     * @return {?} boolean - true if ref is destroyed
     */
    isRefDestroyed() {
        return this.changeDetectionRef['destroyed'];
    }
    /**
     * @return {?}
     */
    updateTicksScale() {
        if (!this.viewOptions.showTicks) {
            setTimeout(() => { this.sliderElementWithLegendClass = false; });
            return;
        }
        /** @type {?} */
        const ticksArray = !ValueHelper.isNullOrUndefined(this.viewOptions.ticksArray)
            ? this.viewOptions.ticksArray
            : this.getTicksArray();
        /** @type {?} */
        const translate = this.viewOptions.vertical ? 'translateY' : 'translateX';
        if (this.viewOptions.rightToLeft) {
            ticksArray.reverse();
        }
        /** @type {?} */
        const tickValueStep = !ValueHelper.isNullOrUndefined(this.viewOptions.tickValueStep) ? this.viewOptions.tickValueStep :
            (!ValueHelper.isNullOrUndefined(this.viewOptions.tickStep) ? this.viewOptions.tickStep : this.viewOptions.step);
        /** @type {?} */
        let hasAtLeastOneLegend = false;
        /** @type {?} */
        const newTicks = ticksArray.map((value) => {
            /** @type {?} */
            let position = this.valueToPosition(value);
            if (this.viewOptions.vertical) {
                position = this.maxHandlePosition - position;
            }
            /** @type {?} */
            const translation = translate + '(' + Math.round(position) + 'px)';
            /** @type {?} */
            const tick = new Tick();
            tick.selected = this.isTickSelected(value);
            tick.style = {
                '-webkit-transform': translation,
                '-moz-transform': translation,
                '-o-transform': translation,
                '-ms-transform': translation,
                transform: translation,
            };
            if (tick.selected && !ValueHelper.isNullOrUndefined(this.viewOptions.getSelectionBarColor)) {
                tick.style['background-color'] = this.getSelectionBarColor();
            }
            if (!tick.selected && !ValueHelper.isNullOrUndefined(this.viewOptions.getTickColor)) {
                tick.style['background-color'] = this.getTickColor(value);
            }
            if (!ValueHelper.isNullOrUndefined(this.viewOptions.ticksTooltip)) {
                tick.tooltip = this.viewOptions.ticksTooltip(value);
                tick.tooltipPlacement = this.viewOptions.vertical ? 'right' : 'top';
            }
            if (this.viewOptions.showTicksValues && !ValueHelper.isNullOrUndefined(tickValueStep) &&
                MathHelper.isModuloWithinPrecisionLimit(value, tickValueStep, this.viewOptions.precisionLimit)) {
                tick.value = this.getDisplayValue(value, LabelType.TickValue);
                if (!ValueHelper.isNullOrUndefined(this.viewOptions.ticksValuesTooltip)) {
                    tick.valueTooltip = this.viewOptions.ticksValuesTooltip(value);
                    tick.valueTooltipPlacement = this.viewOptions.vertical
                        ? 'right'
                        : 'top';
                }
            }
            /** @type {?} */
            let legend = null;
            if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray)) {
                /** @type {?} */
                const step = this.viewOptions.stepsArray[value];
                if (!ValueHelper.isNullOrUndefined(step)) {
                    legend = step.legend;
                }
            }
            else if (!ValueHelper.isNullOrUndefined(this.viewOptions.getLegend)) {
                legend = this.viewOptions.getLegend(value);
            }
            if (!ValueHelper.isNullOrUndefined(legend)) {
                tick.legend = legend;
                hasAtLeastOneLegend = true;
            }
            return tick;
        });
        setTimeout(() => { this.sliderElementWithLegendClass = hasAtLeastOneLegend; });
        // We should avoid re-creating the ticks array if possible
        // This both improves performance and makes CSS animations work correctly
        if (!ValueHelper.isNullOrUndefined(this.ticks) && this.ticks.length === newTicks.length) {
            for (let i = 0; i < newTicks.length; ++i) {
                Object.assign(this.ticks[i], newTicks[i]);
            }
        }
        else {
            this.ticks = newTicks;
        }
        if (!this.isRefDestroyed()) {
            this.changeDetectionRef.detectChanges();
        }
    }
    /**
     * @return {?}
     */
    getTicksArray() {
        /** @type {?} */
        const step = (!ValueHelper.isNullOrUndefined(this.viewOptions.tickStep)) ? this.viewOptions.tickStep : this.viewOptions.step;
        /** @type {?} */
        const ticksArray = [];
        /** @type {?} */
        const numberOfValues = 1 + Math.floor(MathHelper.roundToPrecisionLimit(Math.abs(this.viewOptions.ceil - this.viewOptions.floor) / step, this.viewOptions.precisionLimit));
        for (let index = 0; index < numberOfValues; ++index) {
            ticksArray.push(MathHelper.roundToPrecisionLimit(this.viewOptions.floor + step * index, this.viewOptions.precisionLimit));
        }
        return ticksArray;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    isTickSelected(value) {
        if (!this.range) {
            if (!ValueHelper.isNullOrUndefined(this.viewOptions.showSelectionBarFromValue)) {
                /** @type {?} */
                const center = this.viewOptions.showSelectionBarFromValue;
                if (this.viewLowValue > center &&
                    value >= center &&
                    value <= this.viewLowValue) {
                    return true;
                }
                else if (this.viewLowValue < center &&
                    value <= center &&
                    value >= this.viewLowValue) {
                    return true;
                }
            }
            else if (this.viewOptions.showSelectionBarEnd) {
                if (value >= this.viewLowValue) {
                    return true;
                }
            }
            else if (this.viewOptions.showSelectionBar && value <= this.viewLowValue) {
                return true;
            }
        }
        if (this.range && value >= this.viewLowValue && value <= this.viewHighValue) {
            return true;
        }
        return false;
    }
    /**
     * @return {?}
     */
    updateFloorLabel() {
        if (!this.floorLabelElement.alwaysHide) {
            this.floorLabelElement.setValue(this.getDisplayValue(this.viewOptions.floor, LabelType.Floor));
            this.floorLabelElement.calculateDimension();
            /** @type {?} */
            const position = this.viewOptions.rightToLeft
                ? this.fullBarElement.dimension - this.floorLabelElement.dimension
                : 0;
            this.floorLabelElement.setPosition(position);
        }
    }
    /**
     * @return {?}
     */
    updateCeilLabel() {
        if (!this.ceilLabelElement.alwaysHide) {
            this.ceilLabelElement.setValue(this.getDisplayValue(this.viewOptions.ceil, LabelType.Ceil));
            this.ceilLabelElement.calculateDimension();
            /** @type {?} */
            const position = this.viewOptions.rightToLeft
                ? 0
                : this.fullBarElement.dimension - this.ceilLabelElement.dimension;
            this.ceilLabelElement.setPosition(position);
        }
    }
    /**
     * @param {?} which
     * @param {?} newPos
     * @return {?}
     */
    updateHandles(which, newPos) {
        if (which === PointerType.Min) {
            this.updateLowHandle(newPos);
        }
        else if (which === PointerType.Max) {
            this.updateHighHandle(newPos);
        }
        this.updateSelectionBar();
        this.updateTicksScale();
        if (this.range) {
            this.updateCombinedLabel();
        }
    }
    /**
     * @param {?} labelType
     * @param {?} newPos
     * @return {?}
     */
    getHandleLabelPos(labelType, newPos) {
        /** @type {?} */
        const labelDimension = (labelType === PointerType.Min)
            ? this.minHandleLabelElement.dimension
            : this.maxHandleLabelElement.dimension;
        /** @type {?} */
        const nearHandlePos = newPos - labelDimension / 2 + this.handleHalfDimension;
        /** @type {?} */
        const endOfBarPos = this.fullBarElement.dimension - labelDimension;
        if (!this.viewOptions.boundPointerLabels) {
            return nearHandlePos;
        }
        if ((this.viewOptions.rightToLeft && labelType === PointerType.Min) ||
            (!this.viewOptions.rightToLeft && labelType === PointerType.Max)) {
            return Math.min(nearHandlePos, endOfBarPos);
        }
        else {
            return Math.min(Math.max(nearHandlePos, 0), endOfBarPos);
        }
    }
    /**
     * @param {?} newPos
     * @return {?}
     */
    updateLowHandle(newPos) {
        this.minHandleElement.setPosition(newPos);
        this.minHandleLabelElement.setValue(this.getDisplayValue(this.viewLowValue, LabelType.Low));
        this.minHandleLabelElement.setPosition(this.getHandleLabelPos(PointerType.Min, newPos));
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.getPointerColor)) {
            this.minPointerStyle = {
                backgroundColor: this.getPointerColor(PointerType.Min),
            };
        }
        if (this.viewOptions.autoHideLimitLabels) {
            this.updateFloorAndCeilLabelsVisibility();
        }
    }
    /**
     * @param {?} newPos
     * @return {?}
     */
    updateHighHandle(newPos) {
        this.maxHandleElement.setPosition(newPos);
        this.maxHandleLabelElement.setValue(this.getDisplayValue(this.viewHighValue, LabelType.High));
        this.maxHandleLabelElement.setPosition(this.getHandleLabelPos(PointerType.Max, newPos));
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.getPointerColor)) {
            this.maxPointerStyle = {
                backgroundColor: this.getPointerColor(PointerType.Max),
            };
        }
        if (this.viewOptions.autoHideLimitLabels) {
            this.updateFloorAndCeilLabelsVisibility();
        }
    }
    /**
     * @return {?}
     */
    updateFloorAndCeilLabelsVisibility() {
        // Show based only on hideLimitLabels if pointer labels are hidden
        if (this.viewOptions.hidePointerLabels) {
            return;
        }
        /** @type {?} */
        let floorLabelHidden = false;
        /** @type {?} */
        let ceilLabelHidden = false;
        /** @type {?} */
        const isMinLabelAtFloor = this.isLabelBelowFloorLabel(this.minHandleLabelElement);
        /** @type {?} */
        const isMinLabelAtCeil = this.isLabelAboveCeilLabel(this.minHandleLabelElement);
        /** @type {?} */
        const isMaxLabelAtCeil = this.isLabelAboveCeilLabel(this.maxHandleLabelElement);
        /** @type {?} */
        const isCombinedLabelAtFloor = this.isLabelBelowFloorLabel(this.combinedLabelElement);
        /** @type {?} */
        const isCombinedLabelAtCeil = this.isLabelAboveCeilLabel(this.combinedLabelElement);
        if (isMinLabelAtFloor) {
            floorLabelHidden = true;
            this.floorLabelElement.hide();
        }
        else {
            floorLabelHidden = false;
            this.floorLabelElement.show();
        }
        if (isMinLabelAtCeil) {
            ceilLabelHidden = true;
            this.ceilLabelElement.hide();
        }
        else {
            ceilLabelHidden = false;
            this.ceilLabelElement.show();
        }
        if (this.range) {
            /** @type {?} */
            const hideCeil = this.combinedLabelElement.isVisible() ? isCombinedLabelAtCeil : isMaxLabelAtCeil;
            /** @type {?} */
            const hideFloor = this.combinedLabelElement.isVisible() ? isCombinedLabelAtFloor : isMinLabelAtFloor;
            if (hideCeil) {
                this.ceilLabelElement.hide();
            }
            else if (!ceilLabelHidden) {
                this.ceilLabelElement.show();
            }
            // Hide or show floor label
            if (hideFloor) {
                this.floorLabelElement.hide();
            }
            else if (!floorLabelHidden) {
                this.floorLabelElement.show();
            }
        }
    }
    /**
     * @param {?} label
     * @return {?}
     */
    isLabelBelowFloorLabel(label) {
        /** @type {?} */
        const pos = label.position;
        /** @type {?} */
        const dim = label.dimension;
        /** @type {?} */
        const floorPos = this.floorLabelElement.position;
        /** @type {?} */
        const floorDim = this.floorLabelElement.dimension;
        return this.viewOptions.rightToLeft
            ? pos + dim >= floorPos - 2
            : pos <= floorPos + floorDim + 2;
    }
    /**
     * @param {?} label
     * @return {?}
     */
    isLabelAboveCeilLabel(label) {
        /** @type {?} */
        const pos = label.position;
        /** @type {?} */
        const dim = label.dimension;
        /** @type {?} */
        const ceilPos = this.ceilLabelElement.position;
        /** @type {?} */
        const ceilDim = this.ceilLabelElement.dimension;
        return this.viewOptions.rightToLeft
            ? pos <= ceilPos + ceilDim + 2
            : pos + dim >= ceilPos - 2;
    }
    /**
     * @return {?}
     */
    updateSelectionBar() {
        /** @type {?} */
        let position = 0;
        /** @type {?} */
        let dimension = 0;
        /** @type {?} */
        const isSelectionBarFromRight = this.viewOptions.rightToLeft
            ? !this.viewOptions.showSelectionBarEnd
            : this.viewOptions.showSelectionBarEnd;
        /** @type {?} */
        const positionForRange = this.viewOptions.rightToLeft
            ? this.maxHandleElement.position + this.handleHalfDimension
            : this.minHandleElement.position + this.handleHalfDimension;
        if (this.range) {
            dimension = Math.abs(this.maxHandleElement.position - this.minHandleElement.position);
            position = positionForRange;
        }
        else {
            if (!ValueHelper.isNullOrUndefined(this.viewOptions.showSelectionBarFromValue)) {
                /** @type {?} */
                const center = this.viewOptions.showSelectionBarFromValue;
                /** @type {?} */
                const centerPosition = this.valueToPosition(center);
                /** @type {?} */
                const isModelGreaterThanCenter = this.viewOptions.rightToLeft
                    ? this.viewLowValue <= center
                    : this.viewLowValue > center;
                if (isModelGreaterThanCenter) {
                    dimension = this.minHandleElement.position - centerPosition;
                    position = centerPosition + this.handleHalfDimension;
                }
                else {
                    dimension = centerPosition - this.minHandleElement.position;
                    position = this.minHandleElement.position + this.handleHalfDimension;
                }
            }
            else if (isSelectionBarFromRight) {
                dimension = Math.ceil(Math.abs(this.maxHandlePosition - this.minHandleElement.position) + this.handleHalfDimension);
                position = Math.floor(this.minHandleElement.position + this.handleHalfDimension);
            }
            else {
                dimension = this.minHandleElement.position + this.handleHalfDimension;
                position = 0;
            }
        }
        this.selectionBarElement.setDimension(dimension);
        this.selectionBarElement.setPosition(position);
        if (this.range && this.viewOptions.showOuterSelectionBars) {
            if (this.viewOptions.rightToLeft) {
                this.rightOuterSelectionBarElement.setDimension(position);
                this.rightOuterSelectionBarElement.setPosition(0);
                this.fullBarElement.calculateDimension();
                this.leftOuterSelectionBarElement.setDimension(this.fullBarElement.dimension - (position + dimension));
                this.leftOuterSelectionBarElement.setPosition(position + dimension);
            }
            else {
                this.leftOuterSelectionBarElement.setDimension(position);
                this.leftOuterSelectionBarElement.setPosition(0);
                this.fullBarElement.calculateDimension();
                this.rightOuterSelectionBarElement.setDimension(this.fullBarElement.dimension - (position + dimension));
                this.rightOuterSelectionBarElement.setPosition(position + dimension);
            }
        }
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.getSelectionBarColor)) {
            /** @type {?} */
            const color = this.getSelectionBarColor();
            this.barStyle = {
                backgroundColor: color,
            };
        }
        else if (!ValueHelper.isNullOrUndefined(this.viewOptions.selectionBarGradient)) {
            /** @type {?} */
            const offset = (!ValueHelper.isNullOrUndefined(this.viewOptions.showSelectionBarFromValue))
                ? this.valueToPosition(this.viewOptions.showSelectionBarFromValue)
                : 0;
            /** @type {?} */
            const reversed = (offset - position > 0 && !isSelectionBarFromRight) || (offset - position <= 0 && isSelectionBarFromRight);
            /** @type {?} */
            const direction = this.viewOptions.vertical
                ? reversed ? 'bottom' : 'top'
                : reversed ? 'left' : 'right';
            this.barStyle = {
                backgroundImage: 'linear-gradient(to ' +
                    direction +
                    ', ' +
                    this.viewOptions.selectionBarGradient.from +
                    ' 0%,' +
                    this.viewOptions.selectionBarGradient.to +
                    ' 100%)',
            };
            if (this.viewOptions.vertical) {
                this.barStyle.backgroundPosition =
                    'center ' +
                        (offset +
                            dimension +
                            position +
                            (reversed ? -this.handleHalfDimension : 0)) +
                        'px';
                this.barStyle.backgroundSize =
                    '100% ' + (this.fullBarElement.dimension - this.handleHalfDimension) + 'px';
            }
            else {
                this.barStyle.backgroundPosition =
                    offset -
                        position +
                        (reversed ? this.handleHalfDimension : 0) +
                        'px center';
                this.barStyle.backgroundSize =
                    this.fullBarElement.dimension - this.handleHalfDimension + 'px 100%';
            }
        }
    }
    /**
     * @return {?}
     */
    getSelectionBarColor() {
        if (this.range) {
            return this.viewOptions.getSelectionBarColor(this.value, this.highValue);
        }
        return this.viewOptions.getSelectionBarColor(this.value);
    }
    /**
     * @param {?} pointerType
     * @return {?}
     */
    getPointerColor(pointerType) {
        if (pointerType === PointerType.Max) {
            return this.viewOptions.getPointerColor(this.highValue, pointerType);
        }
        return this.viewOptions.getPointerColor(this.value, pointerType);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getTickColor(value) {
        return this.viewOptions.getTickColor(value);
    }
    /**
     * @return {?}
     */
    updateCombinedLabel() {
        /** @type {?} */
        let isLabelOverlap = null;
        if (this.viewOptions.rightToLeft) {
            isLabelOverlap =
                this.minHandleLabelElement.position - this.minHandleLabelElement.dimension - 10 <= this.maxHandleLabelElement.position;
        }
        else {
            isLabelOverlap =
                this.minHandleLabelElement.position + this.minHandleLabelElement.dimension + 10 >= this.maxHandleLabelElement.position;
        }
        if (isLabelOverlap) {
            /** @type {?} */
            const lowDisplayValue = this.getDisplayValue(this.viewLowValue, LabelType.Low);
            /** @type {?} */
            const highDisplayValue = this.getDisplayValue(this.viewHighValue, LabelType.High);
            /** @type {?} */
            const combinedLabelValue = this.viewOptions.rightToLeft
                ? this.viewOptions.combineLabels(highDisplayValue, lowDisplayValue)
                : this.viewOptions.combineLabels(lowDisplayValue, highDisplayValue);
            this.combinedLabelElement.setValue(combinedLabelValue);
            /** @type {?} */
            const pos = this.viewOptions.boundPointerLabels
                ? Math.min(Math.max(this.selectionBarElement.position +
                    this.selectionBarElement.dimension / 2 -
                    this.combinedLabelElement.dimension / 2, 0), this.fullBarElement.dimension - this.combinedLabelElement.dimension)
                : this.selectionBarElement.position + this.selectionBarElement.dimension / 2 - this.combinedLabelElement.dimension / 2;
            this.combinedLabelElement.setPosition(pos);
            this.minHandleLabelElement.hide();
            this.maxHandleLabelElement.hide();
            this.combinedLabelElement.show();
        }
        else {
            this.updateHighHandle(this.valueToPosition(this.viewHighValue));
            this.updateLowHandle(this.valueToPosition(this.viewLowValue));
            this.maxHandleLabelElement.show();
            this.minHandleLabelElement.show();
            this.combinedLabelElement.hide();
        }
        if (this.viewOptions.autoHideLimitLabels) {
            this.updateFloorAndCeilLabelsVisibility();
        }
    }
    /**
     * @param {?} value
     * @param {?} which
     * @return {?}
     */
    getDisplayValue(value, which) {
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.stepsArray) && !this.viewOptions.bindIndexForStepsArray) {
            value = this.getStepValue(value);
        }
        return this.viewOptions.translate(value, which);
    }
    /**
     * @param {?} value
     * @param {?=} customStep
     * @return {?}
     */
    roundStep(value, customStep) {
        /** @type {?} */
        const step = !ValueHelper.isNullOrUndefined(customStep) ? customStep : this.viewOptions.step;
        /** @type {?} */
        let steppedDifference = MathHelper.roundToPrecisionLimit((value - this.viewOptions.floor) / step, this.viewOptions.precisionLimit);
        steppedDifference = Math.round(steppedDifference) * step;
        return MathHelper.roundToPrecisionLimit(this.viewOptions.floor + steppedDifference, this.viewOptions.precisionLimit);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    valueToPosition(val) {
        /** @type {?} */
        let fn = ValueHelper.linearValueToPosition;
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.customValueToPosition)) {
            fn = this.viewOptions.customValueToPosition;
        }
        else if (this.viewOptions.logScale) {
            fn = ValueHelper.logValueToPosition;
        }
        val = MathHelper.clampToRange(val, this.viewOptions.floor, this.viewOptions.ceil);
        /** @type {?} */
        let percent = fn(val, this.viewOptions.floor, this.viewOptions.ceil);
        if (ValueHelper.isNullOrUndefined(percent)) {
            percent = 0;
        }
        if (this.viewOptions.rightToLeft) {
            percent = 1 - percent;
        }
        return percent * this.maxHandlePosition;
    }
    /**
     * @param {?} position
     * @return {?}
     */
    positionToValue(position) {
        /** @type {?} */
        let percent = position / this.maxHandlePosition;
        if (this.viewOptions.rightToLeft) {
            percent = 1 - percent;
        }
        /** @type {?} */
        let fn = ValueHelper.linearPositionToValue;
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.customPositionToValue)) {
            fn = this.viewOptions.customPositionToValue;
        }
        else if (this.viewOptions.logScale) {
            fn = ValueHelper.logPositionToValue;
        }
        /** @type {?} */
        const value = fn(percent, this.viewOptions.floor, this.viewOptions.ceil);
        return !ValueHelper.isNullOrUndefined(value) ? value : 0;
    }
    /**
     * @param {?} event
     * @param {?=} targetTouchId
     * @return {?}
     */
    getEventXY(event, targetTouchId) {
        if (event instanceof MouseEvent) {
            return this.viewOptions.vertical ? event.clientY : event.clientX;
        }
        /** @type {?} */
        let touchIndex = 0;
        /** @type {?} */
        const touches = event.touches;
        if (!ValueHelper.isNullOrUndefined(targetTouchId)) {
            for (let i = 0; i < touches.length; i++) {
                if (touches[i].identifier === targetTouchId) {
                    touchIndex = i;
                    break;
                }
            }
        }
        // Return the target touch or if the target touch was not found in the event
        // returns the coordinates of the first touch
        return this.viewOptions.vertical ? touches[touchIndex].clientY : touches[touchIndex].clientX;
    }
    /**
     * @param {?} event
     * @param {?=} targetTouchId
     * @return {?}
     */
    getEventPosition(event, targetTouchId) {
        /** @type {?} */
        const sliderElementBoundingRect = this.elementRef.nativeElement.getBoundingClientRect();
        /** @type {?} */
        const sliderPos = this.viewOptions.vertical ?
            sliderElementBoundingRect.bottom : sliderElementBoundingRect.left;
        /** @type {?} */
        let eventPos = 0;
        if (this.viewOptions.vertical) {
            eventPos = -this.getEventXY(event, targetTouchId) + sliderPos;
        }
        else {
            eventPos = this.getEventXY(event, targetTouchId) - sliderPos;
        }
        return eventPos * this.viewOptions.scale - this.handleHalfDimension;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    getNearestHandle(event) {
        if (!this.range) {
            return PointerType.Min;
        }
        /** @type {?} */
        const position = this.getEventPosition(event);
        /** @type {?} */
        const distanceMin = Math.abs(position - this.minHandleElement.position);
        /** @type {?} */
        const distanceMax = Math.abs(position - this.maxHandleElement.position);
        if (distanceMin < distanceMax) {
            return PointerType.Min;
        }
        else if (distanceMin > distanceMax) {
            return PointerType.Max;
        }
        else if (!this.viewOptions.rightToLeft) {
            // if event is at the same distance from min/max then if it's at left of minH, we return minH else maxH
            return position < this.minHandleElement.position ? PointerType.Min : PointerType.Max;
        }
        // reverse in rtl
        return position > this.minHandleElement.position ? PointerType.Min : PointerType.Max;
    }
    /**
     * @return {?}
     */
    bindEvents() {
        /** @type {?} */
        const draggableRange = this.viewOptions.draggableRange;
        if (!this.viewOptions.onlyBindHandles) {
            this.selectionBarElement.on('mousedown', (event) => this.onBarStart(null, draggableRange, event, true, true, true));
        }
        if (this.viewOptions.draggableRangeOnly) {
            this.minHandleElement.on('mousedown', (event) => this.onBarStart(PointerType.Min, draggableRange, event, true, true));
            this.maxHandleElement.on('mousedown', (event) => this.onBarStart(PointerType.Max, draggableRange, event, true, true));
        }
        else {
            this.minHandleElement.on('mousedown', (event) => this.onStart(PointerType.Min, event, true, true));
            if (this.range) {
                this.maxHandleElement.on('mousedown', (event) => this.onStart(PointerType.Max, event, true, true));
            }
            if (!this.viewOptions.onlyBindHandles) {
                this.fullBarElement.on('mousedown', (event) => this.onStart(null, event, true, true, true));
                this.ticksElement.on('mousedown', (event) => this.onStart(null, event, true, true, true, true));
            }
        }
        if (!this.viewOptions.onlyBindHandles) {
            this.selectionBarElement.onPassive('touchstart', (event) => this.onBarStart(null, draggableRange, event, true, true, true));
        }
        if (this.viewOptions.draggableRangeOnly) {
            this.minHandleElement.onPassive('touchstart', (event) => this.onBarStart(PointerType.Min, draggableRange, event, true, true));
            this.maxHandleElement.onPassive('touchstart', (event) => this.onBarStart(PointerType.Max, draggableRange, event, true, true));
        }
        else {
            this.minHandleElement.onPassive('touchstart', (event) => this.onStart(PointerType.Min, event, true, true));
            if (this.range) {
                this.maxHandleElement.onPassive('touchstart', (event) => this.onStart(PointerType.Max, event, true, true));
            }
            if (!this.viewOptions.onlyBindHandles) {
                this.fullBarElement.onPassive('touchstart', (event) => this.onStart(null, event, true, true, true));
                this.ticksElement.onPassive('touchstart', (event) => this.onStart(null, event, false, false, true, true));
            }
        }
        if (this.viewOptions.keyboardSupport) {
            this.minHandleElement.on('focus', () => this.onPointerFocus(PointerType.Min));
            if (this.range) {
                this.maxHandleElement.on('focus', () => this.onPointerFocus(PointerType.Max));
            }
        }
    }
    /**
     * @param {?} options
     * @return {?}
     */
    getOptionsInfluencingEventBindings(options) {
        return [
            options.disabled,
            options.readOnly,
            options.draggableRange,
            options.draggableRangeOnly,
            options.onlyBindHandles,
            options.keyboardSupport
        ];
    }
    /**
     * @return {?}
     */
    unbindEvents() {
        this.unsubscribeOnMove();
        this.unsubscribeOnEnd();
        for (const element of this.getAllSliderElements()) {
            if (!ValueHelper.isNullOrUndefined(element)) {
                element.off();
            }
        }
    }
    /**
     * @param {?} pointerType
     * @param {?} draggableRange
     * @param {?} event
     * @param {?} bindMove
     * @param {?} bindEnd
     * @param {?=} simulateImmediateMove
     * @param {?=} simulateImmediateEnd
     * @return {?}
     */
    onBarStart(pointerType, draggableRange, event, bindMove, bindEnd, simulateImmediateMove, simulateImmediateEnd) {
        if (draggableRange) {
            this.onDragStart(pointerType, event, bindMove, bindEnd);
        }
        else {
            this.onStart(pointerType, event, bindMove, bindEnd, simulateImmediateMove, simulateImmediateEnd);
        }
    }
    /**
     * @param {?} pointerType
     * @param {?} event
     * @param {?} bindMove
     * @param {?} bindEnd
     * @param {?=} simulateImmediateMove
     * @param {?=} simulateImmediateEnd
     * @return {?}
     */
    onStart(pointerType, event, bindMove, bindEnd, simulateImmediateMove, simulateImmediateEnd) {
        event.stopPropagation();
        // Only call preventDefault() when handling non-passive events (passive events don't need it)
        if (!CompatibilityHelper.isTouchEvent(event) || !detect_passive_events__WEBPACK_IMPORTED_MODULE_2___default.a.hasSupport) {
            event.preventDefault();
        }
        this.moving = false;
        // We have to do this in case the HTML where the sliders are on
        // have been animated into view.
        this.calculateViewDimensions();
        if (ValueHelper.isNullOrUndefined(pointerType)) {
            pointerType = this.getNearestHandle(event);
        }
        this.currentTrackingPointer = pointerType;
        /** @type {?} */
        const pointerElement = this.getPointerElement(pointerType);
        pointerElement.active = true;
        if (this.viewOptions.keyboardSupport) {
            pointerElement.focus();
        }
        if (bindMove) {
            this.unsubscribeOnMove();
            /** @type {?} */
            const onMoveCallback = (e) => this.dragging.active ? this.onDragMove(e) : this.onMove(e);
            if (CompatibilityHelper.isTouchEvent(event)) {
                this.onMoveEventListener = this.eventListenerHelper.attachPassiveEventListener(document, 'touchmove', onMoveCallback, this.viewOptions.touchEventsInterval);
            }
            else {
                this.onMoveEventListener = this.eventListenerHelper.attachEventListener(document, 'mousemove', onMoveCallback, this.viewOptions.mouseEventsInterval);
            }
        }
        if (bindEnd) {
            this.unsubscribeOnEnd();
            /** @type {?} */
            const onEndCallback = (e) => this.onEnd(e);
            if (CompatibilityHelper.isTouchEvent(event)) {
                this.onEndEventListener = this.eventListenerHelper.attachPassiveEventListener(document, 'touchend', onEndCallback);
            }
            else {
                this.onEndEventListener = this.eventListenerHelper.attachEventListener(document, 'mouseup', onEndCallback);
            }
        }
        this.userChangeStart.emit(this.getChangeContext());
        if (CompatibilityHelper.isTouchEvent(event) && !ValueHelper.isNullOrUndefined((/** @type {?} */ (event)).changedTouches)) {
            // Store the touch identifier
            if (ValueHelper.isNullOrUndefined(this.touchId)) {
                this.touchId = (/** @type {?} */ (event)).changedTouches[0].identifier;
            }
        }
        // Click events, either with mouse or touch gesture are weird. Sometimes they result in full
        // start, move, end sequence, and sometimes, they don't - they only invoke mousedown
        // As a workaround, we simulate the first move event and the end event if it's necessary
        if (simulateImmediateMove) {
            this.onMove(event, true);
        }
        if (simulateImmediateEnd) {
            this.onEnd(event);
        }
    }
    /**
     * @param {?} event
     * @param {?=} fromTick
     * @return {?}
     */
    onMove(event, fromTick) {
        /** @type {?} */
        let touchForThisSlider = null;
        if (CompatibilityHelper.isTouchEvent(event)) {
            /** @type {?} */
            const changedTouches = (/** @type {?} */ (event)).changedTouches;
            for (let i = 0; i < changedTouches.length; i++) {
                if (changedTouches[i].identifier === this.touchId) {
                    touchForThisSlider = changedTouches[i];
                    break;
                }
            }
            if (ValueHelper.isNullOrUndefined(touchForThisSlider)) {
                return;
            }
        }
        if (this.viewOptions.animate && !this.viewOptions.animateOnMove) {
            if (this.moving) {
                this.sliderElementAnimateClass = false;
            }
        }
        this.moving = true;
        /** @type {?} */
        const newPos = !ValueHelper.isNullOrUndefined(touchForThisSlider)
            ? this.getEventPosition(event, touchForThisSlider.identifier)
            : this.getEventPosition(event);
        /** @type {?} */
        let newValue;
        /** @type {?} */
        const ceilValue = this.viewOptions.rightToLeft
            ? this.viewOptions.floor
            : this.viewOptions.ceil;
        /** @type {?} */
        const floorValue = this.viewOptions.rightToLeft ? this.viewOptions.ceil : this.viewOptions.floor;
        if (newPos <= 0) {
            newValue = floorValue;
        }
        else if (newPos >= this.maxHandlePosition) {
            newValue = ceilValue;
        }
        else {
            newValue = this.positionToValue(newPos);
            if (fromTick && !ValueHelper.isNullOrUndefined(this.viewOptions.tickStep)) {
                newValue = this.roundStep(newValue, this.viewOptions.tickStep);
            }
            else {
                newValue = this.roundStep(newValue);
            }
        }
        this.positionTrackingHandle(newValue);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onEnd(event) {
        if (CompatibilityHelper.isTouchEvent(event)) {
            /** @type {?} */
            const changedTouches = (/** @type {?} */ (event)).changedTouches;
            if (changedTouches[0].identifier !== this.touchId) {
                return;
            }
        }
        this.moving = false;
        if (this.viewOptions.animate) {
            this.sliderElementAnimateClass = true;
        }
        this.touchId = null;
        if (!this.viewOptions.keyboardSupport) {
            this.minHandleElement.active = false;
            this.maxHandleElement.active = false;
            this.currentTrackingPointer = null;
        }
        this.dragging.active = false;
        this.unsubscribeOnMove();
        this.unsubscribeOnEnd();
        this.userChangeEnd.emit(this.getChangeContext());
    }
    /**
     * @param {?} pointerType
     * @return {?}
     */
    onPointerFocus(pointerType) {
        /** @type {?} */
        const pointerElement = this.getPointerElement(pointerType);
        pointerElement.on('blur', () => this.onPointerBlur(pointerElement));
        pointerElement.on('keydown', (event) => this.onKeyboardEvent(event));
        pointerElement.on('keyup', () => this.onKeyUp());
        pointerElement.active = true;
        this.currentTrackingPointer = pointerType;
        this.currentFocusPointer = pointerType;
        this.firstKeyDown = true;
    }
    /**
     * @return {?}
     */
    onKeyUp() {
        this.firstKeyDown = true;
        this.userChangeEnd.emit(this.getChangeContext());
    }
    /**
     * @param {?} pointer
     * @return {?}
     */
    onPointerBlur(pointer) {
        pointer.off('blur');
        pointer.off('keydown');
        pointer.off('keyup');
        pointer.active = false;
        if (ValueHelper.isNullOrUndefined(this.touchId)) {
            this.currentTrackingPointer = null;
            this.currentFocusPointer = null;
        }
    }
    /**
     * @param {?} currentValue
     * @return {?}
     */
    getKeyActions(currentValue) {
        /** @type {?} */
        const valueRange = this.viewOptions.ceil - this.viewOptions.floor;
        /** @type {?} */
        let increaseStep = currentValue + this.viewOptions.step;
        /** @type {?} */
        let decreaseStep = currentValue - this.viewOptions.step;
        /** @type {?} */
        let increasePage = currentValue + valueRange / 10;
        /** @type {?} */
        let decreasePage = currentValue - valueRange / 10;
        if (this.viewOptions.reversedControls) {
            increaseStep = currentValue - this.viewOptions.step;
            decreaseStep = currentValue + this.viewOptions.step;
            increasePage = currentValue - valueRange / 10;
            decreasePage = currentValue + valueRange / 10;
        }
        /** @type {?} */
        const actions = {
            UP: increaseStep,
            DOWN: decreaseStep,
            LEFT: decreaseStep,
            RIGHT: increaseStep,
            PAGEUP: increasePage,
            PAGEDOWN: decreasePage,
            HOME: this.viewOptions.reversedControls ? this.viewOptions.ceil : this.viewOptions.floor,
            END: this.viewOptions.reversedControls ? this.viewOptions.floor : this.viewOptions.ceil,
        };
        // right to left means swapping right and left arrows
        if (this.viewOptions.rightToLeft) {
            actions["LEFT"] = increaseStep;
            actions["RIGHT"] = decreaseStep;
            // right to left and vertical means we also swap up and down
            if (this.viewOptions.vertical) {
                actions["UP"] = decreaseStep;
                actions["DOWN"] = increaseStep;
            }
        }
        return actions;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyboardEvent(event) {
        /** @type {?} */
        const currentValue = this.getCurrentTrackingValue();
        /** @type {?} */
        const keyCode = !ValueHelper.isNullOrUndefined(event.keyCode)
            ? event.keyCode
            : event.which;
        /** @type {?} */
        const keys = {
            38: 'UP',
            40: 'DOWN',
            37: 'LEFT',
            39: 'RIGHT',
            33: 'PAGEUP',
            34: 'PAGEDOWN',
            36: 'HOME',
            35: 'END',
        };
        /** @type {?} */
        const actions = this.getKeyActions(currentValue);
        /** @type {?} */
        const key = keys[keyCode];
        /** @type {?} */
        const action = actions[key];
        if (ValueHelper.isNullOrUndefined(action) || ValueHelper.isNullOrUndefined(this.currentTrackingPointer)) {
            return;
        }
        event.preventDefault();
        if (this.firstKeyDown) {
            this.firstKeyDown = false;
            this.userChangeStart.emit(this.getChangeContext());
        }
        /** @type {?} */
        const actionValue = MathHelper.clampToRange(action, this.viewOptions.floor, this.viewOptions.ceil);
        /** @type {?} */
        const newValue = this.roundStep(actionValue);
        if (!this.viewOptions.draggableRangeOnly) {
            this.positionTrackingHandle(newValue);
        }
        else {
            /** @type {?} */
            const difference = this.viewHighValue - this.viewLowValue;
            /** @type {?} */
            let newMinValue;
            /** @type {?} */
            let newMaxValue;
            if (this.currentTrackingPointer === PointerType.Min) {
                newMinValue = newValue;
                newMaxValue = newValue + difference;
                if (newMaxValue > this.viewOptions.ceil) {
                    newMaxValue = this.viewOptions.ceil;
                    newMinValue = newMaxValue - difference;
                }
            }
            else if (this.currentTrackingPointer === PointerType.Max) {
                newMaxValue = newValue;
                newMinValue = newValue - difference;
                if (newMinValue < this.viewOptions.floor) {
                    newMinValue = this.viewOptions.floor;
                    newMaxValue = newMinValue + difference;
                }
            }
            this.positionTrackingBar(newMinValue, newMaxValue);
        }
    }
    /**
     * @param {?} pointerType
     * @param {?} event
     * @param {?} bindMove
     * @param {?} bindEnd
     * @return {?}
     */
    onDragStart(pointerType, event, bindMove, bindEnd) {
        /** @type {?} */
        const position = this.getEventPosition(event);
        this.dragging = new Dragging();
        this.dragging.active = true;
        this.dragging.value = this.positionToValue(position);
        this.dragging.difference = this.viewHighValue - this.viewLowValue;
        this.dragging.lowLimit = this.viewOptions.rightToLeft
            ? this.minHandleElement.position - position
            : position - this.minHandleElement.position;
        this.dragging.highLimit = this.viewOptions.rightToLeft
            ? position - this.maxHandleElement.position
            : this.maxHandleElement.position - position;
        this.onStart(pointerType, event, bindMove, bindEnd);
    }
    /**
     * Get min value depending on whether the newPos is outOfBounds above or below the bar and rightToLeft
     * @param {?} newPos
     * @param {?} outOfBounds
     * @param {?} isAbove
     * @return {?}
     */
    getMinValue(newPos, outOfBounds, isAbove) {
        /** @type {?} */
        const isRTL = this.viewOptions.rightToLeft;
        /** @type {?} */
        let value = null;
        if (outOfBounds) {
            if (isAbove) {
                value = isRTL
                    ? this.viewOptions.floor
                    : this.viewOptions.ceil - this.dragging.difference;
            }
            else {
                value = isRTL
                    ? this.viewOptions.ceil - this.dragging.difference
                    : this.viewOptions.floor;
            }
        }
        else {
            value = isRTL
                ? this.positionToValue(newPos + this.dragging.lowLimit)
                : this.positionToValue(newPos - this.dragging.lowLimit);
        }
        return this.roundStep(value);
    }
    /**
     * Get max value depending on whether the newPos is outOfBounds above or below the bar and rightToLeft
     * @param {?} newPos
     * @param {?} outOfBounds
     * @param {?} isAbove
     * @return {?}
     */
    getMaxValue(newPos, outOfBounds, isAbove) {
        /** @type {?} */
        const isRTL = this.viewOptions.rightToLeft;
        /** @type {?} */
        let value = null;
        if (outOfBounds) {
            if (isAbove) {
                value = isRTL
                    ? this.viewOptions.floor + this.dragging.difference
                    : this.viewOptions.ceil;
            }
            else {
                value = isRTL
                    ? this.viewOptions.ceil
                    : this.viewOptions.floor + this.dragging.difference;
            }
        }
        else {
            if (isRTL) {
                value =
                    this.positionToValue(newPos + this.dragging.lowLimit) +
                        this.dragging.difference;
            }
            else {
                value =
                    this.positionToValue(newPos - this.dragging.lowLimit) +
                        this.dragging.difference;
            }
        }
        return this.roundStep(value);
    }
    /**
     * @param {?=} event
     * @return {?}
     */
    onDragMove(event) {
        /** @type {?} */
        const newPos = this.getEventPosition(event);
        if (this.viewOptions.animate && !this.viewOptions.animateOnMove) {
            if (this.moving) {
                this.sliderElementAnimateClass = false;
            }
        }
        this.moving = true;
        /** @type {?} */
        let ceilLimit;
        /** @type {?} */
        let floorLimit;
        /** @type {?} */
        let floorHandleElement;
        /** @type {?} */
        let ceilHandleElement;
        if (this.viewOptions.rightToLeft) {
            ceilLimit = this.dragging.lowLimit;
            floorLimit = this.dragging.highLimit;
            floorHandleElement = this.maxHandleElement;
            ceilHandleElement = this.minHandleElement;
        }
        else {
            ceilLimit = this.dragging.highLimit;
            floorLimit = this.dragging.lowLimit;
            floorHandleElement = this.minHandleElement;
            ceilHandleElement = this.maxHandleElement;
        }
        /** @type {?} */
        const isUnderFloorLimit = (newPos <= floorLimit);
        /** @type {?} */
        const isOverCeilLimit = (newPos >= this.maxHandlePosition - ceilLimit);
        /** @type {?} */
        let newMinValue;
        /** @type {?} */
        let newMaxValue;
        if (isUnderFloorLimit) {
            if (floorHandleElement.position === 0) {
                return;
            }
            newMinValue = this.getMinValue(newPos, true, false);
            newMaxValue = this.getMaxValue(newPos, true, false);
        }
        else if (isOverCeilLimit) {
            if (ceilHandleElement.position === this.maxHandlePosition) {
                return;
            }
            newMaxValue = this.getMaxValue(newPos, true, true);
            newMinValue = this.getMinValue(newPos, true, true);
        }
        else {
            newMinValue = this.getMinValue(newPos, false, false);
            newMaxValue = this.getMaxValue(newPos, false, false);
        }
        this.positionTrackingBar(newMinValue, newMaxValue);
    }
    /**
     * @param {?} newMinValue
     * @param {?} newMaxValue
     * @return {?}
     */
    positionTrackingBar(newMinValue, newMaxValue) {
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.minLimit) &&
            newMinValue < this.viewOptions.minLimit) {
            newMinValue = this.viewOptions.minLimit;
            newMaxValue = MathHelper.roundToPrecisionLimit(newMinValue + this.dragging.difference, this.viewOptions.precisionLimit);
        }
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.maxLimit) &&
            newMaxValue > this.viewOptions.maxLimit) {
            newMaxValue = this.viewOptions.maxLimit;
            newMinValue = MathHelper.roundToPrecisionLimit(newMaxValue - this.dragging.difference, this.viewOptions.precisionLimit);
        }
        this.viewLowValue = newMinValue;
        this.viewHighValue = newMaxValue;
        this.applyViewChange();
        this.updateHandles(PointerType.Min, this.valueToPosition(newMinValue));
        this.updateHandles(PointerType.Max, this.valueToPosition(newMaxValue));
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    positionTrackingHandle(newValue) {
        newValue = this.applyMinMaxLimit(newValue);
        if (this.range) {
            if (this.viewOptions.pushRange) {
                newValue = this.applyPushRange(newValue);
            }
            else {
                if (this.viewOptions.noSwitching) {
                    if (this.currentTrackingPointer === PointerType.Min &&
                        newValue > this.viewHighValue) {
                        newValue = this.applyMinMaxRange(this.viewHighValue);
                    }
                    else if (this.currentTrackingPointer === PointerType.Max &&
                        newValue < this.viewLowValue) {
                        newValue = this.applyMinMaxRange(this.viewLowValue);
                    }
                }
                newValue = this.applyMinMaxRange(newValue);
                /* This is to check if we need to switch the min and max handles */
                if (this.currentTrackingPointer === PointerType.Min && newValue > this.viewHighValue) {
                    this.viewLowValue = this.viewHighValue;
                    this.applyViewChange();
                    this.updateHandles(PointerType.Min, this.maxHandleElement.position);
                    this.updateAriaAttributes();
                    this.currentTrackingPointer = PointerType.Max;
                    this.minHandleElement.active = false;
                    this.maxHandleElement.active = true;
                    if (this.viewOptions.keyboardSupport) {
                        this.maxHandleElement.focus();
                    }
                }
                else if (this.currentTrackingPointer === PointerType.Max &&
                    newValue < this.viewLowValue) {
                    this.viewHighValue = this.viewLowValue;
                    this.applyViewChange();
                    this.updateHandles(PointerType.Max, this.minHandleElement.position);
                    this.updateAriaAttributes();
                    this.currentTrackingPointer = PointerType.Min;
                    this.maxHandleElement.active = false;
                    this.minHandleElement.active = true;
                    if (this.viewOptions.keyboardSupport) {
                        this.minHandleElement.focus();
                    }
                }
            }
        }
        if (this.getCurrentTrackingValue() !== newValue) {
            if (this.currentTrackingPointer === PointerType.Min) {
                this.viewLowValue = newValue;
                this.applyViewChange();
            }
            else if (this.currentTrackingPointer === PointerType.Max) {
                this.viewHighValue = newValue;
                this.applyViewChange();
            }
            this.updateHandles(this.currentTrackingPointer, this.valueToPosition(newValue));
            this.updateAriaAttributes();
        }
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    applyMinMaxLimit(newValue) {
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.minLimit) && newValue < this.viewOptions.minLimit) {
            return this.viewOptions.minLimit;
        }
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.maxLimit) && newValue > this.viewOptions.maxLimit) {
            return this.viewOptions.maxLimit;
        }
        return newValue;
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    applyMinMaxRange(newValue) {
        /** @type {?} */
        const oppositeValue = (this.currentTrackingPointer === PointerType.Min)
            ? this.viewHighValue
            : this.viewLowValue;
        /** @type {?} */
        const difference = Math.abs(newValue - oppositeValue);
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.minRange)) {
            if (difference < this.viewOptions.minRange) {
                if (this.currentTrackingPointer === PointerType.Min) {
                    return MathHelper.roundToPrecisionLimit(this.viewHighValue - this.viewOptions.minRange, this.viewOptions.precisionLimit);
                }
                else if (this.currentTrackingPointer === PointerType.Max) {
                    return MathHelper.roundToPrecisionLimit(this.viewLowValue + this.viewOptions.minRange, this.viewOptions.precisionLimit);
                }
            }
        }
        if (!ValueHelper.isNullOrUndefined(this.viewOptions.maxRange)) {
            if (difference > this.viewOptions.maxRange) {
                if (this.currentTrackingPointer === PointerType.Min) {
                    return MathHelper.roundToPrecisionLimit(this.viewHighValue - this.viewOptions.maxRange, this.viewOptions.precisionLimit);
                }
                else if (this.currentTrackingPointer === PointerType.Max) {
                    return MathHelper.roundToPrecisionLimit(this.viewLowValue + this.viewOptions.maxRange, this.viewOptions.precisionLimit);
                }
            }
        }
        return newValue;
    }
    /**
     * @param {?} newValue
     * @return {?}
     */
    applyPushRange(newValue) {
        /** @type {?} */
        const difference = (this.currentTrackingPointer === PointerType.Min)
            ? this.viewHighValue - newValue
            : newValue - this.viewLowValue;
        /** @type {?} */
        const minRange = (!ValueHelper.isNullOrUndefined(this.viewOptions.minRange))
            ? this.viewOptions.minRange
            : this.viewOptions.step;
        /** @type {?} */
        const maxRange = this.viewOptions.maxRange;
        // if smaller than minRange
        if (difference < minRange) {
            if (this.currentTrackingPointer === PointerType.Min) {
                this.viewHighValue = MathHelper.roundToPrecisionLimit(Math.min(newValue + minRange, this.viewOptions.ceil), this.viewOptions.precisionLimit);
                newValue = MathHelper.roundToPrecisionLimit(this.viewHighValue - minRange, this.viewOptions.precisionLimit);
                this.applyViewChange();
                this.updateHandles(PointerType.Max, this.valueToPosition(this.viewHighValue));
            }
            else if (this.currentTrackingPointer === PointerType.Max) {
                this.viewLowValue = MathHelper.roundToPrecisionLimit(Math.max(newValue - minRange, this.viewOptions.floor), this.viewOptions.precisionLimit);
                newValue = MathHelper.roundToPrecisionLimit(this.viewLowValue + minRange, this.viewOptions.precisionLimit);
                this.applyViewChange();
                this.updateHandles(PointerType.Min, this.valueToPosition(this.viewLowValue));
            }
            this.updateAriaAttributes();
        }
        else if (!ValueHelper.isNullOrUndefined(maxRange) && difference > maxRange) {
            // if greater than maxRange
            if (this.currentTrackingPointer === PointerType.Min) {
                this.viewHighValue = MathHelper.roundToPrecisionLimit(newValue + maxRange, this.viewOptions.precisionLimit);
                this.applyViewChange();
                this.updateHandles(PointerType.Max, this.valueToPosition(this.viewHighValue));
            }
            else if (this.currentTrackingPointer === PointerType.Max) {
                this.viewLowValue = MathHelper.roundToPrecisionLimit(newValue - maxRange, this.viewOptions.precisionLimit);
                this.applyViewChange();
                this.updateHandles(PointerType.Min, this.valueToPosition(this.viewLowValue));
            }
            this.updateAriaAttributes();
        }
        return newValue;
    }
    /**
     * @return {?}
     */
    getChangeContext() {
        /** @type {?} */
        const changeContext = new ChangeContext();
        changeContext.pointerType = this.currentTrackingPointer;
        changeContext.value = +this.value;
        if (this.range) {
            changeContext.highValue = +this.highValue;
        }
        return changeContext;
    }
}
SliderComponent.ɵfac = function SliderComponent_Factory(t) { return new (t || SliderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"])); };
SliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SliderComponent, selectors: [["ngx-slider"]], contentQueries: function SliderComponent_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵcontentQuery"](dirIndex, _c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.tooltipTemplate = _t.first);
    } }, viewQuery: function SliderComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c1, 1, SliderElementDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c2, 1, SliderElementDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c3, 1, SliderElementDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c4, 1, SliderElementDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c5, 1, SliderHandleDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c6, 1, SliderHandleDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c7, 1, SliderLabelDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c8, 1, SliderLabelDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c9, 1, SliderLabelDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c10, 1, SliderLabelDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c11, 1, SliderLabelDirective);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](_c12, 1, SliderElementDirective);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.leftOuterSelectionBarElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.rightOuterSelectionBarElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.fullBarElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.selectionBarElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.minHandleElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.maxHandleElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.floorLabelElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.ceilLabelElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.minHandleLabelElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.maxHandleLabelElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.combinedLabelElement = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.ticksElement = _t.first);
    } }, hostAttrs: [1, "ngx-slider"], hostVars: 7, hostBindings: function SliderComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("resize", function SliderComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveWindow"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵattribute"]("disabled", ctx.sliderElementDisabledAttr);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("vertical", ctx.sliderElementVerticalClass)("animate", ctx.sliderElementAnimateClass)("with-legend", ctx.sliderElementWithLegendClass);
    } }, inputs: { value: "value", highValue: "highValue", options: "options", manualRefresh: "manualRefresh", triggerFocus: "triggerFocus" }, outputs: { valueChange: "valueChange", highValueChange: "highValueChange", userChangeStart: "userChangeStart", userChange: "userChange", userChangeEnd: "userChangeEnd" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵProvidersFeature"]([NGX_SLIDER_CONTROL_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 29, vars: 13, consts: [["ngxSliderElement", "", 1, "ngx-slider-span", "ngx-slider-bar-wrapper", "ngx-slider-left-out-selection"], ["leftOuterSelectionBar", ""], [1, "ngx-slider-span", "ngx-slider-bar"], ["ngxSliderElement", "", 1, "ngx-slider-span", "ngx-slider-bar-wrapper", "ngx-slider-right-out-selection"], ["rightOuterSelectionBar", ""], ["ngxSliderElement", "", 1, "ngx-slider-span", "ngx-slider-bar-wrapper", "ngx-slider-full-bar"], ["fullBar", ""], ["ngxSliderElement", "", 1, "ngx-slider-span", "ngx-slider-bar-wrapper", "ngx-slider-selection-bar"], ["selectionBar", ""], [1, "ngx-slider-span", "ngx-slider-bar", "ngx-slider-selection", 3, "ngStyle"], ["ngxSliderHandle", "", 1, "ngx-slider-span", "ngx-slider-pointer", "ngx-slider-pointer-min", 3, "ngStyle"], ["minHandle", ""], ["ngxSliderHandle", "", 1, "ngx-slider-span", "ngx-slider-pointer", "ngx-slider-pointer-max", 3, "ngStyle"], ["maxHandle", ""], ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-limit", "ngx-slider-floor"], ["floorLabel", ""], ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-limit", "ngx-slider-ceil"], ["ceilLabel", ""], ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-model-value"], ["minHandleLabel", ""], ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-model-high"], ["maxHandleLabel", ""], ["ngxSliderLabel", "", 1, "ngx-slider-span", "ngx-slider-bubble", "ngx-slider-combined"], ["combinedLabel", ""], ["ngxSliderElement", "", 1, "ngx-slider-ticks", 3, "hidden"], ["ticksElement", ""], ["class", "ngx-slider-tick", 3, "ngClass", "ngStyle", 4, "ngFor", "ngForOf"], [1, "ngx-slider-tick", 3, "ngClass", "ngStyle"], [3, "template", "tooltip", "placement"], ["class", "ngx-slider-span ngx-slider-tick-value", 3, "template", "tooltip", "placement", "content", 4, "ngIf"], ["class", "ngx-slider-span ngx-slider-tick-legend", 3, "innerHTML", 4, "ngIf"], [1, "ngx-slider-span", "ngx-slider-tick-value", 3, "template", "tooltip", "placement", "content"], [1, "ngx-slider-span", "ngx-slider-tick-legend", 3, "innerHTML"]], template: function SliderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "span", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "span", 7, 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "span", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "span", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "span", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](18, "span", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](20, "span", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "span", 20, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](24, "span", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](26, "span", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, SliderComponent_span_28_Template, 4, 9, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ngx-slider-transparent", ctx.fullBarTransparentClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ngx-slider-draggable", ctx.selectionBarDraggableClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx.barStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx.minPointerStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("display", ctx.range ? "inherit" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngStyle", ctx.maxPointerStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("ngx-slider-ticks-values-under", ctx.ticksUnderValuesClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("hidden", !ctx.showTicks);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.ticks);
    } }, directives: function () { return [SliderElementDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgStyle"], SliderHandleDirective, SliderLabelDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], TooltipWrapperComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]]; }, styles: [".ngx-slider{display:inline-block;position:relative;height:4px;width:100%;margin:35px 0 15px;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;touch-action:pan-y}  .ngx-slider.with-legend{margin-bottom:40px}  .ngx-slider[disabled]{cursor:not-allowed}  .ngx-slider[disabled] .ngx-slider-pointer{cursor:not-allowed;background-color:#d8e0f3}  .ngx-slider[disabled] .ngx-slider-draggable{cursor:not-allowed}  .ngx-slider[disabled] .ngx-slider-selection{background:#8b91a2}  .ngx-slider[disabled] .ngx-slider-tick{cursor:not-allowed}  .ngx-slider[disabled] .ngx-slider-tick.ngx-slider-selected{background:#8b91a2}  .ngx-slider .ngx-slider-span{white-space:nowrap;position:absolute;display:inline-block}  .ngx-slider .ngx-slider-base{width:100%;height:100%;padding:0}  .ngx-slider .ngx-slider-bar-wrapper{left:0;box-sizing:border-box;margin-top:-16px;padding-top:16px;width:100%;height:32px;z-index:1}  .ngx-slider .ngx-slider-draggable{cursor:move}  .ngx-slider .ngx-slider-bar{left:0;width:100%;height:4px;z-index:1;background:#d8e0f3;border-radius:2px}  .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-transparent .ngx-slider-bar{background:0 0}  .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-left-out-selection .ngx-slider-bar{background:#df002d}  .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-right-out-selection .ngx-slider-bar{background:#03a688}  .ngx-slider .ngx-slider-selection{z-index:2;background:#0db9f0;border-radius:2px}  .ngx-slider .ngx-slider-pointer{cursor:pointer;width:32px;height:32px;top:-14px;background-color:#0db9f0;z-index:3;border-radius:16px}  .ngx-slider .ngx-slider-pointer:after{content:'';width:8px;height:8px;position:absolute;top:12px;left:12px;border-radius:4px;background:#fff}  .ngx-slider .ngx-slider-pointer:hover:after{background-color:#fff}  .ngx-slider .ngx-slider-pointer.ngx-slider-active{z-index:4}  .ngx-slider .ngx-slider-pointer.ngx-slider-active:after{background-color:#451aff}  .ngx-slider .ngx-slider-bubble{cursor:default;bottom:16px;padding:1px 3px;color:#55637d;font-size:16px}  .ngx-slider .ngx-slider-bubble.ngx-slider-limit{color:#55637d}  .ngx-slider .ngx-slider-ticks{box-sizing:border-box;width:100%;height:0;position:absolute;left:0;top:-3px;margin:0;z-index:1;list-style:none}  .ngx-slider .ngx-slider-ticks-values-under .ngx-slider-tick-value{top:auto;bottom:-36px}  .ngx-slider .ngx-slider-tick{text-align:center;cursor:pointer;width:10px;height:10px;background:#d8e0f3;border-radius:50%;position:absolute;top:0;left:0;margin-left:11px}  .ngx-slider .ngx-slider-tick.ngx-slider-selected{background:#0db9f0}  .ngx-slider .ngx-slider-tick-value{position:absolute;top:-34px;-webkit-transform:translate(-50%,0);transform:translate(-50%,0)}  .ngx-slider .ngx-slider-tick-legend{position:absolute;top:24px;-webkit-transform:translate(-50%,0);transform:translate(-50%,0);max-width:50px;white-space:normal}  .ngx-slider.vertical{position:relative;width:4px;height:100%;margin:0 20px;padding:0;vertical-align:baseline;touch-action:pan-x}  .ngx-slider.vertical .ngx-slider-base{width:100%;height:100%;padding:0}  .ngx-slider.vertical .ngx-slider-bar-wrapper{top:auto;left:0;margin:0 0 0 -16px;padding:0 0 0 16px;height:100%;width:32px}  .ngx-slider.vertical .ngx-slider-bar{bottom:0;left:auto;width:4px;height:100%}  .ngx-slider.vertical .ngx-slider-pointer{left:-14px!important;top:auto;bottom:0}  .ngx-slider.vertical .ngx-slider-bubble{left:16px!important;bottom:0}  .ngx-slider.vertical .ngx-slider-ticks{height:100%;width:0;left:-3px;top:0;z-index:1}  .ngx-slider.vertical .ngx-slider-tick{vertical-align:middle;margin-left:auto;margin-top:11px}  .ngx-slider.vertical .ngx-slider-tick-value{left:24px;top:auto;-webkit-transform:translate(0,-28%);transform:translate(0,-28%)}  .ngx-slider.vertical .ngx-slider-tick-legend{top:auto;right:24px;-webkit-transform:translate(0,-28%);transform:translate(0,-28%);max-width:none;white-space:nowrap}  .ngx-slider.vertical .ngx-slider-ticks-values-under .ngx-slider-tick-value{bottom:auto;left:auto;right:24px}  .ngx-slider *{transition:none}  .ngx-slider.animate .ngx-slider-bar-wrapper{transition:.3s linear}  .ngx-slider.animate .ngx-slider-selection{transition:background-color .3s linear}  .ngx-slider.animate .ngx-slider-pointer{transition:.3s linear}  .ngx-slider.animate .ngx-slider-bubble{transition:.3s linear}  .ngx-slider.animate .ngx-slider-bubble.ngx-slider-limit{transition:opacity .3s linear}  .ngx-slider.animate .ngx-slider-bubble.ngx-slider-combined{transition:opacity .3s linear}  .ngx-slider.animate .ngx-slider-tick{transition:background-color .3s linear}"] });
/** @nocollapse */
SliderComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }
];
SliderComponent.propDecorators = {
    value: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    valueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    highValue: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    highValueChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    options: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    userChangeStart: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    userChange: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    userChangeEnd: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"] }],
    manualRefresh: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    triggerFocus: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    leftOuterSelectionBarElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['leftOuterSelectionBar', { read: SliderElementDirective },] }],
    rightOuterSelectionBarElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['rightOuterSelectionBar', { read: SliderElementDirective },] }],
    fullBarElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['fullBar', { read: SliderElementDirective },] }],
    selectionBarElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['selectionBar', { read: SliderElementDirective },] }],
    minHandleElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['minHandle', { read: SliderHandleDirective },] }],
    maxHandleElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['maxHandle', { read: SliderHandleDirective },] }],
    floorLabelElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['floorLabel', { read: SliderLabelDirective },] }],
    ceilLabelElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['ceilLabel', { read: SliderLabelDirective },] }],
    minHandleLabelElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['minHandleLabel', { read: SliderLabelDirective },] }],
    maxHandleLabelElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['maxHandleLabel', { read: SliderLabelDirective },] }],
    combinedLabelElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['combinedLabel', { read: SliderLabelDirective },] }],
    ticksElement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['ticksElement', { read: SliderElementDirective },] }],
    tooltipTemplate: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"], args: ['tooltipTemplate',] }],
    sliderElementVerticalClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['class.vertical',] }],
    sliderElementAnimateClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['class.animate',] }],
    sliderElementWithLegendClass: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['class.with-legend',] }],
    sliderElementDisabledAttr: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"], args: ['attr.disabled',] }],
    onResize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"], args: ['window:resize', ['$event'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](SliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'ngx-slider',
                template: `<!-- // 0 Left selection bar outside two handles -->
<span ngxSliderElement #leftOuterSelectionBar class="ngx-slider-span ngx-slider-bar-wrapper ngx-slider-left-out-selection">
  <span class="ngx-slider-span ngx-slider-bar"></span>
</span>
<!-- // 1 Right selection bar outside two handles -->
<span ngxSliderElement #rightOuterSelectionBar class="ngx-slider-span ngx-slider-bar-wrapper ngx-slider-right-out-selection">
  <span class="ngx-slider-span ngx-slider-bar"></span>
</span>
<!-- // 2 The whole slider bar -->
<span ngxSliderElement #fullBar [class.ngx-slider-transparent]="fullBarTransparentClass" class="ngx-slider-span ngx-slider-bar-wrapper ngx-slider-full-bar">
  <span class="ngx-slider-span ngx-slider-bar"></span>
</span>
<!-- // 3 Selection bar between two handles -->
<span ngxSliderElement #selectionBar [class.ngx-slider-draggable]="selectionBarDraggableClass" class="ngx-slider-span ngx-slider-bar-wrapper ngx-slider-selection-bar">
  <span class="ngx-slider-span ngx-slider-bar ngx-slider-selection" [ngStyle]="barStyle"></span>
</span>
<!-- // 4 Low slider handle -->
<span ngxSliderHandle #minHandle class="ngx-slider-span ngx-slider-pointer ngx-slider-pointer-min" [ngStyle]=minPointerStyle></span>
<!-- // 5 High slider handle -->
<span ngxSliderHandle #maxHandle [style.display]="range ? 'inherit' : 'none'" class="ngx-slider-span ngx-slider-pointer ngx-slider-pointer-max" [ngStyle]=maxPointerStyle></span>
<!-- // 6 Floor label -->
<span ngxSliderLabel #floorLabel class="ngx-slider-span ngx-slider-bubble ngx-slider-limit ngx-slider-floor"></span>
<!-- // 7 Ceiling label -->
<span ngxSliderLabel #ceilLabel class="ngx-slider-span ngx-slider-bubble ngx-slider-limit ngx-slider-ceil"></span>
<!-- // 8 Label above the low slider handle -->
<span ngxSliderLabel #minHandleLabel class="ngx-slider-span ngx-slider-bubble ngx-slider-model-value"></span>
<!-- // 9 Label above the high slider handle -->
<span ngxSliderLabel #maxHandleLabel class="ngx-slider-span ngx-slider-bubble ngx-slider-model-high"></span>
<!-- // 10 Combined range label when the slider handles are close ex. 15 - 17 -->
<span ngxSliderLabel #combinedLabel class="ngx-slider-span ngx-slider-bubble ngx-slider-combined"></span>
<!-- // 11 The ticks -->
<span ngxSliderElement #ticksElement [hidden]="!showTicks" [class.ngx-slider-ticks-values-under]="ticksUnderValuesClass" class="ngx-slider-ticks">
  <span *ngFor="let t of ticks" class="ngx-slider-tick" [ngClass]="{'ngx-slider-selected': t.selected}" [ngStyle]="t.style">
    <ngx-slider-tooltip-wrapper [template]="tooltipTemplate" [tooltip]="t.tooltip" [placement]="t.tooltipPlacement"></ngx-slider-tooltip-wrapper>
    <ngx-slider-tooltip-wrapper *ngIf="t.value != null" class="ngx-slider-span ngx-slider-tick-value"
        [template]="tooltipTemplate" [tooltip]="t.valueTooltip" [placement]="t.valueTooltipPlacement" [content]="t.value"></ngx-slider-tooltip-wrapper>
    <span *ngIf="t.legend != null" class="ngx-slider-span ngx-slider-tick-legend" [innerHTML]="t.legend"></span>
  </span>
</span>`,
                styles: [`::ng-deep .ngx-slider{display:inline-block;position:relative;height:4px;width:100%;margin:35px 0 15px;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;touch-action:pan-y}::ng-deep .ngx-slider.with-legend{margin-bottom:40px}::ng-deep .ngx-slider[disabled]{cursor:not-allowed}::ng-deep .ngx-slider[disabled] .ngx-slider-pointer{cursor:not-allowed;background-color:#d8e0f3}::ng-deep .ngx-slider[disabled] .ngx-slider-draggable{cursor:not-allowed}::ng-deep .ngx-slider[disabled] .ngx-slider-selection{background:#8b91a2}::ng-deep .ngx-slider[disabled] .ngx-slider-tick{cursor:not-allowed}::ng-deep .ngx-slider[disabled] .ngx-slider-tick.ngx-slider-selected{background:#8b91a2}::ng-deep .ngx-slider .ngx-slider-span{white-space:nowrap;position:absolute;display:inline-block}::ng-deep .ngx-slider .ngx-slider-base{width:100%;height:100%;padding:0}::ng-deep .ngx-slider .ngx-slider-bar-wrapper{left:0;box-sizing:border-box;margin-top:-16px;padding-top:16px;width:100%;height:32px;z-index:1}::ng-deep .ngx-slider .ngx-slider-draggable{cursor:move}::ng-deep .ngx-slider .ngx-slider-bar{left:0;width:100%;height:4px;z-index:1;background:#d8e0f3;border-radius:2px}::ng-deep .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-transparent .ngx-slider-bar{background:0 0}::ng-deep .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-left-out-selection .ngx-slider-bar{background:#df002d}::ng-deep .ngx-slider .ngx-slider-bar-wrapper.ngx-slider-right-out-selection .ngx-slider-bar{background:#03a688}::ng-deep .ngx-slider .ngx-slider-selection{z-index:2;background:#0db9f0;border-radius:2px}::ng-deep .ngx-slider .ngx-slider-pointer{cursor:pointer;width:32px;height:32px;top:-14px;background-color:#0db9f0;z-index:3;border-radius:16px}::ng-deep .ngx-slider .ngx-slider-pointer:after{content:'';width:8px;height:8px;position:absolute;top:12px;left:12px;border-radius:4px;background:#fff}::ng-deep .ngx-slider .ngx-slider-pointer:hover:after{background-color:#fff}::ng-deep .ngx-slider .ngx-slider-pointer.ngx-slider-active{z-index:4}::ng-deep .ngx-slider .ngx-slider-pointer.ngx-slider-active:after{background-color:#451aff}::ng-deep .ngx-slider .ngx-slider-bubble{cursor:default;bottom:16px;padding:1px 3px;color:#55637d;font-size:16px}::ng-deep .ngx-slider .ngx-slider-bubble.ngx-slider-limit{color:#55637d}::ng-deep .ngx-slider .ngx-slider-ticks{box-sizing:border-box;width:100%;height:0;position:absolute;left:0;top:-3px;margin:0;z-index:1;list-style:none}::ng-deep .ngx-slider .ngx-slider-ticks-values-under .ngx-slider-tick-value{top:auto;bottom:-36px}::ng-deep .ngx-slider .ngx-slider-tick{text-align:center;cursor:pointer;width:10px;height:10px;background:#d8e0f3;border-radius:50%;position:absolute;top:0;left:0;margin-left:11px}::ng-deep .ngx-slider .ngx-slider-tick.ngx-slider-selected{background:#0db9f0}::ng-deep .ngx-slider .ngx-slider-tick-value{position:absolute;top:-34px;-webkit-transform:translate(-50%,0);transform:translate(-50%,0)}::ng-deep .ngx-slider .ngx-slider-tick-legend{position:absolute;top:24px;-webkit-transform:translate(-50%,0);transform:translate(-50%,0);max-width:50px;white-space:normal}::ng-deep .ngx-slider.vertical{position:relative;width:4px;height:100%;margin:0 20px;padding:0;vertical-align:baseline;touch-action:pan-x}::ng-deep .ngx-slider.vertical .ngx-slider-base{width:100%;height:100%;padding:0}::ng-deep .ngx-slider.vertical .ngx-slider-bar-wrapper{top:auto;left:0;margin:0 0 0 -16px;padding:0 0 0 16px;height:100%;width:32px}::ng-deep .ngx-slider.vertical .ngx-slider-bar{bottom:0;left:auto;width:4px;height:100%}::ng-deep .ngx-slider.vertical .ngx-slider-pointer{left:-14px!important;top:auto;bottom:0}::ng-deep .ngx-slider.vertical .ngx-slider-bubble{left:16px!important;bottom:0}::ng-deep .ngx-slider.vertical .ngx-slider-ticks{height:100%;width:0;left:-3px;top:0;z-index:1}::ng-deep .ngx-slider.vertical .ngx-slider-tick{vertical-align:middle;margin-left:auto;margin-top:11px}::ng-deep .ngx-slider.vertical .ngx-slider-tick-value{left:24px;top:auto;-webkit-transform:translate(0,-28%);transform:translate(0,-28%)}::ng-deep .ngx-slider.vertical .ngx-slider-tick-legend{top:auto;right:24px;-webkit-transform:translate(0,-28%);transform:translate(0,-28%);max-width:none;white-space:nowrap}::ng-deep .ngx-slider.vertical .ngx-slider-ticks-values-under .ngx-slider-tick-value{bottom:auto;left:auto;right:24px}::ng-deep .ngx-slider *{transition:none}::ng-deep .ngx-slider.animate .ngx-slider-bar-wrapper{transition:.3s linear}::ng-deep .ngx-slider.animate .ngx-slider-selection{transition:background-color .3s linear}::ng-deep .ngx-slider.animate .ngx-slider-pointer{transition:.3s linear}::ng-deep .ngx-slider.animate .ngx-slider-bubble{transition:.3s linear}::ng-deep .ngx-slider.animate .ngx-slider-bubble.ngx-slider-limit{transition:opacity .3s linear}::ng-deep .ngx-slider.animate .ngx-slider-bubble.ngx-slider-combined{transition:opacity .3s linear}::ng-deep .ngx-slider.animate .ngx-slider-tick{transition:background-color .3s linear}`],
                host: { class: 'ngx-slider' },
                providers: [NGX_SLIDER_CONTROL_VALUE_ACCESSOR]
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"] }]; }, { value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], highValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], highValueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], userChangeStart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], userChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], userChangeEnd: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }], sliderElementVerticalClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['class.vertical']
        }], sliderElementAnimateClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['class.animate']
        }], sliderElementWithLegendClass: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['class.with-legend']
        }], sliderElementDisabledAttr: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostBinding"],
            args: ['attr.disabled']
        }], manualRefresh: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], triggerFocus: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], 
    /**
     * @param {?} event
     * @return {?}
     */
    onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["HostListener"],
            args: ['window:resize', ['$event']]
        }], leftOuterSelectionBarElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['leftOuterSelectionBar', { read: SliderElementDirective }]
        }], rightOuterSelectionBarElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['rightOuterSelectionBar', { read: SliderElementDirective }]
        }], fullBarElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['fullBar', { read: SliderElementDirective }]
        }], selectionBarElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['selectionBar', { read: SliderElementDirective }]
        }], minHandleElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['minHandle', { read: SliderHandleDirective }]
        }], maxHandleElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['maxHandle', { read: SliderHandleDirective }]
        }], floorLabelElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['floorLabel', { read: SliderLabelDirective }]
        }], ceilLabelElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['ceilLabel', { read: SliderLabelDirective }]
        }], minHandleLabelElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['minHandleLabel', { read: SliderLabelDirective }]
        }], maxHandleLabelElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['maxHandleLabel', { read: SliderLabelDirective }]
        }], combinedLabelElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['combinedLabel', { read: SliderLabelDirective }]
        }], ticksElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
            args: ['ticksElement', { read: SliderElementDirective }]
        }], tooltipTemplate: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ContentChild"],
            args: ['tooltipTemplate']
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class TooltipWrapperComponent {
}
TooltipWrapperComponent.ɵfac = function TooltipWrapperComponent_Factory(t) { return new (t || TooltipWrapperComponent)(); };
TooltipWrapperComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TooltipWrapperComponent, selectors: [["ngx-slider-tooltip-wrapper"]], inputs: { template: "template", tooltip: "tooltip", placement: "placement", content: "content" }, decls: 2, vars: 2, consts: [[4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ngx-slider-inner-tooltip"]], template: function TooltipWrapperComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, TooltipWrapperComponent_ng_container_0_Template, 2, 6, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, TooltipWrapperComponent_ng_container_1_Template, 3, 3, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.template);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.template);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgTemplateOutlet"]], styles: [".ngx-slider-inner-tooltip[_ngcontent-%COMP%]{height:100%}"] });
TooltipWrapperComponent.propDecorators = {
    template: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    tooltip: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    placement: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }],
    content: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](TooltipWrapperComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
                selector: 'ngx-slider-tooltip-wrapper',
                template: `<ng-container *ngIf="template">
  <ng-template *ngTemplateOutlet="template; context: {tooltip: tooltip, placement: placement, content: content}"></ng-template>
</ng-container>

<ng-container *ngIf="!template">
  <div class="ngx-slider-inner-tooltip" [attr.title]="tooltip" [attr.data-tooltip-placement]="placement">
    {{content}}
  </div>
</ng-container>`,
                styles: [`.ngx-slider-inner-tooltip{height:100%}`]
            }]
    }], null, { template: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], tooltip: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], placement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }], content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * NgxSlider module
 *
 * The module exports the slider component
 */
class NgxSliderModule {
}
NgxSliderModule.ɵfac = function NgxSliderModule_Factory(t) { return new (t || NgxSliderModule)(); };
NgxSliderModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: NgxSliderModule });
NgxSliderModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](NgxSliderModule, { declarations: function () { return [SliderComponent, SliderElementDirective, SliderHandleDirective, SliderLabelDirective, TooltipWrapperComponent]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]]; }, exports: function () { return [SliderComponent]; } }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](NgxSliderModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]
                ],
                declarations: [
                    SliderComponent,
                    SliderElementDirective,
                    SliderHandleDirective,
                    SliderLabelDirective,
                    TooltipWrapperComponent
                ],
                exports: [
                    SliderComponent
                ]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhci1zbGlkZXItbmd4LXNsaWRlci5qcyIsInNvdXJjZXMiOlsiQGFuZ3VsYXItc2xpZGVyL25neC1zbGlkZXIvb3B0aW9ucy50cyIsIkBhbmd1bGFyLXNsaWRlci9uZ3gtc2xpZGVyL3BvaW50ZXItdHlwZS50cyIsIkBhbmd1bGFyLXNsaWRlci9uZ3gtc2xpZGVyL2NoYW5nZS1jb250ZXh0LnRzIiwiQGFuZ3VsYXItc2xpZGVyL25neC1zbGlkZXIvdmFsdWUtaGVscGVyLnRzIiwiQGFuZ3VsYXItc2xpZGVyL25neC1zbGlkZXIvY29tcGF0aWJpbGl0eS1oZWxwZXIudHMiLCJAYW5ndWxhci1zbGlkZXIvbmd4LXNsaWRlci9tYXRoLWhlbHBlci50cyIsIkBhbmd1bGFyLXNsaWRlci9uZ3gtc2xpZGVyL2V2ZW50LWxpc3RlbmVyLnRzIiwiQGFuZ3VsYXItc2xpZGVyL25neC1zbGlkZXIvZXZlbnQtbGlzdGVuZXItaGVscGVyLnRzIiwiQGFuZ3VsYXItc2xpZGVyL25neC1zbGlkZXIvc2xpZGVyLWVsZW1lbnQuZGlyZWN0aXZlLnRzIiwiQGFuZ3VsYXItc2xpZGVyL25neC1zbGlkZXIvc2xpZGVyLWhhbmRsZS5kaXJlY3RpdmUudHMiLCJAYW5ndWxhci1zbGlkZXIvbmd4LXNsaWRlci9zbGlkZXItbGFiZWwuZGlyZWN0aXZlLnRzIiwiQGFuZ3VsYXItc2xpZGVyL25neC1zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC50cyIsIkBhbmd1bGFyLXNsaWRlci9uZ3gtc2xpZGVyL3Rvb2x0aXAtd3JhcHBlci5jb21wb25lbnQudHMiLCJAYW5ndWxhci1zbGlkZXIvbmd4LXNsaWRlci9zbGlkZXIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFLRSxNQUFHO0FBQ0w7QUFDRSxJQUFBLE9BQUk7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QUEsQUFLQSxBQUFBLEFBTUEsQUFBQSxBQUlBLEFBQUEsQUFJQSxBQUFBLEFBSUEsQUFBQSxBQU9BLEFBQUEsQUFRQSxBQUFBLEFBU0EsQUFBQSxBQUdBLEFBQUEsQUFJQSxBQUFBLEFBSUEsQUFBQSxBQUdBLEFBQUEsQUFHQSxBQUFBLEFBSUEsQUFBQSxBQUlBLEFBQUEsQUFHQSxBQUFBLEFBR0EsQUFBQSxBQUdBLEFBQUEsQUFHQSxBQUFBLEFBR0EsQUFBQSxBQUlBLEFBQUEsQUFJQSxBQUFBLEFBSUEsQUFBQSxBQUlBLEFBQUEsQUFHQSxBQUFBLEFBR0EsQUFBQSxBQUlBLEFBQUEsQUFJQSxBQUFBLEFBS0EsQUFBQSxBQUlBLEFBQUEsQUFHQSxBQUFBLEFBS0EsQUFBQSxBQVFBLEFBQUEsQUFHQSxBQUFBLEFBU0EsQUFBQSxBQVVBLEFBQUEsQUFJQSxBQUFBLEFBS0EsQUFBQSxBQUtBLEFBQUEsQUFLQSxBQUFBLEFBR0EsQUFBQSxBQUdBLEFBQUEsQUFJQSxBQUFBLEFBVUEsQUFBQSxBQUdBLEFBQUEsQUFHQSxBQUFBLEFBS0EsQUFBQSxBQUtBLEFBQUEsQUFLQSxBQUFBLEFBSUEsQUFBQSxBQUdBLEFBQUEsQUFJQSxBQUFBLEFBR0EsQUFBQSxBQUlBLEFBQUEsQUFHQSxBQUFBLEFBR0EsQUFBQSxBQUdBLEFBQUEsQUFHQSxBQUFBLEFBQ0EsQUN0VEEsQUFBQSxBQUVBLEFBQUEsQUFGQSxBQUFBLEFBRUEsQUFBQSxBQ0hBLEFBSUEsQUNEQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQ3REQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQ25CQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFDYkEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUNOQSxBQVVBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUN0RkEsQUF1REEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUE5Q0EsQUFBQSxBQUtBLEFBQUEsQUFLQSxBQUFBLEFBS0EsQUFBQSxBQUtBLEFBQUEsQUFNQSxBQUFBLEFBR0EsQUFBQSxBQUdBLEFBQUEsQUFHQSxBQUFBLEFBR0EsQUFBQSxBQUdBLEFBQUEsQUFHQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQS9DQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBR0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBMkJBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUVBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBR0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBRUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBMUtBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFQQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFrQ0EsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFDakRBLEFBTUEsQUFBQSxBQUFBLEFBbUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFsQ0EsQUFBQSxBQUdBLEFBQUEsQUFHQSxBQUFBLEFBR0EsQUFBQSxBQUdBLEFBQUEsQUFHQSxBQUFBLEFBR0EsQUFBQSxBQUdBLEFBQUEsQUFHQSxBQUFBLEFBR0EsQUFBQSxBQVFBLEFBTkEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFwQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUxBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQU9BLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFDbENBLEFBT0EsQUFBQSxBQUFBLEFBTUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQU5BLEFBQUEsQUFPQSxBQU5BLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBTUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUE5QkEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQU5BLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQ0FBLEFBeURBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFFQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBRUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFLQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQVVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBZ0RBLEFBK0xBLEFBQUEsQUFDQSxBQUNBLEFBQ0EsQUFIQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBL0xBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUtBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBNEJBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFHQSxBQUFBLEFBRUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUVBLEFBQUEsQUFHQSxBQUFBLEFBRUEsQUFBQSxBQUVBLEFBQUEsQUFFQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUEwREEsQUFBQSxBQUVBLEFBQUEsQUFFQSxBQUFBLEFBRUEsQUFBQSxBQUdBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQVNBLEFBQUEsQUFFQSxBQUFBLEFBR0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBRUEsQUFBQSxBQUdBLEFBQUEsQUFHQSxBQUFBLEFBQ0EsQUFBQSxBQU9BLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBaktBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFnSEEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFnQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFLQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBSUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBR0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFNQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQ0EsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBSUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUlBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBSUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFHQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUtBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFNQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFJQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUtBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQU9BLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUlBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFJQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBSUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQ0EsQUFDQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBSUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBS0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUdBLEFBSEEsQUFDQSxBQUFBLEFBRUEsQUFIQSxBQUVBLEFBQUEsQUFDQSxBQUhBLEFBR0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUdBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFHQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBR0EsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQTN0RUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFzQ0EsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUE5SkEsQUFBQSxBQURBLEFBQUEsQUFNQSxBQUFBLEFBR0EsQUFBQSxBQXlKQSxBQUFBLEFBR0EsQUFBQSxBQUlBLEFBQUEsQUFHQSxBQUFBLEFBS0EsQUFBQSxBQUlBLEFBQUEsQUFJQSxBQUFBLEFBSUEsQUFBQSxBQUtBLEFBQUEsQUFVQSxBQUFBLEFBb0RBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFJQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUlBLEFBQUEsQUFBQSxBQUFBLEFBSUEsQUFBQSxBQUFBLEFBQUEsQUFFQSxBQUFBLEFBQUEsQUFBQSxBQUVBLEFBQUEsQUFBQSxBQUFBLEFBRUEsQUFBQSxBQUFBLEFBQUEsQUE2SkEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFBQSxBQ2plQSxBQUVBLEFBQUEsQUFBQSxBQUNBLEFBQUEsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUFBLEFBUUEsQUFDQSxBQUFBLEFBQUEsQUFBQSxBQUFBLEFBQUEsQUFDQSxBQUVBLEFBQUEsQUFHQSxBQUFBLEFBR0EsQUFBQSxBQUdBLEFBQUEsQUN6QkEsQUE0QkEsQUFmQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFDQSxBQUFBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQUEsQUFDQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQ0EsQUFBQSxBQUFBLEFBQ0EsQUFBQSxBQUNBLEFBQ0EiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb2ludGVyVHlwZSB9IGZyb20gJy4vcG9pbnRlci10eXBlJztcblxuLyoqIExhYmVsIHR5cGUgKi9cbmV4cG9ydCBlbnVtIExhYmVsVHlwZSB7XG4gIC8qKiBMYWJlbCBhYm92ZSBsb3cgcG9pbnRlciAqL1xuICBMb3csXG4gIC8qKiBMYWJlbCBhYm92ZSBoaWdoIHBvaW50ZXIgKi9cbiAgSGlnaCxcbiAgLyoqIExhYmVsIGZvciBtaW5pbXVtIHNsaWRlciB2YWx1ZSAqL1xuICBGbG9vcixcbiAgLyoqIExhYmVsIGZvciBtYXhpbXVtIHNsaWRlciB2YWx1ZSAqL1xuICBDZWlsLFxuICAvKiogTGFiZWwgYmVsb3cgbGVnZW5kIHRpY2sgKi9cbiAgVGlja1ZhbHVlXG59XG5cbi8qKiBGdW5jdGlvbiB0byB0cmFuc2xhdGUgbGFiZWwgdmFsdWUgaW50byB0ZXh0ICovXG5leHBvcnQgdHlwZSBUcmFuc2xhdGVGdW5jdGlvbiA9ICh2YWx1ZTogbnVtYmVyLCBsYWJlbDogTGFiZWxUeXBlKSA9PiBzdHJpbmc7XG4vKiogRnVuY3Rpb24gdG8gY29tYmluZCAqL1xuZXhwb3J0IHR5cGUgQ29tYmluZUxhYmVsc0Z1bmN0aW9uID0gKG1pbkxhYmVsOiBzdHJpbmcsIG1heExhYmVsOiBzdHJpbmcpID0+IHN0cmluZztcbi8qKiBGdW5jdGlvbiB0byBwcm92aWRlIGxlZ2VuZCAgKi9cbmV4cG9ydCB0eXBlIEdldExlZ2VuZEZ1bmN0aW9uID0gKHZhbHVlOiBudW1iZXIpID0+IHN0cmluZztcblxuLyoqIEZ1bmN0aW9uIGNvbnZlcnRpbmcgc2xpZGVyIHZhbHVlIHRvIHNsaWRlciBwb3NpdGlvbiAqL1xuZXhwb3J0IHR5cGUgVmFsdWVUb1Bvc2l0aW9uRnVuY3Rpb24gPSAodmFsOiBudW1iZXIsIG1pblZhbDogbnVtYmVyLCBtYXhWYWw6IG51bWJlcikgPT4gbnVtYmVyO1xuXG4vKiogRnVuY3Rpb24gY29udmVydGluZyBzbGlkZXIgcG9zaXRpb24gdG8gc2xpZGVyIHZhbHVlICovXG5leHBvcnQgdHlwZSBQb3NpdGlvblRvVmFsdWVGdW5jdGlvbiA9IChwZXJjZW50OiBudW1iZXIsIG1pblZhbDogbnVtYmVyLCBtYXhWYWw6IG51bWJlcikgPT4gbnVtYmVyO1xuXG4vKipcbiAqIEN1c3RvbSBzdGVwIGRlZmluaXRpb25cbiAqXG4gKiBUaGlzIGNhbiBiZSB1c2VkIHRvIHNwZWNpZnkgY3VzdG9tIHZhbHVlcyBhbmQgbGVnZW5kIHZhbHVlcyBmb3Igc2xpZGVyIHRpY2tzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tU3RlcERlZmluaXRpb24ge1xuICAvKiogVmFsdWUgKi9cbiAgdmFsdWU6IG51bWJlcjtcbiAgLyoqIExlZ2VuZCAobGFiZWwgZm9yIHRoZSB2YWx1ZSkgKi9cbiAgbGVnZW5kPzogc3RyaW5nO1xufVxuXG4vKiogU2xpZGVyIG9wdGlvbnMgKi9cbmV4cG9ydCBjbGFzcyBPcHRpb25zIHtcbiAgLyoqIE1pbmltdW0gdmFsdWUgZm9yIGEgc2xpZGVyLlxuICAgIE5vdCBhcHBsaWNhYmxlIHdoZW4gdXNpbmcgc3RlcHNBcnJheS4gKi9cbiAgZmxvb3I/OiBudW1iZXIgPSAwO1xuXG4gIC8qKiBNYXhpbXVtIHZhbHVlIGZvciBhIHNsaWRlci5cbiAgICBOb3QgYXBwbGljYWJsZSB3aGVuIHVzaW5nIHN0ZXBzQXJyYXkuICovXG4gIGNlaWw/OiBudW1iZXIgPSBudWxsO1xuXG4gIC8qKiBTdGVwIGJldHdlZW4gZWFjaCB2YWx1ZS5cbiAgICBOb3QgYXBwbGljYWJsZSB3aGVuIHVzaW5nIHN0ZXBzQXJyYXkuICovXG4gIHN0ZXA/OiBudW1iZXIgPSAxO1xuXG4gIC8qKiBUaGUgbWluaW11bSByYW5nZSBhdXRob3JpemVkIG9uIHRoZSBzbGlkZXIuXG4gICAgQXBwbGllcyB0byByYW5nZSBzbGlkZXIgb25seS5cbiAgICBXaGVuIHVzaW5nIHN0ZXBzQXJyYXksIGV4cHJlc3NlZCBhcyBpbmRleCBpbnRvIHN0ZXBzQXJyYXkuICovXG4gIG1pblJhbmdlPzogbnVtYmVyID0gbnVsbDtcblxuICAvKiogVGhlIG1heGltdW0gcmFuZ2UgYXV0aG9yaXplZCBvbiB0aGUgc2xpZGVyLlxuICAgIEFwcGxpZXMgdG8gcmFuZ2Ugc2xpZGVyIG9ubHkuXG4gICAgV2hlbiB1c2luZyBzdGVwc0FycmF5LCBleHByZXNzZWQgYXMgaW5kZXggaW50byBzdGVwc0FycmF5LiAqL1xuICBtYXhSYW5nZT86IG51bWJlciA9IG51bGw7XG5cbiAgLyoqIFNldCB0byB0cnVlIHRvIGhhdmUgYSBwdXNoIGJlaGF2aW9yLiBXaGVuIHRoZSBtaW4gaGFuZGxlIGdvZXMgYWJvdmUgdGhlIG1heCxcbiAgICB0aGUgbWF4IGlzIG1vdmVkIGFzIHdlbGwgKGFuZCB2aWNlLXZlcnNhKS4gVGhlIHJhbmdlIGJldHdlZW4gbWluIGFuZCBtYXggaXNcbiAgICBkZWZpbmVkIGJ5IHRoZSBzdGVwIG9wdGlvbiAoZGVmYXVsdHMgdG8gMSkgYW5kIGNhbiBhbHNvIGJlIG92ZXJyaWRlbiBieVxuICAgIHRoZSBtaW5SYW5nZSBvcHRpb24uIEFwcGxpZXMgdG8gcmFuZ2Ugc2xpZGVyIG9ubHkuICovXG4gIHB1c2hSYW5nZT86IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogVGhlIG1pbmltdW0gdmFsdWUgYXV0aG9yaXplZCBvbiB0aGUgc2xpZGVyLlxuICAgIFdoZW4gdXNpbmcgc3RlcHNBcnJheSwgZXhwcmVzc2VkIGFzIGluZGV4IGludG8gc3RlcHNBcnJheS4gKi9cbiAgbWluTGltaXQ/OiBudW1iZXIgPSBudWxsO1xuXG4gIC8qKiBUaGUgbWF4aW11bSB2YWx1ZSBhdXRob3JpemVkIG9uIHRoZSBzbGlkZXIuXG4gICAgV2hlbiB1c2luZyBzdGVwc0FycmF5LCBleHByZXNzZWQgYXMgaW5kZXggaW50byBzdGVwc0FycmF5LiAqL1xuICBtYXhMaW1pdD86IG51bWJlciA9IG51bGw7XG5cbiAgLyoqIEN1c3RvbSB0cmFuc2xhdGUgZnVuY3Rpb24uIFVzZSB0aGlzIGlmIHlvdSB3YW50IHRvIHRyYW5zbGF0ZSB2YWx1ZXMgZGlzcGxheWVkXG4gICAgICBvbiB0aGUgc2xpZGVyLiAqL1xuICB0cmFuc2xhdGU/OiBUcmFuc2xhdGVGdW5jdGlvbiA9IG51bGw7XG5cbiAgLyoqIEN1c3RvbSBmdW5jdGlvbiBmb3IgY29tYmluaW5nIG92ZXJsYXBwaW5nIGxhYmVscyBpbiByYW5nZSBzbGlkZXIuXG4gICAgICBJdCB0YWtlcyB0aGUgbWluIGFuZCBtYXggdmFsdWVzIChhbHJlYWR5IHRyYW5zbGF0ZWQgd2l0aCB0cmFuc2xhdGUgZnVjdGlvbilcbiAgICAgIGFuZCBzaG91bGQgcmV0dXJuIGhvdyB0aGVzZSB0d28gdmFsdWVzIHNob3VsZCBiZSBjb21iaW5lZC5cbiAgICAgIElmIG5vdCBwcm92aWRlZCwgdGhlIGRlZmF1bHQgZnVuY3Rpb24gd2lsbCBqb2luIHRoZSB0d28gdmFsdWVzIHdpdGhcbiAgICAgICcgLSAnIGFzIHNlcGFyYXRvci4gKi9cbiAgY29tYmluZUxhYmVscz86IENvbWJpbmVMYWJlbHNGdW5jdGlvbiA9IG51bGw7XG5cbiAgLyoqIFVzZSB0byBkaXNwbGF5IGxlZ2VuZCB1bmRlciB0aWNrcyAodGh1cywgaXQgbmVlZHMgdG8gYmUgdXNlZCBhbG9uZyB3aXRoXG4gICAgIHNob3dUaWNrcyBvciBzaG93VGlja3NWYWx1ZXMpLiBUaGUgZnVuY3Rpb24gd2lsbCBiZSBjYWxsZWQgd2l0aCBlYWNoIHRpY2tcbiAgICAgdmFsdWUgYW5kIHJldHVybmVkIGNvbnRlbnQgd2lsbCBiZSBkaXNwbGF5ZWQgdW5kZXIgdGhlIHRpY2sgYXMgYSBsZWdlbmQuXG4gICAgIElmIHRoZSByZXR1cm5lZCB2YWx1ZSBpcyBudWxsLCB0aGVuIG5vIGxlZ2VuZCBpcyBkaXNwbGF5ZWQgdW5kZXJcbiAgICAgdGhlIGNvcnJlc3BvbmRpbmcgdGljay5Zb3UgY2FuIGFsc28gZGlyZWN0bHkgcHJvdmlkZSB0aGUgbGVnZW5kIHZhbHVlc1xuICAgICBpbiB0aGUgc3RlcHNBcnJheSBvcHRpb24uICovXG4gIGdldExlZ2VuZD86IEdldExlZ2VuZEZ1bmN0aW9uID0gbnVsbDtcblxuICAvKiogSWYgeW91IHdhbnQgdG8gZGlzcGxheSBhIHNsaWRlciB3aXRoIG5vbiBsaW5lYXIvbnVtYmVyIHN0ZXBzLlxuICAgICBKdXN0IHBhc3MgYW4gYXJyYXkgd2l0aCBlYWNoIHNsaWRlciB2YWx1ZSBhbmQgdGhhdCdzIGl0OyB0aGUgZmxvb3IsIGNlaWwgYW5kIHN0ZXAgc2V0dGluZ3NcbiAgICAgb2YgdGhlIHNsaWRlciB3aWxsIGJlIGNvbXB1dGVkIGF1dG9tYXRpY2FsbHkuXG4gICAgIEJ5IGRlZmF1bHQsIHRoZSB2YWx1ZSBtb2RlbCBhbmQgdmFsdWVIaWdoIG1vZGVsIHZhbHVlcyB3aWxsIGJlIHRoZSB2YWx1ZSBvZiB0aGUgc2VsZWN0ZWQgaXRlbVxuICAgICBpbiB0aGUgc3RlcHNBcnJheS5cbiAgICAgVGhleSBjYW4gYWxzbyBiZSBib3VuZCB0byB0aGUgaW5kZXggb2YgdGhlIHNlbGVjdGVkIGl0ZW0gYnkgc2V0dGluZyB0aGUgYmluZEluZGV4Rm9yU3RlcHNBcnJheVxuICAgICBvcHRpb24gdG8gdHJ1ZS4gKi9cbiAgc3RlcHNBcnJheT86IEN1c3RvbVN0ZXBEZWZpbml0aW9uW10gPSBudWxsO1xuXG4gIC8qKiBTZXQgdG8gdHJ1ZSB0byBiaW5kIHRoZSBpbmRleCBvZiB0aGUgc2VsZWN0ZWQgaXRlbSB0byB2YWx1ZSBtb2RlbCBhbmQgdmFsdWVIaWdoIG1vZGVsLiAqL1xuICBiaW5kSW5kZXhGb3JTdGVwc0FycmF5PzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBXaGVuIHNldCB0byB0cnVlIGFuZCB1c2luZyBhIHJhbmdlIHNsaWRlciwgdGhlIHJhbmdlIGNhbiBiZSBkcmFnZ2VkIGJ5IHRoZSBzZWxlY3Rpb24gYmFyLlxuICAgIEFwcGxpZXMgdG8gcmFuZ2Ugc2xpZGVyIG9ubHkuICovXG4gIGRyYWdnYWJsZVJhbmdlPzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBTYW1lIGFzIGRyYWdnYWJsZVJhbmdlIGJ1dCB0aGUgc2xpZGVyIHJhbmdlIGNhbid0IGJlIGNoYW5nZWQuXG4gICAgQXBwbGllcyB0byByYW5nZSBzbGlkZXIgb25seS4gKi9cbiAgZHJhZ2dhYmxlUmFuZ2VPbmx5PzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBTZXQgdG8gdHJ1ZSB0byBhbHdheXMgc2hvdyB0aGUgc2VsZWN0aW9uIGJhciBiZWZvcmUgdGhlIHNsaWRlciBoYW5kbGUuICovXG4gIHNob3dTZWxlY3Rpb25CYXI/OiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIFNldCB0byB0cnVlIHRvIGFsd2F5cyBzaG93IHRoZSBzZWxlY3Rpb24gYmFyIGFmdGVyIHRoZSBzbGlkZXIgaGFuZGxlLiAqL1xuICBzaG93U2VsZWN0aW9uQmFyRW5kPzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiAgU2V0IGEgbnVtYmVyIHRvIGRyYXcgdGhlIHNlbGVjdGlvbiBiYXIgYmV0d2VlbiB0aGlzIHZhbHVlIGFuZCB0aGUgc2xpZGVyIGhhbmRsZS5cbiAgICBXaGVuIHVzaW5nIHN0ZXBzQXJyYXksIGV4cHJlc3NlZCBhcyBpbmRleCBpbnRvIHN0ZXBzQXJyYXkuICovXG4gIHNob3dTZWxlY3Rpb25CYXJGcm9tVmFsdWU/OiBudW1iZXIgPSBudWxsO1xuXG4gIC8qKiAgT25seSBmb3IgcmFuZ2Ugc2xpZGVyLiBTZXQgdG8gdHJ1ZSB0byB2aXN1YWxpemUgaW4gZGlmZmVyZW50IGNvbG91ciB0aGUgYXJlYXNcbiAgICBvbiB0aGUgbGVmdC9yaWdodCAodG9wL2JvdHRvbSBmb3IgdmVydGljYWwgcmFuZ2Ugc2xpZGVyKSBvZiBzZWxlY3Rpb24gYmFyIGJldHdlZW4gdGhlIGhhbmRsZXMuICovXG4gIHNob3dPdXRlclNlbGVjdGlvbkJhcnM/OiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIFNldCB0byB0cnVlIHRvIGhpZGUgcG9pbnRlciBsYWJlbHMgKi9cbiAgaGlkZVBvaW50ZXJMYWJlbHM/OiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIFNldCB0byB0cnVlIHRvIGhpZGUgbWluIC8gbWF4IGxhYmVscyAgKi9cbiAgaGlkZUxpbWl0TGFiZWxzPzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBTZXQgdG8gZmFsc2UgdG8gZGlzYWJsZSB0aGUgYXV0by1oaWRpbmcgYmVoYXZpb3Igb2YgdGhlIGxpbWl0IGxhYmVscy4gKi9cbiAgYXV0b0hpZGVMaW1pdExhYmVscz86IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKiBTZXQgdG8gdHJ1ZSB0byBtYWtlIHRoZSBzbGlkZXIgcmVhZC1vbmx5LiAqL1xuICByZWFkT25seT86IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogU2V0IHRvIHRydWUgdG8gZGlzYWJsZSB0aGUgc2xpZGVyLiAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogVGhyb3R0bGUgaW50ZXJ2YWwgZm9yIG1vdXNlIGV2ZW50cyBpbiBtaWxsaXNlY29uZHMuXG4gICAqIFRoaXMgaXMgcHJvdmlkZWQgdG8gYXZvaWQgYSBmbG9vZCBvZiBldmVudHMgd2hlbiBtb3ZpbmcgdGhlIHNsaWRlciB3aXRoIG1vdXNlLiAqL1xuICBtb3VzZUV2ZW50c0ludGVydmFsPzogbnVtYmVyID0gNTA7XG5cbiAgLyoqIFRocm90dGxlIGludGVydmFsIGZvciB0b3VjaCBldmVudHMgaW4gbWlsbGlzZWNvbmRzLlxuICAgKiBUaGlzIGlzIHByb3ZpZGVkIHRvIGF2b2lkIGEgZmxvb2Qgb2YgZXZlbnRzIHdoZW4gbW92aW5nIHRoZSBzbGlkZXIgd2l0aCB0b3VjaCBnZXN0dXJlLiAqL1xuICB0b3VjaEV2ZW50c0ludGVydmFsPzogbnVtYmVyID0gNTA7XG5cbiAgLyoqIFRocm90dGxlIGludGVydmFsIGZvciBpbnB1dCBjaGFuZ2VzIChjaGFuZ2VzIHRvIGJpbmRpbmdzIG9yIHJlYWN0aXZlIGZvcm0gaW5wdXRzKVxuICAgKiBUaGlzIGlzIHByb3ZpZGVkIHRvIGF2b2lkIGEgZmxvb2Qgb2YgZXZlbnRzIG9uIGZyZXF1ZW50IGlucHV0IGJpbmRpbmcgY2hhbmdlcyBhZmZlY3RpbmcgcGVyZm9ybWFuY2UuICovXG4gIGlucHV0RXZlbnRzSW50ZXJ2YWw/OiBudW1iZXIgPSAxMDA7XG5cbiAgLyoqIFRocm90dGxlIGludGVydmFsIGZvciBvdXRwdXQgY2hhbmdlcyAoc2lnbmFsbGluZyBjaGFuZ2VzIHRvIG91dHB1dCBiaW5kaW5ncyBhbmQgdXNlciBjYWxsYmFja3MpXG4gICAqIFRoaXMgaXMgcHJvdmlkZWQgdG8gYXZvaWQgYSBmbG9vZCBvZiBvdXRnb2luZyBldmVudHMgYWZmZWN0aW5nIEFuZ3VsYXIgYXBwIHBlcmZvcm1hbmNlLiAqL1xuICBvdXRwdXRFdmVudHNJbnRlcnZhbD86IG51bWJlciA9IDEwMDtcblxuICAvKiogU2V0IHRvIHRydWUgdG8gZGlzcGxheSBhIHRpY2sgZm9yIGVhY2ggc3RlcCBvZiB0aGUgc2xpZGVyLiAqL1xuICBzaG93VGlja3M/OiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIFNldCB0byB0cnVlIHRvIGRpc3BsYXkgYSB0aWNrIGFuZCB0aGUgc3RlcCB2YWx1ZSBmb3IgZWFjaCBzdGVwIG9mIHRoZSBzbGlkZXIuLiAqL1xuICBzaG93VGlja3NWYWx1ZXM/OiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyogVGhlIHN0ZXAgYmV0d2VlbiBlYWNoIHRpY2sgdG8gZGlzcGxheS4gSWYgbm90IHNldCwgdGhlIHN0ZXAgdmFsdWUgaXMgdXNlZC5cbiAgICBOb3QgdXNlZCB3aGVuIHRpY2tzQXJyYXkgaXMgc3BlY2lmaWVkLiAqL1xuICB0aWNrU3RlcD86IG51bWJlciA9IG51bGw7XG5cbiAgLyogVGhlIHN0ZXAgYmV0d2VlbiBkaXNwbGF5aW5nIGVhY2ggdGljayBzdGVwIHZhbHVlLlxuICAgIElmIG5vdCBzZXQsIHRoZW4gdGlja1N0ZXAgb3Igc3RlcCBpcyB1c2VkLCBkZXBlbmRpbmcgb24gd2hpY2ggb25lIGlzIHNldC4gKi9cbiAgdGlja1ZhbHVlU3RlcD86IG51bWJlciA9IG51bGw7XG5cbiAgLyoqIFVzZSB0byBkaXNwbGF5IHRpY2tzIGF0IHNwZWNpZmljIHBvc2l0aW9ucy5cbiAgICBUaGUgYXJyYXkgY29udGFpbnMgdGhlIGluZGV4IG9mIHRoZSB0aWNrcyB0aGF0IHNob3VsZCBiZSBkaXNwbGF5ZWQuXG4gICAgRm9yIGV4YW1wbGUsIFswLCAxLCA1XSB3aWxsIGRpc3BsYXkgYSB0aWNrIGZvciB0aGUgZmlyc3QsIHNlY29uZCBhbmQgc2l4dGggdmFsdWVzLiAqL1xuICB0aWNrc0FycmF5PzogbnVtYmVyW10gPSBudWxsO1xuXG4gIC8qKiBVc2VkIHRvIGRpc3BsYXkgYSB0b29sdGlwIHdoZW4gYSB0aWNrIGlzIGhvdmVyZWQuXG4gICAgU2V0IHRvIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSB0b29sdGlwIGNvbnRlbnQgZm9yIGEgZ2l2ZW4gdmFsdWUuICovXG4gIHRpY2tzVG9vbHRpcD86ICh2YWx1ZTogbnVtYmVyKSA9PiBzdHJpbmcgPSBudWxsO1xuXG4gIC8qKiBTYW1lIGFzIHRpY2tzVG9vbHRpcCBidXQgZm9yIHRpY2tzIHZhbHVlcy4gKi9cbiAgdGlja3NWYWx1ZXNUb29sdGlwPzogKHZhbHVlOiBudW1iZXIpID0+IHN0cmluZyA9IG51bGw7XG5cbiAgLyoqIFNldCB0byB0cnVlIHRvIGRpc3BsYXkgdGhlIHNsaWRlciB2ZXJ0aWNhbGx5LlxuICAgIFRoZSBzbGlkZXIgd2lsbCB0YWtlIHRoZSBmdWxsIGhlaWdodCBvZiBpdHMgcGFyZW50LlxuICAgIENoYW5naW5nIHRoaXMgdmFsdWUgYXQgcnVudGltZSBpcyBub3QgY3VycmVudGx5IHN1cHBvcnRlZC4gKi9cbiAgdmVydGljYWw/OiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgY3VycmVudCBjb2xvciBvZiB0aGUgc2VsZWN0aW9uIGJhci5cbiAgICBJZiB5b3VyIGNvbG9yIHdvbid0IGNoYW5nZSwgZG9uJ3QgdXNlIHRoaXMgb3B0aW9uIGJ1dCBzZXQgaXQgdGhyb3VnaCBDU1MuXG4gICAgSWYgdGhlIHJldHVybmVkIGNvbG9yIGRlcGVuZHMgb24gYSBtb2RlbCB2YWx1ZSAoZWl0aGVyIHZhbHVlIG9yIHZhbHVlSGlnaCksXG4gICAgeW91IHNob3VsZCB1c2UgdGhlIGFyZ3VtZW50IHBhc3NlZCB0byB0aGUgZnVuY3Rpb24uXG4gICAgSW5kZWVkLCB3aGVuIHRoZSBmdW5jdGlvbiBpcyBjYWxsZWQsIHRoZXJlIGlzIG5vIGNlcnRhaW50eSB0aGF0IHRoZSBtb2RlbFxuICAgIGhhcyBhbHJlYWR5IGJlZW4gdXBkYXRlZC4qL1xuICBnZXRTZWxlY3Rpb25CYXJDb2xvcj86IChtaW5WYWx1ZTogbnVtYmVyLCBtYXhWYWx1ZT86IG51bWJlcikgPT4gc3RyaW5nID0gbnVsbDtcblxuICAvKiogRnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBjb2xvciBvZiBhIHRpY2suIHNob3dUaWNrcyBtdXN0IGJlIGVuYWJsZWQuICovXG4gIGdldFRpY2tDb2xvcj86ICh2YWx1ZTogbnVtYmVyKSA9PiBzdHJpbmcgPSBudWxsO1xuXG4gIC8qKiBGdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIGN1cnJlbnQgY29sb3Igb2YgYSBwb2ludGVyLlxuICAgIElmIHlvdXIgY29sb3Igd29uJ3QgY2hhbmdlLCBkb24ndCB1c2UgdGhpcyBvcHRpb24gYnV0IHNldCBpdCB0aHJvdWdoIENTUy5cbiAgICBJZiB0aGUgcmV0dXJuZWQgY29sb3IgZGVwZW5kcyBvbiBhIG1vZGVsIHZhbHVlIChlaXRoZXIgdmFsdWUgb3IgdmFsdWVIaWdoKSxcbiAgICB5b3Ugc2hvdWxkIHVzZSB0aGUgYXJndW1lbnQgcGFzc2VkIHRvIHRoZSBmdW5jdGlvbi5cbiAgICBJbmRlZWQsIHdoZW4gdGhlIGZ1bmN0aW9uIGlzIGNhbGxlZCwgdGhlcmUgaXMgbm8gY2VydGFpbnR5IHRoYXQgdGhlIG1vZGVsIGhhcyBhbHJlYWR5IGJlZW4gdXBkYXRlZC5cbiAgICBUbyBoYW5kbGUgcmFuZ2Ugc2xpZGVyIHBvaW50ZXJzIGluZGVwZW5kZW50bHksIHlvdSBzaG91bGQgZXZhbHVhdGUgcG9pbnRlclR5cGUgd2l0aGluIHRoZSBnaXZlblxuICAgIGZ1bmN0aW9uIHdoZXJlIFwibWluXCIgc3RhbmRzIGZvciB2YWx1ZSBtb2RlbCBhbmQgXCJtYXhcIiBmb3IgdmFsdWVIaWdoIG1vZGVsIHZhbHVlcy4gKi9cbiAgZ2V0UG9pbnRlckNvbG9yPzogKHZhbHVlOiBudW1iZXIsIHBvaW50ZXJUeXBlOiBQb2ludGVyVHlwZSkgPT4gc3RyaW5nID0gbnVsbDtcblxuICAvKiogSGFuZGxlcyBhcmUgZm9jdXNhYmxlIChvbiBjbGljayBvciB3aXRoIHRhYikgYW5kIGNhbiBiZSBtb2RpZmllZCB1c2luZyB0aGUgZm9sbG93aW5nIGtleWJvYXJkIGNvbnRyb2xzOlxuICAgIExlZnQvYm90dG9tIGFycm93czogLTFcbiAgICBSaWdodC90b3AgYXJyb3dzOiArMVxuICAgIFBhZ2UtZG93bjogLTEwJVxuICAgIFBhZ2UtdXA6ICsxMCVcbiAgICBIb21lOiBtaW5pbXVtIHZhbHVlXG4gICAgRW5kOiBtYXhpbXVtIHZhbHVlXG4gICAqL1xuICBrZXlib2FyZFN1cHBvcnQ/OiBib29sZWFuID0gdHJ1ZTtcblxuICAvKiogSWYgeW91IGRpc3BsYXkgdGhlIHNsaWRlciBpbiBhbiBlbGVtZW50IHRoYXQgdXNlcyB0cmFuc2Zvcm06IHNjYWxlKDAuNSksIHNldCB0aGUgc2NhbGUgdmFsdWUgdG8gMlxuICAgIHNvIHRoYXQgdGhlIHNsaWRlciBpcyByZW5kZXJlZCBwcm9wZXJseSBhbmQgdGhlIGV2ZW50cyBhcmUgaGFuZGxlZCBjb3JyZWN0bHkuICovXG4gIHNjYWxlPzogbnVtYmVyID0gMTtcblxuICAvKiogU2V0IHRvIHRydWUgdG8gZm9yY2UgdGhlIHZhbHVlKHMpIHRvIGJlIHJvdW5kZWQgdG8gdGhlIHN0ZXAsIGV2ZW4gd2hlbiBtb2RpZmllZCBmcm9tIHRoZSBvdXRzaWRlLlxuICAgIFdoZW4gc2V0IHRvIGZhbHNlLCBpZiB0aGUgbW9kZWwgdmFsdWVzIGFyZSBtb2RpZmllZCBmcm9tIG91dHNpZGUgdGhlIHNsaWRlciwgdGhleSBhcmUgbm90IHJvdW5kZWRcbiAgICBhbmQgY2FuIGJlIGJldHdlZW4gdHdvIHN0ZXBzLiAqL1xuICBlbmZvcmNlU3RlcD86IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKiBTZXQgdG8gdHJ1ZSB0byBmb3JjZSB0aGUgdmFsdWUocykgdG8gYmUgbm9ybWFsaXNlZCB0byBhbGxvd2VkIHJhbmdlIChmbG9vciB0byBjZWlsKSwgZXZlbiB3aGVuIG1vZGlmaWVkIGZyb20gdGhlIG91dHNpZGUuXG4gICAgV2hlbiBzZXQgdG8gZmFsc2UsIGlmIHRoZSBtb2RlbCB2YWx1ZXMgYXJlIG1vZGlmaWVkIGZyb20gb3V0c2lkZSB0aGUgc2xpZGVyLCBhbmQgdGhleSBhcmUgb3V0c2lkZSBhbGxvd2VkIHJhbmdlLFxuICAgIHRoZSBzbGlkZXIgbWF5IGJlIHJlbmRlcmVkIGluY29ycmVjdGx5LiBIb3dldmVyLCBzZXR0aW5nIHRoaXMgdG8gZmFsc2UgbWF5IGJlIHVzZWZ1bCBpZiB5b3Ugd2FudCB0byBwZXJmb3JtIGN1c3RvbSBub3JtYWxpc2F0aW9uLiAqL1xuICBlbmZvcmNlUmFuZ2U/OiBib29sZWFuID0gdHJ1ZTtcblxuICAvKiogU2V0IHRvIHRydWUgdG8gZm9yY2UgdGhlIHZhbHVlKHMpIHRvIGJlIHJvdW5kZWQgdG8gdGhlIG5lYXJlc3Qgc3RlcCB2YWx1ZSwgZXZlbiB3aGVuIG1vZGlmaWVkIGZyb20gdGhlIG91dHNpZGUuXG4gICAgV2hlbiBzZXQgdG8gZmFsc2UsIGlmIHRoZSBtb2RlbCB2YWx1ZXMgYXJlIG1vZGlmaWVkIGZyb20gb3V0c2lkZSB0aGUgc2xpZGVyLCBhbmQgdGhleSBhcmUgb3V0c2lkZSBhbGxvd2VkIHJhbmdlLFxuICAgIHRoZSBzbGlkZXIgbWF5IGJlIHJlbmRlcmVkIGluY29ycmVjdGx5LiBIb3dldmVyLCBzZXR0aW5nIHRoaXMgdG8gZmFsc2UgbWF5IGJlIHVzZWZ1bCBpZiB5b3Ugd2FudCB0byBwZXJmb3JtIGN1c3RvbSBub3JtYWxpc2F0aW9uLiAqL1xuICBlbmZvcmNlU3RlcHNBcnJheT86IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKiBTZXQgdG8gdHJ1ZSB0byBwcmV2ZW50IHRvIHVzZXIgZnJvbSBzd2l0Y2hpbmcgdGhlIG1pbiBhbmQgbWF4IGhhbmRsZXMuIEFwcGxpZXMgdG8gcmFuZ2Ugc2xpZGVyIG9ubHkuICovXG4gIG5vU3dpdGNoaW5nPzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8qKiBTZXQgdG8gdHJ1ZSB0byBvbmx5IGJpbmQgZXZlbnRzIG9uIHNsaWRlciBoYW5kbGVzLiAqL1xuICBvbmx5QmluZEhhbmRsZXM/OiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIFNldCB0byB0cnVlIHRvIHNob3cgZ3JhcGhzIHJpZ2h0IHRvIGxlZnQuXG4gICAgSWYgdmVydGljYWwgaXMgdHJ1ZSBpdCB3aWxsIGJlIGZyb20gdG9wIHRvIGJvdHRvbSBhbmQgbGVmdCAvIHJpZ2h0IGFycm93IGZ1bmN0aW9ucyByZXZlcnNlZC4gKi9cbiAgcmlnaHRUb0xlZnQ/OiBib29sZWFuID0gZmFsc2U7XG5cbiAgLyoqIFNldCB0byB0cnVlIHRvIHJldmVyc2Uga2V5Ym9hcmQgbmF2aWdhdGlvbjpcbiAgICBSaWdodC90b3AgYXJyb3dzOiAtMVxuICAgIExlZnQvYm90dG9tIGFycm93czogKzFcbiAgICBQYWdlLXVwOiAtMTAlXG4gICAgUGFnZS1kb3duOiArMTAlXG4gICAgRW5kOiBtaW5pbXVtIHZhbHVlXG4gICAgSG9tZTogbWF4aW11bSB2YWx1ZVxuICAgKi9cbiAgcmV2ZXJzZWRDb250cm9scz86IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogU2V0IHRvIHRydWUgdG8ga2VlcCB0aGUgc2xpZGVyIGxhYmVscyBpbnNpZGUgdGhlIHNsaWRlciBib3VuZHMuICovXG4gIGJvdW5kUG9pbnRlckxhYmVscz86IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKiBTZXQgdG8gdHJ1ZSB0byB1c2UgYSBsb2dhcml0aG1pYyBzY2FsZSB0byBkaXNwbGF5IHRoZSBzbGlkZXIuICAqL1xuICBsb2dTY2FsZT86IGJvb2xlYW4gPSBmYWxzZTtcblxuICAvKiogRnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBwb3NpdGlvbiBvbiB0aGUgc2xpZGVyIGZvciBhIGdpdmVuIHZhbHVlLlxuICAgIFRoZSBwb3NpdGlvbiBtdXN0IGJlIGEgcGVyY2VudGFnZSBiZXR3ZWVuIDAgYW5kIDEuXG4gICAgVGhlIGZ1bmN0aW9uIHNob3VsZCBiZSBtb25vdG9uaWNhbGx5IGluY3JlYXNpbmcgb3IgZGVjcmVhc2luZzsgb3RoZXJ3aXNlIHRoZSBzbGlkZXIgbWF5IGJlaGF2ZSBpbmNvcnJlY3RseS4gKi9cbiAgY3VzdG9tVmFsdWVUb1Bvc2l0aW9uPzogVmFsdWVUb1Bvc2l0aW9uRnVuY3Rpb24gPSBudWxsO1xuXG4gIC8qKiBGdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIHZhbHVlIGZvciBhIGdpdmVuIHBvc2l0aW9uIG9uIHRoZSBzbGlkZXIuXG4gICAgVGhlIHBvc2l0aW9uIGlzIGEgcGVyY2VudGFnZSBiZXR3ZWVuIDAgYW5kIDEuXG4gICAgVGhlIGZ1bmN0aW9uIHNob3VsZCBiZSBtb25vdG9uaWNhbGx5IGluY3JlYXNpbmcgb3IgZGVjcmVhc2luZzsgb3RoZXJ3aXNlIHRoZSBzbGlkZXIgbWF5IGJlaGF2ZSBpbmNvcnJlY3RseS4gKi9cbiAgY3VzdG9tUG9zaXRpb25Ub1ZhbHVlPzogUG9zaXRpb25Ub1ZhbHVlRnVuY3Rpb24gPSBudWxsO1xuXG4gIC8qKiBQcmVjaXNpb24gbGltaXQgZm9yIGNhbGN1bGF0ZWQgdmFsdWVzLlxuICAgIFZhbHVlcyB1c2VkIGluIGNhbGN1bGF0aW9ucyB3aWxsIGJlIHJvdW5kZWQgdG8gdGhpcyBudW1iZXIgb2Ygc2lnbmlmaWNhbnQgZGlnaXRzXG4gICAgdG8gcHJldmVudCBhY2N1bXVsYXRpbmcgc21hbGwgZmxvYXRpbmctcG9pbnQgZXJyb3JzLiAqL1xuICBwcmVjaXNpb25MaW1pdD86IG51bWJlciA9IDEyO1xuXG4gIC8qKiBVc2UgdG8gZGlzcGxheSB0aGUgc2VsZWN0aW9uIGJhciBhcyBhIGdyYWRpZW50LlxuICAgIFRoZSBnaXZlbiBvYmplY3QgbXVzdCBjb250YWluIGZyb20gYW5kIHRvIHByb3BlcnRpZXMgd2hpY2ggYXJlIGNvbG9ycy4gKi9cbiAgc2VsZWN0aW9uQmFyR3JhZGllbnQ/OiB7ZnJvbTogc3RyaW5nLCB0bzogc3RyaW5nfSA9IG51bGw7XG5cbiAgLyoqIFVzZSB0byBhZGQgYSBsYWJlbCBkaXJlY3RseSB0byB0aGUgc2xpZGVyIGZvciBhY2Nlc3NpYmlsaXR5LiBBZGRzIHRoZSBhcmlhLWxhYmVsIGF0dHJpYnV0ZS4gKi9cbiAgYXJpYUxhYmVsPzogc3RyaW5nID0gbnVsbDtcblxuICAvKiogVXNlIGluc3RlYWQgb2YgYXJpYUxhYmVsIHRvIHJlZmVyZW5jZSB0aGUgaWQgb2YgYW4gZWxlbWVudCB3aGljaCB3aWxsIGJlIHVzZWQgdG8gbGFiZWwgdGhlIHNsaWRlci5cbiAgICBBZGRzIHRoZSBhcmlhLWxhYmVsbGVkYnkgYXR0cmlidXRlLiAqL1xuICBhcmlhTGFiZWxsZWRCeT86IHN0cmluZyA9IG51bGw7XG5cbiAgLyoqIFVzZSB0byBhZGQgYSBsYWJlbCBkaXJlY3RseSB0byB0aGUgc2xpZGVyIHJhbmdlIGZvciBhY2Nlc3NpYmlsaXR5LiBBZGRzIHRoZSBhcmlhLWxhYmVsIGF0dHJpYnV0ZS4gKi9cbiAgYXJpYUxhYmVsSGlnaD86IHN0cmluZyA9IG51bGw7XG5cbiAgLyoqIFVzZSBpbnN0ZWFkIG9mIGFyaWFMYWJlbEhpZ2ggdG8gcmVmZXJlbmNlIHRoZSBpZCBvZiBhbiBlbGVtZW50IHdoaWNoIHdpbGwgYmUgdXNlZCB0byBsYWJlbCB0aGUgc2xpZGVyIHJhbmdlLlxuICAgIEFkZHMgdGhlIGFyaWEtbGFiZWxsZWRieSBhdHRyaWJ1dGUuICovXG4gIGFyaWFMYWJlbGxlZEJ5SGlnaD86IHN0cmluZyA9IG51bGw7XG5cbiAgLyoqIFVzZSB0byBpbmNyZWFzZSByZW5kZXJpbmcgcGVyZm9ybWFuY2UuIElmIHRoZSB2YWx1ZSBpcyBub3QgcHJvdmlkZWQsIHRoZSBzbGlkZXIgY2FsY3VsYXRlcyB0aGUgd2l0aC9oZWlnaHQgb2YgdGhlIGhhbmRsZSAqL1xuICBoYW5kbGVEaW1lbnNpb24/OiBudW1iZXIgPSBudWxsO1xuXG4gIC8qKiBVc2UgdG8gaW5jcmVhc2UgcmVuZGVyaW5nIHBlcmZvcm1hbmNlLiBJZiB0aGUgdmFsdWUgaXMgbm90IHByb3ZpZGVkLCB0aGUgc2xpZGVyIGNhbGN1bGF0ZXMgdGhlIHdpdGgvaGVpZ2h0IG9mIHRoZSBiYXIgKi9cbiAgYmFyRGltZW5zaW9uPzogbnVtYmVyID0gbnVsbDtcblxuICAvKiogRW5hYmxlL2Rpc2FibGUgQ1NTIGFuaW1hdGlvbnMgKi9cbiAgYW5pbWF0ZT86IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKiBFbmFibGUvZGlzYWJsZSBDU1MgYW5pbWF0aW9ucyB3aGlsZSBtb3ZpbmcgdGhlIHNsaWRlciAqL1xuICBhbmltYXRlT25Nb3ZlPzogYm9vbGVhbiA9IGZhbHNlO1xufVxuIiwiLyoqIFBvaW50ZXIgdHlwZSAqL1xuZXhwb3J0IGVudW0gUG9pbnRlclR5cGUge1xuICAvKiogTG93IHBvaW50ZXIgKi9cbiAgTWluLFxuICAvKiogSGlnaCBwb2ludGVyICovXG4gIE1heFxufVxuIiwiaW1wb3J0IHsgUG9pbnRlclR5cGUgfSBmcm9tICcuL3BvaW50ZXItdHlwZSc7XG5cbmV4cG9ydCBjbGFzcyBDaGFuZ2VDb250ZXh0IHtcbiAgdmFsdWU6IG51bWJlcjtcbiAgaGlnaFZhbHVlPzogbnVtYmVyO1xuICBwb2ludGVyVHlwZTogUG9pbnRlclR5cGU7XG59XG4iLCJpbXBvcnQgeyBDdXN0b21TdGVwRGVmaW5pdGlvbiB9IGZyb20gJy4vb3B0aW9ucyc7XG5cbi8qKlxuICogIENvbGxlY3Rpb24gb2YgZnVuY3Rpb25zIHRvIGhhbmRsZSBjb252ZXJzaW9ucy9sb29rdXBzIG9mIHZhbHVlc1xuICovXG5leHBvcnQgY2xhc3MgVmFsdWVIZWxwZXIge1xuICBzdGF0aWMgaXNOdWxsT3JVbmRlZmluZWQodmFsdWU6IGFueSk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsO1xuICB9XG5cbiAgc3RhdGljIGFyZUFycmF5c0VxdWFsKGFycmF5MTogYW55W10sIGFycmF5MjogYW55W10pOiBib29sZWFuIHtcbiAgICBpZiAoYXJyYXkxLmxlbmd0aCAhPT0gYXJyYXkyLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBhcnJheTEubGVuZ3RoOyArK2kpIHtcbiAgICAgIGlmIChhcnJheTFbaV0gIT09IGFycmF5MltpXSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBzdGF0aWMgbGluZWFyVmFsdWVUb1Bvc2l0aW9uKHZhbDogbnVtYmVyLCBtaW5WYWw6IG51bWJlciwgbWF4VmFsOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGNvbnN0IHJhbmdlOiBudW1iZXIgPSBtYXhWYWwgLSBtaW5WYWw7XG4gICAgcmV0dXJuICh2YWwgLSBtaW5WYWwpIC8gcmFuZ2U7XG4gIH1cblxuICBzdGF0aWMgbG9nVmFsdWVUb1Bvc2l0aW9uKHZhbDogbnVtYmVyLCBtaW5WYWw6IG51bWJlciwgbWF4VmFsOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHZhbCA9IE1hdGgubG9nKHZhbCk7XG4gICAgbWluVmFsID0gTWF0aC5sb2cobWluVmFsKTtcbiAgICBtYXhWYWwgPSBNYXRoLmxvZyhtYXhWYWwpO1xuICAgIGNvbnN0IHJhbmdlOiBudW1iZXIgPSBtYXhWYWwgLSBtaW5WYWw7XG4gICAgcmV0dXJuICh2YWwgLSBtaW5WYWwpIC8gcmFuZ2U7XG4gIH1cblxuICBzdGF0aWMgbGluZWFyUG9zaXRpb25Ub1ZhbHVlKHBlcmNlbnQ6IG51bWJlciwgbWluVmFsOiBudW1iZXIsIG1heFZhbDogbnVtYmVyKTogbnVtYmVyIHtcbiAgICByZXR1cm4gcGVyY2VudCAqIChtYXhWYWwgLSBtaW5WYWwpICsgbWluVmFsO1xuICB9XG5cbiAgc3RhdGljIGxvZ1Bvc2l0aW9uVG9WYWx1ZShwZXJjZW50OiBudW1iZXIsIG1pblZhbDogbnVtYmVyLCBtYXhWYWw6IG51bWJlcik6IG51bWJlciB7XG4gICAgbWluVmFsID0gTWF0aC5sb2cobWluVmFsKTtcbiAgICBtYXhWYWwgPSBNYXRoLmxvZyhtYXhWYWwpO1xuICAgIGNvbnN0IHZhbHVlOiBudW1iZXIgPSBwZXJjZW50ICogKG1heFZhbCAtIG1pblZhbCkgKyBtaW5WYWw7XG4gICAgcmV0dXJuIE1hdGguZXhwKHZhbHVlKTtcbiAgfVxuXG4gIHN0YXRpYyBmaW5kU3RlcEluZGV4KG1vZGVsVmFsdWU6IG51bWJlciwgc3RlcHNBcnJheTogQ3VzdG9tU3RlcERlZmluaXRpb25bXSk6IG51bWJlciB7XG4gICAgY29uc3QgZGlmZmVyZW5jZXM6IG51bWJlcltdID0gc3RlcHNBcnJheS5tYXAoKHN0ZXA6IEN1c3RvbVN0ZXBEZWZpbml0aW9uKTogbnVtYmVyID0+IE1hdGguYWJzKG1vZGVsVmFsdWUgLSBzdGVwLnZhbHVlKSk7XG5cbiAgICBsZXQgbWluRGlmZmVyZW5jZUluZGV4OiBudW1iZXIgPSAwO1xuICAgIGZvciAobGV0IGluZGV4OiBudW1iZXIgPSAwOyBpbmRleCA8IHN0ZXBzQXJyYXkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICBpZiAoZGlmZmVyZW5jZXNbaW5kZXhdICE9PSBkaWZmZXJlbmNlc1ttaW5EaWZmZXJlbmNlSW5kZXhdICYmIGRpZmZlcmVuY2VzW2luZGV4XSA8IGRpZmZlcmVuY2VzW21pbkRpZmZlcmVuY2VJbmRleF0pIHtcbiAgICAgICAgbWluRGlmZmVyZW5jZUluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1pbkRpZmZlcmVuY2VJbmRleDtcbiAgfVxufVxuIiwiLy8gRGVjbGFyYXRpb24gZm9yIFJlc2l6ZU9ic2VydmVyIGEgbmV3IEFQSSBhdmFpbGFibGUgaW4gc29tZSBvZiBuZXdlc3QgYnJvd3NlcnM6XG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvUmVzaXplT2JzZXJ2ZXJcbmRlY2xhcmUgY2xhc3MgUmVzaXplT2JzZXJ2ZXIge1xufVxuXG4vKiogSGVscGVyIHdpdGggY29tcGF0aWJpbGl0eSBmdW5jdGlvbnMgdG8gc3VwcG9ydCBkaWZmZXJlbnQgYnJvd3NlcnMgKi9cbmV4cG9ydCBjbGFzcyBDb21wYXRpYmlsaXR5SGVscGVyIHtcbiAgLyoqIFdvcmthcm91bmQgZm9yIFRvdWNoRXZlbnQgY29uc3RydWN0b3Igc2FkbHkgbm90IGJlaW5nIGF2YWlsYWJsZSBvbiBhbGwgYnJvd3NlcnMgKGUuZy4gRmlyZWZveCwgU2FmYXJpKSAqL1xuICBwdWJsaWMgc3RhdGljIGlzVG91Y2hFdmVudChldmVudDogYW55KTogYm9vbGVhbiB7XG4gICAgaWYgKCh3aW5kb3cgYXMgYW55KS5Ub3VjaEV2ZW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBldmVudCBpbnN0YW5jZW9mIFRvdWNoRXZlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGV2ZW50LnRvdWNoZXMgIT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKiBEZXRlY3QgcHJlc2VuY2Ugb2YgUmVzaXplT2JzZXJ2ZXIgQVBJICovXG4gIHB1YmxpYyBzdGF0aWMgaXNSZXNpemVPYnNlcnZlckF2YWlsYWJsZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKHdpbmRvdyBhcyBhbnkpLlJlc2l6ZU9ic2VydmVyICE9PSB1bmRlZmluZWQ7XG4gIH1cbn1cbiIsIi8qKiBIZWxwZXIgd2l0aCBtYXRoZW1hdGljYWwgZnVuY3Rpb25zICovXG5leHBvcnQgY2xhc3MgTWF0aEhlbHBlciB7XG4gIC8qIFJvdW5kIG51bWJlcnMgdG8gYSBnaXZlbiBudW1iZXIgb2Ygc2lnbmlmaWNhbnQgZGlnaXRzICovXG4gIHN0YXRpYyByb3VuZFRvUHJlY2lzaW9uTGltaXQodmFsdWU6IG51bWJlciwgcHJlY2lzaW9uTGltaXQ6IG51bWJlcik6IG51bWJlciB7XG4gICAgcmV0dXJuICsoIHZhbHVlLnRvUHJlY2lzaW9uKHByZWNpc2lvbkxpbWl0KSApO1xuICB9XG5cbiAgc3RhdGljIGlzTW9kdWxvV2l0aGluUHJlY2lzaW9uTGltaXQodmFsdWU6IG51bWJlciwgbW9kdWxvOiBudW1iZXIsIHByZWNpc2lvbkxpbWl0OiBudW1iZXIpOiBib29sZWFuIHtcbiAgICBjb25zdCBsaW1pdDogbnVtYmVyID0gTWF0aC5wb3coMTAsIC1wcmVjaXNpb25MaW1pdCk7XG4gICAgcmV0dXJuIE1hdGguYWJzKHZhbHVlICUgbW9kdWxvKSA8PSBsaW1pdCB8fCBNYXRoLmFicyhNYXRoLmFicyh2YWx1ZSAlIG1vZHVsbykgLSBtb2R1bG8pIDw9IGxpbWl0O1xuICB9XG5cbiAgc3RhdGljIGNsYW1wVG9SYW5nZSh2YWx1ZTogbnVtYmVyLCBmbG9vcjogbnVtYmVyLCBjZWlsOiBudW1iZXIpOiBudW1iZXIge1xuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heCh2YWx1ZSwgZmxvb3IpLCBjZWlsKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5cbmV4cG9ydCBjbGFzcyBFdmVudExpc3RlbmVyIHtcbiAgZXZlbnROYW1lOiBzdHJpbmcgPSBudWxsO1xuICBldmVudHM6IFN1YmplY3Q8RXZlbnQ+ID0gbnVsbDtcbiAgZXZlbnRzU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSBudWxsO1xuICB0ZWFyZG93bkNhbGxiYWNrOiAoKSA9PiB2b2lkID0gbnVsbDtcbn1cbiIsImltcG9ydCB7IFJlbmRlcmVyMiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGhyb3R0bGVUaW1lLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgZGV0ZWN0UGFzc2l2ZUV2ZW50cyBmcm9tICdkZXRlY3QtcGFzc2l2ZS1ldmVudHMnO1xuXG5pbXBvcnQgeyBFdmVudExpc3RlbmVyIH0gZnJvbSAnLi9ldmVudC1saXN0ZW5lcic7XG5pbXBvcnQgeyBWYWx1ZUhlbHBlciB9IGZyb20gJy4vdmFsdWUtaGVscGVyJztcblxuLyoqXG4gKiBIZWxwZXIgY2xhc3MgdG8gYXR0YWNoIGV2ZW50IGxpc3RlbmVycyB0byBET00gZWxlbWVudHMgd2l0aCBkZWJvdW5jZSBzdXBwb3J0IHVzaW5nIHJ4anNcbiAqL1xuZXhwb3J0IGNsYXNzIEV2ZW50TGlzdGVuZXJIZWxwZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcbiAgfVxuXG4gIHB1YmxpYyBhdHRhY2hQYXNzaXZlRXZlbnRMaXN0ZW5lcihuYXRpdmVFbGVtZW50OiBhbnksIGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjazogKGV2ZW50OiBhbnkpID0+IHZvaWQsXG4gICAgICB0aHJvdHRsZUludGVydmFsPzogbnVtYmVyKTogRXZlbnRMaXN0ZW5lciB7XG4gICAgLy8gT25seSB1c2UgcGFzc2l2ZSBldmVudCBsaXN0ZW5lcnMgaWYgdGhlIGJyb3dzZXIgc3VwcG9ydHMgaXRcbiAgICBpZiAoZGV0ZWN0UGFzc2l2ZUV2ZW50cy5oYXNTdXBwb3J0ICE9PSB0cnVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5hdHRhY2hFdmVudExpc3RlbmVyKG5hdGl2ZUVsZW1lbnQsIGV2ZW50TmFtZSwgY2FsbGJhY2ssIHRocm90dGxlSW50ZXJ2YWwpO1xuICAgIH1cblxuICAgIC8vIEFuZ3VsYXIgZG9lc24ndCBzdXBwb3J0IHBhc3NpdmUgZXZlbnQgaGFuZGxlcnMgKHlldCksIHNvIHdlIG5lZWQgdG8gcm9sbCBvdXIgb3duIGNvZGUgdXNpbmcgbmF0aXZlIGZ1bmN0aW9uc1xuICAgIGNvbnN0IGxpc3RlbmVyOiBFdmVudExpc3RlbmVyID0gbmV3IEV2ZW50TGlzdGVuZXIoKTtcbiAgICBsaXN0ZW5lci5ldmVudE5hbWUgPSBldmVudE5hbWU7XG4gICAgbGlzdGVuZXIuZXZlbnRzID0gbmV3IFN1YmplY3Q8RXZlbnQ+KCk7XG5cbiAgICBjb25zdCBvYnNlcnZlckNhbGxiYWNrOiAoZXZlbnQ6IEV2ZW50KSA9PiB2b2lkID0gKGV2ZW50OiBFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgbGlzdGVuZXIuZXZlbnRzLm5leHQoZXZlbnQpO1xuICAgIH07XG4gICAgbmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgb2JzZXJ2ZXJDYWxsYmFjaywge3Bhc3NpdmU6IHRydWUsIGNhcHR1cmU6IGZhbHNlfSk7XG5cbiAgICBsaXN0ZW5lci50ZWFyZG93bkNhbGxiYWNrID0gKCk6IHZvaWQgPT4ge1xuICAgICAgbmF0aXZlRWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgb2JzZXJ2ZXJDYWxsYmFjaywge3Bhc3NpdmU6IHRydWUsIGNhcHR1cmU6IGZhbHNlfSk7XG4gICAgfTtcblxuICAgIGxpc3RlbmVyLmV2ZW50c1N1YnNjcmlwdGlvbiA9IGxpc3RlbmVyLmV2ZW50c1xuICAgICAgLnBpcGUoKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aHJvdHRsZUludGVydmFsKSlcbiAgICAgICAgPyB0aHJvdHRsZVRpbWUodGhyb3R0bGVJbnRlcnZhbCwgdW5kZWZpbmVkLCB7IGxlYWRpbmc6IHRydWUsIHRyYWlsaW5nOiB0cnVlfSlcbiAgICAgICAgOiB0YXAoKCkgPT4ge30pIC8vIG5vLW9wXG4gICAgICApXG4gICAgICAuc3Vic2NyaWJlKChldmVudDogRXZlbnQpID0+IHtcbiAgICAgICAgY2FsbGJhY2soZXZlbnQpO1xuICAgICAgfSk7XG5cbiAgICByZXR1cm4gbGlzdGVuZXI7XG4gIH1cblxuICBwdWJsaWMgZGV0YWNoRXZlbnRMaXN0ZW5lcihldmVudExpc3RlbmVyOiBFdmVudExpc3RlbmVyKTogdm9pZCB7XG4gICAgaWYgKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZChldmVudExpc3RlbmVyLmV2ZW50c1N1YnNjcmlwdGlvbikpIHtcbiAgICAgIGV2ZW50TGlzdGVuZXIuZXZlbnRzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICBldmVudExpc3RlbmVyLmV2ZW50c1N1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZChldmVudExpc3RlbmVyLmV2ZW50cykpIHtcbiAgICAgIGV2ZW50TGlzdGVuZXIuZXZlbnRzLmNvbXBsZXRlKCk7XG4gICAgICBldmVudExpc3RlbmVyLmV2ZW50cyA9IG51bGw7XG4gICAgfVxuXG4gICAgaWYgKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZChldmVudExpc3RlbmVyLnRlYXJkb3duQ2FsbGJhY2spKSB7XG4gICAgICBldmVudExpc3RlbmVyLnRlYXJkb3duQ2FsbGJhY2soKTtcbiAgICAgIGV2ZW50TGlzdGVuZXIudGVhcmRvd25DYWxsYmFjayA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGF0dGFjaEV2ZW50TGlzdGVuZXIobmF0aXZlRWxlbWVudDogYW55LCBldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2s6IChldmVudDogYW55KSA9PiB2b2lkLFxuICAgICAgdGhyb3R0bGVJbnRlcnZhbD86IG51bWJlcik6IEV2ZW50TGlzdGVuZXIge1xuICAgIGNvbnN0IGxpc3RlbmVyOiBFdmVudExpc3RlbmVyID0gbmV3IEV2ZW50TGlzdGVuZXIoKTtcbiAgICBsaXN0ZW5lci5ldmVudE5hbWUgPSBldmVudE5hbWU7XG4gICAgbGlzdGVuZXIuZXZlbnRzID0gbmV3IFN1YmplY3Q8RXZlbnQ+KCk7XG5cbiAgICBjb25zdCBvYnNlcnZlckNhbGxiYWNrOiAoZXZlbnQ6IEV2ZW50KSA9PiB2b2lkID0gKGV2ZW50OiBFdmVudCk6IHZvaWQgPT4ge1xuICAgICAgbGlzdGVuZXIuZXZlbnRzLm5leHQoZXZlbnQpO1xuICAgIH07XG5cbiAgICBsaXN0ZW5lci50ZWFyZG93bkNhbGxiYWNrID0gdGhpcy5yZW5kZXJlci5saXN0ZW4obmF0aXZlRWxlbWVudCwgZXZlbnROYW1lLCBvYnNlcnZlckNhbGxiYWNrKTtcblxuICAgIGxpc3RlbmVyLmV2ZW50c1N1YnNjcmlwdGlvbiA9IGxpc3RlbmVyLmV2ZW50c1xuICAgICAgLnBpcGUoKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aHJvdHRsZUludGVydmFsKSlcbiAgICAgICAgICA/IHRocm90dGxlVGltZSh0aHJvdHRsZUludGVydmFsLCB1bmRlZmluZWQsIHsgbGVhZGluZzogdHJ1ZSwgdHJhaWxpbmc6IHRydWV9KVxuICAgICAgICAgIDogdGFwKCgpID0+IHt9KSAvLyBuby1vcFxuICAgICAgKVxuICAgICAgLnN1YnNjcmliZSgoZXZlbnQ6IEV2ZW50KSA9PiB7IGNhbGxiYWNrKGV2ZW50KTsgfSk7XG5cbiAgICByZXR1cm4gbGlzdGVuZXI7XG4gIH1cbn1cbiIsImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBIb3N0QmluZGluZywgQ2hhbmdlRGV0ZWN0b3JSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEV2ZW50TGlzdGVuZXJIZWxwZXIgfSBmcm9tICcuL2V2ZW50LWxpc3RlbmVyLWhlbHBlcic7XG5pbXBvcnQgeyBFdmVudExpc3RlbmVyIH0gZnJvbSAnLi9ldmVudC1saXN0ZW5lcic7XG5pbXBvcnQgeyBWYWx1ZUhlbHBlciB9IGZyb20gJy4vdmFsdWUtaGVscGVyJztcblxuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25neFNsaWRlckVsZW1lbnRdJ1xufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJFbGVtZW50RGlyZWN0aXZlIHtcbiAgcHJpdmF0ZSBfcG9zaXRpb246IG51bWJlciA9IDA7XG4gIGdldCBwb3NpdGlvbigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcbiAgfVxuXG4gIHByaXZhdGUgX2RpbWVuc2lvbjogbnVtYmVyID0gMDtcbiAgZ2V0IGRpbWVuc2lvbigpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9kaW1lbnNpb247XG4gIH1cblxuICBwcml2YXRlIF9hbHdheXNIaWRlOiBib29sZWFuID0gZmFsc2U7XG4gIGdldCBhbHdheXNIaWRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl9hbHdheXNIaWRlO1xuICB9XG5cbiAgcHJpdmF0ZSBfdmVydGljYWw6IGJvb2xlYW4gPSBmYWxzZTtcbiAgZ2V0IHZlcnRpY2FsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLl92ZXJ0aWNhbDtcbiAgfVxuXG4gIHByaXZhdGUgX3NjYWxlOiBudW1iZXIgPSAxO1xuICBnZXQgc2NhbGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc2NhbGU7XG4gIH1cblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLm9wYWNpdHknKVxuICBvcGFjaXR5OiBudW1iZXIgPSAxO1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUudmlzaWJpbGl0eScpXG4gIHZpc2liaWxpdHk6IHN0cmluZyA9ICd2aXNpYmxlJztcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmxlZnQnKVxuICBsZWZ0OiBzdHJpbmcgPSAnJztcblxuICBASG9zdEJpbmRpbmcoJ3N0eWxlLmJvdHRvbScpXG4gIGJvdHRvbTogc3RyaW5nID0gJyc7XG5cbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5oZWlnaHQnKVxuICBoZWlnaHQ6IHN0cmluZyA9ICcnO1xuXG4gIEBIb3N0QmluZGluZygnc3R5bGUud2lkdGgnKVxuICB3aWR0aDogc3RyaW5nID0gJyc7XG5cbiAgcHJpdmF0ZSBldmVudExpc3RlbmVySGVscGVyOiBFdmVudExpc3RlbmVySGVscGVyO1xuICBwcml2YXRlIGV2ZW50TGlzdGVuZXJzOiBFdmVudExpc3RlbmVyW10gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgZWxlbVJlZjogRWxlbWVudFJlZiwgcHJvdGVjdGVkIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByb3RlY3RlZCBjaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgdGhpcy5ldmVudExpc3RlbmVySGVscGVyID0gbmV3IEV2ZW50TGlzdGVuZXJIZWxwZXIodGhpcy5yZW5kZXJlcik7XG4gIH1cblxuICBzZXRBbHdheXNIaWRlKGhpZGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICB0aGlzLl9hbHdheXNIaWRlID0gaGlkZTtcbiAgICBpZiAoaGlkZSkge1xuICAgICAgdGhpcy52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgICB9XG4gIH1cblxuICBoaWRlKCk6IHZvaWQge1xuICAgIHRoaXMub3BhY2l0eSA9IDA7XG4gIH1cblxuICBzaG93KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLmFsd2F5c0hpZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm9wYWNpdHkgPSAxO1xuICB9XG5cbiAgaXNWaXNpYmxlKCk6IGJvb2xlYW4ge1xuICAgIGlmICh0aGlzLmFsd2F5c0hpZGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMub3BhY2l0eSAhPT0gMDtcbiAgfVxuXG4gIHNldFZlcnRpY2FsKHZlcnRpY2FsOiBib29sZWFuKTogdm9pZCB7XG4gICAgdGhpcy5fdmVydGljYWwgPSB2ZXJ0aWNhbDtcbiAgICBpZiAodGhpcy5fdmVydGljYWwpIHtcbiAgICAgIHRoaXMubGVmdCA9ICcnO1xuICAgICAgdGhpcy53aWR0aCA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmJvdHRvbSA9ICcnO1xuICAgICAgdGhpcy5oZWlnaHQgPSAnJztcbiAgICB9XG4gIH1cblxuICBzZXRTY2FsZShzY2FsZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5fc2NhbGUgPSBzY2FsZTtcbiAgfVxuXG4gICAvLyBTZXQgZWxlbWVudCBsZWZ0L3RvcCBwb3NpdGlvbiBkZXBlbmRpbmcgb24gd2hldGhlciBzbGlkZXIgaXMgaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbFxuICBzZXRQb3NpdGlvbihwb3M6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLl9wb3NpdGlvbiAhPT0gcG9zICYmICF0aGlzLmlzUmVmRGVzdHJveWVkKCkpIHtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uUmVmLm1hcmtGb3JDaGVjaygpO1xuICAgIH1cblxuICAgIHRoaXMuX3Bvc2l0aW9uID0gcG9zO1xuICAgIGlmICh0aGlzLl92ZXJ0aWNhbCkge1xuICAgICAgdGhpcy5ib3R0b20gPSBNYXRoLnJvdW5kKHBvcykgKyAncHgnO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxlZnQgPSBNYXRoLnJvdW5kKHBvcykgKyAncHgnO1xuICAgIH1cbiAgfVxuXG4gIC8vIENhbGN1bGF0ZSBlbGVtZW50J3Mgd2lkdGgvaGVpZ2h0IGRlcGVuZGluZyBvbiB3aGV0aGVyIHNsaWRlciBpcyBob3Jpem9udGFsIG9yIHZlcnRpY2FsXG4gIGNhbGN1bGF0ZURpbWVuc2lvbigpOiB2b2lkIHtcbiAgICBjb25zdCB2YWw6IENsaWVudFJlY3QgPSB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIGlmICh0aGlzLnZlcnRpY2FsKSB7XG4gICAgICB0aGlzLl9kaW1lbnNpb24gPSAodmFsLmJvdHRvbSAtIHZhbC50b3ApICogdGhpcy5zY2FsZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZGltZW5zaW9uID0gKHZhbC5yaWdodCAtIHZhbC5sZWZ0KSAqIHRoaXMuc2NhbGU7XG4gICAgfVxuICB9XG5cbiAgLy8gU2V0IGVsZW1lbnQgd2lkdGgvaGVpZ2h0IGRlcGVuZGluZyBvbiB3aGV0aGVyIHNsaWRlciBpcyBob3Jpem9udGFsIG9yIHZlcnRpY2FsXG4gIHNldERpbWVuc2lvbihkaW06IG51bWJlcik6IHZvaWQge1xuICAgIGlmICh0aGlzLl9kaW1lbnNpb24gIT09IGRpbSAmJiAhdGhpcy5pc1JlZkRlc3Ryb3llZCgpKSB7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdGlvblJlZi5tYXJrRm9yQ2hlY2soKTtcbiAgICB9XG5cbiAgICB0aGlzLl9kaW1lbnNpb24gPSBkaW07XG4gICAgaWYgKHRoaXMuX3ZlcnRpY2FsKSB7XG4gICAgICB0aGlzLmhlaWdodCA9IE1hdGgucm91bmQoZGltKSArICdweCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud2lkdGggPSBNYXRoLnJvdW5kKGRpbSkgKyAncHgnO1xuICAgIH1cbiAgfVxuXG4gIGdldEJvdW5kaW5nQ2xpZW50UmVjdCgpOiBDbGllbnRSZWN0IHtcbiAgICByZXR1cm4gdGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gIH1cblxuICBvbihldmVudE5hbWU6IHN0cmluZywgY2FsbGJhY2s6IChldmVudDogYW55KSA9PiB2b2lkLCBkZWJvdW5jZUludGVydmFsPzogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3QgbGlzdGVuZXI6IEV2ZW50TGlzdGVuZXIgPSB0aGlzLmV2ZW50TGlzdGVuZXJIZWxwZXIuYXR0YWNoRXZlbnRMaXN0ZW5lcihcbiAgICAgIHRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50LCBldmVudE5hbWUsIGNhbGxiYWNrLCBkZWJvdW5jZUludGVydmFsKTtcbiAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICB9XG5cbiAgb25QYXNzaXZlKGV2ZW50TmFtZTogc3RyaW5nLCBjYWxsYmFjazogKGV2ZW50OiBhbnkpID0+IHZvaWQsIGRlYm91bmNlSW50ZXJ2YWw/OiBudW1iZXIpOiB2b2lkIHtcbiAgICBjb25zdCBsaXN0ZW5lcjogRXZlbnRMaXN0ZW5lciA9IHRoaXMuZXZlbnRMaXN0ZW5lckhlbHBlci5hdHRhY2hQYXNzaXZlRXZlbnRMaXN0ZW5lcihcbiAgICAgIHRoaXMuZWxlbVJlZi5uYXRpdmVFbGVtZW50LCBldmVudE5hbWUsIGNhbGxiYWNrLCBkZWJvdW5jZUludGVydmFsKTtcbiAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICB9XG5cbiAgb2ZmKGV2ZW50TmFtZT86IHN0cmluZyk6IHZvaWQge1xuICAgIGxldCBsaXN0ZW5lcnNUb0tlZXA6IEV2ZW50TGlzdGVuZXJbXTtcbiAgICBsZXQgbGlzdGVuZXJzVG9SZW1vdmU6IEV2ZW50TGlzdGVuZXJbXTtcbiAgICBpZiAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKGV2ZW50TmFtZSkpIHtcbiAgICAgIGxpc3RlbmVyc1RvS2VlcCA9IHRoaXMuZXZlbnRMaXN0ZW5lcnMuZmlsdGVyKChldmVudDogRXZlbnRMaXN0ZW5lcikgPT4gZXZlbnQuZXZlbnROYW1lICE9PSBldmVudE5hbWUpO1xuICAgICAgbGlzdGVuZXJzVG9SZW1vdmUgPSB0aGlzLmV2ZW50TGlzdGVuZXJzLmZpbHRlcigoZXZlbnQ6IEV2ZW50TGlzdGVuZXIpID0+IGV2ZW50LmV2ZW50TmFtZSA9PT0gZXZlbnROYW1lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbGlzdGVuZXJzVG9LZWVwID0gW107XG4gICAgICBsaXN0ZW5lcnNUb1JlbW92ZSA9IHRoaXMuZXZlbnRMaXN0ZW5lcnM7XG4gICAgfVxuXG4gICAgZm9yIChjb25zdCBsaXN0ZW5lciBvZiBsaXN0ZW5lcnNUb1JlbW92ZSkge1xuICAgICAgdGhpcy5ldmVudExpc3RlbmVySGVscGVyLmRldGFjaEV2ZW50TGlzdGVuZXIobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBsaXN0ZW5lcnNUb0tlZXA7XG4gIH1cblxuICBwcml2YXRlIGlzUmVmRGVzdHJveWVkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiBWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLmNoYW5nZURldGVjdGlvblJlZikgfHwgdGhpcy5jaGFuZ2VEZXRlY3Rpb25SZWZbJ2Rlc3Ryb3llZCddO1xuICB9XG59XG4iLCJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgSG9zdEJpbmRpbmcsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTbGlkZXJFbGVtZW50RGlyZWN0aXZlIH0gZnJvbSAnLi9zbGlkZXItZWxlbWVudC5kaXJlY3RpdmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbbmd4U2xpZGVySGFuZGxlXSdcbn0pXG5leHBvcnQgY2xhc3MgU2xpZGVySGFuZGxlRGlyZWN0aXZlIGV4dGVuZHMgU2xpZGVyRWxlbWVudERpcmVjdGl2ZSB7XG4gIEBIb3N0QmluZGluZygnY2xhc3Mubmd4LXNsaWRlci1hY3RpdmUnKVxuICBhY3RpdmU6IGJvb2xlYW4gPSBmYWxzZTtcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIucm9sZScpXG4gIHJvbGU6IHN0cmluZyA9ICcnO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci50YWJpbmRleCcpXG4gIHRhYmluZGV4OiBzdHJpbmcgPSAnJztcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS1vcmllbnRhdGlvbicpXG4gIGFyaWFPcmllbnRhdGlvbjogc3RyaW5nID0gJyc7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtbGFiZWwnKVxuICBhcmlhTGFiZWw6IHN0cmluZyA9ICcnO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLWxhYmVsbGVkYnknKVxuICBhcmlhTGFiZWxsZWRCeTogc3RyaW5nID0gJyc7XG5cbiAgQEhvc3RCaW5kaW5nKCdhdHRyLmFyaWEtdmFsdWVub3cnKVxuICBhcmlhVmFsdWVOb3c6IHN0cmluZyA9ICcnO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLXZhbHVldGV4dCcpXG4gIGFyaWFWYWx1ZVRleHQ6IHN0cmluZyA9ICcnO1xuXG4gIEBIb3N0QmluZGluZygnYXR0ci5hcmlhLXZhbHVlbWluJylcbiAgYXJpYVZhbHVlTWluOiBzdHJpbmcgPSAnJztcblxuICBASG9zdEJpbmRpbmcoJ2F0dHIuYXJpYS12YWx1ZW1heCcpXG4gIGFyaWFWYWx1ZU1heDogc3RyaW5nID0gJyc7XG5cbiAgZm9jdXMoKTogdm9pZCB7XG4gICAgdGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKGVsZW1SZWY6IEVsZW1lbnRSZWYsIHJlbmRlcmVyOiBSZW5kZXJlcjIsIGNoYW5nZURldGVjdGlvblJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcbiAgICBzdXBlcihlbGVtUmVmLCByZW5kZXJlciwgY2hhbmdlRGV0ZWN0aW9uUmVmKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBTbGlkZXJFbGVtZW50RGlyZWN0aXZlIH0gZnJvbSAnLi9zbGlkZXItZWxlbWVudC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVmFsdWVIZWxwZXIgfSBmcm9tICcuL3ZhbHVlLWhlbHBlcic7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tuZ3hTbGlkZXJMYWJlbF0nXG59KVxuZXhwb3J0IGNsYXNzIFNsaWRlckxhYmVsRGlyZWN0aXZlIGV4dGVuZHMgU2xpZGVyRWxlbWVudERpcmVjdGl2ZSB7XG4gIHByaXZhdGUgX3ZhbHVlOiBzdHJpbmcgPSBudWxsO1xuICBnZXQgdmFsdWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gIH1cblxuICBjb25zdHJ1Y3RvcihlbGVtUmVmOiBFbGVtZW50UmVmLCByZW5kZXJlcjogUmVuZGVyZXIyLCBjaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XG4gICAgc3VwZXIoZWxlbVJlZiwgcmVuZGVyZXIsIGNoYW5nZURldGVjdGlvblJlZik7XG4gIH1cblxuICBzZXRWYWx1ZSh2YWx1ZTogc3RyaW5nKTogdm9pZCB7XG4gICAgbGV0IHJlY2FsY3VsYXRlRGltZW5zaW9uOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBpZiAoIXRoaXMuYWx3YXlzSGlkZSAmJlxuICAgICAgICAoVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy52YWx1ZSkgfHxcbiAgICAgICAgIHRoaXMudmFsdWUubGVuZ3RoICE9PSB2YWx1ZS5sZW5ndGggfHxcbiAgICAgICAgICh0aGlzLnZhbHVlLmxlbmd0aCA+IDAgJiYgdGhpcy5kaW1lbnNpb24gPT09IDApKSkge1xuICAgICAgcmVjYWxjdWxhdGVEaW1lbnNpb24gPSB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5lbGVtUmVmLm5hdGl2ZUVsZW1lbnQuaW5uZXJIVE1MID0gdmFsdWU7XG5cbiAgICAvLyBVcGRhdGUgZGltZW5zaW9uIG9ubHkgd2hlbiBsZW5ndGggb2YgdGhlIGxhYmVsIGhhdmUgY2hhbmdlZFxuICAgIGlmIChyZWNhbGN1bGF0ZURpbWVuc2lvbikge1xuICAgICAgdGhpcy5jYWxjdWxhdGVEaW1lbnNpb24oKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBWaWV3Q2hpbGQsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBIb3N0QmluZGluZyxcbiAgSG9zdExpc3RlbmVyLFxuICBJbnB1dCxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyLFxuICBFdmVudEVtaXR0ZXIsXG4gIE91dHB1dCxcbiAgQ29udGVudENoaWxkLFxuICBUZW1wbGF0ZVJlZixcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXG4gIFNpbXBsZUNoYW5nZXMsXG4gIGZvcndhcmRSZWYsXG4gIE5nWm9uZVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xuXG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGRpc3RpbmN0VW50aWxDaGFuZ2VkLCBmaWx0ZXIsIHRocm90dGxlVGltZSwgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5pbXBvcnQgZGV0ZWN0UGFzc2l2ZUV2ZW50cyBmcm9tICdkZXRlY3QtcGFzc2l2ZS1ldmVudHMnO1xuXG5pbXBvcnQge1xuICBPcHRpb25zLFxuICBMYWJlbFR5cGUsXG4gIFZhbHVlVG9Qb3NpdGlvbkZ1bmN0aW9uLFxuICBQb3NpdGlvblRvVmFsdWVGdW5jdGlvbixcbiAgQ3VzdG9tU3RlcERlZmluaXRpb25cbn0gZnJvbSAnLi9vcHRpb25zJztcbmltcG9ydCB7IFBvaW50ZXJUeXBlIH0gZnJvbSAnLi9wb2ludGVyLXR5cGUnO1xuaW1wb3J0IHsgQ2hhbmdlQ29udGV4dCB9IGZyb20gJy4vY2hhbmdlLWNvbnRleHQnO1xuaW1wb3J0IHsgVmFsdWVIZWxwZXIgfSBmcm9tICcuL3ZhbHVlLWhlbHBlcic7XG5pbXBvcnQgeyBDb21wYXRpYmlsaXR5SGVscGVyIH0gZnJvbSAnLi9jb21wYXRpYmlsaXR5LWhlbHBlcic7XG5pbXBvcnQgeyBNYXRoSGVscGVyIH0gZnJvbSAnLi9tYXRoLWhlbHBlcic7XG5pbXBvcnQgeyBFdmVudExpc3RlbmVyIH0gZnJvbSAnLi9ldmVudC1saXN0ZW5lcic7XG5pbXBvcnQgeyBFdmVudExpc3RlbmVySGVscGVyIH0gZnJvbSAnLi9ldmVudC1saXN0ZW5lci1oZWxwZXInO1xuaW1wb3J0IHsgU2xpZGVyRWxlbWVudERpcmVjdGl2ZSB9IGZyb20gJy4vc2xpZGVyLWVsZW1lbnQuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNsaWRlckhhbmRsZURpcmVjdGl2ZSB9IGZyb20gJy4vc2xpZGVyLWhhbmRsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU2xpZGVyTGFiZWxEaXJlY3RpdmUgfSBmcm9tICcuL3NsaWRlci1sYWJlbC5kaXJlY3RpdmUnO1xuXG4vLyBEZWNsYXJhdGlvbiBmb3IgUmVzaXplT2JzZXJ2ZXIgYSBuZXcgQVBJIGF2YWlsYWJsZSBpbiBzb21lIG9mIG5ld2VzdCBicm93c2Vyczpcbi8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9SZXNpemVPYnNlcnZlclxuZGVjbGFyZSBjbGFzcyBSZXNpemVPYnNlcnZlciB7XG4gIGNvbnN0cnVjdG9yKGNhbGxiYWNrOiAoKSA9PiB2b2lkKTtcbiAgb2JzZXJ2ZSh0YXJnZXQ6IGFueSk6IHZvaWQ7XG4gIHVub2JzZXJ2ZSh0YXJnZXQ6IGFueSk6IHZvaWQ7XG4gIGRpc2Nvbm5lY3QoKTogdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIFRpY2sge1xuICBzZWxlY3RlZDogYm9vbGVhbiA9IGZhbHNlO1xuICBzdHlsZTogYW55ID0ge307XG4gIHRvb2x0aXA6IHN0cmluZyA9IG51bGw7XG4gIHRvb2x0aXBQbGFjZW1lbnQ6IHN0cmluZyA9IG51bGw7XG4gIHZhbHVlOiBzdHJpbmcgPSBudWxsO1xuICB2YWx1ZVRvb2x0aXA6IHN0cmluZyA9IG51bGw7XG4gIHZhbHVlVG9vbHRpcFBsYWNlbWVudDogc3RyaW5nID0gbnVsbDtcbiAgbGVnZW5kOiBzdHJpbmcgPSBudWxsO1xufVxuXG5jbGFzcyBEcmFnZ2luZyB7XG4gIGFjdGl2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICB2YWx1ZTogbnVtYmVyID0gMDtcbiAgZGlmZmVyZW5jZTogbnVtYmVyID0gMDtcbiAgcG9zaXRpb246IG51bWJlciA9IDA7XG4gIGxvd0xpbWl0OiBudW1iZXIgPSAwO1xuICBoaWdoTGltaXQ6IG51bWJlciA9IDA7XG59XG5cbmNsYXNzIE1vZGVsVmFsdWVzIHtcbiAgdmFsdWU6IG51bWJlcjtcbiAgaGlnaFZhbHVlOiBudW1iZXI7XG5cbiAgcHVibGljIHN0YXRpYyBjb21wYXJlKHg/OiBNb2RlbFZhbHVlcywgeT86IE1vZGVsVmFsdWVzKTogYm9vbGVhbiB7XG4gICAgaWYgKFZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHgpICYmIFZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh4KSAhPT0gVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQoeSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHgudmFsdWUgPT09IHkudmFsdWUgJiYgeC5oaWdoVmFsdWUgPT09IHkuaGlnaFZhbHVlO1xuICB9XG59XG5cbmNsYXNzIE1vZGVsQ2hhbmdlIGV4dGVuZHMgTW9kZWxWYWx1ZXMge1xuICAvLyBGbGFnIHVzZWQgdG8gYnktcGFzcyBkaXN0aW5jdFVudGlsQ2hhbmdlZCgpIGZpbHRlciBvbiBpbnB1dCB2YWx1ZXNcbiAgLy8gKHNvbWV0aW1lcyB0aGVyZSBpcyBhIG5lZWQgdG8gcGFzcyB2YWx1ZXMgdGhyb3VnaCBldmVuIHRob3VnaCB0aGUgbW9kZWwgdmFsdWVzIGhhdmUgbm90IGNoYW5nZWQpXG4gIGZvcmNlQ2hhbmdlOiBib29sZWFuO1xuXG4gIHB1YmxpYyBzdGF0aWMgY29tcGFyZSh4PzogTW9kZWxDaGFuZ2UsIHk/OiBNb2RlbENoYW5nZSk6IGJvb2xlYW4ge1xuICAgIGlmIChWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh4KSAmJiBWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh5KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQoeCkgIT09IFZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHkpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB4LnZhbHVlID09PSB5LnZhbHVlICYmXG4gICAgICAgICAgIHguaGlnaFZhbHVlID09PSB5LmhpZ2hWYWx1ZSAmJlxuICAgICAgICAgICB4LmZvcmNlQ2hhbmdlID09PSB5LmZvcmNlQ2hhbmdlO1xuICB9XG59XG5cbmNsYXNzIElucHV0TW9kZWxDaGFuZ2UgZXh0ZW5kcyBNb2RlbENoYW5nZSB7XG4gIGludGVybmFsQ2hhbmdlOiBib29sZWFuO1xufVxuXG5jbGFzcyBPdXRwdXRNb2RlbENoYW5nZSBleHRlbmRzIE1vZGVsQ2hhbmdlIHtcbiAgdXNlckV2ZW50SW5pdGlhdGVkOiBib29sZWFuO1xufVxuXG5jb25zdCBOR1hfU0xJREVSX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIC8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdXNlLWJlZm9yZS1kZWNsYXJlICovXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IFNsaWRlckNvbXBvbmVudCksXG4gIG11bHRpOiB0cnVlLFxufTtcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ3gtc2xpZGVyJyxcbiAgdGVtcGxhdGU6IGA8IS0tIC8vIDAgTGVmdCBzZWxlY3Rpb24gYmFyIG91dHNpZGUgdHdvIGhhbmRsZXMgLS0+XG48c3BhbiBuZ3hTbGlkZXJFbGVtZW50ICNsZWZ0T3V0ZXJTZWxlY3Rpb25CYXIgY2xhc3M9XCJuZ3gtc2xpZGVyLXNwYW4gbmd4LXNsaWRlci1iYXItd3JhcHBlciBuZ3gtc2xpZGVyLWxlZnQtb3V0LXNlbGVjdGlvblwiPlxuICA8c3BhbiBjbGFzcz1cIm5neC1zbGlkZXItc3BhbiBuZ3gtc2xpZGVyLWJhclwiPjwvc3Bhbj5cbjwvc3Bhbj5cbjwhLS0gLy8gMSBSaWdodCBzZWxlY3Rpb24gYmFyIG91dHNpZGUgdHdvIGhhbmRsZXMgLS0+XG48c3BhbiBuZ3hTbGlkZXJFbGVtZW50ICNyaWdodE91dGVyU2VsZWN0aW9uQmFyIGNsYXNzPVwibmd4LXNsaWRlci1zcGFuIG5neC1zbGlkZXItYmFyLXdyYXBwZXIgbmd4LXNsaWRlci1yaWdodC1vdXQtc2VsZWN0aW9uXCI+XG4gIDxzcGFuIGNsYXNzPVwibmd4LXNsaWRlci1zcGFuIG5neC1zbGlkZXItYmFyXCI+PC9zcGFuPlxuPC9zcGFuPlxuPCEtLSAvLyAyIFRoZSB3aG9sZSBzbGlkZXIgYmFyIC0tPlxuPHNwYW4gbmd4U2xpZGVyRWxlbWVudCAjZnVsbEJhciBbY2xhc3Mubmd4LXNsaWRlci10cmFuc3BhcmVudF09XCJmdWxsQmFyVHJhbnNwYXJlbnRDbGFzc1wiIGNsYXNzPVwibmd4LXNsaWRlci1zcGFuIG5neC1zbGlkZXItYmFyLXdyYXBwZXIgbmd4LXNsaWRlci1mdWxsLWJhclwiPlxuICA8c3BhbiBjbGFzcz1cIm5neC1zbGlkZXItc3BhbiBuZ3gtc2xpZGVyLWJhclwiPjwvc3Bhbj5cbjwvc3Bhbj5cbjwhLS0gLy8gMyBTZWxlY3Rpb24gYmFyIGJldHdlZW4gdHdvIGhhbmRsZXMgLS0+XG48c3BhbiBuZ3hTbGlkZXJFbGVtZW50ICNzZWxlY3Rpb25CYXIgW2NsYXNzLm5neC1zbGlkZXItZHJhZ2dhYmxlXT1cInNlbGVjdGlvbkJhckRyYWdnYWJsZUNsYXNzXCIgY2xhc3M9XCJuZ3gtc2xpZGVyLXNwYW4gbmd4LXNsaWRlci1iYXItd3JhcHBlciBuZ3gtc2xpZGVyLXNlbGVjdGlvbi1iYXJcIj5cbiAgPHNwYW4gY2xhc3M9XCJuZ3gtc2xpZGVyLXNwYW4gbmd4LXNsaWRlci1iYXIgbmd4LXNsaWRlci1zZWxlY3Rpb25cIiBbbmdTdHlsZV09XCJiYXJTdHlsZVwiPjwvc3Bhbj5cbjwvc3Bhbj5cbjwhLS0gLy8gNCBMb3cgc2xpZGVyIGhhbmRsZSAtLT5cbjxzcGFuIG5neFNsaWRlckhhbmRsZSAjbWluSGFuZGxlIGNsYXNzPVwibmd4LXNsaWRlci1zcGFuIG5neC1zbGlkZXItcG9pbnRlciBuZ3gtc2xpZGVyLXBvaW50ZXItbWluXCIgW25nU3R5bGVdPW1pblBvaW50ZXJTdHlsZT48L3NwYW4+XG48IS0tIC8vIDUgSGlnaCBzbGlkZXIgaGFuZGxlIC0tPlxuPHNwYW4gbmd4U2xpZGVySGFuZGxlICNtYXhIYW5kbGUgW3N0eWxlLmRpc3BsYXldPVwicmFuZ2UgPyAnaW5oZXJpdCcgOiAnbm9uZSdcIiBjbGFzcz1cIm5neC1zbGlkZXItc3BhbiBuZ3gtc2xpZGVyLXBvaW50ZXIgbmd4LXNsaWRlci1wb2ludGVyLW1heFwiIFtuZ1N0eWxlXT1tYXhQb2ludGVyU3R5bGU+PC9zcGFuPlxuPCEtLSAvLyA2IEZsb29yIGxhYmVsIC0tPlxuPHNwYW4gbmd4U2xpZGVyTGFiZWwgI2Zsb29yTGFiZWwgY2xhc3M9XCJuZ3gtc2xpZGVyLXNwYW4gbmd4LXNsaWRlci1idWJibGUgbmd4LXNsaWRlci1saW1pdCBuZ3gtc2xpZGVyLWZsb29yXCI+PC9zcGFuPlxuPCEtLSAvLyA3IENlaWxpbmcgbGFiZWwgLS0+XG48c3BhbiBuZ3hTbGlkZXJMYWJlbCAjY2VpbExhYmVsIGNsYXNzPVwibmd4LXNsaWRlci1zcGFuIG5neC1zbGlkZXItYnViYmxlIG5neC1zbGlkZXItbGltaXQgbmd4LXNsaWRlci1jZWlsXCI+PC9zcGFuPlxuPCEtLSAvLyA4IExhYmVsIGFib3ZlIHRoZSBsb3cgc2xpZGVyIGhhbmRsZSAtLT5cbjxzcGFuIG5neFNsaWRlckxhYmVsICNtaW5IYW5kbGVMYWJlbCBjbGFzcz1cIm5neC1zbGlkZXItc3BhbiBuZ3gtc2xpZGVyLWJ1YmJsZSBuZ3gtc2xpZGVyLW1vZGVsLXZhbHVlXCI+PC9zcGFuPlxuPCEtLSAvLyA5IExhYmVsIGFib3ZlIHRoZSBoaWdoIHNsaWRlciBoYW5kbGUgLS0+XG48c3BhbiBuZ3hTbGlkZXJMYWJlbCAjbWF4SGFuZGxlTGFiZWwgY2xhc3M9XCJuZ3gtc2xpZGVyLXNwYW4gbmd4LXNsaWRlci1idWJibGUgbmd4LXNsaWRlci1tb2RlbC1oaWdoXCI+PC9zcGFuPlxuPCEtLSAvLyAxMCBDb21iaW5lZCByYW5nZSBsYWJlbCB3aGVuIHRoZSBzbGlkZXIgaGFuZGxlcyBhcmUgY2xvc2UgZXguIDE1IC0gMTcgLS0+XG48c3BhbiBuZ3hTbGlkZXJMYWJlbCAjY29tYmluZWRMYWJlbCBjbGFzcz1cIm5neC1zbGlkZXItc3BhbiBuZ3gtc2xpZGVyLWJ1YmJsZSBuZ3gtc2xpZGVyLWNvbWJpbmVkXCI+PC9zcGFuPlxuPCEtLSAvLyAxMSBUaGUgdGlja3MgLS0+XG48c3BhbiBuZ3hTbGlkZXJFbGVtZW50ICN0aWNrc0VsZW1lbnQgW2hpZGRlbl09XCIhc2hvd1RpY2tzXCIgW2NsYXNzLm5neC1zbGlkZXItdGlja3MtdmFsdWVzLXVuZGVyXT1cInRpY2tzVW5kZXJWYWx1ZXNDbGFzc1wiIGNsYXNzPVwibmd4LXNsaWRlci10aWNrc1wiPlxuICA8c3BhbiAqbmdGb3I9XCJsZXQgdCBvZiB0aWNrc1wiIGNsYXNzPVwibmd4LXNsaWRlci10aWNrXCIgW25nQ2xhc3NdPVwieyduZ3gtc2xpZGVyLXNlbGVjdGVkJzogdC5zZWxlY3RlZH1cIiBbbmdTdHlsZV09XCJ0LnN0eWxlXCI+XG4gICAgPG5neC1zbGlkZXItdG9vbHRpcC13cmFwcGVyIFt0ZW1wbGF0ZV09XCJ0b29sdGlwVGVtcGxhdGVcIiBbdG9vbHRpcF09XCJ0LnRvb2x0aXBcIiBbcGxhY2VtZW50XT1cInQudG9vbHRpcFBsYWNlbWVudFwiPjwvbmd4LXNsaWRlci10b29sdGlwLXdyYXBwZXI+XG4gICAgPG5neC1zbGlkZXItdG9vbHRpcC13cmFwcGVyICpuZ0lmPVwidC52YWx1ZSAhPSBudWxsXCIgY2xhc3M9XCJuZ3gtc2xpZGVyLXNwYW4gbmd4LXNsaWRlci10aWNrLXZhbHVlXCJcbiAgICAgICAgW3RlbXBsYXRlXT1cInRvb2x0aXBUZW1wbGF0ZVwiIFt0b29sdGlwXT1cInQudmFsdWVUb29sdGlwXCIgW3BsYWNlbWVudF09XCJ0LnZhbHVlVG9vbHRpcFBsYWNlbWVudFwiIFtjb250ZW50XT1cInQudmFsdWVcIj48L25neC1zbGlkZXItdG9vbHRpcC13cmFwcGVyPlxuICAgIDxzcGFuICpuZ0lmPVwidC5sZWdlbmQgIT0gbnVsbFwiIGNsYXNzPVwibmd4LXNsaWRlci1zcGFuIG5neC1zbGlkZXItdGljay1sZWdlbmRcIiBbaW5uZXJIVE1MXT1cInQubGVnZW5kXCI+PC9zcGFuPlxuICA8L3NwYW4+XG48L3NwYW4+YCxcbiAgc3R5bGVzOiBbYDo6bmctZGVlcCAubmd4LXNsaWRlcntkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTtoZWlnaHQ6NHB4O3dpZHRoOjEwMCU7bWFyZ2luOjM1cHggMCAxNXB4O3ZlcnRpY2FsLWFsaWduOm1pZGRsZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3VzZXItc2VsZWN0Om5vbmU7dG91Y2gtYWN0aW9uOnBhbi15fTo6bmctZGVlcCAubmd4LXNsaWRlci53aXRoLWxlZ2VuZHttYXJnaW4tYm90dG9tOjQwcHh9OjpuZy1kZWVwIC5uZ3gtc2xpZGVyW2Rpc2FibGVkXXtjdXJzb3I6bm90LWFsbG93ZWR9OjpuZy1kZWVwIC5uZ3gtc2xpZGVyW2Rpc2FibGVkXSAubmd4LXNsaWRlci1wb2ludGVye2N1cnNvcjpub3QtYWxsb3dlZDtiYWNrZ3JvdW5kLWNvbG9yOiNkOGUwZjN9OjpuZy1kZWVwIC5uZ3gtc2xpZGVyW2Rpc2FibGVkXSAubmd4LXNsaWRlci1kcmFnZ2FibGV7Y3Vyc29yOm5vdC1hbGxvd2VkfTo6bmctZGVlcCAubmd4LXNsaWRlcltkaXNhYmxlZF0gLm5neC1zbGlkZXItc2VsZWN0aW9ue2JhY2tncm91bmQ6IzhiOTFhMn06Om5nLWRlZXAgLm5neC1zbGlkZXJbZGlzYWJsZWRdIC5uZ3gtc2xpZGVyLXRpY2t7Y3Vyc29yOm5vdC1hbGxvd2VkfTo6bmctZGVlcCAubmd4LXNsaWRlcltkaXNhYmxlZF0gLm5neC1zbGlkZXItdGljay5uZ3gtc2xpZGVyLXNlbGVjdGVke2JhY2tncm91bmQ6IzhiOTFhMn06Om5nLWRlZXAgLm5neC1zbGlkZXIgLm5neC1zbGlkZXItc3Bhbnt3aGl0ZS1zcGFjZTpub3dyYXA7cG9zaXRpb246YWJzb2x1dGU7ZGlzcGxheTppbmxpbmUtYmxvY2t9OjpuZy1kZWVwIC5uZ3gtc2xpZGVyIC5uZ3gtc2xpZGVyLWJhc2V7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtwYWRkaW5nOjB9OjpuZy1kZWVwIC5uZ3gtc2xpZGVyIC5uZ3gtc2xpZGVyLWJhci13cmFwcGVye2xlZnQ6MDtib3gtc2l6aW5nOmJvcmRlci1ib3g7bWFyZ2luLXRvcDotMTZweDtwYWRkaW5nLXRvcDoxNnB4O3dpZHRoOjEwMCU7aGVpZ2h0OjMycHg7ei1pbmRleDoxfTo6bmctZGVlcCAubmd4LXNsaWRlciAubmd4LXNsaWRlci1kcmFnZ2FibGV7Y3Vyc29yOm1vdmV9OjpuZy1kZWVwIC5uZ3gtc2xpZGVyIC5uZ3gtc2xpZGVyLWJhcntsZWZ0OjA7d2lkdGg6MTAwJTtoZWlnaHQ6NHB4O3otaW5kZXg6MTtiYWNrZ3JvdW5kOiNkOGUwZjM7Ym9yZGVyLXJhZGl1czoycHh9OjpuZy1kZWVwIC5uZ3gtc2xpZGVyIC5uZ3gtc2xpZGVyLWJhci13cmFwcGVyLm5neC1zbGlkZXItdHJhbnNwYXJlbnQgLm5neC1zbGlkZXItYmFye2JhY2tncm91bmQ6MCAwfTo6bmctZGVlcCAubmd4LXNsaWRlciAubmd4LXNsaWRlci1iYXItd3JhcHBlci5uZ3gtc2xpZGVyLWxlZnQtb3V0LXNlbGVjdGlvbiAubmd4LXNsaWRlci1iYXJ7YmFja2dyb3VuZDojZGYwMDJkfTo6bmctZGVlcCAubmd4LXNsaWRlciAubmd4LXNsaWRlci1iYXItd3JhcHBlci5uZ3gtc2xpZGVyLXJpZ2h0LW91dC1zZWxlY3Rpb24gLm5neC1zbGlkZXItYmFye2JhY2tncm91bmQ6IzAzYTY4OH06Om5nLWRlZXAgLm5neC1zbGlkZXIgLm5neC1zbGlkZXItc2VsZWN0aW9ue3otaW5kZXg6MjtiYWNrZ3JvdW5kOiMwZGI5ZjA7Ym9yZGVyLXJhZGl1czoycHh9OjpuZy1kZWVwIC5uZ3gtc2xpZGVyIC5uZ3gtc2xpZGVyLXBvaW50ZXJ7Y3Vyc29yOnBvaW50ZXI7d2lkdGg6MzJweDtoZWlnaHQ6MzJweDt0b3A6LTE0cHg7YmFja2dyb3VuZC1jb2xvcjojMGRiOWYwO3otaW5kZXg6Mztib3JkZXItcmFkaXVzOjE2cHh9OjpuZy1kZWVwIC5uZ3gtc2xpZGVyIC5uZ3gtc2xpZGVyLXBvaW50ZXI6YWZ0ZXJ7Y29udGVudDonJzt3aWR0aDo4cHg7aGVpZ2h0OjhweDtwb3NpdGlvbjphYnNvbHV0ZTt0b3A6MTJweDtsZWZ0OjEycHg7Ym9yZGVyLXJhZGl1czo0cHg7YmFja2dyb3VuZDojZmZmfTo6bmctZGVlcCAubmd4LXNsaWRlciAubmd4LXNsaWRlci1wb2ludGVyOmhvdmVyOmFmdGVye2JhY2tncm91bmQtY29sb3I6I2ZmZn06Om5nLWRlZXAgLm5neC1zbGlkZXIgLm5neC1zbGlkZXItcG9pbnRlci5uZ3gtc2xpZGVyLWFjdGl2ZXt6LWluZGV4OjR9OjpuZy1kZWVwIC5uZ3gtc2xpZGVyIC5uZ3gtc2xpZGVyLXBvaW50ZXIubmd4LXNsaWRlci1hY3RpdmU6YWZ0ZXJ7YmFja2dyb3VuZC1jb2xvcjojNDUxYWZmfTo6bmctZGVlcCAubmd4LXNsaWRlciAubmd4LXNsaWRlci1idWJibGV7Y3Vyc29yOmRlZmF1bHQ7Ym90dG9tOjE2cHg7cGFkZGluZzoxcHggM3B4O2NvbG9yOiM1NTYzN2Q7Zm9udC1zaXplOjE2cHh9OjpuZy1kZWVwIC5uZ3gtc2xpZGVyIC5uZ3gtc2xpZGVyLWJ1YmJsZS5uZ3gtc2xpZGVyLWxpbWl0e2NvbG9yOiM1NTYzN2R9OjpuZy1kZWVwIC5uZ3gtc2xpZGVyIC5uZ3gtc2xpZGVyLXRpY2tze2JveC1zaXppbmc6Ym9yZGVyLWJveDt3aWR0aDoxMDAlO2hlaWdodDowO3Bvc2l0aW9uOmFic29sdXRlO2xlZnQ6MDt0b3A6LTNweDttYXJnaW46MDt6LWluZGV4OjE7bGlzdC1zdHlsZTpub25lfTo6bmctZGVlcCAubmd4LXNsaWRlciAubmd4LXNsaWRlci10aWNrcy12YWx1ZXMtdW5kZXIgLm5neC1zbGlkZXItdGljay12YWx1ZXt0b3A6YXV0bztib3R0b206LTM2cHh9OjpuZy1kZWVwIC5uZ3gtc2xpZGVyIC5uZ3gtc2xpZGVyLXRpY2t7dGV4dC1hbGlnbjpjZW50ZXI7Y3Vyc29yOnBvaW50ZXI7d2lkdGg6MTBweDtoZWlnaHQ6MTBweDtiYWNrZ3JvdW5kOiNkOGUwZjM7Ym9yZGVyLXJhZGl1czo1MCU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO21hcmdpbi1sZWZ0OjExcHh9OjpuZy1kZWVwIC5uZ3gtc2xpZGVyIC5uZ3gtc2xpZGVyLXRpY2submd4LXNsaWRlci1zZWxlY3RlZHtiYWNrZ3JvdW5kOiMwZGI5ZjB9OjpuZy1kZWVwIC5uZ3gtc2xpZGVyIC5uZ3gtc2xpZGVyLXRpY2stdmFsdWV7cG9zaXRpb246YWJzb2x1dGU7dG9wOi0zNHB4Oy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLDApO3RyYW5zZm9ybTp0cmFuc2xhdGUoLTUwJSwwKX06Om5nLWRlZXAgLm5neC1zbGlkZXIgLm5neC1zbGlkZXItdGljay1sZWdlbmR7cG9zaXRpb246YWJzb2x1dGU7dG9wOjI0cHg7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKC01MCUsMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgtNTAlLDApO21heC13aWR0aDo1MHB4O3doaXRlLXNwYWNlOm5vcm1hbH06Om5nLWRlZXAgLm5neC1zbGlkZXIudmVydGljYWx7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6NHB4O2hlaWdodDoxMDAlO21hcmdpbjowIDIwcHg7cGFkZGluZzowO3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lO3RvdWNoLWFjdGlvbjpwYW4teH06Om5nLWRlZXAgLm5neC1zbGlkZXIudmVydGljYWwgLm5neC1zbGlkZXItYmFzZXt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3BhZGRpbmc6MH06Om5nLWRlZXAgLm5neC1zbGlkZXIudmVydGljYWwgLm5neC1zbGlkZXItYmFyLXdyYXBwZXJ7dG9wOmF1dG87bGVmdDowO21hcmdpbjowIDAgMCAtMTZweDtwYWRkaW5nOjAgMCAwIDE2cHg7aGVpZ2h0OjEwMCU7d2lkdGg6MzJweH06Om5nLWRlZXAgLm5neC1zbGlkZXIudmVydGljYWwgLm5neC1zbGlkZXItYmFye2JvdHRvbTowO2xlZnQ6YXV0bzt3aWR0aDo0cHg7aGVpZ2h0OjEwMCV9OjpuZy1kZWVwIC5uZ3gtc2xpZGVyLnZlcnRpY2FsIC5uZ3gtc2xpZGVyLXBvaW50ZXJ7bGVmdDotMTRweCFpbXBvcnRhbnQ7dG9wOmF1dG87Ym90dG9tOjB9OjpuZy1kZWVwIC5uZ3gtc2xpZGVyLnZlcnRpY2FsIC5uZ3gtc2xpZGVyLWJ1YmJsZXtsZWZ0OjE2cHghaW1wb3J0YW50O2JvdHRvbTowfTo6bmctZGVlcCAubmd4LXNsaWRlci52ZXJ0aWNhbCAubmd4LXNsaWRlci10aWNrc3toZWlnaHQ6MTAwJTt3aWR0aDowO2xlZnQ6LTNweDt0b3A6MDt6LWluZGV4OjF9OjpuZy1kZWVwIC5uZ3gtc2xpZGVyLnZlcnRpY2FsIC5uZ3gtc2xpZGVyLXRpY2t7dmVydGljYWwtYWxpZ246bWlkZGxlO21hcmdpbi1sZWZ0OmF1dG87bWFyZ2luLXRvcDoxMXB4fTo6bmctZGVlcCAubmd4LXNsaWRlci52ZXJ0aWNhbCAubmd4LXNsaWRlci10aWNrLXZhbHVle2xlZnQ6MjRweDt0b3A6YXV0bzstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUoMCwtMjglKTt0cmFuc2Zvcm06dHJhbnNsYXRlKDAsLTI4JSl9OjpuZy1kZWVwIC5uZ3gtc2xpZGVyLnZlcnRpY2FsIC5uZ3gtc2xpZGVyLXRpY2stbGVnZW5ke3RvcDphdXRvO3JpZ2h0OjI0cHg7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlKDAsLTI4JSk7dHJhbnNmb3JtOnRyYW5zbGF0ZSgwLC0yOCUpO21heC13aWR0aDpub25lO3doaXRlLXNwYWNlOm5vd3JhcH06Om5nLWRlZXAgLm5neC1zbGlkZXIudmVydGljYWwgLm5neC1zbGlkZXItdGlja3MtdmFsdWVzLXVuZGVyIC5uZ3gtc2xpZGVyLXRpY2stdmFsdWV7Ym90dG9tOmF1dG87bGVmdDphdXRvO3JpZ2h0OjI0cHh9OjpuZy1kZWVwIC5uZ3gtc2xpZGVyICp7dHJhbnNpdGlvbjpub25lfTo6bmctZGVlcCAubmd4LXNsaWRlci5hbmltYXRlIC5uZ3gtc2xpZGVyLWJhci13cmFwcGVye3RyYW5zaXRpb246LjNzIGxpbmVhcn06Om5nLWRlZXAgLm5neC1zbGlkZXIuYW5pbWF0ZSAubmd4LXNsaWRlci1zZWxlY3Rpb257dHJhbnNpdGlvbjpiYWNrZ3JvdW5kLWNvbG9yIC4zcyBsaW5lYXJ9OjpuZy1kZWVwIC5uZ3gtc2xpZGVyLmFuaW1hdGUgLm5neC1zbGlkZXItcG9pbnRlcnt0cmFuc2l0aW9uOi4zcyBsaW5lYXJ9OjpuZy1kZWVwIC5uZ3gtc2xpZGVyLmFuaW1hdGUgLm5neC1zbGlkZXItYnViYmxle3RyYW5zaXRpb246LjNzIGxpbmVhcn06Om5nLWRlZXAgLm5neC1zbGlkZXIuYW5pbWF0ZSAubmd4LXNsaWRlci1idWJibGUubmd4LXNsaWRlci1saW1pdHt0cmFuc2l0aW9uOm9wYWNpdHkgLjNzIGxpbmVhcn06Om5nLWRlZXAgLm5neC1zbGlkZXIuYW5pbWF0ZSAubmd4LXNsaWRlci1idWJibGUubmd4LXNsaWRlci1jb21iaW5lZHt0cmFuc2l0aW9uOm9wYWNpdHkgLjNzIGxpbmVhcn06Om5nLWRlZXAgLm5neC1zbGlkZXIuYW5pbWF0ZSAubmd4LXNsaWRlci10aWNre3RyYW5zaXRpb246YmFja2dyb3VuZC1jb2xvciAuM3MgbGluZWFyfWBdLFxuICBob3N0OiB7IGNsYXNzOiAnbmd4LXNsaWRlcicgfSxcbiAgcHJvdmlkZXJzOiBbTkdYX1NMSURFUl9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SXVxufSlcbmV4cG9ydCBjbGFzcyBTbGlkZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcywgT25EZXN0cm95LCBDb250cm9sVmFsdWVBY2Nlc3NvciB7XG4gIC8vIE1vZGVsIGZvciBsb3cgdmFsdWUgb2Ygc2xpZGVyLiBGb3Igc2ltcGxlIHNsaWRlciwgdGhpcyBpcyB0aGUgb25seSBpbnB1dC4gRm9yIHJhbmdlIHNsaWRlciwgdGhpcyBpcyB0aGUgbG93IHZhbHVlLlxuICBASW5wdXQoKVxuICBwdWJsaWMgdmFsdWU6IG51bWJlciA9IG51bGw7XG4gIC8vIE91dHB1dCBmb3IgbG93IHZhbHVlIHNsaWRlciB0byBzdXBwb3J0IHR3by13YXkgYmluZGluZ3NcbiAgQE91dHB1dCgpXG4gIHB1YmxpYyB2YWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLy8gTW9kZWwgZm9yIGhpZ2ggdmFsdWUgb2Ygc2xpZGVyLiBOb3QgdXNlZCBpbiBzaW1wbGUgc2xpZGVyLiBGb3IgcmFuZ2Ugc2xpZGVyLCB0aGlzIGlzIHRoZSBoaWdoIHZhbHVlLlxuICBASW5wdXQoKVxuICBwdWJsaWMgaGlnaFZhbHVlOiBudW1iZXIgPSBudWxsO1xuICAvLyBPdXRwdXQgZm9yIGhpZ2ggdmFsdWUgc2xpZGVyIHRvIHN1cHBvcnQgdHdvLXdheSBiaW5kaW5nc1xuICBAT3V0cHV0KClcbiAgcHVibGljIGhpZ2hWYWx1ZUNoYW5nZTogRXZlbnRFbWl0dGVyPG51bWJlcj4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgLy8gQW4gb2JqZWN0IHdpdGggYWxsIHRoZSBvdGhlciBvcHRpb25zIG9mIHRoZSBzbGlkZXIuXG4gIC8vIEVhY2ggb3B0aW9uIGNhbiBiZSB1cGRhdGVkIGF0IHJ1bnRpbWUgYW5kIHRoZSBzbGlkZXIgd2lsbCBhdXRvbWF0aWNhbGx5IGJlIHJlLXJlbmRlcmVkLlxuICBASW5wdXQoKVxuICBwdWJsaWMgb3B0aW9uczogT3B0aW9ucyA9IG5ldyBPcHRpb25zKCk7XG5cbiAgLy8gRXZlbnQgZW1pdHRlZCB3aGVuIHVzZXIgc3RhcnRzIGludGVyYWN0aW9uIHdpdGggdGhlIHNsaWRlclxuICBAT3V0cHV0KClcbiAgcHVibGljIHVzZXJDaGFuZ2VTdGFydDogRXZlbnRFbWl0dGVyPENoYW5nZUNvbnRleHQ+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIC8vIEV2ZW50IGVtaXR0ZWQgb24gZWFjaCBjaGFuZ2UgY29taW5nIGZyb20gdXNlciBpbnRlcmFjdGlvblxuICBAT3V0cHV0KClcbiAgcHVibGljIHVzZXJDaGFuZ2U6IEV2ZW50RW1pdHRlcjxDaGFuZ2VDb250ZXh0PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvLyBFdmVudCBlbWl0dGVkIHdoZW4gdXNlciBmaW5pc2hlcyBpbnRlcmFjdGlvbiB3aXRoIHRoZSBzbGlkZXJcbiAgQE91dHB1dCgpXG4gIHB1YmxpYyB1c2VyQ2hhbmdlRW5kOiBFdmVudEVtaXR0ZXI8Q2hhbmdlQ29udGV4dD4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG5cbiAgcHJpdmF0ZSBtYW51YWxSZWZyZXNoU3Vic2NyaXB0aW9uOiBhbnk7XG4gIC8vIElucHV0IGV2ZW50IHRoYXQgdHJpZ2dlcnMgc2xpZGVyIHJlZnJlc2ggKHJlLXBvc2l0aW9uaW5nIG9mIHNsaWRlciBlbGVtZW50cylcbiAgQElucHV0KCkgc2V0IG1hbnVhbFJlZnJlc2gobWFudWFsUmVmcmVzaDogRXZlbnRFbWl0dGVyPHZvaWQ+KSB7XG4gICAgdGhpcy51bnN1YnNjcmliZU1hbnVhbFJlZnJlc2goKTtcblxuICAgIHRoaXMubWFudWFsUmVmcmVzaFN1YnNjcmlwdGlvbiA9IG1hbnVhbFJlZnJlc2guc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5jYWxjdWxhdGVWaWV3RGltZW5zaW9uc0FuZERldGVjdENoYW5nZXMoKSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHRyaWdnZXJGb2N1c1N1YnNjcmlwdGlvbjogYW55O1xuICAvLyBJbnB1dCBldmVudCB0aGF0IHRyaWdnZXJzIHNldHRpbmcgZm9jdXMgb24gZ2l2ZW4gc2xpZGVyIGhhbmRsZVxuICBASW5wdXQoKSBzZXQgdHJpZ2dlckZvY3VzKHRyaWdnZXJGb2N1czogRXZlbnRFbWl0dGVyPHZvaWQ+KSB7XG4gICAgdGhpcy51bnN1YnNjcmliZVRyaWdnZXJGb2N1cygpO1xuXG4gICAgdGhpcy50cmlnZ2VyRm9jdXNTdWJzY3JpcHRpb24gPSB0cmlnZ2VyRm9jdXMuc3Vic2NyaWJlKChwb2ludGVyVHlwZTogUG9pbnRlclR5cGUpID0+IHtcbiAgICAgIHRoaXMuZm9jdXNQb2ludGVyKHBvaW50ZXJUeXBlKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFNsaWRlciB0eXBlLCB0cnVlIG1lYW5zIHJhbmdlIHNsaWRlclxuICBwdWJsaWMgZ2V0IHJhbmdlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAhVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy52YWx1ZSkgJiYgIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuaGlnaFZhbHVlKTtcbiAgfVxuXG4gIC8vIFNldCB0byB0cnVlIGlmIGluaXQgbWV0aG9kIGFscmVhZHkgZXhlY3V0ZWRcbiAgcHJpdmF0ZSBpbml0SGFzUnVuOiBib29sZWFuID0gZmFsc2U7XG5cbiAgLy8gQ2hhbmdlcyBpbiBtb2RlbCBpbnB1dHMgYXJlIHBhc3NlZCB0aHJvdWdoIHRoaXMgc3ViamVjdFxuICAvLyBUaGVzZSBhcmUgYWxsIGNoYW5nZXMgY29taW5nIGluIGZyb20gb3V0c2lkZSB0aGUgY29tcG9uZW50IHRocm91Z2ggaW5wdXQgYmluZGluZ3Mgb3IgcmVhY3RpdmUgZm9ybSBpbnB1dHNcbiAgcHJpdmF0ZSBpbnB1dE1vZGVsQ2hhbmdlU3ViamVjdDogU3ViamVjdDxJbnB1dE1vZGVsQ2hhbmdlPiA9IG5ldyBTdWJqZWN0PElucHV0TW9kZWxDaGFuZ2U+KCk7XG4gIHByaXZhdGUgaW5wdXRNb2RlbENoYW5nZVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uID0gbnVsbDtcblxuICAvLyBDaGFuZ2VzIHRvIG1vZGVsIG91dHB1dHMgYXJlIHBhc3NlZCB0aHJvdWdoIHRoaXMgc3ViamVjdFxuICAvLyBUaGVzZSBhcmUgYWxsIGNoYW5nZXMgdGhhdCBuZWVkIHRvIGJlIGNvbW11bmljYXRlZCB0byBvdXRwdXQgZW1pdHRlcnMgYW5kIHJlZ2lzdGVyZWQgY2FsbGJhY2tzXG4gIHByaXZhdGUgb3V0cHV0TW9kZWxDaGFuZ2VTdWJqZWN0OiBTdWJqZWN0PE91dHB1dE1vZGVsQ2hhbmdlPiA9IG5ldyBTdWJqZWN0PE91dHB1dE1vZGVsQ2hhbmdlPigpO1xuICBwcml2YXRlIG91dHB1dE1vZGVsQ2hhbmdlU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb24gPSBudWxsO1xuXG4gIC8vIExvdyB2YWx1ZSBzeW5jZWQgdG8gbW9kZWwgbG93IHZhbHVlXG4gIHByaXZhdGUgdmlld0xvd1ZhbHVlOiBudW1iZXIgPSBudWxsO1xuICAvLyBIaWdoIHZhbHVlIHN5bmNlZCB0byBtb2RlbCBoaWdoIHZhbHVlXG4gIHByaXZhdGUgdmlld0hpZ2hWYWx1ZTogbnVtYmVyID0gbnVsbDtcbiAgLy8gT3B0aW9ucyBzeW5jZWQgdG8gbW9kZWwgb3B0aW9ucywgYmFzZWQgb24gZGVmYXVsdHNcbiAgcHJpdmF0ZSB2aWV3T3B0aW9uczogT3B0aW9ucyA9IG5ldyBPcHRpb25zKCk7XG5cbiAgLy8gSGFsZiBvZiB0aGUgd2lkdGggb3IgaGVpZ2h0IG9mIHRoZSBzbGlkZXIgaGFuZGxlc1xuICBwcml2YXRlIGhhbmRsZUhhbGZEaW1lbnNpb246IG51bWJlciA9IDA7XG4gIC8vIE1heGltdW0gcG9zaXRpb24gdGhlIHNsaWRlciBoYW5kbGUgY2FuIGhhdmVcbiAgcHJpdmF0ZSBtYXhIYW5kbGVQb3NpdGlvbjogbnVtYmVyID0gMDtcblxuICAvLyBXaGljaCBoYW5kbGUgaXMgY3VycmVudGx5IHRyYWNrZWQgZm9yIG1vdmUgZXZlbnRzXG4gIHByaXZhdGUgY3VycmVudFRyYWNraW5nUG9pbnRlcjogUG9pbnRlclR5cGUgPSBudWxsO1xuICAvLyBJbnRlcm5hbCB2YXJpYWJsZSB0byBrZWVwIHRyYWNrIG9mIHRoZSBmb2N1cyBlbGVtZW50XG4gIHByaXZhdGUgY3VycmVudEZvY3VzUG9pbnRlcjogUG9pbnRlclR5cGUgPSBudWxsO1xuICAvLyBVc2VkIHRvIGNhbGwgb25TdGFydCBvbiB0aGUgZmlyc3Qga2V5ZG93biBldmVudFxuICBwcml2YXRlIGZpcnN0S2V5RG93bjogYm9vbGVhbiA9IGZhbHNlO1xuICAvLyBDdXJyZW50IHRvdWNoIGlkIG9mIHRvdWNoIGV2ZW50IGJlaW5nIGhhbmRsZWRcbiAgcHJpdmF0ZSB0b3VjaElkOiBudW1iZXIgPSBudWxsO1xuICAvLyBWYWx1ZXMgcmVjb3JkZWQgd2hlbiBmaXJzdCBkcmFnZ2luZyB0aGUgYmFyXG4gIHByaXZhdGUgZHJhZ2dpbmc6IERyYWdnaW5nID0gbmV3IERyYWdnaW5nKCk7XG5cbiAgLyogU2xpZGVyIERPTSBlbGVtZW50cyAqL1xuXG4gIC8vIExlZnQgc2VsZWN0aW9uIGJhciBvdXRzaWRlIHR3byBoYW5kbGVzXG4gIEBWaWV3Q2hpbGQoJ2xlZnRPdXRlclNlbGVjdGlvbkJhcicsIHtyZWFkOiBTbGlkZXJFbGVtZW50RGlyZWN0aXZlfSlcbiAgcHJpdmF0ZSBsZWZ0T3V0ZXJTZWxlY3Rpb25CYXJFbGVtZW50OiBTbGlkZXJFbGVtZW50RGlyZWN0aXZlO1xuXG4gIC8vIFJpZ2h0IHNlbGVjdGlvbiBiYXIgb3V0c2lkZSB0d28gaGFuZGxlc1xuICBAVmlld0NoaWxkKCdyaWdodE91dGVyU2VsZWN0aW9uQmFyJywge3JlYWQ6IFNsaWRlckVsZW1lbnREaXJlY3RpdmV9KVxuICBwcml2YXRlIHJpZ2h0T3V0ZXJTZWxlY3Rpb25CYXJFbGVtZW50OiBTbGlkZXJFbGVtZW50RGlyZWN0aXZlO1xuXG4gIC8vIFRoZSB3aG9sZSBzbGlkZXIgYmFyXG4gIEBWaWV3Q2hpbGQoJ2Z1bGxCYXInLCB7cmVhZDogU2xpZGVyRWxlbWVudERpcmVjdGl2ZX0pXG4gIHByaXZhdGUgZnVsbEJhckVsZW1lbnQ6IFNsaWRlckVsZW1lbnREaXJlY3RpdmU7XG5cbiAgLy8gSGlnaGxpZ2h0IGJldHdlZW4gdHdvIGhhbmRsZXNcbiAgQFZpZXdDaGlsZCgnc2VsZWN0aW9uQmFyJywge3JlYWQ6IFNsaWRlckVsZW1lbnREaXJlY3RpdmV9KVxuICBwcml2YXRlIHNlbGVjdGlvbkJhckVsZW1lbnQ6IFNsaWRlckVsZW1lbnREaXJlY3RpdmU7XG5cbiAgLy8gTGVmdCBzbGlkZXIgaGFuZGxlXG4gIEBWaWV3Q2hpbGQoJ21pbkhhbmRsZScsIHtyZWFkOiBTbGlkZXJIYW5kbGVEaXJlY3RpdmV9KVxuICBwcml2YXRlIG1pbkhhbmRsZUVsZW1lbnQ6IFNsaWRlckhhbmRsZURpcmVjdGl2ZTtcblxuICAvLyBSaWdodCBzbGlkZXIgaGFuZGxlXG4gIEBWaWV3Q2hpbGQoJ21heEhhbmRsZScsIHtyZWFkOiBTbGlkZXJIYW5kbGVEaXJlY3RpdmV9KVxuICBwcml2YXRlIG1heEhhbmRsZUVsZW1lbnQ6IFNsaWRlckhhbmRsZURpcmVjdGl2ZTtcblxuICAvLyBGbG9vciBsYWJlbFxuICBAVmlld0NoaWxkKCdmbG9vckxhYmVsJywge3JlYWQ6IFNsaWRlckxhYmVsRGlyZWN0aXZlfSlcbiAgcHJpdmF0ZSBmbG9vckxhYmVsRWxlbWVudDogU2xpZGVyTGFiZWxEaXJlY3RpdmU7XG5cbiAgLy8gQ2VpbGluZyBsYWJlbFxuICBAVmlld0NoaWxkKCdjZWlsTGFiZWwnLCB7cmVhZDogU2xpZGVyTGFiZWxEaXJlY3RpdmV9KVxuICBwcml2YXRlIGNlaWxMYWJlbEVsZW1lbnQ6IFNsaWRlckxhYmVsRGlyZWN0aXZlO1xuXG4gIC8vIExhYmVsIGFib3ZlIHRoZSBsb3cgdmFsdWVcbiAgQFZpZXdDaGlsZCgnbWluSGFuZGxlTGFiZWwnLCB7cmVhZDogU2xpZGVyTGFiZWxEaXJlY3RpdmV9KVxuICBwcml2YXRlIG1pbkhhbmRsZUxhYmVsRWxlbWVudDogU2xpZGVyTGFiZWxEaXJlY3RpdmU7XG5cbiAgLy8gTGFiZWwgYWJvdmUgdGhlIGhpZ2ggdmFsdWVcbiAgQFZpZXdDaGlsZCgnbWF4SGFuZGxlTGFiZWwnLCB7cmVhZDogU2xpZGVyTGFiZWxEaXJlY3RpdmV9KVxuICBwcml2YXRlIG1heEhhbmRsZUxhYmVsRWxlbWVudDogU2xpZGVyTGFiZWxEaXJlY3RpdmU7XG5cbiAgLy8gQ29tYmluZWQgbGFiZWxcbiAgQFZpZXdDaGlsZCgnY29tYmluZWRMYWJlbCcsIHtyZWFkOiBTbGlkZXJMYWJlbERpcmVjdGl2ZX0pXG4gIHByaXZhdGUgY29tYmluZWRMYWJlbEVsZW1lbnQ6IFNsaWRlckxhYmVsRGlyZWN0aXZlO1xuXG4gIC8vIFRoZSB0aWNrc1xuICBAVmlld0NoaWxkKCd0aWNrc0VsZW1lbnQnLCB7cmVhZDogU2xpZGVyRWxlbWVudERpcmVjdGl2ZX0pXG4gIHByaXZhdGUgdGlja3NFbGVtZW50OiBTbGlkZXJFbGVtZW50RGlyZWN0aXZlO1xuXG4gIC8vIE9wdGlvbmFsIGN1c3RvbSB0ZW1wbGF0ZSBmb3IgZGlzcGxheWluZyB0b29sdGlwc1xuICBAQ29udGVudENoaWxkKCd0b29sdGlwVGVtcGxhdGUnKVxuICBwdWJsaWMgdG9vbHRpcFRlbXBsYXRlOiBUZW1wbGF0ZVJlZjxhbnk+O1xuXG4gIC8vIEhvc3QgZWxlbWVudCBjbGFzcyBiaW5kaW5nc1xuICBASG9zdEJpbmRpbmcoJ2NsYXNzLnZlcnRpY2FsJylcbiAgcHVibGljIHNsaWRlckVsZW1lbnRWZXJ0aWNhbENsYXNzOiBib29sZWFuID0gZmFsc2U7XG4gIEBIb3N0QmluZGluZygnY2xhc3MuYW5pbWF0ZScpXG4gIHB1YmxpYyBzbGlkZXJFbGVtZW50QW5pbWF0ZUNsYXNzOiBib29sZWFuID0gZmFsc2U7XG4gIEBIb3N0QmluZGluZygnY2xhc3Mud2l0aC1sZWdlbmQnKVxuICBwdWJsaWMgc2xpZGVyRWxlbWVudFdpdGhMZWdlbmRDbGFzczogYm9vbGVhbiA9IGZhbHNlO1xuICBASG9zdEJpbmRpbmcoJ2F0dHIuZGlzYWJsZWQnKVxuICBwdWJsaWMgc2xpZGVyRWxlbWVudERpc2FibGVkQXR0cjogc3RyaW5nID0gbnVsbDtcblxuICAvLyBDU1Mgc3R5bGVzIGFuZCBjbGFzcyBmbGFnc1xuICBwdWJsaWMgYmFyU3R5bGU6IGFueSA9IHt9O1xuICBwdWJsaWMgbWluUG9pbnRlclN0eWxlOiBhbnkgPSB7fTtcbiAgcHVibGljIG1heFBvaW50ZXJTdHlsZTogYW55ID0ge307XG4gIHB1YmxpYyBmdWxsQmFyVHJhbnNwYXJlbnRDbGFzczogYm9vbGVhbiA9IGZhbHNlO1xuICBwdWJsaWMgc2VsZWN0aW9uQmFyRHJhZ2dhYmxlQ2xhc3M6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHVibGljIHRpY2tzVW5kZXJWYWx1ZXNDbGFzczogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8vIFdoZXRoZXIgdG8gc2hvdy9oaWRlIHRpY2tzXG4gIHB1YmxpYyBnZXQgc2hvd1RpY2tzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnZpZXdPcHRpb25zLnNob3dUaWNrcztcbiAgfVxuXG4gIC8qIElmIHRpY2tTdGVwIGlzIHNldCBvciB0aWNrc0FycmF5IGlzIHNwZWNpZmllZC5cbiAgICAgSW4gdGhpcyBjYXNlLCB0aWNrcyB2YWx1ZXMgc2hvdWxkIGJlIGRpc3BsYXllZCBiZWxvdyB0aGUgc2xpZGVyLiAqL1xuICBwcml2YXRlIGludGVybWVkaWF0ZVRpY2tzOiBib29sZWFuID0gZmFsc2U7XG4gIC8vIFRpY2tzIGFycmF5IGFzIGRpc3BsYXllZCBpbiB2aWV3XG4gIHB1YmxpYyB0aWNrczogVGlja1tdID0gW107XG5cbiAgLy8gRXZlbnQgbGlzdGVuZXJzXG4gIHByaXZhdGUgZXZlbnRMaXN0ZW5lckhlbHBlcjogRXZlbnRMaXN0ZW5lckhlbHBlciA9IG51bGw7XG4gIHByaXZhdGUgb25Nb3ZlRXZlbnRMaXN0ZW5lcjogRXZlbnRMaXN0ZW5lciA9IG51bGw7XG4gIHByaXZhdGUgb25FbmRFdmVudExpc3RlbmVyOiBFdmVudExpc3RlbmVyID0gbnVsbDtcbiAgLy8gV2hldGhlciBjdXJyZW50bHkgbW92aW5nIHRoZSBzbGlkZXIgKGJldHdlZW4gb25TdGFydCgpIGFuZCBvbkVuZCgpKVxuICBwcml2YXRlIG1vdmluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIC8vIE9ic2VydmVyIGZvciBzbGlkZXIgZWxlbWVudCByZXNpemUgZXZlbnRzXG4gIHByaXZhdGUgcmVzaXplT2JzZXJ2ZXI6IFJlc2l6ZU9ic2VydmVyID0gbnVsbDtcblxuICAvLyBDYWxsYmFja3MgZm9yIHJlYWN0aXZlIGZvcm1zIHN1cHBvcnRcbiAgcHJpdmF0ZSBvblRvdWNoZWRDYWxsYmFjazogKHZhbHVlOiBhbnkpID0+IHZvaWQgPSBudWxsO1xuICBwcml2YXRlIG9uQ2hhbmdlQ2FsbGJhY2s6ICh2YWx1ZTogYW55KSA9PiB2b2lkID0gbnVsbDtcblxuXG4gIHB1YmxpYyBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsXG4gICAgICAgICAgICAgIHByaXZhdGUgZWxlbWVudFJlZjogRWxlbWVudFJlZixcbiAgICAgICAgICAgICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwcml2YXRlIHpvbmU6IE5nWm9uZSkge1xuICAgIHRoaXMuZXZlbnRMaXN0ZW5lckhlbHBlciA9IG5ldyBFdmVudExpc3RlbmVySGVscGVyKHRoaXMucmVuZGVyZXIpO1xuICB9XG5cbiAgLy8gT25Jbml0IGludGVyZmFjZVxuICBwdWJsaWMgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy52aWV3T3B0aW9ucyA9IG5ldyBPcHRpb25zKCk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLnZpZXdPcHRpb25zLCB0aGlzLm9wdGlvbnMpO1xuXG4gICAgLy8gV2UgbmVlZCB0byBydW4gdGhlc2UgdHdvIHRoaW5ncyBmaXJzdCwgYmVmb3JlIHRoZSByZXN0IG9mIHRoZSBpbml0IGluIG5nQWZ0ZXJWaWV3SW5pdCgpLFxuICAgIC8vIGJlY2F1c2UgdGhlc2UgdHdvIHNldHRpbmdzIGFyZSBzZXQgdGhyb3VnaCBASG9zdEJpbmRpbmcgYW5kIEFuZ3VsYXIgY2hhbmdlIGRldGVjdGlvblxuICAgIC8vIG1lY2hhbmlzbSBkb2Vzbid0IGxpa2UgdGhlbSBjaGFuZ2luZyBpbiBuZ0FmdGVyVmlld0luaXQoKVxuICAgIHRoaXMudXBkYXRlRGlzYWJsZWRTdGF0ZSgpO1xuICAgIHRoaXMudXBkYXRlVmVydGljYWxTdGF0ZSgpO1xuICB9XG5cbiAgLy8gQWZ0ZXJWaWV3SW5pdCBpbnRlcmZhY2VcbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLmFwcGx5T3B0aW9ucygpO1xuXG4gICAgdGhpcy5zdWJzY3JpYmVJbnB1dE1vZGVsQ2hhbmdlU3ViamVjdCh0aGlzLnZpZXdPcHRpb25zLmlucHV0RXZlbnRzSW50ZXJ2YWwpO1xuICAgIHRoaXMuc3Vic2NyaWJlT3V0cHV0TW9kZWxDaGFuZ2VTdWJqZWN0KHRoaXMudmlld09wdGlvbnMub3V0cHV0RXZlbnRzSW50ZXJ2YWwpO1xuXG4gICAgLy8gT25jZSB3ZSBhcHBseSBvcHRpb25zLCB3ZSBuZWVkIHRvIG5vcm1hbGlzZSBtb2RlbCB2YWx1ZXMgZm9yIHRoZSBmaXJzdCB0aW1lXG4gICAgdGhpcy5yZW5vcm1hbGlzZU1vZGVsVmFsdWVzKCk7XG5cbiAgICB0aGlzLnZpZXdMb3dWYWx1ZSA9IHRoaXMubW9kZWxWYWx1ZVRvVmlld1ZhbHVlKHRoaXMudmFsdWUpO1xuICAgIGlmICh0aGlzLnJhbmdlKSB7XG4gICAgICB0aGlzLnZpZXdIaWdoVmFsdWUgPSB0aGlzLm1vZGVsVmFsdWVUb1ZpZXdWYWx1ZSh0aGlzLmhpZ2hWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmlld0hpZ2hWYWx1ZSA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVWZXJ0aWNhbFN0YXRlKCk7IC8vIG5lZWQgdG8gcnVuIHRoaXMgYWdhaW4gdG8gY292ZXIgY2hhbmdlcyB0byBzbGlkZXIgZWxlbWVudHNcbiAgICB0aGlzLm1hbmFnZUVsZW1lbnRzU3R5bGUoKTtcbiAgICB0aGlzLnVwZGF0ZURpc2FibGVkU3RhdGUoKTtcbiAgICB0aGlzLmNhbGN1bGF0ZVZpZXdEaW1lbnNpb25zKCk7XG4gICAgdGhpcy5hZGRBY2Nlc3NpYmlsaXR5KCk7XG4gICAgdGhpcy51cGRhdGVDZWlsTGFiZWwoKTtcbiAgICB0aGlzLnVwZGF0ZUZsb29yTGFiZWwoKTtcbiAgICB0aGlzLmluaXRIYW5kbGVzKCk7XG4gICAgdGhpcy5tYW5hZ2VFdmVudHNCaW5kaW5ncygpO1xuXG4gICAgdGhpcy5zdWJzY3JpYmVSZXNpemVPYnNlcnZlcigpO1xuXG4gICAgdGhpcy5pbml0SGFzUnVuID0gdHJ1ZTtcblxuICAgIC8vIFJ1biBjaGFuZ2UgZGV0ZWN0aW9uIG1hbnVhbGx5IHRvIHJlc29sdmUgc29tZSBpc3N1ZXMgd2hlbiBpbml0IHByb2NlZHVyZSBjaGFuZ2VzIHZhbHVlcyB1c2VkIGluIHRoZSB2aWV3XG4gICAgaWYgKCF0aGlzLmlzUmVmRGVzdHJveWVkKCkpIHtcbiAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcbiAgICB9XG4gIH1cblxuICAvLyBPbkNoYW5nZXMgaW50ZXJmYWNlXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XG4gICAgLy8gQWx3YXlzIGFwcGx5IG9wdGlvbnMgZmlyc3RcbiAgICBpZiAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKGNoYW5nZXMub3B0aW9ucykpIHtcbiAgICAgIHRoaXMub25DaGFuZ2VPcHRpb25zKCk7XG4gICAgfVxuXG4gICAgLy8gVGhlbiB2YWx1ZSBjaGFuZ2VzXG4gICAgaWYgKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZChjaGFuZ2VzLnZhbHVlKSB8fFxuICAgICAgICAhVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQoY2hhbmdlcy5oaWdoVmFsdWUpKSB7XG4gICAgICB0aGlzLmlucHV0TW9kZWxDaGFuZ2VTdWJqZWN0Lm5leHQoe1xuICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgaGlnaFZhbHVlOiB0aGlzLmhpZ2hWYWx1ZSxcbiAgICAgICAgZm9yY2VDaGFuZ2U6IGZhbHNlLFxuICAgICAgICBpbnRlcm5hbENoYW5nZTogZmFsc2VcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIE9uRGVzdHJveSBpbnRlcmZhY2VcbiAgcHVibGljIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIHRoaXMudW5iaW5kRXZlbnRzKCk7XG5cbiAgICB0aGlzLnVuc3Vic2NyaWJlUmVzaXplT2JzZXJ2ZXIoKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlSW5wdXRNb2RlbENoYW5nZVN1YmplY3QoKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlT3V0cHV0TW9kZWxDaGFuZ2VTdWJqZWN0KCk7XG4gICAgdGhpcy51bnN1YnNjcmliZU1hbnVhbFJlZnJlc2goKTtcbiAgICB0aGlzLnVuc3Vic2NyaWJlVHJpZ2dlckZvY3VzKCk7XG4gIH1cblxuICAvLyBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2VcbiAgcHVibGljIHdyaXRlVmFsdWUob2JqOiBhbnkpOiB2b2lkIHtcbiAgICBpZiAob2JqIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBvYmpbMF07XG4gICAgICB0aGlzLmhpZ2hWYWx1ZSA9IG9ialsxXTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52YWx1ZSA9IG9iajtcbiAgICB9XG5cbiAgICAvLyBuZ09uQ2hhbmdlcygpIGlzIG5vdCBjYWxsZWQgaW4gdGhpcyBpbnN0YW5jZSwgc28gd2UgbmVlZCB0byBjb21tdW5pY2F0ZSB0aGUgY2hhbmdlIG1hbnVhbGx5XG4gICAgdGhpcy5pbnB1dE1vZGVsQ2hhbmdlU3ViamVjdC5uZXh0KHtcbiAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgaGlnaFZhbHVlOiB0aGlzLmhpZ2hWYWx1ZSxcbiAgICAgIGZvcmNlQ2hhbmdlOiBmYWxzZSxcbiAgICAgIGludGVybmFsQ2hhbmdlOiBmYWxzZVxuICAgIH0pO1xuICB9XG5cbiAgLy8gQ29udHJvbFZhbHVlQWNjZXNzb3IgaW50ZXJmYWNlXG4gIHB1YmxpYyByZWdpc3Rlck9uQ2hhbmdlKG9uQ2hhbmdlQ2FsbGJhY2s6IGFueSk6IHZvaWQge1xuICAgIHRoaXMub25DaGFuZ2VDYWxsYmFjayA9IG9uQ2hhbmdlQ2FsbGJhY2s7XG4gIH1cblxuICAvLyBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2VcbiAgcHVibGljIHJlZ2lzdGVyT25Ub3VjaGVkKG9uVG91Y2hlZENhbGxiYWNrOiBhbnkpOiB2b2lkIHtcbiAgICB0aGlzLm9uVG91Y2hlZENhbGxiYWNrID0gb25Ub3VjaGVkQ2FsbGJhY2s7XG4gIH1cblxuICAvLyBDb250cm9sVmFsdWVBY2Nlc3NvciBpbnRlcmZhY2VcbiAgcHVibGljIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMudmlld09wdGlvbnMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICAgIHRoaXMudXBkYXRlRGlzYWJsZWRTdGF0ZSgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnJlc2l6ZScsIFsnJGV2ZW50J10pXG4gIHB1YmxpYyBvblJlc2l6ZShldmVudDogYW55KTogdm9pZCB7XG4gICAgdGhpcy5jYWxjdWxhdGVWaWV3RGltZW5zaW9uc0FuZERldGVjdENoYW5nZXMoKTtcbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlSW5wdXRNb2RlbENoYW5nZVN1YmplY3QoaW50ZXJ2YWw/OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmlucHV0TW9kZWxDaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLmlucHV0TW9kZWxDaGFuZ2VTdWJqZWN0XG4gICAgLnBpcGUoXG4gICAgICBkaXN0aW5jdFVudGlsQ2hhbmdlZChNb2RlbENoYW5nZS5jb21wYXJlKSxcbiAgICAgIC8vIEhhY2sgdG8gcmVzZXQgdGhlIHN0YXR1cyBvZiB0aGUgZGlzdGluY3RVbnRpbENoYW5nZWQoKSAtIGlmIGEgXCJmYWtlXCIgZXZlbnQgY29tZXMgdGhyb3VnaCB3aXRoIGZvcmNlQ2hhbmdlPXRydWUsXG4gICAgICAvLyB3ZSBmb3JjZWZ1bGx5IGJ5LXBhc3MgZGlzdGluY3RVbnRpbENoYW5nZWQoKSwgYnV0IG90aGVyd2lzZSBkcm9wIHRoZSBldmVudFxuICAgICAgZmlsdGVyKChtb2RlbENoYW5nZTogSW5wdXRNb2RlbENoYW5nZSkgPT4gIW1vZGVsQ2hhbmdlLmZvcmNlQ2hhbmdlICYmICFtb2RlbENoYW5nZS5pbnRlcm5hbENoYW5nZSksXG4gICAgICAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKGludGVydmFsKSlcbiAgICAgICAgICA/IHRocm90dGxlVGltZShpbnRlcnZhbCwgdW5kZWZpbmVkLCB7IGxlYWRpbmc6IHRydWUsIHRyYWlsaW5nOiB0cnVlfSlcbiAgICAgICAgICA6IHRhcCgoKSA9PiB7fSkgLy8gbm8tb3BcbiAgICApXG4gICAgLnN1YnNjcmliZSgobW9kZWxDaGFuZ2U6IElucHV0TW9kZWxDaGFuZ2UpID0+IHRoaXMuYXBwbHlJbnB1dE1vZGVsQ2hhbmdlKG1vZGVsQ2hhbmdlKSk7XG4gIH1cblxuICBwcml2YXRlIHN1YnNjcmliZU91dHB1dE1vZGVsQ2hhbmdlU3ViamVjdChpbnRlcnZhbD86IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMub3V0cHV0TW9kZWxDaGFuZ2VTdWJzY3JpcHRpb24gPSB0aGlzLm91dHB1dE1vZGVsQ2hhbmdlU3ViamVjdFxuICAgICAgLnBpcGUoXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKE1vZGVsQ2hhbmdlLmNvbXBhcmUpLFxuICAgICAgICAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKGludGVydmFsKSlcbiAgICAgICAgICA/IHRocm90dGxlVGltZShpbnRlcnZhbCwgdW5kZWZpbmVkLCB7IGxlYWRpbmc6IHRydWUsIHRyYWlsaW5nOiB0cnVlfSlcbiAgICAgICAgICA6IHRhcCgoKSA9PiB7fSkgLy8gbm8tb3BcbiAgICAgIClcbiAgICAgIC5zdWJzY3JpYmUoKG1vZGVsQ2hhbmdlOiBPdXRwdXRNb2RlbENoYW5nZSkgPT4gdGhpcy5wdWJsaXNoT3V0cHV0TW9kZWxDaGFuZ2UobW9kZWxDaGFuZ2UpKTtcbiAgfVxuXG4gIHByaXZhdGUgc3Vic2NyaWJlUmVzaXplT2JzZXJ2ZXIoKTogdm9pZCB7XG4gICAgaWYgKENvbXBhdGliaWxpdHlIZWxwZXIuaXNSZXNpemVPYnNlcnZlckF2YWlsYWJsZSgpKSB7XG4gICAgICB0aGlzLnJlc2l6ZU9ic2VydmVyID0gbmV3IFJlc2l6ZU9ic2VydmVyKCgpOiB2b2lkID0+IHRoaXMuY2FsY3VsYXRlVmlld0RpbWVuc2lvbnNBbmREZXRlY3RDaGFuZ2VzKCkpO1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVuc3Vic2NyaWJlUmVzaXplT2JzZXJ2ZXIoKTogdm9pZCB7XG4gICAgaWYgKENvbXBhdGliaWxpdHlIZWxwZXIuaXNSZXNpemVPYnNlcnZlckF2YWlsYWJsZSgpICYmIHRoaXMucmVzaXplT2JzZXJ2ZXIgIT09IG51bGwpIHtcbiAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlciA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1bnN1YnNjcmliZU9uTW92ZSgpOiB2b2lkIHtcbiAgICBpZiAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMub25Nb3ZlRXZlbnRMaXN0ZW5lcikpIHtcbiAgICAgIHRoaXMuZXZlbnRMaXN0ZW5lckhlbHBlci5kZXRhY2hFdmVudExpc3RlbmVyKHRoaXMub25Nb3ZlRXZlbnRMaXN0ZW5lcik7XG4gICAgICB0aGlzLm9uTW92ZUV2ZW50TGlzdGVuZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdW5zdWJzY3JpYmVPbkVuZCgpOiB2b2lkIHtcbiAgICBpZiAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMub25FbmRFdmVudExpc3RlbmVyKSkge1xuICAgICAgdGhpcy5ldmVudExpc3RlbmVySGVscGVyLmRldGFjaEV2ZW50TGlzdGVuZXIodGhpcy5vbkVuZEV2ZW50TGlzdGVuZXIpO1xuICAgICAgdGhpcy5vbkVuZEV2ZW50TGlzdGVuZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdW5zdWJzY3JpYmVJbnB1dE1vZGVsQ2hhbmdlU3ViamVjdCgpOiB2b2lkIHtcbiAgICBpZiAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuaW5wdXRNb2RlbENoYW5nZVN1YnNjcmlwdGlvbikpIHtcbiAgICAgIHRoaXMuaW5wdXRNb2RlbENoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xuICAgICAgdGhpcy5pbnB1dE1vZGVsQ2hhbmdlU3Vic2NyaXB0aW9uID0gbnVsbDtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHVuc3Vic2NyaWJlT3V0cHV0TW9kZWxDaGFuZ2VTdWJqZWN0KCk6IHZvaWQge1xuICAgIGlmICghVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy5vdXRwdXRNb2RlbENoYW5nZVN1YnNjcmlwdGlvbikpIHtcbiAgICAgIHRoaXMub3V0cHV0TW9kZWxDaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcbiAgICAgIHRoaXMub3V0cHV0TW9kZWxDaGFuZ2VTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdW5zdWJzY3JpYmVNYW51YWxSZWZyZXNoKCk6IHZvaWQge1xuICAgIGlmICghVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy5tYW51YWxSZWZyZXNoU3Vic2NyaXB0aW9uKSkge1xuICAgICAgdGhpcy5tYW51YWxSZWZyZXNoU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLm1hbnVhbFJlZnJlc2hTdWJzY3JpcHRpb24gPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdW5zdWJzY3JpYmVUcmlnZ2VyRm9jdXMoKTogdm9pZCB7XG4gICAgaWYgKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLnRyaWdnZXJGb2N1c1N1YnNjcmlwdGlvbikpIHtcbiAgICAgIHRoaXMudHJpZ2dlckZvY3VzU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICB0aGlzLnRyaWdnZXJGb2N1c1N1YnNjcmlwdGlvbiA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRQb2ludGVyRWxlbWVudChwb2ludGVyVHlwZTogUG9pbnRlclR5cGUpOiBTbGlkZXJIYW5kbGVEaXJlY3RpdmUge1xuICAgIGlmIChwb2ludGVyVHlwZSA9PT0gUG9pbnRlclR5cGUuTWluKSB7XG4gICAgICByZXR1cm4gdGhpcy5taW5IYW5kbGVFbGVtZW50O1xuICAgIH0gZWxzZSBpZiAocG9pbnRlclR5cGUgPT09IFBvaW50ZXJUeXBlLk1heCkge1xuICAgICAgcmV0dXJuIHRoaXMubWF4SGFuZGxlRWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIGdldEN1cnJlbnRUcmFja2luZ1ZhbHVlKCk6IG51bWJlciB7XG4gICAgaWYgKHRoaXMuY3VycmVudFRyYWNraW5nUG9pbnRlciA9PT0gUG9pbnRlclR5cGUuTWluKSB7XG4gICAgICByZXR1cm4gdGhpcy52aWV3TG93VmFsdWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRUcmFja2luZ1BvaW50ZXIgPT09IFBvaW50ZXJUeXBlLk1heCkge1xuICAgICAgcmV0dXJuIHRoaXMudmlld0hpZ2hWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBwcml2YXRlIG1vZGVsVmFsdWVUb1ZpZXdWYWx1ZShtb2RlbFZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xuICAgIGlmIChWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZChtb2RlbFZhbHVlKSkge1xuICAgICAgcmV0dXJuIE5hTjtcbiAgICB9XG5cbiAgICBpZiAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudmlld09wdGlvbnMuc3RlcHNBcnJheSkgJiYgIXRoaXMudmlld09wdGlvbnMuYmluZEluZGV4Rm9yU3RlcHNBcnJheSkge1xuICAgICAgcmV0dXJuIFZhbHVlSGVscGVyLmZpbmRTdGVwSW5kZXgoK21vZGVsVmFsdWUsIHRoaXMudmlld09wdGlvbnMuc3RlcHNBcnJheSk7XG4gICAgfVxuICAgIHJldHVybiArbW9kZWxWYWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgdmlld1ZhbHVlVG9Nb2RlbFZhbHVlKHZpZXdWYWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudmlld09wdGlvbnMuc3RlcHNBcnJheSkgJiYgIXRoaXMudmlld09wdGlvbnMuYmluZEluZGV4Rm9yU3RlcHNBcnJheSkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RlcFZhbHVlKHZpZXdWYWx1ZSk7XG4gICAgfVxuICAgIHJldHVybiB2aWV3VmFsdWU7XG4gIH1cblxuICBwcml2YXRlIGdldFN0ZXBWYWx1ZShzbGlkZXJWYWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCBzdGVwOiBDdXN0b21TdGVwRGVmaW5pdGlvbiA9IHRoaXMudmlld09wdGlvbnMuc3RlcHNBcnJheVtzbGlkZXJWYWx1ZV07XG4gICAgcmV0dXJuICghVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQoc3RlcCkpID8gc3RlcC52YWx1ZSA6IE5hTjtcbiAgfVxuXG4gIHByaXZhdGUgYXBwbHlWaWV3Q2hhbmdlKCk6IHZvaWQge1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLnZpZXdWYWx1ZVRvTW9kZWxWYWx1ZSh0aGlzLnZpZXdMb3dWYWx1ZSk7XG4gICAgaWYgKHRoaXMucmFuZ2UpIHtcbiAgICAgIHRoaXMuaGlnaFZhbHVlID0gdGhpcy52aWV3VmFsdWVUb01vZGVsVmFsdWUodGhpcy52aWV3SGlnaFZhbHVlKTtcbiAgICB9XG5cbiAgICB0aGlzLm91dHB1dE1vZGVsQ2hhbmdlU3ViamVjdC5uZXh0KHtcbiAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgaGlnaFZhbHVlOiB0aGlzLmhpZ2hWYWx1ZSxcbiAgICAgIHVzZXJFdmVudEluaXRpYXRlZDogdHJ1ZSxcbiAgICAgIGZvcmNlQ2hhbmdlOiBmYWxzZVxuICAgIH0pO1xuXG4gICAgLy8gQXQgdGhpcyBwb2ludCBhbGwgY2hhbmdlcyBhcmUgYXBwbGllZCBhbmQgb3V0cHV0cyBhcmUgZW1pdHRlZCwgc28gd2Ugc2hvdWxkIGJlIGRvbmUuXG4gICAgLy8gSG93ZXZlciwgaW5wdXQgY2hhbmdlcyBhcmUgY29tbXVuaWNhdGVkIGluIGRpZmZlcmVudCBzdHJlYW0gYW5kIHdlIG5lZWQgdG8gYmUgcmVhZHkgdG9cbiAgICAvLyBhY3Qgb24gdGhlIG5leHQgaW5wdXQgY2hhbmdlIGV2ZW4gaWYgaXQgaXMgZXhhY3RseSB0aGUgc2FtZSBhcyBsYXN0IGlucHV0IGNoYW5nZS5cbiAgICAvLyBUaGVyZWZvcmUsIHdlIHNlbmQgYSBzcGVjaWFsIGV2ZW50IHRvIHJlc2V0IHRoZSBzdHJlYW0uXG4gICAgdGhpcy5pbnB1dE1vZGVsQ2hhbmdlU3ViamVjdC5uZXh0KHtcbiAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgaGlnaFZhbHVlOiB0aGlzLmhpZ2hWYWx1ZSxcbiAgICAgIGZvcmNlQ2hhbmdlOiBmYWxzZSxcbiAgICAgIGludGVybmFsQ2hhbmdlOiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICAvLyBBcHBseSBtb2RlbCBjaGFuZ2UgdG8gdGhlIHNsaWRlciB2aWV3XG4gIHByaXZhdGUgYXBwbHlJbnB1dE1vZGVsQ2hhbmdlKG1vZGVsQ2hhbmdlOiBJbnB1dE1vZGVsQ2hhbmdlKTogdm9pZCB7XG4gICAgY29uc3Qgbm9ybWFsaXNlZE1vZGVsQ2hhbmdlOiBNb2RlbFZhbHVlcyA9IHRoaXMubm9ybWFsaXNlTW9kZWxWYWx1ZXMobW9kZWxDaGFuZ2UpO1xuXG4gICAgLy8gSWYgbm9ybWFsaXNlZCBtb2RlbCBjaGFuZ2UgaXMgZGlmZmVyZW50LCBhcHBseSB0aGUgY2hhbmdlIHRvIHRoZSBtb2RlbCB2YWx1ZXNcbiAgICBjb25zdCBub3JtYWxpc2F0aW9uQ2hhbmdlOiBib29sZWFuID0gIU1vZGVsVmFsdWVzLmNvbXBhcmUobW9kZWxDaGFuZ2UsIG5vcm1hbGlzZWRNb2RlbENoYW5nZSk7XG4gICAgaWYgKG5vcm1hbGlzYXRpb25DaGFuZ2UpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBub3JtYWxpc2VkTW9kZWxDaGFuZ2UudmFsdWU7XG4gICAgICB0aGlzLmhpZ2hWYWx1ZSA9IG5vcm1hbGlzZWRNb2RlbENoYW5nZS5oaWdoVmFsdWU7XG4gICAgfVxuXG4gICAgdGhpcy52aWV3TG93VmFsdWUgPSB0aGlzLm1vZGVsVmFsdWVUb1ZpZXdWYWx1ZShub3JtYWxpc2VkTW9kZWxDaGFuZ2UudmFsdWUpO1xuICAgIGlmICh0aGlzLnJhbmdlKSB7XG4gICAgICB0aGlzLnZpZXdIaWdoVmFsdWUgPSB0aGlzLm1vZGVsVmFsdWVUb1ZpZXdWYWx1ZShub3JtYWxpc2VkTW9kZWxDaGFuZ2UuaGlnaFZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52aWV3SGlnaFZhbHVlID0gbnVsbDtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZUxvd0hhbmRsZSh0aGlzLnZhbHVlVG9Qb3NpdGlvbih0aGlzLnZpZXdMb3dWYWx1ZSkpO1xuICAgIGlmICh0aGlzLnJhbmdlKSB7XG4gICAgICB0aGlzLnVwZGF0ZUhpZ2hIYW5kbGUodGhpcy52YWx1ZVRvUG9zaXRpb24odGhpcy52aWV3SGlnaFZhbHVlKSk7XG4gICAgfVxuICAgIHRoaXMudXBkYXRlU2VsZWN0aW9uQmFyKCk7XG4gICAgdGhpcy51cGRhdGVUaWNrc1NjYWxlKCk7XG4gICAgdGhpcy51cGRhdGVBcmlhQXR0cmlidXRlcygpO1xuICAgIGlmICh0aGlzLnJhbmdlKSB7XG4gICAgICB0aGlzLnVwZGF0ZUNvbWJpbmVkTGFiZWwoKTtcbiAgICB9XG5cbiAgICAvLyBBdCB0aGUgZW5kLCB3ZSBuZWVkIHRvIGNvbW11bmljYXRlIHRoZSBtb2RlbCBjaGFuZ2UgdG8gdGhlIG91dHB1dHMgYXMgd2VsbFxuICAgIC8vIE5vcm1hbGlzYXRpb24gY2hhbmdlcyBhcmUgYWxzbyBhbHdheXMgZm9yY2VkIG91dCB0byBlbnN1cmUgdGhhdCBzdWJzY3JpYmVycyBhbHdheXMgZW5kIHVwIGluIGNvcnJlY3Qgc3RhdGVcbiAgICB0aGlzLm91dHB1dE1vZGVsQ2hhbmdlU3ViamVjdC5uZXh0KHtcbiAgICAgIHZhbHVlOiBub3JtYWxpc2VkTW9kZWxDaGFuZ2UudmFsdWUsXG4gICAgICBoaWdoVmFsdWU6IG5vcm1hbGlzZWRNb2RlbENoYW5nZS5oaWdoVmFsdWUsXG4gICAgICBmb3JjZUNoYW5nZTogbm9ybWFsaXNhdGlvbkNoYW5nZSxcbiAgICAgIHVzZXJFdmVudEluaXRpYXRlZDogZmFsc2VcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFB1Ymxpc2ggbW9kZWwgY2hhbmdlIHRvIG91dHB1dCBldmVudCBlbWl0dGVycyBhbmQgcmVnaXN0ZXJlZCBjYWxsYmFja3NcbiAgcHJpdmF0ZSBwdWJsaXNoT3V0cHV0TW9kZWxDaGFuZ2UobW9kZWxDaGFuZ2U6IE91dHB1dE1vZGVsQ2hhbmdlKTogdm9pZCB7XG4gICAgY29uc3QgZW1pdE91dHB1dHM6ICgpID0+IHZvaWQgPSAoKTogdm9pZCA9PiB7XG4gICAgICB0aGlzLnZhbHVlQ2hhbmdlLmVtaXQobW9kZWxDaGFuZ2UudmFsdWUpO1xuICAgICAgaWYgKHRoaXMucmFuZ2UpIHtcbiAgICAgICAgdGhpcy5oaWdoVmFsdWVDaGFuZ2UuZW1pdChtb2RlbENoYW5nZS5oaWdoVmFsdWUpO1xuICAgICAgfVxuXG4gICAgICBpZiAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMub25DaGFuZ2VDYWxsYmFjaykpIHtcbiAgICAgICAgaWYgKHRoaXMucmFuZ2UpIHtcbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2soW21vZGVsQ2hhbmdlLnZhbHVlLCBtb2RlbENoYW5nZS5oaWdoVmFsdWVdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm9uQ2hhbmdlQ2FsbGJhY2sobW9kZWxDaGFuZ2UudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMub25Ub3VjaGVkQ2FsbGJhY2spKSB7XG4gICAgICAgIGlmICh0aGlzLnJhbmdlKSB7XG4gICAgICAgICAgdGhpcy5vblRvdWNoZWRDYWxsYmFjayhbbW9kZWxDaGFuZ2UudmFsdWUsIG1vZGVsQ2hhbmdlLmhpZ2hWYWx1ZV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMub25Ub3VjaGVkQ2FsbGJhY2sobW9kZWxDaGFuZ2UudmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmIChtb2RlbENoYW5nZS51c2VyRXZlbnRJbml0aWF0ZWQpIHtcbiAgICAgIC8vIElmIHRoaXMgY2hhbmdlIHdhcyBpbml0aWF0ZWQgYnkgYSB1c2VyIGV2ZW50LCB3ZSBjYW4gZW1pdCBvdXRwdXRzIGluIHRoZSBzYW1lIHRpY2tcbiAgICAgIGVtaXRPdXRwdXRzKCk7XG4gICAgICB0aGlzLnVzZXJDaGFuZ2UuZW1pdCh0aGlzLmdldENoYW5nZUNvbnRleHQoKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEJ1dCwgaWYgdGhlIGNoYW5nZSB3YXMgaW5pdGF0ZWQgYnkgc29tZXRoaW5nIGVsc2UgbGlrZSBhIGNoYW5nZSBpbiBpbnB1dCBiaW5kaW5ncyxcbiAgICAgIC8vIHdlIG5lZWQgdG8gd2FpdCB1bnRpbCBuZXh0IHRpY2sgdG8gZW1pdCB0aGUgb3V0cHV0cyB0byBrZWVwIEFuZ3VsYXIgY2hhbmdlIGRldGVjdGlvbiBoYXBweVxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7IGVtaXRPdXRwdXRzKCk7IH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgbm9ybWFsaXNlTW9kZWxWYWx1ZXMoaW5wdXQ6IE1vZGVsVmFsdWVzKTogTW9kZWxWYWx1ZXMge1xuICAgIGNvbnN0IG5vcm1hbGlzZWRJbnB1dDogTW9kZWxWYWx1ZXMgPSBuZXcgTW9kZWxWYWx1ZXMoKTtcbiAgICBub3JtYWxpc2VkSW5wdXQudmFsdWUgPSBpbnB1dC52YWx1ZTtcbiAgICBub3JtYWxpc2VkSW5wdXQuaGlnaFZhbHVlID0gaW5wdXQuaGlnaFZhbHVlO1xuXG4gICAgaWYgKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLnZpZXdPcHRpb25zLnN0ZXBzQXJyYXkpKSB7XG4gICAgICAvLyBXaGVuIHVzaW5nIHN0ZXBzIGFycmF5LCBvbmx5IHJvdW5kIHRvIG5lYXJlc3Qgc3RlcCBpbiB0aGUgYXJyYXlcbiAgICAgIC8vIE5vIG90aGVyIGVuZm9yY2VtZW50IGNhbiBiZSBkb25lLCBhcyB0aGUgc3RlcCBhcnJheSBtYXkgYmUgb3V0IG9mIG9yZGVyLCBhbmQgdGhhdCBpcyBwZXJmZWN0bHkgZmluZVxuICAgICAgaWYgKHRoaXMudmlld09wdGlvbnMuZW5mb3JjZVN0ZXBzQXJyYXkpIHtcbiAgICAgICAgY29uc3QgdmFsdWVJbmRleDogbnVtYmVyID0gVmFsdWVIZWxwZXIuZmluZFN0ZXBJbmRleChub3JtYWxpc2VkSW5wdXQudmFsdWUsIHRoaXMudmlld09wdGlvbnMuc3RlcHNBcnJheSk7XG4gICAgICAgIG5vcm1hbGlzZWRJbnB1dC52YWx1ZSA9IHRoaXMudmlld09wdGlvbnMuc3RlcHNBcnJheVt2YWx1ZUluZGV4XS52YWx1ZTtcblxuICAgICAgICBpZiAodGhpcy5yYW5nZSkge1xuICAgICAgICAgIGNvbnN0IGhpZ2hWYWx1ZUluZGV4OiBudW1iZXIgPSBWYWx1ZUhlbHBlci5maW5kU3RlcEluZGV4KG5vcm1hbGlzZWRJbnB1dC5oaWdoVmFsdWUsIHRoaXMudmlld09wdGlvbnMuc3RlcHNBcnJheSk7XG4gICAgICAgICAgbm9ybWFsaXNlZElucHV0LmhpZ2hWYWx1ZSA9IHRoaXMudmlld09wdGlvbnMuc3RlcHNBcnJheVtoaWdoVmFsdWVJbmRleF0udmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG5vcm1hbGlzZWRJbnB1dDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy52aWV3T3B0aW9ucy5lbmZvcmNlU3RlcCkge1xuICAgICAgbm9ybWFsaXNlZElucHV0LnZhbHVlID0gdGhpcy5yb3VuZFN0ZXAobm9ybWFsaXNlZElucHV0LnZhbHVlKTtcbiAgICAgIGlmICh0aGlzLnJhbmdlKSB7XG4gICAgICAgIG5vcm1hbGlzZWRJbnB1dC5oaWdoVmFsdWUgPSB0aGlzLnJvdW5kU3RlcChub3JtYWxpc2VkSW5wdXQuaGlnaFZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy52aWV3T3B0aW9ucy5lbmZvcmNlUmFuZ2UpIHtcbiAgICAgIG5vcm1hbGlzZWRJbnB1dC52YWx1ZSA9IE1hdGhIZWxwZXIuY2xhbXBUb1JhbmdlKG5vcm1hbGlzZWRJbnB1dC52YWx1ZSwgdGhpcy52aWV3T3B0aW9ucy5mbG9vciwgdGhpcy52aWV3T3B0aW9ucy5jZWlsKTtcblxuICAgICAgaWYgKHRoaXMucmFuZ2UpIHtcbiAgICAgICAgbm9ybWFsaXNlZElucHV0LmhpZ2hWYWx1ZSA9IE1hdGhIZWxwZXIuY2xhbXBUb1JhbmdlKG5vcm1hbGlzZWRJbnB1dC5oaWdoVmFsdWUsIHRoaXMudmlld09wdGlvbnMuZmxvb3IsIHRoaXMudmlld09wdGlvbnMuY2VpbCk7XG4gICAgICB9XG5cbiAgICAgIC8vIE1ha2Ugc3VyZSB0aGF0IHJhbmdlIHNsaWRlciBpbnZhcmlhbnQgKHZhbHVlIDw9IGhpZ2hWYWx1ZSkgaXMgYWx3YXlzIHNhdGlzZmllZFxuICAgICAgaWYgKHRoaXMucmFuZ2UgJiYgaW5wdXQudmFsdWUgPiBpbnB1dC5oaWdoVmFsdWUpIHtcbiAgICAgICAgLy8gV2Uga25vdyB0aGF0IGJvdGggdmFsdWVzIGFyZSBub3cgY2xhbXBlZCBjb3JyZWN0bHksIHRoZXkgbWF5IGp1c3QgYmUgaW4gdGhlIHdyb25nIG9yZGVyXG4gICAgICAgIC8vIFNvIHRoZSBlYXN5IHNvbHV0aW9uIGlzIHRvIHN3YXAgdGhlbS4uLiBleGNlcHQgc3dhcHBpbmcgaXMgc29tZXRpbWVzIGRpc2FibGVkIGluIG9wdGlvbnMsIHNvIHdlIG1ha2UgdGhlIHR3byB2YWx1ZXMgdGhlIHNhbWVcbiAgICAgICAgaWYgKHRoaXMudmlld09wdGlvbnMubm9Td2l0Y2hpbmcpIHtcbiAgICAgICAgICBub3JtYWxpc2VkSW5wdXQudmFsdWUgPSBub3JtYWxpc2VkSW5wdXQuaGlnaFZhbHVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IHRlbXBWYWx1ZTogbnVtYmVyID0gaW5wdXQudmFsdWU7XG4gICAgICAgICAgbm9ybWFsaXNlZElucHV0LnZhbHVlID0gaW5wdXQuaGlnaFZhbHVlO1xuICAgICAgICAgIG5vcm1hbGlzZWRJbnB1dC5oaWdoVmFsdWUgPSB0ZW1wVmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbm9ybWFsaXNlZElucHV0O1xuICB9XG5cbiAgcHJpdmF0ZSByZW5vcm1hbGlzZU1vZGVsVmFsdWVzKCk6IHZvaWQge1xuICAgIGNvbnN0IHByZXZpb3VzTW9kZWxWYWx1ZXM6IE1vZGVsVmFsdWVzID0ge1xuICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICBoaWdoVmFsdWU6IHRoaXMuaGlnaFZhbHVlXG4gICAgfTtcbiAgICBjb25zdCBub3JtYWxpc2VkTW9kZWxWYWx1ZXM6IE1vZGVsVmFsdWVzID0gdGhpcy5ub3JtYWxpc2VNb2RlbFZhbHVlcyhwcmV2aW91c01vZGVsVmFsdWVzKTtcbiAgICBpZiAoIU1vZGVsVmFsdWVzLmNvbXBhcmUobm9ybWFsaXNlZE1vZGVsVmFsdWVzLCBwcmV2aW91c01vZGVsVmFsdWVzKSkge1xuICAgICAgdGhpcy52YWx1ZSA9IG5vcm1hbGlzZWRNb2RlbFZhbHVlcy52YWx1ZTtcbiAgICAgIHRoaXMuaGlnaFZhbHVlID0gbm9ybWFsaXNlZE1vZGVsVmFsdWVzLmhpZ2hWYWx1ZTtcblxuICAgICAgdGhpcy5vdXRwdXRNb2RlbENoYW5nZVN1YmplY3QubmV4dCh7XG4gICAgICAgIHZhbHVlOiB0aGlzLnZhbHVlLFxuICAgICAgICBoaWdoVmFsdWU6IHRoaXMuaGlnaFZhbHVlLFxuICAgICAgICBmb3JjZUNoYW5nZTogdHJ1ZSxcbiAgICAgICAgdXNlckV2ZW50SW5pdGlhdGVkOiBmYWxzZVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvbkNoYW5nZU9wdGlvbnMoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmluaXRIYXNSdW4pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBwcmV2aW91c0lucHV0RXZlbnRzSW50ZXJ2YWw6IG51bWJlciA9IHRoaXMudmlld09wdGlvbnMuaW5wdXRFdmVudHNJbnRlcnZhbDtcbiAgICBjb25zdCBwcmV2aW91c091dHB1dEV2ZW50c0ludGVydmFsOiBudW1iZXIgPSB0aGlzLnZpZXdPcHRpb25zLm91dHB1dEV2ZW50c0ludGVydmFsO1xuXG4gICAgY29uc3QgcHJldmlvdXNPcHRpb25zSW5mbHVlbmNpbmdFdmVudEJpbmRpbmdzOiBib29sZWFuW10gPSB0aGlzLmdldE9wdGlvbnNJbmZsdWVuY2luZ0V2ZW50QmluZGluZ3ModGhpcy52aWV3T3B0aW9ucyk7XG5cbiAgICB0aGlzLmFwcGx5T3B0aW9ucygpO1xuXG4gICAgY29uc3QgbmV3T3B0aW9uc0luZmx1ZW5jaW5nRXZlbnRCaW5kaW5nczogYm9vbGVhbltdID0gdGhpcy5nZXRPcHRpb25zSW5mbHVlbmNpbmdFdmVudEJpbmRpbmdzKHRoaXMudmlld09wdGlvbnMpO1xuICAgIC8vIEF2b2lkIHJlLWJpbmRpbmcgZXZlbnRzIGluIGNhc2Ugbm90aGluZyBjaGFuZ2VzIHRoYXQgY2FuIGluZmx1ZW5jZSBpdFxuICAgIC8vIEl0IG1ha2VzIGl0IHBvc3NpYmxlIHRvIGNoYW5nZSBvcHRpb25zIHdoaWxlIGRyYWdnaW5nIHRoZSBzbGlkZXJcbiAgICBjb25zdCByZWJpbmRFdmVudHM6IGJvb2xlYW4gPSAhVmFsdWVIZWxwZXIuYXJlQXJyYXlzRXF1YWwocHJldmlvdXNPcHRpb25zSW5mbHVlbmNpbmdFdmVudEJpbmRpbmdzLCBuZXdPcHRpb25zSW5mbHVlbmNpbmdFdmVudEJpbmRpbmdzKTtcblxuICAgIGlmIChwcmV2aW91c0lucHV0RXZlbnRzSW50ZXJ2YWwgIT09IHRoaXMudmlld09wdGlvbnMuaW5wdXRFdmVudHNJbnRlcnZhbCkge1xuICAgICAgdGhpcy51bnN1YnNjcmliZUlucHV0TW9kZWxDaGFuZ2VTdWJqZWN0KCk7XG4gICAgICB0aGlzLnN1YnNjcmliZUlucHV0TW9kZWxDaGFuZ2VTdWJqZWN0KHRoaXMudmlld09wdGlvbnMuaW5wdXRFdmVudHNJbnRlcnZhbCk7XG4gICAgfVxuXG4gICAgaWYgKHByZXZpb3VzT3V0cHV0RXZlbnRzSW50ZXJ2YWwgIT09IHRoaXMudmlld09wdGlvbnMub3V0cHV0RXZlbnRzSW50ZXJ2YWwpIHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmVJbnB1dE1vZGVsQ2hhbmdlU3ViamVjdCgpO1xuICAgICAgdGhpcy5zdWJzY3JpYmVJbnB1dE1vZGVsQ2hhbmdlU3ViamVjdCh0aGlzLnZpZXdPcHRpb25zLm91dHB1dEV2ZW50c0ludGVydmFsKTtcbiAgICB9XG5cbiAgICAvLyBXaXRoIG5ldyBvcHRpb25zLCB3ZSBuZWVkIHRvIHJlLW5vcm1hbGlzZSBtb2RlbCB2YWx1ZXMgaWYgbmVjZXNzYXJ5XG4gICAgdGhpcy5yZW5vcm1hbGlzZU1vZGVsVmFsdWVzKCk7XG5cbiAgICB0aGlzLnZpZXdMb3dWYWx1ZSA9IHRoaXMubW9kZWxWYWx1ZVRvVmlld1ZhbHVlKHRoaXMudmFsdWUpO1xuICAgIGlmICh0aGlzLnJhbmdlKSB7XG4gICAgICB0aGlzLnZpZXdIaWdoVmFsdWUgPSB0aGlzLm1vZGVsVmFsdWVUb1ZpZXdWYWx1ZSh0aGlzLmhpZ2hWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmlld0hpZ2hWYWx1ZSA9IG51bGw7XG4gICAgfVxuXG4gICAgdGhpcy5yZXNldFNsaWRlcihyZWJpbmRFdmVudHMpO1xuICB9XG5cbiAgLy8gUmVhZCB0aGUgdXNlciBvcHRpb25zIGFuZCBhcHBseSB0aGVtIHRvIHRoZSBzbGlkZXIgbW9kZWxcbiAgcHJpdmF0ZSBhcHBseU9wdGlvbnMoKTogdm9pZCB7XG4gICAgdGhpcy52aWV3T3B0aW9ucyA9IG5ldyBPcHRpb25zKCk7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLnZpZXdPcHRpb25zLCB0aGlzLm9wdGlvbnMpO1xuXG4gICAgdGhpcy52aWV3T3B0aW9ucy5kcmFnZ2FibGVSYW5nZSA9IHRoaXMucmFuZ2UgJiYgdGhpcy52aWV3T3B0aW9ucy5kcmFnZ2FibGVSYW5nZTtcbiAgICB0aGlzLnZpZXdPcHRpb25zLmRyYWdnYWJsZVJhbmdlT25seSA9IHRoaXMucmFuZ2UgJiYgdGhpcy52aWV3T3B0aW9ucy5kcmFnZ2FibGVSYW5nZU9ubHk7XG4gICAgaWYgKHRoaXMudmlld09wdGlvbnMuZHJhZ2dhYmxlUmFuZ2VPbmx5KSB7XG4gICAgICB0aGlzLnZpZXdPcHRpb25zLmRyYWdnYWJsZVJhbmdlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB0aGlzLnZpZXdPcHRpb25zLnNob3dUaWNrcyA9IHRoaXMudmlld09wdGlvbnMuc2hvd1RpY2tzIHx8XG4gICAgICB0aGlzLnZpZXdPcHRpb25zLnNob3dUaWNrc1ZhbHVlcyB8fFxuICAgICAgIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudmlld09wdGlvbnMudGlja3NBcnJheSk7XG4gICAgaWYgKHRoaXMudmlld09wdGlvbnMuc2hvd1RpY2tzICYmXG4gICAgICAgKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLnZpZXdPcHRpb25zLnRpY2tTdGVwKSB8fCAhVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy52aWV3T3B0aW9ucy50aWNrc0FycmF5KSkpIHtcbiAgICAgIHRoaXMuaW50ZXJtZWRpYXRlVGlja3MgPSB0cnVlO1xuICAgIH1cblxuICAgIHRoaXMudmlld09wdGlvbnMuc2hvd1NlbGVjdGlvbkJhciA9IHRoaXMudmlld09wdGlvbnMuc2hvd1NlbGVjdGlvbkJhciB8fFxuICAgICAgdGhpcy52aWV3T3B0aW9ucy5zaG93U2VsZWN0aW9uQmFyRW5kIHx8XG4gICAgICAhVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy52aWV3T3B0aW9ucy5zaG93U2VsZWN0aW9uQmFyRnJvbVZhbHVlKTtcblxuICAgIGlmICghVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy52aWV3T3B0aW9ucy5zdGVwc0FycmF5KSkge1xuICAgICAgdGhpcy5hcHBseVN0ZXBzQXJyYXlPcHRpb25zKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYXBwbHlGbG9vckNlaWxPcHRpb25zKCk7XG4gICAgfVxuXG4gICAgaWYgKFZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudmlld09wdGlvbnMuY29tYmluZUxhYmVscykpIHtcbiAgICAgIHRoaXMudmlld09wdGlvbnMuY29tYmluZUxhYmVscyA9IChtaW5WYWx1ZTogc3RyaW5nLCBtYXhWYWx1ZTogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgICAgcmV0dXJuIG1pblZhbHVlICsgJyAtICcgKyBtYXhWYWx1ZTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKHRoaXMudmlld09wdGlvbnMubG9nU2NhbGUgJiYgdGhpcy52aWV3T3B0aW9ucy5mbG9vciA9PT0gMCkge1xuICAgICAgdGhyb3cgRXJyb3IoJ0NhblxcJ3QgdXNlIGZsb29yPTAgd2l0aCBsb2dhcml0aG1pYyBzY2FsZScpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXBwbHlTdGVwc0FycmF5T3B0aW9ucygpOiB2b2lkIHtcbiAgICB0aGlzLnZpZXdPcHRpb25zLmZsb29yID0gMDtcbiAgICB0aGlzLnZpZXdPcHRpb25zLmNlaWwgPSB0aGlzLnZpZXdPcHRpb25zLnN0ZXBzQXJyYXkubGVuZ3RoIC0gMTtcbiAgICB0aGlzLnZpZXdPcHRpb25zLnN0ZXAgPSAxO1xuXG4gICAgaWYgKFZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudmlld09wdGlvbnMudHJhbnNsYXRlKSkge1xuICAgICAgdGhpcy52aWV3T3B0aW9ucy50cmFuc2xhdGUgPSAobW9kZWxWYWx1ZTogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgICAgICAgaWYgKHRoaXMudmlld09wdGlvbnMuYmluZEluZGV4Rm9yU3RlcHNBcnJheSkge1xuICAgICAgICAgIHJldHVybiBTdHJpbmcodGhpcy5nZXRTdGVwVmFsdWUobW9kZWxWYWx1ZSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBTdHJpbmcobW9kZWxWYWx1ZSk7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXBwbHlGbG9vckNlaWxPcHRpb25zKCk6IHZvaWQge1xuICAgIGlmIChWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLnZpZXdPcHRpb25zLnN0ZXApKSB7XG4gICAgICB0aGlzLnZpZXdPcHRpb25zLnN0ZXAgPSAxO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZpZXdPcHRpb25zLnN0ZXAgPSArdGhpcy52aWV3T3B0aW9ucy5zdGVwO1xuICAgICAgaWYgKHRoaXMudmlld09wdGlvbnMuc3RlcCA8PSAwKSB7XG4gICAgICAgIHRoaXMudmlld09wdGlvbnMuc3RlcCA9IDE7XG4gICAgIH1cbiAgICB9XG5cbiAgICBpZiAoVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy52aWV3T3B0aW9ucy5jZWlsKSB8fFxuICAgICAgICBWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLnZpZXdPcHRpb25zLmZsb29yKSkge1xuICAgICAgdGhyb3cgRXJyb3IoJ2Zsb29yIGFuZCBjZWlsIG9wdGlvbnMgbXVzdCBiZSBzdXBwbGllZCcpO1xuICAgIH1cbiAgICB0aGlzLnZpZXdPcHRpb25zLmNlaWwgPSArdGhpcy52aWV3T3B0aW9ucy5jZWlsO1xuICAgIHRoaXMudmlld09wdGlvbnMuZmxvb3IgPSArdGhpcy52aWV3T3B0aW9ucy5mbG9vcjtcblxuICAgIGlmIChWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLnZpZXdPcHRpb25zLnRyYW5zbGF0ZSkpIHtcbiAgICAgIHRoaXMudmlld09wdGlvbnMudHJhbnNsYXRlID0gKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcgPT4gU3RyaW5nKHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXNldHMgc2xpZGVyXG4gIHByaXZhdGUgcmVzZXRTbGlkZXIocmViaW5kRXZlbnRzOiBib29sZWFuID0gdHJ1ZSk6IHZvaWQge1xuICAgIHRoaXMubWFuYWdlRWxlbWVudHNTdHlsZSgpO1xuICAgIHRoaXMuYWRkQWNjZXNzaWJpbGl0eSgpO1xuICAgIHRoaXMudXBkYXRlQ2VpbExhYmVsKCk7XG4gICAgdGhpcy51cGRhdGVGbG9vckxhYmVsKCk7XG4gICAgaWYgKHJlYmluZEV2ZW50cykge1xuICAgICAgdGhpcy51bmJpbmRFdmVudHMoKTtcbiAgICAgIHRoaXMubWFuYWdlRXZlbnRzQmluZGluZ3MoKTtcbiAgICB9XG4gICAgdGhpcy51cGRhdGVEaXNhYmxlZFN0YXRlKCk7XG4gICAgdGhpcy5jYWxjdWxhdGVWaWV3RGltZW5zaW9ucygpO1xuICAgIHRoaXMucmVmb2N1c1BvaW50ZXJJZk5lZWRlZCgpO1xuICB9XG5cbiAgLy8gU2V0cyBmb2N1cyBvbiB0aGUgc3BlY2lmaWVkIHBvaW50ZXJcbiAgcHJpdmF0ZSBmb2N1c1BvaW50ZXIocG9pbnRlclR5cGU6IFBvaW50ZXJUeXBlKTogdm9pZCB7XG4gICAgLy8gSWYgbm90IHN1cHBsaWVkLCB1c2UgbWluIHBvaW50ZXIgYXMgZGVmYXVsdFxuICAgIGlmIChwb2ludGVyVHlwZSAhPT0gUG9pbnRlclR5cGUuTWluICYmIHBvaW50ZXJUeXBlICE9PSBQb2ludGVyVHlwZS5NYXgpIHtcbiAgICAgIHBvaW50ZXJUeXBlID0gUG9pbnRlclR5cGUuTWluO1xuICAgIH1cblxuICAgIGlmIChwb2ludGVyVHlwZSA9PT0gUG9pbnRlclR5cGUuTWluKSB7XG4gICAgICB0aGlzLm1pbkhhbmRsZUVsZW1lbnQuZm9jdXMoKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMucmFuZ2UgJiYgcG9pbnRlclR5cGUgPT09IFBvaW50ZXJUeXBlLk1heCkge1xuICAgICAgdGhpcy5tYXhIYW5kbGVFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZWZvY3VzUG9pbnRlcklmTmVlZGVkKCk6IHZvaWQge1xuICAgIGlmICghVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy5jdXJyZW50Rm9jdXNQb2ludGVyKSkge1xuICAgICAgdGhpcy5vblBvaW50ZXJGb2N1cyh0aGlzLmN1cnJlbnRGb2N1c1BvaW50ZXIpO1xuICAgICAgY29uc3QgZWxlbWVudDogU2xpZGVySGFuZGxlRGlyZWN0aXZlID0gdGhpcy5nZXRQb2ludGVyRWxlbWVudCh0aGlzLmN1cnJlbnRGb2N1c1BvaW50ZXIpO1xuICAgICAgZWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFVwZGF0ZSBlYWNoIGVsZW1lbnRzIHN0eWxlIGJhc2VkIG9uIG9wdGlvbnNcbiAgcHJpdmF0ZSBtYW5hZ2VFbGVtZW50c1N0eWxlKCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlU2NhbGUoKTtcblxuICAgIHRoaXMuZmxvb3JMYWJlbEVsZW1lbnQuc2V0QWx3YXlzSGlkZSh0aGlzLnZpZXdPcHRpb25zLnNob3dUaWNrc1ZhbHVlcyB8fCB0aGlzLnZpZXdPcHRpb25zLmhpZGVMaW1pdExhYmVscyk7XG4gICAgdGhpcy5jZWlsTGFiZWxFbGVtZW50LnNldEFsd2F5c0hpZGUodGhpcy52aWV3T3B0aW9ucy5zaG93VGlja3NWYWx1ZXMgfHwgdGhpcy52aWV3T3B0aW9ucy5oaWRlTGltaXRMYWJlbHMpO1xuXG4gICAgY29uc3QgaGlkZUxhYmVsc0ZvclRpY2tzOiBib29sZWFuID0gdGhpcy52aWV3T3B0aW9ucy5zaG93VGlja3NWYWx1ZXMgJiYgIXRoaXMuaW50ZXJtZWRpYXRlVGlja3M7XG4gICAgdGhpcy5taW5IYW5kbGVMYWJlbEVsZW1lbnQuc2V0QWx3YXlzSGlkZShoaWRlTGFiZWxzRm9yVGlja3MgfHwgdGhpcy52aWV3T3B0aW9ucy5oaWRlUG9pbnRlckxhYmVscyk7XG4gICAgdGhpcy5tYXhIYW5kbGVMYWJlbEVsZW1lbnQuc2V0QWx3YXlzSGlkZShoaWRlTGFiZWxzRm9yVGlja3MgfHwgIXRoaXMucmFuZ2UgfHwgdGhpcy52aWV3T3B0aW9ucy5oaWRlUG9pbnRlckxhYmVscyk7XG4gICAgdGhpcy5jb21iaW5lZExhYmVsRWxlbWVudC5zZXRBbHdheXNIaWRlKGhpZGVMYWJlbHNGb3JUaWNrcyB8fCAhdGhpcy5yYW5nZSB8fCB0aGlzLnZpZXdPcHRpb25zLmhpZGVQb2ludGVyTGFiZWxzKTtcbiAgICB0aGlzLnNlbGVjdGlvbkJhckVsZW1lbnQuc2V0QWx3YXlzSGlkZSghdGhpcy5yYW5nZSAmJiAhdGhpcy52aWV3T3B0aW9ucy5zaG93U2VsZWN0aW9uQmFyKTtcbiAgICB0aGlzLmxlZnRPdXRlclNlbGVjdGlvbkJhckVsZW1lbnQuc2V0QWx3YXlzSGlkZSghdGhpcy5yYW5nZSB8fCAhdGhpcy52aWV3T3B0aW9ucy5zaG93T3V0ZXJTZWxlY3Rpb25CYXJzKTtcbiAgICB0aGlzLnJpZ2h0T3V0ZXJTZWxlY3Rpb25CYXJFbGVtZW50LnNldEFsd2F5c0hpZGUoIXRoaXMucmFuZ2UgfHwgIXRoaXMudmlld09wdGlvbnMuc2hvd091dGVyU2VsZWN0aW9uQmFycyk7XG5cbiAgICB0aGlzLmZ1bGxCYXJUcmFuc3BhcmVudENsYXNzID0gdGhpcy5yYW5nZSAmJiB0aGlzLnZpZXdPcHRpb25zLnNob3dPdXRlclNlbGVjdGlvbkJhcnM7XG4gICAgdGhpcy5zZWxlY3Rpb25CYXJEcmFnZ2FibGVDbGFzcyA9IHRoaXMudmlld09wdGlvbnMuZHJhZ2dhYmxlUmFuZ2UgJiYgIXRoaXMudmlld09wdGlvbnMub25seUJpbmRIYW5kbGVzO1xuICAgIHRoaXMudGlja3NVbmRlclZhbHVlc0NsYXNzID0gdGhpcy5pbnRlcm1lZGlhdGVUaWNrcyAmJiB0aGlzLm9wdGlvbnMuc2hvd1RpY2tzVmFsdWVzO1xuXG4gICAgaWYgKHRoaXMuc2xpZGVyRWxlbWVudFZlcnRpY2FsQ2xhc3MgIT09IHRoaXMudmlld09wdGlvbnMudmVydGljYWwpIHtcbiAgICAgIHRoaXMudXBkYXRlVmVydGljYWxTdGF0ZSgpO1xuICAgICAgLy8gVGhlIGFib3ZlIGNoYW5nZSBpbiBob3N0IGNvbXBvbmVudCBjbGFzcyB3aWxsIG5vdCBiZSBhcHBsaWVkIHVudGlsIHRoZSBlbmQgb2YgdGhpcyBjeWNsZVxuICAgICAgLy8gSG93ZXZlciwgZnVuY3Rpb25zIGNhbGN1bGF0aW5nIHRoZSBzbGlkZXIgcG9zaXRpb24gZXhwZWN0IHRoZSBzbGlkZXIgdG8gYmUgYWxyZWFkeSBzdHlsZWQgYXMgdmVydGljYWxcbiAgICAgIC8vIFNvIGFzIGEgd29ya2Fyb3VuZCwgd2UgbmVlZCB0byByZXNldCB0aGUgc2xpZGVyIG9uY2UgYWdhaW4gdG8gY29tcHV0ZSB0aGUgY29ycmVjdCB2YWx1ZXNcbiAgICAgIHNldFRpbWVvdXQoKCk6IHZvaWQgPT4geyB0aGlzLnJlc2V0U2xpZGVyKCk7IH0pO1xuICAgIH1cblxuICAgIC8vIENoYW5naW5nIGFuaW1hdGUgY2xhc3MgbWF5IGludGVyZmVyZSB3aXRoIHNsaWRlciByZXNldC9pbml0aWFsaXNhdGlvbiwgc28gd2Ugc2hvdWxkIHNldCBpdCBzZXBhcmF0ZWx5LFxuICAgIC8vIGFmdGVyIGFsbCBpcyBwcm9wZXJseSBzZXQgdXBcbiAgICBpZiAodGhpcy5zbGlkZXJFbGVtZW50QW5pbWF0ZUNsYXNzICE9PSB0aGlzLnZpZXdPcHRpb25zLmFuaW1hdGUpIHtcbiAgICAgIHNldFRpbWVvdXQoKCk6IHZvaWQgPT4geyB0aGlzLnNsaWRlckVsZW1lbnRBbmltYXRlQ2xhc3MgPSB0aGlzLnZpZXdPcHRpb25zLmFuaW1hdGU7IH0pO1xuICAgIH1cbiAgfVxuXG4gIC8vIE1hbmFnZSB0aGUgZXZlbnRzIGJpbmRpbmdzIGJhc2VkIG9uIHJlYWRPbmx5IGFuZCBkaXNhYmxlZCBvcHRpb25zXG4gIHByaXZhdGUgbWFuYWdlRXZlbnRzQmluZGluZ3MoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMudmlld09wdGlvbnMuZGlzYWJsZWQgfHwgdGhpcy52aWV3T3B0aW9ucy5yZWFkT25seSkge1xuICAgICAgdGhpcy51bmJpbmRFdmVudHMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gU2V0IHRoZSBkaXNhYmxlZCBzdGF0ZSBiYXNlZCBvbiBkaXNhYmxlZCBvcHRpb25cbiAgcHJpdmF0ZSB1cGRhdGVEaXNhYmxlZFN0YXRlKCk6IHZvaWQge1xuICAgIHRoaXMuc2xpZGVyRWxlbWVudERpc2FibGVkQXR0ciA9IHRoaXMudmlld09wdGlvbnMuZGlzYWJsZWQgPyAnZGlzYWJsZWQnIDogbnVsbDtcbiAgfVxuXG4gIC8vIFNldCB2ZXJ0aWNhbCBzdGF0ZSBiYXNlZCBvbiB2ZXJ0aWNhbCBvcHRpb25cbiAgcHJpdmF0ZSB1cGRhdGVWZXJ0aWNhbFN0YXRlKCk6IHZvaWQge1xuICAgIHRoaXMuc2xpZGVyRWxlbWVudFZlcnRpY2FsQ2xhc3MgPSB0aGlzLnZpZXdPcHRpb25zLnZlcnRpY2FsO1xuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiB0aGlzLmdldEFsbFNsaWRlckVsZW1lbnRzKCkpIHtcbiAgICAgIC8vIFRoaXMgaXMgYWxzbyBjYWxsZWQgYmVmb3JlIG5nQWZ0ZXJJbml0LCBzbyBuZWVkIHRvIGNoZWNrIHRoYXQgdmlldyBjaGlsZCBiaW5kaW5ncyB3b3JrXG4gICAgICBpZiAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKGVsZW1lbnQpKSB7XG4gICAgICAgIGVsZW1lbnQuc2V0VmVydGljYWwodGhpcy52aWV3T3B0aW9ucy52ZXJ0aWNhbCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVTY2FsZSgpOiB2b2lkIHtcbiAgICBmb3IgKGNvbnN0IGVsZW1lbnQgb2YgdGhpcy5nZXRBbGxTbGlkZXJFbGVtZW50cygpKSB7XG4gICAgICBlbGVtZW50LnNldFNjYWxlKHRoaXMudmlld09wdGlvbnMuc2NhbGUpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0QWxsU2xpZGVyRWxlbWVudHMoKTogU2xpZGVyRWxlbWVudERpcmVjdGl2ZVtdIHtcbiAgICByZXR1cm4gW3RoaXMubGVmdE91dGVyU2VsZWN0aW9uQmFyRWxlbWVudCxcbiAgICAgIHRoaXMucmlnaHRPdXRlclNlbGVjdGlvbkJhckVsZW1lbnQsXG4gICAgICB0aGlzLmZ1bGxCYXJFbGVtZW50LFxuICAgICAgdGhpcy5zZWxlY3Rpb25CYXJFbGVtZW50LFxuICAgICAgdGhpcy5taW5IYW5kbGVFbGVtZW50LFxuICAgICAgdGhpcy5tYXhIYW5kbGVFbGVtZW50LFxuICAgICAgdGhpcy5mbG9vckxhYmVsRWxlbWVudCxcbiAgICAgIHRoaXMuY2VpbExhYmVsRWxlbWVudCxcbiAgICAgIHRoaXMubWluSGFuZGxlTGFiZWxFbGVtZW50LFxuICAgICAgdGhpcy5tYXhIYW5kbGVMYWJlbEVsZW1lbnQsXG4gICAgICB0aGlzLmNvbWJpbmVkTGFiZWxFbGVtZW50LFxuICAgICAgdGhpcy50aWNrc0VsZW1lbnRcbiAgICBdO1xuICB9XG5cbiAgLy8gSW5pdGlhbGl6ZSBzbGlkZXIgaGFuZGxlcyBwb3NpdGlvbnMgYW5kIGxhYmVsc1xuICAvLyBSdW4gb25seSBvbmNlIGR1cmluZyBpbml0aWFsaXphdGlvbiBhbmQgZXZlcnkgdGltZSB2aWV3IHBvcnQgY2hhbmdlcyBzaXplXG4gIHByaXZhdGUgaW5pdEhhbmRsZXMoKTogdm9pZCB7XG4gICAgdGhpcy51cGRhdGVMb3dIYW5kbGUodGhpcy52YWx1ZVRvUG9zaXRpb24odGhpcy52aWV3TG93VmFsdWUpKTtcblxuICAgIC8qXG4gICB0aGUgb3JkZXIgaGVyZSBpcyBpbXBvcnRhbnQgc2luY2UgdGhlIHNlbGVjdGlvbiBiYXIgc2hvdWxkIGJlXG4gICB1cGRhdGVkIGFmdGVyIHRoZSBoaWdoIGhhbmRsZSBidXQgYmVmb3JlIHRoZSBjb21iaW5lZCBsYWJlbFxuICAgKi9cbiAgICBpZiAodGhpcy5yYW5nZSkge1xuICAgICAgdGhpcy51cGRhdGVIaWdoSGFuZGxlKHRoaXMudmFsdWVUb1Bvc2l0aW9uKHRoaXMudmlld0hpZ2hWYWx1ZSkpO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlU2VsZWN0aW9uQmFyKCk7XG5cbiAgICBpZiAodGhpcy5yYW5nZSkge1xuICAgICAgdGhpcy51cGRhdGVDb21iaW5lZExhYmVsKCk7XG4gICAgfVxuXG4gICAgdGhpcy51cGRhdGVUaWNrc1NjYWxlKCk7XG4gIH1cblxuICAvLyBBZGRzIGFjY2Vzc2liaWxpdHkgYXR0cmlidXRlcywgcnVuIG9ubHkgb25jZSBkdXJpbmcgaW5pdGlhbGl6YXRpb25cbiAgcHJpdmF0ZSBhZGRBY2Nlc3NpYmlsaXR5KCk6IHZvaWQge1xuICAgIHRoaXMudXBkYXRlQXJpYUF0dHJpYnV0ZXMoKTtcblxuICAgIHRoaXMubWluSGFuZGxlRWxlbWVudC5yb2xlID0gJ3NsaWRlcic7XG5cbiAgICBpZiAoIHRoaXMudmlld09wdGlvbnMua2V5Ym9hcmRTdXBwb3J0ICYmXG4gICAgICAhKHRoaXMudmlld09wdGlvbnMucmVhZE9ubHkgfHwgdGhpcy52aWV3T3B0aW9ucy5kaXNhYmxlZCkgKSB7XG4gICAgICB0aGlzLm1pbkhhbmRsZUVsZW1lbnQudGFiaW5kZXggPSAnMCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWluSGFuZGxlRWxlbWVudC50YWJpbmRleCA9ICcnO1xuICAgIH1cblxuICAgIHRoaXMubWluSGFuZGxlRWxlbWVudC5hcmlhT3JpZW50YXRpb24gPSB0aGlzLnZpZXdPcHRpb25zLnZlcnRpY2FsID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcblxuICAgIGlmICghVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy52aWV3T3B0aW9ucy5hcmlhTGFiZWwpKSB7XG4gICAgICB0aGlzLm1pbkhhbmRsZUVsZW1lbnQuYXJpYUxhYmVsID0gdGhpcy52aWV3T3B0aW9ucy5hcmlhTGFiZWw7XG4gICAgfSBlbHNlIGlmICghVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy52aWV3T3B0aW9ucy5hcmlhTGFiZWxsZWRCeSkpIHtcbiAgICAgIHRoaXMubWluSGFuZGxlRWxlbWVudC5hcmlhTGFiZWxsZWRCeSA9IHRoaXMudmlld09wdGlvbnMuYXJpYUxhYmVsbGVkQnk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMucmFuZ2UpIHtcbiAgICAgIHRoaXMubWF4SGFuZGxlRWxlbWVudC5yb2xlID0gJ3NsaWRlcic7XG5cbiAgICAgIGlmICh0aGlzLnZpZXdPcHRpb25zLmtleWJvYXJkU3VwcG9ydCAmJlxuICAgICAgICAhKHRoaXMudmlld09wdGlvbnMucmVhZE9ubHkgfHwgdGhpcy52aWV3T3B0aW9ucy5kaXNhYmxlZCkpIHtcbiAgICAgICAgdGhpcy5tYXhIYW5kbGVFbGVtZW50LnRhYmluZGV4ID0gJzAnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5tYXhIYW5kbGVFbGVtZW50LnRhYmluZGV4ID0gJyc7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubWF4SGFuZGxlRWxlbWVudC5hcmlhT3JpZW50YXRpb24gPSB0aGlzLnZpZXdPcHRpb25zLnZlcnRpY2FsID8gJ3ZlcnRpY2FsJyA6ICdob3Jpem9udGFsJztcblxuICAgICAgaWYgKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLnZpZXdPcHRpb25zLmFyaWFMYWJlbEhpZ2gpKSB7XG4gICAgICAgIHRoaXMubWF4SGFuZGxlRWxlbWVudC5hcmlhTGFiZWwgPSB0aGlzLnZpZXdPcHRpb25zLmFyaWFMYWJlbEhpZ2g7XG4gICAgICB9IGVsc2UgaWYgKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLnZpZXdPcHRpb25zLmFyaWFMYWJlbGxlZEJ5SGlnaCkpIHtcbiAgICAgICAgdGhpcy5tYXhIYW5kbGVFbGVtZW50LmFyaWFMYWJlbGxlZEJ5ID0gdGhpcy52aWV3T3B0aW9ucy5hcmlhTGFiZWxsZWRCeUhpZ2g7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gVXBkYXRlcyBhcmlhIGF0dHJpYnV0ZXMgYWNjb3JkaW5nIHRvIGN1cnJlbnQgdmFsdWVzXG4gIHByaXZhdGUgdXBkYXRlQXJpYUF0dHJpYnV0ZXMoKTogdm9pZCB7XG4gICAgdGhpcy5taW5IYW5kbGVFbGVtZW50LmFyaWFWYWx1ZU5vdyA9ICgrdGhpcy52YWx1ZSkudG9TdHJpbmcoKTtcbiAgICB0aGlzLm1pbkhhbmRsZUVsZW1lbnQuYXJpYVZhbHVlVGV4dCA9IHRoaXMudmlld09wdGlvbnMudHJhbnNsYXRlKCt0aGlzLnZhbHVlLCBMYWJlbFR5cGUuTG93KTtcbiAgICB0aGlzLm1pbkhhbmRsZUVsZW1lbnQuYXJpYVZhbHVlTWluID0gdGhpcy52aWV3T3B0aW9ucy5mbG9vci50b1N0cmluZygpO1xuICAgIHRoaXMubWluSGFuZGxlRWxlbWVudC5hcmlhVmFsdWVNYXggPSB0aGlzLnZpZXdPcHRpb25zLmNlaWwudG9TdHJpbmcoKTtcblxuICAgIGlmICh0aGlzLnJhbmdlKSB7XG4gICAgICB0aGlzLm1heEhhbmRsZUVsZW1lbnQuYXJpYVZhbHVlTm93ID0gKCt0aGlzLmhpZ2hWYWx1ZSkudG9TdHJpbmcoKTtcbiAgICAgIHRoaXMubWF4SGFuZGxlRWxlbWVudC5hcmlhVmFsdWVUZXh0ID0gdGhpcy52aWV3T3B0aW9ucy50cmFuc2xhdGUoK3RoaXMuaGlnaFZhbHVlLCBMYWJlbFR5cGUuSGlnaCk7XG4gICAgICB0aGlzLm1heEhhbmRsZUVsZW1lbnQuYXJpYVZhbHVlTWluID0gdGhpcy52aWV3T3B0aW9ucy5mbG9vci50b1N0cmluZygpO1xuICAgICAgdGhpcy5tYXhIYW5kbGVFbGVtZW50LmFyaWFWYWx1ZU1heCA9IHRoaXMudmlld09wdGlvbnMuY2VpbC50b1N0cmluZygpO1xuICAgIH1cbiAgfVxuXG4gIC8vIENhbGN1bGF0ZSBkaW1lbnNpb25zIHRoYXQgYXJlIGRlcGVuZGVudCBvbiB2aWV3IHBvcnQgc2l6ZVxuICAvLyBSdW4gb25jZSBkdXJpbmcgaW5pdGlhbGl6YXRpb24gYW5kIGV2ZXJ5IHRpbWUgdmlldyBwb3J0IGNoYW5nZXMgc2l6ZS5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVWaWV3RGltZW5zaW9ucygpOiB2b2lkIHtcbiAgICBpZiAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudmlld09wdGlvbnMuaGFuZGxlRGltZW5zaW9uKSkge1xuICAgICAgdGhpcy5taW5IYW5kbGVFbGVtZW50LnNldERpbWVuc2lvbih0aGlzLnZpZXdPcHRpb25zLmhhbmRsZURpbWVuc2lvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubWluSGFuZGxlRWxlbWVudC5jYWxjdWxhdGVEaW1lbnNpb24oKTtcbiAgICB9XG5cbiAgICBjb25zdCBoYW5kbGVXaWR0aDogbnVtYmVyID0gdGhpcy5taW5IYW5kbGVFbGVtZW50LmRpbWVuc2lvbjtcblxuICAgIHRoaXMuaGFuZGxlSGFsZkRpbWVuc2lvbiA9IGhhbmRsZVdpZHRoIC8gMjtcblxuICAgIGlmICghVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy52aWV3T3B0aW9ucy5iYXJEaW1lbnNpb24pKSB7XG4gICAgICB0aGlzLmZ1bGxCYXJFbGVtZW50LnNldERpbWVuc2lvbih0aGlzLnZpZXdPcHRpb25zLmJhckRpbWVuc2lvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZnVsbEJhckVsZW1lbnQuY2FsY3VsYXRlRGltZW5zaW9uKCk7XG4gICAgfVxuXG4gICAgdGhpcy5tYXhIYW5kbGVQb3NpdGlvbiA9IHRoaXMuZnVsbEJhckVsZW1lbnQuZGltZW5zaW9uIC0gaGFuZGxlV2lkdGg7XG5cbiAgICBpZiAodGhpcy5pbml0SGFzUnVuKSB7XG4gICAgICB0aGlzLnVwZGF0ZUZsb29yTGFiZWwoKTtcbiAgICAgIHRoaXMudXBkYXRlQ2VpbExhYmVsKCk7XG4gICAgICB0aGlzLmluaXRIYW5kbGVzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjYWxjdWxhdGVWaWV3RGltZW5zaW9uc0FuZERldGVjdENoYW5nZXMoKTogdm9pZCB7XG4gICAgdGhpcy5jYWxjdWxhdGVWaWV3RGltZW5zaW9ucygpO1xuICAgIGlmICghdGhpcy5pc1JlZkRlc3Ryb3llZCgpKSB7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICB9XG4gIH1cblxuICAvKipcbiAgICogSWYgdGhlIHNsaWRlciByZWZlcmVuY2UgaXMgYWxyZWFkeSBkZXN0cm95ZWRcbiAgICogQHJldHVybnMgYm9vbGVhbiAtIHRydWUgaWYgcmVmIGlzIGRlc3Ryb3llZFxuICAgKi9cbiAgcHJpdmF0ZSBpc1JlZkRlc3Ryb3llZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2VEZXRlY3Rpb25SZWZbJ2Rlc3Ryb3llZCddO1xuICB9XG5cbiAgLy8gVXBkYXRlIHRoZSB0aWNrcyBwb3NpdGlvblxuICBwcml2YXRlIHVwZGF0ZVRpY2tzU2NhbGUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLnZpZXdPcHRpb25zLnNob3dUaWNrcykge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuc2xpZGVyRWxlbWVudFdpdGhMZWdlbmRDbGFzcyA9IGZhbHNlOyB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB0aWNrc0FycmF5OiBudW1iZXJbXSA9ICFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLnZpZXdPcHRpb25zLnRpY2tzQXJyYXkpXG4gICAgICA/IHRoaXMudmlld09wdGlvbnMudGlja3NBcnJheVxuICAgICAgOiB0aGlzLmdldFRpY2tzQXJyYXkoKTtcbiAgICBjb25zdCB0cmFuc2xhdGU6IHN0cmluZyA9IHRoaXMudmlld09wdGlvbnMudmVydGljYWwgPyAndHJhbnNsYXRlWScgOiAndHJhbnNsYXRlWCc7XG5cbiAgICBpZiAodGhpcy52aWV3T3B0aW9ucy5yaWdodFRvTGVmdCkge1xuICAgICAgdGlja3NBcnJheS5yZXZlcnNlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgdGlja1ZhbHVlU3RlcDogbnVtYmVyID0gIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudmlld09wdGlvbnMudGlja1ZhbHVlU3RlcCkgPyB0aGlzLnZpZXdPcHRpb25zLnRpY2tWYWx1ZVN0ZXAgOlxuICAgICAgICAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudmlld09wdGlvbnMudGlja1N0ZXApID8gdGhpcy52aWV3T3B0aW9ucy50aWNrU3RlcCA6IHRoaXMudmlld09wdGlvbnMuc3RlcCk7XG5cbiAgICBsZXQgaGFzQXRMZWFzdE9uZUxlZ2VuZDogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3QgbmV3VGlja3M6IFRpY2tbXSA9IHRpY2tzQXJyYXkubWFwKCh2YWx1ZTogbnVtYmVyKTogVGljayA9PiB7XG4gICAgICBsZXQgcG9zaXRpb246IG51bWJlciA9IHRoaXMudmFsdWVUb1Bvc2l0aW9uKHZhbHVlKTtcblxuICAgICAgaWYgKHRoaXMudmlld09wdGlvbnMudmVydGljYWwpIHtcbiAgICAgICAgcG9zaXRpb24gPSB0aGlzLm1heEhhbmRsZVBvc2l0aW9uIC0gcG9zaXRpb247XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHRyYW5zbGF0aW9uOiBzdHJpbmcgPSB0cmFuc2xhdGUgKyAnKCcgKyBNYXRoLnJvdW5kKHBvc2l0aW9uKSArICdweCknO1xuICAgICAgY29uc3QgdGljazogVGljayA9IG5ldyBUaWNrKCk7XG4gICAgICB0aWNrLnNlbGVjdGVkID0gdGhpcy5pc1RpY2tTZWxlY3RlZCh2YWx1ZSk7XG4gICAgICB0aWNrLnN0eWxlID0ge1xuICAgICAgICAnLXdlYmtpdC10cmFuc2Zvcm0nOiB0cmFuc2xhdGlvbixcbiAgICAgICAgJy1tb3otdHJhbnNmb3JtJzogdHJhbnNsYXRpb24sXG4gICAgICAgICctby10cmFuc2Zvcm0nOiB0cmFuc2xhdGlvbixcbiAgICAgICAgJy1tcy10cmFuc2Zvcm0nOiB0cmFuc2xhdGlvbixcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGlvbixcbiAgICAgIH07XG4gICAgICBpZiAodGljay5zZWxlY3RlZCAmJiAhVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy52aWV3T3B0aW9ucy5nZXRTZWxlY3Rpb25CYXJDb2xvcikpIHtcbiAgICAgICAgdGljay5zdHlsZVsnYmFja2dyb3VuZC1jb2xvciddID0gdGhpcy5nZXRTZWxlY3Rpb25CYXJDb2xvcigpO1xuICAgICAgfVxuICAgICAgaWYgKCF0aWNrLnNlbGVjdGVkICYmICFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLnZpZXdPcHRpb25zLmdldFRpY2tDb2xvcikpIHtcbiAgICAgICAgdGljay5zdHlsZVsnYmFja2dyb3VuZC1jb2xvciddID0gdGhpcy5nZXRUaWNrQ29sb3IodmFsdWUpO1xuICAgICAgfVxuICAgICAgaWYgKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLnZpZXdPcHRpb25zLnRpY2tzVG9vbHRpcCkpIHtcbiAgICAgICAgdGljay50b29sdGlwID0gdGhpcy52aWV3T3B0aW9ucy50aWNrc1Rvb2x0aXAodmFsdWUpO1xuICAgICAgICB0aWNrLnRvb2x0aXBQbGFjZW1lbnQgPSB0aGlzLnZpZXdPcHRpb25zLnZlcnRpY2FsID8gJ3JpZ2h0JyA6ICd0b3AnO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMudmlld09wdGlvbnMuc2hvd1RpY2tzVmFsdWVzICYmICFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aWNrVmFsdWVTdGVwKSAmJlxuICAgICAgICAgIE1hdGhIZWxwZXIuaXNNb2R1bG9XaXRoaW5QcmVjaXNpb25MaW1pdCh2YWx1ZSwgdGlja1ZhbHVlU3RlcCwgdGhpcy52aWV3T3B0aW9ucy5wcmVjaXNpb25MaW1pdCkpIHtcbiAgICAgICAgdGljay52YWx1ZSA9IHRoaXMuZ2V0RGlzcGxheVZhbHVlKHZhbHVlLCBMYWJlbFR5cGUuVGlja1ZhbHVlKTtcbiAgICAgICAgaWYgKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLnZpZXdPcHRpb25zLnRpY2tzVmFsdWVzVG9vbHRpcCkpIHtcbiAgICAgICAgICB0aWNrLnZhbHVlVG9vbHRpcCA9IHRoaXMudmlld09wdGlvbnMudGlja3NWYWx1ZXNUb29sdGlwKHZhbHVlKTtcbiAgICAgICAgICB0aWNrLnZhbHVlVG9vbHRpcFBsYWNlbWVudCA9IHRoaXMudmlld09wdGlvbnMudmVydGljYWxcbiAgICAgICAgICAgID8gJ3JpZ2h0J1xuICAgICAgICAgICAgOiAndG9wJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsZXQgbGVnZW5kOiBzdHJpbmcgPSBudWxsO1xuICAgICAgaWYgKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLnZpZXdPcHRpb25zLnN0ZXBzQXJyYXkpKSB7XG4gICAgICAgIGNvbnN0IHN0ZXA6IEN1c3RvbVN0ZXBEZWZpbml0aW9uID0gdGhpcy52aWV3T3B0aW9ucy5zdGVwc0FycmF5W3ZhbHVlXTtcbiAgICAgICAgaWYgKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZChzdGVwKSkge1xuICAgICAgICAgIGxlZ2VuZCA9IHN0ZXAubGVnZW5kO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLnZpZXdPcHRpb25zLmdldExlZ2VuZCkpIHtcbiAgICAgICAgbGVnZW5kID0gdGhpcy52aWV3T3B0aW9ucy5nZXRMZWdlbmQodmFsdWUpO1xuICAgICAgfVxuICAgICAgaWYgKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZChsZWdlbmQpKSB7XG4gICAgICAgIHRpY2subGVnZW5kID0gbGVnZW5kO1xuICAgICAgICBoYXNBdExlYXN0T25lTGVnZW5kID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRpY2s7XG4gICAgfSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5zbGlkZXJFbGVtZW50V2l0aExlZ2VuZENsYXNzID0gaGFzQXRMZWFzdE9uZUxlZ2VuZDsgfSk7XG5cbiAgICAvLyBXZSBzaG91bGQgYXZvaWQgcmUtY3JlYXRpbmcgdGhlIHRpY2tzIGFycmF5IGlmIHBvc3NpYmxlXG4gICAgLy8gVGhpcyBib3RoIGltcHJvdmVzIHBlcmZvcm1hbmNlIGFuZCBtYWtlcyBDU1MgYW5pbWF0aW9ucyB3b3JrIGNvcnJlY3RseVxuICAgIGlmICghVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy50aWNrcykgJiYgdGhpcy50aWNrcy5sZW5ndGggPT09IG5ld1RpY2tzLmxlbmd0aCkge1xuICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSAgPCBuZXdUaWNrcy5sZW5ndGg7ICsraSkge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRoaXMudGlja3NbaV0sIG5ld1RpY2tzW2ldKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy50aWNrcyA9IG5ld1RpY2tzO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5pc1JlZkRlc3Ryb3llZCgpKSB7XG4gICAgICB0aGlzLmNoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRUaWNrc0FycmF5KCk6IG51bWJlcltdIHtcbiAgICBjb25zdCBzdGVwOiBudW1iZXIgPSAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudmlld09wdGlvbnMudGlja1N0ZXApKSA/IHRoaXMudmlld09wdGlvbnMudGlja1N0ZXAgOiB0aGlzLnZpZXdPcHRpb25zLnN0ZXA7XG4gICAgY29uc3QgdGlja3NBcnJheTogbnVtYmVyW10gPSBbXTtcblxuICAgIGNvbnN0IG51bWJlck9mVmFsdWVzOiBudW1iZXIgPSAxICsgTWF0aC5mbG9vcihNYXRoSGVscGVyLnJvdW5kVG9QcmVjaXNpb25MaW1pdChcbiAgICAgIE1hdGguYWJzKHRoaXMudmlld09wdGlvbnMuY2VpbCAtIHRoaXMudmlld09wdGlvbnMuZmxvb3IpIC8gc3RlcCxcbiAgICAgIHRoaXMudmlld09wdGlvbnMucHJlY2lzaW9uTGltaXRcbiAgICApKTtcbiAgICBmb3IgKGxldCBpbmRleDogbnVtYmVyID0gMDsgaW5kZXggPCBudW1iZXJPZlZhbHVlczsgKytpbmRleCkge1xuICAgICAgdGlja3NBcnJheS5wdXNoKE1hdGhIZWxwZXIucm91bmRUb1ByZWNpc2lvbkxpbWl0KHRoaXMudmlld09wdGlvbnMuZmxvb3IgKyBzdGVwICogaW5kZXgsIHRoaXMudmlld09wdGlvbnMucHJlY2lzaW9uTGltaXQpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGlja3NBcnJheTtcbiAgfVxuXG4gIHByaXZhdGUgaXNUaWNrU2VsZWN0ZWQodmFsdWU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5yYW5nZSkge1xuICAgICAgaWYgKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLnZpZXdPcHRpb25zLnNob3dTZWxlY3Rpb25CYXJGcm9tVmFsdWUpKSB7XG4gICAgICAgIGNvbnN0IGNlbnRlcjogbnVtYmVyID0gdGhpcy52aWV3T3B0aW9ucy5zaG93U2VsZWN0aW9uQmFyRnJvbVZhbHVlO1xuICAgICAgICBpZiAodGhpcy52aWV3TG93VmFsdWUgPiBjZW50ZXIgJiZcbiAgICAgICAgICAgIHZhbHVlID49IGNlbnRlciAmJlxuICAgICAgICAgICAgdmFsdWUgPD0gdGhpcy52aWV3TG93VmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnZpZXdMb3dWYWx1ZSA8IGNlbnRlciAmJlxuICAgICAgICAgICAgICAgICAgIHZhbHVlIDw9IGNlbnRlciAmJlxuICAgICAgICAgICAgICAgICAgIHZhbHVlID49IHRoaXMudmlld0xvd1ZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy52aWV3T3B0aW9ucy5zaG93U2VsZWN0aW9uQmFyRW5kKSB7XG4gICAgICAgIGlmICh2YWx1ZSA+PSB0aGlzLnZpZXdMb3dWYWx1ZSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMudmlld09wdGlvbnMuc2hvd1NlbGVjdGlvbkJhciAmJiB2YWx1ZSA8PSB0aGlzLnZpZXdMb3dWYWx1ZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5yYW5nZSAmJiB2YWx1ZSA+PSB0aGlzLnZpZXdMb3dWYWx1ZSAmJiB2YWx1ZSA8PSB0aGlzLnZpZXdIaWdoVmFsdWUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIFVwZGF0ZSBwb3NpdGlvbiBvZiB0aGUgZmxvb3IgbGFiZWxcbiAgcHJpdmF0ZSB1cGRhdGVGbG9vckxhYmVsKCk6IHZvaWQge1xuICAgIGlmICghdGhpcy5mbG9vckxhYmVsRWxlbWVudC5hbHdheXNIaWRlKSB7XG4gICAgICB0aGlzLmZsb29yTGFiZWxFbGVtZW50LnNldFZhbHVlKHRoaXMuZ2V0RGlzcGxheVZhbHVlKHRoaXMudmlld09wdGlvbnMuZmxvb3IsIExhYmVsVHlwZS5GbG9vcikpO1xuICAgICAgdGhpcy5mbG9vckxhYmVsRWxlbWVudC5jYWxjdWxhdGVEaW1lbnNpb24oKTtcbiAgICAgIGNvbnN0IHBvc2l0aW9uOiBudW1iZXIgPSB0aGlzLnZpZXdPcHRpb25zLnJpZ2h0VG9MZWZ0XG4gICAgICAgID8gdGhpcy5mdWxsQmFyRWxlbWVudC5kaW1lbnNpb24gLSB0aGlzLmZsb29yTGFiZWxFbGVtZW50LmRpbWVuc2lvblxuICAgICAgICA6IDA7XG4gICAgICB0aGlzLmZsb29yTGFiZWxFbGVtZW50LnNldFBvc2l0aW9uKHBvc2l0aW9uKTtcbiAgICB9XG4gIH1cblxuICAvLyBVcGRhdGUgcG9zaXRpb24gb2YgdGhlIGNlaWxpbmcgbGFiZWxcbiAgcHJpdmF0ZSB1cGRhdGVDZWlsTGFiZWwoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmNlaWxMYWJlbEVsZW1lbnQuYWx3YXlzSGlkZSkge1xuICAgICAgdGhpcy5jZWlsTGFiZWxFbGVtZW50LnNldFZhbHVlKHRoaXMuZ2V0RGlzcGxheVZhbHVlKHRoaXMudmlld09wdGlvbnMuY2VpbCwgTGFiZWxUeXBlLkNlaWwpKTtcbiAgICAgIHRoaXMuY2VpbExhYmVsRWxlbWVudC5jYWxjdWxhdGVEaW1lbnNpb24oKTtcbiAgICAgIGNvbnN0IHBvc2l0aW9uOiBudW1iZXIgPSB0aGlzLnZpZXdPcHRpb25zLnJpZ2h0VG9MZWZ0XG4gICAgICAgID8gMFxuICAgICAgICA6IHRoaXMuZnVsbEJhckVsZW1lbnQuZGltZW5zaW9uIC0gdGhpcy5jZWlsTGFiZWxFbGVtZW50LmRpbWVuc2lvbjtcbiAgICAgIHRoaXMuY2VpbExhYmVsRWxlbWVudC5zZXRQb3NpdGlvbihwb3NpdGlvbik7XG4gICAgfVxuICB9XG5cbiAgLy8gVXBkYXRlIHNsaWRlciBoYW5kbGVzIGFuZCBsYWJlbCBwb3NpdGlvbnNcbiAgcHJpdmF0ZSB1cGRhdGVIYW5kbGVzKHdoaWNoOiBQb2ludGVyVHlwZSwgbmV3UG9zOiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAod2hpY2ggPT09IFBvaW50ZXJUeXBlLk1pbikge1xuICAgICAgdGhpcy51cGRhdGVMb3dIYW5kbGUobmV3UG9zKTtcbiAgICB9IGVsc2UgaWYgKHdoaWNoID09PSBQb2ludGVyVHlwZS5NYXgpIHtcbiAgICAgIHRoaXMudXBkYXRlSGlnaEhhbmRsZShuZXdQb3MpO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlU2VsZWN0aW9uQmFyKCk7XG4gICAgdGhpcy51cGRhdGVUaWNrc1NjYWxlKCk7XG4gICAgaWYgKHRoaXMucmFuZ2UpIHtcbiAgICAgIHRoaXMudXBkYXRlQ29tYmluZWRMYWJlbCgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEhlbHBlciBmdW5jdGlvbiB0byB3b3JrIG91dCB0aGUgcG9zaXRpb24gZm9yIGhhbmRsZSBsYWJlbHMgZGVwZW5kaW5nIG9uIFJUTCBvciBub3RcbiAgcHJpdmF0ZSBnZXRIYW5kbGVMYWJlbFBvcyhsYWJlbFR5cGU6IFBvaW50ZXJUeXBlLCBuZXdQb3M6IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3QgbGFiZWxEaW1lbnNpb246IG51bWJlciA9IChsYWJlbFR5cGUgPT09IFBvaW50ZXJUeXBlLk1pbilcbiAgICAgID8gdGhpcy5taW5IYW5kbGVMYWJlbEVsZW1lbnQuZGltZW5zaW9uXG4gICAgICA6IHRoaXMubWF4SGFuZGxlTGFiZWxFbGVtZW50LmRpbWVuc2lvbjtcbiAgICBjb25zdCBuZWFySGFuZGxlUG9zOiBudW1iZXIgPSBuZXdQb3MgLSBsYWJlbERpbWVuc2lvbiAvIDIgKyB0aGlzLmhhbmRsZUhhbGZEaW1lbnNpb247XG4gICAgY29uc3QgZW5kT2ZCYXJQb3M6IG51bWJlciA9IHRoaXMuZnVsbEJhckVsZW1lbnQuZGltZW5zaW9uIC0gbGFiZWxEaW1lbnNpb247XG5cbiAgICBpZiAoIXRoaXMudmlld09wdGlvbnMuYm91bmRQb2ludGVyTGFiZWxzKSB7XG4gICAgICByZXR1cm4gbmVhckhhbmRsZVBvcztcbiAgICB9XG5cbiAgICBpZiAoKHRoaXMudmlld09wdGlvbnMucmlnaHRUb0xlZnQgJiYgbGFiZWxUeXBlID09PSBQb2ludGVyVHlwZS5NaW4pIHx8XG4gICAgICAgKCF0aGlzLnZpZXdPcHRpb25zLnJpZ2h0VG9MZWZ0ICYmIGxhYmVsVHlwZSA9PT0gUG9pbnRlclR5cGUuTWF4KSkge1xuICAgICAgcmV0dXJuIE1hdGgubWluKG5lYXJIYW5kbGVQb3MsIGVuZE9mQmFyUG9zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE1hdGgubWluKE1hdGgubWF4KG5lYXJIYW5kbGVQb3MsIDApLCBlbmRPZkJhclBvcyk7XG4gICAgfVxuICB9XG5cbiAgLy8gVXBkYXRlIGxvdyBzbGlkZXIgaGFuZGxlIHBvc2l0aW9uIGFuZCBsYWJlbFxuICBwcml2YXRlIHVwZGF0ZUxvd0hhbmRsZShuZXdQb3M6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMubWluSGFuZGxlRWxlbWVudC5zZXRQb3NpdGlvbihuZXdQb3MpO1xuICAgIHRoaXMubWluSGFuZGxlTGFiZWxFbGVtZW50LnNldFZhbHVlKHRoaXMuZ2V0RGlzcGxheVZhbHVlKHRoaXMudmlld0xvd1ZhbHVlLCBMYWJlbFR5cGUuTG93KSk7XG4gICAgdGhpcy5taW5IYW5kbGVMYWJlbEVsZW1lbnQuc2V0UG9zaXRpb24odGhpcy5nZXRIYW5kbGVMYWJlbFBvcyhQb2ludGVyVHlwZS5NaW4sIG5ld1BvcykpO1xuXG4gICAgaWYgKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLnZpZXdPcHRpb25zLmdldFBvaW50ZXJDb2xvcikpIHtcbiAgICAgIHRoaXMubWluUG9pbnRlclN0eWxlID0ge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoaXMuZ2V0UG9pbnRlckNvbG9yKFBvaW50ZXJUeXBlLk1pbiksXG4gICAgICB9O1xuICAgIH1cblxuICAgIGlmICh0aGlzLnZpZXdPcHRpb25zLmF1dG9IaWRlTGltaXRMYWJlbHMpIHtcbiAgICAgIHRoaXMudXBkYXRlRmxvb3JBbmRDZWlsTGFiZWxzVmlzaWJpbGl0eSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFVwZGF0ZSBoaWdoIHNsaWRlciBoYW5kbGUgcG9zaXRpb24gYW5kIGxhYmVsXG4gIHByaXZhdGUgdXBkYXRlSGlnaEhhbmRsZShuZXdQb3M6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMubWF4SGFuZGxlRWxlbWVudC5zZXRQb3NpdGlvbihuZXdQb3MpO1xuICAgIHRoaXMubWF4SGFuZGxlTGFiZWxFbGVtZW50LnNldFZhbHVlKHRoaXMuZ2V0RGlzcGxheVZhbHVlKHRoaXMudmlld0hpZ2hWYWx1ZSwgTGFiZWxUeXBlLkhpZ2gpKTtcbiAgICB0aGlzLm1heEhhbmRsZUxhYmVsRWxlbWVudC5zZXRQb3NpdGlvbih0aGlzLmdldEhhbmRsZUxhYmVsUG9zKFBvaW50ZXJUeXBlLk1heCwgbmV3UG9zKSk7XG5cbiAgICBpZiAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudmlld09wdGlvbnMuZ2V0UG9pbnRlckNvbG9yKSkge1xuICAgICAgdGhpcy5tYXhQb2ludGVyU3R5bGUgPSB7XG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogdGhpcy5nZXRQb2ludGVyQ29sb3IoUG9pbnRlclR5cGUuTWF4KSxcbiAgICAgIH07XG4gICAgfVxuICAgIGlmICh0aGlzLnZpZXdPcHRpb25zLmF1dG9IaWRlTGltaXRMYWJlbHMpIHtcbiAgICAgIHRoaXMudXBkYXRlRmxvb3JBbmRDZWlsTGFiZWxzVmlzaWJpbGl0eSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIFNob3cvaGlkZSBmbG9vci9jZWlsaW5nIGxhYmVsXG4gIHByaXZhdGUgdXBkYXRlRmxvb3JBbmRDZWlsTGFiZWxzVmlzaWJpbGl0eSgpOiB2b2lkIHtcbiAgICAvLyBTaG93IGJhc2VkIG9ubHkgb24gaGlkZUxpbWl0TGFiZWxzIGlmIHBvaW50ZXIgbGFiZWxzIGFyZSBoaWRkZW5cbiAgICBpZiAodGhpcy52aWV3T3B0aW9ucy5oaWRlUG9pbnRlckxhYmVscykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgZmxvb3JMYWJlbEhpZGRlbjogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGxldCBjZWlsTGFiZWxIaWRkZW46IGJvb2xlYW4gPSBmYWxzZTtcbiAgICBjb25zdCBpc01pbkxhYmVsQXRGbG9vcjogYm9vbGVhbiA9IHRoaXMuaXNMYWJlbEJlbG93Rmxvb3JMYWJlbCh0aGlzLm1pbkhhbmRsZUxhYmVsRWxlbWVudCk7XG4gICAgY29uc3QgaXNNaW5MYWJlbEF0Q2VpbDogYm9vbGVhbiA9IHRoaXMuaXNMYWJlbEFib3ZlQ2VpbExhYmVsKHRoaXMubWluSGFuZGxlTGFiZWxFbGVtZW50KTtcbiAgICBjb25zdCBpc01heExhYmVsQXRDZWlsOiBib29sZWFuID0gdGhpcy5pc0xhYmVsQWJvdmVDZWlsTGFiZWwodGhpcy5tYXhIYW5kbGVMYWJlbEVsZW1lbnQpO1xuICAgIGNvbnN0IGlzQ29tYmluZWRMYWJlbEF0Rmxvb3I6IGJvb2xlYW4gPSB0aGlzLmlzTGFiZWxCZWxvd0Zsb29yTGFiZWwodGhpcy5jb21iaW5lZExhYmVsRWxlbWVudCk7XG4gICAgY29uc3QgaXNDb21iaW5lZExhYmVsQXRDZWlsOiBib29sZWFuID0gdGhpcy5pc0xhYmVsQWJvdmVDZWlsTGFiZWwodGhpcy5jb21iaW5lZExhYmVsRWxlbWVudCk7XG5cbiAgICBpZiAoaXNNaW5MYWJlbEF0Rmxvb3IpIHtcbiAgICAgIGZsb29yTGFiZWxIaWRkZW4gPSB0cnVlO1xuICAgICAgdGhpcy5mbG9vckxhYmVsRWxlbWVudC5oaWRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZsb29yTGFiZWxIaWRkZW4gPSBmYWxzZTtcbiAgICAgIHRoaXMuZmxvb3JMYWJlbEVsZW1lbnQuc2hvdygpO1xuICAgIH1cblxuICAgIGlmIChpc01pbkxhYmVsQXRDZWlsKSB7XG4gICAgICBjZWlsTGFiZWxIaWRkZW4gPSB0cnVlO1xuICAgICAgdGhpcy5jZWlsTGFiZWxFbGVtZW50LmhpZGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2VpbExhYmVsSGlkZGVuID0gZmFsc2U7XG4gICAgICB0aGlzLmNlaWxMYWJlbEVsZW1lbnQuc2hvdygpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnJhbmdlKSB7XG4gICAgICBjb25zdCBoaWRlQ2VpbDogYm9vbGVhbiA9IHRoaXMuY29tYmluZWRMYWJlbEVsZW1lbnQuaXNWaXNpYmxlKCkgPyBpc0NvbWJpbmVkTGFiZWxBdENlaWwgOiBpc01heExhYmVsQXRDZWlsO1xuICAgICAgY29uc3QgaGlkZUZsb29yOiBib29sZWFuID0gdGhpcy5jb21iaW5lZExhYmVsRWxlbWVudC5pc1Zpc2libGUoKSA/IGlzQ29tYmluZWRMYWJlbEF0Rmxvb3IgOiBpc01pbkxhYmVsQXRGbG9vcjtcblxuICAgICAgaWYgKGhpZGVDZWlsKSB7XG4gICAgICAgIHRoaXMuY2VpbExhYmVsRWxlbWVudC5oaWRlKCk7XG4gICAgICB9IGVsc2UgaWYgKCFjZWlsTGFiZWxIaWRkZW4pIHtcbiAgICAgICAgdGhpcy5jZWlsTGFiZWxFbGVtZW50LnNob3coKTtcbiAgICAgIH1cblxuICAgICAgLy8gSGlkZSBvciBzaG93IGZsb29yIGxhYmVsXG4gICAgICBpZiAoaGlkZUZsb29yKSB7XG4gICAgICAgIHRoaXMuZmxvb3JMYWJlbEVsZW1lbnQuaGlkZSgpO1xuICAgICAgfSBlbHNlIGlmICghZmxvb3JMYWJlbEhpZGRlbikge1xuICAgICAgICB0aGlzLmZsb29yTGFiZWxFbGVtZW50LnNob3coKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGlzTGFiZWxCZWxvd0Zsb29yTGFiZWwobGFiZWw6IFNsaWRlckxhYmVsRGlyZWN0aXZlKTogYm9vbGVhbiB7XG4gICAgY29uc3QgcG9zOiBudW1iZXIgPSBsYWJlbC5wb3NpdGlvbjtcbiAgICBjb25zdCBkaW06IG51bWJlciA9IGxhYmVsLmRpbWVuc2lvbjtcbiAgICBjb25zdCBmbG9vclBvczogbnVtYmVyID0gdGhpcy5mbG9vckxhYmVsRWxlbWVudC5wb3NpdGlvbjtcbiAgICBjb25zdCBmbG9vckRpbTogbnVtYmVyID0gdGhpcy5mbG9vckxhYmVsRWxlbWVudC5kaW1lbnNpb247XG4gICAgcmV0dXJuIHRoaXMudmlld09wdGlvbnMucmlnaHRUb0xlZnRcbiAgICAgID8gcG9zICsgZGltID49IGZsb29yUG9zIC0gMlxuICAgICAgOiBwb3MgPD0gZmxvb3JQb3MgKyBmbG9vckRpbSArIDI7XG4gIH1cblxuICBwcml2YXRlIGlzTGFiZWxBYm92ZUNlaWxMYWJlbChsYWJlbDogU2xpZGVyTGFiZWxEaXJlY3RpdmUpOiBib29sZWFuIHtcbiAgICBjb25zdCBwb3M6IG51bWJlciA9IGxhYmVsLnBvc2l0aW9uO1xuICAgIGNvbnN0IGRpbTogbnVtYmVyID0gbGFiZWwuZGltZW5zaW9uO1xuICAgIGNvbnN0IGNlaWxQb3M6IG51bWJlciA9IHRoaXMuY2VpbExhYmVsRWxlbWVudC5wb3NpdGlvbjtcbiAgICBjb25zdCBjZWlsRGltOiBudW1iZXIgPSB0aGlzLmNlaWxMYWJlbEVsZW1lbnQuZGltZW5zaW9uO1xuICAgIHJldHVybiB0aGlzLnZpZXdPcHRpb25zLnJpZ2h0VG9MZWZ0XG4gICAgICA/IHBvcyA8PSBjZWlsUG9zICsgY2VpbERpbSArIDJcbiAgICAgIDogcG9zICsgZGltID49IGNlaWxQb3MgLSAyO1xuICB9XG5cbiAgLy8gVXBkYXRlIHNsaWRlciBzZWxlY3Rpb24gYmFyLCBjb21iaW5lZCBsYWJlbCBhbmQgcmFuZ2UgbGFiZWxcbiAgcHJpdmF0ZSB1cGRhdGVTZWxlY3Rpb25CYXIoKTogdm9pZCB7XG4gICAgbGV0IHBvc2l0aW9uOiBudW1iZXIgPSAwO1xuICAgIGxldCBkaW1lbnNpb246IG51bWJlciA9IDA7XG4gICAgY29uc3QgaXNTZWxlY3Rpb25CYXJGcm9tUmlnaHQ6IGJvb2xlYW4gPSB0aGlzLnZpZXdPcHRpb25zLnJpZ2h0VG9MZWZ0XG4gICAgICAgID8gIXRoaXMudmlld09wdGlvbnMuc2hvd1NlbGVjdGlvbkJhckVuZFxuICAgICAgICA6IHRoaXMudmlld09wdGlvbnMuc2hvd1NlbGVjdGlvbkJhckVuZDtcbiAgICBjb25zdCBwb3NpdGlvbkZvclJhbmdlOiBudW1iZXIgPSB0aGlzLnZpZXdPcHRpb25zLnJpZ2h0VG9MZWZ0XG4gICAgICAgID8gdGhpcy5tYXhIYW5kbGVFbGVtZW50LnBvc2l0aW9uICsgdGhpcy5oYW5kbGVIYWxmRGltZW5zaW9uXG4gICAgICAgIDogdGhpcy5taW5IYW5kbGVFbGVtZW50LnBvc2l0aW9uICsgdGhpcy5oYW5kbGVIYWxmRGltZW5zaW9uO1xuXG4gICAgaWYgKHRoaXMucmFuZ2UpIHtcbiAgICAgIGRpbWVuc2lvbiA9IE1hdGguYWJzKHRoaXMubWF4SGFuZGxlRWxlbWVudC5wb3NpdGlvbiAtIHRoaXMubWluSGFuZGxlRWxlbWVudC5wb3NpdGlvbik7XG4gICAgICBwb3NpdGlvbiA9IHBvc2l0aW9uRm9yUmFuZ2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy52aWV3T3B0aW9ucy5zaG93U2VsZWN0aW9uQmFyRnJvbVZhbHVlKSkge1xuICAgICAgICBjb25zdCBjZW50ZXI6IG51bWJlciA9IHRoaXMudmlld09wdGlvbnMuc2hvd1NlbGVjdGlvbkJhckZyb21WYWx1ZTtcbiAgICAgICAgY29uc3QgY2VudGVyUG9zaXRpb246IG51bWJlciA9IHRoaXMudmFsdWVUb1Bvc2l0aW9uKGNlbnRlcik7XG4gICAgICAgIGNvbnN0IGlzTW9kZWxHcmVhdGVyVGhhbkNlbnRlcjogYm9vbGVhbiA9IHRoaXMudmlld09wdGlvbnMucmlnaHRUb0xlZnRcbiAgICAgICAgICAgID8gdGhpcy52aWV3TG93VmFsdWUgPD0gY2VudGVyXG4gICAgICAgICAgICA6IHRoaXMudmlld0xvd1ZhbHVlID4gY2VudGVyO1xuICAgICAgICBpZiAoaXNNb2RlbEdyZWF0ZXJUaGFuQ2VudGVyKSB7XG4gICAgICAgICAgZGltZW5zaW9uID0gdGhpcy5taW5IYW5kbGVFbGVtZW50LnBvc2l0aW9uIC0gY2VudGVyUG9zaXRpb247XG4gICAgICAgICAgcG9zaXRpb24gPSBjZW50ZXJQb3NpdGlvbiArIHRoaXMuaGFuZGxlSGFsZkRpbWVuc2lvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBkaW1lbnNpb24gPSBjZW50ZXJQb3NpdGlvbiAtIHRoaXMubWluSGFuZGxlRWxlbWVudC5wb3NpdGlvbjtcbiAgICAgICAgICBwb3NpdGlvbiA9IHRoaXMubWluSGFuZGxlRWxlbWVudC5wb3NpdGlvbiArIHRoaXMuaGFuZGxlSGFsZkRpbWVuc2lvbjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChpc1NlbGVjdGlvbkJhckZyb21SaWdodCkge1xuICAgICAgICBkaW1lbnNpb24gPSBNYXRoLmNlaWwoTWF0aC5hYnModGhpcy5tYXhIYW5kbGVQb3NpdGlvbiAtIHRoaXMubWluSGFuZGxlRWxlbWVudC5wb3NpdGlvbikgKyB0aGlzLmhhbmRsZUhhbGZEaW1lbnNpb24pO1xuICAgICAgICBwb3NpdGlvbiA9IE1hdGguZmxvb3IodGhpcy5taW5IYW5kbGVFbGVtZW50LnBvc2l0aW9uICsgdGhpcy5oYW5kbGVIYWxmRGltZW5zaW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpbWVuc2lvbiA9IHRoaXMubWluSGFuZGxlRWxlbWVudC5wb3NpdGlvbiArIHRoaXMuaGFuZGxlSGFsZkRpbWVuc2lvbjtcbiAgICAgICAgcG9zaXRpb24gPSAwO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLnNlbGVjdGlvbkJhckVsZW1lbnQuc2V0RGltZW5zaW9uKGRpbWVuc2lvbik7XG4gICAgdGhpcy5zZWxlY3Rpb25CYXJFbGVtZW50LnNldFBvc2l0aW9uKHBvc2l0aW9uKTtcbiAgICBpZiAodGhpcy5yYW5nZSAmJiB0aGlzLnZpZXdPcHRpb25zLnNob3dPdXRlclNlbGVjdGlvbkJhcnMpIHtcbiAgICAgIGlmICh0aGlzLnZpZXdPcHRpb25zLnJpZ2h0VG9MZWZ0KSB7XG4gICAgICAgIHRoaXMucmlnaHRPdXRlclNlbGVjdGlvbkJhckVsZW1lbnQuc2V0RGltZW5zaW9uKHBvc2l0aW9uKTtcbiAgICAgICAgdGhpcy5yaWdodE91dGVyU2VsZWN0aW9uQmFyRWxlbWVudC5zZXRQb3NpdGlvbigwKTtcbiAgICAgICAgdGhpcy5mdWxsQmFyRWxlbWVudC5jYWxjdWxhdGVEaW1lbnNpb24oKTtcbiAgICAgICAgdGhpcy5sZWZ0T3V0ZXJTZWxlY3Rpb25CYXJFbGVtZW50LnNldERpbWVuc2lvbih0aGlzLmZ1bGxCYXJFbGVtZW50LmRpbWVuc2lvbiAtIChwb3NpdGlvbiArIGRpbWVuc2lvbikpO1xuICAgICAgICB0aGlzLmxlZnRPdXRlclNlbGVjdGlvbkJhckVsZW1lbnQuc2V0UG9zaXRpb24ocG9zaXRpb24gKyBkaW1lbnNpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sZWZ0T3V0ZXJTZWxlY3Rpb25CYXJFbGVtZW50LnNldERpbWVuc2lvbihwb3NpdGlvbik7XG4gICAgICAgIHRoaXMubGVmdE91dGVyU2VsZWN0aW9uQmFyRWxlbWVudC5zZXRQb3NpdGlvbigwKTtcbiAgICAgICAgdGhpcy5mdWxsQmFyRWxlbWVudC5jYWxjdWxhdGVEaW1lbnNpb24oKTtcbiAgICAgICAgdGhpcy5yaWdodE91dGVyU2VsZWN0aW9uQmFyRWxlbWVudC5zZXREaW1lbnNpb24odGhpcy5mdWxsQmFyRWxlbWVudC5kaW1lbnNpb24gLSAocG9zaXRpb24gKyBkaW1lbnNpb24pKTtcbiAgICAgICAgdGhpcy5yaWdodE91dGVyU2VsZWN0aW9uQmFyRWxlbWVudC5zZXRQb3NpdGlvbihwb3NpdGlvbiArIGRpbWVuc2lvbik7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy52aWV3T3B0aW9ucy5nZXRTZWxlY3Rpb25CYXJDb2xvcikpIHtcbiAgICAgIGNvbnN0IGNvbG9yOiBzdHJpbmcgPSB0aGlzLmdldFNlbGVjdGlvbkJhckNvbG9yKCk7XG4gICAgICB0aGlzLmJhclN0eWxlID0ge1xuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGNvbG9yLFxuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLnZpZXdPcHRpb25zLnNlbGVjdGlvbkJhckdyYWRpZW50KSkge1xuICAgICAgY29uc3Qgb2Zmc2V0OiBudW1iZXIgPSAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudmlld09wdGlvbnMuc2hvd1NlbGVjdGlvbkJhckZyb21WYWx1ZSkpXG4gICAgICAgICAgICA/IHRoaXMudmFsdWVUb1Bvc2l0aW9uKHRoaXMudmlld09wdGlvbnMuc2hvd1NlbGVjdGlvbkJhckZyb21WYWx1ZSlcbiAgICAgICAgICAgIDogMDtcbiAgICAgIGNvbnN0IHJldmVyc2VkOiBib29sZWFuID0gKG9mZnNldCAtIHBvc2l0aW9uID4gMCAmJiAhaXNTZWxlY3Rpb25CYXJGcm9tUmlnaHQpIHx8IChvZmZzZXQgLSBwb3NpdGlvbiA8PSAwICYmIGlzU2VsZWN0aW9uQmFyRnJvbVJpZ2h0KTtcbiAgICAgIGNvbnN0IGRpcmVjdGlvbjogc3RyaW5nID0gdGhpcy52aWV3T3B0aW9ucy52ZXJ0aWNhbFxuICAgICAgICAgID8gcmV2ZXJzZWQgPyAnYm90dG9tJyA6ICd0b3AnXG4gICAgICAgICAgOiByZXZlcnNlZCA/ICdsZWZ0JyA6ICdyaWdodCc7XG4gICAgICB0aGlzLmJhclN0eWxlID0ge1xuICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6XG4gICAgICAgICAgJ2xpbmVhci1ncmFkaWVudCh0byAnICtcbiAgICAgICAgICBkaXJlY3Rpb24gK1xuICAgICAgICAgICcsICcgK1xuICAgICAgICAgIHRoaXMudmlld09wdGlvbnMuc2VsZWN0aW9uQmFyR3JhZGllbnQuZnJvbSArXG4gICAgICAgICAgJyAwJSwnICtcbiAgICAgICAgICB0aGlzLnZpZXdPcHRpb25zLnNlbGVjdGlvbkJhckdyYWRpZW50LnRvICtcbiAgICAgICAgICAnIDEwMCUpJyxcbiAgICAgIH07XG4gICAgICBpZiAodGhpcy52aWV3T3B0aW9ucy52ZXJ0aWNhbCkge1xuICAgICAgICB0aGlzLmJhclN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9XG4gICAgICAgICAgJ2NlbnRlciAnICtcbiAgICAgICAgICAob2Zmc2V0ICtcbiAgICAgICAgICAgIGRpbWVuc2lvbiArXG4gICAgICAgICAgICBwb3NpdGlvbiArXG4gICAgICAgICAgICAocmV2ZXJzZWQgPyAtdGhpcy5oYW5kbGVIYWxmRGltZW5zaW9uIDogMCkpICtcbiAgICAgICAgICAncHgnO1xuICAgICAgICB0aGlzLmJhclN0eWxlLmJhY2tncm91bmRTaXplID1cbiAgICAgICAgICAnMTAwJSAnICsgKHRoaXMuZnVsbEJhckVsZW1lbnQuZGltZW5zaW9uIC0gdGhpcy5oYW5kbGVIYWxmRGltZW5zaW9uKSArICdweCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmJhclN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9XG4gICAgICAgICAgb2Zmc2V0IC1cbiAgICAgICAgICBwb3NpdGlvbiArXG4gICAgICAgICAgKHJldmVyc2VkID8gdGhpcy5oYW5kbGVIYWxmRGltZW5zaW9uIDogMCkgK1xuICAgICAgICAgICdweCBjZW50ZXInO1xuICAgICAgICB0aGlzLmJhclN0eWxlLmJhY2tncm91bmRTaXplID1cbiAgICAgICAgICB0aGlzLmZ1bGxCYXJFbGVtZW50LmRpbWVuc2lvbiAtIHRoaXMuaGFuZGxlSGFsZkRpbWVuc2lvbiArICdweCAxMDAlJztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvLyBXcmFwcGVyIGFyb3VuZCB0aGUgZ2V0U2VsZWN0aW9uQmFyQ29sb3Igb2YgdGhlIHVzZXIgdG8gcGFzcyB0byBjb3JyZWN0IHBhcmFtZXRlcnNcbiAgcHJpdmF0ZSBnZXRTZWxlY3Rpb25CYXJDb2xvcigpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLnJhbmdlKSB7XG4gICAgICByZXR1cm4gdGhpcy52aWV3T3B0aW9ucy5nZXRTZWxlY3Rpb25CYXJDb2xvcihcbiAgICAgICAgdGhpcy52YWx1ZSxcbiAgICAgICAgdGhpcy5oaWdoVmFsdWVcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnZpZXdPcHRpb25zLmdldFNlbGVjdGlvbkJhckNvbG9yKHRoaXMudmFsdWUpO1xuICB9XG5cbiAgLy8gV3JhcHBlciBhcm91bmQgdGhlIGdldFBvaW50ZXJDb2xvciBvZiB0aGUgdXNlciB0byBwYXNzIHRvICBjb3JyZWN0IHBhcmFtZXRlcnNcbiAgcHJpdmF0ZSBnZXRQb2ludGVyQ29sb3IocG9pbnRlclR5cGU6IFBvaW50ZXJUeXBlKTogc3RyaW5nIHtcbiAgICBpZiAocG9pbnRlclR5cGUgPT09IFBvaW50ZXJUeXBlLk1heCkge1xuICAgICAgcmV0dXJuIHRoaXMudmlld09wdGlvbnMuZ2V0UG9pbnRlckNvbG9yKFxuICAgICAgICB0aGlzLmhpZ2hWYWx1ZSxcbiAgICAgICAgcG9pbnRlclR5cGVcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnZpZXdPcHRpb25zLmdldFBvaW50ZXJDb2xvcihcbiAgICAgIHRoaXMudmFsdWUsXG4gICAgICBwb2ludGVyVHlwZVxuICAgICk7XG4gIH1cblxuICAvLyBXcmFwcGVyIGFyb3VuZCB0aGUgZ2V0VGlja0NvbG9yIG9mIHRoZSB1c2VyIHRvIHBhc3MgdG8gY29ycmVjdCBwYXJhbWV0ZXJzXG4gIHByaXZhdGUgZ2V0VGlja0NvbG9yKHZhbHVlOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHJldHVybiB0aGlzLnZpZXdPcHRpb25zLmdldFRpY2tDb2xvcih2YWx1ZSk7XG4gIH1cblxuICAvLyBVcGRhdGUgY29tYmluZWQgbGFiZWwgcG9zaXRpb24gYW5kIHZhbHVlXG4gIHByaXZhdGUgdXBkYXRlQ29tYmluZWRMYWJlbCgpOiB2b2lkIHtcbiAgICBsZXQgaXNMYWJlbE92ZXJsYXA6IGJvb2xlYW4gPSBudWxsO1xuICAgIGlmICh0aGlzLnZpZXdPcHRpb25zLnJpZ2h0VG9MZWZ0KSB7XG4gICAgICBpc0xhYmVsT3ZlcmxhcCA9XG4gICAgICAgIHRoaXMubWluSGFuZGxlTGFiZWxFbGVtZW50LnBvc2l0aW9uIC0gdGhpcy5taW5IYW5kbGVMYWJlbEVsZW1lbnQuZGltZW5zaW9uIC0gMTAgPD0gdGhpcy5tYXhIYW5kbGVMYWJlbEVsZW1lbnQucG9zaXRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIGlzTGFiZWxPdmVybGFwID1cbiAgICAgICAgdGhpcy5taW5IYW5kbGVMYWJlbEVsZW1lbnQucG9zaXRpb24gKyB0aGlzLm1pbkhhbmRsZUxhYmVsRWxlbWVudC5kaW1lbnNpb24gKyAxMCA+PSB0aGlzLm1heEhhbmRsZUxhYmVsRWxlbWVudC5wb3NpdGlvbjtcbiAgICB9XG5cbiAgICBpZiAoaXNMYWJlbE92ZXJsYXApIHtcbiAgICAgIGNvbnN0IGxvd0Rpc3BsYXlWYWx1ZTogc3RyaW5nID0gdGhpcy5nZXREaXNwbGF5VmFsdWUodGhpcy52aWV3TG93VmFsdWUsIExhYmVsVHlwZS5Mb3cpO1xuICAgICAgY29uc3QgaGlnaERpc3BsYXlWYWx1ZTogc3RyaW5nID0gdGhpcy5nZXREaXNwbGF5VmFsdWUodGhpcy52aWV3SGlnaFZhbHVlLCBMYWJlbFR5cGUuSGlnaCk7XG4gICAgICBjb25zdCBjb21iaW5lZExhYmVsVmFsdWU6IHN0cmluZyA9IHRoaXMudmlld09wdGlvbnMucmlnaHRUb0xlZnRcbiAgICAgICAgPyB0aGlzLnZpZXdPcHRpb25zLmNvbWJpbmVMYWJlbHMoaGlnaERpc3BsYXlWYWx1ZSwgbG93RGlzcGxheVZhbHVlKVxuICAgICAgICA6IHRoaXMudmlld09wdGlvbnMuY29tYmluZUxhYmVscyhsb3dEaXNwbGF5VmFsdWUsIGhpZ2hEaXNwbGF5VmFsdWUpO1xuXG4gICAgICB0aGlzLmNvbWJpbmVkTGFiZWxFbGVtZW50LnNldFZhbHVlKGNvbWJpbmVkTGFiZWxWYWx1ZSk7XG4gICAgICBjb25zdCBwb3M6IG51bWJlciA9IHRoaXMudmlld09wdGlvbnMuYm91bmRQb2ludGVyTGFiZWxzXG4gICAgICAgID8gTWF0aC5taW4oXG4gICAgICAgICAgICBNYXRoLm1heChcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3Rpb25CYXJFbGVtZW50LnBvc2l0aW9uICtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbkJhckVsZW1lbnQuZGltZW5zaW9uIC8gMiAtXG4gICAgICAgICAgICAgICAgdGhpcy5jb21iaW5lZExhYmVsRWxlbWVudC5kaW1lbnNpb24gLyAyLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgdGhpcy5mdWxsQmFyRWxlbWVudC5kaW1lbnNpb24gLSB0aGlzLmNvbWJpbmVkTGFiZWxFbGVtZW50LmRpbWVuc2lvblxuICAgICAgICAgIClcbiAgICAgICAgOiB0aGlzLnNlbGVjdGlvbkJhckVsZW1lbnQucG9zaXRpb24gKyB0aGlzLnNlbGVjdGlvbkJhckVsZW1lbnQuZGltZW5zaW9uIC8gMiAtIHRoaXMuY29tYmluZWRMYWJlbEVsZW1lbnQuZGltZW5zaW9uIC8gMjtcblxuICAgICAgdGhpcy5jb21iaW5lZExhYmVsRWxlbWVudC5zZXRQb3NpdGlvbihwb3MpO1xuICAgICAgdGhpcy5taW5IYW5kbGVMYWJlbEVsZW1lbnQuaGlkZSgpO1xuICAgICAgdGhpcy5tYXhIYW5kbGVMYWJlbEVsZW1lbnQuaGlkZSgpO1xuICAgICAgdGhpcy5jb21iaW5lZExhYmVsRWxlbWVudC5zaG93KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXBkYXRlSGlnaEhhbmRsZSh0aGlzLnZhbHVlVG9Qb3NpdGlvbih0aGlzLnZpZXdIaWdoVmFsdWUpKTtcbiAgICAgIHRoaXMudXBkYXRlTG93SGFuZGxlKHRoaXMudmFsdWVUb1Bvc2l0aW9uKHRoaXMudmlld0xvd1ZhbHVlKSk7XG4gICAgICB0aGlzLm1heEhhbmRsZUxhYmVsRWxlbWVudC5zaG93KCk7XG4gICAgICB0aGlzLm1pbkhhbmRsZUxhYmVsRWxlbWVudC5zaG93KCk7XG4gICAgICB0aGlzLmNvbWJpbmVkTGFiZWxFbGVtZW50LmhpZGUoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMudmlld09wdGlvbnMuYXV0b0hpZGVMaW1pdExhYmVscykge1xuICAgICAgdGhpcy51cGRhdGVGbG9vckFuZENlaWxMYWJlbHNWaXNpYmlsaXR5KCk7XG4gICAgfVxuICB9XG5cbiAgLy8gUmV0dXJuIHRoZSB0cmFuc2xhdGVkIHZhbHVlIGlmIGEgdHJhbnNsYXRlIGZ1bmN0aW9uIGlzIHByb3ZpZGVkIGVsc2UgdGhlIG9yaWdpbmFsIHZhbHVlXG4gIHByaXZhdGUgZ2V0RGlzcGxheVZhbHVlKHZhbHVlOiBudW1iZXIsIHdoaWNoOiBMYWJlbFR5cGUpOiBzdHJpbmcge1xuICAgIGlmICghVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy52aWV3T3B0aW9ucy5zdGVwc0FycmF5KSAmJiAhdGhpcy52aWV3T3B0aW9ucy5iaW5kSW5kZXhGb3JTdGVwc0FycmF5KSB7XG4gICAgICB2YWx1ZSA9IHRoaXMuZ2V0U3RlcFZhbHVlKHZhbHVlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMudmlld09wdGlvbnMudHJhbnNsYXRlKHZhbHVlLCB3aGljaCk7XG4gIH1cblxuICAvLyBSb3VuZCB2YWx1ZSB0byBzdGVwIGFuZCBwcmVjaXNpb24gYmFzZWQgb24gbWluVmFsdWVcbiAgcHJpdmF0ZSByb3VuZFN0ZXAodmFsdWU6IG51bWJlciwgY3VzdG9tU3RlcD86IG51bWJlcik6IG51bWJlciB7XG4gICAgY29uc3Qgc3RlcDogbnVtYmVyID0gIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKGN1c3RvbVN0ZXApID8gY3VzdG9tU3RlcCA6IHRoaXMudmlld09wdGlvbnMuc3RlcDtcbiAgICBsZXQgc3RlcHBlZERpZmZlcmVuY2U6IG51bWJlciA9IE1hdGhIZWxwZXIucm91bmRUb1ByZWNpc2lvbkxpbWl0KFxuICAgICAgKHZhbHVlIC0gdGhpcy52aWV3T3B0aW9ucy5mbG9vcikgLyBzdGVwLCB0aGlzLnZpZXdPcHRpb25zLnByZWNpc2lvbkxpbWl0KTtcbiAgICBzdGVwcGVkRGlmZmVyZW5jZSA9IE1hdGgucm91bmQoc3RlcHBlZERpZmZlcmVuY2UpICogc3RlcDtcbiAgICByZXR1cm4gTWF0aEhlbHBlci5yb3VuZFRvUHJlY2lzaW9uTGltaXQodGhpcy52aWV3T3B0aW9ucy5mbG9vciArIHN0ZXBwZWREaWZmZXJlbmNlLCB0aGlzLnZpZXdPcHRpb25zLnByZWNpc2lvbkxpbWl0KTtcbiAgfVxuXG4gIC8vIFRyYW5zbGF0ZSB2YWx1ZSB0byBwaXhlbCBwb3NpdGlvblxuICBwcml2YXRlIHZhbHVlVG9Qb3NpdGlvbih2YWw6IG51bWJlcik6IG51bWJlciB7XG4gICAgbGV0IGZuOiBWYWx1ZVRvUG9zaXRpb25GdW5jdGlvbiAgPSBWYWx1ZUhlbHBlci5saW5lYXJWYWx1ZVRvUG9zaXRpb247XG4gICAgaWYgKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLnZpZXdPcHRpb25zLmN1c3RvbVZhbHVlVG9Qb3NpdGlvbikpIHtcbiAgICAgIGZuID0gdGhpcy52aWV3T3B0aW9ucy5jdXN0b21WYWx1ZVRvUG9zaXRpb247XG4gICAgfSBlbHNlIGlmICh0aGlzLnZpZXdPcHRpb25zLmxvZ1NjYWxlKSB7XG4gICAgICBmbiA9IFZhbHVlSGVscGVyLmxvZ1ZhbHVlVG9Qb3NpdGlvbjtcbiAgICB9XG5cbiAgICB2YWwgPSBNYXRoSGVscGVyLmNsYW1wVG9SYW5nZSh2YWwsIHRoaXMudmlld09wdGlvbnMuZmxvb3IsIHRoaXMudmlld09wdGlvbnMuY2VpbCk7XG4gICAgbGV0IHBlcmNlbnQ6IG51bWJlciA9IGZuKHZhbCwgdGhpcy52aWV3T3B0aW9ucy5mbG9vciwgdGhpcy52aWV3T3B0aW9ucy5jZWlsKTtcbiAgICBpZiAoVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQocGVyY2VudCkpIHtcbiAgICAgIHBlcmNlbnQgPSAwO1xuICAgIH1cbiAgICBpZiAodGhpcy52aWV3T3B0aW9ucy5yaWdodFRvTGVmdCkge1xuICAgICAgcGVyY2VudCA9IDEgLSBwZXJjZW50O1xuICAgIH1cbiAgICByZXR1cm4gcGVyY2VudCAqIHRoaXMubWF4SGFuZGxlUG9zaXRpb247XG4gIH1cblxuICAvLyBUcmFuc2xhdGUgcG9zaXRpb24gdG8gbW9kZWwgdmFsdWVcbiAgcHJpdmF0ZSBwb3NpdGlvblRvVmFsdWUocG9zaXRpb246IG51bWJlcik6IG51bWJlciB7XG4gICAgbGV0IHBlcmNlbnQ6IG51bWJlciA9IHBvc2l0aW9uIC8gdGhpcy5tYXhIYW5kbGVQb3NpdGlvbjtcbiAgICBpZiAodGhpcy52aWV3T3B0aW9ucy5yaWdodFRvTGVmdCkge1xuICAgICAgcGVyY2VudCA9IDEgLSBwZXJjZW50O1xuICAgIH1cbiAgICBsZXQgZm46IFBvc2l0aW9uVG9WYWx1ZUZ1bmN0aW9uID0gVmFsdWVIZWxwZXIubGluZWFyUG9zaXRpb25Ub1ZhbHVlO1xuICAgIGlmICghVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy52aWV3T3B0aW9ucy5jdXN0b21Qb3NpdGlvblRvVmFsdWUpKSB7XG4gICAgICBmbiA9IHRoaXMudmlld09wdGlvbnMuY3VzdG9tUG9zaXRpb25Ub1ZhbHVlO1xuICAgIH0gZWxzZSBpZiAodGhpcy52aWV3T3B0aW9ucy5sb2dTY2FsZSkge1xuICAgICAgZm4gPSBWYWx1ZUhlbHBlci5sb2dQb3NpdGlvblRvVmFsdWU7XG4gICAgfVxuICAgIGNvbnN0IHZhbHVlOiBudW1iZXIgPSBmbihwZXJjZW50LCB0aGlzLnZpZXdPcHRpb25zLmZsb29yLCB0aGlzLnZpZXdPcHRpb25zLmNlaWwpO1xuICAgIHJldHVybiAhVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodmFsdWUpID8gdmFsdWUgOiAwO1xuICB9XG5cbiAgLy8gR2V0IHRoZSBYLWNvb3JkaW5hdGUgb3IgWS1jb29yZGluYXRlIG9mIGFuIGV2ZW50XG4gIHByaXZhdGUgZ2V0RXZlbnRYWShldmVudDogTW91c2VFdmVudHxUb3VjaEV2ZW50LCB0YXJnZXRUb3VjaElkPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSB7XG4gICAgICByZXR1cm4gdGhpcy52aWV3T3B0aW9ucy52ZXJ0aWNhbCA/IGV2ZW50LmNsaWVudFkgOiBldmVudC5jbGllbnRYO1xuICAgIH1cblxuICAgIGxldCB0b3VjaEluZGV4OiBudW1iZXIgPSAwO1xuICAgIGNvbnN0IHRvdWNoZXM6IFRvdWNoTGlzdCA9IGV2ZW50LnRvdWNoZXM7XG4gICAgaWYgKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0YXJnZXRUb3VjaElkKSkge1xuICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRvdWNoZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRvdWNoZXNbaV0uaWRlbnRpZmllciA9PT0gdGFyZ2V0VG91Y2hJZCkge1xuICAgICAgICAgIHRvdWNoSW5kZXggPSBpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHRoZSB0YXJnZXQgdG91Y2ggb3IgaWYgdGhlIHRhcmdldCB0b3VjaCB3YXMgbm90IGZvdW5kIGluIHRoZSBldmVudFxuICAgIC8vIHJldHVybnMgdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSBmaXJzdCB0b3VjaFxuICAgIHJldHVybiB0aGlzLnZpZXdPcHRpb25zLnZlcnRpY2FsID8gdG91Y2hlc1t0b3VjaEluZGV4XS5jbGllbnRZIDogdG91Y2hlc1t0b3VjaEluZGV4XS5jbGllbnRYO1xuICB9XG5cbiAgLy8gQ29tcHV0ZSB0aGUgZXZlbnQgcG9zaXRpb24gZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIHNsaWRlciBpcyBob3Jpem9udGFsIG9yIHZlcnRpY2FsXG4gIHByaXZhdGUgZ2V0RXZlbnRQb3NpdGlvbihldmVudDogTW91c2VFdmVudHxUb3VjaEV2ZW50LCB0YXJnZXRUb3VjaElkPzogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCBzbGlkZXJFbGVtZW50Qm91bmRpbmdSZWN0OiBDbGllbnRSZWN0ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBjb25zdCBzbGlkZXJQb3M6IG51bWJlciA9IHRoaXMudmlld09wdGlvbnMudmVydGljYWwgP1xuICAgICAgc2xpZGVyRWxlbWVudEJvdW5kaW5nUmVjdC5ib3R0b20gOiBzbGlkZXJFbGVtZW50Qm91bmRpbmdSZWN0LmxlZnQ7XG4gICAgbGV0IGV2ZW50UG9zOiBudW1iZXIgPSAwO1xuICAgIGlmICh0aGlzLnZpZXdPcHRpb25zLnZlcnRpY2FsKSB7XG4gICAgICBldmVudFBvcyA9IC10aGlzLmdldEV2ZW50WFkoZXZlbnQsIHRhcmdldFRvdWNoSWQpICsgc2xpZGVyUG9zO1xuICAgIH0gZWxzZSB7XG4gICAgICBldmVudFBvcyA9IHRoaXMuZ2V0RXZlbnRYWShldmVudCwgdGFyZ2V0VG91Y2hJZCkgLSBzbGlkZXJQb3M7XG4gICAgfVxuICAgIHJldHVybiBldmVudFBvcyAqIHRoaXMudmlld09wdGlvbnMuc2NhbGUgLSB0aGlzLmhhbmRsZUhhbGZEaW1lbnNpb247XG4gIH1cblxuICAvLyBHZXQgdGhlIGhhbmRsZSBjbG9zZXN0IHRvIGFuIGV2ZW50XG4gIHByaXZhdGUgZ2V0TmVhcmVzdEhhbmRsZShldmVudDogTW91c2VFdmVudHxUb3VjaEV2ZW50KTogUG9pbnRlclR5cGUge1xuICAgIGlmICghdGhpcy5yYW5nZSkge1xuICAgICAgcmV0dXJuIFBvaW50ZXJUeXBlLk1pbjtcbiAgICB9XG5cbiAgICBjb25zdCBwb3NpdGlvbjogbnVtYmVyID0gdGhpcy5nZXRFdmVudFBvc2l0aW9uKGV2ZW50KTtcbiAgICBjb25zdCBkaXN0YW5jZU1pbjogbnVtYmVyID0gTWF0aC5hYnMocG9zaXRpb24gLSB0aGlzLm1pbkhhbmRsZUVsZW1lbnQucG9zaXRpb24pO1xuICAgIGNvbnN0IGRpc3RhbmNlTWF4OiBudW1iZXIgPSBNYXRoLmFicyhwb3NpdGlvbiAtIHRoaXMubWF4SGFuZGxlRWxlbWVudC5wb3NpdGlvbik7XG5cbiAgICBpZiAoZGlzdGFuY2VNaW4gPCBkaXN0YW5jZU1heCkge1xuICAgICAgcmV0dXJuIFBvaW50ZXJUeXBlLk1pbjtcbiAgICB9IGVsc2UgaWYgKGRpc3RhbmNlTWluID4gZGlzdGFuY2VNYXgpIHtcbiAgICAgIHJldHVybiBQb2ludGVyVHlwZS5NYXg7XG4gICAgfSBlbHNlIGlmICghdGhpcy52aWV3T3B0aW9ucy5yaWdodFRvTGVmdCkge1xuICAgICAgLy8gaWYgZXZlbnQgaXMgYXQgdGhlIHNhbWUgZGlzdGFuY2UgZnJvbSBtaW4vbWF4IHRoZW4gaWYgaXQncyBhdCBsZWZ0IG9mIG1pbkgsIHdlIHJldHVybiBtaW5IIGVsc2UgbWF4SFxuICAgICAgcmV0dXJuIHBvc2l0aW9uIDwgdGhpcy5taW5IYW5kbGVFbGVtZW50LnBvc2l0aW9uID8gUG9pbnRlclR5cGUuTWluIDogUG9pbnRlclR5cGUuTWF4O1xuICAgIH1cbiAgICAvLyByZXZlcnNlIGluIHJ0bFxuICAgIHJldHVybiBwb3NpdGlvbiA+IHRoaXMubWluSGFuZGxlRWxlbWVudC5wb3NpdGlvbiA/IFBvaW50ZXJUeXBlLk1pbiA6IFBvaW50ZXJUeXBlLk1heDtcbiAgfVxuXG4gIC8vIEJpbmQgbW91c2UgYW5kIHRvdWNoIGV2ZW50cyB0byBzbGlkZXIgaGFuZGxlc1xuICBwcml2YXRlIGJpbmRFdmVudHMoKTogdm9pZCB7XG4gICAgY29uc3QgZHJhZ2dhYmxlUmFuZ2U6IGJvb2xlYW4gPSB0aGlzLnZpZXdPcHRpb25zLmRyYWdnYWJsZVJhbmdlO1xuXG4gICAgaWYgKCF0aGlzLnZpZXdPcHRpb25zLm9ubHlCaW5kSGFuZGxlcykge1xuICAgICAgdGhpcy5zZWxlY3Rpb25CYXJFbGVtZW50Lm9uKCdtb3VzZWRvd24nLFxuICAgICAgICAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHRoaXMub25CYXJTdGFydChudWxsLCBkcmFnZ2FibGVSYW5nZSwgZXZlbnQsIHRydWUsIHRydWUsIHRydWUpXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnZpZXdPcHRpb25zLmRyYWdnYWJsZVJhbmdlT25seSkge1xuICAgICAgdGhpcy5taW5IYW5kbGVFbGVtZW50Lm9uKCdtb3VzZWRvd24nLFxuICAgICAgICAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHRoaXMub25CYXJTdGFydChQb2ludGVyVHlwZS5NaW4sIGRyYWdnYWJsZVJhbmdlLCBldmVudCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgICk7XG4gICAgICB0aGlzLm1heEhhbmRsZUVsZW1lbnQub24oJ21vdXNlZG93bicsXG4gICAgICAgIChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4gdGhpcy5vbkJhclN0YXJ0KFBvaW50ZXJUeXBlLk1heCwgZHJhZ2dhYmxlUmFuZ2UsIGV2ZW50LCB0cnVlLCB0cnVlKVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5taW5IYW5kbGVFbGVtZW50Lm9uKCdtb3VzZWRvd24nLFxuICAgICAgICAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHRoaXMub25TdGFydChQb2ludGVyVHlwZS5NaW4sIGV2ZW50LCB0cnVlLCB0cnVlKVxuICAgICAgKTtcblxuICAgICAgaWYgKHRoaXMucmFuZ2UpIHtcbiAgICAgICAgdGhpcy5tYXhIYW5kbGVFbGVtZW50Lm9uKCdtb3VzZWRvd24nLFxuICAgICAgICAgIChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4gdGhpcy5vblN0YXJ0KFBvaW50ZXJUeXBlLk1heCwgZXZlbnQsIHRydWUsIHRydWUpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAoIXRoaXMudmlld09wdGlvbnMub25seUJpbmRIYW5kbGVzKSB7XG4gICAgICAgIHRoaXMuZnVsbEJhckVsZW1lbnQub24oJ21vdXNlZG93bicsXG4gICAgICAgICAgKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCA9PiB0aGlzLm9uU3RhcnQobnVsbCwgZXZlbnQsIHRydWUsIHRydWUsIHRydWUpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMudGlja3NFbGVtZW50Lm9uKCdtb3VzZWRvd24nLFxuICAgICAgICAgIChldmVudDogTW91c2VFdmVudCk6IHZvaWQgPT4gdGhpcy5vblN0YXJ0KG51bGwsIGV2ZW50LCB0cnVlLCB0cnVlLCB0cnVlLCB0cnVlKVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghdGhpcy52aWV3T3B0aW9ucy5vbmx5QmluZEhhbmRsZXMpIHtcbiAgICAgIHRoaXMuc2VsZWN0aW9uQmFyRWxlbWVudC5vblBhc3NpdmUoJ3RvdWNoc3RhcnQnLFxuICAgICAgICAoZXZlbnQ6IFRvdWNoRXZlbnQpOiB2b2lkID0+IHRoaXMub25CYXJTdGFydChudWxsLCBkcmFnZ2FibGVSYW5nZSwgZXZlbnQsIHRydWUsIHRydWUsIHRydWUpXG4gICAgICApO1xuICAgIH1cbiAgICBpZiAodGhpcy52aWV3T3B0aW9ucy5kcmFnZ2FibGVSYW5nZU9ubHkpIHtcbiAgICAgIHRoaXMubWluSGFuZGxlRWxlbWVudC5vblBhc3NpdmUoJ3RvdWNoc3RhcnQnLFxuICAgICAgICAoZXZlbnQ6IFRvdWNoRXZlbnQpOiB2b2lkID0+IHRoaXMub25CYXJTdGFydChQb2ludGVyVHlwZS5NaW4sIGRyYWdnYWJsZVJhbmdlLCBldmVudCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgICk7XG4gICAgICB0aGlzLm1heEhhbmRsZUVsZW1lbnQub25QYXNzaXZlKCd0b3VjaHN0YXJ0JyxcbiAgICAgICAgKGV2ZW50OiBUb3VjaEV2ZW50KTogdm9pZCA9PiB0aGlzLm9uQmFyU3RhcnQoUG9pbnRlclR5cGUuTWF4LCBkcmFnZ2FibGVSYW5nZSwgZXZlbnQsIHRydWUsIHRydWUpXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm1pbkhhbmRsZUVsZW1lbnQub25QYXNzaXZlKCd0b3VjaHN0YXJ0JyxcbiAgICAgICAgKGV2ZW50OiBUb3VjaEV2ZW50KTogdm9pZCA9PiB0aGlzLm9uU3RhcnQoUG9pbnRlclR5cGUuTWluLCBldmVudCwgdHJ1ZSwgdHJ1ZSlcbiAgICAgICk7XG4gICAgICBpZiAodGhpcy5yYW5nZSkge1xuICAgICAgICB0aGlzLm1heEhhbmRsZUVsZW1lbnQub25QYXNzaXZlKCd0b3VjaHN0YXJ0JyxcbiAgICAgICAgICAoZXZlbnQ6IFRvdWNoRXZlbnQpOiB2b2lkID0+IHRoaXMub25TdGFydChQb2ludGVyVHlwZS5NYXgsIGV2ZW50LCB0cnVlLCB0cnVlKVxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLnZpZXdPcHRpb25zLm9ubHlCaW5kSGFuZGxlcykge1xuICAgICAgICB0aGlzLmZ1bGxCYXJFbGVtZW50Lm9uUGFzc2l2ZSgndG91Y2hzdGFydCcsXG4gICAgICAgICAgKGV2ZW50OiBUb3VjaEV2ZW50KTogdm9pZCA9PiB0aGlzLm9uU3RhcnQobnVsbCwgZXZlbnQsIHRydWUsIHRydWUsIHRydWUpXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMudGlja3NFbGVtZW50Lm9uUGFzc2l2ZSgndG91Y2hzdGFydCcsXG4gICAgICAgICAgKGV2ZW50OiBUb3VjaEV2ZW50KTogdm9pZCA9PiB0aGlzLm9uU3RhcnQobnVsbCwgZXZlbnQsIGZhbHNlLCBmYWxzZSwgdHJ1ZSwgdHJ1ZSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy52aWV3T3B0aW9ucy5rZXlib2FyZFN1cHBvcnQpIHtcbiAgICAgIHRoaXMubWluSGFuZGxlRWxlbWVudC5vbignZm9jdXMnLCAoKTogdm9pZCA9PiB0aGlzLm9uUG9pbnRlckZvY3VzKFBvaW50ZXJUeXBlLk1pbikpO1xuICAgICAgaWYgKHRoaXMucmFuZ2UpIHtcbiAgICAgICAgdGhpcy5tYXhIYW5kbGVFbGVtZW50Lm9uKCdmb2N1cycsICgpOiB2b2lkID0+IHRoaXMub25Qb2ludGVyRm9jdXMoUG9pbnRlclR5cGUuTWF4KSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXRPcHRpb25zSW5mbHVlbmNpbmdFdmVudEJpbmRpbmdzKG9wdGlvbnM6IE9wdGlvbnMpOiBib29sZWFuW10ge1xuICAgIHJldHVybiBbXG4gICAgICBvcHRpb25zLmRpc2FibGVkLFxuICAgICAgb3B0aW9ucy5yZWFkT25seSxcbiAgICAgIG9wdGlvbnMuZHJhZ2dhYmxlUmFuZ2UsXG4gICAgICBvcHRpb25zLmRyYWdnYWJsZVJhbmdlT25seSxcbiAgICAgIG9wdGlvbnMub25seUJpbmRIYW5kbGVzLFxuICAgICAgb3B0aW9ucy5rZXlib2FyZFN1cHBvcnRcbiAgICBdO1xuICB9XG5cbiAgLy8gVW5iaW5kIG1vdXNlIGFuZCB0b3VjaCBldmVudHMgdG8gc2xpZGVyIGhhbmRsZXNcbiAgcHJpdmF0ZSB1bmJpbmRFdmVudHMoKTogdm9pZCB7XG4gICAgdGhpcy51bnN1YnNjcmliZU9uTW92ZSgpO1xuICAgIHRoaXMudW5zdWJzY3JpYmVPbkVuZCgpO1xuXG4gICAgZm9yIChjb25zdCBlbGVtZW50IG9mIHRoaXMuZ2V0QWxsU2xpZGVyRWxlbWVudHMoKSkge1xuICAgICAgaWYgKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZChlbGVtZW50KSkge1xuICAgICAgICBlbGVtZW50Lm9mZigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb25CYXJTdGFydChwb2ludGVyVHlwZTogUG9pbnRlclR5cGUsIGRyYWdnYWJsZVJhbmdlOiBib29sZWFuLCBldmVudDogTW91c2VFdmVudHxUb3VjaEV2ZW50LFxuICAgIGJpbmRNb3ZlOiBib29sZWFuLCBiaW5kRW5kOiBib29sZWFuLCBzaW11bGF0ZUltbWVkaWF0ZU1vdmU/OiBib29sZWFuLCBzaW11bGF0ZUltbWVkaWF0ZUVuZD86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBpZiAoZHJhZ2dhYmxlUmFuZ2UpIHtcbiAgICAgIHRoaXMub25EcmFnU3RhcnQocG9pbnRlclR5cGUsIGV2ZW50LCBiaW5kTW92ZSwgYmluZEVuZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub25TdGFydChwb2ludGVyVHlwZSwgZXZlbnQsIGJpbmRNb3ZlLCBiaW5kRW5kLCBzaW11bGF0ZUltbWVkaWF0ZU1vdmUsIHNpbXVsYXRlSW1tZWRpYXRlRW5kKTtcbiAgICB9XG4gIH1cblxuICAvLyBvblN0YXJ0IGV2ZW50IGhhbmRsZXJcbiAgcHJpdmF0ZSBvblN0YXJ0KHBvaW50ZXJUeXBlOiBQb2ludGVyVHlwZSwgZXZlbnQ6IE1vdXNlRXZlbnR8VG91Y2hFdmVudCxcbiAgICAgIGJpbmRNb3ZlOiBib29sZWFuLCBiaW5kRW5kOiBib29sZWFuLCBzaW11bGF0ZUltbWVkaWF0ZU1vdmU/OiBib29sZWFuLCBzaW11bGF0ZUltbWVkaWF0ZUVuZD86IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAvLyBPbmx5IGNhbGwgcHJldmVudERlZmF1bHQoKSB3aGVuIGhhbmRsaW5nIG5vbi1wYXNzaXZlIGV2ZW50cyAocGFzc2l2ZSBldmVudHMgZG9uJ3QgbmVlZCBpdClcbiAgICBpZiAoIUNvbXBhdGliaWxpdHlIZWxwZXIuaXNUb3VjaEV2ZW50KGV2ZW50KSB8fCAhZGV0ZWN0UGFzc2l2ZUV2ZW50cy5oYXNTdXBwb3J0KSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cblxuICAgIHRoaXMubW92aW5nID0gZmFsc2U7XG5cbiAgICAvLyBXZSBoYXZlIHRvIGRvIHRoaXMgaW4gY2FzZSB0aGUgSFRNTCB3aGVyZSB0aGUgc2xpZGVycyBhcmUgb25cbiAgICAvLyBoYXZlIGJlZW4gYW5pbWF0ZWQgaW50byB2aWV3LlxuICAgIHRoaXMuY2FsY3VsYXRlVmlld0RpbWVuc2lvbnMoKTtcblxuICAgIGlmIChWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZChwb2ludGVyVHlwZSkpIHtcbiAgICAgIHBvaW50ZXJUeXBlID0gdGhpcy5nZXROZWFyZXN0SGFuZGxlKGV2ZW50KTtcbiAgICB9XG5cbiAgICB0aGlzLmN1cnJlbnRUcmFja2luZ1BvaW50ZXIgPSBwb2ludGVyVHlwZTtcblxuICAgIGNvbnN0IHBvaW50ZXJFbGVtZW50OiBTbGlkZXJIYW5kbGVEaXJlY3RpdmUgPSB0aGlzLmdldFBvaW50ZXJFbGVtZW50KHBvaW50ZXJUeXBlKTtcbiAgICBwb2ludGVyRWxlbWVudC5hY3RpdmUgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMudmlld09wdGlvbnMua2V5Ym9hcmRTdXBwb3J0KSB7XG4gICAgICBwb2ludGVyRWxlbWVudC5mb2N1cygpO1xuICAgIH1cblxuICAgIGlmIChiaW5kTW92ZSkge1xuICAgICAgdGhpcy51bnN1YnNjcmliZU9uTW92ZSgpO1xuXG4gICAgICBjb25zdCBvbk1vdmVDYWxsYmFjazogKChlOiBNb3VzZUV2ZW50fFRvdWNoRXZlbnQpID0+IHZvaWQpID1cbiAgICAgICAgKGU6IE1vdXNlRXZlbnR8VG91Y2hFdmVudCk6IHZvaWQgPT4gdGhpcy5kcmFnZ2luZy5hY3RpdmUgPyB0aGlzLm9uRHJhZ01vdmUoZSkgOiB0aGlzLm9uTW92ZShlKTtcblxuICAgICAgaWYgKENvbXBhdGliaWxpdHlIZWxwZXIuaXNUb3VjaEV2ZW50KGV2ZW50KSkge1xuICAgICAgICB0aGlzLm9uTW92ZUV2ZW50TGlzdGVuZXIgPSB0aGlzLmV2ZW50TGlzdGVuZXJIZWxwZXIuYXR0YWNoUGFzc2l2ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgZG9jdW1lbnQsICd0b3VjaG1vdmUnLCBvbk1vdmVDYWxsYmFjaywgdGhpcy52aWV3T3B0aW9ucy50b3VjaEV2ZW50c0ludGVydmFsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub25Nb3ZlRXZlbnRMaXN0ZW5lciA9IHRoaXMuZXZlbnRMaXN0ZW5lckhlbHBlci5hdHRhY2hFdmVudExpc3RlbmVyKFxuICAgICAgICAgIGRvY3VtZW50LCAnbW91c2Vtb3ZlJywgb25Nb3ZlQ2FsbGJhY2ssIHRoaXMudmlld09wdGlvbnMubW91c2VFdmVudHNJbnRlcnZhbCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGJpbmRFbmQpIHtcbiAgICAgIHRoaXMudW5zdWJzY3JpYmVPbkVuZCgpO1xuXG4gICAgICBjb25zdCBvbkVuZENhbGxiYWNrOiAoKGU6IE1vdXNlRXZlbnR8VG91Y2hFdmVudCkgPT4gdm9pZCkgPVxuICAgICAgICAoZTogTW91c2VFdmVudHxUb3VjaEV2ZW50KTogdm9pZCA9PiB0aGlzLm9uRW5kKGUpO1xuXG4gICAgICBpZiAoQ29tcGF0aWJpbGl0eUhlbHBlci5pc1RvdWNoRXZlbnQoZXZlbnQpKSB7XG4gICAgICAgIHRoaXMub25FbmRFdmVudExpc3RlbmVyID0gdGhpcy5ldmVudExpc3RlbmVySGVscGVyLmF0dGFjaFBhc3NpdmVFdmVudExpc3RlbmVyKGRvY3VtZW50LCAndG91Y2hlbmQnLCBvbkVuZENhbGxiYWNrKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMub25FbmRFdmVudExpc3RlbmVyID0gdGhpcy5ldmVudExpc3RlbmVySGVscGVyLmF0dGFjaEV2ZW50TGlzdGVuZXIoZG9jdW1lbnQsICdtb3VzZXVwJywgb25FbmRDYWxsYmFjayk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy51c2VyQ2hhbmdlU3RhcnQuZW1pdCh0aGlzLmdldENoYW5nZUNvbnRleHQoKSk7XG5cbiAgICBpZiAoQ29tcGF0aWJpbGl0eUhlbHBlci5pc1RvdWNoRXZlbnQoZXZlbnQpICYmICFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCgoZXZlbnQgYXMgVG91Y2hFdmVudCkuY2hhbmdlZFRvdWNoZXMpKSB7XG4gICAgICAvLyBTdG9yZSB0aGUgdG91Y2ggaWRlbnRpZmllclxuICAgICAgaWYgKFZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudG91Y2hJZCkpIHtcbiAgICAgICAgdGhpcy50b3VjaElkID0gKGV2ZW50IGFzIFRvdWNoRXZlbnQpLmNoYW5nZWRUb3VjaGVzWzBdLmlkZW50aWZpZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ2xpY2sgZXZlbnRzLCBlaXRoZXIgd2l0aCBtb3VzZSBvciB0b3VjaCBnZXN0dXJlIGFyZSB3ZWlyZC4gU29tZXRpbWVzIHRoZXkgcmVzdWx0IGluIGZ1bGxcbiAgICAvLyBzdGFydCwgbW92ZSwgZW5kIHNlcXVlbmNlLCBhbmQgc29tZXRpbWVzLCB0aGV5IGRvbid0IC0gdGhleSBvbmx5IGludm9rZSBtb3VzZWRvd25cbiAgICAvLyBBcyBhIHdvcmthcm91bmQsIHdlIHNpbXVsYXRlIHRoZSBmaXJzdCBtb3ZlIGV2ZW50IGFuZCB0aGUgZW5kIGV2ZW50IGlmIGl0J3MgbmVjZXNzYXJ5XG4gICAgaWYgKHNpbXVsYXRlSW1tZWRpYXRlTW92ZSkge1xuICAgICAgdGhpcy5vbk1vdmUoZXZlbnQsIHRydWUpO1xuICAgIH1cblxuICAgIGlmIChzaW11bGF0ZUltbWVkaWF0ZUVuZCkge1xuICAgICAgdGhpcy5vbkVuZChldmVudCk7XG4gICAgfVxuICB9XG5cbiAgLy8gb25Nb3ZlIGV2ZW50IGhhbmRsZXJcbiAgcHJpdmF0ZSBvbk1vdmUoZXZlbnQ6IE1vdXNlRXZlbnR8VG91Y2hFdmVudCwgZnJvbVRpY2s/OiBib29sZWFuKTogdm9pZCB7XG4gICAgbGV0IHRvdWNoRm9yVGhpc1NsaWRlcjogVG91Y2ggPSBudWxsO1xuXG4gICAgaWYgKENvbXBhdGliaWxpdHlIZWxwZXIuaXNUb3VjaEV2ZW50KGV2ZW50KSkge1xuICAgICAgY29uc3QgY2hhbmdlZFRvdWNoZXM6IFRvdWNoTGlzdCA9IChldmVudCBhcyBUb3VjaEV2ZW50KS5jaGFuZ2VkVG91Y2hlcztcbiAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCBjaGFuZ2VkVG91Y2hlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoY2hhbmdlZFRvdWNoZXNbaV0uaWRlbnRpZmllciA9PT0gdGhpcy50b3VjaElkKSB7XG4gICAgICAgICAgdG91Y2hGb3JUaGlzU2xpZGVyID0gY2hhbmdlZFRvdWNoZXNbaV07XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKFZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRvdWNoRm9yVGhpc1NsaWRlcikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLnZpZXdPcHRpb25zLmFuaW1hdGUgJiYgIXRoaXMudmlld09wdGlvbnMuYW5pbWF0ZU9uTW92ZSkge1xuICAgICAgaWYgKHRoaXMubW92aW5nKSB7XG4gICAgICAgIHRoaXMuc2xpZGVyRWxlbWVudEFuaW1hdGVDbGFzcyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMubW92aW5nID0gdHJ1ZTtcblxuICAgIGNvbnN0IG5ld1BvczogbnVtYmVyID0gIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRvdWNoRm9yVGhpc1NsaWRlcilcbiAgICAgID8gdGhpcy5nZXRFdmVudFBvc2l0aW9uKGV2ZW50LCB0b3VjaEZvclRoaXNTbGlkZXIuaWRlbnRpZmllcilcbiAgICAgIDogdGhpcy5nZXRFdmVudFBvc2l0aW9uKGV2ZW50KTtcbiAgICBsZXQgbmV3VmFsdWU6IG51bWJlcjtcbiAgICBjb25zdCBjZWlsVmFsdWU6IG51bWJlciA9IHRoaXMudmlld09wdGlvbnMucmlnaHRUb0xlZnRcbiAgICAgICAgPyB0aGlzLnZpZXdPcHRpb25zLmZsb29yXG4gICAgICAgIDogdGhpcy52aWV3T3B0aW9ucy5jZWlsO1xuICAgIGNvbnN0IGZsb29yVmFsdWU6IG51bWJlciA9IHRoaXMudmlld09wdGlvbnMucmlnaHRUb0xlZnQgPyB0aGlzLnZpZXdPcHRpb25zLmNlaWwgOiB0aGlzLnZpZXdPcHRpb25zLmZsb29yO1xuXG4gICAgaWYgKG5ld1BvcyA8PSAwKSB7XG4gICAgICBuZXdWYWx1ZSA9IGZsb29yVmFsdWU7XG4gICAgfSBlbHNlIGlmIChuZXdQb3MgPj0gdGhpcy5tYXhIYW5kbGVQb3NpdGlvbikge1xuICAgICAgbmV3VmFsdWUgPSBjZWlsVmFsdWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld1ZhbHVlID0gdGhpcy5wb3NpdGlvblRvVmFsdWUobmV3UG9zKTtcbiAgICAgIGlmIChmcm9tVGljayAmJiAhVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy52aWV3T3B0aW9ucy50aWNrU3RlcCkpIHtcbiAgICAgICAgbmV3VmFsdWUgPSB0aGlzLnJvdW5kU3RlcChuZXdWYWx1ZSwgdGhpcy52aWV3T3B0aW9ucy50aWNrU3RlcCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdWYWx1ZSA9IHRoaXMucm91bmRTdGVwKG5ld1ZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5wb3NpdGlvblRyYWNraW5nSGFuZGxlKG5ld1ZhbHVlKTtcbiAgfVxuXG4gIHByaXZhdGUgb25FbmQoZXZlbnQ6IE1vdXNlRXZlbnR8VG91Y2hFdmVudCk6IHZvaWQge1xuICAgIGlmIChDb21wYXRpYmlsaXR5SGVscGVyLmlzVG91Y2hFdmVudChldmVudCkpIHtcbiAgICAgIGNvbnN0IGNoYW5nZWRUb3VjaGVzOiBUb3VjaExpc3QgPSAoZXZlbnQgYXMgVG91Y2hFdmVudCkuY2hhbmdlZFRvdWNoZXM7XG4gICAgICBpZiAoY2hhbmdlZFRvdWNoZXNbMF0uaWRlbnRpZmllciAhPT0gdGhpcy50b3VjaElkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLm1vdmluZyA9IGZhbHNlO1xuICAgIGlmICh0aGlzLnZpZXdPcHRpb25zLmFuaW1hdGUpIHtcbiAgICAgIHRoaXMuc2xpZGVyRWxlbWVudEFuaW1hdGVDbGFzcyA9IHRydWU7XG4gICAgfVxuXG4gICAgdGhpcy50b3VjaElkID0gbnVsbDtcblxuICAgIGlmICghdGhpcy52aWV3T3B0aW9ucy5rZXlib2FyZFN1cHBvcnQpIHtcbiAgICAgIHRoaXMubWluSGFuZGxlRWxlbWVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMubWF4SGFuZGxlRWxlbWVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuY3VycmVudFRyYWNraW5nUG9pbnRlciA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMuZHJhZ2dpbmcuYWN0aXZlID0gZmFsc2U7XG5cbiAgICB0aGlzLnVuc3Vic2NyaWJlT25Nb3ZlKCk7XG4gICAgdGhpcy51bnN1YnNjcmliZU9uRW5kKCk7XG5cbiAgICB0aGlzLnVzZXJDaGFuZ2VFbmQuZW1pdCh0aGlzLmdldENoYW5nZUNvbnRleHQoKSk7XG4gIH1cblxuICBwcml2YXRlIG9uUG9pbnRlckZvY3VzKHBvaW50ZXJUeXBlOiBQb2ludGVyVHlwZSk6IHZvaWQge1xuICAgIGNvbnN0IHBvaW50ZXJFbGVtZW50OiBTbGlkZXJIYW5kbGVEaXJlY3RpdmUgPSB0aGlzLmdldFBvaW50ZXJFbGVtZW50KHBvaW50ZXJUeXBlKTtcbiAgICBwb2ludGVyRWxlbWVudC5vbignYmx1cicsICgpOiB2b2lkID0+IHRoaXMub25Qb2ludGVyQmx1cihwb2ludGVyRWxlbWVudCkpO1xuICAgIHBvaW50ZXJFbGVtZW50Lm9uKCdrZXlkb3duJywgKGV2ZW50OiBLZXlib2FyZEV2ZW50KTogdm9pZCA9PiB0aGlzLm9uS2V5Ym9hcmRFdmVudChldmVudCkpO1xuICAgIHBvaW50ZXJFbGVtZW50Lm9uKCdrZXl1cCcsICgpOiB2b2lkID0+IHRoaXMub25LZXlVcCgpKTtcbiAgICBwb2ludGVyRWxlbWVudC5hY3RpdmUgPSB0cnVlO1xuXG4gICAgdGhpcy5jdXJyZW50VHJhY2tpbmdQb2ludGVyID0gcG9pbnRlclR5cGU7XG4gICAgdGhpcy5jdXJyZW50Rm9jdXNQb2ludGVyID0gcG9pbnRlclR5cGU7XG4gICAgdGhpcy5maXJzdEtleURvd24gPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBvbktleVVwKCk6IHZvaWQge1xuICAgIHRoaXMuZmlyc3RLZXlEb3duID0gdHJ1ZTtcbiAgICB0aGlzLnVzZXJDaGFuZ2VFbmQuZW1pdCh0aGlzLmdldENoYW5nZUNvbnRleHQoKSk7XG4gIH1cblxuICBwcml2YXRlIG9uUG9pbnRlckJsdXIocG9pbnRlcjogU2xpZGVySGFuZGxlRGlyZWN0aXZlKTogdm9pZCB7XG4gICAgcG9pbnRlci5vZmYoJ2JsdXInKTtcbiAgICBwb2ludGVyLm9mZigna2V5ZG93bicpO1xuICAgIHBvaW50ZXIub2ZmKCdrZXl1cCcpO1xuICAgIHBvaW50ZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgaWYgKFZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudG91Y2hJZCkpIHtcbiAgICAgIHRoaXMuY3VycmVudFRyYWNraW5nUG9pbnRlciA9IG51bGw7XG4gICAgICB0aGlzLmN1cnJlbnRGb2N1c1BvaW50ZXIgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ2V0S2V5QWN0aW9ucyhjdXJyZW50VmFsdWU6IG51bWJlcik6IHtba2V5OiBzdHJpbmddOiBudW1iZXJ9IHtcbiAgICBjb25zdCB2YWx1ZVJhbmdlOiBudW1iZXIgPSB0aGlzLnZpZXdPcHRpb25zLmNlaWwgLSB0aGlzLnZpZXdPcHRpb25zLmZsb29yO1xuXG4gICAgbGV0IGluY3JlYXNlU3RlcDogbnVtYmVyID0gY3VycmVudFZhbHVlICsgdGhpcy52aWV3T3B0aW9ucy5zdGVwO1xuICAgIGxldCBkZWNyZWFzZVN0ZXA6IG51bWJlciA9IGN1cnJlbnRWYWx1ZSAtIHRoaXMudmlld09wdGlvbnMuc3RlcDtcbiAgICBsZXQgaW5jcmVhc2VQYWdlOiBudW1iZXIgPSBjdXJyZW50VmFsdWUgKyB2YWx1ZVJhbmdlIC8gMTA7XG4gICAgbGV0IGRlY3JlYXNlUGFnZTogbnVtYmVyID0gY3VycmVudFZhbHVlIC0gdmFsdWVSYW5nZSAvIDEwO1xuXG4gICAgaWYgKHRoaXMudmlld09wdGlvbnMucmV2ZXJzZWRDb250cm9scykge1xuICAgICAgaW5jcmVhc2VTdGVwID0gY3VycmVudFZhbHVlIC0gdGhpcy52aWV3T3B0aW9ucy5zdGVwO1xuICAgICAgZGVjcmVhc2VTdGVwID0gY3VycmVudFZhbHVlICsgdGhpcy52aWV3T3B0aW9ucy5zdGVwO1xuICAgICAgaW5jcmVhc2VQYWdlID0gY3VycmVudFZhbHVlIC0gdmFsdWVSYW5nZSAvIDEwO1xuICAgICAgZGVjcmVhc2VQYWdlID0gY3VycmVudFZhbHVlICsgdmFsdWVSYW5nZSAvIDEwO1xuICAgIH1cblxuICAgIC8vIExlZnQgdG8gcmlnaHQgZGVmYXVsdCBhY3Rpb25zXG4gICAgY29uc3QgYWN0aW9uczoge1trZXk6IHN0cmluZ106IG51bWJlcn0gPSB7XG4gICAgICBVUDogaW5jcmVhc2VTdGVwLFxuICAgICAgRE9XTjogZGVjcmVhc2VTdGVwLFxuICAgICAgTEVGVDogZGVjcmVhc2VTdGVwLFxuICAgICAgUklHSFQ6IGluY3JlYXNlU3RlcCxcbiAgICAgIFBBR0VVUDogaW5jcmVhc2VQYWdlLFxuICAgICAgUEFHRURPV046IGRlY3JlYXNlUGFnZSxcbiAgICAgIEhPTUU6IHRoaXMudmlld09wdGlvbnMucmV2ZXJzZWRDb250cm9scyA/IHRoaXMudmlld09wdGlvbnMuY2VpbCA6IHRoaXMudmlld09wdGlvbnMuZmxvb3IsXG4gICAgICBFTkQ6IHRoaXMudmlld09wdGlvbnMucmV2ZXJzZWRDb250cm9scyA/IHRoaXMudmlld09wdGlvbnMuZmxvb3IgOiB0aGlzLnZpZXdPcHRpb25zLmNlaWwsXG4gICAgfTtcbiAgICAvLyByaWdodCB0byBsZWZ0IG1lYW5zIHN3YXBwaW5nIHJpZ2h0IGFuZCBsZWZ0IGFycm93c1xuICAgIGlmICh0aGlzLnZpZXdPcHRpb25zLnJpZ2h0VG9MZWZ0KSB7XG4gICAgICBhY3Rpb25zLkxFRlQgPSBpbmNyZWFzZVN0ZXA7XG4gICAgICBhY3Rpb25zLlJJR0hUID0gZGVjcmVhc2VTdGVwO1xuICAgICAgLy8gcmlnaHQgdG8gbGVmdCBhbmQgdmVydGljYWwgbWVhbnMgd2UgYWxzbyBzd2FwIHVwIGFuZCBkb3duXG4gICAgICBpZiAodGhpcy52aWV3T3B0aW9ucy52ZXJ0aWNhbCkge1xuICAgICAgICBhY3Rpb25zLlVQID0gZGVjcmVhc2VTdGVwO1xuICAgICAgICBhY3Rpb25zLkRPV04gPSBpbmNyZWFzZVN0ZXA7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhY3Rpb25zO1xuICB9XG5cbiAgcHJpdmF0ZSBvbktleWJvYXJkRXZlbnQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBjdXJyZW50VmFsdWU6IG51bWJlciA9IHRoaXMuZ2V0Q3VycmVudFRyYWNraW5nVmFsdWUoKTtcbiAgICBjb25zdCBrZXlDb2RlOiBudW1iZXIgPSAhVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQoZXZlbnQua2V5Q29kZSlcbiAgICAgID8gZXZlbnQua2V5Q29kZVxuICAgICAgOiBldmVudC53aGljaDtcbiAgICBjb25zdCBrZXlzOiB7W2tleUNvZGU6IG51bWJlcl06IHN0cmluZ30gPSB7XG4gICAgICAgIDM4OiAnVVAnLFxuICAgICAgICA0MDogJ0RPV04nLFxuICAgICAgICAzNzogJ0xFRlQnLFxuICAgICAgICAzOTogJ1JJR0hUJyxcbiAgICAgICAgMzM6ICdQQUdFVVAnLFxuICAgICAgICAzNDogJ1BBR0VET1dOJyxcbiAgICAgICAgMzY6ICdIT01FJyxcbiAgICAgICAgMzU6ICdFTkQnLFxuICAgICAgfTtcbiAgICBjb25zdCBhY3Rpb25zOiB7W2tleTogc3RyaW5nXTogbnVtYmVyfSA9IHRoaXMuZ2V0S2V5QWN0aW9ucyhjdXJyZW50VmFsdWUpO1xuICAgIGNvbnN0IGtleTogc3RyaW5nID0ga2V5c1trZXlDb2RlXTtcbiAgICBjb25zdCBhY3Rpb246IG51bWJlciA9IGFjdGlvbnNba2V5XTtcblxuICAgIGlmIChWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZChhY3Rpb24pIHx8IFZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMuY3VycmVudFRyYWNraW5nUG9pbnRlcikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGlmICh0aGlzLmZpcnN0S2V5RG93bikge1xuICAgICAgdGhpcy5maXJzdEtleURvd24gPSBmYWxzZTtcbiAgICAgIHRoaXMudXNlckNoYW5nZVN0YXJ0LmVtaXQodGhpcy5nZXRDaGFuZ2VDb250ZXh0KCkpO1xuICAgIH1cblxuICAgIGNvbnN0IGFjdGlvblZhbHVlOiBudW1iZXIgPSBNYXRoSGVscGVyLmNsYW1wVG9SYW5nZShhY3Rpb24sIHRoaXMudmlld09wdGlvbnMuZmxvb3IsIHRoaXMudmlld09wdGlvbnMuY2VpbCk7XG4gICAgY29uc3QgbmV3VmFsdWU6IG51bWJlciA9IHRoaXMucm91bmRTdGVwKGFjdGlvblZhbHVlKTtcbiAgICBpZiAoIXRoaXMudmlld09wdGlvbnMuZHJhZ2dhYmxlUmFuZ2VPbmx5KSB7XG4gICAgICB0aGlzLnBvc2l0aW9uVHJhY2tpbmdIYW5kbGUobmV3VmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkaWZmZXJlbmNlOiBudW1iZXIgPSB0aGlzLnZpZXdIaWdoVmFsdWUgLSB0aGlzLnZpZXdMb3dWYWx1ZTtcbiAgICAgIGxldCBuZXdNaW5WYWx1ZTogbnVtYmVyO1xuICAgICAgbGV0IG5ld01heFZhbHVlOiBudW1iZXI7XG5cbiAgICAgIGlmICh0aGlzLmN1cnJlbnRUcmFja2luZ1BvaW50ZXIgPT09IFBvaW50ZXJUeXBlLk1pbikge1xuICAgICAgICBuZXdNaW5WYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICBuZXdNYXhWYWx1ZSA9IG5ld1ZhbHVlICsgZGlmZmVyZW5jZTtcbiAgICAgICAgaWYgKG5ld01heFZhbHVlID4gdGhpcy52aWV3T3B0aW9ucy5jZWlsKSB7XG4gICAgICAgICAgbmV3TWF4VmFsdWUgPSB0aGlzLnZpZXdPcHRpb25zLmNlaWw7XG4gICAgICAgICAgbmV3TWluVmFsdWUgPSBuZXdNYXhWYWx1ZSAtIGRpZmZlcmVuY2U7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50VHJhY2tpbmdQb2ludGVyID09PSBQb2ludGVyVHlwZS5NYXgpIHtcbiAgICAgICAgbmV3TWF4VmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgbmV3TWluVmFsdWUgPSBuZXdWYWx1ZSAtIGRpZmZlcmVuY2U7XG4gICAgICAgIGlmIChuZXdNaW5WYWx1ZSA8IHRoaXMudmlld09wdGlvbnMuZmxvb3IpIHtcbiAgICAgICAgICBuZXdNaW5WYWx1ZSA9IHRoaXMudmlld09wdGlvbnMuZmxvb3I7XG4gICAgICAgICAgbmV3TWF4VmFsdWUgPSBuZXdNaW5WYWx1ZSArIGRpZmZlcmVuY2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXMucG9zaXRpb25UcmFja2luZ0JhcihuZXdNaW5WYWx1ZSwgbmV3TWF4VmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIG9uRHJhZ1N0YXJ0IGV2ZW50IGhhbmRsZXIsIGhhbmRsZXMgZHJhZ2dpbmcgb2YgdGhlIG1pZGRsZSBiYXJcbiAgcHJpdmF0ZSBvbkRyYWdTdGFydChwb2ludGVyVHlwZTogUG9pbnRlclR5cGUsIGV2ZW50OiBNb3VzZUV2ZW50fFRvdWNoRXZlbnQsXG4gICAgYmluZE1vdmU6IGJvb2xlYW4sIGJpbmRFbmQ6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBjb25zdCBwb3NpdGlvbjogbnVtYmVyID0gdGhpcy5nZXRFdmVudFBvc2l0aW9uKGV2ZW50KTtcblxuICAgIHRoaXMuZHJhZ2dpbmcgPSBuZXcgRHJhZ2dpbmcoKTtcbiAgICB0aGlzLmRyYWdnaW5nLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5kcmFnZ2luZy52YWx1ZSA9IHRoaXMucG9zaXRpb25Ub1ZhbHVlKHBvc2l0aW9uKTtcbiAgICB0aGlzLmRyYWdnaW5nLmRpZmZlcmVuY2UgPSB0aGlzLnZpZXdIaWdoVmFsdWUgLSB0aGlzLnZpZXdMb3dWYWx1ZTtcbiAgICB0aGlzLmRyYWdnaW5nLmxvd0xpbWl0ID0gdGhpcy52aWV3T3B0aW9ucy5yaWdodFRvTGVmdFxuICAgICAgICA/IHRoaXMubWluSGFuZGxlRWxlbWVudC5wb3NpdGlvbiAtIHBvc2l0aW9uXG4gICAgICAgIDogcG9zaXRpb24gLSB0aGlzLm1pbkhhbmRsZUVsZW1lbnQucG9zaXRpb247XG4gICAgdGhpcy5kcmFnZ2luZy5oaWdoTGltaXQgPSB0aGlzLnZpZXdPcHRpb25zLnJpZ2h0VG9MZWZ0XG4gICAgICAgID8gcG9zaXRpb24gLSB0aGlzLm1heEhhbmRsZUVsZW1lbnQucG9zaXRpb25cbiAgICAgICAgOiB0aGlzLm1heEhhbmRsZUVsZW1lbnQucG9zaXRpb24gLSBwb3NpdGlvbjtcblxuICAgIHRoaXMub25TdGFydChwb2ludGVyVHlwZSwgZXZlbnQsIGJpbmRNb3ZlLCBiaW5kRW5kKTtcbiAgfVxuXG4gIC8qKiBHZXQgbWluIHZhbHVlIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBuZXdQb3MgaXMgb3V0T2ZCb3VuZHMgYWJvdmUgb3IgYmVsb3cgdGhlIGJhciBhbmQgcmlnaHRUb0xlZnQgKi9cbiAgcHJpdmF0ZSBnZXRNaW5WYWx1ZShuZXdQb3M6IG51bWJlciwgb3V0T2ZCb3VuZHM6IGJvb2xlYW4sIGlzQWJvdmU6IGJvb2xlYW4pOiBudW1iZXIge1xuICAgIGNvbnN0IGlzUlRMOiBib29sZWFuID0gdGhpcy52aWV3T3B0aW9ucy5yaWdodFRvTGVmdDtcbiAgICBsZXQgdmFsdWU6IG51bWJlciA9IG51bGw7XG5cbiAgICBpZiAob3V0T2ZCb3VuZHMpIHtcbiAgICAgIGlmIChpc0Fib3ZlKSB7XG4gICAgICAgIHZhbHVlID0gaXNSVExcbiAgICAgICAgICA/IHRoaXMudmlld09wdGlvbnMuZmxvb3JcbiAgICAgICAgICA6IHRoaXMudmlld09wdGlvbnMuY2VpbCAtIHRoaXMuZHJhZ2dpbmcuZGlmZmVyZW5jZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gaXNSVExcbiAgICAgICAgICA/IHRoaXMudmlld09wdGlvbnMuY2VpbCAtIHRoaXMuZHJhZ2dpbmcuZGlmZmVyZW5jZVxuICAgICAgICAgIDogdGhpcy52aWV3T3B0aW9ucy5mbG9vcjtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFsdWUgPSBpc1JUTFxuICAgICAgICA/IHRoaXMucG9zaXRpb25Ub1ZhbHVlKG5ld1BvcyArIHRoaXMuZHJhZ2dpbmcubG93TGltaXQpXG4gICAgICAgIDogdGhpcy5wb3NpdGlvblRvVmFsdWUobmV3UG9zIC0gdGhpcy5kcmFnZ2luZy5sb3dMaW1pdCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJvdW5kU3RlcCh2YWx1ZSk7XG4gIH1cblxuICAvKiogR2V0IG1heCB2YWx1ZSBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgbmV3UG9zIGlzIG91dE9mQm91bmRzIGFib3ZlIG9yIGJlbG93IHRoZSBiYXIgYW5kIHJpZ2h0VG9MZWZ0ICovXG4gIHByaXZhdGUgZ2V0TWF4VmFsdWUobmV3UG9zOiBudW1iZXIsIG91dE9mQm91bmRzOiBib29sZWFuLCBpc0Fib3ZlOiBib29sZWFuKTogbnVtYmVyIHtcbiAgICBjb25zdCBpc1JUTDogYm9vbGVhbiA9IHRoaXMudmlld09wdGlvbnMucmlnaHRUb0xlZnQ7XG4gICAgbGV0IHZhbHVlOiBudW1iZXIgPSBudWxsO1xuXG4gICAgaWYgKG91dE9mQm91bmRzKSB7XG4gICAgICBpZiAoaXNBYm92ZSkge1xuICAgICAgICB2YWx1ZSA9IGlzUlRMXG4gICAgICAgICAgPyB0aGlzLnZpZXdPcHRpb25zLmZsb29yICsgdGhpcy5kcmFnZ2luZy5kaWZmZXJlbmNlXG4gICAgICAgICAgOiB0aGlzLnZpZXdPcHRpb25zLmNlaWw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IGlzUlRMXG4gICAgICAgICAgPyB0aGlzLnZpZXdPcHRpb25zLmNlaWxcbiAgICAgICAgICA6IHRoaXMudmlld09wdGlvbnMuZmxvb3IgKyB0aGlzLmRyYWdnaW5nLmRpZmZlcmVuY2U7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpc1JUTCkge1xuICAgICAgICB2YWx1ZSA9XG4gICAgICAgICAgdGhpcy5wb3NpdGlvblRvVmFsdWUobmV3UG9zICsgdGhpcy5kcmFnZ2luZy5sb3dMaW1pdCkgK1xuICAgICAgICAgIHRoaXMuZHJhZ2dpbmcuZGlmZmVyZW5jZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID1cbiAgICAgICAgICB0aGlzLnBvc2l0aW9uVG9WYWx1ZShuZXdQb3MgLSB0aGlzLmRyYWdnaW5nLmxvd0xpbWl0KSArXG4gICAgICAgICAgdGhpcy5kcmFnZ2luZy5kaWZmZXJlbmNlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJvdW5kU3RlcCh2YWx1ZSk7XG4gIH1cblxuICBwcml2YXRlIG9uRHJhZ01vdmUoZXZlbnQ/OiBNb3VzZUV2ZW50fFRvdWNoRXZlbnQpOiB2b2lkIHtcbiAgICBjb25zdCBuZXdQb3M6IG51bWJlciA9IHRoaXMuZ2V0RXZlbnRQb3NpdGlvbihldmVudCk7XG5cbiAgICBpZiAodGhpcy52aWV3T3B0aW9ucy5hbmltYXRlICYmICF0aGlzLnZpZXdPcHRpb25zLmFuaW1hdGVPbk1vdmUpIHtcbiAgICAgIGlmICh0aGlzLm1vdmluZykge1xuICAgICAgICB0aGlzLnNsaWRlckVsZW1lbnRBbmltYXRlQ2xhc3MgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLm1vdmluZyA9IHRydWU7XG5cbiAgICBsZXQgY2VpbExpbWl0OiBudW1iZXIsXG4gICAgICAgIGZsb29yTGltaXQ6IG51bWJlcixcbiAgICAgICAgZmxvb3JIYW5kbGVFbGVtZW50OiBTbGlkZXJIYW5kbGVEaXJlY3RpdmUsXG4gICAgICAgIGNlaWxIYW5kbGVFbGVtZW50OiBTbGlkZXJIYW5kbGVEaXJlY3RpdmU7XG4gICAgaWYgKHRoaXMudmlld09wdGlvbnMucmlnaHRUb0xlZnQpIHtcbiAgICAgIGNlaWxMaW1pdCA9IHRoaXMuZHJhZ2dpbmcubG93TGltaXQ7XG4gICAgICBmbG9vckxpbWl0ID0gdGhpcy5kcmFnZ2luZy5oaWdoTGltaXQ7XG4gICAgICBmbG9vckhhbmRsZUVsZW1lbnQgPSB0aGlzLm1heEhhbmRsZUVsZW1lbnQ7XG4gICAgICBjZWlsSGFuZGxlRWxlbWVudCA9IHRoaXMubWluSGFuZGxlRWxlbWVudDtcbiAgICB9IGVsc2Uge1xuICAgICAgY2VpbExpbWl0ID0gdGhpcy5kcmFnZ2luZy5oaWdoTGltaXQ7XG4gICAgICBmbG9vckxpbWl0ID0gdGhpcy5kcmFnZ2luZy5sb3dMaW1pdDtcbiAgICAgIGZsb29ySGFuZGxlRWxlbWVudCA9IHRoaXMubWluSGFuZGxlRWxlbWVudDtcbiAgICAgIGNlaWxIYW5kbGVFbGVtZW50ID0gdGhpcy5tYXhIYW5kbGVFbGVtZW50O1xuICAgIH1cblxuICAgIGNvbnN0IGlzVW5kZXJGbG9vckxpbWl0OiBib29sZWFuID0gKG5ld1BvcyA8PSBmbG9vckxpbWl0KTtcbiAgICBjb25zdCBpc092ZXJDZWlsTGltaXQ6IGJvb2xlYW4gPSAobmV3UG9zID49IHRoaXMubWF4SGFuZGxlUG9zaXRpb24gLSBjZWlsTGltaXQpO1xuXG4gICAgbGV0IG5ld01pblZhbHVlOiBudW1iZXI7XG4gICAgbGV0IG5ld01heFZhbHVlOiBudW1iZXI7XG4gICAgaWYgKGlzVW5kZXJGbG9vckxpbWl0KSB7XG4gICAgICBpZiAoZmxvb3JIYW5kbGVFbGVtZW50LnBvc2l0aW9uID09PSAwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIG5ld01pblZhbHVlID0gdGhpcy5nZXRNaW5WYWx1ZShuZXdQb3MsIHRydWUsIGZhbHNlKTtcbiAgICAgIG5ld01heFZhbHVlID0gdGhpcy5nZXRNYXhWYWx1ZShuZXdQb3MsIHRydWUsIGZhbHNlKTtcbiAgICB9IGVsc2UgaWYgKGlzT3ZlckNlaWxMaW1pdCkge1xuICAgICAgaWYgKGNlaWxIYW5kbGVFbGVtZW50LnBvc2l0aW9uID09PSB0aGlzLm1heEhhbmRsZVBvc2l0aW9uKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIG5ld01heFZhbHVlID0gdGhpcy5nZXRNYXhWYWx1ZShuZXdQb3MsIHRydWUsIHRydWUpO1xuICAgICAgbmV3TWluVmFsdWUgPSB0aGlzLmdldE1pblZhbHVlKG5ld1BvcywgdHJ1ZSwgdHJ1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld01pblZhbHVlID0gdGhpcy5nZXRNaW5WYWx1ZShuZXdQb3MsIGZhbHNlLCBmYWxzZSk7XG4gICAgICBuZXdNYXhWYWx1ZSA9IHRoaXMuZ2V0TWF4VmFsdWUobmV3UG9zLCBmYWxzZSwgZmFsc2UpO1xuICAgIH1cblxuICAgIHRoaXMucG9zaXRpb25UcmFja2luZ0JhcihuZXdNaW5WYWx1ZSwgbmV3TWF4VmFsdWUpO1xuICB9XG5cbiAgLy8gU2V0IHRoZSBuZXcgdmFsdWUgYW5kIHBvc2l0aW9uIGZvciB0aGUgZW50aXJlIGJhclxuICBwcml2YXRlIHBvc2l0aW9uVHJhY2tpbmdCYXIobmV3TWluVmFsdWU6IG51bWJlciwgbmV3TWF4VmFsdWU6IG51bWJlcik6IHZvaWQge1xuICAgIGlmICghVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy52aWV3T3B0aW9ucy5taW5MaW1pdCkgJiZcbiAgICAgICAgbmV3TWluVmFsdWUgPCB0aGlzLnZpZXdPcHRpb25zLm1pbkxpbWl0KSB7XG4gICAgICBuZXdNaW5WYWx1ZSA9IHRoaXMudmlld09wdGlvbnMubWluTGltaXQ7XG4gICAgICBuZXdNYXhWYWx1ZSA9IE1hdGhIZWxwZXIucm91bmRUb1ByZWNpc2lvbkxpbWl0KG5ld01pblZhbHVlICsgdGhpcy5kcmFnZ2luZy5kaWZmZXJlbmNlLCB0aGlzLnZpZXdPcHRpb25zLnByZWNpc2lvbkxpbWl0KTtcbiAgICB9XG4gICAgaWYgKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLnZpZXdPcHRpb25zLm1heExpbWl0KSAmJlxuICAgICAgICBuZXdNYXhWYWx1ZSA+IHRoaXMudmlld09wdGlvbnMubWF4TGltaXQpIHtcbiAgICAgIG5ld01heFZhbHVlID0gdGhpcy52aWV3T3B0aW9ucy5tYXhMaW1pdDtcbiAgICAgIG5ld01pblZhbHVlID0gTWF0aEhlbHBlci5yb3VuZFRvUHJlY2lzaW9uTGltaXQobmV3TWF4VmFsdWUgLSB0aGlzLmRyYWdnaW5nLmRpZmZlcmVuY2UsIHRoaXMudmlld09wdGlvbnMucHJlY2lzaW9uTGltaXQpO1xuICAgIH1cblxuICAgIHRoaXMudmlld0xvd1ZhbHVlID0gbmV3TWluVmFsdWU7XG4gICAgdGhpcy52aWV3SGlnaFZhbHVlID0gbmV3TWF4VmFsdWU7XG4gICAgdGhpcy5hcHBseVZpZXdDaGFuZ2UoKTtcbiAgICB0aGlzLnVwZGF0ZUhhbmRsZXMoUG9pbnRlclR5cGUuTWluLCB0aGlzLnZhbHVlVG9Qb3NpdGlvbihuZXdNaW5WYWx1ZSkpO1xuICAgIHRoaXMudXBkYXRlSGFuZGxlcyhQb2ludGVyVHlwZS5NYXgsIHRoaXMudmFsdWVUb1Bvc2l0aW9uKG5ld01heFZhbHVlKSk7XG4gIH1cblxuICAvLyBTZXQgdGhlIG5ldyB2YWx1ZSBhbmQgcG9zaXRpb24gdG8gdGhlIGN1cnJlbnQgdHJhY2tpbmcgaGFuZGxlXG4gIHByaXZhdGUgcG9zaXRpb25UcmFja2luZ0hhbmRsZShuZXdWYWx1ZTogbnVtYmVyKTogdm9pZCB7XG4gICAgbmV3VmFsdWUgPSB0aGlzLmFwcGx5TWluTWF4TGltaXQobmV3VmFsdWUpO1xuICAgIGlmICh0aGlzLnJhbmdlKSB7XG4gICAgICBpZiAodGhpcy52aWV3T3B0aW9ucy5wdXNoUmFuZ2UpIHtcbiAgICAgICAgbmV3VmFsdWUgPSB0aGlzLmFwcGx5UHVzaFJhbmdlKG5ld1ZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLnZpZXdPcHRpb25zLm5vU3dpdGNoaW5nKSB7XG4gICAgICAgICAgaWYgKHRoaXMuY3VycmVudFRyYWNraW5nUG9pbnRlciA9PT0gUG9pbnRlclR5cGUuTWluICYmXG4gICAgICAgICAgICAgIG5ld1ZhbHVlID4gdGhpcy52aWV3SGlnaFZhbHVlKSB7XG4gICAgICAgICAgICBuZXdWYWx1ZSA9IHRoaXMuYXBwbHlNaW5NYXhSYW5nZSh0aGlzLnZpZXdIaWdoVmFsdWUpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50VHJhY2tpbmdQb2ludGVyID09PSBQb2ludGVyVHlwZS5NYXggJiZcbiAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlIDwgdGhpcy52aWV3TG93VmFsdWUpIHtcbiAgICAgICAgICAgIG5ld1ZhbHVlID0gdGhpcy5hcHBseU1pbk1heFJhbmdlKHRoaXMudmlld0xvd1ZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbmV3VmFsdWUgPSB0aGlzLmFwcGx5TWluTWF4UmFuZ2UobmV3VmFsdWUpO1xuICAgICAgICAvKiBUaGlzIGlzIHRvIGNoZWNrIGlmIHdlIG5lZWQgdG8gc3dpdGNoIHRoZSBtaW4gYW5kIG1heCBoYW5kbGVzICovXG4gICAgICAgIGlmICh0aGlzLmN1cnJlbnRUcmFja2luZ1BvaW50ZXIgPT09IFBvaW50ZXJUeXBlLk1pbiAmJiBuZXdWYWx1ZSA+IHRoaXMudmlld0hpZ2hWYWx1ZSkge1xuICAgICAgICAgIHRoaXMudmlld0xvd1ZhbHVlID0gdGhpcy52aWV3SGlnaFZhbHVlO1xuICAgICAgICAgIHRoaXMuYXBwbHlWaWV3Q2hhbmdlKCk7XG4gICAgICAgICAgdGhpcy51cGRhdGVIYW5kbGVzKFBvaW50ZXJUeXBlLk1pbiwgdGhpcy5tYXhIYW5kbGVFbGVtZW50LnBvc2l0aW9uKTtcbiAgICAgICAgICB0aGlzLnVwZGF0ZUFyaWFBdHRyaWJ1dGVzKCk7XG4gICAgICAgICAgdGhpcy5jdXJyZW50VHJhY2tpbmdQb2ludGVyID0gUG9pbnRlclR5cGUuTWF4O1xuICAgICAgICAgIHRoaXMubWluSGFuZGxlRWxlbWVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLm1heEhhbmRsZUVsZW1lbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICBpZiAodGhpcy52aWV3T3B0aW9ucy5rZXlib2FyZFN1cHBvcnQpIHtcbiAgICAgICAgICAgIHRoaXMubWF4SGFuZGxlRWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLmN1cnJlbnRUcmFja2luZ1BvaW50ZXIgPT09IFBvaW50ZXJUeXBlLk1heCAmJlxuICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlIDwgdGhpcy52aWV3TG93VmFsdWUpIHtcbiAgICAgICAgICB0aGlzLnZpZXdIaWdoVmFsdWUgPSB0aGlzLnZpZXdMb3dWYWx1ZTtcbiAgICAgICAgICB0aGlzLmFwcGx5Vmlld0NoYW5nZSgpO1xuICAgICAgICAgIHRoaXMudXBkYXRlSGFuZGxlcyhQb2ludGVyVHlwZS5NYXgsIHRoaXMubWluSGFuZGxlRWxlbWVudC5wb3NpdGlvbik7XG4gICAgICAgICAgdGhpcy51cGRhdGVBcmlhQXR0cmlidXRlcygpO1xuICAgICAgICAgIHRoaXMuY3VycmVudFRyYWNraW5nUG9pbnRlciA9IFBvaW50ZXJUeXBlLk1pbjtcbiAgICAgICAgICB0aGlzLm1heEhhbmRsZUVsZW1lbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgdGhpcy5taW5IYW5kbGVFbGVtZW50LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgaWYgKHRoaXMudmlld09wdGlvbnMua2V5Ym9hcmRTdXBwb3J0KSB7XG4gICAgICAgICAgICB0aGlzLm1pbkhhbmRsZUVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5nZXRDdXJyZW50VHJhY2tpbmdWYWx1ZSgpICE9PSBuZXdWYWx1ZSkge1xuICAgICAgaWYgKHRoaXMuY3VycmVudFRyYWNraW5nUG9pbnRlciA9PT0gUG9pbnRlclR5cGUuTWluKSB7XG4gICAgICAgIHRoaXMudmlld0xvd1ZhbHVlID0gbmV3VmFsdWU7XG4gICAgICAgIHRoaXMuYXBwbHlWaWV3Q2hhbmdlKCk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudFRyYWNraW5nUG9pbnRlciA9PT0gUG9pbnRlclR5cGUuTWF4KSB7XG4gICAgICAgIHRoaXMudmlld0hpZ2hWYWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICB0aGlzLmFwcGx5Vmlld0NoYW5nZSgpO1xuICAgICAgfVxuICAgICAgdGhpcy51cGRhdGVIYW5kbGVzKHRoaXMuY3VycmVudFRyYWNraW5nUG9pbnRlciwgdGhpcy52YWx1ZVRvUG9zaXRpb24obmV3VmFsdWUpKTtcbiAgICAgIHRoaXMudXBkYXRlQXJpYUF0dHJpYnV0ZXMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFwcGx5TWluTWF4TGltaXQobmV3VmFsdWU6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLnZpZXdPcHRpb25zLm1pbkxpbWl0KSAmJiBuZXdWYWx1ZSA8IHRoaXMudmlld09wdGlvbnMubWluTGltaXQpIHtcbiAgICAgIHJldHVybiB0aGlzLnZpZXdPcHRpb25zLm1pbkxpbWl0O1xuICAgIH1cbiAgICBpZiAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudmlld09wdGlvbnMubWF4TGltaXQpICYmIG5ld1ZhbHVlID4gdGhpcy52aWV3T3B0aW9ucy5tYXhMaW1pdCkge1xuICAgICAgcmV0dXJuIHRoaXMudmlld09wdGlvbnMubWF4TGltaXQ7XG4gICAgfVxuICAgIHJldHVybiBuZXdWYWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgYXBwbHlNaW5NYXhSYW5nZShuZXdWYWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCBvcHBvc2l0ZVZhbHVlOiBudW1iZXIgPSAodGhpcy5jdXJyZW50VHJhY2tpbmdQb2ludGVyID09PSBQb2ludGVyVHlwZS5NaW4pXG4gICAgICA/IHRoaXMudmlld0hpZ2hWYWx1ZVxuICAgICAgOiB0aGlzLnZpZXdMb3dWYWx1ZTtcbiAgICBjb25zdCBkaWZmZXJlbmNlOiBudW1iZXIgPSBNYXRoLmFicyhuZXdWYWx1ZSAtIG9wcG9zaXRlVmFsdWUpO1xuICAgIGlmICghVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQodGhpcy52aWV3T3B0aW9ucy5taW5SYW5nZSkpIHtcbiAgICAgIGlmIChkaWZmZXJlbmNlIDwgdGhpcy52aWV3T3B0aW9ucy5taW5SYW5nZSkge1xuICAgICAgICBpZiAodGhpcy5jdXJyZW50VHJhY2tpbmdQb2ludGVyID09PSBQb2ludGVyVHlwZS5NaW4pIHtcbiAgICAgICAgICByZXR1cm4gTWF0aEhlbHBlci5yb3VuZFRvUHJlY2lzaW9uTGltaXQodGhpcy52aWV3SGlnaFZhbHVlIC0gdGhpcy52aWV3T3B0aW9ucy5taW5SYW5nZSwgdGhpcy52aWV3T3B0aW9ucy5wcmVjaXNpb25MaW1pdCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50VHJhY2tpbmdQb2ludGVyID09PSBQb2ludGVyVHlwZS5NYXgpIHtcbiAgICAgICAgICByZXR1cm4gTWF0aEhlbHBlci5yb3VuZFRvUHJlY2lzaW9uTGltaXQodGhpcy52aWV3TG93VmFsdWUgKyB0aGlzLnZpZXdPcHRpb25zLm1pblJhbmdlLCB0aGlzLnZpZXdPcHRpb25zLnByZWNpc2lvbkxpbWl0KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIVZhbHVlSGVscGVyLmlzTnVsbE9yVW5kZWZpbmVkKHRoaXMudmlld09wdGlvbnMubWF4UmFuZ2UpKSB7XG4gICAgICBpZiAoZGlmZmVyZW5jZSA+IHRoaXMudmlld09wdGlvbnMubWF4UmFuZ2UpIHtcbiAgICAgICAgaWYgKHRoaXMuY3VycmVudFRyYWNraW5nUG9pbnRlciA9PT0gUG9pbnRlclR5cGUuTWluKSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGhIZWxwZXIucm91bmRUb1ByZWNpc2lvbkxpbWl0KHRoaXMudmlld0hpZ2hWYWx1ZSAtIHRoaXMudmlld09wdGlvbnMubWF4UmFuZ2UsIHRoaXMudmlld09wdGlvbnMucHJlY2lzaW9uTGltaXQpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY3VycmVudFRyYWNraW5nUG9pbnRlciA9PT0gUG9pbnRlclR5cGUuTWF4KSB7XG4gICAgICAgICAgcmV0dXJuIE1hdGhIZWxwZXIucm91bmRUb1ByZWNpc2lvbkxpbWl0KHRoaXMudmlld0xvd1ZhbHVlICsgdGhpcy52aWV3T3B0aW9ucy5tYXhSYW5nZSwgdGhpcy52aWV3T3B0aW9ucy5wcmVjaXNpb25MaW1pdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ld1ZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBhcHBseVB1c2hSYW5nZShuZXdWYWx1ZTogbnVtYmVyKTogbnVtYmVyIHtcbiAgICBjb25zdCBkaWZmZXJlbmNlOiBudW1iZXIgPSAodGhpcy5jdXJyZW50VHJhY2tpbmdQb2ludGVyID09PSBQb2ludGVyVHlwZS5NaW4pXG4gICAgICAgICAgPyB0aGlzLnZpZXdIaWdoVmFsdWUgLSBuZXdWYWx1ZVxuICAgICAgICAgIDogbmV3VmFsdWUgLSB0aGlzLnZpZXdMb3dWYWx1ZTtcbiAgICBjb25zdCBtaW5SYW5nZTogbnVtYmVyID0gKCFWYWx1ZUhlbHBlci5pc051bGxPclVuZGVmaW5lZCh0aGlzLnZpZXdPcHRpb25zLm1pblJhbmdlKSlcbiAgICAgICAgICA/IHRoaXMudmlld09wdGlvbnMubWluUmFuZ2VcbiAgICAgICAgICA6IHRoaXMudmlld09wdGlvbnMuc3RlcDtcbiAgICBjb25zdCBtYXhSYW5nZTogbnVtYmVyID0gdGhpcy52aWV3T3B0aW9ucy5tYXhSYW5nZTtcbiAgICAvLyBpZiBzbWFsbGVyIHRoYW4gbWluUmFuZ2VcbiAgICBpZiAoZGlmZmVyZW5jZSA8IG1pblJhbmdlKSB7XG4gICAgICBpZiAodGhpcy5jdXJyZW50VHJhY2tpbmdQb2ludGVyID09PSBQb2ludGVyVHlwZS5NaW4pIHtcbiAgICAgICAgdGhpcy52aWV3SGlnaFZhbHVlID0gTWF0aEhlbHBlci5yb3VuZFRvUHJlY2lzaW9uTGltaXQoXG4gICAgICAgICAgTWF0aC5taW4obmV3VmFsdWUgKyBtaW5SYW5nZSwgdGhpcy52aWV3T3B0aW9ucy5jZWlsKSwgdGhpcy52aWV3T3B0aW9ucy5wcmVjaXNpb25MaW1pdCk7XG4gICAgICAgIG5ld1ZhbHVlID0gTWF0aEhlbHBlci5yb3VuZFRvUHJlY2lzaW9uTGltaXQodGhpcy52aWV3SGlnaFZhbHVlIC0gbWluUmFuZ2UsIHRoaXMudmlld09wdGlvbnMucHJlY2lzaW9uTGltaXQpO1xuICAgICAgICB0aGlzLmFwcGx5Vmlld0NoYW5nZSgpO1xuICAgICAgICB0aGlzLnVwZGF0ZUhhbmRsZXMoUG9pbnRlclR5cGUuTWF4LCB0aGlzLnZhbHVlVG9Qb3NpdGlvbih0aGlzLnZpZXdIaWdoVmFsdWUpKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50VHJhY2tpbmdQb2ludGVyID09PSBQb2ludGVyVHlwZS5NYXgpIHtcbiAgICAgICAgdGhpcy52aWV3TG93VmFsdWUgPSBNYXRoSGVscGVyLnJvdW5kVG9QcmVjaXNpb25MaW1pdChcbiAgICAgICAgICBNYXRoLm1heChuZXdWYWx1ZSAtIG1pblJhbmdlLCB0aGlzLnZpZXdPcHRpb25zLmZsb29yKSwgdGhpcy52aWV3T3B0aW9ucy5wcmVjaXNpb25MaW1pdCk7XG4gICAgICAgIG5ld1ZhbHVlID0gTWF0aEhlbHBlci5yb3VuZFRvUHJlY2lzaW9uTGltaXQodGhpcy52aWV3TG93VmFsdWUgKyBtaW5SYW5nZSwgdGhpcy52aWV3T3B0aW9ucy5wcmVjaXNpb25MaW1pdCk7XG4gICAgICAgIHRoaXMuYXBwbHlWaWV3Q2hhbmdlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlSGFuZGxlcyhQb2ludGVyVHlwZS5NaW4sIHRoaXMudmFsdWVUb1Bvc2l0aW9uKHRoaXMudmlld0xvd1ZhbHVlKSk7XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZUFyaWFBdHRyaWJ1dGVzKCk7XG4gICAgfSBlbHNlIGlmICghVmFsdWVIZWxwZXIuaXNOdWxsT3JVbmRlZmluZWQobWF4UmFuZ2UpICYmIGRpZmZlcmVuY2UgPiBtYXhSYW5nZSkge1xuICAgICAgLy8gaWYgZ3JlYXRlciB0aGFuIG1heFJhbmdlXG4gICAgICBpZiAodGhpcy5jdXJyZW50VHJhY2tpbmdQb2ludGVyID09PSBQb2ludGVyVHlwZS5NaW4pIHtcbiAgICAgICAgdGhpcy52aWV3SGlnaFZhbHVlID0gTWF0aEhlbHBlci5yb3VuZFRvUHJlY2lzaW9uTGltaXQobmV3VmFsdWUgKyBtYXhSYW5nZSwgdGhpcy52aWV3T3B0aW9ucy5wcmVjaXNpb25MaW1pdCk7XG4gICAgICAgIHRoaXMuYXBwbHlWaWV3Q2hhbmdlKCk7XG4gICAgICAgIHRoaXMudXBkYXRlSGFuZGxlcyhQb2ludGVyVHlwZS5NYXgsIHRoaXMudmFsdWVUb1Bvc2l0aW9uKHRoaXMudmlld0hpZ2hWYWx1ZSlcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJyZW50VHJhY2tpbmdQb2ludGVyID09PSBQb2ludGVyVHlwZS5NYXgpIHtcbiAgICAgICAgdGhpcy52aWV3TG93VmFsdWUgPSBNYXRoSGVscGVyLnJvdW5kVG9QcmVjaXNpb25MaW1pdChuZXdWYWx1ZSAtIG1heFJhbmdlLCB0aGlzLnZpZXdPcHRpb25zLnByZWNpc2lvbkxpbWl0KTtcbiAgICAgICAgdGhpcy5hcHBseVZpZXdDaGFuZ2UoKTtcbiAgICAgICAgdGhpcy51cGRhdGVIYW5kbGVzKFBvaW50ZXJUeXBlLk1pbiwgdGhpcy52YWx1ZVRvUG9zaXRpb24odGhpcy52aWV3TG93VmFsdWUpKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudXBkYXRlQXJpYUF0dHJpYnV0ZXMoKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ld1ZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRDaGFuZ2VDb250ZXh0KCk6IENoYW5nZUNvbnRleHQge1xuICAgIGNvbnN0IGNoYW5nZUNvbnRleHQ6IENoYW5nZUNvbnRleHQgPSBuZXcgQ2hhbmdlQ29udGV4dCgpO1xuICAgIGNoYW5nZUNvbnRleHQucG9pbnRlclR5cGUgPSB0aGlzLmN1cnJlbnRUcmFja2luZ1BvaW50ZXI7XG4gICAgY2hhbmdlQ29udGV4dC52YWx1ZSA9ICt0aGlzLnZhbHVlO1xuICAgIGlmICh0aGlzLnJhbmdlKSB7XG4gICAgICBjaGFuZ2VDb250ZXh0LmhpZ2hWYWx1ZSA9ICt0aGlzLmhpZ2hWYWx1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGNoYW5nZUNvbnRleHQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1zbGlkZXItdG9vbHRpcC13cmFwcGVyJyxcbiAgdGVtcGxhdGU6IGA8bmctY29udGFpbmVyICpuZ0lmPVwidGVtcGxhdGVcIj5cbiAgPG5nLXRlbXBsYXRlICpuZ1RlbXBsYXRlT3V0bGV0PVwidGVtcGxhdGU7IGNvbnRleHQ6IHt0b29sdGlwOiB0b29sdGlwLCBwbGFjZW1lbnQ6IHBsYWNlbWVudCwgY29udGVudDogY29udGVudH1cIj48L25nLXRlbXBsYXRlPlxuPC9uZy1jb250YWluZXI+XG5cbjxuZy1jb250YWluZXIgKm5nSWY9XCIhdGVtcGxhdGVcIj5cbiAgPGRpdiBjbGFzcz1cIm5neC1zbGlkZXItaW5uZXItdG9vbHRpcFwiIFthdHRyLnRpdGxlXT1cInRvb2x0aXBcIiBbYXR0ci5kYXRhLXRvb2x0aXAtcGxhY2VtZW50XT1cInBsYWNlbWVudFwiPlxuICAgIHt7Y29udGVudH19XG4gIDwvZGl2PlxuPC9uZy1jb250YWluZXI+YCxcbiAgc3R5bGVzOiBbYC5uZ3gtc2xpZGVyLWlubmVyLXRvb2x0aXB7aGVpZ2h0OjEwMCV9YF1cbn0pXG5leHBvcnQgY2xhc3MgVG9vbHRpcFdyYXBwZXJDb21wb25lbnQge1xuICBASW5wdXQoKVxuICB0ZW1wbGF0ZTogVGVtcGxhdGVSZWY8YW55PjtcblxuICBASW5wdXQoKVxuICB0b29sdGlwOiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgcGxhY2VtZW50OiBzdHJpbmc7XG5cbiAgQElucHV0KClcbiAgY29udGVudDogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBTbGlkZXJDb21wb25lbnQgfSBmcm9tICcuL3NsaWRlci5jb21wb25lbnQnO1xuaW1wb3J0IHsgU2xpZGVyRWxlbWVudERpcmVjdGl2ZSB9IGZyb20gJy4vc2xpZGVyLWVsZW1lbnQuZGlyZWN0aXZlJztcbmltcG9ydCB7IFNsaWRlckhhbmRsZURpcmVjdGl2ZSB9IGZyb20gJy4vc2xpZGVyLWhhbmRsZS5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgU2xpZGVyTGFiZWxEaXJlY3RpdmUgfSBmcm9tICcuL3NsaWRlci1sYWJlbC5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVG9vbHRpcFdyYXBwZXJDb21wb25lbnQgfSBmcm9tICcuL3Rvb2x0aXAtd3JhcHBlci5jb21wb25lbnQnO1xuXG4vKipcbiAqIE5neFNsaWRlciBtb2R1bGVcbiAqXG4gKiBUaGUgbW9kdWxlIGV4cG9ydHMgdGhlIHNsaWRlciBjb21wb25lbnRcbiAqL1xuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTbGlkZXJDb21wb25lbnQsXG4gICAgU2xpZGVyRWxlbWVudERpcmVjdGl2ZSxcbiAgICBTbGlkZXJIYW5kbGVEaXJlY3RpdmUsXG4gICAgU2xpZGVyTGFiZWxEaXJlY3RpdmUsXG4gICAgVG9vbHRpcFdyYXBwZXJDb21wb25lbnRcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFNsaWRlckNvbXBvbmVudFxuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neFNsaWRlck1vZHVsZSB7IH1cbiJdfQ==

/***/ }),

/***/ "tsvL":
/*!************************************************************!*\
  !*** ./src/app/campaign/components/view/view.component.ts ***!
  \************************************************************/
/*! exports provided: ViewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return ViewComponent; });
/* harmony import */ var src_app_common_enums_activity_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/enums/activity.enum */ "ENZJ");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_common_service_person_person_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/service/person/person.service */ "NzDZ");
/* harmony import */ var src_app_common_service_template_template_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/common/service/template/template.service */ "aFeQ");
/* harmony import */ var src_app_common_service_activity_activity_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/common/service/activity/activity.service */ "DbFV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _campaign_user_campaign_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../campaign-user/campaign-user.component */ "ew8j");









function ViewComponent_option_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r2.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](option_r2.value);
} }
function ViewComponent_div_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-campaign-user", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const person_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("person", person_r3);
} }
const _c0 = function (a0) { return { "square-border-gradient": a0 }; };
class ViewComponent {
    constructor(router, personService, activeRoute, templateService, activityService) {
        this.router = router;
        this.personService = personService;
        this.activeRoute = activeRoute;
        this.templateService = templateService;
        this.activityService = activityService;
        this.activityType = src_app_common_enums_activity_enum__WEBPACK_IMPORTED_MODULE_0__["Activity"];
        this.selectedActivity = src_app_common_enums_activity_enum__WEBPACK_IMPORTED_MODULE_0__["Activity"].None;
        this.selectedTemplate = undefined;
        this.userCount = 0;
        this.isProcessed = false;
        const campaignId = this.activeRoute.snapshot.params.id;
        this.personList = this.personService.getUsers(campaignId, this.isProcessed);
        this.templateList = this.templateService.getDataset();
        this.isProcessed = !this.isProcessed;
    }
    ngOnInit() {
    }
    navigateToHome() {
        this.router.navigateByUrl("/home");
    }
    changeSelection(activity) {
        this.selectedActivity = activity;
    }
    navigateToTemplate() {
        this.router.navigateByUrl("/template/dashboard");
    }
    launchCampaign() {
        const launchActivity = {
            campaignId: this.activeRoute.snapshot.params.id,
            templateId: this.selectedTemplate,
            type: this.selectedActivity,
            count: this.userCount
        };
        this.activityService.lauchActivity(launchActivity);
    }
    getProcessedUser() {
        const campaignId = this.activeRoute.snapshot.params.id;
        this.personList = this.personService.getUsers(campaignId, this.isProcessed);
        this.isProcessed = !this.isProcessed;
    }
}
ViewComponent.ɵfac = function ViewComponent_Factory(t) { return new (t || ViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_service_person_person_service__WEBPACK_IMPORTED_MODULE_3__["PersonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_service_template_template_service__WEBPACK_IMPORTED_MODULE_4__["TemplateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_service_activity_activity_service__WEBPACK_IMPORTED_MODULE_5__["ActivityService"])); };
ViewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ViewComponent, selectors: [["app-view"]], decls: 48, vars: 14, consts: [[1, "row"], [1, "col-1", "pt-2", "text-uppercase", "font-size-4", "text-color-1", "d-flex", "justify-content-between", "flex-column"], [1, "px-2"], ["id", "img3", "src", "../../../../assets/img/Img3.png", 3, "click"], [1, "col-4", "pt-2", "text-uppercase", "text-center", "font-size-4", "text-color-1", "d-flex", "justify-content-between"], [1, "row", "gradient-border-right"], [1, "col-12"], [1, "col-12", "d-flex", "justify-content-around", "font-size-4"], [1, "p-2", 3, "ngClass", "click"], ["id", "img14", "src", "../../../../assets/img/Img14.png", 1, "col", "p-0", "m-0"], [1, "col", "p-0", "m-0"], ["id", "img15", "src", "../../../../assets/img/Img15.png", 1, "col", "p-0", "m-0"], ["id", "img16", "src", "../../../../assets/img/Img16.png"], [1, "col-3", "pt-2", "text-uppercase", "text-center", "font-size-4", "text-color-1", "d-flex"], [1, "row", "d-flex", "justify-content-around", "gradient-border-right"], [1, "col-8"], ["type", "text", 1, "w-100", "font-size-4", "input-box-gradient", 3, "ngModel", "ngModelChange"], [1, "col-2", "pt-2", "text-uppercase", "text-center", "font-size-4", "text-color-1", "d-flex"], [1, "col-10"], [1, "select", "w-100", 3, "ngModel", "ngModelChange"], ["selected", "", "disabled", "", 1, "option", 3, "value"], ["class", "option", "selected", "", 3, "value", 4, "ngFor", "ngForOf"], [1, "mt-2", "btn", "btn-info", "btn-block", "btn-gradient", 3, "click"], [1, "col-2", "pt-2", "text-uppercase", "text-center", "font-size-4", "text-color-1", "d-flex", 3, "click"], [1, "row", "d-flex", "justify-content-around"], ["id", "img17", "src", "../../../../assets/img/Img17.png"], ["id", "view-table", 1, "pt-3", "overflow-y"], ["class", "row", 4, "ngFor", "ngForOf"], ["selected", "", 1, "option", 3, "value"], [3, "person"]], template: function ViewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewComponent_Template_img_click_3_listener() { return ctx.navigateToHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewComponent_Template_img_click_5_listener() { return ctx.getProcessedUser(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " which touch point would you like to automate? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewComponent_Template_div_click_11_listener() { return ctx.changeSelection(ctx.activityType.Connection); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Connect ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewComponent_Template_div_click_15_listener() { return ctx.changeSelection(ctx.activityType.Visit); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Visit profiles ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewComponent_Template_div_click_19_listener() { return ctx.changeSelection(ctx.activityType.Message); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Message ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " How many prospects would you like to reach? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "input", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ViewComponent_Template_input_ngModelChange_28_listener($event) { return ctx.userCount = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Would you like to use template ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "select", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("ngModelChange", function ViewComponent_Template_select_ngModelChange_34_listener($event) { return ctx.selectedTemplate = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "option", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Please Select");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](37, ViewComponent_option_37_Template, 2, 2, "option", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewComponent_Template_button_click_38_listener() { return ctx.navigateToTemplate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Create Template");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ViewComponent_Template_div_click_40_listener() { return ctx.launchCampaign(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " Lanuch outreach ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](47, ViewComponent_div_47_Template, 3, 1, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, ctx.selectedActivity === ctx.activityType.Connection));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, ctx.selectedActivity === ctx.activityType.Visit));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c0, ctx.selectedActivity === ctx.activityType.Message));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.userCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngModel", ctx.selectedTemplate);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", undefined);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.templateList);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.personList);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _campaign_user_campaign_user_component__WEBPACK_IMPORTED_MODULE_8__["CampaignUserComponent"]], styles: ["#view-table[_ngcontent-%COMP%]{\r\n    height: 70vh;\r\n}\r\n\r\n.overflow-y[_ngcontent-%COMP%] {\r\n    overflow-y: auto;\r\n    overflow-x: hidden;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InZpZXcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiN2aWV3LXRhYmxle1xyXG4gICAgaGVpZ2h0OiA3MHZoO1xyXG59XHJcblxyXG4ub3ZlcmZsb3cteSB7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG59Il19 */"] });


/***/ })

}]);
//# sourceMappingURL=3.js.map