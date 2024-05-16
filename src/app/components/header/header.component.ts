import { Component, OnInit} from '@angular/core';
import { User } from '../../classes/user';
import { ObservablesService } from '../../services/observables.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatButton, MatIconButton } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { MatGridList, MatGridTile } from '@angular/material/grid-list';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MatButton, MatIconButton, MatButtonModule, MatDividerModule, MatIconModule, MatGridList, MatGridTile],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit {
  email: string = '';
  loggedIn: boolean = false; // Add a property to track login status

  constructor(
    private observablesService: ObservablesService,
    private router: Router // Inject Router for navigation
  ) { }

  ngOnInit(): void {
    this.observablesService.userObs.subscribe((user: User) => {
      this.email = user.email;
    });
    this.observablesService.loggedObs.subscribe((valor: boolean) => {
      this.loggedIn = valor;
    });
  }

  logout(): void {
    this.loggedIn = false; // Update login status
    this.email = ''; // Clear email
    this.observablesService.actualizarValorLogged(this.loggedIn, this.email);
    this.router.navigateByUrl('/'); // Navigate to root route
  }
}