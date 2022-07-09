import { Component, Input } from '@angular/core';
import { ILinksData } from 'src/app/share/madel/links-list.modet';


@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})

export class PromiseComponent {
  @Input() public linksData: ILinksData[] = [
    {
      title: 'Promise MDN',
      url: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Promise'
    }
  ];

  constructor() { }

}
