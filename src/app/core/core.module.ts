import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';

import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './pages/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { RecentTopicsComponent } from './components/recent-topics/recent-topics.component'
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';

@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent,
    FooterComponent,
    RecentTopicsComponent,
    NotFoundPageComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
})

export class CoreModule { }
