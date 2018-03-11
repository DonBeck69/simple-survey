import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NgxCarouselModule } from 'ngx-carousel';
import 'hammerjs';

import { ParticipantComponent } from './participant/participant.component';
//import { ResultsComponent } from './results/results.component';

@NgModule({
    declarations: [
        ParticipantComponent
        //EmployeesComponent,
        //MaturityComponent,
        //CapabilitiesComponent,
        //ResultsComponent,
        //ScenarioComponent,
        //RadarComponent
        //PrintResultsComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        ChartsModule,
        NgxCarouselModule
    ],
    providers: [
        //CapabilitiesService,
        //PersonasService,
        //AssessmentService,
        //HeaderService,
        //PdfService
    ]
})

export class SurveyModule {

}
