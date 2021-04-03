import { Injectable } from '@angular/core';
import { User } from './user.model';
import { AngularFireAuth } from '@angular/fire/auth';
import { filter, first } from 'rxjs/operators';
import firebase from 'firebase/app';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public user: User;
  constructor(public angularAuth: AngularFireAuth) { }

  signIn(email: string, password: string): Promise<boolean> {
      return this.angularAuth.signInWithEmailAndPassword(email, password)
                              .then((result) => { console.log(result.user); return true; })
                              .catch((error) => { console.log(error); return false; });
  }

  signUp(email: string, password: string): Promise<boolean> {
      return this.angularAuth.createUserWithEmailAndPassword(email, password)
                              .then((result) => { console.log(result.user); return true; })
                              .catch((error) => { console.log(error); return false; });

  }


  getCurrentUser() {
    return this.angularAuth.authState.pipe(first());
  }

  logOut(): Promise<boolean> {
     return this.angularAuth.signOut()
                            .then(() => { console.log('Cerraste sesión'); return true})
                            .catch((error) => { console.log(error); return false});
                      
    
  }
}
