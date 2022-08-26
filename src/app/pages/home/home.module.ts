import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionModule } from 'src/app/section/section.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SectionModule,
  ]
})
export class HomeModule { }
