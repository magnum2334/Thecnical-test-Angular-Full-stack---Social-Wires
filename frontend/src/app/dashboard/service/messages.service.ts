import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  constructor(private http: HttpClient) { }
  create(data: any) {
    return this.http.post(`${environment.baseUrl}publications`, data);
  }

  allPublicationUser(user: any) {
    return this.http.post(`${environment.baseUrl}users/allPublicationUser`, user);
  }
  allPublication() {
    return this.http.get(`${environment.baseUrl}publications/allPublication` );
  }
  FilterPublication(data: any) {
    return this.http.post(`${environment.baseUrl}publications/FilterPublication`, data );
  }
  userFilterPublication(data: any) {
    return this.http.post(`${environment.baseUrl}publications/userFilterPublication`, data );
  }

}
