import { Component, Input } from '@angular/core';
import { ScrollReveal } from '../../../../../shared/scroll-reveal';
import { TrainingCourse } from '../../../training-data';

@Component({
  selector: 'app-training-past-events',
  standalone: true,
  imports: [ScrollReveal],
  templateUrl: './training-past-events.html',
  styleUrl: './training-past-events.css',
})
export class TrainingPastEvents {
  @Input({ required: true }) course!: TrainingCourse;
}