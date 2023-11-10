import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../interfaces/interface';
import { RegistroService } from '../services/register.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  constructor(public router : Router, public restApi: RegistroService, public loadingControler : LoadingController) { }
  ngOnInit() {}

  regNombre: string = "";
  regApellido: string = "";
  regCorreo: string = "";
  regPassword: string = "";
  regCheckPassword: string = "";

  goToLogin() {
    this.router.navigate(['/login']);
  }

  async registerUser() {
    const loading = await this.loadingControler.create({
      message: 'Registrando usuario...'
    })
    await loading.present()
    await this.restApi.registrarUsuario({
      username: this.regCorreo,
      password: this.regPassword,
      email: this.regCorreo,
      first_name: this.regNombre,
      last_name: this.regApellido
    })
      .subscribe({
        next: (res) => {
          console.log(res)
          loading.message = "Usuario registrado"
          loading.dismiss()
          this.regNombre = ""
          this.regApellido = ""
          this.regCorreo = ""
          this.regPassword = ""
          this.regCheckPassword = ""
          this.router.navigate(['/login']);
        },
        complete: () => { },
        error: (err) => {
          console.log("Error : ", err)
          loading.dismiss()
        }
      })
  }

}
