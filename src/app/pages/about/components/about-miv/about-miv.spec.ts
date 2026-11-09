import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMiv } from './about-miv';

describe('AboutMiv', () => {
  let component: AboutMiv;
  let fixture: ComponentFixture<AboutMiv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMiv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMiv);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
