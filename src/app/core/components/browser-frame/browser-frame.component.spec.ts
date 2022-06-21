import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowserFrameComponent } from './browser-frame.component';

describe('BrowserFrameComponent', () => {
  let component: BrowserFrameComponent;
  let fixture: ComponentFixture<BrowserFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrowserFrameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowserFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
