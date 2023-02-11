import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  create(data: any) {
    return this.http.post(`${environment.baseUrl}users`, data);
  }
  login(data:any) {
    return this.http.post(`${environment.baseUrl}users/login`, data);
  }
}
