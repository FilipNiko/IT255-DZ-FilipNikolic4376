import { createReducer, on, ActionReducer, INIT, UPDATE } from '@ngrx/store';
import { Let } from 'src/app/let/let.model';
import { dodajRezervaciju, izbrisiRezervaciju } from './letovi.actions';

export const pocetneRezervacije: Let[] = [];

export const letoviReducer = createReducer(
    pocetneRezervacije,
    
    on(dodajRezervaciju, (rezervacije, unos) => {
        const rezervacijeClone: Let[] = JSON.parse(JSON.stringify(rezervacije));
        rezervacijeClone.push(unos);
        return rezervacijeClone;
      }),

      on(izbrisiRezervaciju, (rezervacije, unos) => {
        const rezervacijeClone: Let[] = JSON.parse(JSON.stringify(rezervacije));
        const found = rezervacijeClone.find(u => u.id == unos.id);
        if (found) {
            rezervacijeClone.splice(rezervacijeClone.indexOf(found), 1)
        }
        return rezervacijeClone;
      })
)


export const metaReducerLocalStorage = (reducer: ActionReducer<any>): ActionReducer<any> => {
  return (state, action) => {
    if (action.type === INIT || action.type == UPDATE) {
      const storageValue = localStorage.getItem("state");
      if (storageValue) {
        try {
          return JSON.parse(storageValue);
        } catch {
          localStorage.removeItem("state");
        }
      }
    }
    const nextState = reducer(state, action);
    localStorage.setItem("state", JSON.stringify(nextState));
    return nextState;
  };
}