import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CoreService } from '../../service/core-service/core.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  public isMainPage$: Observable<boolean>;

  public isMain: boolean = true;

  constructor(
    private coreService: CoreService,
    private location: Location,
    private router: Router
  ) {
    this.isMainPage$ = this.coreService.isMainPage$;
    this.isMainPage$.subscribe({
      next: value => {

        this.isMain = value;
      },

    });

    const uwl = this.location.path();
    if (uwl === '/main') {
      this.coreService.updateIsMain(true);

    } else {
      this.coreService.updateIsMain(false);

    }
  }

  toMain() {
    this.coreService.updateIsMain(true);
    this.router.navigateByUrl('/');
  }

  ngOnInit(): void {
  }
}
