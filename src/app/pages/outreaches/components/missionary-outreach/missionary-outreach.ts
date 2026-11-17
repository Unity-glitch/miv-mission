import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollReveal } from '../../../../shared/scroll-reveal';

@Component({
  selector: 'app-missionary-outreach',
  standalone: true,
  imports: [RouterLink, ScrollReveal],
  templateUrl: './missionary-outreach.html',
  styleUrl: './missionary-outreach.css',
})
export class MissionaryOutreach {}