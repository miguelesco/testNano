import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import { CalendarComponent } from './calendar.component';
import { CalendarRoutingModule } from './calendar.routing';


@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    CalendarRoutingModule
  ],
  exports: [
    CalendarComponent
  ]
})
export class CalendarModule { }
