(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "3tiB":
/*!******************************************************************************!*\
  !*** ./src/app/template/components/template-data/template-data.component.ts ***!
  \******************************************************************************/
/*! exports provided: TemplateDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateDataComponent", function() { return TemplateDataComponent; });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_common_service_template_template_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/common/service/template/template.service */ "aFeQ");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _template_data_nav_template_data_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../template-data-nav/template-data-nav.component */ "x2HF");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");








function TemplateDataComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide valid name for the template. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function TemplateDataComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " Please provide message for the template. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class TemplateDataComponent {
    constructor(builder, templateService, toastr, router, activeRoute) {
        this.templateService = templateService;
        this.toastr = toastr;
        this.router = router;
        this.activeRoute = activeRoute;
        this.template = null;
        const id = activeRoute.snapshot.params.id;
        if (id != null) {
            this.loadTemplate(id);
        }
        this.templateForm = builder.group({
            'name': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
            'message': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required]
        });
    }
    loadTemplate(id) {
        this.templateService.getById(id).then((template) => {
            this.template = template;
            this.templateForm.patchValue({
                name: template.name,
                message: template.message
            });
            this.templateForm.updateValueAndValidity();
        }, (reason) => {
            this.toastr.error(reason.message);
        });
    }
    ngOnInit() {
    }
    onSubmit() {
        this.templateForm.markAllAsTouched();
        if (this.templateForm.valid) {
            const template = Object.assign(Object.assign({}, this.template), this.templateForm.value);
            if (template.id == undefined) {
                this.create(template);
            }
            else {
                this.update(template);
            }
        }
    }
    create(template) {
        this.templateService.create(template).then((result) => {
            this.toastr.success("Template was created successfully. You will be redirected to Template Dashboard.");
            this.router.navigate(['../dashboard'], {
                relativeTo: this.activeRoute
            });
        }, (error) => {
            this.toastr.success("Could not create template due to '" + error.message + "'.");
        });
    }
    update(template) {
        this.templateService.update(template).then((result) => {
            this.toastr.success("Template was updated successfully. You will be redirected to Template Dashboard.");
            this.router.navigate(['../../dashboard'], {
                relativeTo: this.activeRoute
            });
        }, (error) => {
            this.toastr.success("Could not update template due to '" + error.message + "'.");
        });
    }
    updateMessage(key) {
        var _a;
        const newMessage = ((_a = this.templateForm.get('message')) === null || _a === void 0 ? void 0 : _a.value) + " " + key + " ";
        this.templateForm.patchValue({
            message: newMessage
        });
        this.templateForm.updateValueAndValidity();
    }
}
TemplateDataComponent.ɵfac = function TemplateDataComponent_Factory(t) { return new (t || TemplateDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_common_service_template_template_service__WEBPACK_IMPORTED_MODULE_2__["TemplateService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
TemplateDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TemplateDataComponent, selectors: [["app-template-data"]], decls: 51, vars: 3, consts: [[1, "row"], [1, "row", "justify-content-center"], [1, "col-2", "text-center"], ["id", "img23", "src", "../../../../assets/img/Img23.png"], ["id", "img24", "src", "../../../../assets/img/Img24.png"], ["id", "img25", "src", "../../../../assets/img/Img25.png"], [1, "row", "justify-content-center", "align-items-center", "pt-3"], [1, "col-2", "text-center", "text-uppercase", "font-size-2", "text-color-1"], [1, "row", "justify-content-center", "pt-3"], [1, "col-2", "text-center", "text-uppercase", "font-size-2", "text-color-2", "gradient-border-bottom-1", "pb-2"], [1, "col-2", "text-center", "text-uppercase", "font-size-2", "text-color-2", "gradient-border-bottom-2", "pb-2"], [1, "col-2", "text-center", "text-uppercase", "font-size-2", "text-color-2", "gradient-border-bottom-3", "pb-2"], [3, "formGroup", "submit"], [1, "col-3", "text-uppercase", "font-size-4", "text-color-1"], ["type", "text", "autocomplete", "on", "formControlName", "name", 1, "col-3", "input-box-gradient"], [1, "row", "justify-content-center", "p-0"], ["class", "col-12 text-center invalid-feedback", 4, "ngIf"], [1, "col-2", "text-uppercase", "text-color-1"], ["type", "button", 1, "btn", "btn-info", "btn-block", "btn-gradient", "text-uppercase", "font-size-2", "font-bold-6", 3, "click"], [1, "col-6"], ["autocomplete", "on", "formControlName", "message", 1, "textarea", "p-2", "text-color-1"], ["class", "invalid-feedback d-block", 4, "ngIf"], [1, "col-2"], ["type", "submit", 1, "btn", "btn-info", "btn-block", "btn-gradient", "text-uppercase", "font-size-4", "font-bold-6"], [1, "col-12", "text-center", "invalid-feedback"], [1, "invalid-feedback", "d-block"]], template: function TemplateDataComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-template-data-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Personalized Connection ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " Linkedin Message ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Inmail ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Customize personal connection request ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Customize message to existing contacts ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " create an inmail ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "form", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("submit", function TemplateDataComponent_Template_form_submit_23_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Give your template a name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](29, TemplateDataComponent_div_29_Template, 2, 0, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](30, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TemplateDataComponent_Template_button_click_32_listener() { return ctx.updateMessage("{#First Name#}"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TemplateDataComponent_Template_button_click_35_listener() { return ctx.updateMessage("{#Last Name#}"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, "Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TemplateDataComponent_Template_button_click_38_listener() { return ctx.updateMessage("{#Position#}"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Position");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TemplateDataComponent_Template_button_click_41_listener() { return ctx.updateMessage("{#Company#}"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Company");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](45, "textarea", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](46, TemplateDataComponent_div_46_Template, 2, 0, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](49, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](50, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.templateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.templateForm.controls.name.touched == true && ctx.templateForm.controls.name.errors !== null);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.templateForm.controls.message.touched == true && ctx.templateForm.controls.message.errors !== null);
    } }, directives: [_template_data_nav_template_data_nav_component__WEBPACK_IMPORTED_MODULE_5__["TemplateDataNavComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_forms_forms_ba"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZW1wbGF0ZS1kYXRhLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "IZ++":
/*!************************************************************************************!*\
  !*** ./src/app/template/components/template-feature/template-feature.component.ts ***!
  \************************************************************************************/
/*! exports provided: TemplateFeatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateFeatureComponent", function() { return TemplateFeatureComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _common_pipes_limit_to_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/pipes/limit-to.pipe */ "SC6h");



class TemplateFeatureComponent {
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
TemplateFeatureComponent.ɵfac = function TemplateFeatureComponent_Factory(t) { return new (t || TemplateFeatureComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
TemplateFeatureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TemplateFeatureComponent, selectors: [["app-template-feature"]], inputs: { text: "text", location: "location" }, decls: 4, vars: 4, consts: [[1, "square-border-gradient", "feature", 3, "click"], [1, "m-0", "p-0", "feature-text", "text-color-1", "text-uppercase", "font-size-4", "text-center"]], template: function TemplateFeatureComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TemplateFeatureComponent_Template_div_click_0_listener() { return ctx.navigateToLocation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "limitTo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 1, ctx.text, 22), " ");
    } }, pipes: [_common_pipes_limit_to_pipe__WEBPACK_IMPORTED_MODULE_2__["LimitToPipe"]], styles: [".feature[_ngcontent-%COMP%] {\r\n    height: 160px;\r\n}\r\n\r\n.feature-text[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    min-height: 50px;\r\n    background-color: black;\r\n    line-height: 50px;\r\n    width: 102%;\r\n    right: 1%;\r\n    top: 55px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlLWZlYXR1cmUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHVCQUF1QjtJQUN2QixpQkFBaUI7SUFDakIsV0FBVztJQUNYLFNBQVM7SUFDVCxTQUFTO0FBQ2IiLCJmaWxlIjoidGVtcGxhdGUtZmVhdHVyZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZlYXR1cmUge1xyXG4gICAgaGVpZ2h0OiAxNjBweDtcclxufVxyXG5cclxuLmZlYXR1cmUtdGV4dCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIHdpZHRoOiAxMDIlO1xyXG4gICAgcmlnaHQ6IDElO1xyXG4gICAgdG9wOiA1NXB4O1xyXG59Il19 */"] });


/***/ }),

/***/ "ThW+":
/*!******************************************************************************!*\
  !*** ./src/app/template/components/template-home/template-home.component.ts ***!
  \******************************************************************************/
/*! exports provided: TemplateHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateHomeComponent", function() { return TemplateHomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_common_service_template_template_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/common/service/template/template.service */ "aFeQ");
/* harmony import */ var _template_home_nav_template_home_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../template-home-nav/template-home-nav.component */ "tdaa");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _template_feature_template_feature_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../template-feature/template-feature.component */ "IZ++");





function TemplateHomeComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-template-feature", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const teamplate_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", teamplate_r1.name)("location", teamplate_r1.id);
} }
class TemplateHomeComponent {
    constructor(templateService) {
        this.templateService = templateService;
        this.templateList = templateService.getAllTemplate();
    }
    ngOnInit() {
    }
}
TemplateHomeComponent.ɵfac = function TemplateHomeComponent_Factory(t) { return new (t || TemplateHomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_common_service_template_template_service__WEBPACK_IMPORTED_MODULE_1__["TemplateService"])); };
TemplateHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TemplateHomeComponent, selectors: [["app-template-home"]], decls: 4, vars: 1, consts: [[1, "row"], ["class", "col-3 pt-5", 4, "ngFor", "ngForOf"], [1, "col-3", "pt-5"], [3, "text", "location"]], template: function TemplateHomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-template-home-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, TemplateHomeComponent_div_3_Template, 2, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.templateList);
    } }, directives: [_template_home_nav_template_home_nav_component__WEBPACK_IMPORTED_MODULE_2__["TemplateHomeNavComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _template_feature_template_feature_component__WEBPACK_IMPORTED_MODULE_4__["TemplateFeatureComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZW1wbGF0ZS1ob21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ "cxkG":
/*!*****************************************************!*\
  !*** ./src/app/template/template-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: TemplateRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateRoutingModule", function() { return TemplateRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_template_data_template_data_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/template-data/template-data.component */ "3tiB");
/* harmony import */ var _components_template_home_template_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/template-home/template-home.component */ "ThW+");
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
                component: _components_template_home_template_home_component__WEBPACK_IMPORTED_MODULE_2__["TemplateHomeComponent"]
            },
            {
                path: "create",
                pathMatch: "full",
                component: _components_template_data_template_data_component__WEBPACK_IMPORTED_MODULE_1__["TemplateDataComponent"]
            },
            {
                path: "edit/:id",
                pathMatch: "full",
                component: _components_template_data_template_data_component__WEBPACK_IMPORTED_MODULE_1__["TemplateDataComponent"]
            }
        ]
    }
];
class TemplateRoutingModule {
}
TemplateRoutingModule.ɵfac = function TemplateRoutingModule_Factory(t) { return new (t || TemplateRoutingModule)(); };
TemplateRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: TemplateRoutingModule });
TemplateRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TemplateRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "fo52":
/*!*********************************************!*\
  !*** ./src/app/template/template.module.ts ***!
  \*********************************************/
/*! exports provided: TemplateModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateModule", function() { return TemplateModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _template_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./template-routing.module */ "cxkG");
/* harmony import */ var _components_template_home_template_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/template-home/template-home.component */ "ThW+");
/* harmony import */ var _components_template_home_nav_template_home_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/template-home-nav/template-home-nav.component */ "tdaa");
/* harmony import */ var _components_template_data_template_data_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/template-data/template-data.component */ "3tiB");
/* harmony import */ var _components_template_data_nav_template_data_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/template-data-nav/template-data-nav.component */ "x2HF");
/* harmony import */ var _components_template_feature_template_feature_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/template-feature/template-feature.component */ "IZ++");
/* harmony import */ var _common_common_func_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/common-func.module */ "VeTl");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "fXoL");










class TemplateModule {
}
TemplateModule.ɵfac = function TemplateModule_Factory(t) { return new (t || TemplateModule)(); };
TemplateModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: TemplateModule });
TemplateModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _template_routing_module__WEBPACK_IMPORTED_MODULE_1__["TemplateRoutingModule"],
            _common_common_func_module__WEBPACK_IMPORTED_MODULE_7__["CommonFuncModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](TemplateModule, { declarations: [_components_template_home_template_home_component__WEBPACK_IMPORTED_MODULE_2__["TemplateHomeComponent"], _components_template_home_nav_template_home_nav_component__WEBPACK_IMPORTED_MODULE_3__["TemplateHomeNavComponent"], _components_template_data_template_data_component__WEBPACK_IMPORTED_MODULE_4__["TemplateDataComponent"], _components_template_data_nav_template_data_nav_component__WEBPACK_IMPORTED_MODULE_5__["TemplateDataNavComponent"], _components_template_feature_template_feature_component__WEBPACK_IMPORTED_MODULE_6__["TemplateFeatureComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _template_routing_module__WEBPACK_IMPORTED_MODULE_1__["TemplateRoutingModule"],
        _common_common_func_module__WEBPACK_IMPORTED_MODULE_7__["CommonFuncModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"]] }); })();


/***/ }),

/***/ "tdaa":
/*!**************************************************************************************!*\
  !*** ./src/app/template/components/template-home-nav/template-home-nav.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TemplateHomeNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateHomeNavComponent", function() { return TemplateHomeNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class TemplateHomeNavComponent {
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
TemplateHomeNavComponent.ɵfac = function TemplateHomeNavComponent_Factory(t) { return new (t || TemplateHomeNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
TemplateHomeNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TemplateHomeNavComponent, selectors: [["app-template-home-nav"]], decls: 16, vars: 0, consts: [["id", "nav", 1, "vertical-align"], [1, "col-3", "text-uppercase", "font-size-4", "text-color-1", "d-flex", "justify-content-between"], [1, "px-2"], ["id", "img3", "src", "../../../../assets/img/Img3.png", 3, "click"], [1, "pl-4", 3, "click"], ["id", "img13", "src", "../../../../assets/img/Img13.png"], [1, "px-2", 3, "click"], [1, "col-2", "text-center", "text-uppercase", "font-size-4", "text-color-1"], [1, "col-3"], ["id", "img4", "src", "../../../../assets/img/Img4.png", 1, "float-right"]], template: function TemplateHomeNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TemplateHomeNavComponent_Template_img_click_3_listener() { return ctx.navigateToHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TemplateHomeNavComponent_Template_div_click_4_listener() { return ctx.navigateToCreate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TemplateHomeNavComponent_Template_div_click_6_listener() { return ctx.navigateToCreate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " create new template ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Connection template ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Message template ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " View all ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#nav[_ngcontent-%COMP%]{\r\n    height: 15vh;\r\n}\r\n\r\n.vertical-align[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlLWhvbWUtbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJ0ZW1wbGF0ZS1ob21lLW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25hdntcclxuICAgIGhlaWdodDogMTV2aDtcclxufVxyXG5cclxuLnZlcnRpY2FsLWFsaWduIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59Il19 */"] });


/***/ }),

/***/ "x2HF":
/*!**************************************************************************************!*\
  !*** ./src/app/template/components/template-data-nav/template-data-nav.component.ts ***!
  \**************************************************************************************/
/*! exports provided: TemplateDataNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TemplateDataNavComponent", function() { return TemplateDataNavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");


class TemplateDataNavComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    navigateToHome() {
        this.router.navigateByUrl("/home");
    }
}
TemplateDataNavComponent.ɵfac = function TemplateDataNavComponent_Factory(t) { return new (t || TemplateDataNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
TemplateDataNavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TemplateDataNavComponent, selectors: [["app-template-data-nav"]], decls: 8, vars: 0, consts: [["id", "nav", 1, "vertical-align"], [1, "col-2", "text-uppercase", "font-size-4", "text-color-1", "d-flex", "justify-content-between"], [1, "px-2"], ["id", "img3", "src", "../../../../assets/img/Img3.png", 3, "click"], [1, "col-8", "text-center", "text-uppercase", "font-size-6", "text-color-1"], [1, "col-2"], ["id", "img4", "src", "../../../../assets/img/Img4.png", 1, "float-right"]], template: function TemplateDataNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TemplateDataNavComponent_Template_img_click_3_listener() { return ctx.navigateToHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " What type of template would you like to create? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#nav[_ngcontent-%COMP%]{\r\n    height: 15vh;\r\n}\r\n\r\n.vertical-align[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlLWRhdGEtbmF2LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJ0ZW1wbGF0ZS1kYXRhLW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25hdntcclxuICAgIGhlaWdodDogMTV2aDtcclxufVxyXG5cclxuLnZlcnRpY2FsLWFsaWduIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59Il19 */"] });


/***/ })

}]);
//# sourceMappingURL=4.js.map