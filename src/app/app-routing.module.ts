import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './core/pages/main/main.component';
import { CssScrollComponent } from './core/pages/css-pages/css-scroll/css-scroll.component';
import { JsTimersComponent } from './core/pages/js-pages/js-timers/js-timers.component';
import { PipesComponent } from './core/pages/angular/pipes/pipes.component';
import { AngularAnchorComponent } from './core/pages/angular/angular-anchor/angular-anchor.component';
import { CustomPipeComponent } from './core/pages/angular/custom-pipe/custom-pipe.component';
import { EventLoopComponent } from './core/pages/js-pages/event-loop/event-loop.component';
import { NotFoundPageComponent } from './core/pages/not-found-page/not-found-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'main',
    component: MainComponent,
  },
  {
    path: '**',
    component: NotFoundPageComponent,
  }
  // {
  //   path: 'css-scroll',
  //   component: CssScrollComponent,
  // },
  // {
  //   path: 'timers',
  //   component: JsTimersComponent
  // },
  // {
  //   path: 'angular-pipes',
  //   component: PipesComponent,
  // },
  // {
  //   path: 'angular-anchor',
  //   component: AngularAnchorComponent
  // },
  // {
  //   path: 'custom-pipe',
  //   component: CustomPipeComponent
  // },
  // {
  //   path: 'event-loop',
  //   component: EventLoopComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
