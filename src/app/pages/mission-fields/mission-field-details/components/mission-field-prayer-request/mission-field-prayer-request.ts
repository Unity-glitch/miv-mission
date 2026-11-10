
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { MissionField } from '../../../mission-field-data';
import { Logo } from '../../../../../shared/logo/logo';

export interface PrayerRequest {
  name: string;
  email: string;
  phone: string;
  request: string;
  missionField: string;
}

@Component({
  selector: 'app-mission-field-prayer-request',
  standalone: true,
  imports: [FormsModule, Logo],
  templateUrl: './mission-field-prayer-request.html',
  styleUrl: './mission-field-prayer-request.css',
})
export class MissionFieldPrayerRequest {
  @Input({ required: true }) field!: MissionField;

  @Input() submissionStatus: 'success' | 'error' | null = null;
  @Input() isSubmitting = false;

  @Output() prayerRequestSubmitted = new EventEmitter<PrayerRequest>();

  showModal = false;

  prayerRequest: PrayerRequest = {
    name: '',
    email: '',
    phone: '',
    request: '',
    missionField: '',
  };

  openModal(): void {
    this.showModal = true;
  }

  closeModal(): void {
    this.showModal = false;
  }

  submitPrayerRequest(form: NgForm): void {
    if (form.invalid || this.isSubmitting) {
      return;
    }

    this.prayerRequestSubmitted.emit({
      ...this.prayerRequest,
      missionField: this.field.name,
    });
  }
}
