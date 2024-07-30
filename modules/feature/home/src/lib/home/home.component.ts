import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { mockProducts } from '@ecommerce-angular-pro/product-data-access';

@Component({
  selector: 'ecommerce-angular-pro-home',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  products = mockProducts;
}
