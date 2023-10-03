import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/model/producto';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto.list',
  templateUrl: './producto.list.page.html',
  styleUrls: ['./producto.list.page.scss'],
})
export class ProductoListPage implements OnInit {

  constructor(public restApi : ProductoService,
              public loadingController : LoadingController,
              public router : Router) { }

  productos : Producto[] = []

  ngOnInit() {
    this.getProducts();
  }

  async getProducts () {
    console.log("Entrando :getProducts")
    const loading = await this.loadingController.create({
      message : 'Buscando productos...'
    })
    await loading.present()
    await this.restApi.getProducts()
      .subscribe({
        next : (res) => {
          this.productos = res;
          loading.dismiss()
        },
        complete : () => {},
        error : (err) => {
          console.log("Error : ", err)
          loading.dismiss()
        }
      })
  }


}
