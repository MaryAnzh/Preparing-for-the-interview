import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CssThemesRoutingModule } from './css-themes-routing.module';
import { CssThemesComponent } from './css-themes.component';
import { CssScrollComponent } from './pages/css-scroll/css-scroll.component';

@NgModule({
  declarations: [
    CssThemesComponent,
    CssScrollComponent,
  ],
  imports: [
    CommonModule,
    CssThemesRoutingModule
  ]
})

export class CssThemesModule { }
