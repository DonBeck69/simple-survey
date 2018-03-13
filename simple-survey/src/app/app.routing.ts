import { RouterModule, Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { SurveyComponent } from './survey/survey.component';
import { SurveyRouting } from './survey/survey.routing';

const APP_ROUTES: Routes = [
    {
        path: '',
        component: WelcomeComponent
    },
    {
        path: 'assessment',
        component: SurveyComponent,
        children: SurveyRouting
    }
];

export const AppRouting = RouterModule.forRoot(APP_ROUTES);
