import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { CopyService } from "../../services/copy.service";

@Component({
    selector: "survey-edit",
    templateUrl: "survey-edit.html"
})
export class SurveyEditComponent {
    public copy: any;

    constructor(
        private copyService: CopyService,
        private router: Router,

    ) {
        this.copy = this.copyService.Copy.SurveyAdmin;

    }

    public AddQuestion(): void {
        this.router.navigate(["/assessment", "scenario"]);

    }
}