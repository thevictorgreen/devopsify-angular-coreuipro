import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  templateUrl: 'forgot-company-login.component.html'
})
export class ForgotCompanyLoginComponent {

  // BEGIN ALERT MESSAGING
  alertMsg:string = '';
  setMsg(msg:string):void {
    this.alertMsg = msg;
  }
  showSuccess:boolean = false;
  showError:boolean = false;
  hideMessages() {
    this.showSuccess = false;
    this.showError = false;
  }
  // END ALERT MESSAGING

  constructor( private authService: AuthService, private router: Router ) { }


  sendID(): void {
    //this.router.navigate(['content/dashboard']);
  }

  back(): void {
    this.router.navigate(['auth/company-login']);
  }

}
