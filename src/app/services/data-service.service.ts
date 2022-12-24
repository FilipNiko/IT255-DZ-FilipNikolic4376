import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Let } from '../let/let.model';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private messageSource = new BehaviorSubject<Let[]>([]);
  currentMEssage=  this.messageSource.asObservable();

  constructor() { }

  

  changeMessage(letovi:Let[]){
    this.messageSource.next(letovi);
  }
}
