import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { CloudsAddComponent } from './clouds-add.component';
import { CloudsListComponent } from './clouds-list.component';
import { CloudsRoutingModule } from './clouds-routing.module';

@NgModule({
  imports: [
    CloudsRoutingModule,
    FormsModule,
    CommonModule
  ],
  declarations: [ CloudsAddComponent,CloudsListComponent ]
})
export class CloudsModule { }
