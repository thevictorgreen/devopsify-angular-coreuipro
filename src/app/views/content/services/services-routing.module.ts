import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AuthGuard } from '../.././../services/auth-guard.service';

import { ServicesAddComponent } from './services-add.component';
import { ServicesListComponent } from './services-list.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    data: {
      title: 'Services'
    },
    children:[
      {
        path: 'add',
        canActivate: [AuthGuard],
        component: ServicesAddComponent,
        data: {
          title: 'Add Services'
        }
      },
      {
        path: 'list',
        canActivate: [AuthGuard],
        component: ServicesListComponent,
        data: {
          title: 'Services'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule {}
