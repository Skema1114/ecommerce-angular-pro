import { CommonModule } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import {
  CartService,
  Product,
  ProductSearchService,
} from '@ecommerce-angular-pro/product-data-access';
import { ProductCardComponent } from '@ecommerce-angular-pro/product-ui';
import { Observable, switchMap } from 'rxjs';
import { QuantityDescriptionPipe } from '../pipes/quantity-description/quantity-description.pipe';
import { getParams } from './get-params';

@Component({
  selector: 'ecommerce-angular-pro-product-detail',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, QuantityDescriptionPipe],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  productSearchService = inject(ProductSearchService);

  product$: Observable<Product> = getParams().pipe(
    switchMap((id) => this.productSearchService.getById(id))
  );

  productSignal = toSignal(this.product$);
  cartService = inject(CartService);

  // count = signal(0);
  cart = signal<Product[]>([]);
  quantity = computed(() => this.cart().length);
  quantityObservable$ = toObservable(this.quantity);

  constructor() {
    effect(() => {
      // console.log('Quantidade no carrinho:', this.quantity());
    });
  }

  addToCart(product: Product): void {
    this.cart.update((value) => [...value, product]);
    // this.count.update((value) => value + 1);
  }
}
