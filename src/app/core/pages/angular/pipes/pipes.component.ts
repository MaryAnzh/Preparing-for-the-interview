import { Component, OnInit, TemplateRef } from '@angular/core';


type BuiltInPipes = {
  name: string,
  code: string,
  result: string,
}

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})

export class PipesComponent {
  public date = new Date();

  public codes: string[] = [
    `{{ 35.05 | currency : 'USD' }}`,
    `{{ date | date: 'shortTime' }}`,
    `{{ date | date: 'full' }}`,
    `{{ date | date: 'EEE, MMM d, y'}}`,
    `{{3.6 | number: '1.0-0'}}`,
    `{{1.6451114 | number: '3.0-3'}}`,
  ];

  constructor() { }


}
