import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './core/pages/main/main.component';
import { HeaderComponent } from './core/components/header/header.component';
import { CssScrollComponent } from './core/pages/css-pages/css-scroll/css-scroll.component';
import { JsTimersComponent } from './core/pages/js-pages/js-timers/js-timers.component';
import { PipesComponent } from './core/pages/angular/pipes/pipes.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { CustomPipeComponent } from './core/pages/angular/custom-pipe/custom-pipe.component';
import { RecentTopicsPipe } from './core/pipes/recent-topics/recent-topics.pipe';
import { RecentTopicsComponent } from './core/components/recent-topics/recent-topics.component';
import { EventLoopComponent } from './core/pages/js-pages/event-loop/event-loop.component';
import { NotFoundPageComponent } from './core/pages/not-found-page/not-found-page.component';
import { BrowserFrameComponent } from './core/components/browser-frame/browser-frame.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    CssScrollComponent,
    JsTimersComponent,
    PipesComponent,
    FooterComponent,
    CustomPipeComponent,
    RecentTopicsPipe,
    RecentTopicsComponent,
    EventLoopComponent,
    NotFoundPageComponent,
    BrowserFrameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  exports: [
    BrowserFrameComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
