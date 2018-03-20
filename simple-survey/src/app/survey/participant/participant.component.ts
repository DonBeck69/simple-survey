import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

import { CopyService } from "../../services/copy.service";



@Component({
    selector: "participant",
    templateUrl: "./participant.html"
})

export class ParticipantComponent {
    public copy: any;

    constructor(
        private copyService: CopyService,
        private router: Router,
        private route: ActivatedRoute
    ) {
        this.copy = this.copyService.Copy;
    }

}
