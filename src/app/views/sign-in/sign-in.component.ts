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
    email: ['', [Validators.required, Validators.email]]
  });

  time: Time;
  constructor(
    private fb: FormBuilder, 
    private _authentication: AuthService,
    private route: Router,
    private mainNav: MainNavComponent,
    
    )
  {
    this.signInIdentificationService = new SignInIdentificationService();
    this.validationStyles = new ValidationStyles();
    this.time = new Time();
  }
  ngOnDestroy(): void {
    // this._authentication.subjectApproved.unsubscribe();
  }


  public approvedSubscription: Subscription;
  ngOnInit(): void {
    // this.approvedSubscription = this._authentication.approved.subscribe();
    // this.approvedSubscription = this._authentication.subjectApproved.subscribe(v => console.log(v));
    // console.log(this.approvedSubscription);
    // if(this.approvedSubscription){
    // console.log('Existe');
    // }

    // console.log(this.signInApproved);
    // console.log(this._authentication.subjectApproved.getValue());
    
    // this._authentication.subjectApproved.subscribe();
  }

  signInDataInput() {
    const signInData: SignInTemplate = {
      password: this.signInForm.get('password').value,
      email: this.signInForm.get('email').value
    };
    return signInData;
  }

  
  signInApproved: any = false;
  signInSub: Subscription;
  onSubmit() {

    const signInData = this.signInDataInput();
  //   this.approvedSubscription = this._authentication.subjectApproved.subscribe(/*result =>{result = this.signInApproved; console.log(result);}*/);

    // console.log(this.approvedSubscription);
    // this._authentication.subjectApproved.subscribe();

    const user = this._authentication.signIn(this.emailInput.value, this.passwordInput.value);

    this._authentication.subjectApproved.asObservable().pipe(first()).subscribe(v=> { 
      console.log(v); 
      if(v==false){
        alert('Usuario y/o contraseña incorectos');
      }
      else if (v==true){
        this.route.navigate(['/scheduleHome']);
      }
    });



    // this.signInSub = this._authentication.subjectApproved.subscribe(v=> {this.signInApproved = v;});


    // console.log(this.signInApproved);


    // if(user) {
    //   this.route.navigate(['/scheduleHome']); **************************
    // // console.log('exists!');
    // }




    // else{
    //   console.log('Doesnt exist!');
    // }

    // console.log(await this._authentication.approved);
    // console.log(this._authentication.getCurrentUser());




    // if(this._authentication.approved == true){
    //   console.log('exists!');
    // }
    // else{
    //   console.log('Doesnt exist!');
    // }

  }


  


  get passwordInput() {
    return (this.signInForm.get('password'));
  }
  get emailInput() {
    return (this.signInForm.get('email'));
  }



}
