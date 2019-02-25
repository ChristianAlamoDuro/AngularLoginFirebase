import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import Swal  from 'sweetalert2';
@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  public email: string;
  public password: string;

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  addUser( form ) {
    this.authService.registerUser(this.email, this.password)
      .then((res) => {
        this.formMessage("success", "Count Create", "Thanks for use our web page");
        this.router.navigate(['/userLogged'])
      }).catch((err) => {
        console.log(err);
        this.formMessage("error", "Sorry", "We can't create your count, try again please");
        form.reset();
      });
  }

  formMessage( messageType , messageTitle, messageText) {
    Swal.fire({
      type: messageType,
      title: messageTitle,
      text: messageText
    })
  }
}
