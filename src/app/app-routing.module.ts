import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',loadChildren: () =>import('../app/dashboard/dashboard.module').then( (m) => m.DashboardModule)},
  {path:'activity',loadChildren: () =>import('../app/activity/activity.module').then( (m) => m.ActivityModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
