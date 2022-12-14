import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {
  getPrice(numberOfFlights: number): number{
    let cena: number = Math.round(Math.random() * 40000 + 1000);
    console.log(numberOfFlights * cena);
    return numberOfFlights * cena;
  }
}
