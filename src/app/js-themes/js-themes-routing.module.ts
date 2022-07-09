import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsThemesComponent } from './js-themes.component';
import { EventLoopComponent } from './pages/event-loop/event-loop.component';
import { JsTimersComponent } from './pages/js-timers/js-timers.component';
import { PromiseComponent } from './pages/promise/promise.component';

const routes: Routes = [
  {
    path: '',
    component: JsThemesComponent
  },
  {
    path: 'event-loop',
    component: EventLoopComponent
  },
  {
    path: 'timers',
    component: JsTimersComponent
  },
  {
    path: 'promise',
    component: PromiseComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JsThemesRoutingModule { }
