import {Routes, RouterModule} from '@angular/router';
//import {ParticipantComponent} from './participant/participant.component';


export const SurveyRouting : Routes = [
    { path: '', redirectTo: 'participant', pathMatch: 'full' },
    //{ path: 'results', component: ResultsComponent },
];
