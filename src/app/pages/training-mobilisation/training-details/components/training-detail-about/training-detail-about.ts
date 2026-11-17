import { Component, Input } from '@angular/core';
import { ScrollReveal } from '../../../../../shared/scroll-reveal';
import { TrainingCourse } from '../../../training-data';

@Component({
  selector: 'app-training-detail-about',
  standalone: true,
  imports: [ScrollReveal],
  templateUrl: './training-detail-about.html',
  styleUrl: './training-detail-about.css',
})
export class TrainingDetailAbout {
  @Input({ required: true }) course!: TrainingCourse;
}
