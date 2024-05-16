import { Injectable, inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { ObservablesService } from '../services/observables.service';

@Injectable({ providedIn: 'root' })
class PermissionsService {
  logged: boolean = false;

  constructor(private observablesService: ObservablesService) { } // Inyecta ObservablesService

  puedeActivarRuta(rutaIngresada: string): boolean {
    this.observablesService.loggedObs.subscribe((valor: boolean) => {
      this.logged = valor;
    });
    if (rutaIngresada == 'main' && this.logged == false) {
      return false;
    } else {
      return true;
    }
  }
}

export const guardiaSesionGuard: CanActivateFn = (route, state) => {
  return inject(PermissionsService).puedeActivarRuta(route.url.toString());
};
