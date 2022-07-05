import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';

import { AngularRoutingModule } from './angular-routing.module';
import { AngularComponent } from './angular.component';
import { AnchorComponent } from './pages/anchor/anchor.component';
import { CustomPipeComponent } from './pages/custom-pipe/custom-pipe.component';
import { PipesComponent } from './pages/pipes/pipes.component';

@NgModule({
  declarations: [
    AngularComponent,
    AnchorComponent,
    CustomPipeComponent,
    PipesComponent
  ],
  imports: [
    CommonModule,
    AngularRoutingModule,
    ShareModule,
  ]
})

export class AngularModule { }
