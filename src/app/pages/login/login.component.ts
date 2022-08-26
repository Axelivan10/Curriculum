import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { AppUser } from '../../models/login/app-user';
import { AppUserAuth } from '../../models/login/app-user-auth';
import { LoginService } from '../../services/login.service';
import UIkit from 'uikit';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{


  user: AppUser = new AppUser();
  securityObject: AppUserAuth = null;
  returnUrl = '/admin';
  errorMessage = '';
  variable = 0;

  constructor(
    private service: LoginService,
    private router: Router,
  ) {}


  ngOnInit(): void {}

  login(){
    //throw this.errorMessage = 'axel';
    this.service.login(this.user).subscribe(
        resp =>{
        this.securityObject = resp;
        this.router.navigateByUrl(this.returnUrl);
      }
    )

  }
  
  
}

        // let modal = UIkit.modal('#modal-center',);
        // modal.show();






/*
export class LoginComponent implements OnInit {

  formLogin: FormGroup;
  subRef$: Subscription; 

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
  ) {
    this.formLogin = formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
   }
   
  ngOnInit(): void {
  }

  Login(){
    const usernameLogin: ILogin = {
      username: this.formLogin.value.username,
      password: this.formLogin.value.password,
    };

    this.subRef$ = this.http.post<IResponse>('http://localhost:3000/login',
      usernameLogin,{ observe: 'response' })
      .subscribe(res => {
        const token = res.body;
        //console.log('token', token);
        //console.log('body', token);

        sessionStorage.setItem('token',JSON.stringify(token));
        this.router.navigate(['/admin']);


       }, err => { console.log('Error en el login', err);  
        let modal = UIkit.modal('#modal-center',);
        modal.show();
    });

  }

  ngOnDestroy() {
    if (this.subRef$){
      this.subRef$.unsubscribe();
    }
  }

}*/
