import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjPropsComponent } from './obj-props.component';

describe('ObjPropsComponent', () => {
  let component: ObjPropsComponent;
  let fixture: ComponentFixture<ObjPropsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjPropsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjPropsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
