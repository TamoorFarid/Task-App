import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  signupFg!:FormGroup;
  constructor(private fb:FormBuilder,private authSer:AuthService,private snackbar:MatSnackBar,private router:Router){}

  ngOnInit(): void {
    this.signupFg = this.fb.group({
      name: new FormControl('',Validators.required),
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
      password_confirmation: new FormControl('',[Validators.required]),
    });
  }

  register(){
    if(!this.signupFg.valid){
      return
    }else{
      this.authSer.register(this.signupFg.value).subscribe((res:any)=>{
        if(res){
          this.signupFg.reset();
          this.snackbar.open(res.message,"ok");
          this.router.navigate(['/auth/login']);
          console.log(res)
        }
      })
    }
  }
  
}
