import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';

import { JsThemesRoutingModule } from './js-themes-routing.module';
import { JsThemesComponent } from './js-themes.component';
import { EventLoopComponent } from './pages/event-loop/event-loop.component';
import { JsTimersComponent } from './pages/js-timers/js-timers.component';
import { PromiseComponent } from './pages/promise/promise.component';
import { RecursionComponent } from './pages/recursion/recursion.component';
import { FunctionComponent } from './pages/function/function.component';
import { FunctionCreateComponent } from './pages/function/function-create/function-create.component';


@NgModule({
  declarations: [
    JsThemesComponent,
    EventLoopComponent,
    JsTimersComponent,
    PromiseComponent,
    RecursionComponent,
    FunctionComponent,
    FunctionCreateComponent,
  ],
  imports: [
    CommonModule,
    JsThemesRoutingModule,
    ShareModule
  ]
})

export class JsThemesModule { }
