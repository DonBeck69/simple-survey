import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { CopyService } from '../../services/copy.service';
//import { Persona } from '../../objects/Persona';



@Component({
    selector: 'participant',
    templateUrl: './participant.html'
})

export class ParticipantComponent implements OnInit{
    public copy: any;

    constructor(
        private copyService: CopyService,
        private router: Router,
        private route: ActivatedRoute
    ){}

    ngOnInit(){
        this.copy = this.copyService.Copy;
    }

}
