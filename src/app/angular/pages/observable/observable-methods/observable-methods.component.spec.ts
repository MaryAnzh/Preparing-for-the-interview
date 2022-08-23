import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableMethodsComponent } from './observable-methods.component';

describe('ObservableMethodsComponent', () => {
  let component: ObservableMethodsComponent;
  let fixture: ComponentFixture<ObservableMethodsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableMethodsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableMethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
