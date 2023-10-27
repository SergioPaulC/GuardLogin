import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  //constructor
  constructor(private _ar: ActivatedRoute) {
    this.recoupData();
  }

  //mis metodos
  recoupData() {
    //utilizando snapshot
    const user = this._ar.snapshot.params;
    console.log(user['email']);
    console.log(user['password']);
  }

  //encriptado de contraseña

  // consiste en sustituir cada letra del abecedario por una letra desplazada
  //  un número determinado de posiciones (clave). 
  // Por ejemplo, si desplazamos 1 posición, 
  // reemplazaríamos la letra A con la B, la B con la C, y así sucesivamente hasta sustituir la Z por la A. En este ejemplo la «clave» es 1 porque hemos desplazado 1 posición.
  // Abecedario: ABCDEFGHIJKLMNÑOPQRSTUVWXYZ
  // Cifrado con clave 1: BCDEFGHIJKLMNÑOPQRSTUVWXYZA

  text: string = "hola que tal ";
  abecedario: string = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
  cifrado: string = ""

  encrypt() {
    for (let i = 0; i < this.text.length-1; i++) {
      // buscar que posicion tiene letra de texto
      this.text.indexOf(this.text[i]); 
      console.log("letra: " + this.text[i]);

      // buscar posicion del caractar dentro de abecedario + 1

 

      // agregar a cifrado 




      // console.log("Iteracción: " + this.text[i]);





    }

  }

}
