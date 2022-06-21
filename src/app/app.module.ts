import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './core/pages/main/main.component';
import { HeaderComponent } from './core/components/header/header.component';
import { CssScrollComponent } from './core/pages/css-pages/css-scroll/css-scroll.component';
import { JsTimersComponent } from './core/pages/js-pages/js-timers/js-timers.component';
import { PipesComponent } from './core/pages/angular/pipes/pipes.component';
import { AngularAnchorComponent } from './core/pages/angular/angular-anchor/angular-anchor.component';
import { FooterComponent } from './core/components/footer/footer.component';
import { CustomPipeComponent } from './core/pages/angular/custom-pipe/custom-pipe.component';
import { RecentTopicsPipe } from './core/pipes/recent-topics/recent-topics.pipe';
import { RecentTopicsComponent } from './core/components/recent-topics/recent-topics.component';
import { BrowserFrameComponent } from './core/components/browser-frame/browser-frame.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    CssScrollComponent,
    JsTimersComponent,
    PipesComponent,
    AngularAnchorComponent,
    FooterComponent,
    CustomPipeComponent,
    RecentTopicsPipe,
    RecentTopicsComponent,
    BrowserFrameComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
