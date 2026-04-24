import { Component, inject } from '@angular/core';
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

@Component({
  selector: 'app-register',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {
  private formBuilder = inject(FormBuilder);
  private formErrorService = inject(FormErrorService);

  passwordMatchValidator: ValidatorFn = (group: AbstractControl): ValidationErrors | null => {
    const password = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;

    return password === confirm ? null : { passwordMismatch: true };
  };

  registerForm: FormGroup = this.formBuilder.group(
    {
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[^A-Za-z\\d]).{10,}$'),
        ],
      ],
      confirmPassword: ['', Validators.required],
    },
    {
      validators: this.passwordMatchValidator,
    },
  );

  getError(name: string) {
    return this.formErrorService.getError(this.registerForm, name);
  }

  registerSubmit() {
    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }
  }

}
