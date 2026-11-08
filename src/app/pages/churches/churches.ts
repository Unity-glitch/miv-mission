import { Component } from '@angular/core';
import { ScrollReveal } from '../../shared/scroll-reveal';
import { CommonModule } from '@angular/common';
import { ChurchDirectory } from './components/church-directory/church-directory';
import { ChurchPartnership } from './components/church-partnership/church-partnership';

@Component({
  selector: 'app-churches',
  imports: [CommonModule, ScrollReveal, ChurchDirectory, ChurchPartnership],
  templateUrl: './churches.html',
  styleUrl: './churches.css',
})
export class Churches {}
