import { Component } from '@angular/core';
import { ScrollReveal } from '../../../../shared/scroll-reveal';
import { Logo } from '../../../../shared/logo/logo';

@Component({
  selector: 'app-about-founder',
  imports: [ScrollReveal, Logo],
  templateUrl: './about-founder.html',
  styleUrl: './about-founder.css',
})
export class AboutFounder {}
