"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tab-chat_tab-chat_module_ts"],{

/***/ 89685:
/*!**********************************************************************!*\
  !*** ./src/app/tab-chat/components/list-chat/list-chat.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListChatComponent": () => (/* binding */ ListChatComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _list_chat_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-chat.component.html?ngResource */ 44611);
/* harmony import */ var _list_chat_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-chat.component.scss?ngResource */ 56409);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);





let ListChatComponent = class ListChatComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    navigateToChatPage() {
        this.router.navigate(['detail-chat']);
    }
};
ListChatComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ListChatComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-list-chat',
        template: _list_chat_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_list_chat_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ListChatComponent);



/***/ }),

/***/ 60526:
/*!*****************************************************!*\
  !*** ./src/app/tab-chat/tab-chat-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabChatPageRoutingModule": () => (/* binding */ TabChatPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _tab_chat_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-chat.page */ 56357);




const routes = [
    {
        path: '',
        component: _tab_chat_page__WEBPACK_IMPORTED_MODULE_0__.TabChatPage,
    },
];
let TabChatPageRoutingModule = class TabChatPageRoutingModule {
};
TabChatPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], TabChatPageRoutingModule);



/***/ }),

/***/ 83811:
/*!*********************************************!*\
  !*** ./src/app/tab-chat/tab-chat.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabChatPageModule": () => (/* binding */ TabChatPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _tab_chat_tab_chat_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/tab-chat/tab-chat.page */ 56357);
/* harmony import */ var _tab_chat_components_list_chat_list_chat_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/tab-chat/components/list-chat/list-chat.component */ 89685);
/* harmony import */ var _tab_chat_tab_chat_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/tab-chat/tab-chat-routing.module */ 60526);
/* harmony import */ var ngx_autosize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-autosize */ 25914);










let TabChatPageModule = class TabChatPageModule {
};
TabChatPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule,
            _tab_chat_tab_chat_routing_module__WEBPACK_IMPORTED_MODULE_2__.TabChatPageRoutingModule,
            ngx_autosize__WEBPACK_IMPORTED_MODULE_9__.AutosizeModule,
        ],
        exports: [_tab_chat_components_list_chat_list_chat_component__WEBPACK_IMPORTED_MODULE_1__.ListChatComponent],
        declarations: [_tab_chat_tab_chat_page__WEBPACK_IMPORTED_MODULE_0__.TabChatPage, _tab_chat_components_list_chat_list_chat_component__WEBPACK_IMPORTED_MODULE_1__.ListChatComponent]
    })
], TabChatPageModule);



/***/ }),

/***/ 56357:
/*!*******************************************!*\
  !*** ./src/app/tab-chat/tab-chat.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabChatPage": () => (/* binding */ TabChatPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _tab_chat_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab-chat.page.html?ngResource */ 26178);
/* harmony import */ var _tab_chat_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab-chat.page.scss?ngResource */ 45580);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let TabChatPage = class TabChatPage {
    constructor() { }
};
TabChatPage.ctorParameters = () => [];
TabChatPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tab2',
        template: _tab_chat_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_tab_chat_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TabChatPage);



/***/ }),

/***/ 25914:
/*!*************************************************************************!*\
  !*** ./node_modules/ngx-autosize/__ivy_ngcc__/fesm2015/ngx-autosize.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AutosizeDirective": () => (/* binding */ AutosizeDirective),
/* harmony export */   "AutosizeModule": () => (/* binding */ AutosizeModule),
/* harmony export */   "ɵa": () => (/* binding */ WindowRef)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

class WindowRef {
    /**
     * @return {?}
     */
    get nativeWindow() {
        return window;
    }
}
WindowRef.ɵfac = function WindowRef_Factory(t) { return new (t || WindowRef)(); };
WindowRef.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WindowRef, factory: WindowRef.ɵfac });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WindowRef, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const MAX_LOOKUP_RETRIES = 3;
class AutosizeDirective {
    /**
     * @param {?} element
     * @param {?} _window
     * @param {?} _zone
     */
    constructor(element, _window, _zone) {
        this.element = element;
        this._window = _window;
        this._zone = _zone;
        this.onlyGrow = false;
        this.useImportant = false;
        this.resized = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.autosize = true;
        this.retries = 0;
        this._destroyed = false;
        if (this.element.nativeElement.tagName !== 'TEXTAREA') {
            this._findNestedTextArea();
        }
        else {
            this.textAreaEl = this.element.nativeElement;
            this.textAreaEl.style['overflow-y'] = 'hidden';
            this._onTextAreaFound();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set minRows(value) {
        this._minRows = value;
        if (this.textAreaEl) {
            this.textAreaEl.rows = value;
        }
    }
    ;
    /**
     * @param {?} autosize
     * @return {?}
     */
    set _autosize(autosize) {
        this.autosize = typeof autosize === 'boolean'
            ? autosize
            : true;
    }
    ;
    /**
     * @param {?} textArea
     * @return {?}
     */
    onInput(textArea) {
        this.adjust();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._destroyed = true;
        if (this._windowResizeHandler) {
            this._window.nativeWindow.removeEventListener('resize', this._windowResizeHandler, false);
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentChecked() {
        this.adjust();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        this.adjust(true);
    }
    /**
     * @return {?}
     */
    _findNestedTextArea() {
        this.textAreaEl = this.element.nativeElement.querySelector('TEXTAREA');
        if (!this.textAreaEl && this.element.nativeElement.shadowRoot) {
            this.textAreaEl = this.element.nativeElement.shadowRoot.querySelector('TEXTAREA');
        }
        if (!this.textAreaEl) {
            if (this.retries >= MAX_LOOKUP_RETRIES) {
                console.warn('ngx-autosize: textarea not found');
            }
            else {
                this.retries++;
                setTimeout((/**
                 * @return {?}
                 */
                () => {
                    this._findNestedTextArea();
                }), 100);
            }
            return;
        }
        this.textAreaEl.style['overflow-y'] = 'hidden';
        this._onTextAreaFound();
    }
    /**
     * @return {?}
     */
    _onTextAreaFound() {
        this._addWindowResizeHandler();
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.adjust();
        }));
    }
    /**
     * @return {?}
     */
    _addWindowResizeHandler() {
        this._windowResizeHandler = Debounce((/**
         * @return {?}
         */
        () => {
            this._zone.run((/**
             * @return {?}
             */
            () => {
                this.adjust();
            }));
        }), 200);
        this._zone.runOutsideAngular((/**
         * @return {?}
         */
        () => {
            this._window.nativeWindow.addEventListener('resize', this._windowResizeHandler, false);
        }));
    }
    /**
     * @param {?=} inputsChanged
     * @return {?}
     */
    adjust(inputsChanged = false) {
        if (this.autosize && !this._destroyed && this.textAreaEl && this.textAreaEl.parentNode) {
            /** @type {?} */
            const currentText = this.textAreaEl.value;
            if (inputsChanged === false &&
                currentText === this._oldContent &&
                this.textAreaEl.offsetWidth === this._oldWidth) {
                return;
            }
            this._oldContent = currentText;
            this._oldWidth = this.textAreaEl.offsetWidth;
            /** @type {?} */
            const clone = this.textAreaEl.cloneNode(true);
            /** @type {?} */
            const parent = this.textAreaEl.parentNode;
            clone.style.width = this.textAreaEl.offsetWidth + 'px';
            clone.style.visibility = 'hidden';
            clone.style.position = 'absolute';
            clone.textContent = currentText;
            parent.appendChild(clone);
            clone.style['overflow-y'] = 'hidden';
            clone.style.height = 'auto';
            /** @type {?} */
            let height = clone.scrollHeight;
            // add into height top and bottom borders' width
            /** @type {?} */
            let computedStyle = this._window.nativeWindow.getComputedStyle(clone, null);
            height += parseInt(computedStyle.getPropertyValue('border-top-width'));
            height += parseInt(computedStyle.getPropertyValue('border-bottom-width'));
            // add into height top and bottom paddings width
            height += parseInt(computedStyle.getPropertyValue('padding-top'));
            height += parseInt(computedStyle.getPropertyValue('padding-bottom'));
            /** @type {?} */
            const oldHeight = this.textAreaEl.offsetHeight;
            /** @type {?} */
            const willGrow = height > oldHeight;
            if (this.onlyGrow === false || willGrow) {
                /** @type {?} */
                const lineHeight = this._getLineHeight();
                /** @type {?} */
                const rowsCount = height / lineHeight;
                if (this._minRows && this._minRows >= rowsCount) {
                    height = this._minRows * lineHeight;
                }
                else if (this.maxRows && this.maxRows <= rowsCount) {
                    // never shrink the textarea if onlyGrow is true
                    /** @type {?} */
                    const maxHeight = this.maxRows * lineHeight;
                    height = this.onlyGrow ? Math.max(maxHeight, oldHeight) : maxHeight;
                    this.textAreaEl.style['overflow-y'] = 'auto';
                }
                else {
                    this.textAreaEl.style['overflow-y'] = 'hidden';
                }
                /** @type {?} */
                const heightStyle = height + 'px';
                /** @type {?} */
                const important = this.useImportant ? 'important' : '';
                this.textAreaEl.style.setProperty('height', heightStyle, important);
                this.resized.emit(height);
            }
            parent.removeChild(clone);
        }
    }
    /**
     * @private
     * @return {?}
     */
    _getLineHeight() {
        /** @type {?} */
        let lineHeight = parseInt(this.textAreaEl.style.lineHeight, 10);
        if (isNaN(lineHeight) && this._window.nativeWindow.getComputedStyle) {
            /** @type {?} */
            const styles = this._window.nativeWindow.getComputedStyle(this.textAreaEl);
            lineHeight = parseInt(styles.lineHeight, 10);
        }
        if (isNaN(lineHeight)) {
            /** @type {?} */
            const fontSize = this._window.nativeWindow.getComputedStyle(this.textAreaEl, null).getPropertyValue('font-size');
            lineHeight = Math.floor(parseInt(fontSize.replace('px', ''), 10) * 1.5);
        }
        return lineHeight;
    }
}
AutosizeDirective.ɵfac = function AutosizeDirective_Factory(t) { return new (t || AutosizeDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](WindowRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone)); };
AutosizeDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AutosizeDirective, selectors: [["", "autosize", ""]], hostBindings: function AutosizeDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("input", function AutosizeDirective_input_HostBindingHandler($event) { return ctx.onInput($event.target); });
    } }, inputs: { onlyGrow: "onlyGrow", useImportant: "useImportant", minRows: "minRows", _autosize: ["autosize", "_autosize"], maxRows: "maxRows" }, outputs: { resized: "resized" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]] });
/** @nocollapse */
AutosizeDirective.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef },
    { type: WindowRef },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }
];
AutosizeDirective.propDecorators = {
    minRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    _autosize: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input, args: ['autosize',] }],
    maxRows: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    onlyGrow: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    useImportant: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input }],
    resized: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output }],
    onInput: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener, args: ['input', ['$event.target'],] }]
};
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutosizeDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
        args: [{
                selector: '[autosize]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef }, { type: WindowRef }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgZone }]; }, { onlyGrow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], useImportant: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], resized: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }], minRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }], _autosize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['autosize']
        }], 
    /**
     * @param {?} textArea
     * @return {?}
     */
    onInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
            args: ['input', ['$event.target']]
        }], maxRows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }] }); })();
if (false) {}
/**
 * @param {?} func
 * @param {?} wait
 * @param {?=} immediate
 * @return {?}
 */
function Debounce(func, wait, immediate = false) {
    /** @type {?} */
    let timeout;
    return (/**
     * @return {?}
     */
    function () {
        /** @type {?} */
        const context = this;
        /** @type {?} */
        const args = arguments;
        /** @type {?} */
        const later = (/**
         * @return {?}
         */
        function () {
            timeout = null;
            if (!immediate) {
                func.apply(context, args);
            }
        });
        /** @type {?} */
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            func.apply(context, args);
        }
    });
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AutosizeModule {
}
AutosizeModule.ɵfac = function AutosizeModule_Factory(t) { return new (t || AutosizeModule)(); };
AutosizeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AutosizeModule });
AutosizeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ providers: [
        WindowRef
    ], imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AutosizeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
        args: [{
                declarations: [AutosizeDirective],
                imports: [],
                providers: [
                    WindowRef
                ],
                exports: [AutosizeDirective]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AutosizeModule, { declarations: [AutosizeDirective], exports: [AutosizeDirective] }); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */





/***/ }),

/***/ 56409:
/*!***********************************************************************************!*\
  !*** ./src/app/tab-chat/components/list-chat/list-chat.component.scss?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LWNoYXQuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 45580:
/*!********************************************************!*\
  !*** ./src/app/tab-chat/tab-chat.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWItY2hhdC5wYWdlLnNjc3MifQ== */";

/***/ }),

/***/ 44611:
/*!***********************************************************************************!*\
  !*** ./src/app/tab-chat/components/list-chat/list-chat.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-list>\n  <ion-item (click)=\"navigateToChatPage()\">\n    <ion-avatar slot=\"start\">\n      <img src=\"../../../../assets/img/kobaton.jpg\" />\n    </ion-avatar>\n    <ion-label>\n      <h2>法人名</h2>\n      <p>2022/04/09</p>\n      <h3>あれあれです。あれあれです。</h3>\n    </ion-label>\n  </ion-item>\n  <ion-item>\n    <ion-avatar slot=\"start\">\n      <img src=\"../../../../assets/img/kobaton.jpg\" />\n    </ion-avatar>\n    <ion-label>\n      <h2>法人名</h2>\n      <p>2022/04/09</p>\n      <h3>これこれです。これこれ</h3>\n    </ion-label>\n  </ion-item>\n</ion-list>\n";

/***/ }),

/***/ 26178:
/*!********************************************************!*\
  !*** ./src/app/tab-chat/tab-chat.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title> つながり </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <app-list-chat></app-list-chat>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tab-chat_tab-chat_module_ts.js.map