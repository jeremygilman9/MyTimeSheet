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
  chargeCodeDetails: Array<{ id: number, day: string, hours: number }>;
  chargeCodeRows: Array<{ id: number, total: number, Monday: number, Tuesday: number, Wednesday: number, Thursday: number, Friday: number, Saturday: number, Sunday: number }>;
  total: number;

  constructor() {
    this.chargeCodeDetails = [
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
    this.createTimeSheetTable(this.chargeCodeDetails);
  }

  createTimeSheetTable(detailArray: Array<any>) {
    // 
    if (detailArray == null || detailArray.length < 1) {
      return;
    }
    this.chargeCodeRows = Array<any>();
    this.total = 0;
    // loop through the detail array that came in and parse into row array for table
    detailArray.forEach(detail => {
      // find the index of the item in the array
      var index = this.findChargeCode(detail.id);
      // if the item doesn't exist in the array then add it
      if (index === -1) {
        this.chargeCodeRows.push({ id: detail.id, total: 0.0, Monday: 0.0, Tuesday: 0.0, Wednesday: 0.0, Thursday: 0.0, Friday: 0.0, Saturday: 0.0, Sunday: 0.0 });
        index = this.chargeCodeRows.length - 1;
        console.log('Row Added', detail);
      }
      // always have to add in the hours for each detail
      this.addInHours(detail, this.chargeCodeRows[index]);
      this.total += detail.hours;
    });
  }

  // returns the index of the array element with that id or -1 if it doesn't exist
  findChargeCode(id: number) {
    for (var i = 0; i < this.chargeCodeRows.length; i++) {
      if (this.chargeCodeRows[i].id === id) {
        return i;
      }
    }
    return -1;
  }

  // add the hours from each detail to the running total of the correct day
  addInHours(detail: any, row: any) {
    switch (detail.day) {
      case 'Sunday':
        row.Sunday += detail.hours;
        row.total += detail.hours;
        break;
      case 'Monday':
        row.Monday += detail.hours;
        row.total += detail.hours;
        break;
      case 'Tuesday':
        row.Tuesday += detail.hours;
        row.total += detail.hours;
        break;
      case 'Wednesday':
        row.Wednesday += detail.hours;
        row.total += detail.hours;
        break;
      case 'Thursday':
        row.Thursday += detail.hours;
        row.total += detail.hours;
        break;
      case 'Friday':
        row.Friday += detail.hours;
        row.total += detail.hours;
        break;
      case 'Saturday':
        row.Saturday += detail.hours;
        row.total += detail.hours;
        break;

      default:
        break;
    }
  }

}