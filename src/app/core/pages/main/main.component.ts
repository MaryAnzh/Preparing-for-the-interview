import { Component, OnInit } from '@angular/core';
import { themeLists } from '../../data/themes';
import { Itheme } from '../../modal/themes.modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent {
  public themeLists: Itheme[] = themeLists;

  constructor(
    private router: Router,
  ) { }

  linkToList(url: string): void {
    if (url !== '') {
      this.router.navigateByUrl(url);
}
 }
}
