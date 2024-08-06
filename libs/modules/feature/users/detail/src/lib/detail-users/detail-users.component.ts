import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { RouterModule } from '@angular/router';
import { User, UsersListService } from '@ecommerce-admin/users-data-access';
import { getParams } from '@ecommerce-angular-pro/product-detail';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'ecommerce-angular-pro-detail-users',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatChipsModule,
  ],
  templateUrl: './detail-users.component.html',
  styleUrl: './detail-users.component.scss',
})
export class DetailUsersComponent {
  private usersService = inject(UsersListService);

  users$: Observable<User> = getParams().pipe(
    switchMap((id) => this.usersService.getById(id))
  );

  userSignal = toSignal(this.users$);
}
