import { Component, Input } from '@angular/core';
import { ScrollReveal } from '../../../../../shared/scroll-reveal';
import { TrainingCourse } from '../../../training-data';

@Component({
  selector: 'app-training-instructors',
  standalone: true,
  imports: [ScrollReveal],
  templateUrl: './training-instructors.html',
  styleUrl: './training-instructors.css',
})
export class TrainingInstructors {
  @Input({ required: true }) course!: TrainingCourse;
}
