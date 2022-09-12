import { Component, Input, OnInit } from '@angular/core';
import { Subscription, filter } from 'rxjs';
import { Router, ActivatedRoute, NavigationStart, RouterEvent, Event } from '@angular/router';
import { INavList } from '../../model/nav-list.model';

@Component({
  selector: 'app-parent-page',
  templateUrl: './parent-page.component.html',
  styleUrls: ['./parent-page.component.scss']
})

export class ParentPageComponent implements OnInit {
  @Input() public parentPageName: string | undefined = undefined;
  @Input() public navList: INavList[] | undefined = undefined;

  public pageName: string = '';

  public routerEvents$: Subscription = new Subscription();
  public subArr: Subscription[] = [];

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    if (this.navList) {
      this.pageName = this._activatedRoute.snapshot.children[0].url[0].path;

      this.navList.forEach(elem => {
        elem.isActive = elem.url === this.pageName;
      });

      this.routerEvents$ = this._router.events.pipe(
        filter((ev: Event): ev is RouterEvent => ev instanceof NavigationStart)
      ).subscribe({
        next: (event: NavigationStart) => {
          const url = event.url.split('/').pop();
          this.pageName = url ?? '';
          if (this.navList) {
            this.navList.forEach(elem => {
              elem.isActive = elem.url === this.pageName;
            });
          }
        },
      });

      this.subArr.push(this.routerEvents$);
    }
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
