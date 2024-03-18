import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateActivityComponent } from '../components/create-activity/create-activity.component';
import { ActivityService } from '../services/activity.service';
import { finalize } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.scss']
})
export class ActivityListComponent implements OnInit{
  activityList:any;
  isLoading:boolean = false;
  constructor(private matDialog:MatDialog,private activitySer:ActivityService,private snackBar:MatSnackBar){}
  
  ngOnInit(): void {
    this.isLoading = true;
    this.getActivities();
  }

  getActivities(){
    this.activitySer.getAllActivities().pipe(finalize(()=>{this.isLoading = false})).subscribe((res:any)=>{
      if(res){
        this.activityList = res.data.activities;
      }
    })
  }

  createActivity(){
    this.matDialog.open(CreateActivityComponent,{
      width:'400px',
      disableClose:true,
    }).afterClosed().subscribe((res)=>{
      if(res){
        this.activityList.push(res)
      this.snackBar.open("Activity has been created successfully","ok");
      }
    })
  }


  deleteActivity(e:any,id:any){
    e.stopPropagation();
    this.activitySer.deleteActivity(id).subscribe((res)=>{
      if(res){
        const index = this.activityList.findIndex((item:any) => item.id === id);
        if (index !== -1) {
          this.activityList.splice(index, 1);
        }
        this.snackBar.open("The activity has been deleted successfully","cancel");
      }
    })
  }

  editActivity(event:any,data:any){
    event.stopPropagation();
    this.matDialog.open(CreateActivityComponent,{
      width:'400px',
      disableClose:true,
      data:{activity:data,title:'editActivity'}
    }).afterClosed().subscribe((res)=>{
      if(res){
        this.getActivities();
        this.snackBar.open("Activity has been updated successfully","ok")
      }
    })
  }
}
