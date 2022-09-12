import { Component, OnInit } from '@angular/core';
import { ILinksData } from 'src/app/share/model/links-list.modet';

@Component({
  selector: 'app-function-about',
  templateUrl: './function-about.component.html',
  styleUrls: ['./function-about.component.scss']
})

export class FunctionAboutComponent implements OnInit {
  public linksData: ILinksData[] = [
    {
      title: 'Functions, MDN',
      url: 'https://developer.mozilla.org/ru/docs/Web/JavaScript/Guide/Functions'
    },
    {
      title: 'function-basics, learn.javascript',
      url: 'https://learn.javascript.ru/function-basics',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
