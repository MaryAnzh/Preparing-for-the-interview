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
import { ObservableOfComponent } from './pages/observable/observable-of/observable-of.component';
import { ObservableFromComponent } from './pages/observable/observable-from/observable-from.component';
import { ObservableFromEventComponent } from './pages/observable/observable-from-event/observable-from-event.component';
import { ObservableAboutComponent } from './pages/observable/observable-about/observable-about.component';
import { ObservableNewComponent } from './pages/observable/observable-new/observable-new.component';
import { ObservableMethodsComponent } from './pages/observable/observable-methods/observable-methods.component';
import { AngularProjectComponent } from './pages/angular-project/angular-project.component';

@NgModule({
  declarations: [
    AngularComponent,
    AnchorComponent,
    CustomPipeComponent,
    PipesComponent,
    RouterEventsComponent,
    ObservableComponent,
    ObservableOfComponent,
    ObservableFromComponent,
    ObservableFromEventComponent,
    ObservableAboutComponent,
    ObservableNewComponent,
    ObservableMethodsComponent,
    AngularProjectComponent,
  ],
  imports: [
    CommonModule,
    AngularRoutingModule,
    ShareModule,
  ]
})

export class AngularModule { }
