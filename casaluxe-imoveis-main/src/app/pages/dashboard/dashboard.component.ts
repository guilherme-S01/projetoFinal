import { Component } from '@angular/core';
import { PropertyService } from '../../services/property.service';
import { AuthService } from '../../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  imports: [CommonModule]
})
export class DashboardComponent {
  constructor(public prop: PropertyService, public auth: AuthService) {}

  logout() {
    this.auth.logout();
  }

  get totalProperties() {
    return this.prop.getProperties().length;
  }

  get totalMessages() {
    try {
      const msgs = JSON.parse(localStorage.getItem('aurea_messages') || '[]');
      return msgs.length;
    } catch {
      return 0;
    }
  }

  get currentUserName() {
    const u = this.auth.currentUser();
    return u ? u.name : 'Visitante';
  }
}
