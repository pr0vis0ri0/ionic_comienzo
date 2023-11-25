import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html', 
    styleUrls: ['./login.page.scss'],
})
export class LoginPage {
    iCorreo : string = "";
    iPassword : string = "";

    constructor(public restApi : LoginService,
        public loadingController : LoadingController,
        public router : Router) { }
    
    ngOnInit() { }
    
    async loginUser() {
        console.log("Entrando :loginUser")
        const loading = await this.loadingController.create({
            message : 'Iniciando sesión...'
        })
        await loading.present()
        await this.restApi.iniciarSesion({
                username: this.iCorreo, 
                password: this.iPassword
            })
            .subscribe({
                next : (res : any) => {
                    if (res.hasOwnProperty('status')) {
                        loading.message = "Credenciales incorrectas."
                        loading.dismiss()
                    } else if (res.hasOwnProperty('access') && res.hasOwnProperty('refresh')) {
                        localStorage.setItem('token', res.access)
                        loading.message = "Credenciales correctas."
                        loading.dismiss()
                        this.router.navigate(['/PagInicio'])
                    }
                },
                complete : () => {

                },
                error : (err) => {
                    console.log("Error : ", err)
                    loading.dismiss()
                }
            })
    }
    goToSignup() {
        this.router.navigate(['/registro']);
    }
    goToResetPassword() {

    }
}