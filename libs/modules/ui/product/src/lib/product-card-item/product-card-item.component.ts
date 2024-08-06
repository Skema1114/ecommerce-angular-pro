import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Product } from '@ecommerce-angular-pro/product-data-access';

@Component({
  selector: 'ecommerce-angular-pro-product-card-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card-item.component.html',
  styleUrl: './product-card-item.component.scss',
})
export class ProductCardItemComponent {
  @Input() data!: Product;
}
