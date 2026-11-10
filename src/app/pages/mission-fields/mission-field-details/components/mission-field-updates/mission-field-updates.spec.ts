import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionFieldUpdates } from './mission-field-updates';

describe('MissionFieldUpdates', () => {
  let component: MissionFieldUpdates;
  let fixture: ComponentFixture<MissionFieldUpdates>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionFieldUpdates]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionFieldUpdates);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
