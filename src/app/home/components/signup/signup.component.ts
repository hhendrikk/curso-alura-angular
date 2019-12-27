import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { lowerCaseValidator } from 'src/app/shared/validators/lower-case.validator';
import { ValidatorFormError } from 'src/app/core/form/validator-form-error.service';
import { UserNotTakenValidatorService } from './services/user-not-taken.validator.service';
import { NewUser } from '../../models/newUser';
import { SignupService } from '../../services/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ap-signup',
  templateUrl: './signup.component.html',
  providers: [UserNotTakenValidatorService]
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private form: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private signupService: SignupService,
    private router: Router,
    public error: ValidatorFormError
  ) {}

  ngOnInit(): void {
    this.signupForm = this.form.group({
      email: ['', [Validators.required, Validators.email]],
      fullName: [
        '',
        [Validators.required, Validators.minLength(2), Validators.maxLength(40)]
      ],
      userName: [
        '',
        [
          Validators.required,
          lowerCaseValidator,
          Validators.minLength(2),
          Validators.maxLength(30)
        ],
        this.userNotTakenValidatorService.checkUserNameTaken()
      ],
      password: [
        '',
        [Validators.required, Validators.minLength(8), Validators.maxLength(14)]
      ]
    });

    this.error.setFormGroup(this.signupForm);
  }

  signup() {
    const newUser = this.signupForm.getRawValue() as NewUser;
    this.signupService.signup(newUser).subscribe(() => {
      this.router.navigate(['']);
    });
  }
}
