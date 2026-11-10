import { Component, Input } from '@angular/core';
import { MissionField } from '../../../mission-field-data';
import { ScrollReveal } from '../../../../../shared/scroll-reveal';
import { Logo } from '../../../../../shared/logo/logo';

@Component({
  selector: 'app-mission-field-material-support',
  imports: [ScrollReveal, Logo],
  templateUrl: './mission-field-material-support.html',
  styleUrl: './mission-field-material-support.css',
})
export class MissionFieldMaterialSupport {
  @Input({ required: true }) field!: MissionField;
}
