[![npm version](https://badge.fury.io/js/mat-vs-table.svg)](https://badge.fury.io/js/mat-vs-table)
[![Angular Style Guide](https://mgechev.github.io/angular2-style-guide/images/badge.svg)](https://angular.io/styleguide)

#### Quick links
[StackBlitz Template](https://stackblitz.com/edit/mat-vs-table)

# MatTable with Virtual scroll support

add support for virtual scrolling in angular mat-table

## Dependencies
* mat-vs-table@10.0.0 [Angular](https://angular.io) (*requires* Angular 10 or higher)

* mat-vs-table@8.0.0 [Angular](https://angular.io) (*requires* Angular 8 or 9)

* mat-vs-table@0.1.1 [Angular](https://angular.io) (*requires* Angular 7)

## Installation
Install above dependencies via *npm*.

Now install `mat-vs-table` via:
```shell
npm install --save mat-vs-table
```

---

Once installed you need to import the main module:
```js
import { MatVsTableModule } from 'mat-vs-table';
```

```js
import { MatVsTableModule } from 'mat-vs-table';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MatVsTableModule,
    MatTableModule,
    MatSortModule,
    BrowserAnimationsModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

```html
<cdk-virtual-scroll-viewport class="demo-viewport demo-table-container" itemSize="48">

  <table mat-vs-table [dataSource]="matTableDataSource" matSort>

    <!-- Column definitions -->
    
    <tr mat-header-row *matHeaderRowDef="matTableDataSourceColumns"></tr>
    <tr mat-row *matRowDef="let row; columns: matTableDataSourceColumns;"></tr>
  </table>

</cdk-virtual-scroll-viewport>
```
