import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { SurveyComponent } from './survey/survey.component';

const APP_ROUTES: Routes = [
    {
        path: '',
        component: WelcomeComponent
    },
    {
        path: 'assessment',
        component: SurveyComponent,
        //children: AssessmentRouting
    }
];

export const AppRouting = RouterModule.forRoot(APP_ROUTES);
