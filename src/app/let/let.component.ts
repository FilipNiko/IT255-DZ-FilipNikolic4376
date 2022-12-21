import { Component, Input } from '@angular/core';
import {Let} from './let.model';

@Component({
  selector: '[app-let-row]',
  templateUrl: './let.component.html',
  styleUrls: ['./let.component.scss']
})
export class LetRowComponent {

  @Input() leet: Let

}


