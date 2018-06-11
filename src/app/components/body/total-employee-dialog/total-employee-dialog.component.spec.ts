import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalEmployeeDialogComponent } from './total-employee-dialog.component';

describe('TotalEmployeeDialogComponent', () => {
  let component: TotalEmployeeDialogComponent;
  let fixture: ComponentFixture<TotalEmployeeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalEmployeeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalEmployeeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
