import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsRoutingModule } from './components-routing.module';
import { HomeComponent } from './home/home.component';
import { WijmoModule } from 'src/app/shared/wijmo/wijmo.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    WijmoModule
  ]
})
export class ComponentsModule { }
