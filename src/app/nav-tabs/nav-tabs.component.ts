import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nav-tabs',
  templateUrl: './nav-tabs.component.html',
  styleUrls: ['./nav-tabs.component.scss']
})
export class NavTabsComponent {

  @Output() ponudaEmitovanje: EventEmitter<any>  = new EventEmitter();
  @Output() preporukaEmitovanje: EventEmitter<any>  = new EventEmitter();
  @Output() oNamaEmitovanje: EventEmitter<any>  = new EventEmitter();

  aktivno :string = "ponuda";

  ponudaKliknuto(){
    this.ponudaEmitovanje.emit();
    this.aktivno = "ponuda";
  }

  preporukaKliknuto(){
    this.preporukaEmitovanje.emit();
    this.aktivno = "preporuka";
  }

  oNamaKliknuto(){
    this.oNamaEmitovanje.emit();
    this.aktivno = "oNama";
  }



}
