import { Routes } from '@angular/router';
import { MainLayout } from './layouts/main-layout/main-layout';

export const routes: Routes = [
  {
    path: '',
    component: MainLayout,
    children: [
      {
        path: '',
        loadComponent: () => import('./pages/home/home').then((m) => m.Home),
      },
      {
        path: 'churches',
        loadComponent: () => import('./pages/churches/churches').then((m) => m.Churches),
      },
      {
        path: 'about',
        loadComponent: () => import('./pages/about/about').then((m) => m.About),
      },
      {
        path: 'mission-fields',
        loadComponent: () =>
          import('./pages/mission-fields/mission-fields').then((m) => m.MissionFields),
      },
      {
        path: 'mission-fields/:id',
        loadComponent: () =>
          import('./pages/mission-fields/mission-field-details/mission-field-details').then(
            (m) => m.MissionFieldDetails,
          ),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./pages/contact/contact').then((m) => m.Contact),
      },
    ],
  },
];
