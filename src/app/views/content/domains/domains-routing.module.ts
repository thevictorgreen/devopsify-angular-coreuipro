import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AuthGuard } from '../.././../services/auth-guard.service';

import { DomainsAddComponent } from './domains-add.component';
import { DomainsListComponent } from './domains-list.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    data: {
      title: 'Domains'
    },
    children:[
      {
        path: 'add',
        canActivate: [AuthGuard],
        component: DomainsAddComponent,
        data: {
          title: 'Add Domains'
        }
      },
      {
        path: 'list',
        canActivate: [AuthGuard],
        component: DomainsListComponent,
        data: {
          title: 'Domains'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DomainsRoutingModule {}
