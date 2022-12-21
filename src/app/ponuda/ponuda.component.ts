import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Let } from '../let/let.model';


@Component({
  selector: 'app-ponuda',
  templateUrl: './ponuda.component.html',
  styleUrls: ['./ponuda.component.scss']
})
export class PonudaComponent {

  @Input() listaLetova: Let[];
  @Output() deleteEmit: EventEmitter<Let> = new EventEmitter;
  @Output() updateEmit: EventEmitter<Let> = new EventEmitter;
 
constructor (){}

deleteFlight(leet:Let){
  this.deleteEmit.emit(leet);
    
}

updateFlight(leet:Let){
  this.updateEmit.emit(leet);
    
}
 

}

