import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular.component';
import { AnchorComponent } from './pages/anchor/anchor.component';
import { CustomPipeComponent } from './pages/custom-pipe/custom-pipe.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { RouterEventsComponent } from './pages/router-events/router-events.component';
import { ObservableComponent } from './pages/observable/observable.component';
import { ObservableOfComponent } from './pages/observable/observable-of/observable-of.component';
import { ObservableFromComponent } from './pages/observable/observable-from/observable-from.component';
import { ObservableFromEventComponent } from './pages/observable/observable-from-event/observable-from-event.component';
import { ObservableAboutComponent } from './pages/observable/observable-about/observable-about.component';
import { ObservableNewComponent } from './pages/observable/observable-new/observable-new.component';
import { ObservableMethodsComponent } from './pages/observable/observable-methods/observable-methods.component';
import { AngularProjectComponent } from './pages/angular-project/angular-project.component';
import { AngularTranslateComponent } from './pages/angular-translate/angular-translate.component';

const observableChildRoutes: Routes = [
  {
    path: 'about',
    component: ObservableAboutComponent
  },
  {
    path: 'of',
    component: ObservableOfComponent
  },
  {
    path: 'from',
    component: ObservableFromComponent
  },
  {
    path: 'fromEvent',
    component: ObservableFromEventComponent
  },
  {
    path: 'new',
    component: ObservableNewComponent
  },
  {
    path: 'methods',
    component: ObservableMethodsComponent
  }
];

const routes: Routes = [
  {
    path: '',
    component: AngularComponent
  },
  {
    path: 'anchor',
    component: AnchorComponent
  },
  {
    path: 'custom-pipe',
    component: CustomPipeComponent
  },
  {
    path: 'pipes',
    component: PipesComponent
  },
  {
    path: 'router-events',
    component: RouterEventsComponent,
  },
  {
    path: 'observable',
    component: ObservableComponent,
    children: observableChildRoutes
  },
  {
    path: 'angular-project',
    component: AngularProjectComponent
  },
  {
    path: 'angular-translate',
    component: AngularTranslateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AngularRoutingModule { }
