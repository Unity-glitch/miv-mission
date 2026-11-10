import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionFieldDetails } from './mission-field-details';

describe('MissionFieldDetails', () => {
  let component: MissionFieldDetails;
  let fixture: ComponentFixture<MissionFieldDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionFieldDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionFieldDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
