import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import 'rxjs/add/operator/map';
import * as firebase from 'firebase/app';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public angularFireAuth: AngularFireAuth
  ) {
   }
  /*
    Login de nuevos usuarios
  */
 loginUser(email:string, pass:string ) {
  return new Promise((resolve, reject) =>{
    this.angularFireAuth.auth.signInWithEmailAndPassword(email , pass).then(
       userData => resolve(userData),
       err => reject(console.log(err))
    )
  });
}
  /*
    Registro de nuevos usuarios
  */
  registerUser(email:string, pass:string ) {
    return new Promise((resolve, reject) =>{
      this.angularFireAuth.auth.createUserWithEmailAndPassword(email , pass).then(
         userData => resolve(userData),
         err => reject(console.log(err))
      )
    });
  }

  /*
    Comprobar si el usuario esta loggeado
  */

  getAuth () {
    return this.angularFireAuth.authState.map( auth => auth);
  }

 /*
  */
  logout (){
    return this.angularFireAuth.auth.signOut();
  }
}
