import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import {
  mockUsers,
  UsersListService,
} from '@ecommerce-admin/users-data-access';
import { of } from 'rxjs';
import { ListUsersComponent } from './list-users.component';

describe('ListUsersComponent', () => {
  let component: ListUsersComponent;
  let fixture: ComponentFixture<ListUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListUsersComponent, RouterModule.forRoot([])],
      providers: [
        {
          provide: UsersListService,
          useValue: {
            listUsers: () => of(mockUsers),
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ListUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render cards users correctly', () => {
    const cards: HTMLElement[] = fixture.nativeElement.querySelectorAll(
      'ecommerce-angular-pro-users-list-item'
    );
    expect(cards.length).toBe(mockUsers.length);
  });
});
