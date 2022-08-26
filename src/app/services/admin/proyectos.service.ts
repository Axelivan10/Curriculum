import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProyectosAdmin } from '../../models/admin/proyectos-admin';

const API_URL = 'http://localhost:3000/proyectos/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  constructor(private http: HttpClient) { }

  getProyectos(): Observable<ProyectosAdmin[]>{
    return this.http.get<ProyectosAdmin[]>(API_URL);
  }

  getProyecto(id:number): Observable<ProyectosAdmin>{
    return this.http.get<ProyectosAdmin>(`${API_URL}${id}`)
  }

  addProyecto(entity:ProyectosAdmin): Observable<any>{
    return this.http.post(API_URL, entity, httpOptions);
  }

  updateProyecto(id:number,entity:ProyectosAdmin): Observable<any>{
    return this.http.put(`${API_URL}${id}`, entity, httpOptions);
  }

  deleteProyecto(id:number){
    return this.http.delete(`${API_URL}${id}`, httpOptions);
  }
}
