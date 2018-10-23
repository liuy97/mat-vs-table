# MatTable with Virtual scroll support

add support for virtual scrolling in angular mat-table

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 7 or higher)

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
