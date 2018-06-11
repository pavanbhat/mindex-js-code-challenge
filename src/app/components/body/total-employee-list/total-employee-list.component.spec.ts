import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalEmployeeListComponent } from './total-employee-list.component';

describe('TotalEmployeeListComponent', () => {
  let component: TotalEmployeeListComponent;
  let fixture: ComponentFixture<TotalEmployeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalEmployeeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalEmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
