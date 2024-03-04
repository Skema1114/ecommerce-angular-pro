import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { LayoutModule } from '@ecommerce-angular-pro/layout';
import { ProductSearchComponent } from '@ecommerce-angular-pro/product-search';
import { NxWelcomeComponent } from './nx-welcome.component';

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    LayoutModule,
    ProductSearchComponent,
  ],
  selector: 'ecommerce-angular-pro-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'ecommerce-angular-pro';
}
