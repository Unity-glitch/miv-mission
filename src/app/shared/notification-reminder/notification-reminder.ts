import { DOCUMENT } from '@angular/common';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Logo } from '../logo/logo';

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
  imports: [FormsModule, Logo],
  templateUrl: './notification-reminder.html',
  styleUrl: './notification-reminder.css',
})
export class NotificationReminder implements OnInit, OnDestroy {
  private host = inject<ElementRef<HTMLElement>>(ElementRef);
  private document = inject(DOCUMENT);

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

  ngOnInit(): void {
    // Move this component to <body> so position: fixed is relative to the
    // screen, not to a parent with transform/opacity (e.g. appScrollReveal)
    this.document.body.appendChild(this.host.nativeElement);
  }

  ngOnDestroy(): void {
    this.document.body.style.overflow = '';
    this.host.nativeElement.remove();
  }

  @HostListener('document:keydown.escape')
  onEscape(): void {
    if (this.showModal) {
      this.closeModal();
    }
  }

  openModal(): void {
    this.showModal = true;
    this.submitted = false;
    this.errorMessage = '';
    this.document.body.style.overflow = 'hidden'; // stop page scrolling behind modal
  }

  closeModal(): void {
    this.showModal = false;
    this.document.body.style.overflow = '';
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
