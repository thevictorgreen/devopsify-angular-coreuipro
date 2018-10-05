import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ProjectsAddComponent } from './projects-add.component';
import { ProjectsListComponent } from './projects-list.component';
import { ProjectsRoutingModule } from './projects-routing.module';

@NgModule({
  imports: [
    ProjectsRoutingModule,
    FormsModule,
    CommonModule
  ],
  declarations: [ ProjectsAddComponent,ProjectsListComponent ]
})
export class ProjectsModule { }
