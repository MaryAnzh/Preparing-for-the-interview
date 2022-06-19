import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularAnchorComponent } from './angular-anchor.component';

describe('AngularAnchorComponent', () => {
  let component: AngularAnchorComponent;
  let fixture: ComponentFixture<AngularAnchorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularAnchorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularAnchorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
