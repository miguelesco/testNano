import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


import { CalendarComponent } from './calendar.component';
import { CalendarRoutingModule } from './calendar.routing';


@NgModule({
  declarations: [
    CalendarComponent
  ],
  imports: [
    CommonModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    CalendarRoutingModule,
  ],
  exports: [
    CalendarComponent
  ]
})
export class CalendarModule { }
