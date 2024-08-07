import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '@ecommerce-angular-pro/auth-data-access';
import { AuthFormComponent } from '../auth-form.component';

@Component({
  selector: 'ecommerce-angular-pro-auth-form-password',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  templateUrl: './auth-form-password.component.html',
  styleUrl: './auth-form-password.component.scss',
})
export class AuthFormPasswordComponent {
  emailValue = inject(AuthFormComponent).form.controls.email.value;
  control = inject(AuthFormComponent).form.controls.password;
  authService = inject(AuthService);
  router = inject(Router);

  /**
   * @description Realiza o login do usuário e navega para a home
   */
  login(): void {
    this.authService.setEmail(this.emailValue);
    this.router.navigate(['/']);
  }
}
