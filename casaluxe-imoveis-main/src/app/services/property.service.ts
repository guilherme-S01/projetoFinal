import { Injectable, signal } from '@angular/core';
import { of } from 'rxjs';
import { PROPERTIES } from '../data/mock-properties';
import { Property } from '../models/property.model';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {
  private properties = signal<Property[]>(PROPERTIES);

  getProperties() {
    return this.properties();
  }
}
