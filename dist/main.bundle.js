webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/admin/admin-routing/admin-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__cadastro_usuarios_usuarios_component__ = __webpack_require__("../../../../../src/app/cadastro/usuarios/usuarios.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cadastro_permissao_permissao_component__ = __webpack_require__("../../../../../src/app/cadastro/permissao/permissao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__cadastro_modulo_modulo_component__ = __webpack_require__("../../../../../src/app/cadastro/modulo/modulo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cadastro_funcionalidade_funcionalidade_component__ = __webpack_require__("../../../../../src/app/cadastro/funcionalidade/funcionalidade.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cadastro_cliente_cliente_cliente_component__ = __webpack_require__("../../../../../src/app/cadastro/cliente/cliente/cliente.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AdminRoutingModule = (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["RouterModule"].forChild([
                    {
                        path: 'admin',
                        component: __WEBPACK_IMPORTED_MODULE_1__admin_component__["a" /* AdminComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]], canActivateChild: [__WEBPACK_IMPORTED_MODULE_2__guards_auth_guard__["a" /* AuthGuard */]],
                        children: [
                            {
                                path: '',
                                redirectTo: 'dashboard',
                                pathMatch: 'full'
                            },
                            {
                                path: 'dashboard',
                                component: __WEBPACK_IMPORTED_MODULE_3__dashboard_dashboard_component__["a" /* DashboardComponent */]
                            },
                            {
                                path: 'usuarios',
                                component: __WEBPACK_IMPORTED_MODULE_5__cadastro_usuarios_usuarios_component__["a" /* UsuariosComponent */]
                            },
                            {
                                path: 'permissao',
                                component: __WEBPACK_IMPORTED_MODULE_6__cadastro_permissao_permissao_component__["a" /* PermissaoComponent */]
                            },
                            {
                                path: 'modulo',
                                component: __WEBPACK_IMPORTED_MODULE_7__cadastro_modulo_modulo_component__["a" /* ModuloComponent */]
                            },
                            {
                                path: 'funcionalidade',
                                component: __WEBPACK_IMPORTED_MODULE_8__cadastro_funcionalidade_funcionalidade_component__["a" /* FuncionalidadeComponent */]
                            },
                            {
                                path: 'cliente',
                                component: __WEBPACK_IMPORTED_MODULE_9__cadastro_cliente_cliente_cliente_component__["a" /* ClienteComponent */]
                            }
                        ]
                    }
                ])
            ],
            declarations: [],
            exports: [__WEBPACK_IMPORTED_MODULE_4__angular_router__["RouterModule"]]
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/admin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuMode;
(function (MenuMode) {
    MenuMode[MenuMode["STATIC"] = 0] = "STATIC";
    MenuMode[MenuMode["OVERLAY"] = 1] = "OVERLAY";
    MenuMode[MenuMode["SLIM"] = 2] = "SLIM";
})(MenuMode || (MenuMode = {}));
;
var AdminComponent = (function () {
    function AdminComponent(renderer) {
        this.renderer = renderer;
        this.menu = MenuMode.STATIC;
        this.layout = 'default';
    }
    AdminComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.documentClickListener = this.renderer.listenGlobal('body', 'click', function (event) {
            if (!_this.menuClick && !_this.menuButtonClick) {
                _this.mobileMenuActive = false;
                _this.overlayMenuActive = false;
                _this.resetSlim = true;
            }
            if (!_this.topbarMenuClick && !_this.topbarMenuButtonClick) {
                _this.topbarMenuActive = false;
            }
            _this.menuClick = false;
            _this.menuButtonClick = false;
            _this.topbarMenuClick = false;
            _this.topbarMenuButtonClick = false;
        });
    };
    AdminComponent.prototype.onMenuButtonClick = function (event) {
        this.menuButtonClick = true;
        if (this.isMobile()) {
            this.mobileMenuActive = !this.mobileMenuActive;
        }
        else {
            if (this.staticMenu)
                this.staticMenuInactive = !this.staticMenuInactive;
            else if (this.overlayMenu)
                this.overlayMenuActive = !this.overlayMenuActive;
        }
        event.preventDefault();
    };
    AdminComponent.prototype.onTopbarMenuButtonClick = function (event) {
        this.topbarMenuButtonClick = true;
        this.topbarMenuActive = !this.topbarMenuActive;
        event.preventDefault();
    };
    AdminComponent.prototype.onTopbarItemClick = function (event, item) {
        if (this.activeTopbarItem === item)
            this.activeTopbarItem = null;
        else
            this.activeTopbarItem = item;
        event.preventDefault();
    };
    AdminComponent.prototype.onTopbarMenuClick = function (event) {
        this.topbarMenuClick = true;
    };
    AdminComponent.prototype.onMenuClick = function (event) {
        this.menuClick = true;
        this.resetSlim = false;
    };
    Object.defineProperty(AdminComponent.prototype, "slimMenu", {
        get: function () {
            return this.menu === MenuMode.SLIM;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdminComponent.prototype, "overlayMenu", {
        get: function () {
            return this.menu === MenuMode.OVERLAY;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AdminComponent.prototype, "staticMenu", {
        get: function () {
            return this.menu === MenuMode.STATIC;
        },
        enumerable: true,
        configurable: true
    });
    AdminComponent.prototype.changeToSlimMenu = function () {
        this.menu = MenuMode.SLIM;
    };
    AdminComponent.prototype.changeToOverlayMenu = function () {
        this.menu = MenuMode.OVERLAY;
    };
    AdminComponent.prototype.changeToStaticMenu = function () {
        this.menu = MenuMode.STATIC;
    };
    AdminComponent.prototype.isMobile = function () {
        return window.innerWidth < 640;
    };
    AdminComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__("../../../../../src/app/admin/admin.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/admin.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "../../../../../src/app/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__admin_component__ = __webpack_require__("../../../../../src/app/admin/admin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_routing_admin_routing_module__ = __webpack_require__("../../../../../src/app/admin/admin-routing/admin-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_module__ = __webpack_require__("../../../../../src/app/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/admin/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_profile_component__ = __webpack_require__("../../../../../src/app/app.profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_rightpanel_component__ = __webpack_require__("../../../../../src/app/app.rightpanel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_breadcrumb_component__ = __webpack_require__("../../../../../src/app/app.breadcrumb.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_footer_component__ = __webpack_require__("../../../../../src/app/app.footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_topbar_component__ = __webpack_require__("../../../../../src/app/app.topbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_menu_component__ = __webpack_require__("../../../../../src/app/app.menu.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AdminModule = (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__auth_auth_module__["a" /* AuthModule */],
                __WEBPACK_IMPORTED_MODULE_3__admin_routing_admin_routing_module__["a" /* AdminRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_2__admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__app_menu_component__["a" /* AppMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_11__app_menu_component__["b" /* AppSubMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_10__app_topbar_component__["a" /* AppTopbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__app_footer_component__["a" /* AppFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__app_breadcrumb_component__["a" /* AppBreadcrumbComponent */],
                __WEBPACK_IMPORTED_MODULE_7__app_rightpanel_component__["a" /* AppRightpanelComponent */],
                __WEBPACK_IMPORTED_MODULE_6__app_profile_component__["a" /* AppInlineProfileComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_2__admin_component__["a" /* AdminComponent */],
                __WEBPACK_IMPORTED_MODULE_5__dashboard_dashboard_component__["a" /* DashboardComponent */],
                __WEBPACK_IMPORTED_MODULE_11__app_menu_component__["a" /* AppMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_11__app_menu_component__["b" /* AppSubMenuComponent */],
                __WEBPACK_IMPORTED_MODULE_10__app_topbar_component__["a" /* AppTopbarComponent */],
                __WEBPACK_IMPORTED_MODULE_9__app_footer_component__["a" /* AppFooterComponent */],
                __WEBPACK_IMPORTED_MODULE_8__app_breadcrumb_component__["a" /* AppBreadcrumbComponent */],
                __WEBPACK_IMPORTED_MODULE_7__app_rightpanel_component__["a" /* AppRightpanelComponent */],
                __WEBPACK_IMPORTED_MODULE_6__app_profile_component__["a" /* AppInlineProfileComponent */]
            ]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "../../../../../src/app/admin/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n \n\n"

/***/ }),

/***/ "../../../../../src/app/admin/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/admin/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/admin/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/admin/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_login_login_component__ = __webpack_require__("../../../../../src/app/auth/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["RouterModule"].forRoot([
                    { path: '', redirectTo: 'admin', pathMatch: 'full' },
                    { path: 'auth/login', component: __WEBPACK_IMPORTED_MODULE_3__auth_login_login_component__["a" /* LoginComponent */] },
                ]),
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.breadcrumb.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"layout-breadcrumb\">\n    <ul>\n        <li>\n            <a routerLink=\"\">\n                <i class=\"material-icons\">home</i>\n            </a>\n        </li>\n        <li>/</li>\n        <ng-template ngFor let-item let-last=\"last\" [ngForOf]=\"items\">\n            <li>\n                <a [routerLink]=\"item.routerLink\" *ngIf=\"item.routerLink\">{{item.label}}</a>\n                <ng-container *ngIf=\"!item.routerLink\">{{item.label}}</ng-container>\n            </li>\n            <li *ngIf=\"!last\">/</li>\n        </ng-template>\n    </ul>\n\n    <div class=\"layout-breadcrumb-options\">\n        <a href=\"#\" (click)=\"logout($event)\">\n            <i class=\"material-icons\">power_settings_new</i>\n        </a>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.breadcrumb.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppBreadcrumbComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_services_auth_service__ = __webpack_require__("../../../../../src/app/auth/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__breadcrumb_service__ = __webpack_require__("../../../../../src/app/breadcrumb.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppBreadcrumbComponent = (function () {
    function AppBreadcrumbComponent(breadcrumbService, auth) {
        var _this = this;
        this.breadcrumbService = breadcrumbService;
        this.auth = auth;
        this.subscription = breadcrumbService.itemsHandler.subscribe(function (response) {
            _this.items = response;
        });
    }
    AppBreadcrumbComponent.prototype.logout = function (e) {
        e.preventDefault();
        this.auth.logout();
    };
    AppBreadcrumbComponent.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    AppBreadcrumbComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-breadcrumb',
            template: __webpack_require__("../../../../../src/app/app.breadcrumb.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__breadcrumb_service__["a" /* BreadcrumbService */], __WEBPACK_IMPORTED_MODULE_0__auth_services_auth_service__["a" /* AuthService */]])
    ], AppBreadcrumbComponent);
    return AppBreadcrumbComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"layout-wrapper\" [ngClass]=\"{'layout-compact':layoutCompact}\" (click)=\"onLayoutClick()\">\n\n    <div #layoutContainer class=\"layout-container\"\n            [ngClass]=\"{'menu-layout-static': !isOverlay(),\n            'menu-layout-overlay': isOverlay(),\n            'layout-menu-overlay-active': overlayMenuActive,\n            'menu-layout-horizontal': isHorizontal(),\n            'menu-layout-slim': isSlim(),\n            'layout-menu-static-inactive': staticMenuDesktopInactive,\n            'layout-menu-static-active': staticMenuMobileActive}\">\n\n        <app-topbar *ngIf=\"auth.getUser()\"></app-topbar>\n\n        <div class=\"layout-menu\" [ngClass]=\"{'layout-menu-dark':darkMenu}\" (click)=\"onMenuClick($event)\" *ngIf=\"auth.getUser()\">\n            <div #layoutMenuScroller class=\"nano\">\n                <div class=\"nano-content menu-scroll-content\">\n                    <app-inline-profile *ngIf=\"profileMode=='inline'&&!isHorizontal()\"></app-inline-profile>\n                    <app-menu [reset]=\"resetMenu\" *ngIf=\"auth.getUser()\"></app-menu>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"layout-main\">\n            <app-breadcrumb *ngIf=\"auth.getUser()\"></app-breadcrumb>\n\n            <div class=\"layout-content\">\n              <router-outlet *ngIf=\"auth.getUser()\"></router-outlet>\n                <app-login *ngIf=\"!auth.getUser()\"></app-login>\n\n            </div>\n             <app-footer *ngIf=\"auth.getUser()\"></app-footer>\n        </div>\n\n\n        <p-confirmDialog header=\"Confirmação\" icon=\"ui-icon-delete\" #confirmacao [width]=\"340\">\n            <p-footer>\n              <button type=\"button\" pButton icon=\"fa-check\" label=\"Sim\"\n                (click)=\"confirmacao.accept()\"></button>\n              <button type=\"button\" pButton icon=\"ui-icon-close\" label=\"Não\"\n              class=\"ui-button-danger\"\n                (click)=\"confirmacao.reject()\"></button>\n            </p-footer>\n          </p-confirmDialog>\n\n\n        <app-rightpanel></app-rightpanel>\n\n        <div class=\"layout-mask\"></div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".avatar {\n  border-radius: 50%; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_services_auth_service__ = __webpack_require__("../../../../../src/app/auth/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuOrientation;
(function (MenuOrientation) {
    MenuOrientation[MenuOrientation["STATIC"] = 0] = "STATIC";
    MenuOrientation[MenuOrientation["OVERLAY"] = 1] = "OVERLAY";
    MenuOrientation[MenuOrientation["SLIM"] = 2] = "SLIM";
    MenuOrientation[MenuOrientation["HORIZONTAL"] = 3] = "HORIZONTAL";
})(MenuOrientation || (MenuOrientation = {}));
var AppComponent = (function () {
    function AppComponent(renderer, auth) {
        this.renderer = renderer;
        this.auth = auth;
        this.layoutCompact = true;
        this.layoutMode = MenuOrientation.OVERLAY;
        this.darkMenu = false;
        this.profileMode = 'inline';
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.layoutContainer = this.layourContainerViewChild.nativeElement;
        this.layoutMenuScroller = this.layoutMenuScrollerViewChild.nativeElement;
        setTimeout(function () {
            jQuery(_this.layoutMenuScroller).nanoScroller({ flash: true });
        }, 10);
    };
    AppComponent.prototype.onLayoutClick = function () {
        if (!this.topbarItemClick) {
            this.activeTopbarItem = null;
            this.topbarMenuActive = false;
        }
        if (!this.menuClick) {
            if (this.isHorizontal() || this.isSlim()) {
                this.resetMenu = true;
            }
            if (this.overlayMenuActive || this.staticMenuMobileActive) {
                this.hideOverlayMenu();
            }
            this.menuHoverActive = false;
        }
        if (!this.rightPanelClick) {
            this.rightPanelActive = false;
        }
        this.topbarItemClick = false;
        this.menuClick = false;
        this.rightPanelClick = false;
    };
    AppComponent.prototype.onMenuButtonClick = function (event) {
        this.menuClick = true;
        this.rotateMenuButton = !this.rotateMenuButton;
        this.topbarMenuActive = false;
        if (this.layoutMode === MenuOrientation.OVERLAY) {
            this.overlayMenuActive = !this.overlayMenuActive;
        }
        else {
            if (this.isDesktop()) {
                this.staticMenuDesktopInactive = !this.staticMenuDesktopInactive;
            }
            else {
                this.staticMenuMobileActive = !this.staticMenuMobileActive;
            }
        }
        event.preventDefault();
    };
    AppComponent.prototype.onMenuClick = function ($event) {
        var _this = this;
        this.menuClick = true;
        this.resetMenu = false;
        if (!this.isHorizontal()) {
            setTimeout(function () {
                jQuery(_this.layoutMenuScroller).nanoScroller();
            }, 500);
        }
    };
    AppComponent.prototype.onTopbarMenuButtonClick = function (event) {
        this.topbarItemClick = true;
        this.topbarMenuActive = !this.topbarMenuActive;
        this.hideOverlayMenu();
        event.preventDefault();
    };
    AppComponent.prototype.onTopbarItemClick = function (event, item) {
        this.topbarItemClick = true;
        if (this.activeTopbarItem === item) {
            this.activeTopbarItem = null;
        }
        else {
            this.activeTopbarItem = item;
        }
        event.preventDefault();
    };
    AppComponent.prototype.onRightPanelButtonClick = function (event) {
        this.rightPanelClick = true;
        this.rightPanelActive = !this.rightPanelActive;
        event.preventDefault();
    };
    AppComponent.prototype.onRightPanelClick = function () {
        this.rightPanelClick = true;
    };
    AppComponent.prototype.hideOverlayMenu = function () {
        this.rotateMenuButton = false;
        this.overlayMenuActive = false;
        this.staticMenuMobileActive = false;
    };
    AppComponent.prototype.isTablet = function () {
        var width = window.innerWidth;
        return width <= 1024 && width > 640;
    };
    AppComponent.prototype.isDesktop = function () {
        return window.innerWidth > 1024;
    };
    AppComponent.prototype.isMobile = function () {
        return window.innerWidth <= 640;
    };
    AppComponent.prototype.isOverlay = function () {
        return this.layoutMode === MenuOrientation.OVERLAY;
    };
    AppComponent.prototype.isHorizontal = function () {
        return this.layoutMode === MenuOrientation.HORIZONTAL;
    };
    AppComponent.prototype.isSlim = function () {
        return this.layoutMode === MenuOrientation.SLIM;
    };
    AppComponent.prototype.changeToStaticMenu = function () {
        this.layoutMode = MenuOrientation.STATIC;
    };
    AppComponent.prototype.changeToOverlayMenu = function () {
        this.layoutMode = MenuOrientation.OVERLAY;
    };
    AppComponent.prototype.changeToHorizontalMenu = function () {
        this.layoutMode = MenuOrientation.HORIZONTAL;
    };
    AppComponent.prototype.changeToSlimMenu = function () {
        this.layoutMode = MenuOrientation.SLIM;
    };
    AppComponent.prototype.ngOnDestroy = function () {
        jQuery(this.layoutMenuScroller).nanoScroller({ flash: true });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('layoutContainer'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
    ], AppComponent.prototype, "layourContainerViewChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])('layoutMenuScroller'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_core__["ElementRef"])
    ], AppComponent.prototype, "layoutMenuScrollerViewChild", void 0);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_core__["Renderer"], __WEBPACK_IMPORTED_MODULE_0__auth_services_auth_service__["a" /* AuthService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.error-handle.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AplicationErrorHandle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AplicationErrorHandle = (function (_super) {
    __extends(AplicationErrorHandle, _super);
    function AplicationErrorHandle(injector) {
        var _this = _super.call(this) || this;
        _this.injector = injector;
        return _this;
    }
    AplicationErrorHandle.prototype.handleError = function (errorResponse) {
        if (errorResponse instanceof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpErrorResponse */]) {
            var error = (typeof errorResponse.error !== 'object') ? JSON.parse(errorResponse.error) : errorResponse.error;
            if (errorResponse.status === 400 &&
                (error.error === 'token_expired' || error.error === 'token_invalid' ||
                    error.error === 'A token is required' || error.error === 'token_not_provided')) {
                this.goToLogin();
            }
            if (errorResponse.status === 401 && error.error === 'token_has_been_blacklisted') {
                this.goToLogin();
            }
        }
        _super.prototype.handleError.call(this, errorResponse);
    };
    AplicationErrorHandle.prototype.goToLogin = function () {
        var router = this.injector.get(__WEBPACK_IMPORTED_MODULE_0__angular_router__["Router"]);
        router.navigate(['auth/login']);
    };
    AplicationErrorHandle = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injector"]])
    ], AplicationErrorHandle);
    return AplicationErrorHandle;
}(__WEBPACK_IMPORTED_MODULE_2__angular_core__["ErrorHandler"]));



/***/ }),

/***/ "../../../../../src/app/app.footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppFooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppFooterComponent = (function () {
    function AppFooterComponent() {
    }
    AppFooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: "\n        <div class=\"footer\">\n            <div class=\"card clearfix\">\n                <span class=\"footer-text-left\">SING - Sistema Integrado NewsGps </span>\n                <span class=\"footer-text-right\">\n                    <span>Copyright</span>\n                    <span class=\"material-icons ui-icon-copyright\"></span>\n                    <span>2018 Todos os direitos reservados.</span>\n                </span>\n            </div>\n        </div>\n    "
        })
    ], AppFooterComponent);
    return AppFooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppMenuComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return AppSubMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppMenuComponent = (function () {
    function AppMenuComponent(app) {
        this.app = app;
    }
    AppMenuComponent.prototype.ngOnInit = function () {
        this.model = [
            { label: 'Página Inicial', icon: 'home', routerLink: ['admin/dashboard'] },
            {
                label: 'Usuários', icon: 'person  ',
                items: [
                    { label: 'Cadastrar Usuários', icon: 'send', routerLink: ['admin/usuarios'] },
                ]
            },
            {
                label: 'Permissões', icon: 'lock',
                items: [
                    { label: 'Permissões', icon: 'send', routerLink: ['admin/permissao'] },
                    { label: 'Modulos', icon: 'send', routerLink: ['admin/modulo'] },
                    { label: 'Funcionalidades', icon: 'send', routerLink: ['admin/funcionalidade'] },
                ]
            },
            {
                label: 'Clientes', icon: 'domain',
                items: [
                    { label: 'Cadastrar clientes', icon: 'send', routerLink: ['admin/cliente'] },
                ]
            },
            {
                label: 'Veiculos', icon: 'train',
                items: [
                    { label: 'Cadastrar veículo', icon: 'send', routerLink: ['/usuario'] }
                ]
            },
            { label: 'Funcionário', icon: 'people', routerLink: ['/pessoa'] }
        ];
    };
    AppMenuComponent.prototype.changeTheme = function (theme) {
        var themeLink = document.getElementById('theme-css');
        var layoutLink = document.getElementById('layout-css');
        themeLink.href = 'assets/theme/theme-' + theme + '.css';
        layoutLink.href = 'assets/layout/css/layout-' + theme + '.css';
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], AppMenuComponent.prototype, "reset", void 0);
    AppMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menu',
            template: "\n        <ul app-submenu [item]=\"model\" root=\"true\" class=\"ultima-menu ultima-main-menu clearfix\" [reset]=\"reset\" visible=\"true\"></ul>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]])
    ], AppMenuComponent);
    return AppMenuComponent;
}());

var AppSubMenuComponent = (function () {
    function AppSubMenuComponent(app) {
        this.app = app;
    }
    AppSubMenuComponent.prototype.itemClick = function (event, item, index) {
        if (this.root) {
            this.app.menuHoverActive = !this.app.menuHoverActive;
        }
        // avoid processing disabled items
        if (item.disabled) {
            event.preventDefault();
            return true;
        }
        // activate current item and deactivate active sibling if any
        this.activeIndex = (this.activeIndex === index) ? null : index;
        // execute command
        if (item.command) {
            item.command({ originalEvent: event, item: item });
        }
        // prevent hash change
        if (item.items || (!item.url && !item.routerLink)) {
            event.preventDefault();
        }
        // hide menu
        if (!item.items) {
            if (this.app.isHorizontal() || this.app.isSlim()) {
                this.app.resetMenu = true;
            }
            else {
                this.app.resetMenu = false;
            }
            this.app.overlayMenuActive = false;
            this.app.staticMenuMobileActive = false;
            this.app.menuHoverActive = !this.app.menuHoverActive;
        }
    };
    AppSubMenuComponent.prototype.onMouseEnter = function (index) {
        if (this.root && this.app.menuHoverActive && (this.app.isHorizontal() || this.app.isSlim())) {
            this.activeIndex = index;
        }
    };
    AppSubMenuComponent.prototype.isActive = function (index) {
        return this.activeIndex === index;
    };
    Object.defineProperty(AppSubMenuComponent.prototype, "reset", {
        get: function () {
            return this._reset;
        },
        set: function (val) {
            this._reset = val;
            if (this._reset && (this.app.isHorizontal() || this.app.isSlim())) {
                this.activeIndex = null;
            }
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AppSubMenuComponent.prototype, "item", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], AppSubMenuComponent.prototype, "root", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], AppSubMenuComponent.prototype, "visible", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AppSubMenuComponent.prototype, "reset", null);
    AppSubMenuComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            /* tslint:disable:component-selector */
            selector: '[app-submenu]',
            /* tslint:enable:component-selector */
            template: "\n        <ng-template ngFor let-child let-i=\"index\" [ngForOf]=\"(root ? item : item.items)\">\n            <li [ngClass]=\"{'active-menuitem': isActive(i)}\" [class]=\"child.badgeStyleClass\" *ngIf=\"child.visible === false ? false : true\">\n                <a [href]=\"child.url||'#'\" (click)=\"itemClick($event,child,i)\" (mouseenter)=\"onMouseEnter(i)\"\n                   class=\"ripplelink\" *ngIf=\"!child.routerLink\"\n                    [attr.tabindex]=\"!visible ? '-1' : null\" [attr.target]=\"child.target\">\n                    <i *ngIf=\"child.icon\" class=\"material-icons\">{{child.icon}}</i>\n                    <span>{{child.label}}</span>\n                    <span class=\"menuitem-badge\" *ngIf=\"child.badge\">{{child.badge}}</span>\n                    <i class=\"material-icons submenu-icon\" *ngIf=\"child.items\">keyboard_arrow_down</i>\n                </a>\n\n                <a (click)=\"itemClick($event,child,i)\" (mouseenter)=\"onMouseEnter(i)\" class=\"ripplelink\" *ngIf=\"child.routerLink\"\n                    [routerLink]=\"child.routerLink\" routerLinkActive=\"active-menuitem-routerlink\"\n                   [routerLinkActiveOptions]=\"{exact: true}\" [attr.tabindex]=\"!visible ? '-1' : null\" [attr.target]=\"child.target\">\n                    <i *ngIf=\"child.icon\" class=\"material-icons\">{{child.icon}}</i>\n                    <span>{{child.label}}</span>\n                    <span class=\"menuitem-badge\" *ngIf=\"child.badge\">{{child.badge}}</span>\n                    <i class=\"material-icons submenu-icon\" *ngIf=\"child.items\">keyboard_arrow_down</i>\n                </a>\n                <div class=\"layout-menu-tooltip\">\n                    <div class=\"layout-menu-tooltip-arrow\"></div>\n                    <div class=\"layout-menu-tooltip-text\">{{child.label}}</div>\n                </div>\n                <ul app-submenu [item]=\"child\" *ngIf=\"child.items\" [visible]=\"isActive(i)\" [reset]=\"reset\"\n                    [@children]=\"(app.isSlim()||app.isHorizontal())&&root ? isActive(i) ?\n                    'visible' : 'hidden' : isActive(i) ? 'visibleAnimated' : 'hiddenAnimated'\"></ul>\n            </li>\n        </ng-template>\n    ",
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["trigger"])('children', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('hiddenAnimated', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                        height: '0px'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('visibleAnimated', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                        height: '*'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('visible', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                        height: '*'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["state"])('hidden', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["style"])({
                        height: '0px'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('visibleAnimated => hiddenAnimated', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["transition"])('hiddenAnimated => visibleAnimated', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]])
    ], AppSubMenuComponent);
    return AppSubMenuComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_routing_app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pessoas_pessoa_module__ = __webpack_require__("../../../../../src/app/pessoas/pessoa.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_currency_mask__ = __webpack_require__("../../../../ng2-currency-mask/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng2_currency_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng2_currency_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__demo_view_dashboarddemo_component__ = __webpack_require__("../../../../../src/app/demo/view/dashboarddemo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__demo_view_sampledemo_component__ = __webpack_require__("../../../../../src/app/demo/view/sampledemo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__demo_view_formsdemo_component__ = __webpack_require__("../../../../../src/app/demo/view/formsdemo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__demo_view_datademo_component__ = __webpack_require__("../../../../../src/app/demo/view/datademo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__demo_view_panelsdemo_component__ = __webpack_require__("../../../../../src/app/demo/view/panelsdemo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__demo_view_overlaysdemo_component__ = __webpack_require__("../../../../../src/app/demo/view/overlaysdemo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__demo_view_menusdemo_component__ = __webpack_require__("../../../../../src/app/demo/view/menusdemo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__demo_view_messagesdemo_component__ = __webpack_require__("../../../../../src/app/demo/view/messagesdemo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__demo_view_miscdemo_component__ = __webpack_require__("../../../../../src/app/demo/view/miscdemo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__demo_view_emptydemo_component__ = __webpack_require__("../../../../../src/app/demo/view/emptydemo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__demo_view_chartsdemo_component__ = __webpack_require__("../../../../../src/app/demo/view/chartsdemo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__demo_view_filedemo_component__ = __webpack_require__("../../../../../src/app/demo/view/filedemo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__demo_view_utilsdemo_component__ = __webpack_require__("../../../../../src/app/demo/view/utilsdemo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__demo_view_documentation_component__ = __webpack_require__("../../../../../src/app/demo/view/documentation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__demo_service_carservice__ = __webpack_require__("../../../../../src/app/demo/service/carservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__demo_service_countryservice__ = __webpack_require__("../../../../../src/app/demo/service/countryservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__demo_service_eventservice__ = __webpack_require__("../../../../../src/app/demo/service/eventservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__demo_service_nodeservice__ = __webpack_require__("../../../../../src/app/demo/service/nodeservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__breadcrumb_service__ = __webpack_require__("../../../../../src/app/breadcrumb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__admin_admin_module__ = __webpack_require__("../../../../../src/app/admin/admin.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__auth_auth_module__ = __webpack_require__("../../../../../src/app/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__auth_services_auth_service__ = __webpack_require__("../../../../../src/app/auth/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__guards_auth_guard__ = __webpack_require__("../../../../../src/app/guards/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__interceptors_token_interceptor__ = __webpack_require__("../../../../../src/app/interceptors/token.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__interceptors_refresh_token_interceptor__ = __webpack_require__("../../../../../src/app/interceptors/refresh-token.interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__app_error_handle__ = __webpack_require__("../../../../../src/app/app.error-handle.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__cadastro_cadastro_module__ = __webpack_require__("../../../../../src/app/cadastro/cadastro.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__cadastro_usuarios_services_usuario_service__ = __webpack_require__("../../../../../src/app/cadastro/usuarios/services/usuario.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__cadastro_permissao_services_permissao_service__ = __webpack_require__("../../../../../src/app/cadastro/permissao/services/permissao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__cadastro_modulo_services_modulo_service__ = __webpack_require__("../../../../../src/app/cadastro/modulo/services/modulo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__cadastro_funcionalidade_services_funcionalidade_service__ = __webpack_require__("../../../../../src/app/cadastro/funcionalidade/services/funcionalidade.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__angular_common_locales_pt__ = __webpack_require__("../../../common/locales/pt.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//import {AppRoutes} from './app.routes';




































































/*import {AppMenuComponent, AppSubMenuComponent} from './app.menu.component';
import {AppTopbarComponent} from './app.topbar.component';
import {AppFooterComponent} from './app.footer.component';
import {AppBreadcrumbComponent } from './app.breadcrumb.component';
import {AppRightpanelComponent} from './app.rightpanel.component';
import {AppInlineProfileComponent} from './app.profile.component';*/































// Resolve o problema de saida de datas


Object(__WEBPACK_IMPORTED_MODULE_7__angular_common__["registerLocaleData"])(__WEBPACK_IMPORTED_MODULE_44__angular_common_locales_pt__["a" /* default */]);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_32__admin_admin_module__["a" /* AdminModule */],
                __WEBPACK_IMPORTED_MODULE_33__auth_auth_module__["a" /* AuthModule */],
                __WEBPACK_IMPORTED_MODULE_39__cadastro_cadastro_module__["a" /* CadastroModule */],
                __WEBPACK_IMPORTED_MODULE_0__app_routing_app_routing_module__["a" /* AppRoutingModule */],
                // Import PrimeNG modules
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["AccordionModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["AutoCompleteModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["BreadcrumbModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["CarouselModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["ChartModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["CheckboxModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["ChipsModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["CodeHighlighterModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["ConfirmDialogModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["ContextMenuModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["DataGridModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["DataListModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["DataScrollerModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["DragDropModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["EditorModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["FieldsetModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["GalleriaModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["GMapModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["GrowlModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["InputMaskModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["InputSwitchModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["InputTextModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["InputTextareaModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["LightboxModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["ListboxModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["MegaMenuModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["MenuModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["MenubarModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["MessagesModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["MultiSelectModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["OrderListModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["OverlayPanelModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["PaginatorModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["PanelModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["PanelMenuModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["PasswordModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["PickListModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["ProgressBarModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["RadioButtonModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["RatingModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["ScheduleModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["SelectButtonModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["SlideMenuModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["SliderModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["SpinnerModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["SplitButtonModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["StepsModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["TabMenuModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["TabViewModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["TerminalModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["TieredMenuModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["ToggleButtonModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["ToolbarModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["TooltipModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["TreeModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["TreeTableModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["SharedModule"],
                __WEBPACK_IMPORTED_MODULE_10_ng2_currency_mask__["CurrencyMaskModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["BrowserModule"],
                // AppRoutes,
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["AccordionModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["AutoCompleteModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["BreadcrumbModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["CarouselModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["ColorPickerModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["ChartModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["CheckboxModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["ChipsModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["CodeHighlighterModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["ConfirmDialogModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["SharedModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["ContextMenuModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["DataGridModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["DataListModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["DataScrollerModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["DragDropModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["EditorModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["FieldsetModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["GalleriaModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["GMapModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["GrowlModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["InputMaskModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["InputSwitchModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["InputTextModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["InputTextareaModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["LightboxModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["ListboxModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["MegaMenuModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["MenuModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["MenubarModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["MessagesModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["MultiSelectModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["OrderListModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["OrganizationChartModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["OverlayPanelModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["PaginatorModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["PanelModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["PanelMenuModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["PasswordModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["PickListModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["ProgressBarModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["RadioButtonModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["RatingModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["ScheduleModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["SelectButtonModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["SlideMenuModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["SliderModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["SpinnerModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["SplitButtonModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["StepsModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["TabMenuModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["TabViewModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["TerminalModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["TieredMenuModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["ToggleButtonModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["ToolbarModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["TooltipModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["TreeModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["TreeTableModule"],
                __WEBPACK_IMPORTED_MODULE_2__core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_11_primeng_primeng__["SharedModule"],
                __WEBPACK_IMPORTED_MODULE_1__pessoas_pessoa_module__["a" /* PessoaModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */],
                /*  AppMenuComponent,
                  AppSubMenuComponent,
                  AppTopbarComponent,
                  AppFooterComponent,
                  AppBreadcrumbComponent,
                  AppRightpanelComponent,
                  AppInlineProfileComponent,*/
                __WEBPACK_IMPORTED_MODULE_13__demo_view_dashboarddemo_component__["a" /* DashboardDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_14__demo_view_sampledemo_component__["a" /* SampleDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_15__demo_view_formsdemo_component__["a" /* FormsDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_16__demo_view_datademo_component__["a" /* DataDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_17__demo_view_panelsdemo_component__["a" /* PanelsDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_18__demo_view_overlaysdemo_component__["a" /* OverlaysDemoComponent */], __WEBPACK_IMPORTED_MODULE_19__demo_view_menusdemo_component__["a" /* MenusDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_20__demo_view_messagesdemo_component__["a" /* MessagesDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_21__demo_view_miscdemo_component__["a" /* MiscDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_23__demo_view_chartsdemo_component__["a" /* ChartsDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_22__demo_view_emptydemo_component__["a" /* EmptyDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_24__demo_view_filedemo_component__["a" /* FileDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_25__demo_view_utilsdemo_component__["a" /* UtilsDemoComponent */],
                __WEBPACK_IMPORTED_MODULE_26__demo_view_documentation_component__["a" /* DocumentationComponent */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_7__angular_common__["LocationStrategy"], useClass: __WEBPACK_IMPORTED_MODULE_7__angular_common__["HashLocationStrategy"] },
                __WEBPACK_IMPORTED_MODULE_27__demo_service_carservice__["a" /* CarService */], __WEBPACK_IMPORTED_MODULE_28__demo_service_countryservice__["a" /* CountryService */], __WEBPACK_IMPORTED_MODULE_29__demo_service_eventservice__["a" /* EventService */], __WEBPACK_IMPORTED_MODULE_30__demo_service_nodeservice__["a" /* NodeService */], __WEBPACK_IMPORTED_MODULE_31__breadcrumb_service__["a" /* BreadcrumbService */],
                __WEBPACK_IMPORTED_MODULE_34__auth_services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_40__cadastro_usuarios_services_usuario_service__["a" /* UsuarioService */],
                __WEBPACK_IMPORTED_MODULE_35__guards_auth_guard__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_41__cadastro_permissao_services_permissao_service__["a" /* PermissaoService */],
                __WEBPACK_IMPORTED_MODULE_42__cadastro_modulo_services_modulo_service__["a" /* ModuloService */],
                __WEBPACK_IMPORTED_MODULE_43__cadastro_funcionalidade_services_funcionalidade_service__["a" /* FuncionalidadeService */],
                { provide: __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_36__interceptors_token_interceptor__["a" /* TokenInterceptor */], multi: true },
                { provide: __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_37__interceptors_refresh_token_interceptor__["a" /* RefreshTokenInterceptor */], multi: true },
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_38__app_error_handle__["a" /* AplicationErrorHandle */] },
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["LOCALE_ID"], useValue: 'pt-BR' }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppInlineProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__ = __webpack_require__("../../../../../src/app/auth/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppInlineProfileComponent = (function () {
    function AppInlineProfileComponent(auth) {
        this.auth = auth;
    }
    AppInlineProfileComponent.prototype.onClick = function (event) {
        this.active = !this.active;
        event.preventDefault();
    };
    //(click)="logout($event)
    AppInlineProfileComponent.prototype.logout = function (e) {
        e.preventDefault();
        this.auth.logout();
    };
    AppInlineProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-inline-profile',
            template: "\n        <div class=\"profile\" [ngClass]=\"{'profile-expanded':active}\">\n            <a href=\"#\" (click)=\"onClick($event)\">\n                <img class=\"profile-image avatar\" src=\"assets/layout/images/alexandre.jpg\" />\n                <span class=\"profile-name\">{{auth.getUser().name}}\n                </span>\n                <i class=\"material-icons\">keyboard_arrow_down</i>\n            </a>\n        </div>\n\n        <ul class=\"ultima-menu profile-menu\" [@menu]=\"active ? 'visible' : 'hidden'\">\n            <li role=\"menuitem\">\n                <a href=\"#\" class=\"ripplelink\" [attr.tabindex]=\"!active ? '-1' : null\">\n                    <i class=\"material-icons\">build</i>\n                    <span>Alterar senha</span>\n                </a>\n            </li>\n\n            <li role=\"menuitem\">\n                <a href=\"#\"  class=\"ripplelink\" [attr.tabindex]=\"!active ? '-1' : null\">\n                    <i class=\"material-icons\" power_settings_new></i>\n                    <span>Sair</span>\n                </a>\n            </li>\n        </ul>\n    ",
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["trigger"])('menu', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('hidden', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                        height: '0px'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["state"])('visible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["style"])({
                        height: '*'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('visible => hidden', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)')),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["transition"])('hidden => visible', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["animate"])('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__auth_services_auth_service__["a" /* AuthService */]])
    ], AppInlineProfileComponent);
    return AppInlineProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.rightpanel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRightpanelComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppRightpanelComponent = (function () {
    function AppRightpanelComponent(app) {
        this.app = app;
    }
    AppRightpanelComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.rightPanelMenuScroller = this.rightPanelMenuScrollerViewChild.nativeElement;
        setTimeout(function () {
            jQuery(_this.rightPanelMenuScroller).nanoScroller({ flash: true });
        }, 10);
    };
    AppRightpanelComponent.prototype.ngOnDestroy = function () {
        jQuery(this.rightPanelMenuScroller).nanoScroller({ flash: true });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('rightPanelMenuScroller'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])
    ], AppRightpanelComponent.prototype, "rightPanelMenuScrollerViewChild", void 0);
    AppRightpanelComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-rightpanel',
            template: "\n        <div class=\"layout-rightpanel\" [ngClass]=\"{'layout-rightpanel-active': app.rightPanelActive}\" (click)=\"app.onRightPanelClick()\">\n            <div #rightPanelMenuScroller class=\"nano\">\n                <div class=\"nano-content right-panel-scroll-content\">\n                    <div class=\"layout-rightpanel-header\">\n                        <div class=\"weather-day\">Wednesday</div>\n                        <div class=\"weather-date\">Jan 26</div>\n                    </div>\n\n                    <div class=\"layout-rightpanel-content\">\n                        <h1>Weather</h1>\n                        <h2>San Francisco, USA</h2>\n\n                        <div class=\"weather-today\">\n                            <span class=\"weather-today-value\">21&#8451;</span>\n                            <img src=\"assets/layout/images/dashboard/weather-icon-2.svg\" width=\"60\"/>\n                        </div>\n\n                        <ul class=\"weekly-weather\">\n                            <li>\n                                Thursday\n                                <img src=\"assets/layout/images/dashboard/weather-icon-1.svg\"/>\n                                <span class=\"weekly-weather-value\">24</span>\n                            </li>\n                            <li>\n                                Friday\n                                <img src=\"assets/layout/images/dashboard/weather-icon-3.svg\"/>\n                                <span class=\"weekly-weather-value\">19</span>\n                            </li>\n                            <li>\n                                Saturday\n                                <img src=\"assets/layout/images/dashboard/weather-icon-4.svg\"/>\n                                <span class=\"weekly-weather-value\">15</span>\n                            </li>\n                            <li>\n                                Sunday\n                                <img src=\"assets/layout/images/dashboard/weather-icon-1.svg\"/>\n                                <span class=\"weekly-weather-value\">24</span>\n                            </li>\n                            <li>\n                                Monday\n                                <img src=\"assets/layout/images/dashboard/weather-icon-2.svg\"/>\n                                <span class=\"weekly-weather-value\">21</span>\n                            </li>\n                            <li>\n                                Tuesday\n                                <img src=\"assets/layout/images/dashboard/weather-icon-3.svg\"/>\n                                <span class=\"weekly-weather-value\">20</span>\n                            </li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]])
    ], AppRightpanelComponent);
    return AppRightpanelComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.topbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppTopbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppTopbarComponent = (function () {
    function AppTopbarComponent(app) {
        this.app = app;
    }
    AppTopbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-topbar',
            template: "\n   \n        <div class=\"topbar clearfix\">\n            <div class=\"topbar-left\">\n                <div class=\"logo\">\n                <img src=\"assets/layout/images/logo2x.jpg\" width=\"93%\">\n                </div>\n            </div>\n\n            <div class=\"topbar-right\">\n                <a id=\"menu-button\" href=\"#\" (click)=\"app.onMenuButtonClick($event)\">\n                    <i></i>\n                </a>\n\n                <a id=\"rightpanel-menu-button\" href=\"#\" (click)=\"app.onRightPanelButtonClick($event)\">\n                    <i class=\"material-icons\">more_vert</i>\n                </a>\n\n                <a id=\"topbar-menu-button\" href=\"#\" (click)=\"app.onTopbarMenuButtonClick($event)\">\n                    <i class=\"material-icons\">menu</i>\n                </a>\n\n                <ul class=\"topbar-items animated fadeInDown\" [ngClass]=\"{'topbar-items-visible': app.topbarMenuActive}\">\n                   \n\n\n\n\n                    <li #messages [ngClass]=\"{'active-top-menu':app.activeTopbarItem === messages}\">\n                        <a href=\"#\" (click)=\"app.onTopbarItemClick($event,messages)\">\n                            <i class=\"topbar-icon material-icons animated swing\">notifications</i>\n                            <span class=\"topbar-badge animated rubberBand\">5</span>\n                            <span class=\"topbar-item-name\">Messages</span>\n                        </a>\n                        <ul class=\"ultima-menu animated fadeInDown\">\n                            <li role=\"menuitem\">\n                                <a href=\"#\" class=\"topbar-message\">\n                                    <img src=\"assets/layout/images/avatar1.png\" width=\"35\"/>\n                                    <span>O relat\u00F3rio esta pronto</span>\n                                </a>\n                            </li>\n                            <li role=\"menuitem\">\n                                <a href=\"#\" class=\"topbar-message\">\n                                    <img src=\"assets/layout/images/avatar2.png\" width=\"35\"/>\n                                    <span>Preciso falar com voc\u00EA</span>\n                                </a>\n                            </li>\n                            <li role=\"menuitem\">\n                                <a href=\"#\" class=\"topbar-message\">\n                                    <img src=\"assets/layout/images/avatar3.png\" width=\"35\"/>\n                                    <span>Como vai?</span>\n                                </a>\n                            </li>\n                            <li role=\"menuitem\">\n                                <a href=\"#\" class=\"topbar-message\">\n                                    <img src=\"assets/layout/images/avatar2.png\" width=\"35\"/>\n                                    <span>Ol\u00E1</span>\n                                </a>\n                            </li>\n                            <li role=\"menuitem\">\n                                <a href=\"#\" class=\"topbar-message\">\n                                    <img src=\"assets/layout/images/avatar4.png\" width=\"35\"/>\n                                    <span>Boleto  enviado por e-mail</span>\n                                </a>\n                            </li>\n                        </ul>\n                    </li>\n                   \n                  \n                </ul>\n            </div>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]])
    ], AppTopbarComponent);
    return AppTopbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login_component__ = __webpack_require__("../../../../../src/app/auth/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AuthModule = (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["c" /* HttpClientModule */]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_4__login_login_component__["a" /* LoginComponent */]]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html>\n\n<head>\n  <script>document.write('<base href=\"' + document.location + '\" />');</script>\n  <meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge\" />\n  <meta http-equiv=\"Content-Type\" content=\"text/html; charset=UTF-8\" />\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0\" />\n  <meta name=\"apple-mobile-web-app-capable\" content=\"yes\" />\n  <title>PrimeNG - ULTIMA</title>\n\n  <!-- Layout CSS -->\n\n\n  <!-- Ripple -->\n  <script src=\"assets/pages/jquery.js\"></script>\n  <script src=\"assets/layout/js/ripple.js\"></script>\n  <script type=\"text/javascript\">\n    $(function () {\n      $('input').on('blur', function (e) {\n        var el = $(this);\n        if (el.val() != '')\n          el.addClass('ui-state-filled');\n        else\n          el.removeClass('ui-state-filled');\n      });\n    });\n  </script>\n</head>\n\n<!-- 3. Display the application -->\n\n<body class=\"login-body\" *ngIf=\"!auth.getUser()\">\n  <form #f=\"ngForm\" (ngSubmit)=\"onSubmit(f)\">\n  <div class=\"card login-panel ui-fluid\">\n    <div class=\"ui-g\">\n      <div class=\"ui-g-12\">\n        <img src=\"assets/layout/images/logo-ultima.svg\">\n      </div>\n      <div class=\"ui-g-12\">\n        <span class=\"md-inputfield\">\n          <input type=\"text\" autocomplete=\"off\" class=\"ui-inputtext ui-corner-all ui-state-default ui-widget\" name=\"email\" [(ngModel)]=\"credenciais.email\">\n          <label>Username</label>\n        </span>\n      </div>\n      <div class=\"ui-g-12\">\n        <span class=\"md-inputfield\">\n          <input type=\"password\" autocomplete=\"off\" class=\"ui-inputtext ui-corner-all ui-state-default ui-widget\" name=\"password\" [(ngModel)]=\"credenciais.password\">\n          <label>Password</label>\n        </span>\n      </div>\n      <div class=\"ui-g-12\">\n        <button type=\"submit\" class=\"ui-button ui-widget ui-state-default ui-corner-all ui-button-text-icon-left\">\n          <span class=\"ui-button-icon-left ui-c fa fa-fw ui-icon-person\"></span>\n          <span class=\"ui-button-text ui-c\">Sign In</span>\n        </button>\n\n      </div>\n    </div>\n\n  </div>\n  </form>\n</body>\n\n</html>\n"

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/auth/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.credenciais = {
            email: '',
            password: '',
        };
        this.errorCredenciais = false;
    }
    LoginComponent.prototype.onSubmit = function (credenciais) {
        var _this = this;
        console.log(this.credenciais);
        this.auth.login(this.credenciais).subscribe(function (resp) {
            _this.router.navigate(['admin']);
        }, function (errorResponse) {
            //  console.log(errorResponse);
            if (errorResponse.status === 401) {
                _this.errorCredenciais = true;
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/auth/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/auth/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthService.prototype.check = function () {
        return localStorage.getItem('user') ? true : false;
    };
    AuthService.prototype.login = function (credenciais) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].urlBase + "/auth/login", credenciais)
            .do(function (data) {
            localStorage.setItem('token', data.token);
            //  localStorage.setItem('access_token', data.token);
            localStorage.setItem('user', btoa(JSON.stringify(data.user)));
        });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this.http.get(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].urlBase + "/auth/logout").subscribe(function (resp) {
            //this.http.get(`${environment.urlBase}/oauth/token`).subscribe(resp => { 
            console.log(resp);
            localStorage.clear();
            _this.router.navigate(['auth/login']);
        });
    };
    AuthService.prototype.getUser = function () {
        return localStorage.getItem('user') ? JSON.parse(atob(localStorage.getItem('user'))) : null;
    };
    AuthService.prototype.setUser = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_5__environments_environment__["a" /* environment */].urlBase + "/auth/user").toPromise()
            .then(function (data) {
            if (data.user) {
                localStorage.setItem('user', btoa(JSON.stringify(data.user)));
                return true;
            }
            return false;
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/breadcrumb.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BreadcrumbService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var BreadcrumbService = (function () {
    function BreadcrumbService() {
        this.itemsSource = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.itemsHandler = this.itemsSource.asObservable();
    }
    BreadcrumbService.prototype.setItems = function (items) {
        this.itemsSource.next(items);
    };
    BreadcrumbService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], BreadcrumbService);
    return BreadcrumbService;
}());



/***/ }),

/***/ "../../../../../src/app/cadastro/cadastro.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CadastroModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__usuarios_usuarios_component__ = __webpack_require__("../../../../../src/app/cadastro/usuarios/usuarios.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__permissao_permissao_component__ = __webpack_require__("../../../../../src/app/cadastro/permissao/permissao.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modulo_modulo_component__ = __webpack_require__("../../../../../src/app/cadastro/modulo/modulo.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__funcionalidade_funcionalidade_component__ = __webpack_require__("../../../../../src/app/cadastro/funcionalidade/funcionalidade.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__cliente_cliente_cliente_component__ = __webpack_require__("../../../../../src/app/cadastro/cliente/cliente/cliente.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







































































var CadastroModule = (function () {
    function CadastroModule() {
    }
    CadastroModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["AccordionModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["AutoCompleteModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["BreadcrumbModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["CarouselModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ChartModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["CheckboxModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ChipsModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["CodeHighlighterModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ConfirmDialogModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ContextMenuModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["DataGridModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["DataListModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["DataScrollerModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["DragDropModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["EditorModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["FieldsetModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["GalleriaModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["GMapModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["GrowlModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["InputMaskModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["InputSwitchModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["InputTextModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["InputTextareaModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["LightboxModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ListboxModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["MegaMenuModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["MenuModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["MenubarModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["MessagesModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["MultiSelectModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["OrderListModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["OverlayPanelModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["PaginatorModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["PanelModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["PanelMenuModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["PasswordModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["PickListModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ProgressBarModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["RadioButtonModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["RatingModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ScheduleModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["SelectButtonModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["SlideMenuModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["SliderModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["SpinnerModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["SplitButtonModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["StepsModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["TabMenuModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["TabViewModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["TerminalModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["TieredMenuModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ToggleButtonModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["ToolbarModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["TooltipModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["TreeModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_primeng__["TreeTableModule"],
                __WEBPACK_IMPORTED_MODULE_5__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__usuarios_usuarios_component__["a" /* UsuariosComponent */],
                __WEBPACK_IMPORTED_MODULE_6__permissao_permissao_component__["a" /* PermissaoComponent */],
                __WEBPACK_IMPORTED_MODULE_7__modulo_modulo_component__["a" /* ModuloComponent */],
                __WEBPACK_IMPORTED_MODULE_8__funcionalidade_funcionalidade_component__["a" /* FuncionalidadeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__cliente_cliente_cliente_component__["a" /* ClienteComponent */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_3__usuarios_usuarios_component__["a" /* UsuariosComponent */]]
        })
    ], CadastroModule);
    return CadastroModule;
}());



/***/ }),

/***/ "../../../../../src/app/cadastro/cliente/cliente/cliente.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cadastro/cliente/cliente/cliente.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n  <div class=\"ui-g-12\" style=\"margin-top: -15px;\">\n\n  <div class=\"card shadow-box ui-shadow-3\">\n\n  <form autocomplete=\"off\">\n\n  <p-growl [(value)]=\"msgs\" [sticky]=\"true\"></p-growl>\n\n  </form>\n\n  <p-toolbar>\n  <div class=\"ui-toolbar-group-left btnpanel ui-g-12 ui-md-12\">\n  <button pButton type=\"button\"   (click)=\" getUserSistema()\"  (click)=\"showDialogOpen(true,null)\" label=\"Novo cliente\" icon=\"ui-icon-domain\" class=\"btnNovo\" id=\"id-btnNovo\"></button>\n  <i class=\"material-icons btnIcon\" style=\"vertical-align:middle; color: #4d4948\">apps</i>\n  <p-splitButton icon=\"ui-icon-format-list-bulleted \" label=\"Acões relacionadas\" [model]=\"acoesRelacionadas\" styleClass=\"ui-button-warning  btnAcoes\"\n      id=\"id-btnAcoes\"></p-splitButton>\n\n\n  <div class=\"ui-g-12 ui-md-9\" class=\"pesquisar\" id=\"id-pesquisar\">\n      <div class=\"ui-inputgroup\">\n          <button pButton type=\"button\" icon=\"ui-icon-search\"></button>\n          <span class=\"md-inputfield\">\n              <input #gb type=\"text\" pInputText class=\"pesquisarInput\" (keyup)=\"listar()\">\n              <label>Pesquisar</label>\n          </span>\n      </div>\n  </div>\n  </div>\n\n  <div class=\"ui-toolbar-group-right btnpanel\">\n\n  </div>\n\n  </p-toolbar>\n\n\n\n  <p-panel>\n       <!--DATA TABLE-->\n        <p-dataTable\n        [value]=\"clientes\"\n        [paginator]=\"true\"\n        [rows]=\"10\"\n        [responsive]=\"true\"\n        [rowsPerPageOptions]=\"[3,5,10,20,30,50]\"\n        [globalFilter]=\"gb\"\n        selectionMode=\"single\"\n        [(selection)]=\"clienteSelecionado\"\n        dataKey=\"id\"\n        #table\n        emptyMessage=\"Nenhum registro encontrado\"\n        sortMode=\"multiple\"\n        (onRowSelect)=\"onRowSelect($event)\">\n\n\n      <p-column *ngFor=\"let col of cols\" [sortable]=\"true\" [field]=\"col.field\" [header]=\"col.header\"  [styleClass]=\"col.style\" [filter]=\"false\">\n          <ng-template let-cliente=\"rowData\" pTemplate=\"body\">\n\n\n            <div *ngIf=\"col.field=='nome'\">\n              <span>{{ cliente.nome }}</span>\n            </div>\n\n            <div *ngIf=\"col.field=='tipo_cliente'\">\n              <span  >{{ cliente.tipo_cliente }}</span>\n            </div>\n\n            <div *ngIf=\"col.field=='name_user'\">\n              <span  >{{ cliente.name_user}}</span>\n            </div>\n\n            <div *ngIf=\"col.field=='cnpj'\" >\n                <span  *ngIf=\"col.field=='cnpj'\">{{cliente.cnpj }}</span>\n                <span  *ngIf=\"col.field=='cnpj'\"> {{cliente.cpf }}</span>\n            </div>\n\n            <div *ngIf=\"col.field=='cpf'\" >\n              <span  *ngIf=\"col.field=='cpf'\"> {{cliente.cpf }}</span>\n            </div>\n\n            <div *ngIf=\"col.field=='telefone'\">\n                <span >{{ cliente.telefone === null ? cliente.celular : cliente.telefone}}</span>\n            </div>\n\n            <div *ngIf=\"col.field=='localidade'\">\n              <span>{{ cliente.localidade }} - {{ cliente.uf }}</span>\n            </div>\n\n            <div *ngIf=\"col.field=='status'\">\n                    <span [style.color]=\"cliente.status === 1 ? 'green' : 'red'\" style=\"col-status-cliente2\" >{{ cliente.status === 1 ? 'Ativo' : 'Inativo'}}</span>\n            </div>\n\n\n\n          </ng-template>\n      </p-column>\n\n      <p-column styleClass=\"col-opcoes\" header=\"AÇÕES\">\n          <ng-template let-cliente=\"rowData\" pTemplate=\"body\">\n              <button pButton icon=\"ui-icon-edit\" pTooltip=\"Editar\" type=\"submit\" tooltipPosition=\"top\" (click)=\"showDialogOpen(true,cliente.id)\"></button>\n              <button pButton icon=\"ui-icon-delete-forever\" pButton (click)=\"confirmarExclusao(cliente)\" pTooltip=\"Excluir\" tooltipPosition=\"top\"\n                  class=\"ui-button-danger\"></button>\n          </ng-template>\n      </p-column>\n\n      <p-footer class=\"totalRegistro\">Total: {{ table.totalRecords }}  registro(s)</p-footer>\n\n      <p-footer>\n        <div style=\"text-align:right\">\n            <p-multiSelect defaultLabel=\"Escolha\" selectedItemsLabel=\"{0} Itens selecionados\" [options]=\"columnOptions\" [(ngModel)]=\"cols\"></p-multiSelect>\n        </div>\n    </p-footer>\n     </p-dataTable>\n     <!--FIM DATATABLE-->\n  </p-panel>\n\n\n<!-- CAIXA DE DIALOGO -->\n<p-dialog header=\"Cadastro Cliente\" (onHide)=\"showDialogClose(false, form)\" [(visible)]=\"display\" modal=\"modal\"  [responsive]=\"true\" [width]=\"900\" [positionTop]=\"80\" >\n<form #form=\"ngForm\" autocomplete=\"off\" >\n<p-tabView  >\n\n<div class=\"ui-g\" *ngIf=\"dadosCliente\">\n\n<p-tabPanel header=\"Cliente\" leftIcon=\"ui-icon-domain\">\n<div class=\"ui-g-12\">\n    <div class=\"ui-g form-group\">\n\n\n\n\n\n\n\n\n    <div class=\"ui-g-12 ui-md-12 ui-lg-12 tipoEmpresa\" >\n        <div class=\"ui-g-12\">\n            <p-radioButton *ngIf=\"mostraOpcaoTipoEmpresaPJ\" name=\"group1\" value=\"PJ\" label=\"Empresa\" [(ngModel)]=\"dadosCliente.tipo_cliente\" inputId=\"opt1\"></p-radioButton>\n            <p-radioButton *ngIf=\"mostraOpcaoTipoEmpresaPF\" name=\"group1\" value=\"PF\" label=\"Pessoa física\" [(ngModel)]=\"dadosCliente.tipo_cliente\" inputId=\"opt2\"></p-radioButton>\n        </div>\n    </div>\n\n\n    <div class=\"ui-g-12 ui-md-12 ui-lg-12 statusEmpresa \" >\n        <div class=\"ui-inputgroup\">\n            <label class=\"labelFormulario\">{{ dadosCliente.status == true ? 'Ativo' : 'Inativo'}}</label>\n            <p-inputSwitch  [(ngModel)]=\"dadosCliente.status\" [ngModelOptions]=\"{standalone: 1}\"></p-inputSwitch>\n        </div>\n    </div>\n\n    <div class=\"ui-g-12 ui-md-12 ui-lg-6\">\n        <div class=\"ui-inputgroup\">\n            <span class=\"ui-inputgroup-addon\"><i class=\"material-icons\">domain</i></span>\n            <span class=\"md-inputfield md-inputfield-fill\">\n                <input autocomplete=\"off\" id=\"nome\" type=\"text\" pInputText style=\"width: 100%; \" #nome=\"ngModel\"  required  name=\"nome\"  [(ngModel)]=\"dadosCliente.nome\" >\n                <label for=\"nome\">Nome do cliente:</label>\n                <div class=\"ui-message ui-messages-error positionMenssageErrorClienteDados\" *ngIf=\"nome.errors && (nome.dirty || nome.touched)\">\n                        *O Nome é obrigatório.\n                </div>\n            </span>\n        </div>\n    </div>\n\n    <div class=\"ui-g-12 ui-md-12 ui-lg-6\" *ngIf=\"dadosCliente.tipo_cliente === 'PJ'\">\n            <div class=\"ui-inputgroup\">\n                <span class=\"ui-inputgroup-addon\"><i class=\"material-icons\">featured_play_list</i></span>\n                <span class=\"md-inputfield md-inputfield-fill\">\n                    <input required  autocomplete=\"off\" id=\"apelido\" type=\"text\" pInputText style=\"width: 100%; \" #apelido=\"ngModel\"  name=\"apelido\"  [(ngModel)]=\"dadosCliente.apelido\" >\n                    <label for=\"apelido\">Razão social:</label>\n                    <div class=\"ui-message ui-messages-error positionMenssageErrorClienteDados\" *ngIf=\"apelido.errors && (apelido.dirty || apelido.touched)\">\n                        *Razão Social é obrigatório.\n                    </div>\n                </span>\n            </div>\n     </div>\n\n     <div class=\"ui-g-12 ui-md-12 ui-lg-6 \" *ngIf=\"dadosCliente.tipo_cliente === 'PJ'\" >\n            <div class=\"ui-inputgroup \">\n                <span class=\"ui-inputgroup-addon \"><i class=\"material-icons\">subtitles</i></span>\n                <span class=\"md-inputfield md-inputfield-fill \">\n                    <p-inputMask required   #cnpj=\"ngModel\" styleClass=\"inputCnpjEmpresa\" id=\"cnpj\" name=\"cnpj\"  [(ngModel)]=\"dadosCliente.cnpj\" mask=\"99.999.999/9999-99\" placeholder=\"ex: 99.999.999/9999-99\" slotChar=\" \" [ngModelOptions]=\"{standalone: true}\"></p-inputMask>\n                    <label for=\"cnpj\">CNPJ:</label>\n                    <div class=\"ui-message ui-messages-error positionMenssageErrorClienteDados\" *ngIf=\"cnpj.errors && (cnpj.dirty || cnpj.touched)\">\n                            *Cnpj inválido.\n                    </div>\n                </span>\n            </div>\n     </div>\n\n\n     <div class=\"ui-g-12 ui-md-12 ui-lg-6 \" *ngIf=\"dadosCliente.tipo_cliente === 'PF'\">\n            <div class=\"ui-inputgroup \">\n                <span class=\"ui-inputgroup-addon \"><i class=\"material-icons\">subtitles</i></span>\n                <span class=\"md-inputfield md-inputfield-fill \">\n                    <p-inputMask required  #cpf=\"ngModel\" styleClass=\"inputCnpjEmpresa\" id=\"cpf\" name=\"cpf\"  [(ngModel)]=\"dadosCliente.cpf\" mask=\"999.999.999-99\" placeholder=\"ex: 99.999.999-99\" slotChar=\" \" [ngModelOptions]=\"{standalone: true}\"></p-inputMask>\n                    <label for=\"cpf\">CPF:</label>\n                    <div class=\"ui-message ui-messages-error positionMenssageErrorClienteDados\" *ngIf=\"cpf.errors && (cpf.dirty || cpf.touched)\">\n                            *CPF inválido.\n                    </div>\n                </span>\n            </div>\n     </div>\n\n     <div class=\"ui-g-12 ui-md-12 ui-lg-6 \" *ngIf=\"dadosCliente.tipo_cliente === 'PF'\">\n        <div class=\"ui-inputgroup \">\n            <span class=\"ui-inputgroup-addon \"><i class=\"material-icons\">folder_shared</i></span>\n            <span class=\"md-inputfield md-inputfield-fill \">\n                <input required autocomplete=\"off\" id=\"rg\" type=\"text\" pInputText style=\"width: 100%; \" #rg=\"ngModel\"  name=\"rg\"  [(ngModel)]=\"dadosCliente.rg\" >\n                <label for=\"rg\">RG:</label>\n                <div class=\"ui-message ui-messages-error positionMenssageErrorClienteDados\" *ngIf=\"rg.errors && (rg.dirty ||rg.touched)\">\n                        *RG inválido.\n                </div>\n            </span>\n        </div>\n      </div>\n\n      <div class=\"ui-g-12 ui-md-12 ui-lg-3 \" *ngIf=\"dadosCliente.tipo_cliente === 'PJ'\">\n        <div class=\"ui-inputgroup \">\n            <span class=\"ui-inputgroup-addon \"><i class=\"material-icons\">domain</i></span>\n            <span class=\"md-inputfield md-inputfield-fill \">\n                <input  autocomplete=\"off\" id=\"inscricao_estadual\" type=\"text\" pInputText style=\"width: 100%; \" #inscricao_estadual=\"ngModel\"  name=\"inscricao_estadual\"  [(ngModel)]=\"dadosCliente.inscricao_estadual\" >\n                <label for=\"inscricao_estadual\">Inscrição estadual:</label>\n                <div class=\"ui-message ui-messages-error positionMenssageErrorClienteDados\" *ngIf=\"inscricao_estadual.errors && (inscricao_estadual.dirty ||inscricao_estadual.touched)\">\n                        *Inscrição estadual é obrigatório.\n                </div>\n            </span>\n        </div>\n      </div>\n\n      <div class=\"ui-g-12 ui-md-12 ui-lg-3 \" *ngIf=\"dadosCliente.tipo_cliente === 'PJ'\">\n        <div class=\"ui-inputgroup \">\n            <span class=\"ui-inputgroup-addon \"><i class=\"material-icons\">domain</i></span>\n            <span class=\"md-inputfield md-inputfield-fill \">\n                <input  autocomplete=\"off\" id=\"inscricao_municipal\" type=\"text\" pInputText style=\"width: 100%; \" #inscricao_municipal=\"ngModel\"  name=\"inscricao_municipal\"  [(ngModel)]=\"dadosCliente.inscricao_municipal\" >\n                <label for=\"inscricao_municipal\">Inscrição municipal:</label>\n                <div class=\"ui-message ui-messages-error positionMenssageErrorClienteDados\" *ngIf=\"inscricao_municipal.errors && (inscricao_municipal.dirty ||inscricao_municipal.touched)\">\n                        *Inscrição municipal é obrigatório.\n                </div>\n            </span>\n        </div>\n      </div>\n\n      <div class=\"ui-g-12 ui-md-12 ui-lg-6 \" >\n            <div class=\"ui-inputgroup \">\n                <span class=\"ui-inputgroup-addon \"><i class=\"material-icons\">email</i></span>\n                <span class=\"md-inputfield md-inputfield-fill \">\n                    <input email required autocomplete=\"off\" id=\"email\" type=\"text\" pInputText style=\"width: 100%; \" #email=\"ngModel\"  name=\"email\"  [(ngModel)]=\"dadosCliente.email\" >\n                    <label for=\"email\">Email:</label>\n                    <div class=\"ui-message ui-messages-error positionMenssageErrorClienteDados\" *ngIf=\"email.errors && (email.dirty ||email.touched)\">\n                            *Email inválido.\n                    </div>\n                </span>\n            </div>\n        </div>\n\n        <div class=\"ui-g-12 ui-md-12 ui-lg-6 \" *ngIf=\"dadosCliente.tipo_cliente === 'PJ'\">\n            <div class=\"ui-inputgroup \">\n                <span class=\"ui-inputgroup-addon \"><i class=\"material-icons\">cloud</i></span>\n                <span class=\"md-inputfield md-inputfield-fill \">\n                    <input  autocomplete=\"off\" id=\"site\" type=\"text\" pInputText style=\"width: 100%; \" #site=\"ngModel\"  name=\"site\"  [(ngModel)]=\"dadosCliente.site\" >\n                    <label for=\"site\">Site:</label>\n                    <div class=\"ui-message ui-messages-error positionMenssageErrorClienteDados\" *ngIf=\"site.errors && (site.dirty ||site.touched)\">\n                            *Site é obrigatório.\n                    </div>\n                </span>\n            </div>\n          </div>\n\n\n\n\n      <div class=\"ui-g-12 ui-md-12 ui-lg-6 \" *ngIf=\"dadosCliente.tipo_cliente === 'PJ'\">\n        <div class=\"ui-inputgroup \">\n            <span class=\"ui-inputgroup-addon \"><i class=\"material-icons\">call</i></span>\n            <span class=\"md-inputfield md-inputfield-fill \">\n                <p-inputMask  [ngModelOptions]=\"{standalone: true}\" mask=\"(99)9999-9999\" placeholder=\"ex: (99) 9999-9999\" styleClass=\"inputTelefone\" slotChar=\" \" required autocomplete=\"off\" id=\"telefone\"  #telefone=\"ngModel\"  name=\"telefone\"  [(ngModel)]=\"dadosCliente.telefone\" ></p-inputMask>\n                <label for=\"telefone\">Telefone:</label>\n                <div class=\"ui-message ui-messages-error positionMenssageErrorClienteDados\" *ngIf=\"telefone.errors && (telefone.dirty ||telefone.touched)\">\n                    *Telefone é obrigatório.\n                </div>\n            </span>\n        </div>\n    </div>\n\n    <div class=\"ui-g-12 ui-md-12 ui-lg-6 \" *ngIf=\"dadosCliente.tipo_cliente === 'PF'\">\n      <div class=\"ui-inputgroup \">\n          <span class=\"ui-inputgroup-addon \"><i class=\"material-icons\">call</i></span>\n          <span class=\"md-inputfield md-inputfield-fill \">\n              <p-inputMask  [ngModelOptions]=\"{standalone: true}\" mask=\"(99)9999-9999\" placeholder=\"ex: (99) 9999-9999\" styleClass=\"inputTelefone\" slotChar=\" \"  autocomplete=\"off\" id=\"telefone\"  #telefone=\"ngModel\"  name=\"telefone\"  [(ngModel)]=\"dadosCliente.telefone\" ></p-inputMask>\n              <label for=\"telefone\">Telefone:</label>\n              <div class=\"ui-message ui-messages-error positionMenssageErrorClienteDados\" *ngIf=\"telefone.errors && (telefone.dirty ||telefone.touched)\">\n                  *Telefone é obrigatório.\n              </div>\n          </span>\n      </div>\n  </div>\n\n    <div class=\"ui-g-12 ui-md-12 ui-lg-6 \" >\n        <div class=\"ui-inputgroup \">\n            <span class=\"ui-inputgroup-addon \"><i class=\"material-icons\">settings_cell</i></span>\n            <span class=\"md-inputfield md-inputfield-fill \">\n                <p-inputMask  [ngModelOptions]=\"{standalone: true}\"  mask=\"(99)9.9999-9999\" placeholder=\"ex: (99) 9.9999-9999\" styleClass=\"inputCelular\" slotChar=\" \" autocomplete=\"off\" id=\"celular\" type=\"text\"  #celular=\"ngModel\"  name=\"celular\"  [(ngModel)]=\"dadosCliente.celular\" ></p-inputMask>\n                <label for=\"celular\">Celular:</label>\n                <div class=\"ui-message ui-messages-error positionMenssageErrorClienteDados\" *ngIf=\"celular.errors && (celular.dirty ||celular.touched)\">\n                    *Celular é obrigatório.\n                </div>\n            </span>\n        </div>\n    </div>\n\n\n      <div class=\"ui-g-12 ui-md-12 ui-lg-3 \">\n            <div class=\"ui-inputgroup \">\n                <span class=\"ui-inputgroup-addon \"><i class=\"material-icons\">public</i></span>\n                <span class=\"md-inputfield md-inputfield-fill \">\n                    <p-inputMask unmask=\"true\" mask=\"99.999-999\" placeholder=\"ex: 99.999-999\" slotChar=\" \" (onBlur)=\" buscarPorCEP()\"    #cep=\"ngModel\"  styleClass=\"inputCnpjEmpresa\" id=\"cep\" name=\"cep\"  [(ngModel)]=\"dadosCliente.cep\" ></p-inputMask>\n                 <label for=\"cep\">Buscar endereço por CEP:</label>               \n                </span>\n            </div>\n      </div>\n\n\n      <div class=\"ui-g-12 ui-md-12 ui-lg-7 \" >\n            <div class=\"ui-inputgroup \">\n                <span class=\"ui-inputgroup-addon \"><i class=\"material-icons\">confirmation_number </i></span>\n                <span class=\"md-inputfield md-inputfield-fill \">\n                    <input  autocomplete=\"off\" id=\"logradouro\" type=\"text\" pInputText style=\"width: 100%; \" #logradouro=\"ngModel\"  name=\"logradouro\"  [(ngModel)]=\"dadosCliente.logradouro\" >\n                    <label for=\"logradouro\">Endereço:</label>\n                    <div class=\"ui-message ui-messages-error positionMenssageErrorCliente\" *ngIf=\"logradouro.errors && (logradouro.dirty ||logradouro.touched)\">\n                            *A 'Rua' é obrigatório.\n                    </div>\n                </span>\n            </div>\n        </div>\n\n        <div class=\"ui-g-12 ui-md-12 ui-lg-2 \" >\n          <div class=\"ui-inputgroup \">\n            <span class=\"ui-inputgroup-addon \"><i class=\"material-icons\">assistant_photo </i></span>\n              <span class=\"md-inputfield md-inputfield-fill \">\n                  <input required minlength=\"1\"  autocomplete=\"off\" id=\"numero\" type=\"text\" pInputText style=\"width: 100%; \" #numero=\"ngModel\"  name=\"numero\"   placeholder=\"Número\" [(ngModel)]=\"dadosCliente.numero\" >\n                  <label for=\"cep\">Número:</label>\n                  <div class=\"ui-message ui-messages-error positionMenssageErrorClienteNumero\" *ngIf=\"numero.errors && (numero.dirty ||numero.touched)\">\n                          *O 'Número' é obrigatório.\n                  </div>\n              </span>\n          </div>\n      </div>\n\n\n        <div class=\"ui-g-12 ui-md-12 ui-lg-5 \" >\n                <div class=\"ui-inputgroup \">\n                    <span class=\"ui-inputgroup-addon \"><i class=\"material-icons\">location_on</i></span>\n                    <span class=\"md-inputfield md-inputfield-fill \">\n                        <input  autocomplete=\"off\" id=\"bairro\" type=\"text\" pInputText style=\"width: 100%; \" #bairro=\"ngModel\"  name=\"bairro\"  [(ngModel)]=\"dadosCliente.bairro\" >\n                        <label for=\"bairro\">Bairro:</label>\n                        <div class=\"ui-message ui-messages-error positionMenssageErrorCliente\" *ngIf=\"bairro.errors && (bairro.dirty ||bairro.touched)\">\n                                *O 'Bairro' é obrigatório.\n                        </div>\n                    </span>\n                </div>\n            </div>\n\n\n             <div class=\"ui-g-12 ui-md-12 ui-lg-5 \" >\n                <div class=\"ui-inputgroup \">\n                    <span class=\"ui-inputgroup-addon \"><i class=\"material-icons\"> map</i></span>\n                    <span class=\"md-inputfield md-inputfield-fill \">\n                        <input  autocomplete=\"off\" id=\"localidade\" type=\"text\" pInputText style=\"width: 100%; \" #localidade=\"ngModel\"  name=\"localidade\"  [(ngModel)]=\"dadosCliente.localidade\" >\n                        <label for=\"localidade\">Cidade:</label>\n                        <div class=\"ui-message ui-messages-error positionMenssageErrorCliente\" *ngIf=\"localidade.errors && (localidade.dirty ||localidade.touched)\">\n                                *O 'Cidade' é obrigatório.\n                        </div>\n                    </span>\n                </div>\n            </div>\n\n\n\n          <div class=\"ui-g-12 ui-md-12 ui-lg-2 \" >\n            <div class=\"ui-inputgroup \">\n                <span class=\"ui-inputgroup-addon \"><i class=\"material-icons\">domain</i></span>\n                <span class=\"md-inputfield md-inputfield-fill \">\n                    <input  autocomplete=\"off\" id=\"uf\" type=\"text\" pInputText style=\"width: 100%; \" #uf=\"ngModel\"  name=\"uf\"  [(ngModel)]=\"dadosCliente.uf\" >\n                    <label for=\"uf\">Estado:</label>\n                    <div class=\"ui-message ui-messages-error positionMenssageErrorCliente\" *ngIf=\"uf.errors && (uf.dirty ||uf.touched)\">\n                            *O 'Estado' é obrigatório.\n                    </div>\n                </span>\n            </div>\n        </div>\n\n\n\n        <div class=\"ui-g-12 ui-md-12 ui-lg-12 \" >\n          <div class=\"ui-inputgroup \">\n              <span class=\"ui-inputgroup-addon \"><i class=\"material-icons\">toc</i></span>\n              <span class=\"md-inputfield md-inputfield-fill \">\n                  <input  autocomplete=\"off\" id=\"complemento\" type=\"text\" pInputText style=\"width: 100%; \" #complemento=\"ngModel\"  name=\"complemento\"  [(ngModel)]=\"dadosCliente.complemento\" >\n                  <label for=\"complemento\">Complemento:</label>\n                  <div class=\"ui-message ui-messages-error positionMenssageErrorCliente\" *ngIf=\"complemento.errors && (complemento.dirty ||complemento.touched)\">\n                          *O 'Complemento' é obrigatório.\n                  </div>\n              </span>\n          </div>\n      </div>\n\n\n\n\n\n\n\n\n\n\n\n            </div>\n        </div>\n\n        <p-fieldset legend=\"Outras Informações\" toggleable=\"true\" collapsed = \"true\">\n\n          <div class=\"ui-g-12 ui-md-12 ui-lg-6\"  >\n              <div class=\"ui-inputgroup\">\n                  <span class=\"ui-inputgroup-addon\"><i class=\"material-icons\">account_circle</i></span>\n                  <span class=\"md-inputfield md-inputfield-fill\">\n                      <input disabled id=\"name_user\" type=\"text\" pInputText style=\"width: 100%; \" name=\"name_user\" [(ngModel)]=\"dadosCliente.name_user\">\n                      <label for=\"nameuser\">Criado por:</label>\n                  </span>\n              </div>\n          </div>\n\n\n            <div class=\"ui-g-12 ui-md-12 ui-lg-3\">\n                <div class=\"ui-inputgroup\">\n                    <span class=\"ui-inputgroup-addon\"><i class=\"material-icons\">event</i></span>\n                    <span class=\"md-inputfield md-inputfield-fill l\">\n                        <p-calendar [disabled]=\"true\" [showTime]=\"true\" id=\"created_at\" [(ngModel)]=\"dadosCliente.created_at\" name=\"created_at\" dateFormat=\"dd/mm/yy\"\n                          [inline]=\"false\" [locale]=\"pt\" [readonlyInput]=\"true\" [showIcon]=\"false\" >\n                          </p-calendar>\n                        <label class=\"l\" for=\"created_at\">Data criação:</label>\n                    </span>\n                </div>\n            </div>\n\n\n\n            <div class=\"ui-g-12 ui-md-12 ui-lg-3\">\n                <div class=\"ui-inputgroup\">\n                    <span class=\"ui-inputgroup-addon\"><i class=\"material-icons\">event</i></span>\n                    <span class=\"md-inputfield md-inputfield-fill l\">\n                        <p-calendar [disabled]=\"true\" [showTime]=\"true\" id=\"updated_at\" [(ngModel)]=\"dadosCliente.updated_at\" name=\"updated_at\" dateFormat=\"dd/mm/yy\"\n                          [inline]=\"false\" [locale]=\"pt\" [readonlyInput]=\"true\" [showIcon]=\"false\" >\n                          </p-calendar>\n                        <label class=\"l\" for=\"updated_at\">Data atualização:</label>\n                    </span>\n                </div>\n            </div>\n        </p-fieldset>\n\n      </p-tabPanel>\n\n\n\n\n      <br/>\n\n    <!--BOTÕES-->\n      <div class=\"ui-g-12\" style=\"text-align: left\">\n          <button class=\"btnSalvar\" pButton type=\"submit\"  icon=\"fa-check\" label=\"Salvar\" (click)=\"salvar(form)\"   [disabled]=\"form.invalid \"></button>\n          <button pButton type=\"text\"  icon=\"fa-close\" label=\"Fechar\"    (click)=\"showDialogClose(false, form)\" class=\"btnFechar\"></button>\n      </div>\n\n  </div>\n      <p-messages [(value)]=\"msgsTelaCadastro\"></p-messages>\n  </p-tabView>\n  </form>\n  </p-dialog>\n  <!-- FIM CAIXA DE DIALOGO -->\n  </div>\n  </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/cadastro/cliente/cliente/cliente.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Clientes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClienteComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_services_auth_service__ = __webpack_require__("../../../../../src/app/auth/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__breadcrumb_service__ = __webpack_require__("../../../../../src/app/breadcrumb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_cliente_service__ = __webpack_require__("../../../../../src/app/cadastro/cliente/services/cliente.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Clientes = (function () {
    function Clientes(nome, id_user, id_cliente) {
        this.status = true;
        this.tipo_cliente = 'PJ';
        this.name_user = nome;
        this.id_user = id_user;
        this.id_cliente = id_cliente;
    }
    return Clientes;
}());

var ClienteComponent = (function () {
    function ClienteComponent(clienteService, confirmation, title, breadcrumbService, usuarioSistema) {
        this.clienteService = clienteService;
        this.confirmation = confirmation;
        this.title = title;
        this.breadcrumbService = breadcrumbService;
        this.usuarioSistema = usuarioSistema;
        this.mostraOpcaoTipoEmpresaPJ = true;
        this.mostraOpcaoTipoEmpresaPF = true;
        this.pt = [];
        this.clientes = [];
        this.listaEstadoCombo = [];
        this.listaSeguimentoCombo = [];
        this.formularioCadastro = false;
        this.id_usuario = [];
        this.dadosClientes = new Clientes(this.nomeUsuarioLogado, this.idUsuarioLogado, this.idEmpresaUsuarioLogado);
        this.dadosCliente = new Clientes(this.nomeUsuarioLogado, this.idUsuarioLogado, this.idEmpresaUsuarioLogado);
        this.senha = [];
        this.password = [];
        this.retornoCadastro = [];
        this.lancamentos = [];
        this.display = false;
        this.msgs = [];
        this.msgsTelaCadastro = [];
        this.lancamento = [];
        this.cols = [
            // { field: 'id', header: 'id', style: 'col-id'},
            { field: 'nome', header: 'CLIENTE', style: 'col-nome-cliente' },
            // { field: 'name_user', header: 'COMERCIAL', style: 'col-comercial-cliente' },
            { field: 'tipo_cliente', header: 'TIPO CLIENTE', style: 'col-tipo-cliente' },
            { field: 'cnpj', header: 'CNPJ/CPF', style: 'col-cnpj-cliente' },
            { field: 'cpf', header: 'CPF', style: 'col-cpf' },
            //{ field: 'inscricao_estadual', header: 'Incricão Est.', style: 'col-inscricao-estadual'},
            //{ field: 'endereco', header: 'Endereço', style: 'col-endereco' },
            //{ field: 'bairro', header: 'Bairro', style: 'col-bairro' },
            { field: 'localidade', header: 'CIDADE/UF', style: 'col-cidade-uf-cliente' },
            //{ field: 'id_estado', header: 'Estado', style: 'col-estado' },
            // { field: 'email', header: 'Email', style: 'col-email' },
            // { field: 'site', header: 'Site', style: 'col-site'},
            // { field: 'name', header: 'Email', style: 'col-email' },
            { field: 'telefone', header: 'TELEFONE', style: 'col-telefone-cliente' },
            //{ field: 'celular', header: 'Ceular', style: 'col-celular' },
            // { field: 'id_seguimento', header: 'Seguimento', style: 'col-seguimento' },
            { field: 'status', header: 'STATUS', style: 'col-status-cliente' },
        ];
        this.empresas = [
            { label: 'NewsGPS', value: '1' },
            { label: 'Quadri Systems', value: '2' }
        ];
        this.breadcrumbService.setItems([
            { label: 'Clientes / Cadastrar Clientes' },
        ]);
    }
    ClienteComponent.prototype.teste = function () {
        alert('sdjkb');
    };
    ClienteComponent.prototype.salvar = function (form) {
        var _this = this;
        this.clienteService.salvar(this.dadosCliente)
            .toPromise()
            .then(function (res) {
            if ("" + res.status === '400') {
                _this.msgsTelaCadastro.push({ severity: 'error', summary: "" + res.statusText, detail: '' });
            }
            else {
                _this.msgs.push({ severity: 'success', summary: 'Sucesso!', detail: 'Cliente salvo com sucesso.' });
                _this.listar();
                _this.fecharMensagem();
                form.reset();
                _this.display = false;
            }
        })
            .catch(function (erro) {
            return _this.msgsTelaCadastro.push({ severity: 'error', summary: 'Ops!', detail: 'Cliente já cadastrado na base de dados!!' });
        });
        this.fecharMensagem();
    };
    ClienteComponent.prototype.buscarPorId = function (id) {
        var _this = this;
        this.clienteService.buscarPorId(id)
            .then(function (dadosCliente) {
            if (dadosCliente.status === 1) {
                dadosCliente.status = true;
            }
            if (dadosCliente.status === 0) {
                dadosCliente.status = false;
            }
            if (dadosCliente.tipo_cliente === 'PF') {
                _this.mostraOpcaoTipoEmpresaPF = true;
                _this.mostraOpcaoTipoEmpresaPJ = false;
            }
            if (dadosCliente.tipo_cliente === 'PJ') {
                _this.mostraOpcaoTipoEmpresaPF = false;
                _this.mostraOpcaoTipoEmpresaPJ = true;
            }
            _this.dadosCliente = dadosCliente;
        })
            .catch(function (erro) {
            return _this.msgs.push({ severity: 'error', summary: 'Ops! ', detail: 'Erro ao tentar listar o cliente!' });
        });
        this.fecharMensagem();
    };
    ClienteComponent.prototype.listar = function () {
        var _this = this;
        this.clienteService.lista()
            .then(function (clientes) {
            for (var i = 0; i < clientes.length; i++) {
                if (clientes[i].tipo_cliente === 'PF') {
                    clientes[i].tipo_cliente = 'Pessoa Física';
                }
                if (clientes[i].tipo_cliente === 'PJ') {
                    clientes[i].tipo_cliente = 'Empresa';
                }
            }
            _this.clientes = clientes;
        })
            .then(function (total) { return _this.total = _this.clientes.length; })
            .catch(function (erro) {
            return _this.msgs.push({ severity: 'error', summary: 'Ops! ', detail: 'Erro ao tentar listar os clientes!' });
        });
    };
    ClienteComponent.prototype.excluir = function (cliente) {
        var _this = this;
        this.clienteService.excluir(cliente.id)
            .then(function () {
            _this.msgs.push({ severity: 'success', summary: 'Sucesso!', detail: 'Cliente excluido !' });
            _this.listar();
            _this.fecharMensagem();
        })
            .catch(function (erro) {
            return _this.msgs.push({ severity: 'error', summary: 'Ops! ', detail: 'Erro ao tentar excluir o cliente ' });
        });
        this.listar();
        this.fecharMensagem();
    };
    ClienteComponent.prototype.confirmarExclusao = function (cliente) {
        var _this = this;
        this.confirmation.confirm({
            message: 'Tem certeza que deseja excluir?',
            accept: function () {
                _this.excluir(cliente);
            }
        });
    };
    ClienteComponent.prototype.onRowSelect = function (event) {
        this.buscarPorId(event.data.id);
        this.msgsTelaCadastro = [];
        this.msgs = [];
        this.display = true;
    };
    ClienteComponent.prototype.fecharMensagem = function () {
        var _this = this;
        setTimeout(function () {
            _this.msgs = [];
            _this.msgsTelaCadastro = [];
            _this.msgs = [];
        }, 7000);
    };
    ClienteComponent.prototype.limparFormulario = function (form) {
        form.reset();
    };
    ClienteComponent.prototype.showDialogOpen = function (param, id) {
        if (id) {
            this.buscarPorId(id);
        }
        this.msgsTelaCadastro = [];
        this.msgs = [];
        this.dadosCliente = new Clientes(this.nomeUsuarioLogado, this.idUsuarioLogado, this.idEmpresaUsuarioLogado);
        this.display = param;
    };
    ClienteComponent.prototype.showDialogClose = function (param, form) {
        this.limparFormulario(form);
        this.msgsTelaCadastro = [];
        this.msgs = [];
        this.display = param;
        this.mostraOpcaoTipoEmpresaPJ = true;
        this.mostraOpcaoTipoEmpresaPF = true;
    };
    ClienteComponent.prototype.getUserSistema = function () {
        this.nomeUsuarioLogado = this.usuarioSistema.getUser().name;
        this.idUsuarioLogado = this.usuarioSistema.getUser().id;
        this.idEmpresaUsuarioLogado = this.usuarioSistema.getUser().id_cliente;
    };
    ClienteComponent.prototype.buscarPorCEP = function () {
        var _this = this;
        this.clienteService.buscarPorCEP(this.dadosCliente.cep)
            .then(function (dadosCliente) {
            if (dadosCliente.erro === true) {
                _this.msgsTelaCadastro.push({ severity: 'error', summary: 'Ops! ', detail: 'CEP não existe' });
            }
            else {
                _this.dadosCliente.logradouro = dadosCliente.logradouro;
                _this.dadosCliente.complemento = dadosCliente.complemento;
                _this.dadosCliente.bairro = dadosCliente.bairro;
                _this.dadosCliente.localidade = dadosCliente.localidade;
                _this.dadosCliente.uf = dadosCliente.uf;
                _this.dadosCliente.cep = dadosCliente.cep;
            }
        })
            .catch(function (erro) {
            return _this.msgsTelaCadastro.push({ severity: 'error', summary: 'Ops! ', detail: 'CEP imcompleto' });
        });
        this.fecharMensagem();
    };
    ClienteComponent.prototype.ngOnInit = function () {
        this.title.setTitle('Clientes');
        this.listar();
        this.columnOptions = [];
        for (var i = 0; i < this.cols.length; i++) {
            this.columnOptions.push({ label: this.cols[i].header, value: this.cols[i] });
        }
        this.acoesRelacionadas = [
            {
                label: 'Início',
                icon: 'fa-home',
                url: 'http://localhost:4200/#/admin/dashboard'
            },
            {
                label: 'Usuário',
                icon: 'ui-icon-person-add',
                url: 'http://localhost:4200/#/admin/usuarios'
            },
            {
                label: 'Clientes',
                icon: 'ui-icon-domain ',
                url: 'http://localhost:4200/#/admin/cliente'
            },
            {
                label: 'Permissões',
                icon: 'ui-icon-lock',
                url: 'http://localhost:4200/#/admin/permissao'
            },
            {
                label: 'Modulos',
                icon: 'ui-icon-widgets',
                url: 'http://localhost:4200/#/admin/modulo'
            },
            {
                label: 'Veículo',
                icon: 'ui-icon-train',
                url: 'http://localhost:4200/#/admin/veiculo'
            },
            {
                label: 'Funcionário',
                icon: 'ui-icon-people',
                url: 'http://localhost:4200/#/pessoa'
            }
        ];
        this.pt = {
            firstDayOfWeek: 0,
            dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
            dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sa'],
            dayNamesMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sa'],
            monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agsoto',
                'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            today: 'Today',
            clear: 'Clear'
        };
    };
    ClienteComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-cliente',
            template: __webpack_require__("../../../../../src/app/cadastro/cliente/cliente/cliente.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cadastro/cliente/cliente/cliente.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_6__services_cliente_service__["a" /* ClienteService */],
            __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["ConfirmationService"],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["Title"],
            __WEBPACK_IMPORTED_MODULE_5__breadcrumb_service__["a" /* BreadcrumbService */],
            __WEBPACK_IMPORTED_MODULE_0__auth_services_auth_service__["a" /* AuthService */]])
    ], ClienteComponent);
    return ClienteComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cadastro/cliente/services/cliente.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClienteService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClienteService = (function () {
    function ClienteService(httpCliente, http) {
        this.httpCliente = httpCliente;
        this.http = http;
    }
    // SALVAR
    ClienteService.prototype.salvar = function (dados) {
        return !dados.id ? this.httpCliente.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].urlBase + "/admin/cliente/", dados) :
            this.httpCliente.put(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].urlBase + "/admin/cliente/" + dados.id, dados);
    };
    // BUSCA POR CEP
    ClienteService.prototype.buscarPorCEP = function (cep) {
        return this.httpCliente.get("https://viacep.com.br/ws/" + cep + "/json/")
            .toPromise()
            .then(function (response) {
            return response;
        });
    };
    // BUSCA POR ID
    ClienteService.prototype.buscarPorId = function (id) {
        var _this = this;
        return this.httpCliente.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].urlBase + "/admin/cliente/" + id)
            .toPromise()
            .then(function (response) {
            var cliente = response;
            _this.converterStringsParaDatas([cliente]);
            return cliente;
        });
    };
    // LISTAR TODOS
    ClienteService.prototype.lista = function () {
        return this.httpCliente.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].urlBase + "/admin/cliente")
            .toPromise()
            .then(function (response) { return response; });
    };
    // EXCLUIR POR ID
    ClienteService.prototype.excluir = function (id) {
        return this.httpCliente.delete(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].urlBase + "/admin/cliente/" + id)
            .toPromise()
            .then(function () { return null; });
    };
    // CONVERTE STRING PARA DATE E EXIBE NA TELA
    ClienteService.prototype.converterStringsParaDatas = function (clientes) {
        for (var _i = 0, clientes_1 = clientes; _i < clientes_1.length; _i++) {
            var cliente = clientes_1[_i];
            cliente.created_at = __WEBPACK_IMPORTED_MODULE_3_moment__(cliente.created_at, 'YYYY-MM-DD, h:mm:ss a').toDate();
            if (cliente.updated_at) {
                cliente.updated_at = __WEBPACK_IMPORTED_MODULE_3_moment__(cliente.updated_at, 'YYYY-MM-DD, h:mm:ss a').toDate();
            }
        }
    };
    ClienteService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ClienteService);
    return ClienteService;
}());



/***/ }),

/***/ "../../../../../src/app/cadastro/funcionalidade/funcionalidade.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cadastro/funcionalidade/funcionalidade.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n  <div class=\"ui-g-12\" style=\"margin-top: -15px;\">\n\n    <h2>\n      <i class=\"material-icons\" style=\"vertical-align:middle\">build</i> Funcionalidades</h2>\n\n    <div class=\"card shadow-box ui-shadow-3\">\n\n      <form autocomplete=\"off\">\n\n        <p-growl [(value)]=\"msgs\" [sticky]=\"true\"></p-growl>\n\n      </form>\n\n      <p-toolbar>\n        <div class=\"ui-toolbar-group-left btnpanel\">\n\n\n          <button pButton type=\"button\" (click)=\"showDialog()\" label=\"Nova Funcionalidade\" icon=\"fa-plus\"></button>\n          <i class=\"material-icons\" style=\"vertical-align:middle\">apps</i>\n          <p-splitButton icon=\"ui-icon-format-list-bulleted\" label=\"Acões relacionadas\" [model]=\"acoesRelacionadas\" styleClass=\"ui-button-warning\"></p-splitButton>\n        </div>\n\n      </p-toolbar>\n\n      <br/>\n      <div class=\"ui-g form-group\">\n        <div class=\"ui-g-12 ui-md-12\">\n          <div class=\"ui-inputgroup\">\n            <button pButton type=\"button\" icon=\"ui-icon-search\"></button>\n            <span class=\"md-inputfield\">\n              <input #gb type=\"text\" pInputText class=\"pesquisar\" style=\"border-radius: 6px;\">\n              <label>Pesquisar</label>\n            </span>\n          </div>\n        </div>\n        <br/>\n\n        <p-panel>\n\n\n          <p-dataTable [value]=\"funcionalidades\" [paginator]=\"true\" [rows]=\"5\" [responsive]=\"true\" [rowsPerPageOptions]=\"[3,5,10,15]\" [globalFilter]=\"gb\"\n            selectionMode=\"single\"  dataKey=\"id\" #tabela emptyMessage=\"Nenhum registro encontrado\"\n            [lazy]=\"false\" sortMode=\"multiple\">\n\n\n\n\n\n\n\n            <p-footer>\n              <div style=\"text-align:right\">\n                <p-multiSelect [options]=\"columnOptions\" [(ngModel)]=\"cols\"></p-multiSelect>\n              </div>\n            </p-footer>\n\n            <p-column *ngFor=\"let col of cols\" [sortable]=\"true\" [field]=\"col.field\" [header]=\"col.header\" [styleClass]=\"col.style\" [filter]=\"false\">\n\n\n\n            </p-column>\n\n\n            <!--\n    <p-column field=\"pessoa\" header=\"Pessoa\"   [filter]=\"false\" [sortable]=\"true\"></p-column>\n\n\n\n    <p-column field=\"descricao\" header=\"Descrição\" [filter]=\"false\" [sortable]=\"true\"></p-column>\n\n\n\n    <p-column header=\"Vencimento\" styleClass=\"col-data\" [filter]=\"false\" [sortable]=\"true\">\n      <ng-template let-lanc=\"rowData\" pTemplate=\"body\">\n          <span>{{ lanc.dataVencimento | date:'dd/MM/yyyy' }}</span>\n      </ng-template>\n    </p-column>\n\n\n\n    <p-column header=\"Pagamento\" styleClass=\"col-data\" [filter]=\"false\" [sortable]=\"true\">\n      <ng-template let-lanc=\"rowData\" pTemplate=\"body\">\n          <span>{{ lanc.dataPagamento | date:'dd/MM/yyyy' }}</span>\n      </ng-template>\n    </p-column>\n\n\n-->\n            <!--   <p-column field=\"valor\" header=\"Valor\" styleClass=\"col-valor\" [filter]=\"false\" [sortable]=\"true\">\n                            <ng-template let-lanc=\"rowData\" pTemplate=\"body\">\n                                <span [style.color]=\"lanc.tipo === 'DESPESA' ? 'red' : 'blue'\">{{ lanc.valor }}</span>\n                            </ng-template>\n                        </p-column>-->\n\n\n\n            <p-column styleClass=\"col-opcoes\" header=\"Ações\">\n              <ng-template let-lanc=\"rowData\" pTemplate=\"body\">\n                <button pButton icon=\"ui-icon-edit\" pTooltip=\"Editar\" tooltipPosition=\"top\" (click)=\"showDialog(true)\" [routerLink]=\"['/usuario', lanc.codigo]\"></button>\n                <button pButton icon=\"ui-icon-delete-forever\" pButton (click)=\"confirmarExclusao(lanc)\" pTooltip=\"Excluir\" tooltipPosition=\"top\"\n                  class=\"ui-button-danger\"></button>\n              </ng-template>\n            </p-column>\n\n\n            <p-footer>Total: {{ total}} registros</p-footer>\n          </p-dataTable>\n\n        </p-panel>\n\n\n\n\n\n\n        <p-dialog header=\"Cadastro de Permissões\" [(visible)]=\"display\" modal=\"modal\"  [responsive]=\"true\" [width]=\"800\">\n          <!-- <app-lancamento-cadastro></app-lancamento-cadastro>-->\n\n          <form #f=\"ngForm\" autocomplete=\"off\" (ngSubmit)=\"salvar(f)\">\n\n            <div class=\"ui-g\">\n\n\n\n              <div class=\"ui-g-12 ui-md-9 ui-fluid\">\n                <label>Funcionalidade</label>\n                <input pInputText type=\"text\" required minlength=\"5\" name=\"permissao\" [(ngModel)]=\"dadosFuncionalidade.funcionalidade\">\n                <input pInputText type=\"hidden\" required minlength=\"5\" value=\"{{auth.getUser().id}}\" name=\"id_usuario\" [(ngModel)]=\"dadosFuncionalidade.id_usuario\">\n\n\n              </div>\n\n              <div class=\"ui-g-12 ui-md-6 ui-fluid\">\n                <label>Rota</label>\n                <input pInputText type=\"text\" required minlength=\"5\" name=\"permissao\" [(ngModel)]=\"dadosFuncionalidade.rota\">\n\n\n\n              </div>\n              <div class=\"ui-g-12 ui-md-6 ui-fluid\">\n                <label>Icone</label>\n                <input pInputText type=\"text\" required minlength=\"5\" name=\"permissao\" [(ngModel)]=\"dadosFuncionalidade.icone\">\n\n\n\n              </div>\n\n              <div class=\"ui-g-12\">\n                <button pButton type=\"submit\" pButton icon=\"fa-check\" label=\"Salvar\"></button>\n                <button pButton type=\"button\" pButton icon=\"fa-close\" label=\"Fechar\" (click)=\"showDialogFalse()\" class=\"ui-button-danger\"></button>\n\n              </div>\n            </div>\n            <p-messages [(value)]=\"msgs\"></p-messages>\n\n          </form>\n\n\n        </p-dialog>\n\n\n\n      </div>\n    </div>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/cadastro/funcionalidade/funcionalidade.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuncionalidadeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_services_auth_service__ = __webpack_require__("../../../../../src/app/auth/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_funcionalidade_service__ = __webpack_require__("../../../../../src/app/cadastro/funcionalidade/services/funcionalidade.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FuncionalidadeComponent = (function () {
    function FuncionalidadeComponent(permissaoService, confirmation, route, auth) {
        this.permissaoService = permissaoService;
        this.confirmation = confirmation;
        this.route = route;
        this.auth = auth;
        this.funcionalidades = [];
        this.total = [];
        this.msgs = [];
        this.display = false;
        this.dadosFuncionalidade = {
            funcionalidade: '',
            rota: '',
            icone: '',
            id_usuario: '',
        };
        this.lancamentos = [];
    }
    FuncionalidadeComponent.prototype.showDialog = function () {
        this.display = true;
    };
    FuncionalidadeComponent.prototype.showDialogFalse = function () {
        this.display = false;
        this.dadosFuncionalidade = [];
    };
    FuncionalidadeComponent.prototype.ngOnInit = function () {
        var codigoLancamento = this.route.snapshot.params['codigo'];
        /*if (codigoLancamento) {
              this.carregarLancamento(codigoLancamento);
            }*/
        this.listar();
        this.cols = [
            { field: 'id', header: 'Código', style: 'col-descricao' },
            { field: 'funcionalidade', header: 'Funcionalidade', },
            { field: 'rota', header: 'Rota', },
            { field: 'icone', header: 'Icone', },
        ];
        this.columnOptions = [];
        for (var i = 0; i < this.cols.length; i++) {
            this.columnOptions.push({ label: this.cols[i].header, value: this.cols[i] });
        }
        this.acoesRelacionadas = [
            {
                label: 'Início', icon: 'fa-home', url: 'http://localhost:4200/#/empty'
            },
            {
                label: 'Usuário', icon: 'fa-user-plus', url: 'http://localhost:4200/#/admin/usuario'
            },
            {
                label: 'Clientes', icon: 'fa-building ', url: 'http://localhost:4200/#/cliente'
            },
            {
                label: 'Permissões', icon: 'fa-user-secret', url: 'http://localhost:4200/#/permissao'
            },
            {
                label: 'Veículo', icon: 'fa-bus', url: 'http://localhost:4200/#/veiculo'
            },
            {
                label: 'Funcionário', icon: 'fa-users', url: 'http://localhost:4200/#/pessoa'
            }
        ];
    };
    FuncionalidadeComponent.prototype.listar = function () {
        var _this = this;
        this.permissaoService.lista()
            .then(function (res) { return _this.funcionalidades = res; })
            .then(function (total) { return _this.total = _this.funcionalidades.length; })
            .catch(function (erro) {
            return _this.msgs.push({ severity: 'error', summary: 'Ops! ', detail: 'Erro ao tentar listar os usuários!' });
        });
        //  console.log(this.permissoes);
    };
    FuncionalidadeComponent.prototype.salvar = function (dadosFuncionalidade) {
        var _this = this;
        //console.log(dadosUsuario);
        this.permissaoService.cadastro(this.dadosFuncionalidade)
            .subscribe(function (res) {
            // console.log(res);
            if (res) {
                _this.display = false;
                _this.listar();
                /// this.dadosPermissao = [];
                _this.msgs.push({ severity: 'success', summary: 'Sucesso!', detail: 'Permissão Cadastrada com Sucesso !' });
                setTimeout(function () {
                    _this.msgs = [];
                }, 4000);
            }
            if (!res) {
                _this.msgs.push({ severity: 'error', summary: 'Ops! ', detail: 'Erro ao tentar cadastrar Usuário ' });
                setTimeout(function () {
                    _this.msgs = [];
                }, 5000);
            }
            _this.dadosFuncionalidade = [];
        });
    };
    FuncionalidadeComponent.prototype.confirmarExclusao = function (funcionalidade) {
        var _this = this;
        this.confirmation.confirm({
            message: 'Tem certeza que deseja excluir?',
            accept: function () {
                _this.excluir(funcionalidade);
            }
        });
    };
    FuncionalidadeComponent.prototype.excluir = function (funcionalidade) {
        var _this = this;
        this.permissaoService.excluir(funcionalidade.id)
            .then(function () {
            _this.msgs.push({ severity: 'success', summary: 'Sucesso!', detail: 'Usuário excluido !' });
            _this.ngOnInit();
        })
            .catch(function (erro) {
            return _this.msgs.push({ severity: 'error', summary: 'Ops! ', detail: 'Erro ao tentar excluir o usuário ' + funcionalidade.permissao });
        });
        setTimeout(function () {
            _this.msgs = [];
        }, 5000);
    };
    FuncionalidadeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-funcionalidade',
            template: __webpack_require__("../../../../../src/app/cadastro/funcionalidade/funcionalidade.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cadastro/funcionalidade/funcionalidade.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_funcionalidade_service__["a" /* FuncionalidadeService */],
            __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["ConfirmationService"],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"],
            __WEBPACK_IMPORTED_MODULE_3__auth_services_auth_service__["a" /* AuthService */]])
    ], FuncionalidadeComponent);
    return FuncionalidadeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cadastro/funcionalidade/services/funcionalidade.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FuncionalidadeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FuncionalidadeService = (function () {
    function FuncionalidadeService(http, httpCliente) {
        this.http = http;
        this.httpCliente = httpCliente;
    }
    FuncionalidadeService.prototype.lista = function () {
        return this.httpCliente.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].urlBase + "/admin/funcionalidade")
            .toPromise()
            .then(function (response) { return response; });
        // console.log(response);
    };
    FuncionalidadeService.prototype.cadastro = function (dados) {
        //console.log(dados);
        return this.httpCliente.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].urlBase + "/admin/funcionalidade", dados)
            .map(function (data) { return data; });
    };
    FuncionalidadeService.prototype.excluir = function (id) {
        //alert(id);
        return this.httpCliente.delete(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].urlBase + "/admin/funcionalidade/" + id)
            .toPromise()
            .then(function () { return null; });
    };
    FuncionalidadeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */]])
    ], FuncionalidadeService);
    return FuncionalidadeService;
}());



/***/ }),

/***/ "../../../../../src/app/cadastro/modulo/modulo.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cadastro/modulo/modulo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n    <div class=\"ui-g-12\" style=\"margin-top: -15px;\">\n\n\n    <div class=\"card shadow-box ui-shadow-3\">\n\n    <form autocomplete=\"off\">\n\n    <p-growl [(value)]=\"msgs\" [sticky]=\"true\"></p-growl>\n\n    </form>\n\n    <p-toolbar>\n    <div class=\"ui-toolbar-group-left btnpanel ui-g-12 ui-md-12\">\n    <button pButton type=\"button\"   (click)=\" getUserSistema()\"  (click)=\"showDialogOpen(true, null)\" label=\"Novo modulo\" icon=\"ui-icon-widgets\" class=\"btnNovo\" id=\"id-btnNovo\"></button>\n    <i class=\"material-icons btnIcon\" style=\"vertical-align:middle; color: #4d4948\">apps</i>\n    <p-splitButton icon=\"ui-icon-format-list-bulleted \" label=\"Acões relacionadas\" [model]=\"acoesRelacionadas\" styleClass=\"ui-button-warning  btnAcoes\"\n        id=\"id-btnAcoes\"></p-splitButton>\n\n\n    <div class=\"ui-g-12 ui-md-9\" class=\"pesquisarPermissao\" id=\"id-pesquisar\">\n        <div class=\"ui-inputgroup\">\n            <button pButton type=\"button\" icon=\"ui-icon-search\"></button>\n            <span class=\"md-inputfield\">\n                <input #gb type=\"text\" pInputText class=\"pesquisarInput\" (keyup)=\"listar()\">\n                <label>Pesquisar</label>\n            </span>\n        </div>\n    </div>\n    </div>\n\n    <div class=\"ui-toolbar-group-right btnpanel\">\n\n    </div>\n\n    </p-toolbar>\n\n\n\n    <p-panel>\n         <!--DATA TABLE-->\n          <p-dataTable\n          [value]=\"modulos\"\n          [paginator]=\"true\"\n          [rows]=\"10\"\n          [responsive]=\"true\"\n          [rowsPerPageOptions]=\"[3,5,10,20,30,50]\"\n          [globalFilter]=\"gb\"\n          selectionMode=\"single\"\n          [(selection)]=\"moduloSelecionado\"\n          dataKey=\"id\"\n          #table\n          emptyMessage=\"Nenhum registro encontrado\"\n          sortMode=\"multiple\"\n          (onRowSelect)=\"onRowSelect($event)\">\n\n\n\n        <p-column *ngFor=\"let col of cols\" [sortable]=\"true\" [field]=\"col.field\" [header]=\"col.header\"  [styleClass]=\"col.style\" [filter]=\"false\">\n            <ng-template let-modulo=\"rowData\" let-ri=\"rowIndex\"  pTemplate=\"body\">\n\n                <div *ngIf=\"col.field=='modulo'\" >\n                    <span  >{{ modulo.modulo }}</span>\n                </div>\n\n              </ng-template>\n        </p-column>\n\n\n        <p-column styleClass=\"col-opcoes\" header=\"AÇÕES\">\n            <ng-template let-modulo=\"rowData\" pTemplate=\"body\">\n                <button pButton icon=\"ui-icon-edit\" pTooltip=\"Editar\" type=\"submit\" tooltipPosition=\"top\" (click)=\"showDialogOpen(true,modulo.id)\"></button>\n                <button pButton icon=\"ui-icon-delete-forever\" pButton (click)=\"confirmarExclusao(modulo)\" pTooltip=\"Excluir\" tooltipPosition=\"top\"\n                    class=\"ui-button-danger\"></button>\n            </ng-template>\n        </p-column>\n\n        <p-footer class=\"totalRegistro\">Total: {{ table.totalRecords }}  registro(s)</p-footer>\n\n\n        <p-footer>\n          <div style=\"text-align:right\">\n              <p-multiSelect defaultLabel=\"Escolha\" selectedItemsLabel=\"{0} Itens selecionados\" [options]=\"columnOptions\" [(ngModel)]=\"cols\"></p-multiSelect>\n          </div>\n      </p-footer>\n       </p-dataTable>\n       <!--FIM DATATABLE-->\n    </p-panel>\n\n\n    <!-- CAIXA DE DIALOGO -->\n    <p-dialog header=\"Cadastro Modulo\" [(visible)]=\"display\" modal=\"modal\"  [responsive]=\"true\" [width]=\"670\">\n    <form #form=\"ngForm\" autocomplete=\"off\" >\n      <p-tabView  >\n\n    <div class=\"ui-g\" *ngIf=\"dadosModulo\">\n\n        <p-tabPanel header=\"Modulo\" leftIcon=\"ui-icon-widgets\">\n            <div class=\"ui-g-12\">\n              <div class=\"ui-g form-group\">\n\n\n              <div class=\"ui-g-12 ui-md-12 ui-lg-12\" style=\"width: 100%;\" >\n                  <div class=\"ui-inputgroup\">\n                      <span class=\"ui-inputgroup-addon\"><i class=\"material-icons\">widgets</i></span>\n                      <span class=\"md-inputfield md-inputfield-fill\">\n                          <input required minlength=\"3\" autocomplete=\"off\" id=\"modulo\" type=\"text\" pInputText style=\"width: 100%; \" #modulo=\"ngModel\"   name=\"modulo\"  [(ngModel)]=\"dadosModulo.modulo\" >\n                          <label for=\"modulo\">Criar modulo:</label>\n\n                          <div class=\"ui-message ui-messages-error positionMenssageErrormodulo\" *ngIf=\"modulo.errors && (modulo.dirty || modulo.touched)\">\n                                *Mínimo de 3 caracteres.\n                          </div>\n\n                      </span>\n                  </div>\n              </div>\n\n\n            </div>\n          </div>\n\n          <p-fieldset legend=\"Outras Informações\" toggleable=\"true\" collapsed = \"true\">\n\n            <div class=\"ui-g-12 ui-md-12 ui-lg-6\"  >\n                <div class=\"ui-inputgroup\">\n                    <span class=\"ui-inputgroup-addon\"><i class=\"material-icons\">account_circle</i></span>\n                    <span class=\"md-inputfield md-inputfield-fill\">\n                        <input disabled id=\"name_user\" type=\"text\" pInputText style=\"width: 100%; \" name=\"name_user\" [(ngModel)]=\"dadosModulo.name_user\">\n                        <label for=\"name_user\">Criado por:</label>\n                    </span>\n                </div>\n            </div>\n\n\n              <div class=\"ui-g-12 ui-md-12 ui-lg-3\">\n                  <div class=\"ui-inputgroup\">\n                      <span class=\"ui-inputgroup-addon\"><i class=\"material-icons\">event</i></span>\n                      <span class=\"md-inputfield md-inputfield-fill l\">\n                          <p-calendar [disabled]=\"true\" [showTime]=\"true\" id=\"created_at\" [(ngModel)]=\"dadosModulo.created_at\" name=\"created_at\" dateFormat=\"dd/mm/yy\"\n                            [inline]=\"false\" [locale]=\"pt\" [readonlyInput]=\"true\" [showIcon]=\"false\" >\n                            </p-calendar>\n                          <label class=\"l\" for=\"created_at\">Data criação:</label>\n                      </span>\n                  </div>\n              </div>\n\n\n\n              <div class=\"ui-g-12 ui-md-12 ui-lg-3\">\n                  <div class=\"ui-inputgroup\">\n                      <span class=\"ui-inputgroup-addon\"><i class=\"material-icons\">event</i></span>\n                      <span class=\"md-inputfield md-inputfield-fill l\">\n                          <p-calendar [disabled]=\"true\" [showTime]=\"true\" id=\"updated_at\" [(ngModel)]=\"dadosModulo.updated_at\" name=\"updated_at\" dateFormat=\"dd/mm/yy\"\n                            [inline]=\"false\" [locale]=\"pt\" [readonlyInput]=\"true\" [showIcon]=\"false\" >\n                            </p-calendar>\n                          <label class=\"l\" for=\"updated_at\">Data atualização:</label>\n                      </span>\n                  </div>\n              </div>\n          </p-fieldset>\n\n        </p-tabPanel>\n\n        <br/>\n\n      <!--BOTÕES-->\n        <div class=\"ui-g-12\" style=\"text-align: left\">\n            <button class=\"btnSalvar\" pButton type=\"submit\"  icon=\"fa-check\" label=\"Salvar\" (click)=\"salvar(form)\" [disabled]=\"form.invalid  \" ></button>\n            <button pButton type=\"text\"  icon=\"fa-close\" label=\"Fechar\"    (click)=\"showDialogClose(false, form)\" class=\"btnFechar\"></button>\n        </div>\n     <!-- FIM BOTÕES-->\n    </div>\n        <p-messages [(value)]=\"msgsTelaCadastro\"></p-messages>\n    </p-tabView>\n    </form>\n    </p-dialog>\n    <!-- FIM CAIXA DE DIALOGO -->\n    </div>\n    </div>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/cadastro/modulo/modulo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Modulo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuloComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_modulo_service__ = __webpack_require__("../../../../../src/app/cadastro/modulo/services/modulo.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__breadcrumb_service__ = __webpack_require__("../../../../../src/app/breadcrumb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_services_auth_service__ = __webpack_require__("../../../../../src/app/auth/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Modulo = (function () {
    function Modulo(nome, id_user, id_cliente) {
        this.id_usuario = id_user;
        this.id_cliente = id_cliente;
        this.name_user = nome;
    }
    return Modulo;
}());

var ModuloComponent = (function () {
    function ModuloComponent(confirmation, title, breadcrumbService, usuarioSistema, moduloService) {
        this.confirmation = confirmation;
        this.title = title;
        this.breadcrumbService = breadcrumbService;
        this.usuarioSistema = usuarioSistema;
        this.moduloService = moduloService;
        this.pt = [];
        this.modulos = [];
        this.dadosModulos = new Modulo(this.nomeUsuarioLogado, this.idUsuarioLogado, this.idEmpresaUsuarioLogado);
        this.dadosModulo = new Modulo(this.nomeUsuarioLogado, this.idUsuarioLogado, this.idEmpresaUsuarioLogado);
        this.display = false;
        this.msgs = [];
        this.msgsTelaCadastro = [];
        this.cols = [
            { field: 'modulo', header: 'MODULO', style: 'col-modulo' },
        ];
        this.breadcrumbService.setItems([
            { label: 'Permissões / Modulos' }
        ]);
    }
    ModuloComponent.prototype.salvar = function (form) {
        var _this = this;
        this.moduloService
            .salvar(this.dadosModulo)
            .toPromise()
            .then(function (res) {
            if ("" + res.status === '400') {
                _this.msgsTelaCadastro.push({ severity: 'error', summary: "" + res.statusText, detail: '' });
            }
            else {
                _this.msgs.push({ severity: 'success', summary: 'Sucesso!', detail: 'Modulo salvo com sucesso.' });
                _this.listar();
                _this.fecharMensagem();
                form.reset();
                _this.display = false;
            }
        })
            .catch(function (erro) {
            return _this.msgsTelaCadastro.push({ severity: 'error', summary: 'Ops!', detail: ' Erro ao tentar salvar o Mudulo ' });
        });
        this.fecharMensagem();
    };
    ModuloComponent.prototype.buscarPorId = function (id) {
        var _this = this;
        this.moduloService
            .buscarPorId(id)
            .then(function (dadosModulo) {
            _this.dadosModulo = dadosModulo;
        })
            .catch(function (erro) {
            return _this.msgs.push({ severity: 'error', summary: 'Ops! ', detail: 'Erro ao tentar listar o modulo!' });
        });
        this.fecharMensagem();
    };
    ModuloComponent.prototype.listar = function () {
        var _this = this;
        this.moduloService.lista()
            .then(function (modulos) { return (_this.modulos = modulos); })
            .catch(function (erro) {
            return _this.msgs.push({ severity: 'error', summary: 'Ops! ', detail: 'Erro ao tentar listar os modulos!' });
        });
    };
    ModuloComponent.prototype.excluir = function (modulo) {
        var _this = this;
        this.moduloService.excluir(modulo.id)
            .then(function () {
            _this.msgs.push({ severity: 'success', summary: 'Sucesso!', detail: 'Modulo excluido !'
            });
            _this.listar();
            _this.fecharMensagem();
        })
            .catch(function (erro) {
            return _this.msgs.push({ severity: 'error', summary: 'Ops! ', detail: 'Erro ao tentar listar o modulo!' });
        });
        this.listar();
        this.fecharMensagem();
    };
    ModuloComponent.prototype.confirmarExclusao = function (modulo) {
        var _this = this;
        this.confirmation.confirm({
            message: 'Tem certeza que deseja excluir?',
            accept: function () {
                _this.excluir(modulo);
            }
        });
    };
    ModuloComponent.prototype.onRowSelect = function (event) {
        this.buscarPorId(event.data.id);
        this.msgsTelaCadastro = [];
        this.msgs = [];
        this.display = true;
    };
    ModuloComponent.prototype.fecharMensagem = function () {
        var _this = this;
        setTimeout(function () {
            _this.msgs = [];
            _this.msgsTelaCadastro = [];
        }, 5000);
    };
    ModuloComponent.prototype.limparFormulario = function (form) {
        form.reset();
    };
    ModuloComponent.prototype.showDialogOpen = function (param, id) {
        if (id) {
            this.buscarPorId(id);
        }
        this.msgsTelaCadastro = [];
        this.msgs = [];
        this.dadosModulos = new Modulo(this.nomeUsuarioLogado, this.idUsuarioLogado, this.idEmpresaUsuarioLogado);
        this.dadosModulo = new Modulo(this.nomeUsuarioLogado, this.idUsuarioLogado, this.idEmpresaUsuarioLogado);
        this.display = param;
    };
    ModuloComponent.prototype.showDialogClose = function (param, form) {
        this.limparFormulario(form);
        this.msgsTelaCadastro = [];
        this.msgs = [];
        this.display = param;
    };
    ModuloComponent.prototype.getUserSistema = function () {
        this.idUsuarioLogado = this.usuarioSistema.getUser().id;
        this.idEmpresaUsuarioLogado = this.usuarioSistema.getUser().id_cliente;
        this.nomeUsuarioLogado = this.usuarioSistema.getUser().name;
    };
    ModuloComponent.prototype.ngOnInit = function () {
        this.title.setTitle('Modulos');
        this.listar();
        this.columnOptions = [];
        for (var i = 0; i < this.cols.length; i++) {
            this.columnOptions.push({
                label: this.cols[i].header,
                value: this.cols[i]
            });
        }
        this.acoesRelacionadas = [
            {
                label: 'Início',
                icon: 'fa-home',
                url: 'http://localhost:4200/#/admin/dashboard'
            },
            {
                label: 'Usuário',
                icon: 'ui-icon-person-add',
                url: 'http://localhost:4200/#/admin/usuarios'
            },
            {
                label: 'Clientes',
                icon: 'ui-icon-domain ',
                url: 'http://localhost:4200/#/admin/cliente'
            },
            {
                label: 'Permissões',
                icon: 'ui-icon-lock',
                url: 'http://localhost:4200/#/admin/permissao'
            },
            {
                label: 'Modulos',
                icon: 'ui-icon-widgets',
                url: 'http://localhost:4200/#/admin/modulo'
            },
            {
                label: 'Veículo',
                icon: 'ui-icon-train',
                url: 'http://localhost:4200/#/admin/veiculo'
            },
            {
                label: 'Funcionário',
                icon: 'ui-icon-people',
                url: 'http://localhost:4200/#/pessoa'
            }
        ];
        this.pt = {
            firstDayOfWeek: 0,
            dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
            dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sa'],
            dayNamesMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sa'],
            monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agsoto',
                'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            today: 'Today',
            clear: 'Clear'
        };
    };
    ModuloComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-modulo',
            template: __webpack_require__("../../../../../src/app/cadastro/modulo/modulo.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cadastro/modulo/modulo.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["ConfirmationService"],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["Title"],
            __WEBPACK_IMPORTED_MODULE_4__breadcrumb_service__["a" /* BreadcrumbService */],
            __WEBPACK_IMPORTED_MODULE_5__auth_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_0__services_modulo_service__["a" /* ModuloService */]])
    ], ModuloComponent);
    return ModuloComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cadastro/modulo/services/modulo.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModuloService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModuloService = (function () {
    function ModuloService(httpCliente) {
        this.httpCliente = httpCliente;
    }
    ModuloService.prototype.salvar = function (dados) {
        return !dados.id ? this.httpCliente.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].urlBase + "/admin/modulo/", dados) :
            this.httpCliente.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].urlBase + "/admin/modulo/" + dados.id, dados);
    };
    ModuloService.prototype.buscarPorId = function (id) {
        var _this = this;
        return this.httpCliente.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].urlBase + "/admin/modulo/" + id)
            .toPromise()
            .then(function (response) {
            var modulo = response;
            _this.converterStringsParaDatas([modulo]);
            return modulo;
        });
    };
    ModuloService.prototype.lista = function () {
        return this.httpCliente.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].urlBase + "/admin/modulo/")
            .toPromise()
            .then(function (response) { return response; });
    };
    ModuloService.prototype.excluir = function (id) {
        return this.httpCliente.delete(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].urlBase + "/admin/modulo/" + id)
            .toPromise()
            .then(function () { return null; });
    };
    ModuloService.prototype.converterStringsParaDatas = function (modulos) {
        for (var _i = 0, modulos_1 = modulos; _i < modulos_1.length; _i++) {
            var modulo = modulos_1[_i];
            modulo.created_at = __WEBPACK_IMPORTED_MODULE_3_moment__(modulo.created_at, 'YYYY-MM-DD, h:mm:ss a').toDate();
            if (modulo.updated_at) {
                modulo.updated_at = __WEBPACK_IMPORTED_MODULE_3_moment__(modulo.updated_at, 'YYYY-MM-DD, h:mm:ss a').toDate();
            }
        }
    };
    ModuloService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ModuloService);
    return ModuloService;
}());



/***/ }),

/***/ "../../../../../src/app/cadastro/permissao/permissao.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cadastro/permissao/permissao.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n    <div class=\"ui-g-12\" style=\"margin-top: -15px;\">\n\n\n    <div class=\"card shadow-box ui-shadow-3\">\n\n    <form autocomplete=\"off\">\n\n    <p-growl [(value)]=\"msgs\" [sticky]=\"true\"></p-growl>\n\n    </form>\n\n    <p-toolbar>\n    <div class=\"ui-toolbar-group-left btnpanel ui-g-12 ui-md-12\">\n    <button pButton type=\"button\"   (click)=\" getUserSistema()\"  (click)=\"showDialogOpen(true, null)\" label=\"Nova permissão\" icon=\"ui-icon-lock\" class=\"btnNovo\" id=\"id-btnNovo\"></button>\n    <i class=\"material-icons btnIcon\" style=\"vertical-align:middle; color: #4d4948\">apps</i>\n    <p-splitButton icon=\"ui-icon-format-list-bulleted \" label=\"Acões relacionadas\" [model]=\"acoesRelacionadas\" styleClass=\"ui-button-warning  btnAcoes\"\n        id=\"id-btnAcoes\"></p-splitButton>\n\n\n    <div class=\"ui-g-12 ui-md-9\" class=\"pesquisarPermissao\" id=\"id-pesquisar\">\n        <div class=\"ui-inputgroup\">\n            <button pButton type=\"button\" icon=\"ui-icon-search\"></button>\n            <span class=\"md-inputfield\">\n                <input #gb type=\"text\" pInputText class=\"pesquisarInput\" (keyup)=\"listar()\">\n                <label>Pesquisar</label>\n            </span>\n        </div>\n    </div>\n    </div>\n\n    <div class=\"ui-toolbar-group-right btnpanel\">\n\n    </div>\n\n    </p-toolbar>\n\n\n\n    <p-panel>\n         <!--DATA TABLE-->\n          <p-dataTable\n          [value]=\"permissoes\"\n          [paginator]=\"true\"\n          [rows]=\"10\"\n          [responsive]=\"true\"\n          [rowsPerPageOptions]=\"[3,5,10,20,30,50]\"\n          [globalFilter]=\"gb\"\n          selectionMode=\"single\"\n          [(selection)]=\"permissaoSelecionada\"\n          dataKey=\"id\"\n          #table\n          emptyMessage=\"Nenhum registro encontrado\"\n          sortMode=\"multiple\"\n          (onRowSelect)=\"onRowSelect($event)\">\n\n\n\n        <p-column *ngFor=\"let col of cols\" [sortable]=\"true\" [field]=\"col.field\" [header]=\"col.header\"  [styleClass]=\"col.style\" [filter]=\"false\">\n            <ng-template let-permissao=\"rowData\" let-ri=\"rowIndex\"  pTemplate=\"body\">\n\n                <div *ngIf=\"col.field=='permissao'\" >\n                    <span  >{{ permissao.permissao }}</span>\n                </div>\n\n              </ng-template>\n        </p-column>\n\n\n        <p-column styleClass=\"col-opcoes\" header=\"AÇÕES\">\n            <ng-template let-permissao=\"rowData\" pTemplate=\"body\">\n                <button pButton icon=\"ui-icon-edit\" pTooltip=\"Editar\" type=\"submit\" tooltipPosition=\"top\" (click)=\"showDialogOpen(true,permissao.id)\"></button>\n                <button pButton icon=\"ui-icon-delete-forever\" pButton (click)=\"confirmarExclusao(permissao)\" pTooltip=\"Excluir\" tooltipPosition=\"top\"\n                    class=\"ui-button-danger\"></button>\n            </ng-template>\n        </p-column>\n\n        <p-footer class=\"totalRegistro\">Total: {{ table.totalRecords }}  registro(s)</p-footer>\n\n\n        <p-footer>\n          <div style=\"text-align:right\">\n              <p-multiSelect defaultLabel=\"Escolha\" selectedItemsLabel=\"{0} Itens selecionados\" [options]=\"columnOptions\" [(ngModel)]=\"cols\"></p-multiSelect>\n          </div>\n      </p-footer>\n       </p-dataTable>\n       <!--FIM DATATABLE-->\n    </p-panel>\n\n\n    <!-- CAIXA DE DIALOGO -->\n    <p-dialog header=\"Cadastro Permissão\" [(visible)]=\"display\" modal=\"modal\"  [responsive]=\"true\" [width]=\"670\">\n    <form #form=\"ngForm\" autocomplete=\"off\" >\n      <p-tabView  >\n\n    <div class=\"ui-g\" *ngIf=\"dadosPermissao\">\n\n        <p-tabPanel header=\"Permissão\" leftIcon=\"ui-icon-lock\">\n            <div class=\"ui-g-12\">\n              <div class=\"ui-g form-group\">\n\n\n              <div class=\"ui-g-12 ui-md-12 ui-lg-12\" style=\"width: 100%;\" >\n                  <div class=\"ui-inputgroup\">\n                      <span class=\"ui-inputgroup-addon\"><i class=\"material-icons\">lock</i></span>\n                      <span class=\"md-inputfield md-inputfield-fill\">\n                          <input required minlength=\"3\" autocomplete=\"off\" id=\"permissao\" type=\"text\" pInputText style=\"width: 100%; \" #permissao=\"ngModel\"   name=\"permissao\"  [(ngModel)]=\"dadosPermissao.permissao\" >\n                          <label for=\"permissao\">Criar permissão:</label>\n\n                          <div class=\"ui-message ui-messages-error positionMenssageErrorPermissao\" *ngIf=\"permissao.errors && (permissao.dirty || permissao.touched)\">\n                                *Mínimo de 3 caracteres.\n                          </div>\n\n                      </span>\n                  </div>\n              </div>\n\n\n            </div>\n          </div>\n\n          <p-fieldset legend=\"Outras Informações\" toggleable=\"true\" collapsed = \"true\">\n\n            <div class=\"ui-g-12 ui-md-12 ui-lg-6\"  >\n                <div class=\"ui-inputgroup\">\n                    <span class=\"ui-inputgroup-addon\"><i class=\"material-icons\">account_circle</i></span>\n                    <span class=\"md-inputfield md-inputfield-fill\">\n                        <input disabled id=\"name_user\" type=\"text\" pInputText style=\"width: 100%; \" name=\"name_user\" [(ngModel)]=\"dadosPermissao.name_user\">\n                        <label for=\"name_user\">Criado por:</label>\n                    </span>\n                </div>\n            </div>\n\n\n              <div class=\"ui-g-12 ui-md-12 ui-lg-3\">\n                  <div class=\"ui-inputgroup\">\n                      <span class=\"ui-inputgroup-addon\"><i class=\"material-icons\">event</i></span>\n                      <span class=\"md-inputfield md-inputfield-fill l\">\n                          <p-calendar [disabled]=\"true\" [showTime]=\"true\" id=\"created_at\" [(ngModel)]=\"dadosPermissao.created_at\" name=\"created_at\" dateFormat=\"dd/mm/yy\"\n                            [inline]=\"false\" [locale]=\"pt\" [readonlyInput]=\"true\" [showIcon]=\"false\" >\n                            </p-calendar>\n                          <label class=\"l\" for=\"created_at\">Data criação:</label>\n                      </span>\n                  </div>\n              </div>\n\n\n\n              <div class=\"ui-g-12 ui-md-12 ui-lg-3\">\n                  <div class=\"ui-inputgroup\">\n                      <span class=\"ui-inputgroup-addon\"><i class=\"material-icons\">event</i></span>\n                      <span class=\"md-inputfield md-inputfield-fill l\">\n                          <p-calendar [disabled]=\"true\" [showTime]=\"true\" id=\"updated_at\" [(ngModel)]=\"dadosPermissao.updated_at\" name=\"updated_at\" dateFormat=\"dd/mm/yy\"\n                            [inline]=\"false\" [locale]=\"pt\" [readonlyInput]=\"true\" [showIcon]=\"false\" >\n                            </p-calendar>\n                          <label class=\"l\" for=\"updated_at\">Data atualização:</label>\n                      </span>\n                  </div>\n              </div>\n          </p-fieldset>\n\n        </p-tabPanel>\n\n        <br/>\n\n      <!--BOTÕES-->\n        <div class=\"ui-g-12\" style=\"text-align: left\">\n            <button class=\"btnSalvar\" pButton type=\"submit\"  icon=\"fa-check\" label=\"Salvar\" (click)=\"salvar(form)\" [disabled]=\"form.invalid  \" ></button>\n            <button pButton type=\"text\"  icon=\"fa-close\" label=\"Fechar\"    (click)=\"showDialogClose(false, form)\" class=\"btnFechar\"></button>\n        </div>\n     <!-- FIM BOTÕES-->\n    </div>\n        <p-messages [(value)]=\"msgsTelaCadastro\"></p-messages>\n    </p-tabView>\n    </form>\n    </p-dialog>\n    <!-- FIM CAIXA DE DIALOGO -->\n    </div>\n    </div>\n    </div>\n"

/***/ }),

/***/ "../../../../../src/app/cadastro/permissao/permissao.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Permissao */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissaoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_permissao_service__ = __webpack_require__("../../../../../src/app/cadastro/permissao/services/permissao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_services_auth_service__ = __webpack_require__("../../../../../src/app/auth/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__breadcrumb_service__ = __webpack_require__("../../../../../src/app/breadcrumb.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Permissao = (function () {
    function Permissao(nome, id_user, id_cliente) {
        this.id_usuario = id_user;
        this.id_cliente = id_cliente;
        this.name_user = nome;
    }
    return Permissao;
}());

var PermissaoComponent = (function () {
    function PermissaoComponent(permissaoService, confirmation, title, breadcrumbService, usuarioSistema) {
        this.permissaoService = permissaoService;
        this.confirmation = confirmation;
        this.title = title;
        this.breadcrumbService = breadcrumbService;
        this.usuarioSistema = usuarioSistema;
        this.pt = [];
        this.permissoes = [];
        this.dadosPermissoes = new Permissao(this.nomeUsuarioLogado, this.idUsuarioLogado, this.idEmpresaUsuarioLogado);
        this.dadosPermissao = new Permissao(this.nomeUsuarioLogado, this.idUsuarioLogado, this.idEmpresaUsuarioLogado);
        this.display = false;
        this.msgs = [];
        this.msgsTelaCadastro = [];
        this.cols = [
            { field: 'permissao', header: 'PERMISSÃO', style: 'col-permissao' },
        ];
        this.breadcrumbService.setItems([
            { label: 'Permissões / Cadastrar permissões' }
        ]);
    }
    PermissaoComponent.prototype.salvar = function (form) {
        var _this = this;
        this.permissaoService
            .salvar(this.dadosPermissao)
            .toPromise()
            .then(function (res) {
            if ("" + res.status === '400') {
                _this.msgsTelaCadastro.push({ severity: 'error', summary: "" + res.statusText, detail: '' });
            }
            else {
                _this.msgs.push({ severity: 'success', summary: 'Sucesso!', detail: 'Permissão salva com sucesso.' });
                _this.listar();
                _this.fecharMensagem();
                form.reset();
                _this.display = false;
            }
        })
            .catch(function (erro) {
            return _this.msgsTelaCadastro.push({ severity: 'error', summary: 'Ops!', detail: ' Erro ao tentar salvar a permissão ' });
        });
        this.fecharMensagem();
    };
    PermissaoComponent.prototype.buscarPorId = function (id) {
        var _this = this;
        this.permissaoService
            .buscarPorId(id)
            .then(function (dadosPermissao) {
            _this.dadosPermissao = dadosPermissao;
        })
            .catch(function (erro) {
            return _this.msgs.push({ severity: 'error', summary: 'Ops! ', detail: 'Erro ao tentar listar a permissão!' });
        });
        this.fecharMensagem();
    };
    PermissaoComponent.prototype.listar = function () {
        var _this = this;
        this.permissaoService.lista()
            .then(function (permissoes) { return (_this.permissoes = permissoes); })
            .catch(function (erro) {
            return _this.msgs.push({ severity: 'error', summary: 'Ops! ', detail: 'Erro ao tentar listar as permissões!' });
        });
    };
    PermissaoComponent.prototype.excluir = function (permissao) {
        var _this = this;
        this.permissaoService
            .excluir(permissao.id)
            .then(function () {
            _this.msgs.push({ severity: 'success', summary: 'Sucesso!', detail: 'Permissão excluida !'
            });
            _this.listar();
            _this.fecharMensagem();
        })
            .catch(function (erro) {
            return _this.msgs.push({ severity: 'error', summary: 'Ops! ', detail: 'Erro ao tentar listar a permissão!' });
        });
        this.listar();
        this.fecharMensagem();
    };
    PermissaoComponent.prototype.confirmarExclusao = function (permissao) {
        var _this = this;
        this.confirmation.confirm({
            message: 'Tem certeza que deseja excluir?',
            accept: function () {
                _this.excluir(permissao);
            }
        });
    };
    PermissaoComponent.prototype.onRowSelect = function (event) {
        this.buscarPorId(event.data.id);
        this.msgsTelaCadastro = [];
        this.msgs = [];
        this.display = true;
    };
    PermissaoComponent.prototype.fecharMensagem = function () {
        var _this = this;
        setTimeout(function () {
            _this.msgs = [];
            _this.msgsTelaCadastro = [];
        }, 5000);
    };
    PermissaoComponent.prototype.limparFormulario = function (form) {
        form.reset();
    };
    PermissaoComponent.prototype.showDialogOpen = function (param, id) {
        if (id) {
            this.buscarPorId(id);
        }
        this.msgsTelaCadastro = [];
        this.msgs = [];
        this.dadosPermissoes = new Permissao(this.nomeUsuarioLogado, this.idUsuarioLogado, this.idEmpresaUsuarioLogado);
        this.dadosPermissao = new Permissao(this.nomeUsuarioLogado, this.idUsuarioLogado, this.idEmpresaUsuarioLogado);
        this.display = param;
    };
    PermissaoComponent.prototype.showDialogClose = function (param, form) {
        this.limparFormulario(form);
        this.msgsTelaCadastro = [];
        this.msgs = [];
        this.display = param;
    };
    PermissaoComponent.prototype.getUserSistema = function () {
        this.idUsuarioLogado = this.usuarioSistema.getUser().id;
        this.idEmpresaUsuarioLogado = this.usuarioSistema.getUser().id_cliente;
        this.nomeUsuarioLogado = this.usuarioSistema.getUser().name;
    };
    PermissaoComponent.prototype.ngOnInit = function () {
        this.title.setTitle('Permissões');
        this.listar();
        this.columnOptions = [];
        for (var i = 0; i < this.cols.length; i++) {
            this.columnOptions.push({
                label: this.cols[i].header,
                value: this.cols[i]
            });
        }
        this.acoesRelacionadas = [
            {
                label: 'Início',
                icon: 'fa-home',
                url: 'http://localhost:4200/#/admin/dashboard'
            },
            {
                label: 'Usuário',
                icon: 'ui-icon-person-add',
                url: 'http://localhost:4200/#/admin/usuarios'
            },
            {
                label: 'Clientes',
                icon: 'ui-icon-domain ',
                url: 'http://localhost:4200/#/admin/cliente'
            },
            {
                label: 'Permissões',
                icon: 'ui-icon-lock',
                url: 'http://localhost:4200/#/admin/permissao'
            },
            {
                label: 'Modulos',
                icon: 'ui-icon-widgets',
                url: 'http://localhost:4200/#/admin/modulo'
            },
            {
                label: 'Veículo',
                icon: 'ui-icon-train',
                url: 'http://localhost:4200/#/admin/veiculo'
            },
            {
                label: 'Funcionário',
                icon: 'ui-icon-people',
                url: 'http://localhost:4200/#/pessoa'
            }
        ];
        this.pt = {
            firstDayOfWeek: 0,
            dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
            dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sa'],
            dayNamesMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sa'],
            monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agsoto',
                'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            today: 'Today',
            clear: 'Clear'
        };
    };
    PermissaoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-permissao',
            template: __webpack_require__("../../../../../src/app/cadastro/permissao/permissao.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cadastro/permissao/permissao.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_permissao_service__["a" /* PermissaoService */],
            __WEBPACK_IMPORTED_MODULE_1_primeng_primeng__["ConfirmationService"],
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["Title"],
            __WEBPACK_IMPORTED_MODULE_5__breadcrumb_service__["a" /* BreadcrumbService */],
            __WEBPACK_IMPORTED_MODULE_3__auth_services_auth_service__["a" /* AuthService */]])
    ], PermissaoComponent);
    return PermissaoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/cadastro/permissao/services/permissao.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissaoService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PermissaoService = (function () {
    function PermissaoService(httpCliente) {
        this.httpCliente = httpCliente;
    }
    PermissaoService.prototype.salvar = function (dados) {
        return !dados.id ? this.httpCliente.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].urlBase + "/admin/permissao/", dados) :
            this.httpCliente.put(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].urlBase + "/admin/permissao/" + dados.id, dados);
    };
    PermissaoService.prototype.buscarPorId = function (id) {
        var _this = this;
        return this.httpCliente.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].urlBase + "/admin/permissao/" + id)
            .toPromise()
            .then(function (response) {
            var permissao = response;
            _this.converterStringsParaDatas([permissao]);
            return permissao;
        });
    };
    PermissaoService.prototype.lista = function () {
        return this.httpCliente.get(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].urlBase + "/admin/permissao")
            .toPromise()
            .then(function (response) { return response; });
    };
    PermissaoService.prototype.excluir = function (id) {
        return this.httpCliente.delete(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].urlBase + "/admin/permissao/" + id)
            .toPromise()
            .then(function () { return null; });
    };
    PermissaoService.prototype.converterStringsParaDatas = function (permissoes) {
        for (var _i = 0, permissoes_1 = permissoes; _i < permissoes_1.length; _i++) {
            var permissao = permissoes_1[_i];
            permissao.created_at = __WEBPACK_IMPORTED_MODULE_3_moment__(permissao.created_at, 'YYYY-MM-DD, h:mm:ss a').toDate();
            if (permissao.updated_at) {
                permissao.updated_at = __WEBPACK_IMPORTED_MODULE_3_moment__(permissao.updated_at, 'YYYY-MM-DD, h:mm:ss a').toDate();
            }
        }
    };
    PermissaoService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], PermissaoService);
    return PermissaoService;
}());



/***/ }),

/***/ "../../../../../src/app/cadastro/usuarios/services/usuario.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuarioService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UsuarioService = (function () {
    function UsuarioService(httpCliente) {
        this.httpCliente = httpCliente;
    }
    UsuarioService.prototype.salvar = function (dados) {
        return !dados.id ? this.httpCliente.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].urlBase + "/auth/user/", dados) :
            this.httpCliente.put(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].urlBase + "/auth/user/" + dados.id, dados);
    };
    UsuarioService.prototype.buscarPorId = function (id) {
        var _this = this;
        return this.httpCliente.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].urlBase + "/auth/user/" + id)
            .toPromise()
            .then(function (response) {
            var usuario = response;
            _this.converterStringsParaDatas([usuario]);
            return usuario;
        });
    };
    UsuarioService.prototype.lista = function () {
        return this.httpCliente.get(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].urlBase + "/auth/user")
            .toPromise()
            .then(function (response) { return response; });
    };
    UsuarioService.prototype.excluir = function (id) {
        return this.httpCliente.delete(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].urlBase + "/auth/user/" + id)
            .toPromise()
            .then(function () { return null; });
    };
    UsuarioService.prototype.converterStringsParaDatas = function (usuarios) {
        for (var _i = 0, usuarios_1 = usuarios; _i < usuarios_1.length; _i++) {
            var usuario = usuarios_1[_i];
            usuario.created_at = __WEBPACK_IMPORTED_MODULE_2_moment__(usuario.created_at, 'YYYY-MM-DD, h:mm:ss a').toDate();
            if (usuario.updated_at) {
                usuario.updated_at = __WEBPACK_IMPORTED_MODULE_2_moment__(usuario.updated_at, 'YYYY-MM-DD, h:mm:ss a').toDate();
            }
        }
    };
    UsuarioService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], UsuarioService);
    return UsuarioService;
}());



/***/ }),

/***/ "../../../../../src/app/cadastro/usuarios/usuarios.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n<div class=\"ui-g-12\" style=\"margin-top: -15px;\">\r\n\r\n\r\n<!--\r\n<h2><i class=\"material-icons\" style=\"vertical-align:middle\">person</i> Usuários {{lancamento.name}}</h2>\r\n-->\r\n\r\n<div class=\"card shadow-box ui-shadow-3\">\r\n\r\n<form autocomplete=\"off\">\r\n\r\n<p-growl [(value)]=\"msgs\" [sticky]=\"true\"></p-growl>\r\n\r\n</form>\r\n\r\n<p-toolbar>\r\n<div class=\"ui-toolbar-group-left btnpanel ui-g-12 ui-md-12\">\r\n<button pButton type=\"button\"   (click)=\" getUserSistema()\"  (click)=\"showDialogOpen(true, null)\" label=\"Novo usuário\" icon=\"ui-icon-person-add\" class=\"btnNovo\" id=\"id-btnNovo\"></button>\r\n<i class=\"material-icons btnIcon\" style=\"vertical-align:middle; color: #4d4948\">apps</i>\r\n<p-splitButton icon=\"ui-icon-format-list-bulleted \" label=\"Acões relacionadas\" [model]=\"acoesRelacionadas\" styleClass=\"ui-button-warning  btnAcoes\"\r\n    id=\"id-btnAcoes\"></p-splitButton>\r\n\r\n\r\n<div class=\"ui-g-12 ui-md-9\" class=\"pesquisar\" id=\"id-pesquisar\">\r\n    <div class=\"ui-inputgroup\">\r\n        <button pButton type=\"button\" icon=\"ui-icon-search\"></button>\r\n        <span class=\"md-inputfield\">\r\n            <input #gb type=\"text\" pInputText class=\"pesquisarInput\" (keyup)=\"listar()\">\r\n            <label>Pesquisar</label>\r\n        </span>\r\n    </div>\r\n</div>\r\n</div>\r\n\r\n<div class=\"ui-toolbar-group-right btnpanel\">\r\n\r\n</div>\r\n\r\n</p-toolbar>\r\n\r\n\r\n\r\n<p-panel>\r\n     <!--DATA TABLE-->\r\n      <p-dataTable\r\n      [value]=\"usuarios\"\r\n      [paginator]=\"true\"\r\n      [rows]=\"10\"\r\n      [responsive]=\"true\"\r\n      [rowsPerPageOptions]=\"[3,5,10,20,30,50]\"\r\n      [globalFilter]=\"gb\"\r\n      selectionMode=\"single\"\r\n      [(selection)]=\"lancamentoSelecionado\"\r\n      dataKey=\"id\"\r\n      #table\r\n      emptyMessage=\"Nenhum registro encontrado\"\r\n      sortMode=\"multiple\"\r\n      (onRowSelect)=\"onRowSelect($event)\">\r\n\r\n\r\n\r\n    <p-column *ngFor=\"let col of cols\" [sortable]=\"true\" [field]=\"col.field\" [header]=\"col.header\"  [styleClass]=\"col.style\" [filter]=\"false\">\r\n        <ng-template let-user=\"rowData\" let-ri=\"rowIndex\"  pTemplate=\"body\">\r\n            <div *ngIf=\"col.field=='created_at'\">\r\n                <span class=\"col-data\" >{{ user.created_at | date:\"dd/MM/yyyy 'às' h'h':mm \" }}</span>\r\n            </div>\r\n\r\n            <div *ngIf=\"col.field=='updated_at'\">\r\n              <span class=\"col-data\">{{ user.updated_at | date:\"dd/MM/yyyy 'às' h'h':mm \"}}</span>\r\n            </div>\r\n\r\n            <div *ngIf=\"col.field=='status'\">\r\n                <span [style.color]=\"user.status === 1 ? 'green' : 'red'\" >{{ user.status === 1 ? 'Ativo' : 'Inativo'}}</span>\r\n            </div>\r\n\r\n            <div *ngIf=\"col.field=='name'\" >\r\n                <span  >{{ user.name }}</span>\r\n            </div>\r\n\r\n            <div *ngIf=\"col.field=='email'\">\r\n                <span >{{ user.email }}</span>\r\n            </div>\r\n       <!--\r\n            <div *ngIf=\"col.field=='permissao'\">\r\n              {{  user.permissao}}\r\n            </div>\r\n        -->\r\n          </ng-template>\r\n\r\n\r\n        </p-column>\r\n\r\n\r\n    <p-column styleClass=\"col-opcoes\" header=\"AÇÕES\">\r\n        <ng-template let-user=\"rowData\" pTemplate=\"body\">\r\n            <button pButton icon=\"ui-icon-edit\" pTooltip=\"Editar\" type=\"submit\" tooltipPosition=\"top\" (click)=\"showDialogOpen(true,user.id)\"></button>\r\n            <button pButton icon=\"ui-icon-delete-forever\" pButton (click)=\"confirmarExclusao(user)\" pTooltip=\"Excluir\" tooltipPosition=\"top\"\r\n                class=\"ui-button-danger\"></button>\r\n        </ng-template>\r\n    </p-column>\r\n\r\n    <p-footer class=\"totalRegistro\">Total: {{ table.totalRecords }}  registro(s)</p-footer>\r\n\r\n\r\n    <p-footer>\r\n      <div style=\"text-align:right\">\r\n          <p-multiSelect defaultLabel=\"Escolha\" selectedItemsLabel=\"{0} Itens selecionados\" [options]=\"columnOptions\" [(ngModel)]=\"cols\"></p-multiSelect>\r\n      </div>\r\n  </p-footer>\r\n   </p-dataTable>\r\n   <!--FIM DATATABLE-->\r\n</p-panel>\r\n\r\n\r\n<!-- CAIXA DE DIALOGO -->\r\n<p-dialog (onHide)=\"showDialogClose(false, form)\"  header=\"Cadastro Usuário\" [(visible)]=\"display\" modal=\"modal\"  [responsive]=\"true\" [width]=\"800\">\r\n<form #form=\"ngForm\" autocomplete=\"off\" >\r\n  <p-tabView  >\r\n\r\n<div class=\"ui-g\" *ngIf=\"dadosUsuario\">\r\n\r\n    <p-tabPanel header=\"Usuário\" leftIcon=\"ui-icon-person-pin\">\r\n        <div class=\"ui-g-12\">\r\n            <div class=\"ui-g form-group\">\r\n\r\n\r\n            <div class=\"ui-g-12 ui-md-12 ui-lg-12 status \" >\r\n                <div class=\"ui-inputgroup\">\r\n                    <label class=\"labelFormulario\">{{ dadosUsuario.status === true ? 'Ativo' : 'Inativo'}}</label>\r\n                    <p-inputSwitch  [(ngModel)]=\"dadosUsuario.status\" [ngModelOptions]=\"{standalone: 1}\"></p-inputSwitch>\r\n                </div>\r\n            </div>\r\n\r\n        <!--\r\n          <div class=\"ui-g-12 ui-md-12 ui-lg-12 usuarioStatus \" >\r\n              <div class=\"ui-inputgroup\">\r\n                <p-selectButton name=\"status\" [options]=\"status\" class=\"bt\"\r\n                  [(ngModel)]=\"dadosUsuario.status\">\r\n              </p-selectButton>\r\n              </div>\r\n          </div>\r\n        -->\r\n        <div class=\"ui-g-12 ui-md-12 ui-lg-6\">\r\n              <label class=\"labelFormulario\">Empresa:</label>\r\n              <div class=\"ui-inputgroup\">\r\n                  <span class=\"ui-inputgroup-addon\"><i class=\"material-icons\">domain</i></span>\r\n                  <p-dropdown [disabled]='false' required [options]=\"listaClienteCombo\" class=\"drop\"  placeholder=\"Selecione um cliente\" [style]=\"{'width':'100%'}\"\r\n                  [filter]=\"true\" [autoWidth]=\"false\" name=\"id_cliente\" id=\"cliente\" [(ngModel)]=\"dadosUsuario.id_cliente\" required></p-dropdown>\r\n\r\n              </div>\r\n          </div>\r\n\r\n          <div class=\"ui-g-12 ui-md-12 ui-lg-6\">\r\n              <label class=\"labelFormulario\">Permissão:</label>\r\n              <div class=\"ui-inputgroup\">\r\n                  <span class=\"ui-inputgroup-addon\"><i class=\"material-icons\">lock</i></span>\r\n                  <p-dropdown [options]=\"listaPermissaoCombo\" class=\"drop\" placeholder=\"Selecione uma Permissão\" id=\"permissao\" [style]=\"{'width':'100%'}\"\r\n                  [filter]=\"true\" required name=\"permissao\" [(ngModel)]=\"dadosUsuario.permissao\" ></p-dropdown>\r\n              </div>\r\n          </div>\r\n\r\n          <div class=\"ui-g-12 ui-md-12 ui-lg-6\">\r\n              <div class=\"ui-inputgroup\">\r\n                  <span class=\"ui-inputgroup-addon\"><i class=\"material-icons\">account_circle</i></span>\r\n                  <span class=\"md-inputfield md-inputfield-fill\">\r\n                      <input autocomplete=\"off\" id=\"nome\" type=\"text\" pInputText style=\"width: 100%; \" #nome=\"ngModel\"  required minlength=\"3\" name=\"name\"  [(ngModel)]=\"dadosUsuario.name\" >\r\n                      <label for=\"nome\">Nome:</label>\r\n\r\n                      <div class=\"ui-message ui-messages-error positionMenssageError\" *ngIf=\"nome.errors && (nome.dirty || nome.touched)\">\r\n                            *Mínimo de 3 caracteres.\r\n                      </div>\r\n\r\n                  </span>\r\n              </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"ui-g-12 ui-md-12 ui-lg-6\">\r\n              <div class=\"ui-inputgroup\">\r\n                  <span class=\"ui-inputgroup-addon\"><i class=\"material-icons\">email</i></span>\r\n                  <span class=\"md-inputfield md-inputfield-fill l\">\r\n                      <input  #email=\"ngModel\" email required autocomplete=\"off\" id=\"email\" type=\"text\" pInputText style=\"width: 100%; \" name=\"email\"  [(ngModel)]=\"dadosUsuario.email\">\r\n                      <label class=\"l\" for=\"email\">Email:</label>\r\n\r\n                     <div class=\"ui-message ui-messages-error positionMenssageError\" *ngIf=\"email.errors && (email.dirty || email.touched)\">\r\n                        *Email inválido!\r\n                     </div>\r\n\r\n                  </span>\r\n              </div>\r\n          </div>\r\n\r\n              <div class=\"ui-g-12 ui-md-12 ui-lg-6\">\r\n                  <div class=\"ui-inputgroup\">\r\n                      <span class=\"ui-inputgroup-addon\" (click)=\"mostrarSenhaTrueOrFalse()\"><i class=\"material-icons\">{{iconeSenha}}</i></span>\r\n                      <span class=\"md-inputfield md-inputfield-fill\" *ngIf=\"!mostrarSenha\" >\r\n                          <input #senha=\"ngModel\"  autocomplete=\"off\" required=\"{{ senhaTrue }}\" minlength=\"6\"  promptLabel=\"Digite sua senha.\" weakLabel=\"Fraca\" mediumLabel=\"Média\" strongLabel=\"Forte\" autocomplete=\"off\" class=\"ng-dirty ng-invalid\"  autocomplete=\"off\" id=\"senha\" pPassword type=\"password\" pInputText style=\"width: 100%\" name=\"senha\"  [(ngModel)]=\"dadosUsuario.senha\" pTooltip=\"Mínimo de 6 caracteres.\" tooltipEvent=\"focus\" tooltipPosition=\"top\">\r\n                          <label  for=\"senha\">Senha:</label>\r\n\r\n                          <div class=\"ui-message ui-messages-error positionMenssageError\" *ngIf=\"senha.errors && (senha.dirty || senha.touched)\">\r\n                                *Sua senha deve ter no mínimo 6 caracteres.\r\n                          </div>\r\n\r\n                      </span>\r\n\r\n                      <span class=\"md-inputfield md-inputfield-fill\" *ngIf=\"mostrarSenha\" >\r\n                          <input #senha=\"ngModel\"  autocomplete=\"off\" required=\"{{ senhaTrue }}\" minlength=\"6\"  promptLabel=\"Digite sua senha.\" weakLabel=\"Fraca\" mediumLabel=\"Média\" strongLabel=\"Forte\" autocomplete=\"off\" class=\"ng-dirty ng-invalid\"  autocomplete=\"off\" id=\"senha\" pPassword type=\"text\" pInputText style=\"width: 100%\" name=\"senha\"  [(ngModel)]=\"dadosUsuario.senha\" pTooltip=\"Mínimo de 6 caracteres.\" tooltipEvent=\"focus\" tooltipPosition=\"top\">\r\n                          <label  for=\"senha\">Senha:</label>\r\n\r\n                          <div class=\"ui-message ui-messages-error positionMenssageError\" *ngIf=\"senha.errors && (senha.dirty || senha.touched)\">\r\n                                *Sua senha deve ter no mínimo 6 caracteres.\r\n                          </div>\r\n\r\n                      </span>\r\n                  </div>\r\n              </div>\r\n\r\n              <div class=\"ui-g-12 ui-md-12 ui-lg-6\">\r\n                  <div class=\"ui-inputgroup\">\r\n                      <span class=\"ui-inputgroup-addon\" (click)=\"mostrarSenhaTrueOrFalse()\"><i class=\"material-icons\">{{iconeSenha}}</i></span>\r\n                      <span class=\"md-inputfield md-inputfield-fill\" *ngIf=\"!mostrarSenha\">\r\n                        <input  required=\"{{ senhaTrue }}\" minlength=\"6\" promptLabel=\"Repita sua senha.\" weakLabel=\"Fraca\" mediumLabel=\"Média\" strongLabel=\"Forte\" #password=\"ngModel\" class=\"ng-dirty ng-invalid\"  autocomplete=\"off\" id=\"confirmarSenha\"  pPassword type=\"password\" pInputText style=\"width: 100%\" name=\"password\"  [(ngModel)]=\"dadosUsuario.password\">\r\n                        <label for=\"confirmarSenha\">Confirmar senha:</label>\r\n\r\n                        <div class=\"ui-message ui-messages-error positionMenssageError\" *ngIf=\"password.errors && (password.dirty || password.touched)\">\r\n                               *Senha não confere!\r\n                         </div>\r\n\r\n                      </span>\r\n\r\n                      <span class=\"md-inputfield md-inputfield-fill\" *ngIf=\"mostrarSenha\">\r\n                          <input  required=\"{{ senhaTrue }}\" minlength=\"6\" promptLabel=\"Repita sua senha.\" weakLabel=\"Fraca\" mediumLabel=\"Média\" strongLabel=\"Forte\" #password=\"ngModel\" class=\"ng-dirty ng-invalid\"  autocomplete=\"off\" id=\"confirmarSenha\"  pPassword type=\"text\" pInputText style=\"width: 100%\" name=\"password\"  [(ngModel)]=\"dadosUsuario.password\">\r\n                          <label for=\"confirmarSenha\">Confirmar senha:</label>\r\n\r\n                          <div class=\"ui-message ui-messages-error positionMenssageError\" *ngIf=\"password.errors && (password.dirty || password.touched)\">\r\n                                 *Senha não confere!\r\n                           </div>\r\n\r\n                        </span>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n      <p-fieldset legend=\"Outras Informações\" toggleable=\"true\" collapsed = \"true\">\r\n\r\n        <div class=\"ui-g-12 ui-md-12 ui-lg-6\"  >\r\n            <div class=\"ui-inputgroup\">\r\n                <span class=\"ui-inputgroup-addon\"><i class=\"material-icons\">account_circle</i></span>\r\n                <span class=\"md-inputfield md-inputfield-fill\">\r\n                    <input disabled id=\"nameuser\" type=\"text\" pInputText style=\"width: 100%; \" name=\"nameuser\" [(ngModel)]=\"dadosUsuario.nameuser\">\r\n                    <label for=\"nameuser\">Criado por:</label>\r\n                </span>\r\n            </div>\r\n        </div>\r\n\r\n\r\n          <div class=\"ui-g-12 ui-md-12 ui-lg-3\">\r\n              <div class=\"ui-inputgroup\">\r\n                  <span class=\"ui-inputgroup-addon\"><i class=\"material-icons\">event</i></span>\r\n                  <span class=\"md-inputfield md-inputfield-fill l\">\r\n                      <p-calendar [disabled]=\"true\" [showTime]=\"true\" id=\"created_at\" [(ngModel)]=\"dadosUsuario.created_at\" name=\"created_at\" dateFormat=\"dd/mm/yy\"\r\n                        [inline]=\"false\" [locale]=\"pt\" [readonlyInput]=\"true\" [showIcon]=\"false\" >\r\n                        </p-calendar>\r\n                      <label class=\"l\" for=\"created_at\">Data criação:</label>\r\n                  </span>\r\n              </div>\r\n          </div>\r\n\r\n\r\n\r\n          <div class=\"ui-g-12 ui-md-12 ui-lg-3\">\r\n              <div class=\"ui-inputgroup\">\r\n                  <span class=\"ui-inputgroup-addon\"><i class=\"material-icons\">event</i></span>\r\n                  <span class=\"md-inputfield md-inputfield-fill l\">\r\n                      <p-calendar [disabled]=\"true\" [showTime]=\"true\" id=\"updated_at\" [(ngModel)]=\"dadosUsuario.updated_at\" name=\"updated_at\" dateFormat=\"dd/mm/yy\"\r\n                        [inline]=\"false\" [locale]=\"pt\" [readonlyInput]=\"true\" [showIcon]=\"false\" >\r\n                        </p-calendar>\r\n                      <label class=\"l\" for=\"updated_at\">Data atualização:</label>\r\n                  </span>\r\n              </div>\r\n          </div>\r\n      </p-fieldset>\r\n\r\n    </p-tabPanel>\r\n\r\n    <br/>\r\n\r\n  <!--BOTÕES-->\r\n    <div class=\"ui-g-12\" style=\"text-align: left\">\r\n        <button class=\"btnSalvar\" pButton type=\"submit\"  icon=\"fa-check\" label=\"Salvar\" (click)=\"salvar(form)\" [disabled]=\"form.invalid || dadosUsuario.password !== dadosUsuario.senha  \" ></button>\r\n        <button pButton type=\"text\"  icon=\"fa-close\" label=\"Fechar\"    (click)=\"showDialogClose(false, form)\" class=\"btnFechar\"></button>\r\n    </div>\r\n\r\n</div>\r\n    <p-messages [(value)]=\"msgsTelaCadastro\"></p-messages>\r\n</p-tabView>\r\n</form>\r\n</p-dialog>\r\n<!-- FIM CAIXA DE DIALOGO -->\r\n</div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/cadastro/usuarios/usuarios.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/cadastro/usuarios/usuarios.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Users */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsuariosComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_services_auth_service__ = __webpack_require__("../../../../../src/app/auth/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_usuario_service__ = __webpack_require__("../../../../../src/app/cadastro/usuarios/services/usuario.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__permissao_services_permissao_service__ = __webpack_require__("../../../../../src/app/cadastro/permissao/services/permissao.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__breadcrumb_service__ = __webpack_require__("../../../../../src/app/breadcrumb.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__cliente_services_cliente_service__ = __webpack_require__("../../../../../src/app/cadastro/cliente/services/cliente.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var Users = (function () {
    function Users(nome, id_user, id_cliente) {
        this.status = true;
        this.nameuser = nome;
        this.id_user = id_user;
        // this.id_cliente = id_cliente;
    }
    return Users;
}());

var UsuariosComponent = (function () {
    function UsuariosComponent(usuarioService, permissaoService, confirmation, title, breadcrumbService, usuarioSistema, clientesService) {
        this.usuarioService = usuarioService;
        this.permissaoService = permissaoService;
        this.confirmation = confirmation;
        this.title = title;
        this.breadcrumbService = breadcrumbService;
        this.usuarioSistema = usuarioSistema;
        this.clientesService = clientesService;
        this.senhaTrue = false;
        this.pt = [];
        this.usuarios = [];
        this.listaClienteCombo = [];
        this.listaPermissaoCombo = [];
        this.formularioCadastro = false;
        this.dadosUsuarios = new Users(this.nomeUsuarioLogado, this.idUsuarioLogado, this.idEmpresaUsuarioLogado);
        this.dadosUsuario = new Users(this.nomeUsuarioLogado, this.idUsuarioLogado, this.idEmpresaUsuarioLogado);
        this.senha = [];
        this.password = [];
        this.display = false;
        this.msgs = [];
        this.msgsTelaCadastro = [];
        this.mostrarSenha = false;
        this.iconeSenha = 'visibility_off';
        this.cols = [
            { field: 'name', header: 'NOME', style: 'col-nome' },
            { field: 'email', header: 'EMAIL', style: 'col-email' },
            { field: 'created_at', header: 'CRIAÇÃO', style: 'col-data' },
            //{ field: 'permissao', header: 'PERMISSÃO', style: 'col-permissao' },
            { field: 'updated_at', header: 'ATUALIZAÇÃO', style: 'col-data' },
            { field: 'status', header: 'STATUS', style: 'col-status' }
        ];
        this.status = [{ label: 'Ativado', value: 1 }, { label: 'Inativado', value: 0 }];
        this.breadcrumbService.setItems([
            { label: 'Usuários / Cadastrar Usuários' }
        ]);
    }
    UsuariosComponent.prototype.salvar = function (form) {
        var _this = this;
        this.usuarioService
            .salvar(this.dadosUsuario)
            .toPromise()
            .then(function (res) {
            if ("" + res.status === '400') {
                _this.msgsTelaCadastro.push({ severity: 'error', summary: "" + res.statusText, detail: '' });
            }
            else {
                _this.msgs.push({ severity: 'success', summary: 'Sucesso!', detail: 'Usuário salvo com sucesso.' });
                _this.listar();
                _this.fecharMensagem();
                form.reset();
                _this.display = false;
            }
        })
            .catch(function (erro) {
            return _this.msgsTelaCadastro.push({ severity: 'error', summary: 'Ops!', detail: ' Erro ao tentar salvar o usuário ' });
        });
        this.fecharMensagem();
    };
    UsuariosComponent.prototype.buscarPorId = function (id) {
        var _this = this;
        this.usuarioService
            .buscarPorId(id)
            .then(function (dadosUsuario) {
            if (dadosUsuario.status === 1) {
                dadosUsuario.status = true;
            }
            if (dadosUsuario.status === 0) {
                dadosUsuario.status = false;
            }
            _this.dadosUsuario = dadosUsuario;
        })
            .catch(function (erro) {
            return _this.msgs.push({
                severity: 'error',
                summary: 'Ops! ',
                detail: 'Erro ao tentar listar o usuário!'
            });
        });
        this.fecharMensagem();
    };
    UsuariosComponent.prototype.listar = function () {
        var _this = this;
        this.usuarioService
            .lista()
            .then(function (usuarios) { return (_this.usuarios = usuarios); })
            .catch(function (erro) {
            return _this.msgs.push({
                severity: 'error',
                summary: 'Ops! ',
                detail: 'Erro ao tentar listar os usuários!'
            });
        });
    };
    UsuariosComponent.prototype.excluir = function (usuario) {
        var _this = this;
        this.usuarioService
            .excluir(usuario.id)
            .then(function () {
            _this.msgs.push({
                severity: 'success',
                summary: 'Sucesso!',
                detail: 'Usuário excluido !'
            });
            _this.listar();
            _this.fecharMensagem();
        })
            .catch(function (erro) {
            return _this.msgs.push({
                severity: 'error',
                summary: 'Ops! ',
                detail: 'Erro ao tentar excluir o usuário ' + usuario.name
            });
        });
        this.listar();
        this.fecharMensagem();
    };
    UsuariosComponent.prototype.confirmarExclusao = function (usuario) {
        var _this = this;
        this.confirmation.confirm({
            message: 'Tem certeza que deseja excluir?',
            accept: function () {
                _this.excluir(usuario);
            }
        });
    };
    UsuariosComponent.prototype.onRowSelect = function (event) {
        this.buscarPorId(event.data.id);
        this.msgsTelaCadastro = [];
        this.msgs = [];
        this.display = true;
        this.senhaTrue = false;
        this.iconeSenha = 'visibility_off';
        this.mostrarSenha = false;
    };
    UsuariosComponent.prototype.fecharMensagem = function () {
        var _this = this;
        setTimeout(function () {
            _this.msgs = [];
            _this.msgsTelaCadastro = [];
        }, 5000);
    };
    UsuariosComponent.prototype.limparFormulario = function (form) {
        form.reset();
    };
    UsuariosComponent.prototype.showDialogOpen = function (param, id) {
        if (id) {
            this.buscarPorId(id);
            this.senhaTrue = false;
        }
        else {
            this.senhaTrue = param;
        }
        this.msgsTelaCadastro = [];
        this.msgs = [];
        this.dadosUsuarios = new Users(this.nomeUsuarioLogado, this.idUsuarioLogado, this.idEmpresaUsuarioLogado);
        this.dadosUsuario = new Users(this.nomeUsuarioLogado, this.idUsuarioLogado, this.idEmpresaUsuarioLogado);
        this.display = param;
        this.iconeSenha = 'visibility_off';
        this.mostrarSenha = false;
    };
    UsuariosComponent.prototype.showDialogClose = function (param, form) {
        this.limparFormulario(form);
        this.msgsTelaCadastro = [];
        this.msgs = [];
        this.display = param;
    };
    UsuariosComponent.prototype.listarComboPermissao = function () {
        var _this = this;
        return this.permissaoService
            .lista()
            .then(function (listaPermissaoCombo) {
            _this.listaPermissaoCombo = listaPermissaoCombo.map(function (p) { return ({
                label: p.permissao,
                value: p.id
            }); });
            console.log(_this.listaPermissaoCombo);
        })
            .catch(function (erro) {
            return _this.msgs.push({ severity: 'error', summary: 'Ops! ', detail: 'Erro ao tentar listar as  permissões!'
            });
        });
    };
    UsuariosComponent.prototype.listarComboCliente = function () {
        var _this = this;
        return this.clientesService
            .lista()
            .then(function (listaClienteCombo) {
            _this.listaClienteCombo = listaClienteCombo.map(function (e) { return ({
                label: e.nome,
                value: e.id
            }); });
        })
            .catch(function (erro) {
            return _this.msgs.push({ severity: 'error', summary: 'Ops! ', detail: 'Erro ao tentar listar as  permissões!'
            });
        });
    };
    UsuariosComponent.prototype.mostrarSenhaTrueOrFalse = function () {
        if (this.mostrarSenha === false) {
            this.mostrarSenha = true;
            this.iconeSenha = 'visibility';
        }
        else {
            this.mostrarSenha = false;
            this.iconeSenha = 'visibility_off';
        }
    };
    UsuariosComponent.prototype.getUserSistema = function () {
        this.nomeUsuarioLogado = this.usuarioSistema.getUser().name;
        this.idUsuarioLogado = this.usuarioSistema.getUser().id;
        this.idEmpresaUsuarioLogado = this.usuarioSistema.getUser().id_cliente;
    };
    UsuariosComponent.prototype.ngOnInit = function () {
        this.title.setTitle('Usuários');
        this.listar();
        this.listarComboPermissao();
        this.listarComboCliente();
        this.columnOptions = [];
        for (var i = 0; i < this.cols.length; i++) {
            this.columnOptions.push({
                label: this.cols[i].header,
                value: this.cols[i]
            });
        }
        this.acoesRelacionadas = [
            {
                label: 'Início',
                icon: 'fa-home',
                url: 'http://localhost:4200/#/admin/dashboard'
            },
            {
                label: 'Usuário',
                icon: 'ui-icon-person-add',
                url: 'http://localhost:4200/#/admin/usuarios'
            },
            {
                label: 'Clientes',
                icon: 'ui-icon-domain ',
                url: 'http://localhost:4200/#/admin/cliente'
            },
            {
                label: 'Permissões',
                icon: 'ui-icon-lock',
                url: 'http://localhost:4200/#/admin/permissao'
            },
            {
                label: 'Modulos',
                icon: 'ui-icon-widgets',
                url: 'http://localhost:4200/#/admin/modulo'
            },
            {
                label: 'Veículo',
                icon: 'ui-icon-train',
                url: 'http://localhost:4200/#/admin/veiculo'
            },
            {
                label: 'Funcionário',
                icon: 'ui-icon-people',
                url: 'http://localhost:4200/#/pessoa'
            }
        ];
        this.pt = {
            firstDayOfWeek: 0,
            dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
            dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sa'],
            dayNamesMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sa'],
            monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agsoto',
                'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            today: 'Today',
            clear: 'Clear'
        };
    };
    UsuariosComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'app-usuarios',
            template: __webpack_require__("../../../../../src/app/cadastro/usuarios/usuarios.component.html"),
            styles: [__webpack_require__("../../../../../src/app/cadastro/usuarios/usuarios.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__services_usuario_service__["a" /* UsuarioService */],
            __WEBPACK_IMPORTED_MODULE_5__permissao_services_permissao_service__["a" /* PermissaoService */],
            __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["ConfirmationService"],
            __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["Title"],
            __WEBPACK_IMPORTED_MODULE_7__breadcrumb_service__["a" /* BreadcrumbService */],
            __WEBPACK_IMPORTED_MODULE_0__auth_services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_8__cliente_services_cliente_service__["a" /* ClienteService */]])
    ], UsuariosComponent);
    return UsuariosComponent;
}());



/***/ }),

/***/ "../../../../../src/app/categorias/categoria.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoriaService = (function () {
    function CategoriaService(http) {
        this.http = http;
        this.categoriasUrl = 'http://localhost:8080/categorias';
    }
    CategoriaService.prototype.listarTodas = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        // tslint:disable-next-line:max-line-length
        headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNTEzODc3MzQ5LCJhdXRob3JpdGllcyI6WyJST0xFX0FUVUFMSVpBUl9MQU5DQU1FTlRPIiwiUk9MRV9DQURBU1RSQVJfQ0FURUdPUklBIiwiUk9MRV9QRVNRVUlTQVJfUEVTU09BIiwiUk9MRV9SRU1PVkVSX1BFU1NPQSIsIlJPTEVfQ0FEQVNUUkFSX0xBTkNBTUVOVE8iLCJST0xFX1BFU1FVSVNBUl9MQU5DQU1FTlRPIiwiUk9MRV9SRU1PVkVSX0xBTkNBTUVOVE8iLCJST0xFX0NBREFTVFJBUl9QRVNTT0EiLCJST0xFX1BFU1FVSVNBUl9DQVRFR09SSUEiLCJST0xFX0FUVUFMSVpBUl9QRVNTT0EiXSwianRpIjoiZGRmYzI3ZWItMTI0Ni00N2JlLTlkYzYtNGE2ODkzNDViNGFmIiwiZW1haWwiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwiY2xpZW50X2lkIjoiYW5ndWxhciJ9.lrwffx0zujGqh5xBIZISUY29dLiHq9zi-uwn9xb_4s8');
        return this.http.get(this.categoriasUrl, { headers: headers })
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    CategoriaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CategoriaService);
    return CategoriaService;
}());



/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_primeng_components_common_api__ = __webpack_require__("../../../../primeng/components/common/api.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_primeng_components_common_api___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_primeng_components_common_api__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pessoas_pessoa_service__ = __webpack_require__("../../../../../src/app/pessoas/pessoa.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__categorias_categoria_service__ = __webpack_require__("../../../../../src/app/categorias/categoria.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cadastro_cliente_services_cliente_service__ = __webpack_require__("../../../../../src/app/cadastro/cliente/services/cliente.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CoreModule = (function () {
    function CoreModule() {
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmDialogModule"],
            ],
            declarations: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3_primeng_primeng__["ConfirmDialogModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__pessoas_pessoa_service__["a" /* PessoaService */],
                __WEBPACK_IMPORTED_MODULE_5__categorias_categoria_service__["a" /* CategoriaService */],
                __WEBPACK_IMPORTED_MODULE_0_primeng_components_common_api__["ConfirmationService"],
                __WEBPACK_IMPORTED_MODULE_6__cadastro_cliente_services_cliente_service__["a" /* ClienteService */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["LOCALE_ID"], useValue: 'pt-BR' }
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "../../../../../src/app/demo/service/carservice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CarService = (function () {
    function CarService(http) {
        this.http = http;
    }
    CarService.prototype.getCarsSmall = function () {
        return this.http.get('assets/demo/data/cars-small.json')
            .toPromise()
            .then(function (res) { return res.json().data; })
            .then(function (data) { return data; });
    };
    CarService.prototype.getCarsMedium = function () {
        return this.http.get('assets/demo/data/cars-medium.json')
            .toPromise()
            .then(function (res) { return res.json().data; })
            .then(function (data) { return data; });
    };
    CarService.prototype.getCarsLarge = function () {
        return this.http.get('assets/demo/data/cars-large.json')
            .toPromise()
            .then(function (res) { return res.json().data; })
            .then(function (data) { return data; });
    };
    CarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CarService);
    return CarService;
}());



/***/ }),

/***/ "../../../../../src/app/demo/service/countryservice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CountryService = (function () {
    function CountryService(http) {
        this.http = http;
    }
    CountryService.prototype.getCountries = function () {
        return this.http.get('assets/demo/data/countries.json')
            .toPromise()
            .then(function (res) { return res.json().data; })
            .then(function (data) { return data; });
    };
    CountryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CountryService);
    return CountryService;
}());



/***/ }),

/***/ "../../../../../src/app/demo/service/eventservice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EventService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EventService = (function () {
    function EventService(http) {
        this.http = http;
    }
    EventService.prototype.getEvents = function () {
        return this.http.get('assets/demo/data/scheduleevents.json')
            .toPromise()
            .then(function (res) { return res.json().data; })
            .then(function (data) { return data; });
    };
    EventService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], EventService);
    return EventService;
}());



/***/ }),

/***/ "../../../../../src/app/demo/service/nodeservice.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NodeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NodeService = (function () {
    function NodeService(http) {
        this.http = http;
    }
    NodeService.prototype.getFiles = function () {
        return this.http.get('assets/demo/data/files.json')
            .toPromise()
            .then(function (res) { return res.json().data; })
            .then(function (data) { return data; });
    };
    NodeService.prototype.getFilesystem = function () {
        return this.http.get('assets/demo/data/filesystem.json')
            .toPromise()
            .then(function (res) { return res.json().data; })
            .then(function (data) { return data; });
    };
    NodeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], NodeService);
    return NodeService;
}());



/***/ }),

/***/ "../../../../../src/app/demo/view/chartsdemo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g ui-fluid\">\n    <div class=\"ui-g-12 ui-lg-6\">\n        <div class=\"card\">\n            <h1 class=\"centerText\">Linear Chart</h1>\n            <p-chart type=\"line\" [data]=\"lineData\"></p-chart>\n        </div>\n        \n        <div class=\"card\">\n            <h1 class=\"centerText\">Pie Chart</h1>\n            <p-chart type=\"pie\" [data]=\"pieData\"></p-chart>\n        </div>\n        \n        <div class=\"card\">\n            <h1 class=\"centerText\">Polar Area Chart</h1>\n            <p-chart type=\"polarArea\" [data]=\"polarData\"></p-chart>\n        </div>\n    </div>\n    <div class=\"ui-g-12 ui-lg-6\">\n        <div class=\"card\">\n            <h1 class=\"centerText\">Bar Chart</h1>\n            <p-chart type=\"bar\" [data]=\"barData\"></p-chart>\n        </div>\n        \n        <div class=\"card\">\n            <h1 class=\"centerText\">Doughnut Chart</h1>\n            <p-chart type=\"doughnut\" [data]=\"pieData\"></p-chart>\n        </div>\n        \n        <div class=\"card\">\n            <h1 class=\"centerText\">Radar Chart</h1>\n            <p-chart type=\"radar\" [data]=\"radarData\"></p-chart>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/demo/view/chartsdemo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChartsDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__breadcrumb_service__ = __webpack_require__("../../../../../src/app/breadcrumb.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChartsDemoComponent = (function () {
    function ChartsDemoComponent(breadcrumbService) {
        this.breadcrumbService = breadcrumbService;
        this.breadcrumbService.setItems([
            { label: 'Components' },
            { label: 'Charts', routerLink: ['/chart'] }
        ]);
    }
    ChartsDemoComponent.prototype.ngOnInit = function () {
        this.lineData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#03A9F4'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#FFC107'
                }
            ]
        };
        this.barData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: '#03A9F4',
                    borderColor: '#03A9F4',
                    data: [65, 59, 80, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: '#FFC107',
                    borderColor: '#FFC107',
                    data: [28, 48, 40, 19, 86, 27, 90]
                }
            ]
        };
        this.pieData = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [300, 50, 100],
                    backgroundColor: [
                        '#FFC107',
                        '#03A9F4',
                        '#4CAF50'
                    ],
                    hoverBackgroundColor: [
                        '#FFE082',
                        '#81D4FA',
                        '#A5D6A7'
                    ]
                }
            ]
        };
        this.polarData = {
            datasets: [{
                    data: [
                        11,
                        16,
                        7,
                        3,
                        14
                    ],
                    backgroundColor: [
                        '#FFC107',
                        '#03A9F4',
                        '#4CAF50',
                        '#E91E63',
                        '#9C27B0'
                    ],
                    label: 'My dataset'
                }],
            labels: [
                'Red',
                'Green',
                'Yellow',
                'Grey',
                'Blue'
            ]
        };
        this.radarData = {
            labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
            datasets: [
                {
                    label: 'My First dataset',
                    backgroundColor: 'rgba(179,181,198,0.2)',
                    borderColor: 'rgba(179,181,198,1)',
                    pointBackgroundColor: 'rgba(179,181,198,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(179,181,198,1)',
                    data: [65, 59, 90, 81, 56, 55, 40]
                },
                {
                    label: 'My Second dataset',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    pointBackgroundColor: 'rgba(255,99,132,1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(255,99,132,1)',
                    data: [28, 48, 40, 19, 96, 27, 100]
                }
            ]
        };
    };
    ChartsDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/demo/view/chartsdemo.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__breadcrumb_service__["a" /* BreadcrumbService */]])
    ], ChartsDemoComponent);
    return ChartsDemoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/demo/view/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g dashboard\">\n    <div class=\"ui-g-12 ui-md-4\">\n        <div class=\"card overview\">\n            <div class=\"overview-content clearfix\">\n                <span class=\"overview-title\">Sales</span>\n                <span class=\"overview-badge\">+%90</span>\n                <span class=\"overview-detail\">$22,650 / week</span>\n            </div>\n            <div class=\"overview-footer\">\n                <img src=\"assets/layout/images/dashboard/sales.svg\" style=\"width: 100%\" />\n            </div>\n        </div>\n    </div>\n    <div class=\"ui-g-12 ui-md-4\">\n        <div class=\"card overview\">\n            <div class=\"overview-content clearfix\">\n                <span class=\"overview-title\">Views</span>\n                <span class=\"overview-badge\">+%60</span>\n                <span class=\"overview-detail\">6,520 / day</span>\n            </div>\n            <div class=\"overview-footer\">\n                <img src=\"assets/layout/images/dashboard/views.svg\" style=\"width: 100%\" />\n            </div>\n        </div>\n    </div>\n    <div class=\"ui-g-12 ui-md-4\">\n        <div class=\"card overview\">\n            <div class=\"overview-content clearfix\">\n                <span class=\"overview-title\">Users</span>\n                <span class=\"overview-badge\">+%45</span>\n                <span class=\"overview-detail\">5,200 / day</span>\n            </div>\n            <div class=\"overview-footer\">\n                <img src=\"assets/layout/images/dashboard/progress.svg\" style=\"width: 100%\" />\n            </div>\n        </div>\n    </div>\n    \n    <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\n        <div class=\"ui-g card colorbox colorbox-1\">\n            <div class=\"ui-g-4\">\n                <i class=\"material-icons\">check_circle</i>\n            </div>\n            <div class=\"ui-g-8\">\n                <span class=\"colorbox-name\">Tasks</span>\n                <span class=\"colorbox-count\">50</span>\n            </div>\n        </div>\n    </div>\n    <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\n        <div class=\"ui-g card colorbox colorbox-2\">\n            <div class=\"ui-g-4\">\n                <i class=\"material-icons\">shopping_card</i>\n            </div>\n            <div class=\"ui-g-8\">\n                <span class=\"colorbox-name\">Purchases</span>\n                <span class=\"colorbox-count\">1200</span>\n            </div>\n        </div>\n    </div>\n    <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\n        <div class=\"ui-g card colorbox colorbox-3\">\n            <div class=\"ui-g-4\">\n                <i class=\"material-icons\">report</i>\n            </div>\n            <div class=\"ui-g-8\">\n                <span class=\"colorbox-name\">Issues</span>\n                <span class=\"colorbox-count\">22</span>\n            </div>\n        </div>\n    </div>\n    <div class=\"ui-g-12 ui-md-6 ui-lg-3\">\n        <div class=\"ui-g card colorbox colorbox-4\">\n            <div class=\"ui-g-4\">\n                <i class=\"material-icons\">email</i>\n            </div>\n            <div class=\"ui-g-8\">\n                <span class=\"colorbox-name\">Messages</span>\n                <span class=\"colorbox-count\">10</span>\n            </div>\n        </div>\n    </div>\n    \n    <div class=\"ui-g-12 ui-md-6 ui-lg-4 task-list\">\n        <p-panel header=\"Tasks\">\n            <ul>\n                <li>\n                    <p-checkbox binary=\"true\"></p-checkbox>\n                    <span class=\"task-name\">Sales Reports</span>\n                    <i class=\"material-icons\">&#xE8C9;</i>\n                </li>\n                <li>\n                    <p-checkbox binary=\"true\"></p-checkbox>\n                    <span class=\"task-name\">Pay Invoices</span>\n                    <i class=\"material-icons\">&#xE8A1;</i>\n                </li>\n                <li>\n                    <p-checkbox binary=\"true\"></p-checkbox>\n                    <span class=\"task-name\">Dinner with Tony</span>\n                    <i class=\"material-icons\">&#xE561;</i>\n                </li>\n                <li>\n                    <p-checkbox binary=\"true\"></p-checkbox>\n                    <span class=\"task-name\">Client Meeting</span>\n                    <i class=\"material-icons\">&#xE7FB;</i>\n                </li>\n                <li>\n                    <p-checkbox binary=\"true\"></p-checkbox>\n                    <span class=\"task-name\">New Theme</span>\n                    <i class=\"material-icons\">&#xE3AE;</i>\n                </li>\n                <li>\n                    <p-checkbox binary=\"true\"></p-checkbox>\n                    <span class=\"task-name\">Flight Ticket</span>\n                    <i class=\"material-icons\">&#xE01B;</i>\n                </li>\n                <li>\n                    <p-checkbox binary=\"true\"></p-checkbox>\n                    <span class=\"task-name\">Generate Charts</span>\n                    <i class=\"material-icons\">&#xE6C4;</i>\n                </li>\n            </ul>\n        </p-panel>\n    </div>\n    <div class=\"ui-g-12 ui-md-6 ui-lg-4 ui-fluid contact-form\">\n        <p-panel header=\"Contact Us\">\n            <div class=\"ui-g\">\n                <div class=\"ui-g-12\">\n                    <p-dropdown [options]=\"cities\" [autoWidth]=\"false\" [(ngModel)]=\"selectedCity\"></p-dropdown>\n                </div>\n                <div class=\"ui-g-12\">\n                    <span class=\"md-inputfield\">\n                        <input id=\"name\" type=\"text\" pInputText />\n                        <label for=\"name\">Name</label>\n                    </span>\n                </div>\n                <div class=\"ui-g-12\">\n                    <span class=\"md-inputfield\">\n                        <input id=\"age\" type=\"text\" pInputText />\n                        <label for=\"age\">Age</label>\n                    </span>\n                </div>\n                <div class=\"ui-g-12\">\n                    <span class=\"md-inputfield\">\n                        <input id=\"message\" type=\"text\" pInputText />\n                        <label for=\"message\">Message</label>\n                    </span>\n                </div>\n            </div>\n            <button type=\"button\" label=\"Send\" icon=\"ui-icon-send\" pButton></button>\n        </p-panel>\n    </div>\n    <div class=\"ui-g-12 ui-lg-4 contacts\">\n        <p-panel header=\"Contacts\">\n            <ul>\n                <li>\n                    <a href=\"#\">\n                        <img src=\"assets/layout/images/avatar1.png\" width=\"45\">\n                        <span class=\"name\">Joshua Williams</span>\n                        <span class=\"email\">joshua@pf-ultima.com</span>\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        <img src=\"assets/layout/images/avatar2.png\" width=\"45\">\n                        <span class=\"name\">Emily Clark</span>\n                        <span class=\"email\">emily@pf-ultima.com</span>\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        <img src=\"assets/layout/images/avatar3.png\" width=\"45\">\n                        <span class=\"name\">Susan Johnson</span>\n                        <span class=\"email\">susan@pf-ultima.com</span>\n                    </a>\n                </li>\n                <li>\n                    <a href=\"#\">\n                        <img src=\"assets/layout/images/avatar4.png\" width=\"45\">\n                        <span class=\"name\">Kelly Stark</span>\n                        <span class=\"email\">kelly@pf-ultima.com</span>\n                    </a>\n                </li>\n            </ul>\n        </p-panel>\n    </div>\n    \n    <div class=\"ui-g-12 ui-md-4\">\n        <div class=\"card timeline ui-fluid\">\n            <div class=\"ui-g\">\n                <div class=\"ui-g-3\">\n                    <span class=\"event-time\">just now</span>\n                    <i class=\"material-icons\" style=\"color:#009688\">&#xE1BC;</i>\n                </div>\n                <div class=\"ui-g-9\">\n                    <span class=\"event-owner\" style=\"color:#009688\">Katherine May</span>\n                    <span class=\"event-text\">Lorem ipsun dolor amet</span>\n                    <div class=\"event-content\">\n                        <img src=\"assets/layout/images/dashboard/md.png\">\n                    </div>\n                </div>\n                \n                <div class=\"ui-g-3\">\n                    <span class=\"event-time\">12h ago</span>\n                    <i class=\"material-icons\" style=\"color:#E91E63\">&#xE885;</i>\n                </div>\n                <div class=\"ui-g-9\">\n                    <span class=\"event-owner\" style=\"color:#E91E63\">Brandon Santos</span>\n                    <span class=\"event-text\">Ab nobis, magnam sunt eum. Laudantium, repudiandae, similique!.</span>\n                </div>\n                \n                <div class=\"ui-g-3\">\n                    <span class=\"event-time\">15h ago</span>\n                    <i class=\"material-icons\" style=\"color:#9c27b0\">&#xE0C9;</i>\n                </div>\n                <div class=\"ui-g-9\">\n                    <span class=\"event-owner\" style=\"color:#9c27b0\">Stephan Ward</span>\n                    <span class=\"event-text\">Omnis veniam quibusdam ratione est repellat qui nam quisquam ab mollitia dolores ullam voluptates, similique, dignissimos.</span>\n                </div>\n                \n                <div class=\"ui-g-3\">\n                    <span class=\"event-time\">2d ago</span>\n                    <i class=\"material-icons\" style=\"color:#ff9800\">&#xE0C8;</i>\n                </div>\n                <div class=\"ui-g-9\">\n                    <span class=\"event-owner\" style=\"color:#ff9800\">Jason Smith</span>\n                    <span class=\"event-text\">Laudantium, repudiandae, similique!</span>\n                    <div class=\"event-content\">\n                        <img src=\"assets/layout/images/dashboard/map.png\">\n                    </div>\n                </div>\n                \n                <div class=\"ui-g-3\">\n                    <span class=\"event-time\">1w ago</span>\n                    <i class=\"material-icons\" style=\"color:#607d8b\">&#xE91B;</i>\n                </div>\n                <div class=\"ui-g-9\">\n                    <span class=\"event-owner\">Kevin Cox</span>\n                    <span class=\"event-text\">Quibusdam ratione est repellat qui nam quisquam veniam quibusdam ratione.</span>\n                </div>\n                \n                <div class=\"ui-g-3\">\n                    <span class=\"event-time\">2w ago</span>\n                    <i class=\"material-icons\" style=\"color:#FFC107\">&#xE23A;</i>\n                </div>\n                <div class=\"ui-g-9\">\n                    <span class=\"event-owner\" style=\"color:#FFC107\">Walter White</span>\n                    <span class=\"event-text\">I am the one who knocks!</span>\n                </div>\n                \n                <div class=\"ui-g-12\">\n                    <button type=\"button\" label=\"Refresh\" icon=\"ui-icon-refresh\" pButton></button>\n                </div>\n            </div>\n        </div>\n    </div>\n    \n    <div class=\"ui-g-12 ui-md-8\">\n        <div class=\"card\">\n            <p-dataTable [value]=\"cars\" [style]=\"{'margin-bottom':'20px'}\">\n                <p-header>Recent Sales</p-header>\n                <p-column field=\"vin\" header=\"Vin\"></p-column>\n                <p-column field=\"year\" header=\"Year\"></p-column>\n                <p-column field=\"brand\" header=\"Brand\"></p-column>\n                <p-column field=\"color\" header=\"Color\"></p-column>\n            </p-dataTable>\n            \n            <p-panel header=\"Sales Graph\">\n                <p-chart type=\"line\" [data]=\"chartData\" responsive=\"true\"></p-chart>\n            </p-panel>\n        </div>\n    </div>\n    \n    <div class=\"ui-g-12 ui-md-8\">\n        <p-panel header=\"Calendar\" [style]=\"{'height':'100%'}\">\n            <p-schedule [events]=\"events\" defaultDate=\"2016-01-12\"></p-schedule>\n        </p-panel>\n    </div>\n    <div class=\"ui-g-12 ui-md-4\">\n        <p-panel header=\"Activity\" [style]=\"{'height':'100%'}\">\n            <div class=\"activity-header\">\n                <div class=\"ui-g\">\n                    <div class=\"ui-g-6\">\n                        <span style=\"font-weight:bold\">Last Activity</span>\n                        <p>Updated 1 minute ago</p>\n                    </div>\n                    <div class=\"ui-g-6\" style=\"text-align:right\">\n                        <button type=\"button\" label=\"Update\" icon=\"ui-icon-update\" pButton></button>\n                    </div>\n                </div>\n            </div>\n            <ul class=\"activity-list\">\n                <li>\n                    <div class=\"count\">$900</div>\n                    <div class=\"ui-g\">\n                        <div class=\"ui-g-6\">Income</div>\n                        <div class=\"ui-g-6\">95%</div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"count\" style=\"background-color:#ffc107\">$250</div>\n                    <div class=\"ui-g\">\n                        <div class=\"ui-g-6\">Tax</div>\n                        <div class=\"ui-g-6\">24%</div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"count\" style=\"background-color:#673AB7\">$125</div>\n                    <div class=\"ui-g\">\n                        <div class=\"ui-g-6\">Invoices</div>\n                        <div class=\"ui-g-6\">55%</div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"count\" style=\"background-color:#00bcd4\">$250</div>\n                    <div class=\"ui-g\">\n                        <div class=\"ui-g-6\">Expenses</div>\n                        <div class=\"ui-g-6\">15%</div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"count\" style=\"background-color:#607D8B\">$350</div>\n                    <div class=\"ui-g\">\n                        <div class=\"ui-g-6\">Bonus</div>\n                        <div class=\"ui-g-6\">5%</div>\n                    </div>\n                </li>\n                <li>\n                    <div class=\"count\" style=\"background-color:#FF5722\">$500</div>\n                    <div class=\"ui-g\">\n                        <div class=\"ui-g-6\">Revenue</div>\n                        <div class=\"ui-g-6\">25%</div>\n                    </div>\n                </li>\n            </ul>\n        </p-panel>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/demo/view/dashboarddemo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_carservice__ = __webpack_require__("../../../../../src/app/demo/service/carservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_eventservice__ = __webpack_require__("../../../../../src/app/demo/service/eventservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__breadcrumb_service__ = __webpack_require__("../../../../../src/app/breadcrumb.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardDemoComponent = (function () {
    function DashboardDemoComponent(carService, eventService, breadcrumbService) {
        this.carService = carService;
        this.eventService = eventService;
        this.breadcrumbService = breadcrumbService;
        this.breadcrumbService.setItems([
            { label: '' },
        ]);
    }
    DashboardDemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        this.eventService.getEvents().then(function (events) { _this.events = events; });
        this.cities = [];
        this.cities.push({ label: 'Select City', value: null });
        this.cities.push({ label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } });
        this.cities.push({ label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } });
        this.cities.push({ label: 'London', value: { id: 3, name: 'London', code: 'LDN' } });
        this.cities.push({ label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } });
        this.cities.push({ label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } });
        this.chartData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: '#FFC107'
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: '#03A9F4'
                }
            ]
        };
    };
    DashboardDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/demo/view/dashboard.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */], __WEBPACK_IMPORTED_MODULE_2__service_eventservice__["a" /* EventService */], __WEBPACK_IMPORTED_MODULE_3__breadcrumb_service__["a" /* BreadcrumbService */]])
    ], DashboardDemoComponent);
    return DashboardDemoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/demo/view/datademo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n    <div class=\"ui-g-12\">\n        <div class=\"card card-w-title\">\n            <h1>DataTable</h1>\n            <p-dataTable [value]=\"cars1\" selectionMode=\"single\" [(selection)]=\"selectedCar\" \n                [paginator]=\"true\" [rows]=\"10\" [responsive]=\"true\">\n                <p-header>List of Cars</p-header>\n                <p-column field=\"vin\" header=\"Vin\" [sortable]=\"true\"></p-column>\n                <p-column field=\"year\" header=\"Year\" [sortable]=\"true\"></p-column>\n                <p-column field=\"brand\" header=\"Brand\" [sortable]=\"true\"></p-column>\n                <p-column field=\"color\" header=\"Color\" [sortable]=\"true\"></p-column>\n            </p-dataTable>\n        </div>\n    </div>\n    <div class=\"ui-g-12\">\n        <!-- Left Side -->\n        <div class=\"card card-w-title\">\n            <h1>DataGrid</h1>\n            <p-dataGrid [value]=\"cars2\" [paginator]=\"true\" [rows]=\"9\">\n                <p-header>\n                    Grid of Cars\n                </p-header>\n                <ng-template let-car pTemplate=\"item\">\n                    <div style=\"padding:3px\" class=\"ui-g-12 ui-md-4\">\n                        <p-panel [header]=\"car.vin\" [style]=\"{'text-align':'center'}\">\n                            <img src=\"assets/demo/images/car/{{car.brand}}.gif\">\n                            <div class=\"car-detail\">{{car.year}} - {{car.color}}</div>\n                        </p-panel>\n                    </div>\n                </ng-template>\n            </p-dataGrid>\n        </div>\n    </div>\n    \n    <div class=\"ui-g-12 ui-md-8\">\n        <div class=\"card card-w-title\">\n            <h1>PickList</h1>\n            <p-pickList [source]=\"sourceCars\" [target]=\"targetCars\" sourceHeader=\"Available\" targetHeader=\"Selected\" [responsive]=\"true\"\n                [sourceStyle]=\"{'height':'250px'}\" [targetStyle]=\"{'height':'250px'}\">\n                <ng-template let-car pTemplate=\"item\">\n                    <div class=\"ui-helper-clearfix\">\n                        <img src=\"assets/demo/images/car/{{car.brand}}.gif\" style=\"display:inline-block;margin:2px 0 2px 2px\"/>\n                        <div style=\"font-size:16px;float:right;margin:15px 5px 0 0\">{{car.brand}}</div>\n                    </div>\n                </ng-template>\n            </p-pickList>\n        </div>\n    </div>\n    \n    <div class=\"ui-g-12 ui-md-4\">\n        <div class=\"card card-w-title\">\n            <h1>OrderList</h1>\n            <p-orderList [value]=\"orderListCars\" [listStyle]=\"{'height':'250px'}\" [responsive]=\"true\" header=\"OrderList\">\n                <ng-template let-car pTemplate=\"item\">\n                    <div class=\"ui-helper-clearfix\">\n                        <img src=\"assets/demo/images/car/{{car.brand}}.gif\" style=\"display:inline-block;margin:2px 0 2px 2px\" />\n                        <div style=\"font-size:16px;float:right;margin:15px 5px 0 0\">{{car.brand}}</div>\n                    </div>\n                </ng-template>\n            </p-orderList>\n        </div>\n    </div>\n    \n    <div class=\"ui-g-12\">\n        <div class=\"card card-w-title\">\n            <h1>Organization Chart</h1>\n            <p-organizationChart [value]=\"data\" selectionMode=\"single\" [(selection)]=\"selectedNode1\"></p-organizationChart>\n        </div>\n    </div>\n                            \n    <div class=\"ui-g-12\">\n        <div class=\"card card-w-title\">\n            <h1>TreeTable</h1>\n            <p-treeTable [value]=\"files1\" selectionMode=\"single\" [(selection)]=\"selectedNode\">\n                <p-header>Basic</p-header>\n                <p-column field=\"name\" header=\"Name\"></p-column>\n                <p-column field=\"size\" header=\"Size\"></p-column>\n                <p-column field=\"type\" header=\"Type\"></p-column>\n            </p-treeTable>\n        </div>\n    </div>\n    \n    <div class=\"ui-g-12\">\n        <div class=\"card card-w-title\">\n            <h1>DataList - Paginator</h1>\n            <p-dataList [value]=\"cars3\" [paginator]=\"true\" [rows]=\"5\" styleClass=\"cars-datalist\">\n                <p-header>\n                    List of Cars\n                </p-header>\n                <ng-template let-car pTemplate=\"item\">\n                    <div style=\"border-bottom: 1px solid #bdbdbd\" class=\"clearfix car-item\">\n                        <img src=\"assets/demo/images/car/{{car.brand}}.gif\" width=\"48\" style=\"display:inline-block;margin:24px;vertical-align:middle\"/>\n                        <div class=\"car-details\" style=\"display:inline-block;vertical-align:middle\">\n                            <p>{{car.brand}}</p>\n                            <p style=\"color:#757575\">{{car.year}} - {{car.color}}</p>\n                        </div>\n                        <button type=\"button\" pButton icon=\"ui-icon-search\" style=\"margin:24px 24px 0 0;float:right\"></button>\n                    </div>\n                </ng-template>\n            </p-dataList>\n        </div>\n    </div>\n        \n    <div class=\"ui-g-12\">\n        <div class=\"card card-w-title\">\n            <h1>Carousel</h1>\n            <p-carousel headerText=\"Cars\" [value]=\"carouselCars\">\n                <ng-template let-car pTemplate=\"item\">\n                    <div class=\"ui-g\" style=\"text-align:center\">\n                        <div class=\"ui-g-12\" style=\"text-align:Center\">\n                            <img src=\"assets/demo/images/car/{{car.brand}}.gif\" />\n                        </div>\n                        <div class=\"ui-g-6\">Vin: </div>\n                        <div class=\"ui-g-6\" style=\"font-weight:bold\">{{car.vin}}</div>\n                        \n                        <div class=\"ui-g-6\">Year: </div>\n                        <div class=\"ui-g-6\" style=\"font-weight:bold\">{{car.year}}</div>\n                        \n                        <div class=\"ui-g-6\">Brand: </div>\n                        <div class=\"ui-g-6\" style=\"font-weight:bold\">{{car.brand}}</div>\n                        \n                        <div class=\"ui-g-6\">Color: </div>\n                        <div class=\"ui-g-6\" style=\"font-weight:bold\">{{car.color}}</div>\n                    </div>\n                </ng-template>\n            </p-carousel>\n        </div>\n    </div>\n        \n    <div class=\"ui-g-12\">\n        <div class=\"card card-w-title\">\n            <h1>Tree</h1>\n            <p-tree [value]=\"files2\"></p-tree>\n        </div>\n    </div>\n    <div class=\"ui-g-12\">\n        <div class=\"card card-w-title\">\n            <h1>Schedule</h1>\n            <p-schedule [events]=\"events\" defaultDate=\"2016-01-12\" [header]=\"scheduleHeader\"></p-schedule>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/demo/view/datademo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_carservice__ = __webpack_require__("../../../../../src/app/demo/service/carservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_nodeservice__ = __webpack_require__("../../../../../src/app/demo/service/nodeservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_eventservice__ = __webpack_require__("../../../../../src/app/demo/service/eventservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__breadcrumb_service__ = __webpack_require__("../../../../../src/app/breadcrumb.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DataDemoComponent = (function () {
    function DataDemoComponent(carService, eventService, nodeService, breadcrumbService) {
        this.carService = carService;
        this.eventService = eventService;
        this.nodeService = nodeService;
        this.breadcrumbService = breadcrumbService;
        this.breadcrumbService.setItems([
            { label: 'Components' },
            { label: 'Data Components', routerLink: ['/data'] }
        ]);
    }
    DataDemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsMedium().then(function (cars) { return _this.cars1 = cars; });
        this.carService.getCarsMedium().then(function (cars) { return _this.cars2 = cars; });
        this.carService.getCarsMedium().then(function (cars) { return _this.cars3 = cars; });
        this.carService.getCarsMedium().then(function (cars) { return _this.sourceCars = cars; });
        this.targetCars = [];
        this.carService.getCarsSmall().then(function (cars) { return _this.orderListCars = cars; });
        this.nodeService.getFilesystem().then(function (files) { return _this.files1 = files; });
        this.nodeService.getFiles().then(function (files) { return _this.files2 = files; });
        this.eventService.getEvents().then(function (events) { _this.events = events; });
        this.carouselCars = [
            { vin: 'r3278r2', year: 2010, brand: 'Audi', color: 'Black' },
            { vin: 'jhto2g2', year: 2015, brand: 'BMW', color: 'White' },
            { vin: 'h453w54', year: 2012, brand: 'Honda', color: 'Blue' },
            { vin: 'g43gwwg', year: 1998, brand: 'Renault', color: 'White' },
            { vin: 'gf45wg5', year: 2011, brand: 'VW', color: 'Red' },
            { vin: 'bhv5y5w', year: 2015, brand: 'Jaguar', color: 'Blue' },
            { vin: 'ybw5fsd', year: 2012, brand: 'Ford', color: 'Yellow' },
            { vin: '45665e5', year: 2011, brand: 'Mercedes', color: 'Brown' },
            { vin: 'he6sb5v', year: 2015, brand: 'Ford', color: 'Black' }
        ];
        this.scheduleHeader = { left: 'prev,next today', center: 'title', right: 'month,agendaWeek,agendaDay' };
        this.data = [{
                label: 'F.C Barcelona',
                expanded: true,
                children: [
                    {
                        label: 'F.C Barcelona',
                        expanded: true,
                        children: [
                            {
                                label: 'Chelsea FC'
                            },
                            {
                                label: 'F.C. Barcelona'
                            }
                        ]
                    },
                    {
                        label: 'Real Madrid',
                        expanded: true,
                        children: [
                            {
                                label: 'Bayern Munich'
                            },
                            {
                                label: 'Real Madrid'
                            }
                        ]
                    }
                ]
            }];
    };
    DataDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/demo/view/datademo.component.html"),
            styles: ["\n        .cars-datalist ul {\n            margin: 0;\n            padding: 0;\n        }\n\n        @media (max-width:640px) {\n            .cars-datalist .text-column {\n                text-align: center;\n            }\n        }\n    "],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */], __WEBPACK_IMPORTED_MODULE_3__service_eventservice__["a" /* EventService */], __WEBPACK_IMPORTED_MODULE_2__service_nodeservice__["a" /* NodeService */],
            __WEBPACK_IMPORTED_MODULE_4__breadcrumb_service__["a" /* BreadcrumbService */]])
    ], DataDemoComponent);
    return DataDemoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/demo/view/documentation.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n    <div class=\"ui-g-12\">\n        <div class=\"card docs\"> \n            \n            <h1>Current Version</h1>\n            <p>Angular 5 and PrimeNG 5</p>\n            \n            <h1>Getting Started</h1>\n            <p>Ultima is a true native application template for Angular and is distributed as a CLI project. If you don't have CLI installed already run the following commands to set it up. In case\n            you have an application that do not use CLI, skip the <a href=\"#noncli\">Integration with an Existing Non CLI Application</a> part.</p>\n<pre>\nnpm install -g @angular/cli\n</pre>\n\n            <p>Once CLI is ready in your system, extract the contents of the ultima zip file distribution, cd to the directory, \n            install the libraries from npm and then execute \"ng serve\" to run the application in your local environment at http://localhost:4200/.</p>\n<pre>\ncd ultima\nnpm install\nng serve\n</pre>\n\n            <p>That's it, you may now start with the development of your application.</p>\n\n            <h1>Important CLI Commands</h1>\n            <p>Following commands are derived from CLI.</p>\n<pre>\nRun 'ng serve' for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.\n\nRun 'ng generate component component-name' to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.\n\nRun 'ng build' to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.\n\nRun 'ng test' to execute the unit tests via [Karma](https://karma-runner.github.io).\n\nRun 'ng e2e' to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).\n\nRun 'ng help' for more options.\n</pre>            \n                                    \n            <h1>Structure</h1>\n            <p>Ultima consists of 3 main parts; the application layout, layout resources and theme resources for PrimeNG components. <i>app.component.html</i> inside app folder is the html template for the base layout, \n                required resources for the layout are placed inside the <i>src/assets/layout</i> folder and similarly theme resources are inside <i>src/assets/theme</i> folder. \n            </p>\n\n            <h1>Template</h1>\n            <p>Main layout is the html view of the app.component.ts, it is divided into a couple of sections such as topbar, profile, menu and footer. Here is the code for\n                the main template. The component class app.component.ts implements the logic such as opening menus, layout modes and so on.\n            </p>\n<pre>\n&lt;div class=\"layout-wrapper\" [ngClass]=\"&#123;'layout-compact':layoutCompact&#125;\" (click)=\"onLayoutClick()\"&gt;\n\n    &lt;div #layoutContainer class=\"layout-container\" \n            [ngClass]=\"&#123;'menu-layout-static': !isOverlay(),\n            'menu-layout-overlay': isOverlay(),\n            'layout-menu-overlay-active': overlayMenuActive,\n            'menu-layout-horizontal': isHorizontal(),\n            'menu-layout-slim': isSlim(),\n            'layout-menu-static-inactive': staticMenuDesktopInactive,\n            'layout-menu-static-active': staticMenuMobileActive&#125;\"&gt;\n\n        &lt;app-topbar&gt;&lt;/app-topbar&gt;\n\n        &lt;div class=\"layout-menu\" [ngClass]=\"&#123;'layout-menu-dark':darkMenu&#125;\" (click)=\"onMenuClick($event)\"&gt;\n            &lt;div #layoutMenuScroller class=\"nano\"&gt;\n                &lt;div class=\"nano-content menu-scroll-content\"&gt;\n                    &lt;inline-profile *ngIf=\"profileMode=='inline'&&!isHorizontal()\"&gt;&lt;/inline-profile&gt;\n                    &lt;app-menu [reset]=\"resetMenu\"&gt;&lt;/app-menu&gt;\n                &lt;/div&gt;\n            &lt;/div&gt;\n        &lt;/div&gt;\n        \n        &lt;div class=\"layout-main\"&gt;\n            &lt;app-breadcrumb&gt;&lt;/app-breadcrumb&gt;\n        \n            &lt;div class=\"layout-content\"&gt;\n                &lt;router-outlet&gt;&lt;/router-outlet&gt;\n                \n                &lt;app-footer&gt;&lt;/app-footer&gt;\n            &lt;/div&gt;    \n        &lt;/div&gt;\n        \n        &lt;app-rightpanel&gt;&lt;/app-rightpanel&gt;\n        \n        &lt;div class=\"layout-mask\"&gt;&lt;/div&gt;\n    &lt;/div&gt;\n\n&lt;/div&gt;\n</pre>\n\n            <h1>Menu</h1>\n            <p>Menu is a separate component defined in app.menu.component.ts file based on PrimeNG MenuModel API. In order to define the menuitems, \n            navigate to this file and define your own model as a nested structure. Here is the menu component from the sample application. The helper\n            app-submenu component is also available in the same file.</p>\n<pre>\nimport &#123;Component,Input,OnInit,EventEmitter,ViewChild,trigger,state,transition,style,animate&#125; from '@angular/core';\nimport &#123;Location&#125; from '@angular/common';\nimport &#123;Router&#125; from '@angular/router';\nimport &#123;MenuItem&#125; from 'primeng/primeng';\nimport &#123;AppComponent&#125; from './app.component';\n\n@Component(&#123;\n    selector: 'app-menu',\n    template: `\n        &lt;ul app-submenu [item]=\"model\" root=\"true\" class=\"ultima-menu ultima-main-menu  clearfix\" [reset]=\"reset\"&gt;&lt;/ul&gt;\n    `\n&#125;)\nexport class AppMenuComponent implements OnInit &#123;\n\n    @Input() reset: boolean;\n\n    model: MenuItem[];\n\n    constructor(public app:AppComponent) &#123;&#125;\n    \n    ngOnInit() &#123;\n        this.model = [\n            &#123;label: 'Dashboard', icon: 'dashboard', routerLink: ['/']&#125;,\n            &#123;\n                label: 'Components', icon: 'list',\n                items: [\n                    &#123;label: 'Sample Page', icon: 'desktop_mac', routerLink: ['/sample']&#125;,\n                    &#123;label: 'Forms', icon: 'input', routerLink: ['/forms']&#125;,\n                    &#123;label: 'Data', icon: 'grid_on', routerLink: ['/data']&#125;,\n                    &#123;label: 'Panels', icon: 'content_paste', routerLink: ['/panels']&#125;,\n                    &#123;label: 'Overlays', icon: 'content_copy', routerLink: ['/overlays']&#125;,\n                    &#123;label: 'Menus', icon: 'menu', routerLink: ['/menus']&#125;,\n                    &#123;label: 'Messages', icon: 'message', routerLink: ['/messages']&#125;,\n                    &#123;label: 'Charts', icon: 'insert_chart', routerLink: ['/charts']&#125;,\n                    &#123;label: 'File', icon: 'attach_file', routerLink: ['/file']&#125;,\n                    &#123;label: 'Misc', icon: 'toys', routerLink: ['/misc']&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Template Pages', icon: 'get_app',\n                items: [\n                    &#123;label: 'Empty Page', icon: 'hourglass_empty', routerLink: ['/empty']&#125;,\n                    &#123;label: 'Landing Page', icon: 'flight_land', url: 'landing.html'&#125;,\n                    &#123;label: 'Login Page', icon: 'verified_user', url: 'login.html'&#125;,\n                    &#123;label: 'Error Page', icon: 'error', url: 'error.html'&#125;,\n                    &#123;label: '404 Page', icon: 'error_outline', url: '404.html'&#125;,\n                    &#123;label: 'Access Denied Page', icon: 'security', url: 'access.html'&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Menu Hierarchy', icon: 'menu',\n                items: [\n                    &#123;\n                        label: 'Submenu 1', icon: 'subject',\n                        items: [\n                            &#123;\n                                label: 'Submenu 1.1', icon: 'subject',\n                                items: [\n                                    &#123;label: 'Submenu 1.1.1', icon: 'subject'&#125;,\n                                    &#123;label: 'Submenu 1.1.2', icon: 'subject'&#125;,\n                                    &#123;label: 'Submenu 1.1.3', icon: 'subject'&#125;,\n                                ]\n                            &#125;,\n                            &#123;\n                                label: 'Submenu 1.2', icon: 'subject',\n                                items: [\n                                    &#123;label: 'Submenu 1.2.1', icon: 'subject'&#125;,\n                                    &#123;label: 'Submenu 1.2.2', icon: 'subject'&#125;\n                                ]\n                            &#125;,\n                        ]\n                    &#125;,\n                    &#123;\n                        label: 'Submenu 2', icon: 'subject',\n                        items: [\n                            &#123;\n                                label: 'Submenu 2.1', icon: 'subject',\n                                items: [\n                                    &#123;label: 'Submenu 2.1.1', icon: 'subject'&#125;,\n                                    &#123;label: 'Submenu 2.1.2', icon: 'subject'&#125;,\n                                    &#123;label: 'Submenu 2.1.3', icon: 'subject'&#125;,\n                                ]\n                            &#125;,\n                            &#123;\n                                label: 'Submenu 2.2', icon: 'subject',\n                                items: [\n                                    &#123;label: 'Submenu 2.2.1', icon: 'subject'&#125;,\n                                    &#123;label: 'Submenu 2.2.2', icon: 'subject'&#125;\n                                ]\n                            &#125;,\n                        ]\n                    &#125;\n                ]\n            &#125;,\n            &#123;label: 'Utils', icon: 'build', routerLink: ['/utils']&#125;,\n            &#123;label: 'Documentation', icon: 'find_in_page', routerLink: ['/documentation']&#125;\n        ];\n    &#125;\n&#125;\n</pre>\n\n            \n            <h1>Integration with an Existing CLI Project</h1>\n            <p>To setup Ultima in an existing project, copy the <i>src/assets</i> folder to your projects folder with the same name \n                and replace the contents of app.component.ts, app.component.html with their counterparts in Ultima under <i>src/app</i> folder.</p>\n            \n            <p>Dependencies of Ultima are listed below and needs to be added to package.json</p>\n<pre>\n\"primeng\": \"^4.1.0\",             //required: PrimeNG components\n\"jquery\": \"^3.1.1\",              //optional: schedule and nanoscroller\n\"chart.js\": \"^2.4.0\",            //optional: chart \n\"fullcalendar\": \"^3.1.0\",        //optional: schedule\n\"moment\": \"^2.17.1\",             //optional: chart and schedule\n\"quill\": \"^1.1.8\",               //optional: editor\n</pre>\n                        \n            <p>Add PrimeNG CSS at styles section in angular-cli.json</p>\n\n<pre>\n\"styles\": [\n    \"../node_modules/primeng/resources/primeng.min.css\",        //required: PrimeNG components\n    \"../node_modules/fullcalendar/dist/fullcalendar.min.css\",   //optional: schedule\n    \"../node_modules/quill/dist/quill.snow.css\",                //optional: editor\n    \"../node_modules/nanoscroller/bin/css/nanoscroller.css\",    //optional: nanoscroller\n    \"styles.scss\"                                               //your styles and overrides\n],\n</pre>\n\n            <p>Add the following scripts to your angular-cli.json</p>\n<pre>\n\"scripts\": [\n    \"../node_modules/jquery/dist/jquery.js\",                                //optional: schedule and nanoscroller\n    \"../node_modules/nanoscroller/bin/javascripts/jquery.nanoscroller.js\",  //optional: nanoscroller\n    \"assets/layout/js/ripple.js\",                                           //optional: ripple effect\n    \"../node_modules/moment/moment.js\",                                     //optional: schedule and charts\n    \"../node_modules/chart.js/dist/Chart.js\",                               //optional: charts\n    \"../node_modules/fullcalendar/dist/fullcalendar.js\",                    //optional: schedule\n    \"../node_modules/quill/dist/quill.js\"                                   //optional: editor\n],\n</pre>\n\n            <p>Last part is adding theme and layout css files, in the CLI app they are defined using link tags in index.html so the demo can switch them on\n            the fly by changing the path however if this is not a requirement, you may also add them to the styles configuration so they go inside the bundle.</p>\n\n            <h1 id=\"noncli\">Integration with an Existing Non-CLI Project</h1>\n            <p>For an existing project that do not use CLI, setup steps are more or less similar. Start with installing the dependencies listed above in package.json</p>\n            <p>Copy the <i>src/assets</i> folder to your application and include the resources listed above with a module bundler like webpack or using link-script tags.</p>\n            <p>Finally copy the contents of app.component.html to your application's main component template such as <i>app/application.html</i> along\n            with the sub components which are app.menu.component.ts, app.profile.components.ts, app.topbar.component.ts and app.footer.component.ts.</p>\n                        \n            <h1>Size</h1>\n            <p>Ultima uses EM units for scalability and comes in two built-in sizes, default is closer to the material design specification with bigger fonts and paddings whereas the alternative compact size\n            shrinks the dimensions of the UI elements. To activate the compact mode add \"layout-compact\" style class to the .layout-wrapper element in application.html\n            which is the enclosing div of whole content.</p>\n            \n            <h1>Theme</h1>    \n            <p>Ultima provides 12 PrimeNG themes out of the box, setup of a theme simple including the css of theme to your page that are located inside resources/theme folder.</p>\n            \n            <ul>\n                <li>theme-blue</li>\n                <li>theme-blue-grey</li>\n                <li>theme-brown</li>\n                <li>theme-cyan</li>\n                <li>theme-dark-blue</li>\n                <li>theme-dark-green</li>\n                <li>theme-green</li>\n                <li>theme-grey</li>\n                <li>theme-indigo</li>\n                <li>theme-purple-amber</li>\n                <li>theme-purple-cyan</li>\n                <li>theme-teal</li>\n            </ul>\n            \n            <p>A custom theme can be developed by the following steps.</p>\n            <ul>\n                <li>Choose a custom theme name such as theme-myown.</li>\n                <li>Create a file named theme-myown.scss under <i>assets/theme folder</i>.</li>\n                <li>Define the variables listed below and import the <i>/sass/theme/_theme.scss</i> file.</li>\n                <li>Build the scss to generate css</li>\n                <li>Include the generated theme.css to your page.</li>\n            </ul>\n            \n            <p>Here are the variables required to create a theme, you may need to change the last line according to the \n                relative path of the sass folder in your application.</p>\n                \n<pre>\n$primaryColor: #009688;\n$primaryDarkColor: #00695C;\n$primaryLightColor: #80CBC4;\n$accentColor: #CDDC39;\n$accentDarkColor: #9E9D24;\n$accentLightColor: #E6EE9C;\n$accentTextColor: #212121;\n\n@import '../sass/theme/_theme';\n</pre> \n                \n            <p> An example sass command to compile the css would be;</p>\n                \n<pre>\nsass src/assets/theme-myown/theme.scss src/assets/theme-myown/theme.css\n</pre> \n\n            <p>Watch mode is handy to avoid compiling everytime when a change is made, instead use the following command\n            so that sass generates the file whenever you make a customization. This builds all css files whenever a change is made to any scss file.</p>\n<pre>\nsass -w resources/ --sourcemap=none\n</pre>\n\n            <p>Same can also be applied to layout itself;</p>\n            <ul>\n                <li>Choose a layout name such as layout-myown.</li>\n                <li>Create an empty file named layout-myown.scss inside <i>assets/layout/css</i> folder.</li>\n                <li>Define the variables listed below and import the <i>/sass/layout/_layout.scss</i> file.</li>\n                <li>Build the scss to generate css</li>\n                <li>Serve the css by importing it using a link tag or a bundler.</li>\n            </ul>\n            \n            <p>Here are the variables required to create a layout, you may need to change the last line according to the \n                relative path of the sass folder in your application.</p>\n            \n<pre>\n$primaryColor: #3F51B5;\n$primaryDarkColor: #283593;\n$primaryLightColor: #9fa8da;\n$accentColor: #E91E63;\n$accentDarkColor: #ad1457;\n$accentLightColor: #f48fb1;\n$accentTextColor: #ffffff;\n$darkMenuBgColor: #424242;\n$darkMenuHoverColor: #676767;\n$darkMenuRouterLinkActiveColor: #9fa8da;\n$lightMenuRouterLinkActiveColor: #3F51B5;\n$horizontalLightMenuRouterLinkActiveColor: #9fa8da;\n\n@import '../../sass/layout/_layout';\n</pre> \n\n            <p>Check out the video tutorial that follows the steps above to create the dark-blue theme and layout. It is based on PrimeFaces version but generation part\n                applies to PrimeNG as well.</p>\n            \n            <div class=\"video-container\">\n                <iframe src=\"https://www.youtube.com/embed/XmU7QYFYuPk\" frameborder=\"0\"></iframe>\n            </div>\n            \n            <p>Shared variables between the theme and layout are available in _variables.scss which also define the common settings such as font size.</p>\n<pre>\n/* Common */\n$textColor:#212121;\n$textSecondaryColor:#757575;\n$fontSize:16px;\n$lineHeight:1.5em;\n$transitionDuration:.3s;\n$borderRadius:3px;\n\n/* Layout */\n$bodyBgColor:#f7f7f7;\n$maskBgColor:#424242;\n$topbarButtonColor:#ffffff;\n$topbarButtonHoverColor:#e8e8e8;\n$topbarSearchBorderColor:#ffffff;\n$topbarSearchColor:#ffffff;\n$topbarIconColor:#ffffff;\n$topbarIconHoverColor:#e8e8e8;\n$topbarMenuBgColor:#ffffff;\n$layoutMenuBgColor:#ffffff;\n$layoutMenuScrollbarBgColor:#aaaaaa;\n$layoutMenuItemIconColor:#757575;\n$layoutMenuItemActiveColor:#e8e8e8;\n$horizontalLayoutMenuItemTextColor:#ffffff;\n$horizontalLayoutMenuItemHoverBgColor:#e8e8e8;\n$horizontalLayoutMenuSubMenuBgColor:#ffffff;\n$horizontalLayoutMenuSubMenuActiveBgColor:#e8e8e8;\n$horizontalDarkLayoutMenuItemTextColor:#ffffff;\n$slimLayoutMenuSubMenuBgColor:#ffffff;\n$slimMenuTooltipColor:#ffffff;\n$rightPanelBgColor:#ffffff;\n$topbarSubmenuBgColor:#ffffff;\n$profileMenuBorderBottomColor:#d6d5d5;\n$profileMenuDarkBorderBottomColor:#545454;\n$darkMenuColor:#ffffff;\n\n/* Theme */\n$headerFontSize:1em;\n$headerPadding:.625em 1em;\n$contentFontSize:1em;\n$contentPadding:.625em 1em;\n$inputHeaderFontSize:1em;\n$inputHeaderPadding:.625em 1em;\n$inputBorderColor:#bdbdbd;\n$inputBorderErrorColor:#e62a10;  \n$inputErrorTextColor:#e62a10;  \n$textboxBgColor:#f7f7f7;\n$inputFontSize:1em;\n$buttonFontSize:1em;\n$inputOptionFontSize:1em;\n$inputOptionPadding:.625em .875em;\n$hoverBgColor:#e8e8e8;\n$hoverTextColor:#000000;\n$dividerColor:#bdbdbd;\n$dividerLightColor:#cacaca;\n$grayBgColor:#757575;\n$iconFontSize:1.5em;\n$invalidInputLabelColor:#e62a10;\n$invalidInputBorderColor:#e62a10;\n$activeMenuItemBadgeColor:#ffffff;\n$activeMenuItemBadgeTextColor:#212121;\n\n/* Compact */\n$c-fontSize:14px;\n$c-lineHeight:18px;\n</pre> \n\n            <h1>Menu Item Badges</h1>\n            <p>Badges are numerical indicators associated with a link.\n               The badge property is the value of the badge and badgeStyleClass is style class of the badge.</p>\n<pre>\nlabel: 'Components', icon: 'list', badge: '2', badgeStyleClass: 'red-badge'\n</pre>  \n            <p>Default badge uses the accent color of ultima layout and there are three more alternative colors.</p>\n            <ul>\n                <li>red-badge</li>\n                <li>purple-badge</li>\n                <li>teal-badge</li>\n            </ul>\n                                    \n            <h1>Menu Modes</h1>\n            <p>Menu has 4 modes, static, overlay, slim and horizontal. Layout container element in application.html is used to define which mode to use by adding specific classes. List\n            below indicates the style classes for each mode. In addition menu</p>\n            <ul>\n                <li>Static: \"layout-wrapper menu-layout-static\"</li>\n                <li>Overlay: \"layout-wrapper menu-layout-overlay\"</li>\n                <li>Slim: \"layout-wrapper menu-layout-static menu-layout-slim\"</li>\n                <li>Horizontal: \"layout-wrapper menu-layout-static menu-layout-horizontal\"</li>\n            </ul>\n            \n            <p>For example to create a horizontal menu, the div element should be in following form;</p>\n<pre>\n&lt;div class=\"layout-wrapper layout-compact\"&gt;\n    &lt;div class=\"layout-container menu-layout-static menu-layout-horizonal\"&gt;\n</pre>            \n\n            <p>It is also possible to leave the choice to the user by keeping the preference at a component and using an expression to bind it so that user can switch between modes. Sample\n            application has an example implementation of such use case. Refer to app.component.ts for an example.</p>          \n\n            <h1>Dark Menu</h1>\n            <p>Default color scheme of menu is light and alternative dark mode can be activated by adding layout-menu-dark style class to the menu container that \n                is an element having .layout-menu as its class.</p>\n<pre>\n&lt;div class=\"layout-menu layout-menu-dark\"&gt;\n</pre>\n            \n            <h1>Profile Modes</h1>\n            <p>There are two possible locations for the user profile menu, first version is inline located inside the main menu and second option is the topbar menu. For inline mode,\n            profile content should be placed above the menu and for inline mode content goes in topbar-items list. The sample demo application provides examples for\n            both cases.</p>\n            \n            <h1>Utilities</h1>\n            <p>Ultima provides various helper features such as material iconset compatible with PrimeNG components and helper classes. Visit <a [routerLink]=\"['/utils']\">utils</a> page for details.</p>\n                    \n            <h1>Breadcrumb</h1>\n            <p>Ultima has an optional built-in breadcrumb section right below the topbar. The items are dynamically generated using a\n                BreadcrumbService where each main page that goes into the router-outlet should provide a collection of MenuItem instances.\n                Here is an example component that updates the breadcrumb.</p>\n<pre>\nimport &#123;Component&#125; from '@angular/core';\nimport &#123;BreadcrumbService&#125; from '../../breadcrumb.service';\n\n@Component(&#123;\n    templateUrl: './emptydemo.component.html'\n&#125;)\nexport class ControlPanelComponent &#123;\n    \n    constructor(private breadcrumbService: BreadcrumbService) &#123;\n        this.breadcrumbService.setItems([\n            &#123;label: 'Admin'&#125;,\n            &#123;label: 'Control Panel', routerLink: ['/controlpanel']&#125;\n        ]);\n    &#125;\n    \n&#125;\n</pre>\n            <p>Result will be reflected at application breadcrumb component such as \"Home Icon\" -> \"Admin\" -> \"Control Panel\".</p>\n\n            <h1>Grid CSS</h1>\n            <p>Ultima uses PrimeNG Grid CSS (ui-g-*) throughout the samples, we strongly suggest using Grid CSS as your layout framework as it is well tested and supported by PrimeNG. Grid CSS is\n            available inside primeng.css.</p> \n            \n            <h1>Customizing Styles</h1>\n            <p>It is suggested to write your customizations in styles.scss file or another file instead of adding them to the\n                scss files under sass folders to avoid maintenance issues after an update.</p>\n            \n            <h1>Migration Guide</h1>\n            <p>For seamless updates and easier maintenance, we suggest keeping your CSS customizations in a separate sass file so that your changes\n            are not overriden with an update.</p>\n            \n            <p>4.3.0 to 5.0.0</p>\n            <ul>\n                <li>Update app.component.ts and app.component.html.</li>\n                <li>Define breadcrumbservice as a provider in your app.module</li>\n                <li>Update layout css files.</li>\n                <li>Update theme css files.</li>\n            </ul>\n\n            <p>4.2.0 to 4.3.0</p>\n            <ul>\n                <li>Update theme css files.</li>\n            </ul>\n\n            <p>4.1.1 to 4.2.0</p>\n            <ul>\n                <li>Update app.*.ts and app.*.html files under app folder.</li>\n                <li>Update theme css and layout css files.</li>\n            </ul>\n\n            <p>4.0.1 to 4.1.0</p>\n            <ul>\n                <li>Update layout css files.</li>\n                <li>Update theme css files.</li>\n                <li>Update AppSubmenu component in app.menu.component.ts.</li>\n            </ul>\n            \n            <p>4.0.0 to 4.0.1</p>\n            <ul>\n                <li>Update layout css files.</li>\n            </ul>\n            \n            <p>2.1 to 4.0.0</p>\n            <ul>\n                <li>Includes version updates to PrimeNG 4 and Angular 4.</li>\n                <li>Update theme css files.</li>\n            </ul>\n            \n            <p>2.0.5 to 2.1.0</p>\n            <ul>\n                <li>Project is updated to CLI RC2, Angular 4-RC3 and PrimeNG 4-RC1.</li>\n                <li>Add <i class=\"inline-code\">import &#123;trigger,state,style,transition,animate&#125; from '@angular/animations';</i> to app.menu.components.ts and remove these imports from 'angular/core'.</li>\n                <li>Add <i class=\"inline-code\">import &#123;BrowserAnimationsModule&#125; from '@angular/platform-browser/animations';</i> to app.module.ts and import the module to your application.</li>\n                <li>Update theme css files, there are no changes to the layout.</li>\n            </ul>\n            \n            <p>2.0.4 to 2.0.5</p>\n            <ul>\n                <li>No change required, missing .angular-cli.json file in 2.0.4 is added.</li>\n            </ul>\n            \n            <p>2.0.3 to 2.0.4</p>\n            <ul>\n                <li>No change required, only CLI version is updated to RC</li>\n            </ul>\n            \n            <p>2.0.2 to 2.0.3</p>\n            <ul>\n                <li>Update AppSubmenu component in app.menu.component.ts by replacing the itemClick method implementation.</li>\n                <li>Update layout css files, there are no changes on themes.</li>\n                <li>Update app.component.ts by changing onTopbarMenuButtonClick method implementation to add <i>event.preventDefault()</i> at the end.</li>\n                <li>Remove [ngClass]=\"&#123;'menu-button-rotate': app.rotateMenuButton&#125;\" from menu-button in app.topbar.component.ts.</li>\n            </ul> \n                       \n            <p>2.0.1 to 2.0.2</p>\n            <ul>\n                <li>Update AppSubmenu component in app.menu.component.ts</li>\n                <li>Update layout css files, there are no changes on themes.</li>\n                <li>Update app.component.ts.</li>\n                <li>Add pInputText to search input at app.topbar.component.ts</li>\n            </ul> \n            \n            <p>2.0.0 to 2.0.1</p>\n            <ul>\n                <li>Update AppSubmenu component in app.menu.component.ts</li>\n                <li>Update layout css and theme css files.</li>\n                <li>Update app.component.ts.</li>\n            </ul> \n            \n            <p>1.1.0 to 2.0.0</p>\n            <ul>\n                <li>Update PrimeNG to at least 2.0.</li>\n                <li>Replace app.component.ts and app.component.html</li>\n                <li>Remove layout.js</li>\n                <li>Update the scripts and styles section at angular-cli.json</li>\n                <li>Define menu using PrimeNG MenuModel</li>\n            </ul> \n\n            <p>1.0.3 to 1.1.0</p>\n            <ul>\n                <li>Update css files of layout and theme.</li>\n            </ul> \n            \n            <p>1.0.2 to 1.0.3</p>\n            <ul>\n                <li>Update css files of layout and theme.</li>\n            </ul> \n            \n            <p>1.0.1 to 1.0.2</p>\n            <ul>\n                <li>Update layout.js</li>\n            </ul> \n            \n            <p>1.0.0 to 1.0.1</p>\n            <ul>\n                <li>Update layout.js</li>\n            </ul>                 \n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/demo/view/documentation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocumentationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__breadcrumb_service__ = __webpack_require__("../../../../../src/app/breadcrumb.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DocumentationComponent = (function () {
    function DocumentationComponent(breadcrumbService) {
        this.breadcrumbService = breadcrumbService;
        this.breadcrumbService.setItems([
            { label: 'Documentation' }
        ]);
    }
    DocumentationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/demo/view/documentation.component.html"),
            styles: ["\n        .docs h1 {\n            margin-top: 30px;\n        }\n\n        .docs pre {\n            font-family: monospace;\n            background-color: #0C2238;\n            color: #dddddd;\n            padding: 1em;\n            font-size: 14px;\n            border-radius: 3px;\n            overflow: auto;\n        }\n\n        .inline-code {\n            background-color: #0C2238;\n            color: #dddddd;\n            font-style: normal;\n            font-size: 13px;\n            padding: 0 .5em;\n        }\n\n        .video-container {\n            position: relative;\n            width: 100%;\n            height: 0;\n            padding-bottom: 56.25%;\n        }\n\n        .video-container iframe {\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n        }"
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__breadcrumb_service__["a" /* BreadcrumbService */]])
    ], DocumentationComponent);
    return DocumentationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/demo/view/emptydemo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n    <div class=\"ui-g-12\">\n        <div class=\"card\">\n            <h1>Seja Bem vindo!</h1>\n            <p>Tela inicial do sistema.</p>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/demo/view/emptydemo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmptyDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__breadcrumb_service__ = __webpack_require__("../../../../../src/app/breadcrumb.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmptyDemoComponent = (function () {
    function EmptyDemoComponent(breadcrumbService) {
        this.breadcrumbService = breadcrumbService;
        this.breadcrumbService.setItems([
            { label: 'Empty Page' },
        ]);
    }
    EmptyDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/demo/view/emptydemo.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__breadcrumb_service__["a" /* BreadcrumbService */]])
    ], EmptyDemoComponent);
    return EmptyDemoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/demo/view/filedemo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"ui-g\">\n        <div class=\"ui-g-12\">\n            <div class=\"card\">\n                <h1>Upload</h1>\n                <p-growl [value]=\"msgs\"></p-growl>\n                    \n                <p-fileUpload name=\"demo[]\" url=\"./upload.php\" (onUpload)=\"onUpload($event)\" \n                        multiple=\"multiple\" accept=\"image/*\" maxFileSize=\"1000000\"> \n                        <ng-template pTemplate=\"content\">\n                            <ul *ngIf=\"uploadedFiles.length\">\n                                <li *ngFor=\"let file of uploadedFiles\">{{file.name}} - {{file.size}} bytes</li>\n                            </ul>\n                        </ng-template>    \n                </p-fileUpload>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/demo/view/filedemo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__breadcrumb_service__ = __webpack_require__("../../../../../src/app/breadcrumb.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FileDemoComponent = (function () {
    function FileDemoComponent(breadcrumbService) {
        this.breadcrumbService = breadcrumbService;
        this.uploadedFiles = [];
        this.breadcrumbService.setItems([
            { label: 'Components' },
            { label: 'File Upload', routerLink: ['/file'] }
        ]);
    }
    FileDemoComponent.prototype.onUpload = function (event) {
        for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
            var file = _a[_i];
            this.uploadedFiles.push(file);
        }
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
    };
    FileDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/demo/view/filedemo.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__breadcrumb_service__["a" /* BreadcrumbService */]])
    ], FileDemoComponent);
    return FileDemoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/demo/view/formsdemo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g ui-fluid\">\n    <div class=\"ui-g-12 ui-lg-6\">\n        <!-- Left Side -->\n        <div class=\"card card-w-title\">\n            <h1>InputText</h1>\n            <div class=\"ui-g form-group\">\n                <div class=\"ui-g-12 ui-md-4\">\n                    <span class=\"md-inputfield\">\n                        <input type=\"text\" pInputText>\n                        <label>Name</label>\n                    </span>\n                </div>\n                <div class=\"ui-g-12 ui-md-4\">\n                    <span class=\"md-inputfield\">\n                        <input type=\"text\" pInputText>\n                        <label>Email</label>\n                    </span>\n                </div>\n                <div class=\"ui-g-12 ui-md-4\">\n                    <span class=\"md-inputfield\">\n                        <input type=\"text\" pInputText>\n                        <label>Phone</label>\n                    </span>\n                </div>\n                <div class=\"ui-g-12 ui-md-4\">\n                    <input type=\"text\" pInputText placeholder=\"Disabled\" disabled=\"disabled\">\n                </div>\n                <div class=\"ui-g-12 ui-md-4\">\n                    <span class=\"md-inputfield\">\n                        <input type=\"text\" pInputText class=\"ng-dirty ng-invalid\" placeholder=\"Invalid\">\n                        <div class=\"ui-message ui-messages-error ui-corner-all\">\n                            This field is required\n                        </div>\n                    </span>\n                </div>\n                <div class=\"ui-g-12 ui-md-4\">\n                    <input type=\"text\" pInputText>\n                </div>\n            </div>\n            \n            <h1>Filled InputText</h1>\n            <div class=\"ui-g form-group\">\n                <div class=\"ui-g-12 ui-md-4\">\n                    <span class=\"md-inputfield md-inputfield-fill\">\n                        <input type=\"text\" pInputText>\n                        <label>Name</label>\n                    </span>\n                </div>\n                <div class=\"ui-g-12 ui-md-4\">\n                    <span class=\"md-inputfield md-inputfield-fill\">\n                        <input type=\"text\" pInputText>\n                        <label>Email</label>\n                    </span>\n                </div>\n                <div class=\"ui-g-12 ui-md-4\">\n                    <span class=\"md-inputfield md-inputfield-fill\">\n                        <input type=\"text\" pInputText>\n                        <label>Phone</label>\n                    </span>\n                </div>\n            </div>\n            \n            <h1>TextBox</h1>\n            <div class=\"ui-g form-group\">\n                <div class=\"ui-g-12 ui-md-4\">\n                    <span class=\"md-inputfield md-inputfield-box\">\n                        <input type=\"text\" pInputText>\n                        <label>Name</label>\n                    </span>\n                </div>\n                <div class=\"ui-g-12 ui-md-4\">\n                    <span class=\"md-inputfield md-inputfield-box\">\n                        <input type=\"text\" pInputText>\n                        <label>Email</label>\n                    </span>\n                </div>\n                <div class=\"ui-g-12 ui-md-4\">\n                    <span class=\"md-inputfield md-inputfield-box\">\n                        <input type=\"text\" pInputText>\n                        <label>Phone</label>\n                    </span>\n                </div>\n            </div>            \n        </div>\n        \n        <div class=\"card card-w-title\">\n            <h1>TextArea</h1>\n            <textarea [rows]=\"3\" [cols]=\"30\" pInputTextarea placeholder=\"Your Message\" autoResize=\"autoResize\"></textarea>\n        </div>\n        \n        <div class=\"card card-w-title\">\n            <h1>AutoComplete</h1>            \n            <div class=\"ui-g form-group\">\n                <div class=\"ui-g-12\">\n                    <label for=\"acSimple\">Simple</label>\n                </div>\n                <div class=\"ui-g-12\" style=\"margin-bottom:10px\">\n                    <p-autoComplete id=\"acSimple\" [(ngModel)]=\"country\" [suggestions]=\"filteredCountries\" (completeMethod)=\"filterCountry($event)\" field=\"name\" [size]=\"30\"\n                        placeholder=\"Countries\" [minLength]=\"1\"></p-autoComplete>\n                </div>\n                \n                <div class=\"ui-g-12\">\n                    <label for=\"acAdvanced\">Advanced</label>\n                </div>\n                <div class=\"ui-g-12\">\n                    <p-autoComplete id=\"acAdvanced\" [(ngModel)]=\"selectedBrands\" [suggestions]=\"filteredBrands\" (completeMethod)=\"filterBrands($event)\" [size]=\"30\"\n                        [minLength]=\"1\" placeholder=\"Hint: type 'v' or 'f'\" [dropdown]=\"true\" (onDropdownClick)=\"handleACDropdownClick()\" multiple=\"true\">\n                        <ng-template let-brand pTemplate=\"item\">\n                            <div class=\"ui-helper-clearfix\">\n                                <img src=\"assets/demo/images/car/{{brand}}.gif\" style=\"width:32px;display:inline-block;margin:5px 0 2px 5px\"/>\n                                <div style=\"font-size:18px;float:right;margin:10px 10px 0 0\">{{brand}}</div>\n                            </div>\n                        </ng-template>\n                    </p-autoComplete>\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"card card-w-title\">\n            <h1>MultiSelect</h1>\n            <p-multiSelect [options]=\"carOptions\" [(ngModel)]=\"selectedMultiSelectCars\"></p-multiSelect>\n        </div>\n\n        <div class=\"card card-w-title\">\n            <h1>Calendar</h1>\n            <p-calendar [inline]=\"true\"></p-calendar> \n            \n            <div class=\"ui-g form-group-m\" style=\"margin-top:20px\">\n                <div class=\"ui-g-12\">\n                    <p-calendar id=\"popup\" placeholder=\"Popup\"></p-calendar>\n                </div>\n                <div class=\"ui-g-12\">\n                    <p-calendar id=\"datetime\" dateFormat=\"mm/dd/yy\" showTime=\"true\" placeholder=\"DateTime\"></p-calendar>\n                </div>\n                <div class=\"ui-g-12\">\n                    <p-calendar id=\"time\" showTime=\"true\" [timeOnly]=\"true\" placeholder=\"Time\"></p-calendar>\n                </div>\n                <div class=\"ui-g-12\">\n                    <p-calendar id=\"showIcon\" [showIcon]=\"true\" placeholder=\"Button\"></p-calendar>\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"card card-w-title\">\n            <h1>Chips</h1>\n            <p-chips></p-chips>\n        </div>\n    </div>\n    \n    <div class=\"ui-g-12 ui-lg-6\">\n        <!-- Right Side -->\n        <div class=\"card card-w-title\">\n            <h1>Checkboxes</h1>\n            <div class=\"ui-g\">\n                <div class=\"ui-g-12 ui-md-4\"><p-checkbox name=\"cg\" value=\"Ultima\" label=\"Ultima\" [(ngModel)]=\"checkboxValues\"></p-checkbox></div>\n                <div class=\"ui-g-12 ui-md-4\"><p-checkbox name=\"cg\" value=\"Icarus\" label=\"Icarus\" [(ngModel)]=\"checkboxValues\"></p-checkbox></div>\n                <div class=\"ui-g-12 ui-md-4\"><p-checkbox name=\"cg\" value=\"Omega\" label=\"Omega\" [(ngModel)]=\"checkboxValues\"></p-checkbox></div>\n            </div>\n        </div>\n        \n        <div class=\"card card-w-title\">\n            <h1>RadioButtons</h1>\n            <div class=\"ui-g\">\n                <div class=\"ui-g-12 ui-md-4\"><p-radioButton name=\"rg\" value=\"Ultima\" label=\"Ultima\" [(ngModel)]=\"radioValue\"></p-radioButton></div>\n                <div class=\"ui-g-12 ui-md-4\"><p-radioButton name=\"rg\" value=\"Icarus\" label=\"Icarus\" [(ngModel)]=\"radioValue\"></p-radioButton></div>\n                <div class=\"ui-g-12 ui-md-4\"><p-radioButton name=\"rg\" value=\"Omega\" label=\"Omega\" [(ngModel)]=\"radioValue\"></p-radioButton></div>\n            </div>\n        </div>\n        \n        <div class=\"card card-w-title\">\n            <h1>InputSwitch</h1>\n            <p-inputSwitch [(ngModel)]=\"switchChecked\"></p-inputSwitch>\n        </div>\n        \n        <div class=\"card card-w-title\">\n            <h1>Dropdown</h1>\n            <p-dropdown [options]=\"cities\" [(ngModel)]=\"selectedCity1\" [autoWidth]=\"false\"></p-dropdown>\n        </div>\n        \n        <div class=\"card card-w-title\">\n            <h1>Password</h1>\n            <input pPassword type=\"password\"/>\n        </div>\n        \n        <div class=\"card card-w-title\">\n            <h1>Spinner</h1>\n            <p-spinner></p-spinner>\n        </div>\n        \n        <div class=\"card card-w-title\">\n            <h1>Slider</h1>\n            <p-slider [(ngModel)]=\"rangeValues\" [range]=\"true\"></p-slider>\n        </div>\n        \n        <div class=\"card card-w-title\">\n            <h1>Listbox</h1>\n            <p-listbox [options]=\"citiesListbox\" [(ngModel)]=\"selectedCity2\" filter=\"true\"></p-listbox>\n        </div>\n        \n        <div class=\"card card-w-title\">\n            <h1>Rating</h1>\n            <p-rating [(ngModel)]=\"ratingValue\"></p-rating>\n        </div>\n        \n        <div class=\"card card-w-title\">\n            <h1>ColorPicker</h1>\n            <p-colorPicker [(ngModel)]=\"color\" inline=\"true\"></p-colorPicker>\n        </div>\n    </div>\n    \n    <div class=\"ui-g-12\">\n        <div class=\"card card-w-title\">\n            <h1>Input Groups</h1>\n            \n            <div class=\"ui-g form-group\">\n                <div class=\"ui-g-12 ui-md-6\">\n                    <div class=\"ui-inputgroup\">\n                        <span class=\"ui-inputgroup-addon\"><i class=\"material-icons\">account_circle</i></span>\n                        <span class=\"md-inputfield\">\n                            <input type=\"text\" pInputText> \n                            <label>Username</label>        \n                        </span>\n                    </div>\n                </div>\n                \n                <div class=\"ui-g-12 ui-md-6\">\n                    <div class=\"ui-inputgroup\">\n                        <span class=\"ui-inputgroup-addon\"><i class=\"material-icons\">credit_card</i></span>  \n                        <span class=\"ui-inputgroup-addon\"><i class=\"material-icons\">card_travel</i></span>   \n                        <span class=\"md-inputfield\">\n                            <input type=\"text\" pInputText> \n                            <label>Price</label>        \n                        </span>\n                        <span class=\"ui-inputgroup-addon\">$</span>  \n                        <span class=\"ui-inputgroup-addon\">.00</span>      \n                    </div>\n                </div>\n                            \n                <div class=\"ui-g-12 ui-md-6\">\n                    <div class=\"ui-inputgroup\">\n                        <span class=\"md-inputfield\">\n                            <input type=\"text\" pInputText> \n                            <label>Keyword</label>        \n                        </span>\n                        <button pButton type=\"button\" icon=\"ui-icon-search\"></button>      \n                    </div>\n                </div>\n                \n                <div class=\"ui-g-12 ui-md-6\">\n                    <div class=\"ui-inputgroup\">\n                        <span class=\"ui-inputgroup-addon\"><p-checkbox></p-checkbox></span>\n                        <span class=\"md-inputfield\">\n                            <input type=\"text\" pInputText> \n                            <label>Confirm</label>        \n                        </span>         \n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n            \n    <div class=\"ui-g-12\">\n        <div class=\"card card-w-title\">\n            <h1>Editor</h1>\n            <p-editor [style]=\"{'height':'320px'}\"></p-editor>\n        </div>\n    </div>\n    \n    <div class=\"ui-g-12 ui-g-nopad\">\n        <div class=\"ui-g-12 ui-lg-6\" style=\"padding-top:0\">\n            <div class=\"card card-w-title\">\n                <h1>Buttons</h1>\n                \n                <div class=\"ui-g\">\n                    <div class=\"ui-g-12\">ToggleButton</div>\n                    <div class=\"ui-g-12\">\n                        <p-toggleButton [(ngModel)]=\"toggleButtonChecked\"></p-toggleButton>\n                    </div>\n                    \n                    <div class=\"ui-g-12\">SelectButton</div>\n                    <div class=\"ui-g-12\">\n                        <p-selectButton [options]=\"types\" [(ngModel)]=\"selectedType\"></p-selectButton>\n                    </div>\n                    \n                    <div class=\"ui-g-12\">Button</div>\n                    <div class=\"ui-g-12\">\n                        <button type=\"button\" label=\"Bookmark\" pButton></button>\n                    </div>\n                    \n                    <div class=\"ui-g-12\">Left Icon</div>\n                    <div class=\"ui-g-12\">\n                        <button type=\"button\" label=\"Clear\" pButton icon=\"ui-icon-clear\"></button>\n                    </div>\n                    \n                    <div class=\"ui-g-12\">Right Icon</div>\n                    <div class=\"ui-g-12\">\n                        <button type=\"button\" label=\"Clear\" pButton icon=\"ui-icon-clear\" iconPos=\"right\"></button>\n                    </div>\n                    \n                    <div class=\"ui-g-12\">Icon Only</div>\n                    <div class=\"ui-g-12\">\n                        <button type=\"button\" icon=\"ui-icon-add\" pButton></button>\n                    </div>\n                    \n                    <div class=\"ui-g-12\">Link</div>\n                    <div class=\"ui-g-12\"><a href=\"http://www.primefaces.org\" target=\"_blank\">Homepage</a></div>\n                    \n                    <div class=\"ui-g-12\">SplitButton</div>\n                    <div class=\"ui-g-12\">\n                        <p-splitButton label=\"Save\" icon=\"ui-icon-save\" [model]=\"splitButtonItems\"></p-splitButton>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"ui-g-12 ui-lg-6\" style=\"padding-top:0\">\n            <div class=\"card card-w-title\">\n                <h1>Colored Buttons</h1>\n                <p>Raised and Flat buttons with various color alternatives.</p>\n                <div class=\"ui-g\">\n                    <div class=\"ui-g-12 ui-md-6\" style=\"text-align:center\">\n                        <button pButton type=\"button\" label=\"Primary Button\" style=\"margin-bottom:10px\"></button>\n                                                \n                        <button pButton type=\"button\" label=\"Inline Button\" style=\"margin-bottom:10px;width:auto\"></button>\n                        \n                        <button pButton type=\"button\" label=\"Blue-Grey Button\" style=\"margin-bottom:10px\" class=\"blue-grey-btn\"></button>\n                        \n                        <button pButton type=\"button\" label=\"Cyan Button\" style=\"margin-bottom:10px\" class=\"cyan-btn\"></button>\n                        \n                        <button pButton type=\"button\" label=\"Amber Button\" style=\"margin-bottom:10px\" class=\"amber-btn\"></button>\n                        \n                        <button pButton type=\"button\" label=\"Teal Button\" style=\"margin-bottom:10px\" class=\"teal-btn\"></button>\n                        \n                        <button pButton type=\"button\" label=\"Red Button\" style=\"margin-bottom:10px\" class=\"red-btn\"></button>\n                        \n                        <button pButton type=\"button\" label=\"Orange Button\" style=\"margin-bottom:10px\" class=\"orange-btn\"></button>\n                        \n                        <button pButton type=\"button\" label=\"Blue Button\" style=\"margin-bottom:10px\" class=\"blue-btn\"></button>\n                        \n                        <button pButton type=\"button\" label=\"Green Button\" style=\"margin-bottom:10px\" class=\"green-btn\"></button>\n                        \n                        <button pButton type=\"button\" label=\"Deep-Orange Button\" style=\"margin-bottom:10px\" class=\"deep-orange-btn\"></button>\n                        \n                        <button pButton type=\"button\" label=\"Purple Button\" style=\"margin-bottom:10px\" class=\"purple-btn\"></button>\n                        \n                        <button pButton type=\"button\" label=\"Indigo Button\" style=\"margin-bottom:10px\" class=\"indigo-btn\"></button>\n                        \n                        <button pButton type=\"button\" label=\"Pink Button\" style=\"margin-bottom:10px\" class=\"pink-btn\"></button>\n                    </div>\n                    \n                    <div class=\"ui-g-12 ui-md-6\" style=\"text-align:center\">                                \n                        <button pButton type=\"button\" label=\"Primary Button\" style=\"margin-bottom:10px\" styleClass=\"flat\"></button>\n                        \n                        <button pButton type=\"button\" label=\"Inline Button\" style=\"margin-bottom:10px;width:auto\" styleClass=\"flat\"></button>\n                        \n                        <button pButton type=\"button\" label=\"Blue-Grey Button\" style=\"margin-bottom:10px\" class=\"blue-grey-btn flat\"></button>\n                        \n                        <button pButton type=\"button\" label=\"Cyan Button\" style=\"margin-bottom:10px\" class=\"cyan-btn flat\"></button>\n                        \n                        <button pButton type=\"button\" label=\"Amber Button\" style=\"margin-bottom:10px\" class=\"amber-btn flat\"></button>\n                        \n                        <button pButton type=\"button\" label=\"Teal Button\" style=\"margin-bottom:10px\" class=\"teal-btn flat\"></button>\n                        \n                        <button pButton type=\"button\" label=\"Red Button\" style=\"margin-bottom:10px\" class=\"red-btn flat\"></button>\n                        \n                        <button pButton type=\"button\" label=\"Orange Button\" style=\"margin-bottom:10px\" class=\"orange-btn flat\"></button>\n                        \n                        <button pButton type=\"button\" label=\"Blue Button\" style=\"margin-bottom:10px\" class=\"blue-btn flat\"></button>\n                        \n                        <button pButton type=\"button\" label=\"Green Button\" style=\"margin-bottom:10px\" class=\"green-btn flat\"></button>\n                        \n                        <button pButton type=\"button\" label=\"Deep-Orange Button\" style=\"margin-bottom:10px\" class=\"deep-orange-btn flat\"></button>\n                        \n                        <button pButton type=\"button\" label=\"Purple Button\" style=\"margin-bottom:10px\" class=\"purple-btn flat\"></button>\n                        \n                        <button pButton type=\"button\" label=\"Indigo Button\" style=\"margin-bottom:10px\" class=\"indigo-btn flat\"></button>\n                        \n                        <button pButton type=\"button\" label=\"Pink Button\" style=\"margin-bottom:10px\" class=\"pink-btn flat\"></button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/demo/view/formsdemo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormsDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_countryservice__ = __webpack_require__("../../../../../src/app/demo/service/countryservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__breadcrumb_service__ = __webpack_require__("../../../../../src/app/breadcrumb.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FormsDemoComponent = (function () {
    function FormsDemoComponent(countryService, breadcrumbService) {
        this.countryService = countryService;
        this.breadcrumbService = breadcrumbService;
        this.brands = ['Audi', 'BMW', 'Fiat', 'Ford', 'Honda', 'Jaguar', 'Mercedes', 'Renault', 'Volvo', 'VW'];
        this.selectedMultiSelectCars = [];
        this.checkboxValues = [];
        this.rangeValues = [20, 80];
        this.breadcrumbService.setItems([
            { label: 'Components' },
            { label: 'Forms', routerLink: ['/forms'] }
        ]);
    }
    FormsDemoComponent.prototype.ngOnInit = function () {
        this.carOptions = [];
        this.carOptions.push({ label: 'Audi', value: 'Audi' });
        this.carOptions.push({ label: 'BMW', value: 'BMW' });
        this.carOptions.push({ label: 'Fiat', value: 'Fiat' });
        this.carOptions.push({ label: 'Ford', value: 'Ford' });
        this.carOptions.push({ label: 'Honda', value: 'Honda' });
        this.carOptions.push({ label: 'Jaguar', value: 'Jaguar' });
        this.carOptions.push({ label: 'Mercedes', value: 'Mercedes' });
        this.carOptions.push({ label: 'Renault', value: 'Renault' });
        this.carOptions.push({ label: 'VW', value: 'VW' });
        this.carOptions.push({ label: 'Volvo', value: 'Volvo' });
        this.cities = [];
        this.cities.push({ label: 'Select City', value: 0 });
        this.cities.push({ label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } });
        this.cities.push({ label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } });
        this.cities.push({ label: 'London', value: { id: 3, name: 'London', code: 'LDN' } });
        this.cities.push({ label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } });
        this.cities.push({ label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } });
        this.citiesListbox = this.cities.slice(1);
        this.types = [];
        this.types.push({ label: 'Apartment', value: 'Apartment' });
        this.types.push({ label: 'House', value: 'House' });
        this.types.push({ label: 'Studio', value: 'Studio' });
        this.splitButtonItems = [
            { label: 'Update', icon: 'ui-icon-update' },
            { label: 'Delete', icon: 'ui-icon-close' },
            { label: 'Home', icon: 'ui-icon-home', url: 'http://www.primefaces.org/primeng' }
        ];
    };
    FormsDemoComponent.prototype.filterCountry = function (event) {
        var _this = this;
        var query = event.query;
        this.countryService.getCountries().then(function (countries) {
            _this.filteredCountries = _this.searchCountry(query, countries);
        });
    };
    FormsDemoComponent.prototype.searchCountry = function (query, countries) {
        // in a real application, make a request to a remote url with the query and
        // return filtered results, for demo we filter at client side
        var filtered = [];
        for (var i = 0; i < countries.length; i++) {
            var country = countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                filtered.push(country);
            }
        }
        return filtered;
    };
    FormsDemoComponent.prototype.filterBrands = function (event) {
        this.filteredBrands = [];
        for (var i = 0; i < this.brands.length; i++) {
            var brand = this.brands[i];
            if (brand.toLowerCase().indexOf(event.query.toLowerCase()) === 0) {
                this.filteredBrands.push(brand);
            }
        }
    };
    FormsDemoComponent.prototype.handleACDropdownClick = function () {
        var _this = this;
        this.filteredBrands = [];
        // mimic remote call
        setTimeout(function () {
            _this.filteredBrands = _this.brands;
        }, 100);
    };
    FormsDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/demo/view/formsdemo.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_countryservice__["a" /* CountryService */], __WEBPACK_IMPORTED_MODULE_2__breadcrumb_service__["a" /* BreadcrumbService */]])
    ], FormsDemoComponent);
    return FormsDemoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/demo/view/menusdemo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g ui-fluid\">\n    <div class=\"ui-g-12\">\n        <div class=\"card card-w-title\">\n            <h1>Breadcrumb</h1>\n            <p-breadcrumb [model]=\"breadcrumbItems\"></p-breadcrumb>\n        </div>\n        \n        <div class=\"card card-w-title\">\n            <h1>Steps</h1>\n            <p-steps [model]=\"stepsItems\"></p-steps>\n        </div>\n                \n        <div class=\"card card-w-title\">\n            <h1>MenuBar</h1>\n            <p-menubar [model]=\"tieredItems\"></p-menubar>\n        </div>\n    </div>\n    \n    <div class=\"ui-g-12 ui-lg-6\">\n        <!-- Left Colum -->\n        <div class=\"card card-w-title\">\n            <h1>Plain Menu</h1>\n            <p-menu #menu [model]=\"items\"></p-menu>\n            \n            <p-menu #menu popup=\"popup\" [model]=\"items\" [style]=\"{'width':'250px'}\"></p-menu>\n            <button type=\"button\" pButton icon=\"ui-icon-open-in-new\" label=\"Show\" (click)=\"menu.toggle($event)\" style=\"margin-top:20px;width:auto\"></button>\n        </div>\n                \n        <div class=\"card card-w-title\">\n            <h1>TieredMenu</h1>\n            <p-tieredMenu [model]=\"tieredItems\" [style]=\"{'width':'250px','margin-bottom':'20px'}\"></p-tieredMenu>\n        </div>\n    </div>\n    <div class=\"ui-g-12 ui-lg-6\">\n        <!-- Right Colum -->\n        <div class=\"card card-w-title\">\n            <h1 style=\"margin-top:40px\">ContextMenu</h1>\n            Right click!\n            \n            <p-contextMenu [global]=\"true\" [model]=\"tieredItems\" [style]=\"{'width':'12.5em'}\"></p-contextMenu>\n        </div>\n        \n        <div class=\"card\">\n            <h1>SlideMenu</h1>\n            <p-slideMenu [model]=\"items\" [style]=\"{'width':'260px'}\" [menuWidth]=\"260\"></p-slideMenu>\n        </div>\n        \n        <div class=\"card\">\n            <h1>PanelMenu</h1>\n            <p-panelMenu [model]=\"panelMenuItems\"></p-panelMenu>\n        </div>\n    </div>\n    \n    <div class=\"ui-g-12 ui-g-6\">\n        <div class=\"card\">\n            <h1>TabMenu</h1>\n            <p-tabMenu [model]=\"tabMenuItems\"></p-tabMenu>\n        </div>\n    </div>\n    \n    <div class=\"ui-g-12 ui-g-6\">\n        <div class=\"card\">\n            <h1>MegaMenu - Horizontal</h1>\n            <p-megaMenu [model]=\"megaMenuItems\"></p-megaMenu>\n            \n            <h1>MegaMenu - Vertical</h1>\n            <p-megaMenu [model]=\"megaMenuItems\" orientation=\"vertical\" [style]=\"{'width':'200px'}\"></p-megaMenu>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/demo/view/menusdemo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenusDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__breadcrumb_service__ = __webpack_require__("../../../../../src/app/breadcrumb.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenusDemoComponent = (function () {
    function MenusDemoComponent(breadcrumbService) {
        this.breadcrumbService = breadcrumbService;
        this.breadcrumbService.setItems([
            { label: 'Components' },
            { label: 'Menus', routerLink: ['/menus'] }
        ]);
    }
    MenusDemoComponent.prototype.ngOnInit = function () {
        this.breadcrumbItems = [];
        this.breadcrumbItems.push({ label: 'Categories' });
        this.breadcrumbItems.push({ label: 'Sports' });
        this.breadcrumbItems.push({ label: 'Football' });
        this.breadcrumbItems.push({ label: 'Countries' });
        this.breadcrumbItems.push({ label: 'Spain' });
        this.breadcrumbItems.push({ label: 'F.C. Barcelona' });
        this.breadcrumbItems.push({ label: 'Squad' });
        this.breadcrumbItems.push({ label: 'Lionel Messi', url: 'https://en.wikipedia.org/wiki/Lionel_Messi' });
        this.tabMenuItems = [
            { label: 'Stats', icon: 'ui-icon-insert-chart' },
            { label: 'Calendar', icon: 'ui-icon-date-range' },
            { label: 'Documentation', icon: 'ui-icon-book' },
            { label: 'Support', icon: 'ui-icon-help-outline' },
            { label: 'Social', icon: 'ui-icon-public' }
        ];
        this.tieredItems = [
            {
                label: 'File',
                icon: 'ui-icon-folder',
                items: [{
                        label: 'New',
                        icon: 'ui-icon-plus',
                        items: [
                            { label: 'Project' },
                            { label: 'Other' },
                        ]
                    },
                    { label: 'Open' },
                    { label: 'Quit' }
                ]
            },
            {
                label: 'Edit',
                icon: 'ui-icon-edit',
                items: [
                    { label: 'Undo', icon: 'ui-icon-undo' },
                    { label: 'Redo', icon: 'ui-icon-redo' }
                ]
            },
            {
                label: 'Help',
                icon: 'ui-icon-help-outline',
                items: [
                    {
                        label: 'Contents'
                    },
                    {
                        label: 'Search',
                        icon: 'ui-icon-search',
                        items: [
                            {
                                label: 'Text',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Actions',
                icon: 'ui-icon-settings',
                items: [
                    {
                        label: 'Edit',
                        icon: 'ui-icon-refresh',
                        items: [
                            { label: 'Save', icon: 'ui-icon-save' },
                            { label: 'Update', icon: 'ui-icon-update' },
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'ui-icon-list',
                        items: [
                            { label: 'Delete', icon: 'ui-icon-delete' }
                        ]
                    }
                ]
            },
            {
                label: 'Quit', icon: 'ui-icon-power-settings-new'
            }
        ];
        this.items = [{
                label: 'File',
                items: [
                    { label: 'New', icon: 'ui-icon-plus' },
                    { label: 'Open', icon: 'ui-icon-open-in-browser' }
                ]
            },
            {
                label: 'Edit',
                items: [
                    { label: 'Undo', icon: 'ui-icon-undo' },
                    { label: 'Redo', icon: 'ui-icon-redo' }
                ]
            }];
        this.megaMenuItems = [
            {
                label: 'TV', icon: 'ui-icon-tv',
                items: [
                    [
                        {
                            label: 'TV 1',
                            items: [{ label: 'TV 1.1' }, { label: 'TV 1.2' }]
                        },
                        {
                            label: 'TV 2',
                            items: [{ label: 'TV 2.1' }, { label: 'TV 2.2' }]
                        }
                    ],
                    [
                        {
                            label: 'TV 3',
                            items: [{ label: 'TV 3.1' }, { label: 'TV 3.2' }]
                        },
                        {
                            label: 'TV 4',
                            items: [{ label: 'TV 4.1' }, { label: 'TV 4.2' }]
                        }
                    ]
                ]
            },
            {
                label: 'Sports', icon: 'ui-icon-alarm',
                items: [
                    [
                        {
                            label: 'Sports 1',
                            items: [{ label: 'Sports 1.1' }, { label: 'Sports 1.2' }]
                        },
                        {
                            label: 'Sports 2',
                            items: [{ label: 'Sports 2.1' }, { label: 'Sports 2.2' }]
                        },
                    ],
                    [
                        {
                            label: 'Sports 3',
                            items: [{ label: 'Sports 3.1' }, { label: 'Sports 3.2' }]
                        },
                        {
                            label: 'Sports 4',
                            items: [{ label: 'Sports 4.1' }, { label: 'Sports 4.2' }]
                        }
                    ],
                    [
                        {
                            label: 'Sports 5',
                            items: [{ label: 'Sports 5.1' }, { label: 'Sports 5.2' }]
                        },
                        {
                            label: 'Sports 6',
                            items: [{ label: 'Sports 6.1' }, { label: 'Sports 6.2' }]
                        }
                    ]
                ]
            },
            {
                label: 'Entertainment', icon: 'ui-icon-stars',
                items: [
                    [
                        {
                            label: 'Entertainment 1',
                            items: [{ label: 'Entertainment 1.1' }, { label: 'Entertainment 1.2' }]
                        },
                        {
                            label: 'Entertainment 2',
                            items: [{ label: 'Entertainment 2.1' }, { label: 'Entertainment 2.2' }]
                        }
                    ],
                    [
                        {
                            label: 'Entertainment 3',
                            items: [{ label: 'Entertainment 3.1' }, { label: 'Entertainment 3.2' }]
                        },
                        {
                            label: 'Entertainment 4',
                            items: [{ label: 'Entertainment 4.1' }, { label: 'Entertainment 4.2' }]
                        }
                    ]
                ]
            },
            {
                label: 'Technology', icon: 'ui-icon-phone-android',
                items: [
                    [
                        {
                            label: 'Technology 1',
                            items: [{ label: 'Technology 1.1' }, { label: 'Technology 1.2' }]
                        },
                        {
                            label: 'Technology 2',
                            items: [{ label: 'Technology 2.1' }, { label: 'Technology 2.2' }]
                        },
                    ],
                    [
                        {
                            label: 'Technology 4',
                            items: [{ label: 'Technology 3.1' }, { label: 'Technology 3.2' }]
                        }
                    ]
                ]
            }
        ];
        this.panelMenuItems = [
            {
                label: 'File',
                icon: 'ui-icon-insert-drive-file',
                items: [{
                        label: 'New',
                        icon: 'ui-icon-add',
                        items: [
                            { label: 'Project' },
                            { label: 'Other' },
                        ]
                    },
                    { label: 'Open' },
                    { label: 'Quit' }
                ]
            },
            {
                label: 'Edit',
                icon: 'ui-icon-edit',
                items: [
                    { label: 'Undo', icon: 'ui-icon-undo' },
                    { label: 'Redo', icon: 'ui-icon-redo' }
                ]
            },
            {
                label: 'Help',
                icon: 'ui-icon-help-outline',
                items: [
                    {
                        label: 'Contents'
                    },
                    {
                        label: 'Search',
                        icon: 'ui-icon-search',
                        items: [
                            {
                                label: 'Text',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Actions',
                icon: 'ui-icon-settings',
                items: [
                    {
                        label: 'Edit',
                        icon: 'ui-icon-edit',
                        items: [
                            { label: 'Save', icon: 'ui-icon-save' },
                            { label: 'Update', icon: 'ui-icon-update' },
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'ui-icon-phone-android',
                        items: [
                            { label: 'Delete', icon: 'ui-icon-delete' }
                        ]
                    }
                ]
            }
        ];
        this.stepsItems = [
            {
                label: 'Personal'
            },
            {
                label: 'Seat'
            },
            {
                label: 'Payment'
            },
            {
                label: 'Confirmation'
            }
        ];
    };
    MenusDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/demo/view/menusdemo.component.html"),
            styles: ["\n        .ui-steps-item {\n            width: 25%\n        }\n    "],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__breadcrumb_service__["a" /* BreadcrumbService */]])
    ], MenusDemoComponent);
    return MenusDemoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/demo/view/messagesdemo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n    <div class=\"ui-g-12\">\n        <div class=\"card\">\n            <h1>Messages and Growl</h1>\n            <p-messages [value]=\"msgs\"></p-messages>\n            <p-growl [value]=\"msgs\" sticky=\"sticky\"></p-growl>\n            \n            <button type=\"button\" pButton (click)=\"showInfo()\" label=\"Info\" style=\"width:100px\"></button>\n            <button type=\"button\" pButton (click)=\"showSuccess()\" label=\"Success\" style=\"width:100px\" class=\"green-btn\"></button>\n            <button type=\"button\" pButton (click)=\"showWarn()\" label=\"Warn\" class=\"deep-orange-button\" style=\"width:100px\" class=\"amber-btn\"></button>\n            <button type=\"button\" pButton (click)=\"showError()\" label=\"Error\" class=\"red-button\" style=\"width:100px\" class=\"red-btn\"></button>\n            <button type=\"button\" pButton (click)=\"showMultiple()\" label=\"Multiple\" class=\"indigo-button\" style=\"width:100px\" class=\"purple-btn\"></button>\n        </div>\n        \n        <div class=\"card\">\n            <h1>Invalid Field</h1>\n            <span class=\"md-inputfield\">\n                <input type=\"text\" pInputText class=\"ng-dirty ng-invalid\" placeholder=\"Invalid\">\n                <div class=\"ui-message ui-messages-error ui-corner-all\">\n                    This field is required\n                </div>\n            </span>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/demo/view/messagesdemo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__breadcrumb_service__ = __webpack_require__("../../../../../src/app/breadcrumb.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesDemoComponent = (function () {
    function MessagesDemoComponent(breadcrumbService) {
        this.breadcrumbService = breadcrumbService;
        this.msgs = [];
        this.breadcrumbService.setItems([
            { label: 'Components' },
            { label: 'Messages', routerLink: ['/messages'] }
        ]);
    }
    MessagesDemoComponent.prototype.showInfo = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
    };
    MessagesDemoComponent.prototype.showWarn = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes' });
    };
    MessagesDemoComponent.prototype.showError = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
    };
    MessagesDemoComponent.prototype.showSuccess = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Message sent' });
    };
    MessagesDemoComponent.prototype.showMultiple = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Message 1', detail: 'PrimeNG rocks' });
        this.msgs.push({ severity: 'info', summary: 'Message 2', detail: 'PrimeUI rocks' });
        this.msgs.push({ severity: 'info', summary: 'Message 3', detail: 'PrimeFaces rocks' });
    };
    MessagesDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/demo/view/messagesdemo.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__breadcrumb_service__["a" /* BreadcrumbService */]])
    ], MessagesDemoComponent);
    return MessagesDemoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/demo/view/miscdemo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n    <div class=\"ui-g-12 ui-lg-6\">\n        <div class=\"card\">\n            <h1>ProgressBar</h1>\n            <p-progressBar [value]=\"value\"></p-progressBar>\n        </div>\n        <div class=\"card\">\n            <h1>Terminal</h1>\n            <p-terminal welcomeMessage=\"Welcome to Ultima\" prompt=\"primeng $\"></p-terminal>\n        </div>\n    </div>\n    <div class=\"ui-g-12 ui-lg-6\">\n        <div class=\"card\">\n            <h1>Galleria</h1>\n            <p-galleria [images]=\"images\" panelWidth=\"500\" panelHeight=\"313\"></p-galleria>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/demo/view/miscdemo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MiscDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_components_terminal_terminalservice__ = __webpack_require__("../../../../primeng/components/terminal/terminalservice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_primeng_components_terminal_terminalservice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_primeng_components_terminal_terminalservice__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__breadcrumb_service__ = __webpack_require__("../../../../../src/app/breadcrumb.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MiscDemoComponent = (function () {
    function MiscDemoComponent(terminalService, breadcrumbService) {
        var _this = this;
        this.terminalService = terminalService;
        this.breadcrumbService = breadcrumbService;
        this.value = 0;
        this.subscription = this.terminalService.commandHandler.subscribe(function (command) {
            var response = (command === 'date') ? new Date().toDateString() : 'Unknown command: ' + command;
            _this.terminalService.sendResponse(response);
        });
        this.breadcrumbService.setItems([
            { label: 'Components' },
            { label: 'Misc', routerLink: ['/misc'] }
        ]);
    }
    MiscDemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.value = _this.value + Math.floor(Math.random() * 10) + 1;
            if (_this.value >= 100) {
                _this.value = 100;
                clearInterval(_this.interval);
                _this.interval = null;
            }
        }, 2000);
        this.images = [];
        this.images.push({ source: 'assets/demo/images/nature/nature1.jpg', alt: 'Description for Image 1', title: 'Title 1' });
        this.images.push({ source: 'assets/demo/images/nature/nature2.jpg', alt: 'Description for Image 2', title: 'Title 2' });
        this.images.push({ source: 'assets/demo/images/nature/nature3.jpg', alt: 'Description for Image 3', title: 'Title 3' });
        this.images.push({ source: 'assets/demo/images/nature/nature4.jpg', alt: 'Description for Image 4', title: 'Title 4' });
        this.images.push({ source: 'assets/demo/images/nature/nature5.jpg', alt: 'Description for Image 5', title: 'Title 5' });
        this.images.push({ source: 'assets/demo/images/nature/nature6.jpg', alt: 'Description for Image 6', title: 'Title 6' });
        this.images.push({ source: 'assets/demo/images/nature/nature7.jpg', alt: 'Description for Image 7', title: 'Title 7' });
        this.images.push({ source: 'assets/demo/images/nature/nature8.jpg', alt: 'Description for Image 8', title: 'Title 8' });
        this.images.push({ source: 'assets/demo/images/nature/nature9.jpg', alt: 'Description for Image 9', title: 'Title 9' });
        this.images.push({ source: 'assets/demo/images/nature/nature10.jpg', alt: 'Description for Image 10', title: 'Title 10' });
        this.images.push({ source: 'assets/demo/images/nature/nature11.jpg', alt: 'Description for Image 11', title: 'Title 11' });
        this.images.push({ source: 'assets/demo/images/nature/nature12.jpg', alt: 'Description for Image 12', title: 'Title 12' });
    };
    MiscDemoComponent.prototype.ngOnDestroy = function () {
        if (this.interval) {
            clearInterval(this.interval);
        }
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    MiscDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/demo/view/miscdemo.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1_primeng_components_terminal_terminalservice__["TerminalService"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_primeng_components_terminal_terminalservice__["TerminalService"], __WEBPACK_IMPORTED_MODULE_2__breadcrumb_service__["a" /* BreadcrumbService */]])
    ], MiscDemoComponent);
    return MiscDemoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/demo/view/overlaysdemo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g ui-fluid\">\n    <div class=\"ui-g-12 ui-lg-6\">\n        <!-- Left Side -->\n        <div class=\"card\">\n            <h1>Overlay Panel</h1>\n            <div class=\"ui-g\">\n                <div class=\"ui-g-6\">\n                    <button type=\"button\" pButton label=\"Image\" (click)=\"op1.toggle($event)\"></button>\n                    <p-overlayPanel #op1>\n                        <img src=\"assets/demo/images/nature/nature1.jpg\" alt=\"Nature 1\" />\n                    </p-overlayPanel>\n                </div>\n                <div class=\"ui-g-6\">\n                    <button type=\"button\" pButton label=\"DataTable\" (click)=\"op2.toggle($event)\"></button>\n                    <p-overlayPanel #op2 [showCloseIcon]=\"true\" [dismissable]=\"false\">\n                        <p-dataTable [value]=\"cars\" [style]=\"{'width':'500px'}\">\n                            <p-column field=\"vin\" header=\"Vin\" [sortable]=\"true\"></p-column>\n                            <p-column field=\"year\" header=\"Year\" [sortable]=\"true\"></p-column>\n                            <p-column field=\"brand\" header=\"Brand\" [sortable]=\"true\"></p-column>\n                            <p-column field=\"color\" header=\"Color\" [sortable]=\"true\"></p-column>\n                        </p-dataTable>\n                    </p-overlayPanel>\n                </div>\n            </div>\n        </div>\n        \n        <div class=\"card\">\n            <h1>Dialog</h1>\n            <p-dialog header=\"Godfather I\" [(visible)]=\"display\" modal=\"modal\" showEffect=\"fade\" width=\"400\">\n                <p>The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. \n                   His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. \n                   Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, \n                   kind and benevolent to those who give respect,\n                   but given to ruthless violence whenever anything stands against the good of the family.</p>\n                <p-footer>\n                    <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n                        <button type=\"button\" pButton icon=\"fa-close\" (click)=\"display=false\" label=\"No\"></button>\n                        <button type=\"button\" pButton icon=\"fa-check\" (click)=\"display=false\" label=\"Yes\"></button>\n                    </div>\n                </p-footer>\n            </p-dialog>\n\n            <button type=\"text\" (click)=\"display=true\" pButton icon=\"fa-external-link-square\" label=\"Show\"></button>\n        </div>\n        \n        <div class=\"card\">\n            <h1>Confirm Dialog</h1>\n            <p-confirmDialog header=\"Confirmation\" icon=\"fa ui-icon-warning\" width=\"425\"></p-confirmDialog>\n\n            <button type=\"text\" (click)=\"confirm()\" pButton icon=\"fa-check\" label=\"Confirm\"></button>\n        </div>\n        \n        <div class=\"card\">\n            <h1>Tooltip</h1>\n            <input type=\"text\" pInputText pTooltip=\"Enter your username\" placeholder=\"Right\" tooltipEvent=\"focus\">\n        </div>\n    </div>\n    \n    <div class=\"ui-g-12 ui-lg-6\">\n        <!-- Right Side -->\n        <div class=\"card\">\n            <h1>LightBox</h1>\n            <p-lightbox [images]=\"images\"></p-lightbox>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/demo/view/overlaysdemo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OverlaysDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_carservice__ = __webpack_require__("../../../../../src/app/demo/service/carservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__breadcrumb_service__ = __webpack_require__("../../../../../src/app/breadcrumb.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OverlaysDemoComponent = (function () {
    function OverlaysDemoComponent(carService, confirmationService, breadcrumbService) {
        this.carService = carService;
        this.confirmationService = confirmationService;
        this.breadcrumbService = breadcrumbService;
        this.breadcrumbService.setItems([
            { label: 'Components' },
            { label: 'Overlays', routerLink: ['/overlay'] }
        ]);
    }
    OverlaysDemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars.splice(0, 5); });
        this.images = [];
        this.images.push({ source: 'assets/demo/images/sopranos/sopranos1.jpg',
            thumbnail: 'assets/demo/images/sopranos/sopranos1_small.jpg', title: 'Nature 1' });
        this.images.push({ source: 'assets/demo/images/sopranos/sopranos2.jpg',
            thumbnail: 'assets/demo/images/sopranos/sopranos2_small.jpg', title: 'Nature 2' });
        this.images.push({ source: 'assets/demo/images/sopranos/sopranos3.jpg',
            thumbnail: 'assets/demo/images/sopranos/sopranos3_small.jpg', title: 'Nature 3' });
        this.images.push({ source: 'assets/demo/images/sopranos/sopranos4.jpg',
            thumbnail: 'assets/demo/images/sopranos/sopranos4_small.jpg', title: 'Nature 4' });
    };
    OverlaysDemoComponent.prototype.confirm = function () {
        this.confirmationService.confirm({
            message: 'Are you sure to perform this action?'
        });
    };
    OverlaysDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/demo/view/overlaysdemo.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["ConfirmationService"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */], __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["ConfirmationService"],
            __WEBPACK_IMPORTED_MODULE_3__breadcrumb_service__["a" /* BreadcrumbService */]])
    ], OverlaysDemoComponent);
    return OverlaysDemoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/demo/view/panelsdemo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n    <div class=\"ui-g-12\">\n        <div class=\"card card-w-title\">\n            <h1>AccordionPanel</h1>\n            <p-accordion>\n                <p-accordionTab header=\"Godfather I\" [selected]=\"true\">\n                    The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, but does not intend to become part of his father's business. T hrough Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\n                </p-accordionTab>\n                <p-accordionTab header=\"Godfather II\">\n                    Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.\n                </p-accordionTab>\n                <p-accordionTab header=\"Godfather III\">\n                    After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.\n                </p-accordionTab>\n            </p-accordion>\n        </div>\n    </div>\n    \n    <div class=\"ui-g-12\">\n        <div class=\"card card-w-title\">\n            <h1>Panel</h1>\n            <p-panel header=\"Godfather I\" [toggleable]=\"true\">\n                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. \n                His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. \n                Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, \n                kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\n            </p-panel>\n        </div>\n    </div>\n    \n    <div class=\"ui-g-12\">\n        <div class=\"card card-w-title\">\n            <h1>TabView</h1>\n            <p-tabView>\n                <p-tabPanel header=\"Godfather I\" leftIcon=\"ui-icon-check\">\n                    The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, but does not intend to become part of his father's business. T hrough Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\n                </p-tabPanel>\n                <p-tabPanel header=\"Godfather II\" leftIcon=\"ui-icon-edit\">\n                    Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.\n                </p-tabPanel>\n                <p-tabPanel header=\"Godfather III\" leftIcon=\"ui-icon-refresh\">\n                    After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.\n                </p-tabPanel>\n            </p-tabView>\n        </div>\n    </div>\n    \n    <div class=\"ui-g-12\">\n        <div class=\"card card-w-title\">\n            <h1>Fieldset</h1>\n            <p-fieldset legend=\"Toggleable\" toggleable=\"true\">\n                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. \n                His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. \n                Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, \n                kind and benevolent to those who give respect, \n                but given to ruthless violence whenever anything stands against the good of the family.\n            </p-fieldset>\n        </div>\n    </div>\n\n    <div class=\"ui-g-12\">\n        <div class=\"card card-w-title\">\n            <h1>Toolbar</h1>\n            <p-toolbar>\n                <div class=\"ui-toolbar-group-left\">\n                    <button pButton type=\"button\" label=\"New\" icon=\"ui-icon-plus\" class=\"green-btn\"></button>\n                    <button pButton type=\"button\" label=\"Update\" icon=\"ui-icon-update\" class=\"orange-btn\"></button>\n                        \n                    <i class=\"material-icons\" style=\"vertical-align:middle\">dehaze</i>\n                    \n                    <button pButton type=\"button\" icon=\"ui-icon-save\" class=\"green-btn\"></button>\n                    <button pButton type=\"button\" icon=\"ui-icon-delete\" class=\"orange-btn\"></button>\n                    <button pButton type=\"button\" icon=\"ui-icon-print\" class=\"pink-btn\"></button>\n                </div>\n                \n                <div class=\"ui-toolbar-group-right\">\n                    <p-splitButton label=\"Save\" icon=\"fa-check\" [model]=\"items\"></p-splitButton>\n                </div>\n           </p-toolbar>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/demo/view/panelsdemo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PanelsDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__breadcrumb_service__ = __webpack_require__("../../../../../src/app/breadcrumb.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PanelsDemoComponent = (function () {
    function PanelsDemoComponent(breadcrumbService) {
        this.breadcrumbService = breadcrumbService;
        this.breadcrumbService.setItems([
            { label: 'Components' },
            { label: 'Panels', routerLink: ['/panels'] }
        ]);
    }
    PanelsDemoComponent.prototype.ngOnInit = function () {
        this.items = [
            { label: 'Angular.io', icon: 'ui-icon-link', url: 'http://angular.io' },
            { label: 'Theming', icon: 'ui-icon-brush', routerLink: ['/theming'] }
        ];
    };
    PanelsDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/demo/view/panelsdemo.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__breadcrumb_service__["a" /* BreadcrumbService */]])
    ], PanelsDemoComponent);
    return PanelsDemoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/demo/view/sampledemo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-fluid\">\n    <div class=\"ui-g\">\n        <div class=\"ui-g-12\">\n            <div class=\"card card-w-title\">\n                <h1>Form Elements</h1>\n                <div class=\"ui-g form-group\">\n                    <div class=\"ui-g-12 ui-md-2\">\n                        <label for=\"input\">Input</label>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <span class=\"md-inputfield\">\n                            <input id=\"input\" type=\"text\" pInputText/>\n                            <label>Username</label>\n                        </span>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-2\">\n                        <label for=\"textarea\">Textarea</label>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <textarea [rows]=\"3\" [cols]=\"30\" pInputTextarea autoResize=\"autoResize\"></textarea>\n                    </div>\n                    \n                    <div class=\"ui-g-12 ui-md-2\">\n                        <label for=\"calendar\">Calendar</label>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <p-calendar id=\"calendar\"></p-calendar>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-2\">\n                        <label for=\"autocomplete\">AutoComplete</label>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <p-autoComplete [(ngModel)]=\"country\" [suggestions]=\"filteredCountries\" (completeMethod)=\"filterCountry($event)\" field=\"name\"\n                            placeholder=\"Countries\" [minLength]=\"1\"></p-autoComplete>\n                    </div>\n                    \n                    <div class=\"ui-g-12 ui-md-2\">\n                        <label for=\"dropdown\">Dropdown</label>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <p-dropdown id=\"dropdown\" [options]=\"cities1\" [(ngModel)]=\"selectedCity1\" [autoWidth]=\"false\"></p-dropdown>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-2\">\n                        <label for=\"password\">Password</label>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <input id=\"password\" pPassword type=\"password\"/>\n                    </div>\n                    \n                    <div class=\"ui-g-12 ui-md-2\">\n                        <label for=\"mask\">Mask</label>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <p-inputMask mask=\"99/99/9999\" slotChar=\"dd/mm/yyyy\" placeholder=\"Date\"></p-inputMask>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-2\">\n                        <label for=\"spinner\">Spinner</label>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <p-spinner></p-spinner>\n                    </div>\n                    \n                    <div class=\"ui-g-12 ui-md-2\">\n                        Checkbox\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <div class=\"ui-g\">\n                            <div class=\"ui-g-12\"><p-checkbox name=\"cg\" value=\"Ultima\" label=\"Ultima\" [(ngModel)]=\"checkboxValues\"></p-checkbox></div>\n                            <div class=\"ui-g-12\"><p-checkbox name=\"cg\" value=\"Icarus\" label=\"Icarus\" [(ngModel)]=\"checkboxValues\"></p-checkbox></div>\n                            <div class=\"ui-g-12\"><p-checkbox name=\"cg\" value=\"Omega\" label=\"Omega\" [(ngModel)]=\"checkboxValues\"></p-checkbox></div>\n                        </div>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-2\">\n                        RadioButton\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <div class=\"ui-g\">\n                            <div class=\"ui-g-12\"><p-radioButton name=\"rg\" value=\"Ultima\" label=\"Ultima\" [(ngModel)]=\"radioValue\"></p-radioButton></div>\n                            <div class=\"ui-g-12\"><p-radioButton name=\"rg\" value=\"Icarus\" label=\"Icarus\" [(ngModel)]=\"radioValue\"></p-radioButton></div>\n                            <div class=\"ui-g-12\"><p-radioButton name=\"rg\" value=\"Omega\" label=\"Omega\" [(ngModel)]=\"radioValue\"></p-radioButton></div>\n                        </div>\n                    </div>\n                    \n                    <div class=\"ui-g-12 ui-md-2\">\n                        <label for=\"slider\">Slider</label>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <p-slider></p-slider>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-2\">\n                        Button\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <button pButton type=\"button\" label=\"Edit\" icon=\"ui-icon-edit\"></button>\n                    </div>\n                    \n                    <div class=\"ui-g-12 ui-md-2\">\n                        SplitButton\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <p-splitButton label=\"Save\" icon=\"ui-icon-save\" [model]=\"splitButtonItems\"></p-splitButton>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-2\">\n                        <label for=\"multiselect\">MultiSelect</label>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <p-multiSelect id=\"multiselect\" [options]=\"carOptions\" [(ngModel)]=\"selectedMultiSelectCars\"></p-multiSelect>\n                    </div>\n                    \n                    <div class=\"ui-g-12 ui-md-2\">\n                        ToggleButton\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <p-toggleButton [(ngModel)]=\"toggleButtonChecked\"></p-toggleButton>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-2\">\n                        SelectButton\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <p-selectButton [options]=\"types\" [(ngModel)]=\"selectedType\"></p-selectButton>\n                    </div>\n                    \n                    <div class=\"ui-g-12 ui-md-2\">\n                        <label for=\"listbox\">Listbox</label>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <p-listbox [options]=\"cities2\" [(ngModel)]=\"selectedCity2\"></p-listbox>\n                    </div>\n                    <div class=\"ui-g-12 ui-md-2\">\n                        Dialog\n                    </div>\n                    <div class=\"ui-g-12 ui-md-4\">\n                        <button type=\"button\" label=\"Login\" icon=\"ui-icon-open-in-new\" (click)=\"dialogVisible=true\" pButton></button>\n                    </div>\n                </div>\n\n                <p-dialog header=\"Login\" [resizable]=\"false\" responsive=\"true\" [(visible)]=\"dialogVisible\">\n                    <div class=\"ui-g form-group\" style=\"margin-bottom: 16px;\">\n                        <div class=\"ui-g-12\">\n                            <span class=\"md-inputfield\">\n                                <input type=\"text\" pInputText>\n                                <label>Name</label>\n                            </span>\n                        </div>\n                        <div class=\"ui-g-12\">\n                            <span class=\"md-inputfield\">\n                                <input type=\"password\" pInputText>\n                                <label>Password</label>\n                            </span>\n                        </div>\n                    </div>\n                    \n                    <p-footer>\n                        <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n                            <button type=\"button\" label=\"Login\" icon=\"ui-icon-person\" (click)=\"dialogVisible=false\" pButton></button>\n                        </div>\n                    </p-footer>\n                </p-dialog>\n            </div>\n            \n            <div class=\"card card-w-title\">\n                <h1>DataTable</h1>\n                <p-dataTable [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar3\">\n                    <p-header>DataTable</p-header>\n                    <p-column field=\"vin\" header=\"Vin\" sortable=\"true\"></p-column>\n                    <p-column field=\"year\" header=\"Year\" sortable=\"true\"></p-column>\n                    <p-column field=\"brand\" header=\"Brand\" sortable=\"true\"></p-column>\n                    <p-column field=\"color\" header=\"Color\" sortable=\"true\"></p-column>\n                </p-dataTable>\n            </div>\n        </div>\n        \n        <div class=\"ui-g-12 ui-lg-6\">\n            <!-- Left Side -->\n            <div class=\"card card-w-title\">\n                <h1>DataGrid</h1>\n                <p-dataGrid [value]=\"carsLarge\" [paginator]=\"true\" [rows]=\"20\">\n                    <p-header>\n                        List of Cars\n                    </p-header>\n                    <ng-template let-car pTemplate=\"item\">\n                        <div style=\"padding:3px\" class=\"ui-g-12 ui-md-3\">\n                            <p-panel [header]=\"car.vin\" [style]=\"{'text-align':'center'}\">\n                                <img src=\"assets/demo/images/car/{{car.brand}}.gif\">\n                                <div class=\"car-detail\">{{car.year}} - {{car.color}}</div>\n                            </p-panel>\n                        </div>\n                    </ng-template>\n                </p-dataGrid>\n            </div>\n            \n            <div class=\"card card-w-title\">\n                <h1>Tree</h1>\n                <p-tree [value]=\"filesTree\"></p-tree>\n            </div>\n            \n            <div class=\"card card-w-title\">\n                <h1>Menu</h1>\n                <p-menu [model]=\"menuItems\"></p-menu>\n            </div>\n            \n            <div class=\"card card-w-title\">\n                <h1>PanelMenu</h1>\n                <p-panelMenu [model]=\"panelMenuItems\"></p-panelMenu>\n            </div>\n            \n            <div class=\"card card-w-title\">\n                <h1>Heading 1</h1>\n                \n                <h2>Heading 2</h2>\n                \n                <h3>Heading 3</h3>\n                \n                <h4>Heading 4</h4>\n            </div>\n        </div>\n        <div class=\"ui-g-12 ui-lg-6\">\n            <!-- Right Side -->\n            <div class=\"card card-w-title\">\n                <h1>PickList</h1>\n                <p-pickList [source]=\"sourceCars\" [target]=\"targetCars\" sourceHeader=\"Available\" targetHeader=\"Selected\" [responsive]=\"true\">\n                    <ng-template let-car pTemplate=\"item\">\n                        <span>{{car.brand}}</span>\n                    </ng-template>\n                </p-pickList>\n            </div>\n            \n            <div class=\"card card-w-title\">\n                <h1>OrderList</h1>\n                <p-orderList [value]=\"orderListCars\" [listStyle]=\"{'height':'250px'}\" [responsive]=\"true\" header=\"OrderList\">\n                    <ng-template let-car pTemplate=\"item\">\n                        <div class=\"ui-helper-clearfix\">\n                            <img src=\"assets/demo/images/car/{{car.brand}}.gif\" style=\"display:inline-block;margin:2px 0 2px 2px\" />\n                            <div style=\"font-size:14px;float:right;margin:15px 5px 0 0\">{{car.brand}} - {{car.year}} - {{car.color}}</div>\n                        </div>\n                    </ng-template>\n                </p-orderList>\n            </div>\n            \n            <div class=\"card card-w-title\">\n                <h1>Accordion Panel</h1>\n                <p-accordion>\n                    <p-accordionTab header=\"Godfather I\" [selected]=\"true\">\n                        The story begins as Don Vito Corleone, the head of a New York Mafia family, overseeshis daughter's wedding. His beloved son ichael has just come home from the war, but does not intend to become part of his father's business. T hrough Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\n                    </p-accordionTab>\n                    <p-accordionTab header=\"Godfather II\">\n                        Francis Ford Coppola's legendary continuation and sequel to his landmark 1972 film, The_Godfather parallels the young Vito Corleone's rise with his son Michael's spiritual fall, deepening The_Godfather's depiction of the dark side of the American dream. In the early 1900s, the child Vito flees his Sicilian village for America after the local Mafia kills his family. Vito struggles to make a living, legally or illegally, for his wife and growing brood in Little Italy, killing the local Black Hand Fanucci after he demands his customary cut of the tyro's business. With Fanucci gone, Vito's communal stature grows.\n                    </p-accordionTab>\n                    <p-accordionTab header=\"Godfather III\">\n                        After a break of more than  15 years, director Francis Ford Coppola and writer Mario Puzo returned to the well for this third and final story of the fictional Corleone crime family. Two decades have passed, and crime kingpin Michael Corleone, now divorced from his wife Kay has nearly succeeded in keeping his promise that his family would one day be completely legitimate.\n                    </p-accordionTab>\n                </p-accordion>\n            </div>\n            \n            <div class=\"card card-w-title\">\n                <h1>Panel</h1>\n                <p-panel header=\"Godfather I\" [toggleable]=\"true\">\n                    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. \n                    His beloved son Michael has just come home from the war, but does not intend to become part of his father's business. \n                    Through Michael's life the nature of the family business becomes clear. The business of the family is just like the head of the family, \n                    kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the family.\n                </p-panel>\n            </div>\n            \n            <div class=\"card card-w-title\">\n                <h1>ProgressBar - Static Display</h1>\n                <p-progressBar [value]=\"50\"></p-progressBar>\n            </div>\n        </div>\n        \n        <div class=\"ui-g-12\">\n            <div class=\"card card-w-title\">\n                <h1>Carousel</h1>\n                <p-carousel headerText=\"Cars\" [value]=\"carouselCars\">\n                    <ng-template let-car pTemplate=\"item\">\n                        <div class=\"ui-g\" style=\"text-align:center\">\n                            <div class=\"ui-g-12\" style=\"text-align:Center\">\n                                <img src=\"assets/demo/images/car/{{car.brand}}.gif\" />\n                            </div>\n                            <div class=\"ui-g-6\">Vin: </div>\n                            <div class=\"ui-g-6\" style=\"font-weight:bold\">{{car.vin}}</div>\n                            \n                            <div class=\"ui-g-6\">Year: </div>\n                            <div class=\"ui-g-6\" style=\"font-weight:bold\">{{car.year}}</div>\n                            \n                            <div class=\"ui-g-6\">Brand: </div>\n                            <div class=\"ui-g-6\" style=\"font-weight:bold\">{{car.brand}}</div>\n                            \n                            <div class=\"ui-g-6\">Color: </div>\n                            <div class=\"ui-g-6\" style=\"font-weight:bold\">{{car.color}}</div>\n                        </div>\n                    </ng-template>\n                </p-carousel>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/demo/view/sampledemo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_carservice__ = __webpack_require__("../../../../../src/app/demo/service/carservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_countryservice__ = __webpack_require__("../../../../../src/app/demo/service/countryservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_nodeservice__ = __webpack_require__("../../../../../src/app/demo/service/nodeservice.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__breadcrumb_service__ = __webpack_require__("../../../../../src/app/breadcrumb.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SampleDemoComponent = (function () {
    function SampleDemoComponent(carService, countryService, nodeService, breadcrumbService) {
        this.carService = carService;
        this.countryService = countryService;
        this.nodeService = nodeService;
        this.breadcrumbService = breadcrumbService;
        this.checkboxValues = [];
        this.selectedMultiSelectCars = [];
        this.breadcrumbService.setItems([
            { label: 'Components' },
            { label: 'Sample', routerLink: ['/sample'] }
        ]);
    }
    SampleDemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        this.carService.getCarsLarge().then(function (cars) { return _this.carsLarge = cars; });
        this.nodeService.getFiles().then(function (files) { return _this.filesTree = files; });
        this.carService.getCarsSmall().then(function (cars) { return _this.sourceCars = cars; });
        this.targetCars = [];
        this.carService.getCarsSmall().then(function (cars) { return _this.orderListCars = cars; });
        this.cities1 = [];
        this.cities1.push({ label: 'Select City', value: null });
        this.cities1.push({ label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } });
        this.cities1.push({ label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } });
        this.cities1.push({ label: 'London', value: { id: 3, name: 'London', code: 'LDN' } });
        this.cities1.push({ label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } });
        this.cities1.push({ label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } });
        this.cities2 = this.cities1.slice(1, 6);
        this.splitButtonItems = [
            { label: 'Update', icon: 'ui-icon-update' },
            { label: 'Delete', icon: 'ui-icon-close' },
            { label: 'Home', icon: 'ui-icon-home', url: 'http://www.primefaces.org/primeng' }
        ];
        this.carOptions = [];
        this.carOptions.push({ label: 'Audi', value: 'Audi' });
        this.carOptions.push({ label: 'BMW', value: 'BMW' });
        this.carOptions.push({ label: 'Fiat', value: 'Fiat' });
        this.carOptions.push({ label: 'Ford', value: 'Ford' });
        this.carOptions.push({ label: 'Honda', value: 'Honda' });
        this.carOptions.push({ label: 'Jaguar', value: 'Jaguar' });
        this.carOptions.push({ label: 'Mercedes', value: 'Mercedes' });
        this.carOptions.push({ label: 'Renault', value: 'Renault' });
        this.carOptions.push({ label: 'VW', value: 'VW' });
        this.carOptions.push({ label: 'Volvo', value: 'Volvo' });
        this.types = [];
        this.types.push({ label: 'Apartment', value: 'Apartment' });
        this.types.push({ label: 'House', value: 'House' });
        this.types.push({ label: 'Studio', value: 'Studio' });
        this.menuItems = [{
                label: 'File',
                items: [
                    { label: 'New', icon: 'ui-icon-plus' },
                    { label: 'Open', icon: 'ui-icon-open-in-browser' }
                ]
            },
            {
                label: 'Edit',
                items: [
                    { label: 'Undo', icon: 'ui-icon-undo' },
                    { label: 'Redo', icon: 'ui-icon-redo' }
                ]
            }];
        this.panelMenuItems = [
            {
                label: 'File',
                icon: 'ui-icon-insert-drive-file',
                items: [{
                        label: 'New',
                        icon: 'ui-icon-add',
                        items: [
                            { label: 'Project' },
                            { label: 'Other' },
                        ]
                    },
                    { label: 'Open' },
                    { label: 'Quit' }
                ]
            },
            {
                label: 'Edit',
                icon: 'ui-icon-edit',
                items: [
                    { label: 'Undo', icon: 'ui-icon-undo' },
                    { label: 'Redo', icon: 'ui-icon-redo' }
                ]
            },
            {
                label: 'Help',
                icon: 'ui-icon-help-outline',
                items: [
                    {
                        label: 'Contents'
                    },
                    {
                        label: 'Search',
                        icon: 'ui-icon-search',
                        items: [
                            {
                                label: 'Text',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Actions',
                icon: 'ui-icon-settings',
                items: [
                    {
                        label: 'Edit',
                        icon: 'ui-icon-edit',
                        items: [
                            { label: 'Save', icon: 'ui-icon-save' },
                            { label: 'Update', icon: 'ui-icon-update' },
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'ui-icon-list',
                        items: [
                            { label: 'Delete', icon: 'ui-icon-delete' }
                        ]
                    }
                ]
            }
        ];
        this.carouselCars = [
            { vin: 'r3278r2', year: 2010, brand: 'Audi', color: 'Black' },
            { vin: 'jhto2g2', year: 2015, brand: 'BMW', color: 'White' },
            { vin: 'h453w54', year: 2012, brand: 'Honda', color: 'Blue' },
            { vin: 'g43gwwg', year: 1998, brand: 'Renault', color: 'White' },
            { vin: 'gf45wg5', year: 2011, brand: 'VW', color: 'Red' },
            { vin: 'bhv5y5w', year: 2015, brand: 'Jaguar', color: 'Blue' },
            { vin: 'ybw5fsd', year: 2012, brand: 'Ford', color: 'Yellow' },
            { vin: '45665e5', year: 2011, brand: 'Mercedes', color: 'Brown' },
            { vin: 'he6sb5v', year: 2015, brand: 'Ford', color: 'Black' }
        ];
    };
    SampleDemoComponent.prototype.filterCountry = function (event) {
        var _this = this;
        var query = event.query;
        this.countryService.getCountries().then(function (countries) {
            _this.filteredCountries = _this.searchCountry(query, countries);
        });
    };
    SampleDemoComponent.prototype.searchCountry = function (query, countries) {
        // in a real application, make a request to a remote url with the query and
        // return filtered results, for demo we filter at client side
        var filtered = [];
        for (var i = 0; i < countries.length; i++) {
            var country = countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
                filtered.push(country);
            }
        }
        return filtered;
    };
    SampleDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/demo/view/sampledemo.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */], __WEBPACK_IMPORTED_MODULE_2__service_countryservice__["a" /* CountryService */], __WEBPACK_IMPORTED_MODULE_3__service_nodeservice__["a" /* NodeService */],
            __WEBPACK_IMPORTED_MODULE_4__breadcrumb_service__["a" /* BreadcrumbService */]])
    ], SampleDemoComponent);
    return SampleDemoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/demo/view/utilsdemo.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\n    <div class=\"ui-g-12\">\n        <div class=\"card\">\n            <h1>Card</h1>\n            <p>Card is a section to group content and layout provides a built-in css for it. Apply .card style class to your container to use it. If the\n            card has a title defined with h1 tag, add card-w-title to adjust paddings.</p>\n<pre>\n&lt;div class=\"card\"&gt;\n    Content here\n&lt;/div&gt;\n\n&lt;div class=\"card card-w-title\"&gt;\n    &lt;h1&gt;Card with Title&lt;h1&gt;\n    Content here\n&lt;/div&gt;\n</pre>  \n            \n            <div class=\"card\">\n                Content\n            </div>\n            \n            <div class=\"card card-w-title\">\n                <h1>Card with Title</h1>\n                Content\n            </div>\n            \n            <h1>Input Animations</h1>\n            <p>Label of an input can be animated on focus by wrapping both the input and label in an element with md-inputfield style class.</p>\n            <br />\n            \n            <span class=\"md-inputfield\">\n                <input type=\"text\" pInputText>\n                <label>Name</label>\n            </span>\n\n<pre>\n&lt;span class=\"md-inputfield\"&gt;\n    &lt;input type=\"text\" pInputText&gt;\n    &lt;label>Name&lt;/label&gt;\n&lt;/span>\n</pre>      \n\n            <p>Input fields can be filled as well by adding \"md-inputfield-fill\"</p>\n        \n<pre>\n&lt;span class=\"md-inputfield md-inputfield-fill\"&gt;\n    &lt;input type=\"text\" pInputText&gt;\n    &lt;label>Name&lt;/label&gt;\n&lt;/span>\n</pre>        \n\n            <p>Textbox is an extension to md-inputfield to fill the label and inputfield together.</p>   \n<pre>\n&lt;span class=\"md-inputfield md-inputfield-box\"&gt;\n    &lt;input type=\"text\" pInputText&gt;\n    &lt;label>Name&lt;/label&gt;\n&lt;/span>\n</pre> \n            \n            <h1>Shadows</h1>\n            <p>5 levels of shadows are provided varying from ui-shadow-1 to ui-shadow-5 to define the level of depth.</p>\n            \n            <div class=\"ui-g\">\n                <div class=\"ui-g-12 ui-md-2\">\n                    <div class=\"shadow-box\"></div>\n                </div>\n                <div class=\"ui-g-12 ui-md-2\">\n                    <div class=\"shadow-box ui-shadow-1\"></div>\n                </div>\n                <div class=\"ui-g-12 ui-md-2\">\n                    <div class=\"shadow-box ui-shadow-2\"></div>\n                </div>\n                <div class=\"ui-g-12 ui-md-2\">\n                    <div class=\"shadow-box ui-shadow-3\"></div>\n                </div>\n                <div class=\"ui-g-12 ui-md-2\">\n                    <div class=\"shadow-box ui-shadow-4\"></div>\n                </div>\n                <div class=\"ui-g-12 ui-md-2\">\n                    <div class=\"shadow-box ui-shadow-5\"></div>\n                </div>\n            </div>\n<pre>\n&lt;div class=\"ui-g\"&gt;\n    &lt;div class=\"ui-g-12 ui-md-2\"&gt;\n        &lt;div class=\"shadow-box\"&gt;&lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=\"ui-g-12 ui-md-2\"&gt;\n        &lt;div class=\"shadow-box ui-shadow-1\"&gt;&lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=\"ui-g-12 ui-md-2\"&gt;\n        &lt;div class=\"shadow-box ui-shadow-2\"&gt;&lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=\"ui-g-12 ui-md-2\"&gt;\n        &lt;div class=\"shadow-box ui-shadow-3\"&gt;&lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=\"ui-g-12 ui-md-2\"&gt;\n        &lt;div class=\"shadow-box ui-shadow-4\"&gt;&lt;/div&gt;\n    &lt;/div&gt;\n    &lt;div class=\"ui-g-12 ui-md-2\"&gt;\n        &lt;div class=\"shadow-box ui-shadow-5\"&gt;&lt;/div&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n</pre>  \n            \n            <h1>Icons</h1>\n            <p><a href=\"https://design.google.com/icons/\">All material icons</a> have been ported \n                using <i>ui-icon-</i> convention. To use an icon within a component\n                such as button below, define it using the icon attribute prefixed by <i>ui-icon-</i>.</p>\n                \n                <div style=\"text-align:center;margin-bottom:16px;\">\n                    <button type=\"button\" pButton label=\"ui-icon-check\" icon=\"ui-icon-check\"></button>\n                </div>\n                \n<pre>\n&lt;button type=\"button\" pButton label=\"ui-icon-check\" icon=\"ui-icon-check\"&gt;&lt;/button&gt;\n</pre>  \n                \n                <div class=\"ui-g icon-grid\">\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-3d-rotation\"></i>3d-rotation</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-ac-unit\"></i>ac-unit</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-access-alarm\"></i>access-alarm</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-access-alarms\"></i>access-alarms</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-access-time\"></i>access-time</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-accessibility\"></i>accessibility</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-accessible\"></i>accessible</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-account-balance\"></i>account-balance</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-account-balance-wallet\"></i>account-balance-wallet</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-account-box\"></i>account-box</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-account-circle\"></i>account-circle</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-add\"></i>add</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-add-a-photo\"></i>add-a-photo</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-add-alarm\"></i>add-alarm</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-add-alert\"></i>add-alert</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-add-box\"></i>add-box</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-add-circle\"></i>add-circle</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-add-circle-outline\"></i>add-circle-outline</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-add-location\"></i>add-location</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-add-shopping-cart\"></i>add-shopping-cart</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-add-to-photos\"></i>add-to-photos</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-add-to-queue\"></i>add-to-queue</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-adjust\"></i>adjust</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-airline-seat-flat\"></i>airline-seat-flat</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-airline-seat-flat-angled\"></i>airline-seat-flat-angled</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-airline-seat-individual-suite\"></i>airline-seat-individual-suite</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-airline-seat-legroom-extra\"></i>airline-seat-legroom-extra</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-airline-seat-legroom-normal\"></i>airline-seat-legroom-normal</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-airline-seat-legroom-reduced\"></i>airline-seat-legroom-reduced</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-airline-seat-recline-extra\"></i>airline-seat-recline-extra</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-airline-seat-recline-normal\"></i>airline-seat-recline-normal</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-airplanemode-active\"></i>airplanemode-active</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-airplanemode-inactive\"></i>airplanemode-inactive</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-airplay\"></i>airplay</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-airport-shuttle\"></i>airport-shuttle</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-alarm\"></i>alarm</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-alarm-add\"></i>alarm-add</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-alarm-off\"></i>alarm-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-alarm-on\"></i>alarm-on</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-album\"></i>album</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-all-inclusive\"></i>all-inclusive</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-all-out\"></i>all-out</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-android\"></i>android</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-announcement\"></i>announcement</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-apps\"></i>apps</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-archive\"></i>archive</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-arrow-back\"></i>arrow-back</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-arrow-downward\"></i>arrow-downward</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-arrow-drop-down\"></i>arrow-drop-down</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-arrow-drop-down-circle\"></i>arrow-drop-down-circle</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-arrow-drop-up\"></i>arrow-drop-up</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-arrow-forward\"></i>arrow-forward</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-arrow-upward\"></i>arrow-upward</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-art-track\"></i>art-track</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-aspect-ratio\"></i>aspect-ratio</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-assessment\"></i>assessment</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-assignment\"></i>assignment</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-assignment-ind\"></i>assignment-ind</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-assignment-late\"></i>assignment-late</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-assignment-return\"></i>assignment-return</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-assignment-returned\"></i>assignment-returned</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-assignment-turned-in\"></i>assignment-turned-in</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-assistant\"></i>assistant</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-assistant-photo\"></i>assistant-photo</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-attach-file\"></i>attach-file</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-attach-money\"></i>attach-money</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-attachment\"></i>attachment</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-audiotrack\"></i>audiotrack</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-autorenew\"></i>autorenew</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-av-timer\"></i>av-timer</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-backspace\"></i>backspace</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-backup\"></i>backup</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-battery-alert\"></i>battery-alert</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-battery-charging-full\"></i>battery-charging-full</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-battery-full\"></i>battery-full</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-battery-std\"></i>battery-std</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-battery-unknown\"></i>battery-unknown</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-beach-access\"></i>beach-access</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-beenhere\"></i>beenhere</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-block\"></i>block</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-bluetooth\"></i>bluetooth</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-bluetooth-audio\"></i>bluetooth-audio</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-bluetooth-connected\"></i>bluetooth-connected</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-bluetooth-disabled\"></i>bluetooth-disabled</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-bluetooth-searching\"></i>bluetooth-searching</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-blur-circular\"></i>blur-circular</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-blur-linear\"></i>blur-linear</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-blur-off\"></i>blur-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-blur-on\"></i>blur-on</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-book\"></i>book</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-bookmark\"></i>bookmark</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-bookmark-border\"></i>bookmark-border</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-border-all\"></i>border-all</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-border-bottom\"></i>border-bottom</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-border-clear\"></i>border-clear</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-border-color\"></i>border-color</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-border-horizontal\"></i>border-horizontal</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-border-inner\"></i>border-inner</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-border-left\"></i>border-left</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-border-outer\"></i>border-outer</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-border-right\"></i>border-right</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-border-style\"></i>border-style</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-border-top\"></i>border-top</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-border-vertical\"></i>border-vertical</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-branding-watermark\"></i>branding-watermark</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-brightness-1\"></i>brightness-1</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-brightness-2\"></i>brightness-2</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-brightness-3\"></i>brightness-3</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-brightness-4\"></i>brightness-4</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-brightness-5\"></i>brightness-5</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-brightness-6\"></i>brightness-6</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-brightness-7\"></i>brightness-7</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-brightness-auto\"></i>brightness-auto</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-brightness-high\"></i>brightness-high</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-brightness-low\"></i>brightness-low</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-brightness-medium\"></i>brightness-medium</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-broken-image\"></i>broken-image</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-brush\"></i>brush</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-bubble-chart\"></i>bubble-chart</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-bug-report\"></i>bug-report</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-build\"></i>build</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-burst-mode\"></i>burst-mode</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-business\"></i>business</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-business-center\"></i>business-center</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-cached\"></i>cached</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-cake\"></i>cake</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-call\"></i>call</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-call-end\"></i>call-end</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-call-made\"></i>call-made</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-call-merge\"></i>call-merge</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-call-missed\"></i>call-missed</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-call-missed-outgoing\"></i>call-missed-outgoing</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-call-received\"></i>call-received</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-call-split\"></i>call-split</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-call-to-action\"></i>call-to-action</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-camera\"></i>camera</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-camera-alt\"></i>camera-alt</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-camera-enhance\"></i>camera-enhance</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-camera-front\"></i>camera-front</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-camera-rear\"></i>camera-rear</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-camera-roll\"></i>camera-roll</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-cancel\"></i>cancel</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-card-giftcard\"></i>card-giftcard</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-card-membership\"></i>card-membership</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-card-travel\"></i>card-travel</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-casino\"></i>casino</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-cast\"></i>cast</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-cast-connected\"></i>cast-connected</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-center-focus-strong\"></i>center-focus-strong</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-center-focus-weak\"></i>center-focus-weak</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-change-history\"></i>change-history</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-chat\"></i>chat</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-chat-bubble\"></i>chat-bubble</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-chat-bubble-outline\"></i>chat-bubble-outline</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-check\"></i>check</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-check-box\"></i>check-box</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-check-box-outline-blank\"></i>check-box-outline-blank</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-check-circle\"></i>check-circle</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-chevron-left\"></i>chevron-left</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-chevron-right\"></i>chevron-right</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-child-care\"></i>child-care</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-child-friendly\"></i>child-friendly</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-chrome-reader-mode\"></i>chrome-reader-mode</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-class\"></i>class</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-clear\"></i>clear</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-clear-all\"></i>clear-all</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-close\"></i>close</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-closed-caption\"></i>closed-caption</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-cloud\"></i>cloud</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-cloud-circle\"></i>cloud-circle</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-cloud-done\"></i>cloud-done</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-cloud-download\"></i>cloud-download</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-cloud-off\"></i>cloud-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-cloud-queue\"></i>cloud-queue</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-cloud-upload\"></i>cloud-upload</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-code\"></i>code</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-collections\"></i>collections</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-collections-bookmark\"></i>collections-bookmark</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-color-lens\"></i>color-lens</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-colorize\"></i>colorize</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-comment\"></i>comment</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-compare\"></i>compare</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-compare-arrows\"></i>compare-arrows</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-computer\"></i>computer</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-confirmation-number\"></i>confirmation-number</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-contact-mail\"></i>contact-mail</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-contact-phone\"></i>contact-phone</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-contacts\"></i>contacts</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-content-copy\"></i>content-copy</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-content-cut\"></i>content-cut</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-content-paste\"></i>content-paste</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-control-point\"></i>control-point</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-control-point-duplicate\"></i>control-point-duplicate</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-copyright\"></i>copyright</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-create\"></i>create</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-create-new-folder\"></i>create-new-folder</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-credit-card\"></i>credit-card</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-crop\"></i>crop</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-crop-16-9\"></i>crop-16-9</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-crop-3-2\"></i>crop-3-2</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-crop-5-4\"></i>crop-5-4</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-crop-7-5\"></i>crop-7-5</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-crop-din\"></i>crop-din</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-crop-free\"></i>crop-free</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-crop-landscape\"></i>crop-landscape</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-crop-original\"></i>crop-original</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-crop-portrait\"></i>crop-portrait</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-crop-rotate\"></i>crop-rotate</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-crop-square\"></i>crop-square</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-dashboard\"></i>dashboard</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-data-usage\"></i>data-usage</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-date-range\"></i>date-range</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-dehaze\"></i>dehaze</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-delete\"></i>delete</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-delete-forever\"></i>delete-forever</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-delete-sweep\"></i>delete-sweep</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-description\"></i>description</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-desktop-mac\"></i>desktop-mac</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-desktop-windows\"></i>desktop-windows</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-details\"></i>details</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-developer-board\"></i>developer-board</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-developer-mode\"></i>developer-mode</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-device-hub\"></i>device-hub</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-devices\"></i>devices</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-devices-other\"></i>devices-other</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-dialer-sip\"></i>dialer-sip</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-dialpad\"></i>dialpad</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-directions\"></i>directions</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-directions-bike\"></i>directions-bike</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-directions-boat\"></i>directions-boat</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-directions-bus\"></i>directions-bus</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-directions-car\"></i>directions-car</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-directions-railway\"></i>directions-railway</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-directions-run\"></i>directions-run</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-directions-subway\"></i>directions-subway</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-directions-transit\"></i>directions-transit</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-directions-walk\"></i>directions-walk</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-disc-full\"></i>disc-full</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-dns\"></i>dns</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-do-not-disturb\"></i>do-not-disturb</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-do-not-disturb-alt\"></i>do-not-disturb-alt</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-do-not-disturb-off\"></i>do-not-disturb-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-do-not-disturb-on\"></i>do-not-disturb-on</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-dock\"></i>dock</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-domain\"></i>domain</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-done\"></i>done</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-done-all\"></i>done-all</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-donut-large\"></i>donut-large</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-donut-small\"></i>donut-small</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-drafts\"></i>drafts</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-drag-handle\"></i>drag-handle</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-drive-eta\"></i>drive-eta</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-dvr\"></i>dvr</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-edit\"></i>edit</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-edit-location\"></i>edit-location</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-eject\"></i>eject</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-email\"></i>email</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-enhanced-encryption\"></i>enhanced-encryption</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-equalizer\"></i>equalizer</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-error\"></i>error</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-error-outline\"></i>error-outline</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-euro-symbol\"></i>euro-symbol</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-ev-station\"></i>ev-station</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-event\"></i>event</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-event-available\"></i>event-available</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-event-busy\"></i>event-busy</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-event-note\"></i>event-note</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-event-seat\"></i>event-seat</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-exit-to-app\"></i>exit-to-app</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-expand-less\"></i>expand-less</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-expand-more\"></i>expand-more</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-explicit\"></i>explicit</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-explore\"></i>explore</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-exposure\"></i>exposure</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-exposure-neg-1\"></i>exposure-neg-1</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-exposure-neg-2\"></i>exposure-neg-2</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-exposure-plus-1\"></i>exposure-plus-1</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-exposure-plus-2\"></i>exposure-plus-2</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-exposure-zero\"></i>exposure-zero</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-extension\"></i>extension</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-face\"></i>face</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-fast-forward\"></i>fast-forward</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-fast-rewind\"></i>fast-rewind</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-favorite\"></i>favorite</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-favorite-border\"></i>favorite-border</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-featured-play-list\"></i>featured-play-list</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-featured-video\"></i>featured-video</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-feedback\"></i>feedback</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-fiber-dvr\"></i>fiber-dvr</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-fiber-manual-record\"></i>fiber-manual-record</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-fiber-new\"></i>fiber-new</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-fiber-pin\"></i>fiber-pin</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-fiber-smart-record\"></i>fiber-smart-record</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-file-download\"></i>file-download</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-file-upload\"></i>file-upload</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter\"></i>filter</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-1\"></i>filter-1</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-2\"></i>filter-2</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-3\"></i>filter-3</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-4\"></i>filter-4</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-5\"></i>filter-5</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-6\"></i>filter-6</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-7\"></i>filter-7</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-8\"></i>filter-8</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-9\"></i>filter-9</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-9-plus\"></i>filter-9-plus</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-b-and-w\"></i>filter-b-and-w</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-center-focus\"></i>filter-center-focus</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-drama\"></i>filter-drama</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-frames\"></i>filter-frames</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-hdr\"></i>filter-hdr</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-list\"></i>filter-list</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-none\"></i>filter-none</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-tilt-shift\"></i>filter-tilt-shift</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-filter-vintage\"></i>filter-vintage</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-find-in-page\"></i>find-in-page</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-find-replace\"></i>find-replace</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-fingerprint\"></i>fingerprint</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-first-page\"></i>first-page</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-fitness-center\"></i>fitness-center</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-flag\"></i>flag</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-flare\"></i>flare</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-flash-auto\"></i>flash-auto</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-flash-off\"></i>flash-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-flash-on\"></i>flash-on</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-flight\"></i>flight</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-flight-land\"></i>flight-land</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-flight-takeoff\"></i>flight-takeoff</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-flip\"></i>flip</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-flip-to-back\"></i>flip-to-back</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-flip-to-front\"></i>flip-to-front</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-folder\"></i>folder</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-folder-open\"></i>folder-open</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-folder-shared\"></i>folder-shared</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-folder-special\"></i>folder-special</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-font-download\"></i>font-download</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-align-center\"></i>format-align-center</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-align-justify\"></i>format-align-justify</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-align-left\"></i>format-align-left</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-align-right\"></i>format-align-right</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-bold\"></i>format-bold</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-clear\"></i>format-clear</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-color-fill\"></i>format-color-fill</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-color-reset\"></i>format-color-reset</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-color-text\"></i>format-color-text</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-indent-decrease\"></i>format-indent-decrease</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-indent-increase\"></i>format-indent-increase</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-italic\"></i>format-italic</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-line-spacing\"></i>format-line-spacing</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-list-bulleted\"></i>format-list-bulleted</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-list-numbered\"></i>format-list-numbered</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-paint\"></i>format-paint</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-quote\"></i>format-quote</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-shapes\"></i>format-shapes</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-size\"></i>format-size</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-strikethrough\"></i>format-strikethrough</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-textdirection-l-to-r\"></i>format-textdirection-l-to-r</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-textdirection-r-to-l\"></i>format-textdirection-r-to-l</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-format-underlined\"></i>format-underlined</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-forum\"></i>forum</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-forward\"></i>forward</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-forward-10\"></i>forward-10</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-forward-30\"></i>forward-30</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-forward-5\"></i>forward-5</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-free-breakfast\"></i>free-breakfast</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-fullscreen\"></i>fullscreen</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-fullscreen-exit\"></i>fullscreen-exit</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-functions\"></i>functions</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-g-translate\"></i>g-translate</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-gamepad\"></i>gamepad</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-games\"></i>games</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-gavel\"></i>gavel</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-gesture\"></i>gesture</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-get-app\"></i>get-app</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-gif\"></i>gif</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-golf-course\"></i>golf-course</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-gps-fixed\"></i>gps-fixed</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-gps-not-fixed\"></i>gps-not-fixed</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-gps-off\"></i>gps-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-grade\"></i>grade</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-gradient\"></i>gradient</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-grain\"></i>grain</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-graphic-eq\"></i>graphic-eq</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-grid-off\"></i>grid-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-grid-on\"></i>grid-on</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-group\"></i>group</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-group-add\"></i>group-add</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-group-work\"></i>group-work</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-hd\"></i>hd</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-hdr-off\"></i>hdr-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-hdr-on\"></i>hdr-on</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-hdr-strong\"></i>hdr-strong</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-hdr-weak\"></i>hdr-weak</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-headset\"></i>headset</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-headset-mic\"></i>headset-mic</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-healing\"></i>healing</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-hearing\"></i>hearing</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-help\"></i>help</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-help-outline\"></i>help-outline</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-high-quality\"></i>high-quality</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-highlight\"></i>highlight</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-highlight-off\"></i>highlight-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-history\"></i>history</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-home\"></i>home</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-hot-tub\"></i>hot-tub</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-hotel\"></i>hotel</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-hourglass-empty\"></i>hourglass-empty</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-hourglass-full\"></i>hourglass-full</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-http\"></i>http</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-https\"></i>https</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-image\"></i>image</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-image-aspect-ratio\"></i>image-aspect-ratio</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-import-contacts\"></i>import-contacts</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-import-export\"></i>import-export</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-important-devices\"></i>important-devices</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-inbox\"></i>inbox</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-indeterminate-check-box\"></i>indeterminate-check-box</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-info\"></i>info</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-info-outline\"></i>info-outline</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-input\"></i>input</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-insert-chart\"></i>insert-chart</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-insert-comment\"></i>insert-comment</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-insert-drive-file\"></i>insert-drive-file</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-insert-emoticon\"></i>insert-emoticon</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-insert-invitation\"></i>insert-invitation</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-insert-link\"></i>insert-link</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-insert-photo\"></i>insert-photo</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-invert-colors\"></i>invert-colors</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-invert-colors-off\"></i>invert-colors-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-iso\"></i>iso</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-keyboard\"></i>keyboard</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-keyboard-arrow-down\"></i>keyboard-arrow-down</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-keyboard-arrow-left\"></i>keyboard-arrow-left</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-keyboard-arrow-right\"></i>keyboard-arrow-right</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-keyboard-arrow-up\"></i>keyboard-arrow-up</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-keyboard-backspace\"></i>keyboard-backspace</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-keyboard-capslock\"></i>keyboard-capslock</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-keyboard-hide\"></i>keyboard-hide</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-keyboard-return\"></i>keyboard-return</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-keyboard-tab\"></i>keyboard-tab</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-keyboard-voice\"></i>keyboard-voice</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-kitchen\"></i>kitchen</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-label\"></i>label</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-label-outline\"></i>label-outline</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-landscape\"></i>landscape</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-language\"></i>language</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-laptop\"></i>laptop</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-laptop-chromebook\"></i>laptop-chromebook</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-laptop-mac\"></i>laptop-mac</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-laptop-windows\"></i>laptop-windows</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-last-page\"></i>last-page</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-launch\"></i>launch</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-layers\"></i>layers</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-layers-clear\"></i>layers-clear</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-leak-add\"></i>leak-add</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-leak-remove\"></i>leak-remove</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-lens\"></i>lens</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-library-add\"></i>library-add</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-library-books\"></i>library-books</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-library-music\"></i>library-music</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-lightbulb-outline\"></i>lightbulb-outline</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-line-style\"></i>line-style</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-line-weight\"></i>line-weight</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-linear-scale\"></i>linear-scale</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-link\"></i>link</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-linked-camera\"></i>linked-camera</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-list\"></i>list</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-live-help\"></i>live-help</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-live-tv\"></i>live-tv</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-activity\"></i>local-activity</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-airport\"></i>local-airport</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-atm\"></i>local-atm</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-bar\"></i>local-bar</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-cafe\"></i>local-cafe</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-car-wash\"></i>local-car-wash</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-convenience-store\"></i>local-convenience-store</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-dining\"></i>local-dining</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-drink\"></i>local-drink</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-florist\"></i>local-florist</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-gas-station\"></i>local-gas-station</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-grocery-store\"></i>local-grocery-store</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-hospital\"></i>local-hospital</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-hotel\"></i>local-hotel</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-laundry-service\"></i>local-laundry-service</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-library\"></i>local-library</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-mall\"></i>local-mall</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-movies\"></i>local-movies</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-offer\"></i>local-offer</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-parking\"></i>local-parking</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-pharmacy\"></i>local-pharmacy</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-phone\"></i>local-phone</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-pizza\"></i>local-pizza</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-play\"></i>local-play</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-post-office\"></i>local-post-office</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-printshop\"></i>local-printshop</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-see\"></i>local-see</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-shipping\"></i>local-shipping</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-local-taxi\"></i>local-taxi</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-location-city\"></i>location-city</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-location-disabled\"></i>location-disabled</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-location-off\"></i>location-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-location-on\"></i>location-on</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-location-searching\"></i>location-searching</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-lock\"></i>lock</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-lock-open\"></i>lock-open</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-lock-outline\"></i>lock-outline</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-looks\"></i>looks</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-looks-3\"></i>looks-3</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-looks-4\"></i>looks-4</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-looks-5\"></i>looks-5</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-looks-6\"></i>looks-6</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-looks-one\"></i>looks-one</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-looks-two\"></i>looks-two</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-loop\"></i>loop</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-loupe\"></i>loupe</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-low-priority\"></i>low-priority</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-loyalty\"></i>loyalty</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-mail\"></i>mail</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-mail-outline\"></i>mail-outline</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-map\"></i>map</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-markunread\"></i>markunread</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-markunread-mailbox\"></i>markunread-mailbox</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-memory\"></i>memory</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-menu\"></i>menu</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-merge-type\"></i>merge-type</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-message\"></i>message</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-mic\"></i>mic</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-mic-none\"></i>mic-none</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-mic-off\"></i>mic-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-mms\"></i>mms</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-mode-comment\"></i>mode-comment</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-mode-edit\"></i>mode-edit</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-monetization-on\"></i>monetization-on</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-money-off\"></i>money-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-monochrome-photos\"></i>monochrome-photos</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-mood\"></i>mood</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-mood-bad\"></i>mood-bad</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-more\"></i>more</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-more-horiz\"></i>more-horiz</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-more-vert\"></i>more-vert</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-motorcycle\"></i>motorcycle</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-mouse\"></i>mouse</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-move-to-inbox\"></i>move-to-inbox</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-movie\"></i>movie</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-movie-creation\"></i>movie-creation</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-movie-filter\"></i>movie-filter</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-multiline-chart\"></i>multiline-chart</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-music-note\"></i>music-note</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-music-video\"></i>music-video</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-my-location\"></i>my-location</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-nature\"></i>nature</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-nature-people\"></i>nature-people</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-navigate-before\"></i>navigate-before</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-navigate-next\"></i>navigate-next</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-navigation\"></i>navigation</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-near-me\"></i>near-me</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-network-cell\"></i>network-cell</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-network-check\"></i>network-check</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-network-locked\"></i>network-locked</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-network-wifi\"></i>network-wifi</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-new-releases\"></i>new-releases</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-next-week\"></i>next-week</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-nfc\"></i>nfc</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-no-encryption\"></i>no-encryption</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-no-sim\"></i>no-sim</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-not-interested\"></i>not-interested</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-note\"></i>note</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-note-add\"></i>note-add</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-notifications\"></i>notifications</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-notifications-active\"></i>notifications-active</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-notifications-none\"></i>notifications-none</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-notifications-off\"></i>notifications-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-notifications-paused\"></i>notifications-paused</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-offline-pin\"></i>offline-pin</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-ondemand-video\"></i>ondemand-video</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-opacity\"></i>opacity</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-open-in-browser\"></i>open-in-browser</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-open-in-new\"></i>open-in-new</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-open-with\"></i>open-with</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-pages\"></i>pages</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-pageview\"></i>pageview</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-palette\"></i>palette</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-pan-tool\"></i>pan-tool</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-panorama\"></i>panorama</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-panorama-fish-eye\"></i>panorama-fish-eye</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-panorama-horizontal\"></i>panorama-horizontal</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-panorama-vertical\"></i>panorama-vertical</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-panorama-wide-angle\"></i>panorama-wide-angle</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-party-mode\"></i>party-mode</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-pause\"></i>pause</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-pause-circle-filled\"></i>pause-circle-filled</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-pause-circle-outline\"></i>pause-circle-outline</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-payment\"></i>payment</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-people\"></i>people</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-people-outline\"></i>people-outline</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-perm-camera-mic\"></i>perm-camera-mic</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-perm-contact-calendar\"></i>perm-contact-calendar</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-perm-data-setting\"></i>perm-data-setting</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-perm-device-information\"></i>perm-device-information</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-perm-identity\"></i>perm-identity</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-perm-media\"></i>perm-media</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-perm-phone-msg\"></i>perm-phone-msg</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-perm-scan-wifi\"></i>perm-scan-wifi</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-person\"></i>person</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-person-add\"></i>person-add</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-person-outline\"></i>person-outline</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-person-pin\"></i>person-pin</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-person-pin-circle\"></i>person-pin-circle</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-personal-video\"></i>personal-video</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-pets\"></i>pets</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phone\"></i>phone</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phone-android\"></i>phone-android</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phone-bluetooth-speaker\"></i>phone-bluetooth-speaker</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phone-forwarded\"></i>phone-forwarded</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phone-in-talk\"></i>phone-in-talk</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phone-iphone\"></i>phone-iphone</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phone-locked\"></i>phone-locked</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phone-missed\"></i>phone-missed</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phone-paused\"></i>phone-paused</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phonelink\"></i>phonelink</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phonelink-erase\"></i>phonelink-erase</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phonelink-lock\"></i>phonelink-lock</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phonelink-off\"></i>phonelink-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phonelink-ring\"></i>phonelink-ring</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-phonelink-setup\"></i>phonelink-setup</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-photo\"></i>photo</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-photo-album\"></i>photo-album</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-photo-camera\"></i>photo-camera</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-photo-filter\"></i>photo-filter</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-photo-library\"></i>photo-library</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-photo-size-select-actual\"></i>photo-size-select-actual</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-photo-size-select-large\"></i>photo-size-select-large</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-photo-size-select-small\"></i>photo-size-select-small</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-picture-as-pdf\"></i>picture-as-pdf</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-picture-in-picture\"></i>picture-in-picture</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-picture-in-picture-alt\"></i>picture-in-picture-alt</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-pie-chart\"></i>pie-chart</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-pie-chart-outlined\"></i>pie-chart-outlined</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-pin-drop\"></i>pin-drop</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-place\"></i>place</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-play-arrow\"></i>play-arrow</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-play-circle-filled\"></i>play-circle-filled</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-play-circle-outline\"></i>play-circle-outline</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-play-for-work\"></i>play-for-work</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-playlist-add\"></i>playlist-add</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-playlist-add-check\"></i>playlist-add-check</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-playlist-play\"></i>playlist-play</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-plus-one\"></i>plus-one</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-poll\"></i>poll</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-polymer\"></i>polymer</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-pool\"></i>pool</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-portable-wifi-off\"></i>portable-wifi-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-portrait\"></i>portrait</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-power\"></i>power</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-power-input\"></i>power-input</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-power-settings-new\"></i>power-settings-new</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-pregnant-woman\"></i>pregnant-woman</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-present-to-all\"></i>present-to-all</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-print\"></i>print</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-priority-high\"></i>priority-high</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-public\"></i>public</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-publish\"></i>publish</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-query-builder\"></i>query-builder</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-question-answer\"></i>question-answer</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-queue\"></i>queue</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-queue-music\"></i>queue-music</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-queue-play-next\"></i>queue-play-next</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-radio\"></i>radio</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-radio-button-checked\"></i>radio-button-checked</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-radio-button-unchecked\"></i>radio-button-unchecked</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-rate-review\"></i>rate-review</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-receipt\"></i>receipt</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-recent-actors\"></i>recent-actors</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-record-voice-over\"></i>record-voice-over</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-redeem\"></i>redeem</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-redo\"></i>redo</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-refresh\"></i>refresh</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-remove\"></i>remove</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-remove-circle\"></i>remove-circle</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-remove-circle-outline\"></i>remove-circle-outline</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-remove-from-queue\"></i>remove-from-queue</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-remove-red-eye\"></i>remove-red-eye</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-remove-shopping-cart\"></i>remove-shopping-cart</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-reorder\"></i>reorder</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-repeat\"></i>repeat</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-repeat-one\"></i>repeat-one</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-replay\"></i>replay</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-replay-10\"></i>replay-10</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-replay-30\"></i>replay-30</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-replay-5\"></i>replay-5</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-reply\"></i>reply</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-reply-all\"></i>reply-all</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-report\"></i>report</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-report-problem\"></i>report-problem</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-restaurant\"></i>restaurant</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-restaurant-menu\"></i>restaurant-menu</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-restore\"></i>restore</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-restore-page\"></i>restore-page</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-ring-volume\"></i>ring-volume</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-room\"></i>room</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-room-service\"></i>room-service</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-rotate-90-degrees-ccw\"></i>rotate-90-degrees-ccw</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-rotate-left\"></i>rotate-left</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-rotate-right\"></i>rotate-right</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-rounded-corner\"></i>rounded-corner</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-router\"></i>router</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-rowing\"></i>rowing</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-rss-feed\"></i>rss-feed</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-rv-hookup\"></i>rv-hookup</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-satellite\"></i>satellite</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-save\"></i>save</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-scanner\"></i>scanner</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-schedule\"></i>schedule</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-school\"></i>school</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-screen-lock-landscape\"></i>screen-lock-landscape</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-screen-lock-portrait\"></i>screen-lock-portrait</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-screen-lock-rotation\"></i>screen-lock-rotation</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-screen-rotation\"></i>screen-rotation</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-screen-share\"></i>screen-share</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sd-card\"></i>sd-card</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sd-storage\"></i>sd-storage</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-search\"></i>search</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-security\"></i>security</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-select-all\"></i>select-all</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-send\"></i>send</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sentiment-dissatisfied\"></i>sentiment-dissatisfied</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sentiment-neutral\"></i>sentiment-neutral</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sentiment-satisfied\"></i>sentiment-satisfied</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sentiment-very-dissatisfied\"></i>sentiment-very-dissatisfied</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sentiment-very-satisfied\"></i>sentiment-very-satisfied</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings\"></i>settings</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-applications\"></i>settings-applications</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-backup-restore\"></i>settings-backup-restore</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-bluetooth\"></i>settings-bluetooth</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-brightness\"></i>settings-brightness</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-cell\"></i>settings-cell</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-ethernet\"></i>settings-ethernet</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-input-antenna\"></i>settings-input-antenna</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-input-component\"></i>settings-input-component</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-input-composite\"></i>settings-input-composite</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-input-hdmi\"></i>settings-input-hdmi</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-input-svideo\"></i>settings-input-svideo</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-overscan\"></i>settings-overscan</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-phone\"></i>settings-phone</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-power\"></i>settings-power</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-remote\"></i>settings-remote</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-system-daydream\"></i>settings-system-daydream</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-settings-voice\"></i>settings-voice</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-share\"></i>share</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-shop\"></i>shop</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-shop-two\"></i>shop-two</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-shopping-basket\"></i>shopping-basket</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-shopping-cart\"></i>shopping-cart</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-short-text\"></i>short-text</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-show-chart\"></i>show-chart</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-shuffle\"></i>shuffle</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-signal-cellular-4-bar\"></i>signal-cellular-4-bar</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-signal-cellular-connected-no-internet-4-bar\"></i>signal-cellular-connected-no-internet-4-bar</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-signal-cellular-no-sim\"></i>signal-cellular-no-sim</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-signal-cellular-null\"></i>signal-cellular-null</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-signal-cellular-off\"></i>signal-cellular-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-signal-wifi-4-bar\"></i>signal-wifi-4-bar</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-signal-wifi-4-bar-lock\"></i>signal-wifi-4-bar-lock</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-signal-wifi-off\"></i>signal-wifi-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sim-card\"></i>sim-card</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sim-card-alert\"></i>sim-card-alert</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-skip-next\"></i>skip-next</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-skip-previous\"></i>skip-previous</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-slideshow\"></i>slideshow</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-slow-motion-video\"></i>slow-motion-video</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-smartphone\"></i>smartphone</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-smoke-free\"></i>smoke-free</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-smoking-rooms\"></i>smoking-rooms</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sms\"></i>sms</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sms-failed\"></i>sms-failed</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-snooze\"></i>snooze</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sort\"></i>sort</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sort-by-alpha\"></i>sort-by-alpha</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-spa\"></i>spa</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-space-bar\"></i>space-bar</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-speaker\"></i>speaker</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-speaker-group\"></i>speaker-group</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-speaker-notes\"></i>speaker-notes</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-speaker-notes-off\"></i>speaker-notes-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-speaker-phone\"></i>speaker-phone</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-spellcheck\"></i>spellcheck</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-star\"></i>star</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-star-border\"></i>star-border</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-star-half\"></i>star-half</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-stars\"></i>stars</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-stay-current-landscape\"></i>stay-current-landscape</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-stay-current-portrait\"></i>stay-current-portrait</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-stay-primary-landscape\"></i>stay-primary-landscape</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-stay-primary-portrait\"></i>stay-primary-portrait</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-stop\"></i>stop</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-stop-screen-share\"></i>stop-screen-share</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-storage\"></i>storage</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-store\"></i>store</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-store-mall-directory\"></i>store-mall-directory</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-straighten\"></i>straighten</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-streetview\"></i>streetview</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-strikethrough-s\"></i>strikethrough-s</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-style\"></i>style</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-subdirectory-arrow-left\"></i>subdirectory-arrow-left</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-subdirectory-arrow-right\"></i>subdirectory-arrow-right</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-subject\"></i>subject</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-subscriptions\"></i>subscriptions</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-subtitles\"></i>subtitles</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-subway\"></i>subway</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-supervisor-account\"></i>supervisor-account</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-surround-sound\"></i>surround-sound</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-swap-calls\"></i>swap-calls</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-swap-horiz\"></i>swap-horiz</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-swap-vert\"></i>swap-vert</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-swap-vertical-circle\"></i>swap-vertical-circle</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-switch-camera\"></i>switch-camera</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-switch-video\"></i>switch-video</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sync\"></i>sync</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sync-disabled\"></i>sync-disabled</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-sync-problem\"></i>sync-problem</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-system-update\"></i>system-update</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-system-update-alt\"></i>system-update-alt</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-tab\"></i>tab</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-tab-unselected\"></i>tab-unselected</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-tablet\"></i>tablet</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-tablet-android\"></i>tablet-android</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-tablet-mac\"></i>tablet-mac</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-tag-faces\"></i>tag-faces</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-tap-and-play\"></i>tap-and-play</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-terrain\"></i>terrain</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-text-fields\"></i>text-fields</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-text-format\"></i>text-format</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-textsms\"></i>textsms</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-texture\"></i>texture</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-theaters\"></i>theaters</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-thumb-down\"></i>thumb-down</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-thumb-up\"></i>thumb-up</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-thumbs-up-down\"></i>thumbs-up-down</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-time-to-leave\"></i>time-to-leave</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-timelapse\"></i>timelapse</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-timeline\"></i>timeline</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-timer\"></i>timer</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-timer-10\"></i>timer-10</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-timer-3\"></i>timer-3</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-timer-off\"></i>timer-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-title\"></i>title</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-toc\"></i>toc</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-today\"></i>today</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-toll\"></i>toll</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-tonality\"></i>tonality</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-touch-app\"></i>touch-app</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-toys\"></i>toys</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-track-changes\"></i>track-changes</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-traffic\"></i>traffic</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-train\"></i>train</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-tram\"></i>tram</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-transfer-within-a-station\"></i>transfer-within-a-station</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-transform\"></i>transform</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-translate\"></i>translate</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-trending-down\"></i>trending-down</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-trending-flat\"></i>trending-flat</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-trending-up\"></i>trending-up</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-tune\"></i>tune</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-turned-in\"></i>turned-in</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-turned-in-not\"></i>turned-in-not</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-tv\"></i>tv</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-unarchive\"></i>unarchive</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-undo\"></i>undo</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-unfold-less\"></i>unfold-less</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-unfold-more\"></i>unfold-more</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-update\"></i>update</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-usb\"></i>usb</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-verified-user\"></i>verified-user</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-vertical-align-bottom\"></i>vertical-align-bottom</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-vertical-align-center\"></i>vertical-align-center</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-vertical-align-top\"></i>vertical-align-top</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-vibration\"></i>vibration</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-video-call\"></i>video-call</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-video-label\"></i>video-label</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-video-library\"></i>video-library</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-videocam\"></i>videocam</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-videocam-off\"></i>videocam-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-videogame-asset\"></i>videogame-asset</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-view-agenda\"></i>view-agenda</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-view-array\"></i>view-array</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-view-carousel\"></i>view-carousel</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-view-column\"></i>view-column</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-view-comfy\"></i>view-comfy</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-view-compact\"></i>view-compact</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-view-day\"></i>view-day</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-view-headline\"></i>view-headline</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-view-list\"></i>view-list</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-view-module\"></i>view-module</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-view-quilt\"></i>view-quilt</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-view-stream\"></i>view-stream</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-view-week\"></i>view-week</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-vignette\"></i>vignette</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-visibility\"></i>visibility</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-visibility-off\"></i>visibility-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-voice-chat\"></i>voice-chat</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-voicemail\"></i>voicemail</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-volume-down\"></i>volume-down</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-volume-mute\"></i>volume-mute</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-volume-off\"></i>volume-off</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-volume-up\"></i>volume-up</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-vpn-key\"></i>vpn-key</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-vpn-lock\"></i>vpn-lock</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-wallpaper\"></i>wallpaper</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-warning\"></i>warning</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-watch\"></i>watch</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-watch-later\"></i>watch-later</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-wb-auto\"></i>wb-auto</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-wb-cloudy\"></i>wb-cloudy</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-wb-incandescent\"></i>wb-incandescent</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-wb-iridescent\"></i>wb-iridescent</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-wb-sunny\"></i>wb-sunny</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-wc\"></i>wc</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-web\"></i>web</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-web-asset\"></i>web-asset</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-weekend\"></i>weekend</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-whatshot\"></i>whatshot</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-widgets\"></i>widgets</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-wifi\"></i>wifi</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-wifi-lock\"></i>wifi-lock</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-wifi-tethering\"></i>wifi-tethering</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-work\"></i>work</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-wrap-text\"></i>wrap-text</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-youtube-searched-for\"></i>youtube-searched-for</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-zoom-in\"></i>zoom-in</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-zoom-out\"></i>zoom-out</div>\n                    <div class=\"ui-g-12 ui-md-2\"><i class=\"fa ui-icon-zoom-out-map\"></i>zoom-out-map</div>\n                </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/demo/view/utilsdemo.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilsDemoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__breadcrumb_service__ = __webpack_require__("../../../../../src/app/breadcrumb.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UtilsDemoComponent = (function () {
    function UtilsDemoComponent(breadcrumbService) {
        this.breadcrumbService = breadcrumbService;
        this.breadcrumbService.setItems([
            { label: 'Utilities' }
        ]);
    }
    UtilsDemoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__("../../../../../src/app/demo/view/utilsdemo.component.html"),
            styles: ["\n        .icon-grid div.ui-g-12 {\n            color: #757575;\n            text-align: center;\n            padding: 16px;\n            font-size: 12px;\n        }\n\n        .icon-grid i {\n            display: block;\n            margin: 0 auto;\n            font-size: 24px;\n        }\n\n        pre {\n            font-family: monospace;\n            background-color: #0C2238;\n            color: #dddddd;\n            padding: 1em;\n            font-size: 14px;\n            border-radius: 3px;\n            overflow: auto;\n        }\n\n        .shadow-box {\n            background-color: #607D8B;\n            width: 100px;\n            height: 100px;\n        }\n    "],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__breadcrumb_service__["a" /* BreadcrumbService */]])
    ], UtilsDemoComponent);
    return UtilsDemoComponent;
}());



/***/ }),

/***/ "../../../../../src/app/guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_services_auth_service__ = __webpack_require__("../../../../../src/app/auth/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (this.auth.check()) {
            return true;
        }
        this.router.navigate(['auth/login']);
        return false;
    };
    AuthGuard.prototype.canActivateChild = function (route, state) {
        if (this.auth.check()) {
            return true;
        }
        this.router.navigate(['auth/login']);
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__auth_services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/interceptors/refresh-token.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RefreshTokenInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var RefreshTokenInterceptor = (function () {
    function RefreshTokenInterceptor(injector) {
        this.injector = injector;
    }
    RefreshTokenInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).catch(function (errorResponse) {
            var error = (typeof errorResponse.error !== 'object') ? JSON.parse(errorResponse.error) : errorResponse;
            if (errorResponse.status === 401 || error.error === 'token_expired') {
                console.log('token perdido exprirado');
                var http = _this.injector.get(__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]);
                return http.post(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].urlBase + "/auth/refresh", {})
                    .flatMap(function (data) {
                    localStorage.setItem('token', data.token);
                    var cloneRequest = request.clone({ setHeaders: { 'Authorization': "Bearer " + data.token } });
                    return next.handle(cloneRequest);
                });
            }
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["a" /* Observable */].throw(errorResponse);
        });
    };
    RefreshTokenInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injector"]])
    ], RefreshTokenInterceptor);
    return RefreshTokenInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/interceptors/token.interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TokenInterceptor = (function () {
    function TokenInterceptor() {
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        var requestUrl = request.url.split('/');
        var apiUrl = __WEBPACK_IMPORTED_MODULE_0__environments_environment__["a" /* environment */].urlBase.split('/');
        var token = localStorage.getItem('token');
        if (token && (requestUrl[2] === apiUrl[2])) {
            var newRequest = request.clone({ setHeaders: { 'Authorization': "Bearer " + token } });
            return next.handle(newRequest);
        }
        else {
            return next.handle(request);
        }
    };
    TokenInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])()
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "../../../../../src/app/pessoas/pessoa.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PessoaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pessoas_pesquisa_pessoas_pesquisa_component__ = __webpack_require__("../../../../../src/app/pessoas/pessoas-pesquisa/pessoas-pesquisa.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_currency_mask__ = __webpack_require__("../../../../ng2-currency-mask/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_currency_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_currency_mask__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_primeng__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Import PrimeNG modules































































var PessoaModule = (function () {
    function PessoaModule() {
    }
    PessoaModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
                // Import PrimeNG modules
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["AccordionModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["AutoCompleteModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["BreadcrumbModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["CalendarModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["CarouselModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ChartModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["CheckboxModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ChipsModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["CodeHighlighterModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ConfirmDialogModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ContextMenuModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DataGridModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DataListModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DataScrollerModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DataTableModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DialogModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DragDropModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["DropdownModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["EditorModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["FieldsetModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["GalleriaModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["GMapModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["GrowlModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["InputMaskModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["InputSwitchModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["InputTextModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["InputTextareaModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["LightboxModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ListboxModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["MegaMenuModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["MenuModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["MenubarModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["MessagesModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["MultiSelectModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["OrderListModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["OverlayPanelModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["PaginatorModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["PanelModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["PanelMenuModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["PasswordModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["PickListModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ProgressBarModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["RadioButtonModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["RatingModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ScheduleModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["SelectButtonModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["SlideMenuModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["SliderModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["SpinnerModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["SplitButtonModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["StepsModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["TabMenuModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["TabViewModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["TerminalModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["TieredMenuModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ToggleButtonModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["ToolbarModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["TooltipModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["TreeModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_primeng__["TreeTableModule"],
                __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng2_currency_mask__["CurrencyMaskModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_0__pessoas_pesquisa_pessoas_pesquisa_component__["a" /* PessoasPesquisaComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_0__pessoas_pesquisa_pessoas_pesquisa_component__["a" /* PessoasPesquisaComponent */]
            ]
        })
    ], PessoaModule);
    return PessoaModule;
}());



/***/ }),

/***/ "../../../../../src/app/pessoas/pessoa.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export PessoaFiltro */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PessoaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PessoaFiltro = (function () {
    function PessoaFiltro() {
        this.pagina = 0;
        this.itensPorPagina = 5;
    }
    return PessoaFiltro;
}());

var PessoaService = (function () {
    function PessoaService(http) {
        this.http = http;
        this.pessoasUrl = 'http://localhost:8080/pessoas';
    }
    PessoaService.prototype.pesquisar = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        // tslint:disable-next-line:max-line-length
        headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNTEzODc3MzQ5LCJhdXRob3JpdGllcyI6WyJST0xFX0FUVUFMSVpBUl9MQU5DQU1FTlRPIiwiUk9MRV9DQURBU1RSQVJfQ0FURUdPUklBIiwiUk9MRV9QRVNRVUlTQVJfUEVTU09BIiwiUk9MRV9SRU1PVkVSX1BFU1NPQSIsIlJPTEVfQ0FEQVNUUkFSX0xBTkNBTUVOVE8iLCJST0xFX1BFU1FVSVNBUl9MQU5DQU1FTlRPIiwiUk9MRV9SRU1PVkVSX0xBTkNBTUVOVE8iLCJST0xFX0NBREFTVFJBUl9QRVNTT0EiLCJST0xFX1BFU1FVSVNBUl9DQVRFR09SSUEiLCJST0xFX0FUVUFMSVpBUl9QRVNTT0EiXSwianRpIjoiZGRmYzI3ZWItMTI0Ni00N2JlLTlkYzYtNGE2ODkzNDViNGFmIiwiZW1haWwiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwiY2xpZW50X2lkIjoiYW5ndWxhciJ9.lrwffx0zujGqh5xBIZISUY29dLiHq9zi-uwn9xb_4s8');
        return this.http.get(this.pessoasUrl + "?listar", { headers: headers })
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    PessoaService.prototype.listarTodas = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        // tslint:disable-next-line:max-line-length
        headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNTEzODc3MzQ5LCJhdXRob3JpdGllcyI6WyJST0xFX0FUVUFMSVpBUl9MQU5DQU1FTlRPIiwiUk9MRV9DQURBU1RSQVJfQ0FURUdPUklBIiwiUk9MRV9QRVNRVUlTQVJfUEVTU09BIiwiUk9MRV9SRU1PVkVSX1BFU1NPQSIsIlJPTEVfQ0FEQVNUUkFSX0xBTkNBTUVOVE8iLCJST0xFX1BFU1FVSVNBUl9MQU5DQU1FTlRPIiwiUk9MRV9SRU1PVkVSX0xBTkNBTUVOVE8iLCJST0xFX0NBREFTVFJBUl9QRVNTT0EiLCJST0xFX1BFU1FVSVNBUl9DQVRFR09SSUEiLCJST0xFX0FUVUFMSVpBUl9QRVNTT0EiXSwianRpIjoiZGRmYzI3ZWItMTI0Ni00N2JlLTlkYzYtNGE2ODkzNDViNGFmIiwiZW1haWwiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwiY2xpZW50X2lkIjoiYW5ndWxhciJ9.lrwffx0zujGqh5xBIZISUY29dLiHq9zi-uwn9xb_4s8');
        return this.http.get(this.pessoasUrl, { headers: headers })
            .toPromise()
            .then(function (response) { return response.json(); });
    };
    PessoaService.prototype.excluir = function (codigo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        // tslint:disable-next-line:max-line-length
        headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNTEzODc3MzQ5LCJhdXRob3JpdGllcyI6WyJST0xFX0FUVUFMSVpBUl9MQU5DQU1FTlRPIiwiUk9MRV9DQURBU1RSQVJfQ0FURUdPUklBIiwiUk9MRV9QRVNRVUlTQVJfUEVTU09BIiwiUk9MRV9SRU1PVkVSX1BFU1NPQSIsIlJPTEVfQ0FEQVNUUkFSX0xBTkNBTUVOVE8iLCJST0xFX1BFU1FVSVNBUl9MQU5DQU1FTlRPIiwiUk9MRV9SRU1PVkVSX0xBTkNBTUVOVE8iLCJST0xFX0NBREFTVFJBUl9QRVNTT0EiLCJST0xFX1BFU1FVSVNBUl9DQVRFR09SSUEiLCJST0xFX0FUVUFMSVpBUl9QRVNTT0EiXSwianRpIjoiZGRmYzI3ZWItMTI0Ni00N2JlLTlkYzYtNGE2ODkzNDViNGFmIiwiZW1haWwiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwiY2xpZW50X2lkIjoiYW5ndWxhciJ9.lrwffx0zujGqh5xBIZISUY29dLiHq9zi-uwn9xb_4s8');
        return this.http.delete(this.pessoasUrl + "/" + codigo, { headers: headers })
            .toPromise()
            .then(function () { return null; });
    };
    PessoaService.prototype.mudarStatus = function (codigo, ativo) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        // tslint:disable-next-line:max-line-length
        headers.append('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwic2NvcGUiOlsicmVhZCIsIndyaXRlIl0sIm5vbWUiOiJBZG1pbmlzdHJhZG9yIiwiZXhwIjoxNTEzODc3MzQ5LCJhdXRob3JpdGllcyI6WyJST0xFX0FUVUFMSVpBUl9MQU5DQU1FTlRPIiwiUk9MRV9DQURBU1RSQVJfQ0FURUdPUklBIiwiUk9MRV9QRVNRVUlTQVJfUEVTU09BIiwiUk9MRV9SRU1PVkVSX1BFU1NPQSIsIlJPTEVfQ0FEQVNUUkFSX0xBTkNBTUVOVE8iLCJST0xFX1BFU1FVSVNBUl9MQU5DQU1FTlRPIiwiUk9MRV9SRU1PVkVSX0xBTkNBTUVOVE8iLCJST0xFX0NBREFTVFJBUl9QRVNTT0EiLCJST0xFX1BFU1FVSVNBUl9DQVRFR09SSUEiLCJST0xFX0FUVUFMSVpBUl9QRVNTT0EiXSwianRpIjoiZGRmYzI3ZWItMTI0Ni00N2JlLTlkYzYtNGE2ODkzNDViNGFmIiwiZW1haWwiOiJhZG1pbkBhbGdhbW9uZXkuY29tIiwiY2xpZW50X2lkIjoiYW5ndWxhciJ9.lrwffx0zujGqh5xBIZISUY29dLiHq9zi-uwn9xb_4s8');
        headers.append('Content-Type', 'application/json');
        return this.http.put(this.pessoasUrl + "/" + codigo + "/ativo", ativo, { headers: headers })
            .toPromise()
            .then(function () { return null; });
    };
    PessoaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], PessoaService);
    return PessoaService;
}());



/***/ }),

/***/ "../../../../../src/app/pessoas/pessoas-pesquisa/pessoas-pesquisa.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pessoas/pessoas-pesquisa/pessoas-pesquisa.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g\">\r\n  <div class=\"ui-g-12\" style=\"margin-top: -15px;\">\r\n\r\n      <h1 ><i class=\"material-icons\" style=\"vertical-align:middle\">people</i> Funcionários</h1>\r\n\r\n      <div class=\"card shadow-box ui-shadow-3\">\r\n\r\n            <form autocomplete=\"off\" (ngSubmit)=\"pesquisar()\">\r\n\r\n              <p-growl [(value)]=\"msgs\"></p-growl>\r\n\r\n            </form>\r\n\r\n        \r\n\r\n\r\n            <p-toolbar>\r\n              <div class=\"ui-toolbar-group-left btnpanel\">\r\n                  <button pButton type=\"button\"   (click)=\"showDialog()\"  label=\"Novo funcionário\" icon=\"fa-plus\"></button>\r\n                  <i class=\"material-icons\" style=\"vertical-align:middle\">apps</i>\r\n                      <p-splitButton icon=\"ui-icon-format-list-bulleted\" label=\"Acões relacionadas\"  [model]=\"acoesRelacionadas\" styleClass=\"ui-button-warning\"></p-splitButton>\r\n              </div>\r\n\r\n          </p-toolbar>\r\n\r\n\r\n          <br/>\r\n          <div class=\"ui-g form-group\">\r\n            <div class=\"ui-g-12 ui-md-12\">\r\n                <div class=\"ui-inputgroup\">\r\n                    <button pButton type=\"button\" icon=\"ui-icon-search\"></button>\r\n                    <span class=\"md-inputfield\">\r\n                        <input #gb type=\"text\" pInputText class=\"pesquisar\" style=\"border-radius: 6px;\"> \r\n                        <label>Pesquisar</label>        \r\n                    </span>\r\n                </div>\r\n            </div>\r\n          <br/>\r\n\r\n\r\n          <p-panel>\r\n\r\n\r\n\r\n      <p-dataTable\r\n      [value]=\"pessoas\"\r\n      [paginator]=\"true\"\r\n      [rows]=\"5\"\r\n      [responsive]=\"true\"\r\n      [rowsPerPageOptions]=\"[3,5,10,15]\"\r\n      [globalFilter]=\"gb\"\r\n      selectionMode=\"single\"\r\n      [(selection)]=\"selectedLancamento\"\r\n      dataKey=\"nome\"\r\n      #tabela\r\n      emptyMessage=\"Nenhum registro encontrado\"\r\n      [lazy]=\"false\"\r\n      sortMode=\"multiple\">\r\n\r\n\r\n        <p-footer >\r\n          <div style=\"text-align:right\">\r\n              <p-multiSelect  [options]=\"columnOptions\"  [(ngModel)]=\"cols\"></p-multiSelect>\r\n          </div>\r\n        </p-footer>\r\n\r\n            <p-column *ngFor=\"let col of cols\" [styleClass]=\"col.style\"  [sortable]=\"true\" [field]=\"col.field\" [header]=\"col.header\" [filter]=\"false\"></p-column>\r\n\r\n<!--\r\n         <p-column field=\"nome\" header=\"Nome\"  [filter]=\"false\" [sortable]=\"true\"></p-column>\r\n\r\n          <p-column field=\"endereco.cidade\" header=\"Cidade\" [filter]=\"false\" styleClass=\"col-cidade\" [sortable]=\"true\"></p-column>\r\n\r\n          <p-column field=\"endereco.estado\" header=\"Estado\" [filter]=\"false\" styleClass=\"col-estado\" [sortable]=\"true\"></p-column>\r\n-->\r\n          <p-column field=\"ativo\" header=\"Status\" styleClass=\"col-status\" [sortable]=\"true\">\r\n            <ng-template let-pes=\"rowData\" pTemplate=\"body\">\r\n                <a href=\"javascript:;\" [pTooltip]=\"pes.ativo ? 'Desativar' : 'Ativar'\"\r\n                    tooltipPosition=\"top\"  (click)=\"alternarStatus(pes)\">\r\n                    <span [style.color]=\"pes.ativo ? 'green' : 'red'\">{{ pes.ativo ? 'Ativo' : 'Inativo' }}</span>\r\n\r\n                </a>\r\n\r\n            </ng-template>\r\n          </p-column>\r\n\r\n          <p-column styleClass=\"col-opcoes\" header=\"Ações\">\r\n            <ng-template let-pessoa=\"rowData\" pTemplate=\"body\">\r\n\r\n\r\n              <button pButton icon=\"ui-icon-edit\" pTooltip=\"Editar\" tooltipPosition=\"top\"></button>\r\n              <button pButton icon=\"ui-icon-delete-forever\" pButton (click)=\"confirmarExclusao(pessoa)\" pTooltip=\"Excluir\" tooltipPosition=\"top\" class=\"ui-button-danger\"></button>\r\n            \r\n            \r\n            </ng-template>\r\n          </p-column>\r\n\r\n          <p-footer>Total: {{ total}} registros </p-footer>\r\n\r\n      </p-dataTable>\r\n    </p-panel>\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <p-dialog  [(visible)]=\"display\" modal=\"modal\" [responsive]=\"true\" [width]=\"800\">\r\n\r\n    </p-dialog>\r\n\r\n\r\n\r\n      </div>\r\n      </div>\r\n      </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/pessoas/pessoas-pesquisa/pessoas-pesquisa.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PessoasPesquisaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pessoa_service__ = __webpack_require__("../../../../../src/app/pessoas/pessoa.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__ = __webpack_require__("../../../../primeng/primeng.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_primeng_primeng___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_primeng_primeng__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PessoasPesquisaComponent = (function () {
    function PessoasPesquisaComponent(pessoaService, confirmation) {
        this.pessoaService = pessoaService;
        this.confirmation = confirmation;
        this.pessoas = [];
        this.display = false;
        this.msgs = [];
    }
    PessoasPesquisaComponent.prototype.ngOnInit = function () {
        this.pesquisar();
        this.cols = [
            { field: 'nome', header: 'Nome', style: 'col-nome' },
            { field: 'endereco.cidade', header: 'Cidade', style: 'col-cidade' },
            { field: 'endereco.estado', header: 'Estado', style: 'col-estado' }
        ];
        this.acoesRelacionadas = [
            {
                label: 'Início', icon: 'ui-icon-home', url: 'http://localhost:4200/#/empty'
            },
            {
                label: 'Uusuário', icon: 'ui-icon-person', routerLink: ['/usuario']
            },
            {
                label: 'Clientes', icon: 'ui-icon-domain', url: 'http://localhost:4200/#/cliente'
            },
            {
                label: 'Permissões', icon: 'ui-icon-lock', url: 'http://localhost:4200/#/permissao'
            },
            {
                label: 'Veículo', icon: 'ui-icon-train', url: 'http://localhost:4200/#/veiculo'
            },
            {
                label: 'Funcionário', icon: 'ui-icon-people', url: 'http://localhost:4200/#/pessoa'
            }
        ];
        this.columnOptions = [];
        for (var i = 0; i < this.cols.length; i++) {
            this.columnOptions.push({ label: this.cols[i].header, value: this.cols[i] });
        }
    };
    PessoasPesquisaComponent.prototype.showDialog = function () {
        this.display = true;
    };
    PessoasPesquisaComponent.prototype.pesquisar = function () {
        var _this = this;
        this.pessoaService.pesquisar()
            .then(function (pessoas) { return _this.pessoas = pessoas; })
            .then(function (total) { return _this.total = _this.pessoas.length; })
            .catch(function (erro) {
            return _this.msgs.push({ severity: 'error', summary: 'Ops! ', detail: 'Erro ao tentar listar!' });
        });
    };
    PessoasPesquisaComponent.prototype.confirmarExclusao = function (pessoa) {
        var _this = this;
        this.confirmation.confirm({
            message: 'Tem certeza que deseja excluir?',
            accept: function () {
                _this.excluir(pessoa);
            }
        });
    };
    PessoasPesquisaComponent.prototype.excluir = function (pessoa) {
        var _this = this;
        this.pessoaService.excluir(pessoa.codigo)
            .then(function () {
            _this.msgs.push({ severity: 'success', summary: pessoa.nome + ' excluida com sucesso!' });
            _this.pesquisar();
        })
            .catch(function (erro) {
            return _this.msgs.push({ severity: 'error', summary: 'Ops! ', detail: 'Erro ao tentar excluir ' + pessoa.nome });
        });
        setTimeout(function () {
            _this.msgs = [];
        }, 5000);
    };
    PessoasPesquisaComponent.prototype.alternarStatus = function (pessoa) {
        var _this = this;
        var novoStatus = !pessoa.ativo;
        this.pessoaService.mudarStatus(pessoa.codigo, novoStatus)
            .then(function () {
            var acao = novoStatus ? 'ativada' : 'desativada';
            pessoa.ativo = novoStatus;
            _this.msgs.push({ severity: 'success', summary: pessoa.nome + ' Status alterado com sucesso!' });
            _this.pesquisar();
        })
            .catch(function (erro) {
            return _this.msgs.push({ severity: 'error', summary: 'Ops! ', detail: 'Erro ao tentar mudar o status ' + pessoa.nome });
        });
        setTimeout(function () {
            _this.msgs = [];
        }, 5000);
    };
    PessoasPesquisaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pessoas-pesquisa',
            template: __webpack_require__("../../../../../src/app/pessoas/pessoas-pesquisa/pessoas-pesquisa.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pessoas/pessoas-pesquisa/pessoas-pesquisa.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__pessoa_service__["a" /* PessoaService */],
            __WEBPACK_IMPORTED_MODULE_2_primeng_primeng__["ConfirmationService"]])
    ], PessoasPesquisaComponent);
    return PessoasPesquisaComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/menssage/menssage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenssageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenssageComponent = (function () {
    function MenssageComponent() {
    }
    MenssageComponent.prototype.temErro = function () {
        return this.control.hasError(this.error) && this.control.dirty;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MenssageComponent.prototype, "error", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"])
    ], MenssageComponent.prototype, "control", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], MenssageComponent.prototype, "text", void 0);
    MenssageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-menssage',
            template: "\n  <div *ngIf=\"temErro()\" class=\"ui-message ui-messages-error\">\n  {{ text }}\n  </div>\n  ",
            styles: ["\n  .ui-messages-error {\n    margin: 0;\n    margin-top: 4px;\n  }\n"]
        })
    ], MenssageComponent);
    return MenssageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__menssage_menssage_component__ = __webpack_require__("../../../../../src/app/shared/menssage/menssage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"]
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_0__menssage_menssage_component__["a" /* MenssageComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_0__menssage_menssage_component__["a" /* MenssageComponent */]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    urlBase: 'https://algamoney-api.herokuapp.com'
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map