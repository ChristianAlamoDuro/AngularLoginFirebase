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
    public authService: AuthService,
    public router: Router
  ) { 

  }

  ngOnInit() {
  }

  /*
    Realizamos un loggin si el login es correcto guardamos en una variable del servicio el email del usuario
  */
  loginUser(form){
    this.authService.loginUser(this.email, this.password)
    .then(
      (res) =>{
        this.formMessage("success","access granted",false,1500);
        document.cookie = "userEmail="+this.email+"; max-age=3600; path=/";
        this.router.navigate(['/userLogged']);
      })
      .catch((err)=>{
        console.log(err);
        this.formMessage("error","login failed",true,0);
        form.reset();
      });
  }

  formMessage( messageType, messageText, messageButton, messageTime) {
    Swal.fire({
      position: 'top-end',
      type: messageType,
      title: messageText,
      showConfirmButton: messageButton,
      timer: messageTime
    })
  }
  

}
