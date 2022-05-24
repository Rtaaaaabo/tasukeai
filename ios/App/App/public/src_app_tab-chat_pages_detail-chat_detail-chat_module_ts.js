"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab-chat_pages_detail-chat_detail-chat_module_ts"],{

/***/ 68915:
/*!**************************************************************************!*\
  !*** ./src/app/tab-chat/pages/detail-chat/detail-chat-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailChatPageRoutingModule": () => (/* binding */ DetailChatPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _detail_chat_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail-chat.page */ 15195);




const routes = [
    {
        path: '',
        component: _detail_chat_page__WEBPACK_IMPORTED_MODULE_0__.DetailChatPage
    }
];
let DetailChatPageRoutingModule = class DetailChatPageRoutingModule {
};
DetailChatPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], DetailChatPageRoutingModule);



/***/ }),

/***/ 20345:
/*!******************************************************************!*\
  !*** ./src/app/tab-chat/pages/detail-chat/detail-chat.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailChatPageModule": () => (/* binding */ DetailChatPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _detail_chat_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail-chat-routing.module */ 68915);
/* harmony import */ var _detail_chat_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail-chat.page */ 15195);







let DetailChatPageModule = class DetailChatPageModule {
};
DetailChatPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _detail_chat_routing_module__WEBPACK_IMPORTED_MODULE_0__.DetailChatPageRoutingModule
        ],
        declarations: [_detail_chat_page__WEBPACK_IMPORTED_MODULE_1__.DetailChatPage]
    })
], DetailChatPageModule);



/***/ }),

/***/ 15195:
/*!****************************************************************!*\
  !*** ./src/app/tab-chat/pages/detail-chat/detail-chat.page.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DetailChatPage": () => (/* binding */ DetailChatPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _detail_chat_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detail-chat.page.html?ngResource */ 85565);
/* harmony import */ var _detail_chat_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detail-chat.page.scss?ngResource */ 29913);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);





let DetailChatPage = class DetailChatPage {
    constructor(location) {
        this.location = location;
        this.newMessage = '';
    }
    ngOnInit() {
    }
    backToListChatPage() {
        this.location.back();
    }
    sendMessage() {
    }
};
DetailChatPage.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__.Location }
];
DetailChatPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-detail-chat',
        template: _detail_chat_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_detail_chat_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], DetailChatPage);



/***/ }),

/***/ 29913:
/*!*****************************************************************************!*\
  !*** ./src/app/tab-chat/pages/detail-chat/detail-chat.page.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = ".message__other-message {\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 5px;\n  white-space: pre-wrap;\n  background-color: white;\n  color: black;\n}\n.message__other-message__time {\n  color: black;\n  float: right;\n  font-size: small;\n}\n.message__my-message {\n  padding: 10px;\n  border-radius: 10px;\n  margin-bottom: 5px;\n  white-space: pre-wrap;\n  background-color: var(--ion-color-primary);\n  color: white;\n}\n.message__my-message__time {\n  color: white;\n  float: right;\n  font-size: small;\n}\n.message__input {\n  color: black;\n  width: 100%;\n  border: 1px solid var(--ion-color-medium);\n  border-radius: 10px;\n  background: white;\n  resize: none;\n  padding-left: 8px;\n  padding-right: 8px;\n}\n.message__btn {\n  --padding-start: 0.5em;\n  --padding-end: 0.5em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRldGFpbC1jaGF0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFEUjtBQUdRO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQURaO0FBS0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsMENBQUE7RUFDQSxZQUFBO0FBSFI7QUFLUTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFIWjtBQU9JO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSx5Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUxSO0FBUUk7RUFDSSxzQkFBQTtFQUNBLG9CQUFBO0FBTlIiLCJmaWxlIjoiZGV0YWlsLWNoYXQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1lc3NhZ2Uge1xuXG4gICAgJl9fb3RoZXItbWVzc2FnZSB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuXG4gICAgICAgICZfX3RpbWUge1xuICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX215LW1lc3NhZ2Uge1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgICAgJl9fdGltZSB7XG4gICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICBmb250LXNpemU6IHNtYWxsO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9faW5wdXQge1xuICAgICAgICBjb2xvcjogYmxhY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbWVkaXVtKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgICAgYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcbiAgICB9XG5cbiAgICAmX19idG4ge1xuICAgICAgICAtLXBhZGRpbmctc3RhcnQ6IDAuNWVtO1xuICAgICAgICAtLXBhZGRpbmctZW5kOiAwLjVlbTtcbiAgICB9XG5cbn0iXX0= */";

/***/ }),

/***/ 85565:
/*!*****************************************************************************!*\
  !*** ./src/app/tab-chat/pages/detail-chat/detail-chat.page.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"backToListChatPage()\">\n        <ion-icon name=\"chevron-back\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>NPO法人名</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-grid>\n    <ion-row>\n      <ion-col size=\"9\" class=\"message__other-message\">\n        <b>NPO名</b><br />\n        <span>メッセージasdfasasfasdfsdfsddfsdfsadfdfasdfdsージ</span>\n        <br />\n        <div class=\"message__other-message__time\" text-right>\n          2020/04/03 16:00\n        </div>\n      </ion-col>\n      <ion-col offset=\"3\" size=\"9\" class=\"message__my-message\">\n        <span>メッセージ</span>\n        <br />\n        <div class=\"message__my-message__time\" text-right>2020/04/03 16:00</div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n\n<!-- メッセージ入力箇所 -->\n<ion-footer>\n  <ion-toolbar color=\"light\">\n    <ion-row class=\"ion-align-items-center\">\n      <ion-col size=\"10\">\n        <ion-textarea\n          autosize=\"true\"\n          maxRows=\"4\"\n          [(ngModel)]=\"newMessage\"\n          class=\"message__input\"\n        ></ion-textarea>\n      </ion-col>\n\n      <ion-col size=\"2\">\n        <ion-button\n          expand=\"block\"\n          fill=\"clear\"\n          color=\"primary\"\n          [disabled]=\"newMessage === ''\"\n          class=\"message__btn\"\n          (click)=\"sendMessage()\"\n        >\n          <ion-icon name=\"send\" slot=\"icon-only\"></ion-icon>\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </ion-toolbar>\n</ion-footer>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab-chat_pages_detail-chat_detail-chat_module_ts.js.map