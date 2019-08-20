import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Register } from './data/IRegister';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private headers = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }
  
 doRegistration(register: Register): Observable<any[]>{
   //doing the registration part of the customer
   return this.http.post<any[]>('http://52.20.113.182:8080/Signup', register, { headers: this.headers});
 }
}
