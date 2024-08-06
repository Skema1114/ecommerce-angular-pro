import { Route } from '@angular/router';
import { DetailUsersComponent } from './detail-users/detail-users.component';

export const detailUsersRoutes: Route[] = [
  { path: ':id', component: DetailUsersComponent },
];
