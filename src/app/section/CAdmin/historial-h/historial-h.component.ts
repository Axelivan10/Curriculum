import { Component, OnInit } from '@angular/core';
import { HistorialAdmin } from 'src/app/models/admin/historial-admin';
import { HistorialService } from 'src/app/services/admin/historial.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-historial-h',
  templateUrl: './historial-h.component.html',
  styleUrls: ['./historial-h.component.css']
})
export class HistorialHComponent implements OnInit {

 
  historial: HistorialAdmin = new HistorialAdmin();
  returnUrl = '/admin';

  constructor(
    private historialService: HistorialService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.historialService.getHistoriales().subscribe(next => this.historial);
    let id = +this.route.snapshot.paramMap.get('id');
    this.createOrLoadProduct(id); 
  }

  createOrLoadProduct(id:number) {
    if (id == -1) {
      // this.initProduct();
    } else {
      this.historialService.getHistorial(id).subscribe(
        next => this.historial = next
      )
    }
  }

  initProduct() {
    this.historial =  new HistorialAdmin({
      titulo: 'https://URL-PREDETERMINADA'
    })
  }


  addHistorial() {
    if (this.historial.id) {
      this.historialService.updateHistorial(this.historial.id,this.historial).subscribe(
        next => this.historial = next,
        () => null,
        () => this.dataSaved()
      )
    } else {
      this.historialService.addHistorial(this.historial).subscribe(
        next => this.historial = next,
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
