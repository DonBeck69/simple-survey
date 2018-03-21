import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { WelcomeComponent } from "./welcome/welcome.component";
import { SurveyComponent } from "./survey/survey.component";
import { SurveyAdminComponent } from "./survey-admin/SurveyAdmin.component";
import { SurveyAdminRouting } from "./survey-admin/SurveyAdminRouting";

const APP_ROUTES: Routes = [
    {
        path: "",
        component: WelcomeComponent
    },
    {
        path: "survey",
        component: SurveyComponent,
    },
    {
        path: "survey-admin",
        component: SurveyAdminComponent,
        children: SurveyAdminRouting
    }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
