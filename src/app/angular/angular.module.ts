import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from '../share/share.module';

import { AngularRoutingModule } from './angular-routing.module';
import { AngularComponent } from './angular.component';
import { AnchorComponent } from './pages/anchor/anchor.component';
import { CustomPipeComponent } from './pages/custom-pipe/custom-pipe.component';
import { PipesComponent } from './pages/pipes/pipes.component';
import { RouterEventsComponent } from './pages/router-events/router-events.component';
import { ObservableComponent } from './pages/observable/observable.component';

@NgModule({
  declarations: [
    AngularComponent,
    AnchorComponent,
    CustomPipeComponent,
    PipesComponent,
    RouterEventsComponent,
    ObservableComponent,
  ],
  imports: [
    CommonModule,
    AngularRoutingModule,
    ShareModule,
  ]
})

export class AngularModule { }
