import { Component, OnInit } from '@angular/core';
import { SignInComponent } from '../sign-in/sign-in.component';
import { Time } from '../../models/classes-time';
import {LIST_ARRAY} from '../../models/identification';
// import { NavigationBarComponent } from '../../shared/navigation-bar'
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {

  constructor(private router: Router){
    this.time = new Time;
  }
  signInFlag = false;
  isSignInDisabled = false;
  signUpFlag = false;
  isSignUpDisabled = false;
  time: Time;

  applyFont = 'Lucida Sans';
  fontSize = '20px';
  applyPadding = '10px';
  applyMargin = '100px';
  applyBacgroundColor = '#599d6f';
  applyWidth = '35%';
  applyColor = 'white';

  goTo(pageName: string): void {
    this.router.navigate([`${pageName}`]);
  }
  signInSelected() {
    this.signInFlag = true;
    this.signUpFlag = false;
    this.isSignUpDisabled = true;
    this.isSignInDisabled = false;
  }

  signUpSelected() {
    this.signUpFlag = true;
    this.signInFlag = false;
    this.isSignInDisabled = true;
    this.isSignUpDisabled = false;
  }

  applyButtonStyles(){
    const buttonStyles = {
      'font-family' : this.applyFont,
      'font-size': this.fontSize,
      padding: this.applyPadding,
      margin: this.applyMargin,
      'background-color': this.applyBacgroundColor,
      width: this.applyWidth,
      color: this.applyColor
    };
    return buttonStyles;
  }

}
