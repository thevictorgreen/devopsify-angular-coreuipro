import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { NamespacesAddComponent } from './namespaces-add.component';
import { NamespacesListComponent } from './namespaces-list.component';
import { NamespacesRoutingModule } from './namespaces-routing.module';

@NgModule({
  imports: [
    NamespacesRoutingModule,
    FormsModule,
    CommonModule
  ],
  declarations: [ NamespacesAddComponent,NamespacesListComponent ]
})
export class NamespacesModule { }
