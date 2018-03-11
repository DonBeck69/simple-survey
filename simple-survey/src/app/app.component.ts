import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

const logo = require( '../assets/ms-logo.svg');
//import * as logo from '../assets/ms-logo.svg';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
    name = 'Angular';
    //public logoPath: SafeUrl;
    public logoPath: string;
    
    constructor(
        private router: Router,
        private domSanitizer: DomSanitizer
    ) {
        //this.logoPath = this.domSanitizer.bypassSecurityTrustUrl(logo);
        this.logoPath = logo;
        //console.log(this.logoPath);

    }

    ngOnInit(){
        this.router.events.subscribe((evt) =>{
            if (!(evt instanceof NavigationEnd)) {
                return
            }
            window.scrollTo(0,0);
        });

    }

    //use doc sanitizer to clean encoded svg image
    public imgUrl(imgUrl) {
        let url: SafeUrl = this.domSanitizer.bypassSecurityTrustUrl(imgUrl);
        return url;
    }
}
