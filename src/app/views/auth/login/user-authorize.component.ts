import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { AccountService } from '../../../services/account.service';
import { DataService } from '../../../services/data.service';

@Component({
  templateUrl: 'user-authorize.component.html',
  encapsulation: ViewEncapsulation.None
})
export class UserAuthorizeComponent implements OnInit {


  userDetails:any
  companyID:string = '';


  //by user email
  authRequest = {
    auth: {
      "username":'',
      "password":''
    },
    account: {
      "tags":''
    },
    "email":''
  }

  authResult:any;

  constructor( private accountService:AccountService, private authService: AuthService, private router: Router, private dataService:DataService ) {
  }


  ngOnInit():void {
    this.dataService.currentUser.subscribe(user => this.userDetails = user);
    this.signIntoCompany();
  }


  signIntoCompany(): void {

    this.authRequest.account.tags = this.userDetails.email;
    this.authRequest.email = this.userDetails.email;


    this.accountService.authAccount( this.authRequest ).subscribe(success => {

      this.authResult = success;
      if ( this.authResult.status ) {
        if ( this.authResult.status == 'SUCCESS' ) {
          //console.log(this.authResult.data);
          this.dataService.updateAccount( this.authResult.data );
          this.router.navigate(['/dashboard']);
        }
        else if ( this.authResult.status == 'ERROR' ) {
          console.log( 'USER ACCOUNT NOT AUTHORIZED' );
          this.router.navigate(['/register']);
        }
      }
    },
    error => {
      console.log(error);
    }
  );
  }

  registerCompany(): void {
    this.router.navigate(['/register']);
  }

  forgotCompany(): void {
    this.router.navigate(['/forgot-company-login']);
  }

}
