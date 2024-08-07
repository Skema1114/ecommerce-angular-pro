import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '',
  },
  {
    path: '',
    loadChildren: () =>
      import('@ecommerce-admin/users-list').then((m) => m.listUsersRoutes),
  },
  {
    path: 'details',
    loadChildren: () =>
      import('@ecommerce-admin/users-details').then((m) => m.detailUsersRoutes),
  },
];
