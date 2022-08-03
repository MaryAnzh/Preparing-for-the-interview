import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModule } from 'src/app/share/share.module';
import { JsObjectsRoutingModule } from './js-objects-routing.module';

import { JsObjectsComponent } from './js-objects.component';
import { ObjectsCreateComponent } from './objects-create/objects-create.component';
import { ObjectsModifyComponent } from './objects-modify/objects-modify.component';
import { ObjPropsComponent } from './obj-props/obj-props.component';

@NgModule({
  declarations: [
    JsObjectsComponent,
    ObjectsCreateComponent,
    ObjectsModifyComponent,
    ObjPropsComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    JsObjectsRoutingModule,
   ],
})

export class JsObjectsModule { }
