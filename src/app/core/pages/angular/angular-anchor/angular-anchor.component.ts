import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-anchor',
  templateUrl: './angular-anchor.component.html',
  styleUrls: ['./angular-anchor.component.scss']
})
export class AngularAnchorComponent implements OnInit {
  public codes: string[] = [
  `<p id="anchor">Anchor</p>
<...>
<a (click)="scrollFn('anchor')">To anchor</a>`,
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
