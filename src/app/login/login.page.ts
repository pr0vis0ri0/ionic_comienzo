import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../interfaces/user';
import { LoginService } from './login.service';

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
        await this.restApi.iniciarSesion({username: this.iCorreo, password: this.iPassword})
            .subscribe({
                next : (res) => {
                    loading.message = "Sesión iniciada"
                    loading.dismiss()
                    // this.router.navigate(['/producto/list']);
                },
                complete : () => {},
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