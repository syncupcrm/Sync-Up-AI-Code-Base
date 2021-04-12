/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./enum/EventType.ts":
/*!***************************!*\
  !*** ./enum/EventType.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventType": () => (/* binding */ EventType)
/* harmony export */ });
var EventType;
(function (EventType) {
    EventType[EventType["PROFILE_REQUEST"] = 0] = "PROFILE_REQUEST";
    EventType[EventType["PROFILE_RESPONSE"] = 1] = "PROFILE_RESPONSE";
    EventType[EventType["CONNECTION_REQUEST"] = 2] = "CONNECTION_REQUEST";
    EventType[EventType["CONNECTION_RESPONSE"] = 3] = "CONNECTION_RESPONSE";
    EventType[EventType["MESSAGE_REQUEST"] = 4] = "MESSAGE_REQUEST";
    EventType[EventType["MESSAGE_RESPONSE"] = 5] = "MESSAGE_RESPONSE";
    EventType[EventType["VISIT_REQUEST"] = 6] = "VISIT_REQUEST";
    EventType[EventType["VISIT_RESPONSE"] = 7] = "VISIT_RESPONSE";
    EventType[EventType["USER_REQUEST"] = 8] = "USER_REQUEST";
    EventType[EventType["USER_RESPONSE"] = 9] = "USER_RESPONSE";
    EventType[EventType["PING"] = 10] = "PING";
    EventType[EventType["RELOAD_PAGE"] = 11] = "RELOAD_PAGE";
    EventType[EventType["PREDICTION"] = 12] = "PREDICTION";
})(EventType || (EventType = {}));


/***/ }),

/***/ "./service/ActionService.ts":
/*!**********************************!*\
  !*** ./service/ActionService.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ActionService": () => (/* binding */ ActionService)
/* harmony export */ });
/* harmony import */ var _enum_EventType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enum/EventType */ "./enum/EventType.ts");

class ActionService {
    constructor(messageService) {
        this.messageService = messageService;
    }
    action(request) {
        switch (request.event) {
            case _enum_EventType__WEBPACK_IMPORTED_MODULE_0__.EventType.RELOAD_PAGE:
                console.log("REFRESH");
                return request.callback(true);
            default:
                console.log("Unknown Request");
                console.log(request);
                return request.callback(true);
        }
    }
}


/***/ }),

/***/ "./service/MessageService.ts":
/*!***********************************!*\
  !*** ./service/MessageService.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MessageService": () => (/* binding */ MessageService)
/* harmony export */ });
/* harmony import */ var _ActionService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ActionService */ "./service/ActionService.ts");

class MessageService {
    constructor() {
        this.actionService = new _ActionService__WEBPACK_IMPORTED_MODULE_0__.ActionService(this);
        this.monitorMessage();
    }
    sendMessage(eventType, payload) {
        chrome.runtime.sendMessage({
            event: eventType,
            message: payload
        });
    }
    monitorMessage() {
        chrome.runtime.onMessage.addListener((message, sender, callback) => {
            const request = message;
            request.callback = callback;
            this.actionService.action(request);
            return true;
        });
    }
}


/***/ }),

/***/ "./service/TokenService.ts":
/*!*********************************!*\
  !*** ./service/TokenService.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TokenService": () => (/* binding */ TokenService)
/* harmony export */ });
/* harmony import */ var _enum_EventType__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enum/EventType */ "./enum/EventType.ts");

class TokenService {
    constructor(messageService) {
        this.messageService = messageService;
        this.token = undefined;
        this.monitorWebRequest();
        this.sendTokenInLoop();
    }
    monitorWebRequest() {
        chrome.webRequest.onBeforeSendHeaders.addListener((request) => {
            if (request.requestHeaders != undefined && Array.isArray(request.requestHeaders)) {
                const header = request.requestHeaders.find((header) => {
                    return header.name == "csrf-token";
                });
                if (header != undefined) {
                    this.token = header.value;
                }
            }
        }, {
            urls: ["https://www.linkedin.com/*"],
        }, ["requestHeaders", "blocking"]);
    }
    sendTokenInLoop() {
        setInterval(() => {
            this.messageService.sendMessage(_enum_EventType__WEBPACK_IMPORTED_MODULE_0__.EventType.PING, {
                token: this.token
            });
        }, 1000);
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*******************!*\
  !*** ./worker.ts ***!
  \*******************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Worker": () => (/* binding */ Worker)
/* harmony export */ });
/* harmony import */ var _service_MessageService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service/MessageService */ "./service/MessageService.ts");
/* harmony import */ var _service_TokenService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/TokenService */ "./service/TokenService.ts");


class Worker {
    constructor() {
        this.messageService = new _service_MessageService__WEBPACK_IMPORTED_MODULE_0__.MessageService();
        this.tokenService = new _service_TokenService__WEBPACK_IMPORTED_MODULE_1__.TokenService(this.messageService);
    }
}
new Worker();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93b3JrZXIvLi9lbnVtL0V2ZW50VHlwZS50cyIsIndlYnBhY2s6Ly93b3JrZXIvLi9zZXJ2aWNlL0FjdGlvblNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vd29ya2VyLy4vc2VydmljZS9NZXNzYWdlU2VydmljZS50cyIsIndlYnBhY2s6Ly93b3JrZXIvLi9zZXJ2aWNlL1Rva2VuU2VydmljZS50cyIsIndlYnBhY2s6Ly93b3JrZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd29ya2VyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93b3JrZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93b3JrZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93b3JrZXIvLi93b3JrZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFZLFNBY1g7QUFkRCxXQUFZLFNBQVM7SUFDakIsK0RBQWU7SUFDZixpRUFBZ0I7SUFDaEIscUVBQWtCO0lBQ2xCLHVFQUFtQjtJQUNuQiwrREFBZTtJQUNmLGlFQUFnQjtJQUNoQiwyREFBYTtJQUNiLDZEQUFjO0lBQ2QseURBQVk7SUFDWiwyREFBYTtJQUNiLDBDQUFJO0lBQ0osd0RBQVc7SUFDWCxzREFBVTtBQUNkLENBQUMsRUFkVyxTQUFTLEtBQVQsU0FBUyxRQWNwQjs7Ozs7Ozs7Ozs7Ozs7OztBQ2I2QztBQUd2QyxNQUFNLGFBQWE7SUFDdEIsWUFBb0IsY0FBOEI7UUFBOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO0lBRWxELENBQUM7SUFFRCxNQUFNLENBQUMsT0FBaUI7UUFDcEIsUUFBTyxPQUFPLENBQUMsS0FBSyxFQUFFO1lBQ2xCLEtBQUssa0VBQXFCO2dCQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FB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Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOMEQ7QUFDSjtBQUUvQyxNQUFNLE1BQU07SUFLZjtRQUNJLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxtRUFBYyxFQUFFO1FBQzFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSwrREFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztJQUM5RCxDQUFDO0NBRUo7QUFFRCxJQUFJLE1BQU0sRUFBRSxDQUFDIiwiZmlsZSI6Indvcmtlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBlbnVtIEV2ZW50VHlwZSB7XHJcbiAgICBQUk9GSUxFX1JFUVVFU1QsXHJcbiAgICBQUk9GSUxFX1JFU1BPTlNFLFxyXG4gICAgQ09OTkVDVElPTl9SRVFVRVNULFxyXG4gICAgQ09OTkVDVElPTl9SRVNQT05TRSxcclxuICAgIE1FU1NBR0VfUkVRVUVTVCxcclxuICAgIE1FU1NBR0VfUkVTUE9OU0UsXHJcbiAgICBWSVNJVF9SRVFVRVNULFxyXG4gICAgVklTSVRfUkVTUE9OU0UsXHJcbiAgICBVU0VSX1JFUVVFU1QsXHJcbiAgICBVU0VSX1JFU1BPTlNFLFxyXG4gICAgUElORyxcclxuICAgIFJFTE9BRF9QQUdFLFxyXG4gICAgUFJFRElDVElPTlxyXG59IiwiaW1wb3J0IHsgSVJlcXVlc3QgfSBmcm9tIFwiLi4vZHRvL0lSZXF1ZXN0XCI7XHJcbmltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi9lbnVtL0V2ZW50VHlwZVwiO1xyXG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gXCIuL01lc3NhZ2VTZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQWN0aW9uU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1lc3NhZ2VTZXJ2aWNlOiBNZXNzYWdlU2VydmljZSkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGFjdGlvbihyZXF1ZXN0OiBJUmVxdWVzdCk6IHZvaWQge1xyXG4gICAgICAgIHN3aXRjaChyZXF1ZXN0LmV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNhc2UgRXZlbnRUeXBlLlJFTE9BRF9QQUdFIDpcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUkVGUkVTSFwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXF1ZXN0LmNhbGxiYWNrKHRydWUpO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJVbmtub3duIFJlcXVlc3RcIik7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXF1ZXN0LmNhbGxiYWNrKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IElQYXlsb2FkIH0gZnJvbSBcIi4uL2R0by9JUGF5bG9hZFwiO1xyXG5pbXBvcnQgeyBJUmVxdWVzdCB9IGZyb20gXCIuLi9kdG8vSVJlcXVlc3RcIjtcclxuaW1wb3J0IHsgRXZlbnRUeXBlIH0gZnJvbSBcIi4uL2VudW0vRXZlbnRUeXBlXCI7XHJcbmltcG9ydCB7IEFjdGlvblNlcnZpY2UgfSBmcm9tIFwiLi9BY3Rpb25TZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTWVzc2FnZVNlcnZpY2Uge1xyXG5cclxuICAgIHByaXZhdGUgYWN0aW9uU2VydmljZTogQWN0aW9uU2VydmljZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmFjdGlvblNlcnZpY2UgPSBuZXcgQWN0aW9uU2VydmljZSh0aGlzKTtcclxuICAgICAgICB0aGlzLm1vbml0b3JNZXNzYWdlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VuZE1lc3NhZ2UoZXZlbnRUeXBlOiBFdmVudFR5cGUsIHBheWxvYWQ6IElQYXlsb2FkKTogdm9pZCB7XHJcbiAgICAgICAgY2hyb21lLnJ1bnRpbWUuc2VuZE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICBldmVudDogZXZlbnRUeXBlLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiBwYXlsb2FkXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBtb25pdG9yTWVzc2FnZSgpOiB2b2lkIHtcclxuICAgICAgICBjaHJvbWUucnVudGltZS5vbk1lc3NhZ2UuYWRkTGlzdGVuZXIoKG1lc3NhZ2U6IGFueSwgc2VuZGVyOiBhbnksIGNhbGxiYWNrOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcmVxdWVzdDogSVJlcXVlc3QgPSBtZXNzYWdlIGFzIElSZXF1ZXN0O1xyXG4gICAgICAgICAgICByZXF1ZXN0LmNhbGxiYWNrID0gY2FsbGJhY2s7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aW9uU2VydmljZS5hY3Rpb24ocmVxdWVzdCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IEV2ZW50VHlwZSB9IGZyb20gXCIuLi9lbnVtL0V2ZW50VHlwZVwiO1xyXG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gXCIuLi9zZXJ2aWNlL01lc3NhZ2VTZXJ2aWNlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVG9rZW5TZXJ2aWNlIHtcclxuXHJcbiAgICBwcml2YXRlIHRva2VuOiBzdHJpbmcgfCB1bmRlZmluZWQ7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBtZXNzYWdlU2VydmljZTogTWVzc2FnZVNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLnRva2VuID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIHRoaXMubW9uaXRvcldlYlJlcXVlc3QoKTtcclxuICAgICAgICB0aGlzLnNlbmRUb2tlbkluTG9vcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW9uaXRvcldlYlJlcXVlc3QoKTogdm9pZCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY2hyb21lLndlYlJlcXVlc3Qub25CZWZvcmVTZW5kSGVhZGVycy5hZGRMaXN0ZW5lcigocmVxdWVzdDogY2hyb21lLndlYlJlcXVlc3QuV2ViUmVxdWVzdEhlYWRlcnNEZXRhaWxzKTogdm9pZCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXF1ZXN0LnJlcXVlc3RIZWFkZXJzICE9IHVuZGVmaW5lZCAmJiBBcnJheS5pc0FycmF5KHJlcXVlc3QucmVxdWVzdEhlYWRlcnMpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXI6IGNocm9tZS53ZWJSZXF1ZXN0Lkh0dHBIZWFkZXIgfCB1bmRlZmluZWQgPSByZXF1ZXN0LnJlcXVlc3RIZWFkZXJzLmZpbmQoKGhlYWRlcjogY2hyb21lLndlYlJlcXVlc3QuSHR0cEhlYWRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBoZWFkZXIubmFtZSA9PSBcImNzcmYtdG9rZW5cIjtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGhlYWRlciAhPSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRva2VuID0gaGVhZGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICB1cmxzOiBbXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vKlwiXSxcclxuICAgICAgICAgICAgXHJcblx0XHR9LCBbXCJyZXF1ZXN0SGVhZGVyc1wiLFwiYmxvY2tpbmdcIl0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2VuZFRva2VuSW5Mb29wKCk6IHZvaWQge1xyXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5tZXNzYWdlU2VydmljZS5zZW5kTWVzc2FnZShFdmVudFR5cGUuUElORywge1xyXG4gICAgICAgICAgICAgICAgdG9rZW46IHRoaXMudG9rZW5cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgMTAwMCk7XHJcbiAgICB9XHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IE1lc3NhZ2VTZXJ2aWNlIH0gZnJvbSBcIi4vc2VydmljZS9NZXNzYWdlU2VydmljZVwiO1xyXG5pbXBvcnQgeyBUb2tlblNlcnZpY2UgfSBmcm9tIFwiLi9zZXJ2aWNlL1Rva2VuU2VydmljZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdvcmtlciB7XHJcblxyXG4gICAgcHJpdmF0ZSB0b2tlblNlcnZpY2U6IFRva2VuU2VydmljZTtcclxuICAgIHByaXZhdGUgbWVzc2FnZVNlcnZpY2U6IE1lc3NhZ2VTZXJ2aWNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZVNlcnZpY2UgPSBuZXcgTWVzc2FnZVNlcnZpY2UoKVxyXG4gICAgICAgIHRoaXMudG9rZW5TZXJ2aWNlID0gbmV3IFRva2VuU2VydmljZSh0aGlzLm1lc3NhZ2VTZXJ2aWNlKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbm5ldyBXb3JrZXIoKTsiXSwic291cmNlUm9vdCI6IiJ9