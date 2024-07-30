import { Component, inject } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { LayoutModule } from '@ecommerce-angular-pro/layout';
import { CartService } from '@ecommerce-angular-pro/product-data-access';
import { ProductSearchComponent } from '@ecommerce-angular-pro/product-search';
import { CartComponent } from '@ecommerce-angular-pro/product-ui';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    LayoutModule,
    ProductSearchComponent,
    MatSnackBarModule,
    CartComponent,
  ],
  selector: 'ecommerce-angular-pro-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  quantity = inject(CartService).quantity;
}
