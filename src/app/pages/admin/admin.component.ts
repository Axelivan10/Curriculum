import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  IsAuthenticated = false;

  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  logout(){
    sessionStorage.clear();
    this.router.navigate(['/login'])
  }
}
