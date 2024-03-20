import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Token } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn:boolean = false;

  constructor(private http:HttpClient) { }

  login(body:any){
    return this.http.post(`${environment.apiUrl}/login`,body)
  }

  register(body:any){
    return this.http.post(`${environment.apiUrl}/register`,body)
  }

  logout(){
    const headers = new HttpHeaders()
    .set('Content-Type', 'application/json')
    .set('Authorization', `Bearer ${localStorage.getItem('token')}`);
    
    return this.http.get(`${environment.apiUrl}/logout`,{headers});
  }

  loggedIn(){
    this.isLoggedIn = true;
  }
  
  loggedOut(){
    this.isLoggedIn = true;
  }

  isAuthenticated(){
    return this.isLoggedIn;
  }
}
