import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollReveal } from '../../../../shared/scroll-reveal';
import { UPCOMING_OUTREACH_EVENTS } from '../../upcoming-events-data';

@Component({
  selector: 'app-upcoming-events',
  standalone: true,
  imports: [RouterLink, ScrollReveal],
  templateUrl: './upcoming-events.html',
  styleUrl: './upcoming-events.css',
})
export class UpcomingEvents {
  events = UPCOMING_OUTREACH_EVENTS;
}
