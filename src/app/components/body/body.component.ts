import { Component, OnInit } from '@angular/core';
import { LogInComponent } from '../log-in/log-in.component';
import { ObservablesService } from '../../services/observables.service';
import { CommonModule } from '@angular/common'
import { MainComponent } from '../main/main.component';
import { Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [LogInComponent, CommonModule, MainComponent, RouterOutlet],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent implements OnInit {
  logged: boolean = false;

  constructor(
    private observablesService: ObservablesService,
    private router: Router
  ) { }

  ngOnInit(): void {
      this.observablesService.loggedObs.subscribe((valor: boolean) => {
      this.logged = valor;
      if (valor) {
        this.router.navigate(['/main']);  // Navega a la ruta 'main'
      }
    });
  }
}

