import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptureSection } from './scripture-section';

describe('ScriptureSection', () => {
  let component: ScriptureSection;
  let fixture: ComponentFixture<ScriptureSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ScriptureSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScriptureSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
