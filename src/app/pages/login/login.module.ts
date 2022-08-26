import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionModule } from 'src/app/section/section.module';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from "@angular/forms"

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    SectionModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ]
})
export class LoginModule { }
