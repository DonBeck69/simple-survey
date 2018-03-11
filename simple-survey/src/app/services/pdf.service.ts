import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

import 'rxjs/Rx';
//import {Observable} from 'rxjs';
//import { Capabilities } from '../objects/Capabilities';
//import * as Css from '../../../styles.css';
//import * as WelcomeCopy from '../../data/Welcome.json';
//import { ArrayBuffer } from '@angular/http/src/static_request';
import * as moment from 'moment/min/moment.min';
import { Observable } from 'rxjs/Observable';
import * as fileSaver from 'file-saver/FileSaver.min';

@Injectable()
export class PdfService {

  private PutPdfUrl: string = 'http://40.83.148.236:8081/JiraPdfGenerator/';
  //private PutPdfUrl: string = 'http://localhost:8081/JiraPdfGenerator/';

  private GetCssUrl: string = '/styles.css';
  private cssHeaders: HttpHeaders = new HttpHeaders({ 'Content-Type': 'text/css' });
  private httpHeaders: HttpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  //private responseType = new 
  
  //public Css: string;

  constructor(private http: HttpClient) {
  }



  public PostPdf(element: HTMLElement, hight: number, width: number, pdfName: string): void {
//Observable<ArrayBuffer>
    this.http.get(this.GetCssUrl, { headers: this.cssHeaders, observe: 'response', responseType: 'text' })
    .toPromise()
      .then(cssText => {
          //this.Css = res;
          //let width: number = 1903;//element.offsetWidth;
          //let hight: number = 2144;//element.offsetHeight;
          //let width: number = element.offsetWidth;//.offsetWidth;
          //let hight: number = element.offsetHeight;
          let html: HTMLElement = document.createElement("html");
          let head: HTMLElement = document.createElement("head");
          let body: HTMLElement = document.createElement("body");
          let style: HTMLElement = document.createElement("style");
          style.setAttribute("type", "text/css");
          style.appendChild(document.createTextNode(cssText.body));
          head.appendChild(style)
          html.appendChild(head);
          body.appendChild(document.createTextNode(element.outerHTML));
          html.appendChild(body);
          let outerHTML: string = html.outerHTML;
          outerHTML = outerHTML.replace("&lt;", "<");
          outerHTML = outerHTML.replace("&gt;", ">");
          let finalHtmlString = outerHTML.replace(/(\r\n|\n|\r)/gm, "");
          let data = {
              html: finalHtmlString,
              width: width,
              hight: hight
          };
      
      //responseType
          this.http.post(this.PutPdfUrl, JSON.stringify(data), { headers: this.httpHeaders, responseType: 'arraybuffer' } )
          .toPromise()
          .then(response => {
              //convert byte array back to pdf 
              let file: Blob = new Blob([response], { type: 'application/pdf' });
              //add date to saved pdf name
              let todaysDate: Date = new Date();
              let todaysDateFormat: string = "_" + moment(todaysDate).format("MM/DD/YYYY");
              //saveAs is a function of JS library fileSaver
              fileSaver.saveAs(file, pdfName + todaysDateFormat + '.pdf');
          })
          .catch(this.handleError);
      })
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    //console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
