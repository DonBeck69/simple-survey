import { Component, OnInit } from "@angular/core";
import { CopyService } from "../services/copy.service";
import { Router} from "@angular/router";
import { UserService } from "./../services/user.service";
import { User, Data } from "./../models/UserData";


@Component({
    selector: "user",
    templateUrl: "./user.html"
})


export class UserComponent {
    public _user: User;
    public _userService: UserService;

    constructor(
        private copyService: CopyService,
        private router: Router,
        private userService: UserService
    ) {
        this._userService = userService;
        this._user = userService.User;

    }

    public SaveUser(): void {
        console.log(this._user);
        // this._userService.PostUser
    }


}
