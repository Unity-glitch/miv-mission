import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ScrollReveal } from '../scroll-reveal';

@Component({
  selector: 'app-hero-section',
  imports: [RouterLink, ScrollReveal],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
})
export class HeroSection implements OnInit, OnDestroy {


  images = [
    '/images/home-img1.jpeg',
    '/images/home-img2.jpeg',
    '/images/home-img3.jpeg',
    '/images/home-img4.jpeg',
  ];

  activeImageIndex = 0;
  imageInterval: ReturnType<typeof setInterval> | undefined;

  ngOnInit(): void {
    this.imageInterval = setInterval(() => {
      this.activeImageIndex = (this.activeImageIndex + 1) % this.images.length;
    }, 5000);
  }

  ngOnDestroy(): void {
    if (this.imageInterval) {
      clearInterval(this.imageInterval);
    }
  }
}
