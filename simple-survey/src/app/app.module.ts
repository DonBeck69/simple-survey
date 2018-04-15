import { NgModule, Directive } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule }   from "@angular/forms";

import { SurveyAdminComponent } from "./survey-admin/SurveyAdmin.component";
import { AppRouting } from "./app.routing";
import { AppComponent } from "./app.component";
import { WelcomeComponent } from "./welcome/welcome.component";
import { UserComponent } from "./user/User.component";
import { SurveyComponent } from "./survey/survey.component";
import { ParticipantComponent } from "./survey/participant/participant.component";
import { UserService } from "./services/user.service";
import { SurveyService } from "./services/survey.service";
import { CopyService } from "./services/copy.service";
import { AppConfig } from "./app.config.service";


@NgModule({
    declarations: [
        AppComponent,
        SurveyComponent,
        SurveyAdminComponent,
        WelcomeComponent,
        ParticipantComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AppRouting
    ],
    providers: [
        CopyService,
        SurveyService,
        UserService,
        AppConfig
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
