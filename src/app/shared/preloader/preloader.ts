import { Component, inject } from '@angular/core';
import {
  NavigationCancel,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router,
} from '@angular/router';
import { filter } from 'rxjs';
import { Logo } from '../logo/logo';

@Component({
  selector: 'app-preloader',
  standalone: true,
  imports: [Logo],
  templateUrl: './preloader.html',
  styleUrl: './preloader.css',
})
export class Preloader {
  private router = inject(Router);
  private loadingStartedAt = 0;

  isLoading = false;

  constructor() {
    this.router.events
      .pipe(
        filter(
          (event) =>
            event instanceof NavigationStart ||
            event instanceof NavigationEnd ||
            event instanceof NavigationCancel ||
            event instanceof NavigationError,
        ),
      )
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          this.isLoading = true;
          this.loadingStartedAt = Date.now();
        } else {
          const elapsed = Date.now() - this.loadingStartedAt;
          const remaining = Math.max(0, 1800 - elapsed);

          setTimeout(() => {
            this.isLoading = false;
          }, remaining);
        }
      });
  }
}
