import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-tabs',
  templateUrl: './nav-tabs.component.html',
  styleUrls: ['./nav-tabs.component.scss']
})
export class NavTabsComponent {



  aktivno :string = "ponuda";
  

  ponudaKliknuto(){
    this.aktivno = "ponuda";
  }

  preporukaKliknuto(){
    this.aktivno = "preporuka";
  }

  oNamaKliknuto(){

    this.aktivno = "oNama";
  }

  cenaKliknuto(){

    this.aktivno = "cena";
  }



}
