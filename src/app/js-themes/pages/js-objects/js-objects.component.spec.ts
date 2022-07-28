import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JsObjectsComponent } from './js-objects.component';

describe('JsObjectsComponent', () => {
  let component: JsObjectsComponent;
  let fixture: ComponentFixture<JsObjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JsObjectsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JsObjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
