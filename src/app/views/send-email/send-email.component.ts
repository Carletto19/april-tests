import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/data-services/auth.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss'],
  providers: [AuthService],
})
export class SendEmailComponent {

  public user$: Observable<any> = this._authService.angularAuth.user;
  constructor(private _authService: AuthService) { }

  resendEmail(){
    this._authService.sendVerificationEmail();
  }

}
