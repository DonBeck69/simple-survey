import { Routes, RouterModule } from "@angular/router";
import { SurveyAdminComponent } from "./SurveyAdmin.component";
import { QuestionEditComponent } from "./question-edit/QuestionEdit.component";
import { SurveyEditComponent } from "./survey-edit/SurveyEdit.component";



export const SurveyAdminRouting : Routes = [
    { path: "", redirectTo: "employees", pathMatch: "full" },
    { path: "survey-admin", component: SurveyAdminComponent },
    { path: "survey-edit", component: SurveyEditComponent },
    { path: "question-edit", component: QuestionEditComponent },
];