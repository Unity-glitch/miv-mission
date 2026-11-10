import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollReveal } from '../../../../../shared/scroll-reveal';
import { MissionField } from '../../../mission-field-data';

@Component({
  selector: 'app-mission-field-hero',
  standalone: true,
  imports: [RouterLink, ScrollReveal],
  templateUrl: './mission-field-hero.html',
  styleUrl: './mission-field-hero.css',
})
export class MissionFieldHero {
  @Input({ required: true }) field!: MissionField;
}
