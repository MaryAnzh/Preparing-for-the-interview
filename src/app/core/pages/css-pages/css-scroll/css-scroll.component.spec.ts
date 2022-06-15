import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssScrollComponent } from './css-scroll.component';

describe('CssScrollComponent', () => {
  let component: CssScrollComponent;
  let fixture: ComponentFixture<CssScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
