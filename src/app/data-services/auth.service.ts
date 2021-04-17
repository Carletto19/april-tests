import { Injectable, OnChanges, OnInit } from '@angular/core';
import { User } from './user.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { filter, first } from 'rxjs/operators';
import firebase from 'firebase/app';
import { promise } from 'protractor';
import { BehaviorSubject, Observable, of, Subscription } from 'rxjs'; 
import { Subject } from 'rxjs'; 
import { SignInComponent } from '../views/sign-in/sign-in.component';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnChanges{

  
  constructor(
    public angularAuth: AngularFireAuth,
    private route: Router,

  ) { }

  ngOnChanges(){

  }



  public subjectApproved = new Subject;
  public chatApproval = new BehaviorSubject<boolean>(false);
  public aprobado: boolean = false;
  public chatSubscription: Subscription;

  isChatApproved(){
    this.chatSubscription = this.getCurrentUser().subscribe(result => {
      if(result && result.emailVerified){
        this.chatApproval.next(true);
      } 
      else if(result && !result.emailVerified){
        this.chatApproval.next(false);
      }
      else{ 
        this.chatApproval.next(false);
        this.aprobado = false;
      };
    });
  }
  

  signIn(email: string, password: string): Promise<boolean> {
      return this.angularAuth.signInWithEmailAndPassword(email, password)
                             .then((result) => {
                                if(result.user.emailVerified){
                                console.log(result.user);
                                this.chatApproval.next(true);
                                this.route.navigate(['/scheduleHome']);
                                return true; }
                                else {
                                  console.log(result.user);
                                  this.route.navigate(['/sendVerificationEmail']);
                                }
                              })

                             .catch((error) => {
                                this.subjectApproved.next(false);
                             
                                console.log(error);
                                return false; });
  }

  signInVerified(email: string, password: string){
    return this.angularAuth.signInWithEmailAndPassword(email, password).then((result) => { 

      if(result.user.emailVerified){
      console.log(result.user);
      this.subjectApproved.next(true);
      return true; }
      else {
        this.route.navigate(['/sendVerificationEmail']);
      }
    })
  }


  async signInVoid(email: string, password: string) {
    try {
      const result = await this.angularAuth.signInWithEmailAndPassword(
        email,
        password
      );
      return result;
    } 
    catch (error) {
      console.log(error);
    }
  }

  signUp(email: string, password: string): Promise<boolean> {
      return this.angularAuth.createUserWithEmailAndPassword(email, password)
                             .then((result) => { console.log(result.user); this.sendVerificationEmail(); return true; })
                             .catch((error) => { console.log(error); return false; });
  }


  getCurrentUser() {
    return this.angularAuth.authState.pipe();
  }

  logOut(): Promise<boolean> {
     return this.angularAuth.signOut()
                            .then(() => { console.log('Cerraste sesión'); this.chatApproval.next(false); this.chatSubscription.unsubscribe(); return true})
                            .catch((error) => { console.log(error); return false});
  
  }

  async sendVerificationEmail(): Promise<void>{
    return  (await this.angularAuth.currentUser).sendEmailVerification();
  }



  
}
