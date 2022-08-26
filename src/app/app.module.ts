import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SectionModule } from './section/section.module';
import { HttpInterceptorModule } from './services/interceptor.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SectionModule,
    HttpClientModule,
    HttpInterceptorModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
