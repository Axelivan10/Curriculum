import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SectionModule } from 'src/app/section/section.module';
import { CreateRoutingModule } from './create-routing.module';
import { CreateComponent } from './create.component';


@NgModule({
  declarations: [
    CreateComponent
  ],
  imports: [
    CommonModule,
    CreateRoutingModule,
    SectionModule
  ]
})
export class CreateModule { }
