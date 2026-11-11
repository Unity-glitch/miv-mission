import { Component, DOCUMENT, Inject } from '@angular/core';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, FormsModule, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  contactForm = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  };

  constructor(@Inject(DOCUMENT) private document: Document) {}

  submitContactForm(form: NgForm): void {
    if (form.invalid) {
      return;
    }

    const subject = encodeURIComponent(this.contactForm.subject);
    const body = encodeURIComponent(
      `Name: ${this.contactForm.name}\n` +
        `Email: ${this.contactForm.email}\n` +
        `Phone: ${this.contactForm.phone}\n\n` +
        `Message:\n${this.contactForm.message}`,
    );

    const mailtoLink = `mailto:mivmandate2010@gmail.com?subject=${subject}&body=${body}`;

    this.document.defaultView?.location.assign(mailtoLink);
  }
}
