import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableOfComponent } from './observable-of.component';

describe('ObservableOfComponent', () => {
  let component: ObservableOfComponent;
  let fixture: ComponentFixture<ObservableOfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableOfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableOfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
