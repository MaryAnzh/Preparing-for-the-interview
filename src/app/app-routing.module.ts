import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './core/pages/main/main.component';
import { CssScrollComponent } from './core/pages/css-pages/css-scroll/css-scroll.component';
import { JsTimersComponent } from './core/pages/js-pages/js-timers/js-timers.component';
import { PipesComponent } from './core/pages/angular/pipes/pipes.component';
import { AngularAnchorComponent } from './core/pages/angular/angular-anchor/angular-anchor.component';

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
    path: 'css-scroll',
    component: CssScrollComponent,
  },
  {
    path: 'timers',
    component: JsTimersComponent
  },
  {
    path: 'angular-pipes',
    component: PipesComponent,
  },
  {
    path: 'angular-anchor',
    component: AngularAnchorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
