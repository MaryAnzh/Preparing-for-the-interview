import { Component, OnInit } from '@angular/core';
import { themeLists } from '../../data/themes';
import { Itheme } from '../../modal/themes.modal';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  public themeLists: Itheme[] = themeLists;

  constructor() { }

  ngOnInit(): void {
  }

}
