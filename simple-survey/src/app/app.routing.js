"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var welcome_component_1 = require("./welcome/welcome.component");
var survey_component_1 = require("./survey/survey.component");
var APP_ROUTES = [
    {
        path: '',
        component: welcome_component_1.WelcomeComponent
    },
    {
        path: 'assessment',
        component: survey_component_1.SurveyComponent,
    }
];
exports.AppRouting = router_1.RouterModule.forRoot(APP_ROUTES);
