import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private http: HttpClient) { }
  
  getActivity(): Observable<any[]>{
    //Getting data of inactive customers from database
    return this.http.get<any[]>("http://52.20.113.182:8080/Activity");
  }
 }
