import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Header } from '../../shared/header/header';
import { Footer } from '../../shared/footer/footer';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [Header, Footer, RouterOutlet],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MainLayout {

}
