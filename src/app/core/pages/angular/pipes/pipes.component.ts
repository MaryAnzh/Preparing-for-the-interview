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

export class PipesComponent implements OnInit {
  public date = new Date();

  public codes: string[] = [
    `{{ 35.05 | currency : 'USD' }}`,
    `{{ date | date: 'shortTime' }}`,
    `{{ date | date: 'fullDate' }}`,
    `{{ date | date: 'EEEE, MMMM d, y'}}`,
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
