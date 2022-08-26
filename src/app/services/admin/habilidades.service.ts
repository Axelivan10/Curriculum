import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HabilidadesAdmin } from '../../models/admin/habilidades-admin';

const API_URL = 'http://localhost:3000/habilidades/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class HabilidadesService {
  constructor(private http: HttpClient) { }

  getHabilidades(): Observable<HabilidadesAdmin[]>{
    return this.http.get<HabilidadesAdmin[]>(API_URL);
  }

  getHabilidad(id:number): Observable<HabilidadesAdmin>{
    return this.http.get<HabilidadesAdmin>(`${API_URL}${id}`)
  }

  addHabilidad(entity:HabilidadesAdmin): Observable<any>{
    return this.http.post(API_URL, entity, httpOptions);
  }

  updateHabilidad(id:number,entity:HabilidadesAdmin): Observable<any>{
    return this.http.put(`${API_URL}${id}`, entity, httpOptions);
  }

  deleteHabilidad(id:number){
    return this.http.delete(`${API_URL}${id}`, httpOptions);
  }
}
