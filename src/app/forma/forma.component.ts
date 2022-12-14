import { Component, EventEmitter, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Let } from '../let/let.model';

@Component({
  selector: 'app-forma',
  templateUrl: './forma.component.html',
  styleUrls: ['./forma.component.scss']
})
export class FormaComponent {

  @Output() letEmit: EventEmitter<Let> = new EventEmitter;

  forma: FormGroup;
  biznis: boolean = false;
  hrana: boolean = false;
 


  constructor(fb: FormBuilder) {
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

    this.forma.controls['sifraLeta'].valueChanges.subscribe(
      (value: string) => {
        if(value.length<4 || value.length>4){
          console.log('SifraLeta mora da ima 4 karaktera, trenutna šifra je ' + value);
        }
        
      }
    );
  }



  onSubmit() {
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

    this.letEmit.emit(new Let(aerodrom, sifraLeta, destinacija, polazak, dolazak, biznisKlasa, gratisHrana, direktanLet));

  }

  biznisKlik() {
    this.biznis = !this.biznis;
  }

  hranaKlik() {
    this.hrana = !this.hrana;
  }

}
