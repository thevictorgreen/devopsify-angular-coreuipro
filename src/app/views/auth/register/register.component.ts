import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { AccountService } from '../../../services/account.service';
import { StripeService } from '../../../services/stripe.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent implements OnInit {

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

  public account = {
    _id:'',
    company: {
      company_name:'',
      company_address:'',
      company_city:'',
      company_state:'',
      company_zip:'',
      company_phone:'',
      company_domain:'',
      company_billing: {
        billing_id:'',
        has_card:false,
        cards:[]
      },
      roles:[
        {
          _id:'QL4xd4C',
          role_name:'account_admin',
          permissions: {
            billing_read: true,
            billing_write: true,
            company_profile_read: true,
            company_profile_write: true,
            user_profile_read: true,
            user_profile_write: true,
            groups_read: true,
            groups_write: true,
            users_read: true,
            users_write: true,
            clouds_read: true,
            clouds_write: true,
            domains_read: true,
            domains_write: true,
            namespaces_read: true,
            namespaces_write: true,
            projects_read: true,
            projects_write: true,
            services_read: true,
            services_write: true,
            servers_read: true,
            applications_read: true,
            applications_write: true
          }
        },
        {
          _id:'HoXRRo8',
          role_name:'developer',
          permissions: {
            billing_read: false,
            billing_write: false,
            company_profile_read: false,
            company_profile_write: false,
            user_profile_read: true,
            user_profile_write: false,
            groups_read: false,
            groups_write: false,
            users_read: false,
            users_write: false,
            clouds_read: true,
            clouds_write: true,
            domains_read: true,
            domains_write: true,
            namespaces_read: true,
            namespaces_write: true,
            projects_read: true,
            projects_write: true,
            services_read: true,
            services_write: true,
            servers_read: true,
            applications_read: true,
            applications_write: true
          }
        }
      ],
      authorized_users: [
        {
          user_id:'',
          user_login:'',
          user_name:'',
          user_email:'',
          user_phone:'',
          user_photo:'',
          user_role:'account_admin'
        }
      ]
    },
    clouds:[],
    tags:[]
  };

  authRequest = {
    auth: {
      "username":'',
      "password":''
    },
    account: {

    }
  };

  authResult:any;

  constructor(private stripeService: StripeService, private accountService: AccountService, private authService: AuthService, private router: Router) { }

  ngOnInit():void {
    var cid = this.generateID();
    this.account._id = cid;
    this.account.tags.push(cid);
    this.account.company.authorized_users[0].user_id = this.authService.userDetails.uid;
    this.account.company.authorized_users[0].user_login = this.authService.userDetails.email;
    this.account.company.authorized_users[0].user_email = this.authService.userDetails.email;
    this.account.company.authorized_users[0].user_name = this.authService.userDetails.displayName;
    this.account.company.authorized_users[0].user_photo = this.authService.userDetails.photoURL;
  }

  generateID():string {
    var text = "";
    var possible = "aA1bB2cC3dD4eE5fF6gG7hH8iI9jJ0kKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ";
    for (var i = 0;i < 7;i++) {
      text += possible.charAt( Math.floor( Math.random() * possible.length) );
    }
    return text;
  }

  registerCompany(): void {
    /*var cardDetails = "card[number]=4242424242424242&card[exp_month]=8&card[exp_year]=2020&card[cvc]=111";
    this.stripeService.createToken( cardDetails ).subscribe(success => {
      //console.log(success);
      this.authResult = success;
      if ( this.authResult.object ) {
        if ( this.authResult.object == 'token' ) {
          console.log(this.authResult.id);
          //this.location.back();
          //this.router.navigate(['auth/company-login']);
        }
        else if ( this.authResult.status == 'error' ) {
          console.log( 'APPLICATION ERROR' );
        }
      }
    },
    error => {
      console.log(error.message);
      //this.showError = true;
    }
  );*/
    this.account.tags.push( this.account.company.company_domain );
    this.authRequest.account = this.account;

    this.accountService.addAccount( this.authRequest ).subscribe(success => {
      //console.log(success);
      this.authResult = success;
      if ( this.authResult.status ) {
        if ( this.authResult.status == 'ok' ) {
          //console.log(this.authResult.data.length);
          //this.location.back();
          this.router.navigate(['auth/company-login']);
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

  cancel(): void {
    this.router.navigate(['auth/company-login']);
  }

}
