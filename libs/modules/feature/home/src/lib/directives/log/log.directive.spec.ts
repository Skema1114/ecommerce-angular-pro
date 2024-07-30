import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { mockProducts } from '@ecommerce-angular-pro/product-data-access';
import { ProductCardComponent } from '@ecommerce-angular-pro/product-ui';
import { LogDirective } from './log.directive';

@Component({
  template: `
    <ecommerce-angular-pro-product-card
      ecommerceAngularProLog
      [product]="product"
    ></ecommerce-angular-pro-product-card>
  `,
})
class HostComponent {
  product = mockProducts[0];
}

describe('LogDirective', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HostComponent],
      imports: [LogDirective, ProductCardComponent],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should have cursor pointer', () => {
    const fixture = TestBed.createComponent(HostComponent);
    fixture.detectChanges();
    const card: HTMLElement = fixture.nativeElement.querySelector(
      'ecommerce-angular-pro-product-card'
    );
    expect(card.style.cursor).toBe('pointer');
  });
});
