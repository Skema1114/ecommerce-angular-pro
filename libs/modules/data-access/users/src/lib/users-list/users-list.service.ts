import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class UsersListService {
  readonly apiUrl = 'https://65009f9718c34dee0cd53786.mockapi.io';

  private http = inject(HttpClient);

  constructor() {}

  /**
   * @description Lista os usuários
   * @returns {User[]} Lista de usuários
   */
  listUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiUrl}/users/`);
  }

  /**
   * @description Busca usuário pelo id
   * @param id Id do usuário
   * @returns {User} Usuário
   */
  getById(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/users/${id}`);
  }
}
