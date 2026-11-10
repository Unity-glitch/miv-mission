import { Component, Input } from '@angular/core';
import { MissionField } from '../../../mission-field-data';

@Component({
  selector: 'app-mission-field-updates',
  imports: [],
  templateUrl: './mission-field-updates.html',
  styleUrl: './mission-field-updates.css',
})
export class MissionFieldUpdates {
  @Input({ required: true }) field!: MissionField;

  
}
