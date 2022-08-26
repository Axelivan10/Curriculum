import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InicioAdmin } from '../../models/admin/inicio-admin';

const API_URL = 'http://localhost:3000/inicio/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private http: HttpClient) { }

  getHeaders(): Observable<InicioAdmin[]>{
    return this.http.get<InicioAdmin[]>(API_URL);
  }

  getHeader(id:number): Observable<InicioAdmin>{
    return this.http.get<InicioAdmin>(`${API_URL}${id}`)
  }

  addHeader(entity:InicioAdmin): Observable<any>{
    return this.http.post(API_URL, entity, httpOptions);
  }

  updateHeader(id:number,entity:InicioAdmin): Observable<any>{
    return this.http.put(`${API_URL}${id}`, entity, httpOptions);
  }

  deleteHeader(id:number){
    return this.http.delete(`${API_URL}${id}`, httpOptions);
  }
}