import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurchPartnership } from './church-partnership';

describe('ChurchPartnership', () => {
  let component: ChurchPartnership;
  let fixture: ComponentFixture<ChurchPartnership>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChurchPartnership]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChurchPartnership);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
