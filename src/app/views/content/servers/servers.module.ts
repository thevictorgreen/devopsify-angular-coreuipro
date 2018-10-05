import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ServersAddComponent } from './servers-add.component';
import { ServersListComponent } from './servers-list.component';
import { ServersRoutingModule } from './servers-routing.module';

@NgModule({
  imports: [
    ServersRoutingModule,
    FormsModule,
    CommonModule
  ],
  declarations: [ ServersAddComponent,ServersListComponent ]
})
export class ServersModule { }
