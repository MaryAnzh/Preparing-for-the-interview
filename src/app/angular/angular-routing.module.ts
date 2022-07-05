import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularComponent } from './angular.component';
import { AnchorComponent } from './pages/anchor/anchor.component';
import { CustomPipeComponent } from './pages/custom-pipe/custom-pipe.component';

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
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AngularRoutingModule { }
