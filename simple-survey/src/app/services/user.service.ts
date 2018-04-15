import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import * as moment from "moment/min/moment.min";
import { AppConfig } from "../app.config.service";
import { User, Data } from "../models/UserData";
import { Address } from "../models/Address";

@Injectable()

export class UserService {
    constructor(
        private http: HttpClient,
        private appConfig: AppConfig
    ) {}

    public User: User;

    private userDataApiUrl = this.appConfig.apiUrl + "api/UserData/";
    // private assessmentApiUrl = this.appConfig.apiUrl + "api/Assessment/";
    private headers: HttpHeaders = new HttpHeaders({ "Content-Type": "application/json" });

    public GetFredTheMan(): User {
        let user: User = new User({
            UserDataId: null,
            Created: null,
            // -Modified: new Array<Date>(), <-- happens in the constructor.
            Data: new Data({
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
            })
        });

        this.User = user;

        return user;
    }

    public GetUser(UserId: string): Promise<User> {
        return this.http.get<User>(this.userDataApiUrl, { headers: this.headers, params: { "id": UserId } })
        .toPromise()
        .then(response => {
            // console.log(response);
            this.User = response;// parseInt(response, 10);
            console.log(this.User);

        })
        .catch(this.handleError);


    }

    public PostUser(user: User): Promise<number> {
        if (user.Created === null) {
            user.Created = moment.utc().toDate();
        }

        user.Modified.push(moment.utc().toDate());

        return this.http.post<number>(this.userDataApiUrl, user, { headers: this.headers })
        .toPromise()
        .then(response => {
            this.User.UserDataId = response;// parseInt(response, 10);
        })
        .catch(this.handleError);
    }

    private handleError(error: Response): Promise<any> {
        console.log(error);
        return Promise.reject(error);
        }
}