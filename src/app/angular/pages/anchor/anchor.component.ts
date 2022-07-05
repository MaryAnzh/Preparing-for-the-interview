import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anchor',
  templateUrl: './anchor.component.html',
  styleUrls: ['./anchor.component.scss']
})

export class AnchorComponent implements OnInit {

  public codes: string[] = [
    `<p id="anchor">Anchor</p>
  <...>
  <a (click)="scrollFn('anchor')">To anchor</a>`,
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
