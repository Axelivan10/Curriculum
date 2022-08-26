import { Component, OnInit } from '@angular/core';
import { FooterAdmin } from 'src/app/models/admin/footer-admin';
import { FooterService } from 'src/app/services/admin/footer.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-footer-h',
  templateUrl: './footer-h.component.html',
  styleUrls: ['./footer-h.component.css']
})
export class FooterHComponent implements OnInit {

  footer: FooterAdmin = new FooterAdmin();
  returnUrl = '/admin';

  constructor(
    private footerService: FooterService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  ngOnInit() {
    this.footerService.getFooters().subscribe(next => this.footer);
    let id = +this.route.snapshot.paramMap.get('id');
    this.createOrLoadProduct(id); 
  }

  createOrLoadProduct(id:number) {
    if (id == -1) {
      // this.initProduct();
    } else {
      this.footerService.getFooter(id).subscribe(
        next => this.footer = next
      )
    }
  }

  initProduct() {
    this.footer =  new FooterAdmin({
      url_imagen: 'https://URL-PREDETERMINADA'
    })
  }


  addFooter() {
    if (this.footer.id) {
      this.footerService.updateFooter(this.footer.id,this.footer).subscribe(
        next => this.footer = next,
        () => null,
        () => this.dataSaved()
      )
    } else {
      this.footerService.addFooter(this.footer).subscribe(
        next => this.footer = next,
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
