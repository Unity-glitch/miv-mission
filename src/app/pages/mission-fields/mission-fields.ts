import { Component } from '@angular/core';
import { MissionFieldsHero } from './components/mission-fields-hero/mission-fields-hero';
import { MissionFieldsList } from './components/mission-fields-list/mission-fields-list';

@Component({
  selector: 'app-mission-fields',
  imports: [ MissionFieldsHero, MissionFieldsList],
  templateUrl: './mission-fields.html',
  styleUrl: './mission-fields.css',
})
export class MissionFields {

}
