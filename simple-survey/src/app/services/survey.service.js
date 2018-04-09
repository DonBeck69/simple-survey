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
var SurveyService = (function () {
    function SurveyService(http, appConfig) {
        this.http = http;
        this.appConfig = appConfig;
        this.resultsApiUrl = this.appConfig.apiUrl + "api/Results/";
        this.assessmentApiUrl = this.appConfig.apiUrl + "api/Assessment/";
        this.headers = new http_1.HttpHeaders({ "Content-Type": "application/json" });
    }
    SurveyService.prototype.PostAssessment = function (survey) {
        if (survey.Created === undefined) {
            survey.Created = moment.utc().toDate();
        }
        return this.http.put(this.assessmentApiUrl, JSON.stringify(survey), { headers: this.headers })
            .toPromise()
            .then(function (response) {
            survey.SurveyId = parseInt(response, 10);
        })
            .catch(this.handleError);
    };
    SurveyService.prototype.handleError = function (error) {
        console.error(error);
        return Promise.reject(error);
    };
    SurveyService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            app_config_service_1.AppConfig])
    ], SurveyService);
    return SurveyService;
}());
exports.SurveyService = SurveyService;
