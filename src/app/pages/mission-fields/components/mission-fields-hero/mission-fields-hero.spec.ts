import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionFieldsHero } from './mission-fields-hero';

describe('MissionFieldsHero', () => {
  let component: MissionFieldsHero;
  let fixture: ComponentFixture<MissionFieldsHero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionFieldsHero]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionFieldsHero);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
