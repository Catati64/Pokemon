import { Routes } from '@angular/router';
import { guardiaSesionGuard } from './guard/guard-session.guard';
import { MainComponent } from './components/main/main.component';

export const routes: Routes = [{ path: 'main', component: MainComponent, canActivate: [guardiaSesionGuard] }];
