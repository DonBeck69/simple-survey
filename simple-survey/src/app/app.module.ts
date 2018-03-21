import { NgModule, Directive } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule }   from "@angular/forms";


import { SurveyAdminModule } from "./survey-admin/SurveyAdmin.module";
import { AppRouting } from "./app.routing";
import { AppComponent } from "./app.component";
import { SurveyModule } from "./survey/survey.module";
import { WelcomeComponent } from "./welcome/welcome.component";
import { SurveyComponent } from "./survey/survey.component";
import { CopyService } from "./services/copy.service";
import { AppConfig } from "./app.config.service";


@NgModule({
    declarations: [
        AppComponent,
        SurveyComponent,
        WelcomeComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        AppRouting
    ],
    providers: [
        CopyService,
        AppConfig
    ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
