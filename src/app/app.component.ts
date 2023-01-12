import { Component } from '@angular/core';
import { Let } from './let/let.model';
import { CrudServiceService } from './services/crud-service.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataServiceService } from './services/data-service.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectBrojRezervacija } from './state/letovi/letovi.selector';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  letovi: Let[];

  forma: FormGroup;
  id: number;

  brojRezervacija$: Observable<number>;

  constructor(private crudService: CrudServiceService, fb: FormBuilder, private dataService: DataServiceService, private store: Store) {

    this.brojRezervacija$ = store.select(selectBrojRezervacija);
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

  ngOnInit() {
    this.getAllFlights();
    this.dataService.currentMEssage.subscribe(letovi => this.letovi = letovi);
  }


  newMessage() {
    this.dataService.changeMessage(this.letovi);
  }


  getAllFlights() {
    this.crudService.getFlights().subscribe((data) => {
      this.letovi = data,
      this.newMessage();
    })

  }

  dodajLet(leet: Let): void {

    this.crudService.postFlight(leet).subscribe((data) => {
      this.letovi.unshift(data);
    })
  }

 
}
