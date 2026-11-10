import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionFieldCta } from './mission-field-cta';

describe('MissionFieldCta', () => {
  let component: MissionFieldCta;
  let fixture: ComponentFixture<MissionFieldCta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionFieldCta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionFieldCta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
