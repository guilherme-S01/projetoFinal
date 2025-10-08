import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  imports: [CommonModule, FormsModule]
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';
  sent = false;

  send() {
    const messages = JSON.parse(localStorage.getItem('aurea_messages') || '[]');
    messages.push({ name: this.name, email: this.email, message: this.message, at: new Date().toISOString() });
    localStorage.setItem('aurea_messages', JSON.stringify(messages));
    this.sent = true;
    this.name = this.email = this.message = '';
  }
}
