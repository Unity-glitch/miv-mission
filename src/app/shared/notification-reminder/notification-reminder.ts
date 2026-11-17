import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

export interface NotificationSubscription {
  name: string;
  email: string;
  phone: string;
  notifyByEmail: boolean;
  notifyBySms: boolean;
  itemId: string;
  itemName: string;
  category: string;
}

@Component({
  selector: 'app-notification-reminder',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './notification-reminder.html',
  styleUrl: './notification-reminder.css',
})
export class NotificationReminder {
  @Input({ required: true }) itemId!: string;
  @Input({ required: true }) itemName!: string;
  @Input({ required: true }) category!: string;

  @Output() notificationRequested = new EventEmitter<NotificationSubscription>();

  showModal = false;
  submitted = false;
  errorMessage = '';

  subscriber = {
    name: '',
    email: '',
    phone: '',
    notifyByEmail: true,
    notifyBySms: true,
  };

  openModal(): void {
    this.showModal = true;
    this.submitted = false;
    this.errorMessage = '';
  }

  closeModal(): void {
    this.showModal = false;
  }

  submitNotification(form: NgForm): void {
    this.errorMessage = '';

    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    if (!this.subscriber.notifyByEmail && !this.subscriber.notifyBySms) {
      this.errorMessage = 'Please select at least one notification method.';
      return;
    }

    const subscription: NotificationSubscription = {
      ...this.subscriber,
      itemId: this.itemId,
      itemName: this.itemName,
      category: this.category,
    };

    this.notificationRequested.emit(subscription);

    this.submitted = true;
    form.resetForm({
      name: '',
      email: '',
      phone: '',
      notifyByEmail: true,
      notifyBySms: true,
    });
  }

  closeSuccess(): void {
    this.closeModal();
    this.submitted = false;
  }
}
