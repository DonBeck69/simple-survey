import { Component, OnInit } from "@angular/core";
import { CopyService } from "../../services/copy.service";

@Component({
    selector: "survey-edit",
    templateUrl: "survey-edit.html"
})
export class SurveyEditComponent {
    public copy: any;

    constructor(
        private copyService: CopyService,
    ) {
        this.copy = this.copyService.Copy.SurveyAdmin;
    }
}