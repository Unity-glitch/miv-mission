import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionFieldsList } from './mission-fields-list';

describe('MissionFieldsList', () => {
  let component: MissionFieldsList;
  let fixture: ComponentFixture<MissionFieldsList>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MissionFieldsList]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MissionFieldsList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
