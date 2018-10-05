import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AuthGuard } from '../.././../services/auth-guard.service';

import { ApplicationsAddComponent } from './applications-add.component';
import { ApplicationsListComponent } from './applications-list.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    data: {
      title: 'Applications'
    },
    children:[
      {
        path: 'add',
        canActivate: [AuthGuard],
        component: ApplicationsAddComponent,
        data: {
          title: 'Add Applications'
        }
      },
      {
        path: 'list',
        canActivate: [AuthGuard],
        component: ApplicationsListComponent,
        data: {
          title: 'Applications'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationsRoutingModule {}
