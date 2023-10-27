import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [

  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'home/:email/:password', component: HomeComponent },
  { path: '**', component: LoginComponent }, //ccon ** cualquier otra ruta, es un wilcard

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
