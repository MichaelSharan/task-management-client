import { CanActivateFn } from '@angular/router';
import { Role } from '../models/auth.model';

export const adminGuard: CanActivateFn = (route, state) => {
  return localStorage.getItem('userRole') as Role === 'Admin'
};
