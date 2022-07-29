import { Component, Input, OnInit } from '@angular/core';
import { IMethods } from '../../model/description.model';

@Component({
  selector: 'app-pop-up-description',
  templateUrl: './pop-up-description.component.html',
  styleUrls: ['./pop-up-description.component.scss']
})

export class PopUpDescriptionComponent {

  @Input() public description: IMethods | null = null;

  @Input() public close: Function = new Function();

  constructor() { }
}
