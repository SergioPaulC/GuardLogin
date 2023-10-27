import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { 
  //constructor
  constructor(private _ar:ActivatedRoute){
    this.recoupData();
   }

  //mis metodos
  recoupData(){
    //utilizando snapshot
    const user = this._ar.snapshot.params;
    console.log(user['email']);
    console.log(user['password']);
  }
}
