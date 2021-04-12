(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "264Y":
/*!**************************************************************************************!*\
  !*** ./src/app/workflow/components/workflow-data-nav/workflow-data-nav.component.ts ***!
  \**************************************************************************************/
/*! exports provided: WorkflowDataNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowDataNavComponent", function() { return WorkflowDataNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class WorkflowDataNavComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    navigateToHome() {
        this.router.navigateByUrl("/home");
    }
}
WorkflowDataNavComponent.ɵfac = function WorkflowDataNavComponent_Factory(t) { return new (t || WorkflowDataNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
WorkflowDataNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkflowDataNavComponent, selectors: [["app-workflow-data-nav"]], decls: 8, vars: 0, consts: [["id", "nav", 1, "vertical-align"], [1, "col-2", "text-uppercase", "font-size-4", "text-color-1", "d-flex", "justify-content-between"], [1, "px-2"], ["id", "img3", "src", "../../../../assets/img/Img3.png", 3, "click"], [1, "col-8", "text-center", "text-uppercase", "font-size-6", "text-color-1"], [1, "col-2"], ["id", "img4", "src", "../../../../assets/img/Img4.png", 1, "float-right"]], template: function WorkflowDataNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkflowDataNavComponent_Template_img_click_3_listener() { return ctx.navigateToHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Workflow ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#nav[_ngcontent-%COMP%]{\r\n    height: 15vh;\r\n}\r\n\r\n.vertical-align[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtmbG93LWRhdGEtbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJ3b3JrZmxvdy1kYXRhLW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25hdntcclxuICAgIGhlaWdodDogMTV2aDtcclxufVxyXG5cclxuLnZlcnRpY2FsLWFsaWduIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59Il19 */"] });


/***/ }),

/***/ "78nr":
/*!************************************************************************************!*\
  !*** ./src/app/workflow/components/workflow-feature/workflow-feature.component.ts ***!
  \************************************************************************************/
/*! exports provided: WorkflowFeatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowFeatureComponent", function() { return WorkflowFeatureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_pipes_limit_to_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/pipes/limit-to.pipe */ "SC6h");



class WorkflowFeatureComponent {
    constructor(router, activeRoute) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.text = "";
        this.location = "/home";
    }
    ngOnInit() {
    }
    navigateToLocation() {
        this.router.navigate(['../edit/' + this.location], { relativeTo: this.activeRoute });
    }
}
WorkflowFeatureComponent.ɵfac = function WorkflowFeatureComponent_Factory(t) { return new (t || WorkflowFeatureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
WorkflowFeatureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkflowFeatureComponent, selectors: [["app-workflow-feature"]], inputs: { text: "text", location: "location" }, decls: 4, vars: 4, consts: [[1, "square-border-gradient", "feature", 3, "click"], [1, "m-0", "p-0", "feature-text", "text-color-1", "text-uppercase", "font-size-4", "text-center"]], template: function WorkflowFeatureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkflowFeatureComponent_Template_div_click_0_listener() { return ctx.navigateToLocation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "limitTo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, ctx.text, 22), " ");
    } }, pipes: [_common_pipes_limit_to_pipe__WEBPACK_IMPORTED_MODULE_2__["LimitToPipe"]], styles: [".feature[_ngcontent-%COMP%] {\r\n    height: 160px;\r\n}\r\n\r\n.feature-text[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    min-height: 50px;\r\n    background-color: black;\r\n    line-height: 50px;\r\n    width: 102%;\r\n    right: 1%;\r\n    top: 55px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtmbG93LWZlYXR1cmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFNBQVM7SUFDVCxTQUFTO0FBQ2IiLCJmaWxlIjoid29ya2Zsb3ctZmVhdHVyZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZlYXR1cmUge1xyXG4gICAgaGVpZ2h0OiAxNjBweDtcclxufVxyXG5cclxuLmZlYXR1cmUtdGV4dCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiAxMDIlO1xyXG4gICAgcmlnaHQ6IDElO1xyXG4gICAgdG9wOiA1NXB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "8xKt":
/*!*********************************************!*\
  !*** ./src/app/workflow/workflow.module.ts ***!
  \*********************************************/
/*! exports provided: WorkflowModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowModule", function() { return WorkflowModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _workflow_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./workflow-routing.module */ "H+m8");
/* harmony import */ var _components_workflow_data_workflow_data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/workflow-data/workflow-data.component */ "i8eL");
/* harmony import */ var _components_workflow_data_nav_workflow_data_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/workflow-data-nav/workflow-data-nav.component */ "264Y");
/* harmony import */ var _components_workflow_feature_workflow_feature_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/workflow-feature/workflow-feature.component */ "78nr");
/* harmony import */ var _components_workflow_home_workflow_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/workflow-home/workflow-home.component */ "Qx4n");
/* harmony import */ var _components_workflow_home_nav_workflow_home_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/workflow-home-nav/workflow-home-nav.component */ "kcmY");
/* harmony import */ var _common_common_func_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/common-func.module */ "VeTl");
/* harmony import */ var _components_workflow_data_feature_workflow_data_feature_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/workflow-data-feature/workflow-data-feature.component */ "LEnP");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ "fXoL");












class WorkflowModule {
}
WorkflowModule.ɵfac = function WorkflowModule_Factory(t) { return new (t || WorkflowModule)(); };
WorkflowModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: WorkflowModule });
WorkflowModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _workflow_routing_module__WEBPACK_IMPORTED_MODULE_1__["WorkflowRoutingModule"],
            _common_common_func_module__WEBPACK_IMPORTED_MODULE_7__["CommonFuncModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](WorkflowModule, { declarations: [_components_workflow_data_workflow_data_component__WEBPACK_IMPORTED_MODULE_2__["WorkflowDataComponent"], _components_workflow_data_nav_workflow_data_nav_component__WEBPACK_IMPORTED_MODULE_3__["WorkflowDataNavComponent"], _components_workflow_feature_workflow_feature_component__WEBPACK_IMPORTED_MODULE_4__["WorkflowFeatureComponent"], _components_workflow_home_workflow_home_component__WEBPACK_IMPORTED_MODULE_5__["WorkflowHomeComponent"], _components_workflow_home_nav_workflow_home_nav_component__WEBPACK_IMPORTED_MODULE_6__["WorkflowHomeNavComponent"], _components_workflow_data_feature_workflow_data_feature_component__WEBPACK_IMPORTED_MODULE_8__["WorkflowDataFeatureComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _workflow_routing_module__WEBPACK_IMPORTED_MODULE_1__["WorkflowRoutingModule"],
        _common_common_func_module__WEBPACK_IMPORTED_MODULE_7__["CommonFuncModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"]] }); })();


/***/ }),

/***/ "H+m8":
/*!*****************************************************!*\
  !*** ./src/app/workflow/workflow-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: WorkflowRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowRoutingModule", function() { return WorkflowRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_workflow_data_workflow_data_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/workflow-data/workflow-data.component */ "i8eL");
/* harmony import */ var _components_workflow_home_workflow_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/workflow-home/workflow-home.component */ "Qx4n");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





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
                component: _components_workflow_home_workflow_home_component__WEBPACK_IMPORTED_MODULE_2__["WorkflowHomeComponent"]
            },
            {
                path: "create",
                pathMatch: "full",
                component: _components_workflow_data_workflow_data_component__WEBPACK_IMPORTED_MODULE_1__["WorkflowDataComponent"]
            },
            {
                path: "edit/:id",
                pathMatch: "full",
                component: _components_workflow_data_workflow_data_component__WEBPACK_IMPORTED_MODULE_1__["WorkflowDataComponent"]
            }
        ]
    }
];
class WorkflowRoutingModule {
}
WorkflowRoutingModule.ɵfac = function WorkflowRoutingModule_Factory(t) { return new (t || WorkflowRoutingModule)(); };
WorkflowRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: WorkflowRoutingModule });
WorkflowRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](WorkflowRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "LEnP":
/*!**********************************************************************************************!*\
  !*** ./src/app/workflow/components/workflow-data-feature/workflow-data-feature.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: WorkflowDataFeatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowDataFeatureComponent", function() { return WorkflowDataFeatureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var src_app_common_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/enums/input-type.enum */ "wplV");
/* harmony import */ var src_app_common_enums_meridiem_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/enums/meridiem.enum */ "VIko");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _common_pipes_limit_to_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/pipes/limit-to.pipe */ "SC6h");








function WorkflowDataFeatureComponent_div_6_option_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r6.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](option_r6.value);
} }
function WorkflowDataFeatureComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "option", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Please Select");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WorkflowDataFeatureComponent_div_6_option_4_Template, 2, 2, "option", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r0.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", null);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.dataset);
} }
function WorkflowDataFeatureComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r1.text);
} }
function WorkflowDataFeatureComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControlName", ctx_r2.text);
} }
function WorkflowDataFeatureComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "AM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "PM");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function WorkflowDataFeatureComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.errorMessage, " ");
} }
class WorkflowDataFeatureComponent {
    constructor(builder) {
        this.text = "";
        this.inputType = src_app_common_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_2__["InputType"].None;
        this.dataset = [];
        this.key = "";
        this.errorMessage = "";
        this.isDisabled = false;
        this.input = src_app_common_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_2__["InputType"];
        this.showError = false;
        this.elementForm = builder.group({});
        this.valueChangeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        if (this.inputType === this.input.Time) {
            const hour = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]("12", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(12)]);
            const min = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](0, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(60)]);
            const meridiem = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](src_app_common_enums_meridiem_enum__WEBPACK_IMPORTED_MODULE_3__["Meridiem"].AM, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
            this.elementForm.addControl("hour", hour);
            this.elementForm.addControl("min", min);
            this.elementForm.addControl("meridiem", meridiem);
            this.elementForm.valueChanges.subscribe(this.valueChange());
        }
        else if (this.inputType === this.input.Combobox) {
            const combobox = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
            combobox.valueChanges.subscribe(this.valueChange());
            this.elementForm.addControl(this.text, combobox);
        }
        else if (this.inputType === this.input.Number) {
            const number = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
            number.valueChanges.subscribe(this.valueChange());
            this.elementForm.addControl(this.text, number);
        }
        else if (this.inputType === this.input.Text) {
            const text = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
            text.valueChanges.subscribe(this.valueChange());
            this.elementForm.addControl(this.text, text);
        }
        this.elementForm.updateValueAndValidity();
    }
    valueChange() {
        const valueChange = {
            next: (value) => {
                const payload = {};
                payload[this.key] = value;
                this.valueChangeEvent.emit(payload);
            }
        };
        return valueChange;
    }
    validateForm() {
        if (this.inputType === src_app_common_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_2__["InputType"].Time &&
            (this.elementForm.controls.hour.errors != null
                || this.elementForm.controls.min.errors != null
                || this.elementForm.controls.meridiem.errors != null)) {
            this.showError = true;
        }
        else if (this.inputType !== src_app_common_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_2__["InputType"].Time && this.elementForm.controls[this.text].errors != null) {
            this.showError = true;
        }
        else {
            this.showError = false;
        }
        return this.showError;
    }
}
WorkflowDataFeatureComponent.ɵfac = function WorkflowDataFeatureComponent_Factory(t) { return new (t || WorkflowDataFeatureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
WorkflowDataFeatureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkflowDataFeatureComponent, selectors: [["app-workflow-data-feature"]], inputs: { text: "text", inputType: ["type", "inputType"], dataset: "dataset", key: "key", errorMessage: "errorMessage", isDisabled: "isDisabled" }, outputs: { valueChangeEvent: "onValueChange" }, decls: 11, vars: 10, consts: [[1, "square-border-gradient", "feature"], [3, "formGroup"], [1, "d-flex", "justify-content-center"], [1, "m-0", "p-0", "feature-text", "col-8", "text-color-1", "text-uppercase", "font-size-4", "text-center"], ["class", "d-flex justify-content-center", 4, "ngIf"], ["class", "d-flex justify-content-center number-field", 4, "ngIf"], ["class", "d-flex flex-column", 4, "ngIf"], ["class", "d-flex justify-content-center invalid-feedback d-block", 4, "ngIf"], [1, "col-9", "select", 3, "formControlName"], ["selected", "", 1, "option", 3, "value"], ["class", "option", "selected", "", 3, "value", 4, "ngFor", "ngForOf"], [1, "d-flex", "justify-content-center", "number-field"], ["type", "number", 1, "col-9", "input-box-gradient", 3, "formControlName"], ["type", "text", 1, "col-9", "input-box-gradient", 3, "formControlName"], [1, "d-flex", "flex-column"], ["type", "number", "formControlName", "hour", 1, "col-3", "input-box-gradient"], ["type", "number", "formControlName", "min", 1, "col-3", "input-box-gradient"], ["formControlName", "meridiem", 1, "col-3", "select"], ["value", "AM", 1, "option"], ["value", "PM", 1, "option"], [1, "d-flex", "justify-content-center", "invalid-feedback", "d-block"]], template: function WorkflowDataFeatureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "limitTo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, WorkflowDataFeatureComponent_div_6_Template, 5, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, WorkflowDataFeatureComponent_div_7_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, WorkflowDataFeatureComponent_div_8_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, WorkflowDataFeatureComponent_div_9_Template, 9, 0, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, WorkflowDataFeatureComponent_div_10_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.elementForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 7, ctx.text, 14), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inputType === ctx.input.Combobox);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inputType === ctx.input.Number);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inputType === ctx.input.Text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.inputType === ctx.input.Time);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showError === true);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_z"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"]], pipes: [_common_pipes_limit_to_pipe__WEBPACK_IMPORTED_MODULE_5__["LimitToPipe"]], styles: [".feature[_ngcontent-%COMP%] {\r\n    height: 160px;\r\n}\r\n\r\n.feature-text[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    top: -25px;\r\n    min-height: 50px;\r\n    background-color: black;\r\n    vertical-align: center;\r\n    line-height: 50px;\r\n}\r\n\r\n.number-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\r\n    -webkit-appearance: none;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtmbG93LWRhdGEtZmVhdHVyZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksd0JBQXdCO0FBQzVCIiwiZmlsZSI6IndvcmtmbG93LWRhdGEtZmVhdHVyZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZlYXR1cmUge1xyXG4gICAgaGVpZ2h0OiAxNjBweDtcclxufVxyXG5cclxuLmZlYXR1cmUtdGV4dCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0b3A6IC0yNXB4O1xyXG4gICAgbWluLWhlaWdodDogNTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgdmVydGljYWwtYWxpZ246IGNlbnRlcjtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG59XHJcblxyXG4ubnVtYmVyLWZpZWxkIGlucHV0Ojotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uIHtcclxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "Ng3q":
/*!************************************!*\
  !*** ./src/app/common/dto/time.ts ***!
  \************************************/
/*! exports provided: Time */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Time", function() { return Time; });
/* harmony import */ var _enums_meridiem_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/meridiem.enum */ "VIko");

class Time {
    constructor() {
        this.hour = 12;
        this.min = 0;
        this.meridiem = _enums_meridiem_enum__WEBPACK_IMPORTED_MODULE_0__["Meridiem"].AM;
    }
}


/***/ }),

/***/ "OfsW":
/*!********************************************!*\
  !*** ./src/app/common/utils/enum-utils.ts ***!
  \********************************************/
/*! exports provided: EnumUtils */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EnumUtils", function() { return EnumUtils; });
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment-timezone */ "f0Wu");
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/activity.enum */ "ENZJ");
/* harmony import */ var _enums_frequency_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/frequency.enum */ "b/ZT");



class EnumUtils {
    static getActivityDataset() {
        const dataset = [];
        const connect = {
            key: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__["Activity"].Connection,
            value: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__["Activity"].Connection
        };
        const message = {
            key: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__["Activity"].Message,
            value: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__["Activity"].Message
        };
        const visit = {
            key: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__["Activity"].Visit,
            value: _enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__["Activity"].Visit
        };
        dataset.push(connect, message, visit);
        return dataset;
    }
    static getFrequencyDataset() {
        const dataset = [];
        const once = {
            key: _enums_frequency_enum__WEBPACK_IMPORTED_MODULE_2__["Frequency"].Once,
            value: _enums_frequency_enum__WEBPACK_IMPORTED_MODULE_2__["Frequency"].Once
        };
        const daily = {
            key: _enums_frequency_enum__WEBPACK_IMPORTED_MODULE_2__["Frequency"].Daily,
            value: _enums_frequency_enum__WEBPACK_IMPORTED_MODULE_2__["Frequency"].Daily
        };
        const weekdays = {
            key: _enums_frequency_enum__WEBPACK_IMPORTED_MODULE_2__["Frequency"].Weekdays,
            value: _enums_frequency_enum__WEBPACK_IMPORTED_MODULE_2__["Frequency"].Weekdays
        };
        const weekends = {
            key: _enums_frequency_enum__WEBPACK_IMPORTED_MODULE_2__["Frequency"].Weekends,
            value: _enums_frequency_enum__WEBPACK_IMPORTED_MODULE_2__["Frequency"].Weekends
        };
        dataset.push(daily, weekdays, weekends);
        return dataset;
    }
    static getTimezoneDataset() {
        const dataset = [];
        moment_timezone__WEBPACK_IMPORTED_MODULE_0___default.a.tz.names().forEach((value) => {
            const timezone = {
                key: value,
                value: value
            };
            dataset.push(timezone);
        });
        return dataset;
    }
}


/***/ }),

/***/ "Qx4n":
/*!******************************************************************************!*\
  !*** ./src/app/workflow/components/workflow-home/workflow-home.component.ts ***!
  \******************************************************************************/
/*! exports provided: WorkflowHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowHomeComponent", function() { return WorkflowHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_common_service_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/service/workflow/workflow.service */ "i85x");
/* harmony import */ var _workflow_home_nav_workflow_home_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../workflow-home-nav/workflow-home-nav.component */ "kcmY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _workflow_feature_workflow_feature_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../workflow-feature/workflow-feature.component */ "78nr");





function WorkflowHomeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-workflow-feature", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const workflow_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", workflow_r1.name)("location", workflow_r1.id);
} }
class WorkflowHomeComponent {
    constructor(workflowService) {
        this.workflowService = workflowService;
        this.workflowList = this.workflowService.getAllWorkflow();
    }
    ngOnInit() {
    }
}
WorkflowHomeComponent.ɵfac = function WorkflowHomeComponent_Factory(t) { return new (t || WorkflowHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_service_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_1__["WorkflowService"])); };
WorkflowHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkflowHomeComponent, selectors: [["app-workflow-home"]], decls: 4, vars: 1, consts: [[1, "row"], [1, "row", "pt-5"], ["class", "col-3", 4, "ngFor", "ngForOf"], [1, "col-3"], [3, "text", "location"]], template: function WorkflowHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-workflow-home-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, WorkflowHomeComponent_div_3_Template, 2, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.workflowList);
    } }, directives: [_workflow_home_nav_workflow_home_nav_component__WEBPACK_IMPORTED_MODULE_2__["WorkflowHomeNavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _workflow_feature_workflow_feature_component__WEBPACK_IMPORTED_MODULE_4__["WorkflowFeatureComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3b3JrZmxvdy1ob21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "VIko":
/*!***********************************************!*\
  !*** ./src/app/common/enums/meridiem.enum.ts ***!
  \***********************************************/
/*! exports provided: Meridiem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Meridiem", function() { return Meridiem; });
var Meridiem;
(function (Meridiem) {
    Meridiem["AM"] = "AM";
    Meridiem["PM"] = "PM";
})(Meridiem || (Meridiem = {}));


/***/ }),

/***/ "b/ZT":
/*!************************************************!*\
  !*** ./src/app/common/enums/frequency.enum.ts ***!
  \************************************************/
/*! exports provided: Frequency */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Frequency", function() { return Frequency; });
var Frequency;
(function (Frequency) {
    Frequency["Once"] = "Once";
    Frequency["Daily"] = "Daily";
    Frequency["Weekdays"] = "Weekdays";
    Frequency["Weekends"] = "Weekends";
})(Frequency || (Frequency = {}));


/***/ }),

/***/ "i85x":
/*!*************************************************************!*\
  !*** ./src/app/common/service/workflow/workflow.service.ts ***!
  \*************************************************************/
/*! exports provided: WorkflowService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowService", function() { return WorkflowService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user/user.service */ "sBHq");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _scheduler_scheduler_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../scheduler/scheduler.service */ "1uZb");





class WorkflowService {
    constructor(userService, firestore, scheduler) {
        this.userService = userService;
        this.firestore = firestore;
        this.scheduler = scheduler;
        this.workflowList = [];
        this.dataset = [];
    }
    getAllWorkflow() {
        if (this.workflowList.length === 0) {
            this.loadAllWorkflow();
        }
        return this.workflowList;
    }
    loadAllWorkflow() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const uid = yield this.userService.getActiveUserId();
            if (uid == null) {
                return Promise.reject({
                    message: "User session is not valid. Please Login and try again."
                });
            }
            this.firestore.collection("workflow", ref => ref.where("uid", "==", uid)
                .orderBy("created", "desc"))
                .get()
                .subscribe({
                next: (result) => {
                    this.workflowList.splice(0);
                    result.forEach((snapshot) => {
                        const workflow = snapshot.data();
                        workflow.id = snapshot.id;
                        this.workflowList.push(workflow);
                    });
                }
            });
            return Promise.resolve(true);
        });
    }
    create(workflow) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const uid = yield this.userService.getActiveUserId();
            if (uid == null) {
                return reject({ message: "User session is not valid. Please Login and try again." });
            }
            else {
                workflow.uid = uid;
                workflow.created = new Date().getTime();
            }
            this.firestore.collection("workflow").add(workflow).then((value) => {
                if (this.workflowList.length == 0) {
                    this.loadAllWorkflow();
                }
                else {
                    workflow.id = value.id;
                    const data = {
                        key: workflow.id,
                        value: workflow.name
                    };
                    this.workflowList.splice(0, 0, workflow);
                    this.dataset.splice(0, 0, data);
                }
                this.scheduler.updateState();
                return resolve(true);
            }, (reason) => {
                return reject(reason);
            });
        }));
    }
    update(workflow) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const uid = yield this.userService.getActiveUserId();
            if (uid == null) {
                return reject({ message: "User session is not valid. Please Login and try again." });
            }
            else {
                workflow.created = new Date().getTime();
            }
            this.firestore.collection("workflow").doc(workflow.id).set(workflow).then(() => {
                if (this.workflowList.length == 0) {
                    this.loadAllWorkflow();
                }
                else {
                    let index = this.workflowList.findIndex(existingWorkflow => existingWorkflow.id === workflow.id);
                    if (index != -1) {
                        this.workflowList.splice(index, 1);
                        this.workflowList.splice(0, 0, workflow);
                    }
                    index = this.dataset.findIndex(existingDatapoint => existingDatapoint.key === workflow.id);
                    if (index != -1) {
                        const data = {
                            key: (workflow.id || 'MOCK-ID'),
                            value: workflow.name
                        };
                        this.dataset.splice(index, 1);
                        this.dataset.splice(0, 0, data);
                    }
                }
                this.scheduler.updateState();
                return resolve(true);
            }, (reason) => {
                return reject(reason);
            });
        }));
    }
    getById(id) {
        return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const uid = yield this.userService.getActiveUserId();
            if (uid == null) {
                return reject({ message: "User session is not valid. Please Login and try again." });
            }
            this.firestore.collection("workflow")
                .doc(id)
                .get()
                .subscribe({
                next: (result) => {
                    const workflow = result.data();
                    if (result.exists && workflow.uid === uid) {
                        workflow.id = result.id;
                        return resolve(workflow);
                    }
                    return reject({
                        message: "Could not find the template on server. Please try again after some time."
                    });
                },
                error: (reason) => {
                    return reject({
                        message: "Could not load template from server. Please try again after some time."
                    });
                }
            });
        }));
    }
}
WorkflowService.ɵfac = function WorkflowService_Factory(t) { return new (t || WorkflowService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_scheduler_scheduler_service__WEBPACK_IMPORTED_MODULE_4__["SchedulerService"])); };
WorkflowService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: WorkflowService, factory: WorkflowService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "i8eL":
/*!******************************************************************************!*\
  !*** ./src/app/workflow/components/workflow-data/workflow-data.component.ts ***!
  \******************************************************************************/
/*! exports provided: WorkflowDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowDataComponent", function() { return WorkflowDataComponent; });
/* harmony import */ var src_app_common_dto_workflow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/common/dto/workflow */ "y1ZI");
/* harmony import */ var src_app_common_enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/enums/activity.enum */ "ENZJ");
/* harmony import */ var src_app_common_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/enums/input-type.enum */ "wplV");
/* harmony import */ var src_app_common_utils_enum_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/common/utils/enum-utils */ "OfsW");
/* harmony import */ var _workflow_data_feature_workflow_data_feature_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../workflow-data-feature/workflow-data-feature.component */ "LEnP");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _common_service_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/service/workflow/workflow.service */ "i85x");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var src_app_common_service_campaign_campaign_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/common/service/campaign/campaign.service */ "Oom1");
/* harmony import */ var src_app_common_service_template_template_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/common/service/template/template.service */ "aFeQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _workflow_data_nav_workflow_data_nav_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../workflow-data-nav/workflow-data-nav.component */ "264Y");














class WorkflowDataComponent {
    constructor(workflowService, toaster, campaignService, templateService, router, activeRoute, builder) {
        this.workflowService = workflowService;
        this.toaster = toaster;
        this.campaignService = campaignService;
        this.templateService = templateService;
        this.router = router;
        this.activeRoute = activeRoute;
        this.children = null;
        this.inputType = src_app_common_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_2__["InputType"];
        this.activity = src_app_common_enums_activity_enum__WEBPACK_IMPORTED_MODULE_1__["Activity"];
        this.disableTemplate = false;
        this.workflow = new src_app_common_dto_workflow__WEBPACK_IMPORTED_MODULE_0__["Workflow"]();
        this.campaignDataset = this.campaignService.getDataset();
        this.templateDataset = this.templateService.getDataset();
        this.activityDataset = src_app_common_utils_enum_utils__WEBPACK_IMPORTED_MODULE_3__["EnumUtils"].getActivityDataset();
        this.frequencyDataset = src_app_common_utils_enum_utils__WEBPACK_IMPORTED_MODULE_3__["EnumUtils"].getFrequencyDataset();
        this.timezoneDataset = src_app_common_utils_enum_utils__WEBPACK_IMPORTED_MODULE_3__["EnumUtils"].getTimezoneDataset();
        const id = activeRoute.snapshot.params.id;
        if (id != null) {
            this.loadWorkflow(id);
        }
    }
    ngOnInit() {
    }
    onSubmit() {
        var _a;
        const isValid = (_a = this.children) === null || _a === void 0 ? void 0 : _a.reduce((prev, current) => {
            const isCurrentChildInvalid = current.validateForm();
            if (prev == false) {
                return false;
            }
            return !isCurrentChildInvalid;
        }, true);
        if (isValid == false || isValid == undefined) {
            return;
        }
        else if (isValid == true && this.workflow.id != "") {
            this.workflowService.update(this.workflow).then(() => {
                this.toaster.success("Workflow was updated successfully. You will be redirected to Workflow Dashboard.");
                this.router.navigate(["../../dashboard"], {
                    relativeTo: this.activeRoute
                });
            }, (reason) => {
                this.toaster.error("Could not update workflow due to '" + reason.messsage + "'.");
            });
        }
        else if (isValid == true && this.workflow.id == "") {
            this.workflowService.create(this.workflow).then(() => {
                this.toaster.success("Workflow was created successfully. You will be redirected to Workflow Dashboard.");
                this.router.navigate(["../dashboard"], {
                    relativeTo: this.activeRoute
                });
            }, (reason) => {
                this.toaster.error("Could not created workflow due to '" + reason.messsage + "'.");
            });
        }
    }
    onValueChange(controlValue) {
        this.workflow = Object.assign(Object.assign({}, this.workflow), controlValue);
    }
    loadWorkflow(id) {
        this.workflowService.getById(id).then((workflow) => {
            this.workflow = workflow;
            this.updateChildrenValues(this.workflow);
        }, (reason) => {
            this.toaster.error(reason.message);
        });
    }
    updateChildrenValues(workflow) {
        var _a;
        (_a = this.children) === null || _a === void 0 ? void 0 : _a.forEach((component) => {
            if (component.inputType == src_app_common_enums_input_type_enum__WEBPACK_IMPORTED_MODULE_2__["InputType"].Time) {
                component.elementForm.patchValue({
                    hour: parseInt(workflow.time.hour),
                    min: parseInt(workflow.time.min),
                    meridiem: workflow.time.meridiem,
                });
            }
            else {
                component.elementForm.patchValue({
                    [component.text]: workflow[component.key]
                });
            }
        });
    }
}
WorkflowDataComponent.ɵfac = function WorkflowDataComponent_Factory(t) { return new (t || WorkflowDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_common_service_workflow_workflow_service__WEBPACK_IMPORTED_MODULE_6__["WorkflowService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_common_service_campaign_campaign_service__WEBPACK_IMPORTED_MODULE_8__["CampaignService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_common_service_template_template_service__WEBPACK_IMPORTED_MODULE_9__["TemplateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormBuilder"])); };
WorkflowDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: WorkflowDataComponent, selectors: [["app-workflow-data"]], viewQuery: function WorkflowDataComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_workflow_data_feature_workflow_data_feature_component__WEBPACK_IMPORTED_MODULE_4__["WorkflowDataFeatureComponent"], 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.children = _t);
    } }, decls: 24, vars: 13, consts: [[1, "row"], [1, "row", "pt-5", "justify-content-center"], [1, "col-3"], ["errorMessage", "Please provide valid name for the workflow.", "key", "name", "text", "Name", 3, "type", "onValueChange"], ["errorMessage", "Please select valid campaign.", "key", "campaignId", "text", "Campaign", 3, "dataset", "type", "onValueChange"], ["errorMessage", "Please select valid activity.", "key", "activity", "text", "Activity", 3, "dataset", "type", "onValueChange"], ["errorMessage", "Please select valid template.", "key", "templateId", "text", "Template", 3, "dataset", "type", "onValueChange"], ["errorMessage", "Please select more then 0 prospects.", "key", "loadCount", "text", "Prospects", 3, "type", "onValueChange"], ["errorMessage", "Please select valid frequency.", "key", "frequency", "text", "Frequency", 3, "dataset", "type", "onValueChange"], ["errorMessage", "Please provide valid date time for workflow execution.", "key", "time", "text", "Date-Time", 3, "type", "onValueChange"], ["errorMessage", "Please provide valid timezone.", "key", "timezone", "text", "Timezone", 3, "dataset", "type", "onValueChange"], [1, "row", "justify-content-center", "pt-3"], [1, "col-2"], ["type", "button", 1, "btn", "btn-info", "btn-block", "btn-gradient", "text-uppercase", "font-size-4", "font-bold-6", 3, "click"]], template: function WorkflowDataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "app-workflow-data-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "app-workflow-data-feature", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onValueChange", function WorkflowDataComponent_Template_app_workflow_data_feature_onValueChange_4_listener($event) { return ctx.onValueChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "app-workflow-data-feature", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onValueChange", function WorkflowDataComponent_Template_app_workflow_data_feature_onValueChange_6_listener($event) { return ctx.onValueChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "app-workflow-data-feature", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onValueChange", function WorkflowDataComponent_Template_app_workflow_data_feature_onValueChange_8_listener($event) { return ctx.onValueChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "app-workflow-data-feature", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onValueChange", function WorkflowDataComponent_Template_app_workflow_data_feature_onValueChange_10_listener($event) { return ctx.onValueChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "app-workflow-data-feature", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onValueChange", function WorkflowDataComponent_Template_app_workflow_data_feature_onValueChange_13_listener($event) { return ctx.onValueChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "app-workflow-data-feature", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onValueChange", function WorkflowDataComponent_Template_app_workflow_data_feature_onValueChange_15_listener($event) { return ctx.onValueChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "app-workflow-data-feature", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onValueChange", function WorkflowDataComponent_Template_app_workflow_data_feature_onValueChange_17_listener($event) { return ctx.onValueChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "app-workflow-data-feature", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("onValueChange", function WorkflowDataComponent_Template_app_workflow_data_feature_onValueChange_19_listener($event) { return ctx.onValueChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function WorkflowDataComponent_Template_button_click_22_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx.inputType.Text);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataset", ctx.campaignDataset)("type", ctx.inputType.Combobox);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataset", ctx.activityDataset)("type", ctx.inputType.Combobox);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataset", ctx.templateDataset)("type", ctx.inputType.Combobox);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx.inputType.Number);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataset", ctx.frequencyDataset)("type", ctx.inputType.Combobox);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("type", ctx.inputType.Time);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("dataset", ctx.timezoneDataset)("type", ctx.inputType.Combobox);
    } }, directives: [_workflow_data_nav_workflow_data_nav_component__WEBPACK_IMPORTED_MODULE_12__["WorkflowDataNavComponent"], _workflow_data_feature_workflow_data_feature_component__WEBPACK_IMPORTED_MODULE_4__["WorkflowDataFeatureComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3b3JrZmxvdy1kYXRhLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "kcmY":
/*!**************************************************************************************!*\
  !*** ./src/app/workflow/components/workflow-home-nav/workflow-home-nav.component.ts ***!
  \**************************************************************************************/
/*! exports provided: WorkflowHomeNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkflowHomeNavComponent", function() { return WorkflowHomeNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class WorkflowHomeNavComponent {
    constructor(router, activeRoute) {
        this.router = router;
        this.activeRoute = activeRoute;
    }
    ngOnInit() {
    }
    navigateToHome() {
        this.router.navigateByUrl("/home");
    }
    navigateToCreate() {
        this.router.navigate(['../create'], { relativeTo: this.activeRoute });
    }
}
WorkflowHomeNavComponent.ɵfac = function WorkflowHomeNavComponent_Factory(t) { return new (t || WorkflowHomeNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
WorkflowHomeNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WorkflowHomeNavComponent, selectors: [["app-workflow-home-nav"]], decls: 12, vars: 0, consts: [["id", "nav", 1, "vertical-align"], [1, "col-3", "text-uppercase", "font-size-4", "text-color-1", "d-flex", "justify-content-between"], [1, "px-2"], ["id", "img3", "src", "../../../../assets/img/Img3.png", 3, "click"], [1, "pl-4", 3, "click"], ["id", "img13", "src", "../../../../assets/img/Img13.png"], [1, "px-2", 3, "click"], [1, "col-6", "text-center", "text-uppercase", "font-size-4", "text-color-1"], [1, "col-3"], ["id", "img4", "src", "../../../../assets/img/Img4.png", 1, "float-right"]], template: function WorkflowHomeNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkflowHomeNavComponent_Template_img_click_3_listener() { return ctx.navigateToHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkflowHomeNavComponent_Template_div_click_4_listener() { return ctx.navigateToCreate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function WorkflowHomeNavComponent_Template_div_click_6_listener() { return ctx.navigateToCreate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " create new workflow ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " workflow ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#nav[_ngcontent-%COMP%]{\r\n    height: 15vh;\r\n}\r\n\r\n.vertical-align[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndvcmtmbG93LWhvbWUtbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJ3b3JrZmxvdy1ob21lLW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25hdntcclxuICAgIGhlaWdodDogMTV2aDtcclxufVxyXG5cclxuLnZlcnRpY2FsLWFsaWduIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59Il19 */"] });


/***/ }),

/***/ "wplV":
/*!*************************************************!*\
  !*** ./src/app/common/enums/input-type.enum.ts ***!
  \*************************************************/
/*! exports provided: InputType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputType", function() { return InputType; });
var InputType;
(function (InputType) {
    InputType[InputType["None"] = 0] = "None";
    InputType[InputType["Combobox"] = 1] = "Combobox";
    InputType[InputType["Number"] = 2] = "Number";
    InputType[InputType["Text"] = 3] = "Text";
    InputType[InputType["Time"] = 4] = "Time";
})(InputType || (InputType = {}));


/***/ }),

/***/ "y1ZI":
/*!****************************************!*\
  !*** ./src/app/common/dto/workflow.ts ***!
  \****************************************/
/*! exports provided: Workflow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Workflow", function() { return Workflow; });
/* harmony import */ var _enums_activity_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enums/activity.enum */ "ENZJ");
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./time */ "Ng3q");


class Workflow {
    constructor() {
        this.id = "";
        this.uid = "";
        this.name = "";
        this.campaignId = "";
        this.templateId = "";
        this.activity = _enums_activity_enum__WEBPACK_IMPORTED_MODULE_0__["Activity"].None;
        this.loadCount = 0;
        this.frequency = "";
        this.time = new _time__WEBPACK_IMPORTED_MODULE_1__["Time"]();
        this.nextExecution = "NEVER";
        this.lastExecution = "NEVER";
        this.timezone = "";
        this.created = 0;
        this.isProcessing = false;
    }
}


/***/ })

}]);
//# sourceMappingURL=2.js.map