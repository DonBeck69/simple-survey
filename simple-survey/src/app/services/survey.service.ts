import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
//import 'rxjs/Rx';

//import { Observable } from 'rxjs';
import * as moment from 'moment/min/moment.min';
import { AppConfig } from '../app.config.service';

@Injectable()

export class SurveyService {

  //private headers: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  public Assessment: Assessment;
  //public Results: Results;
  //public fromAdmin = false;
  private navLinks = this.headerService.navLinks;

  constructor(
      private http: HttpClient,
      private headerService: HeaderService,
      private appConfig: AppConfig
  ) {}

  //settings in app.config.ts
  private resultsApiUrl = this.appConfig.apiUrl + 'api/Results/';
  private assessmentApiUrl = this.appConfig.apiUrl + 'api/Assessment/';

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

  public PostAssessment(assessment: Assessment): Promise<number> {
    if (assessment.CreatedDate === undefined){
        assessment.CreatedDate = moment.utc().toDate();
    }
    assessment.ModifiedDate = moment.utc().toDate();
    this.Assessment.CreatedDate = assessment.CreatedDate;
    this.Assessment.ModifiedDate = assessment.ModifiedDate;

    return this.http.put<string>(this.assessmentApiUrl, JSON.stringify(assessment), { headers: this.headers })
        .toPromise()
        .then(response => {
            this.Assessment.GuidId = response;
            //return this.Results;
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
      sessionStorage.setItem('Assessment',  JSON.stringify(this.Assessment));
  }

  public getStorage(nav){
      if(nav){ //pass in boolean to reset the navigation. On employees page, no need to reset naviagtion since they are starting at 0
          this.sortNav();
      }
      let storAssessment: Assessment = JSON.parse(sessionStorage.getItem('Assessment'));
      return storAssessment;
  }

  public setPage(page){
      sessionStorage.setItem('CurrentPage', page);
  }

  public sortNav(){
      const currentPage = sessionStorage.getItem('CurrentPage');
      let links = this.headerService.navLinks;
      for(var i = 0;i < links.length; i++ ){
          links[i].active = false;
          links[i].visited = true;
          if(links[i].url === currentPage){
              links[i].active = true;
              break;
          }
      }
  }

  public clearStorage(){
      sessionStorage.clear();
  }

  public resetAssessment(){
      this.Assessment = new Assessment();
      this.fromAdmin = false;
      let links = this.headerService.navLinks;
      for(var i = 0;i < links.length; i++ ){
          links[i].active = false;
          links[i].visited = false;
      }
      links[0].active = true;
      sessionStorage.clear();
  }
  private handleError(error: Response): Promise<any> {
      console.error(error); // for demo purposes only
      return Promise.reject(error);
  }
}
