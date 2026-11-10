import { Component } from '@angular/core';
import { ScrollReveal } from '../../shared/scroll-reveal';
import { MissionFieldsHero } from './components/mission-fields-hero/mission-fields-hero';
import { MissionFieldsList } from './components/mission-fields-list/mission-fields-list';

@Component({
  selector: 'app-mission-fields',
  imports: [ScrollReveal, MissionFieldsHero, MissionFieldsList],
  templateUrl: './mission-fields.html',
  styleUrl: './mission-fields.css',
})
export class MissionFields {

}
