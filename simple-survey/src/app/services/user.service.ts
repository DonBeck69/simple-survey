import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import * as moment from "moment/min/moment.min";
import { AppConfig } from "../app.config.service";
import { UserData } from "../models/UserData";
import { Address } from "../models/Address";

@Injectable()

export class UserService {
    constructor(
        private http: HttpClient,
        private appConfig: AppConfig
    ) {}

    private userDataApiUrl = this.appConfig.apiUrl + "api/UserData/";
    // private assessmentApiUrl = this.appConfig.apiUrl + "api/Assessment/";
    private headers: HttpHeaders = new HttpHeaders({ "Content-Type": "application/json" });

    public GetFredTheMan(UserDataId: number): UserData {
        return new UserData({
            UserDataId: null,
            FirstName: "Fred",
            LastName: "Theman",
            Email: "Fred@Theman.qrk",
            Address: new Address({
                ApartmentNumber: "1",
                City: "Fredsville",
                Code: "F1234",
                Country:"USA",
                Region: "Washington",
                StreetName: "Theman St",
                StreetNumber: "1"
            })
        });
    }

    public PostUser(User: UserData): Promise<number> {
        if (User.Created === undefined) {
            User.Created = moment.utc().toDate();
        }

        User.Modified.push(moment.utc().toDate());

        return this.http.put<string>(this.userDataApiUrl, JSON.stringify(User), { headers: this.headers })
        .toPromise()
        .then(response => {
            User.UserDataId = parseInt(response, 10);
        })
        .catch(this.handleError);
    }

    private handleError(error: Response): Promise<any> {
        // console.error(error);
        return Promise.reject(error);
        }
}