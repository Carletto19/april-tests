import { Component, OnDestroy, OnInit } from '@angular/core';
import {NgForm, FormControl, ReactiveFormsModule, Validator, AbstractControl, Validators, FormBuilder  } from '@angular/forms';
import {LIST_ARRAY, IdentificationTemplate, SignInTemplate} from '../../models/identification';
import { SignInIdentificationService } from '../../models/signInIdentificationService';
import { ValidationStyles } from '../../models/validationStyles';
import { ScheduleInterface, SCHEDULE_LIST } from '../../models/schedules';
import { Time } from '../../models/classes-time';
import { AuthService } from '../../data-services/auth.service';
import { Router } from '@angular/router';
import { MainNavComponent } from '../../main-nav/main-nav.component'
import { pipe, Subscription } from 'rxjs';
import { first, last } from 'rxjs/operators';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit, OnDestroy{

  signInIdentificationService: SignInIdentificationService;
  validationStyles: ValidationStyles;

  signInForm = this.fb.group({
    password: ['', Validators.required],
    email: ['', [Validators.required/*, Validators.pattern('^[a-z0-9._%+-]+@uabc.edu.mx$')*/]]
  });

  time: Time;
  constructor(
    private fb: FormBuilder, 
    private _authentication: AuthService,
    private route: Router,
    )
  {
    this.signInIdentificationService = new SignInIdentificationService();
    this.validationStyles = new ValidationStyles();
    this.time = new Time();
  }
  ngOnDestroy(): void {
  }


  public approvedSubscription: Subscription;
  ngOnInit(): void {
  }

  signInDataInput() {
    const signInData: SignInTemplate = {
      password: this.signInForm.get('password').value,
      email: this.signInForm.get('email').value
    };
    return signInData;
  }


  public isFormValid: boolean = true;
  public userExists: boolean = true;
  onSubmit() {
    if (!this.signInForm.valid) {
      this.isFormValid = false;
      return;
    }
    
    console.log(this.signInForm.valid);

    this._authentication.signIn(this.emailInput.value, this.passwordInput.value);

    this._authentication.subjectApproved.asObservable().pipe(first()).subscribe(v=> { 
      console.log(v); 
      if(v==false){
        this.userExists = false;
        //alert('Usuario y/o contraseña incorectos');
      }
      else if (v==true){
        this.userExists = true;
        this.route.navigate(['/scheduleHome']);
      }
    });



  }


  


  get passwordInput() {
    return (this.signInForm.get('password'));
  }
  get emailInput() {
    return (this.signInForm.get('email'));
  }



}
