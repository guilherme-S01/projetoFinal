import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  standalone: true,
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  imports: [CommonModule, FormsModule]
})
export class SignupComponent {
  name = '';
  email = '';
  password = '';
  error = '';
  acceptedTerms = false;

  constructor(private auth: AuthService, private router: Router) {}

  submit() {
    if (!this.acceptedTerms) {
      this.error = 'É necessário aceitar os termos de uso e a política de privacidade.';
      return;
    }

    const res = this.auth.register({ name: this.name, email: this.email, password: this.password });
    if (!res.success) {
      this.error = res.message || 'Erro';
      return;
    }
    this.router.navigate(['/dashboard']);
  }
}
