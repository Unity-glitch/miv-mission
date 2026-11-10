import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Preloader } from './shared/preloader/preloader';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Preloader],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('miv-mission');
}
