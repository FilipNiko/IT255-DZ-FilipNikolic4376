import { Component } from '@angular/core';
import {Let} from './let/let.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  letovi: Let[];

  constructor(){
    this.letovi = [
      new Let ("Nikola Tesla", "B123", "Pariz", "27/11/2022 12:15", "27/11/2022 15:15")
    ];
  }
  

  dodajLet(aerodrom:HTMLInputElement, sifraLeta:HTMLInputElement, destinacija:HTMLInputElement, polazak:HTMLInputElement, dolazak:HTMLInputElement): boolean {
    
    this.letovi.push(new Let(aerodrom.value, sifraLeta.value, destinacija.value, polazak.value, dolazak.value))
    return false;
  }
}
