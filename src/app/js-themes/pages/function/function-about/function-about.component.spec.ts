import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionAboutComponent } from './function-about.component';

describe('FunctionAboutComponent', () => {
  let component: FunctionAboutComponent;
  let fixture: ComponentFixture<FunctionAboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FunctionAboutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionAboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
