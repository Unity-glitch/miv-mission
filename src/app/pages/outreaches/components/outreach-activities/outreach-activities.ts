import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollReveal } from '../../../../shared/scroll-reveal';

@Component({
  selector: 'app-outreach-activities',
  standalone: true,
  imports: [RouterLink, ScrollReveal],
  templateUrl: './outreach-activities.html',
  styleUrl: './outreach-activities.css',
})
export class OutreachActivities {
  activities = [
    {
      number: '01',
      title: 'Community Evangelism',
      description:
        'Taking the Gospel into communities through personal evangelism, open-air meetings, and meaningful conversations.',
      image: '/images/home-img1.jpeg',
    },
    {
      number: '02',
      title: 'Community Support',
      description:
        'Showing the love of Christ through practical support and initiatives that respond to identified community needs.',
      image: '/images/home-img3.jpeg',
    },
    {
      number: '03',
      title: 'Mission Mobilisation',
      description:
        'Encouraging and equipping individuals and groups to participate actively in missionary work and outreach activities.',
      image: '/images/home-img2.jpeg',
    },
  ];
}