import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionFieldPrayerRequest } from './mission-field-prayer-request';

describe('MissionFieldPrayerRequest', () => {
  let component: MissionFieldPrayerRequest;
  let fixture: ComponentFixture<MissionFieldPrayerRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionFieldPrayerRequest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionFieldPrayerRequest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
