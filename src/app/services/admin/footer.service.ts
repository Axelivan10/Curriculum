import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FooterAdmin } from '../../models/admin/footer-admin';

const API_URL = 'http://localhost:3000/footer/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  
  constructor(private http: HttpClient) { }

  getFooters(): Observable<FooterAdmin[]>{
    return this.http.get<FooterAdmin[]>(API_URL);
  }

  getFooter(id:number): Observable<FooterAdmin>{
    return this.http.get<FooterAdmin>(`${API_URL}${id}`)
  }

  addFooter(entity:FooterAdmin): Observable<any>{
    return this.http.post(API_URL, entity, httpOptions);
  }

  updateFooter(id:number,entity:FooterAdmin): Observable<any>{
    return this.http.put(`${API_URL}${id}`, entity, httpOptions);
  }

  deleteFooter(id:number){
    return this.http.delete(`${API_URL}${id}`, httpOptions);
  }
}
