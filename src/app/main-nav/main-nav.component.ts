import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, of, Subscription } from 'rxjs';
import { map, shareReplay, switchMap, take } from 'rxjs/operators';
import { AuthService } from '../data-services/auth.service';
import { RegistrationService } from '../data-services/registration.service'
import { ElementSchemaRegistry } from '@angular/compiler';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
  providers: [AuthService]
})
export class MainNavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public _authService: AuthService,
    private registerDatabase: RegistrationService) { }


  authSubscription: Subscription
  databaseSubscription: Subscription;
  public isLogged: boolean = false;
  public userEmail: any;
  public user$: Observable<any> = this._authService.angularAuth.user;

  ngOnInit() {
    this.checkForUser();
  }

  checkForUser() {
    this.authSubscription = this._authService.getCurrentUser().subscribe(
      user => {
        if (user) {
          this.isLogged = true;
          this.userEmail = user;
          console.log('User->', user);
        }
        else {
          console.log('No user');
        }
      }
    );
  }





  onSignOut() {
    this.isLogged = false;
    this._authService.logOut();
  }


}
