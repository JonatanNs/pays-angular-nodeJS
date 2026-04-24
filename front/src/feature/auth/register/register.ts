import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { FormErrorService } from '../services/form-error-service';
import { ApiAuthService } from '../../../core/api/auth/api-auth.service';
import { ApiMessageService } from '../../../core/api/api.message.service';
import { IUser } from '../../../core/models/IUser';

@Component({
  selector: 'app-register',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  private formBuilder = inject(FormBuilder);
  private formErrorService = inject(FormErrorService);
  private authService = inject(ApiAuthService);
  private apiMessageService = inject(ApiMessageService);

  passwordMatchValidator: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    const password = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;

    return password === confirm ? null : { passwordMismatch: true };
  };

  registerForm: FormGroup = this.formBuilder.group(
    {
      username: ['john123', [Validators.required, Validators.minLength(3)]],
      email: ['john@gmail.com', [Validators.required, Validators.email]],
      password: [
        'John12345#',
        [
          Validators.required,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[^A-Za-z\\d]).{10,}$'),
        ],
      ],
      confirmPassword: ['John12345#', Validators.required],
    },
    {
      validators: this.passwordMatchValidator,
    },
  );

  getError(name: string) {
    return this.formErrorService.getError(this.registerForm, name);
  }

  user = signal<IUser | null>(null);

  registerSubmit() {
    if (this.registerForm.invalid) return;

    this.authService.register(this.registerForm.value).subscribe({
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
