import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  Product,
  ProductSearchService,
} from '@ecommerce-angular-pro/product-data-access';
import { Observable, switchMap } from 'rxjs';
import { getParams } from './get-params';

@Component({
  selector: 'ecommerce-angular-pro-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  productSearchService = inject(ProductSearchService);

  product$: Observable<Product> = getParams().pipe(
    switchMap((id) => this.productSearchService.getById(id))
  );
}
