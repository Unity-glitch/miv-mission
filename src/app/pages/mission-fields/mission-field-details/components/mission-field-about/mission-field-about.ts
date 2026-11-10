import { Component, Input } from '@angular/core';
import { MissionField } from '../../../mission-field-data';
import { ScrollReveal } from '../../../../../shared/scroll-reveal';
import { Logo } from '../../../../../shared/logo/logo';

@Component({
  selector: 'app-mission-field-about',
  standalone: true,
  imports: [ScrollReveal, Logo],
  templateUrl: './mission-field-about.html',
  styleUrl: './mission-field-about.css',
})
export class MissionFieldAbout {
  @Input({ required: true }) field!: MissionField;

}
