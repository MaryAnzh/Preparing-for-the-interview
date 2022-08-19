import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsObjectsComponent } from './js-objects.component';
import { ObjectsCreateComponent } from './objects-create/objects-create.component';
import { ObjPropsComponent } from './obj-props/obj-props.component';

const childRoutes: Routes = [
  {
    path: 'create',
    component: ObjectsCreateComponent,
  },
  {
    path: 'props',
    component: ObjPropsComponent,
  },
];

const routes: Routes = [
  {
    path: '',
    component: JsObjectsComponent,
    children: childRoutes,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JsObjectsRoutingModule { }
