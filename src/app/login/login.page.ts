import { Component } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html', 
    styleUrls: ['./login.page.scss'],
})
export class LoginPage {
    txEmail: string = ""
    txPassword: string = ""
    constructor() { }
    loginUser() { }
    goToSignup() { }
    goToResetPassword() { }
}