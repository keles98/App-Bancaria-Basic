import { CanActivateFn, Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import { inject } from '@angular/core';

export const sessionGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthenticationService);

  const isLoggedIn = await authService.isLoggedIn();
  console.log(isLoggedIn);

  // ESTA LOGEADO
  if (isLoggedIn) {
    return true;
  }

  // Navigate to the login page with extras
  return router.createUrlTree(['/login']);
};
