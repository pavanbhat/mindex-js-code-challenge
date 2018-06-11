import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectEmployeeDialogComponent } from './direct-employee-dialog.component';

describe('DirectEmployeeDialogComponent', () => {
  let component: DirectEmployeeDialogComponent;
  let fixture: ComponentFixture<DirectEmployeeDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectEmployeeDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectEmployeeDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
