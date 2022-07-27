import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsThemesComponent } from './js-themes.component';
import { EventLoopComponent } from './pages/event-loop/event-loop.component';
import { JsTimersComponent } from './pages/js-timers/js-timers.component';
import { PromiseComponent } from './pages/promise/promise.component';
import { RecursionComponent } from './pages/recursion/recursion.component';
import { ObjComponent } from './pages/obj/obj.component';

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
  {
    path: 'recursion',
    component: RecursionComponent,
  },
  {
    path: 'obj',
    component: ObjComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JsThemesRoutingModule { }
