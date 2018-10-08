import { Component, OnInit } from '@angular/core';
import { DataService } from '../../../services/data.service';
import { PermissionsService } from '../../../services/permissions.service';
import { StripeService } from '../../../services/stripe.service';
import { AccountService } from '../../../services/account.service';


@Component({
  templateUrl: './account-billing.component.html'
})

export class AccountBillingComponent implements OnInit {

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

  currentAccount: any;
  currentUser:any;
  currentPermissions:any;

  card = {
    number:'',
    exp_month:'',
    exp_year:'',
    cvc:''
  };

  authRequest = {
    auth: {
      "username":'',
      "password":''
    },
    account: {

    },
    token:'',
    cust_id:''
  };

  authResult:any;

  constructor( private accountService: AccountService,private stripeService: StripeService, public permissionsService: PermissionsService,private dataService:DataService) {

  }

  ngOnInit(): void {
    // Get CompanyObject
    this.dataService.currentAccount.subscribe(account => this.currentAccount = account);
    // Get Logged in user
    console.log( this.currentAccount );
    this.dataService.currentUser.subscribe(user => this.currentUser = user);
    // Get CurrentPermissions
    this.permissionsService.currentPermissions.subscribe(permissions => this.currentPermissions = permissions);
    this.permissionsService.updatePermissions();
    //console.log( this.currentPermissions );
  }

  addCard(): void {
    var cardDetails = "card[number]="+this.card.number+"&card[exp_month]="+this.card.exp_month+"&card[exp_year]="+this.card.exp_year+"&card[cvc]="+this.card.cvc;
    this.stripeService.createToken( cardDetails ).subscribe(success => {
      //console.log(success);
      this.authResult = success;
      if ( this.authResult.object ) {
        if ( this.authResult.object == 'token' ) {

          this.authRequest.account = this.currentAccount;
          this.authRequest.token = this.authResult.id;
          this.authRequest.cust_id = this.currentAccount.company.company_billing.billing_id;


          this.accountService.addPayment( this.authRequest ).subscribe(success => {

            this.authResult = success;

            if ( this.authResult.status ) {
              if ( this.authResult.status == 'SUCCESS' ) {

                this.card.number = '';
                this.card.exp_month = '';
                this.card.exp_year = '';
                this.card.cvc = '';

                this.setMsg("Card added to profile");
                this.showSuccess = true;

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
        else if ( this.authResult.status == 'error' ) {
          console.log( 'APPLICATION ERROR' );
        }
      }
    },
    error => {
      console.log(error.message);
      //this.showError = true;
    }
  );
  }

}
