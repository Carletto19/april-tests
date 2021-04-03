import { Component, OnInit } from '@angular/core';
import {AbstractControl, EmailValidator, NgForm, Validators, FormBuilder, FormGroup, FormArray, FormControl, ReactiveFormsModule } from '@angular/forms';
import {LIST_ARRAY, IdentificationTemplate, MAJOR_ARRAY} from '../../models/identification';
import { SignUpRegitration } from '../../models/registration';
import { ValidationStyles } from '../../models/validationStyles';
import { AuthService } from '../../data-services/auth.service';
import { RegistrationService } from '../../data-services/registration.service'
import { Router } from '@angular/router';
import { MainNavComponent } from '../../main-nav/main-nav.component'

@Component({

  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent{

  registration: SignUpRegitration;
  validationStyles: ValidationStyles;
  majorList: Object = MAJOR_ARRAY;

  constructor(
    private fb: FormBuilder,
    private authentication: AuthService,
    private route: Router,
    private mainNav: MainNavComponent,
    private registerDatabase: RegistrationService
    ) 
  {
    this.registration = new SignUpRegitration();
    this.validationStyles = new ValidationStyles;
   }

  signUpForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
    lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]*$')]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
    major: ['']
});

dataInput() {
  const data: IdentificationTemplate = {
      firstName: this.signUpForm.get('firstName').value,
      lastName: this.signUpForm.get('lastName').value,
      email: this.signUpForm.get('email').value,
      password: this.signUpForm.get('password').value,
      major: this.signUpForm.get('major').value
  };
  return data;
}



  get emailInput(): AbstractControl{
    return (this.signUpForm.get('email'));
  }

  get lastNameInput(): AbstractControl{
    return (this.signUpForm.get('lastName'));
  }


  get firstNameInput(): AbstractControl{
    return (this.signUpForm.get('firstName'));
  }

  get passwordInput(): AbstractControl{
    return (this.signUpForm.get('password'));
  }

  onSubmit() {

    if (!this.signUpForm.valid) {
      alert('Not valid!');
      return;
    }

    const data = this.dataInput();
    // this.registration.registration(data, data.email);

    // console.log('antes de');
    this.authentication.signUp(data.email, data.password).then(() => {console.log('Ok'); });
    this.registerDatabase.registerUser(data);
    // console.log('después de');
   

    this.mainNav.isLogged = true;
    const user =  this.authentication.signUp(data.email, data.password);

    if(user){
      this.route.navigate(['/scheduleHome']);
    }
  }

}
