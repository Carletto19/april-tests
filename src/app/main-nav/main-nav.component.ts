import { Component, OnInit, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subscription } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../data-services/auth.service';
import { RegistrationService } from '../data-services/registration.service'
import { ElementSchemaRegistry } from '@angular/compiler';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss'],
  providers: [AuthService]
})
export class MainNavComponent implements OnInit, OnDestroy {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private _authService: AuthService,
    private registerDatabase: RegistrationService) { }


  authSubscription: Subscription
  databaseSubscription: Subscription;
  public isLogged: boolean = false;
  public userEmail: any;
  public user$: Observable<any> = this._authService.angularAuth.user;

  ngOnInit() {

    this.checkForUser();
    // this.obtenerUsuarios();
    // this._authService.subjectApproved.subscribe();
  }

  checkForUser() {
    this.authSubscription = this._authService.getCurrentUser().subscribe(
      user => {
        if (user) {
          this.isLogged = true;
          this.userEmail = user;
          // console.log('User->', user);
        }
        else {
          // console.log('No user');
        }
      }
    );
  }


  // checkPermit(): Observable<boolean>{

  // }



  obtenerUsuarios() {

    this.user$.subscribe(result => {console.log(result)})
    this.databaseSubscription = this.registerDatabase.getUser().subscribe(userArray => {
      userArray.map((element: any) => {
        // console.log({
        //   nombre: element.payload.doc.data().firstName,
        //   apellido: element.payload.doc.data().lastName,
        //   email: element.payload.doc.data().email,
        // }
        // )
      });
    },
      error => { console.error('ERROR'), error }
    )
  }


  ngOnDestroy() {
  }

  onSignOut() {
    this.isLogged = false;
    this._authService.logOut();

  }


}
