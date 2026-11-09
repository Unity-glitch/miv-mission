import { Component } from '@angular/core';
import { ScrollReveal } from '../../../../shared/scroll-reveal';

@Component({
  selector: 'app-directorate-team',
  imports: [ScrollReveal],
  templateUrl: './directorate-team.html',
  styleUrl: './directorate-team.css',
})
export class DirectorateTeam {
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
}
