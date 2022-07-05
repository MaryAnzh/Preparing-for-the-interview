import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from './core/core.module';
import { AngularModule } from './angular/angular.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CssScrollComponent } from './core/pages/css-pages/css-scroll/css-scroll.component';
import { JsTimersComponent } from './core/pages/js-pages/js-timers/js-timers.component';
import { EventLoopComponent } from './core/pages/js-pages/event-loop/event-loop.component';

@NgModule({
  declarations: [
    AppComponent,
    CssScrollComponent,
    JsTimersComponent,
    EventLoopComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CoreModule,
    AngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
