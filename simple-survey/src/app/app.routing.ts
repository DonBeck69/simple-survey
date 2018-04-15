import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

import { WelcomeComponent } from "./welcome/welcome.component";
import { SurveyComponent } from "./survey/survey.component";
import { SurveyAdminComponent } from "./survey-admin/SurveyAdmin.component";
import { UserComponent } from "./user/User.component";


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
        component: SurveyAdminComponent
    },
    {
        path: "user",
        component: UserComponent
    }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
