import { inject } from "@angular/core"
import { AuthService } from "./service/auth.service"
import { Router } from "@angular/router"
import { MatSnackBar } from "@angular/material/snack-bar"

export const canActivate = () =>{
    const authSer = inject(AuthService)
    const router = inject(Router)
    const snackBar = inject(MatSnackBar)

    if(localStorage.getItem('token')){
        return true;
    }else{
        router.navigate(['/auth/login']);
        snackBar.open("Please log in to continue", "ok")
        return false;
    }
}