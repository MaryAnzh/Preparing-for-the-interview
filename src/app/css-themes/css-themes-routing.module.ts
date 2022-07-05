import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssThemesComponent } from './css-themes.component';
import { CssScrollComponent } from './pages/css-scroll/css-scroll.component';

const routes: Routes = [
  {
    path: '',
    component: CssThemesComponent
  },
  {
    path: 'scroll',
    component: CssScrollComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class CssThemesRoutingModule { }
