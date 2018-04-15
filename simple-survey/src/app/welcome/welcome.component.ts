import { Component, OnInit } from "@angular/core";
import { CopyService } from "../services/copy.service";
import { Router} from "@angular/router";


@Component({
    selector: "welcome",
    templateUrl: "./welcome.html"
})


export class WelcomeComponent {

    constructor(
        private copyService: CopyService,
        private router: Router
    ) {}



}
