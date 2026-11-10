import { TestBed } from '@angular/core/testing';

import { MissionFieldData } from './mission-field-data';

describe('MissionFieldData', () => {
  let service: MissionFieldData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MissionFieldData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
