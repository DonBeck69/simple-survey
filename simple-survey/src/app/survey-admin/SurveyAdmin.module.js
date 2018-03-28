"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var SurveyAdmin_component_1 = require("./SurveyAdmin.component");
var QuestionEdit_component_1 = require("./question-edit/QuestionEdit.component");
var SurveyEdit_component_1 = require("./survey-edit/SurveyEdit.component");
var SurveyAdminModule = (function () {
    function SurveyAdminModule() {
    }
    SurveyAdminModule = __decorate([
        core_1.NgModule({
            declarations: [
                SurveyAdmin_component_1.SurveyAdminComponent,
                QuestionEdit_component_1.QuestionEditComponent,
                SurveyEdit_component_1.SurveyEditComponent
            ],
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                router_1.RouterModule
            ],
            providers: []
        })
    ], SurveyAdminModule);
    return SurveyAdminModule;
}());
exports.SurveyAdminModule = SurveyAdminModule;
