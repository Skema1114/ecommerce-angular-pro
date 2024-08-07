import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HeaderComponent } from './header.component';

const mockTitle = 'Mock Title';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    component.title = mockTitle;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain title', () => {
    const header: HTMLHeadingElement =
      fixture.nativeElement.querySelector('header');
    expect(header.textContent).toBe(mockTitle);

    const anotherMock = 'Another mock';
    component.title = anotherMock;
    fixture.detectChanges();

    expect(header.textContent).toBe(anotherMock);
  });

  it('should redirect to "/" when title is clicked', () => {
    const anchor: HTMLAnchorElement = fixture.nativeElement.querySelector('a');
    expect(anchor.getAttribute('href')).toBe('/');
  });
});
