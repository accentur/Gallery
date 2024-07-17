import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElemmentsRoutingModule } from './elemments-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { PLaceholderComponent } from './placeholder/placeholder.component';
import { TimesDirective } from './times.directive';
import { SharedModule } from '../shared/shared.module';
import { SegmentComponent } from './segment/segment.component';



@NgModule({
  declarations: [
    ElementsHomeComponent,
    PLaceholderComponent,
    TimesDirective,
    SegmentComponent
  ],
  imports: [
    CommonModule,
    ElemmentsRoutingModule,
    SharedModule
  ],

  exports:[ElementsHomeComponent]
})
export class ElemmentsModule { }
