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

export class FunctionComponent implements OnInit {
  @Input() public parentPageName: string = 'Function';

  @Input() public navList: INavList[] = [
    {
      title: 'create',
      url: 'create',
      isActive: false,
    },
  ];

  constructor(

  ) {

   }

  ngOnInit(): void {
  }

}
