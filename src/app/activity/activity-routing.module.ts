import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivityListComponent } from './activity-list/activity-list.component';
import { ActivityDetailsComponent } from './activity-details/activity-details.component';
import { CompletedTasksComponent } from './completed-tasks/completed-tasks.component';

const routes: Routes = [
  {path:'',component:ActivityListComponent},
  {path:'completed',component:CompletedTasksComponent},
  {path:':id',component:ActivityDetailsComponent}
]
  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ActivityRoutingModule { }
