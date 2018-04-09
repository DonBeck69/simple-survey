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
var moment = require("moment/min/moment.min");
var app_config_service_1 = require("../app.config.service");
var UserData_1 = require("../models/UserData");
var Address_1 = require("../models/Address");
var UserService = (function () {
    function UserService(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
        this.userDataApiUrl = this.appConfig.apiUrl + "api/UserData/";
        this.headers = new http_1.HttpHeaders({ "Content-Type": "application/json" });
    }
    UserService.prototype.GetFredTheMan = function () {
        var user = new UserData_1.User({
            UserDataId: null,
            Created: null,
            Data: new UserData_1.Data({
                FirstName: "Fred",
                LastName: "Theman",
                Email: "Fred@Theman.qrk",
                Address: new Address_1.Address({
                    ApartmentNumber: "1",
                    City: "Fredsville",
                    Code: "F1234",
                    Country: "USA",
                    Region: "Washington",
                    StreetName: "Theman St",
                    StreetNumber: "1"
                })
            })
        });
        this.User = user;
        return user;
    };
    UserService.prototype.PostUser = function (user) {
        var _this = this;
        if (user.Created === undefined) {
            user.Created = moment.utc().toDate();
        }
        user.Modified.push(moment.utc().toDate());
        return this.http.post(this.userDataApiUrl, JSON.stringify(UserData_1.User), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            _this.User.UserDataId = response;
        })
            .catch(this.handleError);
    };
    UserService.prototype.handleError = function (error) {
        console.log(error);
        return Promise.reject(error);
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            app_config_service_1.AppConfig])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;
