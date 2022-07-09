import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';

import { JsThemesRoutingModule } from './js-themes-routing.module';
import { JsThemesComponent } from './js-themes.component';
import { EventLoopComponent } from './pages/event-loop/event-loop.component';
import { JsTimersComponent } from './pages/js-timers/js-timers.component';
import { PromiseComponent } from './pages/promise/promise.component';


@NgModule({
  declarations: [
    JsThemesComponent,
    EventLoopComponent,
    JsTimersComponent,
    PromiseComponent
  ],
  imports: [
    CommonModule,
    JsThemesRoutingModule,
    ShareModule
  ]
})

export class JsThemesModule { }
