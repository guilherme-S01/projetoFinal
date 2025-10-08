import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/auth/login.component';
import { SignupComponent } from './pages/auth/signup.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { authGuard } from './services/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [authGuard] },
  // site pages
  { path: 'imoveis', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'sobre', loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
  { path: 'contato', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) },
  { path: 'termos', loadComponent: () => import('./pages/terms/terms.component').then(m => m.TermsComponent) }
];
