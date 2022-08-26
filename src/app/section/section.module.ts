import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './CHome/footer/footer.component';
import { HeaderComponent } from './CHome/header/header.component';
import { HabilidadesComponent } from './CHome/habilidades/habilidades.component';
import { HistorialComponent } from './CHome/historial/historial.component';
import { ProyectosComponent } from './CHome/proyectos/proyectos.component';
import { ContactoComponent } from './CHome/contacto/contacto.component';
import { HeaderHComponent } from './CAdmin/header-h/header-h.component';
import { ContactoHComponent } from './CAdmin/contacto-h/contacto-h.component';
import { FooterHComponent } from './CAdmin/footer-h/footer-h.component';
import { HabilidadesHComponent } from './CAdmin/habilidades-h/habilidades-h.component';
import { HistorialHComponent } from './CAdmin/historial-h/historial-h.component';
import { ProyectosHComponent } from './CAdmin/proyectos-h/proyectos-h.component';
import { ListarHeaderComponent } from './CAdmin/listar-header/listar-h.component';
import { ListarContactoComponent } from './CAdmin/listar-contacto/crear-h.component';
import { ListarFooterComponent } from './CAdmin/listar-footer/listar-footer.component';
import { ListarHabilidadesComponent } from './CAdmin/listar-habilidades/listar-habilidades.component';
import { ListarHistorialComponent } from './CAdmin/listar-historial/listar-historial.component';
import { ListarProyectosComponent } from './CAdmin/listar-proyectos/listar-proyectos.component';





@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    HabilidadesComponent,
    HistorialComponent,
    ProyectosComponent,
    ContactoComponent,
    HeaderHComponent,
    ContactoHComponent,
    FooterHComponent,
    HabilidadesHComponent,
    HistorialHComponent,
    ProyectosHComponent,
    ListarHeaderComponent,
    ListarContactoComponent,
    ListarFooterComponent,
    ListarHabilidadesComponent,
    ListarHistorialComponent,
    ListarProyectosComponent,
    


  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    FooterComponent,
    HeaderComponent,
    HabilidadesComponent,
    HistorialComponent,
    ProyectosComponent,
    ContactoComponent,
    FormsModule,
    RouterModule
  ]
})
export class SectionModule { }
