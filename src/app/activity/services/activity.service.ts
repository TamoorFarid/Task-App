import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http:HttpClient) { }

  createActivity(data:any){
    return this.http.post(`${environment.apiUrl}/createActivity`,data);
  }

  getAllActivities(){
    return this.http.get(`${environment.apiUrl}/getAllActivities`);
  }

  createTask(id:any,body:any){
    return this.http.post(`${environment.apiUrl}/createTask/${id}`,body);
  }
  
  getTasksList(id:any){
    return this.http.get(`${environment.apiUrl}/getTasksList/${id}`);
  }

  deleteTask(id:any){
    return this.http.delete(`${environment.apiUrl}/deleteTask/${id}`);
  }

  deleteActivity(id:any){
    return this.http.delete(`${environment.apiUrl}/deleteActivity/${id}`);
  }

  updateTask(id:any,body:any){
    return this.http.put(`${environment.apiUrl}/updateTask/${id}`,body);
  }
  
  updateActivity(id:any,body:any){
    return this.http.put(`${environment.apiUrl}/editActivity/${id}`,body);
  }
}
