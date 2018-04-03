import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import "rxjs/Rx";
import {Observable} from "rxjs";
import * as Copy from "../../data/copy.json";
import * as WelcomeCopy from "../../data/Welcome.json";
import { AppConfig } from "../app.config.service";

@Injectable()

export class CopyService {
    constructor(
      private http: HttpClient,
      private appConfig: AppConfig
    ) {
    this.Copy = Copy;
    this.WelcomeCopy = WelcomeCopy;

  }

  // private appConfig: AppConfig;

  // settings in app.config.ts
  // private getDeviceUrl = this.appConfig.apiUrl + "api/Device/";
  public Copy: any;
  public WelcomeCopy: any;
  public SurveyCopy: any;

  /*
  public getDevices(): Promise<any> {
      return this.http.get<any>(this.getDeviceUrl)
        .toPromise()
          .then(res => {
              this.DeviceCopy = res;
              return this.DeviceCopy;
          })
          .catch((error: Response) => Observable.throw(error.json()));
  }
*/
  private handleError(error: any): Promise<any> {
    console.error("An error occurred", error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

}
