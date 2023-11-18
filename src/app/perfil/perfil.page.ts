import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { JwtPayload } from '../interfaces/interface';
import { PerfilService } from '../services/perfil.service';
import { jwtDecode } from 'jwt-decode';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  p : any = {
    id_usuario : 0,
    primer_nombre : '',
    segundo_nombre : '',
    apellido_paterno : '',
    apellido_materno : '',
    email : '',
    rut : '',
    fecha_nacimiento : ''
  }

  constructor(
    public api : PerfilService,
    public loading : LoadingController,
    public router : Router
  ) { }

  ngOnInit() {
    this.checkToken()
    this.devolverDatosUsuario()
  }

  checkToken() {
    const token = localStorage.getItem('token')
    if (token == null) {
      this.router.navigate(['/login']);
    }
  }

  devolverToken() : string | null {
    return localStorage.getItem('token');
  }

  idUsuarioDecode() : any {
    const token = this.devolverToken();
    let id_user : number | null;
    const decoded = jwtDecode<JwtPayload>(token as string);
    id_user = decoded.id_usuario as number;
    return id_user
  }

  async devolverDatosUsuario() {
    const loading = await this.loading.create({
      message: 'Buscando información de la propiedad seleccionada...'
    })
    await loading.present()
    await this.api.dtlPerfilUser(this.idUsuarioDecode(), localStorage.getItem('token') as string)
      .subscribe({
        next : (d) => {
          this.p = d;
          console.log(d)
        },
        error : (e) => {
          console.log(e)
        },
        complete : () => {
          loading.message = 'Información encontrada.'
          loading.dismiss()
        }
      })
  }

}
