import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authloginGuard: CanActivateFn = (route, state) => {
  const _ROUTER = inject(Router);
  if (localStorage.getItem('token')) {
    return true;
  }
  else {
    _ROUTER.navigate(['']);
    return false;
  }
};
