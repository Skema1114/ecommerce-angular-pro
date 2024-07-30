import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { getParams } from './get-params';

@Component({
  selector: 'ecommerce-angular-pro-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
})
export class ProductDetailComponent {
  id$ = getParams();
}
