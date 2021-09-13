(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\REPOSITORIO\GitHub\finaktiva-spa\src\main.ts */"zUnb");


/***/ }),

/***/ "1pcL":
/*!*****************************************************************!*\
  !*** ./src/app/components/modal-comic/modal-comic.component.ts ***!
  \*****************************************************************/
/*! exports provided: ModalComicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalComicComponent", function() { return ModalComicComponent; });
/* harmony import */ var _models_comics_comic_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/comics/comic.model */ "xffk");
/* harmony import */ var _models_comics_comic_storage_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/comics/comic-storage.model */ "Mmvs");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_comic_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/comic.service */ "H4TT");
/* harmony import */ var _pipes_description_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/description.pipe */ "SWbW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");






class ModalComicComponent {
    constructor(_comicService) {
        this._comicService = _comicService;
        this.comic = new _models_comics_comic_model__WEBPACK_IMPORTED_MODULE_0__["ComicModel"]();
        this.favorite = new _models_comics_comic_storage_model__WEBPACK_IMPORTED_MODULE_1__["ComicStorageModel"]();
    }
    ngOnInit() {
    }
    addFavorite() {
        this._comicService.createList(this.comic);
    }
}
ModalComicComponent.ɵfac = function ModalComicComponent_Factory(t) { return new (t || ModalComicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_comic_service__WEBPACK_IMPORTED_MODULE_3__["ComicService"])); };
ModalComicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ModalComicComponent, selectors: [["app-modal-comic"]], inputs: { comic: "comic" }, decls: 27, vars: 11, consts: [["id", "ComicModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "myModalLabel", "aria-hidden", "true", 1, "modal", "fade", 2, "display", "none"], ["role", "document", 1, "modal-dialog", "modal-lg"], [1, "modal-content"], [1, "modal-header"], ["type", "button", "data-dismiss", "modal", "aria-label", "Close", 1, "close"], ["src", "assets/img/btn-close.png", "alt", ""], [1, "modal-body"], [1, "row", "animated", "fadeIn", "fast"], [1, "col-md-4"], [1, "img-fluid", 3, "src", "alt"], [1, "col-md-8"], [1, "modal-footer", "row", "justify-content-center"], [1, "col-md-5"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-dark", "col-12", "btn-favorite", "font-weight-bold", 3, "disabled", "click"], ["src", "assets/img/btn-favourites-primary.png"], ["type", "button", 1, "btn", "btn-light", "col-12", "btn-favorite", "font-weight-bold"], ["src", "assets/img/shopping-cart-primary.png"]], template: function ModalComicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "description");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function ModalComicComponent_Template_button_click_19_listener() { return ctx.addFavorite(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21, " ADDED TO FAVOURITES ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](26, "currency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate2"]("src", "", ctx.comic.thumbnail == null ? null : ctx.comic.thumbnail.path, ".", ctx.comic.thumbnail == null ? null : ctx.comic.thumbnail.extension, "", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("alt", ctx.comic.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.comic.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 7, ctx.comic.description), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.comic.isDisable);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" BUY FOR ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](26, 9, ctx.comic.price), " ");
    } }, pipes: [_pipes_description_pipe__WEBPACK_IMPORTED_MODULE_4__["DescriptionPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CurrencyPipe"]], encapsulation: 2 });


/***/ }),

/***/ "3F0J":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");



class NavbarComponent {
    constructor(_router) {
        this._router = _router;
    }
    ngOnInit() {
    }
    search(termino) {
        this._router.navigate(['/character', termino]);
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 10, vars: 0, consts: [[1, "navbar", "navbar-expand-md", "navbar-dark", "bg-dark"], ["href", "#", 1, "navbar-brand"], ["src", "assets/img/marvel-logo.png", "width", "180", "height", "50", "alt", ""], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], [1, "d-flex", "search"], ["width", "1000px", "type", "search", "placeholder", "Search", "aria-label", "Search", 1, "form-control", "me-2"], ["buscarTexto", ""], ["type", "button", 1, "btn", "btn-outline-danger", 3, "click"], ["src", "assets/img/search.png", "width", "23", "height", "23", "alt", ""]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7); return ctx.search(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbNavbar"]], encapsulation: 2 });


/***/ }),

/***/ "6JgD":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/loading/loading.component.ts ***!
  \****************************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class LoadingComponent {
    constructor() { }
    ngOnInit() {
    }
}
LoadingComponent.ɵfac = function LoadingComponent_Factory(t) { return new (t || LoadingComponent)(); };
LoadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingComponent, selectors: [["app-loading"]], decls: 4, vars: 0, consts: [[1, "d-flex", "justify-content-center", "animated", "fadeIn", "m-5"], ["role", "status", 1, "spinner-border"], [1, "sr-only"]], template: function LoadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, encapsulation: 2 });


/***/ }),

/***/ "Acux":
/*!******************************************************!*\
  !*** ./src/app/models/characters/character.model.ts ***!
  \******************************************************/
/*! exports provided: CharacterModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterModel", function() { return CharacterModel; });
class CharacterModel {
}


/***/ }),

/***/ "AytR":
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
const environment = {
    production: false,
    apiURL: 'https://gateway.marvel.com/v1/public',
    apikey: 'da3a0b3006bac1bbecd679ec63f0f1ed',
    hash: '8cb6c6a0768954bb506b45b6339ae664'
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

/***/ "Do2H":
/*!******************************************!*\
  !*** ./src/app/services/base.service.ts ***!
  \******************************************/
/*! exports provided: BaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BaseService", function() { return BaseService; });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _config_configuration__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/configuration */ "guRK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class BaseService {
    constructor(_httpClient) {
        this._httpClient = _httpClient;
        this.API_ROOT = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apiURL;
        this.API_KEY = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].apikey;
        this.HASH = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].hash;
    }
    getAll(endPoint, offset = _config_configuration__WEBPACK_IMPORTED_MODULE_2__["PARAMETER"].offset, queryString = "") {
        let parameters = `ts=${_config_configuration__WEBPACK_IMPORTED_MODULE_2__["PARAMETER"].timestamp}&apikey=${this.API_KEY}&hash=${this.HASH}&offset=${offset}&limit=${_config_configuration__WEBPACK_IMPORTED_MODULE_2__["PARAMETER"].limit}&${queryString}`;
        return this._httpClient.get(`${this.API_ROOT}${endPoint}?${parameters}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(resp => {
            return resp;
        }));
    }
    getById(endPoint, id) {
        let parameters = `ts=${_config_configuration__WEBPACK_IMPORTED_MODULE_2__["PARAMETER"].timestamp}&apikey=${this.API_KEY}&hash=${this.HASH}&limit=${_config_configuration__WEBPACK_IMPORTED_MODULE_2__["PARAMETER"].limit}`;
        return this._httpClient.get(`${this.API_ROOT}${endPoint}/${id}?${parameters}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(resp => {
            return resp;
        }));
    }
    getResourceURI(resourceURI, offset = _config_configuration__WEBPACK_IMPORTED_MODULE_2__["PARAMETER"].offset, limit = _config_configuration__WEBPACK_IMPORTED_MODULE_2__["PARAMETER"].limit) {
        let parameters = `ts=${_config_configuration__WEBPACK_IMPORTED_MODULE_2__["PARAMETER"].timestamp}&apikey=${this.API_KEY}&hash=${this.HASH}&offset=${offset}&limit=${limit}`;
        return this._httpClient.get(`${resourceURI}?${parameters}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(resp => {
            return resp;
        }));
    }
}
BaseService.ɵfac = function BaseService_Factory(t) { return new (t || BaseService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
BaseService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: BaseService, factory: BaseService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "FezY":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class FooterComponent {
    constructor() {
        this.anio = new Date().getFullYear();
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 4, vars: 1, consts: [[1, "footer", "bg-dark", "text-center"], [1, "container"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Copyright \u00A9 ", ctx.anio, " Yeison Rua, todos los derechos reservados. ");
    } }, encapsulation: 2 });


/***/ }),

/***/ "H4TT":
/*!*******************************************!*\
  !*** ./src/app/services/comic.service.ts ***!
  \*******************************************/
/*! exports provided: ComicService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComicService", function() { return ComicService; });
/* harmony import */ var _models_comics_comic_storage_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/comics/comic-storage.model */ "Mmvs");
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base.service */ "Do2H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class ComicService extends _base_service__WEBPACK_IMPORTED_MODULE_1__["BaseService"] {
    constructor(_httpClient) {
        super(_httpClient);
        this._httpClient = _httpClient;
        this.comicFavoriteList = new Array();
    }
    createList(comic) {
        const newList = new _models_comics_comic_storage_model__WEBPACK_IMPORTED_MODULE_0__["ComicStorageModel"]();
        newList.id = comic.id;
        newList.title = comic.title;
        newList.thumbnail = comic.thumbnail;
        if (this.validateExists(comic.id)) {
            this.comicFavoriteList.push(newList);
            this.saveStorage();
        }
        return newList.id;
    }
    deleteList(comic) {
        this.comicFavoriteList = this.comicFavoriteList.filter(listaData => listaData.id !== comic.id);
        this.saveStorage();
    }
    getList(id) {
        id = Number(id);
        return this.comicFavoriteList.find(listaData => listaData.id === id);
    }
    saveStorage() {
        localStorage.setItem('data', JSON.stringify(this.comicFavoriteList));
    }
    loadStorage() {
        if (localStorage.getItem('data')) {
            this.comicFavoriteList = JSON.parse(localStorage.getItem('data'));
        }
        else {
            this.comicFavoriteList = [];
        }
    }
    validateExists(id) {
        let list = this.getList(id);
        if (list == null) {
            return true;
        }
        else {
            return false;
        }
    }
}
ComicService.ɵfac = function ComicService_Factory(t) { return new (t || ComicService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ComicService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: ComicService, factory: ComicService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "Mmvs":
/*!******************************************************!*\
  !*** ./src/app/models/comics/comic-storage.model.ts ***!
  \******************************************************/
/*! exports provided: ComicStorageModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComicStorageModel", function() { return ComicStorageModel; });
class ComicStorageModel {
}


/***/ }),

/***/ "SWbW":
/*!*******************************************!*\
  !*** ./src/app/pipes/description.pipe.ts ***!
  \*******************************************/
/*! exports provided: DescriptionPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionPipe", function() { return DescriptionPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class DescriptionPipe {
    transform(value) {
        if ((value === null || value === void 0 ? void 0 : value.length) > 0)
            return value;
        else
            return "Sin información..";
    }
}
DescriptionPipe.ɵfac = function DescriptionPipe_Factory(t) { return new (t || DescriptionPipe)(); };
DescriptionPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "description", type: DescriptionPipe, pure: true });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/shared/navbar/navbar.component */ "3F0J");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _views_favorites_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./views/favorites/favorite/favorite.component */ "oqkf");
/* harmony import */ var _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/shared/footer/footer.component */ "FezY");





class AppComponent {
    constructor() {
        this.title = 'finaktiva-spa';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 0, consts: [[1, "container", "main-container"], [1, "row"], [1, "col-md-9"], [1, "col-md-3"], [1, "pull-right"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-favorite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-footer");
    } }, directives: [_components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _views_favorites_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_3__["FavoriteComponent"], _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_4__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _views_characters_list_character_list_character_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./views/characters/list-character/list-character.component */ "sG08");
/* harmony import */ var _views_characters_detail_character_detail_character_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./views/characters/detail-character/detail-character.component */ "inMU");
/* harmony import */ var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/shared/navbar/navbar.component */ "3F0J");
/* harmony import */ var _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/shared/footer/footer.component */ "FezY");
/* harmony import */ var _components_shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/shared/loading/loading.component */ "6JgD");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/card/card.component */ "lXt9");
/* harmony import */ var _views_favorites_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./views/favorites/favorite/favorite.component */ "oqkf");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _components_card_comic_card_comic_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/card-comic/card-comic.component */ "ziKG");
/* harmony import */ var _components_modal_comic_modal_comic_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/modal-comic/modal-comic.component */ "1pcL");
/* harmony import */ var _components_card_favorite_card_favorite_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/card-favorite/card-favorite.component */ "tPoe");
/* harmony import */ var _pipes_description_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pipes/description.pipe */ "SWbW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "fXoL");

















class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _views_characters_list_character_list_character_component__WEBPACK_IMPORTED_MODULE_4__["ListCharacterComponent"],
        _views_characters_detail_character_detail_character_component__WEBPACK_IMPORTED_MODULE_5__["DetailCharacterComponent"],
        _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
        _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
        _components_shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"],
        _components_card_card_component__WEBPACK_IMPORTED_MODULE_9__["CardComponent"],
        _views_favorites_favorite_favorite_component__WEBPACK_IMPORTED_MODULE_10__["FavoriteComponent"],
        _components_card_comic_card_comic_component__WEBPACK_IMPORTED_MODULE_12__["CardComicComponent"],
        _components_modal_comic_modal_comic_component__WEBPACK_IMPORTED_MODULE_13__["ModalComicComponent"],
        _components_card_favorite_card_favorite_component__WEBPACK_IMPORTED_MODULE_14__["CardFavoriteComponent"],
        _pipes_description_pipe__WEBPACK_IMPORTED_MODULE_15__["DescriptionPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"]] }); })();


/***/ }),

/***/ "eEw8":
/*!***************************************************!*\
  !*** ./src/app/commons/enums/status-code.enum.ts ***!
  \***************************************************/
/*! exports provided: StatusCodeEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusCodeEnum", function() { return StatusCodeEnum; });
var StatusCodeEnum;
(function (StatusCodeEnum) {
    StatusCodeEnum[StatusCodeEnum["Continue"] = 100] = "Continue";
    StatusCodeEnum[StatusCodeEnum["SwitchingProtocols"] = 101] = "SwitchingProtocols";
    StatusCodeEnum[StatusCodeEnum["OK"] = 200] = "OK";
    StatusCodeEnum[StatusCodeEnum["Created"] = 201] = "Created";
    StatusCodeEnum[StatusCodeEnum["Accepted"] = 202] = "Accepted";
    StatusCodeEnum[StatusCodeEnum["NonAuthoritativeInformation"] = 203] = "NonAuthoritativeInformation";
    StatusCodeEnum[StatusCodeEnum["NoContent"] = 204] = "NoContent";
    StatusCodeEnum[StatusCodeEnum["ResetContent"] = 205] = "ResetContent";
    StatusCodeEnum[StatusCodeEnum["PartialContent"] = 206] = "PartialContent";
    StatusCodeEnum[StatusCodeEnum["Ambiguous"] = 300] = "Ambiguous";
    StatusCodeEnum[StatusCodeEnum["MultipleChoices"] = 300] = "MultipleChoices";
    StatusCodeEnum[StatusCodeEnum["Moved"] = 301] = "Moved";
    StatusCodeEnum[StatusCodeEnum["MovedPermanently"] = 301] = "MovedPermanently";
    StatusCodeEnum[StatusCodeEnum["Found"] = 302] = "Found";
    StatusCodeEnum[StatusCodeEnum["Redirect"] = 302] = "Redirect";
    StatusCodeEnum[StatusCodeEnum["RedirectMethod"] = 303] = "RedirectMethod";
    StatusCodeEnum[StatusCodeEnum["SeeOther"] = 303] = "SeeOther";
    StatusCodeEnum[StatusCodeEnum["NotModified"] = 304] = "NotModified";
    StatusCodeEnum[StatusCodeEnum["UseProxy"] = 305] = "UseProxy";
    StatusCodeEnum[StatusCodeEnum["Unused"] = 306] = "Unused";
    StatusCodeEnum[StatusCodeEnum["RedirectKeepVerb"] = 307] = "RedirectKeepVerb";
    StatusCodeEnum[StatusCodeEnum["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    StatusCodeEnum[StatusCodeEnum["BadRequest"] = 400] = "BadRequest";
    StatusCodeEnum[StatusCodeEnum["Unauthorized"] = 401] = "Unauthorized";
    StatusCodeEnum[StatusCodeEnum["PaymentRequired"] = 402] = "PaymentRequired";
    StatusCodeEnum[StatusCodeEnum["Forbidden"] = 403] = "Forbidden";
    StatusCodeEnum[StatusCodeEnum["NotFound"] = 404] = "NotFound";
    StatusCodeEnum[StatusCodeEnum["MethodNotAllowed"] = 405] = "MethodNotAllowed";
    StatusCodeEnum[StatusCodeEnum["NotAcceptable"] = 406] = "NotAcceptable";
    StatusCodeEnum[StatusCodeEnum["ProxyAuthenticationRequired"] = 407] = "ProxyAuthenticationRequired";
    StatusCodeEnum[StatusCodeEnum["RequestTimeout"] = 408] = "RequestTimeout";
    StatusCodeEnum[StatusCodeEnum["Conflict"] = 409] = "Conflict";
    StatusCodeEnum[StatusCodeEnum["Gone"] = 410] = "Gone";
    StatusCodeEnum[StatusCodeEnum["LengthRequired"] = 411] = "LengthRequired";
    StatusCodeEnum[StatusCodeEnum["PreconditionFailed"] = 412] = "PreconditionFailed";
    StatusCodeEnum[StatusCodeEnum["RequestEntityTooLarge"] = 413] = "RequestEntityTooLarge";
    StatusCodeEnum[StatusCodeEnum["RequestUriTooLong"] = 414] = "RequestUriTooLong";
    StatusCodeEnum[StatusCodeEnum["UnsupportedMediaType"] = 415] = "UnsupportedMediaType";
    StatusCodeEnum[StatusCodeEnum["RequestedRangeNotSatisfiable"] = 416] = "RequestedRangeNotSatisfiable";
    StatusCodeEnum[StatusCodeEnum["ExpectationFailed"] = 417] = "ExpectationFailed";
    StatusCodeEnum[StatusCodeEnum["UpgradeRequired"] = 426] = "UpgradeRequired";
    StatusCodeEnum[StatusCodeEnum["InternalServerError"] = 500] = "InternalServerError";
    StatusCodeEnum[StatusCodeEnum["NotImplemented"] = 501] = "NotImplemented";
    StatusCodeEnum[StatusCodeEnum["BadGateway"] = 502] = "BadGateway";
    StatusCodeEnum[StatusCodeEnum["ServiceUnavailable"] = 503] = "ServiceUnavailable";
    StatusCodeEnum[StatusCodeEnum["GatewayTimeout"] = 504] = "GatewayTimeout";
    StatusCodeEnum[StatusCodeEnum["HttpVersionNotSupported"] = 505] = "HttpVersionNotSupported";
})(StatusCodeEnum || (StatusCodeEnum = {}));


/***/ }),

/***/ "guRK":
/*!*****************************************!*\
  !*** ./src/app/config/configuration.ts ***!
  \*****************************************/
/*! exports provided: APIENDPOINT, PARAMETER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APIENDPOINT", function() { return APIENDPOINT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARAMETER", function() { return PARAMETER; });
const APIENDPOINT = {
    characters: '/characters',
    comics: '/comics',
};
const PARAMETER = {
    offset: 1,
    limit: 10,
    timestamp: 5
};


/***/ }),

/***/ "inMU":
/*!*********************************************************************************!*\
  !*** ./src/app/views/characters/detail-character/detail-character.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DetailCharacterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailCharacterComponent", function() { return DetailCharacterComponent; });
/* harmony import */ var _config_configuration__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../config/configuration */ "guRK");
/* harmony import */ var _commons_enums_status_code_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../commons/enums/status-code.enum */ "eEw8");
/* harmony import */ var _models_characters_character_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../models/characters/character.model */ "Acux");
/* harmony import */ var _models_comics_comic_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../models/comics/comic.model */ "xffk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_character_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../services/character.service */ "yMVB");
/* harmony import */ var _services_comic_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/comic.service */ "H4TT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_modal_comic_modal_comic_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/modal-comic/modal-comic.component */ "1pcL");
/* harmony import */ var _components_shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/shared/loading/loading.component */ "6JgD");
/* harmony import */ var _components_card_comic_card_comic_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/card-comic/card-comic.component */ "ziKG");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _pipes_description_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../pipes/description.pipe */ "SWbW");














function DetailCharacterComponent_app_loading_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-loading");
} }
function DetailCharacterComponent_div_5_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3, " No existen resultados. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function DetailCharacterComponent_div_5_app_card_comic_26_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-card-comic", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("comicEvent", function DetailCharacterComponent_div_5_app_card_comic_26_Template_app_card_comic_comicEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r6.getComicDetail($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("comic", item_r5);
} }
function DetailCharacterComponent_div_5_ngb_pagination_28_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ngb-pagination", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("pageChange", function DetailCharacterComponent_div_5_ngb_pagination_28_Template_ngb_pagination_pageChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r8.page = $event; })("pageChange", function DetailCharacterComponent_div_5_ngb_pagination_28_Template_ngb_pagination_pageChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r10.onPageChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("maxSize", 10)("page", ctx_r4.page)("pageSize", ctx_r4.pageSize)("collectionSize", ctx_r4.totalItems)("rotate", true)("ellipses", false)("boundaryLinks", true);
} }
const _c0 = function () { return ["/characters"]; };
function DetailCharacterComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "h1", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Regresar");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](15, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "description");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](20, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "h3", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](24, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](25, DetailCharacterComponent_div_5_div_25_Template, 4, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, DetailCharacterComponent_div_5_app_card_comic_26_Template, 1, 1, "app-card-comic", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, DetailCharacterComponent_div_5_ngb_pagination_28_Template, 1, 7, "ngb-pagination", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, " > ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 10, ctx_r1.character.name));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("src", ctx_r1.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"])("alt", ctx_r1.character.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](14, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Biography: ", ctx_r1.character.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 12, ctx_r1.character.description), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Comics: ", ctx_r1.character.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.comics.length == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.comics);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.comics.length > 0);
} }
class DetailCharacterComponent {
    constructor(_characterService, _comicService, _router, _activatedRouter) {
        this._characterService = _characterService;
        this._comicService = _comicService;
        this._router = _router;
        this._activatedRouter = _activatedRouter;
        this.isLoading = false;
        this.character = new _models_characters_character_model__WEBPACK_IMPORTED_MODULE_2__["CharacterModel"]();
        this.comics = new Array();
        this.comicModel = new _models_comics_comic_model__WEBPACK_IMPORTED_MODULE_3__["ComicModel"]();
        this._activatedRouter.params.subscribe(params => {
            this.idCharacter = params.id;
            this.getCharacterById();
        });
    }
    ngOnInit() {
    }
    getCharacterById() {
        this.isLoading = true;
        this._characterService.getById(_config_configuration__WEBPACK_IMPORTED_MODULE_0__["APIENDPOINT"].characters, this.idCharacter)
            .subscribe(resp => {
            var _a, _b, _c, _d;
            if (resp.code === _commons_enums_status_code_enum__WEBPACK_IMPORTED_MODULE_1__["StatusCodeEnum"].OK) {
                this.character = (_a = resp.data) === null || _a === void 0 ? void 0 : _a.results[0];
                this.imgUrl = `${(_b = this.character.thumbnail) === null || _b === void 0 ? void 0 : _b.path}.${(_c = this.character.thumbnail) === null || _c === void 0 ? void 0 : _c.extension}`;
                this.collectionURI = (_d = this.character.comics) === null || _d === void 0 ? void 0 : _d.collectionURI;
                this.getComicsByCharacter(this.collectionURI, _config_configuration__WEBPACK_IMPORTED_MODULE_0__["PARAMETER"].offset);
                this.isLoading = false;
            }
            else {
                this.isLoading = false;
            }
        });
    }
    onPageChange(pageNumber) {
        this.getComicsByCharacter(this.collectionURI, pageNumber);
    }
    getComicsByCharacter(urlComic, offset) {
        this._comicService.getResourceURI(urlComic, offset, _config_configuration__WEBPACK_IMPORTED_MODULE_0__["PARAMETER"].limit - 1)
            .subscribe(resp => {
            var _a, _b, _c, _d;
            if (resp.code === _commons_enums_status_code_enum__WEBPACK_IMPORTED_MODULE_1__["StatusCodeEnum"].OK) {
                this.comics = (_a = resp.data) === null || _a === void 0 ? void 0 : _a.results;
                this.page = (_b = resp.data) === null || _b === void 0 ? void 0 : _b.offset;
                this.pageSize = (_c = resp.data) === null || _c === void 0 ? void 0 : _c.limit;
                this.totalItems = (_d = resp.data) === null || _d === void 0 ? void 0 : _d.total;
            }
            else {
            }
        });
    }
    getComicDetail(comic) {
        var _a;
        this.comicModel = comic;
        this.comicModel.isDisable = this.validate();
        this.comicModel.price = (_a = comic === null || comic === void 0 ? void 0 : comic.prices) === null || _a === void 0 ? void 0 : _a.find(x => x.type === "printPrice").price;
    }
    validate() {
        var _a;
        let favorite = this._comicService.getList((_a = this.comicModel) === null || _a === void 0 ? void 0 : _a.id);
        if (favorite == undefined) {
            return false;
        }
        else {
            return true;
        }
    }
}
DetailCharacterComponent.ɵfac = function DetailCharacterComponent_Factory(t) { return new (t || DetailCharacterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_character_service__WEBPACK_IMPORTED_MODULE_5__["CharacterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_comic_service__WEBPACK_IMPORTED_MODULE_6__["ComicService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"])); };
DetailCharacterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: DetailCharacterComponent, selectors: [["app-detail-character"]], decls: 7, vars: 3, consts: [["src", "assets/img/characters.png", "width", "45", "height", "45", "alt", ""], [4, "ngIf"], ["class", "row mb-5 p-5", 4, "ngIf"], [3, "comic"], [1, "row", "mb-5", "p-5"], [1, "row", "animated", "fadeIn"], [1, "row", "animated", "fadeIn", "fast"], [1, "col-md-4"], [1, "img-fluid", 3, "src", "alt"], [1, "btn", "btn-outline-danger", "btn-block", 3, "routerLink"], [1, "col-md-8"], ["src", "assets/img/marvel-logo.png", "alt", "", 1, "img-logo"], ["class", "row", 4, "ngIf"], ["class", "col-sm-4", 3, "comic", "comicEvent", 4, "ngFor", "ngForOf"], ["class", "pagination justify-content-center", 3, "maxSize", "page", "pageSize", "collectionSize", "rotate", "ellipses", "boundaryLinks", "pageChange", 4, "ngIf"], [1, "row"], [1, "col-md-12"], ["role", "alert", 1, "alert", "alert-info"], [1, "col-sm-4", 3, "comic", "comicEvent"], [1, "pagination", "justify-content-center", 3, "maxSize", "page", "pageSize", "collectionSize", "rotate", "ellipses", "boundaryLinks", "pageChange"]], template: function DetailCharacterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Detail Characters");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, DetailCharacterComponent_app_loading_4_Template, 1, 0, "app-loading", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, DetailCharacterComponent_div_5_Template, 30, 15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "app-modal-comic", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("comic", ctx.comicModel);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _components_modal_comic_modal_comic_component__WEBPACK_IMPORTED_MODULE_9__["ModalComicComponent"], _components_shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_10__["LoadingComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _components_card_comic_card_comic_component__WEBPACK_IMPORTED_MODULE_11__["CardComicComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbPagination"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["UpperCasePipe"], _pipes_description_pipe__WEBPACK_IMPORTED_MODULE_13__["DescriptionPipe"]], encapsulation: 2 });


/***/ }),

/***/ "lXt9":
/*!***************************************************!*\
  !*** ./src/app/components/card/card.component.ts ***!
  \***************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _models_characters_character_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../models/characters/character.model */ "Acux");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pipes_description_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../pipes/description.pipe */ "SWbW");




const _c0 = function (a1) { return ["/detail-character", a1]; };
class CardComponent {
    constructor() {
        this.character = new _models_characters_character_model__WEBPACK_IMPORTED_MODULE_0__["CharacterModel"]();
    }
    ngOnInit() {
        var _a, _b;
        this.imgUrl = `${(_a = this.character.thumbnail) === null || _a === void 0 ? void 0 : _a.path}.${(_b = this.character.thumbnail) === null || _b === void 0 ? void 0 : _b.extension}`;
    }
}
CardComponent.ɵfac = function CardComponent_Factory(t) { return new (t || CardComponent)(); };
CardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CardComponent, selectors: [["app-card"]], inputs: { character: "character" }, decls: 12, vars: 9, consts: [[1, "row", "g-0"], [1, "col-md-6"], ["width", "200", "height", "200", 1, "card-img-top", "rounded-circle", 3, "src", "alt"], [1, "card-body"], [1, "card-title"], [1, "text-p"], [1, "btn", "btn-danger", 3, "routerLink"]], template: function CardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h5", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "description");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "VIEW MORE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"])("alt", ctx.character.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.character.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 5, ctx.character.description));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, ctx.character.id));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], pipes: [_pipes_description_pipe__WEBPACK_IMPORTED_MODULE_3__["DescriptionPipe"]], encapsulation: 2 });


/***/ }),

/***/ "oqkf":
/*!****************************************************************!*\
  !*** ./src/app/views/favorites/favorite/favorite.component.ts ***!
  \****************************************************************/
/*! exports provided: FavoriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FavoriteComponent", function() { return FavoriteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_comic_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/comic.service */ "H4TT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _components_card_favorite_card_favorite_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/card-favorite/card-favorite.component */ "tPoe");





function FavoriteComponent_app_card_favorite_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-card-favorite", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("deleteEvent", function FavoriteComponent_app_card_favorite_4_Template_app_card_favorite_deleteEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.deleteFavorite($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("favorite", item_r1);
} }
class FavoriteComponent {
    constructor(_comicService) {
        this._comicService = _comicService;
        this.favoriteList = new Array();
    }
    ngOnInit() {
        this.getFavorite();
    }
    getFavorite() {
        this._comicService.loadStorage();
        this.favoriteList = this._comicService.comicFavoriteList;
        this.page = 1;
        this.pageSize = 4;
        this.totalItems = this.favoriteList.length;
    }
    deleteFavorite(favorite) {
        this._comicService.deleteList(favorite);
        this.getFavorite();
    }
}
FavoriteComponent.ɵfac = function FavoriteComponent_Factory(t) { return new (t || FavoriteComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_comic_service__WEBPACK_IMPORTED_MODULE_1__["ComicService"])); };
FavoriteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FavoriteComponent, selectors: [["app-favorite"]], decls: 7, vars: 11, consts: [["src", "assets/img/favourites.png", "width", "45", "height", "45", "alt", ""], [3, "favorite", "deleteEvent", 4, "ngFor", "ngForOf"], [1, "pagination", "justify-content-center", 3, "page", "pageSize", "collectionSize", "rotate", "ellipses", "boundaryLinks", "pageChange"], [3, "favorite", "deleteEvent"]], template: function FavoriteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " My favourites");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FavoriteComponent_app_card_favorite_4_Template, 1, 1, "app-card-favorite", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ngb-pagination", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pageChange", function FavoriteComponent_Template_ngb_pagination_pageChange_6_listener($event) { return ctx.page = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](5, 7, ctx.favoriteList, (ctx.page - 1) * ctx.pageSize, ctx.page * ctx.pageSize));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("page", ctx.page)("pageSize", ctx.pageSize)("collectionSize", ctx.totalItems)("rotate", true)("ellipses", false)("boundaryLinks", true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbPagination"], _components_card_favorite_card_favorite_component__WEBPACK_IMPORTED_MODULE_4__["CardFavoriteComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["SlicePipe"]], encapsulation: 2 });


/***/ }),

/***/ "sG08":
/*!*****************************************************************************!*\
  !*** ./src/app/views/characters/list-character/list-character.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ListCharacterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListCharacterComponent", function() { return ListCharacterComponent; });
/* harmony import */ var _commons_enums_status_code_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../commons/enums/status-code.enum */ "eEw8");
/* harmony import */ var _config_configuration__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config/configuration */ "guRK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_character_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/character.service */ "yMVB");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/shared/loading/loading.component */ "6JgD");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/card/card.component */ "lXt9");









function ListCharacterComponent_app_loading_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-loading");
} }
function ListCharacterComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" No existen resultados con el t\u00E9rmino: ", ctx_r1.termino, " ");
} }
function ListCharacterComponent_div_6_app_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-card", 10);
} if (rf & 2) {
    const item_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("character", item_r4);
} }
function ListCharacterComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ListCharacterComponent_div_6_app_card_1_Template, 1, 1, "app-card", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "hr");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "ngb-pagination", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("pageChange", function ListCharacterComponent_div_6_Template_ngb_pagination_pageChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r5.page = $event; })("pageChange", function ListCharacterComponent_div_6_Template_ngb_pagination_pageChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.onPageChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r2.characters);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("maxSize", 10)("page", ctx_r2.page)("pageSize", ctx_r2.pageSize)("collectionSize", ctx_r2.totalItems)("rotate", true)("ellipses", false)("boundaryLinks", true);
} }
class ListCharacterComponent {
    constructor(_characterService, _activateRouter) {
        this._characterService = _characterService;
        this._activateRouter = _activateRouter;
        this.characters = new Array();
        this.isLoading = false;
        this._activateRouter.params.subscribe(params => {
            this.termino = params['termino'];
            this.search();
        });
    }
    ngOnInit() {
        this.getAll();
    }
    onPageChange(pageNumber) {
        this.getAll(pageNumber);
    }
    search() {
        var _a;
        if (((_a = this.termino) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            this.searchString = `nameStartsWith=${this.termino}`;
        }
        else {
            this.searchString = "";
        }
        this.getAll();
    }
    getAll(offset = _config_configuration__WEBPACK_IMPORTED_MODULE_1__["PARAMETER"].offset) {
        this.isLoading = true;
        this._characterService.getAll(_config_configuration__WEBPACK_IMPORTED_MODULE_1__["APIENDPOINT"].characters, offset, this.searchString)
            .subscribe(resp => {
            var _a, _b, _c, _d;
            if (resp.code === _commons_enums_status_code_enum__WEBPACK_IMPORTED_MODULE_0__["StatusCodeEnum"].OK) {
                this.characters = (_a = resp.data) === null || _a === void 0 ? void 0 : _a.results;
                this.page = (_b = resp.data) === null || _b === void 0 ? void 0 : _b.offset;
                this.pageSize = (_c = resp.data) === null || _c === void 0 ? void 0 : _c.limit;
                this.totalItems = (_d = resp.data) === null || _d === void 0 ? void 0 : _d.total;
                this.isLoading = false;
            }
            else {
                this.isLoading = false;
            }
        });
    }
}
ListCharacterComponent.ɵfac = function ListCharacterComponent_Factory(t) { return new (t || ListCharacterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_character_service__WEBPACK_IMPORTED_MODULE_3__["CharacterService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
ListCharacterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ListCharacterComponent, selectors: [["app-list-character"]], decls: 7, vars: 4, consts: [["src", "assets/img/characters.png", "width", "45", "height", "45", "alt", ""], [4, "ngIf"], ["class", "row", 4, "ngIf"], ["class", "row mb-5 p-5", 4, "ngIf"], [1, "row"], [1, "col-md-12"], ["role", "alert", 1, "alert", "alert-info"], [1, "row", "mb-5", "p-5"], ["class", "col-sm-6", 3, "character", 4, "ngFor", "ngForOf"], [1, "pagination", "justify-content-center", 3, "maxSize", "page", "pageSize", "collectionSize", "rotate", "ellipses", "boundaryLinks", "pageChange"], [1, "col-sm-6", 3, "character"]], template: function ListCharacterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, ListCharacterComponent_app_loading_4_Template, 1, 0, "app-loading", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, ListCharacterComponent_div_5_Template, 4, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, ListCharacterComponent_div_6_Template, 4, 8, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Characters ", ctx.termino, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.characters.length == 0 && !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.characters.length > 0 && !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _components_shared_loading_loading_component__WEBPACK_IMPORTED_MODULE_6__["LoadingComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPagination"], _components_card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"]], encapsulation: 2 });


/***/ }),

/***/ "tPoe":
/*!*********************************************************************!*\
  !*** ./src/app/components/card-favorite/card-favorite.component.ts ***!
  \*********************************************************************/
/*! exports provided: CardFavoriteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardFavoriteComponent", function() { return CardFavoriteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_comics_comic_storage_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/comics/comic-storage.model */ "Mmvs");



class CardFavoriteComponent {
    constructor() {
        this.favorite = new _models_comics_comic_storage_model__WEBPACK_IMPORTED_MODULE_1__["ComicStorageModel"]();
        this.deleteEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    deleteFavorite() {
        this.deleteEvent.emit(this.favorite);
    }
}
CardFavoriteComponent.ɵfac = function CardFavoriteComponent_Factory(t) { return new (t || CardFavoriteComponent)(); };
CardFavoriteComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardFavoriteComponent, selectors: [["app-card-favorite"]], inputs: { favorite: "favorite" }, outputs: { deleteEvent: "deleteEvent" }, decls: 7, vars: 3, consts: [[1, "card", "text-center", "mb-1", "p-1"], ["width", "100", "height", "300", 1, "card-img-top", 3, "src", "alt"], [1, "card-body"], [1, "card-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["src", "assets/img/btn-delete.png", "alt", ""]], template: function CardFavoriteComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardFavoriteComponent_Template_button_click_5_listener() { return ctx.deleteFavorite(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate2"]("src", "", ctx.favorite.thumbnail == null ? null : ctx.favorite.thumbnail.path, ".", ctx.favorite.thumbnail == null ? null : ctx.favorite.thumbnail.extension, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.favorite.title);
    } }, encapsulation: 2 });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _views_characters_detail_character_detail_character_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./views/characters/detail-character/detail-character.component */ "inMU");
/* harmony import */ var _views_characters_list_character_list_character_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./views/characters/list-character/list-character.component */ "sG08");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    { path: '', component: _views_characters_list_character_list_character_component__WEBPACK_IMPORTED_MODULE_2__["ListCharacterComponent"] },
    { path: 'character/:termino', component: _views_characters_list_character_list_character_component__WEBPACK_IMPORTED_MODULE_2__["ListCharacterComponent"] },
    { path: 'detail-character/:id', component: _views_characters_detail_character_detail_character_component__WEBPACK_IMPORTED_MODULE_1__["DetailCharacterComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: '' }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "xffk":
/*!**********************************************!*\
  !*** ./src/app/models/comics/comic.model.ts ***!
  \**********************************************/
/*! exports provided: ComicModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComicModel", function() { return ComicModel; });
class ComicModel {
}


/***/ }),

/***/ "yMVB":
/*!***********************************************!*\
  !*** ./src/app/services/character.service.ts ***!
  \***********************************************/
/*! exports provided: CharacterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterService", function() { return CharacterService; });
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.service */ "Do2H");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");



class CharacterService extends _base_service__WEBPACK_IMPORTED_MODULE_0__["BaseService"] {
    constructor(_httpClient) {
        super(_httpClient);
        this._httpClient = _httpClient;
    }
}
CharacterService.ɵfac = function CharacterService_Factory(t) { return new (t || CharacterService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CharacterService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: CharacterService, factory: CharacterService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "ziKG":
/*!***************************************************************!*\
  !*** ./src/app/components/card-comic/card-comic.component.ts ***!
  \***************************************************************/
/*! exports provided: CardComicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComicComponent", function() { return CardComicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _models_comics_comic_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/comics/comic.model */ "xffk");



class CardComicComponent {
    constructor() {
        this.comic = new _models_comics_comic_model__WEBPACK_IMPORTED_MODULE_1__["ComicModel"]();
        this.comicEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        var _a, _b;
        this.imgUrl = `${(_a = this.comic.thumbnail) === null || _a === void 0 ? void 0 : _a.path}.${(_b = this.comic.thumbnail) === null || _b === void 0 ? void 0 : _b.extension}`;
    }
    getComicDetail() {
        this.comicEvent.emit(this.comic);
    }
}
CardComicComponent.ɵfac = function CardComicComponent_Factory(t) { return new (t || CardComicComponent)(); };
CardComicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardComicComponent, selectors: [["app-card-comic"]], inputs: { comic: "comic" }, outputs: { comicEvent: "comicEvent" }, decls: 10, vars: 4, consts: [[1, "card", "text-center", "mb-1", "p-1"], ["width", "100", "height", "300", 1, "card-img-top", 3, "src", "alt"], [1, "card-body"], [1, "card-title"], ["type", "button", "data-toggle", "modal", "data-target", "#ComicModal", 1, "btn", "btn-danger", 3, "click"], [1, "card-footer"], [1, "text-muted"]], template: function CardComicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CardComicComponent_Template_button_click_5_listener() { return ctx.getComicDetail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "VIEW MORE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", ctx.comic.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.comic.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.comic.format);
    } }, encapsulation: 2 });


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map