import { Component, Input } from '@angular/core';
import { ScrollReveal } from '../../../../../shared/scroll-reveal';
import { TrainingCourse } from '../../../training-data';

@Component({
  selector: 'app-training-achievements',
  standalone: true,
  imports: [ScrollReveal],
  templateUrl: './training-achievements.html',
  styleUrl: './training-achievements.css',
})
export class TrainingAchievements {
  @Input({ required: true }) course!: TrainingCourse;
}
