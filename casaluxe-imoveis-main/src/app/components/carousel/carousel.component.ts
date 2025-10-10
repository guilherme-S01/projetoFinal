import { Component, Input, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-carousel',
  standalone: true,
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
  imports: [CommonModule]
})
export class CarouselComponent implements OnInit, OnDestroy {
  @Input() items: { imageUrl: string; title?: string }[] = [];
  @Input() autoplay: boolean = false;
  @Input() autoplayInterval: number = 5000; // 5 segundos

  active = 0;
  private autoplayTimer?: number;

  ngOnInit() {
    if (this.autoplay && this.items.length > 1) {
      this.startAutoplay();
    }
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    if (this.items.length <= 1) return;

    switch (event.key) {
      case 'ArrowLeft':
        event.preventDefault();
        this.prev();
        break;
      case 'ArrowRight':
        event.preventDefault();
        this.next();
        break;
    }
  }

  private startAutoplay() {
    this.autoplayTimer = window.setInterval(() => {
      this.next();
    }, this.autoplayInterval);
  }

  private stopAutoplay() {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
      this.autoplayTimer = undefined;
    }
  }

  onMouseEnter() {
    if (this.autoplay) {
      this.stopAutoplay();
    }
  }

  onMouseLeave() {
    if (this.autoplay && this.items.length > 1) {
      this.startAutoplay();
    }
  }

  prev() {
    if (this.items.length <= 1) return;
    this.active = (this.active - 1 + this.items.length) % this.items.length;
  }

  next() {
    if (this.items.length <= 1) return;
    this.active = (this.active + 1) % this.items.length;
  }

  goToSlide(index: number) {
    this.active = index;

    // Reinicia o autoplay se estiver ativo
    if (this.autoplay && this.items.length > 1) {
      this.stopAutoplay();
      this.startAutoplay();
    }
  }
}
