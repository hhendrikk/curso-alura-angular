import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({ providedIn: 'root' })
export class ValidatorFormError {
  formGroup: FormGroup;

  setFormGroup(formGroup: FormGroup) {
    this.formGroup = formGroup;
  }

  has(control: string, validator: string) {
    if (this.formGroup === null) {
      throw new Error('formGroup is required');
    }

    const errors = this.formGroup.get(control).errors;

    return errors === null ? false : errors[validator];
  }
}
