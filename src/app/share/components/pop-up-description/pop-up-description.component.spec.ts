import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpDescriptionComponent } from './pop-up-description.component';

describe('PopUpDescriptionComponent', () => {
  let component: PopUpDescriptionComponent;
  let fixture: ComponentFixture<PopUpDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
