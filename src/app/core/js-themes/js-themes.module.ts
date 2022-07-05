import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JsThemesRoutingModule } from './js-themes-routing.module';
import { JsThemesComponent } from './js-themes.component';
import { EventLoopComponent } from './pages/event-loop/event-loop.component';
import { JsTimersComponent } from './pages/js-timers/js-timers.component';


@NgModule({
  declarations: [
    JsThemesComponent,
    EventLoopComponent,
    JsTimersComponent
  ],
  imports: [
    CommonModule,
    JsThemesRoutingModule
  ]
})
export class JsThemesModule { }
