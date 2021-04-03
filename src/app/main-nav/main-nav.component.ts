import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../data-services/auth.service';
import { RegistrationService } from '../data-services/registration.service'

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
  providers: [AuthService]
})
export class MainNavComponent implements OnInit, OnDestroy{

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private authService: AuthService,
    private registerDatabase: RegistrationService) {}


    authSubscription: Subscription
    databaseSubscription: Subscription;
    public isLogged:boolean = false;
    collection = [];



  ngOnInit(){
    
    this.checkForUser();
    this.obtenerUsuarios();
}

checkForUser(){
  this.authSubscription = this.authService.getCurrentUser().subscribe(
    user => {
      if (user) {
        this.isLogged = true;
        console.log('User->', user);
      }
      else {
        console.log('No user');
      }
    }
  );
}


  obtenerUsuarios(){
    this.databaseSubscription = this.registerDatabase.getUser().subscribe(data=>{
      let newData = data
    },
  error=>{console.error('ERROR'), error}
  )
     
  }



  ngOnDestroy() {
    this.authSubscription.unsubscribe();
    this.databaseSubscription.unsubscribe();
    
  }

  onSignOut(){
     this.isLogged=false;
     this.authService.logOut();
  }


}
