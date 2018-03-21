import { NgModule} from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { SurveyAdminComponent } from "./SurveyAdmin.component";
import { QuestionEditComponent } from "./question-edit/QuestionEdit.component";
import { SurveyEditComponent } from "./survey-edit/SurveyEdit.component";

@NgModule({
    declarations: [
        SurveyAdminComponent,
        QuestionEditComponent,
        SurveyEditComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    providers: [
        /*
        CapabilitiesService,
        PersonasService,
        AssessmentService,
        HeaderService,
        PdfService
        */
    ]
})

export class SurveyAdminModule {

}
