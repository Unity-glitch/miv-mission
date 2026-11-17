import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollReveal } from '../../../../../shared/scroll-reveal';
import { TrainingCourse } from '../../../training-data';

@Component({
  selector: 'app-training-detail-hero',
  standalone: true,
  imports: [RouterLink, ScrollReveal],
  templateUrl: './training-detail-hero.html',
  styleUrl: './training-detail-hero.css',
})
export class TrainingDetailHero {
  @Input({ required: true }) course!: TrainingCourse;
}
