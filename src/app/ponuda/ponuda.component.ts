import { Component, Input } from '@angular/core';
import { Let } from '../let/let.model';

@Component({
  selector: 'app-ponuda',
  templateUrl: './ponuda.component.html',
  styleUrls: ['./ponuda.component.scss']
})
export class PonudaComponent {

  @Input() listaLetova: Let[];

}

