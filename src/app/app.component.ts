import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BodyComponent } from './components/body/body.component';
import { CommonModule } from '@angular/common';
import { MatGridListModule } from '@angular/material/grid-list'
import { ObservablesService } from './services/observables.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, CommonModule,HeaderComponent, FooterComponent, BodyComponent, 
    MatGridListModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
  title = 'Pokemon';
  logged: boolean = false;

  constructor(
    private observablesService: ObservablesService
  ) {

  }

  ngOnInit(): void {
      this.observablesService.loggedObs.subscribe((valor: boolean) => {
      this.logged = valor;
    });
  }
}
