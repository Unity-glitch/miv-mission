import { Component } from '@angular/core';
import { ScrollReveal } from '../../../../shared/scroll-reveal';
import {
  PersonDetails,
  PersonDetailsModal,
} from '../../../../shared/person-details-modal/person-details-modal';

@Component({
  selector: 'app-members',
  standalone: true,
  imports: [ScrollReveal, PersonDetailsModal],
  templateUrl: './members.html',
  styleUrl: './members.css',
})
export class Members {
  selectedPerson: PersonDetails | null = null;

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

  viewDetails(member: (typeof this.members)[number]): void {
    this.selectedPerson = {
      name: member.name,
      role: member.role,
      image: member.image,
    };
  }

  closeDetails(): void {
    this.selectedPerson = null;
  }
}
