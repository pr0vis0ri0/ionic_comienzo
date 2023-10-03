import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Producto } from 'src/model/producto';
import { LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductoService } from '../producto.service';

@Component({
  selector: 'app-producto.add',
  templateUrl: './producto.add.page.html',
  styleUrls: ['./producto.add.page.scss'],
})
export class ProductoAddPage implements OnInit {
  // El ! sirve para dar a entender que la variable no está inicializada, más cuando se ejecute no será null.
  productForm! : FormGroup;
  // ¿Por qué con una clase ahora en vez de una interface?
  producto : Producto = {
    id : 7,
    nombre : 'Prod. de Prueba',
    descripcion : 'Una prueba.',
    precio : 50000,
    cantidad : 1,
    fecha : new Date()
  }

  // Aparentemente FormBuilder te permite manejar validaciones.
  constructor(private formBuilder : FormBuilder, 
              private loadingController : LoadingController,
              private restApi : ProductoService,
              private router : Router) { }

  ngOnInit() {
    this.productForm = this.formBuilder.group({
      "prod_name" : [null, Validators.required],
      "prod_desc" : [null, Validators.required],
      "prod_price" : [null, Validators.required],
      "prod_cantidad" : [null, Validators.required]
    })
  }

  async onFormSubmit(form : NgForm) {
    console.log("Lanzaste el submit del agregar producto.")
    const loading = await this.loadingController.create({
      message : 'Creando registro ...'
    })
    await loading.present()
    
    await this.restApi.addProduct(this.producto).subscribe({
      next: (res) => {
        console.log("Next AddProducto Page ", res)
        loading.dismiss()
        if (res === null) {
          console.log("Next no agregó, res null.")
          return
        }
        console.log("Sí agregó, saltaré por el router." , this.router)
        this.router.navigate(['/producto/list'])
      },
      complete : () => {},
      error : (err) => {
        console.log("Error AddProducto Page ", err)
        loading.dismiss()
      }
    })
    console.log("Después del subscribe empieza esto.")
    await new Promise ( resolve => setTimeout(resolve, 10000))
    loading.dismiss()
  }  
}
