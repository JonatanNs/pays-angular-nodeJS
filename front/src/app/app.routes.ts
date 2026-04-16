import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () =>
      import('../feature/pays/page/pays-page/pays-page').then((m) => m.PaysPage), title: 'pays'
  },

];
