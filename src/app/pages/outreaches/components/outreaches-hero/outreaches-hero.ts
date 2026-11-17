import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollReveal } from '../../../../shared/scroll-reveal';
import { NotificationReminder } from '../../../../shared/notification-reminder/notification-reminder';

@Component({
  selector: 'app-outreaches-hero',
  standalone: true,
  imports: [RouterLink, ScrollReveal, NotificationReminder],
  templateUrl: './outreaches-hero.html',
  styleUrl: './outreaches-hero.css',
})
export class OutreachesHero {}
