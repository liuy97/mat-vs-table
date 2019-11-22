import { Component, ElementRef, ViewChild, OnInit, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { SelectionModel } from '@angular/cdk/collections';
import { NAMES } from './names';
import { COLORS } from './colors';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

@Component({
  selector: 'app-table-demo',
  templateUrl: 'table-demo.html',
  styleUrls: ['table-demo.scss'],
  animations: [],
})
export class TableDemoComponent implements OnInit, AfterViewInit {
  matTableDataSource = new MatTableDataSource<UserData>();
  matTableDataSourceColumns = ['select', 'userId', 'userName', 'progress', 'color'];
  selection = new SelectionModel<UserData>(true, []);

  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor() {
    this.matTableDataSource.sortingDataAccessor = (data: UserData, property: string) => {
      switch (property) {
        case 'userId': return +data.id;
        case 'userName': return data.name;
        case 'progress': return +data.progress;
        case 'color': return data.color;
        default: return '';
      }
    };
  }

  ngAfterViewInit() {
    this.matTableDataSource.sort = this.sort;
  }

  ngOnInit() {
    const data = [];
    for (let i = 0; i < 1000; i++) {
      const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

      data.push({
        id: (i).toString(),
        name: name,
        progress: Math.round(Math.random() * 100).toString(),
        color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
      });
    }
    this.matTableDataSource.data = data;
  }

  isAllFilteredRowsSelected() {
    return this.matTableDataSource.filteredData.every(data => this.selection.isSelected(data));
  }

  isMasterToggleChecked() {
    return this.selection.hasValue() &&
      this.isAllFilteredRowsSelected() &&
      this.selection.selected.length >= this.matTableDataSource.filteredData.length;
  }

  isMasterToggleIndeterminate() {
    return this.selection.hasValue() &&
      (!this.isAllFilteredRowsSelected() || !this.matTableDataSource.filteredData.length);
  }

  masterToggle() {
    if (this.isMasterToggleChecked()) {
      this.selection.clear();
    } else {
      this.matTableDataSource.filteredData.forEach(data => this.selection.select(data));
    }
  }

  getOpacity(progress: number) {
    const distanceFromMiddle = Math.abs(50 - progress);
    return distanceFromMiddle / 50 + .3;
  }

}
