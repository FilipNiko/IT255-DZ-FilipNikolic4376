import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Let } from 'src/app/let/let.model';

export const selectSveRezervacije = createSelector(
    createFeatureSelector('rezervacijeUnosi'),
    (state: Let[]) => {
      return state;
    }
  );

  export const selectBrojRezervacija = createSelector(
    createFeatureSelector('rezervacijeUnosi'),
    (state: Let[]) => {
      return state.length;
    }
  );