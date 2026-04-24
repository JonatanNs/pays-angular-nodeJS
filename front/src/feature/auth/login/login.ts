import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormErrorService } from '../services/form-error-service';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private formBuilder = inject(FormBuilder);
  private formErrorMessage = inject(FormErrorService);

  loginForm: FormGroup = this.formBuilder.group({
    email:[ '', [Validators.required, Validators.email]],
    password : ['', [Validators.required]]
  });

  loginSubmit() {
  }

  getError(name: string){
    return this.formErrorMessage.getError(this.loginForm, name);
  }
}
