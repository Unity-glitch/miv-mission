import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollReveal } from '../../../../shared/scroll-reveal';
import { TrainingDataService } from '../../training-data';

@Component({
  selector: 'app-training-courses',
  standalone: true,
  imports: [RouterLink, ScrollReveal],
  templateUrl: './training-courses.html',
  styleUrl: './training-courses.css',
})
export class TrainingCourses {
  private trainingDataService = inject(TrainingDataService);

  courses = this.trainingDataService.getCourses();
}
