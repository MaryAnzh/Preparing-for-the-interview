import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular.component';
import { AnchorComponent } from './pages/anchor/anchor.component';
import { CustomPipeComponent } from './pages/custom-pipe/custom-pipe.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { RouterEventsComponent } from './pages/router-events/router-events.component';

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

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AngularRoutingModule { }
