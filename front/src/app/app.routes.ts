import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../feature/pays/page/pays-page/pays-page').then((m) => m.PaysPage),
    title: 'Pays',
  },
  {
    path: ':uuid',
    loadComponent: () => import('../feature/pays/components/card-pays/card-pays').then((m) => m.default),
    title: 'Pays detail',
  },
];
