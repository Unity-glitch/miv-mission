import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChurchDirectory } from './church-directory';

describe('ChurchDirectory', () => {
  let component: ChurchDirectory;
  let fixture: ComponentFixture<ChurchDirectory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChurchDirectory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChurchDirectory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
