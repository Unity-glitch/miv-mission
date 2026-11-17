import { Component, CUSTOM_ELEMENTS_SCHEMA, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollReveal } from '../../../../../shared/scroll-reveal';
import { TrainingCourse } from '../../../training-data';
import { NotificationReminder } from '../../../../../shared/notification-reminder/notification-reminder';

@Component({
  selector: 'app-training-detail-hero',
  standalone: true,
  imports: [RouterLink, ScrollReveal, NotificationReminder],
  templateUrl: './training-detail-hero.html',
  styleUrl: './training-detail-hero.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TrainingDetailHero {
  @Input({ required: true }) course!: TrainingCourse;
}
