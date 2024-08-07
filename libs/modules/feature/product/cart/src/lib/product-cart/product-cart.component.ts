import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import {
  CartService,
  Product,
} from '@ecommerce-angular-pro/product-data-access';
import { ProductCardItemComponent } from '@ecommerce-angular-pro/product-ui';
import { Observable } from 'rxjs';

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
    ProductCardItemComponent,
  ],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.scss',
})
export class ProductCartComponent {
  private cartService: CartService = inject(CartService);

  cart$: Observable<Product[]> = this.cartService.cart$;
  generalPrice$: Observable<number> = this.cartService.generalPrice$;

  /**
   * @description Remove o produto do carrinho de compras
   * @param {Product} product Produto a ser removido
   */
  onRemoveProduct(product: Product): void {
    this.cartService.removeFromCart(product);
  }
}
