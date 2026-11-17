import { Component, CUSTOM_ELEMENTS_SCHEMA, inject } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MissionFieldDataService } from '../mission-fields/mission-field-data';
import { PaystackService } from './paystack';
import { CommonModule } from '@angular/common';
import { Logo } from '../../shared/logo/logo';

type DonationCategory = 'mission-field' | 'outreach' | 'training';

interface DonationItem {
  id: string;
  name: string;
  description: string;
}

@Component({
  selector: 'app-donate',
  standalone: true,
  imports: [FormsModule, RouterLink, CommonModule, ReactiveFormsModule, Logo],
  templateUrl: './donate.html',
  styleUrl: './donate.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Donate {
  private missionFieldDataService = inject(MissionFieldDataService);
  private paystackService = inject(PaystackService);

  selectedCategory: DonationCategory | '' = '';
  selectedItemId = '';

  donor = {
    name: '',
    email: '',
    phone: '',
    amount: null as number | null,
  };

  paymentMessage = '';
  paymentStatus: 'success' | 'error' | 'cancelled' | '' = '';
  isProcessing = false;

  // Connect these to the actual outreach and training data
  // when those data services are ready.
  outreachItems: DonationItem[] = [];
  trainingItems: DonationItem[] = [];

  get availableItems(): DonationItem[] {
    if (this.selectedCategory === 'mission-field') {
      return this.missionFieldDataService.getMissionFields().map((field) => ({
        id: field.id,
        name: field.name,
        description: field.description,
      }));
    }

    if (this.selectedCategory === 'outreach') {
      return this.outreachItems;
    }

    if (this.selectedCategory === 'training') {
      return this.trainingItems;
    }

    return [];
  }

  get selectedItem(): DonationItem | undefined {
    return this.availableItems.find((item) => item.id === this.selectedItemId);
  }

  onCategoryChange(): void {
    this.selectedItemId = '';
    this.clearPaymentMessage();
  }

  onItemChange(): void {
    this.clearPaymentMessage();
  }

  clearPaymentMessage(): void {
    this.paymentMessage = '';
    this.paymentStatus = '';
  }

  startPayment(form: NgForm): void {
    this.clearPaymentMessage();

    const selectedItem = this.selectedItem;
    const amount = this.donor.amount;

    if (form.invalid || !this.selectedCategory || !selectedItem) {
      this.paymentStatus = 'error';
      this.paymentMessage =
        'Please complete your details and select a specific mission or programme.';
      return;
    }

    if (!amount || amount < 100) {
      this.paymentStatus = 'error';
      this.paymentMessage = 'The minimum donation amount is ₦100.';
      return;
    }

    this.isProcessing = true;

    try {
      this.paystackService.initializePayment(
        {
          name: this.donor.name,
          email: this.donor.email,
          phone: this.donor.phone,
          amount,
          category: this.selectedCategory,
          itemName: selectedItem.name,
          itemId: selectedItem.id,
        },
        (response) => {
          this.isProcessing = false;
          this.paymentStatus = 'success';
          this.paymentMessage =
            `Payment submitted. Reference: ${response.reference}. ` +
            'Final confirmation is subject to transaction verification.';
        },
        () => {
          this.isProcessing = false;
          this.paymentStatus = 'cancelled';
          this.paymentMessage =
            'You closed the payment window. You can try again whenever you are ready.';
        },
      );
    } catch (error) {
      this.isProcessing = false;
      this.paymentStatus = 'error';
      this.paymentMessage =
        error instanceof Error
          ? error.message
          : 'Unable to open Paystack checkout. Please try again.';
    }
  }
}
