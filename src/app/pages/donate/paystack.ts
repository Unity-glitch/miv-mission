import { Injectable } from '@angular/core';

export interface PaystackDonation {
  name: string;
  email: string;
  phone: string;
  amount: number;
  category: string;
  itemName: string;
  itemId: string;
}

export interface PaystackResponse {
  reference: string;
}

interface PaystackOptions {
  key: string;
  email: string;
  amount: number;
  currency: string;
  ref: string;
  metadata: {
    custom_fields: {
      display_name: string;
      variable_name: string;
      value: string;
    }[];
  };
  callback: (response: PaystackResponse) => void;
  onClose: () => void;
}

declare const PaystackPop: {
  setup(options: PaystackOptions): {
    openIframe(): void;
  };
};

@Injectable({
  providedIn: 'root',
})
export class PaystackService {
  private readonly publicKey = 'pk_test_c0c45f0244f0cddfb56cfebfa10156afec57fbdc';

  initializePayment(
    donation: PaystackDonation,
    onSuccess: (response: PaystackResponse) => void,
    onClose: () => void,
  ): void {
    if (typeof PaystackPop === 'undefined') {
      throw new Error('Paystack checkout could not be loaded.');
    }

    const handler = PaystackPop.setup({
      key: this.publicKey,
      email: donation.email,
      amount: Math.round(donation.amount * 100),
      currency: 'NGN',
      ref: `MIV-${Date.now()}`,

      metadata: {
        custom_fields: [
          {
            display_name: 'Donor Name',
            variable_name: 'donor_name',
            value: donation.name,
          },
          {
            display_name: 'Phone Number',
            variable_name: 'phone_number',
            value: donation.phone || 'Not provided',
          },
          {
            display_name: 'Donation Category',
            variable_name: 'donation_category',
            value: donation.category,
          },
          {
            display_name: 'Selected Mission or Programme',
            variable_name: 'donation_item',
            value: donation.itemName,
          },
          {
            display_name: 'Selected Item ID',
            variable_name: 'donation_item_id',
            value: donation.itemId,
          },
        ],
      },

      callback: onSuccess,
      onClose,
    });

    handler.openIframe();
  }
}
