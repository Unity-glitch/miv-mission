import { Component } from '@angular/core';
import { ScrollReveal } from '../../../../shared/scroll-reveal';

@Component({
  selector: 'app-testimonies',
  imports: [ScrollReveal],
  templateUrl: './testimonies.html',
  styleUrl: './testimonies.css',
})
export class Testimonies {
  testimonies = [
    {
      name: 'A Life Touched by the Gospel',
      role: 'A Story of Faith',
      message:
        'The message of Christ brings hope, strength and a renewed sense of purpose. Through the love of God, lives can find a new beginning.',
      initial: 'F',
    },
    {
      name: 'Hope in the Community',
      role: 'Community Impact',
      message:
        'When faith is expressed through love and service, communities are encouraged and people experience the difference that genuine care can make.',
      initial: 'H',
    },
    {
      name: 'Growing Stronger in Faith',
      role: 'Spiritual Growth',
      message:
        'Through prayer, the Word of God and fellowship, believers are encouraged to grow in faith and share the hope of Jesus Christ with others.',
      initial: 'G',
    },
  ];
}
