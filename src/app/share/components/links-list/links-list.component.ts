import { Component, Input, OnInit } from '@angular/core';
import { ILinksData } from '../../model/links-list.modet';

@Component({
  selector: 'app-links-list',
  templateUrl: './links-list.component.html',
  styleUrls: ['./links-list.component.scss']
})

export class LinksListComponent implements OnInit {
@Input() public linksData: ILinksData[] | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
