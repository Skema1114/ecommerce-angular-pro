import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  inject,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import { Router } from '@angular/router';
import { ProductCardComponent } from '@ecommerce-angular-pro/product-ui';

@Directive({
  selector: '[ecommerceAngularProLog]',
  standalone: true,
})
export class LogDirective implements OnInit {
  @Output() doubleClick = new EventEmitter<void>();

  router = inject(Router);
  productCardComponent = inject(ProductCardComponent);
  elementRef = inject(ElementRef);
  renderer = inject(Renderer2);

  /**
   * @description Navega para a página de detalhes do produto
   */
  @HostListener('click', ['$event'])
  onClick(): void {
    this.router.navigate(['product', this.productCardComponent.product.id]);
  }

  /**
   * @description Emite um evento de clique duplo
   */
  @HostListener('dblclick', ['$event'])
  onDoubleClick(): void {
    this.doubleClick.emit();
  }

  ngOnInit(): void {
    this.renderer.setStyle(this.elementRef.nativeElement, 'cursor', 'pointer');
  }
}
