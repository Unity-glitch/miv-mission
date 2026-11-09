import { Component } from '@angular/core';
import { ScrollReveal } from '../../../../shared/scroll-reveal';

@Component({
  selector: 'app-members',
  imports: [ScrollReveal],
  templateUrl: './members.html',
  styleUrl: './members.css',
})
export class Members {
  members = [
    {
      name: '[Member Name]',
      role: '[Member Role]',
      image: '/images/t2.jpeg',
    },
    {
      name: '[Member Name]',
      role: '[Member Role]',
      image: '/images/t2.jpeg',
    },
    {
      name: '[Member Name]',
      role: '[Member Role]',
      image: '/images/t2.jpeg',
    },
    {
      name: '[Member Name]',
      role: '[Member Role]',
      image: '/images/t2.jpeg',
    },
  ];
}
