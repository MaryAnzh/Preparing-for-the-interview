import { Component, Input, OnInit } from '@angular/core';
import { Itheme } from '../../modal/themes.modal';

@Component({
  selector: 'app-recent-topics',
  templateUrl: './recent-topics.component.html',
  styleUrls: ['./recent-topics.component.scss']
})

export class RecentTopicsComponent implements OnInit {
  @Input() public themeLists: Itheme[] | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
