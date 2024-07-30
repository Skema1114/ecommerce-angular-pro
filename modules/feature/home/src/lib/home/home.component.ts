import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RecommendedProductsService } from '@ecommerce-angular-pro/product-data-access';
import { ProductCardComponent } from '@ecommerce-angular-pro/product-ui';

@Component({
  selector: 'ecommerce-angular-pro-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  products$ = this.recommendedProductsService.getProducts();

  constructor(private recommendedProductsService: RecommendedProductsService) {}
}
