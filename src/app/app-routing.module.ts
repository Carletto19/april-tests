import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ScheduleMapComponent } from '../app/views/schedule-map/schedule-map.component';
import { CompleteScheduleComponent } from './views/complete-schedule/complete-schedule.component';
import { SignInComponent } from './views/sign-in/sign-in.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';

const routes: Routes = [
  {path: 'map', component: ScheduleMapComponent},
  {path: 'signIn', component: SignInComponent},
  {path: 'signUp', component: SignUpComponent},
  {path: 'scheduleHome', component: ScheduleMapComponent},
  {path: 'completeSchedule', component: CompleteScheduleComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
