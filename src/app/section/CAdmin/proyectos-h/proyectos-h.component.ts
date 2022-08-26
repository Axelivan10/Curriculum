import { Component, OnInit } from '@angular/core';
import { ProyectosAdmin } from 'src/app/models/admin/proyectos-admin';
import { ProyectosService } from 'src/app/services/admin/proyectos.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-proyectos-h',
  templateUrl: './proyectos-h.component.html',
  styleUrls: ['./proyectos-h.component.css']
})
export class ProyectosHComponent implements OnInit {

  
  proyecto: ProyectosAdmin = new ProyectosAdmin();
  returnUrl = '/admin';

  constructor(
    private proyectosService: ProyectosService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.proyectosService.getProyectos().subscribe(next => this.proyecto);
    let id = +this.route.snapshot.paramMap.get('id');
    this.createOrLoadProduct(id); 
  }

  createOrLoadProduct(id:number) {
    if (id == -1) {
      // this.initProduct();
    } else {
      this.proyectosService.getProyecto(id).subscribe(
        next => this.proyecto = next
      )
    }
  }

  initProduct() {
    this.proyecto =  new ProyectosAdmin({
      titulo: 'https://URL-PREDETERMINADA'
    })
  }


  addProyecto() {
    if (this.proyecto.id) {
      this.proyectosService.updateProyecto(this.proyecto.id,this.proyecto).subscribe(
        next => this.proyecto = next,
        () => null,
        () => this.dataSaved()
      )
    } else {
      this.proyectosService.addProyecto(this.proyecto).subscribe(
        next => this.proyecto = next,
        () => null,
        () => this.dataSaved()
      )
    }
  }

  dataSaved() {
    this.goBack();
  }

  cancel() {
    this.goBack();
  }

  goBack() {
    this.location.back();
  }

}
