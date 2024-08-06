import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { UsersListService } from '@ecommerce-admin/users-data-access';

@Component({
  selector: 'ecommerce-angular-pro-list-users',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, RouterModule],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.scss',
})
export class ListUsersComponent {
  userService = inject(UsersListService);

  users$ = this.userService.listUsers();
  displayedColumns: string[] = [
    'avatar',
    'name',
    'email',
    'biography',
    'actions',
  ];
}
