import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';
import { User } from '@ecommerce-admin/users-data-access';

@Component({
  selector: 'ecommerce-angular-pro-users-list-item',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    RouterModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
  ],
  templateUrl: './users-list-item.component.html',
  styleUrl: './users-list-item.component.scss',
})
export class UsersListItemComponent {
  @Input() data!: User;
}
