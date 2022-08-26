import { Component, OnInit } from '@angular/core';
import { ContactoAdmin } from 'src/app/models/admin/contacto-admin';
import { ContactoService } from 'src/app/services/admin/contacto.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-contacto-h',
  templateUrl: './contacto-h.component.html',
  styleUrls: ['./contacto-h.component.css']
})
export class ContactoHComponent implements OnInit {

 
  contacto: ContactoAdmin = new ContactoAdmin();
  returnUrl = '/admin';

  constructor(
    private contactoService: ContactoService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.contactoService.getContactos().subscribe(next => this.contacto);
    let id = +this.route.snapshot.paramMap.get('id');
    this.createOrLoadProduct(id); 
  }

  createOrLoadProduct(id:number) {
    if (id == -1) {
      // this.initProduct();
    } else {
      this.contactoService.getContacto(id).subscribe(
        next => this.contacto = next
      )
    }
  }

  initProduct() {
    this.contacto =  new ContactoAdmin({
      correo: 'https://URL-PREDETERMINADA'
    })
  }


  addContacto() {
    if (this.contacto.id) {
      this.contactoService.updateContacto(this.contacto.id,this.contacto).subscribe(
        next => this.contacto = next,
        () => null,
        () => this.dataSaved()
      )
    } else {
      this.contactoService.addContacto(this.contacto).subscribe(
        next => this.contacto = next,
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
