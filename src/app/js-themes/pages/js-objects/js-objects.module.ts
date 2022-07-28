import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { JsObjectsRoutingModule } from './js-objects-routing.module';

import { JsObjectsComponent } from './js-objects.component';
import { ObjectsCreateComponent } from './objects-create/objects-create.component';
import { ObjectsModifyComponent } from './objects-modify/objects-modify.component';

@NgModule({
  declarations: [
    JsObjectsComponent,
    ObjectsCreateComponent,
    ObjectsModifyComponent
  ],
  imports: [
    CommonModule,
    JsObjectsRoutingModule  ],
})

export class JsObjectsModule { }
