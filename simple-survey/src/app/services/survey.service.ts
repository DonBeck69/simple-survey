import {Injectable} from "@angular/core";
import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import * as moment from "moment/min/moment.min";
import { AppConfig } from "../app.config.service";
import { Survey } from "../models/Survey";

@Injectable()

export class SurveyService {


  constructor(
      private http: HttpClient,
      private appConfig: AppConfig
  ) {}

  // settings in app.config.ts
  private resultsApiUrl = this.appConfig.apiUrl + "api/Results/";
  private assessmentApiUrl = this.appConfig.apiUrl + "api/Assessment/";
  private headers: HttpHeaders = new HttpHeaders({ "Content-Type": "application/json" });


  public PostAssessment(survey: Survey): Promise<number> {
    if (survey.Created === undefined) {
        survey.Created = moment.utc().toDate();
    }

    return this.http.put<string>(this.assessmentApiUrl, JSON.stringify(survey), { headers: this.headers })
        .toPromise()
        .then(response => {
            survey.SurveyId = parseInt(response, 10);
        })
        .catch(this.handleError);
  }

  private handleError(error: Response): Promise<any> {
    console.error(error); // for demo purposes only
    return Promise.reject(error);
}
/*
  //post assessment to api to generate results
  public PostResults(assessment: Assessment): Promise<Results> {
      return this.http.post<Results>(this.resultsApiUrl, JSON.stringify(assessment), { headers: this.headers })
          .toPromise()
          .then(response => {
              this.Results = response;
              return this.Results;
          })
          .catch(this.handleError);
  }

  public getAssessmentById(id){
      const getUrl = this.assessmentApiUrl + id;
      return this.http.get<Assessment>(getUrl)
        .toPromise()
        .then(response => {
            let assessment = response;
            return(assessment);
        })
        .catch(this.handleError);
  }

  public setStorage(){
      sessionStorage.setItem("Assessment",  JSON.stringify(this.Assessment));
  }

  public getStorage(nav){
      if(nav){ //pass in boolean to reset the navigation. On employees page, no need to reset naviagtion since they are starting at 0
          this.sortNav();
      }
      let storAssessment: Assessment = JSON.parse(sessionStorage.getItem("Assessment"));
      return storAssessment;
  }

  public setPage(page){
      sessionStorage.setItem("CurrentPage", page);
  }



  public clearStorage(){
      sessionStorage.clear();
  }

*/

}
