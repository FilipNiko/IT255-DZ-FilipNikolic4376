import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectSveRezervacije } from '../state/letovi/letovi.selector';
import { Observable } from 'rxjs';
import { Let } from '../let/let.model';
import { izbrisiRezervaciju } from '../state/letovi/letovi.actions';

@Component({
  selector: 'app-rezervacije',
  templateUrl: './rezervacije.component.html',
  styleUrls: ['./rezervacije.component.scss']
})
export class RezervacijeComponent {

  rezervacijeUnosi$: Observable<any>;

  constructor(private store: Store){
    this.rezervacijeUnosi$ = store.select(selectSveRezervacije);
  }

  izbrisiRezervaciju(leet:Let){
    this.store.dispatch(izbrisiRezervaciju(leet))
  }

}
