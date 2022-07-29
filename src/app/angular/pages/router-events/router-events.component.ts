import { Component } from '@angular/core';
import { ILinksData } from 'src/app/share/model/links-list.modet';
import { Event, Router, NavigationEnd } from '@angular/router'
import { filter } from 'rxjs';

@Component({
  selector: 'app-router-events',
  templateUrl: './router-events.component.html',
  styleUrls: ['./router-events.component.scss']
})

export class RouterEventsComponent {
  public linksData: ILinksData[] = [
    {
      title: 'Class RouterEvent, API > @angular/router',
      url: 'https://angular.io/api/router/RouterEvent',
    },
    {
      title: 'How to listen to Angular Router events',
      url: 'https://medium.com/angular-shots/shot-4-how-to-listen-angular-router-events-7a102cca5a80'
    },
  ];

  public code: string[] = [
    `import {Event, RouterEvent, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';`,
    `  constructor(
  private _router: Router,
) {
  this._router.events.pipe(
    filter((ev: Event): ev is RouterEvent => ev instanceof RouterEvent)
  ).subscribe({
    next: (event: NavigationEnd) => {
      const url = event.url;
      console.log(url);
    }
  });
}`,
  ];

  constructor(
    private _route: Router
  ) {
    this._route.events.pipe(
      filter((ev: Event): ev is NavigationEnd => ev instanceof NavigationEnd)
    ).subscribe({
      next: (event: NavigationEnd) => {
        console.log('Текущий url');
        console.log(event.url);
      },
    });
  }

}
