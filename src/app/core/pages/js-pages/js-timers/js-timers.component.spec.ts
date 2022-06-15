import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsTimersComponent } from './js-timers.component';

describe('JsTimersComponent', () => {
  let component: JsTimersComponent;
  let fixture: ComponentFixture<JsTimersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsTimersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsTimersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
