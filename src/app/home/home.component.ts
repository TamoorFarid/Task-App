import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/service/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent{
  
  constructor(private authSer:AuthService,private snackBar:MatSnackBar,private router:Router){}

  logout(){
    this.authSer.logout().subscribe((res:any)=>{
      if(res){
        this.authSer.loggedOut();
        localStorage.removeItem('token')
        this.snackBar.open(res.message,'ok');
        this.router.navigate(['/auth/login']);
      }
    })
  }

}
