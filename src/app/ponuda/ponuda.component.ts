import { Component } from '@angular/core';
import { Let } from '../let/let.model';
import { DataServiceService } from '../services/data-service.service';
import { CrudServiceService } from '../services/crud-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { dodajRezervaciju } from '../state/letovi/letovi.actions';


@Component({
  selector: 'app-ponuda',
  templateUrl: './ponuda.component.html',
  styleUrls: ['./ponuda.component.scss']
})
export class PonudaComponent {

  forma: FormGroup;
  id: number;
  listaLetova: Let[];

  constructor(private dataService: DataServiceService, private crudService: CrudServiceService, fb: FormBuilder, private store: Store) {

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

  ngOnInit() {
    this.ucitajLetove();
  }
  //DZ12
  ucitajLetove() {
    this.dataService.currentMEssage.subscribe(listaLetova => this.listaLetova = listaLetova);
  }



  deleteFlight(leet: Let) {
    this.crudService.deleteFlight(leet.id).subscribe((data) => {
      this._removePostFromList(leet.id);
      alert("Let je obrisan sa servera");

    })
  }

  private _removePostFromList(id: number) {
    let ind = this.listaLetova.findIndex(leet => leet.id == id);
    this.listaLetova.splice(ind, 1);
  }

  updateFlight(leet: Let) {
    this.forma.controls['aerodrom'].setValue(leet.aerodrom);
    this.forma.controls['sifraLeta'].setValue(leet.sifra);
    this.forma.controls['destinacija'].setValue(leet.destinacija);
    this.forma.controls['biznisKlasa'].setValue(leet.biznisKlasa);
    this.forma.controls['gratisHrana'].setValue(leet.gratisHrana);
    this.forma.controls['direktanLet'].setValue(leet.direktanLet);
    this.id = leet.id;
  }

  izmeniLet() {
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

    this.crudService.updateFlight(leet, this.id).subscribe(res => {
      alert("Uspešna izmena!")
      let ref = document.getElementById('cancel');
      ref?.click();
      this.forma.reset();
      this.getAllFlights();
    })
  }
  newMessage() {
    this.dataService.changeMessage(this.listaLetova);
  }

  getAllFlights() {
    this.crudService.getFlights().subscribe((data) => {
      this.listaLetova = data;
      this.newMessage();
    })

  }


  rezervisiSediste(leet: Let) {
    this.store.dispatch(dodajRezervaciju(leet));
  }

}

