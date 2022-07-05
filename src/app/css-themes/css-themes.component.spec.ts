import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CssThemesComponent } from './css-themes.component';

describe('CssThemesComponent', () => {
  let component: CssThemesComponent;
  let fixture: ComponentFixture<CssThemesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CssThemesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CssThemesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
