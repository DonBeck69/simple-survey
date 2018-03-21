import { Component, OnInit } from "@angular/core";
import { CopyService } from "../../services/copy.service";

@Component({
    selector: "question-edit",
    templateUrl: "question-edit.html"
})
export class QuestionEditComponent {
    public copy: any;

    constructor(
        private copyService: CopyService,
    ) {
        this.copy = this.copyService.Copy.SurveyAdmin;
    }
}