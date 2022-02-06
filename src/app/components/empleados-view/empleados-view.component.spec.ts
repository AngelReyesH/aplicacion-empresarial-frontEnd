import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadosViewComponent } from './empleados-view.component';

describe('EmpleadosViewComponent', () => {
  let component: EmpleadosViewComponent;
  let fixture: ComponentFixture<EmpleadosViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadosViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadosViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
