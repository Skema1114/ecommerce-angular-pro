import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, inject, Signal } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {
  CartService,
  Product,
} from '@ecommerce-angular-pro/product-data-access';

@Component({
  selector: 'ecommerce-angular-pro-product-cart',
  standalone: true,
  imports: [
    CommonModule,
    CurrencyPipe,
    MatCardModule,
    MatListModule,
    MatChipsModule,
    MatIconModule,
  ],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.scss',
})
export class ProductCartComponent {
  cart: Signal<Product[]> = inject(CartService).cart;
}

export interface CartItem {
  createdAt: string;
  name: string;
  price: string;
  description: string;
  image: string;
  quantity: number;
  id: string;
}
