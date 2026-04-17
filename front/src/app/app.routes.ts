import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('../feature/home/home').then((m) => m.Home),
    title: 'home',
  },
  {
    path: 'pays',
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../feature/pays/page/pays-page/pays-page').then((m) => m.PaysPage),
        title: 'Pays',
      },
      {
        path: 'ajouter-pays',
        loadComponent: () =>
          import('../feature/pays/page/add-pays-page/add-pays-page').then((m) => m.AddPaysPage),
        title: 'Ajouter un pays',
      },
      {
        path: ':uuid/modifier-pays',
        loadComponent: () =>
          import('../feature/pays/page/update-pays-page/update-pays-page').then((m) => m.UpdatePaysPage),
        title: 'Modfier un pays',
      },
      {
        path: ':uuid',
        loadComponent: () =>
          import('../feature/pays/components/card-pays/card-pays').then((m) => m.default),
        title: 'Pays detail',
      },
    ],
  },
];
