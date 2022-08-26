import { Component, OnInit } from '@angular/core';
import { HabilidadesAdmin } from 'src/app/models/admin/habilidades-admin';
import { HabilidadesService } from 'src/app/services/admin/habilidades.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-habilidades-h',
  templateUrl: './habilidades-h.component.html',
  styleUrls: ['./habilidades-h.component.css']
})
export class HabilidadesHComponent implements OnInit {

  habilidades: HabilidadesAdmin = new HabilidadesAdmin();
  returnUrl = '/admin';

  constructor(
    private habilidadesService: HabilidadesService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.habilidadesService.getHabilidades().subscribe(next => this.habilidades);
    let id = +this.route.snapshot.paramMap.get('id');
    this.createOrLoadProduct(id); 
  }

  createOrLoadProduct(id:number) {
    if (id == -1) {
      // this.initProduct();
    } else {
      this.habilidadesService.getHabilidad(id).subscribe(
        next => this.habilidades = next
      )
    }
  }

  initProduct() {
    this.habilidades =  new HabilidadesAdmin({
      url_imagen: 'https://URL-PREDETERMINADA'
    })
  }


  addHabilidad() {
    if (this.habilidades.id) {
      this.habilidadesService.updateHabilidad(this.habilidades.id,this.habilidades).subscribe(
        next => this.habilidades = next,
        () => null,
        () => this.dataSaved()
      )
    } else {
      this.habilidadesService.addHabilidad(this.habilidades).subscribe(
        next => this.habilidades = next,
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
