import { createAction, props } from '@ngrx/store';
import { Let } from 'src/app/let/let.model';

export const dodajRezervaciju = createAction('Dodaj Rezervaciju', props<Let>());
export const izbrisiRezervaciju = createAction('Izbrisi Rezervaciju', props<Let>());