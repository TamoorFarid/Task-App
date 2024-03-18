import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivityService } from '../../services/activity.service';

@Component({
  selector: 'app-create-activity',
  templateUrl: './create-activity.component.html',
  styleUrls: ['./create-activity.component.scss']
})
export class CreateActivityComponent implements OnInit{
  activityFg!:FormGroup;
  type!:string;
  constructor(private matDialog:MatDialogRef<CreateActivityComponent>,private fb:FormBuilder,private activitySer:ActivityService,@Inject(MAT_DIALOG_DATA) public data:any){}
 
  ngOnInit(): void {
    this.activityFg = this.fb.group({
      activityName:new FormControl('',Validators.required)
    })

    if(this.data){
      this.activityFg.patchValue(this.data.activity);
    }
  }


  createActivity(){
    this.activitySer.createActivity(this.activityFg.value).subscribe((res:any)=>{
      if(res){
        this.matDialog.close(res.activity)
      }
    })
  }

  updateActivity(){
    this.activitySer.updateActivity(this.data.activity.id,this.activityFg.value).subscribe((res)=>{
      if(res){
        this.matDialog.close('closed')
      }
    })
  }

  close(){
    this.matDialog.close();
  }
}
