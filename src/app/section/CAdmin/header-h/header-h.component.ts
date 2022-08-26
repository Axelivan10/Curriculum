import { Component, OnInit } from '@angular/core';
import { InicioAdmin } from 'src/app/models/admin/inicio-admin';
import { HeaderService } from 'src/app/services/admin/header.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { AdminModule } from 'src/app/pages/admin/admin.module';

@Component({
  selector: 'app-header-h',
  templateUrl: './header-h.component.html',
  styleUrls: ['./header-h.component.css']
})
export class HeaderHComponent implements OnInit {

  header: InicioAdmin = new InicioAdmin();
  returnUrl = '/admin';

  constructor(
    private headerService: HeaderService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.headerService.getHeaders().subscribe(next => this.header);
    let id = +this.route.snapshot.paramMap.get('id');
    this.createOrLoadProduct(id); 
  }

  createOrLoadProduct(id:number) {
    if (id == -1) {
    } else {
      this.headerService.getHeader(id).subscribe(
        next => this.header = next
      )
    }
  }


  addHeader() {
    if (this.header.id) {
      this.headerService.updateHeader(this.header.id,this.header).subscribe(
        next => this.header = next,
        () => null,
        () => this.dataSaved()
      )
    } else {
      this.headerService.addHeader(this.header).subscribe(
        next => this.header = next,
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
