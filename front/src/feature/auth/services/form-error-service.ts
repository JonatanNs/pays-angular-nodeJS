import { Injectable } from '@angular/core';
import { FORM_ERROR_MESSAGES } from '../form.error.message';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormErrorService {

  getError(form: FormGroup, controlName: string): string | null {
    const control = form.get(controlName);

    console.log(control);

    if (!control || !control.errors) return null;

    const errorKey = Object.keys(control.errors)[0];

    return FORM_ERROR_MESSAGES[controlName]?.[errorKey] || null;
  }
}
