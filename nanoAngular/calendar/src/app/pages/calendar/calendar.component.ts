import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CalendarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  testArray = [
    1,2,3,4,5,6,7,8,9,10,11,12,13,14
  ]
  previusMonth() {
    console.log('atras')
  }

}
