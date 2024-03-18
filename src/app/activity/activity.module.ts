import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityListComponent } from './activity-list/activity-list.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { CreateActivityComponent } from './components/create-activity/create-activity.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { NoActivityComponent } from './components/no-activity/no-activity.component';
import { ActivityDetailsComponent } from './activity-details/activity-details.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { CreateTaskComponent } from './components/create-task/create-task.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
  declarations: [
    ActivityListComponent,
    CreateActivityComponent,
    NoActivityComponent,
    ActivityDetailsComponent,
    CreateTaskComponent
  ],
  imports: [
    CommonModule,
    ActivityRoutingModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCardModule,
    MatExpansionModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatTooltipModule
  ]
})
export class ActivityModule { }
