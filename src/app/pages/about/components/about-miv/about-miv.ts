import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollReveal } from '../../../../shared/scroll-reveal';
import { Logo } from '../../../../shared/logo/logo';

@Component({
  selector: 'app-about-miv',
  imports: [RouterLink, ScrollReveal, Logo],
  templateUrl: './about-miv.html',
  styleUrl: './about-miv.css',
})
export class AboutMiv {

}
