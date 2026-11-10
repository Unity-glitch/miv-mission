import { Component, Input } from '@angular/core';
import { MissionField } from '../../../mission-field-data';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mission-field-cta',
  imports: [RouterLink],
  templateUrl: './mission-field-cta.html',
  styleUrl: './mission-field-cta.css',
})
export class MissionFieldCta {
 @Input({ required: true }) field!: MissionField;
}
