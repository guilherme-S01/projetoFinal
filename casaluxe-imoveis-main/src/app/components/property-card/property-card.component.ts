import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Property } from '../../models/property.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-property-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PropertyCardComponent {
  @Input() public property!: Property;

  readonly FALLBACK_SVG = 'data:image/svg+xml;utf8,' + encodeURIComponent(`
    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="250">
      <rect width="100%" height="100%" fill="#C0B283" />
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="#333" font-family="sans-serif" font-size="20">casaLux imobiliaria</text>
    </svg>
  `);

  onImgError(event: Event) {
    const img = event.target as HTMLImageElement;
    if (img && img.src !== this.FALLBACK_SVG) {
      img.src = this.FALLBACK_SVG;
    }
  }
}
