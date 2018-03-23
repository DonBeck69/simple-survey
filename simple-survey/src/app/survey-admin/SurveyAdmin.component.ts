import { Component, OnInit } from "@angular/core";
import { CopyService } from "../services/copy.service";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    selector: "survey-admin",
    templateUrl: "survey-admin.html"
})
export class SurveyAdminComponent {
    public copy: any;

    constructor(
        private copyService: CopyService,
        private router: Router,

    ) {
        this.copy = this.copyService.Copy.SurveyAdmin;
    }

    public AddQuestion(){
        this.router.navigate(['/assessment', 'scenario']);

    }
}