import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MatVsTableComponent } from './mat-vs-table.component';

@NgModule({
  imports: [CommonModule, CdkTableModule, ScrollingModule],
  declarations: [MatVsTableComponent],
  exports: [MatVsTableComponent, ScrollingModule]
})
export class MatVsTableModule { }
