import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WjGridModule } from 'wijmo/wijmo.angular2.grid';
import { WjInputModule } from 'wijmo/wijmo.angular2.input';
import { WjGridFilterModule } from 'wijmo/wijmo.angular2.grid.filter';
import { FormsModule } from '@angular/forms';

import * as wjcCore from 'wijmo/wijmo';
import * as wjcGrid from 'wijmo/wijmo.grid';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    WjGridModule,
    WjInputModule,
    WjGridFilterModule,
    FormsModule
  ],
  exports: [
    CommonModule,
    WjGridModule,
    WjInputModule,
    WjGridFilterModule,
    FormsModule
  ]
})
export class WijmoModule { }

export { wjcCore, wjcGrid }

export const getColumnBindingIndex = (grid: wjcGrid.FlexGrid, binding: string) => (grid.getColumn(binding) || { index: undefined }).index
