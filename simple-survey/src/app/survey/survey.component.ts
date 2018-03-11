import { Component, OnInit } from '@angular/core';
//import { CopyService } from '../services/copy.service';

@Component({
    selector: 'survey',
    templateUrl: 'survey.html'
})
export class SurveyComponent implements OnInit{

    constructor(){}

    ngOnInit(){
        // this.copyService.getCopy()
        //    .subscribe((response) => console.log(response) );
    }

}
