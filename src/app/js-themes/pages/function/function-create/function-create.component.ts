import { Component, OnInit } from '@angular/core';
import { ILinksData } from 'src/app/share/model/links-list.modet';

@Component({
  selector: 'app-function-create',
  templateUrl: './function-create.component.html',
  styleUrls: ['./function-create.component.scss']
})

export class FunctionCreateComponent implements OnInit {

  public linksData: ILinksData[] = [
    {
      title: 'function-basics, learn.javascript',
      url: 'https://learn.javascript.ru/function-basics',
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
