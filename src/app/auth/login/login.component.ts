import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginFg!:FormGroup;

  constructor(private fb:FormBuilder,private authSer:AuthService,private snackBar:MatSnackBar,private router:Router){}

  ngOnInit(): void {
    this.loginFg = this.fb.group({
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
    });
  }

  login(){
    this.authSer.login(this.loginFg.value).subscribe((res:any)=>{
      if(res){
        this.authSer.loggedIn();
        this.loginFg.reset();
        localStorage.setItem('token',res.token)
        this.snackBar.open(res.message,"ok");
        this.router.navigate(['/']);
      }
    })
  }

}
