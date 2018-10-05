import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AuthGuard } from '../.././../services/auth-guard.service';

import { AccountBillingComponent } from './account-billing.component';
import { AccountCompanyProfileComponent } from './account-company-profile.component';
import { AccountUserProfileComponent } from './account-user-profile.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    data: {
      title: 'Account'
    },
    children:[
      {
        path: 'billing',
        canActivate: [AuthGuard],
        component: AccountBillingComponent,
        data: {
          title: 'Billing'
        }
      },
      {
        path: 'company-profile',
        canActivate: [AuthGuard],
        component: AccountCompanyProfileComponent,
        data: {
          title: 'Company Profile'
        }
      },
      {
        path: 'user-profile',
        canActivate: [AuthGuard],
        component: AccountUserProfileComponent,
        data: {
          title: 'User Profile'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule {}
