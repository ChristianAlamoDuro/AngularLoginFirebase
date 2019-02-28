import { Component, OnInit, Input } from '@angular/core';
import { CookiesService } from "../../services/cookies.service";

import { log } from 'util';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  public userEmail: string;
  constructor(
    private cookieService: CookiesService
  ) { 
    this.userEmail = this.cookieService.getCookie("userEmail");
  }

  ngOnInit() {    
    console.log(this.cookieService.getCookie("userEmail"));
    
  }


}
