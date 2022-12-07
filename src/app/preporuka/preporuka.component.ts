import { Component, Input } from '@angular/core';
import { Let } from '../let/let.model';

@Component({
  selector: 'app-preporuka',
  templateUrl: './preporuka.component.html',
  styleUrls: ['./preporuka.component.scss']
})
export class PreporukaComponent {

  @Input() listaLetova: Let[];


  filterLetova(aerodrom:string) :Let[]{
   var filterLista : Let[] = [];
    for (var leet of this.listaLetova){
      if (leet.aerodrom== aerodrom){
        filterLista.push(leet);
      }
    }

    return filterLista;
  }
}
