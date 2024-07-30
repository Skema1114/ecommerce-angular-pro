import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  Product,
  ProductSearchService,
} from '@ecommerce-angular-pro/product-data-access';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  Observable,
  switchMap,
} from 'rxjs';

@Component({
  selector: 'ecommerce-angular-pro-product-search',
  standalone: true,
  imports: [
    CommonModule,
    MatAutocompleteModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  templateUrl: './product-search.component.html',
  styleUrl: './product-search.component.scss',
})
export class ProductSearchComponent implements OnInit {
  control = new FormControl('', { nonNullable: true });
  products$!: Observable<Product[]>;

  constructor(private productSearchService: ProductSearchService) {}

  ngOnInit() {
    this.products$ = this.control.valueChanges.pipe(
      // BORA UTILIZAR OS OPERADORES
      debounceTime(500),
      distinctUntilChanged(),
      filter((text) => text.length > 0),
      switchMap((text) => this.productSearchService.searchByName(text))
    );
  }
}
