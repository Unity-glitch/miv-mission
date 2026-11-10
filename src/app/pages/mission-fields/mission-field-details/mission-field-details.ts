import { Component, CUSTOM_ELEMENTS_SCHEMA, inject, OnInit } from '@angular/core';
import { MissionFieldHero } from './components/mission-field-hero/mission-field-hero';
import { ActivatedRoute, Params, RouterLink } from '@angular/router';
import { MissionFieldDataService } from '../mission-field-data';
import { MissionFieldAbout } from './components/mission-field-about/mission-field-about';
import { MissionFieldPrayerRequest, PrayerRequest } from './components/mission-field-prayer-request/mission-field-prayer-request';
import { MissionFieldMaterialSupport } from './components/mission-field-material-support/mission-field-material-support';
import { MissionFieldUpdates } from './components/mission-field-updates/mission-field-updates';
import { MissionFieldCta } from './components/mission-field-cta/mission-field-cta';

@Component({
  selector: 'app-mission-field-details',
  imports: [
    MissionFieldHero,
    MissionFieldAbout,
    RouterLink,
    MissionFieldPrayerRequest,
    MissionFieldMaterialSupport,
    MissionFieldUpdates,
    MissionFieldCta,
  ],
  templateUrl: './mission-field-details.html',
  styleUrl: './mission-field-details.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MissionFieldDetails implements OnInit {
  private activatedRoute = inject(ActivatedRoute);
  private missionFieldDataService = inject(MissionFieldDataService);

  prayerRequestStatus: 'success' | 'error' | null = null;
  isSubmittingPrayer = false;
  field = this.missionFieldDataService.getMissionFields()[0];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params[string]) => {
      this.field = this.missionFieldDataService.getMissionField(params.id) as any;
    });
  }

  onPrayerRequestSubmitted(request: PrayerRequest): void {
    this.prayerRequestStatus = null;
    this.isSubmittingPrayer = true;

    // Call your prayer request API here.

    // On successful API response:
    // this.prayerRequestStatus = 'success';
    // this.isSubmittingPrayer = false;

    // On API error:
    // this.prayerRequestStatus = 'error';
    // this.isSubmittingPrayer = false;
  }
}
