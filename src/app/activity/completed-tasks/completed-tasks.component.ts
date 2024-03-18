import { Component, OnInit } from '@angular/core';
import { ActivityService } from '../services/activity.service';
import { finalize } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-completed-tasks',
  templateUrl: './completed-tasks.component.html',
  styleUrls: ['./completed-tasks.component.scss']
})
export class CompletedTasksComponent implements OnInit{
  tasksList:any;
  isLoading:boolean = false;

  constructor(private activitySer:ActivityService,private snackbar:MatSnackBar){}

  ngOnInit(): void {
    this.isLoading = true;
    this.getCompleteTasks();
  }

  getCompleteTasks(){
    this.activitySer.getCompletedTasks().pipe(finalize(()=>{this.isLoading = false})).subscribe((res:any)=>{
      if(res){
        this.tasksList = res.data.tasks;
      }
  })
  }

  removeTask(id:any){
    this.activitySer.deleteTask(id).subscribe((res)=>{
      if(res){
        let index = this.tasksList.findIndex((item:any)=>item.id == id);
        if(index !== -1){
          this.tasksList.splice(index,1);
        }
        this.snackbar.open("The task has been removed successfully","ok")
      }
    })
  }

  
}
