import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AuthGuard } from '../.././../services/auth-guard.service';

import { NamespacesAddComponent } from './namespaces-add.component';
import { NamespacesListComponent } from './namespaces-list.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    data: {
      title: 'Namespaces'
    },
    children:[
      {
        path: 'add',
        canActivate: [AuthGuard],
        component: NamespacesAddComponent,
        data: {
          title: 'Add Namespaces'
        }
      },
      {
        path: 'list',
        canActivate: [AuthGuard],
        component: NamespacesListComponent,
        data: {
          title: 'Namespaces'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NamespacesRoutingModule {}
