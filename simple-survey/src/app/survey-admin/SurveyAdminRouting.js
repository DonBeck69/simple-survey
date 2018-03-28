"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SurveyAdmin_component_1 = require("./SurveyAdmin.component");
var QuestionEdit_component_1 = require("./question-edit/QuestionEdit.component");
var SurveyEdit_component_1 = require("./survey-edit/SurveyEdit.component");
exports.SurveyAdminRouting = [
    { path: "", redirectTo: "survey-admin", pathMatch: "full" },
    { path: "survey-admin", component: SurveyAdmin_component_1.SurveyAdminComponent },
    { path: "survey-edit", component: SurveyEdit_component_1.SurveyEditComponent },
    { path: "question-edit", component: QuestionEdit_component_1.QuestionEditComponent },
];
