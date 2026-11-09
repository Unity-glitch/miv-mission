import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectorateTeam } from './directorate-team';

describe('DirectorateTeam', () => {
  let component: DirectorateTeam;
  let fixture: ComponentFixture<DirectorateTeam>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DirectorateTeam]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectorateTeam);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
