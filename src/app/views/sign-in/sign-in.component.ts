import { Component, OnInit } from '@angular/core';
import {NgForm, FormControl, ReactiveFormsModule, Validator, AbstractControl, Validators, FormBuilder  } from '@angular/forms';
import {LIST_ARRAY, IdentificationTemplate, SignInTemplate} from '../../models/identification';
import { SignInIdentificationService } from '../../models/signInIdentificationService';
import { ValidationStyles } from '../../models/validationStyles';
import { ScheduleInterface, SCHEDULE_LIST } from '../../models/schedules';
import { Time } from '../../models/classes-time';
import { AuthService } from '../../data-services/auth.service';
import { Router } from '@angular/router';
import { MainNavComponent } from '../../main-nav/main-nav.component'


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  signInIdentificationService: SignInIdentificationService;
  validationStyles: ValidationStyles;

  signInForm = this.fb.group({
    password: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  });

  time: Time;
  constructor(
    private fb: FormBuilder, 
    private authentication: AuthService,
    private route: Router,
    private mainNav: MainNavComponent
    )
  {
    this.signInIdentificationService = new SignInIdentificationService();
    this.validationStyles = new ValidationStyles();
    this.time = new Time();
  }

  signInDataInput() {
    const signInData: SignInTemplate = {
      password: this.signInForm.get('password').value,
      email: this.signInForm.get('email').value
    };
    return signInData;
  }

  onSubmit() {
    const signInData = this.signInDataInput();
    // this.signInIdentificationService.searchIdentification(signInData.email, signInData.password);

    // this.authentication.signIn(this.emailInput.value, this.passwordInput.value);

    // this.mainNav.isLogged = true;

    const user = this.authentication.signIn(this.emailInput.value, this.passwordInput.value);
    if(user) {
      this.route.navigate(['/scheduleHome'])
    }
  }



  get passwordInput() {
    return (this.signInForm.get('password'));
  }
  get emailInput() {
    return (this.signInForm.get('email'));
  }



}
