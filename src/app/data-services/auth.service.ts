import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { filter, first } from 'rxjs/operators';
import firebase from 'firebase/app';
import { promise } from 'protractor';
import { BehaviorSubject, Observable, of } from 'rxjs'; 
import { Subject } from 'rxjs'; 
import { SignInComponent } from '../views/sign-in/sign-in.component';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  constructor(
    public angularAuth: AngularFireAuth
  ) { }


  public approved : Observable<boolean> = of(false);
  public subjectApproved = new Subject;
  public x: boolean = false;
  

  signIn(email: string, password: string): Promise<boolean> {
      return this.angularAuth.signInWithEmailAndPassword(email, password)
                              .then((result) => { 
                                console.log(result.user);
                                this.subjectApproved.next(true);

                                return true; })

                              .catch((error) => {
                                this.subjectApproved.next(false);
                             
                                console.log(error);
                                return false; });
  }

  signUp(email: string, password: string): Promise<boolean> {
      return this.angularAuth.createUserWithEmailAndPassword(email, password)
                              .then((result) => { console.log(result.user);  this.approved; return true; })
                              .catch((error) => { console.log(error); return false; });

  }


  getCurrentUser() {
    return this.angularAuth.authState.pipe();
  }

  logOut(): Promise<boolean> {
     return this.angularAuth.signOut()
                            .then(() => { console.log('Cerraste sesión');  this.approved; return true})
                            .catch((error) => { console.log(error); return false});
  
  }



  
}
