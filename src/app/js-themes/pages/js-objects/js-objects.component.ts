import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, RouterEvent, Event, Navigation } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-js-objects',
  templateUrl: './js-objects.component.html',
  styleUrls: ['./js-objects.component.scss']
})

export class JsObjectsComponent {
  public nav: { [key: string]: boolean } = {
    create: false,
    modify: false,
  }

  public pageName: string = '';


  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
  ) {
    this._router.events.pipe(
      filter((ev: Event): ev is RouterEvent => ev instanceof NavigationStart)
    ).subscribe({
      next: (event: NavigationStart) => {
        const url = event.url.split('/').pop();
        this.pageName = url ?? '';
        for (let key in this.nav) {
          this.nav[key] = (key === this.pageName)
        }
      }
    });
  }

  ngOnInit(): void {
    this.pageName = this._activatedRoute.snapshot.children[0].url[0].path;
    for (let key in this.nav) {
      this.nav[key] = (key === this.pageName)
    }
  }
}
