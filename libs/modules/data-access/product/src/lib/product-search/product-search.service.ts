import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductSearchService {
  readonly apiUrl = 'https://65009f9718c34dee0cd53786.mockapi.io';

  private http = inject(HttpClient);

  constructor() {}

  /**
   * @description Busca produtos pelo nome
   * @param name Nome do produto
   * @returns {Product[]} Lista de produtos
   */
  searchByName(name: string): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiUrl}/products`, {
      params: {
        name,
      },
    });
  }

  /**
   * @description Busca produto pelo id
   * @param id Id do produto
   * @returns {Product} Produto
   */
  getById(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/products/${id}`);
  }
}
