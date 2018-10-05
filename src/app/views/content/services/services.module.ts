import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { ServicesAddComponent } from './services-add.component';
import { ServicesListComponent } from './services-list.component';
import { ServicesRoutingModule } from './services-routing.module';

@NgModule({
  imports: [
    ServicesRoutingModule,
    FormsModule,
    CommonModule
  ],
  declarations: [ ServicesAddComponent,ServicesListComponent ]
})
export class ServicesModule { }
