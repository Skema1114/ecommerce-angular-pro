import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('@ecommerce-angular-pro/home').then((c) => c.homeRoutes),
  },
  {
    path: 'product',
    loadChildren: () =>
      import('@ecommerce-angular-pro/product-detail').then(
        (c) => c.productDetailRoutes
      ),
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('@ecommerce-angular-pro/auth-form').then((c) => c.authFormRoutes),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('@ecommerce-angular-pro/auth-form').then((c) => c.authFormRoutes),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('@ecommerce-admin/users-list').then((m) => m.listUsersRoutes),
  },
  {
    path: 'admin/details',
    loadChildren: () =>
      import('@ecommerce-admin/users-details').then((m) => m.detailUsersRoutes),
  },
];
