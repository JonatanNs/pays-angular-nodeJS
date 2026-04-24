import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormErrorService } from '../services/form-error-service';
import { ApiAuthService } from '../../../core/api/auth/api-auth.service';
import { ApiMessageService } from '../../../core/api/api.message.service';
import { IUser } from '../../../core/models/IUser';

@Component({
  selector: 'app-login',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  private formBuilder = inject(FormBuilder);
  private formErrorMessage = inject(FormErrorService);
  private authService = inject(ApiAuthService);
  private apiMessageService = inject(ApiMessageService);

  loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });

  getError(name: string) {
    return this.formErrorMessage.getError(this.loginForm, name);
  }

  user = signal<IUser | null>(null);

  loginSubmit() {
    if (this.loginForm.invalid) return;

    this.authService.login(this.loginForm.value).subscribe({
      next: (res) => {
        this.user.set(res.data);
        this.apiMessageService.showSuccess(res.message);
      },
      error: (err) => {
        this.apiMessageService.showError(err.error.message);
      },
    });
  }
}
