import { SignupUpPageComponent } from './signup-up-page/signup-up-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {path:"login", component:LoginPageComponent},
  {path:"signUp", component:SignupUpPageComponent},
  {path:"home", component:HomeComponent},
  {path:"", redirectTo:"login", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
