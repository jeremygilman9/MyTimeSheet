import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timesheet',
  templateUrl: './app/timesheet/timesheet.component.html',
  styleUrls: ['./app/timesheet/timesheet.component.css']
})
export class TimesheetComponent implements OnInit {

  ngOnInit() {
    console.log('timesheet component loaded');
  }

}