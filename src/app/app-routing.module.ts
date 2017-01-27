import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingComponent }   from './landing/landing.component';
import { TimesheetComponent } from './timesheet/timesheet.component';
import { HelpComponent } from './help/help.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full', data: {Title: 'Home'} },
  { path: 'home',  component: LandingComponent, data: {Title: 'Home'} },
  { path: 'timesheet',  component: TimesheetComponent, data: {Title: 'MyTimeSheet'} },
  { path: 'help',  component: HelpComponent, data: {Title: 'Help'} }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {

}

