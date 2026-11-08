import { Component } from '@angular/core';
import { Logo } from '../logo/logo';
import { RouterLink } from '@angular/router';
import { ScrollReveal } from '../scroll-reveal';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, Logo, ScrollReveal],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  currentYear = new Date().getFullYear()
}
