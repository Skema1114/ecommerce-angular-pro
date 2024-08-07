import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { RecommendedProductsService } from '@ecommerce-angular-pro/product-data-access';
import { ProductCardComponent } from '@ecommerce-angular-pro/product-ui';
import { LogDirective } from '../directives/log/log.directive';

@Component({
  selector: 'ecommerce-angular-pro-home',
  standalone: true,
  imports: [CommonModule, ProductCardComponent, LogDirective, MatCardModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  products$ = this.recommendedProductsService.getProducts();

  constructor(private recommendedProductsService: RecommendedProductsService) {}
}
