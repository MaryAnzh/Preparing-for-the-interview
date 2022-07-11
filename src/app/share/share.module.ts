import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserFrameComponent } from './components/browser-frame/browser-frame.component';
import { RecentTopicsPipe } from './pipes/recent-topics/recent-topics.pipe';
import { LinksListComponent } from './components/links-list/links-list.component';
import { PopUpDescriptionComponent } from './components/pop-up-description/pop-up-description.component';

@NgModule({
  declarations: [
    BrowserFrameComponent,
    RecentTopicsPipe,
    LinksListComponent,
    PopUpDescriptionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BrowserFrameComponent,
    RecentTopicsPipe,
    LinksListComponent,
    PopUpDescriptionComponent
  ]
})

export class ShareModule { }
