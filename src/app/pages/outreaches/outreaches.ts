import { Component } from '@angular/core';
import { OutreachesHero } from './components/outreaches-hero/outreaches-hero';
import { MissionaryOutreach } from './components/missionary-outreach/missionary-outreach';
import { OutreachActivities } from './components/outreach-activities/outreach-activities';
import { UpcomingEvents } from './components/upcoming-events/upcoming-events';
import { NotificationReminder } from '../../shared/notification-reminder/notification-reminder';

@Component({
  selector: 'app-outreaches',
  imports: [OutreachesHero, MissionaryOutreach, OutreachActivities, UpcomingEvents, NotificationReminder],
  templateUrl: './outreaches.html',
  styleUrl: './outreaches.css',
})
export class Outreaches {

}
