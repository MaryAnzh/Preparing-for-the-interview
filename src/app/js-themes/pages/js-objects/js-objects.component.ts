import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, RouterEvent, Event, Navigation } from '@angular/router';
import { filter, Subscribable, Subscription } from 'rxjs';

@Component({
  selector: 'app-js-objects',
  templateUrl: './js-objects.component.html',
  styleUrls: ['./js-objects.component.scss']
})

export class JsObjectsComponent implements OnInit {
  public nav: { [key: string]: boolean } = {
    create: false,
    props: false,
  }

  public pageName: string = '';

  public routerEvents: Subscription;

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
  ) {
    this.routerEvents = this._router.events.pipe(
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

  ngOnDestroy(): void {
    if (this.routerEvents) {
      this.routerEvents.unsubscribe();
    }
  }
}
