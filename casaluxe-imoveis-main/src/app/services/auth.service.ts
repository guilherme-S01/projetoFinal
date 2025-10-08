import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface User {
  name: string;
  email: string;
  password: string;
}

const USERS_KEY = 'aurea_users';
const CURRENT_KEY = 'aurea_current_user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private router: Router) {}

  private readUsers(): User[] {
    try {
      return JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    } catch {
      return [];
    }
  }

  private writeUsers(users: User[]) {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  }

  register(user: User): { success: boolean; message?: string } {
    const users = this.readUsers();
    if (users.find((u) => u.email === user.email)) {
      return { success: false, message: 'Email já registado' };
    }
    users.push(user);
    this.writeUsers(users);
    localStorage.setItem(CURRENT_KEY, JSON.stringify(user));
    return { success: true };
  }

  login(email: string, password: string): { success: boolean; message?: string } {
    const users = this.readUsers();
    const found = users.find((u) => u.email === email && u.password === password);
    if (!found) return { success: false, message: 'Credenciais inválidas' };
    localStorage.setItem(CURRENT_KEY, JSON.stringify(found));
    return { success: true };
  }

  logout() {
    localStorage.removeItem(CURRENT_KEY);
    this.router.navigate(['/']);
  }

  currentUser(): User | null {
    try {
      return JSON.parse(localStorage.getItem(CURRENT_KEY) || 'null');
    } catch {
      return null;
    }
  }

  isLoggedIn(): boolean {
    return this.currentUser() != null;
  }
}
