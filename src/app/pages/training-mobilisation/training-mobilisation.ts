import { Component } from '@angular/core';
import { TrainingHero } from './components/training-hero/training-hero';
import { TrainingAbout } from './components/training-about/training-about';
import { TrainingCourses } from './components/training-courses/training-courses';

@Component({
  selector: 'app-training-mobilisation',
  imports: [TrainingHero, TrainingAbout, TrainingCourses],
  templateUrl: './training-mobilisation.html',
  styleUrl: './training-mobilisation.css',
})
export class TrainingMobilisation {

}
