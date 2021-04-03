import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { AuthService } from '../../data-services/auth.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent /*implements OnInit, OnDestroy */{
subscription: Subscription;
  constructor(private authentication: AuthService) {
  }

  // ngOnInit() {
  //   console.log('Navbar');
  //   this.subscription = this.authentication.getCurrentUser().subscribe(
  //     user => {
  //       if (user) {
  //         console.log('User->', user);
  //       }
  //       else {
  //         console.log('No user');
  //       }
  //     }
  //   );
  // }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
