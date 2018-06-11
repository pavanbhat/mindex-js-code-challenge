import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectEmployeeListComponent } from './direct-employee-list.component';

describe('DirectEmployeeListComponent', () => {
  let component: DirectEmployeeListComponent;
  let fixture: ComponentFixture<DirectEmployeeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DirectEmployeeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectEmployeeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
