import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AccountService } from '../../services/account.service';
import { DataService } from '../../services/data.service';
import { ToasterModule, ToasterService, ToasterConfig }  from 'angular2-toaster/angular2-toaster';

@Component({
  templateUrl: 'company-login.component.html',
  styleUrls: ['../../../scss/vendors/toastr/toastr.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CompanyLoginComponent implements OnInit {

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

  private toasterService: ToasterService;

  public toasterconfig : ToasterConfig =
    new ToasterConfig({
      tapToDismiss: true,
      timeout: 5000
    });

  userDetails:any
  companyID:string = '';

  authRequest = {
    auth: {
      "username":'',
      "password":''
    },
    account: {
      "_id":''
    },
    "email":''
  }

  authResult:any;

  constructor( toasterService: ToasterService, private accountService:AccountService, private authService: AuthService, private router: Router, private dataService:DataService ) {
    this.toasterService = toasterService;
  }


  ngOnInit():void {
    this.dataService.currentUser.subscribe(user => this.userDetails = user);
    //console.log( this.userDetails );
  }


  signIntoCompany(): void {

    this.authRequest.account._id = this.companyID;
    this.authRequest.email = this.userDetails.email;


    this.accountService.authAccount( this.authRequest ).subscribe(success => {

      this.authResult = success;
      if ( this.authResult.status ) {
        if ( this.authResult.status == 'SUCCESS' ) {
          //console.log(this.authResult.data);
          //this.dataService.updateAccount( this.authResult.data );
          this.toasterService.pop('success', 'Success Toaster', 'This is toaster description');
          this.router.navigate(['content/dashboard']);
        }
        else if ( this.authResult.status == 'error' ) {
          console.log( 'APPLICATION ERROR' );
        }
      }
    },
    error => {
      console.log(error);
      //this.showError = true;
    }
  );
  }

  registerCompany(): void {
    this.router.navigate(['auth/register']);
  }

  forgotCompany(): void {
    this.router.navigate(['auth/forgot-company-login']);
  }

}
