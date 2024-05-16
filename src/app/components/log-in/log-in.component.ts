import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormBuilder,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatError, MatFormFieldModule } from '@angular/material/form-field';
import { MatButton } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { ObservablesService } from '../../services/observables.service';

@Component({
  selector: 'app-log-in',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, CommonModule, MatButton, MatError, RouterLink],
  templateUrl: './log-in.component.html',
  styleUrl: './log-in.component.css'
})
export class LogInComponent {
  checkoutForm: any;
  logged: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private observablesService: ObservablesService,
  ) {
    this.checkoutForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }


  onSubmit() {
    if (this.checkoutForm.invalid) {
      // Display a more specific error message based on the invalid field(s)
      let errorMessage = '';
      if (this.checkoutForm.get('email')?.hasError('required')) {
        errorMessage += 'Email is required. ';
      }
      if (this.checkoutForm.get('email')?.hasError('email')) {
        errorMessage += 'Please enter a valid email address. ';
      }
      if (this.checkoutForm.get('password')?.hasError('required')) {
        errorMessage += 'Password is required. ';
      }
      if (this.checkoutForm.get('password')?.hasError('minlength')) {
        errorMessage += 'Password must be at least 6 characters long. ';
      }
      alert(errorMessage.trim()); // Trim trailing whitespace
    } else {
      // Handle successful form submission (e.g., call a login service)
      console.log('Form submitted successfully!', this.checkoutForm.value);
      this.logged = true;
      this.observablesService.actualizarValorLogged(this.logged, this.checkoutForm.value.email);
      this.checkoutForm.reset(); // Clear the form for the next attempt
    }
  }
}