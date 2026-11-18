import { Component } from '@angular/core';
import { ScrollReveal } from '../../../../shared/scroll-reveal';
import {
  PersonDetails,
  PersonDetailsModal,
} from '../../../../shared/person-details-modal/person-details-modal';

@Component({
  selector: 'app-directorate-team',
  standalone: true,
  imports: [ScrollReveal, PersonDetailsModal],
  templateUrl: './directorate-team.html',
  styleUrl: './directorate-team.css',
})
export class DirectorateTeam {
  selectedPerson: PersonDetails | null = null;

  directors = [
    {
      name: "[Director's Name]",
      position: '[Directorate Position]',
      image: '/images/t1.jpeg',
    },
    {
      name: "[Director's Name]",
      position: '[Directorate Position]',
      image: '/images/t1.jpeg',
    },
    {
      name: "[Director's Name]",
      position: '[Directorate Position]',
      image: '/images/t1.jpeg',
    },
  ];

  viewDetails(director: (typeof this.directors)[number]): void {
    this.selectedPerson = {
      name: director.name,
      role: director.position,
      image: director.image,
    };
  }

  closeDetails(): void {
    this.selectedPerson = null;
  }
}
