import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserFrameComponent } from './components/browser-frame/browser-frame.component';
import { RouterModule } from '@angular/router';

import { RecentTopicsPipe } from './pipes/recent-topics/recent-topics.pipe';
import { LinksListComponent } from './components/links-list/links-list.component';
import { PopUpDescriptionComponent } from './components/pop-up-description/pop-up-description.component';
import { ParentPageComponent } from './components/parent-page/parent-page.component';

@NgModule({
  declarations: [
    BrowserFrameComponent,
    RecentTopicsPipe,
    LinksListComponent,
    PopUpDescriptionComponent,
    ParentPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    BrowserFrameComponent,
    RecentTopicsPipe,
    LinksListComponent,
    PopUpDescriptionComponent,
    ParentPageComponent,
  ]
})

export class ShareModule { }
