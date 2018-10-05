import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AuthGuard } from '../.././../services/auth-guard.service';

import { ServersAddComponent } from './servers-add.component';
import { ServersListComponent } from './servers-list.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    component:ServersListComponent,
    data: {
      title: 'Servers'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServersRoutingModule {}
