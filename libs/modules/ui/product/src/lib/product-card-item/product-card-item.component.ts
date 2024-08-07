import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { Product } from '@ecommerce-angular-pro/product-data-access';

@Component({
  selector: 'ecommerce-angular-pro-product-card-item',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './product-card-item.component.html',
  styleUrl: './product-card-item.component.scss',
})
export class ProductCardItemComponent {
  @Input() data!: Product;
  @Output() removeProduct = new EventEmitter<Product>();

  /**
   * @description Emite o evento de remoção do produto
   */
  onRemoveProduct(): void {
    this.removeProduct.emit(this.data);
  }
}
