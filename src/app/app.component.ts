import { Component } from '@angular/core';
import {Let} from './let/let.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  letovi: Let[];

  ponuda :boolean=true;
  preporuka :boolean=false;
  oNama : boolean=false;

  constructor(){
    this.letovi = [
      new Let ("Nikola Tesla", "B123", "Pariz", "27/11/2022 12:15", "27/11/2022 15:15"),
      new Let ("Konstantin Veliki", "N523", "Atina", "12/07/2022 17:15", "27/11/2022 19:25"),
      new Let ("Nikola Tesla", "B742", "Rim", "12/07/2022 18:15", "27/11/2022 19:55")
    ];
  }
  

  dodajLet(aerodrom:HTMLInputElement, sifraLeta:HTMLInputElement, destinacija:HTMLInputElement, polazak:HTMLInputElement, dolazak:HTMLInputElement): boolean {
    
    this.letovi.push(new Let(aerodrom.value, sifraLeta.value, destinacija.value, polazak.value, dolazak.value))
    return false;
  }


  prikaziPonuda(){
    this.ponuda=true;
    this.preporuka=false;
    this.oNama=false;
  }

  prikaziPreporuka(){
    this.ponuda=false;
    this.preporuka=true;
    this.oNama=false;
  }

  prikaziONama(){
    this.ponuda=false;
    this.preporuka=false;
    this.oNama=true;
  }
}
