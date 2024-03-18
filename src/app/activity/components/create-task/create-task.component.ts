import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ActivityService } from '../../services/activity.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent implements OnInit{

  taskFg!:FormGroup;
  activityId:any;

  constructor(private fb:FormBuilder,@Inject(MAT_DIALOG_DATA) public data:any,private activitySer:ActivityService,private matDialog:MatDialogRef<CreateTaskComponent> ){}

  ngOnInit(): void {
    console.log(this.activityId)
    this.taskFg = this.fb.group({
      title:new FormControl('',Validators.required),
      summary:new FormControl(''),
      description:new FormControl('',Validators.required)
    });  

    this.taskFg.patchValue(this.data.task);

  }

  createTask(){
    this.activitySer.createTask(this.data.activityId,this.taskFg.value).subscribe((res:any)=>{
      if(res){
        this.matDialog.close(res.task);
      }
    })
  };

  updateTask(){
    this.activitySer.updateTask(this.data.task.id,this.taskFg.value).subscribe((res)=>{
      if(res){
        this.matDialog.close('ok');
      }
    })
  };

  close(){
    this.matDialog.close();
  }
  
}
