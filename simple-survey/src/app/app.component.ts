import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";


@Component({
    selector: "my-app",
    templateUrl: "./app.component.html",
})
export class AppComponent {
    private name: string = "Angular";
    public logoPath: string;

    constructor(
        private router: Router,
        private domSanitizer: DomSanitizer
    ) {

    }


}
