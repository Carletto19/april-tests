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
    private authService: AuthService,
    private registerDatabase: RegistrationService) { }


  authSubscription: Subscription
  databaseSubscription: Subscription;
  public isLogged: boolean = false;
  public userEmail: any;
  public user$: Observable<any> = this.authService.angularAuth.user;

  ngOnInit() {

    this.checkForUser();
    // this.obtenerUsuarios();
  }

  checkForUser() {
    this.authSubscription = this.authService.getCurrentUser().subscribe(
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


  // checkPermit(): Observable<boolean>{

  // }



  obtenerUsuarios() {
    this.databaseSubscription = this.registerDatabase.getUser().subscribe(userArray => {
      userArray.map((element: any) => {
        console.log({
          nombre: element.payload.doc.data().firstName,
          apellido: element.payload.doc.data().lastName,
          email: element.payload.doc.data().email,
        }
        )
      });
    },
      error => { console.error('ERROR'), error }
    )
  }

  // obtenerUsuarios(){
  //   this.databaseSubscription = this.registerDatabase.getUser().subscribe(data => {
  //     console.log(data);
  //   },
  // error=>{console.error('ERROR'), error}
  // )
  // }


  // obtenerUsuarios(){
  //   this.databaseSubscription = this.registerDatabase.getUser().subscribe();
  // }


  ngOnDestroy() {
    this.authSubscription.unsubscribe();
    this.databaseSubscription.unsubscribe();

  }

  onSignOut() {
    this.isLogged = false;
    this.authService.logOut();
    // this.authSubscription.unsubscribe();
  }


}
