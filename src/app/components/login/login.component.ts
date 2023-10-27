import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

//variables
interface User {
  email: string;
  password: string;
  isLogged: boolean;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  currentUser?: User;
  userAdmin: User = {
    email: 'admin@core.net',
    password: '1234',
    isLogged: true
  }


  constructor(private _route: Router) {

  }
  // mis metodos
  sendLog(miform: NgForm) {

    //inicializamos  currentUser con valores email y passw, con los values que vienen del form
    this.currentUser = {
      email: miform.value.email,
      password: miform.value.password,
      isLogged: false
    }
    if (this.currentUser.email === this.userAdmin.email && this.currentUser.password === this.userAdmin.password) {
      this.currentUser.isLogged = true;

      //USANDO NAVIGATE
      if (this.currentUser.isLogged) 
      this._route.navigate(['home',this.currentUser.email, this.currentUser.password])
    }

  }

}
