import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, tap, throwError } from 'rxjs';
import { AppUser } from '../models/login/app-user';
import { AppUserAuth } from '../models/login/app-user-auth';
import UIkit from 'uikit';


const API_URL = 'http://localhost:3000/'
const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  securityObject: AppUserAuth = new AppUserAuth();
  

  constructor(private http: HttpClient) {
    let variable;
   }

  resetSecuriryObject(){
    this.securityObject.username = '';
    this.securityObject.token = '';
    this.securityObject.isAuthenticated = false;
    
  }

  login(entity:AppUser){

    this.resetSecuriryObject();
    console.log("hola")
    return this.http.post(`${API_URL}login`,entity,httpOptions)
    .pipe(
      tap((resp: AppUserAuth)=>{
        Object.assign(this.securityObject, resp);
        sessionStorage.setItem('token',this.securityObject.token);
      }),
      catchError(this.handleError)
      
    )
  }

  logout(){
    this.resetSecuriryObject();
    sessionStorage.removeItem('token');
  }

  handleError(err){
    let modal = UIkit.modal('#modal-center',);
        modal.show();
    return throwError(err.error.ok);
  }
}
