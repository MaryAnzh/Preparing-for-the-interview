import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-browser-frame',
  templateUrl: './browser-frame.component.html',
  styleUrls: ['./browser-frame.component.scss']
})

export class BrowserFrameComponent {

  @Input() siteName: string = '';

  constructor() { }

}
