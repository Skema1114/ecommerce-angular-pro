import { Injectable } from '@angular/core';
import { BehaviorSubject, map } from 'rxjs';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartSubject$ = new BehaviorSubject<Product[]>([]);
  cart$ = this.cartSubject$.asObservable();
  quantity$ = this.cart$.pipe(map((products) => products.length));
  generalPrice$ = this.cart$.pipe(
    map((products) =>
      products.reduce((acc, product) => acc + parseFloat(product.price), 0)
    )
  );

  addToCart(product: Product): void {
    this.cartSubject$.next([...this.cartSubject$.getValue(), product]);
  }

  removeFromCart(product: Product): void {
    const currentCart = this.cartSubject$.getValue();
    const index = currentCart.findIndex((p) => p.id === product.id);
    if (index !== -1) {
      const updatedCart = [...currentCart];
      updatedCart.splice(index, 1);
      this.cartSubject$.next(updatedCart);
    }
  }

  // FORMA COM SIGNALS
  // private cartSignal = signal<Product[]>([]);
  // cart = this.cartSignal.asReadonly();
  // quantity = computed(() => this.cart().length);
  //
  // addToCart(product: Product) {
  //   const currentCart = this.cartSubject$.getValue();
  //   this.cartSubject$.next([...currentCart, product]);
  // }
}
