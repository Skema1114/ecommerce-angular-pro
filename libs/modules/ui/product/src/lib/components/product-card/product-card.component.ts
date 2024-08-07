import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { Product } from '@ecommerce-angular-pro/product-data-access';

@Component({
  selector: 'ecommerce-angular-pro-product-card',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatProgressSpinnerModule],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.scss',
})
export class ProductCardComponent {
  @Input() product!: Product;
  isLoading: boolean = true;

  onImageLoad(): void {
    this.isLoading = false;
  }
}
