import { JsonPipe, ViewportScroller } from '@angular/common';
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
    `{{ myJSON | json }}`,
    `{{ 'HELLO' | lowercase }}`,
    `{{ 'hello' | uppercase }}`,
    `{{ 0.35 | percent }}`,
  ];

  public myJSON = JSON.parse(`{
  "name": "Fixa",
  "type": "cat",
  "color": "grey"
  }`);

  constructor(
    private _viewportScroller: ViewportScroller) { }

  scrollFn(anchor: string): void {
    this._viewportScroller.scrollToAnchor(anchor);
  }

}
