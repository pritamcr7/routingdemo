import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartHomePageComponent } from './cart-home-page.component';

describe('CartHomePageComponent', () => {
  let component: CartHomePageComponent;
  let fixture: ComponentFixture<CartHomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartHomePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
