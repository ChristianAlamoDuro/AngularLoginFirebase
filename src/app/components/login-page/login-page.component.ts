import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  public email:string;
  public password:string;

  constructor(
    public AuthService: AuthService,
    public router: Router
  ) { 

  }

  ngOnInit() {
  }

  loginUser(){
    this.AuthService.loginUser(this.email, this.password)
    .then(
      (res) =>{
        this.router.navigate(['/userLogged']);
      })
      .catch((err)=>{
        console.log(err);
        this.router.navigate(['/login']);
      });
  }

}
