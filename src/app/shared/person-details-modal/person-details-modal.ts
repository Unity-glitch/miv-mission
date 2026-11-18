import { Component, EventEmitter, Input, Output } from '@angular/core';

export interface PersonDetails {
  name: string;
  role: string;
  image: string;
}

@Component({
  selector: 'app-person-details-modal',
  standalone: true,
  imports: [],
  templateUrl: './person-details-modal.html',
  styleUrl: './person-details-modal.css',
})
export class PersonDetailsModal {
  @Input() person: PersonDetails | null = null;
  @Output() closed = new EventEmitter<void>();

  closeModal(): void {
    this.closed.emit();
  }
}
