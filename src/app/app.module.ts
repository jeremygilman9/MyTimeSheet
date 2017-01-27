import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';

// for doing HTTP calls
import { HttpModule } from '@angular/http';

import { LandingComponent } from './landing/landing.component';
import { AppComponent } from './app/app.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { HelpComponent } from './help/help.component';
import { TimesheetTableComponent } from './timesheet-table/timesheet-table.component';
import { SharedModule } from './shared.module';
import { TimesheetDetailComponent } from './timesheet-detail/timesheet-detail.component';

@NgModule({
    imports: [BrowserModule,
        AppRoutingModule,
        HttpModule,
        SharedModule],
    declarations: [
    LandingComponent,
    AppComponent,
    TimesheetComponent,
    HelpComponent,
    TimesheetTableComponent,
    TimesheetDetailComponent
],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(router: Router) {
        console.log('Route Data for Solution: ', router.config);
  }
 }






