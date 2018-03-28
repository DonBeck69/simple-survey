"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var welcome_component_1 = require("./welcome/welcome.component");
var survey_component_1 = require("./survey/survey.component");
var SurveyAdmin_component_1 = require("./survey-admin/SurveyAdmin.component");
var SurveyAdminRouting_1 = require("./survey-admin/SurveyAdminRouting");
var APP_ROUTES = [
    {
        path: "",
        component: welcome_component_1.WelcomeComponent
    },
    {
        path: "survey",
        component: survey_component_1.SurveyComponent,
    },
    {
        path: "survey-admin",
        component: SurveyAdmin_component_1.SurveyAdminComponent,
        children: SurveyAdminRouting_1.SurveyAdminRouting
    }
];
exports.AppRouting = router_1.RouterModule.forRoot(APP_ROUTES);
