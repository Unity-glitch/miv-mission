import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionFieldHero } from './mission-field-hero';

describe('MissionFieldHero', () => {
  let component: MissionFieldHero;
  let fixture: ComponentFixture<MissionFieldHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionFieldHero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionFieldHero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
