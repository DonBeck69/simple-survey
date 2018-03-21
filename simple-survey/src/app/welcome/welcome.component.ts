import { Component, OnInit } from "@angular/core";
import { CopyService } from "../services/copy.service";
import { Router} from "@angular/router";


@Component({
    selector: "welcome",
    templateUrl: "./welcome.html"
})


export class WelcomeComponent implements OnInit {

    constructor(
        private copyService: CopyService,
        private router: Router
    ) {}
    public banner: any;

    ngOnInit(): void {
        this.banner = this.copyService.WelcomeCopy.Banner;
    }

    newAssessment(): void {
        this.router.navigate(["/assessment", "employees"]);
    }

}
