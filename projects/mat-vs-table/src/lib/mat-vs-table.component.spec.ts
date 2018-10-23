import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatVsTableComponent } from './mat-vs-table.component';

describe('MatVsTableComponent', () => {
  let component: MatVsTableComponent<any>;
  let fixture: ComponentFixture<MatVsTableComponent<any>>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatVsTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatVsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
