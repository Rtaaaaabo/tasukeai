"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab-home_tab-home_module_ts"],{

/***/ 71205:
/*!********************************************************************************!*\
  !*** ./src/app/tab-home/components/category-slide/category-slide.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategorySlideComponent": () => (/* binding */ CategorySlideComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _category_slide_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./category-slide.component.html?ngResource */ 76416);
/* harmony import */ var _category_slide_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./category-slide.component.scss?ngResource */ 77178);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




let CategorySlideComponent = class CategorySlideComponent {
    constructor() {
        this.emitChooseCategory = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.categoryArrayNpo = [
            { value: 0, name: 'テスト000' },
            { value: 1, name: 'テスト111' },
            { value: 2, name: 'テスト222' },
            { value: 3, name: 'テスト333' },
            { value: 4, name: 'テスト444' },
            { value: 5, name: 'テスト555' },
            { value: 6, name: 'テスト666' },
            { value: 7, name: 'テスト777' },
            { value: 8, name: 'テスト888' },
            { value: 9, name: 'テスト999' },
        ];
    }
    ngOnInit() { }
    onClickCategory(item) {
        this.emitChooseCategory.emit(item);
    }
};
CategorySlideComponent.ctorParameters = () => [];
CategorySlideComponent.propDecorators = {
    emitChooseCategory: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output }]
};
CategorySlideComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-category-slide',
        template: _category_slide_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_category_slide_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CategorySlideComponent);



/***/ }),

/***/ 44124:
/*!******************************************************************************!*\
  !*** ./src/app/tab-home/components/list-timeline/list-timeline.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListTimelineComponent": () => (/* binding */ ListTimelineComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _list_timeline_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-timeline.component.html?ngResource */ 56475);
/* harmony import */ var _list_timeline_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-timeline.component.scss?ngResource */ 60315);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _tab_home_components_modal_detail_organization_modal_detail_organization_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/tab-home/components/modal-detail-organization/modal-detail-organization.component */ 39320);







let ListTimelineComponent = class ListTimelineComponent {
    constructor(router, route, modalCtrl) {
        this.router = router;
        this.route = route;
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() { }
    navigateToDetail(orgId) {
        this.router.navigate(['detail-org', orgId], { relativeTo: this.route });
    }
    presentDetailModal(orgId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _tab_home_components_modal_detail_organization_modal_detail_organization_component__WEBPACK_IMPORTED_MODULE_2__.ModalDetailOrganizationComponent,
                componentProps: {
                    orgId,
                },
                swipeToClose: true,
                presentingElement: yield this.modalCtrl.getTop()
            });
            return yield modal.present();
        });
    }
};
ListTimelineComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.ModalController }
];
ListTimelineComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-list-timeline',
        template: _list_timeline_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_list_timeline_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ListTimelineComponent);



/***/ }),

/***/ 39320:
/*!******************************************************************************************************!*\
  !*** ./src/app/tab-home/components/modal-detail-organization/modal-detail-organization.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalDetailOrganizationComponent": () => (/* binding */ ModalDetailOrganizationComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _modal_detail_organization_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-detail-organization.component.html?ngResource */ 5706);
/* harmony import */ var _modal_detail_organization_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-detail-organization.component.scss?ngResource */ 58866);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 93819);





let ModalDetailOrganizationComponent = class ModalDetailOrganizationComponent {
    constructor(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ngOnInit() { }
    dismissModal() {
        this.modalCtrl.dismiss({
            dismissed: true,
        });
    }
};
ModalDetailOrganizationComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.ModalController }
];
ModalDetailOrganizationComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-modal-detail-organization',
        template: _modal_detail_organization_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_modal_detail_organization_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ModalDetailOrganizationComponent);



/***/ }),

/***/ 62864:
/*!*****************************************************!*\
  !*** ./src/app/tab-home/tab-home-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabHomePageRoutingModule": () => (/* binding */ TabHomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _tab_home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-home.page */ 12984);




const routes = [
    {
        path: '',
        component: _tab_home_page__WEBPACK_IMPORTED_MODULE_0__.TabHomePage,
    },
];
let TabHomePageRoutingModule = class TabHomePageRoutingModule {
};
TabHomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], TabHomePageRoutingModule);



/***/ }),

/***/ 70082:
/*!*********************************************!*\
  !*** ./src/app/tab-home/tab-home.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabHomePageModule": () => (/* binding */ TabHomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _tab_home_tab_home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/tab-home/tab-home.page */ 12984);
/* harmony import */ var _tab_home_components_category_slide_category_slide_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/tab-home/components/category-slide/category-slide.component */ 71205);
/* harmony import */ var _tab_home_tab_home_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/tab-home/tab-home-routing.module */ 62864);
/* harmony import */ var _tab_home_components_list_timeline_list_timeline_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/tab-home/components/list-timeline/list-timeline.component */ 44124);
/* harmony import */ var _tab_home_components_modal_detail_organization_modal_detail_organization_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/tab-home/components/modal-detail-organization/modal-detail-organization.component */ 39320);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/shared/shared.module */ 75349);











let TabHomePageModule = class TabHomePageModule {
};
TabHomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _tab_home_tab_home_routing_module__WEBPACK_IMPORTED_MODULE_2__.TabHomePageRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
        ],
        exports: [
            _tab_home_components_category_slide_category_slide_component__WEBPACK_IMPORTED_MODULE_1__.CategorySlideComponent,
            _tab_home_components_list_timeline_list_timeline_component__WEBPACK_IMPORTED_MODULE_3__.ListTimelineComponent,
            _tab_home_components_modal_detail_organization_modal_detail_organization_component__WEBPACK_IMPORTED_MODULE_4__.ModalDetailOrganizationComponent,
        ],
        declarations: [
            _tab_home_tab_home_page__WEBPACK_IMPORTED_MODULE_0__.TabHomePage,
            _tab_home_components_category_slide_category_slide_component__WEBPACK_IMPORTED_MODULE_1__.CategorySlideComponent,
            _tab_home_components_list_timeline_list_timeline_component__WEBPACK_IMPORTED_MODULE_3__.ListTimelineComponent,
            _tab_home_components_modal_detail_organization_modal_detail_organization_component__WEBPACK_IMPORTED_MODULE_4__.ModalDetailOrganizationComponent,
        ]
    })
], TabHomePageModule);



/***/ }),

/***/ 12984:
/*!*******************************************!*\
  !*** ./src/app/tab-home/tab-home.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabHomePage": () => (/* binding */ TabHomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tab_home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-home.page.html?ngResource */ 72394);
/* harmony import */ var _tab_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-home.page.scss?ngResource */ 99571);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! aws-amplify */ 48562);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 64139);






let TabHomePage = class TabHomePage {
    constructor() {
        this.targetItem = { value: 0, name: 'テスト000' };
    }
    chooseCategory(ev) {
        this.targetItem = ev;
    }
    logout() {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.of)(aws_amplify__WEBPACK_IMPORTED_MODULE_3__.Auth.signOut()).subscribe((data) => console.log('SignOut', data));
    }
};
TabHomePage.ctorParameters = () => [];
TabHomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tab-home',
        template: _tab_home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabHomePage);



/***/ }),

/***/ 77178:
/*!*********************************************************************************************!*\
  !*** ./src/app/tab-home/components/category-slide/category-slide.component.scss?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = ".story-list {\n  padding: 16px 0 8px;\n  border-bottom: 1px solid #ddd;\n}\n.story-list .scroll-horizontal {\n  padding-left: 16px;\n  white-space: nowrap;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  -webkit-overflow-scrolling: touch;\n}\n.story-list .scroll-item {\n  position: relative;\n  display: inline-block;\n  margin-right: 8px;\n  margin-bottom: 8px;\n}\n.scroll-horizontal::-webkit-scrollbar {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhdGVnb3J5LXNsaWRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSw2QkFBQTtBQUNKO0FBQ0k7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlDQUFBO0FBQ1I7QUFFSTtFQUNJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBQVI7QUFJQTtFQUNJLGFBQUE7QUFESiIsImZpbGUiOiJjYXRlZ29yeS1zbGlkZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdG9yeS1saXN0IHtcbiAgICBwYWRkaW5nOiAxNnB4IDAgOHB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuXG4gICAgLnNjcm9sbC1ob3Jpem9udGFsIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdy14OiBzY3JvbGw7XG4gICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgIH1cblxuICAgIC5zY3JvbGwtaXRlbSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgIH1cbn1cblxuLnNjcm9sbC1ob3Jpem9udGFsOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbn0iXX0= */";

/***/ }),

/***/ 60315:
/*!*******************************************************************************************!*\
  !*** ./src/app/tab-home/components/list-timeline/list-timeline.component.scss?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = ".list__row {\n  border-bottom: 1px solid var(--ion-color-light);\n}\n.list__row__col__row--info {\n  font-size: 0.9em;\n}\n.list__row__col__row__col__div--name {\n  font-weight: 600;\n}\n.list__row__col__row__col__div--date {\n  padding-left: 4px;\n  color: var(--ion-color-medium);\n}\n.list__row__col__row__col--img {\n  border: 1px solid var(--ion-color-light);\n  border-radius: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpc3QtdGltZWxpbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSwrQ0FBQTtBQUFKO0FBSVE7RUFDRSxnQkFBQTtBQUZWO0FBT1k7RUFDRSxnQkFBQTtBQUxkO0FBUVk7RUFDRSxpQkFBQTtFQUNBLDhCQUFBO0FBTmQ7QUFVVTtFQUNFLHdDQUFBO0VBQ0EsbUJBQUE7QUFSWiIsImZpbGUiOiJsaXN0LXRpbWVsaW5lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpc3Qge1xuICAmX19yb3cge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuXG4gICAgJl9fY29sIHtcbiAgICAgICZfX3JvdyB7XG4gICAgICAgICYtLWluZm8ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gICAgICAgIH1cblxuICAgICAgICAmX19jb2wge1xuICAgICAgICAgICZfX2RpdiB7XG4gICAgICAgICAgICAmLS1uYW1lIHtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi0tZGF0ZSB7XG4gICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNHB4O1xuICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLS1pbWcge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLWxpZ2h0KTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59Il19 */";

/***/ }),

/***/ 58866:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/tab-home/components/modal-detail-organization/modal-detail-organization.component.scss?ngResource ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

module.exports = "ion-icon {\n  --ionicon-stroke-width: 16px;\n}\n\n.content__item__icon {\n  margin-right: 8px;\n}\n\n.footer__toolbar {\n  --padding-top: 1px ;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZGFsLWRldGFpbC1vcmdhbml6YXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSw0QkFBQTtBQUNKOztBQUlRO0VBQ0ksaUJBQUE7QUFEWjs7QUFPSTtFQUNJLG1CQUFBO0FBSlIiLCJmaWxlIjoibW9kYWwtZGV0YWlsLW9yZ2FuaXphdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1pY29uIHtcbiAgICAtLWlvbmljb24tc3Ryb2tlLXdpZHRoOiAxNnB4O1xufVxuXG4uY29udGVudCB7XG4gICAgJl9faXRlbSB7XG4gICAgICAgICZfX2ljb24ge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5mb290ZXIge1xuICAgICZfX3Rvb2xiYXIge1xuICAgICAgICAtLXBhZGRpbmctdG9wOiAxcHhcbiAgICB9XG59Il19 */";

/***/ }),

/***/ 99571:
/*!********************************************************!*\
  !*** ./src/app/tab-home/tab-home.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "app-category-slide {\n  z-index: 10;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYi1ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSiIsImZpbGUiOiJ0YWItaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhcHAtY2F0ZWdvcnktc2xpZGUge1xuICAgIHotaW5kZXg6IDEwO1xufSJdfQ== */";

/***/ }),

/***/ 76416:
/*!*********************************************************************************************!*\
  !*** ./src/app/tab-home/components/category-slide/category-slide.component.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"story-list\">\n  <div class=\"scroll-horizontal\">\n    <div class=\"scroll-item\" *ngFor=\"let item of categoryArrayNpo\">\n      <ion-button (click)=\"onClickCategory(item)\" size=\"small\">{{\n        item.name\n      }}</ion-button>\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 56475:
/*!*******************************************************************************************!*\
  !*** ./src/app/tab-home/components/list-timeline/list-timeline.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

module.exports = "<ng-container>\n  <ion-list>\n    <!-- class=\"wrapper\" -->\n    <ion-row class=\"list__row\">\n      <ion-col size=\"2\">\n        <ion-avatar>\n          <ion-img [src]=\"\"></ion-img>\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"10\">\n        <!-- tweet-info -->\n        <ion-row class=\"list__row__col__row--info\">\n          <ion-col size=\"12\">\n            <!-- class=\"name\" -->\n            <div class=\"list__row__col__row__col__div--name\">NPO法人名</div>\n            <!-- class=\"handle\" -->\n            <div class=\"list__row_col__row__col__div--date\">2022/02/01</div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <div innerHtml=\"aaaa\">\n              aaaaaaaaaaaaaaffasdfsdfsdfdfasdfasdfsadfsadsfaasdfsadfsdfasdfsdfsdfsadfs\n            </div>\n            <!-- class=\"preview-img\" -->\n            <img\n              class=\"list__row__col__row__col--img\"\n              src=\"../../../../assets/img/keshiki.jpeg\"\n              *ngIf=\"true\"\n            />\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"list__row\">\n      <ion-col size=\"2\">\n        <ion-avatar>\n          <ion-img [src]=\"\"></ion-img>\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"10\">\n        <!-- tweet-info -->\n        <ion-row class=\"list__row__col__row--info\">\n          <ion-col size=\"12\">\n            <!-- class=\"name\" -->\n            <div class=\"list__row__col__row__col__div--name\">NPO法人名</div>\n            <!-- class=\"handle\" -->\n            <div class=\"list__row_col__row__col__div--date\">2022/02/01</div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <div innerHtml=\"aaaa\">\n              aaaaaaaaaaaaaaffasdfsdfsdfdfasdfasdfsadfsadsfaasdfsadfsdfasdfsdfsdfsadfs\n            </div>\n            <!-- class=\"preview-img\" -->\n            <img\n              class=\"list__row__col__row__col--img\"\n              src=\"../../../../assets/img/keshiki.jpeg\"\n              *ngIf=\"true\"\n            />\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n    <ion-row class=\"list__row\">\n      <ion-col size=\"2\">\n        <ion-avatar>\n          <ion-img [src]=\"\"></ion-img>\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"10\">\n        <!-- tweet-info -->\n        <ion-row class=\"list__row__col__row--info\">\n          <ion-col size=\"12\">\n            <!-- class=\"name\" -->\n            <div class=\"list__row__col__row__col__div--name\">NPO法人名</div>\n            <!-- class=\"handle\" -->\n            <div class=\"list__row_col__row__col__div--date\">2022/02/01</div>\n          </ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col size=\"12\">\n            <div innerHtml=\"aaaa\">\n              aaaaaaaaaaaaaaffasdfsdfsdfdfasdfasdfsadfsadsfaasdfsadfsdfasdfsdfsdfsadfs\n            </div>\n            <!-- class=\"preview-img\" -->\n            <img\n              class=\"list__row__col__row__col--img\"\n              src=\"../../../../assets/img/keshiki.jpeg\"\n              *ngIf=\"true\"\n            />\n          </ion-col>\n        </ion-row>\n      </ion-col>\n    </ion-row>\n  </ion-list>\n</ng-container>\n";

/***/ }),

/***/ 5706:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/tab-home/components/modal-detail-organization/modal-detail-organization.component.html?ngResource ***!
  \*******************************************************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>施設名</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismissModal()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"content\">\n  <ion-item>\n    <ion-text>\n      <h3>目的</h3>\n      <p>\n        H3: The quick brown fox jumps over the lazy dog asdfasdfasdfsdfsdfds\n      </p>\n    </ion-text>\n  </ion-item>\n  <ion-item class=\"content__item\">\n    <ion-icon class=\"content__item__icon\" name=\"person\"></ion-icon>\n    <ion-label>代表者名</ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-icon class=\"content__item__icon\" name=\"location\"></ion-icon>\n    <ion-text>住所</ion-text>\n  </ion-item>\n  <ion-item>\n    <ion-icon class=\"content__item__icon\" name=\"calendar-number\"></ion-icon>\n    <ion-text>設立年月日</ion-text>\n  </ion-item>\n  <ion-item>\n    <ion-icon class=\"content__item__icon\" name=\"globe\"></ion-icon>\n    <ion-text>ウェブサイト</ion-text>\n  </ion-item>\n  <ion-item>\n    <ion-icon class=\"content__item__icon\" name=\"reader\"></ion-icon>\n    <ion-label>登録日</ion-label>\n  </ion-item>\n  <ion-item>\n    <ng-container>\n      <ion-text>\n        <h4>活動分野</h4>\n        <ion-chip>設立</ion-chip>\n        <ion-chip>設立</ion-chip>\n        <ion-chip>設立年月日</ion-chip>\n        <ion-chip>設立年月日</ion-chip>\n        <ion-chip>設立年月日</ion-chip>\n        <ion-chip>設立年月日</ion-chip>\n      </ion-text>\n    </ng-container>\n  </ion-item>\n</ion-content>\n<ion-footer class=\"footer\">\n  <ion-toolbar class=\"footer__toolbar\">\n    <ion-chip color=\"primary\">\n      <ion-icon name=\"chatbox\"></ion-icon>\n      <ion-label>チャット</ion-label>\n    </ion-chip>\n    <ion-chip color=\"primary\">\n      <ion-icon name=\"call\"></ion-icon>\n      <ion-label>電話</ion-label>\n    </ion-chip>\n  </ion-toolbar>\n</ion-footer>\n";

/***/ }),

/***/ 72394:
/*!********************************************************!*\
  !*** ./src/app/tab-home/tab-home.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"logout()\">\n        <ion-icon name=\"log-in-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>{{targetItem.name}}</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon name=\"location-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content fullscreen=\"true\" scrollEvents=\"true\">\n  <app-category-slide\n    (emitChooseCategory)=\"chooseCategory($event)\"\n  ></app-category-slide>\n  <app-list-timeline></app-list-timeline>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab-home_tab-home_module_ts.js.map