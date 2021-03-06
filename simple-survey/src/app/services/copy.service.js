"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
require("rxjs/Rx");
var rxjs_1 = require("rxjs");
var WelcomeCopy = require("../../data/Welcome.json");
var app_config_service_1 = require("../app.config.service");
var CopyService = (function () {
    function CopyService(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
        this.getDeviceUrl = this.appConfig.apiUrl + 'api/Device/';
        this.WelcomeCopy = WelcomeCopy;
    }
    CopyService.prototype.getDevices = function () {
        var _this = this;
        return this.http.get(this.getDeviceUrl)
            .toPromise()
            .then(function (res) {
            _this.DeviceCopy = res;
            return _this.DeviceCopy;
        })
            .catch(function (error) { return rxjs_1.Observable.throw(error.json()); });
    };
    CopyService.prototype.handleError = function (error) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    };
    CopyService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            app_config_service_1.AppConfig])
    ], CopyService);
    return CopyService;
}());
exports.CopyService = CopyService;
