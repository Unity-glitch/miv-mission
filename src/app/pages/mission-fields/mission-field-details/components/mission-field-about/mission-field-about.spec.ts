import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionFieldAbout } from './mission-field-about';

describe('MissionFieldAbout', () => {
  let component: MissionFieldAbout;
  let fixture: ComponentFixture<MissionFieldAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionFieldAbout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionFieldAbout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
