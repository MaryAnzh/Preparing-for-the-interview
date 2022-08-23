import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationStart, RouterEvent, Event } from '@angular/router';
import { filter, Subscription } from 'rxjs';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss'],
  animations: [
    trigger('openClose', [
      state('open', style({
        transform: 'rotate(-90deg)'
      })),
      state('closed', style({
        transform: 'rotate(0deg)'
      })),
      transition('open => closed', [
        animate('.3s')
      ]),
      transition('closed => open', [
        animate('.3s')
      ]),
    ]),
  ]
})

export class ObservableComponent implements OnInit {
  public nav: { [key: string]: boolean } = {
    about: false,
    of: false,
    from: false,
    fromEvent: false,
    new: false,
    methods: false,
  }

  public navPages: string[] = [
    'about', 'of', 'from', 'fromEvent', 'new', 'methods'
  ];

  public pageName: string = '';

  public routerEvents$: Subscription;
  public subArr: Subscription[] = [];

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {
    this.routerEvents$ = this._router.events.pipe(
      filter((ev: Event): ev is RouterEvent => ev instanceof NavigationStart)
    ).subscribe({
      next: (event: NavigationStart) => {
        const url = event.url.split('/').pop();
        this.pageName = url ?? '';
        for (let key in this.nav) {
          this.nav[key] = (key === this.pageName)
        }
      },
    });
    this.subArr.push(this.routerEvents$);
  }

  ngOnInit(): void {
    this.pageName = this._activatedRoute.snapshot.children[0].url[0].path;

    for (let key in this.nav) {
      this.nav[key] = (key === this.pageName)
    };
  }

  ngOnDestroy(): void {
    console.clear();
    this.subArr.forEach((sub) => {
      if (sub) {
        sub.unsubscribe();
      }
    });
  }

}
