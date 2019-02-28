import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { CookiesService } from "../../services/cookies.service";

import { Router } from "@angular/router";


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public userLogin: boolean;
  public username: string;
  public useremail: string;

  constructor(
    public authService: AuthService,
    public router: Router,
    public cookies: CookiesService
  ) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(
      auth=>{
        if (auth) {
          this.userLogin = true;
          this.username = auth.displayName;
          this.useremail = auth.email;
        }else{
          this.userLogin = false;
        }
      }
    )
  }

  logout() {
    this.authService.logout();
    this.cookies.destroyUserCookies();
    this.router.navigate(['/home'])
  }


}
