import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Let } from '../let/let.model';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class CrudServiceService {

  constructor(private http: HttpClient) {

  }

  postFlight(leet: Let) : Observable<Let> {
    return this.http.post("http://localhost:3000/letovi", leet)
      .pipe(map((data: any) => this.createFlight(data)),)
  }


  getFlights(): Observable<Let[]> {
    return this.http.get<any>("http://localhost:3000/letovi")
      .pipe(map((data: any) => data.map((item: any) =>
        this.createFlight(item))
      ))
  }

  updateFlight(data: any, id: number) : Observable<Let> {
    return this.http.put<any>("http://localhost:3000/letovi/" + id, data)
    .pipe(map((data: any) => this.createFlight(data)))
  }

  deleteFlight(id: number) : Observable<Let> {
    return this.http.delete<any>("http://localhost:3000/letovi/" + id)
    .pipe(map((data: any) => this.createFlight(data)))
  }

  createFlight(item: any): Let {
     let leet = new Let(item.aerodrom, item.sifra, item.destinacija, item.polazak, item.dolazak, item.biznisKlasa, item.gratisHrana, item.direktanLet);
     leet.id=item.id;
     return leet;
  }
}


