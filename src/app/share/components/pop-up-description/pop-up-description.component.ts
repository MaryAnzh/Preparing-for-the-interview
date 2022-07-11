import { Component, Input, OnInit } from '@angular/core';
import { IMethods } from '../../madel/description.model';

@Component({
  selector: 'app-pop-up-description',
  templateUrl: './pop-up-description.component.html',
  styleUrls: ['./pop-up-description.component.scss']
})

export class PopUpDescriptionComponent implements OnInit {

  @Input() public description: IMethods | null = null;

  @Input() public close: Function = new Function();

  constructor() { }

  ngOnInit(): void {
  }
}
