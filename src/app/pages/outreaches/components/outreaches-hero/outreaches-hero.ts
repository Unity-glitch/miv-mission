import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollReveal } from '../../../../shared/scroll-reveal';

@Component({
  selector: 'app-outreaches-hero',
  standalone: true,
  imports: [RouterLink, ScrollReveal],
  templateUrl: './outreaches-hero.html',
  styleUrl: './outreaches-hero.css',
})
export class OutreachesHero {}
