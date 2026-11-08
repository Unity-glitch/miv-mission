import { Component } from '@angular/core';
import { ScrollReveal } from '../../../../shared/scroll-reveal';

@Component({
  selector: 'app-upcoming-events',
  imports: [ScrollReveal],
  templateUrl: './upcoming-events.html',
  styleUrl: './upcoming-events.css',
})
export class UpcomingEvents {
events = [
    {
      category: 'EVANGELISM',
      title: 'Community Gospel Outreach',
      description:
        'Taking the message of Christ beyond church walls and sharing His love with communities.',
      date: 'Date to be announced',
      location: 'Location to be announced',
      icon: 'globe',
    },
    {
      category: 'PRAYER & WORSHIP',
      title: 'United in Prayer',
      description:
        'A time of prayer, worship and spiritual encouragement as we seek God together.',
      date: 'Date to be announced',
      location: 'Location to be announced',
      icon: 'prayer',
    },
    {
      category: 'MISSIONS',
      title: 'Missions & Community Impact',
      description:
        'Coming together to support mission work and make a lasting difference in communities.',
      date: 'Date to be announced',
      location: 'Location to be announced',
      icon: 'mission',
    },
  ];
}
