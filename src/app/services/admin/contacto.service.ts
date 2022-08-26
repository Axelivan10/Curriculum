import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContactoAdmin } from '../../models/admin/contacto-admin';

const API_URL = 'http://localhost:3000/contacto/';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ContactoService {

  constructor(private http: HttpClient) { }

  getContactos(): Observable<ContactoAdmin[]>{
    return this.http.get<ContactoAdmin[]>(API_URL);
  }

  getContacto(id:number): Observable<ContactoAdmin>{
    return this.http.get<ContactoAdmin>(`${API_URL}${id}`)
  }

  addContacto(entity:ContactoAdmin): Observable<any>{
    return this.http.post(API_URL, entity, httpOptions);
  }

  updateContacto(id:number,entity:ContactoAdmin): Observable<any>{
    return this.http.put(`${API_URL}${id}`, entity, httpOptions);
  }

  deleteContacto(id:number){
    return this.http.delete(`${API_URL}${id}`, httpOptions);
  }
}
