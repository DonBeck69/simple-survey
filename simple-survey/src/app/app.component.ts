import { Component, OnInit } from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { DomSanitizer, SafeUrl } from "@angular/platform-browser";
import { UserService } from "./services/user.service";
import { User, Data } from "./models/UserData";
import { Address } from "./models/Address";

import "./../../node_modules/bootstrap/dist/css/bootstrap.min.css";

@Component({
    selector: "my-app",
    templateUrl: "./app.component.html"
})
export class AppComponent {
    private name: string = "Angular";
    public logoPath: string;
    public _user: User;
    public _userService: UserService;

    constructor(
        private router: Router,
        private domSanitizer: DomSanitizer,
        private userService: UserService
    ) {
        this._user = userService.GetFredTheMan();
        this._userService = userService;

        this._userService.GetUser("3");

    }

    public ShowUser(): void {
        this.router.navigate(["/user"]);
    }


}
