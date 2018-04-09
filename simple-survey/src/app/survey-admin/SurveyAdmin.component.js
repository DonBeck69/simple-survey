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
var copy_service_1 = require("../services/copy.service");
var router_1 = require("@angular/router");
var SurveyAdminComponent = (function () {
    function SurveyAdminComponent(copyService, router) {
        this.copyService = copyService;
        this.router = router;
        this.copy = this.copyService.Copy.SurveyAdmin;
    }
    SurveyAdminComponent.prototype.AddSurvey = function () {
        this.router.navigate(["/survey-edit", "survey-edit"]);
    };
    SurveyAdminComponent = __decorate([
        core_1.Component({
            selector: "survey-admin",
            templateUrl: "survey-admin.html"
        }),
        __metadata("design:paramtypes", [copy_service_1.CopyService,
            router_1.Router])
    ], SurveyAdminComponent);
    return SurveyAdminComponent;
}());
exports.SurveyAdminComponent = SurveyAdminComponent;
