import { Component } from '@angular/core';
import { AboutHero } from './components/about-hero/about-hero';
import { AboutMiv } from './components/about-miv/about-miv';
import { AboutFounder } from './components/about-founder/about-founder';
import { DirectorateTeam } from './components/directorate-team/directorate-team';
import { Members } from './components/members/members';

@Component({
  selector: 'app-about',
  imports: [AboutHero, AboutMiv, AboutFounder, DirectorateTeam, Members],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
