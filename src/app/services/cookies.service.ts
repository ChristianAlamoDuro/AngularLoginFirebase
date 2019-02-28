import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  constructor() { }

  /*
    La pasamos el nombre de una cookie y nos devuelve su valor
  */
  getCookie(cookieName:string) {
    var cook = document.cookie;
    var cookies: Array<string>;
    if (cook.includes(cookieName)) {
      //Quitamos los espacion de la cadena de cookies
      cook = cook.split(" ").join("");
      //Cambiamos los ; por = para hacer un array
      cook = cook.split(";").join("=");
      //Cogemos todos los valores de antes de los = y lo guardamos en un array
      cookies = cook.split("=");
      console.log(cook);
      
      return cookies[cookies.indexOf(cookieName) + 1];
    }
  }

  /*
  Destruye las cookies relacioinadas con la sesion del usuario
    userEmail 
    userName --> Si exisistiese poner aqui para eliminarla
  */
  destroyUserCookies(){
    document.cookie = "userEmail=''; max-age=-1; path=/";
  }
}
