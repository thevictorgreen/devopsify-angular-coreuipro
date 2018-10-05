import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { DomainsAddComponent } from './domains-add.component';
import { DomainsListComponent } from './domains-list.component';
import { DomainsRoutingModule } from './domains-routing.module';

@NgModule({
  imports: [
    DomainsRoutingModule,
    FormsModule,
    CommonModule
  ],
  declarations: [ DomainsAddComponent,DomainsListComponent ]
})
export class DomainsModule { }
