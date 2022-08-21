import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableAboutComponent } from './observable-about.component';

describe('ObservableAboutComponent', () => {
  let component: ObservableAboutComponent;
  let fixture: ComponentFixture<ObservableAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
