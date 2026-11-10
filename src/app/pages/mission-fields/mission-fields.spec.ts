import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionFields } from './mission-fields';

describe('MissionFields', () => {
  let component: MissionFields;
  let fixture: ComponentFixture<MissionFields>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionFields]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionFields);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
