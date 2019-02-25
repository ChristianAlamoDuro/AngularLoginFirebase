import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomePageComponent} from './components/home-page/home-page.component';
import {LoginPageComponent} from './components/login-page/login-page.component';
import {RegisterPageComponent} from './components/register-page/register-page.component';
import {UserPageComponent} from './components/user-page/user-page.component';
import {NotFoundPageComponent} from './components/not-found-page/not-found-page.component'

import { AuthGuard } from "./guards/auth.guard";


const routes: Routes = [
  {path: '' , component: HomePageComponent},
  {path: 'home' , component: HomePageComponent},
  {path: 'login' , component: LoginPageComponent},
  {path: 'register' , component: RegisterPageComponent},
  {path: 'userLogged' , component:UserPageComponent, canActivate: [AuthGuard]},
  {path: '**' , component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
  
})
export class AppRoutingModule { }
