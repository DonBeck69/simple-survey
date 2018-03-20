import { Component, OnInit } from "@angular/core";
import { CopyService } from "../services/copy.service";

@Component({
    selector: "survey",
    templateUrl: "survey.html"
})
export class SurveyAdminComponent {
    public copy: any;

    constructor(
        private copyService: CopyService,
    ) {
        this.copy = this.copyService.Copy.SurveyAdmin;
    }



}