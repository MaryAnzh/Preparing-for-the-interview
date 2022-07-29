import { Component, Input, OnInit } from '@angular/core';
import { Itheme } from '../../modal/themes.modal';
import { IRecentTopics } from 'src/app/share/model/pipes.model';
import { TransformArr } from 'src/app/share/util/transformArray.utile';

@Component({
  selector: 'app-recent-topics',
  templateUrl: './recent-topics.component.html',
  styleUrls: ['./recent-topics.component.scss']
})

export class RecentTopicsComponent implements OnInit {
  @Input() public themeLists: Itheme[] | null = null;

  @Input() public linkToList: Function | null = null;

  public recentTopicsLength: number = 5;

  public recentArray: IRecentTopics[] = [];

  constructor(
    ) { }

  ngOnInit(): void {
    if (this.themeLists) {
      this.recentArray = TransformArr.sortThemesByDate(this.themeLists);
    }
  }

}
