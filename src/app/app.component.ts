import { Component } from '@angular/core';
import { Let } from './let/let.model';
import { CrudServiceService } from './services/crud-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { formatDate } from '@angular/common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  letovi: Let[];

  forma: FormGroup;
  ponuda: boolean = true;
  preporuka: boolean = false;
  oNama: boolean = false;
  id:number;

  constructor(private crudService: CrudServiceService, fb: FormBuilder) {

    this.getAllFlights();

    this.forma = fb.group({
      "aerodrom": ['', Validators.required],
      "sifraLeta": ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(4)])],
      "destinacija": ['', Validators.required],
      "polazak": ['', Validators.required],
      "dolazak": ['', Validators.required],
      "biznisKlasa": [null],
      "gratisHrana": [null],
      "direktanLet": [null]
    })
  }


  getAllFlights() {
    this.crudService.getFlights().subscribe((data) => {
      this.letovi = data;
    })
  }

  dodajLet(leet: Let): void {

    this.crudService.postFlight(leet).subscribe((data) => {
      this.letovi.unshift(data);
    })
  }

  deleteFlight(leet: Let) {
    this.crudService.deleteFlight(leet.id).subscribe((data) => {
      this._removePostFromList(leet.id);
      alert("Let je obrisan sa servera");
    })
  }

  private _removePostFromList(id: number) {
    let ind = this.letovi.findIndex(leet => leet.id == id);
    this.letovi.splice(ind, 1);
  }

  updateFlight(leet: Let){
      this.forma.controls['aerodrom'].setValue(leet.aerodrom);
      this.forma.controls['sifraLeta'].setValue(leet.sifra);
      this.forma.controls['destinacija'].setValue(leet.destinacija);
      this.forma.controls['biznisKlasa'].setValue(leet.biznisKlasa);
      this.forma.controls['gratisHrana'].setValue(leet.gratisHrana);
      this.forma.controls['direktanLet'].setValue(leet.direktanLet);
      this.id=leet.id;
  }

  izmeniLet(){
    console.log("Pera");
    let aerodrom = this.forma.get("aerodrom")?.value;
    let sifraLeta = this.forma.get("sifraLeta")?.value;
    let destinacija = this.forma.get("destinacija")?.value;
    let polazak = this.forma.get("polazak")?.value;
    let dolazak = this.forma.get("dolazak")?.value;
    let biznisKlasa = this.forma.get("biznisKlasa")?.value;
    let gratisHrana = this.forma.get("gratisHrana")?.value;
    let direktanLet = this.forma.get("direktanLet")?.value;
    if (biznisKlasa === null) {
      biznisKlasa = false;
    }
    if (gratisHrana === null) {
      gratisHrana = false;
    }
    if (direktanLet === null) {
      direktanLet = false;
    }

    let leet = new Let(aerodrom, sifraLeta, destinacija, polazak, dolazak, biznisKlasa, gratisHrana, direktanLet);

    this.crudService.updateFlight(leet, this.id).subscribe(res=>{
      alert("Uspešna izmena!")
      let ref = document.getElementById('cancel');
      ref?.click();
      this.forma.reset();
      this.getAllFlights();
    })
  
  }


  prikaziPonuda() {
    this.ponuda = true;
    this.preporuka = false;
    this.oNama = false;
  }

  prikaziPreporuka() {
    this.ponuda = false;
    this.preporuka = true;
    this.oNama = false;
  }

  prikaziONama() {
    this.ponuda = false;
    this.preporuka = false;
    this.oNama = true;
  }
}
