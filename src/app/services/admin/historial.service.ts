import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HistorialAdmin } from '../../models/admin/historial-admin';


const API_URL = 'http://localhost:3000/historial/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class HistorialService {
  constructor(private http: HttpClient) { }

  getHistoriales(): Observable<HistorialAdmin[]>{
    return this.http.get<HistorialAdmin[]>(API_URL);
  }

  getHistorial(id:number): Observable<HistorialAdmin>{
    return this.http.get<HistorialAdmin>(`${API_URL}${id}`)
  }

  addHistorial(entity:HistorialAdmin): Observable<any>{
    return this.http.post(API_URL, entity, httpOptions);
  }

  updateHistorial(id:number,entity:HistorialAdmin): Observable<any>{
    return this.http.put(`${API_URL}${id}`, entity, httpOptions);
  }

  deleteHistorial(id:number){
    return this.http.delete(`${API_URL}${id}`, httpOptions);
  }
}
