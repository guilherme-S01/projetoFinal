import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule]
})
export class CarouselComponent {
  @Input() items: { imageUrl: string; title?: string }[] = [];
  active = 0;

  prev() {
    this.active = (this.active - 1 + this.items.length) % this.items.length;
  }

  next() {
    this.active = (this.active + 1) % this.items.length;
  }
}
