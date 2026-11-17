import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollReveal } from '../../../../shared/scroll-reveal';
import { UPCOMING_OUTREACH_EVENTS } from '../../upcoming-events-data';
import { NotificationReminder } from '../../../../shared/notification-reminder/notification-reminder';

@Component({
  selector: 'app-upcoming-events',
  standalone: true,
  imports: [RouterLink, ScrollReveal, NotificationReminder],
  templateUrl: './upcoming-events.html',
  styleUrl: './upcoming-events.css',
})
export class UpcomingEvents {
  events = UPCOMING_OUTREACH_EVENTS;
}
