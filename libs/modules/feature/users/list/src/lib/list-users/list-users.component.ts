import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { UsersListService } from '@ecommerce-admin/users-data-access';
import { UsersListItemComponent } from '@ecommerce-angular-pro/users-list-item';

@Component({
  selector: 'ecommerce-angular-pro-list-users',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    UsersListItemComponent,
  ],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.scss',
})
export class ListUsersComponent {
  private userService = inject(UsersListService);

  users$ = this.userService.listUsers();
  displayedColumns: string[] = [
    'avatar',
    'name',
    'email',
    'biography',
    'actions',
  ];
}
