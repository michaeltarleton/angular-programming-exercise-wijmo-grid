import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
import { FormsModule } from '@angular/forms';

import * as wjcCore from 'wijmo/wijmo';
import * as wjcGrid from 'wijmo/wijmo.grid';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WjGridModule,
    WjInputModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    WjGridModule,
    WjInputModule,
    FormsModule
  ]
})
export class WijmoModule { }

export { wjcCore, wjcGrid }
