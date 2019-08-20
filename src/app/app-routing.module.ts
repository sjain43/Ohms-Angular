import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegControlComponent } from './reg-control/reg-control.component';
import { ActivityControlComponent } from './activity-control/activity-control.component';
import { SuccessComponent } from './success/success.component';


const routes: Routes = [
  { path: 'register', component: RegControlComponent},
  { path: 'Activity', component: ActivityControlComponent},
  { path: 'success', component:  SuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
