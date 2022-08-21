import { Component, OnInit } from '@angular/core';
import { ILinksData } from 'src/app/share/model/links-list.modet';

@Component({
  selector: 'app-observable-of',
  templateUrl: './observable-of.component.html',
  styleUrls: ['./observable-of.component.scss']
})

export class ObservableOfComponent {
  public linksData: ILinksData[] = [
    {
      title: 'of, rxjs.dev',
      url: 'https://rxjs.dev/api/index/function/of',
    },
    {
      title: 'Deprecation Notes',
      url: 'https://rxjs.dev/deprecations/scheduler-argument'
    }
  ];

  public code: string[] = [
``,
``,
  ];

  constructor() { }

}
