import { Component, Input, OnInit } from '@angular/core';
import { INav } from 'src/app/angular/model/nav.model';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { INavList } from 'src/app/share/model/nav-list.model';


@Component({
  selector: 'app-function',
  templateUrl: './function.component.html',
  styleUrls: ['./function.component.scss']
})

export class FunctionComponent {
  @Input() public parentPageName: string = 'Function';

  @Input() public navList: INavList[] = [
    {
      title: 'about',
      url: 'about',
      isActive: false,
    },
    {
      title: 'create',
      url: 'create',
      isActive: false,
    },
    {
      title: 'invoke',
      url: "invoke",
      isActive: false
    }
  ];

  constructor() { }

}
