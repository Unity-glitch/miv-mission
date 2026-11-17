import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { TrainingDataService, TrainingCourse } from '../training-data';

import { TrainingDetailHero } from './components/training-detail-hero/training-detail-hero';
import { TrainingDetailAbout } from './components/training-detail-about/training-detail-about';
import { TrainingInstructors } from './components/training-instructors/training-instructors';
import { TrainingPastEvents } from './components/training-past-events/training-past-events';
import { TrainingAchievements } from './components/training-achievements/training-achievements';

@Component({
  selector: 'app-training-details',
  standalone: true,
  imports: [
    RouterLink,
    TrainingDetailHero,
    TrainingDetailAbout,
    TrainingInstructors,
    TrainingPastEvents,
    TrainingAchievements,
  ],
  templateUrl: './training-details.html',
  styleUrl: './training-details.css',
})
export class TrainingDetails implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private trainingDataService = inject(TrainingDataService);

  course: TrainingCourse | undefined;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params[string]) => {
      this.course = this.trainingDataService.getCourse(params['id']);
    });
  }
}
