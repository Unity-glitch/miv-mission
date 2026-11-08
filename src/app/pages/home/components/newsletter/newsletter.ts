import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollReveal } from '../../../../shared/scroll-reveal';

@Component({
  selector: 'app-newsletter',
  imports: [RouterLink, ScrollReveal],
  templateUrl: './newsletter.html',
  styleUrl: './newsletter.css',
})
export class Newsletter {

}
