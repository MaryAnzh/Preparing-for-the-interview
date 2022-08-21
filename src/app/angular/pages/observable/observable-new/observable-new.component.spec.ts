import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableNewComponent } from './observable-new.component';

describe('ObservableNewComponent', () => {
  let component: ObservableNewComponent;
  let fixture: ComponentFixture<ObservableNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
