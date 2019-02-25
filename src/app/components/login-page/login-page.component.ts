import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import Swal  from 'sweetalert2';

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
        this.formMessage("success","access granted");
        this.router.navigate(['/userLogged']);
      })
      .catch((err)=>{
        console.log(err);
        this.formMessage("error","login failed");
        this.router.navigate(['/login']);
      });
  }

  formMessage( messageType, messageText) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'center-left',
      showConfirmButton: false,
      timer: 3000
    });
    
    Toast.fire({
      type: messageType,
      title: messageText
    })
  }

}
