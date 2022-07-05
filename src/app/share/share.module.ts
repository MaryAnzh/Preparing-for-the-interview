import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserFrameComponent } from './components/browser-frame/browser-frame.component';
import { RecentTopicsPipe } from './recent-topics/recent-topics.pipe';

@NgModule({
  declarations: [
    BrowserFrameComponent,
    RecentTopicsPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BrowserFrameComponent,
    RecentTopicsPipe

  ]
})
export class ShareModule { }
