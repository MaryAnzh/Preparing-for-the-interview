import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserFrameComponent } from './components/browser-frame/browser-frame.component';
import { RecentTopicsPipe } from './pipes/recent-topics/recent-topics.pipe';
import { LinksListComponent } from './components/links-list/links-list.component';

@NgModule({
  declarations: [
    BrowserFrameComponent,
    RecentTopicsPipe,
    LinksListComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BrowserFrameComponent,
    RecentTopicsPipe,
    LinksListComponent
  ]
})
export class ShareModule { }
