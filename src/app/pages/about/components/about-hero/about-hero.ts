import { Component } from '@angular/core';
import { ScrollReveal } from '../../../../shared/scroll-reveal';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-hero',
  imports: [ScrollReveal, RouterLink],
  templateUrl: './about-hero.html',
  styleUrl: './about-hero.css',
})
export class AboutHero {

}
