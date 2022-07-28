import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectsCreateComponent } from './objects-create.component';

describe('ObjectsCreateComponent', () => {
  let component: ObjectsCreateComponent;
  let fixture: ComponentFixture<ObjectsCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectsCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectsCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
