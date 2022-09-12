import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsThemesComponent } from './js-themes.component';
import { EventLoopComponent } from './pages/event-loop/event-loop.component';
import { JsTimersComponent } from './pages/js-timers/js-timers.component';
import { PromiseComponent } from './pages/promise/promise.component';
import { RecursionComponent } from './pages/recursion/recursion.component';
import { FunctionComponent } from './pages/function/function.component';
import { FunctionCreateComponent } from './pages/function/function-create/function-create.component';


const functionChidlren: Routes = [
  {
    path: 'create',
    component: FunctionCreateComponent,
  }
];

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
    path: 'objects',
    loadChildren: () => import('./pages/js-objects/js-objects.module').then(m => m.JsObjectsModule)
  },
  {
    path: 'function',
    component: FunctionComponent,
    children: functionChidlren
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class JsThemesRoutingModule { }
