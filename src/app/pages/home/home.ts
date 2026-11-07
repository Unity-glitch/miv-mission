import { Component } from '@angular/core';
import { HeroSection } from '../../shared/hero-section/hero-section';
import { ScrollReveal } from '../../shared/scroll-reveal';

@Component({
  selector: 'app-home',
  imports: [HeroSection, ScrollReveal],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

}
