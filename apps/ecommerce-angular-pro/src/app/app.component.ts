import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@ecommerce-angular-pro/layout';
import { CartService } from '@ecommerce-angular-pro/product-data-access';
import { ProductSearchComponent } from '@ecommerce-angular-pro/product-search';
import { CartComponent } from '@ecommerce-angular-pro/product-ui';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    LayoutModule,
    ProductSearchComponent,
    MatSnackBarModule,
    CartComponent,
    MatToolbarModule,
    MatIcon,
  ],
  selector: 'ecommerce-angular-pro-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  private cartService: CartService = inject(CartService);
  quantity$ = this.cartService.quantity$;
}
