import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Churches } from './churches';

describe('Churches', () => {
  let component: Churches;
  let fixture: ComponentFixture<Churches>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Churches]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Churches);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
