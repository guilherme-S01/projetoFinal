import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PropertyService } from '../../services/property.service';
import { Property } from '../../models/property.model';
import { CommonModule } from '@angular/common';
import { PropertyCardComponent } from '../../components/property-card/property-card.component';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, PropertyCardComponent, FormsModule, CarouselComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  private propertyService = inject(PropertyService);
  public properties: Property[] = this.propertyService.getProperties();

  trackById(index: number, item: Property) {
    return item.id;
  }

  // Filter state
  public query: string = '';
  public minPrice: number | null = null;
  public maxPrice: number | null = null;

  get filteredProperties(): Property[] {
    return this.properties.filter((p) => {
      const matchesQuery = this.query
        ? p.title.toLowerCase().includes(this.query.toLowerCase())
        : true;
      const matchesMin = this.minPrice != null ? p.price >= this.minPrice : true;
      const matchesMax = this.maxPrice != null ? p.price <= this.maxPrice : true;
      return matchesQuery && matchesMin && matchesMax;
    });
  }

  get slides() {
    return this.properties.map(p => ({ imageUrl: p.imageUrl, title: p.title }));
  }
}
