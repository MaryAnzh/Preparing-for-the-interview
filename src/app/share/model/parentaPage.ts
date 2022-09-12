import { Component, OnInit } from '@angular/core';
import { INav } from 'src/app/angular/model/nav.model';
import { Subscription, filter } from 'rxjs';
import { Router, ActivatedRoute, NavigationStart, RouterEvent, Event } from '@angular/router';


export class ParentPage
//implements OnInit
{
  public navList: INav[] = [];

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
        this.navList.forEach(elem => {
          elem.isActive = elem.url === this.pageName;
        });
      },
    });
    this.subArr.push(this.routerEvents$);
  }

  // ngOnInit(): void {
  //   this.pageName = this._activatedRoute.snapshot.children[0].url[0].path;
  //   this.navList.forEach(elem => {
  //     elem.isActive = elem.url === this.pageName;
  //   });
  // }

  // ngOnDestroy(): void {
  //   console.clear();
  //   this.subArr.forEach((sub) => {
  //     if (sub) {
  //       sub.unsubscribe();
  //     }
  //   });
  // }

}
