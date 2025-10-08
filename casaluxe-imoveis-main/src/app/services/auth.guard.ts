import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = () => {
  const current = localStorage.getItem('aurea_current_user');
  return !!current;
};
