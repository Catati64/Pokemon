import { CanActivateFn } from '@angular/router';

export const guardSessionGuard: CanActivateFn = (route, state) => {
  return true;
};
