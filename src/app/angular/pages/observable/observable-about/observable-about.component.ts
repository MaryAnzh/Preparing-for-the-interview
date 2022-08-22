import { Component, OnInit } from '@angular/core';
import { ILinksData } from 'src/app/share/model/links-list.modet';

@Component({
  selector: 'app-observable-about',
  templateUrl: './observable-about.component.html',
  styleUrls: ['./observable-about.component.scss']
})

export class ObservableAboutComponent implements OnInit {
  public linksData: ILinksData[] = [
    {
      title: 'observable, angdev.ru',
      url: 'https://angdev.ru/rxjs/observable/'
    },
    {
      title: 'observable, bxnotes.ru',
      url: 'https://bxnotes.ru/conspect/lib/angular/angular-5-the-complete-guide/observable'
    },
  ];
  constructor() { }

  ngOnInit(): void {
    console.clear();
  }

}
