import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectsModifyComponent } from './objects-modify.component';

describe('ObjectsModifyComponent', () => {
  let component: ObjectsModifyComponent;
  let fixture: ComponentFixture<ObjectsModifyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectsModifyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectsModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
