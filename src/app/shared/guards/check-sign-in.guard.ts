import { Injectable, OnChanges, OnInit } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of, Subject } from 'rxjs';
import { first, last, map, switchMap } from 'rxjs/operators';
import { AuthService } from 'src/app/data-services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CheckSignInGuard implements CanActivate, OnChanges{

  ngOnChanges(){
  }
  constructor( private _authentication: AuthService){}

  public isLogged: boolean;
  public isLoggedSubject = new Subject<boolean>();
  canActivate(

    ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this._authentication.getCurrentUser().subscribe(result =>{
        if(result && result.emailVerified){
          this.isLoggedSubject.next(false);
        }
        else{
          this.isLoggedSubject.next(true);
        }
      });
      return this.isLoggedSubject.asObservable();
      // this._authentication.getCurrentUser().subscribe(result=> {
      //   if(result){
      //     this.isLogged = true;
      //   }
      //   else if (result == null){
      //     this.isLogged = false;
      //   }
      //   else{
      //     this.isLogged = false;
      //   }
      // });
      // return !this.isLogged;
  }
  
}
