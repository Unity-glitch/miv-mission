import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionFieldMaterialSupport } from './mission-field-material-support';

describe('MissionFieldMaterialSupport', () => {
  let component: MissionFieldMaterialSupport;
  let fixture: ComponentFixture<MissionFieldMaterialSupport>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionFieldMaterialSupport]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionFieldMaterialSupport);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
