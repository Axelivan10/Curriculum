import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
   public url : String

   constructor( public httpClient: HttpClient) {

     this.url = environment.apiUrl;
    }

    getToken(){
      if( sessionStorage.getItem('token')) {return true;}
      else {return false;}
    }

    async signup( data : any ){
     const query = this.httpClient.post(this.url + '/login', data).toPromise();
     console.log(data)
     return query;
    }


    checkAuth(){
     return false;
    }


}
