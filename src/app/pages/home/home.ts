import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HeroSection } from '../../shared/hero-section/hero-section';
import { ScrollReveal } from '../../shared/scroll-reveal';
import { UpcomingEvents } from './components/upcoming-events/upcoming-events';
import { ScriptureSection } from './components/scripture-section/scripture-section';
import { GetInvolved } from './components/get-involved/get-involved';
import { Newsletter } from './components/newsletter/newsletter';

@Component({
  selector: 'app-home',
  imports: [HeroSection, ScrollReveal, UpcomingEvents, ScriptureSection, GetInvolved, Newsletter],
  templateUrl: './home.html',
  styleUrl: './home.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Home {

}
