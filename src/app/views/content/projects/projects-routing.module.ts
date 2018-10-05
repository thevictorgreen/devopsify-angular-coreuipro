import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import { AuthGuard } from '../.././../services/auth-guard.service';

import { ProjectsAddComponent } from './projects-add.component';
import { ProjectsListComponent } from './projects-list.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    data: {
      title: 'Projects'
    },
    children:[
      {
        path: 'add',
        canActivate: [AuthGuard],
        component: ProjectsAddComponent,
        data: {
          title: 'Add Projects'
        }
      },
      {
        path: 'list',
        canActivate: [AuthGuard],
        component: ProjectsListComponent,
        data: {
          title: 'Projects'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule {}
