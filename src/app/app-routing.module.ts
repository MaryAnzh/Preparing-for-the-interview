import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './core/pages/main/main.component';
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
  { path: 'angular',
  loadChildren: () => import('./angular/angular.module').then(m => m.AngularModule)
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
  //   path: 'event-loop',
  //   component: EventLoopComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
