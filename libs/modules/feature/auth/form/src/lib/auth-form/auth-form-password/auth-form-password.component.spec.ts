import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { AuthFormComponent } from '../auth-form.component';
import { AuthFormPasswordComponent } from './auth-form-password.component';

describe('AuthFormPasswordComponent', () => {
  let component: AuthFormPasswordComponent;
  let fixture: ComponentFixture<AuthFormPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthFormPasswordComponent, NoopAnimationsModule],
      providers: [AuthFormComponent, provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(AuthFormPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should enable button when control is valid', () => {
    const button: HTMLButtonElement = fixture.nativeElement.querySelector(
      '[data-testid="enter-button"]'
    );
    expect(button.disabled).toBe(true);

    component.control.setValue('123456');
    fixture.detectChanges();

    expect(button.disabled).toBe(false);
  });

  it('should display required error message', () => {
    component.control.markAsTouched();
    fixture.detectChanges();
    const error: HTMLElement = fixture.nativeElement.querySelector(
      '[data-testid="error-required"]'
    );
    expect(error).toBeTruthy();
  });
});
