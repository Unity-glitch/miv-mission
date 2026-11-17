import { Component } from '@angular/core';
import { TrainingHero } from './components/training-hero/training-hero';
import { TrainingAbout } from './components/training-about/training-about';

@Component({
  selector: 'app-training-mobilisation',
  imports: [TrainingHero, TrainingAbout],
  templateUrl: './training-mobilisation.html',
  styleUrl: './training-mobilisation.css',
})
export class TrainingMobilisation {

}
