import { NgModule } from '@angular/core';

import { MatVsTableModule } from 'mat-vs-table';
import { MatTableModule, MatSortModule, MatCheckboxModule } from '@angular/material';
import { CommonModule } from '@angular/common';
import { TableDemoComponent } from './table/table-demo';

@NgModule({
  declarations: [
    TableDemoComponent,
  ],
  exports: [
    TableDemoComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatVsTableModule,
    MatTableModule,
    MatSortModule,
  ],
  providers: [],
})
export class SharedModule { }
