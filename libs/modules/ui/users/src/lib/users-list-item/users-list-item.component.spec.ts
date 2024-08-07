import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { mockUsers } from '@ecommerce-admin/users-data-access';
import { UsersListItemComponent } from './users-list-item.component';

describe('UsersListItemComponent', () => {
  let component: UsersListItemComponent;
  let fixture: ComponentFixture<UsersListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsersListItemComponent, RouterModule.forRoot([])],
    }).compileComponents();

    fixture = TestBed.createComponent(UsersListItemComponent);
    component = fixture.componentInstance;
    component.data = mockUsers[0];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render user card info correctly', () => {
    const card: HTMLElement = fixture.nativeElement.querySelector('mat-card');
    expect(card.textContent).toContain(component.data.name);
    expect(card.textContent).toContain(component.data.biography);
    expect(card.textContent).toContain(component.data.email);
  });
});
