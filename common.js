(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "Oom1":
/*!*************************************************************!*\
  !*** ./src/app/common/service/campaign/campaign.service.ts ***!
  \*************************************************************/
/*! exports provided: CampaignService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CampaignService", function() { return CampaignService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _enums_tracking_type_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enums/tracking-type.enum */ "eDj2");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "I/3d");
/* harmony import */ var _user_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../user/user.service */ "sBHq");
/* harmony import */ var _subcription_subscription_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../subcription/subscription.service */ "4/0Z");






class CampaignService {
    constructor(fireStore, userService, subcriptionService) {
        this.fireStore = fireStore;
        this.userService = userService;
        this.subcriptionService = subcriptionService;
        this.campaignList = [];
        this.dataset = [];
    }
    create(campaign) {
        return new Promise((result, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const uid = yield this.userService.getActiveUserId();
            if (uid == null) {
                return reject({
                    message: "User session is not valid. Please Login and try again."
                });
            }
            else {
                campaign.uid = uid;
                campaign.created = new Date().getTime();
            }
            this.fireStore.collection("campaign").add(campaign).then((value) => {
                this.subcriptionService.track(uid, _enums_tracking_type_enum__WEBPACK_IMPORTED_MODULE_1__["TrackingType"].CAMPAIGN, 1);
                campaign.id = value.id;
                if (this.campaignList.length == 0) {
                    this.loadAllCampaign();
                }
                else {
                    const data = {
                        key: campaign.id,
                        value: campaign.name
                    };
                    this.campaignList.splice(0, 0, campaign);
                    this.dataset.splice(0, 0, data);
                }
                return result(campaign);
            }, (reason) => {
                return reject(reason);
            });
        }));
    }
    getAllCampaign() {
        if (this.campaignList.length == 0) {
            this.loadAllCampaign();
        }
        return this.campaignList;
    }
    getDataset() {
        if (this.dataset.length == 0) {
            this.loadAllCampaign();
        }
        return this.dataset;
    }
    loadAllCampaign() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const uid = yield this.userService.getActiveUserId();
            if (uid == null) {
                return Promise.reject({
                    message: "User session is not valid. Please Login and try again."
                });
            }
            this.fireStore.collection("campaign", ref => ref.where("uid", "==", uid)
                .orderBy("created", "desc"))
                .get()
                .subscribe({
                next: (result) => {
                    this.campaignList.splice(0);
                    result.forEach((snapshot) => {
                        const campaign = snapshot.data();
                        campaign.id = snapshot.id;
                        const data = {
                            key: campaign.id,
                            value: campaign.name
                        };
                        this.campaignList.push(campaign);
                        this.dataset.push(data);
                    });
                }
            });
            return Promise.resolve(true);
        });
    }
    remove(campaignId) {
        return new Promise((resolve) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const uid = yield this.userService.getActiveUserId();
            if (uid == null) {
                return Promise.reject({
                    message: "User session is not valid. Please Login and try again."
                });
            }
            this.fireStore.collection("campaign").doc(campaignId).delete().then(() => {
                this.subcriptionService.track(uid, _enums_tracking_type_enum__WEBPACK_IMPORTED_MODULE_1__["TrackingType"].CAMPAIGN, -1);
                const index = this.campaignList.findIndex((campaign) => {
                    return campaignId === campaign.id;
                });
                if (index !== -1) {
                    this.campaignList.splice(index, 1);
                }
            });
        }));
    }
}
CampaignService.ɵfac = function CampaignService_Factory(t) { return new (t || CampaignService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_user_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_subcription_subscription_service__WEBPACK_IMPORTED_MODULE_5__["SubscriptionService"])); };
CampaignService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CampaignService, factory: CampaignService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=common.js.map