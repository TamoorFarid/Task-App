import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateTaskComponent } from '../components/create-task/create-task.component';
import { ActivatedRoute } from '@angular/router';
import { ActivityService } from '../services/activity.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.scss']
})
export class ActivityDetailsComponent {
  activityId:any;
  tasksList:any;
  isLoading:boolean = false;
  constructor(private matDialog:MatDialog,private activated:ActivatedRoute, private activitySer:ActivityService,private snackBar:MatSnackBar){}

  ngOnInit(): void {
    this.activated.paramMap.subscribe((params:any)=>{
      this.activityId = params.get('id');
      console.log(this.activityId)
    })

    this.isLoading = true;
    this.getAllTasks();
  }


  getAllTasks(){
    this.activitySer.getTasksList(this.activityId).pipe(finalize(()=>{this.isLoading = false})).subscribe((res:any)=>{
      if(res){
        this.tasksList = res.data.tasks;
      }
    })
  }

  createTask(){
    this.matDialog.open(CreateTaskComponent,{
      data:{activityId:this.activityId}
    }).afterClosed().subscribe((res)=>{
      if(res){
        this.tasksList.push(res)
        this.snackBar.open("The task has been created successfully","ok");
      }
    })
  }

  deleteTask(e:any,id:any){
    e.stopPropagation();
    this.activitySer.deleteTask(id).subscribe((res)=>{
      if(res){
        const index = this.tasksList.findIndex((item:any) => item.id === id);
        if (index !== -1) {
          this.tasksList.splice(index, 1);
        }
        this.snackBar.open("The task has been deleted successfully","cancel");
      }
    })
  }

  updateTask(e:any,data:any){
    e.stopPropagation();
    this.matDialog.open(CreateTaskComponent,{
      data:{task:data,id:this.activityId}
    }).afterClosed().subscribe((res)=>{
      if(res && res.task){
        this.getAllTasks();
        this.snackBar.open("Task has been updated successfully","ok")
      }
    })
  }

}
