import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';
import { Subject } from 'rxjs';

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


  public _pageName$$ = new Subject();
  public pageName$ = this._pageName$$.asObservable();
  public pageName: string = '';


  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    this._router.events.subscribe({
      next: (event) => {
        if (event instanceof NavigationStart) {
          const url = event.url.split('/').pop();
          this.pageName = url ?? '';
          for (let key in this.nav) {
            this.nav[key] = (key === this.pageName)
          }
        }
      },
    });
  }

  ngOnInit(): void {
    this.pageName = this._activatedRoute.snapshot.children[0].url[0].path;
    for (let key in this.nav) {
      this.nav[key] = (key === this.pageName)
    }
  }
}
