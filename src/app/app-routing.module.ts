import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { canActivate } from './auth/auth.guard';

const routes: Routes = [
  {path:'auth',loadChildren: () =>import('../app/auth/auth.module').then( (m) => m.AuthModule)},
  {path:'',loadChildren: () =>import('../app/dashboard/dashboard.module').then( (m) => m.DashboardModule),canActivate:[canActivate]},
  {path:'activity',loadChildren: () =>import('../app/activity/activity.module').then( (m) => m.ActivityModule),canActivate:[canActivate]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
