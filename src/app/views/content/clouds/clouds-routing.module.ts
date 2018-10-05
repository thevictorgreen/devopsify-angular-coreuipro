import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AuthGuard } from '../.././../services/auth-guard.service';

import { CloudsAddComponent } from './clouds-add.component';
import { CloudsListComponent } from './clouds-list.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    data: {
      title: 'Clouds'
    },
    children:[
      {
        path: 'add',
        canActivate: [AuthGuard],
        component: CloudsAddComponent,
        data: {
          title: 'Add Cloud Provider'
        }
      },
      {
        path: 'list',
        canActivate: [AuthGuard],
        component: CloudsListComponent,
        data: {
          title: 'Cloud Providers'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CloudsRoutingModule {}
