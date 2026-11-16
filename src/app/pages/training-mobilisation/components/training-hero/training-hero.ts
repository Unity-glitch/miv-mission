import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollReveal } from '../../../../shared/scroll-reveal';

@Component({
  selector: 'app-training-hero',
  imports: [RouterLink, ScrollReveal],
  templateUrl: './training-hero.html',
  styleUrl: './training-hero.css',
})
export class TrainingHero {

}
