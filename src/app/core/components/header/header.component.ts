import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../service/core-service/core.service';
import { Event, Router, NavigationEnd } from '@angular/router'
import { filter } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent {
  public isMain: boolean = true;

  constructor(
    private coreService: CoreService,
    private _router: Router
  ) {

    this._router.events.pipe(
      filter((ev: Event): ev is NavigationEnd => ev instanceof NavigationEnd)
    ).subscribe({
      next: (event: NavigationEnd) => (this.isMain = event.url === '/' || event.url === '/main')
    });
  }

  toMain() {
    this.coreService.updateIsMain(true);
    this._router.navigateByUrl('/');
  }

}
