import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JsObjectsComponent } from './js-objects.component';
import { ObjectsCreateComponent } from './objects-create/objects-create.component';
import { ObjectsModifyComponent } from './objects-modify/objects-modify.component';

const childRoutes: Routes = [
  {
    path: 'create',
    component: ObjectsCreateComponent,
  },
  {
    path: 'modify',
    component: ObjectsModifyComponent,
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
