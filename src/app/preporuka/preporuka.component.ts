import { Component, Input } from '@angular/core';
import { Let } from '../let/let.model';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-preporuka',
  templateUrl: './preporuka.component.html',
  styleUrls: ['./preporuka.component.scss']
})
export class PreporukaComponent {

  listaLetova: Let[];

  constructor(private dataService: DataServiceService) { }

  ngOnInit() {
    this.dataService.currentMEssage.subscribe(listaLetova => this.listaLetova = listaLetova);
  }


  filterLetova(aerodrom: string): Let[] {
    var filterLista: Let[] = [];
    for (var leet of this.listaLetova) {
      if (leet.aerodrom == aerodrom) {
        filterLista.push(leet);
      }
    }

    return filterLista;
  }
}
