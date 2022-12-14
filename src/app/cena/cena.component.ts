import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FlightServiceService } from '../services/flight-service.service';

@Component({
  selector: 'app-cena',
  templateUrl: './cena.component.html',
  styleUrls: ['./cena.component.scss']
})
export class CenaComponent {

  forma: FormGroup;
  brLetova: number;
  cena: number;

  constructor(private flightService: FlightServiceService, fb: FormBuilder){
    this.forma = fb.group({
      "brojLetova" : ['', Validators.compose([Validators.required, Validators.pattern('[1-9]+[0-9]*')])]
    })
  }

  onSubmit(){
    this.brLetova = this.forma.get("brojLetova")?.value;
    this.cena = this.flightService.getPrice(this.brLetova);
  }
}
