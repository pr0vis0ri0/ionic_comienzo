import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginPage } from "./login.page";
// Las importaciones se realizan más rápida si buscas una librería y
// si la otra pertenece al mismo grupo sólo lo añades

const routes: Routes = [
    { path: '', component: LoginPage}
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})

export class LoginPageRoutingModule {}
