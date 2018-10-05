import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ApplicationsAddComponent } from './applications-add.component';
import { ApplicationsListComponent } from './applications-list.component';
import { ApplicationsRoutingModule } from './applications-routing.module';

@NgModule({
  imports: [
    ApplicationsRoutingModule,
    FormsModule,
    CommonModule
  ],
  declarations: [ ApplicationsAddComponent,ApplicationsListComponent ]
})
export class ApplicationsModule { }
