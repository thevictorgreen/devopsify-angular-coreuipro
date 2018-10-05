import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AccountBillingComponent } from './account-billing.component';
import { AccountCompanyProfileComponent } from './account-company-profile.component';
import { AccountUserProfileComponent } from './account-user-profile.component';
import { AccountRoutingModule } from './account-routing.module';

@NgModule({
  imports: [
    AccountRoutingModule,
    FormsModule,
    CommonModule
  ],
  declarations: [ AccountBillingComponent,AccountCompanyProfileComponent,AccountUserProfileComponent ]
})
export class AccountModule { }
