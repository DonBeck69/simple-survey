"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/common/http");
var forms_1 = require("@angular/forms");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var welcome_component_1 = require("./welcome/welcome.component");
var survey_component_1 = require("./survey/survey.component");
var participant_component_1 = require("./survey/participant/participant.component");
var user_service_1 = require("./services/user.service");
var survey_service_1 = require("./services/survey.service");
var copy_service_1 = require("./services/copy.service");
var app_config_service_1 = require("./app.config.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                survey_component_1.SurveyComponent,
                welcome_component_1.WelcomeComponent,
                participant_component_1.ParticipantComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpClientModule,
                forms_1.FormsModule,
                app_routing_1.AppRouting
            ],
            providers: [
                copy_service_1.CopyService,
                survey_service_1.SurveyService,
                user_service_1.UserService,
                app_config_service_1.AppConfig
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
