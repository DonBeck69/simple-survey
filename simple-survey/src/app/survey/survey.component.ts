import { Component, OnInit } from "@angular/core";
import { CopyService } from "../services/copy.service";

@Component({
    selector: "survey",
    templateUrl: "survey.html"
})
export class SurveyComponent implements OnInit {

    constructor(
        private copyService: CopyService,
    ) {
        this.copy = this.copyService.Copy.Survey;
    }

    public copy: any;

    ngOnInit(): void {
        // this.copyService.getCopy()
        //    .subscribe((response) => console.log(response) );
    }

}
