import { Component, OnInit } from "@angular/core";
import { CopyService } from "../services/copy.service";
import { Router} from "@angular/router";


@Component({
    selector: "serveyadmin",
    templateUrl: "./survey-admin.html"
})


export class SurveyAdminComponent {

    constructor(
        private copyService: CopyService,
        private router: Router
    ) {}



}
