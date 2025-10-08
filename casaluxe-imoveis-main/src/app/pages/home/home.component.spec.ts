import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should filter properties by query', () => {
    component.query = 'Penthouse';
    const filtered = component.filteredProperties;
    expect(filtered.length).toBeGreaterThan(0);
    expect(filtered.every(p => p.title.toLowerCase().includes('penthouse'))).toBeTrue();
  });

  it('should filter by min and max price', () => {
    component.minPrice = 1000000;
    component.maxPrice = 3000000;
    const filtered = component.filteredProperties;
    expect(filtered.every(p => p.price >= 1000000 && p.price <= 3000000)).toBeTrue();
  });
});
