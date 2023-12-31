import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { authloginGuard } from './guards/authlogin.guard';

const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent,canActivate: [authloginGuard] } ,
  { path: 'home/:user', component: HomeComponent, canActivate:[authloginGuard] },
  { path: '**', component: LoginComponent }, //con ** cualquier otra ruta, es un wilcard
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
