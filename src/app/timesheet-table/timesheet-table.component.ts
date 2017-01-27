import { Component, OnInit } from '@angular/core';

export enum Days {
      Sunday = 0,
      Monday = 1,
      Tuesday = 2,
      Wednesday = 3,
      Thursday = 4,
      Friday = 5,
      Saturday = 6
    }

@Component({
  selector: 'timesheet-table',
  templateUrl: './app/timesheet-table/timesheet-table.component.html',
  styleUrls: ['./app/timesheet-table/timesheet-table.component.scss']
})
export class TimesheetTableComponent implements OnInit {

  days = Days;
  chargeCodeDetail: Array<{ id: number, day: string, hours: number }>;
  chargeCodeRow: Array<{id: number, total: number, Monday:number, Tuesday:number, Wednesday:number, Thursday:number, Friday:number, Saturday:number, Sunday:number}>;
  total: number;

  constructor() {
    this.chargeCodeDetail = [
      { id: 1001, day: 'Monday', hours: 2.3 },
      { id: 9011, day: 'Wednesday', hours: 2.3 },
      { id: 7634, day: 'Friday', hours: 2.3 },
      { id: 9834, day: 'Tuesday', hours: 2.3 },
      { id: 6834, day: 'Thursday', hours: 2.3 },
      { id: 1001, day: 'Monday', hours: 2.3 },
      { id: 1001, day: 'Tuesday', hours: 2.3 }
    ];
  }

  ngOnInit() {
    console.log('This is the enum: ', this.days);
    this.total = 100;
  }

  createTimeSheetTable(detailArray: Array<any>) {
    // 
  }

}